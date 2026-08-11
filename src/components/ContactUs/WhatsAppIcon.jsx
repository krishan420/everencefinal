"use client";

import React from "react";
import { SafeImage } from "../../lib/SafeImage";

const WhatsAppIcon = () => {
  const handleClick = () => {
    window.open("https://wa.me/9920314006", "_blank");
  };

  return (
    <div
      onClick={handleClick}
      className="
        fixed
        top-[55vh]
        right-5
        z-50
        cursor-pointer
        group
      "
    >
      {/* Hover Text Box */}
      <div
        className="
          absolute
          right-[70px]
          top-1/2
          -translate-y-1/2
          bg-[#25D366]
          text-white
          px-2
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
        Chat on WhatsApp
      </div>

      {/* WhatsApp Icon */}
      <div
        className="
          rounded-full
          hover:scale-110
          transition-transform
        "
      >
        <SafeImage
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-[40px] h-[40px] md:w-[38px] md:h-[38px]"
        />
      </div>
    </div>
  );
};

export default WhatsAppIcon;
