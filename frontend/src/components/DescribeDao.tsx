import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "./ProgressBar";

function DescribeDao() {
  const [name, setName] = useState("");
  const [subdomain, setSubdomain] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Load values from localStorage if they exist
    const savedName = localStorage.getItem("daoName");
    const savedSubdomain = localStorage.getItem("daoSubdomain");
    const savedDescription = localStorage.getItem("daoDescription");

    if (savedName) setName(savedName);
    if (savedSubdomain) setSubdomain(savedSubdomain);
    if (savedDescription) setDescription(savedDescription);
  }, []);

  // Update localStorage when each field changes
  const handleNameChange = (e: any) => {
    const value = e.target.value;
    setName(value);
    localStorage.setItem("daoName", value);
  };

  const handleSubdomainChange = (e: any) => {
    const value = e.target.value;
    setSubdomain(value);
    localStorage.setItem("daoSubdomain", value);
  };

  const handleDescriptionChange = (e: any) => {
    const value = e.target.value;
    setDescription(value);
    localStorage.setItem("daoDescription", value);
  };

  const handleNext = () => {
    navigate("/define-membership");
  };

  const handleBack = () => {
    navigate("/select-dao-type");
  };

  return (
    <div className="container mx-auto py-10">
      {/* Progress Bar - 2 out of 5 steps */}
      <ProgressBar currentStep={2} totalSteps={5} />

      <h1 className="text-3xl font-bold mb-4">Describe your DAO</h1>

      <div className="mb-4">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">ENS Subdomain</label>
        <input
          type="text"
          className="border rounded p-2 w-full"
          value={subdomain}
          onChange={handleSubdomainChange}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2">Description</label>
        <textarea
          className="border rounded p-2 w-full"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default DescribeDao;
