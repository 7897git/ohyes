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
  { url: '/arab-saudi-berencana-untuk-menghabiskan-1-miliar-per-tahun-untuk-menemukan-perawatan-untuk-memperlambat-penuaan/', revision: '2022-06-16' },
  { url: '/5-Kebiasaan-Orang-yang-Sangat-Produktif-Bekerja-dari-Rumah/', revision: '2022-03-07' },
  { url: '/Bagaimana-Eropa-Menjadi-Begitu-Kaya/', revision: '2022-03-01' },
  { url: '/Bagaimana-Mengubah-Pikiran-Siapapun-dalam-Bisnis-Tanpa-Membujuk-Mereka/', revision: '2021-06-03' },
  { url: '/kisah-hiroshima-rasisme-dan-hak-asasi-manusia/', revision: '2021-04-03' },
  { url: '/fakta-tentang-pembakaran-lemak-dan-lari/', revision: '2021-03-05' },
  { url: '/jatuh-bangkit-nikola-tesla-dan-menaranya/', revision: '2021-03-04' },
  { url: '/ilmuwan-menelusuri-perjalanan-hidup-mammoth-berbulu/', revision: '2021-03-02' },
  { url: '/', revision: '202206162350' },
  { url: '/shop/', revision: '202206162350' },
  { url: '/about/', revision: '202206162350' },
  { url: '/assets/css/style.css', revision: '202206162350' },
  { url: '/assets/css/spinner.css', revision: '202206162350' }
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
