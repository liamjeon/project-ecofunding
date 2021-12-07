import express from "express";
import connect from "./schemas/index.js";
import user from "./router/user.js";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

connect();

app.use("/api", [user]);

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
