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
rm -rf .next .vercel .wrangler

# Check
find . -name node_modules -prune -o -type f -name "*.sh" -exec shellcheck {} \;
npx prettier --check .
npm run lint

# Test
npm run jest
npm run dev > /dev/null 2>&1 &
SERVER_PID=$!
npm run e2e
cleanup

npx @cloudflare/next-on-pages
npx wrangler pages dev --port 3000 .vercel/output/static --compatibility-flag=nodejs_compat > /dev/null 2>&1 &
SERVER_PID=$!
npm run acceptance
cleanup
