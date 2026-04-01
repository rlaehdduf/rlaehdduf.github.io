import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['unity', 'web', 'package', 'server', 'docs']),
    description: z.string(),
    image: z.string().optional(),
    technologies: z.array(z.string()),
    github: z.string().optional(),
    demo: z.string().optional(),
    featured: z.boolean().default(false),
    devPeriod: z.string().optional(),
  }),
});

export const collections = { projects };