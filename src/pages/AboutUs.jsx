"use client";

import { useState, useEffect } from "react";
import FreeDemoForm from "../components/ContactUs/FreeDemoForm";
import Hero from "../components/About/Hero";
import MeetOurLeaders from "../components/About/MeetOurLeaders";
import SecurityMarquee from "../components/HomePage/SecurityMarquee";
import TrustSection from "../components/About/TrustSection";
import AboutWhyUs from "../components/About/AboutWhyUs";
import PopUpTimeOut from "../lib/PopUpTimeOut";
import AboutPurpose from "../components/About/AboutPurpose";
import Services from "../components/HomePage/Services";
import ReachUsForm from "../components/ContactUs/ReachUsForm";

const AboutUs = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
    {/* content page */}
    <div className="bg-gray-50 dark:bg-slate-900 dark:text-white transition-colors duration-500">
      <PopUpTimeOut />
      <Hero />
      {/* CTA Section */}
      {showForm && (
        <FreeDemoForm
          onClose={() => setShowForm(false)}
          title1={"Register for a Free Session"}
          title2={"Get in Touch"}
        />
      )}
      {/* <section className="bg-gradient-to-tr from-blue-500 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your IT Career?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join hundreds of successful students who have transformed their careers with our training programs.
          </p>
          <button className="bg-blue-300 shadow-2xl shadow-blue-200 hover:scale-95 hover:bg-blue-700 text-blue-900 hover:text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300" onClick={()=> setShowForm(true)}>
            Enroll Now
          </button>
        </div>
      </section> */}
      
    </div>
     <SecurityMarquee />
     <TrustSection />
     <AboutPurpose />
     <AboutWhyUs />
     <MeetOurLeaders />
     <Services />
     < ReachUsForm />
    </>
  );
};

export default AboutUs;
