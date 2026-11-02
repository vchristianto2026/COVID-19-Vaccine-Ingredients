import React, { useState } from 'react';
import { EMF_SPECTRUM_DATA, SMARTPHONE_FIELD_FACT_CHECK, EMF_5G_6G_SAFETY_ASSESSMENT } from '../data/emfPhysicsData';
import { Radio, Zap, ShieldCheck, AlertCircle, Check, Info, Cpu, Smartphone } from 'lucide-react';

export const EmfPhysicsTab: React.FC = () => {
  const [selectedBandIndex, setSelectedBandIndex] = useState<number>(2); // 5G mmWave default
  const [calculatorFreqGHz, setCalculatorFreqGHz] = useState<number>(28); // 28 GHz

  // Planck equation calculation: E = h * nu
  // h = 4.135667696e-15 eV*s
  const calculatePhotonEnergy = (ghz: number) => {
    const hz = ghz * 1e9;
    const h_eV = 4.135667696e-15;
    return (h_eV * hz).toExponential(4);
  };

  const calculateWavelength = (ghz: number) => {
    const c = 299792458; // m/s
    const hz = ghz * 1e9;
    const lambdaM = c / hz;
    if (lambdaM < 0.001) {
      return `${(lambdaM * 1e6).toFixed(1)} µm`;
    } else if (lambdaM < 0.1) {
      return `${(lambdaM * 1000).toFixed(2)} mm`;
    } else {
      return `${(lambdaM * 100).toFixed(1)} cm`;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
          <span>Electromagnetic Physics</span>
          <span aria-hidden="true">·</span>
          <span>Bioelectromagnetics</span>
          <span aria-hidden="true">·</span>
          <span>Empirical Fact Check</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-balance">
          Can Smartphone Fields Detect mRNA? & 5G/6G Safety Inquiry
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Rigorous physical analysis of smartphone radiofrequency fields (Bluetooth/NFC/Cellular), quantum photon energy thresholds, penetration depths, and 5G/6G environmental safety.
        </p>
      </div>

      {/* QUESTION 1: Can mRNA be detected by smartphone fields? */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
              Inquiry Fact Check #1
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">
              {SMARTPHONE_FIELD_FACT_CHECK.question}
            </h2>
          </div>
          <div className="px-3.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-bold whitespace-nowrap self-start sm:self-auto">
            {SMARTPHONE_FIELD_FACT_CHECK.verdict}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SMARTPHONE_FIELD_FACT_CHECK.scientificReasons.map((reason, idx) => (
            <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{reason.title}</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {reason.explanation}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-3">
          <Smartphone className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
          <div>
            <strong>Summary for Everyday Users:</strong> Smartphones only connect to certified digital electronic microchips that transmit standardized radio packets (such as Bluetooth, WiFi, or NFC tags). An mRNA vaccine contains purely organic biological molecules (sugars, salts, lipids, ribonucleotides) and zero microchips, zero antennas, and zero power source. It is physically impossible for a smartphone to detect, scan, or interact with mRNA inside human tissue.
          </div>
        </div>
      </div>

      {/* QUESTION 2: 5G & 6G Deployment Safety & Environmental Impact */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
              Inquiry Fact Check #2
            </span>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">
              {EMF_5G_6G_SAFETY_ASSESSMENT.question}
            </h2>
          </div>
          <div className="px-3.5 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200 text-xs font-bold whitespace-nowrap self-start sm:self-auto">
            {EMF_5G_6G_SAFETY_ASSESSMENT.verdict}
          </div>
        </div>

        {/* Electromagnetic Spectrum Visual Infographic */}
        <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
          <img
            src="/src/assets/images/emf_spectrum_science_1793600310520.jpg"
            alt="Electromagnetic Radiation Spectrum"
            referrerPolicy="no-referrer"
            className="w-full max-h-[380px] object-cover"
          />
          <div className="p-3 bg-slate-50 dark:bg-slate-800/80 text-[11px] text-slate-500 dark:text-slate-400 text-center">
            Non-Ionizing Radiation (Radio, Microwave, 5G, 6G, Visible) vs Ionizing Boundary (UV, X-Ray, Gamma).
          </div>
        </div>

        {/* Key Findings on 5G / 6G */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {EMF_5G_6G_SAFETY_ASSESSMENT.keyFindings.map((finding, idx) => (
            <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/80 space-y-2">
              <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                <Radio className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                <span>{finding.aspect}</span>
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {finding.detail}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Quantum Photon Energy & Wavelength Calculator */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100">
          <Zap className="w-4 h-4 text-amber-500" />
          <span>Interactive Quantum Physics Calculator: E = h·ν (Planck-Einstein Equation)</span>
        </div>
        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
          Select or slide any carrier frequency to calculate its photon energy in electronvolts (eV) and compare against the 10 eV ionization barrier required to damage human DNA.
        </p>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs font-mono font-semibold">
            <span>Carrier Frequency: {calculatorFreqGHz} GHz</span>
            <span className="text-blue-600 dark:text-blue-400">
              Wavelength: {calculateWavelength(calculatorFreqGHz)}
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="300"
            step="1"
            value={calculatorFreqGHz}
            onChange={(e) => setCalculatorFreqGHz(Number(e.target.value))}
            className="w-full accent-blue-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
          />

          <div className="flex flex-wrap gap-2 text-[11px]">
            <button
              onClick={() => setCalculatorFreqGHz(2.4)}
              className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
            >
              WiFi (2.4 GHz)
            </button>
            <button
              onClick={() => setCalculatorFreqGHz(3.7)}
              className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
            >
              5G Mid-Band (3.7 GHz)
            </button>
            <button
              onClick={() => setCalculatorFreqGHz(28)}
              className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
            >
              5G mmWave (28 GHz)
            </button>
            <button
              onClick={() => setCalculatorFreqGHz(140)}
              className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200"
            >
              6G Sub-THz (140 GHz)
            </button>
          </div>

          {/* Calculator Output Display */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
            <div>
              <span className="text-slate-500 dark:text-slate-400 block">Single Photon Energy:</span>
              <span className="text-sm font-mono font-bold text-slate-900 dark:text-slate-100">
                {calculatePhotonEnergy(calculatorFreqGHz)} eV
              </span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 block">Ionization Threshold:</span>
              <span className="text-sm font-mono font-bold text-red-600 dark:text-red-400">
                &ge; 10.00 eV (Ultraviolet / X-Ray)
              </span>
            </div>
            <div>
              <span className="text-slate-500 dark:text-slate-400 block">Biological Implication:</span>
              <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Non-ionizing (Cannot break chemical/DNA bonds)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive Spectrum Reference Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-xs">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
          Electromagnetic Spectrum Bands: Penetration Depth & Biological Limits
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          Comparative technical matrix of telecommunications and ionizing boundaries.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-semibold">
              <tr>
                <th className="py-3 px-3">Spectrum Band</th>
                <th className="py-3 px-3">Frequency Range</th>
                <th className="py-3 px-3">Photon Energy (eV)</th>
                <th className="py-3 px-3">Penetration Depth</th>
                <th className="py-3 px-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              {EMF_SPECTRUM_DATA.map((band, i) => (
                <tr key={i} className={band.ionizationStatus === 'Ionizing' ? 'bg-red-50/50 dark:bg-red-950/20' : ''}>
                  <td className="py-3 px-3 font-bold text-slate-900 dark:text-slate-100">
                    {band.name}
                  </td>
                  <td className="py-3 px-3 font-mono">{band.frequencyRange}</td>
                  <td className="py-3 px-3 font-mono">{band.photonEnergyEv}</td>
                  <td className="py-3 px-3">{band.penetrationDepth}</td>
                  <td className="py-3 px-3">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                      band.ionizationStatus === 'Ionizing'
                        ? 'text-red-700 bg-red-100 dark:bg-red-900/50 dark:text-red-300'
                        : 'text-emerald-700 bg-emerald-100 dark:bg-emerald-900/50 dark:text-emerald-300'
                    }`}>
                      {band.ionizationStatus}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
