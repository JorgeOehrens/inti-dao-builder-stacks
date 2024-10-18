import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function DeployDao() {
  const [blockchainConfirmed, setBlockchainConfirmed] = useState(false);
  const [daoConfirmed, setDaoConfirmed] = useState(false);
  const [votersConfirmed, setVotersConfirmed] = useState(false);
  const [votingParamsConfirmed, setVotingParamsConfirmed] = useState(false);
  const navigate = useNavigate(); // Use navigate for routing

  const allConfirmed =
    blockchainConfirmed && daoConfirmed && votersConfirmed && votingParamsConfirmed;

  const handleDeploy = () => {
    // Directly navigate to confirmation page without any checks for now
    navigate('/confirmation'); // Navigate to the confirmation page
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Deploy your DAO</h1>
      <p className="text-lg mb-6">Double-check that everything is correct before deploying your DAO.</p>

      {/* Blockchain Section */}
      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">Blockchain <span className="text-sm text-gray-500">(Not changeable)</span></h2>
        <p>Network: Mainnet</p>
        <p>Blockchain: Ethereum</p>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="blockchainConfirm"
            checked={blockchainConfirmed}
            onChange={() => setBlockchainConfirmed(!blockchainConfirmed)}
          />
          <label htmlFor="blockchainConfirm" className="ml-2 text-sm text-gray-700">
            These values are correct
          </label>
        </div>
      </div>

      {/* DAO Section */}
      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">DAO <span className="text-sm text-gray-500">(Changeable with a vote)</span></h2>
        <p>Logo: 🟡</p>
        <p>Name: SalvaLaMomia DAO</p>
        <p>ENS Subdomain: salvaLaMomia.dao.eth</p>
        <p>Summary: Test DAO</p>
        <p>Links: <a href="http://salvalamomia.org" className="text-blue-500 underline">SalvaLaMomia</a></p>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="daoConfirm"
            checked={daoConfirmed}
            onChange={() => setDaoConfirmed(!daoConfirmed)}
          />
          <label htmlFor="daoConfirm" className="ml-2 text-sm text-gray-700">
            These values are correct
          </label>
        </div>
      </div>

      {/* Voters Section */}
      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">Voters <span className="text-sm text-gray-500">(Changeable with a vote)</span></h2>
        <p>Eligible voters: Token holders</p>
        <p>Token: SLM (Mintable, 1 SLM)</p>
        <p>Distribution: See 1 addresses</p>
        <p>Proposal creation: Members with ≥ 1 SLM voting power</p>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="votersConfirm"
            checked={votersConfirmed}
            onChange={() => setVotersConfirmed(!votersConfirmed)}
          />
          <label htmlFor="votersConfirm" className="ml-2 text-sm text-gray-700">
            These values are correct
          </label>
        </div>
      </div>

      {/* Voting Parameters Section */}
      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">Voting parameters <span className="text-sm text-gray-500">(Changeable with a vote)</span></h2>
        <p>Support threshold: &gt;50%</p>
        <p>Minimum participation: ≥15%</p>
        <p>Minimum duration: 1 day</p>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="votingParamsConfirm"
            checked={votingParamsConfirmed}
            onChange={() => setVotingParamsConfirmed(!votingParamsConfirmed)}
          />
          <label htmlFor="votingParamsConfirm" className="ml-2 text-sm text-gray-700">
            These values are correct
          </label>
        </div>
      </div>

      {/* Deploy Button */}
      <button
        className="mt-6 px-6 py-3 rounded-md bg-blue-500 text-white hover:bg-blue-600"
        onClick={handleDeploy} // Call the deploy handler
      >
        Deploy your DAO
      </button>
    </div>
  );
}

export default DeployDao;