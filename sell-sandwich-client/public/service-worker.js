self.addEventListener('install', (event) => {
    console.log('Service Worker installing...');
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/styles.css',
          '/main.js',
          '/icon-192x192.png',
          '/icon-512x512.png',
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    console.log('Service Worker fetching...');
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
  });
  
  self.addEventListener('activate', (event) => {
    console.log('Service Worker activated...');
  });
  