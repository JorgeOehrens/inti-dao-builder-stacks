
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import styles from './Sidenav.module.css'; // Import the CSS module

interface SidenavProps {
  daoName: string;
  daoProfilePic: string;
  onNewProposalClick: () => void;
}

const Sidenav: React.FC<SidenavProps> = ({ daoName, daoProfilePic, onNewProposalClick }) => {
  return (
    <div className={styles.sidenav}>
      {/* Top Section with Back Button, Profile Pic, and DAO Name */}
      <div className={styles.sidenavTop}>
        <button className={styles.backButton}>
          <FaArrowLeft />
        </button>
        <img src={daoProfilePic} alt={`${daoName} profile`} className={styles.profilePic} />
        <h2>{daoName}</h2>
      </div>
      
      {/* Navigation Links */}
      <nav className={styles.navLinks}>
        <Link to="/overview">Overview</Link>
        <Link to="/leaderboards">LeaderBoards</Link>
        <Link to="/bounties">Bounties</Link>
        <Link to="/governance">Governance</Link>
      </nav>
      
      {/* New Proposal Button */}
      <button onClick={onNewProposalClick} className={styles.newProposalButton}>
        NEW PROPOSAL
      </button>
    </div>
  );
};

export default Sidenav;