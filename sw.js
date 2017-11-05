self.addEventListener('install', () => skipWaiting());
self.addEventListener('activate', (event) => event.waitUntil(clients.claim()));
self.addEventListener('fetch', event => {
  if (event.request.url.includes('s3.amazon')) {
    const response = new Response();
    response.ok = false;
    response.status = 404;
    return event.respondWith(response);
  }
  return;
});
