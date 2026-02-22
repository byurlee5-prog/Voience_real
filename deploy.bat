@echo off
cd /d C:\Users\byurl\Desktop\voience

echo ====== GitHub에 변경사항 반영 시작 ======
git add .
git commit -m "auto deploy update"
git push origin main

echo ====== Vercel 자동 배포 시작 ======
echo GitHub에 push 완료 → Vercel이 자동으로 새 배포를 생성합니다.
echo 잠시 후 Vercel 대시보드에서 상태가 Ready로 바뀌는지 확인하세요.

pause
