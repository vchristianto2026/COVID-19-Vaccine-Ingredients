import React from 'react';
import { Sun, Moon, Database } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  isDark,
  toggleTheme
}) => {
  return (
    <header className="sticky top-0 z-30 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <div className="flex items-center gap-2 shrink-0">
          <span 
            onClick={() => setActiveTab('vaccines')}
            className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 whitespace-nowrap cursor-pointer flex items-center gap-2"
          >
            <span className="w-6 h-6 rounded-md bg-blue-600 text-white flex items-center justify-center text-xs font-mono font-bold">Vx</span>
            <span>VaxFacts & Science Reference</span>
          </span>
        </div>

        {/* Zone 2: 5 Nav Links (Single-line, unboxed text links) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-400">
          <button
            onClick={() => setActiveTab('vaccines')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'vaccines'
                ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                : 'hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            Vaccine Chemistry
          </button>
          <button
            onClick={() => setActiveTab('biology')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'biology'
                ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                : 'hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            mRNA Cellular Fate
          </button>
          <button
            onClick={() => setActiveTab('adverse')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'adverse'
                ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                : 'hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            Adverse Symptoms
          </button>
          <button
            onClick={() => setActiveTab('physics')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'physics'
                ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                : 'hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            5G / EMF Fact Check
          </button>
          <button
            onClick={() => setActiveTab('exemption')}
            className={`whitespace-nowrap shrink-0 transition-colors py-1 ${
              activeTab === 'exemption'
                ? 'text-blue-600 dark:text-blue-400 font-semibold border-b-2 border-blue-600 dark:border-blue-400'
                : 'hover:text-slate-900 dark:hover:text-slate-100'
            }`}
          >
            Religious Exemption & NIH
          </button>
        </nav>

        {/* Zone 3: 1 Primary Contextual Action & Theme Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            onClick={() => setActiveTab('exemption')}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors whitespace-nowrap shrink-0"
          >
            <Database className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">NIH PubMed Database</span>
            <span className="sm:hidden">NIH Studies</span>
          </button>
        </div>
      </div>
    </header>
  );
};
