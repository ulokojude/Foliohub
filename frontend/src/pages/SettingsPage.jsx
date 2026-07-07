import React, { useState } from 'react';
// 1. Ensure Eye and EyeOff are imported from your Lucide library
import { Globe, Shield, Radio, Key, Save, AlertTriangle, CheckCircle, Server, Eye, EyeOff } from 'lucide-react';

export default function SettingsPage({ onBackToDashboard }) {
  // Global View Control States
  const [subdomain, setSubdomain] = useState('jude');
  const [customDomain, setCustomDomain] = useState('www.judeuloko.dev');
  const [isDnsVerified, setIsDnsVerified] = useState(true);

  // 2. Add the hide/reveal toggle state variable here
  const [showApiKey, setShowApiKey] = useState(false);
  const [apiKey, setApiKey] = useState('fh_live_8943f2a1b9c8d7e682390abdf0912');
  const [sheetId, setSheetId] = useState('1BxiMVs0XRA5nFMdKv1aRv9...');

  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  const handleSaveSettings = (e) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 md:p-12 relative overflow-x-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        
        {/* HEADER BLOCK */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-900 pb-6">
          <div>
            <h1 className="text-2xl font-extrabold text-white tracking-tight">Platform Configurations</h1>
            <p className="text-sm text-slate-400 mt-1">Manage network routing, data pipelines, and tenant security variables.</p>
          </div>
          <button 
            onClick={onBackToDashboard}
            className="px-4 py-2 text-xs font-semibold bg-slate-900 border border-slate-800 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition cursor-pointer"
          >
            ← Return to Hub
          </button>
        </header>

        {/* FEEDBACK BANNER */}
        {saveSuccess && (
          <div className="p-4 bg-emerald-950/40 border border-emerald-900/50 rounded-2xl flex items-center gap-3 text-sm text-emerald-400">
            <CheckCircle className="w-5 h-5 shrink-0" />
            <span>Configuration changes synchronized to master edge cluster nodes successfully.</span>
          </div>
        )}

        <form onSubmit={handleSaveSettings} className="space-y-8">
          
          {/* SECTION 1: ROUTING */}
          <div className="p-6 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800/60 pb-4">
              <div className="h-9 w-9 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-emerald-400">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Network Routing & Architecture</h3>
                <p className="text-xs text-slate-500">Configure how recruiters and clients resolve your portfolio across public gateway infrastructure.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Foliohub Subdomain</label>
                <div className="relative flex items-center">
                  <input 
                    type="text" 
                    value={subdomain} 
                    onChange={(e) => setSubdomain(e.target.value)}
                    className="w-full pl-3 pr-28 py-2.5 text-sm bg-slate-950 border border-slate-900 rounded-xl text-white focus:outline-none focus:border-emerald-500/60 transition font-mono"
                  />
                  <span className="absolute right-3 text-xs font-semibold text-slate-600 font-mono pointer-events-none">
                    .foliohub.dev
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Custom Apex / CNAME Domain</label>
                <input 
                  type="text" 
                  value={customDomain} 
                  onChange={(e) => setCustomDomain(e.target.value)}
                  placeholder="e.g. portfolio.yourdomain.com"
                  className="w-full px-3 py-2.5 text-sm bg-slate-950 border border-slate-900 rounded-xl text-white focus:outline-none focus:border-emerald-500/60 transition font-mono"
                />
              </div>
            </div>

            {isDnsVerified && (
              <div className="p-3.5 bg-slate-950/80 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5 text-slate-400">
                  <Server className="w-4 h-4 text-emerald-400" />
                  <span>CNAME points reliably to <code className="text-slate-200 bg-slate-900 px-1.5 py-0.5 rounded font-mono">cname.foliohub.dev</code></span>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-emerald-950/50 border border-emerald-800/60 text-emerald-400 text-[10px] font-bold uppercase">
                  Active Edge
                </span>
              </div>
            )}
          </div>

          {/* SECTION 2: INTEGRATION API PIPELINES */}
          <div className="p-6 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800/60 pb-4">
              <div className="h-9 w-9 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-emerald-400">
                <Key className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">External Data Sync & API Keys</h3>
                <p className="text-xs text-slate-500">Inject security credentials to sync real-time traffic telemetry and visit-logging hooks.</p>
              </div>
            </div>

            <div className="space-y-4">
              {/* 3. UPDATED TO SUPPORT ABSOLUTE BUTTON INLINE PINNING */}
              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Foliohub API Secret Access Key Token</label>
                <div className="relative flex items-center">
                  <input 
                    type={showApiKey ? "text" : "password"} 
                    value={apiKey} 
                    onChange={(e) => setApiKey(e.target.value)}
                    className="w-full pl-3 pr-12 py-2.5 text-sm bg-slate-950 border border-slate-900 rounded-xl text-white focus:outline-none focus:border-emerald-500/60 transition font-mono tracking-wider"
                  />
                  <button
                    type="button"
                    onClick={() => setShowApiKey(!showApiKey)}
                    className="absolute right-2 p-2 rounded-lg text-slate-500 hover:text-slate-200 hover:bg-slate-900 transition cursor-pointer"
                    title={showApiKey ? "Hide Token String" : "Reveal Token String"}
                  >
                    {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-400 mb-2">Google Sheets Logger Spreadsheet Target ID</label>
                <input 
                  type="text" 
                  value={sheetId} 
                  onChange={(e) => setSheetId(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm bg-slate-950 border border-slate-900 rounded-xl text-white focus:outline-none focus:border-emerald-500/60 transition font-mono text-slate-300"
                />
                <p className="text-[11px] text-slate-500 mt-1.5">Used by the background Vercel runtime functions to write raw telemetry traffic logs into your analytics ledger spreadsheets.</p>
              </div>
            </div>
          </div>

          {/* SECTION 3: RISK CONTROL */}
          <div className="p-6 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-800/60 pb-4">
              <div className="h-9 w-9 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center text-red-400">
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Deployment Status & Threat Control</h3>
                <p className="text-xs text-slate-500">Modify live system state rules or purge cached parameters directly on the live infrastructure framework.</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-slate-950 border border-slate-900 rounded-xl">
              <div className="space-y-0.5">
                <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Radio className={`w-3.5 h-3.5 ${maintenanceMode ? 'text-amber-500 animate-pulse' : 'text-slate-500'}`} />
                  Tenant Maintenance Interception Block
                </h4>
                <p className="text-xs text-slate-500 max-w-lg leading-relaxed">Forces public routes to return an immediate 503 HTTP block. Useful during heavy structural code refactoring or profile data restructuring cycles.</p>
              </div>
              <button
                type="button"
                onClick={() => setMaintenanceMode(!maintenanceMode)}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer ${
                  maintenanceMode 
                    ? 'bg-amber-950/40 border-amber-800 text-amber-400' 
                    : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {maintenanceMode ? 'ENABLED' : 'DISABLE'}
              </button>
            </div>
          </div>

          {/* MASTER SUBMIT CONTROL STICKY BAR */}
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs rounded-xl transition shadow-lg shadow-emerald-950/20 cursor-pointer group"
            >
              <Save className="w-4 h-4" /> Commit System Adjustments
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}