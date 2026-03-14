import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;
export type FortyTwoEntry = CollectionEntry<'fortyTwo'>;
export type PostEntry = BlogEntry | FortyTwoEntry;
export type ProjectEntry = CollectionEntry<'projects'>;

const byNewest = (a: PostEntry, b: PostEntry) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
const byProjectOrder = (a: ProjectEntry, b: ProjectEntry) => {
  const left = a.data.order ?? Number.MAX_SAFE_INTEGER;
  const right = b.data.order ?? Number.MAX_SAFE_INTEGER;
  return left - right || a.data.title.localeCompare(b.data.title);
};

export function is42Post(post: PostEntry) {
  return post.collection === 'fortyTwo';
}

export function getPostPath(post: PostEntry) {
  return is42Post(post) ? `/42/${post.id}/` : `/blog/${post.id}/`;
}

function sortPublishedBlogPosts(posts: BlogEntry[]) {
  return posts.filter((post) => !post.data.draft).sort(byNewest);
}

function sortPublished42Posts(posts: FortyTwoEntry[]) {
  return posts.filter((post) => !post.data.draft).sort(byNewest);
}

async function getPublishedCollectionPosts(collection: 'blog'): Promise<BlogEntry[]>;
async function getPublishedCollectionPosts(collection: 'fortyTwo'): Promise<FortyTwoEntry[]>;
async function getPublishedCollectionPosts(collection: 'blog' | 'fortyTwo') {
  if (collection === 'blog') {
    const posts: BlogEntry[] = await getCollection('blog');
    return sortPublishedBlogPosts(posts);
  }

  const posts: FortyTwoEntry[] = await getCollection('fortyTwo');
  return sortPublished42Posts(posts);
}

export async function getPublishedPosts() {
  const [blogPosts, fortyTwoPosts] = await Promise.all([
    getPublishedCollectionPosts('blog'),
    getPublishedCollectionPosts('fortyTwo')
  ]);

  return [...blogPosts, ...fortyTwoPosts].sort(byNewest);
}

export async function get42Posts() {
  return getPublishedCollectionPosts('fortyTwo');
}

export async function getGeneralPosts() {
  return getPublishedCollectionPosts('blog');
}

export async function getRecentPosts(limit = 3) {
  return (await getPublishedPosts()).slice(0, limit);
}

export async function getProjects() {
  const projects: ProjectEntry[] = await getCollection('projects');
  return projects.sort(byProjectOrder);
}

export function getProjectPath(project: ProjectEntry) {
  return `/projects/${project.id}/`;
}

export function groupProjectsByBadge(projects: ProjectEntry[]) {
  const groups = new Map<string, ProjectEntry[]>();

  for (const project of projects) {
    const key = project.data.badge;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)?.push(project);
  }

  return [...groups.entries()].map(([badge, items]) => ({ badge, items }));
}

export function groupProjectsByState(projects: ProjectEntry[]) {
  const groups = new Map<string, ProjectEntry[]>();

  for (const project of projects) {
    const key = project.data.state;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)?.push(project);
  }

  return [...groups.entries()].map(([state, items]) => ({ state, items }));
}

export async function getFeaturedProjects(limit = 3) {
  return (await getProjects()).filter((project) => project.data.featured).slice(0, limit);
}

export function getSeriesPosts(posts: PostEntry[], seriesKey?: string) {
  if (!seriesKey) return [] as PostEntry[];
  return posts
    .filter((post) => post.data.series === seriesKey)
    .sort((a, b) => (a.data.seriesOrder ?? 0) - (b.data.seriesOrder ?? 0));
}

export function getAdjacentSeriesPosts(posts: PostEntry[], current: PostEntry) {
  if (!current.data.series) {
    return { previous: undefined, next: undefined };
  }

  const seriesPosts = getSeriesPosts(posts, current.data.series);
  const index = seriesPosts.findIndex((post) => post.id === current.id);

  return {
    previous: index > 0 ? seriesPosts[index - 1] : undefined,
    next: index >= 0 && index < seriesPosts.length - 1 ? seriesPosts[index + 1] : undefined
  };
}

export function groupPostsBySeries(posts: PostEntry[]) {
  const groups = new Map<string, PostEntry[]>();

  for (const post of posts) {
    const key = post.data.series ?? 'standalone';
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)?.push(post);
  }

  return [...groups.entries()].map(([series, items]) => ({
    series,
    title: items[0]?.data.seriesTitle ?? (series === 'standalone' ? 'Standalone' : series),
    items: [...items].sort((a, b) => (a.data.seriesOrder ?? 0) - (b.data.seriesOrder ?? 0))
  }));
}
