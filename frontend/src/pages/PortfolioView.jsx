import React from 'react';
import { useParams } from 'react-router-dom';

export default function PortfolioView() {
  const { username } = useParams();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-slate-800">
      <h1 className="text-3xl font-bold">Welcome to @{username}'s portfolio</h1>
      <p className="mt-1 text-slate-500">Generated dynamically by Foliohub.</p>
    </div>
  );
}