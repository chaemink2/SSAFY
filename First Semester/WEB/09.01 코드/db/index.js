const pool = require("mysql2/promise").createPool({
    // 여러분의 aws ip
    host: "13.209.99.93",
    // user id
    user: "ssafy",
    // password
    password: "ssafy_8_A",
    // db명
    database: "jony",
    // 
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
})

module.exports = { pool }