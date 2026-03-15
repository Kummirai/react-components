import Image from "next/image";
import Link from "next/link";
import React from "react";
import Label from "./ui/Label";
import { TbBrandAdobeIndesign } from "react-icons/tb";
import { SiTaichigraphics } from "react-icons/si";
import { IoIosCreate } from "react-icons/io";

export default function HeroOne() {
  const tabs = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Services",
      path: "/services",
    },
    {
      id: 3,
      title: "Products",
      path: "/products",
    },
    {
      id: 4,
      title: "Contact",
      path: "/contact",
    },
    {
      id: 5,
      title: "About Us",
      path: "/about",
    },
  ];

  const data = [
    {
      id: 1,
      task: "Graphic Design",
      icon: <SiTaichigraphics />,
    },
    {
      id: 2,
      task: "Illustration",
      icon: <TbBrandAdobeIndesign />,
    },
    {
      id: 3,
      task: "Creative branding",
      icon: <IoIosCreate />,
    },
  ];

  return (
    // hero section
    <section className="relative h-full w-full flex flex-col ">
      <div className="absolute w-full h-full -z-10 bg-radial from-red-200 from-10% to-white "></div>
      <div className="absolute w-full h-full -z-5 blur "></div>
      {/* navigation */}
      <nav className="py-5">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div>
            <h1 className="text-2xl font-bold">Logo</h1>
          </div>
          {/* nalinks */}
          <div>
            <ul className="flex items-center gap-5 text-sm">
              {tabs.map((tab) => {
                return (
                  <li key={tab.id}>
                    <Link href={"#"}>{tab.title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* sign up */}
          <div>
            <Link
              href={"#"}
              className="bg-linear-to-r from-red-600 to-red-400 py-2 px-6 text-xs rounded-full text-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      <main className="max-w-6xl grow mx-auto grid grid-cols-2">
        {/* heading */}
        <div className="flex flex-col h-4/5 my-auto justify-around">
          <h2 className="text-5xl font-semibold flex flex-col gap-1 text-gray-900 ">
            <span>Let's Work</span>
            <span>Together To Create</span>
            <span>Wonders With Us</span>
          </h2>
          {/* tagline */}
          <p className="text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            soluta, molestiae numquam ad dignissimos suscipit delectus pariatur
            dolores autem tempora!
          </p>
          {/* Call to Action buttons */}
          <div className="flex gap-5 text-sm">
            <Link
              href={""}
              className="bg-linear-to-r from-red-600 to-red-500 py-2 px-8 rounded-full  text-white "
            >
              Let's Talk
            </Link>
            <Link
              href={""}
              className="bg-white py-2 px-6 rounded-full  text-dark"
            >
              Start Project
            </Link>
          </div>
          {/* Credibility stats */}
          <div className="grid grid-cols-3 max-w-100">
            <div>
              <h2 className="text-2xl text-gray-900 font-bold">15+</h2>
              <p className="flex flex-col text-sm text-gray-500">
                <span>Years</span>
                <span>Experince</span>
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-gray-900 font-bold">26K</h2>
              <p className="flex flex-col text-sm text-gray-500">
                <span>Projects</span>
                <span>Success</span>
              </p>
            </div>
            <div>
              <h2 className="text-2xl text-gray-900 font-bold">98%</h2>
              <p className="flex flex-col text-sm text-gray-500">
                <span>Satisfied</span>
                <span>Rate</span>
              </p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center overflow-hidden ">
          <div className="absolute w-full h-full grid grid-cols-12 grid-rows-12 z-10">
            <div className="col-start-9 row-start-3 col-span-full">
              <Label key={data[0].id} task={data[0].task} icon={data[0].icon} />
            </div>
            <div className="col-start-11 row-start-6 col-span-full">
              <Label key={data[1].id} task={data[1].task} icon={data[1].icon} />
            </div>
            <div className="col-start-10 row-start-9 col-span-full">
              <Label key={data[2].id} task={data[2].task} icon={data[2].icon} />
            </div>
          </div>
          <div className="absolute ">
            <Image
              src={"/img/hero-img.png"}
              alt=""
              width={800}
              height={600}
              className="object-top"
            />
          </div>
        </div>
      </main>
    </section>
  );
}
