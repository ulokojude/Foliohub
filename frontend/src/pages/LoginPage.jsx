import React, { useState } from 'react';
import { ShieldAlert, Eye, EyeOff, Lock, Mail, ArrowRight, CornerDownLeft } from 'lucide-react';

export default function LoginPage({ onLoginSuccess, onBackToHome }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Hardcoded local check for dashboard testing purposes
    if (email === 'admin@foliohub.dev' && password === 'password123') {
      onLoginSuccess();
    } else {
      setError('Invalid database verification credentials. Hint: use admin@foliohub.dev / password123');
    }
  };

  return (
    <div className="min-h-screen w-screen bg-slate-950 flex flex-col justify-center items-center p-6 relative overflow-hidden font-sans">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50 pointer-events-none" />
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-tr from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl pointer-events-none top-1/4" />

      <div className="w-full max-w-[420px] relative z-10 space-y-6">
        
        {/* BRAND IDENTITY */}
        <div className="text-center space-y-2">
          <div className="inline-flex h-10 w-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 items-center justify-center font-bold text-slate-950 text-xl shadow-lg mx-auto">
            F
          </div>
          <h1 className="text-2xl font-extrabold text-white tracking-tight">Access Node Console</h1>
          <p className="text-xs text-slate-400">Initialize secure session layer to manage portfolio tenants.</p>
        </div>

        {/* AUTH CARD */}
        <div className="p-6 md:p-8 bg-slate-900/40 border border-slate-900 rounded-2xl shadow-xl backdrop-blur-sm space-y-6">
          
          {error && (
            <div className="p-3 bg-red-950/40 border border-red-900/50 rounded-xl flex gap-2.5 text-xs text-red-400 items-start leading-relaxed animate-shake">
              <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* EMAIL ROW */}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Console Operator Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="name@domain.com"
                  className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-950 border border-slate-900 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 transition"
                />
              </div>
            </div>

            {/* PASSWORD ROW */}
            <div>
              <label className="block text-xs font-medium text-slate-400 mb-1.5">Security Passkey</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-950 border border-slate-900 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 transition"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 mt-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition cursor-pointer group shadow-md shadow-emerald-950/20"
            >
              Verify Credentials
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition" />
            </button>
          </form>

        </div>

        {/* BACK ACTION DISPATCHER */}
        <button
          onClick={onBackToHome}
          className="w-full inline-flex items-center justify-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition cursor-pointer"
        >
          <CornerDownLeft className="w-3 h-3" /> Abort and return to homepage
        </button>

      </div>
    </div>
  );
}