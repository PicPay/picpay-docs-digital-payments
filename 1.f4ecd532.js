/*! For license information please see 1.f4ecd532.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{119:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(172);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var a=n(203);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return a.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return a.DEFAULT_SEARCH_TAG}});var o=n(173);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return o.isDocsPluginEnabled}});var c=n(207);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return c.isSamePath}});var s=n(208);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return s.useTitleFormatter}});var i=n(209);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return i.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return i.useDocsPreferredVersionByPluginId}});var l=n(174);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return l.DocsPreferredVersionContextProvider}})},120:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},123:function(e,t,n){"use strict";n.r(t);var r=n(11);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},126:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(11),c=n(149),s=n(7);const i=Object(r.createContext)({collectLink:()=>{}});var l=n(127),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:d,href:f,activeClassName:m,isActive:h,"data-noBrokenLinkCheck":v,autoAddBaseUrl:b=!0}=e,g=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:p}=Object(l.b)(),O=Object(r.useContext)(i),k=d||f,j=Object(c.a)(k),E=null==k?void 0:k.replace("pathname://",""),y=void 0!==E?(_=E,b&&(e=>e.startsWith("/"))(_)?p(_):_):void 0;var _;const C=Object(r.useRef)(!1),D=n?o.e:o.c,w=s.a.canUseIntersectionObserver;let P;Object(r.useEffect)((()=>(!w&&j&&window.docusaurus.prefetch(y),()=>{w&&P&&P.disconnect()})),[y,w,j]);const N=null!==(t=null==y?void 0:y.startsWith("#"))&&void 0!==t&&t,S=!y||!j||N;return y&&j&&!N&&!v&&O.collectLink(y),S?a.a.createElement("a",Object.assign({href:y},k&&!j&&{target:"_blank",rel:"noopener noreferrer"},g)):a.a.createElement(D,Object.assign({},g,{onMouseEnter:()=>{C.current||(window.docusaurus.preload(y),C.current=!0)},innerRef:e=>{var t,n;w&&e&&j&&(t=e,n=()=>{window.docusaurus.prefetch(y)},P=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(P.unobserve(t),P.disconnect(),n())}))})),P.observe(t))},to:y||""},n&&{isActive:h,activeClassName:m}))}},127:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return c}));var r=n(21),a=n(149);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,r){let{forcePrependBaseUrl:o=!1,absolute:c=!1}=void 0===r?{}:r;if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(o)return t+n;const s=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+s:s}(t,e,n,r)}}function c(e,t){void 0===t&&(t={});const{withBaseUrl:n}=o();return n(e,t)}},132:function(e,t,n){try{e.exports=n(204)}catch(r){e.exports={}}},138:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var c=a.apply(null,r);c&&e.push(c)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},146:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(68),c=n.n(o);t.a=function(){return a.a.createElement("nav",{"aria-label":"Skip navigation links"},a.a.createElement("button",{type:"button",tabIndex:0,className:c.a.skipToContent,onKeyDown:e=>{if(13!==e.keyCode)return;document.activeElement.blur();const t=document.querySelector("main:first-of-type");t&&t.scrollIntoView()}},"Skip to main content"))}},147:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(120),c=n(119),s=n(269),i=n(69),l=n.n(i);t.a=function(){const{isAnnouncementBarClosed:e,closeAnnouncementBar:t}=Object(s.a)(),{announcementBar:n}=Object(c.useThemeConfig)();if(!n)return null;const{content:r,backgroundColor:i,textColor:u,isCloseable:d}=n;return!r||d&&e?null:a.a.createElement("div",{className:l.a.announcementBar,style:{backgroundColor:i,color:u},role:"banner"},a.a.createElement("div",{className:Object(o.a)(l.a.announcementBarContent,{[l.a.announcementBarCloseable]:d}),dangerouslySetInnerHTML:{__html:r}}),d?a.a.createElement("button",{type:"button",className:l.a.announcementBarClose,onClick:t,"aria-label":"Close"},a.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null)}},149:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},150:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a),c=n(120),s=n(126),i=n(119),l=n(127),u=n(73),d=n.n(u);function f(e){let{to:t,href:n,label:a,prependBaseUrlToHref:c,...i}=e;const u=Object(l.a)(t),d=Object(l.a)(n,{forcePrependBaseUrl:!0});return o.a.createElement(s.a,Object(r.a)({className:"footer__link-item"},n?{target:"_blank",rel:"noopener noreferrer",href:c?d:n}:{to:u},i),a)}const m=e=>{let{url:t,alt:n}=e;return o.a.createElement("img",{className:"footer__logo",alt:n,src:t})};t.a=function(){const{footer:e}=Object(i.useThemeConfig)(),{copyright:t,links:n=[],logo:r={}}=e||{},a=Object(l.a)(r.src);return e?o.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},o.a.createElement("div",{className:"container"},n&&n.length>0&&o.a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(f,e))))):null)))),(r||t)&&o.a.createElement("div",{className:"footer__bottom text--center"},r&&r.src&&o.a.createElement("div",{className:"margin-bottom--sm"},r.href?o.a.createElement("a",{href:r.href,target:"_blank",rel:"noopener noreferrer",className:d.a.footerLogoLink},o.a.createElement(m,{alt:r.alt,url:a})):o.a.createElement(m,{alt:r.alt,url:a})),t?o.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null}},151:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0),a=n.n(r),o=n(23);function c(e){let{locale:t,version:n,tag:r}=e;return a.a.createElement(o.a,null,t&&a.a.createElement("meta",{name:"docusaurus_locale",content:`${t}`}),n&&a.a.createElement("meta",{name:"docusaurus_version",content:n}),r&&a.a.createElement("meta",{name:"docusaurus_tag",content:r}))}},152:function(e,t,n){"use strict";var r=n(0);n(74);t.a=function(){Object(r.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])}},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var r=n(0),a=n.n(r),o=n(7),c=n(119);const s="light",i="dark",l=e=>e===i?i:s,u=()=>o.a.canUseDOM?l(document.documentElement.getAttribute("data-theme")):s,d=e=>{try{localStorage.setItem("theme",l(e))}catch(t){console.error(t)}};var f=()=>{const{colorMode:{disableSwitch:e,respectPrefersColorScheme:t}}=Object(c.useThemeConfig)(),[n,a]=Object(r.useState)(u),o=Object(r.useCallback)((()=>{a(s),d(s)}),[]),f=Object(r.useCallback)((()=>{a(i),d(i)}),[]);return Object(r.useEffect)((()=>{document.documentElement.setAttribute("data-theme",l(n))}),[n]),Object(r.useEffect)((()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(l(e))}catch(t){console.error(t)}}),[a]),Object(r.useEffect)((()=>{e&&!t||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;a(t?i:s)}))}),[]),{isDarkTheme:n===i,setLightTheme:o,setDarkTheme:f}},m=n(271);var h=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=f();return a.a.createElement(m.a.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)};const v="docusaurus.tab.";var b=()=>{const[e,t]=Object(r.useState)({}),n=Object(r.useCallback)(((e,t)=>{try{localStorage.setItem(`docusaurus.tab.${e}`,t)}catch(n){console.error(n)}}),[]);return Object(r.useEffect)((()=>{try{const e={};for(let t=0;t<localStorage.length;t+=1){const n=localStorage.key(t);if(n.startsWith(v)){e[n.substring(v.length)]=localStorage.getItem(n)}}t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,r)=>{t((t=>({...t,[e]:r}))),n(e,r)}}};const g="docusaurus.announcement.dismiss",p="docusaurus.announcement.id";var O=()=>{const{announcementBar:e}=Object(c.useThemeConfig)(),[t,n]=Object(r.useState)(!0),a=Object(r.useCallback)((()=>{localStorage.setItem(g,"true"),n(!0)}),[]);return Object(r.useEffect)((()=>{if(!e)return;const{id:t}=e;let r=localStorage.getItem(p);"annoucement-bar"===r&&(r="announcement-bar");const a=t!==r;localStorage.setItem(p,t),a&&localStorage.setItem(g,"false"),(a||"false"===localStorage.getItem(g))&&n(!1)}),[]),{isAnnouncementBarClosed:t,closeAnnouncementBar:a}},k=n(270);var j=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=b(),{isAnnouncementBarClosed:r,closeAnnouncementBar:o}=O();return a.a.createElement(k.a.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n,isAnnouncementBarClosed:r,closeAnnouncementBar:o}},e.children)};function E(e){let{children:t}=e;return a.a.createElement(h,null,a.a.createElement(j,null,a.a.createElement(c.DocsPreferredVersionContextProvider,null,t)))}},163:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a),c=n(120),s=n(148),i=n(360),l=n.n(i),u=n(119),d=n(21),f=n(70),m=n.n(f);const h=e=>{let{icon:t,style:n}=e;return o.a.createElement("span",{className:Object(c.a)(m.a.toggle,m.a.dark),style:n},t)},v=e=>{let{icon:t,style:n}=e;return o.a.createElement("span",{className:Object(c.a)(m.a.toggle,m.a.light),style:n},t)};var b=function(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:a,lightIconStyle:c}}}=Object(u.useThemeConfig)(),{isClient:s}=Object(d.default)();return o.a.createElement(l.a,Object(r.a)({disabled:!s,icons:{checked:o.a.createElement(h,{icon:t,style:n}),unchecked:o.a.createElement(v,{icon:a,style:c})}},e))},g=n(186),p=n(123),O=n(272);var k=e=>{const t=Object(p.useLocation)(),[n,r]=Object(a.useState)(!e),o=Object(a.useRef)(!1),[c,s]=Object(a.useState)(0),[i,l]=Object(a.useState)(0),u=Object(a.useCallback)((e=>{null!==e&&l(e.getBoundingClientRect().height)}),[]);return Object(O.a)((t=>{let{scrollY:n}=t;if(!e)return;if(n<i)return;if(o.current)return o.current=!1,r(!1),void s(n);c&&0===n&&r(!0);const a=document.documentElement.scrollHeight-i,l=window.innerHeight;c&&n>=c?r(!1):n+l<a&&r(!0),s(n)}),[c,i,o]),Object(a.useEffect)((()=>{e&&c&&r(!0)}),[t.pathname]),Object(a.useEffect)((()=>{e&&(o.current=!0)}),[t.hash]),{navbarRef:u,isNavbarVisible:n}},j=n(273),E=n(274),y=n(175);function _(e){let{mobile:t,...n}=e;const{siteConfig:{baseUrl:a},i18n:{defaultLocale:c,currentLocale:s,locales:i,localeConfigs:l}}=Object(d.default)(),{pathname:u}=Object(p.useLocation)();function f(e){return l[e].label}const m=s===c?a:a.replace(`/${s}/`,"/"),h=u.replace(a,"");const v=i.map((e=>{const t=`${function(e){return e===c?`${m}`:`${m}${e}/`}(e)}${h}`;return{isNavLink:!0,label:f(e),to:`pathname://${t}`,target:"_self",autoAddBaseUrl:!1,className:e===s?"dropdown__link--active":""}})),b=t?"Languages":f(s);return o.a.createElement(y.a,Object(r.a)({},n,{mobile:t,label:b,items:v}))}const C={default:()=>y.a,localeDropdown:()=>_,docsVersion:()=>n(364).default,docsVersionDropdown:()=>n(365).default,doc:()=>n(366).default};function D(e){let{type:t,...n}=e;const r=function(e){void 0===e&&(e="default");const t=C[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()}(t);return o.a.createElement(r,n)}var w=n(359),P=n(275),N=n(72),S=n.n(N);const V="right";t.a=function(){const{navbar:{items:e,hideOnScroll:t,style:n},colorMode:{disableSwitch:i}}=Object(u.useThemeConfig)(),[l,d]=Object(a.useState)(!1),[f,m]=Object(a.useState)(!1),{isDarkTheme:h,setLightTheme:v,setDarkTheme:p}=Object(g.a)(),{navbarRef:O,isNavbarVisible:y}=k(t);Object(j.a)(l);const _=Object(a.useCallback)((()=>{d(!0)}),[d]),C=Object(a.useCallback)((()=>{d(!1)}),[d]),N=Object(a.useCallback)((e=>e.target.checked?p():v()),[v,p]),T=Object(E.a)();Object(a.useEffect)((()=>{T===E.b.desktop&&d(!1)}),[T]);const{leftItems:L,rightItems:A}=function(e){return{leftItems:e.filter((e=>{var t;return"left"===(null!==(t=e.position)&&void 0!==t?t:V)})),rightItems:e.filter((e=>{var t;return"right"===(null!==(t=e.position)&&void 0!==t?t:V)}))}}(e);return o.a.createElement("nav",{ref:O,className:Object(c.a)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===n,"navbar--primary":"primary"===n,"navbar-sidebar--show":l,[S.a.navbarHideable]:t,[S.a.navbarHidden]:!y})},o.a.createElement("div",{className:"navbar__inner"},o.a.createElement("div",{className:"navbar__items"},null!=e&&0!==e.length&&o.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:_,onKeyDown:_},o.a.createElement(P.a,null)),o.a.createElement(w.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:Object(c.a)("navbar__title",{[S.a.hideLogoText]:f})}),L.map(((e,t)=>o.a.createElement(D,Object(r.a)({},e,{key:t}))))),o.a.createElement("div",{className:"navbar__items navbar__items--right"},A.map(((e,t)=>o.a.createElement(D,Object(r.a)({},e,{key:t})))),!i&&o.a.createElement(b,{className:S.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:h,onChange:N}),o.a.createElement(s.a,{handleSearchBarToggle:m,isSearchBarExpanded:f}))),o.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:C}),o.a.createElement("div",{className:"navbar-sidebar"},o.a.createElement("div",{className:"navbar-sidebar__brand"},o.a.createElement(w.a,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title",onClick:C}),!i&&l&&o.a.createElement(b,{"aria-label":"Dark mode toggle in sidebar",checked:h,onChange:N})),o.a.createElement("div",{className:"navbar-sidebar__items"},o.a.createElement("div",{className:"menu"},o.a.createElement("ul",{className:"menu__list"},e.map(((e,t)=>o.a.createElement(D,Object(r.a)({mobile:!0},e,{onClick:C,key:t})))))))))}},172:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;const a=r(n(21));t.useThemeConfig=function(){return a.default().siteConfig.themeConfig}},173:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;const r=n(132);t.isDocsPluginEnabled=!!r.useAllDocsData},174:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;const s=o(n(0)),i=n(172),l=n(173),u=n(132),d=c(n(210));function f(e){let{pluginIds:t,versionPersistence:n,allDocsData:r}=e;const a={};return t.forEach((e=>{a[e]=function(e){const t=d.default.read(e,n);return r[e].versions.some((e=>e.name===t))?{preferredVersionName:t}:(d.default.clear(e,n),{preferredVersionName:null})}(e)})),a}function m(){const e=u.useAllDocsData(),t=i.useThemeConfig().docs.versionPersistence,n=s.useMemo((()=>Object.keys(e)),[e]),[r,a]=s.useState((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));s.useEffect((()=>{a(f({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,s.useMemo((()=>({savePreferredVersion:function(e,n){d.default.save(e,t,n),a((t=>Object.assign(Object.assign({},t),{[e]:{preferredVersionName:n}})))}})),[a])]}const h=s.createContext(null);function v(e){let{children:t}=e;const n=m();return s.default.createElement(h.Provider,{value:n},t)}t.DocsPreferredVersionContextProvider=function(e){let{children:t}=e;return l.isDocsPluginEnabled?s.default.createElement(v,null,t):s.default.createElement(s.default.Fragment,null,t)},t.useDocsPreferredVersionContext=function(){const e=s.useContext(h);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},175:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a),c=n(120),s=n(126),i=n(127),l=n(123),u=n(119);function d(e){let{activeBasePath:t,activeBaseRegex:n,to:a,href:c,label:l,activeClassName:u="navbar__link--active",prependBaseUrlToHref:d,...f}=e;const m=Object(i.a)(a),h=Object(i.a)(t),v=Object(i.a)(c,{forcePrependBaseUrl:!0});return o.a.createElement(s.a,Object(r.a)({},c?{target:"_blank",rel:"noopener noreferrer",href:d?v:c}:{isNavLink:!0,activeClassName:u,to:m,...t||n?{isActive:(e,t)=>n?new RegExp(n).test(t.pathname):t.pathname.startsWith(h)}:null},f),l)}function f(e){let{items:t,position:n,className:s,...i}=e;const l=Object(a.useRef)(null),u=Object(a.useRef)(null),[f,m]=Object(a.useState)(!1);Object(a.useEffect)((()=>{const e=e=>{l.current&&!l.current.contains(e.target)&&m(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[l]);const h=function(e,t){return void 0===t&&(t=!1),Object(c.a)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?o.a.createElement("div",{ref:l,className:Object(c.a)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===n,"dropdown--right":"right"===n,"dropdown--show":f})},o.a.createElement(d,Object(r.a)({className:h(s)},i,{onClick:i.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),m(!f))}}),i.label),o.a.createElement("ul",{ref:u,className:"dropdown__menu"},t.map(((e,n)=>{let{className:a,...c}=e;return o.a.createElement("li",{key:n},o.a.createElement(d,Object(r.a)({onKeyDown:e=>{if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),m(!1);const t=l.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active",className:h(a,!0)},c)))})))):o.a.createElement(d,Object(r.a)({className:h(s)},i))}function m(e){var t,n;let{items:s,className:i,position:f,...m}=e;const h=Object(a.useRef)(null),{pathname:v}=Object(l.useLocation)(),[b,g]=Object(a.useState)((()=>{var e;return null===(e=!(null!=s&&s.some((e=>Object(u.isSamePath)(e.to,v)))))||void 0===e||e})),p=function(e,t){return void 0===t&&(t=!1),Object(c.a)("menu__link",{"menu__link--sublist":t},e)};if(!s)return o.a.createElement("li",{className:"menu__list-item"},o.a.createElement(d,Object(r.a)({className:p(i)},m)));const O=null!==(t=h.current)&&void 0!==t&&t.scrollHeight?`${null===(n=h.current)||void 0===n?void 0:n.scrollHeight}px`:void 0;return o.a.createElement("li",{className:Object(c.a)("menu__list-item",{"menu__list-item--collapsed":b})},o.a.createElement(d,Object(r.a)({role:"button",className:p(i,!0)},m,{onClick:()=>{g((e=>!e))}}),m.label),o.a.createElement("ul",{className:"menu__list",ref:h,style:{height:b?void 0:O}},s.map(((e,t)=>{let{className:n,...a}=e;return o.a.createElement("li",{className:"menu__list-item",key:t},o.a.createElement(d,Object(r.a)({activeClassName:"menu__link--active",className:p(n)},a,{onClick:m.onClick})))}))))}t.a=function(e){let{mobile:t=!1,...n}=e;const r=t?m:f;return o.a.createElement(r,n)}},186:function(e,t,n){"use strict";var r=n(0),a=n(271);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useThemeContext` is used outside of `Layout` Component. See https://v2.docusaurus.io/docs/theme-classic#usethemecontext.");return e}},203:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return`docs-${e}-${t}`}},204:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(123),a=n(205),o=n(206);t.useAllDocsData=()=>a.useAllPluginInstancesData("docusaurus-plugin-content-docs"),t.useDocsData=e=>a.usePluginData("docusaurus-plugin-content-docs",e),t.useActivePlugin=function(e){void 0===e&&(e={});const n=t.useAllDocsData(),{pathname:a}=r.useLocation();return o.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=function(e){void 0===e&&(e={});const n=t.useActivePlugin(e),{pathname:a}=r.useLocation();if(n){return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,a)}}},t.useVersions=e=>t.useDocsData(e).versions,t.useLatestVersion=e=>{const n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:a}=r.useLocation();return o.getActiveVersion(n,a)},t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:a}=r.useLocation();return o.getActiveDocContext(n,a)},t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:a}=r.useLocation();return o.getDocVersionSuggestions(n,a)}},205:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return c}));var r=n(21);function a(){const{globalData:e}=Object(r.default)();if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){const t=a()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for pluginName=${e}`);return t}function c(e,t){void 0===t&&(t="default");const n=o(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${e} and pluginId=${t}`);return n}},206:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(123);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});const a=Object.entries(e).find((e=>{let[n,a]=e;return!!r.matchPath(t,{path:a.path,exact:!1,strict:!1})})),o=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!o&&n.failfast)throw new Error(`Can't find active docs plugin for pathname=${t}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return o},t.getLatestVersion=e=>e.versions.find((e=>e.isLast)),t.getActiveVersion=(e,n)=>{const a=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==a)),a].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))},t.getActiveDocContext=(e,n)=>{const a=t.getActiveVersion(e,n),o=null==a?void 0:a.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:a,activeDoc:o,alternateDocVersions:o?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(o.id):{}}},t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),o=a.activeVersion!==r;return{latestDocSuggestion:o?null==a?void 0:a.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:o?r:void 0}}},207:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)}},208:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;const a=r(n(21));t.useTitleFormatter=e=>{const{siteConfig:t={}}=a.default(),{title:n,titleDelimiter:r="|"}=t;return e&&e.trim().length?`${e.trim()} ${r} ${n}`:n}},209:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;const r=n(0),a=n(174),o=n(132),c=n(211);t.useDocsPreferredVersion=function(e){void 0===e&&(e=c.DEFAULT_PLUGIN_ID);const t=o.useDocsData(e),[n,s]=a.useDocsPreferredVersionContext(),{preferredVersionName:i}=n[e];return{preferredVersion:i?t.versions.find((e=>e.name===i)):null,savePreferredVersionName:r.useCallback((t=>{s.savePreferredVersion(e,t)}),[s])}},t.useDocsPreferredVersionByPluginId=function(){const e=o.useAllDocsData(),[t]=a.useDocsPreferredVersionContext(),n=Object.keys(e),r={};return n.forEach((n=>{r[n]=function(n){const r=e[n],{preferredVersionName:a}=t[n];return a?r.versions.find((e=>e.name===a)):null}(n)})),r}},210:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=e=>`docs-preferred-version-${e}`,a={save:(e,t,n)=>{"none"===t||window.localStorage.setItem(r(e),n)},read:(e,t)=>"none"===t?null:window.localStorage.getItem(r(e)),clear:(e,t)=>{"none"===t||window.localStorage.removeItem(r(e))}};t.default=a},211:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));const r="default"},269:function(e,t,n){"use strict";var r=n(0),a=n(270);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},270:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},271:function(e,t,n){"use strict";var r=n(0);const a=n.n(r).a.createContext(void 0);t.a=a},272:function(e,t,n){"use strict";var r=n(0),a=n(7);const o=()=>({scrollX:a.a.canUseDOM?window.pageXOffset:0,scrollY:a.a.canUseDOM?window.pageYOffset:0});t.a=function(e,t){void 0===t&&(t=[]);const[n,a]=Object(r.useState)(o()),c=()=>{const t=o();a(t),e&&e(t)};return Object(r.useEffect)((()=>{const e={passive:!0};return window.addEventListener("scroll",c,e),()=>window.removeEventListener("scroll",c,e)}),t),n}},273:function(e,t,n){"use strict";var r=n(0);t.a=function(e){void 0===e&&(e=!0),Object(r.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])}},274:function(e,t,n){"use strict";n.d(t,"b",(function(){return a}));var r=n(0);const a={desktop:"desktop",mobile:"mobile"};t.a=function(){const e="undefined"!=typeof window;function t(){if(e)return window.innerWidth>996?a.desktop:a.mobile}const[n,o]=Object(r.useState)(t);return Object(r.useEffect)((()=>{if(e)return window.addEventListener("resize",n),()=>window.removeEventListener("resize",n);function n(){o(t())}}),[]),n}},275:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a);t.a=e=>{let{width:t=30,height:n=30,className:a,...c}=e;return o.a.createElement("svg",Object(r.a)({"aria-label":"Menu",className:a,width:t,height:n,viewBox:"0 0 30 30",role:"img",focusable:"false"},c),o.a.createElement("title",null,"Menu"),o.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))}},359:function(e,t,n){"use strict";var r=n(3),a=n(0),o=n.n(a),c=n(126),s=n(120),i=n(21),l=n(186),u=n(71),d=n.n(u);var f=e=>{const{isClient:t}=Object(i.default)(),{isDarkTheme:n}=Object(l.a)(),{sources:a,className:c,alt:u="",...f}=e,m=t?n?["dark"]:["light"]:["light","dark"];return o.a.createElement(o.a.Fragment,null,m.map((e=>o.a.createElement("img",Object(r.a)({key:e,src:a[e],alt:u,className:Object(s.a)(d.a.themedImage,d.a[`themedImage--${e}`],c)},f)))))},m=n(127),h=n(119),v=n(149);t.a=e=>{const{isClient:t}=Object(i.default)(),{navbar:{title:n,logo:a={src:""}}}=Object(h.useThemeConfig)(),{imageClassName:s,titleClassName:l,...u}=e,d=Object(m.a)(a.href||"/"),b=a.target?{target:a.target}:Object(v.a)(d)?{}:{rel:"noopener noreferrer",target:"_blank"},g={light:Object(m.a)(a.src),dark:Object(m.a)(a.srcDark||a.src)};return o.a.createElement(c.a,Object(r.a)({to:d},u,b),a.src&&o.a.createElement(f,{key:t,className:s,sources:g,alt:a.alt||n||"Logo"}),null!=n&&o.a.createElement("strong",{className:l},n))}},360:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),c=f(o),s=f(n(138)),i=f(n(1)),l=f(n(361)),u=f(n(362)),d=n(363);function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handleClick=n.handleClick.bind(n),n.handleTouchStart=n.handleTouchStart.bind(n),n.handleTouchMove=n.handleTouchMove.bind(n),n.handleTouchEnd=n.handleTouchEnd.bind(n),n.handleFocus=n.handleFocus.bind(n),n.handleBlur=n.handleBlur.bind(n),n.previouslyChecked=!(!e.checked&&!e.defaultChecked),n.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){if(!this.props.disabled){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var n=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:n})}}},{key:"handleTouchStart",value:function(e){this.props.disabled||(this.startX=(0,d.pointerCoord)(e).x,this.activated=!0)}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var n=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>n?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<n&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var n=this.props.icons;return n?void 0===n[e]?t.defaultProps.icons[e]:n[e]:null}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,a=(t.icons,function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["className","icons"])),o=(0,s.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},n);return c.default.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},c.default.createElement("div",{className:"react-toggle-track"},c.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),c.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),c.default.createElement("div",{className:"react-toggle-thumb"}),c.default.createElement("input",r({},a,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(o.PureComponent);t.default=m,m.displayName="Toggle",m.defaultProps={icons:{checked:c.default.createElement(l.default,null),unchecked:c.default.createElement(u.default,null)}},m.propTypes={checked:i.default.bool,disabled:i.default.bool,defaultChecked:i.default.bool,onChange:i.default.func,onFocus:i.default.func,onBlur:i.default.func,className:i.default.string,name:i.default.string,value:i.default.string,id:i.default.string,"aria-labelledby":i.default.string,"aria-label":i.default.string,icons:i.default.oneOfType([i.default.bool,i.default.shape({checked:i.default.node,unchecked:i.default.node})])}},361:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(){return o.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},o.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},362:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(0),o=(r=a)&&r.__esModule?r:{default:r};t.default=function(){return o.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},o.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},363:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var n=t[0];return{x:n.clientX,y:n.clientY}}var r=e.pageX;if(void 0!==r)return{x:r,y:e.pageY}}return{x:0,y:0}}},364:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return l}));var r=n(3),a=n(0),o=n.n(a),c=n(175),s=n(132),i=n(119);function l(e){var t;let{label:n,to:a,docsPluginId:l,...u}=e;const d=Object(s.useActiveVersion)(l),{preferredVersion:f}=Object(i.useDocsPreferredVersion)(l),m=Object(s.useLatestVersion)(l),h=null!==(t=null!=d?d:f)&&void 0!==t?t:m,v=null!=n?n:h.label,b=null!=a?a:(e=>e.docs.find((t=>t.id===e.mainDocId)))(h).path;return o.a.createElement(c.a,Object(r.a)({},u,{label:v,to:b}))}},365:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(3),a=n(0),o=n.n(a),c=n(175),s=n(132),i=n(119);const l=e=>e.docs.find((t=>t.id===e.mainDocId));function u(e){var t,n;let{mobile:a,docsPluginId:u,dropdownActiveClassDisabled:d,dropdownItemsBefore:f,dropdownItemsAfter:m,...h}=e;const v=Object(s.useActiveDocContext)(u),b=Object(s.useVersions)(u),g=Object(s.useLatestVersion)(u),{preferredVersion:p,savePreferredVersionName:O}=Object(i.useDocsPreferredVersion)(u);const k=null!==(t=null!==(n=v.activeVersion)&&void 0!==n?n:p)&&void 0!==t?t:g,j=a?"Versions":k.label,E=a?void 0:l(k).path;return o.a.createElement(c.a,Object(r.a)({},h,{mobile:a,label:j,to:E,items:function(){const e=b.map((e=>{const t=(null==v?void 0:v.alternateDocVersions[e.name])||l(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===(null==v?void 0:v.activeVersion),onClick:()=>{O(e.name)}}})),t=[...f,...e,...m];if(!(t.length<=1))return t}(),isActive:d?()=>!1:void 0}))}},366:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return u}));var r=n(3),a=n(0),o=n.n(a),c=n(175),s=n(132),i=n(120),l=n(119);function u(e){var t;let{docId:n,activeSidebarClassName:a,label:u,docsPluginId:d,...f}=e;const{activeVersion:m,activeDoc:h}=Object(s.useActiveDocContext)(d),{preferredVersion:v}=Object(l.useDocsPreferredVersion)(d),b=Object(s.useLatestVersion)(d),g=null!==(t=null!=m?m:v)&&void 0!==t?t:b,p=g.docs.find((e=>e.id===n));if(!p)throw new Error(`DocNavbarItem: couldn't find any doc with id=${n} in version ${g.name}.\nAvailable docIds=\n- ${g.docs.join("\n- ")}`);return o.a.createElement(c.a,Object(r.a)({exact:!0},f,{className:Object(i.a)(f.className,{[a]:h&&h.sidebar===p.sidebar}),label:null!=u?u:p.id,to:p.path}))}}}]);