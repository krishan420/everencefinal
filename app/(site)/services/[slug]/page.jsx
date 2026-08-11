import { notFound } from "next/navigation";
import servicesData from "@/data/services/services.json";
import servicesSeo from "@/data/seo-data/services-seo.json";
import ServicePage from "@/pages/ServicePage";

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const seo = servicesSeo[slug];

  if (!seo) {
    return { title: "Service Not Found | Everence" };
  }

  return {
    title: seo.metaTitle,
    description: seo.metaDescription,
    keywords: seo.metaKeywords,
    alternates: {
      canonical: seo.canonicalTag,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;

  if (!servicesData[slug]) {
    notFound();
  }

  const seo = servicesSeo[slug];

  return (
    <>
      {seo?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.schema) }}
        />
      )}
      <ServicePage />
    </>
  );
}
