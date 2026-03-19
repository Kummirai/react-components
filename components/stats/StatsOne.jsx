import React from "react";

export default function StatsOne() {
  const developerStats = [
    {
      id: 1,
      top: "Years Of",
      bottom: "Experience",
      number: 1,
    },
    {
      id: 2,
      top: "Projects",
      bottom: "Completed",
      number: 3,
    },
    {
      id: 3,
      top: "Technologies",
      bottom: "Mastered",
      number: 5,
    },
    {
      id: 4,
      top: "Satisfied",
      bottom: "Clients",
      number: 1,
    },
  ];

  return (
    <div className="col-start-1 -col-end-1 grid grid-cols-2 md:grid-cols-4 gap-10 items-end my-3 sm:my-10  mx-auto">
      {developerStats.map((stat, index) => {
        return (
          <div
            key={stat.id}
            className={
              index >= 1 && index <= 3
                ? "border-l-4 border-gray-300 grow grid grid-cols-2 items-center justify-center gap-5 "
                : "grow grid grid-cols-2 items-center justify-center gap-5"
            }
          >
            <h2 className="text-4xl text-shadow-lg  text-[#0b344e] font-bold ">
              {stat.number}+
            </h2>
            <p className="text-xs text-gray-600 font-semibold flex flex-col">
              <span>{stat.top}</span>
              <span>{stat.bottom}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
