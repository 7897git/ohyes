importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn/workbox/workbox-sw.js');

const { registerRoute } = workbox.routing;
const { CacheFirst, NetworkFirst, StaleWhileRevalidate } = workbox.strategies;
const { CacheableResponse } = workbox.cacheableResponse;

workbox.core.setCacheNameDetails({
  prefix: 'http://localhost:4000',
  suffix: '2022-06'
});

registerRoute(
  '/',
  new NetworkFirst()
);

registerRoute(
  /page[0-99]/,
  new NetworkFirst()
)

registerRoute(
  new RegExp('/\\d{4}/\\d{2}/\\d{2}/.+'),
  new StaleWhileRevalidate()
)

workbox.precaching.precacheAndRoute([
  { url: '/Hello-WorldKopi/', revision: '2022-03-07' },
  { url: '/Hello-Worldcopy/', revision: '2014-03-07' },
  { url: '/Hello-copy1/', revision: '2014-03-06' },
  { url: '/Hello-World1/', revision: '2014-03-05' },
  { url: '/Hello-copy/', revision: '2014-03-04' },
  { url: '/Hello-World/', revision: '2014-03-03' },
  { url: '/Hello/', revision: '2014-03-02' },
  { url: '/Worldcopy/', revision: '2014-03-01' },
  { url: '/', revision: '202206160150' },
  { url: '/shop/', revision: '202206160150' },
  { url: '/about/', revision: '202206160150' },
  { url: '/assets/css/style.css', revision: '202206160150' },
  { url: '/assets/css/spinner.css', revision: '202206160150' }
])

registerRoute(
  ({request}) => request.destination === 'image' ,
  new CacheFirst({
    plugins: [
      new CacheableResponse({statuses: [0, 200]})
    ],
  })
);

registerRoute(
  /\/(images|favicon|css)/,
  new CacheFirst()
);
