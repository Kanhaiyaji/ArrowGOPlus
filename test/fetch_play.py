import urllib.request
import re
import html
import sys

sys.stdout.reconfigure(encoding='utf-8')

url = 'https://play.google.com/store/apps/details?id=com.arrowpuzzle.arrowgo&hl=en'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

try:
    req = urllib.request.Request(url, headers=headers)
    with urllib.request.urlopen(req) as resp:
        content = resp.read().decode('utf-8', errors='ignore')
        
        # Title
        t = re.search(r'<title>(.*?)</title>', content)
        print('=== TITLE ===')
        print(t.group(1) if t else 'N/A')
        
        # Screenshots
        imgs = re.findall(r'<img[^>]+src=["\'](https://play-lh\.googleusercontent\.com/[^"\']+)["\']', content)
        print('=== SCREENSHOT IMAGES FOUND ===')
        for img in set(imgs):
            print(img)
        
        # Full description text
        print('\n=== TEXT SNIPPETS ===')
        matches = re.findall(r'data-g-id="description">([\s\S]*?)</div>', content)
        if matches:
            for match in matches:
                clean = re.sub(r'<[^>]+>', '\n', match)
                print(html.unescape(clean))
        else:
            about = re.findall(r'<div[^>]*class="[^"]*bARER[^"]*"[^>]*>([\s\S]*?)</div>', content)
            for a in about:
                print(html.unescape(re.sub(r'<[^>]+>', '\n', a)))

except Exception as e:
    print('ERROR:', e)
