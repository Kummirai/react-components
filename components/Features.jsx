import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { IoRocketSharp, IoBarChartSharp, IoCodeSharp } from "react-icons/io5";
import { MdSpeed, MdScale } from "react-icons/md";

const features = [
  {
    id: 1,
    title: "Modern Stack Architecture",
    description:
      "Built with React, Next.js, and Tailwind CSS for lightning-fast performance and seamless user experiences.",
    icon: <SiReact />,
    category: "technical",
  },
  {
    id: 2,
    title: "Full-Stack Capabilities",
    description:
      "End-to-end development from database design to frontend implementation with PostgreSQL, MongoDB, Express, and Node.js.",
    icon: <SiNodedotjs />,
    category: "technical",
  },
  {
    id: 3,
    title: "Performance Optimized",
    description:
      "Lazy loading, code splitting, and optimized assets deliver sub-second load times and smooth interactions.",
    icon: <MdSpeed />,
    category: "technical",
  },
  {
    id: 4,
    title: "Faster Time to Market",
    description:
      "Streamlined development process that gets your product in users' hands quickly without sacrificing quality.",
    icon: <IoRocketSharp />,
    category: "deliver",
  },
  {
    id: 5,
    title: "Scalable Solutions",
    description:
      "Built to grow with your business—handling everything from startup MVPs to enterprise-grade applications.",
    icon: <MdScale />,
    category: "deliver",
  },
  {
    id: 6,
    title: "Clean, Maintainable Code",
    description:
      "Reduced technical debt and long-term maintenance costs through modular architecture and best practices.",
    icon: <IoCodeSharp />,
    category: "deliver",
  },
];

export default function Features() {
  return (
    <section className="relative w-full mt-10 grow flex items-center justify-center bg-(--background-color) overflow-hidden">
      {/* Gradient background with blur effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col gap-5 justify-around relative z-10">
        {/* Header section with gradient colors */}
        <div className="mx-auto flex flex-col items-center max-w-2xl pt-20 pb-5 gap-3 sm:gap-5">
          <h2 className="text-2xl sm:text-[32px] font-semibold text-center leading-7.5 sm:leading-10 max-w-7/8 sm:w-full bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Expert Development. Websites That Work as Hard as You Do.
          </h2>
          <p className="text-center text-lg text-(--light-text-color) font-normal max-w-2xl leading-6 backdrop-blur-sm bg-white/5 p-3 rounded-lg">
            Combining modern development practices with a focus on delivering
            value—every project is built to perform, scale, and succeed.
          </p>
        </div>

        {/* Features grid with glassmorphism cards */}
        <div className="grid grow md:grid-cols-2 w-full lg:grid-cols-3 px-2 sm:px-0 gap-5 pb-20">
          {features.map((feature) => {
            return (
              <div
                key={feature.id}
                className="group relative flex flex-col items-center justify-center gap-2 p-10 font-normal text-lg leading-6 rounded-2xl backdrop-blur-md bg-white border border-white/20 shadow-xl transition-all duration-300 hover:bg-white/15 hover:shadow-2xl hover:shadow-blue-500/20"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:opacity-10 transition-opacity duration-300"></div>

                {/* Glow effect on hover */}
                <div className="absolute -inset-0.5 rounded-2xl bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300 -z-10"></div>

                {/* Icon with gradient color */}
                <p className="text-5xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  {feature.icon}
                </p>

                {/* Title with hover gradient */}
                <h2 className="text-xl font-semibold text-(--text-color) transition-colors duration-300 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text">
                  {feature.title}
                </h2>

                {/* Description */}
                <p className="text-center text-[16px] sm:text-md text-(--light-text-color) line-clamp-4 h-24">
                  {feature.description}
                </p>

                {/* Decorative line at bottom */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-300 rounded-full"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
