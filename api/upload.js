export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ message: "업로드 성공!" });
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
