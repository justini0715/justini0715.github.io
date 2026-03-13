export const siteMeta = {
  shortTitle: 'changwpa',
  title: 'changwpa | Developer portfolio and 42 log',
  description:
    'A source-first developer website for project case studies, technical writing, and assignment-by-assignment 42 posts.',
  intro:
    'Systems-minded development notes, portfolio case studies, and a 42 journey that is meant to be published one project at a time.',
  statusLine:
    'Building with Astro, static deployment, and maintainable Markdown content.',
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
  'Systems-flavored programming and debugging',
  '42 project writeups that preserve constraints and tradeoffs',
  'Source-first static publishing with GitHub Pages'
];

export const writingPrinciples = [
  'Explain the problem before the implementation details.',
  'Preserve real constraints, mistakes, and lessons learned.',
  'Keep posts maintainable enough to extend one assignment at a time.'
];

export const stackSummary = [
  'Astro',
  'TypeScript where useful',
  'Markdown content collections',
  'GitHub Actions',
  'GitHub Pages'
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
