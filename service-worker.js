if(!self.define){let i,n={};const e=(e,r)=>(e=new URL(e+".js",r).href,n[e]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=e,i.onload=n,document.head.appendChild(i)}else i=e,importScripts(e),n()})).then((()=>{let i=n[e];if(!i)throw new Error(`Module ${e} didn’t register its module`);return i})));self.define=(r,l)=>{const o=i||("document"in self?document.currentScript.src:"")||location.href;if(n[o])return;let s={};const u=i=>e(i,o),c={module:{uri:o},exports:s,require:u};n[o]=Promise.all(r.map((i=>c[i]||u(i)))).then((i=>(l(...i),s)))}}define(["./workbox-6567b62a"],(function(i){"use strict";i.setCacheNameDetails({prefix:"pwa-test"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/css/app.24c10a5c.css",revision:null},{url:"/datatables.min.css",revision:"8df407f6ecc1725451f3fd48e7377448"},{url:"/fonts/nucleo-icons.07516f3e.ttf",revision:null},{url:"/fonts/nucleo-icons.6a7ba997.eot",revision:null},{url:"/fonts/nucleo-icons.8b3a7634.woff2",revision:null},{url:"/fonts/nucleo-icons.96941c2a.woff",revision:null},{url:"/img/chat.b4ddf335.png",revision:null},{url:"/img/down-arrow-dark.c07b4e8f.svg",revision:null},{url:"/img/down-arrow-white.984d90c2.svg",revision:null},{url:"/img/error-403.9d4570d9.png",revision:null},{url:"/img/error-404.d388a100.png",revision:null},{url:"/img/error-500.ff485490.png",revision:null},{url:"/img/errorImagen.1055d167.png",revision:null},{url:"/img/icon-192x192.png",revision:"4530bf8c37ce7e603fd328bbdbb8e34d"},{url:"/img/icon-256x256.png",revision:"969f1485d1a9b4092394193944d84273"},{url:"/img/icon-384x384.png",revision:"afa691775957a6a92332f9d023af8074"},{url:"/img/icon-512x512.png",revision:"a7130ce2e8f520916835f5abbd05e9aa"},{url:"/img/landing-image.d1fb6c09.png",revision:null},{url:"/img/lock.3533e814.png",revision:null},{url:"/img/logo-viajabara.97ad7f94.png",revision:null},{url:"/img/nucleo-icons.efe9bfd1.svg",revision:null},{url:"/img/paqueteria.c160dd96.png",revision:null},{url:"/img/pattern-lines.ca8b7f1c.svg",revision:null},{url:"/img/rocket-white.c23c96ad.png",revision:null},{url:"/index.html",revision:"ca42471e997987eaa46e14f813a7460e"},{url:"/js/app.be440f73.js",revision:null},{url:"/js/chunk-vendors.115c4773.js",revision:null},{url:"/logo-viajabara.png",revision:"6add3a6331dbb368abb37393a3ac107c"},{url:"/manifest.json",revision:"92bb6025298e0d0574047d0564f6c416"},{url:"/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map
