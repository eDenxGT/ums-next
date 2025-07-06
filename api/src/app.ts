import "reflect-metadata";
import express from "express";
import dotenvx from "@dotenvx/dotenvx";
import chalk from "chalk";
import cors from "cors";

import "./container/resolver";
import { config } from "./shared/config";
import { connectDB } from "./shared/db";
import authRoute from "./routes/auth.route";
import userRoute from "./routes/user.route";

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
