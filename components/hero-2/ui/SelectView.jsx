import React from "react";

export default function SelectView() {
  return (
    <div className="align-self-end border flex gap-2 border-gray-100 rounded-full w-fit p-2 text-sm">
      <button className="bg-linear-to-r from-red-500 to-red-400 text-white py-px px-4 rounded-full hover:cursor-pointer hover:bg-linear-to-r hover:from-red-400 hover:to-red-300">
        View
      </button>
      <button className="border border-gray-100 py-px px-4 rounded-full hover:border-gray-200 hover:cursor-pointer  text-gray-500">
        Code
      </button>
    </div>
  );
}
