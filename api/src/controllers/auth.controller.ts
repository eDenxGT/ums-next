import { Request, Response } from "express";

export const register = (req: Request, res: Response) => {
  console.log(req.body);
  res.json({ message: "Register" });
};

export const login = (req: Request, res: Response) => {
  console.log(req.body);
  res.json({ message: "Login" });
};
