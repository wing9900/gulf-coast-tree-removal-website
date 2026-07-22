#!/usr/bin/env bash
# Downloads the shortlisted photos from Robert's Squarespace CDN and
# (if cwebp is available) converts them to compressed WebP in /public.
# Edit the map below after the 10-minute visual pass (see IMAGES.md).
set -euo pipefail
CDN="https://images.squarespace-cdn.com/content/v1/686a60df18f03c4699a78049"
OUT="$(dirname "$0")/../public"
mkdir -p "$OUT"

# format: "cdn-folder-uuid/original-filename|target-name-without-extension"
IMAGES=(
  "acc72cf0-380f-400c-a467-4d7a003e7cd4/1000003929.jpg|hazardous-tree-removal-pasadena-tx-hero"
  "1b34b646-47b8-4851-b6e2-b286933e473e/1000006652.jpg|hero-candidate-b"
  "f502fc75-ec34-4834-831a-32f48b7c46ca/1000006281.jpg|hero-candidate-c"
  "9705369e-2ea9-47e3-88c0-649543ab0990/1000002413.png|gulf-coast-tree-removal-logo"
)

for entry in "${IMAGES[@]}"; do
  src="${entry%%|*}"; name="${entry##*|}"; ext="${src##*.}"
  echo "→ $name"
  curl -fsSL "$CDN/$src?format=1500w" -o "$OUT/$name.$ext"
  if command -v cwebp >/dev/null 2>&1 && [ "$ext" != "png" ]; then
    cwebp -q 78 "$OUT/$name.$ext" -o "$OUT/$name.webp" >/dev/null 2>&1 && rm "$OUT/$name.$ext"
  fi
done
echo "Done. Convert any remaining JPGs to WebP (squoosh.app) and keep hero ≤ ~200 KB."
