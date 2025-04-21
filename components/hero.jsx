"use client";

import React from "react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import img1 from "@/app/assets/images/heroImg/img1.webp";
import img2 from "@/app/assets/images/heroImg/img2.webp";
import img3 from "@/app/assets/images/heroImg/img3.webp";
import img4 from "@/app/assets/images/heroImg/img4.png";
import img5 from "@/app/assets/images/heroImg/img5.webp";
import img6 from "@/app/assets/images/heroImg/img6.webp";

export default function Hero() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <section className="pt-10 flex flex-col gap-10">
      <div className=" w-full h-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
          }}
          pagination={{
            el: ".hero-pagination",
            clickable: true,
          }}
          className="w-full h-full"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx} className="">
              <Image src={src} className="w-full object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hero-pagination flex justify-center space-x-3" />
    </section>
  );
}
