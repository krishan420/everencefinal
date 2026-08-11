"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/* ---------------- FAQ DATA ---------------- */
const faqs = [
  {
    question: "What is digital forensics in cybersecurity?",
    answer:
      "Digital forensics is the process of collecting, preserving, analyzing, and reporting digital evidence after a cyber incident. It helps organizations determine how an attack occurred, identify affected systems, recover evidence, and support legal or regulatory investigations. Digital forensics plays a critical role in incident response and cybersecurity risk management."
  },
  {
    question: "What services does a Digital Forensic and Cybersecurity Company in India provide?",
    answer:
      "A Digital Forensic and Cybersecurity Company in India typically provides digital forensic investigations, incident response, malware analysis, cybersecurity consulting, risk assessments, cloud security services, compliance assessments, reputation management, eDiscovery services, and cybersecurity training. These services help organizations strengthen security, investigate incidents, and protect sensitive information from evolving cyber threats."
  },
  {
    question: "Why do businesses need digital forensic and cybersecurity services?",
    answer:
      "Businesses need digital forensic and cybersecurity services to protect sensitive data, investigate cyber incidents, prevent financial losses, and maintain business continuity. These services help organizations identify vulnerabilities, respond to cyberattacks, preserve digital evidence, and comply with regulatory requirements. Strong cybersecurity practices also improve customer trust and reduce operational and reputational risks."
  },
  {
    question: "How does a Digital Forensic and Cybersecurity Company help after a cyberattack?",
    answer:
      "After a cyberattack, a Digital Forensic and Cybersecurity Company investigates the incident, preserves digital evidence, identifies the attack method, and recommends remediation measures. Experts also help contain threats, recover systems, assess damages, and implement security improvements that reduce the risk of future incidents."
  },
  {
    question: "What types of cyber threats do businesses face in India?",
    answer:
      "Businesses in India commonly face ransomware attacks, phishing campaigns, data breaches, malware infections, insider threats, business email compromise, social engineering attacks, and unauthorized access attempts. These threats can affect operations, financial stability, and customer trust. Cybersecurity services help organizations detect and mitigate these risks effectively."
  },
  {
    question: "Which industries need digital forensic and cybersecurity services?",
    answer:
      "Industries such as banking, financial services, healthcare, manufacturing, government, insurance, retail, education, telecommunications, and information technology require digital forensic and cybersecurity services. These sectors handle sensitive information and face significant cyber risks, making strong security and investigation capabilities essential."
  },
  {
    question: "How can businesses protect themselves from cyberattacks?",
    answer:
      "Businesses can protect themselves by implementing strong access controls, multi-factor authentication, regular security assessments, employee awareness training, secure backups, incident response plans, and continuous monitoring. A proactive cybersecurity strategy significantly reduces the likelihood and impact of cyber incidents."
  },
  {
    question: "How does Everence support fraud investigations?",
    answer:
      "Everence supports fraud investigations by analyzing digital evidence, financial records, communications, devices, and system activities to uncover fraudulent behavior. Our investigations help identify the source, scope, and impact of fraud incidents. The findings support informed decision-making, risk mitigation, and legal or regulatory actions when necessary."
  },
  {
    question: "How can Everence help after a cyberattack?",
    answer:
      "Everence helps organizations respond to cyberattacks by conducting forensic investigations, identifying the source and impact of the incident, preserving evidence, and supporting recovery efforts. Our experts analyze affected systems and provide actionable recommendations to contain threats and prevent future incidents. This helps businesses minimize downtime and strengthen cyber resilience."
  },
  {
    question: "Why choose Everence as a Digital Forensic and Cybersecurity Company in India?",
    answer:
      "Everence provides comprehensive digital forensic and cybersecurity services designed to help organizations detect, investigate, and mitigate cyber risks. Our team combines forensic expertise, cybersecurity knowledge, and advanced investigative methodologies to deliver accurate insights and actionable solutions. Clients choose Everence for confidentiality, technical excellence, rapid response, and customized strategies that strengthen security and support business resilience."
  }
];

/* ---------------- ANIMATION VARIANTS ---------------- */
const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ---------------- COMPONENT ---------------- */
const HomeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-semibold mb-2 text-[26px]">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#757373]">
            Everything You Need to Know
          </h2>
          <p className="mt-4 text-black max-w-2xl mx-auto">
            Clear answers to common questions about our cybersecurity services,
            processes, and expertise.
          </p>
        </motion.div>

        {/* FAQ Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start"
        >
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition-all h-fit"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <h3 className="text-lg font-semibold text-[#757373] pr-6">
                    {faq.question}
                  </h3>

                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="https://wa.me/919819848507"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition shadow-lg"
          >
            Still Have Questions? 
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeFAQ;