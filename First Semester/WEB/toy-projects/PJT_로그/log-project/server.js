const express = require("express");
//  const 변수 = require("파일 경로")
//  require함수를 통해
//  express로 부터 createApplication 모듈(함수)를 가져와 express 변수에 할당한다.

const app = express();
// 1번라인에서 할당한 함수를 호출하여 app을 만든 후, app이라는 변수에 할당한다.

const PORT = 8080;

const cors = require("cors");
// console.log(require("cors"))
//  require함수를 통해 
//  cors 부터 모듈(함수)를 가져와 cors 변수에 할당한다.
app.use(cors());
// 미들웨어로 cors함수를 사용한다

const morgan = require("morgan");
//  require함수를 통해 
//  morgan 부터 morgan 모듈(함수)를 가져와 morgan 변수에 할당한다.
app.use(morgan("dev"));
// 미들웨어로 morgan 사용한다

app.use(express.json());
// post를 사용할때 필요한 코드, 없으면 클라이언트에서 undefined가 넘어온다.

const { logger } = require("./utils/winston")

app.use(express.static(__dirname + "/views"))

const fs = require("fs")

app.get("/", async (req, res) => {
	res.sendFile("index")
});

const insert = (str, index, target) => {
	const front = str.slice(0, index)
	const back = str.slice(index, str.length)
	return front + target + back
}

let retData = {}
app.post("/api/logs", async (req, res) => {
	//console.log("hi")
	logger.error("에러")
	logger.warn("경고")
	logger.info("정보")
	logger.http("통신")
	logger.debug("디버그")
	
	fs.readFile("./logs/2022-09-02-14.log", "utf-8", (err,data) => {
		retData = data;
		let idx = -1;
		while(1){
			idx = retData.indexOf("}", idx + 1)
			if(idx === -1){
				break;
			}
			retData = insert(retData, idx + 1, ',')
		}
		retData = '[' + retData.slice(0, retData.length-3) + ']';
		retData = JSON.parse(retData)
	})

	res.json({
		success:true
	})
});


app.get('/api/logs', (req,res) => {
	console.log(retData)
	res.json(retData);
})
//get 통신영역(라우터주소, 콜백함수) 순으로 사용되며
// 현재는 "비동기"로, 성공 실패에 따라 json형식으로 클라이언트로 돌려보낸다.

app.listen(PORT, () => console.log(`this server listening on ${PORT}`));
// 서버를 동작시켜놓는 코드(포트번호, 콜백함수) 순으로 사용한다.