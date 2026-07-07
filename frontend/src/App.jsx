import React, { useState } from 'react';
import DashboardPreviewer from './pages/Dashboard';
import TemplateView from './templates/vcard/TemplateView';

export default function App() {
  // 1. Reactive configuration state binding directly to the template
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

  // 2. The configuration interface chunk parsed cleanly into our layout
  const configPanelForm = (
    <div className="space-y-5 text-slate-300">
      <div>
        <h3 className="text-sm font-semibold text-white mb-1">Identity Details</h3>
        <p className="text-xs text-slate-500">Configure core personal mapping tokens.</p>
      </div>

      <div className="space-y-4 pt-2">
        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Full Name</label>
          <input type="text" name="name" value={userData.name} onChange={handleInputChange} className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500/80 transition" placeholder="e.g. Engr. Jude" />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Professional Title</label>
          <input type="text" name="title" value={userData.title} onChange={handleInputChange} className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500/80 transition" placeholder="e.g. Web Developer" />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Location</label>
          <input type="text" name="location" value={userData.location} onChange={handleInputChange} className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500/80 transition" placeholder="e.g. Lagos, Nigeria" />
        </div>

        <div>
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Short Biography</label>
          <textarea rows="3" name="bio" value={userData.bio} onChange={handleInputChange} className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500/80 transition resize-none" placeholder="Tell visitors about your core architectural skillsets..." />
        </div>
      </div>

      <div className="h-px bg-slate-800/60 my-6" />

      <div>
        <h3 className="text-sm font-semibold text-white mb-1">Communication Anchors</h3>
        <p className="text-xs text-slate-500">These values are directly packed into the downloadable .vcf system card.</p>
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
          <label className="block text-xs font-medium text-slate-400 mb-1.5">Personal Portfolio / Website Link</label>
          <input type="url" name="website" value={userData.website} onChange={handleInputChange} className="w-full px-3 py-2 text-sm bg-slate-950 border border-slate-800 rounded-xl text-white focus:outline-none focus:border-emerald-500/80 transition" />
        </div>
      </div>
    </div>
  );

  return (
    <DashboardPreviewer configPanel={configPanelForm}>
      {/* Passing the live, stateful tracking model straight down to the vcard viewer */}
      <TemplateView userData={userData} />
    </DashboardPreviewer>
  );
}