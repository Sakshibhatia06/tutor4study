"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Whatsapp = FaWhatsapp as React.FC<React.SVGProps<SVGSVGElement>>;

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/7646095877"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed 
        group     
        bottom-10 
        right-6 
        z-[9999] 
        flex 
        items-center 
        justify-center 
        w-16 h-16 
        rounded-full 
        bg-[#25D366] 
        hover:scale-105 
        transition-transform 
        duration-300 
        shadow-[0_8px_20px_rgba(0,0,0,0.5)]
        whatsapp-float       
      "
    >
        {/* Tooltip */}
      <span
        className="
          absolute 
          right-20 
          bg-white 
          text-black 
          text-sm 
          font-medium 
          px-3 
          py-2 
          rounded-lg 
          shadow-lg 
          opacity-0 
          translate-x-2
          group-hover:opacity-100 
          group-hover:translate-x-0 
          transition-all 
          duration-300
          whitespace-nowrap
        "
      >
        Need help? Chat With Us!
      </span>

      {/* WhatsApp Icon */}
      <div
        className="
          flex 
          items-center 
          justify-center 
          w-16 h-16 
          rounded-full 
          bg-[#25D366] 
          hover:scale-105 
          transition-transform 
          duration-300 
          shadow-[0_8px_20px_rgba(0,0,0,0.5)]
          relative
        "
      >
      <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[#25D366]">
        <Whatsapp className="w-8 h-8 text-white whatsapp-pulse" />
        <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
      </div>
      </div>
    </a>
  );
}
