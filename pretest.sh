#! /usr/bin/env bash
set -Eeuo pipefail

# Linux/macOS compatibility shim, see https://unix.stackexchange.com/a/84980.
TEMP_DIR=$(mktemp -d 2>/dev/null || mktemp -d -t "jdkcomparison")
PID=

cleanup() {
	if [ -n "$PID" ]; then
		kill -TERM "$PID"
    fi
	exit
}

trap cleanup EXIT SIGHUP SIGINT SIGQUIT SIGABRT

rm -rf .next
npm run build

npm run dev > "$TEMP_DIR/nextjs-dev.txt" 2>&1 &
PID=$!
npm run e2e:headless
