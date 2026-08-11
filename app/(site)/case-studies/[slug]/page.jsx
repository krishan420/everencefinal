import { notFound } from "next/navigation";
import caseStudies from "@/data/caseStudies.json";
import CaseStudyDetail from "@/pages/CaseStudyDetail";

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);

  if (!study) {
    return { title: "Case Study Not Found | Everence" };
  }

  return {
    title: `${study.title} | Everence Case Study`,
    description: study.industry ? `${study.title} - ${study.industry.trim()}` : study.title,
    alternates: {
      canonical: `https://everence.io/case-studies/${slug}`,
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const study = caseStudies.find((cs) => cs.slug === slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyDetail slug={slug} />;
}
