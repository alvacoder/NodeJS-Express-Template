import mongoose from "mongoose";
import chalk from "chalk";
import config from "./index";

async function initializeDb() {
  const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 5000,
  };

  try {
    await mongoose.connect(config.dbUri, options);
    console.log(
      `${chalk.blue(
        `Connected to database...`
      )}`
    );
  } catch (error) {
    `${chalk.red(
      "Could not connect to database...", error
    )}`;
  }
}

export default initializeDb;
