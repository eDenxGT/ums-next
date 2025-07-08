import { container } from "tsyringe";

import { DependencyInjection } from "./index";

import { AuthController } from "../controllers/auth.controller";

// Registering all registries using a single class
DependencyInjection.registerAll();

export const authController = container.resolve(AuthController);
