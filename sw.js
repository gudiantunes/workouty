if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let r={};const a=e=>n(e,o),d={module:{uri:o},exports:r,require:a};i[o]=Promise.all(s.map((e=>d[e]||a(e)))).then((e=>(c(...e),r)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.7163d1b6.js",revision:null},{url:"icons/apple-icon-180.png",revision:"7373a23370172da76de18d01075aaa86"},{url:"icons/manifest-icon-192.maskable.png",revision:"35208cd28cb0fd43efb8ae41661e51a9"},{url:"icons/manifest-icon-512.maskable.png",revision:"42dcc4126b98dfa70fa6f8f9b37c00ec"},{url:"index.html",revision:"e29b9084d6f1a5dd80a37fdfeba46da8"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icons/manifest-icon-192.maskable.png",revision:"35208cd28cb0fd43efb8ae41661e51a9"},{url:"icons/manifest-icon-512.maskable.png",revision:"42dcc4126b98dfa70fa6f8f9b37c00ec"},{url:"manifest.webmanifest",revision:"7a9abc3138c56cf5eea854fa8e96ccd1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
