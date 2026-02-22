@echo off
echo ===== Git index.lock 제거 스크립트 =====

set REPO_PATH=C:\Users\byurl\Desktop\voience\.git
set LOCK_FILE=%REPO_PATH%\index.lock

if exist "%LOCK_FILE%" (
    echo index.lock 파일을 발견했습니다. 삭제합니다...
    del "%LOCK_FILE%"
    echo 삭제 완료!
) else (
    echo index.lock 파일이 존재하지 않습니다.
)

pause
