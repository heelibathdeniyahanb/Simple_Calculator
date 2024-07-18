import React, { useState } from "react";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [lastResult, setLastResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(input).toString();
        setResult(evalResult);
        setLastResult(evalResult);
        setInput(evalResult); // Use the result as the new input
      } catch (error) {
        setResult("Error");
        setInput("");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
      setLastResult("");
    } else if (value === "+/-") {
      setInput((prev) => (prev.startsWith("-") ? prev.slice(1) : "-" + prev));
    } else {
      if (result) {
        // Continue calculation with the result if the last input was "="
        setInput(result + value);
        setResult("");
      } else {
        setInput(input + value);
      }
    }
  };

  const buttonClasses = "p-4 rounded text-2xl font-medium";

  return (
    <div className="min-h-screen bg-gray-800 flex items-center justify-center">
      <div className="bg-gray-900 p-6 rounded-xl shadow-lg w-80">
        <div className="text-right mb-4">
          <div className="text-2xl text-white break-all">{input}</div>
          <div className="text-4xl font-bold text-white">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {["C", "+/-", "%", "/"].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className={`${buttonClasses} bg-gray-500 text-white`}
            >
              {value}
            </button>
          ))}
          {["7", "8", "9", "*"].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className={`${buttonClasses} bg-gray-700 text-white`}
            >
              {value}
            </button>
          ))}
          {["4", "5", "6", "-"].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className={`${buttonClasses} bg-gray-700 text-white`}
            >
              {value}
            </button>
          ))}
          {["1", "2", "3", "+"].map((value) => (
            <button
              key={value}
              onClick={() => handleClick(value)}
              className={`${buttonClasses} bg-gray-700 text-white`}
            >
              {value}
            </button>
          ))}
          <button
            onClick={() => handleClick("0")}
            className={`${buttonClasses} bg-gray-700 text-white col-span-2`}
          >
            0
          </button>
          <button
            onClick={() => handleClick(".")}
            className={`${buttonClasses} bg-gray-700 text-white`}
          >
            .
          </button>
          <button
            onClick={() => handleClick("=")}
            className={`${buttonClasses} bg-orange-500 text-white`}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
