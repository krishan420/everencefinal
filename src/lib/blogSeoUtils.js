import blogSeoData from "../data/seo-data/blogs-seo.json";

/**
 * Get SEO data for a single blog
 */
export const getBlogSeo = (slug) => {
  if (!slug) {
    return {};
  }

  return blogSeoData?.[slug] || {};
};

/**
 * Get SEO data for blog listing page
 */
export const getBlogListingSeo = () => {
  return blogSeoData?.listing || {};
};