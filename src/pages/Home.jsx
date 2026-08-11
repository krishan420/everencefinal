"use client";

import React, { memo, useEffect, useState } from "react";
import PopUpTimeOut from "../lib/PopUpTimeOut";
import Banner from "../components/HomePage/Banner/Banner";
import AbtCompany from "../components/HomePage/AbtCompany";
import SecurityMarquee from "../components/HomePage/SecurityMarquee";
import Services from "../components/HomePage/Services";
import WhyUs from "../components/HomePage/WhyUs";
import RealCaseStudies from "../components/HomePage/RealCaseStudies";
import ReachUsForm from "../components/ContactUs/ReachUsForm";
import HomeFAQ from "../components/HomePage/HomeFAQ";
import Certifications from "../components/HomePage/Certificates";

/* ================= PAGE LOAD ANIMATION (SAME AS ABOUT PAGE) ================= */
 
const pageVariants = { 
  hidden: { y: 24 },
  show: {
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};
function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fromIntro = sessionStorage.getItem("fromIntro");

    const timer = setTimeout(() => {
      if (!fromIntro) setShowPopup(true);
      else sessionStorage.removeItem("fromIntro");
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* PAGE LOAD ANIMATION */}

        {showPopup && <PopUpTimeOut />}

        <Banner />
        <AbtCompany />
        <SecurityMarquee />
        <Services />
         <Certifications />
        <WhyUs />
        <RealCaseStudies />
        {/* <HomeBlogShowcase /> */}
        <ReachUsForm />
        <HomeFAQ />
     
    </>
  );
}

export default memo(Home);