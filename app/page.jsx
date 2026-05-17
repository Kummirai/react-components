import Contact from "@/components/Contact";
import Services from "@/components/Features";
import HeroTwoA from "@/components/hero-2a/HeroTwoA";
import Pricing from "@/components/Pricing";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="relative mx-auto w-full min-h-[calc(100vh-72px)] font-sans items-center">
      <div className="w-full flex flex-col lg:py-5 sm:py-0 p-5 sm:px-0">
        <HeroTwoA img={"/img/milton-2.webp"} />
        <Services />
        <Pricing />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
