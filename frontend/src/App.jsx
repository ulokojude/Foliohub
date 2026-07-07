import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import TemplateCatalog from './pages/TemplateCatalog';
import SettingsPage from './pages/SettingsPage'; // 1. Import your new page
import DashboardPreviewer from './pages/Dashboard';
import TemplateView from './templates/vcard/TemplateView';
import { Settings } from 'lucide-react'; // Import settings icon

export default function App() {
  // Routing tokens: 'landing' | 'login' | 'templates' | 'dashboard' | 'settings'
  const [currentView, setCurrentView] = useState('landing'); 
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const [userData, setUserData] = useState({
    name: "Jude",
    title: "Web Developer & Engineer",
    bio: "Building modern full-stack web applications and scalable system architectures.",
    email: "jude@foliohub.dev",
    phone: "+234 800 000 0000",
    location: "Nigeria",
    website: "https://github.com/ulokojude"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const configPanelForm = (
    <div className="space-y-5 text-slate-300">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white mb-1">Identity Details</h3>
          <p className="text-xs text-slate-500">Configure core personal mapping tokens.</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-between gap-4">
            {/* Temporary text button to test visibility */}
            <button 
              onClick={() => setCurrentView('settings')} 
              className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 px-2.5 py-2 rounded-lg bg-slate-950 border border-slate-800 hover:border-emerald-800/50 transition cursor-pointer"
            >
              ⚙️
            </button>
            
            <button 
              onClick={() => setCurrentView('templates')} 
              className="text-xs font-semibold text-slate-400 hover:text-white px-2.5 py-2 rounded-lg bg-slate-950 border border-slate-800 transition cursor-pointer"
            >
              ←
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-2">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Full Name</label>
          <input type="text" name="name" value={userData.name} onChange={handleInputChange} className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500/80 transition" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Professional Title</label>
          <input type="text" name="title" value={userData.title} onChange={handleInputChange} className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500/80 transition" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Location</label>
          <input type="text" name="location" value={userData.location} onChange={handleInputChange} className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500/80 transition" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Short Biography</label>
          <textarea rows="3" name="bio" value={userData.bio} onChange={handleInputChange} className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500/80 transition resize-none" />
        </div>
      </div>
      
      <div className="h-px bg-slate-800/60 my-6" />

      <div>
        <h3 className="text-sm font-semibold text-white mb-1">Communication Anchors</h3>
        <p className="text-xs text-slate-500">Passed directly into system parameter models.</p>
      </div>

      <div className="space-y-4 pt-2">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Public Email</label>
          <input type="email" name="email" value={userData.email} onChange={handleInputChange} className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500/80 transition" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Phone Number</label>
          <input type="text" name="phone" value={userData.phone} onChange={handleInputChange} className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500/80 transition" />
        </div>
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Personal Portfolio Link</label>
          <input type="url" name="website" value={userData.website} onChange={handleInputChange} className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500/80 transition" />
        </div>
      </div>
    </div>
  );

  // THREE-TIER STRUCTURAL ROUTING VIEW MANAGER
  if (currentView === 'landing') {
    return <LandingPage onLaunchDashboard={() => setCurrentView('login')} />;
  }

  if (currentView === 'login') {
    return (
      <LoginPage 
        onBackToHome={() => setCurrentView('landing')}
        onLoginSuccess={() => setCurrentView('templates')} 
      />
    );
  }

  if (currentView === 'templates') {
    return (
      <TemplateCatalog 
        onBackToHome={() => setCurrentView('landing')}
        onSelectTemplate={(templateId) => {
          setSelectedTemplate(templateId);
          setCurrentView('dashboard');
        }} 
      />
    );
  }

  // 3. RENDER SWITCH ROUTE TARGET
  if (currentView === 'settings') {
    return <SettingsPage onBackToDashboard={() => setCurrentView('dashboard')} />;
  }

  return (
    <DashboardPreviewer configPanel={configPanelForm}>
      {selectedTemplate === 'vcard' && <TemplateView userData={userData} />}
    </DashboardPreviewer>
  );
}