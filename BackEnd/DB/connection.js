const mysql = require("mysql");
const util = require("util");

const databaseConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "med",
});

// add database query runner method to be always promisified and use async/await with it
databaseConnection.query = util.promisify(databaseConnection.query);

module.exports = databaseConnection;
