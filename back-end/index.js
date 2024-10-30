const express = require("express");
const cors = require("cors");
const app = express();

const User = require("./entity/User");
const mongoose = require("mongoose");
app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://vanthienpham734:Aa28121998@cluster0.rp80y.mongodb.net/"
);
app.post("/register", (req, res) => {
  const { username, password } = req.body;
  User.create();
  res.json({ requestData: { username, password } });
});
app.listen(4000);

//mongodb+srv://vanthienpham734:Aa28121998@cluster0.rp80y.mongodb.net/
//Aa28121998
