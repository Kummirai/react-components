import Features from "@/components/Features";
import HeroTwoA from "@/components/hero-2a/HeroTwoA";
import HeroThree from "@/components/hero-3/HeroThree";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="mx-auto w-full   min-h-[calc(100vh-72px)] font-sans items-center  ">
      <div className="w-full flex flex-col lg:py-5 sm:py-0 p-5 sm:px-0">
        <HeroTwoA img={"/img/milton-2.webp"} />

        <Features />
        <Pricing />
      </div>
    </div>
  );
}
