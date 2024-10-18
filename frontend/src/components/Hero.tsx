import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundImage from '../assets/hero-background.png'; // Import your background image


const Hero: React.FC = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <section
      className="w-full text-white relative"
      style={{
        backgroundImage: `url(${BackgroundImage})`, // Use the background image
        backgroundSize: 'cover', // Ensure the background covers the container
        backgroundPosition: 'center', // Center the background image
        height: '600px', // Control the height of the hero section
      }}
    >
      {/* Centered text section */}
      <div className="container mx-auto px-4 h-full flex items-center justify-start">
        <div className="text-left">
          <h1 className="text-5xl font-bold">Build your DAO, Build your World</h1>
          <p className="text-lg mt-4">
            Build your DAO, explore communities, and fund your ideas globally.
          </p>
        </div>
      </div>

      {/* Cards section positioned slightly lower */}
      <div className="absolute top-[60%] left-0 right-0 mx-auto container px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* First Card: Create Your DAO */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Placeholder for Create Icon */}
            <div className="w-12 h-12 bg-gray-300"></div>
          </div>
          <h3 className="text-xl font-bold">Create your DAO</h3>
          <p className="text-gray-600 mt-2">
            Mint tokens, set governance parameters, and deploy your DAO on-chain in minutes with our no-code setup process.
          </p>
          <div className="mt-6">
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg w-full hover:bg-red-700"
              onClick={() => navigate('/select-dao-type')}
            >
              Create a DAO
            </button>
          </div>
        </div>

        {/* Second Card: Learn about DAOs */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Placeholder for Learn Icon */}
            <div className="w-12 h-12 bg-gray-300"></div>
          </div>
          <h3 className="text-xl font-bold">Learn about DAOs</h3>
          <p className="text-gray-600 mt-2">
            Find inspiration and learn about DAOs in our education portal designed for builders at every stage of the journey.
          </p>
          <div className="mt-6">
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-lg w-full hover:bg-red-700"
              onClick={() => window.open('https://inti-dao-builder.gitbook.io/inti-dao-builder-docs/para-empezar/daos', '_blank')}
            >
              Learn about DAOs
            </button>
          </div>
        </div>

        {/* Third Card: Track Roadmap On Chain */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
          <div className="flex justify-center mb-4">
            {/* Placeholder for Track Icon */}
            <div className="w-12 h-12 bg-gray-300"></div>
          </div>
          <h3 className="text-xl font-bold">Track Roadmap On Chain</h3>
          <p className="text-gray-600 mt-2">
            Use our governance plugins to build a DAO, dApp, or anything you can imagine on the Aragon OSx protocol.
          </p>
          <div className="mt-6">
            <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg w-full" disabled>
              Coming soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;