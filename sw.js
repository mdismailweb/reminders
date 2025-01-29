self.addEventListener("install", (e) => {
  self.skipWaiting();
});

self.addEventListener("push", (e) => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "icons/icon.png",
    badge: "icons/icon.png",
    vibrate: [200, 100, 200],
  });
});
