import { NextFunction, Request, Response, RequestHandler } from "express";
import { ZodSchema } from "zod";

export const validateRequest = (schema: ZodSchema<any>): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      res.status(400).json({
        success: false,
        message: "Validation error",
        errors: result.error.errors.map((err) => ({
          field: err.path[0],
          message: err.message,
        })),
      });
      return; // <<< Bu yerda return qilish kerak!
    }

    req.body = result.data;
    next();
  };
};
