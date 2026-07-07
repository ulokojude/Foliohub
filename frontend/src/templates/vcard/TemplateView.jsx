import React from 'react';
import { User, Mail, Briefcase, Phone, Globe, Download, Share2, MapPin } from 'lucide-react';
import ActionButton from './components/ActionButton';
import ContactCard from './components/ContactCard';

export default function TemplateView({ userData }) {
  // Graceful fallback parsing for API data safety
  const profile = {
    name: userData?.name || "Jude",
    title: userData?.title || "Web Developer & Engineer",
    bio: userData?.bio || "Building modern full-stack web applications and scalable system architectures.",
    email: userData?.email || "hello@example.com",
    phone: userData?.phone || "+234 800 000 0000",
    location: userData?.location || "Nigeria",
    website: userData?.website || "https://github.com/ulokojude",
    avatar: userData?.avatar || null
  };

  const handleDownloadVCard = () => {
    // In production, this hits your Express backend generation endpoint
    window.location.href = `/api/vcard/generate?email=${encodeURIComponent(profile.email)}`;
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 antialiased selection:bg-emerald-500 selection:text-slate-950">
      {/* Structural Card Container */}
      <div className="w-full max-w-md bg-slate-900/60 border border-slate-800/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden backdrop-blur-xl">
        
        {/* Aesthetic Gradient Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400" />

        {/* Header/Avatar Section */}
        <header className="flex flex-col items-center text-center mt-4">
          <div className="h-24 w-24 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-400 p-0.5 shadow-xl shadow-emerald-950/40">
            {profile.avatar ? (
              <img src={profile.avatar} alt={profile.name} className="h-full w-full object-cover rounded-2xl" />
            ) : (
              <div className="h-full w-full bg-slate-900 rounded-2xl flex items-center justify-center">
                <User className="w-10 h-10 text-emerald-400" />
              </div>
            )}
          </div>

          <h1 className="mt-5 text-2xl font-bold tracking-tight text-white">{profile.name}</h1>
          <p className="text-sm font-medium text-emerald-400 inline-flex items-center gap-1.5 mt-1">
            <Briefcase className="w-3.5 h-3.5" />
            {profile.title}
          </p>
          <p className="text-xs text-slate-400 inline-flex items-center gap-1 mt-1">
            <MapPin className="w-3 h-3 text-slate-500" />
            {profile.location}
          </p>
          
          <p className="mt-4 text-sm text-slate-400 leading-relaxed max-w-sm">
            {profile.bio}
          </p>
        </header>

        {/* Primary Contact Matrix */}
        <main className="mt-8 space-y-3">
          <ContactCard icon={<Mail className="w-4 h-4 text-emerald-400" />} label="Email Address" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactCard icon={<Phone className="w-4 h-4 text-emerald-400" />} label="Mobile Phone" value={profile.phone} href={`tel:${profile.phone}`} />
          <ContactCard icon={<Globe className="w-4 h-4 text-emerald-400" />} label="Personal Workspace" value={profile.website.replace(/^https?:\/\//, '')} href={profile.website} target="_blank" />
        </main>

        {/* Core vCard Networking Action Bar */}
        <footer className="mt-8 pt-6 border-t border-slate-800/60 grid grid-cols-2 gap-4">
          <ActionButton onClick={handleDownloadVCard} variant="primary" icon={<Download className="w-4 h-4" />}>
            Save Contact
          </ActionButton>
          <ActionButton onClick={() => navigator.clipboard.writeText(window.location.href)} variant="secondary" icon={<Share2 className="w-4 h-4" />}>
            Share Profile
          </ActionButton>
        </footer>

      </div>
    </div>
  );
}