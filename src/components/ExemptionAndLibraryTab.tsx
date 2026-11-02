import React, { useState } from 'react';
import { EXEMPTION_COMPARISON_TABLE, DOCTORS_AND_RELIGIOUS_EXEMPTION } from '../data/religiousExemptionData';
import { CURATED_PUBMED_ARTICLES, searchPubMedLive } from '../services/pubmedService';
import { PubMedArticle } from '../types';
import { ShieldCheck, Scale, Database, Search, ExternalLink, BookOpen, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

export const ExemptionAndLibraryTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'exemption' | 'nih'>('exemption');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [articles, setArticles] = useState<PubMedArticle[]>(CURATED_PUBMED_ARTICLES);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [activePreset, setActivePreset] = useState<string>('curated');

  const presetQueries = [
    { label: 'All Curated Landmark Papers', query: 'curated' },
    { label: 'Myocarditis Surveillance', query: 'covid-19 vaccine myocarditis' },
    { label: 'mRNA LNP Pharmacokinetics', query: 'lipid nanoparticle mRNA vaccine clearance' },
    { label: '5G Non-Ionizing RF Safety', query: '5G radiofrequency non-ionizing human health' },
    { label: 'Aluminum Adjuvant Safety', query: 'aluminum hydroxide adjuvant safety' },
  ];

  const handleSearch = async (term: string) => {
    if (!term.trim() || term === 'curated') {
      setArticles(CURATED_PUBMED_ARTICLES);
      setActivePreset('curated');
      return;
    }

    setIsLoading(true);
    setActivePreset(term);
    try {
      const results = await searchPubMedLive(term, 8);
      setArticles(results);
    } catch (err) {
      console.error('Search error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const institutionalPortals = [
    {
      name: 'NIH National Library of Medicine (PubMed / PMC)',
      description: 'The world’s primary biomedical research archive indexing 36M+ peer-reviewed studies.',
      url: 'https://pubmed.ncbi.nlm.nih.gov/',
      category: 'Peer-Reviewed Research'
    },
    {
      name: 'US FDA Vaccine & Biologics Center (CBER)',
      description: 'Official drug approval packages, package inserts, and clinical review memoranda.',
      url: 'https://www.fda.gov/vaccines-blood-biologics/vaccines',
      category: 'Regulatory Agency'
    },
    {
      name: 'CDC Advisory Committee on Immunization Practices (ACIP)',
      description: 'Independent clinical guidelines, safety surveillance data, and VAERS/v-safe analyses.',
      url: 'https://www.cdc.gov/vaccines/acip/index.html',
      category: 'Public Health Guidance'
    },
    {
      name: 'European Medicines Agency (EMA) Pharmacovigilance',
      description: 'Safety signal assessments, European public assessment reports (EPAR), and PRAC bulletins.',
      url: 'https://www.ema.europa.eu/en/human-regulatory/overview/public-health-threats/coronavirus-disease-covid-19',
      category: 'European Authority'
    },
    {
      name: 'WHO Global Advisory Committee on Vaccine Safety (GACVS)',
      description: 'Global international safety monitoring and adverse event reviews.',
      url: 'https://www.who.int/groups/global-advisory-committee-on-vaccine-safety',
      category: 'Global Health'
    },
    {
      name: 'International Commission on Non-Ionizing Radiation Protection (ICNIRP)',
      description: 'Scientific consensus guidelines for limiting exposure to electromagnetic fields (100 kHz - 300 GHz).',
      url: 'https://www.icnirp.org/',
      category: 'Radiation Physics Standards'
    },
    {
      name: 'US EEOC Religious Exemption Compliance Guidelines',
      description: 'Section 12 of the EEOC Compliance Manual regarding Title VII religious accommodations.',
      url: 'https://www.eeoc.gov/laws/guidance/section-12-religious-discrimination',
      category: 'Legal & Employment Law'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
          <span>Medical Ethics & Legal Framework</span>
          <span aria-hidden="true">·</span>
          <span>Institutional Research Portal</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-balance">
          Religious Exemption Ethics & NIH / PubMed Scientific Database
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          Comprehensive guidance on religious vs medical exemption legal standards, medical board ethics on physician certification, and live search access to peer-reviewed biomedical literature from the National Institutes of Health.
        </p>
      </div>

      {/* Sub-navigation Switcher: Segmented buttons */}
      <div className="flex gap-2 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-xl max-w-md">
        <button
          onClick={() => setActiveSection('exemption')}
          className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
            activeSection === 'exemption'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          Religious Exemption & Medical Ethics
        </button>
        <button
          onClick={() => setActiveSection('nih')}
          className={`flex-1 py-2 px-3 text-xs font-semibold rounded-lg transition-all ${
            activeSection === 'nih'
              ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
          }`}
        >
          NIH / PubMed Research Database
        </button>
      </div>

      {activeSection === 'exemption' ? (
        <div className="space-y-6">
          {/* Section 1: Should Doctors Issue Religious Exemption Certificates? */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
              <div>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider block">
                  Medical Ethics & Legal Scope
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mt-0.5">
                  {DOCTORS_AND_RELIGIOUS_EXEMPTION.coreQuestion}
                </h2>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-200 text-xs font-bold whitespace-nowrap self-start sm:self-auto">
                {DOCTORS_AND_RELIGIOUS_EXEMPTION.consensusVerdict}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DOCTORS_AND_RELIGIOUS_EXEMPTION.detailedGuidance.map((guide, idx) => (
                <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/80 space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                    <Scale className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span>{guide.title}</span>
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                    {guide.content}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-blue-50/60 dark:bg-blue-950/30 rounded-xl border border-blue-200 dark:border-blue-900/60 text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <div>
                <strong>Key Takeaway for Patients & Physicians:</strong> If you seek a <em>medical exemption</em>, consult your physician for clinical diagnostic documentation (such as severe documented allergy to PEG or past vaccine-induced myocarditis). If you seek a <em>religious exemption</em>, this is an attestation of personal faith under Title VII submitted by you (often supported by your religious clergy or community leader), and does not require or permit a doctor's medical signature.
              </div>
            </div>
          </div>

          {/* Section 2: Side-by-Side Comparison: Medical vs Religious Exemption */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
              Side-by-Side Legal & Clinical Comparison
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              How medical exemptions differ fundamentally from religious exemptions under law.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700 font-semibold">
                  <tr>
                    <th className="py-3 px-3 w-1/4">Criteria</th>
                    <th className="py-3 px-3 w-3/8 text-blue-700 dark:text-blue-300 font-bold">Medical Exemption</th>
                    <th className="py-3 px-3 w-3/8 text-indigo-700 dark:text-indigo-300 font-bold">Religious Exemption</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-600 dark:text-slate-300">
                  {EXEMPTION_COMPARISON_TABLE.map((row, i) => (
                    <tr key={i}>
                      <td className="py-3 px-3 font-semibold text-slate-900 dark:text-slate-100">
                        {row.feature}
                      </td>
                      <td className="py-3 px-3 leading-relaxed">
                        {row.medicalExemption}
                      </td>
                      <td className="py-3 px-3 leading-relaxed">
                        {row.religiousExemption}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        /* Section 3: NIH / PubMed Live Search & Institutional Databases */
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  <span>National Institutes of Health (NIH) / PubMed Research Explorer</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Direct live access to peer-reviewed scientific studies indexed in MEDLINE and PubMed Central.
                </p>
              </div>

              {/* Search Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch(searchQuery);
                }}
                className="flex items-center gap-2 w-full sm:w-auto"
              >
                <div className="relative flex-1 sm:w-72">
                  <Search className="w-4 h-4 absolute left-3 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search PubMed (e.g. myocarditis, LNP)..."
                    className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-900 dark:text-slate-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
                >
                  {isLoading && <Loader2 className="w-3.5 h-3.5 animate-spin" />}
                  <span>Search NIH</span>
                </button>
              </form>
            </div>

            {/* Quick Preset Query Buttons */}
            <div className="flex flex-wrap items-center gap-1.5 pt-2">
              <span className="text-xs text-slate-400 mr-1 hidden sm:inline">Suggested Queries:</span>
              {presetQueries.map((preset) => {
                const isActive = activePreset === preset.query;
                return (
                  <button
                    key={preset.query}
                    onClick={() => {
                      setSearchQuery(preset.query === 'curated' ? '' : preset.query);
                      handleSearch(preset.query);
                    }}
                    className={`px-2.5 py-1 text-xs rounded-md transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>

            {/* Articles List */}
            {isLoading ? (
              <div className="py-12 flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 text-xs gap-2">
                <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
                <span>Querying NCBI Entrez E-Utilities API...</span>
              </div>
            ) : (
              <div className="space-y-3 pt-2">
                {articles.map((art) => (
                  <div
                    key={art.pmid}
                    className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/80 space-y-2 hover:border-blue-400 transition-colors"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-blue-600 dark:text-blue-400">
                          PMID: {art.pmid}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="font-medium text-slate-700 dark:text-slate-300">{art.journal}</span>
                        <span aria-hidden="true">·</span>
                        <span>{art.pubDate}</span>
                      </div>
                      <a
                        href={art.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                      >
                        <span>View on PubMed</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>

                    <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 leading-snug">
                      {art.title}
                    </h4>

                    {art.authors && art.authors.length > 0 && (
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Authors: {art.authors.join(', ')}
                      </div>
                    )}

                    {art.abstractText && (
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                        {art.abstractText}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Directory of Authoritative Health Institutions */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">
              Official Institutional Health Reference Databases
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
              Direct access to peer-reviewed archives, regulatory reviews, and pharmacovigilance databases.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {institutionalPortals.map((portal, idx) => (
                <a
                  key={idx}
                  href={portal.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-4 bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl border border-slate-200/80 dark:border-slate-700/80 flex items-start justify-between gap-3 text-xs transition-colors group"
                >
                  <div className="space-y-1">
                    <span className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 block">
                      {portal.category}
                    </span>
                    <h5 className="font-bold text-slate-900 dark:text-slate-100 text-sm group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {portal.name}
                    </h5>
                    <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                      {portal.description}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 mt-1" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
