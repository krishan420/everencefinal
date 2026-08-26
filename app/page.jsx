import IntroLanding from "@/pages/IntroLanding";

export const metadata = {
  title: "Digital Forensic & Cybersecurity Company in India | Everence",
  description:
    "Everence is a leading Digital Forensic and Cybersecurity Company in India, offering cyber investigations, incident response, compliance, due diligence, and risk management services.",
 keywords: "Digital Forensic and Cyber Security company in india",
    alternates: {
    canonical: "https://everence.io/",
  },
};
const schema = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.everence.io/#organization",

      "name": "Everence Technologies",

      "url": "https://www.everence.io/",

      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.everence.io/#logo",
        "url": "https://www.everence.io/homebg/logo.png",
        "contentUrl": "https://www.everence.io/homebg/logo.png"
      },

      "image": {
        "@type": "ImageObject",
        "@id": "https://www.everence.io/#image",
        "url": "https://www.everence.io/homebg/logo.png",
        "contentUrl": "https://www.everence.io/homebg/logo.png"
      },

      "description": "Everence Technologies is a digital forensics and cybersecurity company providing digital forensic services, cybersecurity services, digital fraud investigations, digital compliance, e-discovery, device forensics, malware investigation, reputation management, social media monitoring, audio and video forensic analysis, cloud consulting and IT consulting services in India.",

      "telephone": "+91 9920314006",

      "email": "info@everence.io",

      "address": {
        "@type": "PostalAddress",
        "streetAddress": "508, The Summit Business Park, Behind Guru Nanak Petrol Pump",
        "addressLocality": "Andheri East",
        "addressRegion": "Maharashtra",
        "postalCode": "400093",
        "addressCountry": "IN"
      },

      "founder": [
        {
          "@type": "Person",
          "name": "Kailas Kandalkar"
        },
        {
          "@type": "Person",
          "name": "Pramod Prabhakar"
        }
      ],

      "sameAs": [
        "https://in.linkedin.com/company/everence-technologies"
      ],

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "ProfessionalService",
      "@id": "https://www.everence.io/#professionalservice",

      "name": "Everence Technologies",

      "url": "https://www.everence.io/",

      "image": "https://www.everence.io/homebg/logo.png",

      "telephone": "+91 9920314006",

      "email": "info@everence.io",

      "address": {
        "@type": "PostalAddress",
        "streetAddress": "508, The Summit Business Park, Behind Guru Nanak Petrol Pump",
        "addressLocality": "Andheri East",
        "addressRegion": "Maharashtra",
        "postalCode": "400093",
        "addressCountry": "IN"
      },

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": {
        "@type": "Country",
        "name": "India"
      },

      "sameAs": [
        "https://in.linkedin.com/company/everence-technologies"
      ]
    },

    {
      "@type": "WebSite",
      "@id": "https://www.everence.io/#website",

      "url": "https://www.everence.io/",

      "name": "Everence Technologies",

      "description": "Everence Technologies provides digital forensics, cybersecurity, digital investigation, compliance, e-discovery and technology consulting services in India.",

      "publisher": {
        "@id": "https://www.everence.io/#organization"
      },

      "inLanguage": "en-IN",

      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.everence.io/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },

    {
      "@type": "WebPage",
      "@id": "https://www.everence.io/#landingpage",

      "url": "https://www.everence.io/",

      "name": "Digital Forensic & Cybersecurity Services in India | Everence Technologies",

      "headline": "Digital Forensic & Cybersecurity Services in India",

      "description": "Everence Technologies provides digital forensic and cybersecurity services in India, including digital forensic assessments, cybersecurity, ethical hacking, digital fraud investigations, digital compliance, due diligence, malware investigation, e-discovery, device forensics, digital forensic incident response, reputation management, social media monitoring, audio and video forensic analysis, cloud consulting and IT consulting.",

      "keywords": "Digital Forensic Services Company in India, Digital Forensic Company in India, cyber security service providers in india, Ethical Hacking Services in India, cyber security company in india, Forensic Malware Investigation Services in India, Malware Investigation Services in India, Digital Forensic Assessment services in India, Device Forensic Services in India, Digital Forensic Readiness Assessment Services in India, Proactive & Reactive Digital Fraud Investigations in India, Digital Forensic Incident Response Services in india, Digital Compliance Services in India, Due Diligence Services in India, Email Frauds services in india, eDiscovery Services in India, Messaging platform fraud Investigation in india, Email Fraud Investigation in india, Audio Forensic analysis in India, Video Forensic Analysis in India, Cloud Consulting Services in India, IT consulting services in India, Reputation Management Company in India, Social Media Monitoring Services in India, Digital Forensic Training in India",

      "isPartOf": {
        "@id": "https://www.everence.io/#website"
      },

      "about": {
        "@id": "https://www.everence.io/#organization"
      },

      "mainEntity": {
        "@id": "https://www.everence.io/#digital-forensic-service"
      },

      "publisher": {
        "@id": "https://www.everence.io/#organization"
      },

      "breadcrumb": {
        "@id": "https://www.everence.io/#breadcrumb"
      },

      "inLanguage": "en-IN"
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#digital-forensic-service",

      "name": "Digital Forensic Services",

      "serviceType": "Digital Forensics",

      "url": "https://www.everence.io/services/digital-forensic-company-in-india",

      "description": "Everence Technologies provides digital forensic services in India to uncover, preserve and analyse digital evidence across devices, systems, communications and digital environments for investigations, fraud inquiries, cyber incidents, litigation support and regulatory matters.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#cybersecurity-service",

      "name": "Cybersecurity Services",

      "serviceType": "Cybersecurity Services",

      "url": "https://www.everence.io/services/cybersecurity-company-in-india",

      "description": "Everence Technologies provides cybersecurity services in India to help organisations identify cyber risks, strengthen security and protect digital environments against evolving cyber threats.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#digital-forensic-assessments",

      "name": "Digital Forensic Assessments",

      "serviceType": "Digital Forensic Assessment Services",

      "url": "https://www.everence.io/services/digital-forensic-assessments",

      "description": "Digital forensic assessment services in India to identify hidden digital exposures across systems, networks, applications and devices and provide organisations with a clear understanding of their digital risk.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#fraud-investigations",

      "name": "Proactive & Reactive Digital Fraud Investigations",

      "serviceType": "Digital Fraud Investigation Services",

      "url": "https://www.everence.io/services/proactive-reactive-digital-fraud-investigations",

      "description": "Proactive and reactive digital fraud investigation services in India for identifying suspicious digital activity, investigating fraud risks and analysing relevant digital evidence.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#due-diligence",

      "name": "Due Diligence Services",

      "serviceType": "Due Diligence Services",

      "url": "https://www.everence.io/services/due-diligence",

      "description": "Due diligence services in India assessing technology, cybersecurity and data risks before mergers, acquisitions, partnerships, investments and other important business decisions.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#digital-compliance",

      "name": "Digital Compliance Services",

      "serviceType": "Digital Compliance Services",

      "url": "https://www.everence.io/services/digital-compliance",

      "description": "Digital compliance services in India helping organisations align systems, data handling and processes with applicable regulatory and legal expectations.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#digital-forensic-readiness",

      "name": "Digital Forensic Readiness Assessment Services",

      "serviceType": "Digital Forensic Readiness Assessment",

      "url": "https://www.everence.io/services/digital-forensic-readiness-assessments",

      "description": "Digital forensic readiness assessment services in India that help organisations prepare systems, processes and environments to properly preserve digital evidence when an incident or investigation occurs.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#digital-forensic-incident-response",

      "name": "Digital Forensic Incident Response Services",

      "serviceType": "Digital Forensic Incident Response",

      "url": "https://www.everence.io/services/digital-forensic-incident-response",

      "description": "Digital forensic incident response services in India helping organisations investigate, understand and respond to cybersecurity incidents while preserving relevant digital evidence.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#malware-investigation",

      "name": "Forensic Malware Investigation Services",

      "serviceType": "Forensic Malware Investigation",

      "url": "https://www.everence.io/services/forensic-malware-investigation",

      "description": "Forensic malware investigation services in India for identifying, analysing and understanding malicious software, suspicious activity and potential digital evidence.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#training",

      "name": "Digital Forensic Training",

      "serviceType": "Digital Forensic Training Services",

      "url": "https://www.everence.io/services/training",

      "description": "Digital forensic and cybersecurity training services in India for employees, technical teams and leadership to improve awareness, preparedness and response to digital risks.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#e-discovery",

      "name": "eDiscovery Services",

      "serviceType": "eDiscovery Services",

      "url": "https://www.everence.io/services/e-discovery",

      "description": "eDiscovery services in India for identifying, preserving, handling and reviewing digital information relevant to legal, regulatory and internal investigations.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#device-forensics",

      "name": "Device Forensic Services",

      "serviceType": "Device Forensics",

      "url": "https://www.everence.io/services/device-forensics",

      "description": "Device forensic services in India for examining computers, mobile devices, storage media and other digital systems to recover and analyse relevant digital evidence.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#reputation-management",

      "name": "Reputation Management Services",

      "serviceType": "Reputation Management",

      "url": "https://www.everence.io/services/reputation-management",

      "description": "Reputation management services in India helping organisations monitor digital reputation risks and respond to online information that may affect brand trust.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#social-media-monitoring",

      "name": "Social Media Monitoring Services",

      "serviceType": "Social Media Monitoring",

      "url": "https://www.everence.io/services/social-media-monitoring",

      "description": "Social media monitoring services in India helping organisations identify relevant online conversations, emerging risks, narratives and reputation-related activity.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#audio-video-forensics",

      "name": "Audio & Video Forensic Analysis",

      "serviceType": "Audio and Video Forensic Analysis",

      "url": "https://www.everence.io/services/audio-video-forensic-analysis",

      "description": "Audio and video forensic analysis services in India for examining recordings, identifying alterations and evaluating digital media evidence.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/#cloud-it-consulting",

      "name": "Cloud and IT Consulting Services",

      "serviceType": "Cloud and IT Consulting",

      "url": "https://www.everence.io/services/cloud-it-consulting",

      "description": "Cloud and IT consulting services in India supporting organisations with cloud infrastructure, technology risk, governance, security and modern IT environments.",

      "provider": {
        "@id": "https://www.everence.io/#organization"
      },

      "areaServed": [
        {
          "@type": "Country",
          "name": "India"
        },
        {
          "@type": "City",
          "name": "Mumbai",
          "containedInPlace": {
            "@type": "State",
            "name": "Maharashtra"
          }
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.everence.io/#faq",

      "mainEntity": [
        {
          "@type": "Question",
          "name": "What types of cyber security services does Everence offer in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Everence offers a wide range of cyber security services in India, including risk assessment, compliance management, vulnerability testing, employee training, and data protection solutions to keep businesses secure."
          }
        },
        {
          "@type": "Question",
          "name": "Why are cyber security services important for businesses in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cyber security services are essential in India to safeguard sensitive data, prevent financial losses, and ensure business continuity."
          }
        }
      ]
    }
  ]
};
export default function Page() {
  return <IntroLanding />;
}
