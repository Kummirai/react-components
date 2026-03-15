import HeroOne from "@/components/hero-1/HeroOne";
import HeroTwo from "@/components/hero-2/HeroTwo";
import SelectView from "@/components/hero-2/ui/SelectView";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 p-10 min-h-screen font-sans ">
      <div className="max-w-xl flex flex-col gap-2">
        <h2 className="text-3xl text-gray-800 font-semibold">
          React - Tailwind CSS Hero sections
        </h2>
        <p className="text-gray-600">
          Create stunning, responsive hero sections with React and Tailwind CSS.
          Leverage reusable components and utility classes for rapid UI
          development, ensuring beautiful, mobile-first layouts that captivate
          users instantly
        </p>
      </div>
      {/* Hero section one  */}
      <div className="flex flex-col gap-2 ">
        <SelectView />
        <div className="h-screen border border-gray-100 rounded-md">
          <HeroOne />
        </div>
      </div>
      {/* Hero section two */}
      <div className="flex flex-col gap-2 ">
        <SelectView />
        <div className="h-screen border border-gray-100 rounded-md">
          <HeroTwo />
        </div>
      </div>
    </div>
  );
}
