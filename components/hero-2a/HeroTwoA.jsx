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
    <main className="relative lg:grow flex items-center justify-center max-w-6xl mx-auto sm:max-lg:min-h-[50vh] overflow-hidden mb-10 bg-white dark:bg-navy/90">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="grow grid gap-4 sm:gap-5 lg:gap-10 sm:grid-cols-2">
        {/* Profile image */}
        <div className="flex items-center justify-center group">
          <div className="relative rounded-full shadow-2xl shadow-cyan/60 p-0.5 bg-cyan">
            <div className="relative w-50 h-50 sm:w-65 sm:h-65 lg:h-75 lg:w-75 border-0 bg-light dark:bg-navy rounded-full overflow-hidden">
              <Image
                src={img}
                alt="Developer image"
                fill={true}
                loading="eager"
                className="object-center object-cover aspect-square transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[2px]"></div>
            </div>
            {/* Decorative rings */}
            <div className="absolute -inset-4 rounded-full border-2 border-cyan/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping-slow"></div>
            <div className="absolute -inset-8 rounded-full border border-pink/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="absolute -inset-12 rounded-full border border-cyan/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
        </div>

        {/* Freelancer details */}
        <div className="group/details flex flex-col items-center sm:items-start justify-center gap-3 my-5 sm:my-0 sm:px-5 lg:p-0 transition-all duration-500">
          <div className="flex flex-col items-center sm:justify-start sm:items-start justify-center">
            <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-0.5 rounded-full text-xs font-medium mb-2 transition-all duration-300 hover:scale-105 hover:shadow-lg border border-green-200/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for freelance work
            </div>
            <h2 className="text-md font-medium text-navy/70 dark:text-light/70 transition-all duration-300">
              Hello, I&apos;m
            </h2>
            <h3 className="text-4xl font-bold text-navy dark:text-light leading-8 transition-all duration-300 hover:scale-105">
              Milton Kumirai
            </h3>
            <h4 className="text-2xl font-semibold flex gap-2">
              <span className="text-cyan font-semibold transition-all duration-300">
                Freelance Web Developer
              </span>
            </h4>
          </div>
          <p className="text-md text-navy/60 dark:text-light/60 font-normal max-w-2xl leading-6 text-center sm:text-start transition-all duration-300 hover:text-navy/80 dark:hover:text-light/80 p-3 md:p-0 rounded-lg">
            I build modern websites and web applications for businesses and
            entrepreneurs. Let&apos;s turn your ideas into reality with clean,
            performant code.
          </p>
          {/* Socials */}
          <div className="flex items-center my-3 gap-5 text-2xl text-navy/70 dark:text-light/70">
            <FaFacebook className="transition-all duration-300 hover:text-cyan hover:cursor-pointer hover:scale-125 hover:-translate-y-1" />
            <FaGithub className="transition-all duration-300 hover:text-navy dark:hover:text-light hover:cursor-pointer hover:scale-125 hover:-translate-y-1" />
            <FaSquareXTwitter className="transition-all duration-300 hover:text-navy dark:hover:text-light hover:cursor-pointer hover:scale-125 hover:-translate-y-1" />
            <FaLinkedin className="transition-all duration-300 hover:text-cyan hover:cursor-pointer hover:scale-125 hover:-translate-y-1" />
          </div>
          {/* Call to action */}
          <div className="flex flex-col w-3/4 sm:flex-row gap-5">
            <Link
              href={"#contact"}
              className="relative overflow-hidden bg-cyan text-white py-2 px-10 rounded-lg shadow-lg shadow-cyan/30 hover:cursor-pointer text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group/btn"
            >
              <span className="relative z-10">Hire Me →</span>
              <div className="absolute inset-0 bg-pink opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>
            </Link>

            <Link
              className="relative overflow-hidden py-2 px-6 border-2 border-cyan text-cyan rounded-lg shadow-lg text-center transition-all duration-300 hover:scale-105 hover:shadow-xl group/btn2 hover:border-transparent"
              href={"/projects"}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-cyan opacity-0 group-hover/btn2:opacity-10 transition-opacity duration-500"></div>
            </Link>
          </div>
          <p className="text-xs text-navy/50 dark:text-light/50 mt-2 flex gap-1 items-center transition-all duration-300 hover:scale-105">
            <span>Free consultation</span>
            <span className="animate-pulse">
              <GoDotFill />
            </span>
            <span> Fast turnaround</span>
          </p>
        </div>
        {/* Stats */}
        <StatsOne />
      </div>

      <style jsx>{`
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

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </main>
  );
}
