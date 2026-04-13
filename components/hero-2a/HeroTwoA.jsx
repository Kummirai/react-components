"use client";

import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import StatsOne from "../stats/StatsOne";
import { GoDotFill } from "react-icons/go";

export default function HeroTwoA({ img }) {
  return (
    <main className="relative lg:grow flex items-center justify-center max-w-6xl mx-auto sm:max-lg:min-h-[50vh] overflow-hidden py-10">
      {/* Animated gradient background with blur effects - matching other sections */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="grow grid gap-4 sm:gap-5 lg:gap-10 sm:grid-cols-2">
        {/* developer image - enhanced with blur, animations, and modern styling */}
        <div className="flex items-center justify-center group">
          <div className="relative rounded-full shadow-2xl shadow-blue-500/80 p-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-xy">
            <div className="relative w-50 h-50 sm:w-65 sm:h-65 lg:h-75 lg:w-75 border-0 bg-[#fefefe] rounded-full overflow-hidden backdrop-blur-sm">
              <Image
                src={img}
                alt="Developer image"
                fill={true}
                loading="eager"
                className="object-center object-cover aspect-square transition-transform duration-700 group-hover:scale-105"
              />
              {/* Modern overlay with blur effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]"></div>
            </div>
            {/* Animated decorative rings */}
            <div className="absolute -inset-4 rounded-full border-2 border-blue-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping-slow"></div>
            <div className="absolute -inset-8 rounded-full border border-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -inset-12 rounded-full border border-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
        </div>

        {/* Developer details - with glassmorphism matching other sections */}
        <div className="group/details flex flex-col items-center sm:items-start justify-center gap-3 my-5 sm:my-0 sm:px-5 lg:p-0 transition-all duration-500">
          <div className="flex flex-col items-center sm:justify-start sm:items-start justify-center">
            <div className="inline-flex items-center gap-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-700 px-3 py-0.5 rounded-full text-xs font-medium mb-2 transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm border border-green-200/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for freelance work
            </div>
            <h2 className="text-md font-medium text-gray-700 bg-clip-text animate-gradient-x text-shadow-none transition-all duration-300">
              Hello, I'm
            </h2>
            <h3 className="text-4xl font-bold text-shadow-lg leading-8 transition-all duration-300 hover:scale-105 text-transparent bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text">
              Milton Kumirai
            </h3>
            <h4 className="text-2xl font-semibold flex gap-2">
              <span className="text-gray-700 bg-clip-text  font-semibold text-shadow-sm animate-gradient-x transition-all duration-300">
                Web Developer
              </span>
            </h4>
          </div>
          <p className="text-lg text-gray-500 dark:text-gray-300 font-normal max-w-2xl leading-6 sm:leading-7 text-center sm:text-start transition-all duration-300 hover:text-gray-800 dark:hover:text-gray-200 backdrop-blur-sm bg-white/5 p-3 md:p-0 rounded-lg">
            I craft robust web solutions with React, Next.js, Tailwind CSS and
            Node.js. Building responsive, scalable applications that solve
            real-world problems for businesses and entrepreneurs.
          </p>
          {/* socials with enhanced hover effects */}
          <div className="flex items-center my-3 gap-5 text-2xl text-gray-700 dark:text-gray-200">
            <FaFacebook className="transition-all duration-300 hover:text-blue-500 hover:cursor-pointer hover:scale-125 hover:-translate-y-1" />
            <FaGithub className="transition-all duration-300 hover:text-gray-900 dark:hover:text-white hover:cursor-pointer hover:scale-125 hover:-translate-y-1" />
            <FaSquareXTwitter className="transition-all duration-300 hover:text-gray-900 dark:hover:text-white hover:cursor-pointer hover:scale-125 hover:-translate-y-1" />
            <FaLinkedin className="transition-all duration-300 hover:text-[#0077B5] hover:cursor-pointer hover:scale-125 hover:-translate-y-1" />
          </div>
          {/* call to action with enhanced hover effects */}
          <div className="flex flex-col w-3/4 sm:flex-row gap-5">
            <Link
              href={"#"}
              className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-10 rounded-lg shadow-lg shadow-blue-500/30 hover:cursor-pointer text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group/btn"
            >
              <span className="relative z-10">Hire Me →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
            </Link>

            <Link
              className="relative overflow-hidden py-2 px-6 border-2 border-blue-600 text-blue-600 rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group/btn2 hover:border-transparent"
              href={"/project"}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn2:opacity-10 transition-opacity duration-500"></div>
            </Link>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex gap-1 items-center transition-all duration-300 hover:scale-105">
            <span>Free consultation</span>
            <span className="animate-pulse">
              <GoDotFill />
            </span>
            <span> Fast turnaround</span>
          </p>
        </div>
        {/* developer stats */}
        <StatsOne />
      </div>

      {/* Custom animations matching other sections */}
      <style jsx>{`
        @keyframes gradient-xy {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes ping-slow {
          0% {
            transform: scale(0.95);
            opacity: 0.6;
          }
          70% {
            transform: scale(1.1);
            opacity: 0;
          }
          100% {
            transform: scale(0.95);
            opacity: 0;
          }
        }

        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 3s ease infinite;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </main>
  );
}
