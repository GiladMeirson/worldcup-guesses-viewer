/* =====================================================================
   Service Worker — מונדיאל 2026 ניחושים
   Strategy:
   - App shell (HTML, JS) → cache-first, update in background
   - Flag images          → cache-first (stale-while-revalidate)
   - API calls            → network-only (always fresh data)
   - Google Fonts CSS     → network-first with cache fallback
===================================================================== */

const CACHE_VERSION = "v1";
const SHELL_CACHE = "shell-" + CACHE_VERSION;
const IMAGES_CACHE = "images-" + CACHE_VERSION;
const FONTS_CACHE = "fonts-" + CACHE_VERSION;

const SHELL_URLS = [
  "./worldcup-guesses-viewer.html",
  "./listofmemebers.js",
  "./manifest.json",
  "./icon.svg",
];

const API_ORIGINS = ["hevre.sport5.co.il"];

/* ── Install: pre-cache the app shell ── */
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(SHELL_CACHE).then((cache) => cache.addAll(SHELL_URLS)),
  );
  self.skipWaiting();
});

/* ── Activate: delete old caches ── */
self.addEventListener("activate", (event) => {
  const keep = [SHELL_CACHE, IMAGES_CACHE, FONTS_CACHE];
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.filter((k) => !keep.includes(k)).map((k) => caches.delete(k)),
        ),
      ),
  );
  self.clients.claim();
});

/* ── Fetch ── */
self.addEventListener("fetch", (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // API calls — always network, never cache
  if (API_ORIGINS.some((o) => url.hostname.includes(o))) {
    event.respondWith(fetch(request));
    return;
  }

  // Flag CDN images — cache-first (images rarely change)
  if (url.hostname === "flagcdn.com") {
    event.respondWith(staleWhileRevalidate(IMAGES_CACHE, request));
    return;
  }

  // Google Fonts CSS — network-first, fall back to cache
  if (
    url.hostname === "fonts.googleapis.com" ||
    url.hostname === "fonts.gstatic.com"
  ) {
    event.respondWith(networkFirst(FONTS_CACHE, request));
    return;
  }

  // App shell — cache-first
  if (SHELL_URLS.some((u) => request.url.endsWith(u.replace("./", "/")))) {
    event.respondWith(cacheFirst(SHELL_CACHE, request));
    return;
  }

  // Everything else — network with cache fallback
  event.respondWith(networkFirst(SHELL_CACHE, request));
});

/* ── Strategy helpers ── */
async function cacheFirst(cacheName, request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  const response = await fetch(request);
  if (response.ok) {
    const cache = await caches.open(cacheName);
    cache.put(request, response.clone());
  }
  return response;
}

async function networkFirst(cacheName, request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    const cached = await caches.match(request);
    if (cached) return cached;
    return new Response("Offline", {
      status: 503,
      statusText: "Service Unavailable",
    });
  }
}

async function staleWhileRevalidate(cacheName, request) {
  const cache = await caches.open(cacheName);
  const cached = await cache.match(request);
  const fetchPromise = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone());
      return response;
    })
    .catch(() => cached);
  return cached || fetchPromise;
}
