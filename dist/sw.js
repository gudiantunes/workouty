if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let r={};const o=e=>n(e,c),a={module:{uri:c},exports:r,require:o};i[c]=Promise.all(s.map((e=>a[e]||o(e)))).then((e=>(t(...e),r)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.c6089e3b.js",revision:null},{url:"index.html",revision:"9c5f5016bf151a5269777ba91c550972"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"static/icons/apple-icon-180.png",revision:"7373a23370172da76de18d01075aaa86"},{url:"static/icons/manifest-icon-192.maskable.png",revision:"35208cd28cb0fd43efb8ae41661e51a9"},{url:"static/icons/manifest-icon-512.maskable.png",revision:"42dcc4126b98dfa70fa6f8f9b37c00ec"},{url:"manifest.webmanifest",revision:"7a9abc3138c56cf5eea854fa8e96ccd1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
