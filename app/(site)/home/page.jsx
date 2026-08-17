import Home from "@/pages/Home";

export const metadata = {
  title: "Digital Forensic & Cybersecurity Company in India",
  description:
    " Everence is a leading Digital Forensic and Cybersecurity Company in India, offering cyber investigations, incident response, compliance, due diligence, and risk management services.",
  keywords: "Digital Forensic and Cyber Security company in india",
  alternates: {
    canonical: "https://everence.io/home",
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://everence.io/#organization",
      name: "Everence",
      url: "https://everence.io/",
      logo: "https://everence.io/homebg/logo.png",
      telephone: "+91 9920314006",
      sameAs: ["https://in.linkedin.com/company/everence-technologies"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "508, The Summit Business Park, Andheri (East)",
        addressLocality: "Mumbai",
        postalCode: "400093",
        addressCountry: "IN",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://everence.io/#professionalservice",
      name: "Everence",
      url: "https://everence.io/",
      image: "https://everence.io/homebg/logo.png",
      telephone: "+91 9920314006",
      address: {
        "@type": "PostalAddress",
        streetAddress: "508, The Summit Business Park, Andheri (East)",
        addressLocality: "Mumbai",
        postalCode: "400093",
        addressCountry: "IN",
      },
      areaServed: { "@type": "Country", name: "India" },
      sameAs: ["https://in.linkedin.com/company/everence-technologies"],
    },
    {
      "@type": "WebSite",
      "@id": "https://everence.io/#website",
      url: "https://everence.io/",
      name: "Everence",
      publisher: { "@id": "https://everence.io/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://everence.io/?s={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "WebPage",
      "@id": "https://everence.io/home#webpage",
      url: "https://everence.io/home",
      name: "Everence - Cyber Security & Digital Forensics Services",
      isPartOf: { "@id": "https://everence.io/#website" },
      breadcrumb: { "@id": "https://everence.io/home#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://everence.io/home#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://everence.io/home" },
      ],
    },
    {
      "@type": "Service",
      "@id": "https://everence.io/#services",
      name: "Cyber Security & Digital Forensics Services",
      provider: { "@id": "https://everence.io/#organization" },
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "FAQPage",
      "@id": "https://everence.io/home#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What types of cyber security services does Everence offer in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Everence offers a wide range of cyber security services in India, including risk assessment, compliance management, vulnerability testing, employee training, and data protection solutions to keep businesses secure.",
          },
        },
        {
          "@type": "Question",
          name: "Why are cyber security services important for businesses in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Cyber security services are essential in India to safeguard sensitive data, prevent financial losses, and ensure business continuity.",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Home />
    </>
  );
}
