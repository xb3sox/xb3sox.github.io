export type Project = {
  id: string;
  number: string;
  name: string;
  description: string;
  status: 'Planned launch';
  arabic?: string;
  alias?: string;
};

export const projects: Project[] = [
  {
    id: 'rseed',
    number: '01',
    name: 'Rseed',
    arabic: 'رصيد',
    alias: 'Mizan',
    description: 'A Saudi money ledger that reconciles transfers and card payments without double-counting.',
    status: 'Planned launch',
  },
  {
    id: 'dmcloser',
    number: '02',
    name: 'DMCloser',
    description: 'A bilingual AI inbox that qualifies and tracks Instagram and WhatsApp inquiries.',
    status: 'Planned launch',
  },
  {
    id: 'foundra',
    number: '03',
    name: 'Foundra',
    description: 'A marketplace for proof-backed problems and the people ready to solve them.',
    status: 'Planned launch',
  },
  {
    id: 'nextjob',
    number: '04',
    name: 'NextJob',
    description: 'An AI career agent that finds roles and tailors each job application.',
    status: 'Planned launch',
  },
  {
    id: 'yalla',
    number: '05',
    name: 'Yalla',
    description: 'Discover and book curated local experiences with small groups.',
    status: 'Planned launch',
  },
];
