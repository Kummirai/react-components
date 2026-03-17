import React from "react";
import SelectView from "@/components/hero-2/ui/SelectView";
import HeroOne from "@/components/hero-1/HeroOne";
import HeroTwo from "@/components/hero-2/ui/HeroTwo";

export default function page() {
  return (
    <div className="flex flex-col gap-10 p-10 min-h-screen font-sans ">
      <div className="flex items-center justify-center w-full">
        <div className="max-w-2xl flex flex-col justify-center items-center gap-4">
          <h2 className="text-4xl text-gray-800 font-semibold">
            React - Tailwind CSS Hero sections
          </h2>
          <p className="text-gray-600 text-center">
            Create stunning, responsive hero sections with React and Tailwind
            CSS. Leverage reusable components and utility classes for rapid UI
            development, ensuring beautiful, mobile-first layouts that captivate
            users instantly
          </p>
        </div>
      </div>

      {/* Hero section one  */}
      <div className="flex flex-col gap-2 ">
        <SelectView />
        <div className="h-screen border border-gray-200 rounded-md">
          <HeroOne />
        </div>
      </div>
      {/* Hero section two */}
      <div className="flex flex-col gap-2 ">
        <SelectView />
        <div className="h-screen border flex border-gray-200 rounded-md">
          <HeroTwo />
        </div>
      </div>
    </div>
  );
}
