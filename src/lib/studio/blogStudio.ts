export const BLOG_CATEGORIES = ['42', 'project', 'devlog', 'setup', 'retrospective'] as const;
export const TECH_BLOG_CATEGORIES = ['project', 'devlog', 'setup', 'retrospective'] as const;
export type BlogCategory = (typeof BLOG_CATEGORIES)[number];
export type TechBlogCategory = (typeof TECH_BLOG_CATEGORIES)[number];
export const STUDIO_COLLECTION_KEYS = ['blog', 'forty-two'] as const;
export type StudioCollectionKey = (typeof STUDIO_COLLECTION_KEYS)[number];
export const MARKDOWN_EXTENSIONS = ['.md', '.mdx'] as const;
export type MarkdownExtension = (typeof MARKDOWN_EXTENSIONS)[number];

export const STUDIO_COLLECTION_META: Record<
  StudioCollectionKey,
  { directory: string; routeBase: string; label: string }
> = {
  blog: {
    directory: 'src/content/blog',
    routeBase: '/blog',
    label: '일반 글'
  },
  'forty-two': {
    directory: 'src/content/forty-two',
    routeBase: '/42',
    label: '42 글'
  }
};

export const SERIES_PRESETS = [
  { value: '42-core', title: '42 Core', description: 'libft, get_next_line, ft_printf 같은 기초 C 트랙' },
  { value: '42-systems', title: '42 Systems', description: 'push_swap, philosopher, minishell처럼 시스템/알고리즘 중심 트랙' },
  { value: '42-graphics', title: '42 Graphics', description: 'cub3d 같은 그래픽/렌더링 트랙' },
  { value: '42-infra', title: '42 Infra', description: 'inception, webserv, born2beroot 같은 인프라 트랙' }
] as const;

export type StudioTemplateKind = 'tech' | '42' | 'blank';

export interface StudioPost {
  collection: StudioCollectionKey;
  originalCollection: StudioCollectionKey;
  extension: MarkdownExtension;
  originalExtension: MarkdownExtension;
  slug: string;
  originalSlug: string;
  title: string;
  description: string;
  pubDate: string;
  updatedDate: string;
  category: BlogCategory;
  tags: string[];
  series: string;
  seriesTitle: string;
  seriesOrder: string;
  difficulty: string;
  featured: boolean;
  draft: boolean;
  body: string;
  templateKind: StudioTemplateKind;
  dirty: boolean;
  deleted: boolean;
}

export interface ValidationIssue {
  level: 'error' | 'warning';
  message: string;
  field?: keyof StudioPost | 'general';
}

export interface TagStat {
  tag: string;
  count: number;
}

export interface SeriesStat {
  value: string;
  title: string;
  count: number;
}

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  '42': '42',
  project: 'Project',
  devlog: 'Devlog',
  setup: 'Setup',
  retrospective: 'Retrospective'
};

const DEFAULT_TECH_BODY = '';
const DEFAULT_42_BODY = '';
const DEFAULT_BLANK_BODY = '';

function currentDate() {
  return new Date().toISOString().slice(0, 10);
}

function compactTimestamp() {
  const now = new Date();
  const parts = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
    String(now.getHours()).padStart(2, '0'),
    String(now.getMinutes()).padStart(2, '0')
  ];
  return parts.join('');
}

export function slugifyTitle(title: string) {
  const slug = title
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/-{2,}/g, '-');

  return slug || `post-${compactTimestamp()}`;
}

export function seriesTitleFor(value: string) {
  return SERIES_PRESETS.find((series) => series.value === value)?.title ?? '';
}

export function collectionKeyForCategory(category: BlogCategory) {
  return category === '42' ? 'forty-two' : 'blog';
}

export function templateKindForCollection(collection: StudioCollectionKey): StudioTemplateKind {
  return collection === 'forty-two' ? '42' : 'tech';
}

export function getCollectionDirectory(collection: StudioCollectionKey) {
  return STUDIO_COLLECTION_META[collection].directory;
}

export function getPostRoute(post: Pick<StudioPost, 'category' | 'slug'>) {
  const routeBase = STUDIO_COLLECTION_META[collectionKeyForCategory(post.category)].routeBase;
  return `${routeBase}/${post.slug || 'post-slug'}/`;
}

