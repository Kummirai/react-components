import { TiTick } from "react-icons/ti";

export default function CardTwo({ plan }) {
  return (
    <div
      className={
        plan.name === "Essential" || plan.name === "Business App"
          ? "border-2 border-blue-500/80 bg-white flex flex-col justify-start gap-5 w-full sm:w-90 p-5 rounded-xl shadow-2xl shadow-blue-500/50 h-145"
          : "flex flex-col justify-start gap-5 w-full sm:w-90 bg-white p-5 rounded-xl shadow-2xl h-145"
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
            <span className="bg-blue-500 text-white font-semibold text-xs py-1 px-3 rounded-full">
              Most Popular
            </span>
          ) : (
            ""
          )}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-1">{plan.description}</p>
      </div>
      <h2 className="flex flex-col">
        <span className="text-gray-600 text-xs">
          {plan.price === "Custom" ? "price" : "from"}
        </span>
        <span className="text-3xl text-gray-700 font-semibold">
          {plan.price}
        </span>
      </h2>
      <button
        className={
          plan.name === "Essential" || plan.name === "Business App"
            ? "bg-blue-500 text-white py-2 rounded-lg shadow-lg shadow-blue-500/30 hover:bg-blue-500/90 hover:cursor-pointer"
            : "bg-gray-950 text-white py-2 rounded-lg shadow-2xl shadow-gray-950/30 hover:bg-gray-900 hover:cursor-pointer"
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
                className="flex items-center gap-2 text-sm text-gray-700"
              >
                <span className="text-lg">{features.icon}</span>
                <span>{features.text}</span>
              </p>
            );
          })}
        </div>
        <div>
          <h2 className="font-semibold text-gray-900">Package Includes</h2>
          <ul className="text-gray-700 ml-2 mt-1 text-sm">
            {plan.includedFeatures.map((included, index) => {
              return (
                <li key={index} className="flex items-center gap-2">
                  <span>
                    <TiTick className="text-2xl text-blue-500" />
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
