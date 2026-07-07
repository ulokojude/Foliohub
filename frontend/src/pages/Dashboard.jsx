import React from 'react';
import { Sparkles, Eye } from 'lucide-react';

export default function DashboardPreviewer({ children, configPanel }) {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-950 text-slate-100">
      
      {/* LEFT COLUMN: The Dynamic Form Controls Panel */}
      <aside className="w-full lg:w-[420px] bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-800/80 flex flex-col h-auto lg:h-screen">
        {/* Brand Banner Header */}
        <div className="p-6 border-b border-slate-800/60 flex items-center justify-between bg-slate-900/40">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center font-bold text-slate-950 text-lg shadow-sm">
              F
            </div>
            <span className="font-bold tracking-tight text-white text-lg">Foliohub <span className="text-xs text-slate-500 font-normal">v1.0</span></span>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-medium px-2 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-emerald-400">
            <Sparkles className="w-3 h-3" /> Live Sync
          </span>
        </div>

        {/* Input Controls Scroll Container */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar">
          {configPanel}
        </div>
      </aside>

      {/* RIGHT COLUMN: The Immersive Mockup Canvas Workspace */}
      <main className="flex-1 bg-slate-950 flex flex-col items-center justify-center p-6 md:p-12 relative overflow-hidden h-screen lg:h-auto">
        {/* Ambient background grid pattern for high-end SaaS feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />
        
        {/* Workspace Subheading */}
        <div className="absolute top-6 left-8 hidden md:flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest">
          <Eye className="w-3.5 h-3.5" /> Interactive Device Viewport
        </div>

        {/* Micro Device Frame Shadow Layer */}
        <div className="relative group z-10 scale-[0.9] sm:scale-100 transition duration-500">
          <div className="absolute -inset-1 rounded-[56px] bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 opacity-70 blur-2xl group-hover:opacity-100 transition duration-500" />
          
          {/* Simulated Premium Phone Frame Wrapper */}
          <div className="w-[360px] h-[740px] border-[12px] border-slate-900 rounded-[52px] shadow-2xl overflow-hidden relative bg-slate-950 flex flex-col outline outline-1 outline-slate-800/60">
            {/* Phone Dynamic Island/Notch Mockup */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-slate-900 rounded-full z-50 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-slate-950 ml-auto mr-3 border border-slate-800/20" />
            </div>
            
            {/* The actual live user template contents injection point */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden select-none custom-scrollbar pt-4">
              {children}
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}