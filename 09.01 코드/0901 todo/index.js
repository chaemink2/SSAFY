// require("express")
// 함수("매개변수") [Function: createApplication] 애플리케이션, 즉 앱을 만드는 함수
const express = require("express")
const app = express()

const { pool } = require("./db")


app.listen(8080, () => { console.log("서버가 동작하고 있습니다")})
// app.listen(첫번째 매개변수 :포트번호, 실행시킬 콜백함수)

app.use(express.static(__dirname + "/views"))

// post(요청을 할때는)
app.use(express.json())

app.get("/", (req, res) => {
    res.render("index")
    // 서버 사이드 렌더링
})

// app.get("라우터 경로", "실행할 콜백함수")
app.get("/todos", async (request, response) => {
    // pool.query("쿼리문")
    try {
        const data = await pool.query("select * from todos")
        return response.json(data[0])
        
    } catch (error) {
        return res.json({
            success: false,
            message: "에러가 발생하였습니다"
        })
    }
})

// app.post("라우터 경로", "콜백함수")
app.post("/todo", async (req, res) => {

    const { todo } = req.body
    const { completed } = req.body

    try {
        // console.log(await pool.query(`insert into todos (todo,completed) values (?,?)`, [req.body.todo, req.body.completed]))
        if (todo && completed) {
            await pool.query(`insert into todos (todo,completed) values ("${todo}", "${completed}")`)            
                return res.json({
                    success: true,
                    message: "할일 등록에 성공하였습니다."
                })
        }

        if (todo) {
            return res.json({
                success: false,
                message: "할일 등록에 실패하였습니다. 완료상태를 입력하세요"
            })
        }

    } catch (error) {
        return res.json({
            success: false,
            message: "할일 추가에 에러가 발생하였습니다"
        })
    }
})

app.get("/todo/:id", async (request, response) => {
    const { id }  = request.params
    try {
        const data = await pool.query(`select * from todos where id = ${id}`)
        return response.json(data[0])
        
    } catch (error) {
        return res.json({
            success: false,
            message: "에러가 발생하였습니다"
        })
    }
})






