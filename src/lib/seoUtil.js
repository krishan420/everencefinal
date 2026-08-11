import seoData from "../data/seo-data/services-seo.json";

export const getSeoData = (slug) => {
  return seoData[slug] || {};
};
