(window.webpackJsonp=window.webpackJsonp||[]).push([[4,8],{152:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(131),c=t(180),s=t(181),i=t(197),m=t(184),o=t(196),u=t(3),d=t(23),h=t(21),p=t(150),E=t(185),b=t(129);function g(e){const{siteConfig:a,i18n:{currentLocale:t}}=Object(h.default)(),{favicon:n,themeConfig:{image:l,metadatas:c},url:s}=a,{title:i,description:m,image:o,keywords:g,permalink:f,searchMetadatas:k}=e,v=Object(b.useTitleFormatter)(i),j=o||l,N=Object(p.a)(j,{absolute:!0}),w=Object(p.a)(n),y=t.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement("html",{lang:y}),v&&r.a.createElement("title",null,v),v&&r.a.createElement("meta",{property:"og:title",content:v}),n&&r.a.createElement("link",{rel:"shortcut icon",href:w}),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),j&&r.a.createElement("meta",{property:"og:image",content:N}),j&&r.a.createElement("meta",{name:"twitter:image",content:N}),j&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${v}`}),f&&r.a.createElement("meta",{property:"og:url",content:s+f}),f&&r.a.createElement("link",{rel:"canonical",href:s+f}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap",rel:"stylesheet"})),r.a.createElement(E.a,Object(u.a)({tag:b.DEFAULT_SEARCH_TAG,locale:t},k)),r.a.createElement(d.a,null,c.map(((e,a)=>r.a.createElement("meta",Object(u.a)({key:`metadata_${a}`},e))))))}var f=t(186);t(57);a.a=function(e){const{children:a,noFooter:t,wrapperClassName:n}=e;return Object(f.a)(),r.a.createElement(o.a,null,r.a.createElement(g,e),r.a.createElement(c.a,null),r.a.createElement(s.a,null),r.a.createElement(i.a,null),r.a.createElement("div",{className:Object(l.a)("main-wrapper",n)},a),!t&&r.a.createElement(m.a,null))}},182:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(163),c=t.n(l),s=t(147),i=t(21);a.a=e=>{const a=Object(n.useRef)(!1),l=Object(n.useRef)(null),m=Object(s.useHistory)(),{siteConfig:o={}}=Object(i.default)(),{baseUrl:u}=o,d=()=>{a.current||(Promise.all([fetch(`${u}search-doc.json`).then((e=>e.json())),fetch(`${u}lunr-index.json`).then((e=>e.json())),Promise.all([t.e(51),t.e(55)]).then(t.bind(null,198)),t.e(0).then(t.t.bind(null,58,7))]).then((e=>{let[a,t,{default:n}]=e;0!==a.length&&((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=u+t.url;document.createElement("a").href=n,m.push(n)}})})(a,t,n)})),a.current=!0)},h=Object(n.useCallback)((a=>{l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:l}))}},216:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t(0),r=t.n(n),l=t(131),c=t(149),s=t(61),i=t.n(s);function m(e){let{sidebar:a}=e;return 0===a.items.length?null:r.a.createElement("div",{className:Object(l.a)(i.a.sidebar,"thin-scrollbar")},r.a.createElement("h3",{className:i.a.sidebarItemTitle},a.title),r.a.createElement("ul",{className:i.a.sidebarItemList},a.items.map((e=>r.a.createElement("li",{key:e.permalink,className:i.a.sidebarItem},r.a.createElement(c.a,{isNavLink:!0,to:e.permalink,className:i.a.sidebarItemLink,activeClassName:i.a.sidebarItemLinkActive},e.title))))))}},75:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(152),c=t(149),s=t(216);a.default=function(e){const{tags:a,sidebar:t}=e,n={};Object.keys(a).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e);n[a]=n[a]||[],n[a].push(e)}));const i=Object.entries(n).sort(((e,a)=>{let[t]=e,[n]=a;return t===n?0:t>n?1:-1})).map((e=>{let[t,n]=e;return r.a.createElement("div",{key:t},r.a.createElement("h3",null,t),n.map((e=>r.a.createElement(c.a,{className:"padding-right--md",href:a[e].permalink,key:e},a[e].name," (",a[e].count,")"))),r.a.createElement("hr",null))})).filter((e=>null!=e));return r.a.createElement(l.a,{title:"Tags",description:"Blog Tags",wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(s.a,{sidebar:t})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,"Tags"),r.a.createElement("div",{className:"margin-vert--lg"},i)))))}}}]);