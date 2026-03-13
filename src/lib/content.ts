import { getCollection, type CollectionEntry } from 'astro:content';

export type BlogEntry = CollectionEntry<'blog'>;
export type ProjectEntry = CollectionEntry<'projects'>;

const byNewest = (a: BlogEntry, b: BlogEntry) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf();
const byProjectOrder = (a: ProjectEntry, b: ProjectEntry) => {
  const left = a.data.order ?? Number.MAX_SAFE_INTEGER;
  const right = b.data.order ?? Number.MAX_SAFE_INTEGER;
  return left - right || a.data.title.localeCompare(b.data.title);
};

export async function getPublishedPosts() {
  const posts: BlogEntry[] = await getCollection('blog');
  return posts.filter((post) => !post.data.draft).sort(byNewest);
}

export async function getRecentPosts(limit = 3) {
  return (await getPublishedPosts()).slice(0, limit);
}

export async function getProjects() {
  const projects: ProjectEntry[] = await getCollection('projects');
  return projects.sort(byProjectOrder);
}

export async function getFeaturedProjects(limit = 3) {
  return (await getProjects()).filter((project) => project.data.featured).slice(0, limit);
}

export function getSeriesPosts(posts: BlogEntry[], seriesKey?: string) {
  if (!seriesKey) return [];
  return posts
    .filter((post) => post.data.series === seriesKey)
    .sort((a, b) => (a.data.seriesOrder ?? 0) - (b.data.seriesOrder ?? 0));
}

export function getAdjacentSeriesPosts(posts: BlogEntry[], current: BlogEntry) {
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
