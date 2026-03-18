import ButtonOne from "./buttons/ButtonOne";
import ComponentsHeading from "./components-heading/ComponentsHeading";
import SelectView from "./hero-2/ui/SelectView";

export default function Buttons() {
  return (
    <div className="flex flex-col gap-10 min-h-screen font-sans ">
      <ComponentsHeading component={"Buttons"} />
      {/* Card one  */}
      <div className="flex flex-col gap-2 ">
        <SelectView />
        <div className="flex border border-gray-100 rounded-md p-5 gap-5 flex-wrap items-center">
          <ButtonOne />
        </div>
      </div>
    </div>
  );
}
