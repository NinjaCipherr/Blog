const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.json("test 1");
});
app.listen(4000);
