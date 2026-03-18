import React from "react";
import ComponentsHeading from "./components-heading/ComponentsHeading";
import CardOne from "./cards/CardOne";
import SelectView from "./hero-2/ui/SelectView";

export default function Cards() {
  return (
    <div className="flex flex-col gap-10 min-h-screen font-sans ">
      <ComponentsHeading component={"Cards"} />
      {/* Card one  */}
      <div className="flex flex-col gap-2 ">
        <SelectView />
        <div className="grid md:grid-cols-2 border border-gray-100 rounded-md p-5 gap-2">
          <CardOne />
        </div>
      </div>
    </div>
  );
}
