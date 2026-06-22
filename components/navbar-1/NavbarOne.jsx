"use client";

import Link from "next/link";
import React, { useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import { usePathname } from "next/navigation";
import { IoMenu, IoClose } from "react-icons/io5";
import { useDarkMode } from "@/components/DarkModeProvider";

export default function NavbarOne({ links }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { dark, toggle } = useDarkMode();

  return (
    <header className="relative p-6 sm:max-lg:p-10">
      <div className="absolute inset-0 -z-10 backdrop-blur-md bg-white dark:bg-[#070b15]/80">
      </div>
      {/* Bottom fade gradient for continuity */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-transparent to-white/0 dark:to-[#070b15]/0 z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/20 dark:via-cyan/10 to-transparent" />
      <nav className="sm:max-w-3xl lg:max-w-6xl mx-auto flex items-center justify-between relative z-10">
        {/* Logo */}
        <div className="group">
          <h1 className="text-2xl text-shadow-sm font-bold transition-all duration-300 group-hover:scale-105">
            <Link href={links[0].path} className="relative">
              <span className="text-navy dark:text-light relative z-10">mil</span>
              <span className="text-cyan relative z-10">
                ton.
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-500 rounded-full"></span>
            </Link>
          </h1>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden hover:text-cyan hover:cursor-pointer transition-all duration-300 hover:scale-110"
        >
          {isMobileMenuOpen ? (
            <IoClose className="text-3xl text-navy dark:text-light text-shadow-lg" />
          ) : (
            <IoMenu className="text-3xl text-navy dark:text-light text-shadow-lg" />
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
                        ? "text-cyan"
                        : "text-navy dark:text-light/80 hover:text-cyan dark:hover:text-cyan"
                    }
                  `}
                >
                  {link.link}
                  <span
                    className={`
                    absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 bg-cyan
                    transition-all duration-300 rounded-full
                    ${isActive ? "w-6 opacity-100" : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"}
                  `}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop Right Section */}
        <div className="hidden lg:flex items-center border-l-4 gap-8 pl-3 border-l-navy/20 dark:border-l-light/20">
          {/* Theme Toggle */}
          <div className="flex gap-2 rounded-full p-1 px-2 border border-navy/20 dark:border-light/20 bg-light/50 dark:bg-[#070b15]/50 backdrop-blur-sm shadow-lg transition-all duration-300 hover:scale-105 hover:bg-light/80 dark:hover:bg-[#070b15]/80">
            <button
              onClick={toggle}
              className="group relative transition-all duration-300 hover:scale-110"
            >
              {dark ? (
                <MdOutlineWbSunny className="text-yellow-400 rounded-full text-xl p-1 transition-all duration-300 group-hover:shadow-lg" />
              ) : (
                <FaMoon className="bg-cyan rounded-full text-xl p-1 text-white shadow-lg transition-all duration-300 group-hover:shadow-cyan/50" />
              )}
            </button>
          </div>

          {/* Contact Button */}
          <div>
            <Link
              className="relative overflow-hidden group bg-[#070b15] shadow-lg shadow-[#070b15]/30 py-2.5 px-7 text-[15px] rounded-full text-white hover:cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl block text-center"
              href={"#contact"}
            >
              <span className="relative z-10">Contact Me</span>
              <div className="absolute inset-0 bg-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-lg bg-cyan opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10"></div>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl backdrop-blur-md bg-light/90 dark:bg-[#070b15]/90 border border-navy/10 dark:border-light/10 shadow-2xl animate-slide-down z-20">
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
                          ? "bg-navy text-white shadow-lg"
                          : "text-navy dark:text-light/80 hover:bg-navy/10 dark:hover:bg-light/10"
                      }
                    `}
                  >
                    {link.link}
                  </Link>
                </li>
              );
            })}
            {/* Mobile theme toggle and contact */}
            <li className="w-full flex items-center justify-center gap-4 mt-2 pt-2 border-t border-navy/10 dark:border-light/10">
              <div className="flex gap-2 rounded-full p-1 px-3 border border-navy/20 dark:border-light/20 bg-light/50 dark:bg-[#070b15]/50">
                <button
                  onClick={toggle}
                  className="transition-all duration-300 hover:scale-110"
                >
                  {dark ? (
                    <MdOutlineWbSunny className="text-yellow-400 rounded-full text-lg p-1" />
                  ) : (
                    <FaMoon className="bg-cyan rounded-full text-lg p-1 text-white" />
                  )}
                </button>
              </div>
              <Link
                className="bg-[#070b15] py-2 px-5 text-sm rounded-full text-white hover:scale-105 transition-all duration-300 shadow-lg"
                href={"#contact"}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      )}

      <style jsx>{`
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

        .animate-slide-down {
          animation: slide-down 0.3s ease-out forwards;
        }
      `}</style>
    </header>
  );
}
