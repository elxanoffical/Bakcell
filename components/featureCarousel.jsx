"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";


import slide1 from "@/app/assets/images/featuesCarousel/img1.webp";
import slide2 from "@/app/assets/images/featuesCarousel/img2.webp";
import slide3 from "@/app/assets/images/featuesCarousel/img3.webp";
import slide4 from "@/app/assets/images/featuesCarousel/img4.webp";

const slides = [
  {
    title: "Mobil balansına nəzarət",
    description: "Balansı yoxla, artır, asanlıqla nəzarət et.",
    image: slide1,
  },
  {
    title: "İnternet paketlərə nəzarət",
    description: "Meqabaytlarını daim nəzarət altında saxla. Ən sürətli internet paketlərini qoş, dayandır, dəyiş.",
    image: slide2,
  },
  {
    title: "Müxtəlif əməliyyatlar",
    description: "Rouminq, izahlı qaimə, çeşidli xidmətlərin qoşulması və dayandırılması.",
    image: slide3,
  },
  {
    title: "Tarifə nəzarət",
    description: "İstədiyin tarifi qoş, dəyiş və hər zaman ünsiyyətdə qal.",
    image: slide4,
  },
];

export default function FeatureCarousel() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;
  const prev = () => setCurrent((idx) => (idx - 1 + total) % total);
  const next = () => setCurrent((idx) => (idx + 1) % total);

  return (
    <section
      className="
           my-16
          flex flex-col lg:flex-row
          items-center justify-center
          bg-gradient-to-b from-red-50 to-red-300
          px-4
        "
    >
      <div
        className=" container mx-auto
            flex flex-col lg:flex-row items-end justify-end
            lg:space-x-10 
          "
      >
        <div
          className="
              relative flex-shrink-0 
              w-64 h-[520px]
              sm:w-72 sm:h-[580px]
              md:w-80 md:h-[650px]
              lg:w-96 lg:h-[780px]
            "
        >
          <div className="absolute inset-[10%] overflow-hidden">
            <Image
              src={slides[current].image}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div
          className="
              flex-shrink-0
              w-90       
              flex flex-col
              items-center lg:items-start
              text-center lg:text-left
              gap-4 mr-12 mb-24
            "
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-[#200000]">
            {slides[current].title}
          </h3>
          <p className="text-[#200000] font-medium tracking-wide">
            {slides[current].description}
          </p>

          <div className="flex items-center gap-4 mt-4">
            <button onClick={prev} className="p-2 border rounded-full">
              <FaArrowLeftLong />
            </button>

            <span className="text-sm">
              {current + 1} of {total}
            </span>

            <button onClick={next} className="p-2 border rounded-full">
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
