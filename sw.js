var cacheStorageKey = "cacheStorage-v4";

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
        caches
            .keys()
            .then(keylist => {
                return Promise.all(keylist.filter(key => key !== cacheStorageKey).map(key => caches.delete(key)));
            })
            .then(() => {
                return self.clients.claim();
            })
        // .then(() => {
        //     return self.clients.matchAll().then(function(clients) {
        //         console.log(clients.length);
        //         if (clients && clients.length) {
        //             clients.forEach(function(client, i) {
        //                 client.postMessage("sw.update");
        //             });
        //         }
        //     });
        // })
    );
});

self.addEventListener("fetch", function(e) {
    e.respondWith(
        caches.match(e.request).then(function(response) {
            if (response != null) {
                return response;
            }
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
