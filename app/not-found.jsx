import Link from "next/link";

export default function notfound() {
  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-72px)] flex items-center justify-center">
      <div className="flex items-center justify-center flex-col space-y-3 text-shadow-sm">
        <h2 className="text-8xl text-[#0db0eb] font-bold ">404</h2>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl text-[#0b344e]">Development in progress</h3>
          <p className="text-gray-500">Please try again later</p>
        </div>

        <Link
          href={"/"}
          className="py-2 px-8 bg-[#0db0eb] mt-2 text-white font-semibold "
        >
          Visit Homepage
        </Link>
      </div>
    </div>
  );
}
