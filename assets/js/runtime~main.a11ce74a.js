(()=>{"use strict";var e,a,t,r,c,d={},f={};function o(e){var a=f[e];if(void 0!==a)return a.exports;var t=f[e]={id:e,loaded:!1,exports:{}};return d[e].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}o.m=d,o.c=f,e=[],o.O=(a,t,r,c)=>{if(!t){var d=1/0;for(i=0;i<e.length;i++){t=e[i][0],r=e[i][1],c=e[i][2];for(var f=!0,b=0;b<t.length;b++)(!1&c||d>=c)&&Object.keys(o.O).every((e=>o.O[e](t[b])))?t.splice(b--,1):(f=!1,c<d&&(d=c));if(f){e.splice(i--,1);var n=r();void 0!==n&&(a=n)}}return a}c=c||0;for(var i=e.length;i>0&&e[i-1][2]>c;i--)e[i]=e[i-1];e[i]=[t,r,c]},o.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return o.d(a,{a:a}),a},t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var c=Object.create(null);o.r(c);var d={};a=a||[null,t({}),t([]),t(t)];for(var f=2&r&&e;"object"==typeof f&&!~a.indexOf(f);f=t(f))Object.getOwnPropertyNames(f).forEach((a=>d[a]=()=>e[a]));return d.default=()=>e,o.d(c,d),c},o.d=(e,a)=>{for(var t in a)o.o(a,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((a,t)=>(o.f[t](e,a),a)),[])),o.u=e=>"assets/js/"+({53:"935f2afb",453:"a07e2fb4",488:"b82c755b",578:"aad596c9",667:"1850a01b",2217:"a926180e",2540:"bd29dd74",2774:"2a89e53f",2916:"b0590aee",3089:"a6aa9e1f",4013:"01a85c17",4437:"fc7c0075",4494:"e552bfa0",4587:"eb97eb1c",4739:"299946ba",4901:"5196d418",5065:"ef78db7f",5247:"167de805",5920:"e0b92268",6077:"c1e2b293",6103:"ccc49370",6354:"e12d7cb1",6594:"8c32c81a",6880:"e013a9d7",7395:"24aafcc1",7396:"9ae052a0",7649:"5fe28b57",7918:"17896441",8091:"39a20abb",8367:"be1d6e69",8370:"137f54e0",8487:"97caddf3",8584:"290f532d",8610:"6875c492",8705:"85f1a52c",8890:"b4615189",9074:"b052a2e2",9456:"3edd08f2",9514:"1be78505",9725:"5802f3aa",9759:"65300381",9889:"c9083c08"}[e]||e)+"."+{53:"6a211488",453:"c78b2b7e",488:"f80dde6d",578:"b3e6ee1f",667:"dc00d180",2128:"89580ab3",2217:"38765ccd",2482:"0199b316",2540:"e72c9098",2774:"bb0f8614",2916:"40b805c1",3089:"c04f9bb0",3343:"ea03640b",4013:"37e8d583",4437:"b09f0a3e",4452:"df16f9d5",4494:"b74e01ba",4587:"2d4fd3e5",4739:"21238c74",4776:"716377b7",4901:"880ffa4e",5065:"20e11a61",5247:"cf2b9e0f",5920:"e4d993a7",6054:"463be976",6077:"507d1589",6103:"af165409",6354:"3a7f1434",6594:"a044f31e",6880:"cbe22988",6944:"0c413e5f",7395:"2eb6e328",7396:"0197464e",7649:"9eb07494",7918:"ab37938e",8091:"9b49ebca",8367:"1a275b2f",8370:"d98fd1d2",8487:"da02480a",8584:"51bd3f01",8610:"65e7c8da",8705:"c58516dc",8890:"6fe36264",8965:"3d0b4a68",9074:"7e75ba70",9456:"28346513",9514:"f1b6d8c6",9725:"74c54059",9759:"f9c5edd1",9889:"5758cdd5"}[e]+".js",o.miniCssF=e=>"assets/css/styles.388a8e87.css",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r={},c="picpay:",o.l=(e,a,t,d)=>{if(r[e])r[e].push(a);else{var f,b;if(void 0!==t)for(var n=document.getElementsByTagName("script"),i=0;i<n.length;i++){var l=n[i];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")==c+t){f=l;break}}f||(b=!0,(f=document.createElement("script")).charset="utf-8",f.timeout=120,o.nc&&f.setAttribute("nonce",o.nc),f.setAttribute("data-webpack",c+t),f.src=e),r[e]=[a];var s=(a,t)=>{f.onerror=f.onload=null,clearTimeout(u);var c=r[e];if(delete r[e],f.parentNode&&f.parentNode.removeChild(f),c&&c.forEach((e=>e(t))),a)return a(t)},u=setTimeout(s.bind(null,void 0,{type:"timeout",target:f}),12e4);f.onerror=s.bind(null,f.onerror),f.onload=s.bind(null,f.onload),b&&document.head.appendChild(f)}},o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),o.p="/picpay-docs-digital-payments/",o.gca=function(e){return e={17896441:"7918",65300381:"9759","935f2afb":"53",a07e2fb4:"453",b82c755b:"488",aad596c9:"578","1850a01b":"667",a926180e:"2217",bd29dd74:"2540","2a89e53f":"2774",b0590aee:"2916",a6aa9e1f:"3089","01a85c17":"4013",fc7c0075:"4437",e552bfa0:"4494",eb97eb1c:"4587","299946ba":"4739","5196d418":"4901",ef78db7f:"5065","167de805":"5247",e0b92268:"5920",c1e2b293:"6077",ccc49370:"6103",e12d7cb1:"6354","8c32c81a":"6594",e013a9d7:"6880","24aafcc1":"7395","9ae052a0":"7396","5fe28b57":"7649","39a20abb":"8091",be1d6e69:"8367","137f54e0":"8370","97caddf3":"8487","290f532d":"8584","6875c492":"8610","85f1a52c":"8705",b4615189:"8890",b052a2e2:"9074","3edd08f2":"9456","1be78505":"9514","5802f3aa":"9725",c9083c08:"9889"}[e]||e,o.p+o.u(e)},(()=>{var e={1303:0,532:0};o.f.j=(a,t)=>{var r=o.o(e,a)?e[a]:void 0;if(0!==r)if(r)t.push(r[2]);else if(/^(1303|532)$/.test(a))e[a]=0;else{var c=new Promise(((t,c)=>r=e[a]=[t,c]));t.push(r[2]=c);var d=o.p+o.u(a),f=new Error;o.l(d,(t=>{if(o.o(e,a)&&(0!==(r=e[a])&&(e[a]=void 0),r)){var c=t&&("load"===t.type?"missing":t.type),d=t&&t.target&&t.target.src;f.message="Loading chunk "+a+" failed.\n("+c+": "+d+")",f.name="ChunkLoadError",f.type=c,f.request=d,r[1](f)}}),"chunk-"+a,a)}},o.O.j=a=>0===e[a];var a=(a,t)=>{var r,c,d=t[0],f=t[1],b=t[2],n=0;if(d.some((a=>0!==e[a]))){for(r in f)o.o(f,r)&&(o.m[r]=f[r]);if(b)var i=b(o)}for(a&&a(t);n<d.length;n++)c=d[n],o.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return o.O(i)},t=self.webpackChunkpicpay=self.webpackChunkpicpay||[];t.forEach(a.bind(null,0)),t.push=a.bind(null,t.push.bind(t))})()})();