@echo off
title Bravo Medicina Estetica - Next Dev
cd /d "%~dp0"
"C:\Program Files\nodejs\npm.cmd" run dev -- -H 0.0.0.0 -p 3000
pause
