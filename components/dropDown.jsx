// components/Dropdown.jsx
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export default function Dropdown({ title, items, className = "" }) {
  return (
    <div className={`relative group inline-block ${className}`}>
      <div className="flex items-center gap-1 cursor-pointer select-none">
        <h2
          className="
          text-black font-semibold text-[15px]
          border-b-2 border-transparent
          group-hover:border-b-black
        "
        >
          {title}
        </h2>
        {items ? (
          <IoIosArrowDown
            className="
            w-4 h-4 transform text-black
            transition-transform duration-200 ease-in-out
            group-hover:-rotate-180
          "
          />
        ) : (
          ""
        )}
      </div>

      <div
        className={`
            ${
              items
                ? `absolute left-0 top-full mt-1
        flex flex-col gap-3 my-1
        border border-gray-300 bg-white text-black
        shadow-lg rounded p-2 z-10
        opacity-0 scale-95 transform
        pointer-events-none
        transition-all duration-200 group-hover:duration-500 ease-in-out
        group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto`
                : "hidden"}`}
      >
        {items?.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className=" px-3 py-1 font-semibold
              whitespace-nowrap rounded
              hover:text-red-600 hover:bg-red-100"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
}
