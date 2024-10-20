import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const completionPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
      <div
        className="bg-red-500 h-2.5 rounded-full"
        style={{ width: `${completionPercentage}%` }}
      ></div>
      <p className="text-sm mt-2 text-right">{currentStep}/{totalSteps} completed</p>
    </div>
  );
};

export default ProgressBar;