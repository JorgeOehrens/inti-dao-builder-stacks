// DAODashboard.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './DAODashboard.module.css';

const DAODashboard: React.FC = () => {
  const { daoId } = useParams();

  // Mock DAO data
  const daoData = {
    id: daoId,
    name: 'Mountain Adventure',
    profilePic: 'https://via.placeholder.com/100', // Placeholder profile picture
    members: 1200,
    liquidity: '$500,000',
    transactions: 200,
    tokens: 150,
    proposalsVoted: 45,
  };

  // Mock past proposals
  const pastProposals = [
    { id: 1, title: 'Expand Mountain Trails', votes: 450, upvoted: true },
    { id: 2, title: 'Create New Campsites', votes: 320, upvoted: false },
    { id: 3, title: 'Partner with Local Guides', votes: 600, upvoted: true },
  ];

  // Current proposal that is up for voting
  const currentProposal = { id: 4, title: 'Increase Safety Measures on Trails' };

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
          {/* DAO Profile Picture */}
          <img src={daoData.profilePic} alt={`${daoData.name} profile`} className={styles.profilePic} />

          <h1>{daoData.name} Dashboard</h1>

          {/* DAO Statistics */}
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
              <button className={styles.voteButton}>Vote Now</button>
            </div>
          </div>

          {/* Past Proposals Section */}
          <div className={styles.pastProposals}>
            <h2>Past Proposals</h2>
            {pastProposals.map((proposal) => (
              <div key={proposal.id} className={styles.proposalTile}>
                <h3>{proposal.title}</h3>
                <p>Votes: {proposal.votes}</p>
                <span className={proposal.upvoted ? styles.thumbUp : styles.thumbDown}>
                  {proposal.upvoted ? '👍' : '👎'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DAODashboard;