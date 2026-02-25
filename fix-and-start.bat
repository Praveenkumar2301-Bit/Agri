@echo off
title Flamora Agri - Fix and Start
cd /d "%~dp0"

echo ========================================
echo   Flamora Agri - Fix and Start
echo ========================================
echo.
echo This will reinstall dependencies and start the site.
echo Use this if the regular start fails.
echo.

where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed.
    pause
    exit /b 1
)

echo Step 1: Stopping any running Node.js processes...
taskkill /F /IM node.exe >nul 2>nul
if %errorlevel% equ 0 (
    echo       Closed Node processes. Waiting 3 seconds...
    timeout /t 3 /nobreak > nul
) else (
    echo       No Node processes running.
)

echo Step 2: Cleaning apps\web...
if exist "apps\web\node_modules" (
    rmdir /s /q "apps\web\node_modules"
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: Could not delete node_modules. Access denied.
        echo.
        echo Please:
        echo   1. Close ALL terminals and Cursor/VS Code
        echo   2. Close the "Flamora Agri - Servers" window if open
        echo   3. Run this batch file again
        echo.
        echo Or manually delete: apps\web\node_modules
        echo Then run: start-flamora-agri.bat
        echo.
        pause
        exit /b 1
    )
)
if exist "apps\web\package-lock.json" (
    del "apps\web\package-lock.json"
)

echo Step 3: Reinstalling web dependencies...
cd apps\web
call npm install
cd ..\..
if %errorlevel% neq 0 (
    echo ERROR: npm install failed.
    pause
    exit /b 1
)

echo.
echo Step 4: Starting servers...
start "Flamora Agri - Servers" cmd /k "npm run dev"

echo Waiting 25 seconds for servers to start...
timeout /t 25 /nobreak > nul

echo Opening browser...
start "" "http://localhost:3000"

echo.
echo Done! Site: http://localhost:3000
echo Keep the Servers window open.
pause
