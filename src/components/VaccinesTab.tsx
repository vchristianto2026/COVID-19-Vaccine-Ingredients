import React, { useState } from 'react';
import { VACCINES_DATA } from '../data/vaccineData';
import { VaccineInfo, ChemicalIngredient } from '../types';
import { IngredientModal } from './IngredientModal';
import { FlaskConical, Search, Dna, Info, ChevronRight, CheckCircle2, ShieldAlert } from 'lucide-react';

export const VaccinesTab: React.FC = () => {
  const [selectedVaccineId, setSelectedVaccineId] = useState<string>('moderna');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');
  const [selectedIngredient, setSelectedIngredient] = useState<ChemicalIngredient | null>(null);

  const activeVaccine: VaccineInfo = VACCINES_DATA.find(v => v.id === selectedVaccineId) || VACCINES_DATA[0];

  const filteredIngredients = activeVaccine.ingredients.filter(ing => {
    const matchesSearch = 
      ing.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ing.chemicalName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ing.purpose.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (ing.formula && ing.formula.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = categoryFilter === 'all' || ing.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  const categories = ['all', 'mRNA', 'Lipid', 'Salt/Buffer', 'Sugar/Cryoprotectant', 'Adjuvant', 'Viral Vector', 'Preservative/Stabilizer'];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Editorial Title & Kicker */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
          <span>Biochemical Formulations</span>
          <span aria-hidden="true">·</span>
          <span>Pharmacological Analysis</span>
          <span aria-hidden="true">·</span>
          <span>4 Authorized Platforms</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-balance">
          COVID-19 Vaccine Formulations, Exact Chemical Ingredients & Genomic Architecture
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Detailed biochemical breakdown of Moderna (mRNA-1273), Pfizer-BioNTech (BNT162b2), AstraZeneca (ChAdOx1-S), and Sinovac (CoronaVac), including lipid nanoparticles, synthetic mRNA modifications, and adjuvants.
        </p>
      </div>

      {/* Vaccine Selector - Segmented interactive buttons */}
      <div className="flex flex-wrap gap-2 p-1.5 bg-slate-100 dark:bg-slate-800/80 rounded-xl">
        {VACCINES_DATA.map((vac) => {
          const isSelected = vac.id === activeVaccine.id;
          return (
            <button
              key={vac.id}
              onClick={() => {
                setSelectedVaccineId(vac.id);
                setSearchQuery('');
                setCategoryFilter('all');
              }}
              className={`flex-1 min-w-[140px] px-3.5 py-2.5 text-xs font-semibold rounded-lg transition-all text-left whitespace-nowrap shrink-0 ${
                isSelected
                  ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <div className="font-bold text-sm leading-tight text-slate-900 dark:text-slate-100">
                {vac.brandName}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 font-normal truncate">
                {vac.developer}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Vaccine Hero Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <span className="font-semibold text-slate-900 dark:text-slate-200">{activeVaccine.brandName}</span>
              <span aria-hidden="true">·</span>
              <span className="font-mono">{activeVaccine.genericName}</span>
              <span aria-hidden="true">·</span>
              <span>{activeVaccine.platform}</span>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">
              {activeVaccine.brandName} ({activeVaccine.developer})
            </h2>

            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeVaccine.summaryNote}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block font-medium">Standard Adult Dose</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100 font-mono mt-0.5 block">{activeVaccine.dose}</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-800">
                <span className="text-slate-500 dark:text-slate-400 block font-medium">Storage Requirements</span>
                <span className="font-semibold text-slate-900 dark:text-slate-100 mt-0.5 block truncate">{activeVaccine.storage}</span>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/60 dark:border-slate-800 col-span-2 sm:col-span-1">
                <span className="text-slate-500 dark:text-slate-400 block font-medium">Platform Classification</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400 mt-0.5 block">{activeVaccine.platform}</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col items-center justify-center p-4 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200/60 dark:border-slate-800 text-center">
            <img 
              src="/src/assets/images/lnp_mrna_nanoparticle_1793600308830.jpg"
              alt="Lipid Nanoparticle Structure"
              referrerPolicy="no-referrer"
              className="w-full h-36 object-cover rounded-lg shadow-xs mb-3"
            />
            <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
              {activeVaccine.id === 'astrazeneca' 
                ? 'Adenoviral Capsid Delivery Vehicle' 
                : activeVaccine.id === 'sinovac'
                ? 'Inactivated Virion + Alum Adjuvant'
                : 'Lipid Nanoparticle (LNP) Vehicle'}
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Nanoscale delivery matrix protecting the active genetic/antigenic cargo
            </div>
          </div>
        </div>
      </div>

      {/* Special Section: Definition of mRNA / Genomic Cargo inside this Vaccine */}
      <div className="bg-blue-50/50 dark:bg-blue-950/20 rounded-2xl border border-blue-200 dark:border-blue-900/60 p-5 sm:p-7">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase tracking-wider mb-2">
          <Dna className="w-4 h-4" />
          <span>Genomic Cargo & Definition of mRNA / Vector</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
          {activeVaccine.mrnaOrGenomicDefinition.type}
        </h3>
        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
          {activeVaccine.mrnaOrGenomicDefinition.description}
        </p>

        {activeVaccine.id === 'astrazeneca' && (
          <div className="mb-4 p-3 bg-amber-100/70 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 rounded-xl text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5 text-amber-700 dark:text-amber-400" />
            <div>
              <strong>Crucial Distinction:</strong> AstraZeneca is <em>NOT</em> an mRNA vaccine. It delivers double-stranded DNA inside a harmless, non-replicating chimpanzee adenovirus capsid. Once inside the cell, host enzymes in the nucleus transcribe the DNA into mRNA, which then exits into the cytoplasm to be translated into spike proteins.
            </div>
          </div>
        )}

        {activeVaccine.id === 'sinovac' && (
          <div className="mb-4 p-3 bg-amber-100/70 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800/60 rounded-xl text-xs text-amber-900 dark:text-amber-200 flex items-start gap-2.5">
            <Info className="w-4 h-4 shrink-0 mt-0.5 text-amber-700 dark:text-amber-400" />
            <div>
              <strong>Platform Notice:</strong> CoronaVac is an inactivated whole-virus vaccine. It contains killed virus particles, not synthesized functional mRNA. The viral RNA inside is chemically fragmented by beta-propiolactone and cannot replicate or direct translation.
            </div>
          </div>
        )}

        <div className="space-y-2 mt-4">
          <span className="text-xs font-semibold text-slate-900 dark:text-slate-100 block">
            Molecular & Engineering Specifications:
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
            {activeVaccine.mrnaOrGenomicDefinition.modifications.map((mod, idx) => (
              <div key={idx} className="p-3 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <span className="text-slate-700 dark:text-slate-300 leading-normal">{mod}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4 pt-4 border-t border-blue-200/60 dark:border-blue-900/40 text-xs">
          <div>
            <span className="text-slate-500 dark:text-slate-400 block font-medium">Target Antigen Synthesized</span>
            <span className="font-semibold text-slate-900 dark:text-slate-100">{activeVaccine.mrnaOrGenomicDefinition.targetProtein}</span>
          </div>
          <div>
            <span className="text-slate-500 dark:text-slate-400 block font-medium">Cellular Site of Action</span>
            <span className="font-semibold text-slate-900 dark:text-slate-100">{activeVaccine.mrnaOrGenomicDefinition.cellularLocation}</span>
          </div>
          <div>
            <span className="text-slate-500 dark:text-slate-400 block font-medium">Intracellular Half-Life</span>
            <span className="font-semibold text-slate-900 dark:text-slate-100">{activeVaccine.mrnaOrGenomicDefinition.lifespan}</span>
          </div>
        </div>
      </div>

      {/* Ingredient Explorer Header & Controls */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
              <FlaskConical className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Complete Chemical Ingredients in {activeVaccine.brandName}</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Tap any ingredient to inspect its exact chemical IUPAC name, formula, mechanism, and clearance.
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search ingredient or formula..."
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-xs text-slate-400 mr-1 hidden sm:inline">Filter:</span>
          {categories.map((cat) => {
            const isCatActive = categoryFilter === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategoryFilter(cat)}
                className={`px-2.5 py-1 text-xs rounded-md transition-colors whitespace-nowrap shrink-0 ${
                  isCatActive
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {cat === 'all' ? 'All Ingredients' : cat}
              </button>
            );
          })}
        </div>

        {/* Ingredients List / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {filteredIngredients.map((ing) => (
            <div
              key={ing.id}
              onClick={() => setSelectedIngredient(ing)}
              className="group p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-500 cursor-pointer transition-all shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400">
                    {ing.category}
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-all" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {ing.name}
                </h4>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5">
                  {ing.chemicalName}
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 line-clamp-2 leading-relaxed">
                  {ing.purpose}
                </p>
              </div>

              {ing.formula && (
                <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px]">
                  <span className="text-slate-500 dark:text-slate-400">Formula:</span>
                  <code className="font-mono text-slate-700 dark:text-slate-300 font-semibold truncate max-w-[200px]">
                    {ing.formula}
                  </code>
                </div>
              )}
            </div>
          ))}
        </div>

        {filteredIngredients.length === 0 && (
          <div className="p-8 text-center text-sm text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-dashed border-slate-200 dark:border-slate-700">
            No ingredients match your search query "{searchQuery}" in {activeVaccine.brandName}.
          </div>
        )}
      </div>

      {/* Comparison Matrix Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-xs">
        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
          Side-by-Side Comparison: Moderna vs Pfizer vs AstraZeneca vs Sinovac
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          Key biochemical parameters and delivery platforms compared.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-semibold">
              <tr>
                <th className="py-3 px-3">Vaccine</th>
                <th className="py-3 px-3">Platform</th>
                <th className="py-3 px-3">Ionizable / Delivery Vehicle</th>
                <th className="py-3 px-3">Stabilizing Modification</th>
                <th className="py-3 px-3">Adjuvant</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
              <tr>
                <td className="py-3 px-3 font-bold text-slate-900 dark:text-slate-100">Moderna (Spikevax)</td>
                <td className="py-3 px-3">Synthetic modRNA</td>
                <td className="py-3 px-3 font-mono">SM-102 LNP</td>
                <td className="py-3 px-3">m1Ψ nucleoside + 2P spike</td>
                <td className="py-3 px-3">None (LNP acts as innate adjuvant)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-bold text-slate-900 dark:text-slate-100">Pfizer (Comirnaty)</td>
                <td className="py-3 px-3">Synthetic modRNA</td>
                <td className="py-3 px-3 font-mono">ALC-0315 LNP</td>
                <td className="py-3 px-3">m1Ψ nucleoside + 2P spike</td>
                <td className="py-3 px-3">None</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-bold text-slate-900 dark:text-slate-100">AstraZeneca (Vaxzevria)</td>
                <td className="py-3 px-3 text-amber-600 dark:text-amber-400 font-semibold">ChAdOx1 DNA Vector</td>
                <td className="py-3 px-3">Adenoviral Protein Capsid</td>
                <td className="py-3 px-3">E1/E3 deletion, tPA leader</td>
                <td className="py-3 px-3">None (Adenoviral capsid)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-bold text-slate-900 dark:text-slate-100">Sinovac (CoronaVac)</td>
                <td className="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-semibold">Inactivated Whole Virus</td>
                <td className="py-3 px-3">Killed virion envelope</td>
                <td className="py-3 px-3">Beta-propiolactone inactivated</td>
                <td className="py-3 px-3 font-semibold text-slate-900 dark:text-slate-100">Aluminum Hydroxide (0.225 mg)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Ingredient Detail Modal */}
      <IngredientModal
        ingredient={selectedIngredient}
        onClose={() => setSelectedIngredient(null)}
        vaccineBrand={activeVaccine.brandName}
      />
    </div>
  );
};
