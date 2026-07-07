import React from 'react';
import { Terminal, Shield, Cpu, Layers, ArrowRight, GitFork, CheckCircle, Sparkles } from 'lucide-react';

export default function LandingPage({ onLaunchDashboard }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950">
      
      {/* 1. HEADER NAVIGATION BAR */}
      <nav className="border-b border-slate-900 bg-slate-950/70 backdrop-blur-md sticky top-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center font-bold text-slate-950 text-lg">
              F
            </div>
            <span className="font-bold tracking-tight text-white text-lg">Foliohub</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/ulokojude/foliohub-templates" target="_blank" rel="noreferrer" className="text-sm font-medium text-slate-400 hover:text-white transition inline-flex items-center gap-1.5">
              {/* Old: <Github className="w-4 h-4" /> Open Source */}
              <GitFork className="w-4 h-4" /> Open Source
            </a>
            <button 
              onClick={onLaunchDashboard}
              className="px-4 py-2 text-xs font-semibold bg-slate-900 border border-slate-800 rounded-xl text-slate-200 hover:text-white hover:bg-slate-800 transition cursor-pointer"
            >
              Console
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION WITH AMBIENT MATRIX GRID */}
      <header className="relative py-20 lg:py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-70 pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" /> Next-Gen Multi-Tenant Portfolio Engine
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            The Developer Portfolio Builder <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-500 bg-clip-text text-transparent">
              Driven by Live API Data
            </span>
          </h1>
          
          <p className="text-base sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Stop hardcoding portfolios. Instantly render beautiful, production-ready developer profiles, engineering statistics, and reactive themes using structured configurations.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={onLaunchDashboard}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition shadow-lg shadow-emerald-950/30 cursor-pointer group"
            >
              Launch Platform Core 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition" />
            </button>
            <a 
              href="https://github.com/ulokojude/foliohub-templates"
              target="_blank" rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl transition"
            >
              {/* Old: <Github className="w-4 h-4" /> Star on GitHub */}
              <GitFork className="w-4 h-4" /> Star on GitHub
            </a>
          </div>
        </div>
      </header>

      {/* 3. CORE ARCHITECTURAL FEATURES MATRIX */}
      <section className="max-w-7xl mx-auto px-6 py-16 border-t border-slate-900">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-3">
            <div className="h-10 w-10 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center">
              <Layers className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-bold text-white text-base">Multi-Tenant Core</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Dynamically maps customizable domain routing schemas across isolated user data profiles perfectly.
            </p>
          </div>

          <div className="p-6 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-3">
            <div className="h-10 w-10 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center">
              <Cpu className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-bold text-white text-base">Tailwind CSS v4</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Compiled utilizing modern utility specifications for blistering rendering metrics and lightning performance.
            </p>
          </div>

          <div className="p-6 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-3">
            <div className="h-10 w-10 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center">
              <Terminal className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-bold text-white text-base">Decoupled Architecture</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Layout directory models accept fully abstract JSON payloads securely, bypassing code-level lockins.
            </p>
          </div>

          <div className="p-6 bg-slate-900/40 border border-slate-900 rounded-2xl space-y-3">
            <div className="h-10 w-10 bg-slate-950 border border-slate-800 rounded-xl flex items-center justify-center">
              <Shield className="w-5 h-5 text-emerald-400" />
            </div>
            <h3 className="font-bold text-white text-base">Open-Source Sovereignty</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              100% self-hostable repository schemas ready for deep architectural container customization pipelines.
            </p>
          </div>

        </div>
      </section>

      {/* 4. FOOTER CREDITS */}
      <footer className="border-t border-slate-900 py-8 px-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Foliohub SaaS Platform. Open Source under the MIT License.</p>
          <div className="flex items-center gap-1.5 text-slate-400 font-medium">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Built for modern developers
          </div>
        </div>
      </footer>

    </div>
  );
}