import { IoCheckmarkDoneOutline } from "react-icons/io5";

export default function CardTwo({ plan, onGetStarted }) {
  const isPopular = plan.isPopular;
  return (
    <div
      className={
        isPopular
          ? "border-2 border-cyan bg-white/80 dark:bg-navy/90 flex flex-col justify-start gap-5 w-full sm:w-90 p-5 rounded-xl shadow-2xl shadow-cyan/30"
          : "flex flex-col justify-start gap-5 w-full sm:w-90 bg-white/60 dark:bg-navy/80 p-5 rounded-xl shadow-2xl"
      }
    >
      <div>
        <h2
          className={
            isPopular
              ? "flex items-center justify-between text-navy dark:text-light text-xl font-semibold"
              : "text-xl font-semibold text-navy dark:text-light"
          }
        >
          {plan.name}
          {isPopular ? (
            <span className="bg-cyan text-white font-semibold text-xs py-1 px-3 rounded-full">
              Most Popular
            </span>
          ) : null}
        </h2>
        <p className="text-navy/60 dark:text-light/60 text-sm line-clamp-1">{plan.description}</p>
      </div>

      <div className="flex items-end gap-3">
        <h2 className="flex flex-col">
          <span className="text-navy/50 dark:text-light/50 text-xs">
            {plan.price === "Custom" ? "price" : "from"}
          </span>
          <span className="text-3xl text-navy dark:text-light font-semibold">
            {plan.price}
          </span>
        </h2>
        {plan.timeline && (
          <span className="text-navy/40 dark:text-light/40 text-xs mb-1">
            ~{plan.timeline}
          </span>
        )}
      </div>

      <button
        onClick={onGetStarted}
        className={
          isPopular
            ? "bg-cyan text-white py-2 rounded-lg shadow-lg shadow-cyan/40 hover:bg-cyan/90 hover:cursor-pointer transition-all duration-300"
            : "bg-navy dark:bg-cyan text-white py-2 rounded-lg shadow-2xl shadow-navy/30 dark:shadow-cyan/30 hover:bg-navy/90 dark:hover:bg-cyan/90 hover:cursor-pointer transition-all duration-300"
        }
      >
        Get Started
      </button>

      <div className="grid gap-5">
        <div className="flex flex-col gap-1 text-sm">
          {plan.features.map((feature, index) => (
            <p
              key={index}
              className="flex items-center gap-2 text-sm text-navy dark:text-light"
            >
              <span className="text-lg text-cyan shrink-0">{feature.icon}</span>
              <span>{feature.text}</span>
            </p>
          ))}
        </div>
        <div>
          <h2 className="font-semibold text-navy dark:text-light">Package Includes</h2>
          <ul className="text-navy/60 dark:text-light/60 ml-2 mt-1 text-sm">
            {plan.includedFeatures.map((included, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="shrink-0">
                  <IoCheckmarkDoneOutline className="text-xl text-cyan" />
                </span>
                <span>{included}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
