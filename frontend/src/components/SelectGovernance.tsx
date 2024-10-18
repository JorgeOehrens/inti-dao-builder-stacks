import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function SelectGovernance() {
  const [supportThreshold, setSupportThreshold] = useState(50);
  const [minimumParticipation, setMinimumParticipation] = useState(15);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNext = () => {
    // Perform any validation or logic if needed
    // Navigate to the next step (Deploy DAO)
    navigate('/deploy-dao');
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-4">Select Governance Settings</h1>

      {/* Support Threshold */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="support-threshold">
          Support Threshold
        </label>
        <div className="flex items-center gap-4">
          <button
            className="border px-3 py-1 rounded text-gray-700"
            onClick={() => setSupportThreshold(supportThreshold > 0 ? supportThreshold - 1 : 0)}
          >
            -
          </button>
          <span>{supportThreshold} %</span>
          <button
            className="border px-3 py-1 rounded text-gray-700"
            onClick={() => setSupportThreshold(supportThreshold < 100 ? supportThreshold + 1 : 100)}
          >
            +
          </button>
        </div>
        <small className="text-gray-500">The percentage of tokens that vote "Yes" in support of a proposal.</small>
      </div>

      {/* Minimum Participation */}
      <div className="mb-6">
        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="minimum-participation">
          Minimum Participation
        </label>
        <div className="flex items-center gap-4">
          <button
            className="border px-3 py-1 rounded text-gray-700"
            onClick={() => setMinimumParticipation(minimumParticipation > 0 ? minimumParticipation - 1 : 0)}
          >
            -
          </button>
          <span>{minimumParticipation} %</span>
          <button
            className="border px-3 py-1 rounded text-gray-700"
            onClick={() => setMinimumParticipation(minimumParticipation < 100 ? minimumParticipation + 1 : 100)}
          >
            +
          </button>
        </div>
        <small className="text-gray-500">The percentage of tokens that must participate for the proposal to pass.</small>
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

export default SelectGovernance;