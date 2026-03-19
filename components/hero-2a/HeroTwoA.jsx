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
    <main className="grow flex max-w-6xl mx-auto">
      <div className="grow grid gap-4 sm:gap-10 sm:grid-cols-2">
        {/* developer image */}
        <div className="flex items-center justify-center ">
          <div className="border rounded-full shadow-lg shadow-blue-500/50  p-1 border-[#0b344e0a]">
            <div className=" relative w-50 h-50 sm:w-65 sm:h-65 bg-[#0db0eb]  rounded-full overflow-hidden">
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
        <div className="flex flex-col items-center sm:items-start justify-center gap-5 my-5 sm:my-0">
          <div className="text-[#0b344e] flex flex-col items-center sm:justify-start sm:items-start justify-center ">
            <h2 className="text-md font-medium text-[#0db0eb] text-shadow-none ">
              Hello, I'm
            </h2>
            <h3 className="text-4xl font-bold text-shadow-lg">
              Milton Kumirai
            </h3>
            <h4 className="text-2xl font-semibold flex gap-2">
              <span>And I'm a</span>
              <span className="text-[#0db0eb] font-bold text-shadow-sm">
                Web Developer
              </span>
            </h4>
          </div>
          <p className="text-gray-600 text-shadow-none text-md font-light text-center sm:text-start">
            I craft robust web solutions with
            <span className="font-semibold ml-1">
              React, Next.js, Tailwind CSS and Node.js
            </span>
            . Experienced across the full development lifecycle with
            <span className="font-semibold ml-1">JavaScript (ES6+)</span>,
            <span className="font-semibold">Express</span>, and both SQL (
            <span className="font-semibold">PostgreSQL</span>) and NoSQL (
            <span className="font-semibold">MongoDB</span>) databases. Building
            responsive, scalable applications that solve real-world problems.
          </p>
          {/* socials */}
          <div className="flex items-center my-2 gap-5 text-2xl text-[#0b344e]">
            <FaFacebook />
            <FaGithub />
            <FaSquareXTwitter />
            <FaLinkedin />
          </div>
          {/* call to acction */}
          <div className="flex gap-5">
            <Link
              href={"#"}
              className="py-2 px-10 bg-[#0db0eb]  text-white font-semibold "
            >
              Hire Me
            </Link>
            <Link
              className="py-2 px-6 border border-[#0abcfa] text-[#0b344e] "
              href={"#"}
            >
              Download CV
            </Link>
          </div>
        </div>
        {/* developer stats */}
        <StatsOne />
      </div>
    </main>
  );
}
