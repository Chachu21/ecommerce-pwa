const CACHE_NAME = "shopeasy-v1"
const urlsToCache = ["/", "/products", "/cart", "/checkout", "/manifest.json", "/icon-192x192.jpg", "/icon-512x512.jpg"]

// Install event - cache resources
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache")
      return cache.addAll(urlsToCache)
    }),
  )
})

// Fetch event - serve from cache when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Return cached version or fetch from network
      if (response) {
        return response
      }
      return fetch(event.request)
    }),
  )
})

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("Deleting old cache:", cacheName)
            return caches.delete(cacheName)
          }
        }),
      )
    }),
  )
})

// Background sync for offline cart updates
self.addEventListener("sync", (event) => {
  if (event.tag === "cart-sync") {
    event.waitUntil(syncCartData())
  }
})

async function syncCartData() {
  // This would sync cart data when back online
  console.log("Syncing cart data...")
}

// Push notifications (for future order updates)
self.addEventListener("push", (event) => {
  const options = {
    body: event.data ? event.data.text() : "New update from ShopEasy!",
    icon: "/icon-192x192.jpg",
    badge: "/icon-192x192.jpg",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1,
    },
    actions: [
      {
        action: "explore",
        title: "View Order",
        icon: "/icon-192x192.jpg",
      },
      {
        action: "close",
        title: "Close",
        icon: "/icon-192x192.jpg",
      },
    ],
  }

  event.waitUntil(self.registration.showNotification("ShopEasy", options))
})

// Handle notification clicks
self.addEventListener("notificationclick", (event) => {
  event.notification.close()

  if (event.action === "explore") {
    event.waitUntil(clients.openWindow("/"))
  }
})
