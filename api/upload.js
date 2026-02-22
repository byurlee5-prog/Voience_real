import multer from "multer";
import fs from "fs";
import axios from "axios";

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({ dest: "/tmp" });

export default function handler(req, res) {
  upload.single("file")(req, res, async (err) => {
    if (err) return res.status(500).send("업로드 실패");

    try {
      const ACCESS_TOKEN = process.env.KAKAO_ACCESS_TOKEN;
      const filePath = req.file.path;

      await axios.post("https://kapi.kakao.com/v2/api/talk/memo/media/upload", {
        file: fs.createReadStream(filePath)
      }, {
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }
      });

      res.status(200).send("카카오톡으로 파일 전송 완료!");
    } catch (error) {
      res.status(500).send("전송 실패");
    }
  });
}
