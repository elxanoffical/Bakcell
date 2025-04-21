"use client";

import React from "react";
import Image from "next/image";
import appLogo from "@/app/assets/images/appLogo.svg";

export default function MobileAppPromo() {
  return (
    <section className="bg-white py-7 mb-4 ">
      <div className="container mx-auto flex flex-col gap-3 items-center px-4 ">
        <div className=" mb-4">
          <Image
            src={appLogo}
            alt="Bakcell mobil tətbiqi"
            width={80}
            height={80}
          />
        </div>

        <p className="text-red-600 font-bold mb-2">Bakcell mobil tətbiqi.</p>

        <h2
          className="text-3xl sm:text-4xl md:text-[64px] font-bold text-[#200000] 
        mb-6  w-[600px] leading-19 text-center"
        >
          Nömrənlə bağlı bütün əməliyyatlar bir tətbiqdə!
        </h2>

        <button
          className="px-8 py-3 bg-red-600 rounded-2xl"
          style={{
            clipPath: "polygon(10% 15%, 90% 0%, 90% 100%, 2% 90%)",
          }}
        >
          <span className=" text-white font-semibold">Tətbiqimizi yüklə</span>
        </button>
      </div>
    </section>
  );
}
