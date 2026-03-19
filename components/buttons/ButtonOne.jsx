import Link from "next/link";
import { LuSquareArrowOutUpRight } from "react-icons/lu";

export default function ButtonOne() {
  return (
    <Link
      className="flex items-center py-2 px-6 text-sm justify-center  text-white rounded-full relative bg-linear-to-r from-purple-700 to-[#764de1] hover:cursor-pointer"
      href={`#`}
    >
      <span className="mr-1">Book</span>
      <LuSquareArrowOutUpRight />
    </Link>
  );
}
