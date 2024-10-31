import React from "react";

const EagleAssociation = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="eagle-logo.png"
            alt="Eagle Association Logo"
            className="h-12 w-12"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Eagle Association
            </h1>
            <p className="text-gray-500">
              Eagle Association, a not-for-profit focused on Aragon OSx and the
              future of DAO Technology.
            </p>
            <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
              <span>📅 September 2023</span>
              <span>🌐 Ethereum</span>
              <span>👤 Wallet-based</span>
            </div>
          </div>
        </div>
        <button className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-100">
          Follow
        </button>
      </div>

      {/* Main Content */}
      <div className="mt-6 flex space-x-4">
        {/* Left Section */}
        <div className="w-2/3 bg-white rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-gray-800">
              19 Proposals created
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">
              New proposal
            </button>
          </div>

          <div className="mt-4">
            <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-between">
              <div>
                <span className="inline-block px-2 py-1 text-xs font-medium text-green-800 bg-green-100 rounded">
                  Executed
                </span>
                <h2 className="text-lg font-medium text-gray-800 mt-1">
                  Actual USDe swap for USDC - Cowswap
                </h2>
                <p className="text-sm text-gray-500">
                  Published by 0x51c...fa2c
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/3 bg-white rounded-lg shadow p-6">
          <div className="text-2xl font-semibold text-gray-800">
            $3,894,872.10
          </div>
          <p className="text-gray-500">Treasury value</p>
          <button className="bg-blue-600 text-white w-full mt-4 py-2 rounded-md">
            New transfer
          </button>

          <div className="mt-6 bg-gray-100 rounded-lg p-4">
            <p className="text-sm text-gray-600">Deposit</p>
            <p className="text-lg font-semibold text-gray-800">+ 254k USDC</p>
            <p className="text-sm text-gray-500">$254,282.53</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EagleAssociation;
