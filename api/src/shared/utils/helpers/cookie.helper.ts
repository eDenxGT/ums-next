import { Response } from "express";

export const setCookie = (
  res: Response,
  name: string,
  value: string,
  options?: any
) => {
  res.cookie(name, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: options?.sameSite || "strict",
    maxAge: options?.maxAge || 60 * 60 * 24 * 7,
  });
};
