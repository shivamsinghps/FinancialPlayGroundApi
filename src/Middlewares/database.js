const mongoose = require("mongoose");
mongoose.set("debug", true); // remove for production
const dbURI = process.env.DBURI;

const options = {
  useNewUrlParser: true,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  bufferMaxEntries: 0,
  useUnifiedTopology: true,
};

let services = {};
//function to connect database
services.dbConnect = function () {
  const db = mongoose.connect(dbURI, options);
  //   mongoose.set('useFindAndModify', true);
  mongoose.set("debug", true);
  mongoose.set("useFindAndModify", false);

  mongoose.connection.on("connected", function () {
    console.log("db: mongodb is connected!!!");
  });

  mongoose.connection.on("error", function (err) {
    console.log("Error: " + err);
  });

  mongoose.connection.on("disconnecting", function () {
    console.log("db: mongodb is disconnecting!!!");
  });

  mongoose.connection.on("disconnected", function () {
    console.log("db: mongodb is disconnected!!!");
  });

  mongoose.connection.on("reconnected", function () {
    console.log("db: mongodb is reconnected: " + dbURI);
  });

  mongoose.connection.on("timeout", function (e) {
    console.log("db: mongodb timeout " + e);
    // reconnect here
  });

  mongoose.connection.on("close", function () {
    console.log("db: mongodb connection closed");
  });
};

services.disconnect = function () {
  mongoose.connection.close();
};
module.exports = services;
