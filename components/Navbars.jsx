import React from "react";
import NavbarOne from "./navbar-1/NavbarOne";
import ComponentsHeading from "./components-heading/ComponentsHeading";

export default function Navbars() {
  const links = [
    {
      id: 1,
      link: "Home",
      path: "#",
    },
    {
      id: 2,
      link: "Services",
      path: "#",
    },
    {
      id: 3,
      link: "Portfolio",
      path: "#",
    },
    {
      id: 4,
      link: "Skills",
      path: "#",
    },
    {
      id: 5,
      link: "About",
      path: "#",
    },
    {
      id: 6,
      link: "Contact",
      path: "#",
    },
  ];
  return (
    <div className="flex flex-col gap-10 min-h-[calc(100vh-80px)] font-sans ">
      <ComponentsHeading component={"Navbars"}/>
      <div className="border border-gray-100 px-5">
        <NavbarOne links={links} />
      </div>
    </div>
  );
}