export function getPostFilePath(post: Pick<StudioPost, 'category' | 'slug' | 'extension'>) {
  const directory = getCollectionDirectory(collectionKeyForCategory(post.category));
  return `${directory}/${post.slug || 'post-slug'}${post.extension}`;
}

export function normalizeTags(input: string[] | string) {
  const raw = Array.isArray(input) ? input.join(',') : input;

  return raw
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
    .filter((tag, index, array) => array.findIndex((candidate) => candidate.toLowerCase() === tag.toLowerCase()) === index);
}

export function createPostTemplate(kind: StudioTemplateKind, seedTitle = ''): StudioPost {
  const baseTitle = kind === '42' ? (seedTitle ? `42 - ${seedTitle}` : '') : seedTitle;
  const slug = baseTitle ? slugifyTitle(baseTitle) : '';
  const category: BlogCategory = kind === '42' ? '42' : 'devlog';
  const collection = collectionKeyForCategory(category);
  const extension: MarkdownExtension = '.md';

  return {
    collection,
    originalCollection: collection,
    extension,
    originalExtension: extension,
    slug,
    originalSlug: '',
    title: baseTitle,
    description: '',
    pubDate: currentDate(),
    updatedDate: '',
    category,
    tags: kind === '42' ? ['42'] : [],
    series: kind === '42' ? '42-core' : '',
    seriesTitle: kind === '42' ? '42 Core' : '',
    seriesOrder: '',
    difficulty: kind === '42' ? '' : '',
    featured: false,
    draft: true,
    body: kind === '42' ? DEFAULT_42_BODY : kind === 'blank' ? DEFAULT_BLANK_BODY : DEFAULT_TECH_BODY,
    templateKind: kind,
    dirty: true,
    deleted: false
  };
}

function parseString(value: string) {
  const trimmed = value.trim();
  if ((trimmed.startsWith('"') && trimmed.endsWith('"')) || (trimmed.startsWith("'") && trimmed.endsWith("'"))) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

function parseBoolean(value: string) {
  return value.trim() === 'true';
}

function parseInlineArray(value: string) {
  const trimmed = value.trim();
  if (!trimmed.startsWith('[') || !trimmed.endsWith(']')) return [];

  const inner = trimmed.slice(1, -1).trim();
  if (!inner) return [];

  const result: string[] = [];
  const matcher = /"([^"]*)"|'([^']*)'|([^,]+)/g;
  for (const match of inner.matchAll(matcher)) {
    const next = (match[1] ?? match[2] ?? match[3] ?? '').trim();
    if (next) result.push(next);
  }
  return normalizeTags(result);
}

function getExtension(fileName: string): MarkdownExtension {
  return fileName.toLowerCase().endsWith('.mdx') ? '.mdx' : '.md';
}

export function parsePostFile(fileName: string, markdown: string, collection: StudioCollectionKey = 'blog'): StudioPost {
  const normalized = markdown.replace(/\r\n/g, '\n');
  let frontmatterBlock = '';
  let body = normalized;

  if (normalized.startsWith('---\n')) {
    const closing = normalized.indexOf('\n---\n', 4);
    if (closing !== -1) {
      frontmatterBlock = normalized.slice(4, closing);
      body = normalized.slice(closing + 5);
    }
  }

  const fields = new Map<string, string>();
  for (const line of frontmatterBlock.split('\n')) {
    const match = line.match(/^([A-Za-z0-9_]+):\s*(.*)$/);
    if (!match) continue;
    fields.set(match[1], match[2]);
  }

  const extension = getExtension(fileName);
  const slug = fileName.replace(/\.(md|mdx)$/i, '');
  const series = parseString(fields.get('series') ?? '');
  const rawCategory = parseString(fields.get('category') ?? 'devlog');
  const category = (BLOG_CATEGORIES.includes(rawCategory as BlogCategory) ? rawCategory : collection === 'forty-two' ? '42' : 'devlog') as BlogCategory;
  const resolvedCollection = collection === 'forty-two' || category === '42' ? 'forty-two' : 'blog';

  return {
    collection: resolvedCollection,
    originalCollection: resolvedCollection,
    extension,
    originalExtension: extension,
    slug,
    originalSlug: slug,
    title: parseString(fields.get('title') ?? slug),
    description: parseString(fields.get('description') ?? ''),
    pubDate: parseString(fields.get('pubDate') ?? currentDate()),
    updatedDate: parseString(fields.get('updatedDate') ?? ''),
    category,
    tags: parseInlineArray(fields.get('tags') ?? '[]'),
    series,
    seriesTitle: parseString(fields.get('seriesTitle') ?? seriesTitleFor(series)),
    seriesOrder: parseString(fields.get('seriesOrder') ?? ''),
    difficulty: parseString(fields.get('difficulty') ?? ''),
    featured: parseBoolean(fields.get('featured') ?? 'false'),
    draft: parseBoolean(fields.get('draft') ?? 'false'),
    body: body.trimStart(),
    templateKind: resolvedCollection === 'forty-two' ? '42' : 'tech',
    dirty: false,
    deleted: false
  };
}

