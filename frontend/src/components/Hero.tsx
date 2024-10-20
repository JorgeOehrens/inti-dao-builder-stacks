import { useNavigate } from 'react-router-dom';

// Import PNGs for the icons
import CreateIcon from '../assets/create-dao-icon.png';
import LearnIcon from '../assets/learn-dao-icon.png';
import TrackIcon from '../assets/track-dao-icon.png';
import HeroIcon from '../assets/REDSUN_INTIHERO.png'; // Import your hero icon

const Hero: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative w-screen text-white overflow-hidden">
      
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-r from-rose-500 via-red-400 to-red-600 animate-gradient-flow"
     style={{ width: '100vw', height: '80vh', backgroundSize: '200% 200%' }}>
        {/* Red Star Icon placed inside the red background */}
        <div className="absolute right-0 bottom-100 w-[70%] max-w-4xl opacity-80 z-0 animate-rotate-slow">
          <img 
            src={HeroIcon} 
            alt="Hero Icon" 
            className="w-full h-auto object-cover"
            style={{ 
              transform: 'translateY(80%)', 
              transformOrigin: 'center', // Ensure rotation happens around the center
              animation: 'rotate-slow 120s linear infinite' // Apply the rotation animation
            }}
          />
        </div>
      </div>

      {/* Hero content wrapper */}
      <div className="relative z-10 flex flex-col min-h-[60vh] px-0 mx-0 w-screen">
        {/* Hero Text */}
        <div className="w-full max-w-none flex flex-col justify-center min-h-[60vh] px-6 mx-0">
          <div className="text-left px-0 mx-0">
            <h1 className="text-5xl font-bold leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Build your DAO,<br />
              Build your World
            </h1>
            <p className="text-lg mt-4" style={{ fontFamily: 'Syne, sans-serif' }}>
              Build your DAO, explore communities,<br />
              and fund your ideas globally.
            </p>
          </div>
        </div>

        {/* Cards section */}
        <div className="relative z-20 mt-[100px] -translate-y-1/2 w-full px-6"> 
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* First Card: Create Your DAO */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg opacity-90">
              <div className="flex justify-center mb-4">
                <img src={CreateIcon} alt="Create DAO Icon" className="w-24 h-24" />
              </div>
              <h3 className="text-xl font-bold">Create your DAO</h3>
              <p className="text-gray-600 mt-2">
                Mint tokens, set governance parameters, and deploy your DAO on-chain in minutes with our no-code setup process.
              </p>
              <div className="mt-6">
                <button
                  className="bg-orange-500 text-white px-4 py-2 rounded-lg w-full hover:bg-red-700"
                  onClick={() => navigate('/select-dao-type')}
                >
                  Create a DAO
                </button>
              </div>
            </div>

            {/* Second Card: Learn about DAOs */}
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg opacity-90">
              <div className="flex justify-center mb-4">
                <img src={LearnIcon} alt="Learn DAO Icon" className="w-24 h-24" />
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
            <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg opacity-90">
              <div className="flex justify-center mb-4">
                <img src={TrackIcon} alt="Track DAO Icon" className="w-24 h-24" />
              </div>
              <h3 className="text-xl font-bold">Track Roadmap On Chain</h3>
              <p className="text-gray-600 mt-2">
              Gain full transparency and accountability by tracking your project’s progress on-chain. Our governance plugins allow you to set milestones, manage deliverables, and keep your community informed—all in a decentralized, tamper-proof environment.
              </p>
              <div className="mt-6">
                <button className="bg-gray-300 text-gray-600 px-4 py-2 rounded-lg w-full" disabled>
                  Coming soon
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;