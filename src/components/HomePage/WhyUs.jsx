"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import RichText from "@/components/RichText";
import ReachUsPopup from "../ContactUs/ReachUsPopup";

const WhyUs = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <section className="w-full bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-stretch">
            
            {/* LEFT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-full"
            >
              <img
                src="/homebg/whydj.png"
                alt="Cyber Defense"
                className="rounded-2xl w-full h-full object-cover shadow-xl"
              />
            </motion.div>

            {/* RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <p className="text-primary font-bold mb-3 text-3xl sm:text-4xl md:text-5xl">
                Why Choose Us
              </p>

              <h2 className="text-3xl md:text-3xl font-extrabold text-[#757373] mb-6">
                Complete Cyber Defense <br className="hidden sm:block" />
                for a Complex Digital World
              </h2>

              {/* ✅ FIXED DESCRIPTION WITH MULTIPLE LINKS */}
              <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-xl">
                <RichText
                  content={[
                   
                    " Cybersecurity services in India today demand more than tools or isolated fixes. It requires judgment, preparation, and the ability to respond calmly when situations carry operational, legal, or reputational weight. ",
                    "Everence operates as both a ",
                    {
                      text: "Digital Forensic",
                      link: "/services/digital-forensic-assessments",
                      color: "text-[#F56C14]",
                    },
                    " and ",
                    {
                      text: " Cyber Security company in India, ",
                      link: "/services/forensic-malware-investigation",
                      color: "text-[#F56C14]",
                    },
                    
                    "  helping organisations manage risk with clarity and control. We work quietly alongside leadership teams, focusing on accuracy, discretion, and outcomes that withstand real-world scrutiny. "
                  ]}
                />
              </p>

              {/* CTA */}
              <motion.button
                onClick={() => setOpenPopup(true)}
                whileHover={{
                  y: -3,
                  scale: 1.05,
                  boxShadow: "0px 10px 30px rgba(255,103,0,0.35)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.25 }}
                className="bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg w-fit"
              >
                Get in Touch
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* POPUP */}
      {openPopup && (
        <ReachUsPopup
          open={openPopup}
          onClose={() => setOpenPopup(false)}
        />
      )}
    </>
  );
};

export default WhyUs;