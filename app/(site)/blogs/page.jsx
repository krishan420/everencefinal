import Blogs from "@/pages/Blogs";

const WORDPRESS_API =
  "https://blog.everence.io/wp-json/wp/v2";

export const revalidate = 3600;

/* =========================================================
   PAGE SEO
========================================================= */

export const metadata = {
  title:
    "Digital Forensics & Cybersecurity Blogs | Everence",

  description:
    "Stay updated with expert insights on digital forensics, cybersecurity, fraud investigations, compliance, incident response, risk management, and cyber threats.",

  alternates: {
    canonical:
      "https://everence.io/blog",
  },

  openGraph: {
    title:
      "Digital Forensics & Cybersecurity Blogs | Everence",

    description:
      "Read the latest insights from Everence on cybersecurity, AI, digital forensics, and emerging technologies to keep your business informed and secure.",

    url:
      "https://everence.io/blog",

    siteName: "Everence",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Digital Forensics & Cybersecurity Blogs | Everence",

    description:
      "Read the latest insights from Everence on cybersecurity, AI, digital forensics, and emerging technologies to keep your business informed and secure.",
  },
};

/* =========================================================
   HELPERS
========================================================= */

/**
 * Remove HTML from WordPress excerpt/title.
 */
function stripHtml(value = "") {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&#039;/gi, "'")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Get featured image.
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
 * Get categories.
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
 * Convert WordPress post to the
 * structure expected by Blogs.jsx.
 */
function normalizeBlog(post) {
  const image =
    getFeaturedImage(post);

  const categories =
    getCategories(post);

  return {
    id: post.id,

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