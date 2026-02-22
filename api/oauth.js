import axios from "axios";

export default async function handler(req, res) {
  const { code } = req.query;
  try {
    const response = await axios.post("https://kauth.kakao.com/oauth/token", null, {
      params: {
        grant_type: "authorization_code",
        client_id: process.env.KAKAO_REST_API_KEY,
        redirect_uri: "https://voience-real.vercel.app/api/oauth",
        code
      }
    });
    const { access_token } = response.data;
    // 환경변수에 저장하거나 바로 응답
    res.status(200).json({ token: access_token });
  } catch (error) {
    res.status(500).json({ error: "토큰 발급 실패", details: error.message });
  }
}
