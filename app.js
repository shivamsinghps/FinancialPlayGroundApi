require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const path = require("path");

const mongoose = require("./src/Middlewares/database");
const apis = require("./src/Endpoints/routes");

const app = express();
mongoose.dbConnect();
app.use(morgan("dev"));
// app.use(helmet());
app.use(cors());

app.use(express.json());

app.use(express.static(path.join(__dirname, "build")));
// app.use(express.static("public"));

// app.use((req, res, next) => {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.use("/api", apis);

app.use("*", (req, res) => {
    res.sendFile(path.join(__dirname, "build", "index.html"));
  });

module.exports = app;