import mongoose from "mongoose";
import chalk from "chalk";
import { config } from "./config";

export const connectDB = async () => {
  try {
    await mongoose.connect(config.database.MONGO_URI);
    
    console.log(
      chalk.yellowBright.bold(
        "\t|              " +
          chalk.greenBright.bold("Connected to MongoDB😊") +
          "                 |"
      )
    );
    console.log(
      chalk.yellowBright.bold(
        `\t|                                                     |`
      )
    );
    console.log(
      chalk.yellowBright.bold(
        `\t-------------------------------------------------------`
      )
    );

    mongoose.connection.on("error", (error) => {
      const errorMessage = chalk.redBright.bold(
        "MongoDB connection error: " + error
      );
      console.log(errorMessage);
    });

    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB disconnected");
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw new Error("Database connection failed");
  }
};
