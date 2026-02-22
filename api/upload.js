export default async function handler(req, res) {
  if (req.method === "POST") {
    // 파일 업로드는 아직 처리하지 않고, 성공 메시지만 반환
    res.status(200).json({ message: "업로드 성공! (카카오톡 전송은 나중에 추가)" });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
