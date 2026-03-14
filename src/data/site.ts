export const siteMeta = {
  shortTitle: 'changwpa',
  authorName: 'changwpa',
  title: 'changwpa | Developer Portfolio, 42 Projects, Technical Blog',
  description:
    'Developer portfolio and technical blog featuring 42 project case studies, C and systems programming notes, concurrency lessons, infrastructure work, and source-first Astro publishing.',
  intro:
    'I use this site to turn 42 repositories, systems-flavored projects, and source-first web work into readable case studies and technical posts.',
  statusLine:
    'Current focus: C and systems programming, infrastructure notes, and maintainable Astro publishing.',
  defaultOgImage: '/og-default.svg',
  defaultOgAlt: 'changwpa developer portfolio, 42 projects, and technical blog',
  github: 'https://github.com/justini0715',
  repo: 'https://github.com/justini0715/justini0715.github.io',
  profileAvatar: '/iostream.webp',
  nav: [
    { href: '/home', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/42', label: '42' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About' }
  ]
} as const;


export const profileCard = {
  avatar: siteMeta.profileAvatar,
  role: 'Systems-minded developer',
  shortBio:
    '42 기반의 C, 시스템 프로그래밍, 인프라, 그리고 source-first Astro publishing을 한 저장소 안에서 엮어 정리하는 개발자.',
  detailBio:
    '프로젝트 결과만 전시하기보다, 제약 조건, 디버깅 과정, 운영 메모까지 같이 남겨서 다음 작업과 다음 글로 바로 이어질 수 있는 아카이브를 만드는 중이다.',
  highlights: ['C · systems', '42 archive', 'Project case studies', 'Astro static publishing']
} as const;

export const focusAreas = [
  '42 project writeups that preserve constraints, mistakes, and lessons learned',
  'Systems programming notes across C, threads, parsing, and process-level debugging',
  'Source-first web publishing with Astro, Markdown, and static deployment workflows'
];

export const strengths = [
  'Turning repository evidence into concise project case studies',
  'Documenting architecture and tradeoffs instead of only final screenshots',
  'Keeping build and deployment workflows simple enough to run locally first'
];

export const currentFocus = [
  'Rebuilding the user-site repo as a source-first Astro project',
  'Publishing 42 assignments in a circle-based archive flow that matches the public cursus structure',
  'Curating a portfolio that balances algorithms, graphics, infra, and concurrency'
];

export const homeNextUp = [
  '대표 프로젝트 설명과 자료 링크를 최신 상태로 다듬기',
  '일반 기술 글 중 다음에 보강할 개념 노트 정리하기',
  '42 허브에서 다음 순서로 읽을 글과 보강할 과제 기록 정리하기'
];

export const homeFocusBoard = [
  '프로젝트 흐름은 `/projects`에서, 학습 기록은 `/blog`와 `/42`에서 각자 역할을 분리해 유지하기',
  '새 기능이 붙더라도 `/home`은 빠른 진입과 현재 상황 요약이 핵심이라는 원칙 유지하기',
  '현재 보이는 정보는 정적이어도 되지만, 나중에 로컬 기능을 붙이기 쉬운 구조로 유지하기'
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

export const fortyTwoCircleOverview = [
  {
    key: '42-circle-0',
    title: 'Circle 0',
    description: '시작점. libft처럼 이후 과제의 기반이 되는 첫 라이브러리 과제가 놓이는 구간.'
  },
  {
    key: '42-circle-1',
    title: 'Circle 1',
    description: 'libft 다음 확장 구간. ft_printf, get_next_line, born2beroot처럼 기본기를 실제 과제로 넓히는 단계.'
  },
  {
    key: '42-circle-2',
    title: 'Circle 2',
    description: '알고리즘, 프로세스, 초기 그래픽 과제가 섞이는 구간. 현재 로컬 아카이브에서는 push_swap, pipex, fdf를 여기에 둔다.'
  },
  {
    key: '42-circle-3',
    title: 'Circle 3',
    description: '동시성과 셸처럼 상태 관리와 복잡한 흐름 제어가 본격적으로 올라오는 단계.'
  },
  {
    key: '42-circle-4',
    title: 'Circle 4',
    description: '더 무거운 그래픽/엔진 흐름과 C++ 전환 구간. 현재 아카이브에서는 cub3d와 C++ Modules 00-04가 여기에 들어간다.'
  },
  {
    key: '42-circle-5',
    title: 'Circle 5',
    description: '바깥쪽 공통 코어 구간. 인프라, 서버, 후반 C++ continuation처럼 큰 설계를 묶어 다루는 단계.'
  }
] as const;
