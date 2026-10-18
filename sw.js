self.addEventListener('install', (event) => {
  console.log('Service Worker Installed');
});
self.addEventListener('fetch', (event) => {
  // 通信のキャッシュ制御などをここに記述できます
});