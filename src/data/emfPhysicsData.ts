export interface EmfBand {
  name: string;
  frequencyRange: string;
  wavelength: string;
  photonEnergyEv: string;
  ionizationStatus: 'Non-Ionizing' | 'Ionizing';
  penetrationDepth: string;
  primaryBioEffect: string;
  safetyStandard: string;
  usageContext: string;
}

export const EMF_SPECTRUM_DATA: EmfBand[] = [
  {
    name: '4G LTE & Standard WiFi',
    frequencyRange: '700 MHz – 2.6 GHz (WiFi: 2.4 GHz / 5.8 GHz)',
    wavelength: '12 cm – 43 cm',
    photonEnergyEv: '0.000003 – 0.00001 eV',
    ionizationStatus: 'Non-Ionizing',
    penetrationDepth: '~10 mm to 30 mm (penetrates through skin into subcutaneous tissue)',
    primaryBioEffect: 'Very low thermal absorption; comfortably below SAR limits.',
    safetyStandard: 'FCC SAR limit: 1.6 W/kg; ICNIRP limit: 2.0 W/kg',
    usageContext: 'Smartphones, home routers, Bluetooth headsets.'
  },
  {
    name: '5G Sub-6 GHz (Mid-Band)',
    frequencyRange: '3.3 GHz – 4.2 GHz (C-band)',
    wavelength: '7 cm – 9 cm',
    photonEnergyEv: '0.000014 – 0.000017 eV',
    ionizationStatus: 'Non-Ionizing',
    penetrationDepth: '~5 mm to 10 mm (skin and shallow subcutaneous layer)',
    primaryBioEffect: 'Slight localized surface warmth at maximum transmit power; negligible under everyday operation.',
    safetyStandard: 'ICNIRP 2020 Guidelines & IEEE C95.1-2019',
    usageContext: 'Widespread nationwide 5G mobile network coverage.'
  },
  {
    name: '5G mmWave (High-Band)',
    frequencyRange: '24 GHz – 40 GHz',
    wavelength: '7.5 mm – 12.5 mm',
    photonEnergyEv: '0.00010 – 0.00016 eV',
    ionizationStatus: 'Non-Ionizing',
    penetrationDepth: '< 1.0 mm (entirely absorbed in the epidermis/dermis; cannot reach brain, heart, or internal organs)',
    primaryBioEffect: 'Surface skin heat dissipation only. Cannot break chemical or hydrogen bonds.',
    safetyStandard: 'ICNIRP Power Density Limit: 20–40 W/m² for public exposure',
    usageContext: 'Dense urban centers, sports stadiums, high-capacity venues.'
  },
  {
    name: '6G Sub-Terahertz (Research / Future)',
    frequencyRange: '100 GHz – 300 GHz (Sub-THz)',
    wavelength: '1 mm – 3 mm',
    photonEnergyEv: '0.00041 – 0.00124 eV',
    ionizationStatus: 'Non-Ionizing',
    penetrationDepth: '< 0.3 mm (strictly superficial stratum corneum outer dead skin layer and cornea)',
    primaryBioEffect: 'Superficial skin dielectric relaxation; zero penetration into internal human organs.',
    safetyStandard: 'ITU-R & IEEE 802.15.3d Emerging Telecommunication Standards',
    usageContext: 'Ultra-high throughput wireless backhaul and future short-range communications (2030+).'
  },
  {
    name: 'Sunlight Visible Spectrum',
    frequencyRange: '430 THz – 750 THz',
    wavelength: '400 nm – 700 nm',
    photonEnergyEv: '1.8 eV – 3.1 eV (20,000x higher energy than 5G)',
    ionizationStatus: 'Non-Ionizing',
    penetrationDepth: '~0.5 mm to 2 mm',
    primaryBioEffect: 'Rods and cones optical vision excitation, normal biological photoperiod.',
    safetyStandard: 'Natural ambient environment exposure',
    usageContext: 'Daylight, solar radiation, domestic lighting.'
  },
  {
    name: 'Ultraviolet & X-Rays (Ionizing Threshold)',
    frequencyRange: '> 3,000 THz (UV-C, X-ray, Gamma)',
    wavelength: '< 100 nm',
    photonEnergyEv: '> 10.0 eV to 100,000+ eV (IONIZING)',
    ionizationStatus: 'Ionizing',
    penetrationDepth: 'Deep / Full body penetration (X-rays, Gamma rays)',
    primaryBioEffect: 'HAS ENOUGH QUANTUM ENERGY TO EJECT ELECTRONS, BREAK COVALENT BONDS, AND MUTATE DNA DIRECTLY.',
    safetyStandard: 'Strict radiation shielding, ALARA (As Low As Reasonably Achievable)',
    usageContext: 'Medical radiographs, CT scans, nuclear energy.'
  }
];

