(window.webpackJsonp=window.webpackJsonp||[]).push([[29,8],{123:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t(152),i=t(326),s=t(149);var m=function(e){const{metadata:a}=e,{previousPage:t,nextPage:n}=a;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(s.a,{className:"pagination-nav__link",to:t},r.a.createElement("div",{className:"pagination-nav__label"},"\xab Newer Entries"))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},n&&r.a.createElement(s.a,{className:"pagination-nav__link",to:n},r.a.createElement("div",{className:"pagination-nav__label"},"Older Entries \xbb"))))},o=t(216);a.default=function(e){const{metadata:a,items:t,sidebar:n}=e,{siteConfig:{title:s}}=Object(l.default)(),{blogDescription:u,blogTitle:d,permalink:p}=a,E="/"===p?s:d;return r.a.createElement(c.a,{title:E,description:u,wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{sidebar:n})),r.a.createElement("main",{className:"col col--8"},t.map((e=>{let{content:a}=e;return r.a.createElement(i.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:a.metadata.truncated},r.a.createElement(a,null))})),r.a.createElement(m,{metadata:a})))))}},152:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(131),c=t(180),i=t(181),s=t(197),m=t(184),o=t(196),u=t(3),d=t(23),p=t(21),E=t(150),h=t(185),g=t(129);function b(e){const{siteConfig:a,i18n:{currentLocale:t}}=Object(p.default)(),{favicon:n,themeConfig:{image:l,metadatas:c},url:i}=a,{title:s,description:m,image:o,keywords:b,permalink:f,searchMetadatas:v}=e,_=Object(g.useTitleFormatter)(s),w=o||l,j=Object(E.a)(w,{absolute:!0}),N=Object(E.a)(n),k=t.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement("html",{lang:k}),_&&r.a.createElement("title",null,_),_&&r.a.createElement("meta",{property:"og:title",content:_}),n&&r.a.createElement("link",{rel:"shortcut icon",href:N}),m&&r.a.createElement("meta",{name:"description",content:m}),m&&r.a.createElement("meta",{property:"og:description",content:m}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),w&&r.a.createElement("meta",{property:"og:image",content:j}),w&&r.a.createElement("meta",{name:"twitter:image",content:j}),w&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${_}`}),f&&r.a.createElement("meta",{property:"og:url",content:i+f}),f&&r.a.createElement("link",{rel:"canonical",href:i+f}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap",rel:"stylesheet"})),r.a.createElement(h.a,Object(u.a)({tag:g.DEFAULT_SEARCH_TAG,locale:t},v)),r.a.createElement(d.a,null,c.map(((e,a)=>r.a.createElement("meta",Object(u.a)({key:`metadata_${a}`},e))))))}var f=t(186);t(57);a.a=function(e){const{children:a,noFooter:t,wrapperClassName:n}=e;return Object(f.a)(),r.a.createElement(o.a,null,r.a.createElement(b,e),r.a.createElement(c.a,null),r.a.createElement(i.a,null),r.a.createElement(s.a,null),r.a.createElement("div",{className:Object(l.a)("main-wrapper",n)},a),!t&&r.a.createElement(m.a,null))}},182:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(163),c=t.n(l),i=t(147),s=t(21);a.a=e=>{const a=Object(n.useRef)(!1),l=Object(n.useRef)(null),m=Object(i.useHistory)(),{siteConfig:o={}}=Object(s.default)(),{baseUrl:u}=o,d=()=>{a.current||(Promise.all([fetch(`${u}search-doc.json`).then((e=>e.json())),fetch(`${u}lunr-index.json`).then((e=>e.json())),Promise.all([t.e(51),t.e(55)]).then(t.bind(null,198)),t.e(0).then(t.t.bind(null,58,7))]).then((e=>{let[a,t,{default:n}]=e;0!==a.length&&((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=u+t.url;document.createElement("a").href=n,m.push(n)}})})(a,t,n)})),a.current=!0)},p=Object(n.useCallback)((a=>{l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:c()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:c()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:p,onBlur:p,ref:l}))}}}]);