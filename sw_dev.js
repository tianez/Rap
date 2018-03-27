var cacheStorageKey = "cacheStorage-v2";

var cacheList = [
    "/",
    "index.html",
    "manifest.json",
    "dll/vendor.dll.js",
    "public/bower/react/umd/react.production.min.js",
    "public/bower/react-dom/umd/react-dom.production.min.js",
    "public/bower/axios/dist/axios.min.js",
    "public/bower/dexie/dist/dexie.min.js"
];

self.addEventListener("install", e => {
    console.log("install");
    e.waitUntil(
        caches
            .open(cacheStorageKey)
            .then(cache => cache.addAll(cacheList))
            .then(() => self.skipWaiting())
    );
});

self.addEventListener("activate", function(e) {
    console.log("activate");
    e.waitUntil(
        Promise.all(
            caches.keys().then(cacheNames => {
                return cacheNames.map(name => {
                    if (name !== cacheStorageKey) {
                        return caches.delete(name);
                    }
                });
            })
        ).then(() => {
            return self.clients.claim();
        })
    );
});

self.addEventListener("fetch", function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            if (response != null) {
                return response;
            }
            return fetch(e.request);
            var requestToCache = e.request.clone();
            return fetch(requestToCache).then(function(response) {
                if (!response || response.status !== 200) {
                    return response;
                }
                var responseToCache = response.clone();
                caches.open(cacheStorageKey).then(function(cache) {
                    cache.put(requestToCache, responseToCache);
                });
                return response;
            });
        })
    );
});
