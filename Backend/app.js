const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

app.use(cors());

//CORS POLICY - Connect from diferent APIs
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use((req, res) => {
  res.json({ message: "Your request was successful!" });
});

module.exports = app;
