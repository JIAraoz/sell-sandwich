const STATIC_CACHE = "static-v4";
const DYNAMIC_CACHE = "dynamic-v4";
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
    caches.open(STATIC_CACHE).then((cache) => cache.addAll(STATIC_ASSETS))
  );
  self.skipWaiting(); // Fuerza la activación inmediata
});

// 📌 Activar SW y eliminar cachés antiguas
self.addEventListener("activate", (event) => {
  console.log("Service Worker activated...");
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cache) => {
          if (![STATIC_CACHE, DYNAMIC_CACHE].includes(cache)) {
            console.log("Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      )
    )
  );
  self.clients.claim(); // Toma el control de las pestañas abiertas
});

// 📌 Interceptar solicitudes y servir desde la caché cuando sea posible
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // 🔹 Evita cachear peticiones `POST`, `PUT`, `DELETE`
  if (event.request.method !== "GET") {
    console.log("Skipping cache for:", event.request.url);
    return;
  }

  // 🔹 Evita cachear imágenes de /uploads/
  if (url.pathname.startsWith("/uploads/")) {
    console.log("Bypassing cache for:", event.request.url);
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse; // Devuelve desde la caché si existe
      }
      return fetch(event.request)
        .then((networkResponse) => {
          if (!networkResponse || !networkResponse.ok) return networkResponse; // Evita cachear respuestas fallidas

          return caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(event.request, networkResponse.clone()); // Almacena en caché dinámica
            return networkResponse;
          });
        })
        .catch(() => caches.match("/offline.html")); // Página offline si no hay internet
    })
  );
});

// 📌 Forzar la actualización del Service Worker desde el frontend
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/service-worker.js").then((registration) => {
    registration.onupdatefound = () => {
      const newWorker = registration.installing;
      newWorker.onstatechange = () => {
        if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
          console.log("Nueva versión disponible. Recargando...");
          window.location.reload();
        }
      };
    };
  });
}
