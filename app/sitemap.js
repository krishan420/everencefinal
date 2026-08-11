import servicesData from "@/data/services/services.json";
import caseStudies from "@/data/caseStudies.json";

const BASE = "https://everence.io";

export default async function sitemap() {
  const staticRoutes = [
    { url: `${BASE}/`, changeFrequency: "monthly", priority: 1.0 },
    { url: `${BASE}/home`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/our-services`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/about-us`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/industries`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/events`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/emergency`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/blogs`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kailas-kandalkar`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/pramod-prabhakar`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/cookie-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/terms`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/refund`, changeFrequency: "yearly", priority: 0.3 },
  ].map((route) => ({ ...route, lastModified: new Date() }));

  const serviceRoutes = Object.keys(servicesData).map((slug) => ({
    url: `${BASE}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const caseStudyRoutes = caseStudies.map((cs) => ({
    url: `${BASE}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  let blogRoutes = [];
  try {
    const res = await fetch("https://everence.io/api/get-blogs.php", {
      next: { revalidate: 3600 },
    });
    const data = await res.json();
    if (Array.isArray(data)) {
      blogRoutes = data
        .filter((post) => post.slug)
        .map((post) => ({
          url: `${BASE}/blog/${post.slug}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.6,
        }));
    }
  } catch {
    blogRoutes = [];
  }

  return [...staticRoutes, ...serviceRoutes, ...caseStudyRoutes, ...blogRoutes];
}
