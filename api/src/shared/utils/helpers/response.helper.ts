import { Response } from "express";

export function successResponse<T>(
  res: Response,
  message: string,
  statusCode: number,
  data: T | null = null
) {
  res.status(statusCode).json({
    success: true,
    message,
    data,
  });

  return;
}
