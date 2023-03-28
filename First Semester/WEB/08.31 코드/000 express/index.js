const express = require("express");
const app = express();
const PORT = 8080;

const cors = require("cors");
app.use(cors());

app.get("/", (req,res) => {
  return res.sendFile(__dirname + "/views/index.html")
});

app.get("/logout", (req,res) => {
  return res.sendfile(__dirname + "/views/logout.html")
});

app.get("/whoareu", (req,res) => {
  return res.sendfile(__dirname + "/views/whoareu.html")
});

const infos = [
  {
    name : "재현이형",
    company : "삼성전자"
  },{
    name : "문권이형",
    company : "현대모비스",
  },{
    name : "의권이형",
    company : "하이닉스",
  }
]

app.get("/infos", (req, res) => {
  return res.json(infos);
})
app.get("/infos/names", (req, res) => {
  let array = infos.map((infos) => {
    return infos.name;
  })
  return res.json(array);
})
app.get("/infos/companies", (req, res) => {
  let array = infos.map((infos) => {
    return infos.company;
  })
  return res.json(array);
})

app.listen(PORT, () => console.log(`이 서버는 ${PORT}로 켜졌습니다.`));