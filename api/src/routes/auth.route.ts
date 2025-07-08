import express from "express";
import asyncHandler from "express-async-handler";
import { authController } from "../container/resolver";

const router = express.Router();

router.post("/register", asyncHandler(authController.register));

router.post("/login", asyncHandler(authController.login));

export default router;
