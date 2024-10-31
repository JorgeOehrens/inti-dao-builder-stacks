import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { useState, useEffect } from "react";

function DefineMembership() {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [, setTokens] = useState(1);
  const [] = useState(100);

  const navigate = useNavigate();

  // Cargar valores desde localStorage cuando se monte el componente
  useEffect(() => {
    const savedName = localStorage.getItem("tokenName");
    const savedSymbol = localStorage.getItem("tokenSymbol");
    const savedTokens = localStorage.getItem("tokenCount");

    if (savedName) setName(savedName);
    if (savedSymbol) setSymbol(savedSymbol);
    if (savedTokens) setTokens(parseInt(savedTokens, 10));
  }, []);

  // Guardar los valores en localStorage cuando cambien
  const handleNameChange = (e: any) => {
    const value = e.target.value;
    setName(value);
    localStorage.setItem("tokenName", value);
  };

  const handleSymbolChange = (e: any) => {
    const value = e.target.value;
    setSymbol(value);
    localStorage.setItem("tokenSymbol", value);
  };


  const handleNext = () => {
    navigate("/select-governance");
  };

  const handleBack = () => {
    navigate("/describe-dao");
  };

  return (
    <div className="container mx-auto py-10">
      {/* Progress Bar - 3 out of 5 steps */}
      <ProgressBar currentStep={3} totalSteps={5} />
      <h1 className="text-3xl font-bold mb-4">Mint your token</h1>

      {/* Name Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          className="border rounded w-full py-2 px-3"
          placeholder="Enter token name"
          value={name}
          onChange={handleNameChange}
        />
        <small className="text-gray-500">
          The full name of the token. Example: Uniswap
        </small>
      </div>

      {/* Symbol Field */}
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-semibold mb-2"
          htmlFor="symbol"
        >
          Symbol
        </label>
        <input
          id="symbol"
          type="text"
          className="border rounded w-full py-2 px-3"
          placeholder="Enter token symbol"
          value={symbol}
          onChange={handleSymbolChange}
        />
        <small className="text-gray-500">
          The abbreviation of the token. Example: UNI
        </small>
      </div>

      {/* Distribute Tokens */}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button
          className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DefineMembership;
