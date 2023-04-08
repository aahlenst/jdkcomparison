#! /usr/bin/env bash
set -Eeuo pipefail

# Linux/macOS compatibility shim, see https://unix.stackexchange.com/a/84980.
TEMP_DIR=$(mktemp -d 2>/dev/null || mktemp -d -t "jdkcomparison")
WRANGLER_PID=

cleanup() {
	if [ -n "$WRANGLER_PID" ] && ps -p "$WRANGLER_PID" > /dev/null ; then
    	kill -TERM "$WRANGLER_PID"
    fi

	# xargs handles 0..n running processes correctly.
	lsof -t -i:3000 -sTCP:LISTEN | xargs -r kill -TERM
}

trap cleanup EXIT

# Remove build output from previous runs.
rm -rf .next .vercel

# Check
find . -name node_modules -prune -o -type f -name "*.sh" -exec shellcheck {} \;
npm run lint

# Test
npm run jest
npm run component:headless
npm run dev > "$TEMP_DIR/nextjs-dev.txt" 2>&1 &
npm run e2e:headless
cleanup

npx @cloudflare/next-on-pages --experimental-minify
npx wrangler pages dev --port 3000 .vercel/output/static > "$TEMP_DIR/wrangler.txt" 2>&1 &
WRANGLER_PID=$!
npm run acceptance
cleanup
