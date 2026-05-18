#!/usr/bin/env python3
"""Migrate blog data from Estonia (et/ru/en) to Greece (el/en)."""
from __future__ import annotations

import json
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
BLOG = ROOT / "src" / "data" / "blog"

GEO_REPLACEMENTS = [
    ("PopArt.ee", "ArtCanvas.gr"),
    ("popart.ee", "artcanvas.gr"),
    ("www.popart.ee", "www.artcanvas.gr"),
    ("Estonia", "Greece"),
    ("estonia", "greece"),
    ("Estonian", "Greek"),
    ("Tallinn", "Athens"),
    ("tallinn", "athens"),
    ("local-estonia", "local-greece"),
    ("across Estonia", "across Greece"),
    ("in Estonia", "in Greece"),
    ("for Estonia", "for Greece"),
    ("from Estonia", "from Greece"),
    ("to Estonia", "to Greece"),
    ("all of Estonia", "all of Greece"),
    ("EE", "GR"),
]

import sys

sys.path.insert(0, str(Path(__file__).parent))
from greece_el_articles import GREEK_ARTICLES


def apply_geo(text: str) -> str:
    for old, new in GEO_REPLACEMENTS:
        text = text.replace(old, new)
    return text


def migrate_object(data: dict, locale_prefix: str) -> dict:
    raw = json.dumps(data, ensure_ascii=False)
    raw = apply_geo(raw)
    data = json.loads(raw)
    if data.get("category") == "local-estonia":
        data["category"] = "local-greece"
    if "author" in data and isinstance(data["author"], dict):
        data["author"]["name"] = "ArtCanvas.gr"
        if data["author"].get("url"):
            data["author"]["url"] = "https://www.artcanvas.gr"
    if "internalLinks" in data:
        for link in data["internalLinks"]:
            if link.get("href", "").startswith("/en/blog"):
                link["href"] = link["href"].replace("/en/blog", f"/{locale_prefix}/blog")
            elif link.get("href", "").startswith("/et/blog"):
                link["href"] = link["href"].replace("/et/blog", f"/{locale_prefix}/blog")
            elif link.get("href", "").startswith("/ru/blog"):
                link["href"] = link["href"].replace("/ru/blog", f"/{locale_prefix}/blog")
    if "bodyHtml" in data:
        data["bodyHtml"] = data["bodyHtml"].replace("'/en/blog/", f"'/{locale_prefix}/blog/")
        data["bodyHtml"] = data["bodyHtml"].replace('"/en/blog/', f'"/{locale_prefix}/blog/')
    return data


def main() -> None:
    en_dir = BLOG / "en"
    el_dir = BLOG / "el"

    for loc in ("et", "ru"):
        loc_dir = BLOG / loc
        if loc_dir.exists():
            shutil.rmtree(loc_dir)
            print(f"Removed {loc_dir}")

    el_dir.mkdir(exist_ok=True)

    for path in sorted(en_dir.glob("*.json")):
        slug = path.stem
        with path.open(encoding="utf-8") as f:
            en_data = json.load(f)

        en_migrated = migrate_object(en_data, "en")
        with path.open("w", encoding="utf-8") as f:
            json.dump(en_migrated, f, ensure_ascii=False, indent=2)
            f.write("\n")

        el_data = migrate_object(json.loads(json.dumps(en_migrated)), "el")
        if slug in GREEK_ARTICLES:
            greek = GREEK_ARTICLES[slug]
            for key in ("title", "description", "bodyHtml", "keywords", "faqs", "internalLinks"):
                if key in greek:
                    el_data[key] = greek[key]

        el_path = el_dir / path.name
        with el_path.open("w", encoding="utf-8") as f:
            json.dump(el_data, f, ensure_ascii=False, indent=2)
            f.write("\n")

        print(f"Migrated {slug}")

    print("Done.")


if __name__ == "__main__":
    main()
