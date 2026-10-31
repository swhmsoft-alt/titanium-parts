import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    category: z.string(),
    parentCategory: z.string().optional(),
    description: z.string(),
    shortDescription: z.string().optional(),
    heroImage: z.string().optional(),
    iconImage: z.string().optional(),
    image: z.string().optional(),
    features: z.array(z.string()).optional(),
    specs: z.record(z.string()).optional(),
    standards: z.array(z.string()).optional(),
    applications: z.array(z.string()).optional(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.{json,md}', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    title: z.string(),
    department: z.string().optional(),
    experience: z.string().optional(),
    bio: z.string().optional(),
    image: z.string().optional(),
    order: z.number().default(0),
  }),
});

const faqs = defineCollection({
  loader: glob({ pattern: '**/*.{json,md}', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string().optional(),
    order: z.number().default(0),
  }),
});

const blogs = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blogs' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { products, team, faqs, blogs };
