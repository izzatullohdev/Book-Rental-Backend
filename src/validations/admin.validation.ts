import { z } from "zod";

// Optional sanitize function
const sanitizeString = (value: string) =>
  value.replace(/\$/g, "").replace(/\./g, "");

export const adminRegisterSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .transform(sanitizeString),
  password: z
    .string({ required_error: "Password is required" })
    .min(6, "Password must be at least 6 characters"),
  HeroAdmin: z
    .string({ required_error: "HeroAdmin is required" })
    .transform(sanitizeString),
  HeroPassword: z.string({ required_error: "HeroPassword is required" }),
});
