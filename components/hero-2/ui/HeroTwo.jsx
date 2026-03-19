import HeroTwoA from "@/components/hero-2a/HeroTwoA";
import NavbarOne from "@/components/navbar-1/NavbarOne";
import React from "react";

export default function HeroTwo() {
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
    <section className="flex max-w-6xl flex-col mx-auto">
      <div className="mb-10">
        <NavbarOne links={links} />
      </div>

      <HeroTwoA img={"/img/hero-img.png"} />
    </section>
  );
}
