const mysql = require("mysql2/promise")

const pool = mysql.createPool({
  host : "13.125.250.23",
  user : "ssafy",
  password : "ssafy_8th_A",
  database : "jony",
  waitForConnections : true,
  connectionLimit : 10,
  queueLimit : 0,
});


module.exports = { pool };