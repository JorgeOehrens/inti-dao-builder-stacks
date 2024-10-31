import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { stringAsciiCV, uintCV } from "@stacks/transactions";
import { AppConfig, openContractCall, UserSession } from "@stacks/connect";
import { StacksTestnet } from "@stacks/network";

function DeployDao() {
  const localNameDao = localStorage.getItem("daoName") ?? "";
  const localSymbolDao = localStorage.getItem("tokenName") ?? "";
  const localDaoDescription = localStorage.getItem("daoDescription") ?? "";
  const localDaoSubdomain = localStorage.getItem("daoSubdomain") ?? "";
  const localSelectedDaoType = localStorage.getItem("selectedDaoType") ?? "";

  const [blockchainConfirmed, setBlockchainConfirmed] = useState(false);
  const [daoConfirmed, setDaoConfirmed] = useState(false);
  const [votersConfirmed, setVotersConfirmed] = useState(false);
  const [votingParamsConfirmed, setVotingParamsConfirmed] = useState(false);
  const [nameDao] = useState(localNameDao);
  const [symbolDao] = useState(localSymbolDao);
  const [descriptionDao] = useState(localDaoDescription);
  const [subdomainDao] = useState(localDaoSubdomain);
  const [typeDao] = useState(localSelectedDaoType);
  const [privacyDao] = useState("1");

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

    const assetAddress = "ST3RX2AKM4AGJ8YV0V319FRPRDVNVY9AYS1EMNFCP";
    const contractName = "v3DAO";
    const functionName = "create-listing";
    const initialTokens = uintCV(1); // Ejemplo: 1000 tokens iniciales

    const functionArgs = [
      stringAsciiCV(nameDao), // name-dao
      stringAsciiCV(typeDao),

      stringAsciiCV(privacyDao),
      initialTokens, // type-dao
      stringAsciiCV(subdomainDao), // ens-subdomain
      stringAsciiCV(descriptionDao), // description
      stringAsciiCV(symbolDao), // token-symbol
      stringAsciiCV(symbolDao), // token-name (usando el mismo valor de symbolDao para ejemplo)
    ];

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
        <p>Blockchain: Stacks</p>
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
        <p>Tipo: {typeDao}</p>
        <p>Privacidad: {privacyDao}</p>

        <p>Name: {nameDao}</p>
        <p>Symbol: {symbolDao}</p>

        <p>ENS Subdomain: {subdomainDao}</p>
        <p>Description: {descriptionDao}</p>

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
