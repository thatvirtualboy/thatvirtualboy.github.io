"""Read thatvirtualboy's public Shorts playlist feed and cache its newest entries."""

from datetime import datetime, timezone
import json
from pathlib import Path
import re
import sys
import xml.etree.ElementTree as ET


CHANNEL = "UCZZp0nggS2twDjqkffD3QqA"
PLAYLIST = "UUSHZZp0nggS2twDjqkffD3QqA"
NS = {"a": "http://www.w3.org/2005/Atom", "yt": "http://www.youtube.com/xml/schemas/2015"}
CACHE = Path(__file__).resolve().parents[2] / "_data/youtube_shorts.json"


def latest_shorts(xml):
    feed = ET.fromstring(xml)
    if (feed.findtext("yt:channelId", namespaces=NS) != CHANNEL
            or feed.findtext("yt:playlistId", namespaces=NS) != PLAYLIST):
        raise ValueError("Unexpected YouTube channel or playlist")

    videos = {}
    for entry in feed.findall("a:entry", NS):
        video_id = entry.findtext("yt:videoId", "", NS)
        title = entry.findtext("a:title", "", NS).strip()
        if (not re.fullmatch(r"[A-Za-z0-9_-]{11}", video_id) or not title
                or entry.findtext("yt:channelId", namespaces=NS) != CHANNEL):
            raise ValueError("Incomplete or unexpected YouTube entry")
        published = datetime.fromisoformat(entry.findtext("a:published", "", NS).replace("Z", "+00:00"))
        if published.tzinfo is None:
            raise ValueError("Missing time zone in publication date")
        # Keep the display title readable when uploaders append discovery hashtags.
        title = re.sub(r"(?:\s+#[\w]+)+$", "", title).strip() or title
        videos[video_id] = {"id": video_id, "title": title, "published": published.astimezone(timezone.utc).isoformat()}

    if not videos:
        raise ValueError("Empty Shorts feed; keeping the previous selection")
    return sorted(videos.values(), key=lambda video: video["published"], reverse=True)[:3]


if __name__ == "__main__":
    data = json.dumps(latest_shorts(sys.stdin.buffer.read()), indent=2, ensure_ascii=False) + "\n"
    if not CACHE.exists() or CACHE.read_text(encoding="utf-8") != data:
        temp = CACHE.with_suffix(".json.tmp")
        temp.write_text(data, encoding="utf-8")
        temp.replace(CACHE)
