import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function CardTwo({ plan }) {
  return (
    <div
      className={
        plan.name === "Essential" || plan.name === "Business App"
          ? "border-2 border-(--primary-color) bg-white flex flex-col justify-start gap-5 w-full  sm:w-90 p-5 rounded-xl shadow-2xl shadow-blue-500/50 h-145 smooth"
          : "flex flex-col justify-start gap-5 w-full sm:w-90 bg-white p-5 rounded-xl shadow-2xl h-145 smooth"
      }
    >
      <div className="">
        <h2
          className={
            plan.name === "Essential" || plan.name === "Business App"
              ? "flex items-center justify-between text-xl font-semibold"
              : "text-xl font-semibold"
          }
        >
          {plan.name}
          {plan.name === "Essential" || plan.name === "Business App" ? (
            <span className="bg-[#2f27ce] text-white font-semibold text-xs py-1 px-3 rounded-full">
              Most Popular
            </span>
          ) : (
            ""
          )}
        </h2>
        <p className="text-(--light-text-color) text-sm line-clamp-1">
          {plan.description}
        </p>
      </div>
      <h2 className="flex flex-col">
        <span className="text-[#131212ce] text-xs">
          {plan.price === "Custom" ? "price" : "from"}
        </span>
        <span className="text-3xl text-(--text-color) font-semibold">
          {plan.price}
        </span>
      </h2>
      <button
        className={
          plan.name === "Essential" || plan.name === "Business App"
            ? "bg-[#2f27ce] text-white py-2 rounded-lg shadow-lg shadow-blue-[#443dff] hover:bg-[#2f27ce]/90 hover:cursor-pointer"
            : "bg-(--text-color) text-white py-2 rounded-lg shadow-2xl shadow-gray-950/30 hover:bg-(--text-hover-color) hover:cursor-pointer"
        }
      >
        Get Started
      </button>
      <div className="grid gap-5">
        <div className="flex  flex-col gap-1 text-sm">
          {plan.features.map((features, index) => {
            return (
              <p
                key={index}
                className="flex items-center gap-2 text-sm text-(--text-color)"
              >
                <span className="text-lg">{features.icon}</span>
                <span>{features.text}</span>
              </p>
            );
          })}
        </div>
        <div>
          <h2 className="font-semibold text-(--text-color)">
            Package Includes
          </h2>
          <ul className="text-(--light-text-color) ml-2 mt-1 text-sm">
            {plan.includedFeatures.map((included, index) => {
              return (
                <li key={index} className="flex items-center gap-2">
                  <span>
                    <IoCheckmarkDoneOutline className="text-xl text-(--accent-color)" />
                  </span>
                  <span>{included}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
