const WORDPRESS_API =
  "https://blog.everence.io/wp-json/wp/v2";

/**
 * Remove HTML from WordPress content.
 */
function stripHtml(value = "") {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
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
    url: media?.source_url || "/default-blog.jpg",
    alt:
      media?.alt_text ||
      post?.title?.rendered ||
      "Everence Blog",
  };
}

/**
 * Get categories.
 */
function getPostCategories(post) {
  const terms =
    post?._embedded?.["wp:term"] || [];

  return terms
    .flat()
    .filter(
      (term) => term.taxonomy === "category"
    );
}

/**
 * Normalize WordPress post.
 */
function normalizePost(post) {
  const image = getFeaturedImage(post);

  const categories =
    getPostCategories(post);

  const description = stripHtml(
    post?.excerpt?.rendered || ""
  );

  return {
    id: post.id,

    title:
      stripHtml(
        post?.title?.rendered || ""
      ),

    slug:
      post?.slug || "",

    description,

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

    wordpress: post,
  };
}

/**
 * Get blog posts.
 */
export async function getPosts(
  page = 1,
  perPage = 12
) {
  const url =
    `${WORDPRESS_API}/posts` +
    `?page=${page}` +
    `&per_page=${perPage}` +
    `&status=publish` +
    `&_embed`;

  const response = await fetch(url, {
    next: {
      revalidate: 3600,
    },

    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `WordPress API Error: ${response.status}`
    );
  }

  const posts = await response.json();

  return {
    posts: Array.isArray(posts)
      ? posts.map(normalizePost)
      : [],

    total: Number(
      response.headers.get("X-WP-Total") || 0
    ),

    totalPages: Number(
      response.headers.get(
        "X-WP-TotalPages"
      ) || 0
    ),
  };
}

/**
 * Get single blog by slug.
 */
export async function getPostBySlug(slug) {
  if (!slug) {
    return null;
  }

  const cleanSlug = slug
    .replace(/-+$/, "")
    .trim();

  const url =
    `${WORDPRESS_API}/posts` +
    `?slug=${encodeURIComponent(cleanSlug)}` +
    `&status=publish` +
    `&_embed`;

  const response = await fetch(url, {
    next: {
      revalidate: 3600,
    },

    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    return null;
  }

  const posts = await response.json();

  if (
    !Array.isArray(posts) ||
    posts.length === 0
  ) {
    return null;
  }

  return normalizePost(posts[0]);
}

/**
 * Get categories.
 */
export async function getCategories() {
  const response = await fetch(
    `${WORDPRESS_API}/categories?per_page=100`,
    {
      next: {
        revalidate: 3600,
      },

      headers: {
        Accept: "application/json",
      },
    }
  );

  if (!response.ok) {
    return [];
  }

  return response.json();
}