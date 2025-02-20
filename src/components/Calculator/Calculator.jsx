import { useState } from "react";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const display = (value) => setInputValue(inputValue + value);

  const calculate = () => {
    try {
      setInputValue(eval(inputValue).toString());
    } catch (error) {
      setInputValue("Error: ", error);
    }
  };

  const clear = () => setInputValue("");

  return (
    <section className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded-lg shadow-xl w-80">
        {/* Input Display */}
        <input
          type="text"
          value={inputValue}
          readOnly
          className="w-full p-4 text-2xl text-right bg-gray-50 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Calculator Buttons */}
        <div className="grid grid-cols-4 gap-3">
          {/* Clear Button */}
          <button
            onClick={clear}
            className="col-span-2 bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            C
          </button>

          {/* Operators */}
          <button
            onClick={() => display("/")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            ÷
          </button>
          <button
            onClick={() => display("*")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            ×
          </button>

          {/* Numbers */}
          <button
            onClick={() => display("7")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-200"
          >
            7
          </button>
          <button
            onClick={() => display("8")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-200"
          >
            8
          </button>
          <button
            onClick={() => display("9")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-200"
          >
            9
          </button>
          <button
            onClick={() => display("-")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            −
          </button>

          <button
            onClick={() => display("4")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-200"
          >
            4
          </button>
          <button
            onClick={() => display("5")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-200"
          >
            5
          </button>
          <button
            onClick={() => display("6")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-200"
          >
            6
          </button>
          <button
            onClick={() => display("+")}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            +
          </button>

          <button
            onClick={() => display("1")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-200"
          >
            1
          </button>
          <button
            onClick={() => display("2")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-200"
          >
            2
          </button>
          <button
            onClick={() => display("3")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-200"
          >
            3
          </button>

          {/* Zero and Decimal */}
          <button
            onClick={() => display("0")}
            className="col-span-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-200"
          >
            0
          </button>
          <button
            onClick={() => display(".")}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-3 rounded-lg transition duration-200"
          >
            .
          </button>

          {/* Equals Button */}
          <button
            onClick={calculate}
            className="col-span-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition duration-200"
          >
            =
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
