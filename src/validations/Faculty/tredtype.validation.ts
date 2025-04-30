import { z } from "zod";

export const createTredTypeSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: "TredType nomi majburiy" })
      .min(3, "TredType kamida 3ta belgidan iborat bo‘lishi kerak")
      .max(50, "TredType 50 belgidan oshmasligi kerak"),
  }),
});

export const updateTredTypeSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: "TredType nomi kerak" })
      .min(3, "TredType nomi juda qisqa")
      .max(50, "TredType nomi juda uzun"),
  }),
});
