import "reflect-metadata";
import "./container/resolver";

import express from "express";
import dotenvx from "@dotenvx/dotenvx";
import chalk from "chalk";
import cors from "cors";

import { config } from "./shared/env";
import { connectDB } from "./config/db";
import authRoute from "./routes/auth.route";
import userRoute from "./routes/user.route";
import { errorHandler } from "./middlewares/error.handler";

dotenvx.config();

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(
  cors({
    origin: config.client.URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

connectDB();

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/pvt", userRoute);

app.use(errorHandler);

app.listen(config.server.PORT, () => {
  console.log(
    chalk.yellowBright.bold(
      `\n\t-------------------------------------------------------`
    )
  );
  console.log(
    chalk.yellowBright.bold(
      `\t|                                                     |`
    )
  );
  console.log(
    chalk.yellowBright.bold(
      `\t|        🌐 Server is running on Port =>` +
        chalk.cyanBright.bold(` ${config.server.PORT}`) +
        `         |`
    )
  );
});
