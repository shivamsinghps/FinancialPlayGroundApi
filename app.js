require("dotenv").config();
const helmet = require("helmet");
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const mongoose = require("./src/Middlewares/database");
const apis = require("./src/Endpoints/routes");

const app = express();
mongoose.dbConnect();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());

app.use(express.json());

app.use("/api", apis);


module.exports = app;

// "node-cron": "^3.0.0",
// "stocksocket": "^2.1.2",
// "yahoo-finance": "^0.3.7",
// "yfinance-live": "^0.3.3"
