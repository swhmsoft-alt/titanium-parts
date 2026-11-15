@echo off
REM Deterministic command runner (Windows wrapper).
REM
REM Usage: run.cmd <label> -- <cmd> [args...]
REM
REM The result is written to tmp\qa\<label>.status and tmp\qa\<label>.log.
REM Read those files instead of trusting the exit code returned by the shell.

node "%~dp0run.mjs" %*
exit /b %ERRORLEVEL%
