/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "68fa63e4b7efb7fc4e15b215a74a596b"
  },
  {
    "url": "assets/css/0.styles.fd508535.css",
    "revision": "af916abb9a0b176fb330e4554c7e0a62"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/img/iconfont.36767f3e.svg",
    "revision": "36767f3efa2e4c880f42a42e8b2075b0"
  },
  {
    "url": "assets/js/1.39452217.js",
    "revision": "3e20542502f6372153392bd0d900be03"
  },
  {
    "url": "assets/js/10.34903ab5.js",
    "revision": "d80ca6345b3fc7eafad4d26b1934c251"
  },
  {
    "url": "assets/js/11.e09d3fff.js",
    "revision": "24c921d3f0e51d8bdfef32563bda71b7"
  },
  {
    "url": "assets/js/12.5c2346f6.js",
    "revision": "f3b2a9faed58738bbe32330dda74ca81"
  },
  {
    "url": "assets/js/13.4a3fb674.js",
    "revision": "9e593ce1c6d91a40225349a89a551db3"
  },
  {
    "url": "assets/js/14.c3a6d7a4.js",
    "revision": "6d88b4f0078bd2f6baa13cf629d8478b"
  },
  {
    "url": "assets/js/15.e2115615.js",
    "revision": "8154be072f89c50f462c049e8d1ec52f"
  },
  {
    "url": "assets/js/16.e6bacbbb.js",
    "revision": "526adbff007f5b63190a2b28952eef39"
  },
  {
    "url": "assets/js/17.19ee3c99.js",
    "revision": "b73c668390c989ae88fd4aadb630383e"
  },
  {
    "url": "assets/js/18.d3516cb9.js",
    "revision": "35475cbd4e4bc757d327e54029045954"
  },
  {
    "url": "assets/js/19.003939bf.js",
    "revision": "e8a0fe9dac17873219c0fde2c9c267b4"
  },
  {
    "url": "assets/js/20.c63386d9.js",
    "revision": "a3a61338c1f5515acb9fd99ab259b0c1"
  },
  {
    "url": "assets/js/21.ffe545fd.js",
    "revision": "a82b95b4da52833418b3b313571fba04"
  },
  {
    "url": "assets/js/4.e821df07.js",
    "revision": "b99cf108289dba51560ccea5c70c395c"
  },
  {
    "url": "assets/js/5.ba4de4e6.js",
    "revision": "b99584367bb750cc6d6b5fbff3823ee1"
  },
  {
    "url": "assets/js/6.969ddcdd.js",
    "revision": "368778a5625c14592920af94311dc027"
  },
  {
    "url": "assets/js/7.7c5df6f4.js",
    "revision": "ca20fa25976f7fba8a916ce0ab7c6fb2"
  },
  {
    "url": "assets/js/8.2c054169.js",
    "revision": "30b2857d005d97dc44ed531f68ed08ff"
  },
  {
    "url": "assets/js/9.3128b9bb.js",
    "revision": "60433c13b6e5c12e4ef2932f6c4926f2"
  },
  {
    "url": "assets/js/app.944e0bd5.js",
    "revision": "f33e903dcb2865ee4402ac5eebbc0929"
  },
  {
    "url": "assets/js/baidu.js",
    "revision": "d87b8800faffea165e2a687cbc58c31f"
  },
  {
    "url": "assets/js/vendors~flowchart.e14755fe.js",
    "revision": "367d4d76f7eb37a4d606049615064bd1"
  },
  {
    "url": "avatar.jpg",
    "revision": "2b32471d18e80e7c8cac885db4356d9b"
  },
  {
    "url": "categories/HTML/index.html",
    "revision": "73c609b250a9d07b5c829d081faf5d23"
  },
  {
    "url": "categories/index.html",
    "revision": "1bb4a78838ab22882ac363edda873089"
  },
  {
    "url": "categories/前端/index.html",
    "revision": "7eab205d80dad11fca68a6baba7f69ae"
  },
  {
    "url": "categories/前端基础/index.html",
    "revision": "010818e5fdefec87ea0c8a6264174eba"
  },
  {
    "url": "categories/前端学习路线/index.html",
    "revision": "2b5beede98151caa2e654e573487ad33"
  },
  {
    "url": "categories/生活/index.html",
    "revision": "7e0f8020f028822f696e0d55c64ac215"
  },
  {
    "url": "css/style.css",
    "revision": "6d966fff772f5e50b07729e09e164eab"
  },
  {
    "url": "guide/index.html",
    "revision": "036fe0bbad7d2fc1fee29f452a2a0efd"
  },
  {
    "url": "hero_white.png",
    "revision": "5c707c6a6f8be5e1b6d767c83cedc8d5"
  },
  {
    "url": "img/5.jpg",
    "revision": "c48683b7627396b02eb4a7df386431f5"
  },
  {
    "url": "img/kbjw2.jpg",
    "revision": "78b0701cb66d42de9a6eaa6b0ff38ece"
  },
  {
    "url": "img/logo.png",
    "revision": "2b32471d18e80e7c8cac885db4356d9b"
  },
  {
    "url": "img/sidebar_280140.png",
    "revision": "30e2bf90705fc32e783f29a833736c17"
  },
  {
    "url": "img/sidebar_2801401.png",
    "revision": "0c2331a84c22028e9d50010be4c9b71f"
  },
  {
    "url": "img/sidebar_28014022.png",
    "revision": "67ed912a57fe22a89c7ef25bfa3d6c74"
  },
  {
    "url": "index.html",
    "revision": "55637f21a5d203f0eb8668f956b0e79f"
  },
  {
    "url": "js/custom.js",
    "revision": "437cc118e8b3a7a5a38efe104ad892b2"
  },
  {
    "url": "tag/index.html",
    "revision": "9bc5c1ca387106100b2fab315329bc69"
  },
  {
    "url": "tags/CSS/index.html",
    "revision": "9ad4404fd96d04a2fe1a4638640bd2ed"
  },
  {
    "url": "tags/HTML/index.html",
    "revision": "4c0f693efb4d3c8ec9bbd45504520c1b"
  },
  {
    "url": "tags/js/index.html",
    "revision": "3a2d617454f8723335fd87a757462243"
  },
  {
    "url": "tags/react/index.html",
    "revision": "62dd5681bb2507479c1f2ab74c8f0832"
  },
  {
    "url": "tags/vue/index.html",
    "revision": "0d9531ec64397ef0396f1c4cbd8c6988"
  },
  {
    "url": "tags/分享生活/index.html",
    "revision": "ab83eea12f052468412d6030466865cd"
  },
  {
    "url": "tags/前端学习路线/index.html",
    "revision": "df288827d701d0b930490b56e53f83c8"
  },
  {
    "url": "tags/汇编语言/index.html",
    "revision": "bbf89a51a5c2627aabafbb49eca79695"
  },
  {
    "url": "tags/生活/index.html",
    "revision": "a309be897887662f9bf590cf8c08cbcd"
  },
  {
    "url": "tags/零基础/index.html",
    "revision": "dad4b6f3dadf0c3198335341059c638b"
  },
  {
    "url": "timeline/index.html",
    "revision": "2ca2f49a6aea72b12751da8eb61051a7"
  },
  {
    "url": "view.png",
    "revision": "81e8422c4d92eb2d5dd6ddae272bcef0"
  },
  {
    "url": "前端零基础学习路线/前端学习路线.html",
    "revision": "80eca65d8b564549d9468751a66ec954"
  },
  {
    "url": "技术文章/CSS篇/CSS.html",
    "revision": "afcdcd66cca52d904597e54cd2045fd7"
  },
  {
    "url": "技术文章/HTML篇/HTML.html",
    "revision": "86fd098070a54358b5f0788beb1b88ec"
  },
  {
    "url": "技术文章/index.html",
    "revision": "5eca508887319854cfe98db6a821b311"
  },
  {
    "url": "技术文章/JavaScript篇/JavaScript.html",
    "revision": "812ee3007141f6966550d15505f7ebd6"
  },
  {
    "url": "技术文章/react篇/react.html",
    "revision": "dfeb4c26f2e2e61c643543f723391de2"
  },
  {
    "url": "技术文章/vue篇/vue01.html",
    "revision": "be39cd3dcc32d22f404d766076ab092f"
  },
  {
    "url": "生活分享/life.html",
    "revision": "fb7ae88ab1b8a9b9d9bd9562e248c019"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
