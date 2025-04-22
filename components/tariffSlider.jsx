"use client";

import React from "react";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import TariffCard from "@/components/tarifCard";
import { FaGlobe, FaPhone, FaHeart, FaUser } from "react-icons/fa";

const tariffs = [
  {
    title: "StarPro 15 GB",
    price: "29.90 ₼",
    period: "28 gün",
    ussd: "*615#",
    features: [
      {
        icon: <FaPhone className="w-5 h-5 text-black" />,
        label: "1250 dəq. Ölkədaxili",
      },
      {
        icon: <FaGlobe className="w-5 h-5 text-black" />,
        label: "15 GB İnternet",
      },
      {
        icon: <FaHeart className="w-5 h-5 text-black" />,
        label: "5 GB Bonus internet",
      },
      {
        icon: <FaUser className="w-5 h-5 text-black" />,
        label: "Pulsuz WhatsApp/Telegram",
      },
    ],
  },
  {
    title: "DaimOnline 11",
    price: "11 ₼",
    period: "ay",
    ussd: "*310#",
    features: [
      {
        icon: <FaGlobe className="w-5 h-5 text-black" />,
        label: "5 GB İnternet",
      },
      {
        icon: <FaPhone className="w-5 h-5 text-black" />,
        label: "150 dəq. şəbəkədaxili zənglər",
      },
      {
        icon: <FaUser className="w-5 h-5 text-black" />,
        label: "Pulsuz Facebook/Instagram",
      },
    ],
  },
  {
    title: "DaimOnline Go",
    price: "0.39 ₼",
    period: "gün",
    features: [
      {
        icon: <FaGlobe className="w-5 h-5 text-black" />,
        label: "Gündüz limitsiz İnternet",
      },
      {
        icon: <FaGlobe className="w-5 h-5 text-black" />,
        label: "Gecə limitsiz TikTok/Facebook",
      },
      {
        icon: <FaPhone className="w-5 h-5 text-black" />,
        label: "100 dəq. Ölkədaxili",
      },
    ],
  },
  {
    title: "Premium Limitsiz",
    price: "59.90 ₼",
    period: "ay",
    ussd: "*777#",
    features: [
      {
        icon: <FaGlobe className="w-5 h-5 text-black" />,
        label: "Limitsiz internet",
      },
      {
        icon: <FaPhone className="w-5 h-5 text-black" />,
        label: "2000 dəq Ümumi",
      },
      {
        icon: <FaUser className="w-5 h-5 text-black" />,
        label: "Pulsuz YouTube/Spotify",
      },
    ],
  },
];

export default function TariffSlider() {
  return (
    <section className="pt-16 mb-4 container mx-auto">
      <h2 className="text-3xl mx-5 md:mx-0 font-extrabold mb-8 tracking-wider">
        Ən populyar təkliflərimiz
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={24}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {tariffs.map((item) => (
          <SwiperSlide key={item.title}>
            <TariffCard
              {...item}
              onMore={() => console.log("More:", item.title)}
              onSubscribe={() => console.log("Subscribe:", item.title)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
