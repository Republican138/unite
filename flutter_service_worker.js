'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "38dce5141bcdbdea6e12fced3a7788f6",
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
".git/index": "b02851d68bffac60f01600cd14fa8f84",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "46e36cfe1c0521c7d6bd6f7ef5247f8d",
".git/logs/refs/heads/main": "f13b96a82ed37f5ec153f74a515c6a48",
".git/logs/refs/remotes/origin/main": "671a551018ef60e89d993eefeac6d54f",
".git/objects/01/b261fe628b038840baf0876f13495db2bd576f": "1b9ac1a5facd8acb6246a226ffe3b6d3",
".git/objects/03/eb6853b23146d3622dcc23b07cfc5a68e093c8": "bb379ee0cf736914c95356dbe773dd5b",
".git/objects/08/1d3b0257cee524a25059471c11e737be8f15b4": "1995b2598d966f566705c35dcaa9826c",
".git/objects/09/1f26de7fccbeb8d80d0cad6c56ebf45418eaf2": "d8f40dde380bcf03cbcd404ead396aa1",
".git/objects/0e/5ad574b219a211af0a0d093e7f7dd1da29f8ff": "43f7c76739cbb2f8508746010f830dfc",
".git/objects/15/02395b7c29a6ef4ca8d2a9fb0f13ee8f3423ee": "c8b52aaf2aaf2e92bdb0f15683d8a873",
".git/objects/18/9534f91cba390a07c95b42c6584d39c1ceb355": "26a18eec3972f576f9383608b19cfabc",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/21/ab325c5a4e7edf927e2970d4883305505ac633": "29f9d1c5082f636eeec156194e0c1718",
".git/objects/25/a411374d8ea4d54519f02f037cf9c2062cf579": "695bb9f00fd3dd27d9427d78898ca48b",
".git/objects/28/a630a56ddf324e2b88e3803b757bef47327baa": "42f300f9dd8d477ce13b4ab92d2c1f00",
".git/objects/2a/c89a0a416ffd2db184182b7efda33920c4e7d4": "cb2ce2b3e96ba48844c4b844c9823859",
".git/objects/2d/d698376549a33f06abfa44128eb10c6dc2b229": "9086691c1dbd7d06f1e481b0388baa1a",
".git/objects/2e/3ea111483c245e500997313bdddeb4c4d3574f": "8a383d000fa1ec6439201e41d551c1eb",
".git/objects/2e/af44f9f269a90d93199c5f2937485c9dbd4e89": "0d01f75a82766a55ce9727d33bfd229a",
".git/objects/30/43b08c1ad8eb4ee1f192acf7fd9c5eb6fd52f1": "7ca3e82f8afbb8276e40dbcbb34039c9",
".git/objects/37/e7e69c7f4c563826e978283c2e6308244d5365": "a6ebc0de625d46ebc6f1526efdf0d719",
".git/objects/3a/da78bf5279e7e6868822ab26326cad17f3eeff": "289074aac465a66a92c8da93ad4227c5",
".git/objects/3a/fdb4062fb7b8b19469b668aa77cb7f7692c4c6": "1e5b0731045799073fe3ac24c99e58d0",
".git/objects/40/58d9862ce80eb0dc38f8bd6d86e59330de7015": "37b5b884ed00b3d5916d99c15974a4fb",
".git/objects/41/315613200ed0daafca9cc46332f57824ec68d8": "9291ec68c0e1390fc23cf8b841d52d92",
".git/objects/45/a41e225e2a6f4149954d7aa9884e15349437da": "052a81771b5735b0c977d4516d06e1bc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/e5faaac4fd1d163c25fabb5fb82726e4994a01": "20f0c7f15369a59f15fb743c3380fa7a",
".git/objects/47/a8a2db019fe6ea10d95f88a2088a3602e25af1": "7aa284238007297790047d5cfd6c097b",
".git/objects/49/b3f001c3c04f54d23a126a599f6d4d893b6097": "538c956b3f94508eba07c985ae8982c9",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/84f9157eb86d5a4a2882cbed607f700eac8d0c": "4a956ff12ae672feb6b110cdc0bb5fe3",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/5d/71bf99403318a32aba5ac17ab754c7cdd07e00": "619613fb04fd7de63a5c2b751deffcdb",
".git/objects/5e/4329ff43c779ba336575ab7b9bf293671ceecb": "34adac80ec9a27c656e17a0ac5fdbe41",
".git/objects/5e/c1ae8fd97ecdaaf473c3cb165e55fda19eaabe": "bdbe2a3dc6fa5d8763ab139e785c6a8c",
".git/objects/63/20a4a387cbd444807306acfea6861868700c96": "c216d6bb986f5f0edbf99048f17f5589",
".git/objects/67/0f0918697d4fdeb8ec56cbf77741591743849e": "b8cb452011af2ec0cc9e770b57145f45",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/705a0e6cf684519d97a20e58df83bb974742be": "fbdf82fa62298b4077dff1c04fe4af7b",
".git/objects/6c/e05c2804066c915e9feb1ce99e53b3ae250bc7": "e72f8df5de590b904642f29fd642d387",
".git/objects/6d/71fc919d84c19e01c0403143e43960ef3b2007": "0cb11726b005c486e3fe8e4e72bc2bbb",
".git/objects/70/134435b8243294f66c6e60fa8d788c98dcb891": "f4200a0bf1680494aa93fd34158cdd22",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/78/1fa85aaa7f21803da4ae6b25162a71d2d694ce": "f5cb2bd92604f8d2f9e59238f458e60b",
".git/objects/7b/14f9a7a5033fd2a1a5dfa32103655290bfc25b": "7ec765e42306685d8138fddbf72ae214",
".git/objects/7e/1cfea73714f37ccca153acf74ade1435045d94": "e90097ab1e3cec79d90c0c812cd24c8e",
".git/objects/86/fda31ba752262ba7b55be9d8c5aafa755ad1ca": "ac4cc80deb935e0f4b190b0ed73e826e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/78b6f47fb56b9c0955afcd7641c12f2e098cf7": "56ae1c7854bd1448d62d0a3edcd82070",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/ddad050d776eda80f8c22fa0cf0ecd035be2fb": "b4c89454a9afb54ce8a77ac78a1de34f",
".git/objects/8d/ad5f18c8d9ea328a959602eb7b61babc07f4b0": "b1b9fd0174f287eb5f018e47fb899dea",
".git/objects/8e/0e9e18cb5ec1654845131d7eb9830b37ad67d7": "2d6a9a75284cf5f7d8811463acb8be04",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/96/dcf9d85cedc1ab950aec38e56fe7a8c3d5cd4e": "2c80623c59ab961f70ec47b0ea0007e2",
".git/objects/9a/a1bfe2b7af2b2fccfe6cdb1a7e1735a8b24a6c": "9ccaee0c0f0fce3ef3a929c1511607d1",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9c/0b8aef25056c7baf41eb11e6c14ff630a7769c": "af797c2e4a8fc4ffb0288d5a518cfa18",
".git/objects/ae/b1944baf849f1d0b46f8e706c403698205f92c": "849bef4cd8742418027822da6b458800",
".git/objects/af/fd100d7b3171d291c2b73263b1ec09c2f1d2c0": "6e179cf2d31f509e473217a2c05eeb64",
".git/objects/b0/4b1e0e83eae32b47271b971b945f828bb79aff": "d2ca800e4085e449205c6b132dab0a6c",
".git/objects/b2/3647eb47629fe706e6f232f37c278260997b02": "3ff6d2a31cf7e5a51b2d0948e337737b",
".git/objects/b3/698d0ef7383b76982df9f4b0672cb8f1146236": "a915073c54a8852c52f9c88cf32ca0c2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bc/b1ba3a3004424a8c45d3b7d60dbb9cb9d16fa8": "2331f7e29496a6d2a692ba084a0241b0",
".git/objects/bf/a41bce05fd95541bbf267b57f8708b54ba28c8": "dab5bb06f7f7b2ccb0209aa85b6152ec",
".git/objects/c3/9c2cf7045c2accb24cfabcdd67fe55a3d16ede": "bd347b1bbe707ee57bff72eaf8179d24",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d0/0f27a7c15a85b4042e8271b58655c799e43685": "bacafb4fd78adb3f83f95526c8aa17a0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/5c5703cb80bf0c87c8c985f1ec3a3882ca27f8": "f387aa0bf3dada137c2f974387128a23",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/72df88cfaf635a5e0d377b6e1d85b8c9106a56": "445d7b578c29f44984e8b157dccd7857",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d8/310a997a29bee9937224ef6e71299d1030b6bf": "35dd224b3a4369b13d2d09a6e6a05205",
".git/objects/d8/43182a091a48efb2a6eba296f6812ba2b03f11": "cab01a27cd4419755a96ef445c2d85fa",
".git/objects/d8/ccb847c019c541a111fa76c4b446e4ceb0c601": "8c2434bc16add00abddc77cf778a7322",
".git/objects/d8/f9a2edd048cd292381b852b386283c36d33ae4": "1b3df5becd8d2e45e047c55524110356",
".git/objects/db/c3ae583a0e8f57813b51f4deab0fefcc439398": "0015dbaa0145c6b7efa7415df9ba371a",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/df/e0ea1e466be5b8e44e33efb77f14cf05afb449": "93933165cc28d6b5cb99f82e80a40321",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e1/8f46ede992e1820385e057190c46b510685042": "d2cc090dd380ed28e9738df8134918f8",
".git/objects/e7/a6e63c9f43b741792fe2c714a30b56769a1817": "38d5bb9a2c4715621c23dc70e55c5f2a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/1cb26c3e5e48f710b9140fa80ec5ea4f225a7c": "2f7b67f10ee918bb3a0f8f9fd1cdb765",
".git/objects/eb/066d9c9101fa99c681b2b99b0bab9bc81a23a0": "c725479febdf683b10dc0e48cb4e92c9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/423c06acb5b4985ca2459db51ddb91eefa869c": "d560aafffb09c83c4ba57e4f0450cb36",
".git/objects/f1/d740259678daf8bd8f33d3bfcbb4742e5abd41": "10df3ba2a599d8ff6f59244d2a9a693d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/68a29d9e7c794d391456af3dd6c8d3d98fb98d": "d8143c912f9dec514ce5ecac9a07890f",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/952c8d30b5ed88f3cc8cf29a530f5bb47670fe": "aa0392e8bc5d47507cd9f672151daadb",
".git/refs/heads/main": "78ebfdc4e5b8a02d5d6dcabf34a983b8",
".git/refs/remotes/origin/main": "78ebfdc4e5b8a02d5d6dcabf34a983b8",
"assets/AssetManifest.bin": "43eae8447bbe7e98e4b0b67550756b69",
"assets/AssetManifest.bin.json": "d65241d0ebc295f988c3e3d0c59a2d49",
"assets/AssetManifest.json": "2080ded2560831d55bc858a730dbae03",
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
"assets/assets/images/nomedia.png": "7102a154fa746181f5a19271fcf55b4b",
"assets/assets/images/nophoto.png": "b5647491e3e53316a72396dd86b8ce18",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "d08c53d35efe59929ec21cef00414e68",
"assets/NOTICES": "e6f4c66c2cbbfb83d0533ea710369e5b",
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
"flutter_bootstrap.js": "aee60cc5892f59975aba32eee78f1c31",
"icon/icon-1.png": "a3716b6ea5f4a5deefefad125d335dbb",
"icon/icon-2.png": "134b111b1f9c76097e6ab7751b5786f2",
"index.html": "bc6a5b2a348fd7e2a1ccbb31db83c4d3",
"/": "bc6a5b2a348fd7e2a1ccbb31db83c4d3",
"main.dart.js": "eea0ff2a650d346110c492312ce24aca",
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
