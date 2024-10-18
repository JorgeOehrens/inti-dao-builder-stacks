import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SelectDaoType from './components/SelectDaoType';
import DescribeDao from './components/DescribeDao';
import DefineMembership from './components/DefineMembership';
import SelectGovernance from './components/SelectGovernance';
import DeployDao from './components/DeployDao';
import ConfirmationPage from './components/ConfirmationPage';
import Home from './pages/home'; // Import the homepage component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home route */}
        <Route path="/select-dao-type" element={<SelectDaoType />} /> {/* Route for Select DAO Type */}
        <Route path="/describe-dao" element={<DescribeDao />} />
        <Route path="/define-membership" element={<DefineMembership />} />
        <Route path="/select-governance" element={<SelectGovernance />} />
        <Route path="/deploy-dao" element={<DeployDao />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        

      </Routes>
    </Router>
  );
}

export default App;