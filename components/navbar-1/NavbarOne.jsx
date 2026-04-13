"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import { usePathname } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";

export default function NavbarOne({ links }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative p-6 sm:max-lg:p-10">
      {/* Animated gradient background with blur */}
      <div className="absolute inset-0 -z-10 backdrop-blur-md bg-white/30 ">
        {/* <div className="absolute inset-0 bg-linear-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5"></div> */}
      </div>

      <nav className="sm:max-w-3xl lg:max-w-6xl mx-auto flex items-center justify-between relative z-10">
        {/* Logo with gradient and hover effect */}
        <div className="group">
          <h1 className="text-2xl text-shadow-sm font-bold transition-all duration-300 group-hover:scale-105">
            <Link href={links[0].path} className="relative">
              <span className="text-(--text-color) relative z-10">mil</span>
              <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x relative z-10">
                ton.
              </span>
              {/* Animated underline on hover */}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-500 rounded-full"></span>
            </Link>
          </h1>
        </div>

        {/* Mobile menu button with hover effect */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden hover:text-[#0abcfa] hover:cursor-pointer transition-all duration-300 hover:scale-110"
        >
          {isMobileMenuOpen ? (
            <IoClose className="text-3xl text-(--text-color) text-shadow-lg" />
          ) : (
            <IoMenu className="text-3xl text-(--text-color) text-shadow-lg" />
          )}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden lg:flex items-center md:gap-2 xl:gap-8">
          {links.map((link) => {
            const isActive = pathname === link.path;
            return (
              <li key={link.id} className="relative group">
                <Link
                  href={link.path}
                  className={`
                    relative block px-3 py-2 text-sm font-medium transition-all duration-300
                    ${
                      isActive
                        ? "bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x"
                        : "text-(--text-color) hover:text-transparent hover:bg-linear-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:bg-clip-text"
                    }
                  `}
                >
                  {link.link}
                  {/* Animated underline for nav items */}
                  <span
                    className={`
                    absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-linear-to-r from-blue-500 to-purple-500 
                    transition-all duration-300 rounded-full
                    ${isActive ? "w-6 opacity-100" : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"}
                  `}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right Section - Theme Toggle & Contact Button */}
        <div className="hidden lg:flex items-center border-l-4 gap-8 pl-3 border-l-gray-400/50">
          {/* Theme Toggle with glassmorphism and hover effect */}
          <div className="flex gap-2 rounded-full p-1 px-2 border border-gray-300/30 bg-white/10 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105 hover:bg-white/20">
            <button className="group relative transition-all duration-300 hover:scale-110">
              <FaMoon className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-full text-xl p-1 text-white shadow-lg transition-all duration-300 group-hover:shadow-blue-500/50" />
            </button>
            <button className="group relative transition-all duration-300 hover:scale-110">
              <MdOutlineWbSunny className="text-(--text-color) rounded-full text-xl p-1 transition-all duration-300 group-hover:text-yellow-500 group-hover:shadow-lg" />
            </button>
          </div>

          {/* Contact Button with gradient and hover effects */}
          <div>
            <Link
              className="relative overflow-hidden group bg-linear-to-r from-blue-600 to-purple-600 shadow-lg shadow-blue-500/30 py-2.5 px-7 text-[15px] rounded-lg text-white hover:cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl block text-center"
              href={"#"}
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"></div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu with glassmorphism and animations */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl backdrop-blur-md bg-white/20 border border-white/30 shadow-2xl animate-slide-down z-20">
          <ul className="flex flex-col items-center gap-3">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <li key={link.id} className="w-full group">
                  <Link
                    href={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`
                      relative block w-full text-center px-4 py-2 rounded-lg text-sm font-medium 
                      transition-all duration-300 hover:scale-105
                      ${
                        isActive
                          ? "bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white shadow-lg"
                          : "text-(--text-color) hover:bg-white/20 backdrop-blur-sm"
                      }
                    `}
                  >
                    {link.link}
                  </Link>
                </li>
              );
            })}
            {/* Mobile theme toggle */}
            <li className="w-full flex items-center justify-center gap-4 mt-2 pt-2 border-t border-white/20">
              <div className="flex gap-2 rounded-full p-1 px-3 border border-gray-300/30 bg-white/10 backdrop-blur-sm">
                <button className="transition-all duration-300 hover:scale-110">
                  <FaMoon className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-full text-lg p-1 text-white" />
                </button>
                <button className="transition-all duration-300 hover:scale-110">
                  <MdOutlineWbSunny className="text-(--text-color) rounded-full text-lg p-1" />
                </button>
              </div>
              <Link
                className="bg-linear-to-r from-blue-600 to-purple-600 py-2 px-5 text-sm rounded-lg text-white hover:scale-105 transition-all duration-300 shadow-lg"
                href={"#"}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Custom animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
