import { AdverseEventRecord } from '../types';

export const ADVERSE_EVENTS_DATA: AdverseEventRecord[] = [
  {
    id: 'myocarditis-pericarditis',
    title: 'Myocarditis & Pericarditis (Heart Muscle / Sac Inflammation)',
    category: 'Rare Significant Adverse Event',
    associatedVaccines: ['Moderna (Spikevax)', 'Pfizer-BioNTech (Comirnaty)'],
    reportedFrequency: 'Rare (~20 to 50 cases per 1,000,000 doses in peak demographic)',
    incidenceRate: 'Highest in adolescent and young adult males (ages 12–24) within 2–7 days following the 2nd dose (~50–70 per million). Overall population rate: ~10–20 per million.',
    typicalOnset: '2 to 4 days after the second or booster dose; acute chest pain, shortness of breath, palpitations.',
    biologicalMechanism: 'Potential mechanisms under investigation include hyper-immune cytokine release, molecular mimicry between spike protein epitopes and cardiac alpha-myosin, or transient non-cleared spike-antibody complexes. Notably, troponin levels spike temporarily.',
    clinicalOutcome: 'Over 90–95% of vaccine-associated myocarditis cases present as clinically mild with rapid symptom resolution (typically 3–5 days in hospital with NSAIDs or colchicine) and normal left ventricular ejection fraction at 90-day follow-up.',
    comparativeRiskNote: 'Crucial Context: The risk of myocarditis, pericarditis, and cardiac arrhythmia following natural SARS-CoV-2 infection is 7 to 11 times HIGHER than after mRNA vaccination. Infection-induced myocarditis also carries significantly higher rates of ICU admission and long-term cardiac scarring.',
    authoritativeSources: [
      {
        name: 'CDC ACIP Surveillance Report',
        url: 'https://www.cdc.gov/coronavirus/2019-ncov/vaccines/safety/myocarditis.html',
        citation: 'Oster ME, et al. Myocarditis Cases Reported After mRNA-Based COVID-19 Vaccination in the US. JAMA. 2022;327(4):331–340.'
      },
      {
        name: 'New England Journal of Medicine (NEJM)',
        url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2110737',
        citation: 'Barda N, et al. Safety of the BNT162b2 mRNA Covid-19 Vaccine in a Nationwide Setting. N Engl J Med. 2021;385:1078-1090.'
      },
      {
        name: 'Nature Medicine Comparative Study',
        url: 'https://www.nature.com/articles/s41591-021-01630-0',
        citation: 'Patone M, et al. Risks of myocarditis, pericarditis, and cardiac arrhythmias associated with COVID-19 vaccination or SARS-CoV-2 infection. Nat Med. 2022;28:410–422.'
      }
    ]
  },
  {
    id: 'tts-vitt',
    title: 'Thrombosis with Thrombocytopenia Syndrome (TTS / VITT)',
    category: 'Rare Significant Adverse Event',
    associatedVaccines: ['AstraZeneca (Vaxzevria / ChAdOx1)', 'Johnson & Johnson (Janssen Ad26)'],
    reportedFrequency: 'Very Rare (~1 to 2 cases per 100,000 doses)',
    incidenceRate: 'Estimated at ~10–15 cases per 1,000,000 first doses administered, predominating in females under 50 years of age. Extremely low after second dose (<1 per million).',
    typicalOnset: '5 to 24 days after the first dose; presenting with persistent severe headache, visual disturbances, abdominal pain, or petechial bleeding.',
    biologicalMechanism: 'Vaccine-Induced Immune Thrombotic Thrombocytopenia (VITT): Triggered by electrostatic binding between the adenoviral hexon protein / EDTA components and Platelet Factor 4 (PF4), creating neo-antigens that elicit high-titer autoantibodies (anti-PF4 IgG). These antibodies crosslink FcγRIIa receptors on platelets, causing massive platelet activation, consumption (thrombocytopenia), and unusual site clots (cerebral venous sinus thrombosis - CVST, splanchnic vein thrombosis).',
    clinicalOutcome: 'Medical emergency requiring non-heparin anticoagulants (argatroban, fondaparinux, direct oral anticoagulants) and intravenous immunoglobulin (IVIG) to block Fc receptors. Led many European and Commonwealth health agencies to restrict AstraZeneca to older populations in 2021.',
    comparativeRiskNote: 'By comparison, COVID-19 acute infection causes venous thromboembolism in 14–20% of hospitalized patients (~14,000 per 100,000 hospitalized).',
    authoritativeSources: [
      {
        name: 'New England Journal of Medicine (Greinacher et al.)',
        url: 'https://www.nejm.org/doi/full/10.1056/NEJMoa2104840',
        citation: 'Greinacher A, et al. Thrombotic Thrombocytopenia after ChAdOx1 nCov-19 Vaccination. N Engl J Med. 2021;384:2092-2101.'
      },
      {
        name: 'European Medicines Agency (EMA) Pharmacovigilance Risk Assessment',
        url: 'https://www.ema.europa.eu/en/news/astrazenecas-covid-19-vaccine-ema-finds-possible-link-very-rare-cases-unusual-blood-clots-low-blood-platelets',
        citation: 'EMA PRAC Signal Assessment Report on Vaxzevria and Embolic and Thrombotic Events. April 2021.'
      }
    ]
  },
  {
    id: 'gbs',
    title: 'Guillain-Barré Syndrome (GBS)',
    category: 'Rare Significant Adverse Event',
    associatedVaccines: ['AstraZeneca (Vaxzevria)', 'Janssen (Ad26.COV2.S)'],
    reportedFrequency: 'Extremely Rare (~8 to 15 cases per 1,000,000 doses)',
    incidenceRate: 'Slight statistical increase noted primarily for adenoviral vector platforms (J&J and AstraZeneca), observed at approximately 1 excess case per 100,000 doses administered. Not observed with mRNA platforms beyond background population baseline.',
    typicalOnset: '2 to 6 weeks post-vaccination; presenting as progressive, symmetrical muscle weakness, numbness, and tingling starting in lower extremities.',
    biologicalMechanism: 'Immune-mediated peripheral neuropathy where antibodies target myelin or axonal gangliosides. Autoimmune reaction triggered by molecular mimicry or adjuvant stimulation of cellular immunity.',
    clinicalOutcome: 'Treated with IVIG or plasmapheresis; majority recover fully or substantially with physical therapy over several months.',
    comparativeRiskNote: 'Natural SARS-CoV-2 viral infection carries a documented 6-fold higher relative risk of triggering Guillain-Barré syndrome than any vaccine.',
    authoritativeSources: [
      {
        name: 'JAMA Neurology Epidemiological Study',
        url: 'https://jamanetwork.com/journals/jamaneurology/fullarticle/2784860',
        citation: 'Hanson KE, et al. Association of COVID-19 Vaccines With Guillain-Barré Syndrome in the US. JAMA Netw Open. 2022;5(4):e228873.'
      }
    ]
  },
  {
    id: 'anaphylaxis',
    title: 'Severe Allergic Reaction / Anaphylaxis',
    category: 'Rare Significant Adverse Event',
    associatedVaccines: ['Pfizer-BioNTech', 'Moderna', 'AstraZeneca', 'Sinovac'],
    reportedFrequency: 'Rare (~2 to 5 cases per 1,000,000 doses administered)',
    incidenceRate: 'Pfizer: ~4.7 cases per million; Moderna: ~2.5 cases per million. Comparable to or lower than penicillin (~1,000 per million) and standard flu vaccines (~1.3 per million).',
    typicalOnset: 'Immediate: 85% occur within 15 to 30 minutes of injection (hence standard 15-minute clinical post-vaccination observation periods).',
    biologicalMechanism: 'IgE-mediated hypersensitivity or Complement Activation-Related Pseudoallergy (CARPA). In mRNA vaccines, polyethylene glycol (PEG) conjugates are the identified suspect allergen; in AstraZeneca, polysorbate 80. Triggers systemic mast cell degranulation, histamine release, bronchospasm, and hypotension.',
    clinicalOutcome: 'Rapidly reversible with intramuscular epinephrine (0.3 mg EpiPen) and antihistamines. Zero confirmed fatal anaphylaxis in monitored US vaccination programs.',
    comparativeRiskNote: 'Readily treatable on-site with standard clinical emergency kits. Contraindicated only for individuals with documented prior severe anaphylaxis to PEG or polysorbate.',
    authoritativeSources: [
      {
        name: 'CDC Morbidity and Mortality Weekly Report (MMWR)',
        url: 'https://www.cdc.gov/mmwr/volumes/70/wr/mm7002e1.htm',
        citation: 'Allergic Reactions Including Anaphylaxis After Receipt of the First Dose of Pfizer-BioNTech COVID-19 Vaccine. MMWR 2021;70:46–51.'
      }
    ]
  },
  {
    id: 'common-reactogenicity',
    title: 'Transient Reactogenicity (Fever, Fatigue, Chills, Myalgia, Sore Arm)',
    category: 'Common Mild Reactogenicity',
    associatedVaccines: ['Pfizer-BioNTech', 'Moderna', 'AstraZeneca', 'Sinovac'],
    reportedFrequency: 'Common (50% to 85% of recipients report at least one mild symptom)',
    incidenceRate: 'Injection site soreness (70–85%), fatigue (50–65%), headache (40–55%), muscle aches (30–40%), low-grade fever / chills (15–30%). Generally higher after dose 2 of mRNA vaccines and after dose 1 of adenoviral vaccines.',
    typicalOnset: '6 to 24 hours post-injection; peaks within 24 hours, resolves spontaneously within 24 to 72 hours.',
    biologicalMechanism: 'Direct result of the innate immune response: pattern recognition receptors (TLRs, MDA5) detect the vaccine antigen, triggering localized release of pro-inflammatory cytokines (Interleukin-1, Interleukin-6, TNF-alpha, Interferon-gamma). These cytokines travel to the hypothalamus to cause fever and recruit white blood cells.',
    clinicalOutcome: 'Self-limiting physiological sign of effective immune priming. Managed with rest, hydration, and over-the-counter antipyretics (acetaminophen or ibuprofen).',
    comparativeRiskNote: 'Reflects benign immune activation rather than tissue damage. Does not cause long-term harm or viral infection.',
    authoritativeSources: [
      {
        name: 'FDA Advisory Committee Briefing Documents',
        url: 'https://www.fda.gov/media/144416/download',
        citation: 'FDA Review of Safety and Effectiveness Data for Moderna and Pfizer-BioNTech mRNA COVID-19 Vaccines (2020).'
      }
    ]
  }
];
