self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('icons-cache').then((cache) => {
            return cache.addAll(['/manifest/icon-192x192.png']);
        }),
    );
});

self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('icon-192x192.png')) {
        event.respondWith(caches.match(event.request).then((response) => response || fetch(event.request)));
    }
});

self.addEventListener('push', function (event) {
    if (event.data) {
        const data = event.data.json();
        const options = {
            body: data.body,
            icon: data.icon || '/manifest/icon-192x192.png',
            badge: '/manifest/icon-192x192.png',
            vibrate: [100, 50, 100],
            data: {
                dateOfArrival: Date.now(),
                primaryKey: '2',
                url: data.url || '/',
            },
        };
        event.waitUntil(self.registration.showNotification(data.title, options));
    }
});

self.addEventListener('notificationclick', function (event) {
    console.log('Notification click received.');
    event.notification.close();

    const urlToOpen = event.notification.data.url || '/';
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(function (clientList) {
            for (const client of clientList) {
                if (client.url === urlToOpen && 'focus' in client) {
                    return client.focus();
                }
            }
            return clients.openWindow(urlToOpen);
        }),
    );
});
