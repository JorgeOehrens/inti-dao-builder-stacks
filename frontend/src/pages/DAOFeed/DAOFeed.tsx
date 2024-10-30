// DAOFeed.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DAOFeed.module.css';

const DAOFeed: React.FC = () => {
  const daos = [
    { id: 1, name: 'Mountain Adventure', description: 'Explore the heights of the mountains with this DAO.', members: 1200 },
    { id: 2, name: 'Ocean Guardians', description: 'Protecting the oceans and marine life.', members: 500 },
    { id: 3, name: 'Tech Innovators', description: 'A DAO for cutting-edge technology projects.', members: 850 },
    { id: 4, name: 'Art Collectors', description: 'Discover and collect unique pieces of art.', members: 300 },
    { id: 5, name: 'Environmental Warriors', description: 'Support initiatives to save the environment.', members: 900 },
    // Add more DAO entries as needed
  ];

  return (
    <div className={styles.daoFeedContainer}>
      <h1>DAO Feed</h1>
      <div className={styles.daoGrid}>
        {daos.map((dao) => (
          <Link to={`/dashboard/${dao.id}`} key={dao.id} className={styles.daoTile}>
            <h2>{dao.name}</h2>
            <p>{dao.description}</p>
            <span>Members: {dao.members}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DAOFeed;