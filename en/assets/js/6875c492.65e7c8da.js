"use strict";(self.webpackChunkpicpay=self.webpackChunkpicpay||[]).push([[8610],{43146:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(67294),r=a(86010),l=a(3905),s=a(24973),c=a(36742),o=a(44927),i=a(41217);const m="blogPostTitle_d4p0",d="blogPostDate_iEnO";var u=a(86700);const p=function(e){const t=function(){const{selectMessage:e}=(0,u.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:p,metadata:g,truncated:h,isBlogPostPage:E=!1}=e,{date:f,formattedDate:v,permalink:b,tags:Z,readingTime:_}=g,{author:N,title:k,image:w,keywords:y}=p,I=p.author_url||p.authorURL,L=p.author_title||p.authorTitle,C=p.author_image_url||p.authorImageURL;return n.createElement(n.Fragment,null,n.createElement(i.Z,{keywords:y,image:w}),n.createElement("article",{className:E?void 0:"margin-bottom--xl"},(()=>{const e=E?"h1":"h2";return n.createElement("header",null,n.createElement(e,{className:(0,r.Z)("margin-bottom--sm",m)},E?k:n.createElement(c.Z,{to:b},k)),n.createElement("div",{className:"margin-vert--md"},n.createElement("time",{dateTime:f,className:d},v,_&&n.createElement(n.Fragment,null," \xb7 ",t(_)))),n.createElement("div",{className:"avatar margin-vert--md"},C&&n.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:I},n.createElement("img",{src:C,alt:N})),n.createElement("div",{className:"avatar__intro"},N&&n.createElement(n.Fragment,null,n.createElement("h4",{className:"avatar__name"},n.createElement(c.Z,{href:I},N)),n.createElement("small",{className:"avatar__subtitle"},L)))))})(),n.createElement("div",{className:"markdown"},n.createElement(l.Zo,{components:o.Z},a)),(Z.length>0||h)&&n.createElement("footer",{className:"row margin-vert--lg"},Z.length>0&&n.createElement("div",{className:"col"},n.createElement("strong",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),Z.map((e=>{let{label:t,permalink:a}=e;return n.createElement(c.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),h&&n.createElement("div",{className:"col text--right"},n.createElement(c.Z,{to:g.permalink,"aria-label":`Read more about ${k}`},n.createElement("strong",null,n.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},95601:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(86010),l=a(36742);const s={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};function c(e){let{sidebar:t}=e;return 0===t.items.length?null:n.createElement("div",{className:(0,r.Z)(s.sidebar,"thin-scrollbar")},n.createElement("h3",{className:s.sidebarItemTitle},t.title),n.createElement("ul",{className:s.sidebarItemList},t.items.map((e=>n.createElement("li",{key:e.permalink,className:s.sidebarItem},n.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title))))))}},69404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(67294),r=a(68485),l=a(43146),s=a(36742),c=a(95601),o=a(24973),i=a(86700);function m(e){let{tagName:t,count:a}=e;const r=function(){const{selectMessage:e}=(0,i.c2)();return t=>e(t,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return n.createElement(o.Z,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:r(a),tagName:t}},'{nPosts} tagged with "{tagName}"')}const d=function(e){const{metadata:t,items:a,sidebar:d}=e,{allTagsPath:u,name:p,count:g}=t;return n.createElement(r.Z,{title:`Posts tagged "${p}"`,description:`Blog | Tagged "${p}"`,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--3"},n.createElement(c.Z,{sidebar:d})),n.createElement("main",{className:"col col--7"},n.createElement("h1",null,n.createElement(m,{count:g,tagName:p})),n.createElement(s.Z,{href:u},n.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),n.createElement("div",{className:"margin-vert--xl"},a.map((e=>{let{content:t}=e;return n.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},n.createElement(t,null))})))))))}},41217:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),r=a(99105),l=a(86700),s=a(44996);function c(e){let{title:t,description:a,keywords:c,image:o}=e;const{image:i}=(0,l.LU)(),m=(0,l.pe)(t),d=(0,s.Z)(o||i,{absolute:!0});return n.createElement(r.Z,null,t&&n.createElement("title",null,m),t&&n.createElement("meta",{property:"og:title",content:m}),a&&n.createElement("meta",{name:"description",content:a}),a&&n.createElement("meta",{property:"og:description",content:a}),c&&n.createElement("meta",{name:"keywords",content:Array.isArray(c)?c.join(","):c}),d&&n.createElement("meta",{property:"og:image",content:d}),d&&n.createElement("meta",{name:"twitter:image",content:d}),d&&n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},68485:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(67294),r=a(86010),l=a(33946),s=a(70094),c=a(7479),o=a(17557),i=a(87462),m=a(99105),d=a(52263),u=a(44996),p=a(34246),g=a(86700);function h(e){const{siteConfig:t,i18n:{currentLocale:a}}=(0,d.default)(),{favicon:r,themeConfig:{image:l,metadatas:s},url:c}=t,{title:o,description:h,image:E,keywords:f,permalink:v,searchMetadatas:b}=e,Z=(0,g.pe)(o),_=E||l,N=(0,u.Z)(_,{absolute:!0}),k=(0,u.Z)(r),w=a.split("-")[0];return n.createElement(n.Fragment,null,n.createElement(m.Z,null,n.createElement("html",{lang:w}),Z&&n.createElement("title",null,Z),Z&&n.createElement("meta",{property:"og:title",content:Z}),r&&n.createElement("link",{rel:"shortcut icon",href:k}),h&&n.createElement("meta",{name:"description",content:h}),h&&n.createElement("meta",{property:"og:description",content:h}),f&&f.length&&n.createElement("meta",{name:"keywords",content:f.join(",")}),_&&n.createElement("meta",{property:"og:image",content:N}),_&&n.createElement("meta",{name:"twitter:image",content:N}),_&&n.createElement("meta",{name:"twitter:image:alt",content:`Image for ${Z}`}),v&&n.createElement("meta",{property:"og:url",content:c+v}),v&&n.createElement("link",{rel:"canonical",href:c+v}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap",rel:"stylesheet"})),n.createElement(p.Z,(0,i.Z)({tag:g.HX,locale:a},b)),n.createElement(m.Z,null,s.map(((e,t)=>n.createElement("meta",(0,i.Z)({key:`metadata_${t}`},e))))))}var E=a(38245),f=a(88330);const v=function(e){const{children:t,noFooter:a,wrapperClassName:i}=e;return(0,E.Z)(),n.createElement(o.Z,null,n.createElement(h,e),n.createElement(l.Z,null),n.createElement(s.Z,null),n.createElement(f.Z,null),n.createElement("div",{className:(0,r.Z)("main-wrapper",i)},t),!a&&n.createElement(c.Z,null))}},48219:(e,t,a)=>{a.d(t,{Z:()=>g});var n=a(87462),r=a(67294),l=a(86010),s=a(36742),c=a(44996),o=a(16550),i=a(86700),m=a(80907);function d(e){let{activeBasePath:t,activeBaseRegex:a,to:i,href:d,label:u,activeClassName:p="navbar__link--active",prependBaseUrlToHref:g,sidebarId:h,...E}=e;const f=(0,o.TH)(),v=(0,c.Z)(i),b=(0,c.Z)(t);let Z=(0,c.Z)(d,{forcePrependBaseUrl:!0});const{activeDoc:_}=(0,m.useActiveDocContext)();f.pathname.includes("/en/")&&void 0!==E.hrefEn&&(d=E.hrefEn);const N=()=>!(null==h||!_||h!=_.sidebar)||(a?new RegExp(a).test(f.pathname):f.pathname.startsWith(b));return r.createElement(s.Z,(0,n.Z)({},d?{href:g?Z:d}:{isNavLink:!0,activeClassName:p,to:v,...t||a?{isActive:N()}:null},E,{className:(0,l.Z)(E.className,{[p]:N()})}),u)}function u(e){let{items:t,position:a,className:s,...c}=e;const o=(0,r.useRef)(null),i=(0,r.useRef)(null),[m,u]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=e=>{o.current&&!o.current.contains(e.target)&&u(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[o]);const p=function(e,t){return void 0===t&&(t=!1),(0,l.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return t?r.createElement("div",{ref:o,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===a,"dropdown--right":"right"===a,"dropdown--show":m})},r.createElement(d,(0,n.Z)({className:p(s)},c,{onClick:c.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),u(!m))}}),c.children??c.label),r.createElement("ul",{ref:i,className:"dropdown__menu"},t.map(((e,a)=>{let{className:l,...s}=e;return r.createElement("li",{key:a},r.createElement(d,(0,n.Z)({onKeyDown:e=>{if(a===t.length-1&&"Tab"===e.key){e.preventDefault(),u(!1);const t=o.current.nextElementSibling;t&&t.focus()}},activeClassName:"dropdown__link--active",className:p(l,!0)},s)))})))):r.createElement(d,(0,n.Z)({className:p(s)},c))}function p(e){let{items:t,className:a,position:s,...c}=e;const m=(0,r.useRef)(null),{pathname:u}=(0,o.TH)(),[p,g]=(0,r.useState)((()=>!t?.some((e=>(0,i.Mg)(e.to,u)))??!0)),h=function(e,t){return void 0===t&&(t=!1),(0,l.Z)("menu__link",{"menu__link--sublist":t},e)};if(!t)return r.createElement("li",{className:"menu__list-item"},r.createElement(d,(0,n.Z)({className:h(a)},c)));const E=m.current?.scrollHeight?`${m.current?.scrollHeight}px`:void 0;return r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":p})},r.createElement(d,(0,n.Z)({role:"button",className:h(a,!0)},c,{onClick:e=>{e.preventDefault(),g((e=>!e))}}),c.children??c.label),r.createElement("ul",{className:"menu__list",ref:m,style:{height:p?void 0:E}},t.map(((e,t)=>{let{className:a,...l}=e;return r.createElement("li",{className:"menu__list-item",key:t},r.createElement(d,(0,n.Z)({activeClassName:"menu__link--active",className:h(a)},l,{onClick:c.onClick})))}))))}const g=function(e){let{mobile:t=!1,...a}=e;const n=t?p:u;return r.createElement(n,a)}},48729:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),r=a(67294),l=a(48219),s=a(80907),c=a(86010),o=a(86700);function i(e){let{docId:t,activeSidebarClassName:a,label:i,docsPluginId:m,...d}=e;const{activeVersion:u,activeDoc:p}=(0,s.useActiveDocContext)(m),{preferredVersion:g}=(0,o.J)(m),h=(0,s.useLatestVersion)(m),E=u??g??h,f=E.docs.find((e=>e.id===t));if(!f){const e=E.docs.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id=${t} in version ${E.name}.\nAvailable docIds=\n- ${e}`)}return r.createElement(l.Z,(0,n.Z)({exact:!0},d,{className:(0,c.Z)(d.className,{[a]:p&&p.sidebar===f.sidebar}),label:i??f.id,to:f.path}))}},15391:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),r=a(67294),l=a(48219),s=a(80907),c=a(86700);const o=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){let{mobile:t,docsPluginId:a,dropdownActiveClassDisabled:i,dropdownItemsBefore:m,dropdownItemsAfter:d,...u}=e;const p=(0,s.useActiveDocContext)(a),g=(0,s.useVersions)(a),h=(0,s.useLatestVersion)(a),{preferredVersion:E,savePreferredVersionName:f}=(0,c.J)(a);const v=p.activeVersion??E??h,b=t?"Versions":v.label,Z=t?void 0:o(v).path;return r.createElement(l.Z,(0,n.Z)({},u,{mobile:t,label:b,to:Z,items:function(){const e=g.map((e=>{const t=p?.alternateDocVersions[e.name]||o(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===p?.activeVersion,onClick:()=>{f(e.name)}}})),t=[...m,...e,...d];if(!(t.length<=1))return t}(),isActive:i?()=>!1:void 0}))}},81555:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(87462),r=a(67294),l=a(48219),s=a(80907),c=a(86700);const o=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){let{label:t,to:a,docsPluginId:i,...m}=e;const d=(0,s.useActiveVersion)(i),{preferredVersion:u}=(0,c.J)(i),p=(0,s.useLatestVersion)(i),g=d??u??p,h=t??g.label,E=a??o(g).path;return r.createElement(l.Z,(0,n.Z)({},m,{label:h,to:E}))}},12009:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(67294),r=a(48219),l=a(87462),s=a(23264),c=a(52263),o=a(86700);function i(e){let{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:i,...m}=e;const{i18n:{currentLocale:d,locales:u,localeConfigs:p}}=(0,c.default)(),g=(0,o.l5)();function h(e){return p[e].label}const E=[...a,...u.map((e=>{const t=`pathname://${g.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:h(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...i],f=t?"Languages":h(d);return n.createElement(r.Z,(0,l.Z)({},m,{href:"#",mobile:t,label:n.createElement("span",null,n.createElement(s.Z,{style:{verticalAlign:"text-bottom",marginRight:5}}),n.createElement("span",null,f)),items:E}))}var m=a(6979);const d="searchWrapper_glLF";function u(e){let{mobile:t}=e;return t?null:n.createElement("div",{className:d},n.createElement(m.Z,null))}const p={default:()=>r.Z,localeDropdown:()=>i,search:()=>u,docsVersion:()=>a(81555).Z,docsVersionDropdown:()=>a(15391).Z,doc:()=>a(48729).Z},g=function(e){void 0===e&&(e="default");const t=p[e];if(!t)throw new Error(`No NavbarItem component found for type=${e}.`);return t()};function h(e){let{type:t,...a}=e;const r=g(t);return n.createElement(r,a)}},6979:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(94184),l=a.n(r),s=a(16550),c=a(52263);const o=e=>{const t=(0,n.useRef)(!1),r=(0,n.useRef)(null),o=(0,s.k6)(),{siteConfig:i={}}=(0,c.default)(),{baseUrl:m}=i,d=()=>{t.current||(Promise.all([fetch(`${m}search-doc.json`).then((e=>e.json())),fetch(`${m}lunr-index.json`).then((e=>e.json())),Promise.all([a.e(6944),a.e(4452)]).then(a.bind(a,57780)),Promise.all([a.e(532),a.e(3343)]).then(a.bind(a,53343))]).then((e=>{let[t,a,{default:n}]=e;0!==t.length&&((e,t,a)=>{new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:(e,t,a)=>{const n=m+a.url;document.createElement("a").href=n,o.push(n)}})})(t,a,n)})),t.current=!0)},u=(0,n.useCallback)((t=>{r.current.contains(t.target)||r.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return n.createElement("div",{className:"navbar__search",key:"search-box"},n.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:u,onKeyDown:u,tabIndex:0}),n.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:u,onBlur:u,ref:r}))}}}]);