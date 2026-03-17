import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function HeroTwoA({ img }) {
  const developerStats = [
    {
      id: 1,
      top: "Years Of",
      bottom: "Experience",
      number: 10,
    },
    {
      id: 2,
      top: "Projects",
      bottom: "Completed",
      number: 30,
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
      number: 40,
    },
  ];

  return (
    <main className="grow flex max-w-6xl mx-auto">
      <div className="grow grid grid-cols-2">
        {/* developer image */}
        <div className="flex items-center justify-center ">
          <div className="border blob-1  shadow-lg shadow-blue-500/50  p-1 border-[#0b344e0a]">
            <div className=" relative w-80 h-80 bg-[#0db0eb]  blob-1 overflow-hidden">
              <Image
                src={img}
                alt="Developer image"
                quality={100}
                fill
                className="object-top-center object-cover aspect-square"
              />
            </div>
          </div>
        </div>
        {/* Developer details */}
        <div className="flex flex-col justify-center gap-6">
          <div className="text-[#0b344e]">
            <h2 className="text-lg font-semibold">Hello, I'm</h2>
            <h3 className="text-4xl font-bold">Milton Kumirai</h3>
            <h4 className="text-2xl font-semibold flex gap-2">
              <span>And I'm a</span>
              <span>Web Developer</span>
            </h4>
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            quasi ut culpa atque laboriosam praesentium! Quod ducimus accusamus
            exercitationem excepturi.
          </p>
          {/* socials */}
          <div className="flex items-center gap-5 text-xl text-[#0b344e]">
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
        <div className="col-start-1 -col-end-1 flex justify-around gap-2 items-end mb-10">
          {developerStats.map((stat, index) => {
            return (
              <div
                key={stat.id}
                className={
                  index >= 1 && index <= 3
                    ? "border-l-4 border-gray-300 grow flex items-center gap-2 justify-center"
                    : "grow flex items-center gap-2"
                }
              >
                <h2 className="text-4xl text-[#0b344e] font-bold">
                  {stat.number}+
                </h2>
                <p className="text-xs text-gray-600 font-semibold flex flex-col">
                  <span>{stat.top}</span>
                  <span>{stat.bottom}</span>
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* developer stats */}
    </main>
  );
}
