#!/bin/bash
set -e

ROOTDIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "Root dir: $ROOTDIR"
ls -la "$ROOTDIR"

cd "$ROOTDIR/artifacts/nesda-presentation"
BASE_PATH=/ PORT=3000 pnpm run build

cd "$ROOTDIR"
rm -rf public
mkdir -p public
cp -r artifacts/nesda-presentation/dist/public/* public/

echo "Build complete. Output copied to public/"
ls -la public/
