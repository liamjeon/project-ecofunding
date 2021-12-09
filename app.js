import express from "express";
import "express-async-errors";
import { connect } from "./schemas/index.js";
import router from "./router/index.js";
import swaggerUi from "swagger-ui-express";

import { createRequire } from "module";
import { sequelize } from "./schemas/database.js";

const port = 3000;
const app = express();
const require = createRequire(import.meta.url);
const swaggerFile = require("./configuration/swagger-output.json");

app.use(express.json());
app.use(express.static("uploads"));
app.use("/api", router);
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use((req, res, next) => {
  res.sendStatus(404);
});
app.use((error, req, res, next) => {
  console.error(error);
  res.sendStatus(500);
});

connect(); //mongoose 연결
sequelize.sync().then((client) => {
  // console.log(client);
}); //database 연결 모델과 스키마 및 db table 만들어주는 놈
app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
