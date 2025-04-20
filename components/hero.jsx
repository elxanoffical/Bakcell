import React from "react";
import heroImg from "@/app/assets/images/heroImg/img1.webp";
import Image from "next/image";

export default function Hero() {
  return (
    <section>
      <div className="pt-[50px]">
        <Image src={heroImg} alt="" className=" object-cover w-full" />
      </div>
    </section>
  );
}
