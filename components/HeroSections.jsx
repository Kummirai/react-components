import SelectView from "@/components/hero-2/ui/SelectView";
import HeroOne from "@/components/hero-1/HeroOne";
import HeroTwo from "@/components/hero-2/ui/HeroTwo";
import ComponentsHeading from "./components-heading/ComponentsHeading";

export default function HeroSections() {
  return (
    <div className="flex flex-col gap-10 min-h-screen font-sans ">
      <ComponentsHeading component={"Hero sections"} />

      {/* Hero section one  */}
      <div className="flex flex-col gap-2 ">
        <SelectView />
        <div className="h-screen shadow-xl rounded-md">
          {/* <HeroOne /> */}
        </div>
      </div>
      {/* Hero section two */}
      <div className="flex flex-col gap-2 min-h-screen">
        <SelectView />
        <div className="min-h-screen shadow-xl flex p-5 sm:p-0  rounded-md">
          <HeroTwo />
        </div>
      </div>
    </div>
  );
}
