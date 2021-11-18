import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import fileUpload from "express-fileupload";
import morgan from "morgan";
import bodyParser from "body-parser";

import config from "./config";
import v1Router from "./routes/index.js";

const app = new express();

app.use("/v1", v1Router);

app.get("/", (req, res) => {
  res.send({
    status: 200,
    message: "Welcome to MyXalary Recruitment Service v1.0",
  });
});

app.use(function (req, res, next) {
  res
    .status(404)
    .send({ statusCode: 404, message: "Invalid resource URL", payload: [] });
  next();
});

export default app;
