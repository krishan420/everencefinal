import servicesSeo from "./services-seo.json";
import blogsSeo from "./blogs-seo.json";

export const getServiceSEO = (slug) => servicesSeo[slug] || null;

export const getBlogSEO = (slug) => blogsSeo[slug] || null;
