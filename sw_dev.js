// var cacheStorageKey = "cacheStorage-v8";

// var cacheList = [
//     "/",
//     // "index.html",
//     "manifest.json",
//     "dll/vendor.dll.js",
//     "public/bower/react/umd/react.production.min.js",
//     "public/bower/react-dom/umd/react-dom.production.min.js",
//     "public/bower/axios/dist/axios.min.js",
//     "public/bower/dexie/dist/dexie.min.js"
// ];

// self.addEventListener("install", e => {
//     console.log("install");
//     e.waitUntil(
//         caches
//             .open(cacheStorageKey)
//             .then(cache => cache.addAll(cacheList))
//             .then(() => self.skipWaiting())
//     );
// });

// self.addEventListener("activate", function(e) {
//     console.log("activate");
//     e.waitUntil(
//         caches
//             .keys()
//             .then(keylist => {
//                 return Promise.all(keylist.filter(key => key !== cacheStorageKey).map(key => caches.delete(key)));
//             })
//             .then(() => {
//                 return self.clients.claim();
//             })
//     );
// });

// self.addEventListener("fetch", function(e) {
//     e.respondWith(
//         caches.match(e.request).then(function(response) {
//             if (response != null) {
//                 return response;
//             }
//             return fetch(e.request);
//         })
//     );
// });

// importScripts("./public/js/workbox-sw.js");
importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

if (workbox) {
    console.log(`Yay! workbox is loaded 🎉`);
    workbox.precaching.precacheAndRoute([
        "manifest.json",
        "dll/vendor.dll.js",
        "public/bower/axios/dist/axios.min.js",
        "public/bower/dexie/dist/dexie.min.js",
        { url: "/index.html", revision: "383676" }
    ]);
    workbox.routing.registerRoute(new RegExp(".*.js"), workbox.strategies.networkFirst());
    // workbox.routing.registerRoute(
    //     "/",
    //     "index.html",
    //     "manifest.json",
    //     "dll/vendor.dll.js",
    //     "public/bower/axios/dist/axios.min.js",
    //     "public/bower/dexie/dist/dexie.min.js"
    // );
    // workbox.routing.registerRoute(
    //     // Cache CSS files
    //     /.*\.css/,
    //     // Use cache but update in the background ASAP
    //     workbox.strategies.staleWhileRevalidate({
    //         // Use a custom cache name
    //         cacheName: "css-cache"
    //     })
    // );
    // workbox.routing.registerRoute(
    //     // Cache image files
    //     /.*\.(?:png|jpg|jpeg|svg|gif)/,
    //     // Use the cache if it's available
    //     workbox.strategies.cacheFirst({
    //         // Use a custom cache name
    //         cacheName: "image-cache",
    //         plugins: [
    //             new workbox.expiration.Plugin({
    //                 // Cache only 20 images
    //                 maxEntries: 20,
    //                 // Cache for a maximum of a week
    //                 maxAgeSeconds: 7 * 24 * 60 * 60
    //             })
    //         ]
    //     })
    // );
    // workbox.precaching.preacheAndRoute([
    //     "/",
    //     "manifest.json",
    //     "dll/vendor.dll.js",
    //     "public/bower/axios/dist/axios.min.js",
    //     "public/bower/dexie/dist/dexie.min.js"
    //     // {
    //     //     url: "/index.html",
    //     //     revision: "383676"
    //     // }
    // ]);
} else {
    console.log(`Boo! workbox didn't load 😬`);
}
