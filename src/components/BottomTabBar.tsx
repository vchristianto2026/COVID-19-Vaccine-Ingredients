import React from 'react';
import { FlaskConical, Dna, AlertTriangle, Radio, ShieldCheck } from 'lucide-react';

interface BottomTabBarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const tabs = [
    { id: 'vaccines', label: 'Chemistry', icon: FlaskConical },
    { id: 'biology', label: 'mRNA Fate', icon: Dna },
    { id: 'adverse', label: 'Symptoms', icon: AlertTriangle },
    { id: 'physics', label: '5G / EMF', icon: Radio },
    { id: 'exemption', label: 'Ethics / NIH', icon: ShieldCheck },
  ];

  return (
    <nav 
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 transition-colors pb-[env(safe-area-inset-bottom)]"
    >
      <div className="grid grid-cols-5 items-center h-16 max-w-md mx-auto px-1">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`min-h-[48px] min-w-[44px] flex flex-col items-center justify-center transition-all ${
                isActive
                  ? 'text-blue-600 dark:text-blue-400 font-semibold scale-105'
                  : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Icon className="w-5 h-5 mb-1" />
              <span className="text-[10px] tracking-tight leading-none whitespace-nowrap">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
