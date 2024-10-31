// DAOList.js
import React from 'react';
import { Link } from 'react-router-dom';
import DAOTile from './DAOTile';

function DAOList() {
  const daoList = [
    {
      id: 1,
      name: "Polygon Community Treasury",
      description: "A protocol-funded support treasury for funding innovations.",
      tags: ["Governance", "Token-based"],
    },
    {
      id: 2,
      name: "AA Multisig",
      description: "Aragon Association budget wallet built on aragonOSx.",
      tags: ["Ethereum", "Wallet-based"],
    },
    // Add more DAOs as needed...
  ];

  return (
    <section className="container mx-auto py-10">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">
        Explore DAOs
      </h2>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {daoList.map((dao) => (
          <DAOTile key={dao.id} dao={dao} />
        ))}
      </div>
      
      {/* Show More Button */}
      <div className="text-center mt-8">
        <Link to="/dao/mountain-adventure">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
            Show More
          </button>
        </Link>
      </div>
    </section>
  );
}

export default DAOList;