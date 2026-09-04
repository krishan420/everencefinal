import OurServices from "@/pages/OurServices";

const keywords = [
  "Digital Forensic Services Company in India",
  "Digital Forensic Company in India",
  "cyber security service providers in india",
  "Ethical Hacking Services in India",
  "cyber security company in india",
  "Forensic Malware Investigation Services in India",
  "Malware Investigation Services in India",
  "Digital Forensic Assessment services in India",
  "Device Forensic Services in India",
  "Digital Forensic Readiness Assessment Services in India",
  "Proactive & Reactive Digital Fraud Investigations in India",
  "Digital Forensic Incident Response Services in india",
  "Digital Compliance Services in India",
  "Due Diligence Services in India",
  "Email Frauds services in india",
  "eDiscovery Services in India",
  "Messaging platform fraud Investigation in india",
  "Email Fraud Investigation in india",
  "Audio Forensic analysis in India",
  "Video Forensic Analysis in India",
  "Cloud Consulting Services in India",
  "IT consulting services in India",
  "Reputation Management Company in India",
  "Social Media Monitoring Services in India",
  "Digital Forensic Training in India",
];

export const metadata = {
  title: "Find Our Services ",

  description:
    "Discover how Everence helps organizations across industries with digital forensics, cyber security, fraud investigations, compliance, incident response, and risk management services.",

  keywords,

  alternates: {
    canonical: "https://everence.io/our-services",
  },

  openGraph: {
    title:
      "Digital Forensic & Cybersecurity Services in India | Everence Technologies",
    description:
      "Explore Everence Technologies' digital forensic, cybersecurity, fraud investigation, compliance, e-discovery, device forensics, malware investigation, consulting and digital forensic training services in India.",
    url: "https://everence.io/our-services",
    siteName: "Everence Technologies",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Digital Forensic & Cybersecurity Services in India | Everence Technologies",
    description:
      "Digital forensic and cybersecurity services in India from Everence Technologies.",
  },
};