function yamlString(value: string) {
  return JSON.stringify(value ?? '');
}

export function serializePost(post: StudioPost) {
  const lines = [
    '---',
    `title: ${yamlString(post.title)}`,
    `description: ${yamlString(post.description)}`,
    `pubDate: ${post.pubDate}`
  ];

  if (post.updatedDate) lines.push(`updatedDate: ${post.updatedDate}`);
  lines.push(`category: ${yamlString(post.category)}`);
  lines.push(`tags: [${post.tags.map((tag) => yamlString(tag)).join(', ')}]`);
  if (post.series) lines.push(`series: ${yamlString(post.series)}`);
  if (post.seriesTitle) lines.push(`seriesTitle: ${yamlString(post.seriesTitle)}`);
  if (post.seriesOrder) lines.push(`seriesOrder: ${Number(post.seriesOrder)}`);
  if (post.difficulty) lines.push(`difficulty: ${yamlString(post.difficulty)}`);
  lines.push(`featured: ${String(post.featured)}`);
  lines.push(`draft: ${String(post.draft)}`);
  lines.push('---', '');

  const body = post.body.replace(/\s+$/, '');
  return `${lines.join('\n')}${body ? `${body}\n` : ''}`;
}

export function validatePost(post: StudioPost, posts: StudioPost[]): ValidationIssue[] {
  const targetCollection = collectionKeyForCategory(post.category);
  const issues: ValidationIssue[] = [];
  const duplicate = posts.find(
    (candidate) =>
      !candidate.deleted &&
      candidate !== post &&
      collectionKeyForCategory(candidate.category) === targetCollection &&
      candidate.slug.toLowerCase() === post.slug.toLowerCase()
  );

  if (!post.title.trim()) issues.push({ level: 'error', field: 'title', message: '제목은 필수입니다.' });
  if (!post.slug.trim()) issues.push({ level: 'error', field: 'slug', message: 'slug는 비워둘 수 없습니다.' });
  if (!/^\d{4}-\d{2}-\d{2}$/.test(post.pubDate)) {
    issues.push({ level: 'error', field: 'pubDate', message: '발행일은 YYYY-MM-DD 형식이어야 합니다.' });
  }
  if (!post.description.trim()) {
    issues.push({ level: 'error', field: 'description', message: '한 줄 설명은 필수입니다.' });
  }
  if (!post.body.trim()) issues.push({ level: 'error', field: 'body', message: '본문이 비어 있습니다.' });
  if (duplicate) issues.push({ level: 'error', field: 'slug', message: `같은 slug(${post.slug})를 쓰는 다른 글이 있습니다.` });
  if (!BLOG_CATEGORIES.includes(post.category)) {
    issues.push({ level: 'error', field: 'category', message: '허용된 카테고리만 사용할 수 있습니다.' });
  }
  if (targetCollection === 'forty-two' && post.category !== '42') {
    issues.push({ level: 'error', field: 'category', message: '42 글은 category가 반드시 42여야 합니다.' });
  }
  if (targetCollection === 'blog' && post.category === '42') {
    issues.push({ level: 'error', field: 'category', message: '일반 기술 글은 42 category를 사용할 수 없습니다.' });
  }
  if (post.category === '42' && !post.series.trim()) {
    issues.push({ level: 'warning', field: 'series', message: '42 글은 series를 채우는 것을 권장합니다.' });
  }
  if (post.featured && post.draft) {
    issues.push({ level: 'warning', field: 'featured', message: '비공개 글은 추천 영역에 표시되지 않습니다.' });
  }
  if (post.seriesOrder && Number.isNaN(Number(post.seriesOrder))) {
    issues.push({ level: 'error', field: 'seriesOrder', message: 'seriesOrder는 숫자여야 합니다.' });
  }

  return issues;
}

