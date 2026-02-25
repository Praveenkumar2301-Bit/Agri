@echo off
title Flamora Agri - Agriculture Marketplace
cd /d "%~dp0"

echo ========================================
echo   Flamora Agri - Starting...
echo ========================================
echo.

:: Check Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH.
    echo Please install Node.js from https://nodejs.org
    pause
    exit /b 1
)

:: Check if node_modules exists in apps/web (first-time setup)
if not exist "apps\web\node_modules" (
    echo Installing dependencies (first run may take a few minutes)...
    call npm run install:all
    if %errorlevel% neq 0 (
        echo ERROR: Failed to install dependencies.
        pause
        exit /b 1
    )
    echo.
)

echo Starting servers (check the "Servers" window for progress)...
echo.
start "Flamora Agri - Servers" cmd /k "npm run dev"

echo Waiting for servers to start (about 30 seconds)...
echo Please wait - Next.js compiles on first run...
timeout /t 30 /nobreak > nul

echo Opening Flamora Agri in your browser...
start "" "http://localhost:3000"

:: Give browser a moment, then offer to retry
timeout /t 3 /nobreak > nul
echo.
echo If the browser did not open, press any key to try again.
echo Or manually open: http://localhost:3000
echo.
pause
start "" "http://localhost:3000"

echo.
echo ========================================
echo   Flamora Agri
echo   Site: http://localhost:3000
echo   API:  http://localhost:3001/api/v1
echo.
echo   Keep the "Servers" window open.
echo   Close it when you want to stop.
echo ========================================
pause
