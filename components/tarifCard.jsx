// components/tarifCard.jsx
import React from "react";

export default function TariffCard({
  title,
  price,
  period,
  ussd,
  features = [],
  onMore,
  onSubscribe,
}) {
  return (
    <div className="bg-white rounded-lg mx-5 sm:mx-5 md:mx-0 shadow-md overflow-hidden">
      {/* Üst blok */}
      <div
        className="
        bg-gradient-to-r from-red-400 to-red-500
        rounded-md
        h-[180px] sm:p-7
       p-5
        flex flex-col gap-3
        text-white
      "
      >
        <h3 className="text-lg sm:text-xl font-bold px-1 rounded tracking-wide">
          <span className="bg-black text-lg sm:text-2xl font-bold px-2 rounded tracking-wide">
            {title}
          </span>
        </h3>

        <p className="mt-1 text-2xl sm:text-3xl font-semibold">
          {price}
          <span className="text-sm sm:text-base font-normal">/{period}</span>
        </p>

        {ussd && (
          <div className="mt-2">
            <span className="bg-white text-gray-800 text-sm font-medium px-2 py-1 rounded">
              {ussd}
            </span>
          </div>
        )}
      </div>

      {/* Aşağı blok */}
      <div
        className="
        bg-red-50 rounded-md
        sm:p-7 p-5
        flex flex-col justify-between
        h-[300px]
      "
      >
        <div className="flex flex-col space-y-6">
          {features.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              {item.icon}
              <span className="text-sm sm:text-md font-extrabold tracking-wide">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        <div className="flex gap-2">
          <button
            onClick={onMore}
            className="flex-1 border border-black text-black py-[14px] rounded-lg font-medium"
          >
            Daha çox
          </button>
          <button
            onClick={onSubscribe}
            className="flex-1 bg-red-500 text-white py-[14px] rounded-lg font-medium"
          >
            Abunə ol
          </button>
        </div>
      </div>
    </div>
  );
}
