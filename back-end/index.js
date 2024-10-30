const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.json({ requestData: { username, password } });
});
app.listen(4000);

//mongodb+srv://vanthienpham734:Aa28121998@cluster0.rp80y.mongodb.net/
//Aa28121998
