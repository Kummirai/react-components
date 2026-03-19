import HeroTwoA from "@/components/hero-2a/HeroTwoA";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl flex flex-col lg:py-5 sm:py-0 p-5 sm:px-0  h-[calc(100vh-72px)] font-sans items-center">
      <HeroTwoA img={"/img/milton-2.png"} />
    </div>
  );
}
