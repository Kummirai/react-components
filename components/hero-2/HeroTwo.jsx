import Link from "next/link";
import React from "react";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

export default function HeroTwo() {
  const links = [
    {
      id: 1,
      link: "Services",
      path: "/services",
    },
    {
      id: 2,
      link: "Portfolio",
      path: "/portfolio",
    },
    {
      id: 3,
      link: "Pricing",
      path: "/pricing",
    },
    {
      id: 4,
      link: "Case Study",
      path: "/case",
    },
    {
      id: 5,
      link: "About",
      path: "/about",
    },
  ];

  const pathname = "/services";

  return (
    <section className="flex flex-col justify-between h-full ">
      <nav>
        <div className="max-w-6xl mx-auto flex items-center justify-between py-5">
          <h1 className="text-2xl font-bold">Logo</h1>
          <div className="flex items-center gap-10">
            <ul className="flex items-center gap-10">
              {links.map((link) => {
                return (
                  <li
                    key={link.id}
                    className="text-sm hover:text-red-600 duration-300"
                  >
                    <Link href={"#"}>{link.link}</Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href={"#"}
              className="border border-gray-500 py-1.25 px-6 text-sm rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      {/* main section */}
      <main className="grow grid grid-cols-3 h-full max-w-6xl w-full mx-auto">
        <div className="col-span-1 flex flex-col justify-around">
          <div className="flex flex-col justify-between h-[42%]">
            <h2 className="text-4xl font-semibold grid ">
              <span>Turn Clicks into</span>
              <span>Conversions</span>
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
              odit? Reprehenderit aliquam, tenetur vitae repellendus illum
              corrupti veniam sapiente odio.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href={"#"}
                className="py-2 px-6 bg-orange-600 text-white rounded-md"
              >
                Start Now
              </Link>
              <Link href={"#"} className="flex items-center gap-2">
                <span className="text-[40px]">
                  <BsArrowUpRightSquareFill />
                </span>
                <span>Learn more</span>
              </Link>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro,
              odit? Reprehenderit aliquam, tenetur vitae repellendus illum
              corrupti veniam sapiente odio.
            </p>
          </div>
        </div>
        <div className="col-span-2"></div>
      </main>
    </section>
  );
}
