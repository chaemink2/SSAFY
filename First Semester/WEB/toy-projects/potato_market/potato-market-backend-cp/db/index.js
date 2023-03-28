// async await를 활용 > 모듈 promise 형식으로 return
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  // aws 주소
  host: "potato-market.p-e.kr",
  // db 아이디
  user: "mk",
  // db 비밀번호
  password: "Panda_1247",
  // 스키마
  database: "market_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0

})

module.exports = {pool}
// module.exports = pool 변수로 내보내면 변수로 받는다
