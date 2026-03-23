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
    <main className="lg:grow flex items-center justify-center max-w-6xl   mx-auto sm:max-lg:h-[50vh] ">
      <div className="grow grid gap-4 sm:gap-5 lg:gap-10 sm:grid-cols-2 ">
        {/* developer image */}
        <div className="flex items-center justify-center ">
          <div className=" rounded-full shadow-2xl shadow-blue-500/80  p-1 ">
            <div className=" relative w-50 h-50 sm:w-65 sm:h-65 lg:h-75 lg:w-75 border-0 bg-[#fefefe] to-70%  rounded-full overflow-hidden">
              <Image
                src={img}
                alt="Developer image"
                fill={true}
                loading="eager"
                className="object-center object-cover aspect-square"
              />
            </div>
          </div>
        </div>
        {/* Developer details */}
        <div className="flex flex-col items-center sm:items-start justify-center gap-3 my-5 sm:my-0 sm:px-5 lg:p-0">
          <div className="flex flex-col items-center sm:justify-start sm:items-start justify-center">
            <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 px-3 py-0.5 rounded-full text-sm font-medium mb-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for freelance work
            </div>
            <h2 className="text-md font-medium text-blue-600 text-shadow-none ">
              Hello, I'm
            </h2>
            <h3 className="text-4xl font-bold text-gray-700 text-shadow-lg leading-8">
              Milton Kumirai
            </h3>
            <h4 className="text-2xl font-semibold flex gap-2">
              {/* <span>And I'm a</span> */}
              <span className="text-blue-500 font-semibold text-shadow-sm">
                Web Developer
              </span>
            </h4>
          </div>
          <p className="text-lg text-gray-700 font-light max-w-2xl leading-6 sm:leading-7 text-center sm:text-start">
            I craft robust web solutions with React, Next.js, Tailwind CSS and
            Node.js. Building responsive, scalable applications that solve
            real-world problems for businesses and entrepreneurs.
          </p>
          {/* socials */}
          <div className="flex items-center my-3 gap-5 text-2xl text-gray-700">
            <FaFacebook className="hover:text-blue-400 hover:cursor-pointer duration-300" />
            <FaGithub className="hover:text-gray-950 hover:cursor-pointer duration-300" />
            <FaSquareXTwitter className="hover:text-gray-950 hover:cursor-pointer duration-300" />
            <FaLinkedin className="hover:text-[#0077B5] hover:cursor-pointer duration-300" />
          </div>
          {/* call to acction */}
          <div className="flex flex-col w-3/4 sm:flex-row gap-5">
            <Link
              href={"#"}
              className="bg-gray-900 text-white py-2 px-10 rounded-lg shadow-2xl shadow-gray-950/30 hover:bg-gray-900 hover:cursor-pointer text-center"
            >
              Hire Me →
            </Link>

            <Link
              className="py-2 px-6 border border-gray-900 text-gray-700 rounded-lg shadow-2xl shadow-gray-950/30 text-center"
              href={"#"}
            >
              View My Work
            </Link>
          </div>
          <p className="text-xs text-gray-400 mt-2 flex gap-1 items-center">
            <span>Free consultation</span>
            <span>
              <GoDotFill />
            </span>
            <span> Fast turnaround</span>
          </p>
        </div>
        {/* developer stats */}
        <StatsOne />
      </div>
    </main>
  );
}
