import { z } from "zod";

export const createGroupSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: "Title kiritilishi shart" })
      .min(2, "Guruh nomi kamida 2ta belgidan iborat bo‘lishi kerak"),
  }),
});

export const updateGroupSchema = z.object({
  body: z.object({
    title: z
      .string({ required_error: "Title kiritilishi shart" })
      .min(2, "Guruh nomi kamida 2ta belgidan iborat bo‘lishi kerak"),
  }),
});
