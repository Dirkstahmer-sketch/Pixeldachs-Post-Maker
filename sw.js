
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('pixeldachs-v1').then(cache => cache.addAll([
      './',
      './index.html',
      './manifest.webmanifest',
      './icon.png'
    ]))
  );
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
