import { Response } from "express";

interface ResponseData<T> {
  success: boolean;
  message: string;
  data: T | null;
  meta?: {
    token?: string | null;
    [key: string]: any;
  };
}

export const responseHandler = <T>(
  res: Response,
  statusCode: number,
  message: string,
  data?: T,
  token?: string | null
) => {
  const responseBody: ResponseData<T> = {
    success: statusCode < 400,
    message,
    data: data || null,
    ...(token && { meta: { token } }), // token bo‘lsa, qo‘shadi
  };

  res.status(statusCode).json(responseBody);
};
