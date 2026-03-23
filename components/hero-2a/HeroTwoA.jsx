import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import StatsOne from "../stats/StatsOne";

export default function HeroTwoA({ img }) {
  return (
    <main className="lg:grow flex max-w-6xl mx-auto sm:max-lg:h-[50vh] ">
      <div className="grow grid gap-4 sm:gap-5 lg:gap-10 sm:grid-cols-2">
        {/* developer image */}
        <div className="flex items-center justify-center ">
          <div className="border rounded-full shadow-lg shadow-blue-500/50  p-1 border-[#0b344e0a]">
            <div className=" relative w-50 h-50 sm:w-65 sm:h-65 lg:h-75 lg:w-75 bg-blue-500  rounded-full overflow-hidden">
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
            <h2 className="text-md font-medium text-blue-500 text-shadow-none ">
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
          <p className=" text-lg text-gray-700 font-light max-w-2xl leading-7 text-start sm:text-start">
            I craft robust web solutions with React, Next.js, Tailwind CSS and
            Node.js. Building responsive, scalable applications that solve
            real-world problems for businesses and entrepreneurs.
          </p>
          {/* socials */}
          <div className="flex items-center my-3 gap-5 text-2xl text-gray-700">
            <FaFacebook />
            <FaGithub />
            <FaSquareXTwitter />
            <FaLinkedin />
          </div>
          {/* call to acction */}
          <div className="flex gap-5">
            <Link
              href={"#"}
              className="bg-gray-900 text-white py-2 px-10 rounded-lg shadow-2xl shadow-gray-950/30 hover:bg-gray-900 hover:cursor-pointer"
            >
               Hire Me →
            </Link>
            <Link
              className="py-2 px-6 border border-gray-900 text-gray-700 rounded-lg shadow-2xl shadow-gray-950/30"
              href={"#"}
            >
              View My Work
            </Link>
          </div>
        </div>
        {/* developer stats */}
        <StatsOne />
      </div>
    </main>
  );
}
