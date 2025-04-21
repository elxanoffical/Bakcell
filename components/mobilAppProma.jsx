"use client";

import React from "react";
import Image from "next/image";
import appLogo from "@/app/assets/images/appLogo.svg";

export default function MobileAppPromo() {
  return (
    <section className="bg-white py-7 mb-4">
      <div className="container mx-auto flex flex-col gap-4 items-center px-4 sm:px-6 md:px-8">
        {/* Logo */}
        <div className="mb-4">
          <Image
            src={appLogo}
            alt="Bakcell mobil tətbiqi"
            width={80}
            height={80}
          />
        </div>

        {/* Subtitle */}
        <p className="text-red-600 font-bold mb-2 text-sm sm:text-base">
          Bakcell mobil tətbiqi.
        </p>

        {/* Main headline */}
        <h2
          className="
            text-4xl sm:text-5xl md:text-6xl lg:text-[64px]
            font-bold text-[#200000]
            mb-6
            w-[220px] sm:w-[300px] md:w-[400px] lg:w-[600px]
            leading-tight sm:leading-snug md:leading-[1.2]
            text-center
          "
        >
          Nömrənlə bağlı bütün əməliyyatlar bir tətbiqdə!
        </h2>

        {/* Call‑to‑action button */}
        <button
          className="
            bg-red-600 text-white font-semibold cursor-pointer
            px-6 sm:px-8 py-2 sm:py-3
            rounded-2xl
            clip-none md:[clip-path:polygon(10%_15%,90%_0%,90%_100%,2%_90%)]
            w-full sm:w-auto
            transition-transform hover:scale-105
          "
        >
          <span>Tətbiqimizi yüklə</span>
        </button>
      </div>
    </section>
  );
}
