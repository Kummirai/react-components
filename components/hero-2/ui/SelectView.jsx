import React from "react";

export default function SelectView() {
  return (
    <div className="align-self-end border flex gap-2 border-gray-100 rounded-full w-fit ml-4 md:ml-0 p-2 text-sm">
      <button className="bg-[#0abcfa] text-white py-px px-4 rounded-full hover:cursor-pointer hover:bg-linear-to-r hover:bg-[#0abafaad]">
        View
      </button>
      <button className="border border-gray-100 py-px px-4 rounded-full hover:border-gray-200 hover:cursor-pointer  text-gray-500">
        Code
      </button>
    </div>
  );
}
