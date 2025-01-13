import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { UserSession, AppConfig, showConnect, openContractCall } from "@stacks/connect";
import { StacksTestnet } from "@stacks/network";
import {
  callReadOnlyFunction,
  uintCV,
  standardPrincipalCV,
} from "@stacks/transactions";
import styles from "./DAODashboard.module.css";
const appConfig = new AppConfig(["store_write", "publish_data"]);
const userSession = new UserSession({ appConfig });

const DAODashboard: React.FC = () => {
  const { daoId } = useParams<{ daoId: string }>();
  const [isConnected, setIsConnected] = useState(false);
  const [daoData, setDaoData] = useState<any>(null);
  const [balance, setBalance] = useState(0);
  const [totalSupply, setTotalSupply] = useState(0);
  const [proposalText, setProposalText] = useState("");

  const network = new StacksTestnet();

  const connectWallet = async () => {
    showConnect({
      appDetails: {
        name: "DAO Dashboard",
        icon: window.location.origin + "/icon.png",
      },
      userSession,
      onFinish: () => setIsConnected(true),
    });
  };

  const fetchDaoData = async () => {
    if (!daoId) {
      console.error("DAO ID is undefined");
      return;
    }

    try {
      const listingResult = await callReadOnlyFunction({
        contractAddress: "ST1DT3KBGQZXZAQJZ0EDH0PQ2N0QTWC6XW5EQQXHM",

        contractName: "v3DAO",
        functionName: "get-listing",
        functionArgs: [uintCV(parseInt(daoId))],
        senderAddress:
          userSession.loadUserData()?.profile.stxAddress?.testnet || "",
        network,
      });

      const supplyResult = await callReadOnlyFunction({
        contractAddress: "ST1DT3KBGQZXZAQJZ0EDH0PQ2N0QTWC6XW5EQQXHM",
        contractName: "v3DAOToken",
        functionName: "get-total-supply",
        functionArgs: [uintCV(parseInt(daoId))],
        senderAddress:
          userSession.loadUserData()?.profile.stxAddress?.testnet || "",
        network,
      });

      const balanceResult = await callReadOnlyFunction({
        contractAddress: "ST3RX2AKM4AGJ8YV0V319FRPRDVNVY9AYS1EMNFCP",
        contractName: "v3DAOToken",
        functionName: "get-balance",
        functionArgs: [
          uintCV(parseInt(daoId)),
          standardPrincipalCV(
            userSession.loadUserData()?.profile.stxAddress?.testnet || ""
          ),
        ],
        senderAddress:
          userSession.loadUserData()?.profile.stxAddress?.testnet || "",
        network,
      });

      setDaoData(listingResult);
      setTotalSupply(Number(supplyResult));
      setBalance(Number(balanceResult));
    } catch (error) {
      console.error("Error fetching DAO data:", error);
    }
  };

  useEffect(() => {
    if (!userSession.isUserSignedIn()) {
      connectWallet();
    } else {
      setIsConnected(true);
    }
  }, []);

  useEffect(() => {
    if (isConnected && daoId) {
      fetchDaoData();
    }
  }, [daoId, isConnected]);

  // Función para agregar propuesta
  const addProposal = async () => {
    if (!daoId) {
      console.error("DAO ID is undefined");
      return;
    }

    // const options = {
    //   contractAddress: "ST3RX2AKM4AGJ8YV0V319FRPRDVNVY9AYS1EMNFCP",
    //   contractName: "v3ProposalVoting",
    //   functionName: "add-proposal",
    //   functionArgs: [
    //     uintCV(proposalId), // ID de la propuesta
    //     ...dataCV, // Usar spread operator para pasar los datos
    //   ],
    //   senderAddress: userSession.loadUserData().profile.stxAddress.testnet,

    //   network,
    // };

    try {
      const result = "await openContractCall(options);";
      console.log("Contract call result:", result);
    } catch (error) {
      console.error("Error in contract call:", error);
    }
  };

  const joinDao = async () => {
    if (!daoId) {
      console.error("DAO ID is undefined");
      return;
    }

    const options = {
      contractAddress: "ST1DT3KBGQZXZAQJZ0EDH0PQ2N0QTWC6XW5EQQXHM",

      contractName: "v3DAOToken",
      functionName: "mint",
      functionArgs: [
        uintCV(parseInt(daoId)),
        uintCV(1),
        standardPrincipalCV(
          userSession.loadUserData()?.profile.stxAddress?.testnet || ""
        ),
      ],
      senderAddress:
        userSession.loadUserData()?.profile.stxAddress?.testnet || "",
      network,
    };

    await openContractCall(options);
  };

  return (
    <div className={styles.dashboardContainer}>

        <div className={styles.sidebar}>
          <h2>{daoData?.value?.data["name-dao"]?.data || "DAO Dashboard"}</h2>
          <nav>
            <button>Overview</button>
            <button>Members</button>
            <button>Transactions</button>
            <button>Proposals</button>
          </nav>
        </div>

      <div className={styles.centralPanel}>
        <div className={styles.glassContainer}>

          <h1>
            {daoData?.value?.data["name-dao"]?.data || "DAO Dashboard"}{" "}
            Dashboard
          </h1>
          <div className={styles.stats}>
            <p>
              Description:{" "}
              {daoData?.value?.data["description"]?.data || "Loading..."}
            </p>

            <p>
              Privacy DAO:{" "}
              {daoData?.value?.data["privacy-dao"]?.data || "Loading..."}
            </p>
            <p>
              Token Name{" "}
              {daoData?.value?.data["token-name"]?.data || "Loading..."}
            </p>
            <p>
              Token Symbol{" "}
              {daoData?.value?.data["token-symbol"]?.data || "Loading..."}
            </p>
            <p>
              Type DAO {daoData?.value?.data["type-dao"]?.data || "Loading..."}
            </p>
            <p>Current Liquidity: {daoData?.liquidity || "Loading..."}</p>
            <p>Transactions: {daoData?.transactions || "Loading..."}</p>
            <p>Tokens in Circulation: {totalSupply}</p>
            <p>Your Balance: {balance}</p>
          </div>

          <button onClick={joinDao} className={styles.joinButton}>
            Join DAO
          </button>
          <div className={styles.popup}>
            <h2>Add Proposal</h2>
            <textarea
              value={proposalText}
              onChange={(e) => setProposalText(e.target.value)}
              placeholder="Enter proposal details..."
            />
            <button onClick={addProposal} className={styles.joinButton}>
              Submit Proposal
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default DAODashboard;
