export interface ExemptionComparison {
  feature: string;
  medicalExemption: string;
  religiousExemption: string;
}

export const EXEMPTION_COMPARISON_TABLE: ExemptionComparison[] = [
  {
    feature: 'Core Definition',
    medicalExemption: 'Exemption granted based on a clinically documented medical contraindication or precaution that makes receiving the vaccine unsafe for that patient.',
    religiousExemption: 'Exemption requested based on an individual\'s sincerely held religious, spiritual, or moral beliefs that conflict with vaccine receipt or ingredients.'
  },
  {
    feature: 'Valid Grounds / Examples',
    medicalExemption: 'Documented severe allergy or anaphylaxis to vaccine ingredients (e.g., PEG, polysorbate); history of vaccine-induced myocarditis/pericarditis; Guillain-Barré syndrome within 6 weeks of prior dose; severe acute immunosuppression.',
    religiousExemption: 'Theological doctrines opposing medical interventions; objections to the historical use of embryonic cell lines (e.g., HEK-293, PER.C6) in early laboratory testing/development; religious views on bodily purity or divine providence.'
  },
  {
    feature: 'Who Certifies / Issues',
    medicalExemption: 'A licensed Medical Doctor (MD), Doctor of Osteopathic Medicine (DO), or qualifying clinical specialist who examines the patient and provides clinical documentation.',
    religiousExemption: 'The INDIVIDUAL applicant (or their clergy/religious leader if required by employer/institution). A personal declaration of faith, NOT a medical certification.'
  },
  {
    feature: 'Legal Framework',
    medicalExemption: 'Americans with Disabilities Act (ADA), public health codes, CDC clinical contraindication criteria, OSHA standards.',
    religiousExemption: 'Title VII of the Civil Rights Act of 1964 (42 U.S.C. § 2000e), First Amendment (public sector), EEOC Compliance Manual Section 12 on Religious Discrimination.'
  },
  {
    feature: 'Employer / Institutional Review',
    medicalExemption: 'Assessed against medical evidence and clinical contraindications. Very narrow, objective criteria.',
    religiousExemption: 'Under Title VII, employers must reasonably accommodate sincerely held religious beliefs unless doing so imposes an "undue hardship" on the conduct of the business (or safety of patients in healthcare).'
  }
];

export const DOCTORS_AND_RELIGIOUS_EXEMPTION = {
  coreQuestion: 'Should medical doctors issue certificates of religious exemption to people with religious objections?',
  consensusVerdict: 'NO — Professional Medical Ethics Consensus (AMA, AAP, ACP)',
  detailedGuidance: [
    {
      title: '1. Beyond the Scope of Medical Licensure and Clinical Practice',
      content: 'Medical doctors are licensed by state medical boards to diagnose disease, evaluate physical pathology, and assess biomedical contraindications. A physician has no professional authority, theological training, or legal credential to validate whether an individual\'s spiritual beliefs are "sincerely held" or consistent with religious doctrine. Signing a religious exemption certificate places a physician outside their professional scope of practice.'
    },
    {
      title: '2. Legal Attestation Belongs to the Individual, Not the Doctor',
      content: 'Under Title VII of the US Civil Rights Act and Equal Employment Opportunity Commission (EEOC) standards, religious accommodation requests are legal declarations submitted by the individual employee or student. The person attests to their own faith and moral conviction. In some cases, a letter from a minister, rabbi, priest, or imam may accompany the petition. An MD or DO signature is neither required nor legally appropriate for a religious claim.'
    },
    {
      title: '3. Professional Medical Association Policies',
      content: 'The American Medical Association (AMA), American Academy of Pediatrics (AAP), and American College of Physicians (ACP) have explicit ethical guidelines advising doctors: (a) Only issue medical exemption certificates when genuine medical contraindications exist; (b) Decline requests to sign religious or philosophical exemption forms; (c) Engage with patients in compassionate, respectful dialogue regarding their ethical concerns without compromising professional medical boundaries.'
    },
    {
      title: '4. Major Religious Denominational Perspectives on COVID-19 Vaccines',
      content: 'The overwhelming majority of major world religions explicitly permit or encourage vaccination as an act of preserving life and loving one\'s neighbor:\n- Roman Catholic Church: The Vatican Congregation for the Doctrine of the Faith (CDF) issued formal guidance stating that receiving COVID-19 vaccines is morally acceptable, as any connection to historical cell lines is remote passive cooperation with evil.\n- Eastern Orthodox, Mainline Protestant, Evangelical leaders, Islamic Fiqh Councils (Halal status affirmed), Judaism (Halakha principle of Pikuach Nefesh — saving a life), Hinduism, and Buddhism have all endorsed vaccination.'
    }
  ]
};
