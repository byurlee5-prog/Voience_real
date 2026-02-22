// 필요한 모듈 불러오기
const express = require("express");
const multer = require("multer");
const axios = require("axios");
const path = require("path");

const app = express();
const upload = multer({ dest: "uploads/" });

// 📌 index.html을 루트에서 보여주기
app.use(express.static(path.join(__dirname)));

// 업로드 처리 라우트
app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    // 카카오톡 API 호출 (지금은 테스트용으로만 응답)
    // 실제 카카오톡 전송은 나중에 붙일 예정
    res.send("업로드 성공! (카카오톡 전송 로직은 나중에 추가)");
  } catch (err) {
    res.status(500).send("업로드 실패: " + err.message);
  }
});

// 서버 실행
app.listen(3000, () => console.log("Server running on port 3000"));
