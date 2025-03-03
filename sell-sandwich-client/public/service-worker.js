const CACHE_NAME = "v3";
const STATIC_ASSETS = [
  "/",
  "/index.html",
  "/styles.css",
  "/main.js",
  "/icon-192x192.png",
  "/icon-512x512.png",
];

// 📌 Instalar el Service Worker y cachear recursos estáticos
self.addEventListener("install", (event) => {
  console.log("Service Worker installing...");
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(STATIC_ASSETS))
  );
});

// 📌 Interceptar solicitudes y servir desde la caché cuando sea posible
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // 🔹 Evita cachear imágenes de /uploads/
  if (url.pathname.startsWith("/uploads/")) {
    console.log("Bypassing cache for:", event.request.url);
    event.respondWith(fetch(event.request)); // Fuerza solicitud al servidor
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return (
        cachedResponse ||
        fetch(event.request)
          .then((networkResponse) => {
            if (!networkResponse || !networkResponse.ok) return networkResponse; // Evita cachear respuestas fallidas
            return caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, networkResponse.clone()); // Cache dinámico
              return networkResponse;
            });
          })
          .catch(() => caches.match("/offline.html")) // Si no hay internet, mostrar página offline
      );
    })
  );
});

// 📌 Limpiar cachés antiguas al activar una nueva versión
self.addEventListener("activate", (event) => {
  console.log("Service Worker activated...");
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
});
