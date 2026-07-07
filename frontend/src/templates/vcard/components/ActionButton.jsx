import React from 'react';

export default function ActionButton({ children, icon, variant, onClick }) {
  const styles = variant === 'primary' 
    ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/20" 
    : "bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800/60";

  return (
    <button 
      onClick={onClick}
      className={`w-full inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-3 rounded-xl transition cursor-pointer active:scale-98 ${styles}`}
    >
      {icon}
      {children}
    </button>
  );
}