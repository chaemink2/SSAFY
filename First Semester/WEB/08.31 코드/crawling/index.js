const express = require("express");
const app = express();
const PORT = 8080;
const cors = require("cors");
const { default: axios } = require("axios");
app.use(cors());
app.listen(PORT, () => (console.log(`서버가 ${PORT}로 켜졌다`)))

const url = "https://comic.naver.com/webtoon/weekdayList?week=mon"


app.get("/", async (req,res) => {
  const reponse = await axios.get(url)
  const html = response.data
})