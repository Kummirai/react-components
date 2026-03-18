import HeroTwoA from "@/components/hero-2a/HeroTwoA";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col gap-10 pb-0 p-10 h-[calc(100vh-72px)] font-sans items-center">
      <HeroTwoA img={"/img/milton-2.png"} />
    </div>
  );
}
