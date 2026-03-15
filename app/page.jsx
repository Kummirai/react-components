import HeroOne from "@/components/hero-1/HeroOne";

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
      <div className="h-screen">
        <HeroOne />
      </div>
      <div className="h-screen">
        <HeroOne />
      </div>
    </div>
  );
}
