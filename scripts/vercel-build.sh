#!/bin/bash
set -e

ROOTDIR="$(pwd)"
echo "Starting Vercel build from: $ROOTDIR"

cd "$ROOTDIR/artifacts/nesda-presentation"
echo "Building presentation..."
BASE_PATH=/ PORT=3000 pnpm run build

cd "$ROOTDIR"
echo "Copying build output..."
rm -rf public
mkdir -p public
cp -r artifacts/nesda-presentation/dist/public/* public/

echo "Build complete. Contents of public/:"
ls -la public/
