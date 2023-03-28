const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors")
app.use(cors())

const { pool } = require("./db");

app.get("/api/drinks/1", async (req,res) =>{

  try{
    const data = await pool.query("SELECT * FROM menus where menu_id = 1");
    if (data[0]){
      return res.json(data[0]);
    }
  }catch (error) {
    return res.json(error);
  }
})

app.listen(PORT, () => console.log(`이 서버는 ${PORT}로 켜졌습니다.`));
