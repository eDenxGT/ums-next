import jwt from "jsonwebtoken";
import { UserEntity } from "../../../models/interfaces/user.entity";
import { config } from "../../env";

export const generateAccessToken = (user: UserEntity) => {
  return jwt.sign(
    { userId: user.userId, role: user.role },
    config.jwt.ACCESS_TOKEN_SECRET,
    { expiresIn: "15m" }
  );
};

export const generateRefreshToken = (user: UserEntity) => {
  return jwt.sign(
    { userId: user.userId, role: user.role },
    config.jwt.REFRESH_TOKEN_SECRET,
    { expiresIn: "7d" }
  );
};
