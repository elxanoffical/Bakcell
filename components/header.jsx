"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import balans from "@/app/assets/images/navImg/balans.svg";
import support from "@/app/assets/images/navImg/support.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#", label: "Fərdi" },
    { href: "#", label: "Biznes" },
    { href: "#", label: "Haqqımızda" },
    { href: "#", label: "Ulduzum" },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="fixed w-full shadow-md bg-[#0f0f0f] text-white">
      <nav className="container mx-auto flex justify-between items-center max-h-[50px] py-[11px]">
        <div className="flex gap-[36px] ">
          {navItems.map((item, x) => (
            <Link
              key={x}
              href={item.href}
              onClick={() => setActive(x)}
              className={` transition text-[17px] font-semibold ${
                active === x
                  ? "text-[#f4f2f2] border-b-2 border-[#f4f2f2]"
                  : "text-[#827A7A]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-10">
          <div className="flex gap-1">
            <Image src={balans} />
            <h2 className="text-[#f4f2f2] text-[14px] font-medium">Balans</h2>
          </div>
          <div className="flex">
            <Image src={support} />
            <h2 className="text-[#f4f2f2] text-[14px] font-medium">Dəstək</h2>
          </div>
          <select
            name="az"
            id=""
            className="text-[#f4f2f2] text-[17px] font-medium"
          >
            <option className="text-black" value="az">
              AZ
            </option>
            <option className="text-black" value="en">
              EN
            </option>
            <option className="text-black" value="ru">
              RU
            </option>
          </select>
          <div className="flex items-center gap-1 border border-white rounded p-[2px]">
            <MdOutlineLightMode className="h-[28px] w-[28px] " />
            <MdOutlineDarkMode className="h-[28px] w-[28px] " />
          </div>
        </div>
      </nav>
      <header></header>
    </section>
  );
};

export default Header;
