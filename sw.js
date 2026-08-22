const CACHE='ayg-v1';
const ASSETS=['/','/index.html','/manifest.json','/images/allyonogamesnew.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(cached=>{const net=fetch(e.request).then(res=>{try{const copy=res.clone();if(res.ok&&new URL(e.request.url).origin===self.location.origin){caches.open(CACHE).then(c=>c.put(e.request,copy));}}catch(_){}return res}).catch(()=>cached);return cached||net}))});
