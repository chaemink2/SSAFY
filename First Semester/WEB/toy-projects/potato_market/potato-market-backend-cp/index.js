const express = require('express');
const cors = require('cors');
const mogran = require('morgan');
const { pool } = require("./db");
const multer = require('multer');
// node 내장 모듈
const path = require('path');
const PORT = 8081;

const upload = multer({
  storage: multer.diskStorage({
    // 파일 업로드 위치
    destination: (req, file, done) => {
      done(null, "public/")
    },
    // 파일 저장
    filename: (req, file, done) => {
      console.log(file);

      // 확장자 추출
      const ext = path.extname(file.originalname);
      // 확장자를 제외한 이름 
      const fileNameExeptExt = path.basename(file.originalname, ext);

      // 원본 파일이름 + 날짜 + 확장자
      // Date.now() = 년월일시초
      const saveFileName = fileNameExeptExt + Date.now() + ext;
      done(null, saveFileName)  
    }
  })
})



const app = express();
// cors 셋팅 
app.use(cors());
// http log 
app.use(mogran('dev'));
// body 데이터
app.use(express.json());
// app.use("라우터 경로")

app.use("/public", express.static("public"));

// get = json 가져와라, 보겠다
// "/api/items" = 라우터
app.get("/api/items", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM items");
    return res.json(data[0]);
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: "전체 판매 품목 조회에 실패하였습니다."
    });
  }

});

app.get("/api/items/:id", async (req, res) => {
  try {
    const data = await pool.query("SELECT * FROM items WHERE id = ?", [req.params.id]);
    console.log(data[0]);
    return res.json(data[0][0]);
    // data[0] -> data[0][0] 배열안의 객체에 접근

  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "판매 품목 조회에 실패하였습니다."
    })    
  }
})

// post = 내가 보낸 json 붙여라
// post("라우터 주소", upload , (req, res) )
app.post("/api/items", upload.single('file'),async (req, res) => {
  try {
    // multer에서 정상처리해서 데이터를 넘겨주는 경우 req.file에 담겨서
    const { name, description } = req.body
    const { path } = req.file

    // query = insert into [테이블명] (컬럼명) values (?,?), [] 
    const result = await pool.query('insert into items (name, description, image_src) values(?,?,?)', [name, description, path])
   
    return res.json({
      success: true,
      message:"판매 품목 등록에 성공하였습니다."
    })
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: "판매 품목 등록에 실패하였습니다."
    })
  }
})

app.patch("/api/items/:id", async (req,res) => {
  try {
    const { name, description } = req.body
    const { id } = req.params
    const result = await pool.query("update items set name = ?, description = ? where id = ?", [name, description, id])

    return res.json({
      success: true,
      message: "판매 품목 정보 수정에 성공하였습니다."
    })
  } catch (error) {
    return res.json({
      success: false,
      message: "판매 품목 정보 수정에 실패하였습니다."
    })   
  }
})

app.post("/api/items/:id/image", upload.single('file'), async(req , res) => {
  try{
    const data = await pool.query(`UPDATE items SET image_src= ? where id = ?`,
    [req.file.path, req.params.id]);

    return res.json({
      success: true,
      message: "판매 품목 이미지 수정에 성공하였습니다."
    });
  } catch(error){
    console.log(error);
    return res.json({
      success: false,
      message: "판매 품목 이미지 수정에 실패하였습니다."
    });
  }
})

app.delete("/api/items/:id", async(req,res)=>{
  try{
    const data = await pool.query(`DELETE FROM items WHERE id =?`,
    [req.params.id]);

    return res.json({
      success: true,
      message: "판매 품목 삭제에 성공하였습니다."
    });
  }catch(error){
    console.log(error);
    return res.json({
      success: false,
      message: "판매 품목 삭제에 실패하였습니다."
    });
  }
})

app.get("/api/buyer", async(req,res)=>{
  try{
    const data = await pool.query(`
    SELECT a.id, quantity, request_detail, name, description FROM buyer as a INNER JOIN items as b ON a.items_id = b.id ORDER BY a.id DESC
    `);
    return res.json(data[0]);
  }catch(error){
    console.log(error);
    return res.json({
      success: false,
      message: "전체 판매 품목 조회에 실패하였습니다."
    });
  }
});

app.post("/api/buyer",async(req,res)=>{
  try{
    const data = await pool.query(`INSERT INTO buyer (quantity, request_detail, items_id) VALUES(?,?,?)`,
    [req.body.quantity, req.body.request_detail, req.body.items_id]);

    return res.json({
      success: true,
      message: "구매 신청에 성공하였습니다."
    });
  }catch(error){
    console.log(error);
    return res.json({
      success: false,
      message: "구매 신청에 실패하였습니다."
    });
  }
})

app.delete("/api/buyer/:id", async(req,res)=>{
  try{
    const data = await pool.query(`DELETE FROM buyer WHERE id =?`,
    [req.params.id]);

    return res.json({
      success: true,
      message: "판매 품목 삭제에 성공하였습니다."
    });
  }catch(error){
    console.log(error);
    return res.json({
      success: false,
      message: "판매 품목 삭제에 실패하였습니다."
    });
  }
})






app.listen(PORT, () => console.log(`${PORT} 기동중`));



