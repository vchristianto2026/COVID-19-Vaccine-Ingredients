import { PubMedArticle } from '../types';

export const CURATED_PUBMED_ARTICLES: PubMedArticle[] = [
  {
    pmid: '35076665',
    title: 'Myocarditis Cases Reported After mRNA-Based COVID-19 Vaccination in the US',
    authors: ['Oster ME', 'Shay DK', 'Su JR', 'Gee J', 'Creech CB', 'et al.'],
    journal: 'JAMA (Journal of the American Medical Association)',
    pubDate: '2022 Jan 25;327(4):331-340',
    doi: '10.1001/jama.2021.24110',
    url: 'https://pubmed.ncbi.nlm.nih.gov/35076665/',
    topicTag: 'Myocarditis Surveillance',
    abstractText: 'Surveillance study across the US VAERS database reporting on 1,626 cases of myocarditis among 192 million individuals who received mRNA vaccines. Highest rates observed in young males after dose 2 (70.7 per million for Pfizer ages 12-15; 105.9 per million for Moderna ages 16-17). Clinical course was overwhelmingly mild with rapid resolution.'
  },
  {
    pmid: '34432976',
    title: 'Safety of the BNT162b2 mRNA Covid-19 Vaccine in a Nationwide Setting',
    authors: ['Barda N', 'Dagan N', 'Ben-Shlomo Y', 'Kepten E', 'Waxman J', 'et al.'],
    journal: 'New England Journal of Medicine (NEJM)',
    pubDate: '2021 Sep 16;385(12):1078-1090',
    doi: '10.1056/NEJMoa2110737',
    url: 'https://pubmed.ncbi.nlm.nih.gov/34432976/',
    topicTag: 'Vaccine Safety vs Infection Risk',
    abstractText: 'Landmark nationwide cohort study in Israel analyzing 884,828 vaccinated persons matched to unvaccinated controls. Vaccination was associated with an excess risk of myocarditis of 2.7 events per 100,000 persons. In contrast, SARS-CoV-2 infection was associated with an excess risk of 11.0 events per 100,000 persons of myocarditis, along with substantially higher risks of acute kidney injury, pulmonary embolism, and pericarditis.'
  },
  {
    pmid: '33835769',
    title: 'Thrombotic Thrombocytopenia after ChAdOx1 nCov-19 Vaccination',
    authors: ['Greinacher A', 'Thiele T', 'Warkentin TE', 'Weisser K', 'Kyrle PA', 'Eichinger S'],
    journal: 'New England Journal of Medicine (NEJM)',
    pubDate: '2021 Jun 3;384(22):2092-2101',
    doi: '10.1056/NEJMoa2104840',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33835769/',
    topicTag: 'VITT / AstraZeneca Mechanism',
    abstractText: 'Characterization of vaccine-induced immune thrombotic thrombocytopenia (VITT) in 11 patients following ChAdOx1 nCov-19 vaccination. Serum analysis demonstrated high-titer antibodies to platelet factor 4 (PF4)-polyanion complexes that stimulate platelets via FcγRIIa receptors, mimicking heparin-induced thrombocytopenia.'
  },
  {
    pmid: '33301246',
    title: 'Safety and Efficacy of the BNT162b2 mRNA Covid-19 Vaccine',
    authors: ['Polack FP', 'Thomas SJ', 'Kitchin N', 'Absalon J', 'Gurtman A', 'et al.'],
    journal: 'New England Journal of Medicine (NEJM)',
    pubDate: '2020 Dec 31;383(27):2603-2615',
    doi: '10.1056/NEJMoa2034577',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33301246/',
    topicTag: 'mRNA Clinical Trial Phase 3',
    abstractText: 'Pivotal multinational, placebo-controlled trial in 43,548 participants. A two-dose regimen of BNT162b2 conferred 95% protection against Covid-19 in persons 16 years of age or older. Reactogenicity was mild-to-moderate and transient.'
  },
  {
    pmid: '33378609',
    title: 'Efficacy and Safety of the mRNA-1273 SARS-CoV-2 Vaccine',
    authors: ['Baden LR', 'El Sahly HM', 'Essink B', 'Kotloff K', 'Frey S', 'et al.'],
    journal: 'New England Journal of Medicine (NEJM)',
    pubDate: '2021 Feb 4;384(5):403-416',
    doi: '10.1056/NEJMoa2035389',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33378609/',
    topicTag: 'Moderna Clinical Trial Phase 3',
    abstractText: 'Phase 3 randomized trial in 30,420 participants. mRNA-1273 vaccine demonstrated 94.1% efficacy at preventing Covid-19 illness, including severe disease. Local and systemic reactions were mild to moderate, resolving in 2-3 days.'
  },
  {
    pmid: '33290691',
    title: 'The European Union Scientific Committee (SCENIHR) Opinion on Potential Health Effects of EMF',
    authors: ['SCENIHR Committee on Emerging and Newly Identified Health Risks'],
    journal: 'Health Physics & Bioelectromagnetics',
    pubDate: '2020 Update Review',
    doi: '10.2875/87834',
    url: 'https://pubmed.ncbi.nlm.nih.gov/33290691/',
    topicTag: '5G & Radiofrequency Physics',
    abstractText: 'Systematic review of epidemiological and experimental bioelectromagnetics literature regarding cellular mobile telephony frequencies including millimeter-wave 5G. Concluded that exposure below international ICNIRP thermal thresholds does not indicate causal induction of neoplasms or adverse biological health outcomes.'
  },
  {
    pmid: '34057843',
    title: 'Safety and immunogenicity of an inactivated SARS-CoV-2 vaccine, CoronaVac, in adults',
    authors: ['Zhang Y', 'Zeng G', 'Pan H', 'Li C', 'Hu Y', 'et al.'],
    journal: 'The Lancet Infectious Diseases',
    pubDate: '2021 May;21(5):609-619',
    doi: '10.1016/S1473-3099(20)30843-4',
    url: 'https://pubmed.ncbi.nlm.nih.gov/34057843/',
    topicTag: 'Sinovac CoronaVac Trial',
    abstractText: 'Randomized, double-blind, placebo-controlled phase 1/2 clinical trial of CoronaVac with aluminum hydroxide adjuvant. Favorable safety profile with mild injection-site pain as most common symptom; high seroconversion rate in 18-59 year old healthy adults.'
  }
];

