import React from 'react';

export default function ContactCard({ icon, label, value, href, ...props }) {
  return (
    <a 
      href={href} 
      className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-950/40 border border-slate-900 hover:border-slate-800/80 hover:bg-slate-900/40 transition group"
      {...props}
    >
      <div className="h-9 w-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition">
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <span className="block text-[10px] uppercase tracking-wider text-slate-500 font-semibold">{label}</span>
        <span className="block text-sm font-medium text-slate-300 truncate group-hover:text-white transition">{value}</span>
      </div>
    </a>
  );
}