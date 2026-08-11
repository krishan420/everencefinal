"use client";

import React from "react";
import { SafeImage } from "../../lib/SafeImage";

const EmailIcon = () => {
  const handleClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Mobile → open native email app
      window.location.href = "mailto:info@everence.io";
    } else {
      // Desktop → open Gmail compose in browser
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=info@everence.io",
        "_blank"
      );
    }
  };

  return (
    <div
      onClick={handleClick}
      className="
        fixed
        top-[35vh]
        right-5
        z-50
        cursor-pointer
        group
      "
    >
      {/* Hover Text */}
      <div
        className="
          absolute
          right-[55px]
          top-1/2
          -translate-y-1/2
          bg-orange-500
          text-white
          px-3
          py-1
          rounded-lg
          text-sm
          font-medium
          whitespace-nowrap
          opacity-0
          translate-x-4
          group-hover:opacity-100
          group-hover:translate-x-0
          transition-all
          duration-300
          shadow-lg
        "
      >
        Email Us
      </div>

      {/* Email Icon with Circular Background */}
      <div
        className="
          w-[34px]
          h-[34px]
          bg-white
          rounded-full
          flex
          items-center
          justify-center
          shadow-lg
          hover:scale-110
          transition-transform
          duration-300
        "
      >
        <SafeImage
          src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
          alt="Email"
          className="w-[20px] h-[20px]"
        />
      </div>
    </div>
  );
};

export default EmailIcon;
