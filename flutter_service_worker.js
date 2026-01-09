'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "99e419b24697a87fb9fca407d69ec961",
"version.json": "de8063d189fdeab65e78abb289100f6b",
"splash/img/light-2x.png": "cd63acdf45784df4a8ccdcef30e866bb",
"splash/img/dark-4x.png": "7eb545c60728b6822621327d0e2af5b8",
"splash/img/light-3x.png": "89289fdd69cbaf573b5423ec96074d48",
"splash/img/dark-3x.png": "89289fdd69cbaf573b5423ec96074d48",
"splash/img/light-4x.png": "7eb545c60728b6822621327d0e2af5b8",
"splash/img/dark-2x.png": "cd63acdf45784df4a8ccdcef30e866bb",
"splash/img/dark-1x.png": "b8e64009d8264b93fc4a50b787537f1b",
"splash/img/light-1x.png": "b8e64009d8264b93fc4a50b787537f1b",
"favicon.ico": "9eaa09b4d1f6ac9bd35f1c536188912f",
"index.html": "0911a4ea3cc85cf23da422cdb26c4f8c",
"/": "0911a4ea3cc85cf23da422cdb26c4f8c",
"main.dart.js": "f29dc3f25d64e3fd3ca73776156e1614",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/favicon-16x16.png": "6e4decc0985da205ff10e05c762e3e1c",
"icons/apple-icon.png": "f525c6b7e32e777ed308018964575067",
"icons/apple-icon-144x144.png": "5a25d1b8bfbd2098daf5ee795a1886ce",
"icons/android-icon-192x192.png": "a7402f4fb23ed46e70fd6d06672b1b88",
"icons/apple-icon-precomposed.png": "f525c6b7e32e777ed308018964575067",
"icons/apple-icon-114x114.png": "1e20d676edd0e53ed1d6a84d900e571d",
"icons/ms-icon-310x310.png": "d8be81c04ee30af552de9aa8161e3f8f",
"icons/ms-icon-144x144.png": "5a25d1b8bfbd2098daf5ee795a1886ce",
"icons/apple-icon-57x57.png": "10f202585e9c040b936a7ea2819d3a37",
"icons/apple-icon-152x152.png": "98ec87d3eeb03fccd4a71ae49a346ed3",
"icons/ms-icon-150x150.png": "d89bf7bfe72a69ecf9a59a6180ef2e10",
"icons/android-icon-72x72.png": "4a96c68af4f2b5743545d46391262fc3",
"icons/android-icon-96x96.png": "5414c84b23ca17ccf2d387edaa9b209d",
"icons/android-icon-36x36.png": "158a7ebffb9170667b28cc8e4de14c13",
"icons/apple-icon-180x180.png": "b0ee34f3ab2bb1993c2afbadfbbf058a",
"icons/favicon-96x96.png": "5414c84b23ca17ccf2d387edaa9b209d",
"icons/android-icon-48x48.png": "9f396de05328202e41e26c878dcc5ba7",
"icons/apple-icon-76x76.png": "8e706d18bde22daedc4fcc334f843659",
"icons/apple-icon-60x60.png": "8d8672e29e268f9dd3180f319461b6af",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/android-icon-144x144.png": "5a25d1b8bfbd2098daf5ee795a1886ce",
"icons/apple-icon-72x72.png": "4a96c68af4f2b5743545d46391262fc3",
"icons/apple-icon-120x120.png": "65248aabbb060951dab461a22cb2b881",
"icons/favicon-32x32.png": "44e948cd280a95b8473814c7d9f91ec6",
"icons/ms-icon-70x70.png": "3a855d29027d9ae45218e5de4cf22574",
"manifest.json": "ec3207f804b8a9f79c1b637d403863da",
"assets/AssetManifest.json": "d55948da7b9e1ce30823a6c5a78ffd9d",
"assets/NOTICES": "70b71f8005abc5fe0bae71c6c84bd729",
"assets/FontManifest.json": "891fbd0a02038775d6b66614668eaaca",
"assets/AssetManifest.bin.json": "935c1625d7fd4fcf8edd03b3a65b1ee5",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "b3cfd6832181cbaa3c98988c49d34641",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "6ed05ff04f59e971c018c1ef63eb8f14",
"assets/fonts/MaterialIcons-Regular.otf": "af95f129cb0d58c744defeb65becadf2",
"assets/assets/rives/shapes.riv": "78e01606d31a306380a5d9bed735c2f1",
"assets/assets/images/TSG_Logo-removebg.png": "196868fcca30a478b5206dd9924f7c8b",
"assets/assets/images/TSG_Logo.png": "256275821a909b51365005b49a363b87",
"assets/assets/images/excel.png": "327c7ded1863e4985b2df74986b24456",
"assets/assets/images/logo.png": "b15756f4e9f0119da18c6d9ebb379dec",
"assets/assets/images/box_cover_gold.png": "faaa6811356c0cb94f6c86d613fdf291",
"assets/assets/images/pdf.png": "9a85752042ae270b88114895b82da2c1",
"assets/assets/images/logo_1.png": "efef79900a59583fc771aba79377ddf4",
"assets/assets/images/logo_3.png": "8e61748c8db67fcc3e0c3b4f199a0cca",
"assets/assets/fonts/NotoSerif-BoldItalic.ttf": "56d49abcf961a4f1bbd9b707e4cad777",
"assets/assets/fonts/NotoSerif-Regular.ttf": "5615acdd7330f942b7027b01951f71e7",
"assets/assets/fonts/Roboto-Regular.ttf": "303c6d9e16168364d3bc5b7f766cfff4",
"assets/assets/fonts/flutter_succinctly.pdf": "4a675628446952ed78a3742e5dc5d3c4",
"assets/assets/fonts/NotoSerif-Italic.ttf": "ebdddaa1e2a5bcec8ce7a9d0f53ef4f8",
"assets/assets/fonts/NotoSerif-Bold.ttf": "c547ce24f0b2402717d118cc770bea18",
"assets/assets/fonts/Roboto-Bold.ttf": "dd5415b95e675853c6ccdceba7324ce7",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
