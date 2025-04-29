import { z } from "zod";

export const createFacultySchema = z.object({
  title: z
    .string({
      required_error: "Fakultet nomi majburiy",
      invalid_type_error: "Fakultet nomi satr bo‘lishi kerak",
    })
    .min(2, "Fakultet nomi kamida 2 ta harfdan iborat bo‘lishi kerak")
    .max(50, "Fakultet nomi 50 ta belgidan oshmasligi kerak")
    .trim(),
});

export const updateFacultySchema = z.object({
  title: z
    .string()
    .min(2, "Fakultet nomi kamida 2 ta harf bo‘lishi kerak")
    .max(50, "Juda uzun fakultet nomi")
    .optional(),
});

export const getFacultyByIdSchema = z.object({
  id: z.string().regex(/^[a-f\d]{24}$/i, "Noto‘g‘ri fakultet ID"),
});
