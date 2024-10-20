import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar'; // Import the progress bar component
import AOS from 'aos'; // Import AOS for animations
import 'aos/dist/aos.css'; // Import AOS styles


const daoTypes = [
  {
    id: 1,
    name: "Protocol DAOs",
    description: "Manages decentralized protocols like Uniswap DAO.",
  },
  {
    id: 2,
    name: "Investment DAOs",
    description: "Investment groups that pool funds for projects.",
  },
  {
    id: 3,
    name: "Grant DAOs",
    description: "DAOs that distribute grants to community projects.",
  },
  {
    id: 4,
    name: "Collector DAOs",
    description: "Acquires and showcases valuable digital assets.",
  },
  {
    id: 5,
    name: "Social DAOs",
    description: "Builds communities around shared goals or interests.",
  },
];

function SelectDaoType() {
  const [selectedDaoType, setSelectedDaoType] = useState<number | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with the once option for initial load
  }, []);

  const handleNext = () => {
    if (selectedDaoType) {

      navigate("/describe-dao");
    }
  };

  const handleBack = () => {
    navigate('/'); // Navigate back to the previous page (in this case, the homepage)
  };

  // Function to remove AOS attributes after animation is done
  useEffect(() => {
    const removeAOS = () => {
      const elements = document.querySelectorAll('[data-aos]');
      elements.forEach((el) => {
        el.removeAttribute('data-aos');
        el.removeAttribute('data-aos-delay');
      });
    };
    
    // Remove AOS attributes after the initial animation completes
    setTimeout(removeAOS, 1500); // Adjust based on your animation duration
  }, []);

  return (
    <div className="container mx-auto py-10">
      {/* Progress Bar - 1 out of 5 steps */}
      <ProgressBar currentStep={1} totalSteps={5} />

      <h1 className="text-3xl font-bold mb-4" data-aos="fade-up">Select the type of DAO</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {daoTypes.map((dao) => (
          <div
            key={dao.id}
            className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
              selectedDaoType === dao.id 
                ? 'border-blue-500 shadow-lg ring-2 ring-blue-400'  // Highlight selected with shadow and ring
                : 'border-gray-300'

            }`}
            onClick={() => setSelectedDaoType(dao.id)}
            data-aos="fade-up"
            data-aos-delay={dao.id * 100}
          >
            <h2 className="text-xl font-semibold">{dao.name}</h2>
            <p>{dao.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-between">
        <button
          onClick={handleBack}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="bg-red-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          disabled={!selectedDaoType}
          data-aos="fade-up"
          data-aos-delay="600"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SelectDaoType;
