import { z } from "zod";

export const createEducationSchema = z.object({
  title: z
    .string({ required_error: "Ta'lim turi nomi kiritilishi kerak" })
    .min(3, "Nom juda qisqa, kamida 3ta belgi bo‘lishi kerak")
    .max(50, "Nom juda uzun, 50 belgidan oshmasin"),
});

export const updateEducationSchema = z.object({
  title: z
    .string({ required_error: "Ta'lim turi nomi kerak" })
    .min(3, "Kamida 3ta belgi bo‘lishi kerak")
    .max(50, "Nom juda uzun, 50 belgidan oshmasin"),
});
