"""Fallback generator for the static contact map (public/map-tarnowskie-gory.webp).

The shipped asset is currently a user-provided dark-mode Google Maps screenshot
660x600 (with "© Google" attribution baked in). This script is the license-clean
alternative: it composites CARTO "dark_all" basemap tiles (@2x, 512 px) around
the restaurant location, draws a brand pin at the exact coordinates and bakes
in the required "© OpenStreetMap contributors © CARTO" attribution line. Run it
(overwriting the webp) if the Google-based asset must be replaced.

Usage:
    python scripts/generate-static-map.py [--zoom 17] [--out public/map-tarnowskie-gory.webp] [--preview map.png]

Requires Pillow (pip install pillow).
"""

import argparse
import math
import pathlib
import time
import urllib.request
from io import BytesIO

from PIL import Image, ImageDraw, ImageFont

# Restaurant location — keep in sync with src/data/business.ts (business.geo).
LAT = 50.4435404
LON = 18.8549006

ZOOM = 17
WIDTH = 1200
HEIGHT = 1080
TILE_SIZE = 512  # @2x tiles — same ground coverage as 256 px tiles, double pixels

BRAND_ORANGE = (255, 141, 47)  # #ff8d2f
PIN_DARK = (26, 26, 26)

SUBDOMAINS = ("a", "b", "c", "d")
TILE_URL = "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png"
HEADERS = {
    "User-Agent": "prostokatna-pizza-website static map generator (one-off asset build)"
}
ATTRIBUTION = "© OpenStreetMap contributors © CARTO"
FONT_PATH = "C:/Windows/Fonts/arial.ttf"


def latlon_to_world_pixels(lat: float, lon: float, zoom: int) -> tuple[float, float]:
    """Convert lat/lon to absolute pixel coordinates in the slippy map scheme."""
    n = 2 ** zoom
    xt = (lon + 180.0) / 360.0 * n
    lat_rad = math.radians(lat)
    yt = (1.0 - math.asinh(math.tan(lat_rad)) / math.pi) / 2.0 * n
    return xt * TILE_SIZE, yt * TILE_SIZE


def fetch_tile(zoom: int, x: int, y: int) -> Image.Image:
    subdomain = SUBDOMAINS[(x + y) % len(SUBDOMAINS)]
    url = TILE_URL.format(s=subdomain, z=zoom, x=x, y=y)
    for attempt in range(3):
        try:
            request = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(request, timeout=30) as response:
                return Image.open(BytesIO(response.read())).convert("RGB")
        except urllib.error.URLError:
            if attempt == 2:
                raise
            time.sleep(1.5 * (attempt + 1))
    raise RuntimeError("unreachable")


def compose_tiles(zoom: int) -> Image.Image:
    center_x, center_y = latlon_to_world_pixels(LAT, LON, zoom)
    left = center_x - WIDTH / 2
    top = center_y - HEIGHT / 2

    canvas = Image.new("RGB", (WIDTH, HEIGHT))
    max_tile = 2 ** zoom - 1
    for tx in range(math.floor(left / TILE_SIZE), math.floor((left + WIDTH) / TILE_SIZE) + 1):
        for ty in range(math.floor(top / TILE_SIZE), math.floor((top + HEIGHT) / TILE_SIZE) + 1):
            if not 0 <= ty <= max_tile:
                continue
            tile = fetch_tile(zoom, tx, ty)
            canvas.paste(tile, (round(tx * TILE_SIZE - left), round(ty * TILE_SIZE - top)))
    return canvas


def draw_pin(canvas: Image.Image) -> None:
    """Brand-colored map pin whose tip sits exactly on LAT/LON (image center)."""
    pin = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(pin)

    tip_x, tip_y = WIDTH / 2, HEIGHT / 2
    radius = 42
    head_y = tip_y - 64  # circle center
    base_half = radius * 0.72
    triangle = [
        (tip_x, tip_y),
        (tip_x - base_half, head_y + radius * 0.7),
        (tip_x + base_half, head_y + radius * 0.7),
    ]
    circle_box = [
        (tip_x - radius, head_y - radius),
        (tip_x + radius, head_y + radius),
    ]

    # Soft drop shadow, then the shapes (triangle first so its outline seam
    # with the circle is hidden underneath).
    dx, dy = 3, 5
    draw.polygon([(x + dx, y + dy) for x, y in triangle], fill=(0, 0, 0, 90))
    draw.ellipse(
        [circle_box[0][0] + dx, circle_box[0][1] + dy, circle_box[1][0] + dx, circle_box[1][1] + dy],
        fill=(0, 0, 0, 90),
    )

    draw.polygon(triangle, fill=BRAND_ORANGE, outline=PIN_DARK, width=3)
    draw.ellipse(circle_box, fill=BRAND_ORANGE, outline=PIN_DARK, width=3)
    draw.ellipse(
        [(tip_x - 14, head_y - 14), (tip_x + 14, head_y + 14)],
        fill=(255, 255, 255),
        outline=PIN_DARK,
        width=3,
    )
    canvas.paste(pin, (0, 0), pin)


def draw_attribution(canvas: Image.Image) -> None:
    """Bake the mandatory attribution into the bottom-right corner."""
    font = ImageFont.truetype(FONT_PATH, 22)
    layer = Image.new("RGBA", canvas.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)

    text_box = draw.textbbox((0, 0), ATTRIBUTION, font=font)
    text_w = text_box[2] - text_box[0]
    text_h = text_box[3] - text_box[1]
    pad = 8
    rect = [
        (WIDTH - text_w - 2 * pad - 10, HEIGHT - text_h - 2 * pad - 10),
        (WIDTH - 10, HEIGHT - 10),
    ]
    draw.rounded_rectangle(rect, radius=6, fill=(0, 0, 0, 130))
    draw.text((rect[0][0] + pad, rect[0][1] + pad), ATTRIBUTION, font=font, fill=(255, 255, 255))
    canvas.paste(layer, (0, 0), layer)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--zoom", type=int, default=ZOOM, help="tile zoom level (default: %(default)s)")
    parser.add_argument(
        "--out",
        default="public/map-tarnowskie-gory.webp",
        help="output WebP path (relative to repo root)",
    )
    parser.add_argument("--preview", help="optional PNG preview path for inspection")
    args = parser.parse_args()

    canvas = compose_tiles(args.zoom)
    draw_pin(canvas)
    draw_attribution(canvas)

    out_path = pathlib.Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    canvas.save(out_path, "WEBP", quality=85, method=6)
    print(f"saved {out_path} ({out_path.stat().st_size} bytes, zoom {args.zoom})")

    if args.preview:
        canvas.save(args.preview, "PNG")
        print(f"saved preview {args.preview}")


if __name__ == "__main__":
    main()
