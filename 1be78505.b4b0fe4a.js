(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{155:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(134),l=t(189),o=t(190),s=t(210),i=t(193),m=t(209),u=t(3),h=t(22),d=t(20),p=t(151),E=t(194),b=t(132);function g(e){const{siteConfig:a,i18n:{currentLocale:t}}=Object(d.default)(),{favicon:n,themeConfig:{image:c,metadatas:l},url:o}=a,{title:s,description:i,image:m,keywords:g,permalink:f,searchMetadatas:j}=e,w=Object(b.useTitleFormatter)(s),y=m||c,O=Object(p.a)(y,{absolute:!0}),k=Object(p.a)(n),_=t.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement("html",{lang:_}),w&&r.a.createElement("title",null,w),w&&r.a.createElement("meta",{property:"og:title",content:w}),n&&r.a.createElement("link",{rel:"shortcut icon",href:k}),i&&r.a.createElement("meta",{name:"description",content:i}),i&&r.a.createElement("meta",{property:"og:description",content:i}),g&&g.length&&r.a.createElement("meta",{name:"keywords",content:g.join(",")}),y&&r.a.createElement("meta",{property:"og:image",content:O}),y&&r.a.createElement("meta",{name:"twitter:image",content:O}),y&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${w}`}),f&&r.a.createElement("meta",{property:"og:url",content:o+f}),f&&r.a.createElement("link",{rel:"canonical",href:o+f}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap",rel:"stylesheet"})),r.a.createElement(E.a,Object(u.a)({tag:b.DEFAULT_SEARCH_TAG,locale:t},j)),r.a.createElement(h.a,null,l.map(((e,a)=>r.a.createElement("meta",Object(u.a)({key:`metadata_${a}`},e))))))}var f=t(195);t(56);a.a=function(e){const{children:a,noFooter:t,wrapperClassName:n}=e;return Object(f.a)(),r.a.createElement(m.a,null,r.a.createElement(g,e),r.a.createElement(l.a,null),r.a.createElement(o.a,null),r.a.createElement(s.a,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},a),!t&&r.a.createElement(i.a,null))}},191:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(169),l=t.n(c),o=t(149),s=t(20);a.a=e=>{const a=Object(n.useRef)(!1),c=Object(n.useRef)(null),i=Object(o.useHistory)(),{siteConfig:m={}}=Object(s.default)(),{baseUrl:u}=m,h=()=>{a.current||(Promise.all([fetch(`${u}search-doc.json`).then((e=>e.json())),fetch(`${u}lunr-index.json`).then((e=>e.json())),Promise.all([t.e(54),t.e(58)]).then(t.bind(null,211)),t.e(0).then(t.t.bind(null,59,7))]).then((e=>{let[a,t,{default:n}]=e;0!==a.length&&((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=u+t.url;document.createElement("a").href=n,i.push(n)}})})(a,t,n)})),a.current=!0)},d=Object(n.useCallback)((a=>{c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:d,onKeyDown:d,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:h,onMouseOver:h,onFocus:d,onBlur:d,ref:c}))}}}]);