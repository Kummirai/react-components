import React from "react";
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function HeroTwoA({ img }) {
  return (
    <main className="lg:grow flex max-w-6xl mx-auto sm:max-lg:min-h-[70vh]">
      <div className="grow grid gap-8 sm:gap-10 lg:gap-12 sm:grid-cols-2 items-center">
        {/* Developer image */}
        <div className="flex items-center justify-center order-2 sm:order-1">
          <div className="border rounded-full shadow-xl shadow-blue-500/30 p-1 border-blue-500/20">
            <div className="relative w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-linear-to-br from-blue-500 to-purple-600 rounded-full overflow-hidden">
              <Image
                src={"/img/milton-2.webp"}
                alt="Milton Kumirai - Web Developer"
                fill={true}
                loading="eager"
                priority
                className="object-cover object-center"
                sizes="(max-width: 768px) 240px, 320px"
              />
            </div>
          </div>
        </div>

        {/* Developer details */}
        <div className="flex flex-col items-center sm:items-start justify-center gap-4 sm:gap-3 order-1 sm:order-2">
          {/* Availability badge */}
          <div className="inline-flex items-center gap-1 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for freelance work
          </div>

          {/* Title */}
          <div className="text-center sm:text-left">
            <h2 className="text-sm font-medium text-blue-600 uppercase tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-gray-900 mt-2">
              Milton Kumirai
            </h1>
            <div className="mt-3">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Web Developer
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-center sm:text-left max-w-lg">
            I craft robust web solutions with React, Next.js, Tailwind CSS and
            Node.js. Building responsive, scalable applications that solve
            real-world problems for businesses and entrepreneurs.
          </p>

          {/* Trust indicators */}
          <div className="flex gap-6 py-2">
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-gray-900">5+</p>
              <p className="text-xs text-gray-500">Projects Delivered</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-gray-900">100%</p>
              <p className="text-xs text-gray-500">Client Satisfaction</p>
            </div>
            <div className="text-center sm:text-left">
              <p className="text-2xl font-bold text-gray-900">2-wk</p>
              <p className="text-xs text-gray-500">Avg. Turnaround</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 text-2xl text-gray-600">
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
            >
              <FaGithub />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
            >
              <FaTwitter />
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors hover:scale-110 transform duration-200"
            >
              <FaFacebook />
            </Link>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            <Link
              href="#"
              className="bg-linear-to-r from-blue-600 to-blue-700 text-white py-3 px-8 rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-center font-medium"
            >
              Hire Me →
            </Link>
            <Link
              href="#"
              className="border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 text-center font-medium"
            >
              View My Work
            </Link>
          </div>

          {/* Additional trust note */}
          <p className="text-xs text-gray-400 mt-2">
            ✨ Free consultation • No upfront payment • Fast turnaround
          </p>
        </div>
      </div>
    </main>
  );
}
