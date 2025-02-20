import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prevCount) => prevCount + 1);

  const decrement = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <div className="flex-col">
        <h1 className="text-4xl text-gray-700 font-bold text-center block mb-4">
          {count}
        </h1>
        <div className="flex items-center gap-2">
          <button
            className="text-3xl text-white font-semibold bg-slate-700 py-2 px-4 rounded w-[100px] hover:bg-slate-600 transition cursor-pointer"
            onClick={increment}
          >
            +
          </button>
          <button
            className="text-3xl text-white font-semibold bg-slate-700 py-2 px-4 rounded w-[100px] hover:bg-slate-600 transition cursor-pointer"
            onClick={decrement}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
