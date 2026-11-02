import React, { useState } from 'react';
import { Dna, ShieldCheck, Check, Clock, Sparkles } from 'lucide-react';

export const BiologyTab: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const cellularTimeline = [
    {
      hour: 'Hour 0 – 2',
      title: '1. Intramuscular Ingestion & Cellular Uptake',
      summary: 'Lipid nanoparticles fuse with cell membranes in the deltoid muscle and draining lymph nodes.',
      detail: 'Upon injection into the deltoid muscle, the ~80nm lipid nanoparticles (LNPs) encounter myocytes (muscle cells) and resident antigen-presenting cells (dendritic cells and macrophages). The LNPs enter the cells through receptor-mediated endocytosis into an intracellular bubble called an endosome.',
      location: 'Cell Membrane & Endosome',
      moleculesInvolved: 'LNP bilayer (SM-102 or ALC-0315), ApoE receptor, Endosomal membrane'
    },
    {
      hour: 'Hour 2 – 6',
      title: '2. Endosomal Escape into the Cytoplasm',
      summary: 'The ionizable lipid triggers endosomal fusion, releasing synthetic mRNA into the cytoplasm.',
      detail: 'As the endosome acidifies (pH drops to ~5.5), the ionizable lipid becomes positively protonated. This induces a hexagonal non-bilayer lipid phase transition, causing the endosomal membrane to destabilize. The single-stranded mRNA slips safely into the cell cytoplasm—completely outside the cell nucleus.',
      location: 'Cytosol (Cell Fluid Outside the Nucleus)',
      moleculesInvolved: 'Protonated ionizable lipid, Cytoplasmic enzymes, mRNA single strand'
    },
    {
      hour: 'Hour 6 – 24',
      title: '3. Ribosomal Translation into Spike Protein',
      summary: 'Host cell ribosomes read the mRNA blueprint and synthesize harmless spike proteins.',
      detail: 'Host cell 80S ribosomes bind the synthetic 5′ Cap and Kozak sequence of the mRNA. As the ribosome moves along the strand, transfer RNA (tRNA) delivers amino acids to translate the genetic sequence into full-length SARS-CoV-2 spike glycoprotein monomers. The two proline mutations (2P) hold the protein firmly in its prefusion shape.',
      location: 'Rough Endoplasmic Reticulum (Ribosomes)',
      moleculesInvolved: 'Host 80S Ribosomes, tRNA, N1-methylpseudouridine (m1Ψ), 2P Spike monomers'
    },
    {
      hour: 'Hour 24 – 48',
      title: '4. Antigen Presentation & Immune Education',
      summary: 'The cell displays spike fragments on MHC molecules, training T-cells and B-cells.',
      detail: 'Some spike proteins are transported to the cell surface; others are digested by the proteasome into peptide fragments and loaded onto Major Histocompatibility Complex (MHC) Class I and Class II molecules. Draining lymph node dendritic cells present these antigens to naive CD4+ helper T-cells and CD8+ cytotoxic T-cells, triggering B-cell somatic hypermutation into long-lived memory B-cells and neutralizing IgG antibodies.',
      location: 'Cell Surface & Axillary Lymph Nodes',
      moleculesInvolved: 'MHC-I, MHC-II, TCR, CD4, CD8, Neutralizing IgG antibodies'
    },
    {
      hour: 'Hour 48 – 72',
      title: '5. Complete mRNA Degradation & Cellular Clearance',
      summary: 'Host ribonucleases chop the mRNA into ordinary cellular nucleotides; nothing remains in the body.',
      detail: 'The synthetic mRNA is recognized by cellular deadenylases and exonucleases (cellular RNases). The poly(A) tail shortens, the 5′ cap is cleaved, and ribonucleases chop the mRNA chain into ordinary ribonucleotide monophosphates (adenosine, guanosine, cytidine, uridine) that are seamlessly reused by the cell or excreted. By 72 hours post-injection, no vaccine mRNA remains in the cell.',
      location: 'Cytoplasm (Lysosomes & Cytoplasmic RNases)',
      moleculesInvolved: 'Cytoplasmic RNases, Exoribonucleases, Nucleotide salvage pathway'
    }
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header */}
      <div className="border-b border-slate-200 dark:border-slate-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
          <span>Molecular Biology</span>
          <span aria-hidden="true">·</span>
          <span>Cellular Mechanism</span>
          <span aria-hidden="true">·</span>
          <span>Pharmacokinetics</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100 text-balance">
          What mRNA Actually Does Inside the Human Body
        </h1>
        <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed">
          From the moment of deltoid injection to ribosomal translation, antigen presentation, and full enzymatic breakdown by ribonucleases within 72 hours.
        </p>
      </div>

      {/* Hero Visual Card: Ribosome Translation in Cytoplasm */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Cytoplasmic Translation Machine</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 mb-3">
                How Ribosomes Read the Temporary mRNA Code
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                Messenger RNA (mRNA) is a temporary biological transcript. It acts like a software script that runs in computer RAM rather than being written to the hard drive (DNA). Once the ribosome reads the codons to fold the spike protein, the mRNA script is enzymatically dissolved.
              </p>
              
              <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero Nuclear Entry:</strong> mRNA operates exclusively in the cell cytoplasm. The nuclear membrane has pores guarded by nuclear transport proteins that require specific signal sequences the vaccine mRNA does not possess.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Zero DNA Alteration:</strong> Human cells do not possess reverse transcriptase enzymes or integrases to convert single-stranded RNA back into double-stranded DNA or splice it into human chromosomes.</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Self-Limiting Protein Production:</strong> Peak spike protein production occurs at 24 hours and ceases within 3 to 5 days as the mRNA molecules naturally degrade.</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 flex items-center justify-between">
              <span>Scientific provenance: Cell Biology & Immunology Literature</span>
              <span className="font-mono">Half-life: ~18-36 hrs</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-950 flex flex-col items-center justify-center p-4">
            <img
              src="/src/assets/images/ribosome_translation_1793600309449.jpg"
              alt="Ribosome actively translating mRNA in cytoplasm"
              referrerPolicy="no-referrer"
              className="w-full h-full max-h-[360px] object-cover rounded-xl shadow-md"
            />
            <span className="text-[11px] text-slate-400 mt-2 text-center">
              Ribosome decoding mRNA codon/anticodon loop into nascent polypeptide chain
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Step-by-Step Biological Fate Timeline */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 flex items-center gap-2">
            <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <span>5-Phase Intracellular Lifecycle (Hour 0 to Day 3)</span>
          </h3>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            Step {activeStep + 1} of 5
          </span>
        </div>

        {/* Step Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {cellularTimeline.map((step, idx) => {
            const isCurrent = activeStep === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  isCurrent
                    ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-blue-400'
                }`}
              >
                <div className={`text-[10px] uppercase font-mono font-bold mb-1 ${isCurrent ? 'text-blue-100' : 'text-blue-600 dark:text-blue-400'}`}>
                  {step.hour}
                </div>
                <div className={`text-xs font-semibold line-clamp-1 ${isCurrent ? 'text-white' : 'text-slate-900 dark:text-slate-100'}`}>
                  {step.title.split('. ')[1]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-xs">
          <div className="flex flex-wrap items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold mb-2">
            <span className="font-mono bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded text-blue-700 dark:text-blue-300">
              {cellularTimeline[activeStep].hour}
            </span>
            <span aria-hidden="true">·</span>
            <span>Location: {cellularTimeline[activeStep].location}</span>
          </div>

          <h4 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
            {cellularTimeline[activeStep].title}
          </h4>

          <p className="text-sm font-medium text-slate-700 dark:text-slate-200 mb-3 leading-relaxed">
            {cellularTimeline[activeStep].summary}
          </p>

          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            {cellularTimeline[activeStep].detail}
          </p>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200/80 dark:border-slate-700/80 text-xs">
            <span className="font-semibold text-slate-900 dark:text-slate-100 block mb-1">
              Active Molecular Players in this Phase:
            </span>
            <span className="text-slate-600 dark:text-slate-300 font-mono">
              {cellularTimeline[activeStep].moleculesInvolved}
            </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
              disabled={activeStep === 0}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
            >
              Previous Phase
            </button>
            <button
              onClick={() => setActiveStep(prev => Math.min(cellularTimeline.length - 1, prev + 1))}
              disabled={activeStep === cellularTimeline.length - 1}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:bg-blue-700 transition-colors"
            >
              Next Phase
            </button>
          </div>
        </div>
      </div>

      {/* Scientific Clarification: mRNA vs DNA Myth Debunking Card */}
      <div className="bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl border border-emerald-200 dark:border-emerald-900/60 p-6 sm:p-7">
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 dark:text-emerald-300 uppercase tracking-wider mb-2">
          <ShieldCheck className="w-4 h-4" />
          <span>Biochemical Certainties & Genetic Boundaries</span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 mb-3">
          Why mRNA Cannot Alter Human DNA or Integrate into Chromosomes
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-700 dark:text-slate-300 mt-4">
          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1.5 flex items-center gap-2">
              <Dna className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Different Chemical Languages
            </h5>
            <p className="leading-relaxed">
              DNA uses deoxyribose sugar and thymine (T), stored as a stable double helix in the nucleus. mRNA uses ribose sugar, uracil (or m1Ψ), and is single-stranded. The cell cannot convert RNA to DNA without a retroviral enzyme (reverse transcriptase) which is absent.
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1.5 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Nuclear Membrane Barrier
            </h5>
            <p className="leading-relaxed">
              Human genomic DNA is locked inside the cell nucleus, separated by a double-membrane nuclear envelope. Large macromolecular entry requires importin proteins and specific nuclear localization signals (NLS) which vaccine mRNA intentionally lacks.
            </p>
          </div>

          <div className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
            <h5 className="font-bold text-slate-900 dark:text-slate-100 text-sm mb-1.5 flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              Natural Enzymatic Clearance
            </h5>
            <p className="leading-relaxed">
              All human cells contain ubiquitous ribonuclease (RNase) enzymes designed specifically to destroy foreign or used RNA transcripts. Within 48–72 hours, the injected mRNA is chopped into nucleotide building blocks and recycled or cleared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