export const SMARTPHONE_FIELD_FACT_CHECK = {
  question: 'Can mRNA vaccine entities be detected by a smartphone electromagnetic field or Bluetooth?',
  verdict: 'NO — Physically & Biologically Impossible',
  scientificReasons: [
    {
      title: '1. No Metallic Antennas or Conductivity in mRNA',
      explanation: 'mRNA (messenger ribonucleic acid) is purely an organic biochemical polymer consisting of ribose sugar, phosphate groups, and organic bases (adenine, cytosine, guanine, N1-methylpseudouridine). It contains zero elemental iron, zero semiconductors, zero copper coils, and zero electrical conductivity. An electromagnetic transmitter requires a conductive antenna of resonant length ($L \\approx \\lambda/2$ or $\\lambda/4$) and an electric current to oscillate electromagnetic waves.'
    },
    {
      title: '2. No Power Source or Transceiver',
      explanation: 'Smartphones communicate via protocols like Bluetooth (2.4 GHz) or NFC (13.56 MHz). Transmitting a radio signal requires a power source (battery, solar, or RF harvesting), an oscillator, and a digital MAC address chipset. Microscopic lipid nanoparticles are ~80 to 100 nanometers wide—millions of times smaller than the smallest integrated circuit ever manufactured.'
    },
    {
      title: '3. Dielectric Physics and Non-Interaction with GHz EMF',
      explanation: 'At frequencies used by smartphones (700 MHz to 5 GHz), organic biomolecules in aqueous physiological saline behave as weak dielectric insulators. They do not resonate, reflect, or emit radio waves. Smartphone sensors (Bluetooth, WiFi, NFC) only detect certified digital packets transmitted by electronic transceivers, not organic molecular strands.'
    },
    {
      title: '4. Origin of the Myth ("Bluetooth MAC Addresses")',
      explanation: 'In 2021, viral social media videos claimed Bluetooth scanners found unrecognized MAC addresses near vaccinated people. Independent cybersecurity analyses proved these were standard unassigned random MAC addresses broadcast by nearby anonymous Bluetooth Low Energy (BLE) devices—including smartwatches, wireless earbuds, passing vehicles, and fitness trackers (which cycle randomized BLE addresses every 15 minutes for user privacy).'
    }
  ]
};

export const EMF_5G_6G_SAFETY_ASSESSMENT = {
  question: 'How dangerous is it to deploy 5G and 6G smartphones to humans and the environment?',
  verdict: 'Extensively Reviewed: Safe Under International ICNIRP / FCC Safety Guidelines',
  keyFindings: [
    {
      aspect: 'Quantum Energy & The Ionization Barrier',
      detail: 'The fundamental law of photobiology: only electromagnetic radiation with photon energy $\\ge 10\\text{ eV}$ (ultraviolet, X-rays, gamma) can ionize atoms and break chemical/DNA bonds. A 5G photon (at 30 GHz) has an energy of only $0.00012\\text{ eV}$—which is nearly 100,000 times below the threshold of ionization. A single photon of ordinary visible green sunlight carries 20,000 times more energy than a 5G photon.'
    },
    {
      aspect: 'Penetration Depth (Skin Physics)',
      detail: 'As radiofrequency increases into millimeter waves (5G mmWave: 24–40 GHz) and sub-terahertz (6G: 100–300 GHz), electromagnetic wave penetration into biological tissue decreases exponentially due to high water absorption. While 2G/3G signals penetrated centimeters into muscle, 5G mmWave and 6G waves are stopped within the top 0.2 to 1.0 millimeter of the dead skin layer (stratum corneum) and cannot reach internal organs, bone marrow, or the brain.'
    },
    {
      aspect: 'Thermal vs. Non-Thermal Mechanisms',
      detail: 'At non-ionizing RF frequencies, the only verified physical interaction with biological tissue is dielectric heating (thermal effect). Regulatory standards set by ICNIRP and the FCC mandate maximum power limits (Specific Absorption Rate, SAR $\\le 1.6\\text{ W/kg}$) with large safety margins (50-fold buffer) to ensure zero biologically harmful tissue heating occurs.'
    },
    {
      aspect: 'Environmental & Ecological Impact',
      detail: 'Thousands of peer-reviewed studies compiled by the WHO International EMF Project and IEEE ICES have evaluated flora, fauna, and honeybees. Regulated telecom signals at environmental field levels show no credible reproductive or genetic toxicity. The primary environmental challenge of 5G/6G is electrical energy consumption in data centers and electronic hardware recycling, which telecom operators mitigate via dynamic sleep-mode base stations.'
    }
  ]
};
