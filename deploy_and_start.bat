@echo off
cd /d C:\Users\byurh\Desktop\voience
echo 코드 변경사항을 GitHub에 반영합니다...
git add .
git commit -m "update site"
git push origin main
echo Vercel이 자동으로 배포를 시작합니다.
pause
