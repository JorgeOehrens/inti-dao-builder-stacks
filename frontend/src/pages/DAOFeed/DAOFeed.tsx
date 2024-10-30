// DAOFeed.tsx
import React from 'react';
import Sidenav from './Sidenav';
import './DAOFeed.css';

const DAOFeed: React.FC = () => {
  const handleNewProposalClick = () => {
    console.log('New Proposal button clicked');
    // Add logic to open the New Proposal form/modal
  };

  return (
    <div className="dao-feed">
      {/* Sidenav */}
      <Sidenav 
        daoName="INTI DAO" 
        daoProfilePic="path/to/dao-profile-pic.jpg"
        onNewProposalClick={handleNewProposalClick} 
      />
      
      {/* Main Content Area */}
      <div className="content">
        <h1>Welcome to INTI DAO Feed</h1>
        {/* Insert feed or other components here */}
      </div>
    </div>
  );
};

export default DAOFeed;