import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['42', 'project', 'devlog', 'setup', 'retrospective']),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    seriesTitle: z.string().optional(),
    seriesOrder: z.number().int().optional(),
    difficulty: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    summary: z.string().optional(),
    stack: z.array(z.string()),
    status: z.string(),
    featured: z.boolean().default(false),
    order: z.number().int().optional(),
    repoUrl: z.string().url(),
    demoUrl: z.string().url().optional(),
    highlight: z.string(),
    year: z.string()
  })
});

export const collections = { blog, projects };