export function collectTagStats(posts: StudioPost[]): TagStat[] {
  const counts = new Map<string, number>();

  for (const post of posts) {
    if (post.deleted) continue;
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((left, right) => right.count - left.count || left.tag.localeCompare(right.tag));
}

export function collectSeriesStats(posts: StudioPost[]): SeriesStat[] {
  const counts = new Map<string, number>();
  const titles = new Map<string, string>();

  for (const post of posts) {
    if (post.deleted || !post.series) continue;
    counts.set(post.series, (counts.get(post.series) ?? 0) + 1);
    titles.set(post.series, post.seriesTitle || seriesTitleFor(post.series) || post.series);
  }

  return [...counts.entries()]
    .map(([value, count]) => ({ value, count, title: titles.get(value) ?? value }))
    .sort((left, right) => right.count - left.count || left.title.localeCompare(right.title));
}

export function clonePost(post: StudioPost): StudioPost {
  const collection = collectionKeyForCategory(post.category);
  return {
    ...post,
    collection,
    originalCollection: collection,
    extension: post.extension,
    originalExtension: post.extension,
    tags: [...post.tags],
    slug: slugifyTitle(`${post.slug}-copy`),
    originalSlug: '',
    title: `${post.title} (copy)`,
    draft: true,
    dirty: true,
    deleted: false
  };
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

export function renderMarkdownPreview(body: string) {
  const lines = body.replace(/\r\n/g, '\n').split('\n');
  const html: string[] = [];
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let codeFence: string[] | null = null;
  let blockquote: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length) {
      html.push(`<p>${paragraph.join(' ')}</p>`);
      paragraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length) {
      html.push(`<ul>${listItems.map((item) => `<li>${item}</li>`).join('')}</ul>`);
      listItems = [];
    }
  };

  const flushBlockquote = () => {
    if (blockquote.length) {
      html.push(`<blockquote>${blockquote.map((line) => `<p>${line}</p>`).join('')}</blockquote>`);
      blockquote = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trimEnd();
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      flushParagraph();
      flushList();
      flushBlockquote();
      if (codeFence) {
        html.push(`<pre><code>${escapeHtml(codeFence.join('\n'))}</code></pre>`);
        codeFence = null;
      } else {
        codeFence = [];
      }
      continue;
    }

    if (codeFence) {
      codeFence.push(line);
      continue;
    }

    if (!trimmed) {
      flushParagraph();
      flushList();
      flushBlockquote();
      continue;
    }

    if (trimmed.startsWith('>')) {
      flushParagraph();
      flushList();
      blockquote.push(escapeHtml(trimmed.replace(/^>\s?/, '')));
      continue;
    }

    const heading = trimmed.match(/^(#{1,3})\s+(.*)$/);
    if (heading) {
      flushParagraph();
      flushList();
      flushBlockquote();
      const level = heading[1].length;
      html.push(`<h${level}>${escapeHtml(heading[2])}</h${level}>`);
      continue;
    }

    if (/^[-*]\s+/.test(trimmed)) {
      flushParagraph();
      flushBlockquote();
      listItems.push(escapeHtml(trimmed.replace(/^[-*]\s+/, '')));
      continue;
    }

    paragraph.push(escapeHtml(trimmed));
  }

  flushParagraph();
  flushList();
  flushBlockquote();
  if (codeFence) {
    html.push(`<pre><code>${escapeHtml(codeFence.join('\n'))}</code></pre>`);
  }

  return html.join('');
}
