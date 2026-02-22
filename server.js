const express = require("express");
const multer = require("multer");
const axios = require("axios");
const fs = require("fs");

const app = express();
const upload = multer({ dest: "uploads/" });

app.post("/upload", upload.single("file"), async (req, res) => {
  const filePath = req.file.path;

  // 카카오톡 API 호출
  try {
    await axios.post("https://kapi.kakao.com/v2/api/talk/memo/default/send", {
      object_type: "text",
      text: "새 음성 파일이 업로드되었습니다!",
      link: { web_url: "https://voience-real.vercel.app" }
    }, {
      headers: { Authorization: `Bearer ${process.env.KAKAO_ACCESS_TOKEN}` }
    });

    res.send("카카오톡으로 전송 완료!");
  } catch (err) {
    res.status(500).send("카카오톡 전송 실패: " + err.message);
  }
});

app.listen(3000, () => console.log("Server running on port 3000"));
