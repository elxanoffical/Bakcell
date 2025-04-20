"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdSearch,
  MdApps,
} from "react-icons/md";
import balans from "@/app/assets/images/navImg/balans.svg";
import support from "@/app/assets/images/navImg/support.svg";
import bakcellLogo from "@/app/assets/images/headerImg/bakcell_logo.svg";
import Dropdown from "@/components/dropDown";

const Header = () => {
  const navItems = [
    { href: "#", label: "Fərdi" },
    { href: "#", label: "Biznes" },
    { href: "#", label: "Haqqımızda" },
    { href: "#", label: "Ulduzum" },
  ];

  const [active, setActive] = useState(0);

  const tarifItems = [
    {
      title: "Tariflər",
      altMenu: [
        { href: "/star", label: "Star" },
        { href: "/daimonline", label: "DaimOnline" },
        { href: "/sade", label: "Sadə" },
      ],
    },
    {
      title: "Paketlər",
      altMenu: [
        { href: "/internet", label: "İnternet üçün" },
        { href: "/sms", label: "SMS üçün" },
      ],
    },
    {
      title: "Rouminq",
      altMenu: [
        { href: "/paketler", label: "İnternet paketləri" },
        { href: "/allPaket", label: "Hamısı daxil paketləri" },
        { href: "/zeng", label: "Zəng paketləri" },
        { href: "/smspaketleri", label: "SMS paketləri" },
        { href: "/rouminq", label: "Təyyarədə rouminq" },
      ],
    },
    {
      title: "xidmetler",
    },
    {
      title: "mobil cihazlar",
    },
  ];

  return (
    <section className="fixed z-50 flex flex-col w-full shadow-md bg-[#0f0f0f] text-white">
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
            <Image src={balans} alt="" />
            <h2 className="text-[#f4f2f2] text-[14px] font-medium">Balans</h2>
          </div>
          <div className="flex gap-1">
            <Image src={support} alt="" />
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
            <MdOutlineLightMode className="h-[24px] w-[24px] " />
            <MdOutlineDarkMode className="h-[24px] w-[24px] " />
          </div>
        </div>
      </nav>

      <header className="bg-white border-t border-gray-200">
        <div className="container mx-auto flex justify-between items-center py-5 px-4">
          <div className="flex items-center gap-6">
            <Image src={bakcellLogo} alt="Bakcell Logo" />
            {tarifItems.map((item, idx) => (
              <Dropdown key={idx} title={item.title} items={item.altMenu} />
            ))}
          </div>

          <div className="flex items-center gap-4 text-[#333]">
            <button className=" cursor-pointer">
              <MdSearch className="w-7 h-7" />
            </button>

            <button className="cursor-pointer">
              <MdApps className="w-9 h-9" />
            </button>

            <button
              className="
              px-4 py-2  cursor-pointer
              border border-black 
              rounded-[8px] 
              text-[15px] font-semibold
             
            "
            >
              "Bakcell"-ə qoşul
            </button>

            <Link
              href="/login"
              className="
                text-[15px] font-semibold cursor-pointer"
            >
              Daxıl ol
            </Link>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