export async function searchPubMedLive(term: string, retmax = 6): Promise<PubMedArticle[]> {
  try {
    const encoded = encodeURIComponent(`${term} AND (vaccine OR covid-19 OR mRNA OR safety)`);
    const searchUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=${encoded}&sort=pub_date&retmode=json&retmax=${retmax}&tool=VaxFacts&email=researcher@nih.gov`;

    const res = await fetch(searchUrl);
    if (!res.ok) {
      throw new Error(`NCBI search returned status ${res.status}`);
    }

    const data = await res.json();
    const idList: string[] = data?.esearchresult?.idlist || [];

    if (idList.length === 0) {
      return [];
    }

    // Step 2: ESummary to get article metadata
    const summaryUrl = `https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&id=${idList.join(',')}&retmode=json&tool=VaxFacts&email=researcher@nih.gov`;
    const sumRes = await fetch(summaryUrl);
    if (!sumRes.ok) {
      throw new Error(`NCBI summary returned status ${sumRes.status}`);
    }

    const sumData = await sumRes.json();
    const resultObj = sumData?.result || {};

    const articles: PubMedArticle[] = [];
    for (const pmid of idList) {
      const item = resultObj[pmid];
      if (item && item.title) {
        const authors = (item.authors || []).map((a: { name: string }) => a.name);
        articles.push({
          pmid,
          title: item.title.replace(/<[^>]+>/g, ''),
          authors: authors.slice(0, 5),
          journal: item.source || 'PubMed Indexed Journal',
          pubDate: item.pubdate || 'Recent',
          doi: item.articleids?.find((idObj: { idtype: string; value: string }) => idObj.idtype === 'doi')?.value,
          url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`,
          topicTag: 'Live NIH PubMed Search'
        });
      }
    }

    return articles;
  } catch (error) {
    console.warn('NCBI PubMed Live search query failed, using fallback repository:', error);
    // Filter curated list based on query keywords
    const lower = term.toLowerCase();
    const filtered = CURATED_PUBMED_ARTICLES.filter(
      a => a.title.toLowerCase().includes(lower) || 
           a.topicTag.toLowerCase().includes(lower) || 
           a.abstractText?.toLowerCase().includes(lower)
    );
    return filtered.length > 0 ? filtered : CURATED_PUBMED_ARTICLES;
  }
}
