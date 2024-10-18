import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function DescribeDao() {
  const [name, setName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/define-membership');
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Describe your DAO</h1>
      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">ENS Subdomain</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={subdomain}
          onChange={(e) => setSubdomain(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2">Description</label>
        <textarea
          className="border rounded p-2 w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
        Next
      </button>
    </div>
  );
}

export default DescribeDao;