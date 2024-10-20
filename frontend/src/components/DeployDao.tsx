import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom
import ProgressBar from "./ProgressBar"; // Import the progress bar component
import { stringAsciiCV } from "@stacks/transactions"; // Importa stringAsciiCV para manejar strings
import { AppConfig, openContractCall, UserSession } from "@stacks/connect";
import { StacksTestnet } from "@stacks/network";

function DeployDao() {
  const [blockchainConfirmed, setBlockchainConfirmed] = useState(false);
  const [daoConfirmed, setDaoConfirmed] = useState(false);
  const [votersConfirmed, setVotersConfirmed] = useState(false);
  const [votingParamsConfirmed, setVotingParamsConfirmed] = useState(false);
  const [nameDao, setNameDao] = useState("");
  const [symbolDao, setSymbolDao] = useState("");

  const [, setLoggedIn] = useState(false);
  const appConfig = new AppConfig(["publish_data"]);
  const userSession = new UserSession({ appConfig });
  const navigate = useNavigate();

  useEffect(() => {
    if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then(() => {
        setLoggedIn(true);
      });
    } else if (userSession.isUserSignedIn()) {
      setLoggedIn(true);
    }
  }, []);

  const network = new StacksTestnet();

  const submitDao = async () => {
    if (!nameDao || !symbolDao) {
      alert("Please enter both DAO name and symbol.");
      return;
    }

    const assetAddress = "STNMSHXM8WZT2DN4SDC1EHTYJY97012YF7CXRZF3";
    const contractName = "TestFactoryDAO";
    const functionName = "create-listing";

    const functionArgs = [stringAsciiCV(nameDao), stringAsciiCV(symbolDao)];

    const options = {
      contractAddress: assetAddress,
      contractName,
      functionName,
      functionArgs,
      network,
      senderAddress: userSession.loadUserData().profile.stxAddress.testnet,
    };

    try {
      const result = await openContractCall(options);
      console.log("Contract call result:", result);

      navigate("/confirmation");
    } catch (error) {
      console.error("Error in contract call:", error);
    }
  };

  const handleDeploy = () => {
    submitDao();
  };
  return (
    <div className="container mx-auto py-10">
      <ProgressBar currentStep={5} totalSteps={5} />
      <h1 className="text-3xl font-bold mb-6">Deploy your DAO</h1>
      <p className="text-lg mb-6">
        Double-check that everything is correct before deploying your DAO.
      </p>

      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">
          Blockchain{" "}
          <span className="text-sm text-gray-500">(Not changeable)</span>
        </h2>
        <p>Network: Mainnet</p>
        <p>Blockchain: Ethereum</p>
        <div className="flex items-center mt-4">
          <input
            type="checkbox"
            id="blockchainConfirm"
            checked={blockchainConfirmed}
            onChange={() => setBlockchainConfirmed(!blockchainConfirmed)}
          />
          <label
            htmlFor="blockchainConfirm"
            className="ml-2 text-sm text-gray-700"
          >
            These values are correct
          </label>
        </div>
      </div>

      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">
          DAO{" "}
          <span className="text-sm text-gray-500">
            (Changeable with a vote)
          </span>
        </h2>
        <p>Logo: 🟡</p>
        <label className="block text-gray-700 mb-2">
          <span className="mr-4">Name:</span>
          <input
            type="text"
            value={nameDao}
            onChange={(e) => setNameDao(e.target.value)}
            className="border p-2 w-1/2"
            placeholder="Enter DAO Name"
          />
        </label>
        <label className="block text-gray-700 mb-2">
          <span className="mr-4">Symbol:</span>

          <input
            type="text"
            value={symbolDao}
            onChange={(e) => setSymbolDao(e.target.value)}
            className="border p-2 w-1/2 "
            placeholder="Enter DAO Symbol"
          />
        </label>

        <p>ENS Subdomain: salvaLaMomia.dao.eth</p>
        <p>Summary: Test DAO</p>
        <p>
          Links:{" "}
          <a href="http://salvalamomia.org" className="text-blue-500 underline">
            SalvaLaMomia
          </a>
        </p>
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

      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">
          Voters{" "}
          <span className="text-sm text-gray-500">
            (Changeable with a vote)
          </span>
        </h2>
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

      <div className="mb-6 p-4 border rounded-md bg-gray-50">
        <h2 className="text-xl font-semibold mb-2">
          Voting parameters{" "}
          <span className="text-sm text-gray-500">
            (Changeable with a vote)
          </span>
        </h2>
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
          <label
            htmlFor="votingParamsConfirm"
            className="ml-2 text-sm text-gray-700"
          >
            These values are correct
          </label>
        </div>
      </div>

      <button
        className="mt-6 px-6 py-3 rounded-md bg-red-500 text-white hover:bg-blue-600"
        onClick={handleDeploy}
      >
        Deploy your DAO
      </button>
    </div>
  );
}

export default DeployDao;
