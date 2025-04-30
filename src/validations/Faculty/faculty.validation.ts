import { z } from "zod";

export const createFacultySchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: "Fakultet nomi majburiy" })
      .min(3, "Fakultet nomi kamida 3ta belgidan iborat bo‘lishi kerak")
      .max(100, "Fakultet nomi 100 belgidan oshmasligi kerak"),
  }),
});

export const updateFacultySchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: "Fakultet nomi kerak" })
      .min(3, "Fakultet nomi juda qisqa")
      .max(100, "Fakultet nomi juda uzun"),
  }),
});
