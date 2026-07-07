import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import PortfolioView from './pages/PortfolioView';
import TemplateView from './templates/vcard/TemplateView';

const mockData = {
  name: "Jude",
  title: "Web Developer & Engineer",
  bio: "Building modern full-stack web applications and scalable system architectures.",
  email: "jude@foliohub.dev",
  phone: "+234 800 000 0000",
  location: "Nigeria",
  website: "https://github.com/ulokojude"
};

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Platform Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/test-vcard" element={<TemplateView userData={mockData} />} />

        {/* Dynamic Route: Anything after the slash becomes the 'username' parameter */}
        <Route path="/:username" element={<PortfolioView />} />
      </Routes>
    </Router>
  );
}

export default App;