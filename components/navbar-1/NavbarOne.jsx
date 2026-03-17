"use client";

import Link from "next/link";
import React from "react";
import { FaMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import { usePathname } from "next/navigation";

export default function NavbarOne({ links }) {
  const pathname = usePathname();

  return (
    <header className="pt-10">
      <nav className="max-w-6xl mx-auto flex items- justify-between">
        <div>
          <h1 className="text-2xl text-shadow-sm font-bold">
            <span className="text-[#0b344e]">Port</span>
            <span className="text-[#0abcfa]">folio</span>
          </h1>
        </div>
        <ul className="flex items-center gap-8">
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className={
                  pathname === link.path
                    ? "text-[#0abcfa] text-sm font-bold text-shadow-xs"
                    : "hover:text-[#4b6c81] text-[#0b344e] text-sm text-shadow-sm "
                }
              >
                <Link href={link.path}>{link.link}</Link>
              </li>
            );
          })}
        </ul>
        <div className="flex items-center border-l-4 gap-8 pl-3 border-l-gray-400">
          <div className="flex gap-2 rounded-full p-1 px-2 border border-gray-200 text-white">
            <FaMoon className="bg-[#0abcfa] rounded-full text-xl p-1" />
            <MdOutlineWbSunny className="text-gray-400 rounded-full text-xl" />
          </div>
          <div>
            <Link
              className="bg-[#f22e7f] py-2 px-5 text-white font-semibold"
              href={"#"}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
