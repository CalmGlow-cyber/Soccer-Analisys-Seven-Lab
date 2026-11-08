// Service worker di Analysis e del Portale Mister (1.48.0): serve SOLO alle notifiche.
// Nessuna cache: le pagine arrivano sempre dal sito, come prima, così ogni aggiornamento si vede subito.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("push", e => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch (err) { d = {body: e.data ? e.data.text() : ""}; }
  const titolo = d.title || "Analysis";
  e.waitUntil(self.registration.showNotification(titolo, {
    body: d.body || "", icon: d.icon || new URL("icona-192.png", self.location).href,
    badge: new URL("icona-192.png", self.location).href, tag: d.tag || undefined, data: {url: d.url || self.registration.scope}
  }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || self.registration.scope;
  e.waitUntil(self.clients.matchAll({type: "window", includeUncontrolled: true}).then(finestre => {
    for (const f of finestre) {
      if (f.url.startsWith(self.registration.scope) && "focus" in f) {
        if ("navigate" in f) f.navigate(url).catch(() => {});
        return f.focus();
      }
    }
    return self.clients.openWindow(url);
  }));
});
