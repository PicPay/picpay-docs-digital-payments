"use strict";(self.webpackChunkpicpay=self.webpackChunkpicpay||[]).push([[4013],{95601:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(86010),l=a(36742);const s={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};function c(e){let{sidebar:t}=e;return 0===t.items.length?null:n.createElement("div",{className:(0,r.Z)(s.sidebar,"thin-scrollbar")},n.createElement("h3",{className:s.sidebarItemTitle},t.title),n.createElement("ul",{className:s.sidebarItemList},t.items.map((e=>n.createElement("li",{key:e.permalink,className:s.sidebarItem},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title))))))}},82053:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(67294),r=a(68485),l=a(36742),s=a(95601),c=a(24973),i=a(86700);const o=function(e){const{tags:t,sidebar:a}=e,o={};Object.keys(t).forEach((e=>{const t=function(e){return e[0].toUpperCase()}(e);o[t]=o[t]||[],o[t].push(e)}));const m=Object.entries(o).sort(((e,t)=>{let[a]=e,[n]=t;return a===n?0:a>n?1:-1})).map((e=>{let[a,r]=e;return n.createElement("div",{key:a},n.createElement("h3",null,a),r.map((e=>n.createElement(l.Z,{className:"padding-right--md",href:t[e].permalink,key:e},t[e].name," (",t[e].count,")"))),n.createElement("hr",null))})).filter((e=>null!=e));return n.createElement(r.Z,{title:"Tags",description:"Blog Tags",wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--3"},n.createElement(s.Z,{sidebar:a})),n.createElement("main",{className:"col col--7"},n.createElement("h1",null,n.createElement(c.Z,{id:"theme.tags.tagsPageTitle",description:"The title of the tag list page"},"Tags")),n.createElement("div",{className:"margin-vert--lg"},m)))))}},68485:(e,t,a)=>{a.d(t,{Z:()=>b});var n=a(67294),r=a(86010),l=a(33946),s=a(70094),c=a(7479),i=a(17557),o=a(87462),m=a(99105),d=a(52263),u=a(44996),p=a(34246),h=a(86700);function f(e){const{siteConfig:t,i18n:{currentLocale:a}}=(0,d.default)(),{favicon:r,themeConfig:{image:l,metadatas:s},url:c}=t,{title:i,description:f,image:E,keywords:v,permalink:b,searchMetadatas:g}=e,Z=(0,h.pe)(i),N=E||l,k=(0,u.Z)(N,{absolute:!0}),_=(0,u.Z)(r),w=a.split("-")[0];return n.createElement(n.Fragment,null,n.createElement(m.Z,null,n.createElement("html",{lang:w}),Z&&n.createElement("title",null,Z),Z&&n.createElement("meta",{property:"og:title",content:Z}),r&&n.createElement("link",{rel:"shortcut icon",href:_}),f&&n.createElement("meta",{name:"description",content:f}),f&&n.createElement("meta",{property:"og:description",content:f}),v&&v.length&&n.createElement("meta",{name:"keywords",content:v.join(",")}),N&&n.createElement("meta",{property:"og:image",content:k}),N&&n.createElement("meta",{name:"twitter:image",content:k}),N&&n.createElement("meta",{name:"twitter:image:alt",content:`Image for ${Z}`}),b&&n.createElement("meta",{property:"og:url",content:c+b}),b&&n.createElement("link",{rel:"canonical",href:c+b}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap",rel:"stylesheet"})),n.createElement(p.Z,(0,o.Z)({tag:h.HX,locale:a},g)),n.createElement(m.Z,null,s.map(((e,t)=>n.createElement("meta",(0,o.Z)({key:`metadata_${t}`},e))))))}var E=a(38245),v=a(88330);const b=function(e){const{children:t,noFooter:a,wrapperClassName:o}=e;return(0,E.Z)(),n.createElement(i.Z,null,n.createElement(f,e),n.createElement(l.Z,null),n.createElement(s.Z,null),n.createElement(v.Z,null),n.createElement("div",{className:(0,r.Z)("main-wrapper",o)},t),!a&&n.createElement(c.Z,null))}},48219:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),r=a(67294),l=a(86010),s=a(36742),c=a(44996),i=a(16550),o=a(86700),m=a(80907);function d(e){let{activeBasePath:t,activeBaseRegex:a,to:o,href:d,label:u,activeClassName:p="navbar__link--active",prependBaseUrlToHref:h,sidebarId:f,...E}=e;const v=(0,i.TH)(),b=(0,c.Z)(o),g=(0,c.Z)(t);let Z=(0,c.Z)(d,{forcePrependBaseUrl:!0});const{activeDoc:N}=(0,m.useActiveDocContext)();v.pathname.includes("/en/")&&void 0!==E.hrefEn&&(d=E.hrefEn);const k=()=>!(null==f||!N||f!=N.sidebar)||(a?new RegExp(a).test(v.pathname):v.pathname.startsWith(g));return r.createElement(s.Z,(0,n.Z)({},d?{href:h?Z:d}:{isNavLink:!0,activeClassName:p,to:b,...t||a?{isActive:k()}:null},E,{className:(0,l.Z)(E.className,{[p]:k()})}),u)}function u(e){let{items:t,position:a,className:s,...c}=e;const i=(0,r.useRef)(null),o=(0,r.useRef)(null),[m,u]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=e=>{i.current&&!i.current.contains(e.target)&&u(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[i]);const p=function(e,t){return void 0===t&&(t=!1),(0,l.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.createElement("div",{ref:i,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":m})},r.createElement(d,(0,n.Z)({className:p(s)},c,{onClick:c.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),u(!m))}}),c.children??c.label),r.createElement("ul",{ref:o,className:"dropdown__menu"},t.map(((e,a)=>{let{className:l,...s}=e;return r.createElement("li",{key:a},r.createElement(d,(0,n.Z)({onKeyDown:e=>{if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),u(!1);const t=i.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active",className:p(l,!0)},s)))})))):r.createElement(d,(0,n.Z)({className:p(s)},c))}function p(e){let{items:t,className:a,position:s,...c}=e;const m=(0,r.useRef)(null),{pathname:u}=(0,i.TH)(),[p,h]=(0,r.useState)((()=>!t?.some((e=>(0,o.Mg)(e.to,u)))??!0)),f=function(e,t){return void 0===t&&(t=!1),(0,l.Z)("menu__link",{"menu__link--sublist":t},e)};if(!t)return r.createElement("li",{className:"menu__list-item"},r.createElement(d,(0,n.Z)({className:f(a)},c)));const E=m.current?.scrollHeight?`${m.current?.scrollHeight}px`:void 0;return r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":p})},r.createElement(d,(0,n.Z)({role:"button",className:f(a,!0)},c,{onClick:e=>{e.preventDefault(),h((e=>!e))}}),c.children??c.label),r.createElement("ul",{className:"menu__list",ref:m,style:{height:p?void 0:E}},t.map(((e,t)=>{let{className:a,...l}=e;return r.createElement("li",{className:"menu__list-item",key:t},r.createElement(d,(0,n.Z)({activeClassName:"menu__link--active",className:f(a)},l,{onClick:c.onClick})))}))))}const h=function(e){let{mobile:t=!1,...a}=e;const n=t?p:u;return r.createElement(n,a)}},48729:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(87462),r=a(67294),l=a(48219),s=a(80907),c=a(86010),i=a(86700);function o(e){let{docId:t,activeSidebarClassName:a,label:o,docsPluginId:m,...d}=e;const{activeVersion:u,activeDoc:p}=(0,s.useActiveDocContext)(m),{preferredVersion:h}=(0,i.J)(m),f=(0,s.useLatestVersion)(m),E=u??h??f,v=E.docs.find((e=>e.id===t));if(!v){const e=E.docs.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id=${t} in version ${E.name}.\nAvailable docIds=\n- ${e}`)}return r.createElement(l.Z,(0,n.Z)({exact:!0},d,{className:(0,c.Z)(d.className,{[a]:p&&p.sidebar===v.sidebar}),label:o??v.id,to:v.path}))}},15391:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(87462),r=a(67294),l=a(48219),s=a(80907),c=a(86700);const i=e=>e.docs.find((t=>t.id===e.mainDocId));function o(e){let{mobile:t,docsPluginId:a,dropdownActiveClassDisabled:o,dropdownItemsBefore:m,dropdownItemsAfter:d,...u}=e;const p=(0,s.useActiveDocContext)(a),h=(0,s.useVersions)(a),f=(0,s.useLatestVersion)(a),{preferredVersion:E,savePreferredVersionName:v}=(0,c.J)(a);const b=p.activeVersion??E??f,g=t?"Versions":b.label,Z=t?void 0:i(b).path;return r.createElement(l.Z,(0,n.Z)({},u,{mobile:t,label:g,to:Z,items:function(){const e=h.map((e=>{const t=p?.alternateDocVersions[e.name]||i(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===p?.activeVersion,onClick:()=>{v(e.name)}}})),t=[...m,...e,...d];if(!(t.length<=1))return t}(),isActive:o?()=>!1:void 0}))}},81555:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(87462),r=a(67294),l=a(48219),s=a(80907),c=a(86700);const i=e=>e.docs.find((t=>t.id===e.mainDocId));function o(e){let{label:t,to:a,docsPluginId:o,...m}=e;const d=(0,s.useActiveVersion)(o),{preferredVersion:u}=(0,c.J)(o),p=(0,s.useLatestVersion)(o),h=d??u??p,f=t??h.label,E=a??i(h).path;return r.createElement(l.Z,(0,n.Z)({},m,{label:f,to:E}))}},12009:(e,t,a)=>{a.d(t,{Z:()=>f});var n=a(67294),r=a(48219),l=a(87462),s=a(23264),c=a(52263),i=a(86700);function o(e){let{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:o,...m}=e;const{i18n:{currentLocale:d,locales:u,localeConfigs:p}}=(0,c.default)(),h=(0,i.l5)();function f(e){return p[e].label}const E=[...a,...u.map((e=>{const t=`pathname://${h.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:f(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...o],v=t?"Languages":f(d);return n.createElement(r.Z,(0,l.Z)({},m,{href:"#",mobile:t,label:n.createElement("span",null,n.createElement(s.Z,{style:{verticalAlign:"text-bottom",marginRight:5}}),n.createElement("span",null,v)),items:E}))}var m=a(6979);const d="searchWrapper_glLF";function u(e){let{mobile:t}=e;return t?null:n.createElement("div",{className:d},n.createElement(m.Z,null))}const p={default:()=>r.Z,localeDropdown:()=>o,search:()=>u,docsVersion:()=>a(81555).Z,docsVersionDropdown:()=>a(15391).Z,doc:()=>a(48729).Z},h=function(e){void 0===e&&(e="default");const t=p[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()};function f(e){let{type:t,...a}=e;const r=h(t);return n.createElement(r,a)}},6979:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(94184),l=a.n(r),s=a(16550),c=a(52263);const i=e=>{const t=(0,n.useRef)(!1),r=(0,n.useRef)(null),i=(0,s.k6)(),{siteConfig:o={}}=(0,c.default)(),{baseUrl:m}=o,d=()=>{t.current||(Promise.all([fetch(`${m}search-doc.json`).then((e=>e.json())),fetch(`${m}lunr-index.json`).then((e=>e.json())),Promise.all([a.e(6944),a.e(4452)]).then(a.bind(a,57780)),Promise.all([a.e(532),a.e(3343)]).then(a.bind(a,53343))]).then((e=>{let[t,a,{default:n}]=e;0!==t.length&&((e,t,a)=>{new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:(e,t,a)=>{const n=m+a.url;document.createElement("a").href=n,i.push(n)}})})(t,a,n)})),t.current=!0)},u=(0,n.useCallback)((t=>{r.current.contains(t.target)||r.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return n.createElement("div",{className:"navbar__search",key:"search-box"},n.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:u,onKeyDown:u,tabIndex:0}),n.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:u,onBlur:u,ref:r}))}}}]);