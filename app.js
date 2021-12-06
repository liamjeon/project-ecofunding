const express = require("express");
const app = express();
const port = 3000;
const connect = require("./schemas");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

connect();

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
