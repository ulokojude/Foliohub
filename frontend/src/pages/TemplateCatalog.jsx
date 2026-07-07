import React from 'react';
import { Layout, ArrowRight, UserCheck, Code, Globe, Layers } from 'lucide-react';

export default function TemplateCatalog({ onSelectTemplate, onBackToHome }) {
  const templatesList = [
    {
      id: 'vcard',
      name: 'Minimal vCard',
      description: 'A compact, ultra-modern digital business card optimized for networking, QR link-in-bios, and mobile viewports.',
      tags: ['Mobile-First', 'Networking', 'Emerald Dark'],
      icon: UserCheck,
      status: 'active'
    },
    {
      id: 'developer-portfolio',
      name: 'Elite Engineer Pro',
      description: 'A full-scale portfolio layout with integrated sections for GitHub repositories, dynamic timelines, and full project galleries.',
      tags: ['Desktop Optimized', 'GitHub Sync', 'SaaS Theme'],
      icon: Code,
      status: 'coming_soon'
    },
    {
      id: 'minimal-blog',
      name: 'Chronicle Markdown',
      description: 'Clean, typography-focused blog template designed specifically for developers writing technical documentations and articles.',
      tags: ['MDX Supported', 'Minimalist', 'SEO Ready'],
      icon: Globe,
      status: 'coming_soon'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans p-6 md:p-12 relative overflow-x-hidden">
      {/* Ambient decorative elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* HEADER BLOCK */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-900 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1.5">
              <Layers className="w-4 h-4" /> Core Engine Base
            </div>
            <h1 className="text-3xl font-extrabold text-white tracking-tight">Select a Workspace Architecture</h1>
            <p className="text-sm text-slate-400 mt-1">Choose a blueprint model to initialize your multi-tenant database layout node.</p>
          </div>
          <button 
            onClick={onBackToHome}
            className="self-start sm:self-center px-4 py-2 text-xs font-medium text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl transition cursor-pointer"
          >
            ← Back to Home
          </button>
        </header>

        {/* TEMPLATES INTERACTIVE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templatesList.map((tmpl) => {
            const IconComponent = tmpl.icon;
            const isActive = tmpl.status === 'active';

            return (
              <div 
                key={tmpl.id} 
                className={`relative flex flex-col justify-between p-6 rounded-2xl bg-slate-900/40 border transition-all duration-300 group ${
                  isActive 
                    ? 'border-slate-800/80 hover:border-emerald-500/50 hover:bg-slate-900/60 shadow-xl shadow-slate-950/50' 
                    : 'border-slate-900 opacity-60'
                }`}
              >
                <div>
                  {/* Card Icon Header */}
                  <div className={`h-11 w-11 rounded-xl border flex items-center justify-center mb-5 transition-colors ${
                    isActive 
                      ? 'bg-slate-950 border-slate-800 text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-950/20' 
                      : 'bg-slate-950/40 border-slate-900 text-slate-600'
                  }`}>
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Template Meta */}
                  <h3 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
                    {tmpl.name}
                    {!isActive && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-slate-500">
                        Soon
                      </span>
                    )}
                  </h3>
                  <p className="text-sm text-slate-400 mt-2.5 leading-relaxed">
                    {tmpl.description}
                  </p>
                </div>

                {/* Footer Badges & Trigger Button */}
                <div className="mt-6 pt-5 border-t border-slate-900/60">
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {tmpl.tags.map((tag, i) => (
                      <span key={i} className="text-[11px] px-2 py-0.5 rounded-md bg-slate-950/80 border border-slate-800/40 text-slate-500 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {isActive ? (
                    <button
                      onClick={() => onSelectTemplate(tmpl.id)}
                      className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold rounded-xl transition cursor-pointer group/btn"
                    >
                      Initialize Layout 
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition" />
                    </button>
                  ) : (
                    <div className="w-full py-2.5 text-center border border-dashed border-slate-800/60 rounded-xl text-xs font-medium text-slate-600">
                      Module Compiling
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}