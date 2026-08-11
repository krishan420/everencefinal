import KailasKandalkar from "@/pages/KailasKandalkar";

export const metadata = {
  title: "Kailas Kandalkar | Founder & Director | Certified Fraud Examiner | Everence",
  description:
    "Kailas Kandalkar is Founder & Director at Everence and a Certified Fraud Examiner specializing in fraud investigations, forensic advisory, corporate risk consulting, investment risk assessment, and litigation support.",
  keywords:
    "Keywords For Kailas Kandalkar,Kailas Kandalkar Everence,Kailas Kandalkar official profile,Kailas Kandalkar fraud investigation expert,Kailas Kandalkar forensic specialist,Kailas Kandalkar corporate risk consultant,Kailas Kandalkar investment risk advisor,Kailas Kandalkar compliance expert,Kailas Kandalkar litigation support advisor,Certified Fraud Examiner Kailas Kandalkar,Kailas Kandalkar due diligence specialist",
  alternates: {
    canonical: "https://everence.io/kailas-kandalkar",
  },
  openGraph: {
    type: "profile",
    title: "Kailas Kandalkar | Founder & Director | Certified Fraud Examiner | Everence",
    description: "Certified Fraud Examiner and corporate risk consultant at Everence.",
    url: "https://everence.io/kailas-kandalkar",
    images: ["https://everence.io/homebg/kailas-kandalkar.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://everence.io/kailas-kandalkar#profilepage",
      url: "https://everence.io/kailas-kandalkar",
      name: "Kailas Kandalkar | Director at Everence",
      description:
        "Kailas Kandalkar is Director at Everence specializing in corporate investigations, regulatory compliance, forensic analysis, and strategic risk advisory.",
      mainEntity: { "@id": "https://everence.io/kailas-kandalkar#person" },
    },
    {
      "@type": "Person",
      "@id": "https://everence.io/kailas-kandalkar#person",
      name: "Kailas Kandalkar",
      url: "https://everence.io/kailas-kandalkar",
      jobTitle: "Director | Certified Fraud Examiner | Risk & Compliance Advisor",
      worksFor: { "@id": "https://everence.io/#organization" },
      email: "info@everence.io",
      telephone: "+91 9920314006",
      address: {
        "@type": "PostalAddress",
        streetAddress: "508, The Summit Business Park, Andheri (East)",
        addressLocality: "Mumbai",
        postalCode: "400093",
        addressCountry: "IN",
      },
      description:
        "Kailas Kandalkar is a forensic advisory and risk intelligence expert at Everence specializing in fraud investigations, compliance strategy, and enterprise risk management.",
    },
    {
      "@type": "Organization",
      "@id": "https://everence.io/#organization",
      name: "Everence",
      url: "https://everence.io/",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91 9920314006",
        contactType: "customer support",
        email: "info@everence.io",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "508, The Summit Business Park, Andheri (East)",
        addressLocality: "Mumbai",
        postalCode: "400093",
        addressCountry: "IN",
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://everence.io/kailas-kandalkar#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "Who is Kailas Kandalkar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Kailas Kandalkar is a risk intelligence and forensic advisory expert at Everence specializing in fraud investigations, compliance strategy, and corporate risk management.",
          },
        },
        {
          "@type": "Question",
          name: "What services does Kailas Kandalkar provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "He provides fraud investigation, forensic analysis, investment risk advisory, litigation support, and compliance consulting services.",
          },
        },
        {
          "@type": "Question",
          name: "What industries does Kailas Kandalkar work with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "He works with multinational corporations, private equity firms, financial institutions, and legal teams managing regulatory and compliance risks.",
          },
        },
        {
          "@type": "Question",
          name: "Is Kailas Kandalkar a Certified Fraud Examiner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, he is a Certified Fraud Examiner (CFE) with extensive experience in fraud detection, anti-corruption compliance, and financial crime investigations.",
          },
        },
        {
          "@type": "Question",
          name: "How can I contact Kailas Kandalkar?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can contact Kailas Kandalkar through the official Everence website or via LinkedIn.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://everence.io/kailas-kandalkar#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://everence.io/" },
        { "@type": "ListItem", position: 2, name: "About Us", item: "https://everence.io/about-us" },
        { "@type": "ListItem", position: 3, name: "Kailas Kandalkar", item: "https://everence.io/kailas-kandalkar" },
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
      <KailasKandalkar />
    </>
  );
}
