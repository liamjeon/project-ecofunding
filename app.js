import express from "express";
import "express-async-errors";
import { connect } from "./schemas/index.js";
import router from "./router/index.js";
// import { connectDB } from "./model/database.js";

const port = 3000;
const app = express();

app.use(express.json());
app.use(express.static("uploads"));
app.use("/api", router);

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
