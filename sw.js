self.addEventListener('install', (e) => {
  console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
  // ไม่ต้อง caching อะไร เพื่อให้โหลดข้อมูลล่าสุดเสมอ
});
