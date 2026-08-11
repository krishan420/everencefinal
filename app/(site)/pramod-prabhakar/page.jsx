import PramodPrabhakar from "@/pages/PramodPrabhakar";

export const metadata = {
  title: "Pramod Prabhakar | Founder & Director | Certified Fraud Examiner | Everence",
  description:
    "Pramod Prabhakar is Founder & Director at Everence and a Certified Fraud Examiner specializing in fraud investigations, forensic analysis, corporate risk consulting, investment risk advisory, and litigation support.",
  keywords:
    "Pramod Prabhakar Everence,Pramod Prabhakar fraud investigation expert,Pramod Prabhakar forensic specialist,Pramod Prabhakar investment risk advisor,Pramod Prabhakar corporate risk consultant,Pramod Prabhakar reputation management advisor,Certified Fraud Examiner Pramod Prabhakar,Pramod Prabhakar litigation support expert",
  alternates: {
    canonical: "https://everence.io/pramod-prabhakar",
  },
  openGraph: {
    type: "profile",
    title: "Pramod Prabhakar | Founder & Director | Everence",
    description: "Certified Fraud Examiner and corporate risk consultant at Everence.",
    url: "https://everence.io/pramod-prabhakar",
    images: ["https://everence.io/homebg/pramod-prabhakar.jpg"],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": "https://everence.io/pramod-prabhakar",
      url: "https://everence.io/pramod-prabhakar",
      name: "Pramod Prabhakar | Founder & Director at Everence",
      mainEntity: { "@id": "https://everence.io/pramod-prabhakar#person" },
    },
    {
      "@type": "Person",
      "@id": "https://everence.io/pramod-prabhakar#person",
      name: "Pramod Prabhakar",
      jobTitle: "Founder & Director | Certified Fraud Examiner",
      worksFor: { "@type": "Organization", name: "Everence", url: "https://everence.io/" },
      sameAs: ["https://in.linkedin.com/in/pramodprabhakar1"],
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
      <PramodPrabhakar />
    </>
  );
}
