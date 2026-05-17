import React from "react";

export default function StatsOne() {
  const developerStats = [
    { id: 1, top: "Years Of", bottom: "Experience", number: 1 },
    { id: 2, top: "Projects", bottom: "Completed", number: 3 },
    { id: 3, top: "Technologies", bottom: "Mastered", number: 5 },
    { id: 4, top: "Satisfied", bottom: "Clients", number: 1 },
  ];

  return (
    <div className="col-start-1 col-span-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 items-stretch my-3 sm:mt-5 w-full max-w-6xl mx-auto px-4 sm:px-0">
      {developerStats.map((stat, index) => (
        <div
          key={stat.id}
          className={`
            group relative flex items-center gap-4 md:gap-5 p-4 md:p-5 
            rounded-2xl bg-white/60 dark:bg-navy/80
            border border-navy/10 dark:border-light/10 shadow-xl 
            transition-all duration-500 hover:scale-105 hover:bg-white/80 dark:hover:bg-navy/90
            hover:shadow-2xl hover:shadow-cyan/20
            ${index > 0 ? "md:border-l md:border-l-navy/10 dark:md:border-l-light/10 md:rounded-l-none" : ""}
          `}
        >
          <div className="absolute -inset-0.5 rounded-2xl bg-cyan opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

          <div className="relative">
            <h2 className="text-3xl font-bold text-cyan">{stat.number}+</h2>
          </div>

          <div className="flex flex-col">
            <span className="text-xs sm:text-sm font-semibold text-navy/70 dark:text-light/70 tracking-wide">
              {stat.top}
            </span>
            <span className="text-xs font-bold text-navy dark:text-light">
              {stat.bottom}
            </span>
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
        </div>
      ))}
    </div>
  );
}
