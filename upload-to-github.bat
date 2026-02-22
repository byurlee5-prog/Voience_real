@echo off
cd /d C:\Users\mbvur1\Desktop\voience

:: Git 초기화
git init

:: 모든 파일 추가
git add .

:: 첫 커밋 생성
git commit -m "첫 업로드"

:: 브랜치 이름을 main으로 변경
git branch -M main

:: 원격 저장소 연결 (주소는 본인 GitHub 저장소 주소로 바꿔야 함)
git remote add origin https://github.com/byurlee5-prog/Voience.git

:: GitHub에 업로드
git push -u origin main

pause
