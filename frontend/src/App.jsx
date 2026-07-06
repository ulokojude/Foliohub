import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import PortfolioView from './pages/PortfolioView';

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Platform Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Dynamic Route: Anything after the slash becomes the 'username' parameter */}
        <Route path="/:username" element={<PortfolioView />} />
      </Routes>
    </Router>
  );
}

export default App;