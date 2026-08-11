import servicesData from "./services/services.json";

/* ------------------------------------------
   BASE NORMALIZER
------------------------------------------- */
const normalizedServices = Object.entries(servicesData).map(
  ([slug, service], index) => ({
    id: index + 1,
    slug,

    // ✅ SAFE TITLE
    title: service.hero?.eyebrow ?? "",

    // ✅ KEEP RAW (array/object/string)
    description: service.hero?.description ?? "",

    image: service.hero?.image ?? "",
    link: `/services/${slug}`,
  })
);

/* ------------------------------------------
   1️⃣ HOME – 3D CAROUSEL
------------------------------------------- */
export const selectServicesCarousel = () =>
  normalizedServices.map((service) => ({
    slug: service.slug,

    // ✅ HANDLE STRING + ARRAY
    title:
      typeof service.title === "string"
        ? service.title.toUpperCase()
        : service.title,

    subtitle: service.description,
    image: service.image,
    link: service.link,
  }));

/* ------------------------------------------
   2️⃣ HOME – MARQUEE
------------------------------------------- */
export const selectServicesMarquee = () =>
  normalizedServices.map((service) => ({
    slug: service.slug,
    title: service.title,
    link: service.link,
  }));

/* ------------------------------------------
   3️⃣ SERVICES PAGE – GRID
------------------------------------------- */
export const selectServicesGrid = () => normalizedServices;