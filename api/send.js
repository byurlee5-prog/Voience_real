import formidable from "formidable";
import fs from "fs";
import axios from "axios";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const form = formidable();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: "파일 파싱 실패" });
        return;
      }

      try {
        // 파일 읽기
        const filePath = files.file[0].filepath;
        const fileData = fs.readFileSync(filePath);

        // 카카오톡 API 호출 (예시)
        const response = await axios.post(
          "https://kapi.kakao.com/v2/api/talk/memo/send",
          {
            template_object: {
              object_type: "text",
              text: "새로운 음성 파일이 도착했습니다!",
              link: { web_url: "https://voience-real.vercel.app" }
            }
          },
          {
            headers: { Authorization: `Bearer ${process.env.KAKAO_ACCESS_TOKEN}` }
          }
        );

        res.status(200).json({ message: "카톡 전송 성공", data: response.data });
      } catch (error) {
        res.status(500).json({ error: "카톡 전송 실패", details: error.message });
      }
    });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
