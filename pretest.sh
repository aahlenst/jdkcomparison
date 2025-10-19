#! /usr/bin/env bash
set -Eeuo pipefail

SERVER_PID=

cleanup() {
	if [ -n "$SERVER_PID" ] && ps -p "$SERVER_PID" > /dev/null ; then
    	kill -TERM "$SERVER_PID"
    fi
}

trap cleanup EXIT

# Remove build output from previous runs.
rm -rf out

# Check
find . -name node_modules -prune -o -type f -name "*.sh" -exec shellcheck {} \;
npx prettier --check .
npm run lint

# Test
npm run jest

# Run E2E tests
DATA_SOURCE=testdata npm run build
npx http-server -p 3000 out > /dev/null 2>&1 &
SERVER_PID=$!
npm run e2e
cleanup

# Run acceptance tests
npm run build
npx http-server -p 3000 out > /dev/null 2>&1 &
SERVER_PID=$!
npm run acceptance
cleanup
