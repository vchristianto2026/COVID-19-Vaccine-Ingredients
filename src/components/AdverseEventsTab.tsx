import React, { useState } from 'react';
import { ADVERSE_EVENTS_DATA } from '../data/adverseEventsData';
import { AdverseEventRecord } from '../types';
import { AlertTriangle, ShieldCheck, Heart, Droplets, Activity, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

export const AdverseEventsTab: React.FC = () => {
  const [selectedEventId, setSelectedEventId] = useState<string>('myocarditis-pericarditis');
  const [expandedSourceId, setExpandedSourceId] = useState<string | null>(null);

  const activeEvent: AdverseEventRecord = 
    ADVERSE_EVENTS_DATA.find(e => e.id === selectedEventId) || ADVERSE_EVENTS_DATA[0];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2">
          <span>Clinical Pharmacovigilance</span>
          <span aria-hidden="true">·</span>
          <span>Symptom Surveillance</span>
          <span aria-hidden="true">·</span>
          <span>Risk-Benefit Comparison</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-balance">
          Reported Vaccine Symptoms, Severity Surveillance & Adverse Events
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Transparent, evidence-based data on transient reactogenicity and rare documented adverse reactions (Myocarditis, TTS/VITT, GBS, Anaphylaxis) compiled from CDC, FDA, EMA, and NEJM/JAMA studies.
        </p>
      </div>

      {/* Comparative Risk Visualizer Box: Vaccine vs Infection */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-xs">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
              Population Health Comparison
            </span>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100">
              Myocarditis & Thrombosis Risk: Vaccine vs. Natural COVID-19 Infection
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
            Per 1,000,000 Persons (Surveillance Studies)
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {/* Card 1: Vaccine Risk */}
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-900 dark:text-slate-100 text-sm">
                After mRNA Vaccine (Dose 2)
              </span>
              <span className="font-mono text-blue-600 dark:text-blue-400 font-bold text-sm">
                ~20–50 / 1,000,000
              </span>
            </div>
            {/* Visual Bar */}
            <div className="w-full bg-slate-200 dark:bg-slate-700 h-2.5 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full rounded-full" style={{ width: '12%' }} />
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              Predominates in young males (12–24). Clinically mild in &gt;95% of patients with hospital discharge within 3–4 days and rapid cardiac biomarker normalization.
            </p>
          </div>

          {/* Card 2: Viral Infection Risk */}
          <div className="p-4 rounded-xl bg-red-50/70 dark:bg-red-950/30 border border-red-200 dark:border-red-900/60 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-red-900 dark:text-red-200 text-sm">
                After SARS-CoV-2 Viral Infection
              </span>
              <span className="font-mono text-red-600 dark:text-red-400 font-bold text-sm">
                ~150–450 / 1,000,000
              </span>
            </div>
            {/* Visual Bar */}
            <div className="w-full bg-red-200/60 dark:bg-red-900/40 h-2.5 rounded-full overflow-hidden">
              <div className="bg-red-600 h-full rounded-full" style={{ width: '88%' }} />
            </div>
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
              7 to 11 times higher incidence than vaccination. Frequently accompanied by severe systemic pneumonia, ICU admissions, multi-organ failure, and elevated 1-year mortality.
            </p>
          </div>
        </div>
      </div>

      {/* Selector Tabs for Specific Adverse Events */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl">
        {ADVERSE_EVENTS_DATA.map((event) => {
          const isSelected = event.id === activeEvent.id;
          return (
            <button
              key={event.id}
              onClick={() => setSelectedEventId(event.id)}
              className={`flex-1 min-w-[150px] px-3 py-2 text-xs font-semibold rounded-lg transition-all text-left whitespace-nowrap shrink-0 ${
                isSelected
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <div className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                {event.title.split(' (')[0]}
              </div>
              <div className="text-[10px] text-slate-500 dark:text-slate-400 font-normal truncate mt-0.5">
                {event.category}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Event Comprehensive Detail Sheet */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-2">
            <span className="font-semibold text-amber-600 dark:text-amber-400">
              {activeEvent.category}
            </span>
            <span aria-hidden="true">·</span>
            <span>Onset: {activeEvent.typicalOnset}</span>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
            {activeEvent.title}
          </h3>

          <div className="flex flex-wrap gap-2 mt-2">
            {activeEvent.associatedVaccines.map((v, i) => (
              <span key={i} className="text-xs bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md text-slate-700 dark:text-slate-300">
                {v}
              </span>
            ))}
          </div>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-500 dark:text-slate-400 block font-medium">Reported Frequency</span>
            <span className="font-bold text-slate-900 dark:text-slate-100 mt-1 block font-mono">
              {activeEvent.reportedFrequency}
            </span>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-500 dark:text-slate-400 block font-medium">Peak Demographic & Rate</span>
            <span className="font-semibold text-slate-900 dark:text-slate-100 mt-1 block">
              {activeEvent.incidenceRate}
            </span>
          </div>
          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
            <span className="text-slate-500 dark:text-slate-400 block font-medium">Typical Onset Window</span>
            <span className="font-semibold text-slate-900 dark:text-slate-100 mt-1 block">
              {activeEvent.typicalOnset}
            </span>
          </div>
        </div>

        {/* Biological Mechanism */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
            <Activity className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span>Biological & Pathophysiological Mechanism</span>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50/80 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800">
            {activeEvent.biologicalMechanism}
          </p>
        </div>

        {/* Clinical Outcome & Management */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Clinical Course, Prognosis & Medical Management</span>
          </div>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed bg-slate-50/80 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200/60 dark:border-slate-800">
            {activeEvent.clinicalOutcome}
          </p>
        </div>

        {/* Comparative Clinical Context */}
        <div className="p-4 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900/60 text-xs">
          <span className="font-bold text-blue-900 dark:text-blue-200 block mb-1">
            Epidemiological Risk Context:
          </span>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {activeEvent.comparativeRiskNote}
          </p>
        </div>

        {/* Authoritative Peer-Reviewed Sources */}
        <div className="space-y-2 pt-2">
          <span className="text-xs font-semibold text-slate-900 dark:text-slate-100 block">
            Authoritative Peer-Reviewed Literature & Official Surveillance:
          </span>
          <div className="space-y-2">
            {activeEvent.authoritativeSources.map((src, i) => (
              <a
                key={i}
                href={src.url}
                target="_blank"
                rel="noreferrer"
                className="p-3 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-xs transition-colors group"
              >
                <div>
                  <div className="font-semibold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {src.name}
                  </div>
                  <div className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">
                    {src.citation}
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 ml-3" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
