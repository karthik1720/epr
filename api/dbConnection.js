import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();
var connection = mysql.createConnection({
  host: process.env.mysqlHOST,
  user: process.env.dbusername,
  password: process.env.dbpass,
  database: process.env.db,
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

export default connection;
