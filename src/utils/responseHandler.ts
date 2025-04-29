import { Response } from "express";

interface ResponseData<T> {
  success: boolean;
  message: string;
  data: T | null;
}

export const responseHandler = <T>(
  res: Response,
  statusCode: number,
  message: string,
  data?: T
) => {
  const responseBody: ResponseData<T> = {
    success: statusCode < 400,
    message,
    data: data || null,
  };

  res.status(statusCode).json(responseBody);
};
