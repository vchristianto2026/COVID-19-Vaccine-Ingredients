export interface ChemicalIngredient {
  id: string;
  name: string;
  chemicalName: string;
  formula?: string;
  category: 'mRNA' | 'Lipid' | 'Salt/Buffer' | 'Sugar/Cryoprotectant' | 'Adjuvant' | 'Viral Vector' | 'Preservative/Stabilizer';
  purpose: string;
  howItWorks: string;
  safetyProfile: string;
  metabolismAndClearance: string;
}

export interface VaccineInfo {
  id: string;
  brandName: string;
  genericName: string;
  developer: string;
  platform: 'mRNA (LNP Encapsulated)' | 'Viral Vector (DNA in Chimpanzee Adenovirus)' | 'Inactivated Whole Virus';
  dose: string;
  storage: string;
  mrnaOrGenomicDefinition: {
    type: string;
    description: string;
    modifications: string[];
    targetProtein: string;
    cellularLocation: string;
    lifespan: string;
  };
  ingredients: ChemicalIngredient[];
  authorizations: string[];
  summaryNote: string;
}

export interface AdverseEventRecord {
  id: string;
  title: string;
  category: 'Common Mild Reactogenicity' | 'Rare Significant Adverse Event' | 'Surveillance Finding';
  associatedVaccines: string[];
  reportedFrequency: string;
  incidenceRate: string;
  typicalOnset: string;
  biologicalMechanism: string;
  clinicalOutcome: string;
  comparativeRiskNote: string;
  authoritativeSources: { name: string; url: string; citation: string }[];
}

export interface PubMedArticle {
  pmid: string;
  title: string;
  authors: string[];
  journal: string;
  pubDate: string;
  doi?: string;
  abstractText?: string;
  url: string;
  topicTag: string;
}
