import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PortfolioView() {
  const { username } = useParams(); // Grabs the name from the browser URL (e.g., /alex)
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fire a GET request to your backend server
        const response = await axios.get(`http://localhost:5000/api/portfolios/${username}`);
        
        // Save the backend's JSON data into our React state
        setProfile(response.data);
      } catch (err) {
        console.error("API Error:", err);
        setError(err.response?.data?.message || "Portfolio not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolioData();
  }, [username]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-50">
        <p className="text-lg font-medium text-indigo-600 animate-pulse">Fetching portfolio layout from API...</p>
      </div>
    );
  }

  if (error || !profile) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 p-4 text-center">
        <h1 className="text-4xl font-bold text-slate-800">404</h1>
        <p className="text-slate-600 mt-2">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-8 sm:p-12 border border-slate-100">
        <header className="border-b border-slate-100 pb-6">
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
            {profile.fullName}
          </h1>
          <p className="text-xl text-indigo-600 font-medium mt-2">{profile.title}</p>
        </header>

        <main className="mt-8 space-y-6">
          <section>
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">About Me</h2>
            <p className="mt-2 text-slate-600 leading-relaxed">{profile.bio}</p>
          </section>

          <section>
            <h2 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Core Skills</h2>
            <div className="flex flex-wrap gap-2">
              {profile.skills?.map((skill, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}