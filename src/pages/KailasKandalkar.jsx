"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const KailasKandalkar = () => {

  const faqs = [
     {
       question: "Who is Kailas Kandalkar?",
       answer:
         "Kailas Kandalkar is a risk intelligence and forensic advisory expert at Everence, specializing in fraud investigations, compliance strategy, and corporate risk management.",
     },
     {
       question: "What services does Kailas Kandalkar provide?",
       answer:
      "Kailas Kandalkar provides fraud investigation, forensic analysis, investment risk advisory, litigation support, and compliance consulting services.",
    },
     {
       question: "What industries does Kailas Kandalkar work with?",
       answer:
         "He works with multinational corporations, private equity firms, financial institutions, and legal teams managing regulatory, compliance, and fraud-related risks.",
     },
     {
       question: "Is Kailas Kandalkar a Certified Fraud Examiner?",
       answer:
      "Yes, Kailas Kandalkar is a Certified Fraud Examiner (CFE) with extensive experience in fraud detection, anti-corruption compliance, and financial crime investigations.",
    },
     {
       question: "What makes Kailas Kandalkar a trusted corporate advisor?",
       answer:
         "With experience in over 2,000 fraud investigations and cross-border advisory roles, he combines strategic insight with forensic expertise to deliver actionable, high-impact risk solutions.",
     },
     {
       question: "How can I contact Kailas Kandalkar?",
       answer:
         "You can contact Kailas Kandalkar through the official Everence website contact form or connect with him via LinkedIn for professional inquiries.",
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
             Kailas Kandalkar
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
              Kailas Kandalkar
             </span>
           </motion.div>
         </div>
       </section>
 
       {/* ================= PROFILE SECTION ================= */}
       <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row gap-12 md:items-stretch">
 
         {/* LEFT CONTENT */}
         <div className="flex-1 flex flex-col justify-center">
           <h2 className="text-4xl font-bold mb-2 text-[#555]">
             Meet Mr. Kailas Kandalkar
           </h2>
 
           <h4 className="text-2xl font-bold mb-2 text-orange-500">
             Founder – Director
           </h4>
 
           <div className="space-y-2 text-gray-600 leading-8">
             <p>
              <b className="text-orange-500" > <a href="https://everence.io/">Kailas Kandalkar Everence  </a>  </b>reflects a leadership profile shaped by deep experience in fraud investigation, 
              digital forensics, and enterprise risk advisory. As a <b className="text-orange-500" > Certified Fraud Examiner, Kailas Kandalkar, </b> 
              he has worked extensively at the intersection of digital resilience, compliance, and high-stakes decision-making. His career spans advising
               organisations on how to manage risk in complex operational environments while enabling secure transformation and long-term trust.
             </p>
             <p>
               Recognised as a <b className="text-orange-500" > Kailas Kandalkar fraud investigation expert 
                 </b> and <b>Kailas Kandalkar forensic specialist, </b>
                  he has led and supervised a large volume of investigations involving financial fraud, corruption, insider misconduct, and reputational exposure. As a corporate risk consultant and investment risk advisor, his work frequently supports private equity firms, multinational enterprises,
                   and public sector bodies during due diligence, regulatory scrutiny, and sensitive transitions. He is also known as a
                   <b> <a href="https://everence.io/services/due-diligence">Kailas Kandalkar due diligence specialist,</a> </b>
                   helping leadership teams identify hidden digital and operational risks before they surface post-transaction.

             </p>
             <p>
               At Everence, <b className="text-orange-500" > Kailas Kandalkar compliance expert</b> and <b> Kailas Kandalkar litigation support advisor  </b>
               roles are central to shaping defensible outcomes across cybersecurity, digital forensics, and risk intelligence engagements. He leads cross-functional teams that deliver structured, evidence-driven insights that stand up to audit, regulatory review, and legal examination. This 

              <b className="text-orange-500" > <a href="https://www.linkedin.com/in/kailaskandalkar"> Kailas Kandalkar official profile</a> </b>represents a career grounded in clarity, accountability, and helping organisations navigate risk with confidence. 
             </p>
           </div>
         </div>
 
        {/* RIGHT IMAGE */}
 <div className="flex-1">
   <div className="md:sticky md:top-32">
     <img
       src="/homebg/kailas-kandalkar.jpg"
       alt="Kailas Kandalkar – Founder – Director at Everence"
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

export default KailasKandalkar;