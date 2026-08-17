import Blogs from "@/pages/Blogs";
import { getBlogListingSeo } from "@/lib/blogSeoUtils";

const WORDPRESS_API =
  "https://blog.everence.io/wp-json/wp/v2";

/* =========================================================
   CACHE / REVALIDATION
========================================================= */

export const revalidate = 3600;

/* =========================================================
   BLOG LISTING SEO
========================================================= */

const seo = getBlogListingSeo();

export const metadata = {
  title:
    seo.title ||
    "Digital Forensics & Cybersecurity Blogs | Everence",

  description:
    seo.description ||
    "Stay updated with expert insights on digital forensics, cybersecurity, fraud investigations, compliance, incident response, risk management, and cyber threats.",

  keywords:
    seo.keywords || [],

  alternates: {
    canonical:
      seo.canonical ||
      "https://everence.io/blogs",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      seo.ogTitle ||
      seo.title ||
      "Digital Forensics & Cybersecurity Blogs | Everence",

    description:
      seo.ogDescription ||
      seo.description ||
      "Read the latest insights from Everence on cybersecurity, AI, digital forensics, and emerging technologies.",

    url:
      seo.canonical ||
      "https://everence.io/blogs",

    siteName: "Everence Technologies",

    type: "website",

    ...(seo.ogImage
      ? {
          images: [
            {
              url: seo.ogImage,
              width: 1200,
              height: 630,
              alt:
                seo.ogTitle ||
                seo.title ||
                "Everence Technologies Blogs",
            },
          ],
        }
      : {}),
  },

  twitter: {
    card: "summary_large_image",

    title:
      seo.ogTitle ||
      seo.title ||
      "Digital Forensics & Cybersecurity Blogs | Everence",

    description:
      seo.ogDescription ||
      seo.description ||
      "Read the latest insights from Everence on cybersecurity, AI, digital forensics, and emerging technologies.",

    ...(seo.ogImage
      ? {
          images: [seo.ogImage],
        }
      : {}),
  },
};

/* =========================================================
   HELPERS
========================================================= */

/**
 * Remove HTML and decode common WordPress entities.
 */
function stripHtml(value = "") {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#039;/gi, "'")
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
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
      "/default-blog.jpg",

    alt:
      media?.alt_text ||
      stripHtml(
        post?.title?.rendered || ""
      ) ||
      "Everence Blog",
  };
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
 * Convert WordPress post into the structure
 * expected by Blogs.jsx.
 */
function normalizeBlog(post) {
  const image =
    getFeaturedImage(post);

  const categories =
    getCategories(post);

  return {
    id: post?.id,

    title:
      stripHtml(
        post?.title?.rendered || ""
      ),

    slug:
      post?.slug || "",

    description:
      stripHtml(
        post?.excerpt?.rendered || ""
      ),

    excerpt:
      post?.excerpt?.rendered || "",

    content:
      post?.content?.rendered || "",

    image:
      image.url,

    image_alt:
      image.alt,

    date:
      post?.date || null,

    modified:
      post?.modified || null,

    author:
      post?._embedded?.author?.[0]?.name ||
      "Everence",

    category:
      categories[0]?.name ||
      "Insights",

    categories,

    wordpress:
      post,
  };
}

/* =========================================================
   GET BLOGS FROM WORDPRESS
========================================================= */

async function getBlogs() {
  try {
    const url =
      `${WORDPRESS_API}/posts` +
      `?per_page=12` +
      `&page=1` +
      `&status=publish` +
      `&_embed`;

    const response = await fetch(url, {
      next: {
        revalidate: 3600,
        tags: ["blogs"],
      },

      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      console.error(
        `WordPress API Error: ${response.status}`
      );

      return [];
    }

    const posts =
      await response.json();

    if (!Array.isArray(posts)) {
      return [];
    }

    return posts.map(
      normalizeBlog
    );
  } catch (error) {
    console.error(
      "Failed to fetch WordPress blogs:",
      error
    );

    return [];
  }
}

/* =========================================================
   BLOG LISTING PAGE
========================================================= */

export default async function Page() {
  const blogs =
    await getBlogs();

  return (
    <Blogs
      initialBlogs={blogs}
    />
  );
}