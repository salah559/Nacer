#!/bin/bash
set -e

# Build the presentation from its directory
cd artifacts/nesda-presentation
BASE_PATH=/ PORT=3000 pnpm run build

# Go back to root and copy output
cd ../..
rm -rf public
mkdir -p public
cp -r artifacts/nesda-presentation/dist/public/* public/

echo "Build complete. Output copied to public/"
