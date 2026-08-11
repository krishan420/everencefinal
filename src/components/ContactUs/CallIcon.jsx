"use client";

import React from "react";
import { SafeImage } from "../../lib/SafeImage";

const CallIcon = () => {
  const handleClick = () => {
    window.open("tel:9920314006");
  };

  return (
    <div
      onClick={handleClick}
      className="
        fixed
        sm:top-[45vh]
        sm:right-6
        top-[78vh]
        right-7
        z-50
        cursor-pointer
        group
      "
    >
      {/* Hover Text Box */}
      <div
        className="
          absolute
          right-[60px]
          top-1/2
          -translate-y-1/2
          bg-blue-600
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
        Call Us
      </div>

      {/* Call Icon */}
      <div
        className="
          rounded-full
          hover:scale-110
          transition-transform
        "
      >
        <SafeImage
          src="https://cdn-icons-png.flaticon.com/512/724/724664.png"
          alt="Call"
          className="w-[40px] h-[40px] md:w-[30px] md:h-[30px]"
        />
      </div>
    </div>
  );
};

export default CallIcon;
