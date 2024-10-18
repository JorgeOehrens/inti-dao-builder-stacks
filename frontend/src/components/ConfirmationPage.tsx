import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

function ConfirmationPage() {
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();

  // Confetti will stop after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto text-center py-16">
      {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

      <h1 className="text-4xl font-bold mb-6">🎉 DAO Successfully Deployed! 🎉</h1>
      <p className="text-lg text-gray-700 mb-8">Your DAO is now live and ready to use.</p>

      <button
        className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-600"
        onClick={() => navigate('/')} // Route to homepage ('/')
      >
        Go to Dashboard
      </button>

      <button
        className="ml-4 bg-gray-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-600"
        onClick={() => navigate('/create-new-dao')} // Route to create a new DAO
      >
        Create Another DAO
      </button>
    </div>
  );
}

export default ConfirmationPage;