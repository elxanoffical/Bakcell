"use client";

import React from "react";
import Image from "next/image";
import esimImage from "@/app/assets/images/esim_banner.webp";
import { FaArrowRightLong } from "react-icons/fa6";

export default function EsimSection() {
  return (
    <section className=" my-20 px-5">
      <div className=" container mx-auto p-4 rounded-xl bg-red-100">
        <div className="relative flex h-[420px] overflow-hidden rounded-lg">
          <div
            className="
            absolute inset-0
            bg-red-600 text-white
            px-14 flex flex-col gap-3 justify-center
            md:[clip-path:polygon(0_0,54%_0,37%_100%,0%_100%)]
          "
          >
            <h2 className="text-4xl font-bold ">eSIM</h2>
            <p>Yeni nəsil SIM texnologiyası</p>
            <button className="mt-6 inline-flex w-fit items-center gap-3 bg-white text-red-600 font-medium px-15 py-4 rounded-lg">
              Ətraflı <FaArrowRightLong />
            </button>
          </div>

          <div
            className="
            absolute inset-0
            [clip-path:polygon(55%_0,100%_0,100%_100%,38%_100%)]
          "
          >
            <Image src={esimImage} alt="" className=" hidden md:flex h-full ml-[20%]" />
          </div>
        </div>
      </div>
    </section>
  );
}
