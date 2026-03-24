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
    <section className="w-full grow flex items-center justify-center bg-[#fdfdfd]">
      <div className="max-w-6xl mx-auto flex flex-col gap-5 justify-around">
        <div className="mx-auto flex flex-col items-center max-w-2xl pt-20 pb-5 gap-3 sm:gap-5 ">
          <h2 className="text-2xl sm:text-[32px] text-gray-700 font-semibold text-shadow-2sm text-center leading-7.5 sm:leading-10 max-w-7/8 sm:w-full">
            Expert Development. Websites That Work as Hard as You Do.
          </h2>
          <p className="text-center text-lg text-gray-800 font-light max-w-2xl leading-6">
            Combining modern development practices with a focus on delivering
            value—every project is built to perform, scale, and succeed.
          </p>
        </div>
        <div className="grid grow md:grid-cols-2 w-full lg:grid-cols-3 px-2 sm:px-0 gap-5 pb-20">
          {features.map((feature) => {
            return (
              <div
                key={feature.id}
                className="flex flex-col items-center justify-center gap-2 bg-white p-10 font-light text-lg leading-6 shadow-2xl shadow-blue-500/20  rounded-xs "
              >
                <p className="text-4xl text-blue-600">{feature.icon}</p>
                <h2 className=" text-xl  text-gray-800 font-semibold">
                  {feature.title}
                </h2>
                <p className="text-center text-[16px] sm:text-md text-gray-700 line-clamp-4 h-24">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
