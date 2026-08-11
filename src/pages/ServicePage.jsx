"use client";

import { useParams } from "next/navigation";

import servicesData from "@/data/services/services.json";

import ServiceHero from "@/components/Service/ServiceHero";
import ServiceIntro from "@/components/Service/ServiceIntro";
import ServiceFeatures from "@/components/Service/ServiceFeatures";
import ServiceWhyChoose from "@/components/Service/ServiceWhyChoose";
import ServiceWorkflow from "@/components/Service/ServiceWorkflow";
import ServiceUseCases from "@/components/Service/ServiceUseCases";
import ServiceFAQ from "@/components/Service/ServiceFAQ";
import ReachUsForm from "@/components/ContactUs/ReachUsForm";

export default function ServicePage() {
  /* ============================================
     GET ROUTE PARAMS SAFELY
  ============================================ */

  const params = useParams();

  const slug = Array.isArray(params?.slug)
    ? params.slug[0]
    : params?.slug ?? "";

  /* ============================================
     GET SERVICE DATA
  ============================================ */

  const service = slug
    ? servicesData?.[slug]
    : null;

  /* ============================================
     HANDLE MISSING SLUG DURING PRERENDER
  ============================================ */

  if (!slug) {
    return null;
  }

  /* ============================================
     SERVICE NOT FOUND
  ============================================ */

  if (!service) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="mb-3 text-3xl font-bold text-gray-900 dark:text-white">
            Service Not Found
          </h1>

          <p className="text-gray-600 dark:text-gray-400">
            The service you are looking for is not available.
          </p>
        </div>
      </main>
    );
  }

  /* ============================================
     SERVICE PAGE
  ============================================ */

  return (
    <main>
      {service.hero && (
        <ServiceHero data={service.hero} />
      )}

      {service.intro && (
        <ServiceIntro data={service.intro} />
      )}

      {service.features && (
        <ServiceFeatures data={service.features} />
      )}

      {service.whyChoose && (
        <ServiceWhyChoose data={service.whyChoose} />
      )}

      {service.workflow && (
        <ServiceWorkflow data={service.workflow} />
      )}

      {service.useCases && (
        <ServiceUseCases data={service.useCases} />
      )}

      {Array.isArray(service.faqs) && service.faqs.length > 0 && (
        <ServiceFAQ data={service.faqs} />
      )}

      <ReachUsForm />
    </main>
  );
}