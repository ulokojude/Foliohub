import React from 'react';
import { Sparkles, Eye } from 'lucide-react';

export default function DashboardPreviewer({ children, configPanel }) {
  return (
    /* Force full viewport clipping to prevent the main window from ever scrolling */
    <div className="flex flex-col lg:flex-row h-screen w-screen bg-slate-950 text-slate-100 overflow-hidden select-none">
      
      {/* LEFT COLUMN: The Dynamic Form Controls Panel */}
      <aside className="w-full lg:w-[420px] bg-slate-900 border-b lg:border-b-0 lg:border-r border-slate-800/80 flex flex-col h-[45vh] lg:h-full shrink-0">
        {/* Brand Banner Header */}
        <div className="p-6 border-b border-slate-800/60 flex items-center justify-between bg-slate-900/40 shrink-0">
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

        {/* Input Controls Panel - Isolated Scroll Zone */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 [scrollbar-width:thin] [scrollbar-color:#1e293b_transparent]">
          {configPanel}
        </div>
      </aside>

      {/* RIGHT COLUMN: Fixed Immersive Mockup Canvas Workspace */}
      <main className="flex-1 bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden h-[55vh] lg:h-full">
        {/* Ambient background grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-60 pointer-events-none" />
        
        {/* Workspace Subheading */}
        <div className="absolute top-6 left-8 hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest">
          <Eye className="w-3.5 h-3.5" /> Interactive Device Viewport
        </div>

        {/* Device Frame shadow container */}
        <div className="relative group z-10 scale-[0.8] md:scale-[0.85] lg:scale-100 transition duration-500 max-h-full">
          <div className="absolute -inset-1 rounded-[52px] bg-gradient-to-tr from-emerald-500/10 to-teal-500/10 opacity-70 blur-2xl pointer-events-none" />
          
          {/* Simulated Smartphone Frame - Rigid height boundary */}
          <div className="w-[360px] h-[680px] lg:h-[720px] border-[12px] border-slate-900 rounded-[52px] shadow-2xl relative bg-slate-950 flex flex-col outline outline-1 outline-slate-800/60 overflow-hidden">
            
            {/* Phone Dynamic Island/Notch Overlay */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-slate-900 rounded-full z-50 flex items-center justify-center pointer-events-none">
              <div className="w-2 h-2 rounded-full bg-slate-950 ml-auto mr-3 border border-slate-800/20" />
            </div>
            
            {/* ENGINES INNER VIEWPORT SCROLL ZONE */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden pt-4 bg-slate-950 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="min-h-full flex flex-col justify-between">
                {children}
              </div>
            </div>

          </div>
        </div>
      </main>

    </div>
  );
}