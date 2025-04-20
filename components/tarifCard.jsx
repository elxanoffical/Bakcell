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
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-red-400 to-red-500 rounded h-[180px] p-7 flex flex-col gap-3 text-white">
        <h3 className="text-xl font-bol px-1 rounded tracking-wide">
          <span className="bg-black text-2xl font-bold px-2 rounded tracking-wide">
            {title}
          </span>
        </h3>
        <p className="mt-1 text-3xl font-semibold">
          {price}
          <span className="text-base font-normal">/{period}</span>
        </p>
        {ussd && (
          <div className="mt-2">
            <span className="bg-white text-gray-800 text-sm font-medium px-2 py-1 rounded">
              {ussd}
            </span>
          </div>
        )}
      </div>

      <div className="p-7 flex flex-col justify-between h-[300px] rounded bg-red-50">
        <div className="flex flex-col space-y-6">
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              {item.icon}
              <span className="text-black text-md font-extrabold tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>

        <div className="flex gap-2 ">
          <button
            onClick={onMore}
            className="flex-1 border cursor-pointer border-black text-black py-[14px] rounded-lg font-medium"
          >
            Daha çox
          </button>

          <button
            onClick={onSubscribe}
            className="flex-1 cursor-pointer bg-red-500 text-white py-[14px] rounded-lg font-medium"
          >
            Abunə ol
          </button>
        </div>
      </div>
    </div>
  );
}