const schema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.everence.io/#organization",
      name: "Everence Technologies",
      url: "https://www.everence.io/",
      logo: {
        "@id": "https://www.everence.io/#logo",
      },
      image: {
        "@id": "https://www.everence.io/#logo",
      },
      description:
        "Everence Technologies is a digital forensics and cybersecurity company providing digital forensic services, cybersecurity services, digital fraud investigations, digital compliance, e-discovery, device forensics, malware investigation, reputation management, social media monitoring, audio and video forensic analysis, cloud consulting and IT consulting services in India.",
      telephone: "+91 9920314006",
      email: "info@everence.io",

      address: {
        "@type": "PostalAddress",
        streetAddress:
          "508, The Summit Business Park, Behind Guru Nanak Petrol Pump",
        addressLocality: "Andheri East",
        addressRegion: "Maharashtra",
        postalCode: "400093",
        addressCountry: "IN",
      },

      sameAs: [
        "https://in.linkedin.com/company/everence-technologies",
      ],

      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://www.everence.io/#website",
      url: "https://www.everence.io/",
      name: "Everence Technologies",
      description:
        "Everence Technologies provides digital forensics, cybersecurity, digital investigations, fraud investigations, compliance, e-discovery, device forensics, malware investigation, reputation management, social media monitoring, audio and video forensic analysis, cloud consulting and IT consulting services in India.",
      publisher: {
        "@id": "https://www.everence.io/#organization",
      },
      inLanguage: "en-IN",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.everence.io/our-services#webpage",
      url: "https://www.everence.io/our-services",
      name:
        "Digital Forensic & Cybersecurity Services in India | Everence Technologies",
      headline: "Digital Forensic & Cybersecurity Services in India",
      description:
        "Everence Technologies provides digital forensic and cybersecurity services in India, including digital forensic assessments, cybersecurity, ethical hacking, digital fraud investigations, digital compliance, due diligence, malware investigation, e-discovery, device forensics, digital forensic incident response, reputation management, social media monitoring, audio and video forensic analysis, cloud consulting, IT consulting and digital forensic training.",

      keywords: keywords.join(", "),

      isPartOf: {
        "@id": "https://www.everence.io/#website",
      },

      about: {
        "@id": "https://www.everence.io/#organization",
      },

      mainEntity: {
        "@id": "https://www.everence.io/our-services#service-list",
      },

      publisher: {
        "@id": "https://www.everence.io/#organization",
      },

      inLanguage: "en-IN",
    },

    {
      "@type": "ImageObject",
      "@id": "https://www.everence.io/#logo",
      url: "https://www.everence.io/homebg/logo.png",
      contentUrl: "https://www.everence.io/homebg/logo.png",
      caption: "Everence Technologies Logo",
    },

    {
      "@type": "ItemList",
      "@id": "https://www.everence.io/our-services#service-list",
      name: "Everence Technologies Services",
      description:
        "Digital forensic, cybersecurity, digital investigation, compliance, e-discovery, fraud investigation and technology consulting services provided by Everence Technologies in India.",
      numberOfItems: 16,
      itemListOrder: "https://schema.org/ItemListOrderAscending",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@id":
              "https://www.everence.io/our-services#digital-forensic-services",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@id":
              "https://www.everence.io/our-services#cybersecurity-services",
          },
        },
        {
          "@type": "ListItem",
          position: 3,
          item: {
            "@id":
              "https://www.everence.io/our-services#digital-forensic-assessments",
          },
        },
        {
          "@type": "ListItem",
          position: 4,
          item: {
            "@id":
              "https://www.everence.io/our-services#fraud-investigations",
          },
        },
        {
          "@type": "ListItem",
          position: 5,
          item: {
            "@id": "https://www.everence.io/our-services#due-diligence",
          },
        },
        {
          "@type": "ListItem",
          position: 6,
          item: {
            "@id": "https://www.everence.io/our-services#digital-compliance",
          },
        },
        {
          "@type": "ListItem",
          position: 7,
          item: {
            "@id": "https://www.everence.io/our-services#forensic-readiness",
          },
        },
        {
          "@type": "ListItem",
          position: 8,
          item: {
            "@id": "https://www.everence.io/our-services#incident-response",
          },
        },
        {
          "@type": "ListItem",
          position: 9,
          item: {
            "@id":
              "https://www.everence.io/our-services#malware-investigation",
          },
        },
        {
          "@type": "ListItem",
          position: 10,
          item: {
            "@id": "https://www.everence.io/our-services#training",
          },
        },
        {
          "@type": "ListItem",
          position: 11,
          item: {
            "@id": "https://www.everence.io/our-services#ediscovery",
          },
        },
        {
          "@type": "ListItem",
          position: 12,
          item: {
            "@id": "https://www.everence.io/our-services#device-forensics",
          },
        },
        {
          "@type": "ListItem",
          position: 13,
          item: {
            "@id":
              "https://www.everence.io/our-services#reputation-management",
          },
        },
        {
          "@type": "ListItem",
          position: 14,
          item: {
            "@id":
              "https://www.everence.io/our-services#social-media-monitoring",
          },
        },
        {
          "@type": "ListItem",
          position: 15,
          item: {
            "@id":
              "https://www.everence.io/our-services#audio-video-forensics",
          },
        },
        {
          "@type": "ListItem",
          position: 16,
          item: {
            "@id":
              "https://www.everence.io/our-services#cloud-it-consulting",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/our-services#digital-forensic-services",
      name: "Digital Forensic Services",
      serviceType: "Digital Forensic Services",
      url: "https://www.everence.io/services/digital-forensic-company-in-india",
      description:
        "Digital forensic services in India for collecting, preserving, analysing and interpreting digital evidence across devices, systems, communications and digital environments.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/our-services#cybersecurity-services",
      name: "Cybersecurity Services",
      serviceType: "Cybersecurity Services",
      url: "https://www.everence.io/services/cybersecurity-company-in-india",
      description:
        "Cybersecurity services in India designed to help organisations identify cyber risks, strengthen security controls and protect digital environments from evolving cyber threats.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/our-services#digital-forensic-assessments",
      name: "Digital Forensic Assessments",
      serviceType: "Digital Forensic Assessment Services",
      url: "https://www.everence.io/services/digital-forensic-assessments",
      description:
        "Digital forensic assessment services in India that help organisations identify digital risks, evidence gaps and potential exposures across systems, devices and digital environments.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/our-services#fraud-investigations",
      name: "Proactive & Reactive Digital Fraud Investigations",
      serviceType: "Digital Fraud Investigation Services",
      url: "https://www.everence.io/services/proactive-reactive-digital-fraud-investigations",
      description:
        "Proactive and reactive digital fraud investigation services in India for investigating suspicious activity, digital evidence, financial fraud, email fraud and messaging platform fraud.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/our-services#due-diligence",
      name: "Due Diligence Services",
      serviceType: "Due Diligence Services",
      url: "https://www.everence.io/services/due-diligence",
      description:
        "Due diligence services in India supporting organisations with technology, cybersecurity, digital risk and investigative assessments for important business decisions.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/our-services#digital-compliance",
      name: "Digital Compliance Services",
      serviceType: "Digital Compliance Services",
      url: "https://www.everence.io/services/digital-compliance",
      description:
        "Digital compliance services in India helping organisations assess digital processes, data handling, technology controls and compliance requirements.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/our-services#forensic-readiness",
      name: "Digital Forensic Readiness Assessment Services",
      serviceType: "Digital Forensic Readiness Assessment",
      url: "https://www.everence.io/services/digital-forensic-readiness-assessments",
      description:
        "Digital forensic readiness assessment services in India that help organisations prepare systems, processes and controls for effective digital evidence preservation and future investigations.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/our-services#incident-response",
      name: "Digital Forensic Incident Response Services",
      serviceType: "Digital Forensic Incident Response",
      url: "https://www.everence.io/services/digital-forensic-incident-response",
      description:
        "Digital forensic incident response services in India helping organisations investigate cyber incidents, preserve evidence, identify attack methods and support recovery and remediation.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/our-services#malware-investigation",
      name: "Forensic Malware Investigation Services",
      serviceType: "Forensic Malware Investigation",
      url: "https://www.everence.io/services/forensic-malware-investigation",
      description:
        "Forensic malware investigation services in India for analysing malicious software, suspicious activity, attack behaviour and related digital evidence.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/our-services#training",
      name: "Digital Forensic Training",
      serviceType: "Digital Forensic Training Services",
      url: "https://www.everence.io/services/training",
      description:
        "Digital forensic and cybersecurity training services in India designed to improve awareness, investigation capabilities, preparedness and response to digital risks.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/our-services#ediscovery",
      name: "eDiscovery Services",
      serviceType: "eDiscovery Services",
      url: "https://www.everence.io/services/e-discovery",
      description:
        "eDiscovery services in India for identifying, preserving, processing, reviewing and analysing digital information relevant to legal, regulatory and internal investigations.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/our-services#device-forensics",
      name: "Device Forensic Services",
      serviceType: "Device Forensics",
      url: "https://www.everence.io/services/device-forensics",
      description:
        "Device forensic services in India for examining computers, mobile devices, storage media and other digital devices to recover and analyse relevant evidence.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/our-services#reputation-management",
      name: "Reputation Management Services",
      serviceType: "Reputation Management",
      url: "https://www.everence.io/services/reputation-management",
      description:
        "Reputation management services in India helping organisations identify, monitor and respond to digital reputation risks that may affect brand trust and business decisions.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/our-services#social-media-monitoring",
      name: "Social Media Monitoring Services",
      serviceType: "Social Media Monitoring",
      url: "https://www.everence.io/services/social-media-monitoring",
      description:
        "Social media monitoring services in India that help organisations track relevant online conversations, identify emerging risks, monitor brand mentions and understand developing digital narratives.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/our-services#audio-video-forensics",
      name: "Audio & Video Forensic Analysis",
      serviceType: "Audio and Video Forensic Analysis",
      url: "https://www.everence.io/services/audio-video-forensic-analysis",
      description:
        "Audio and video forensic analysis services in India for examining digital recordings, identifying potential alterations and evaluating audio and video evidence.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/our-services#cloud-it-consulting",
      name: "Cloud and IT Consulting Services",
      serviceType: "Cloud and IT Consulting",
      url: "https://www.everence.io/services/cloud-it-consulting",
      description:
        "Cloud and IT consulting services in India supporting organisations with cloud technology, IT infrastructure, technology risk, security, governance and digital environments.",
      provider: {
        "@id": "https://www.everence.io/#organization",
      },
      areaServed: [
        {
          "@type": "Country",
          name: "India",
        },
        {
          "@type": "City",
          name: "Mumbai",
        },
      ],
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.everence.io/our-services#breadcrumb",

      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.everence.io/home",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Our Services",
          item: "https://www.everence.io/our-services",
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      {/* JSON-LD only for the MAIN /our-services page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <OurServices />
    </>
  );
}