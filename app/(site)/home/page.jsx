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
      "name": "Everence Technologies",
      "url": "https://www.everence.io/",
      "logo": {
        "@id": "https://www.everence.io/#logo"
      },
      "image": {
        "@id": "https://www.everence.io/#logo"
      },
      "description": "Everence Technologies provides Digital Compliance Services, digital forensics, cybersecurity, digital investigations, fraud investigations, eDiscovery, device forensics, malware investigation, reputation management, social media monitoring, audio and video forensic analysis, cloud consulting and IT consulting services in India.",
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
      "sameAs": [
        "https://in.linkedin.com/company/everence-technologies"
      ],
      "founder": [
        {
          "@id": "https://www.everence.io/#kailas-kandalkar"
        },
        {
          "@id": "https://www.everence.io/#pramod-prabhakar"
        }
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
      "@type": "WebSite",
      "@id": "https://www.everence.io/#website",
      "url": "https://www.everence.io/",
      "name": "Everence Technologies",
      "description": "Everence Technologies provides Digital Compliance Services, digital forensics, cybersecurity, digital investigations, fraud investigations, eDiscovery and technology consulting services in India.",
      "publisher": {
        "@id": "https://www.everence.io/#organization"
      },
      "inLanguage": "en-IN"
    },

    {
      "@type": "WebPage",
      "@id": "https://www.everence.io/services/digital-compliance#webpage",
      "url": "https://www.everence.io/services/digital-compliance",
      "name": "Digital Compliance Services in India | Everence Technologies",
      "headline": "Digital Compliance Services in India",
      "description": "Everence Technologies provides Digital Compliance Services in India to help organizations align their digital infrastructure, applications, data processing activities, cybersecurity practices, policies, and controls with applicable legal, regulatory, privacy, and industry requirements. Our compliance services help identify gaps, strengthen governance, support audits, protect sensitive information, and maintain ongoing compliance readiness.",
      "keywords": "Digital Compliance Services in India, Digital Compliance Company in India, Digital Compliance Services, Compliance Services in India, Digital Regulatory Compliance Services in India, Cybersecurity Compliance Services in India, Data Protection Compliance Services in India, IT Compliance Services in India, Compliance Assessment Services in India, Regulatory Compliance Services in India, Digital Compliance Consulting in India, Data Privacy Compliance Services in India, Cybersecurity Compliance Assessment in India, Compliance Risk Assessment Services in India, Digital Governance Services in India, IT Compliance Consulting Services in India, Regulatory Gap Analysis Services in India, Digital Audit Support Services in India, Compliance Readiness Services in India, Data Security Compliance Services in India",
      "isPartOf": {
        "@id": "https://www.everence.io/#website"
      },
      "about": {
        "@id": "https://www.everence.io/services/digital-compliance#service"
      },
      "mainEntity": {
        "@id": "https://www.everence.io/services/digital-compliance#service"
      },
      "primaryImageOfPage": {
        "@id": "https://www.everence.io/services/digital-compliance#image"
      },
      "publisher": {
        "@id": "https://www.everence.io/#organization"
      },
      "breadcrumb": {
        "@id": "https://www.everence.io/services/digital-compliance#breadcrumb"
      },
      "inLanguage": "en-IN"
    },

    {
      "@type": "ImageObject",
      "@id": "https://www.everence.io/services/digital-compliance#image",
      "url": "https://www.everence.io/homebg/logo.png",
      "contentUrl": "https://www.everence.io/homebg/logo.png",
      "caption": "Everence Technologies Logo",
      "representativeOfPage": true
    },

    {
      "@type": "ImageObject",
      "@id": "https://www.everence.io/#logo",
      "url": "https://www.everence.io/homebg/logo.png",
      "contentUrl": "https://www.everence.io/homebg/logo.png",
      "caption": "Everence Technologies Logo"
    },

    {
      "@type": "Service",
      "@id": "https://www.everence.io/services/digital-compliance#service",
      "name": "Digital Compliance Services",
      "serviceType": "Digital Compliance Services",
      "url": "https://www.everence.io/services/digital-compliance",
      "description": "Everence Technologies provides Digital Compliance Services in India to help organizations ensure that digital infrastructure, applications, data processing activities, cybersecurity practices, policies, and controls comply with applicable legal, regulatory, privacy, and industry requirements. The service includes compliance gap analysis, policy review, data protection compliance checks, cybersecurity compliance assessments, audit support, risk monitoring, and ongoing compliance readiness.",
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
      ],
      "audience": {
        "@type": "BusinessAudience",
        "audienceType": "Businesses and Organizations"
      }
    },

    {
      "@type": "Person",
      "@id": "https://www.everence.io/#kailas-kandalkar",
      "name": "Kailas Kandalkar",
      "jobTitle": "Founder - Director",
      "worksFor": {
        "@id": "https://www.everence.io/#organization"
      }
    },

    {
      "@type": "Person",
      "@id": "https://www.everence.io/#pramod-prabhakar",
      "name": "Pramod Prabhakar",
      "jobTitle": "Founder - Director",
      "worksFor": {
        "@id": "https://www.everence.io/#organization"
      }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://www.everence.io/services/digital-compliance#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.everence.io/home"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Our Services",
          "item": "https://www.everence.io/our-services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Digital Compliance",
          "item": "https://www.everence.io/services/digital-compliance"
        }
      ]
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.everence.io/services/digital-compliance#faq",
      "url": "https://www.everence.io/services/digital-compliance",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is digital compliance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital compliance is the process of ensuring that an organization's digital infrastructure, applications, data processing activities, and cybersecurity practices comply with legal, regulatory, and industry requirements. It involves implementing policies, controls, monitoring mechanisms, and risk management processes to protect sensitive information and demonstrate adherence to applicable standards. Effective digital compliance supports business continuity, security, and customer trust."
          }
        },
        {
          "@type": "Question",
          "name": "Why are Digital Compliance Services important for businesses?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital Compliance Services are important because they help businesses avoid legal penalties, data breaches, and regulatory violations. They ensure that organizations follow data protection laws, cybersecurity standards, and industry regulations. By maintaining compliance, businesses can protect sensitive information, strengthen customer trust, and reduce operational and reputational risks."
          }
        },
        {
          "@type": "Question",
          "name": "What do Digital Compliance Services include?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital Compliance Services typically include regulatory gap analysis, policy review, data protection compliance checks, cybersecurity compliance assessments, audit support, and risk monitoring. These services also help organizations align with frameworks such as IT regulations, privacy laws, and industry-specific compliance requirements. This ensures continuous adherence to legal and security standards."
          }
        },
        {
          "@type": "Question",
          "name": "How do Digital Compliance Services help organizations stay compliant?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital Compliance Services help organizations stay compliant by identifying gaps in existing systems, policies, and processes. Experts assess compliance risks, recommend corrective actions, and implement monitoring mechanisms to ensure ongoing adherence. This proactive approach reduces the risk of violations, improves governance, and ensures readiness for audits and regulatory inspections."
          }
        },
        {
          "@type": "Question",
          "name": "When should a company use Digital Compliance Services?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A company should use Digital Compliance Services when launching digital operations, handling sensitive customer data, adopting new technologies, or preparing for regulatory audits. It is also essential during business expansion, system upgrades, or after a security incident. Regular compliance assessments help organizations stay aligned with evolving legal and regulatory requirements."
          }
        },
        {
          "@type": "Question",
          "name": "What are the benefits of Digital Compliance Services in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital Compliance Services in India help organizations reduce legal risks, avoid regulatory penalties, and improve data security practices. These services strengthen governance, enhance transparency, and ensure adherence to compliance frameworks. As a result, businesses build stronger trust with customers, regulators, and stakeholders while improving operational efficiency."
          }
        },
        {
          "@type": "Question",
          "name": "How do Digital Compliance Services support data protection?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital Compliance Services support data protection by ensuring that organizations follow privacy laws and secure handling of personal and sensitive information. They include assessments of data storage, access controls, encryption practices, and breach response readiness. This helps organizations minimize the risk of data leaks and maintain compliance with privacy regulations."
          }
        },
        {
          "@type": "Question",
          "name": "How do digital compliance services help prevent cyber risks?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital compliance services help prevent cyber risks by identifying vulnerabilities, strengthening security controls, improving governance practices, and ensuring adherence to cybersecurity standards. Compliance assessments uncover gaps that may expose organizations to data breaches, unauthorized access, and operational disruptions. Addressing these gaps enhances resilience and reduces the likelihood of security incidents and regulatory penalties."
          }
        },
        {
          "@type": "Question",
          "name": "Who needs Digital Compliance Services in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Digital Compliance Services in India are essential for IT companies, financial institutions, healthcare organizations, e-commerce businesses, startups, and government bodies. Any organization that collects, processes, or stores digital data needs compliance support. These services help ensure regulatory adherence and reduce risks associated with digital operations."
          }
        },
        {
          "@type": "Question",
          "name": "Why choose Everence for Digital Compliance Services in India?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Everence provides structured, intelligence-driven Digital Compliance Services in India focused on full regulatory alignment and risk reduction. Our team identifies gaps in policies, systems, and processes using strong compliance and technical expertise, and delivers clear, actionable recommendations with ongoing support. Organizations choose Everence for accurate assessments, confidentiality, quick turnaround, and reliable guidance that ensures long-term compliance readiness."
          }
        }
      ]
    }

  ]
}
;

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