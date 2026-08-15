import { notFound } from "next/navigation";
import BlogDetail from "@/components/Blogs/BlogDetail";

const WORDPRESS_API =
  "https://blog.everence.io/wp-json/wp/v2";

const SITE_URL = "https://everence.io";

export const revalidate = 3600;

/* =========================================================
   HELPERS
========================================================= */

/**
 * Remove HTML from WordPress rendered text.
 */
function stripHtml(value = "") {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#039;/gi, "'")
    .replace(/&#8217;/gi, "'")
    .replace(/&#8216;/gi, "'")
    .replace(/&#8220;/gi, '"')
    .replace(/&#8221;/gi, '"')
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
    url: media?.source_url || null,

    alt:
      media?.alt_text ||
      stripHtml(post?.title?.rendered || "") ||
      "Everence Blog",

    width: media?.media_details?.width || null,

    height: media?.media_details?.height || null,
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
 * Get Yoast SEO data when available.
 */
function getYoastData(post) {
  return post?.yoast_head_json || null;
}

/* =========================================================
   GET BLOG
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

    const posts = await response.json();

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

    const title = stripHtml(
      post?.title?.rendered || ""
    );

    const description = stripHtml(
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
       RETURN NORMALIZED DATA
    ----------------------------------------- */

    return {
      id: post.id,

      title,

      slug: postSlug,

      content,

      description,

      excerpt:
        post?.excerpt?.rendered || "",

      image: finalImage,

      image_alt:
        featuredImage.alt ||
        title ||
        "Everence Blog",

      author,

      category,

      categories,

      date:
        post?.date || null,

      modified:
        post?.modified || null,

      link:
        `${SITE_URL}/blog/${postSlug}`,

      /* SEO */

      meta_title:
        yoastTitle ||
        title ||
        "Everence Blog",

      meta_description:
        yoastDescription ||
        description ||
        `Read ${title} on Everence.`,

      keywords:
        yoast?.keywords || "",

      /* Original WordPress object */

      wordpress: post,
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
   METADATA
========================================================= */

export async function generateMetadata({
  params,
}) {
  const { slug } = await params;

  const post = await getBlog(slug);

  /* -----------------------------------------
     BLOG NOT FOUND
  ----------------------------------------- */

  if (!post) {
    return {
      title: "Blog Not Found | Everence",

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
    `${SITE_URL}/blog/${post.slug}`;

  const metadata = {
    title,

    description,

    alternates: {
      canonical,
    },

    robots: {
      index: true,
      follow: true,

      "max-image-preview": "large",

      "max-snippet": -1,

      "max-video-preview": -1,
    },

    openGraph: {
      title,

      description,

      url: canonical,

      siteName: "Everence",

      type: "article",

      publishedTime:
        post.date || undefined,

      modifiedTime:
        post.modified || undefined,

      authors:
        post.author
          ? [post.author]
          : undefined,

      images: post.image
        ? [
            {
              url: post.image,

              alt:
                post.image_alt ||
                title,

              width: 1200,

              height: 630,
            },
          ]
        : [],
    },

    twitter: {
      card: "summary_large_image",

      title,

      description,

      images: post.image
        ? [post.image]
        : [],
    },
  };

  /* -----------------------------------------
     KEYWORDS
  ----------------------------------------- */

  if (post.keywords) {
    metadata.keywords =
      post.keywords;
  }

  return metadata;
}

/* =========================================================
   ARTICLE SCHEMA
========================================================= */

function generateArticleSchema(post) {
  const canonical =
    `${SITE_URL}/blog/${post.slug}`;

  const schema = {
    "@context":
      "https://schema.org",

    "@type":
      "Article",

    "@id":
      `${canonical}#article`,

    url: canonical,

    mainEntityOfPage: {
      "@type": "WebPage",

      "@id": canonical,
    },

    headline:
      post.title,

    description:
      post.description ||
      `Read ${post.title} on Everence.`,

    datePublished:
      post.date || undefined,

    dateModified:
      post.modified ||
      post.date ||
      undefined,

    author: {
      "@type": "Person",

      name:
        post.author ||
        "Everence",
    },

    publisher: {
      "@type":
        "Organization",

      name: "Everence",

      url: SITE_URL,
    },

    articleSection:
      post.category ||
      "Insights",
  };

  /* -----------------------------------------
     IMAGE
  ----------------------------------------- */

  if (post.image) {
    schema.image = [
      post.image,
    ];
  }

  return schema;
}

/* =========================================================
   SINGLE BLOG PAGE
========================================================= */

export default async function Page({
  params,
}) {
  const { slug } = await params;

  const post =
    await getBlog(slug);

  /* -----------------------------------------
     404
  ----------------------------------------- */

  if (!post) {
    notFound();
  }

  /* -----------------------------------------
     ARTICLE SCHEMA
  ----------------------------------------- */

  const articleSchema =
    generateArticleSchema(post);

  return (
    <>
      {/* =====================================
          ARTICLE JSON-LD
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
          EXISTING BLOG DESIGN
      ===================================== */}

      <BlogDetail
        post={post}
      />
    </>
  );
}