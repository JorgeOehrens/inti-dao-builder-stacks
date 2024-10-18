import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const daoTypes = [
  { id: 1, name: 'Protocol DAOs', description: 'Manages decentralized protocols like Uniswap DAO.' },
  { id: 2, name: 'Investment DAOs', description: 'Investment groups that pool funds for projects.' },
  { id: 3, name: 'Grant DAOs', description: 'DAOs that distribute grants to community projects.' },
  { id: 4, name: 'Collector DAOs', description: 'Acquires and showcases valuable digital assets.' },
  { id: 5, name: 'Social DAOs', description: 'Builds communities around shared goals or interests.' },
];

function SelectDaoType() {
  const [selectedDaoType, setSelectedDaoType] = useState(null);
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedDaoType) {
      navigate('/describe-dao');
    }
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Select the type of DAO</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {daoTypes.map((dao) => (
          <div
            key={dao.id}
            className={`p-4 border rounded-lg cursor-pointer ${
              selectedDaoType === dao.id ? 'border-blue-500' : 'border-gray-300'
            }`}
            onClick={() => setSelectedDaoType(dao.id)}
          >
            <h2 className="text-xl font-semibold">{dao.name}</h2>
            <p>{dao.description}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        disabled={!selectedDaoType}
      >
        Next
      </button>
    </div>
  );
}

export default SelectDaoType;