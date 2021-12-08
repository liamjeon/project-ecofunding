import express from "express";
import "express-async-errors";
import { connect } from "./schemas/index.js";
import router from "./router/index.js";
// import { connectDB } from "./model/database.js";

const app = express();
const port = 3000;

app.use(express.json());

app.use("/api", router);

import swaggerUi from "swagger-ui-express";

// import swaggerFile from "./swagger-output.json";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const swaggerFile = require("./swagger-output.json");

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
