"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MdOutlineDarkMode,
  MdOutlineLightMode,
  MdSearch,
  MdApps,
  MdMenu,
  MdClose,
} from "react-icons/md";

import balans from "@/app/assets/images/navImg/balans.svg";
import support from "@/app/assets/images/navImg/support.svg";
import bakcellLogo from "@/app/assets/images/headerImg/bakcell_logo.svg";
import Dropdown from "@/components/dropDown";

export default function Header() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { href: "#", label: "Fərdi" },
    { href: "#", label: "Biznes" },
    { href: "#", label: "Haqqımızda" },
    { href: "#", label: "Ulduzum" },
  ];

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
    { title: "Xidmətlər" },
    { title: "Mobil cihazlar" },
  ];

  return (
    <section className="fixed top-0 z-50 flex flex-col w-full shadow-md bg-[#0f0f0f]">
      <nav className="hidden lg:flex container mx-auto justify-between items-center h-[50px] py-[11px]  text-white">
        <div className="flex gap-[36px]">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={() => setActive(idx)}
              className={`transition text-[17px] font-semibold ${
                active === idx
                  ? "text-[#f4f2f2] border-b-2 border-[#f4f2f2]"
                  : "text-[#827A7A]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-11">
          <div className="flex items-center gap-1">
            <Image src={balans} alt="Balans" width={16} height={16} />
            <span className="text-[14px] font-medium text-[#f4f2f2]">
              Balans
            </span>
          </div>
          <div className="flex items-center gap-1">
            <Image src={support} alt="Dəstək" width={16} height={16} />
            <span className="text-[14px] font-medium text-[#f4f2f2]">
              Dəstək
            </span>
          </div>
          <select className="bg-transparent text-[17px] font-medium text-[#f4f2f2]">
            <option value="az" className="text-black">
              AZ
            </option>
            <option value="en" className="text-black">
              EN
            </option>
            <option value="ru" className="text-black">
              RU
            </option>
          </select>
          <div className="flex items-center gap-1 border border-white rounded p-[2px]">
            <MdOutlineLightMode className="w-6 h-6 text-white" />
            <MdOutlineDarkMode className="w-6 h-6 text-white" />
          </div>
        </div>
      </nav>

      <header className="hidden lg:flex bg-white">
        <div className="container mx-auto flex justify-between items-center py-4">
          <div className="flex items-center gap-8">
            <Image src={bakcellLogo} alt="Bakcell Logo" />
            {tarifItems.map((item, idx) => (
              <Dropdown key={idx} title={item.title} items={item.altMenu} />
            ))}
          </div>
          <div className="flex items-center gap-4 text-[#333]">
            <button>
              <MdSearch className="w-7 h-7" />
            </button>
            <button>
              <MdApps className="w-9 h-9" />
            </button>
            <button className="px-3 py-2 font-semibold border border-black rounded-[8px]">
              “Bakcell”-ə qoşul
            </button>
            <Link href="/login" className="text-[15px] font-semibold">
              Daxıl ol
            </Link>
          </div>
        </div>
      </header>

      <div className="flex lg:hidden items-center justify-between bg-[#0f0f0f] px-4 py-3">
        <Image src={bakcellLogo} alt="Bakcell Logo" width={120} height={24} />
        <button onClick={() => setMobileOpen(true)}>
          <MdMenu className="w-8 h-8 text-white" />
        </button>
      </div>

      {mobileOpen && (
        <div className="fixed lg:hidden inset-0 z-50 bg-white overflow-y-auto">
          <div className="flex items-center bg-black justify-between px-4 py-3 border-b">
            <div className="flex space-x-4 overflow-x-auto">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActive(idx)}
                  className={`whitespace-nowrap px-2 py-1 font-medium ${
                    active === idx ? "text-white" : "text-gray-500"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <select className=" text-white">
                <option className="text-black" value="az">AZ</option>
                <option className="text-black" value="en">EN</option>
                <option className="text-black" value="ru">RU</option>
              </select>
              <button onClick={() => setMobileOpen(false)}>
                <MdClose className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <div className="p-4 border-b space-y-3">
            <button className="w-full text-left px-4 py-2 border rounded font-semibold">
              Daxıl ol
            </button>
            <button className="w-full text-left flex items-center gap-2 px-4 py-2 border rounded">
              <MdApps className="w-6 h-6" /> Tətbiqlər
            </button>
            <div className="flex items-center justify-between px-4">
              <MdOutlineLightMode className="w-6 h-6" />
              <MdOutlineDarkMode className="w-6 h-6" />
            </div>
          </div>

          <div className="p-4 border-b">
            <div className="relative">
              <MdSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Axtar"
                className="w-full border rounded-full py-2 px-4 pr-10 focus:outline-none"
              />
            </div>
          </div>

          <div className="p-4 space-y-2">
            <Link
              href="/join"
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2 bg-red-100 text-red-600 font-semibold rounded"
            >
              “Bakcell”-ə qoşul
            </Link>
            {tarifItems.map((item, idx) => (
              <details key={idx} className="border rounded">
                <summary className="px-4 py-3 font-semibold">
                  {item.title}
                </summary>
                {item.altMenu?.map((sub, j) => (
                  <Link
                    key={j}
                    href={sub.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-6 py-2 text-gray-700"
                  >
                    {sub.label}
                  </Link>
                ))}
              </details>
            ))}
          </div>

          <div className="p-4 border-t space-y-3">
            <div className="flex items-center gap-2">
              <Image src={balans} alt="Balans" width={20} height={20} />
              <span>Balans</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src={support} alt="Dəstək" width={20} height={20} />
              <span>Dəstək</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
