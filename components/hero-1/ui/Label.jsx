export default function Label({ task, icon }) {
  return (
    <div>
      <p className="text-xl rounded-full w-fit  relative -left-4 top-4 text-red-600  bg-red-100 p-1 flex items-center justify-center shadow-2xl">
        <span>{icon}</span>
      </p>
      <p className="py-2 px-4 shadow-2xl text-dark rounded-full w-fit bg-white text-xs">
        {task}
      </p>
    </div>
  );
}
