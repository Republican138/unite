'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bba0c9b8d7bf52b274646c068d874380",
".git/config": "7ffc9fa868e1c436583d8eae3cfd2082",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "38eace2f72707cd99d5164d6befcc8d0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0a30c5021de1ccd969265911730e035b",
".git/logs/refs/heads/main": "8a5b7de2a2ecd39485af137263f3f370",
".git/logs/refs/remotes/origin/main": "df2e0d09821d885f21ec68600ca0ca97",
".git/objects/03/eb6853b23146d3622dcc23b07cfc5a68e093c8": "bb379ee0cf736914c95356dbe773dd5b",
".git/objects/08/1d3b0257cee524a25059471c11e737be8f15b4": "1995b2598d966f566705c35dcaa9826c",
".git/objects/09/1f26de7fccbeb8d80d0cad6c56ebf45418eaf2": "d8f40dde380bcf03cbcd404ead396aa1",
".git/objects/15/02395b7c29a6ef4ca8d2a9fb0f13ee8f3423ee": "c8b52aaf2aaf2e92bdb0f15683d8a873",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/2e/3ea111483c245e500997313bdddeb4c4d3574f": "8a383d000fa1ec6439201e41d551c1eb",
".git/objects/37/e7e69c7f4c563826e978283c2e6308244d5365": "a6ebc0de625d46ebc6f1526efdf0d719",
".git/objects/3a/da78bf5279e7e6868822ab26326cad17f3eeff": "289074aac465a66a92c8da93ad4227c5",
".git/objects/41/315613200ed0daafca9cc46332f57824ec68d8": "9291ec68c0e1390fc23cf8b841d52d92",
".git/objects/45/a41e225e2a6f4149954d7aa9884e15349437da": "052a81771b5735b0c977d4516d06e1bc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/b3f001c3c04f54d23a126a599f6d4d893b6097": "538c956b3f94508eba07c985ae8982c9",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/84f9157eb86d5a4a2882cbed607f700eac8d0c": "4a956ff12ae672feb6b110cdc0bb5fe3",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5e/4329ff43c779ba336575ab7b9bf293671ceecb": "34adac80ec9a27c656e17a0ac5fdbe41",
".git/objects/63/20a4a387cbd444807306acfea6861868700c96": "c216d6bb986f5f0edbf99048f17f5589",
".git/objects/67/0f0918697d4fdeb8ec56cbf77741591743849e": "b8cb452011af2ec0cc9e770b57145f45",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/e05c2804066c915e9feb1ce99e53b3ae250bc7": "e72f8df5de590b904642f29fd642d387",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/7b/14f9a7a5033fd2a1a5dfa32103655290bfc25b": "7ec765e42306685d8138fddbf72ae214",
".git/objects/7e/1cfea73714f37ccca153acf74ade1435045d94": "e90097ab1e3cec79d90c0c812cd24c8e",
".git/objects/86/fda31ba752262ba7b55be9d8c5aafa755ad1ca": "ac4cc80deb935e0f4b190b0ed73e826e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/9a/a1bfe2b7af2b2fccfe6cdb1a7e1735a8b24a6c": "9ccaee0c0f0fce3ef3a929c1511607d1",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/0b8aef25056c7baf41eb11e6c14ff630a7769c": "af797c2e4a8fc4ffb0288d5a518cfa18",
".git/objects/b2/3647eb47629fe706e6f232f37c278260997b02": "3ff6d2a31cf7e5a51b2d0948e337737b",
".git/objects/b3/698d0ef7383b76982df9f4b0672cb8f1146236": "a915073c54a8852c52f9c88cf32ca0c2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d0/0f27a7c15a85b4042e8271b58655c799e43685": "bacafb4fd78adb3f83f95526c8aa17a0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/5c5703cb80bf0c87c8c985f1ec3a3882ca27f8": "f387aa0bf3dada137c2f974387128a23",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/43182a091a48efb2a6eba296f6812ba2b03f11": "cab01a27cd4419755a96ef445c2d85fa",
".git/objects/d8/ccb847c019c541a111fa76c4b446e4ceb0c601": "8c2434bc16add00abddc77cf778a7322",
".git/objects/d8/f9a2edd048cd292381b852b386283c36d33ae4": "1b3df5becd8d2e45e047c55524110356",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/8f46ede992e1820385e057190c46b510685042": "d2cc090dd380ed28e9738df8134918f8",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/423c06acb5b4985ca2459db51ddb91eefa869c": "d560aafffb09c83c4ba57e4f0450cb36",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/refs/heads/main": "b1f1733161a922b4d078aa8482ee437b",
".git/refs/remotes/origin/main": "b1f1733161a922b4d078aa8482ee437b",
"assets/AssetManifest.bin": "75475bc29d5f0091db80b3e8e52db344",
"assets/AssetManifest.bin.json": "f7334fc98a840889af48b32e4b3a9fc2",
"assets/AssetManifest.json": "fd5cc191932e78854a23fa576e47add2",
"assets/assets/icons/analysis.svg": "5593444a4a1170531620876dad35101a",
"assets/assets/icons/communication.svg": "72343259dc86731a90d89862cb6a1314",
"assets/assets/icons/connected.svg": "41a7de9977ef55a7025aba96c7b34940",
"assets/assets/icons/materials.svg": "c56b3751b1df6d77d602ffc8d61212f9",
"assets/assets/icons/message-dots.svg": "0d0b4911d731b8bd95cabf5529ff8b87",
"assets/assets/icons/overview.svg": "d066b4cdf969271973b9e79f5e012120",
"assets/assets/icons/participants.svg": "7c8171c194484d6b8f5cc1e8e8f913ee",
"assets/assets/icons/profile.svg": "2beb1f235b01535438e4af3e6a782ea5",
"assets/assets/icons/resources.svg": "8c27d609ee75088800df0d92eb83dc4e",
"assets/assets/icons/settings.svg": "299ad4bf15f6749bc2f2d478cc9e801d",
"assets/assets/icons/unite.svg": "4f8c735289639090031af8e6ca410bc3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "dce8ba000c161f9c13ce64a0c052e1d5",
"assets/NOTICES": "abb8a3e2dfd885b4faac8422d6ca7af9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "d3bd8e94885d7f6d3ab093a8425b654e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "03338844f5cc2bb68a6b0f54cd3e9854",
"icon/icon-1.png": "a3716b6ea5f4a5deefefad125d335dbb",
"icon/icon-2.png": "134b111b1f9c76097e6ab7751b5786f2",
"index.html": "bc6a5b2a348fd7e2a1ccbb31db83c4d3",
"/": "bc6a5b2a348fd7e2a1ccbb31db83c4d3",
"main.dart.js": "9dbd0b2fbeea6e106b55c43b45299f70",
"manifest.json": "d59b4ad01f62be38aea3742dc56a3029",
"version.json": "dc91aa601c9935a76abf79102caad5bf"};
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
