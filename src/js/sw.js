self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('binoOffline').then(function(cache) {
      return cache.addAll(
        [
          '/bundle.css',
          '/bundle.js',
          '/index.html',
          '/images/Background-mob1.png',
          '/images/Background-mob2.png',
          '/images/Background-mob3.png',
          '/images/Background-mob1.webp',
          '/images/Background-mob2.webp',
          '/images/Background-mob3.webp',
        ]
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});