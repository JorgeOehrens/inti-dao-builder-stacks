import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DefineMembership() {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [tokens, setTokens] = useState(1);
  const [allocation, setAllocation] = useState(100);
  const navigate = useNavigate(); // Use navigate from React Router

  const handleNext = () => {
    // Perform any validation or logic if needed before navigating
    navigate('/select-governance'); // Navigate to the next step
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Mint your token</h1>

      {/* Name Field */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="border rounded w-full py-2 px-3"
          placeholder="Enter token name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <small className="text-gray-500">The full name of the token. Example: Uniswap</small>
      </div>

      {/* Symbol Field */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="symbol">
          Symbol
        </label>
        <input
          id="symbol"
          type="text"
          className="border rounded w-full py-2 px-3"
          placeholder="Enter token symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <small className="text-gray-500">The abbreviation of the token. Example: UNI</small>
      </div>

      {/* Distribute Tokens */}
      <h2 className="text-xl font-semibold mt-6 mb-4">Distribute Tokens</h2>
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <p className="text-gray-600 mb-2">Your connected wallet was automatically added to the distribution list.</p>

        {/* Wallet Details */}
        <div className="flex items-center justify-between p-2 bg-white rounded shadow-sm mb-2">
          <div>
            <p className="text-gray-700 font-semibold">0xF40...f5EB</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="border px-3 py-1 rounded text-gray-700"
              onClick={() => setTokens(tokens > 1 ? tokens - 1 : tokens)}
            >
              -
            </button>
            <span>{tokens}</span>
            <button
              className="border px-3 py-1 rounded text-gray-700"
              onClick={() => setTokens(tokens + 1)}
            >
              +
            </button>
          </div>
          <div>
            <span>{allocation}%</span>
          </div>
        </div>

        {/* Add Wallet Button */}
        <button className="text-blue-500 text-sm underline">Add wallet</button>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md" onClick={() => console.log('Back')}>
          Back
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default DefineMembership;