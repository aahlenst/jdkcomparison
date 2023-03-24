#! /usr/bin/env bash
set -Eeuo pipefail

# Linux/macOS compatibility shim, see https://unix.stackexchange.com/a/84980.
TEMP_DIR=$(mktemp -d 2>/dev/null || mktemp -d -t "jdkcomparison")

cleanup() {
	PID=$(lsof -t -i:3000)
	if [ -n "$PID" ]; then
		kill -TERM "$PID"
    fi
}

trap cleanup EXIT SIGHUP SIGINT SIGQUIT SIGABRT

rm -rf .next
npm run build

npm run dev > "$TEMP_DIR/nextjs-dev.txt" 2>&1 &
npm run e2e:headless
cleanup

npx next build
npm run start > "$TEMP_DIR/nextjs-prod.txt" 2>&1 &
npm run acceptance
cleanup
