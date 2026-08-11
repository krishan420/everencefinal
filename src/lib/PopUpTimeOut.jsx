"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import FreeDemoForm from "../components/ContactUs/FreeDemoForm";

function PopUpTimeOut() {
  const pathname = usePathname();
  const [showPopup, setShowPopup] = useState(false);
  const [popupCount, setPopupCount] = useState(0);

  useEffect(() => {
    if (popupCount >= 2) return;

    const timer = setInterval(() => {
      setShowPopup(true);
      setPopupCount((prev) => prev + 1);
    }, 17000);

    return () => clearTimeout(timer);
  }, [pathname, popupCount]);

  return (
    <>
      {showPopup && <FreeDemoForm onClose={() => setShowPopup(false)} />}
    </>
  );
}

export default PopUpTimeOut;
