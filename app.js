import express from "express";
import { connect } from "./schemas/index.js";
import router from "./router/index.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", router);

connect();

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
