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
    <div className="col-start-1 col-span-full grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 items-stretch my-3 sm:mt-5 w-full max-w-6xl mx-auto px-4 sm:px-0">
      {developerStats.map((stat, index) => {
        return (
          <div
            key={stat.id}
            className={`
              group relative flex items-center gap-4 md:gap-5 p-4 md:p-5 
              rounded-2xl backdrop-blur-sm bg-white/10 
              border border-white/20 shadow-xl 
              transition-all duration-500 hover:scale-105 hover:bg-white/15 
              hover:shadow-2xl hover:shadow-blue-500/20
              ${index > 0 ? "md:border-l md:border-l-white/20 md:rounded-l-none" : ""}
            `}
          >
            {/* Animated gradient background on hover */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>

            {/* Glow effect */}
            <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10"></div>

            {/* Number with modern styling */}
            <div className="relative">
              <h2 className="text-3xl  font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient-x">
                {stat.number}+
              </h2>
            </div>

            {/* Text with modern typography */}
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-200 tracking-wide">
                {stat.top}
              </span>
              <span className="text-xs font-bold bg-linear-to-r from-gray-800 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                {stat.bottom}
              </span>
            </div>

            {/* Animated underline on hover */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
          </div>
        );
      })}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </div>
  );
}
