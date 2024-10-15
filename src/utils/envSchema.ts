import { z } from "zod";

const envSchema = z.object({
  CONTENTFUL_SPACE_ID: z.string().min(1, "CONTENTFUL_SPACE_ID is required"),
  CONTENTFUL_ACCESS_TOKEN: z
    .string()
    .min(1, "CONTENTFUL_ACCESS_TOKEN is required"),
});

export const env = envSchema.parse(process.env);
