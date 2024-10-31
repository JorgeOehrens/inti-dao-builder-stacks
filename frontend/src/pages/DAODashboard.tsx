// DAODashboard.tsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserSession, AppConfig, showConnect } from '@stacks/connect';
import { StacksTestnet } from '@stacks/network';
import { signMessage } from '@stacks/transactions';
import styles from './DAODashboard.module.css';

// Configuration for Stacks user session
const appConfig = new AppConfig(['store_write', 'publish_data']);
const userSession = new UserSession({ appConfig });

const DAODashboard: React.FC = () => {
  const { daoId } = useParams();
  const [isConnected, setIsConnected] = useState(false);
  const [activityLevel, setActivityLevel] = useState(0); // Mock activity level

  // Mock DAO data
  const daoData = {
    id: daoId,
    name: 'Mountain Adventure',
    profilePic: 'https://ipfs.io/ipfs/QmT6hP8j1XKd8EY2dsLn5zKveV6Ma9pFZ9a2m9FSPp4d8e', // Example IPFS image
    members: 1200,
    liquidity: '$500,000',
    transactions: 200,
    tokens: 150,
    proposalsVoted: 45,
  };

  const currentProposal = { id: 4, title: 'Increase Safety Measures on Trails' };

  // Connect to wallet
  const connectWallet = async () => {
    showConnect({
      appDetails: {
        name: "DAO Dashboard",
        icon: window.location.origin + "/icon.png",
      },
      userSession,
      onFinish: () => {
        setIsConnected(true);
        checkWalletActivity();
      },
    });
  };

  // Mock check wallet activity level
  const checkWalletActivity = async () => {
    // Replace this mock logic with actual API call to check wallet activity level
    setActivityLevel(2); // e.g., 0 for inactive, 1 for medium, 2 for high activity
  };

  // Voting logic
  const handleVote = async () => {
    if (!isConnected) {
      connectWallet();
      return;
    }

    // Prompt for message signing to verify user
    const message = "Vote Confirmation";
    const options = { message };
    const signedMessage = await userSession.signMessage(options);

    // Verify activity level allows voting
    if (activityLevel < 1) {
      alert("Your wallet activity level does not meet the requirements to vote on this proposal.");
      return;
    }

    alert(`Vote registered! Signature: ${signedMessage}`);
    // You would continue with vote submission logic here
  };

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <div className={styles.sidebar}>
        <h2>{daoData.name}</h2>
        <nav>
          <button>Overview</button>
          <button>Members</button>
          <button>Transactions</button>
          <button>Proposals</button>
        </nav>
      </div>

      {/* Central Panel with Glassmorphism Effect */}
      <div className={styles.centralPanel}>
        <div className={styles.glassContainer}>
          <img src={daoData.profilePic} alt={`${daoData.name} profile`} className={styles.profilePic} />
          <h1>{daoData.name} Dashboard</h1>
          <div className={styles.stats}>
            <p>Members: {daoData.members}</p>
            <p>Current Liquidity: {daoData.liquidity}</p>
            <p>Transactions: {daoData.transactions}</p>
            <p>Tokens: {daoData.tokens}</p>
            <p>Proposals Voted: {daoData.proposalsVoted}</p>
          </div>

          {/* Current Proposal with Vote Button */}
          <div className={styles.currentProposal}>
            <h2>Current Proposal</h2>
            <div className={styles.proposalTile}>
              <h3>{currentProposal.title}</h3>
              <button className={styles.voteButton} onClick={handleVote}>
                Vote Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAODashboard;