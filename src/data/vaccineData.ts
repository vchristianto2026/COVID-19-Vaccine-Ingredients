import { VaccineInfo } from '../types';

export const VACCINES_DATA: VaccineInfo[] = [
  {
    id: 'moderna',
    brandName: 'Spikevax',
    genericName: 'Elasomeran / mRNA-1273',
    developer: 'Moderna, Inc. & NIAID (NIH)',
    platform: 'mRNA (LNP Encapsulated)',
    dose: '100 mcg (primary) / 50 mcg (booster)',
    storage: '-50°C to -15°C (standard freezer) / 2°C to 8°C for 30 days',
    mrnaOrGenomicDefinition: {
      type: 'Nucleoside-modified messenger RNA (modRNA)',
      description: 'Synthetic single-stranded 5′-capped mRNA encoding the full-length SARS-CoV-2 spike (S) glycoprotein of Wuhan-Hu-1 origin with two stabilizing proline mutations.',
      modifications: [
        'Complete substitution of uridine (U) with N1-methylpseudouridine (m1Ψ) to eliminate innate Toll-like receptor (TLR7/8) inflammatory activation and dramatically boost translation efficiency.',
        'Two proline substitutions (K986P and V987P, "2P mutations") at the apex of the central helix to stabilize the spike protein in its prefusion conformation.',
        'Optimized 5′ untranslated region (UTR) and Kozak consensus sequence for high ribosomal affinity.',
        'Engineered 3′ UTR derived from human alpha-globin gene and a 100+ nucleotide poly(A) tail for cytosolic mRNA longevity.'
      ],
      targetProtein: 'Full-length pre-fusion SARS-CoV-2 Spike (S) Glycoprotein',
      cellularLocation: 'Cytoplasm only; translated by host cell 80S ribosomes on the rough endoplasmic reticulum.',
      lifespan: '48 to 72 hours maximum before full enzymatic degradation by intracellular ribonucleases (RNases).'
    },
    summaryNote: 'Moderna uses SM-102 ionizable lipid. The mRNA provides temporary instructions to cells, never alters the human genome, and produces the spike protein for immune recognition.',
    authorizations: ['US FDA Full Approval & BLA', 'EMA Approval', 'WHO Emergency Use Listing (EUL)'],
    ingredients: [
      {
        id: 'mod-mrna',
        name: 'Elasomeran (mRNA-1273)',
        chemicalName: 'Nucleoside-modified mRNA encoding pre-fusion SARS-CoV-2 spike glycoprotein',
        formula: 'Macromolecule (~1.3 MDa, ~4,101 nucleotides)',
        category: 'mRNA',
        purpose: 'Active biological antigen code',
        howItWorks: 'Directs host ribosomes to temporarily translate the prefusion spike protein, inducing humoral (neutralizing IgG antibodies) and cellular (CD4+/CD8+ T-cell) immunity.',
        safetyProfile: 'Non-replicating; degraded by cellular exonucleases; zero integration into nuclear DNA.',
        metabolismAndClearance: 'Broken down by cytosolic ribonucleases into ordinary ribonucleotides (adenosine, cytidine, guanosine, uridine) and recycled into cellular nucleotide pools.'
      },
      {
        id: 'mod-sm102',
        name: 'SM-102',
        chemicalName: 'heptadecan-9-yl 8-((2-hydroxyethyl)(6-oxo-6-(undecyloxy)hexyl)amino)octanoate',
        formula: 'C44 H87 N O5 (MW: 710.18 g/mol)',
        category: 'Lipid',
        purpose: 'Ionizable amino lipid for LNP assembly',
        howItWorks: 'Positively charged at acidic formulation pH (~4) to electrostatically bind negatively charged mRNA; becomes neutral at physiological blood pH (7.4), minimizing systemic toxicity, and re-ionizes in acidic endosomes to promote endosomal escape into the cytoplasm.',
        safetyProfile: 'Extensively evaluated in clinical trials; safe at formulated microgram quantities. (Note: industrial reagent sheets with warnings refer to chloroform/ethanol carrier solvent, not SM-102 itself in physiological vaccine saline).',
        metabolismAndClearance: 'Hydrolyzed by hepatic esterases into 2-hexyl-decanol and amino acid metabolites, cleared via biliary/fecal excretion.'
      },
      {
        id: 'mod-peg-dmg',
        name: 'PEG2000-DMG',
        chemicalName: '1,2-dimyristoyl-rac-glycero-3-methoxypolyethylene glycol-2000',
        formula: 'Polyethylene glycol conjugate (MW: ~2,509 g/mol)',
        category: 'Lipid',
        purpose: 'Steric stabilizer and anti-aggregation agent',
        howItWorks: 'Forms a hydrophilic outer shell on the nanoparticle to prevent particles from clumping together during manufacturing, freeze-thaw cycles, and early systemic circulation.',
        safetyProfile: 'Standard pharmaceutical excipient. Very rarely associated with anti-PEG antibody hypersensitivity (anaphylaxis: ~2-5 per million).',
        metabolismAndClearance: 'Dissociates rapidly from the LNP surface in plasma; PEG chains are excreted renally.'
      },
      {
        id: 'mod-dspc',
        name: 'DSPC',
        chemicalName: '1,2-distearoyl-sn-glycero-3-phosphocholine',
        formula: 'C44 H88 N O8 P (MW: 790.15 g/mol)',
        category: 'Lipid',
        purpose: 'Structural phospholipid helper lipid',
        howItWorks: 'A naturally occurring structural phospholipid that mimics cellular membranes, forming the stable lipid bilayer envelope of the nanoparticle.',
        safetyProfile: 'Biocompatible, found naturally in egg yolk and human cell membranes.',
        metabolismAndClearance: 'Metabolized by endogenous phospholipases into stearic acid and choline.'
      },
      {
        id: 'mod-cholesterol',
        name: 'Cholesterol',
        chemicalName: 'cholest-5-en-3β-ol',
        formula: 'C27 H46 O (MW: 386.65 g/mol)',
        category: 'Lipid',
        purpose: 'Membrane fluidity & LNP stability',
        howItWorks: 'Fills structural voids between phospholipid acyl chains, tuning membrane elasticity and promoting efficient fusion with host cellular endosomal membranes.',
        safetyProfile: 'Identical to endogenous human biological cholesterol. Amount per dose is ~0.2 mg (negligible compared to ~1,000 mg synthesized daily by human liver).',
        metabolismAndClearance: 'Integrated into endogenous lipoprotein cholesterol pathways.'
      },
      {
        id: 'mod-tromethamine',
        name: 'Tromethamine (Tris) & Tromethamine HCl',
        chemicalName: '2-amino-2-(hydroxymethyl)propane-1,3-diol & its hydrochloride salt',
        formula: 'C4 H11 N O3 (MW: 121.14 g/mol)',
        category: 'Salt/Buffer',
        purpose: 'Physiological pH buffer',
        howItWorks: 'Maintains vaccine solution at precise physiological pH (7.4 to 7.8), preventing mRNA acid-hydrolysis and preserving nanoparticle structural integrity.',
        safetyProfile: 'Common pharmaceutical buffer widely used in infant vaccines, injectable insulin, and human biologics.',
        metabolismAndClearance: 'Excreted unchanged by the kidneys.'
      },
      {
        id: 'mod-acetate',
        name: 'Acetic Acid & Sodium Acetate Trihydrate',
        chemicalName: 'CH3COOH and CH3COONa·3H2O',
        formula: 'C2 H4 O2 & C2 H3 Na O2 · 3H2O',
        category: 'Salt/Buffer',
        purpose: 'Secondary pH stabilizing buffer',
        howItWorks: 'Maintains isotonicity and chemical stability during freeze storage.',
        safetyProfile: 'Standard dietary vinegar component and natural biological cellular metabolite.',
        metabolismAndClearance: 'Enters the Krebs/citric acid cycle as acetyl-CoA.'
      },
      {
        id: 'mod-sucrose',
        name: 'Sucrose',
        chemicalName: 'β-D-fructofuranosyl α-D-glucopyranoside',
        formula: 'C12 H22 O11 (MW: 342.30 g/mol)',
        category: 'Sugar/Cryoprotectant',
        purpose: 'Cryoprotectant against freezing damage',
        howItWorks: 'Forms a vitrified amorphous sugar glass around the lipid nanoparticles during deep-freeze storage (-50°C), preventing ice crystals from rupturing the lipid spheres.',
        safetyProfile: 'Pure cane/beet table sugar. Negligible quantity (~43 mg per dose, equivalent to 1/100th of a teaspoon of sugar).',
        metabolismAndClearance: 'Hydrolyzed by invertase into glucose and fructose and metabolized.'
      }
    ]
  },
  {
    id: 'pfizer',
    brandName: 'Comirnaty',
    genericName: 'Tozinameran / BNT162b2',
    developer: 'Pfizer Inc. & BioNTech SE',
    platform: 'mRNA (LNP Encapsulated)',
    dose: '30 mcg (adult primary) / 10 mcg (pediatric 5-11y) / 3 mcg (under 5y)',
    storage: '-90°C to -60°C (ultra-cold) or 2°C to 8°C for up to 10 weeks (Tris formulation)',
    mrnaOrGenomicDefinition: {
      type: 'Nucleoside-modified messenger RNA (modRNA)',
      description: 'Single-stranded synthetic mRNA containing 4,284 nucleotides encoding the pre-fusion stabilized SARS-CoV-2 spike glycoprotein.',
      modifications: [
        'Complete replacement of uridine with N1-methylpseudouridine (m1Ψ) to suppress innate interferon induction and prevent premature translation arrest.',
        'Two stabilizing proline substitutions (K986P, V987P) retaining the spike in prefusion state for optimal neutralizing epitope exposure.',
        'Synthetic Cap-1 structure (m7GpppAm) at 5′ end mimicking human cellular mRNA to prevent exonuclease digestion.',
        'Segmented poly(A) tail of 110 nucleotides with a 10-nucleotide linker for cytoplasmic stability.'
      ],
      targetProtein: 'Full-length pre-fusion SARS-CoV-2 Spike (S) Glycoprotein',
      cellularLocation: 'Host cell cytoplasm. Translated by endoplasmic reticulum ribosomes.',
      lifespan: 'Degrades rapidly within 2 to 3 days post-injection.'
    },
    summaryNote: 'Pfizer uses ALC-0315 ionizable lipid. Originally formulated with phosphate buffers, later upgraded to Tris-sucrose formulation for extended refrigerator stability.',
    authorizations: ['US FDA Full Approval & BLA', 'EMA Approval', 'WHO Emergency Use Listing (EUL)'],
    ingredients: [
      {
        id: 'pfz-mrna',
        name: 'Tozinameran (BNT162b2)',
        chemicalName: 'Nucleoside-modified mRNA encoding pre-fusion spike protein',
        formula: '4,284 nucleotides (~1.3 MDa)',
        category: 'mRNA',
        purpose: 'Active genetic antigen code',
        howItWorks: 'Instructs muscle cells and resident antigen-presenting cells to produce temporary spike protein copies, triggering neutralizing antibodies and cytotoxic T-cell memory.',
        safetyProfile: 'No viral replication, no persistence, no cellular genomic integration.',
        metabolismAndClearance: 'Hydrolyzed by intracellular ribonucleases (RNase A/L) into normal dietary-equivalent nucleotide metabolites.'
      },
      {
        id: 'pfz-alc0315',
        name: 'ALC-0315',
        chemicalName: '((4-hydroxybutyl)azanediyl)bis(hexane-6,1-diyl)bis(2-hexyldecanoate)',
        formula: 'C48 H95 N O5 (MW: 766.27 g/mol)',
        category: 'Lipid',
        purpose: 'Ionizable amino lipid for mRNA encapsulation',
        howItWorks: 'Carries tertiary amine groups that protonate at low pH during formulation to condense mRNA into stable ~80 nm nanoparticles; enables fusion with cellular endosomes.',
        safetyProfile: 'Extensively assessed in safety and pharmacokinetic packages submitted to FDA/EMA. Degraded naturally by esterases.',
        metabolismAndClearance: 'Enzymatically hydrolyzed into 4-aminobutanol and 2-hexyldecanoic acid; slowly cleared by hepatic metabolic pathways.'
      },
      {
        id: 'pfz-alc0159',
        name: 'ALC-0159',
        chemicalName: '2-[(polyethylene glycol)-2000]-N,N-ditetradecylacetamide',
        formula: 'PEG-lipid conjugate (MW: ~2,534 g/mol)',
        category: 'Lipid',
        purpose: 'PEG-lipid steric shield',
        howItWorks: 'Provides a steric barrier on the outer lipid surface, preventing nanoparticle coalescence and controlling particle diameter to ~80-100 nm.',
        safetyProfile: 'Well-characterized lipid excipient; extremely low incidence of hypersensitivity.',
        metabolismAndClearance: 'Rapidly sheds from the nanoparticle in circulation; cleared through renal filtration.'
      },
      {
        id: 'pfz-dspc',
        name: 'DSPC',
        chemicalName: '1,2-distearoyl-sn-glycero-3-phosphocholine',
        formula: 'C44 H88 N O8 P (MW: 790.15 g/mol)',
        category: 'Lipid',
        purpose: 'Structural helper phospholipid',
        howItWorks: 'Forms the outer structural bilayer enclosing the hydrophobic core of the nanoparticle.',
        safetyProfile: 'Ubiquitous phospholipid identical to building blocks of mammalian cell membranes.',
        metabolismAndClearance: 'Metabolized by endogenous cellular phospholipases.'
      },
      {
        id: 'pfz-cholesterol',
        name: 'Cholesterol',
        chemicalName: 'cholest-5-en-3β-ol',
        formula: 'C27 H46 O (MW: 386.65 g/mol)',
        category: 'Lipid',
        purpose: 'Membrane fluidity modulator',
        howItWorks: 'Imparts mechanical stability to the lipid nanoparticle while facilitating membrane fusion upon cellular uptake.',
        safetyProfile: 'Natural biological lipid; minuscule trace dose (~0.2 mg).',
        metabolismAndClearance: 'Processed via normal liver sterol metabolism.'
      },
      {
        id: 'pfz-tris',
        name: 'Tromethamine & Tromethamine HCl (Tris Buffer)',
        chemicalName: '2-amino-2-(hydroxymethyl)propane-1,3-diol (Tris)',
        formula: 'C4 H11 N O3',
        category: 'Salt/Buffer',
        purpose: 'pH Buffer (in modern formulations replacing PBS)',
        howItWorks: 'Keeps solution at physiological pH 7.4. Replaced initial PBS salt formulation to extend refrigeration storage from 5 days to 10 weeks.',
        safetyProfile: 'Standard pharmaceutical buffer used in many vaccines and injectable medications.',
        metabolismAndClearance: 'Excreted intact in urine.'
      },
      {
        id: 'pfz-sucrose',
        name: 'Sucrose',
        chemicalName: 'Table sugar (analytical grade)',
        formula: 'C12 H22 O11',
        category: 'Sugar/Cryoprotectant',
        purpose: 'Cryoprotectant against ice crystallisation',
        howItWorks: 'Protects fragile nanoparticles from physical shear damage during freezing and thawing.',
        safetyProfile: 'Completely harmless food-grade sugar in microgram quantities.',
        metabolismAndClearance: 'Metabolized into glucose and fructose.'
      },
      {
        id: 'pfz-salts-pbs',
        name: 'Salts in early formulation (NaCl, KCl, Na2HPO4, KH2PO4)',
        chemicalName: 'Sodium chloride, Potassium chloride, Dibasic & Monobasic phosphate',
        formula: 'NaCl, KCl, Na2HPO4, KH2PO4',
        category: 'Salt/Buffer',
        purpose: 'Phosphate-buffered saline (PBS) in original vial formulation',
        howItWorks: 'Balanced salt solution ensuring the injection is isotonic (matching human bodily fluids to prevent injection sting).',
        safetyProfile: 'Identical to table salt and standard intravenous hydration IV fluid.',
        metabolismAndClearance: 'Regulated naturally by renal electrolyte balance.'
      }
    ]
  },
  {
    id: 'astrazeneca',
    brandName: 'Vaxzevria',
    genericName: 'ChAdOx1-S / AZD1222',
    developer: 'University of Oxford & AstraZeneca',
    platform: 'Viral Vector (DNA in Chimpanzee Adenovirus)',
    dose: '5 x 10^10 viral particles (0.5 mL intramuscular)',
    storage: '2°C to 8°C (standard refrigerator, no ultra-low cold chain required)',
    mrnaOrGenomicDefinition: {
      type: 'Double-stranded DNA viral vector (NOT an mRNA vaccine)',
      description: 'Crucial distinction: AstraZeneca is an adenoviral vector DNA vaccine. It uses a replication-deficient chimpanzee adenovirus (ChAdOx1) containing double-stranded DNA that codes for the SARS-CoV-2 spike protein with human tissue plasminogen activator (tPA) leader sequence.',
      modifications: [
        'Genetically engineered chimpanzee adenovirus shell with deletion of E1 and E3 genomic regions, making the virus completely replication-incompetent in human cells.',
        'Human cytomegalovirus (CMV) major immediate early promoter driving expression of the codon-optimized spike DNA.',
        'Human tissue plasminogen activator (tPA) signal sequence to optimize protein secretion and antigen presentation.',
        'Note on mRNA pathway: Once the adenovirus capsid injects the DNA into the cell nucleus, the host RNA polymerase transcribes the DNA into mRNA inside the nucleus. That mRNA then travels out to the cytoplasm where host ribosomes translate it into spike protein.'
      ],
      targetProtein: 'Full-length pre-fusion SARS-CoV-2 Spike (S) Glycoprotein',
      cellularLocation: 'DNA enters nucleus for transcription into mRNA; mRNA migrates to cytoplasm for translation.',
      lifespan: 'Viral capsid degrades within hours; vector DNA is non-integrating and degraded within several days.'
    },
    summaryNote: 'AstraZeneca does not contain lipid nanoparticles or synthetic modRNA. It delivers DNA inside a harmless, non-replicating adenovirus shell. Transcribed to mRNA in the nucleus, translated in cytoplasm.',
    authorizations: ['UK MHRA Approved', 'EMA Approved (historical)', 'WHO Emergency Use Listing (EUL)'],
    ingredients: [
      {
        id: 'az-vector',
        name: 'ChAdOx1-S Vector',
        chemicalName: 'Replication-deficient chimpanzee adenovirus carrying spike DNA',
        formula: 'Biological viral capsid assembly (~90 nm diameter, protein shell)',
        category: 'Viral Vector',
        purpose: 'Antigen gene delivery vehicle',
        howItWorks: 'Binds to cellular coxsackievirus-adenovirus receptors (CAR), enters cell via endocytosis, releases viral DNA into the nucleus where host enzymes transcribe it to mRNA without integrating into host chromosomes.',
        safetyProfile: 'Replication-deficient (cannot cause adenovirus illness or multiply). Associated with very rare Thrombosis with Thrombocytopenia Syndrome (TTS/VITT).',
        metabolismAndClearance: 'Capsid proteins degraded by lysosomes; vector DNA degraded by cellular nucleases.'
      },
      {
        id: 'az-histidine',
        name: 'L-Histidine & L-Histidine hydrochloride monohydrate',
        chemicalName: '(2S)-2-amino-3-(1H-imidazol-5-yl)propanoic acid',
        formula: 'C6 H9 N3 O2 (MW: 155.15 g/mol)',
        category: 'Salt/Buffer',
        purpose: 'Amino acid buffer',
        howItWorks: 'Maintains formulation pH around 6.6 to preserve stability of the adenoviral capsid proteins during storage.',
        safetyProfile: 'Essential dietary amino acid naturally present in proteins and human tissues.',
        metabolismAndClearance: 'Metabolized via normal amino acid catabolism.'
      },
      {
        id: 'az-mgcl2',
        name: 'Magnesium Chloride Hexahydrate',
        chemicalName: 'MgCl2 · 6H2O',
        formula: 'Cl2 Mg · 6H2O',
        category: 'Salt/Buffer',
        purpose: 'Divalent cation capsid stabilizer',
        howItWorks: 'Provides Mg2+ ions which bridge negative charges on the adenoviral hexon proteins, preventing viral shell denaturation.',
        safetyProfile: 'Common dietary mineral and electrolyte.',
        metabolismAndClearance: 'Regulated by renal excretion.'
      },
      {
        id: 'az-polysorbate80',
        name: 'Polysorbate 80 (Tween 80)',
        chemicalName: 'Polyoxyethylene (20) sorbitan monooleate',
        formula: 'C64 H124 O26 (MW: ~1,310 g/mol)',
        category: 'Preservative/Stabilizer',
        purpose: 'Surfactant & emulsifier',
        howItWorks: 'Prevents adenovirus aggregation and adsorption onto the glass walls of the vial during storage.',
        safetyProfile: 'Extensively used in vaccines (e.g. influenza, HPV) and food (ice cream). Extremely rare contact allergy.',
        metabolismAndClearance: 'Hydrolyzed into oleic acid, sorbitan, and polyethylene glycols.'
      },
      {
        id: 'az-ethanol',
        name: 'Ethanol',
        chemicalName: 'Ethyl alcohol',
        formula: 'C2 H6 O',
        category: 'Preservative/Stabilizer',
        purpose: 'Stabilizer / Solvent',
        howItWorks: 'Helps solubilize excipients and maintains conformational stability of viral capsid (contains ~2 mg per dose, less than a droplet of ripe fruit juice).',
        safetyProfile: 'Inconsequential trace amount.',
        metabolismAndClearance: 'Metabolized by alcohol dehydrogenase in the liver.'
      },
      {
        id: 'az-sucrose',
        name: 'Sucrose',
        chemicalName: 'Table sugar',
        formula: 'C12 H22 O11',
        category: 'Sugar/Cryoprotectant',
        purpose: 'Viscosity and osmolarity stabilizer',
        howItWorks: 'Preserves viral particle integrity in liquid solution.',
        safetyProfile: 'Safe dietary sugar.',
        metabolismAndClearance: 'Digested into glucose and fructose.'
      },
      {
        id: 'az-nacl',
        name: 'Sodium Chloride (NaCl)',
        chemicalName: 'Table salt',
        formula: 'NaCl',
        category: 'Salt/Buffer',
        purpose: 'Isotonicity agent',
        howItWorks: 'Matches the osmotic pressure of human blood and intercellular fluids to eliminate stinging.',
        safetyProfile: 'Essential biological electrolyte.',
        metabolismAndClearance: 'Renal regulation.'
      },
      {
        id: 'az-edta',
        name: 'Disodium Edetate (EDTA) Dihydrate',
        chemicalName: 'Disodium 2-({2-[bis(carboxymethyl)amino]ethyl}(carboxymethyl)amino)acetate',
        formula: 'C10 H14 N2 Na2 O8 · 2H2O',
        category: 'Preservative/Stabilizer',
        purpose: 'Chelating antioxidant agent',
        howItWorks: 'Binds trace heavy metal ions (iron, copper) that could otherwise catalyze oxidative free radical degradation of viral proteins.',
        safetyProfile: 'FDA-approved food additive and pharmaceutical chelator in microgram trace levels.',
        metabolismAndClearance: 'Excreted unchanged in urine.'
      }
    ]
  },
  {
    id: 'sinovac',
    brandName: 'CoronaVac',
    genericName: 'Inactivated COVID-19 Vaccine (Vero Cell)',
    developer: 'Sinovac Biotech Ltd.',
    platform: 'Inactivated Whole Virus',
    dose: '3 mcg / 600 SU inactivated SARS-CoV-2 antigen (0.5 mL)',
    storage: '2°C to 8°C (standard refrigeration)',
    mrnaOrGenomicDefinition: {
      type: 'Chemically inactivated whole virus (contains fragmented viral RNA, NOT intact functional mRNA)',
      description: 'CoronaVac contains killed whole SARS-CoV-2 viral particles (CZ02 strain) propagated in African green monkey kidney (Vero) cells and subsequently inactivated using beta-propiolactone (BPL).',
      modifications: [
        'Beta-propiolactone (BPL) crosslinks and hydrolyzes the viral RNA genome, destroying all replication ability while preserving the 3D surface conformation of the spike (S), nucleocapsid (N), membrane (M), and envelope (E) proteins.',
        'Does NOT contain designed or functional mRNA. The viral RNA inside the killed virion is chemically fragmented and non-translatable.',
        'Requires an adjuvant (aluminum hydroxide) because inactivated viruses alone generate weak immune responses compared to live or vector platforms.'
      ],
      targetProtein: 'Whole virus protein complex (Spike, Nucleocapsid, Membrane, Envelope)',
      cellularLocation: 'Extracellular endocytosis by dendritic cells and macrophages directly.',
      lifespan: 'Antigen presented directly by antigen-presenting cells within days.'
    },
    summaryNote: 'CoronaVac is a classic inactivated virus vaccine platform (similar to Salk polio and hepatitis A vaccines). Contains killed virus particles with aluminum hydroxide adjuvant to boost antibody responses.',
    authorizations: ['WHO Emergency Use Listing (EUL)', 'National approvals in 50+ countries across Asia, South America, and Middle East'],
    ingredients: [
      {
        id: 'sino-antigen',
        name: 'Inactivated SARS-CoV-2 Antigen (CZ02 strain)',
        chemicalName: 'Beta-propiolactone-inactivated whole SARS-CoV-2 virions',
        formula: 'Inactivated viral particle (~100 nm diameter)',
        category: 'Adjuvant',
        purpose: 'Complete viral antigen target',
        howItWorks: 'Presents the native spike protein, nucleocapsid (N), and membrane (M) proteins directly to B-cell receptors and antigen-presenting cells without requiring human cells to manufacture the protein.',
        safetyProfile: 'Completely killed/non-replicating virus; cannot cause infection or viral shedding.',
        metabolismAndClearance: 'Engulfed by phagocytes, proteolytically digested into peptide fragments in lysosomes.'
      },
      {
        id: 'sino-alum',
        name: 'Aluminum Hydroxide (Al(OH)3 Adjuvant)',
        chemicalName: 'Aluminium hydroxide gel',
        formula: 'Al(OH)3 (0.225 mg aluminum per 0.5 mL dose)',
        category: 'Adjuvant',
        purpose: 'Immunological adjuvant',
        howItWorks: 'Adsorbs the viral antigens onto its colloidal particulate surface, creating a localized antigen depot at the injection site and activating the NLRP3 inflammasome to recruit dendritic cells.',
        safetyProfile: 'One of the most extensively studied adjuvants in medical history, used safely in infant vaccines (Hepatitis B, DTaP) since the 1930s. Dose in CoronaVac is ~0.225 mg, far below the FDA safety limit of 0.85-1.14 mg/dose and below daily dietary aluminum intake (~5-10 mg from food/water).',
        metabolismAndClearance: 'Slowly solubilized into aluminum citrate and excreted renally by the kidneys.'
      },
      {
        id: 'sino-buffer-na2hpo4',
        name: 'Disodium Hydrogen Phosphate',
        chemicalName: 'Na2HPO4',
        formula: 'Na2 H P O4',
        category: 'Salt/Buffer',
        purpose: 'Phosphate buffer component',
        howItWorks: 'Maintains a constant neutral pH (6.8 to 7.4) preventing protein denaturation.',
        safetyProfile: 'Standard pharmaceutical and dietary mineral buffer.',
        metabolismAndClearance: 'Excreted renally.'
      },
      {
        id: 'sino-buffer-nah2po4',
        name: 'Sodium Dihydrogen Phosphate',
        chemicalName: 'NaH2PO4',
        formula: 'Na H2 P O4',
        category: 'Salt/Buffer',
        purpose: 'Phosphate buffer pairing',
        howItWorks: 'Acts in conjunction with disodium hydrogen phosphate for physiological pH buffering.',
        safetyProfile: 'Safe physiological salt.',
        metabolismAndClearance: 'Renal clearance.'
      },
      {
        id: 'sino-nacl',
        name: 'Sodium Chloride (NaCl)',
        chemicalName: 'Table salt',
        formula: 'NaCl',
        category: 'Salt/Buffer',
        purpose: 'Isotonic carrier solution',
        howItWorks: 'Prevents osmotic cellular lysis and irritation at the injection site.',
        safetyProfile: 'Standard sterile saline.',
        metabolismAndClearance: 'Processed via normal fluid-electrolyte homeostasis.'
      },
      {
        id: 'sino-bpl-residual',
        name: 'Trace Beta-Propiolactone (BPL, Inactivation Agent)',
        chemicalName: 'oxetan-2-one (used during viral killing, then removed/hydrolyzed)',
        formula: 'C3 H4 O2',
        category: 'Preservative/Stabilizer',
        purpose: 'Chemical inactivating agent during manufacturing',
        howItWorks: 'Reacts with viral nucleic acids to kill the virus. BPL rapidly hydrolyzes in water within hours into non-toxic 3-hydroxypropionic acid and is thoroughly washed during downstream purification.',
        safetyProfile: 'Residual levels in final product are below analytical detection limits (<2 ppm); safe standard used for rabies and flu vaccines.',
        metabolismAndClearance: 'Hydrolyzed completely into biodegradable organic acids.'
      }
    ]
  }
];
