import React from 'react';
import { ChemicalIngredient } from '../types';
import { X, Shield, Sparkles, Activity, FileText } from 'lucide-react';

interface IngredientModalProps {
  ingredient: ChemicalIngredient | null;
  onClose: () => void;
  vaccineBrand: string;
}

export const IngredientModal: React.FC<IngredientModalProps> = ({
  ingredient,
  onClose,
  vaccineBrand
}) => {
  if (!ingredient) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full sm:max-w-xl max-h-[88vh] overflow-y-auto bg-white dark:bg-slate-900 rounded-t-3xl sm:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Mobile Drag Indicator */}
        <div className="w-12 h-1 bg-slate-300 dark:bg-slate-700 rounded-full mx-auto mb-4 sm:hidden" />

        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-1">
              <span>{vaccineBrand}</span>
              <span aria-hidden="true">·</span>
              <span className="font-medium text-blue-600 dark:text-blue-400">{ingredient.category}</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
              {ingredient.name}
            </h3>
            <p className="text-xs font-mono text-slate-600 dark:text-slate-400 mt-1 break-words">
              {ingredient.chemicalName}
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close ingredient details"
            className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="mt-4 space-y-4 text-sm text-slate-700 dark:text-slate-300">
          {ingredient.formula && (
            <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/80 dark:border-slate-700/80">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                Chemical Formula / Molecular Weight
              </span>
              <code className="text-xs font-mono font-bold text-blue-700 dark:text-blue-300">
                {ingredient.formula}
              </code>
            </div>
          )}

          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Exact Function in Formulation</span>
            </div>
            <p className="leading-relaxed">
              {ingredient.purpose}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-1">
              <Activity className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              <span>Biochemical Mechanism of Action</span>
            </div>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              {ingredient.howItWorks}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-1">
              <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Toxicological Safety & Regulatory Profile</span>
            </div>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              {ingredient.safetyProfile}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-slate-100 mb-1">
              <FileText className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span>Metabolism & Bodily Clearance</span>
            </div>
            <p className="leading-relaxed text-slate-600 dark:text-slate-300">
              {ingredient.metabolismAndClearance}
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 dark:bg-slate-100 dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-white rounded-lg transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
