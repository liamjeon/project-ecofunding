import express from "express";
import "express-async-errors";
import { connect } from "./schemas/index.js";
import router from "./router/index.js";
// import { connectDB } from "./model/database.js";

import cors from "cors";

const port = 3000;
const app = express();

// const corsOptions = {
//     origin: "",
//     optionsSuccessStatus: 200,
//   };

app.use(cors());

app.use(express.json());

app.use("/api", router);
app.use(express.static("uploads"));

import swaggerUi from "swagger-ui-express";

// import swaggerFile from "./swagger-output.json";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const swaggerFile = require("./configuration/swagger-output.json");

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

connect();
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
