import multer from "multer";
import nextConnect from "next-connect";
import axios from "axios";

const upload = multer({ dest: "/tmp" });

const apiRoute = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `에러 발생: ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.use(upload.single("file"));

apiRoute.post(async (req, res) => {
  try {
    // 카카오톡 API 호출 (환경변수 필요)
    await axios.post("https://kapi.kakao.com/v2/api/talk/memo/default/send", {
      object_type: "text",
      text: "새 음성 파일이 업로드되었습니다!",
      link: { web_url: "https://voience-real.vercel.app" }
    }, {
      headers: { Authorization: `Bearer ${process.env.KAKAO_ACCESS_TOKEN}` }
    });

    res.status(200).json({ message: "카카오톡으로 전송 완료!" });
  } catch (err) {
    res.status(500).json({ error: "카카오톡 전송 실패: " + err.message });
  }
});

export default apiRoute;
