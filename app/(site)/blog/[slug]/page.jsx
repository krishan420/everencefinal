import { notFound } from "next/navigation";
import BlogDetail from "@/components/Blogs/BlogDetail";
import { getBlogSeo } from "@/lib/blogSeoUtils";

const WORDPRESS_API =
  "https://blog.everence.io/wp-json/wp/v2";

const SITE_URL =
  "https://everence.io";

export const revalidate = 3600;

/* =========================================================
   HELPERS
========================================================= */

/**
 * Remove HTML and decode common WordPress entities.
 */
function stripHtml(value = "") {
  return String(value)
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#039;/gi, "'")
    .replace(/&#39;/gi, "'")
    .replace(/&#8217;/gi, "'")
    .replace(/&#8216;/gi, "'")
    .replace(/&#8220;/gi, '"')
    .replace(/&#8221;/gi, '"')
    .replace(/&#038;/gi, "&")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Get featured image from WordPress.
 */
function getFeaturedImage(post) {
  const media =
    post?._embedded?.["wp:featuredmedia"]?.[0];

  return {
    url:
      media?.source_url ||
      null,

    alt:
      media?.alt_text ||
      stripHtml(
        post?.title?.rendered || ""
      ) ||
      "Everence Blog",

    width:
      media?.media_details?.width ||
      null,

    height:
      media?.media_details?.height ||
      null,
  };
}

/**
 * Get WordPress author.
 */
function getAuthor(post) {
  return (
    post?._embedded?.author?.[0]?.name ||
    "Everence"
  );
}

/**
 * Get WordPress categories.
 */
function getCategories(post) {
  const terms =
    post?._embedded?.["wp:term"] || [];

  return terms
    .flat()
    .filter(
      (term) =>
        term?.taxonomy === "category"
    );
}

/**
 * Get Yoast SEO data.
 */
function getYoastData(post) {
  return post?.yoast_head_json || null;
}

/**
 * Convert keywords into an array.
 */
function normalizeKeywords(keywords) {
  if (Array.isArray(keywords)) {
    return keywords
      .map((keyword) => String(keyword).trim())
      .filter(Boolean);
  }

  if (typeof keywords === "string") {
    return keywords
      .split(",")
      .map((keyword) => keyword.trim())
      .filter(Boolean);
  }

  return [];
}

/* =========================================================
   GET BLOG FROM WORDPRESS
========================================================= */

async function getBlog(slug) {
  try {
    if (!slug || typeof slug !== "string") {
      return null;
    }

    const cleanSlug = slug
      .trim()
      .replace(/-+$/, "");

    if (!cleanSlug) {
      return null;
    }

    const url =
      `${WORDPRESS_API}/posts` +
      `?slug=${encodeURIComponent(cleanSlug)}` +
      `&status=publish` +
      `&_embed`;

    const response = await fetch(url, {
      next: {
        revalidate: 3600,
        tags: [`blog-${cleanSlug}`],
      },

      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      console.error(
        `WordPress API Error: ${response.status}`
      );

      return null;
    }

    const posts =
      await response.json();

    if (
      !Array.isArray(posts) ||
      posts.length === 0
    ) {
      return null;
    }

    const post = posts[0];

    if (
      !post ||
      post.status !== "publish"
    ) {
      return null;
    }

    /* -----------------------------------------
       BASIC DATA
    ----------------------------------------- */

    const title =
      stripHtml(
        post?.title?.rendered || ""
      );

    const description =
      stripHtml(
        post?.excerpt?.rendered || ""
      );

    const content =
      post?.content?.rendered || "";

    const postSlug =
      post?.slug || cleanSlug;

    /* -----------------------------------------
       IMAGE
    ----------------------------------------- */

    const featuredImage =
      getFeaturedImage(post);

    /* -----------------------------------------
       AUTHOR
    ----------------------------------------- */

    const author =
      getAuthor(post);

    /* -----------------------------------------
       CATEGORY
    ----------------------------------------- */

    const categories =
      getCategories(post);

    const category =
      categories[0]?.name ||
      "Insights";

    /* -----------------------------------------
       YOAST
    ----------------------------------------- */

    const yoast =
      getYoastData(post);

    const yoastTitle =
      stripHtml(
        yoast?.title || ""
      );

    const yoastDescription =
      stripHtml(
        yoast?.description || ""
      );

    const yoastKeywords =
      normalizeKeywords(
        yoast?.keywords || ""
      );

    /* -----------------------------------------
       SEO IMAGE
    ----------------------------------------- */

    const yoastImage =
      yoast?.og_image?.[0]?.url ||
      null;

    const finalImage =
      featuredImage.url ||
      yoastImage ||
      null;

    /* -----------------------------------------
       CUSTOM BLOG SEO
    ----------------------------------------- */

    const customSeo =
      getBlogSeo(postSlug);

    const customKeywords =
      normalizeKeywords(
        customSeo?.keywords
      );

    /* -----------------------------------------
       FINAL SEO VALUES
       
       Priority:
       1. blogs-seo.json
       2. WordPress Yoast
       3. WordPress content
    ----------------------------------------- */

    const finalMetaTitle =
      customSeo?.metaTitle ||
      yoastTitle ||
      title ||
      "Everence Blog";

    const finalMetaDescription =
      customSeo?.metaDescription ||
      yoastDescription ||
      description ||
      `Read ${title} on Everence.`;

    const finalKeywords =
      customKeywords.length > 0
        ? customKeywords
        : yoastKeywords;

    const finalCanonical =
      customSeo?.canonicalTag ||
      `${SITE_URL}/blog/${postSlug}`;

    /* -----------------------------------------
       RETURN NORMALIZED DATA
    ----------------------------------------- */

    return {
      id: post.id,

      title,

      slug: postSlug,

      content,

      description,

      excerpt:
        post?.excerpt?.rendered ||
        "",

      image:
        finalImage,

      image_alt:
        featuredImage.alt ||
        title ||
        "Everence Blog",

      author,

      category,

      categories,

      date:
        post?.date ||
        null,

      modified:
        post?.modified ||
        null,

      link:
        `${SITE_URL}/blog/${postSlug}`,

      /* -----------------------------------------
         SEO
      ----------------------------------------- */

      meta_title:
        finalMetaTitle,

      meta_description:
        finalMetaDescription,

      keywords:
        finalKeywords,

      canonical:
        finalCanonical,

      seo:
        customSeo,

      /* -----------------------------------------
         ORIGINAL WORDPRESS OBJECT
      ----------------------------------------- */

      wordpress:
        post,
    };

  } catch (error) {
    console.error(
      "Failed to fetch WordPress blog:",
      error
    );

    return null;
  }
}

/* =========================================================
   DYNAMIC METADATA
========================================================= */

export async function generateMetadata({
  params,
}) {
  const { slug } =
    await params;

  const post =
    await getBlog(slug);

  /* -----------------------------------------
     BLOG NOT FOUND
  ----------------------------------------- */

  if (!post) {
    return {
      title:
        "Blog Not Found | Everence",

      description:
        "The requested Everence blog could not be found.",

      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title =
    post.meta_title ||
    post.title ||
    "Everence Blog";

  const description =
    post.meta_description ||
    post.description ||
    `Read ${post.title} on Everence.`;

  const canonical =
    post.canonical ||
    `${SITE_URL}/blog/${post.slug}`;

  const keywords =
    normalizeKeywords(
      post.keywords
    );

  const metadata = {
    /* =====================================
       BASIC SEO
    ===================================== */

    title,

    description,

    keywords,

    /* =====================================
       CANONICAL
    ===================================== */

    alternates: {
      canonical,
    },

    /* =====================================
       ROBOTS
    ===================================== */

    robots: {
      index: true,
      follow: true,

      "max-image-preview":
        "large",

      "max-snippet":
        -1,

      "max-video-preview":
        -1,
    },

    /* =====================================
       OPEN GRAPH
    ===================================== */

    openGraph: {
      title,

      description,

      url: canonical,

      siteName:
        "Everence",

      type: "article",

      locale: "en_IN",

      publishedTime:
        post.date ||
        undefined,

      modifiedTime:
        post.modified ||
        undefined,

      authors:
        post.author
          ? [post.author]
          : undefined,

      images: post.image
        ? [
            {
              url:
                post.image,

              alt:
                post.image_alt ||
                title,

              width:
                1200,

              height:
                630,
            },
          ]
        : [],
    },

    /* =====================================
       TWITTER
    ===================================== */

    twitter: {
      card:
        "summary_large_image",

      title,

      description,

      images:
        post.image
          ? [post.image]
          : [],
    },

    /* =====================================
       OTHER
    ===================================== */

    authors: [
      {
        name:
          post.author ||
          "Everence Technologies",
      },
    ],

    creator:
      post.author ||
      "Everence Technologies",

    publisher:
      "Everence Technologies",

    category:
      post.category ||
      "Cybersecurity",
  };

  return metadata;
}

/* =========================================================
   BLOG POSTING SCHEMA
========================================================= */

function generateArticleSchema(post) {
  const canonical =
    post.canonical ||
    `${SITE_URL}/blog/${post.slug}`;

  const customSchema =
    post?.seo?.schema || {};

  const schema = {
    "@context":
      "https://schema.org",

    "@type":
      customSchema?.["@type"] ||
      "BlogPosting",

    "@id":
      `${canonical}#blogposting`,

    url:
      canonical,

    mainEntityOfPage: {
      "@type":
        "WebPage",

      "@id":
        canonical,
    },

    headline:
      customSchema?.headline ||
      post.meta_title ||
      post.title,

    description:
      customSchema?.description ||
      post.meta_description ||
      post.description ||
      `Read ${post.title} on Everence.`,

    datePublished:
      post.date ||
      undefined,

    dateModified:
      post.modified ||
      post.date ||
      undefined,

    /* =====================================
       AUTHOR
    ===================================== */

    author:
      customSchema?.author
        ? {
            "@type":
              customSchema.author["@type"] ||
              "Organization",

            name:
              customSchema.author.name ||
              "Everence Technologies",

            url:
              customSchema.author.url ||
              SITE_URL,
          }
        : {
            "@type":
              "Organization",

            name:
              "Everence Technologies",

            url:
              SITE_URL,
          },

    /* =====================================
       PUBLISHER
    ===================================== */

    publisher:
      customSchema?.publisher
        ? {
            "@type":
              customSchema.publisher["@type"] ||
              "Organization",

            name:
              customSchema.publisher.name ||
              "Everence Technologies",

            url:
              customSchema.publisher.url ||
              SITE_URL,
          }
        : {
            "@type":
              "Organization",

            name:
              "Everence Technologies",

            url:
              SITE_URL,

            logo: {
              "@type":
                "ImageObject",

              url:
                `${SITE_URL}/logo.png`,
            },
          },

    /* =====================================
       ARTICLE SECTION
    ===================================== */

    articleSection:
      post.category ||
      "Insights",

    /* =====================================
       KEYWORDS
    ===================================== */

    keywords:
      normalizeKeywords(
        post.keywords
      ).join(", "),
  };

  /* -----------------------------------------
     IMAGE
  ----------------------------------------- */

  if (post.image) {
    schema.image = [
      {
        "@type":
          "ImageObject",

        url:
          post.image,

        width:
          1200,

        height:
          630,

        caption:
          post.image_alt ||
          post.title,
      },
    ];
  }

  /* -----------------------------------------
     MERGE EXTRA CUSTOM SCHEMA DATA
  ----------------------------------------- */

  const allowedCustomFields = [
    "about",
    "mentions",
    "isPartOf",
    "inLanguage",
  ];

  allowedCustomFields.forEach(
    (field) => {
      if (
        customSchema?.[field] !==
        undefined
      ) {
        schema[field] =
          customSchema[field];
      }
    }
  );

  return schema;
}

/* =========================================================
   SINGLE BLOG PAGE
========================================================= */

export default async function Page({
  params,
}) {
  const { slug } =
    await params;

  const post =
    await getBlog(slug);

  /* -----------------------------------------
     404
  ----------------------------------------- */

  if (!post) {
    notFound();
  }

  /* -----------------------------------------
     BLOG SCHEMA
  ----------------------------------------- */

  const articleSchema =
    generateArticleSchema(
      post
    );

  return (
    <>
      {/* =====================================
          BLOG POSTING JSON-LD
      ===================================== */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              articleSchema
            ),
        }}
      />

      {/* =====================================
          BLOG DETAIL
      ===================================== */}

      <BlogDetail
        post={post}
      />
    </>
  );
}