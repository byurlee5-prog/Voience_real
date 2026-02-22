const express = require("express");
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();
const upload = multer({ dest: "uploads/" });

// 정적 파일 제공 (public 폴더 안의 index.html 포함)
app.use(express.static(path.join(__dirname, "public")));

// 카카오 Access Token (로그인 후 발급받아야 함)
const ACCESS_TOKEN = "여기에_본인_카카오_토큰_넣기";

app.post("/upload", upload.single("file"), async (req, res) => {
  try {
    const filePath = req.file.path;

    // 카카오 메시지 API 호출 (나에게 보내기)
    await axios.post("https://kapi.kakao.com/v2/api/talk/memo/media/upload", {
      file: fs.createReadStream(filePath)
    }, {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }
    });

    res.send("카카오톡으로 파일이 전송되었습니다!");
  } catch (err) {
    console.error(err);
    res.status(500).send("전송 실패");
  }
});

app.listen(3000, () => console.log("서버 실행 중"));
