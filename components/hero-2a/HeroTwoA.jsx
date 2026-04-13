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
    <main className="lg:grow flex items-center justify-center max-w-6xl mx-auto sm:max-lg:h-[50vh]">
      <div className="grow grid gap-4 sm:gap-5 lg:gap-10 sm:grid-cols-2">
        {/* developer image - enhanced with blur, animations, and modern styling */}
        <div className="flex items-center justify-center group">
          <div className="relative rounded-full shadow-2xl shadow-blue-500/80 p-0.5 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-xy">
            <div className="relative w-50 h-50 sm:w-65 sm:h-65 lg:h-75 lg:w-75 border-0 bg-[#fefefe] rounded-full overflow-hidden backdrop-blur-sm">
              <Image
                src={img}
                alt="Developer image"
                fill={true}
                loading="eager"
                className="object-center object-cover aspect-square transition-transform duration-700 group-hover:scale-105"
              />
              {/* Modern overlay with blur effect on hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]"></div>
            </div>
            {/* Animated decorative rings */}
            <div className="absolute -inset-4 rounded-full border-2 border-blue-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping-slow"></div>
            <div className="absolute -inset-8 rounded-full border border-purple-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -inset-12 rounded-full border border-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
        </div>

        {/* Developer details - with hover effects and gradients */}
        <div className="group/details flex flex-col items-center sm:items-start justify-center gap-3 my-5 sm:my-0 sm:px-5 lg:p-0 transition-all duration-500">
          <div className="flex flex-col items-center sm:justify-start sm:items-start justify-center">
            <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-0.5 rounded-full text-xs font-medium mb-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for freelance work
            </div>
            <h2 className="text-md font-medium bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x text-shadow-none transition-all duration-300 ">
              Hello, I'm
            </h2>
            <h3 className="text-4xl font-bold text-(--text-color) text-shadow-lg leading-8 transition-all duration-300 hover:scale-105 hover:text-transparent hover:bg-linear-to-r hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 hover:bg-clip-text">
              Milton Kumirai
            </h3>
            <h4 className="text-2xl font-semibold flex gap-2">
              <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold text-shadow-sm animate-gradient-x transition-all duration-300 ">
                Web Developer
              </span>
            </h4>
          </div>
          <p className="text-lg text-(--light-text-color) font-normal max-w-2xl leading-6 sm:leading-7 text-center sm:text-start transition-all duration-300  hover:text-gray-700">
            I craft robust web solutions with React, Next.js, Tailwind CSS and
            Node.js. Building responsive, scalable applications that solve
            real-world problems for businesses and entrepreneurs.
          </p>
          {/* socials with enhanced hover effects */}
          <div className="flex items-center my-3 gap-5 text-2xl text-(--text-color)">
            <FaFacebook className="transition-all duration-300 hover:text-blue-500 hover:cursor-pointer hover:scale-125 hover:-translate-y-1" />
            <FaGithub className="transition-all duration-300 hover:text-gray-900 hover:cursor-pointer hover:scale-125 hover:-translate-y-1" />
            <FaSquareXTwitter className="transition-all duration-300 hover:text-gray-900 hover:cursor-pointer hover:scale-125 hover:-translate-y-1" />
            <FaLinkedin className="transition-all duration-300 hover:text-[#0077B5] hover:cursor-pointer hover:scale-125 hover:-translate-y-1" />
          </div>
          {/* call to action with enhanced hover effects */}
          <div className="flex flex-col w-3/4 sm:flex-row gap-5">
            <Link
              href={"#"}
              className="relative overflow-hidden bg-(--accent-color) text-white py-2 px-10 rounded-lg shadow-2xl shadow-gray-950/30 hover:bg-(--primary-color) hover:cursor-pointer text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group/btn"
            >
              <span className="relative z-10">Hire Me →</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
            </Link>

            <Link
              className="relative overflow-hidden py-2 px-6 border-2 border-(--accent-color) text-(--accent-color) rounded-lg shadow-2xl shadow-gray-950/30 text-center hover:border-(--primary-color) hover:text-(--primary-color) transition-all duration-300 hover:scale-105 hover:shadow-xl group/btn2"
              href={"#"}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover/btn2:opacity-10 transition-opacity duration-500"></div>
            </Link>
          </div>
          <p className="text-xs text-(--light-text-color) mt-2 flex gap-1 items-center transition-all duration-300 hover:scale-105">
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

      {/* Custom animations for the image section only */}
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
