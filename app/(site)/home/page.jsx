import Home from "@/pages/Home";

export const metadata = {
  title: "Digital Forensic & Cybersecurity Company in India",
  description:
    "Everence is a leading Digital Forensic and Cybersecurity Company in India, offering cyber investigations, incident response, compliance, due diligence, and risk management services.",
  keywords:
    "Digital Forensic and Cyber Security company in India",
  alternates: {
    canonical: "https://www.everence.io/home",
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
        "@type": "ImageObject",
        "@id": "https://www.everence.io/#logo",
        url: "https://www.everence.io/homebg/logo.png",
        contentUrl: "https://www.everence.io/homebg/logo.png",
      },
      image: {
        "@type": "ImageObject",
        "@id": "https://www.everence.io/#organization-image",
        url: "https://www.everence.io/homebg/logo.png",
        contentUrl: "https://www.everence.io/homebg/logo.png",
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
      founder: [
        {
          "@id": "https://www.everence.io/#kailas-kandalkar",
        },
        {
          "@id": "https://www.everence.io/#pramod-prabhakar",
        },
      ],
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
      "@type": "ProfessionalService",
      "@id": "https://www.everence.io/#professional-service",
      name: "Everence Technologies",
      url: "https://www.everence.io/home",
      logo: {
        "@type": "ImageObject",
        "@id":
          "https://www.everence.io/#professional-service-logo",
        url: "https://www.everence.io/homebg/logo.png",
        contentUrl: "https://www.everence.io/homebg/logo.png",
      },
      image: {
        "@type": "ImageObject",
        "@id":
          "https://www.everence.io/#professional-service-image",
        url: "https://www.everence.io/homebg/logo.png",
        contentUrl: "https://www.everence.io/homebg/logo.png",
      },
      description:
        "Everence Technologies provides professional digital forensics, cybersecurity, digital investigation, fraud investigation, compliance, e-discovery, malware investigation, reputation management and technology consulting services in India.",
      telephone: "+91 9920314006",
      email: "info@everence.io",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "508, The Summit Business Park, Behind Guru Nanak Petrol Pump",
        addressLocality: "Andheri East",
        addressRegion: "Maharashtra",
        postalCode: "400093",
        addressCountry: "IN",
      },
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
      sameAs: [
        "https://in.linkedin.com/company/everence-technologies",
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://www.everence.io/#website",
      url: "https://www.everence.io/",
      name: "Everence Technologies",
      description:
        "Everence Technologies provides digital forensics, cybersecurity, digital investigations, fraud investigations, compliance, e-discovery and technology consulting services in India.",
      publisher: {
        "@id": "https://www.everence.io/#organization",
      },
      inLanguage: "en-IN",
    },

    {
      "@type": "WebPage",
      "@id": "https://www.everence.io/home#webpage",
      url: "https://www.everence.io/home",
      name:
        "Digital Forensic & Cybersecurity Services in India | Everence Technologies",
      headline:
        "Digital Forensic & Cybersecurity Services in India",
      description:
        "Everence Technologies provides digital forensic and cybersecurity services in India, including digital forensic assessments, cybersecurity, ethical hacking, digital fraud investigations, digital compliance, due diligence, malware investigation, e-discovery, device forensics, digital forensic incident response, reputation management, social media monitoring, audio and video forensic analysis, cloud consulting and IT consulting.",
      keywords:
        "Digital Forensic Services Company in India, Digital Forensic Company in India, cyber security service providers in india, Ethical Hacking Services in India, cyber security company in india, Forensic Malware Investigation Services in India, Malware Investigation Services in India, Digital Forensic Assessment services in India, Device Forensic Services in India, Digital Forensic Readiness Assessment Services in India, Proactive & Reactive Digital Fraud Investigations in India, Digital Forensic Incident Response Services in india, Digital Compliance Services in India, Due Diligence Services in India, Email Frauds services in india, eDiscovery Services in India, Messaging platform fraud Investigation in india, Email Fraud Investigation in india, Audio Forensic analysis in India, Video Forensic Analysis in India, Cloud Consulting Services in India, IT consulting services in India, Reputation Management Company in India, Social Media Monitoring Services in India, Digital Forensic Training in India",
      isPartOf: {
        "@id": "https://www.everence.io/#website",
      },
      about: {
        "@id": "https://www.everence.io/#organization",
      },
      mainEntity: {
        "@id":
          "https://www.everence.io/#professional-service",
      },
      publisher: {
        "@id": "https://www.everence.io/#organization",
      },
      inLanguage: "en-IN",
    },

    {
      "@type": "ImageObject",
      "@id": "https://www.everence.io/#logo-image",
      url: "https://www.everence.io/homebg/logo.png",
      contentUrl: "https://www.everence.io/homebg/logo.png",
      caption: "Everence Technologies Logo",
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/#digital-forensic-service",
      name: "Digital Forensic Services",
      serviceType: "Digital Forensics",
      url:
        "https://www.everence.io/services/digital-forensic-company-in-india",
      description:
        "Everence Technologies provides digital forensic services in India to uncover, preserve and analyse digital evidence across devices, systems, communications and digital environments for investigations, fraud inquiries, cyber incidents, litigation support and regulatory matters.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/#cybersecurity-service",
      name: "Cybersecurity Services",
      serviceType: "Cybersecurity Services",
      url:
        "https://www.everence.io/services/cybersecurity-company-in-india",
      description:
        "Everence Technologies provides cybersecurity services in India to help organisations identify cyber risks, strengthen security and protect digital environments against evolving cyber threats.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/#digital-forensic-assessments",
      name: "Digital Forensic Assessments",
      serviceType:
        "Digital Forensic Assessment Services",
      url:
        "https://www.everence.io/services/digital-forensic-assessments",
      description:
        "Digital forensic assessment services in India to identify hidden digital exposures across systems, networks, applications and devices and provide organisations with a clear understanding of their digital risk.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/#fraud-investigations",
      name:
        "Proactive & Reactive Digital Fraud Investigations",
      serviceType:
        "Digital Fraud Investigation Services",
      url:
        "https://www.everence.io/services/proactive-reactive-digital-fraud-investigations",
      description:
        "Proactive and reactive digital fraud investigation services in India for identifying suspicious digital activity, investigating fraud risks and analysing relevant digital evidence.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#due-diligence",
      name: "Due Diligence Services",
      serviceType: "Due Diligence Services",
      url:
        "https://www.everence.io/services/due-diligence",
      description:
        "Due diligence services in India assessing technology, cybersecurity and data risks before mergers, acquisitions, partnerships, investments and other important business decisions.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/#digital-compliance",
      name: "Digital Compliance Services",
      serviceType: "Digital Compliance Services",
      url:
        "https://www.everence.io/services/digital-compliance",
      description:
        "Digital compliance services in India helping organisations align systems, data handling and processes with applicable regulatory and legal expectations.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/#digital-forensic-readiness",
      name:
        "Digital Forensic Readiness Assessment Services",
      serviceType:
        "Digital Forensic Readiness Assessment",
      url:
        "https://www.everence.io/services/digital-forensic-readiness-assessments",
      description:
        "Digital forensic readiness assessment services in India that help organisations prepare systems, processes and environments to properly preserve digital evidence when an incident or investigation occurs.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/#digital-forensic-incident-response",
      name:
        "Digital Forensic Incident Response Services",
      serviceType:
        "Digital Forensic Incident Response",
      url:
        "https://www.everence.io/services/digital-forensic-incident-response",
      description:
        "Digital forensic incident response services in India helping organisations investigate, understand and respond to cybersecurity incidents while preserving relevant digital evidence.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/#malware-investigation",
      name: "Forensic Malware Investigation Services",
      serviceType: "Forensic Malware Investigation",
      url:
        "https://www.everence.io/services/forensic-malware-investigation",
      description:
        "Forensic malware investigation services in India for identifying, analysing and understanding malicious software, suspicious activity and potential digital evidence.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#training",
      name: "Digital Forensic Training",
      serviceType:
        "Digital Forensic Training Services",
      url:
        "https://www.everence.io/services/training",
      description:
        "Digital forensic and cybersecurity training services in India for employees, technical teams and leadership to improve awareness, preparedness and response to digital risks.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#e-discovery",
      name: "eDiscovery Services",
      serviceType: "eDiscovery Services",
      url:
        "https://www.everence.io/services/e-discovery",
      description:
        "eDiscovery services in India for identifying, preserving, handling and reviewing digital information relevant to legal, regulatory and internal investigations.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/#device-forensics",
      name: "Device Forensic Services",
      serviceType: "Device Forensics",
      url:
        "https://www.everence.io/services/device-forensics",
      description:
        "Device forensic services in India for examining computers, mobile devices, storage media and other digital systems to recover and analyse relevant digital evidence.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/#reputation-management",
      name: "Reputation Management Services",
      serviceType: "Reputation Management",
      url:
        "https://www.everence.io/services/reputation-management",
      description:
        "Reputation management services in India helping organisations monitor digital reputation risks and respond to online information that may affect brand trust.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/#social-media-monitoring",
      name: "Social Media Monitoring Services",
      serviceType: "Social Media Monitoring",
      url:
        "https://www.everence.io/services/social-media-monitoring",
      description:
        "Social media monitoring services in India helping organisations identify relevant online conversations, emerging risks, narratives and reputation-related activity.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/#audio-video-forensics",
      name: "Audio & Video Forensic Analysis",
      serviceType:
        "Audio and Video Forensic Analysis",
      url:
        "https://www.everence.io/services/audio-video-forensic-analysis",
      description:
        "Audio and video forensic analysis services in India for examining recordings, identifying alterations and evaluating digital media evidence.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Service",
      "@id":
        "https://www.everence.io/#cloud-it-consulting",
      name: "Cloud and IT Consulting Services",
      serviceType: "Cloud and IT Consulting",
      url:
        "https://www.everence.io/services/cloud-it-consulting",
      description:
        "Cloud and IT consulting services in India supporting organisations with cloud infrastructure, technology risk, governance, security and modern IT environments.",
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
          containedInPlace: {
            "@type": "State",
            name: "Maharashtra",
          },
        },
      ],
    },

    {
      "@type": "Person",
      "@id":
        "https://www.everence.io/#kailas-kandalkar",
      name: "Kailas Kandalkar",
      jobTitle: "Founder - Director",
      worksFor: {
        "@id": "https://www.everence.io/#organization",
      },
    },

    {
      "@type": "Person",
      "@id":
        "https://www.everence.io/#pramod-prabhakar",
      name: "Pramod Prabhakar",
      jobTitle: "Founder - Director",
      worksFor: {
        "@id": "https://www.everence.io/#organization",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id":
        "https://www.everence.io/home#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://www.everence.io/home",
        },
      ],
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.everence.io/home#faq",
      url: "https://www.everence.io/home",
      mainEntity: [
        {
          "@type": "Question",
          name:
            "What is digital forensics in cybersecurity?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Digital forensics is the process of collecting, preserving, analyzing, and reporting digital evidence after a cyber incident. It helps organizations determine how an attack occurred, identify affected systems, recover evidence, and support legal or regulatory investigations. Digital forensics plays a critical role in incident response and cybersecurity risk management.",
          },
        },

        {
          "@type": "Question",
          name:
            "What services does a Digital Forensic and Cybersecurity Company in India provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "A Digital Forensic and Cybersecurity Company in India typically provides digital forensic investigations, incident response, malware analysis, cybersecurity consulting, risk assessments, cloud security services, compliance assessments, reputation management, eDiscovery services, and cybersecurity training. These services help organizations strengthen security, investigate incidents, and protect sensitive information from evolving cyber threats.",
          },
        },

        {
          "@type": "Question",
          name:
            "Why do businesses need digital forensic and cybersecurity services?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Businesses need digital forensic and cybersecurity services to protect sensitive data, investigate cyber incidents, prevent financial losses, and maintain business continuity. These services help organizations identify vulnerabilities, respond to cyberattacks, preserve digital evidence, and comply with regulatory requirements. Strong cybersecurity practices also improve customer trust and reduce operational and reputational risks.",
          },
        },

        {
          "@type": "Question",
          name:
            "How does a Digital Forensic and Cybersecurity Company help after a cyberattack?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "After a cyberattack, a Digital Forensic and Cybersecurity Company investigates the incident, preserves digital evidence, identifies the attack method, and recommends remediation measures. Experts also help contain threats, recover systems, assess damages, and implement security improvements that reduce the risk of future incidents.",
          },
        },

        {
          "@type": "Question",
          name:
            "What types of cyber threats do businesses face in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Businesses in India commonly face ransomware attacks, phishing campaigns, data breaches, malware infections, insider threats, business email compromise, social engineering attacks, and unauthorized access attempts. These threats can affect operations, financial stability, and customer trust. Cybersecurity services help organizations detect and mitigate these risks effectively.",
          },
        },

        {
          "@type": "Question",
          name:
            "Which industries need digital forensic and cybersecurity services?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Industries such as banking, financial services, healthcare, manufacturing, government, insurance, retail, education, telecommunications, and information technology require digital forensic and cybersecurity services. These sectors handle sensitive information and face significant cyber risks, making strong security and investigation capabilities essential.",
          },
        },

        {
          "@type": "Question",
          name:
            "How can businesses protect themselves from cyberattacks?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Businesses can protect themselves by implementing strong access controls, multi-factor authentication, regular security assessments, employee awareness training, secure backups, incident response plans, and continuous monitoring. A proactive cybersecurity strategy significantly reduces the likelihood and impact of cyber incidents.",
          },
        },

        {
          "@type": "Question",
          name:
            "How does Everence support fraud investigations?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Everence supports fraud investigations by analyzing digital evidence, financial records, communications, devices, and system activities to uncover fraudulent behavior. Our investigations help identify the source, scope, and impact of fraud incidents. The findings support informed decision-making, risk mitigation, and legal or regulatory actions when necessary.",
          },
        },

        {
          "@type": "Question",
          name:
            "How can Everence help after a cyberattack?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Everence helps organizations respond to cyberattacks by conducting forensic investigations, identifying the source and impact of the incident, preserving evidence, and supporting recovery efforts. Our experts analyze affected systems and provide actionable recommendations to contain threats and prevent future incidents. This helps businesses minimize downtime and strengthen cyber resilience.",
          },
        },

        {
          "@type": "Question",
          name:
            "Why choose Everence as a Digital Forensic and Cybersecurity Company in India?",
          acceptedAnswer: {
            "@type": "Answer",
            text:
              "Everence provides comprehensive digital forensic and cybersecurity services designed to help organizations detect, investigate, and mitigate cyber risks. Our team combines forensic expertise, cybersecurity knowledge, and advanced investigative methodologies to deliver accurate insights and actionable solutions. Clients choose Everence for confidentiality, technical excellence, rapid response, and customized strategies that strengthen security and support business resilience.",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema),
        }}
      />

      <Home />
    </>
  );
}