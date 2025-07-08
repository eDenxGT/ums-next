import { NextFunction, Request, Response } from "express";
import { AppError } from "../shared/utils/AppError";
import chalk from "chalk";
import { ZodError } from "zod";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(chalk.bgRedBright.bold(err.name + ":") + " ", err.message);
  if (err instanceof ZodError) {
    res.status(400).json({ message: err.errors[0].message });
    return;
  }
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ message: err.message });
    return;
  }

  res.status(500).json({ message: "Internal Server Error" });
  return;
};
