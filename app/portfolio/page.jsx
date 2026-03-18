"use client";
import Buttons from "@/components/Buttons";
import Cards from "@/components/Cards";
import HeroSections from "@/components/HeroSections";
import Navbars from "@/components/Navbars";
import { useState } from "react";

export default function page() {
  const [currentComponent, setCurrentComponent] = useState(1);

  const components = [
    {
      id: 1,
      title: "Hero",
      component: <HeroSections />,
    },
    {
      id: 2,
      title: "Navbar",
      component: <Navbars />,
    },
    {
      id: 3,
      title: "Card",
      component: <Cards />,
    },
    {
      id: 4,
      title: "Buttons",
      component: <Buttons />,
    },
  ];

  const componentsToDisplay = (id) => {
    setCurrentComponent(id);
  };

  return (
    <>
      <div className="grid place-content-center-safe md:grid-cols-5 gap-2 p-5 md:p-0 max-w-7xl mx-auto">
        <div className="col-start-1 col-end-2 md:border md:border-gray-100 p-2 rounded-md hidden sm:flex flex-col gap-2">
          <h2 className="text-lg px-2 text-gray-500 font-semibold text-shadow-sm">
            Components
          </h2>
          <div className="grid gap-1">
            {components.map((component) => {
              return (
                <button
                  key={component.id}
                  className={
                    currentComponent === component.id
                      ? "bg-[#0abcfa] text-white font-semibold py-2 text-left px-2 hover:cursor-pointer"
                      : "text-[#0b344e] font-semibold py-2 text-left px-2 hover:bg-gray-100 hover:cursor-pointer"
                  }
                  onClick={() => componentsToDisplay(component.id)}
                >
                  {component.title}
                </button>
              );
            })}
          </div>
        </div>
        <div className="col-start-2 -col-end-1  md:border md:border-gray-100 rounded-md  p-2">
          {components.map((component) => {
            return component.id === currentComponent ? component.component : "";
          })}
        </div>
      </div>
    </>
  );
}
