
self.addEventListener('install', e => {
  e.waitUntil(caches.open('tts-cal-v1').then(c => c.addAll([
    './','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./events.csv','./rosters.json'
  ])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
