const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const stocks = new Schema(
  {
    stockV: {
      type: Number,
      default: 1,
    },
    quotes: {},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("stocks", stocks);
