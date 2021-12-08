import express from "express";
import "express-async-errors";
import { connect } from "./schemas/index.js";
import router from "./router/index.js";
// import cors from "cors";
// import { connectDB } from "./model/database.js";

const port = 3000;
const app = express();

// // cors Authorization 에러 발생 시 사용하는 미들웨어
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//   next();
// });

// var corsOptions = {
//   origin: "http://dfdfdf",
//   optionsSuccessStatus: 200,
// };
// app.use(cors());

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
