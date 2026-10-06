const PFX='ninja-coffee-timer-',C=PFX+'v1';
const A=['./','ninja-coffee-timer.html','ninja-coffee-timer.webmanifest','ninja-coffee-timer-icon.svg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith(PFX)&&x!==C).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.open(C).then(c=>c.match(e.request)).then(r=>r||fetch(e.request)))});
