import mongoose from "mongoose";
import { UserEntity } from "./interfaces/user.entity";

export const UserSchema = new mongoose.Schema<UserEntity>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      default: "user",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model<UserEntity>("User", UserSchema);
