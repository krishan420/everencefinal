"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const PramodPrabhakar = () => {
  const faqs = [
    {
      question: "Who is Pramod Prabhakar?",
      answer:
        "Pramod Prabhakar is the Founder and Director at Everence, specializing in fraud investigations, investment risk advisory, litigation support, and corporate risk intelligence. He brings extensive experience in handling high-stakes corporate and financial matters.",
    },
    {
      question: "What industries does Pramod Prabhakar specialize in?",
      answer:
        "Pramod works with multinational corporations, private equity firms, government bodies, and legal teams across sectors including finance, corporate governance, regulatory compliance, and risk intelligence.",
    },
    {
      question: "Is Pramod Prabhakar a Certified Fraud Examiner (CFE)?",
      answer:
        "Yes, Pramod Prabhakar is a Certified Fraud Examiner (CFE) with deep expertise in fraud detection, anti-bribery compliance, forensic investigations, and investment risk assessment.",
    },
    {
      question: "What services does Pramod Prabhakar provide?",
      answer:
        "Pramod Prabhakar provides specialized advisory services in fraud investigations, forensic analysis, investment risk assessment, and litigation support. As a Certified Fraud Examiner (CFE) and Founder–Director at Everence, he advises corporations, private equity firms, and government bodies on anti-bribery compliance, corporate due diligence, regulatory risk, and reputation management in high-risk and complex business environments.",
    },
    {
      question: "How can I contact Pramod Prabhakar?",
      answer:
        "You can connect with Pramod Prabhakar through Everence’s official website or via his LinkedIn profile listed on the Everence About page.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {/* ================= VIDEO HERO ================= */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/coursesBgImages/abtf2.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-white/85" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-4xl md:text-6xl font-semibold text-[#555]"
          >
            Pramod Prabhakar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg text-gray-600"
          >
            Founder – Director
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 flex items-center gap-2 text-sm text-gray-600"
          >
            <Link href="/">Home</Link>
            <span>›</span>
            <Link href="/about-us">About Us</Link>
            <span>›</span>
            <span className="font-medium text-gray-800">
              Pramod Prabhakar
            </span>
          </motion.div>
        </div>
      </section>

      {/* ================= PROFILE SECTION ================= */}
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12 md:items-stretch">

        {/* LEFT CONTENT */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-2 text-[#555]">
            Meet Mr. Pramod Prabhakar
          </h2>

          <h4 className="text-2xl font-bold mb-2 text-orange-500">
            Founder – Director
          </h4>

          <div className="space-y-2 text-gray-600 leading-8">
            <p>
             <b className="text-orange-500" > <a href="https://everence.io/">Pramod Prabhakar Everence  </a>  </b>represents a leadership 
             profile shaped by over two decades of real-world exposure 
             to fraud risk, forensic investigation, and complex corporate 
             environments. An IIM graduate and a <b className="text-orange-500" > Certified  Fraud Examiner,
              Pramod Prabhakar,</b> he has built his career working closely with 
              organisations facing high-stakes financial, legal, and reputational 
              challenges. His experience includes operating in demanding international 
              contexts and leading sensitive engagements where judgment, 
              discretion, and accountability matter as much as technical skill.
            </p>
            <p>
              Recognised as a <b className="text-orange-500" > Pramod Prabhakar fraud investigation expert 
              and Pramod Prabhakar forensic specialist, </b>he has supported 
              enterprises, investors, and promoters through cases involving
               insider misconduct, financial fraud, digital evidence review,
                and litigation-critical investigations. As an investment risk 
                advisor and corporate risk consultant, his work often extends 
                into due diligence, post-incident assessment, and advisory 
                support for leadership teams navigating uncertainty under 
                regulatory and investor scrutiny.
            </p>
            <p>
              At Everence, <b className="text-orange-500" > <a href="https://everence.io/services/reputation-management"> Pramod Prabhakar, reputation management advisor</a> </b> and <b>  Pramod Prabhakar
               litigation support expert roles  </b> come into focus through engagements where outcomes 
               influence not only systems, but trust, valuation, and long-term credibility. 
               His involvement spans investigation strategy, evidence defensibility, 
               and executive guidance during moments that demand clarity and restraint. 
             <b className="text-orange-500" > <a href="https://in.linkedin.com/in/pramodprabhakar1"> This Pramod Prabhakar official profile</a> </b>reflects a career grounded in integrity,
                measured decision-making, and protecting what organisations cannot afford to lose. 
            </p>
          </div>
        </div>

       {/* RIGHT IMAGE */}
<div className="flex-1">
  <div className="md:sticky md:top-32">
    <img
      src="/homebg/pramod-prabhakar.jpg"
      alt="Pramod Prabhakar - Founder & Director"
      className="w-full rounded-xl shadow-xl"
    />
  </div>
</div>

      </div>

      {/* ================= FAQ ================= */}
      <div className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-orange-600">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-6 text-left font-semibold text-lg"
                >
                  {faq.question}
                  <span
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`px-6 transition-all duration-300 ${
                    openIndex === index
                      ? "max-h-40 py-4 opacity-100"
                      : "max-h-0 opacity-0"
                  } overflow-hidden`}
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default PramodPrabhakar;