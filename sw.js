//fetch from service worker
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

//service worker cache
self.addEventListener('install', function(e){
  e.waitUntil(
      caches.open('the-magic-cache').then(function(cache){
          //files to cache
          return cache.addAll([
              '/',
              '/index.html',
              '/inline.css',
              '/sw.js',
              '/app.js',
              '/images/cat-1285634_960_720.png',
              'images/CMS_Creative_164657191_Kingfisher.jpg',
              '/images/soap-bubble-1958650_960_720.jpg'
          ]);
      })
  );
});
