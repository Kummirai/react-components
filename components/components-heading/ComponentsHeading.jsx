import React from "react";

export default function ComponentsHeading({ component }) {
  return (
    <div className="flex items-center justify-center w-full">
      <div className="max-w-2xl mt-10 flex flex-col justify-center items-center gap-4">
        <h2 className="text-4xl text-center text-gray-800 font-semibold">
          React - Tailwind CSS {component}
        </h2>
        <p className="text-gray-600 text-center">
          Create stunning, responsive {component} with React and Tailwind CSS.
          Leverage reusable components and utility classes for rapid UI
          development, ensuring beautiful, mobile-first layouts that captivate
          users instantly
        </p>
      </div>
    </div>
  );
}
