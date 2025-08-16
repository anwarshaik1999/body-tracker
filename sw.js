// Minimal offline cache for your own static files.
// If you self-host the JS libs (xlsx/plotly/three) in the repo, add them to FILES.
const CACHE = 'body-tracker-v1';
const FILES = [
  './',
  './index.html'
  // add './xlsx.full.min.js', './plotly.min.js', './three.min.js' if self-hosted
];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
});
self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE && caches.delete(k))))
  );
});
self.addEventListener('fetch', e=>{
  const url = new URL(e.request.url);
  // Cache-first only for same-origin files we listed
  if(url.origin === location.origin){
    e.respondWith(
      caches.match(e.request).then(res => res || fetch(e.request))
    );
  }
});
