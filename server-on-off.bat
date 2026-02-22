@echo off
cd /d C:\Users\byurl\Desktop\voience

echo 서버 실행 중...
start cmd /k "node server.js"

echo ngrok 실행 중...
start cmd /k "ngrok http 3000"

timeout /t 5 >nul
echo ngrok 웹 인터페이스 열기...
start http://127.0.0.1:4040
