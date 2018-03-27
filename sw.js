var cacheStorageKey = "cacheStorage-v3";

var cacheList = [
    "/",
    "index.html",
    "manifest.json",
    "dll/vendor.dll.js",
    "node_modules/react/umd/react.production.min.js",
    "node_modules/react-dom/umd/react-dom.production.min.js",
    "node_modules/axios/dist/axios.min.js"
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
            // return fetch(e.request);
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
