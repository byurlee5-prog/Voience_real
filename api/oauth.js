import axios from "axios";

export default async function handler(req, res) {
  try {
    const response = await axios.post("https://kauth.kakao.com/oauth/token", null, {
      params: {
        grant_type: "authorization_code",
        client_id: "6b491be07b2f726ae639cb5db73dc223", // REST API 키
        redirect_uri: "https://voience-real.vercel.app/api/oauth", // Redirect URI
        code: "Ze2sONdnq7KPJ07EcN3FHugAddqDZCdtUJUzpOBJBdk5BZLkNCJfWAAAAAQKDSBaAAABnIUMI1Qq3eF1vjqPRg" // 인증 코드
      }
    });
    const { access_token } = response.data;
    res.status(200).json({ token: access_token });
  } catch (error) {
    res.status(500).json({ error: "토큰 발급 실패", details: error.message });
  }
}
