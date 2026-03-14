import { getCollection, type CollectionEntry } from 'astro:content';
import { fortyTwoCircleOverview } from '../data/site';

export type BlogEntry = CollectionEntry<'blog'>;
export type FortyTwoEntry = CollectionEntry<'fortyTwo'>;
export type PostEntry = BlogEntry | FortyTwoEntry;
export type ProjectEntry = CollectionEntry<'projects'>;

export const PROJECT_STATE_ORDER = ['active', 'stable', 'archived', 'planned'] as const;
export type ProjectState = (typeof PROJECT_STATE_ORDER)[number];

export const GENERAL_BLOG_CATEGORY_ORDER = ['devlog', 'setup', 'retrospective', 'project'] as const;
export type GeneralBlogCategory = (typeof GENERAL_BLOG_CATEGORY_ORDER)[number];
const FORTY_TWO_CIRCLE_ORDER: string[] = fortyTwoCircleOverview.map((circle) => circle.key);

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

export async function getLatest42Posts(limit = 3) {
  return (await get42Posts()).slice(0, limit);
}

export async function getLatestGeneralPosts(limit = 3) {
  return (await getGeneralPosts()).slice(0, limit);
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
  return PROJECT_STATE_ORDER
    .map((state) => ({ state, items: projects.filter((project) => project.data.state === state) }))
    .filter((group) => group.items.length > 0);
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

export function group42PostsByCircle(posts: FortyTwoEntry[]) {
  const groups = groupPostsBySeries(posts);
  const indexByKey = new Map(FORTY_TWO_CIRCLE_ORDER.map((key, index) => [key, index]));

  return groups.sort((left, right) => {
    const leftIndex = indexByKey.get(left.series) ?? Number.MAX_SAFE_INTEGER;
    const rightIndex = indexByKey.get(right.series) ?? Number.MAX_SAFE_INTEGER;
    return leftIndex - rightIndex || left.title.localeCompare(right.title);
  });
}

export function groupGeneralPostsByCategory(posts: BlogEntry[]) {
  return GENERAL_BLOG_CATEGORY_ORDER
    .map((category) => ({
      category,
      items: posts.filter((post) => post.data.category === category)
    }))
    .filter((group) => group.items.length > 0);
}

export function getRelatedGeneralPosts(posts: BlogEntry[], current: BlogEntry, limit = 2) {
  const related = posts
    .filter((post) => post.id !== current.id)
    .map((post) => {
      const sameCategory = Number(post.data.category === current.data.category);
      const sharedTags = post.data.tags.filter((tag: string) => current.data.tags.includes(tag)).length;
      const score = sameCategory * 10 + sharedTags;
      return { post, score };
    })
    .sort((left, right) => {
      if (right.score !== left.score) return right.score - left.score;
      return byNewest(left.post, right.post);
    });

  const strongMatches = related.filter((entry) => entry.score > 0).slice(0, limit).map((entry) => entry.post);
  if (strongMatches.length === limit) return strongMatches;

  const fallback = related
    .filter((entry) => entry.score === 0)
    .map((entry) => entry.post)
    .filter((post) => !strongMatches.includes(post))
    .slice(0, limit - strongMatches.length);

  return [...strongMatches, ...fallback];
}
