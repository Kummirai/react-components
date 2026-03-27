"use client";
import Buttons from "@/components/Buttons";
import Cards from "@/components/Cards";
import HeroSections from "@/components/HeroSections";
import Navbars from "@/components/Navbars";
import { useState } from "react";
import { IoArrowBackCircle } from "react-icons/io5";

export default function page() {
  const [currentComponent, setCurrentComponent] = useState(1);

  const components = [
    {
      id: 1,
      title: "Buttons",
      component: <Buttons />,
    },

    {
      id: 2,
      title: "Card",
      component: <Cards />,
    },
    {
      id: 3,
      title: "Hero",
      component: <HeroSections />,
    },
    {
      id: 4,
      title: "Navbar",
      component: <Navbars />,
    },
  ];

  const componentsToDisplay = (id) => {
    setCurrentComponent(id);
  };

  const exitHeroSections = () => {
    setCurrentComponent(1);
  };

  return (
    <>
      <div className="max-w-6xl grid place-content-center-safe md:grid-cols-5 gap-2 p-5 md:p-0  mx-auto">
        <button
          onClick={exitHeroSections}
          className={
            currentComponent !== 3
              ? "hidden"
              : "text-md p-2 rounded-sm border border-gray-100 text-gray-500 flex items-center gap-2 hover:bg-gray-100 hover:cursor-pointer"
          }
        >
          <IoArrowBackCircle className="text-3xl" />{" "}
          <span>Back to components</span>
        </button>
        <div
          className={`${currentComponent === 3 ? "hidden" : "col-start-1 col-end-2 md:border md:border-gray-100 p-2 rounded-md hidden sm:flex flex-col gap-2"}`}
        >
          <h2 className="text-lg px-2 text-gray-500 font-semibold text-shadow-sm">
            Components
          </h2>
          <div className="grid gap-1">
            {components.map((component) => {
              return (
                <button
                  key={component.title}
                  className={
                    currentComponent === component.id
                      ? "bg-[#2f27ce] text-white font-semibold py-2 text-left px-2 hover:cursor-pointer"
                      : "bg-gray-50/50 font-semibold py-2 text-left px-2 hover:bg-gray-100 hover:cursor-pointer"
                  }
                  onClick={() => componentsToDisplay(component.id)}
                >
                  {component.title}
                </button>
              );
            })}
          </div>
        </div>
        <div
          className={
            currentComponent === 3
              ? "col-start-1 -col-end-1  md:border md:border-gray-100 rounded-md  p-2"
              : "col-start-2 -col-end-1  md:border md:border-gray-100 rounded-md  p-2"
          }
        >
          {components.map((component) => {
            return component.id === currentComponent ? component.component : "";
          })}
        </div>
      </div>
    </>
  );
}
