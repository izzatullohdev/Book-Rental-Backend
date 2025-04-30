import { z } from "zod";

export const createFacultySchema = z.object({
  title: z
    .string()
    .min(2, "Guruh nomi kamida 2ta belgidan iborat bo‘lishi kerak"),
});

export const updateGroupSchema = z.object({
  title: z
    .string()
    .min(2, "Guruh nomi kamida 2ta belgidan iborat bo‘lishi kerak"),
});
