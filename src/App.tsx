import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BottomTabBar } from './components/BottomTabBar';
import { VaccinesTab } from './components/VaccinesTab';
import { BiologyTab } from './components/BiologyTab';
import { AdverseEventsTab } from './components/AdverseEventsTab';
import { EmfPhysicsTab } from './components/EmfPhysicsTab';
import { ExemptionAndLibraryTab } from './components/ExemptionAndLibraryTab';
import { ShieldCheck, Info } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('vaccines');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col font-sans transition-colors pb-20 md:pb-8">
      {/* Top Navigation conforming to Top Bar Contract */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />

      {/* Main Responsive Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'vaccines' && <VaccinesTab />}
        {activeTab === 'biology' && <BiologyTab />}
        {activeTab === 'adverse' && <AdverseEventsTab />}
        {activeTab === 'physics' && <EmfPhysicsTab />}
        {activeTab === 'exemption' && <ExemptionAndLibraryTab />}
      </main>

      {/* Mobile Bottom Navigation Thumb Bar */}
      <BottomTabBar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 mt-12 py-8 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded bg-blue-600 text-white flex items-center justify-center text-[10px] font-mono font-bold">Vx</span>
              <span className="font-bold text-slate-900 dark:text-slate-200">VaxFacts & Science Reference</span>
              <span aria-hidden="true">·</span>
              <span>Scientific Public Health Education</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <button onClick={() => setActiveTab('vaccines')} className="hover:text-blue-600 transition-colors">Formulations</button>
              <button onClick={() => setActiveTab('biology')} className="hover:text-blue-600 transition-colors">mRNA Biology</button>
              <button onClick={() => setActiveTab('adverse')} className="hover:text-blue-600 transition-colors">Pharmacovigilance</button>
              <button onClick={() => setActiveTab('physics')} className="hover:text-blue-600 transition-colors">EMF Physics</button>
              <button onClick={() => setActiveTab('exemption')} className="hover:text-blue-600 transition-colors">NIH Database</button>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-start gap-2 text-[11px] text-slate-400 leading-relaxed">
            <Info className="w-4 h-4 shrink-0 mt-0.5" />
            <p>
              <strong>Scientific & Educational Disclaimer:</strong> This application compiles published data from the National Institutes of Health (NIH), US FDA, European Medicines Agency (EMA), World Health Organization (WHO), and peer-reviewed medical journals (NEJM, JAMA, The Lancet). It is intended strictly for educational and reference purposes and does not substitute for personalized clinical diagnosis or medical advice from a licensed healthcare provider.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
