const CACHE="freela-plus-v2";
const ASSETS=["/Freela-plus/","/Freela-plus/index.html","/Freela-plus/manifest.json","/Freela-plus/icon-192.png","/Freela-plus/icon-512.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener("activate",e=>e.waitUntil(self.clients.claim()));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp}).catch(()=>caches.match("/Freela-plus/")))})
