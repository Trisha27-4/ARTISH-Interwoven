@echo off
echo Building Digital Portfolio for GitHub Pages...

echo Installing dependencies...
call npm install

echo Building the project...
call npm run build

echo Exporting static files...
call npm run export

echo.
echo ✅ Build complete! 
echo.
echo Next steps:
echo 1. Create a new repository on GitHub named "Digital-Portfolio"
echo 2. Upload all files from this folder to the repository
echo 3. Enable GitHub Pages in repository settings
echo 4. Your portfolio will be available at: https://yourusername.github.io/Digital-Portfolio/
echo.
pause
