if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const r=e=>s(e,t),a={module:{uri:t},exports:o,require:r};i[t]=Promise.all(n.map((e=>a[e]||r(e)))).then((e=>(c(...e),o)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.953d441e.js",revision:null},{url:"index.html",revision:"132ba5f731f6a6e7cb3ddb049c0748c3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"static/icons/apple-icon-180.png",revision:"7373a23370172da76de18d01075aaa86"},{url:"static/icons/manifest-icon-192.maskable.png",revision:"35208cd28cb0fd43efb8ae41661e51a9"},{url:"static/icons/manifest-icon-512.maskable.png",revision:"42dcc4126b98dfa70fa6f8f9b37c00ec"},{url:"static/logo.svg",revision:"ea36b7c3a74b8f23b979eca23ae5c61d"},{url:"manifest.webmanifest",revision:"7a9abc3138c56cf5eea854fa8e96ccd1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
