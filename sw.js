const CACHE_NAME = 'pwa-stockchecker-v0.2';

self.addEventListener('install', (event) => {
  // 新しいService Workerが検出されたらすぐに有効化待機状態をスキップ
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('古いキャッシュを削除:', cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// ネットワーク優先の取得戦略（最新があれば取得し、なければキャッシュ）
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
