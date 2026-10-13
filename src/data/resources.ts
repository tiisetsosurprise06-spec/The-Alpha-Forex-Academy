export type ResourceCategory = 'Technical Analysis' | 'Fundamentals' | 'Forex Basics' | 'Risk Management' | 'Trading Psychology' | 'Tools';

export type ExternalResource = {
  id: string;
  title: string;
  publisher: string;
  type: ResourceCategory;
  url: string;
  description: string;
  freeAccess: boolean;
  licence: string;
};

export const resourceLibrary: ExternalResource[] = [
  { id: 'r1', title: 'Babypips — School of Pipsology', publisher: 'Babypips', type: 'Forex Basics', url: 'https://www.babypips.com/learn/forex', description: 'Beginner-friendly lessons covering pip value, market conventions, and FX basics.', freeAccess: true, licence: 'Official website / educational reuse terms vary by page.' },
  { id: 'r2', title: 'TradingView Education', publisher: 'TradingView', type: 'Technical Analysis', url: 'https://www.tradingview.com/learn/', description: 'Charts, tutorials, and educational materials for support/resistance and chart reading.', freeAccess: true, licence: 'Official website / educational content terms apply.' },
  { id: 'r3', title: 'DailyFX Education', publisher: 'DailyFX', type: 'Fundamentals', url: 'https://www.dailyfx.com/education.html', description: 'Macro and FX market explanations with educational articles and analysis.', freeAccess: true, licence: 'Official website / attribution as stated.' },
  { id: 'r4', title: 'Federal Reserve Education', publisher: 'Federal Reserve', type: 'Fundamentals', url: 'https://www.federalreserve.gov/education.htm', description: 'Public educational resources about monetary policy and financial systems.', freeAccess: true, licence: 'U.S. government public information.' },
  { id: 'r5', title: 'Bank of England Education', publisher: 'Bank of England', type: 'Fundamentals', url: 'https://www.bankofengland.co.uk/education', description: 'Guides and explainers on inflation, rates, and banking frameworks.', freeAccess: true, licence: 'Official public resource.' },
  { id: 'r6', title: 'Investopedia — Risk Management', publisher: 'Investopedia', type: 'Risk Management', url: 'https://www.investopedia.com/terms/r/riskmanagement.asp', description: 'Risk management concepts written for educational purposes.', freeAccess: true, licence: 'Official educational content.' },
  { id: 'r7', title: 'TradingView', publisher: 'TradingView', type: 'Tools', url: 'https://www.tradingview.com/', description: 'Free charting and analysis tool for building chart skills.', freeAccess: true, licence: 'Official product terms.' }
];

export const glossaryTerms = [
  { term: 'Pip', definition: 'The standard movement unit in FX; for most pairs it is the fourth decimal place.' },
  { term: 'Spread', definition: 'The difference between the bid and ask prices.' },
  { term: 'Support', definition: 'A price zone where buying interest is often considered. ' },
  { term: 'Resistance', definition: 'A price zone where selling interest may appear.' },
  { term: 'Leverage', definition: 'Borrowed capital used to increase exposure; can magnify gains and losses.' },
  { term: 'Stop-loss', definition: 'A predefined exit price used to limit losses.' },
  { term: 'Risk-to-reward', definition: 'A ratio describing how much risk is taken versus potential reward.' }
];
