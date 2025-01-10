import { defineCollection, z } from 'astro:content';

const changelogSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  version: z.string().regex(/^\d+\.\d+\.\d+$/, { message: "Version must be in format x.y.z" }),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, { message: "Date must be in YYYY-MM-DD format" }),
  app: z.enum(['customer', 'panel', 'staff'], { 
    required_error: "App type is required",
    invalid_type_error: "App must be one of: customer, panel, staff"
  })
});

export const collections = {
  customer: defineCollection({ schema: changelogSchema }),
  panel: defineCollection({ schema: changelogSchema }),
  staff: defineCollection({ schema: changelogSchema })
}; 