"use client";

import Link from "next/link";
import React from "react";
import { FaMoon } from "react-icons/fa6";
import { MdOutlineWbSunny } from "react-icons/md";
import { usePathname } from "next/navigation";
import { IoMenu } from "react-icons/io5";

export default function NavbarOne({ links }) {
  const pathname = usePathname();

  return (
    <header className="p-6 sm:max-lg:p-10">
      <nav className="sm:max-w-3xl lg:max-w-6xl  mx-auto flex items-center justify-between">
        <div>
          <h1 className="text-2xl text-shadow-sm font-bold">
            <Link href={links[0].path}>
              <span className="text-gray-700">Port</span>
              <span className="text-blue-500">folio</span>
            </Link>
          </h1>
        </div>
        <button className=" lg:hidden hover:text-[#0abcfa] hover:cursor-pointer">
          <IoMenu className="text-3xl text-gray-700 text-shadow-lg" />
        </button>
        <ul className="hidden lg:flex items-center  md:gap-2 xl:gap-8">
          {links.map((link) => {
            return (
              <li
                key={link.id}
                className={
                  pathname === link.path
                    ? "text-blue-500 text-sm font-bold text-shadow-xs"
                    : "hover:text-[#4b6c81] text-gray-700 text-sm text-shadow-sm "
                }
              >
                <Link href={link.path}>{link.link}</Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden lg:flex items-center border-l-4 gap-8 pl-3 border-l-gray-400">
          <div className="flex gap-2 rounded-full p-1 px-2 border border-gray-200 text-white">
            <FaMoon className="bg-blue-500 rounded-full text-xl p-1" />
            <MdOutlineWbSunny className="text-gray-400 rounded-full text-xl" />
          </div>
          <div>
            <Link
              className="bg-blue-500 shadow-lg shadow-blue-500/30 py-2.5 px-7 text-[15px] rounded-lg text-white"
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
