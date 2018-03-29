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
              '/css/bootstrap-grid.css',
              '/css/bootstrap-grid.css.map',
              '/css/bootstrap-grid.min.css',
              '/css/bootstrap-grid.min.css.map',
              '/css/bootstrap-reboot.css',
              '/css/bootstrap-reboot.css.map',
              '/css/bootstrap-reboot.min.css',
              '/css/bootstrap-reboot.min.css.map',
              '/css/bootstrap.css',
              '/css/bootstrap.css.map',
              '/css/bootstrap.min.css',
              '/css/bootstrap.min.css.map',
              '/js/bootstrap.bundle.js',
              '/js/bootstrap.bundle.js.map',
              '/js/bootstrap.bundle.min.js',
              '/js/bootstrap.bundle.min.js.map',
              '/js/bootstrap.js',
              '/js/bootstrap.js.map',
              '/js/bootstrap.min.js',
              '/js/bootstrap.min.js.map',
              '/sw.js',
              '/app.js',
              '/images/cat-1285634_960_720.png',
              'images/CMS_Creative_164657191_Kingfisher.jpg',
              '/images/soap-bubble-1958650_960_720.jpg'
          ]);
      })
  );
});
