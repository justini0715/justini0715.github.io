export const siteMeta = {
  shortTitle: 'changwpa',
  title: 'changwpa | Developer portfolio and 42 log',
  description:
    'A source-first developer website for project case studies, technical writing, and assignment-by-assignment 42 posts.',
  intro:
    'I use this site to turn repository work into readable case studies, keep a technical blog alive, and publish 42 assignments one project at a time without losing structure.',
  statusLine:
    'Current focus: systems-flavored programming, infrastructure notes, and maintainable Astro publishing.',
  github: 'https://github.com/justini0715',
  repo: 'https://github.com/justini0715/justini0715.github.io',
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/blog', label: 'Blog' }
  ]
} as const;

export const focusAreas = [
  '42 project writeups that preserve constraints, mistakes, and lessons learned',
  'Systems-style debugging across C, threads, parsing, and container workflows',
  'Static publishing workflows that stay maintainable as the archive grows'
];

export const strengths = [
  'Turning repository evidence into concise project narratives',
  'Documenting architecture and tradeoffs instead of only final screenshots',
  'Keeping build and deployment workflows simple enough to run locally first'
];

export const currentFocus = [
  'Rebuilding the user-site repo as a source-first Astro project',
  'Publishing 42 assignments in a series-friendly, velog-like flow',
  'Curating a portfolio that balances algorithms, graphics, infra, and concurrency'
];

export const stackSummary = [
  'Astro',
  'TypeScript where useful',
  'Markdown content collections',
  'GitHub Actions',
  'GitHub Pages',
  'C / Docker / Linux project material from 42 repos'
];

export const writingPrinciples = [
  'Explain the problem before the implementation details.',
  'Preserve real constraints, mistakes, and lessons learned.',
  'Keep posts maintainable enough to extend one assignment at a time.'
];

export const seriesOverview = [
  {
    key: '42-core',
    title: '42 Core',
    description: 'Foundational C projects such as libft, get_next_line, and ft_printf.'
  },
  {
    key: '42-systems',
    title: '42 Systems',
    description: 'Assignments centered on processes, algorithms, concurrency, and shell behavior.'
  },
  {
    key: '42-graphics',
    title: '42 Graphics',
    description: 'Rendering and interaction notes around cub3d and related visual projects.'
  },
  {
    key: '42-infra',
    title: '42 Infra',
    description: 'Infrastructure, containers, web serving, and deployment-oriented writeups.'
  }
];
