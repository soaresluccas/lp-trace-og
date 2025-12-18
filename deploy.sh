#!/usr/bin/env bash

# ------------------------------------------------------------
# Deploy script executed by Composer (post-install-cmd)
# ------------------------------------------------------------
# 1. Install Node dependencies for the front‑end (client folder)
# 2. Build the React/Vite application
# 3. Copy the generated static files to the public_html directory
# ------------------------------------------------------------

set -e

# Define paths (relative to repository root)
CLIENT_DIR="client"
DIST_DIR="$CLIENT_DIR/dist"
PUBLIC_HTML="public_html"

echo "--- Installing Node dependencies in $CLIENT_DIR ---"
cd "$CLIENT_DIR"
# Use npm ci for reproducible installs (requires package-lock.json). If not present, fallback to npm install.
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

echo "--- Building front‑end with Vite ---"
npm run build

echo "--- Copying built assets to $PUBLIC_HTML ---"
# Ensure the target directory exists
mkdir -p "../$PUBLIC_HTML"
# Remove old files (optional, uncomment if you want a clean publish)
# rm -rf "../$PUBLIC_HTML/*"
cp -R "$DIST_DIR"/* "../$PUBLIC_HTML/"

echo "--- Deploy script completed successfully ---"
