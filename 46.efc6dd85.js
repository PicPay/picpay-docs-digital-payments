(window.webpackJsonp=window.webpackJsonp||[]).push([[46,8],{125:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(117),l=t(142),o=t(143),s=t(161),i=t(146),m=t(160),u=t(3),h=t(24),d=t(22),p=t(123),E=t(147),f=t(116);function b(e){const{siteConfig:a,i18n:{currentLocale:t}}=Object(d.default)(),{favicon:n,themeConfig:{image:c,metadatas:l},url:o}=a,{title:s,description:i,image:m,keywords:b,permalink:g,searchMetadatas:w}=e,j=Object(f.useTitleFormatter)(s),k=m||c,y=Object(p.a)(k,{absolute:!0}),_=Object(p.a)(n),O=t.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,null,r.a.createElement("html",{lang:O}),j&&r.a.createElement("title",null,j),j&&r.a.createElement("meta",{property:"og:title",content:j}),n&&r.a.createElement("link",{rel:"shortcut icon",href:_}),i&&r.a.createElement("meta",{name:"description",content:i}),i&&r.a.createElement("meta",{property:"og:description",content:i}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),k&&r.a.createElement("meta",{property:"og:image",content:y}),k&&r.a.createElement("meta",{name:"twitter:image",content:y}),k&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${j}`}),g&&r.a.createElement("meta",{property:"og:url",content:o+g}),g&&r.a.createElement("link",{rel:"canonical",href:o+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap",rel:"stylesheet"})),r.a.createElement(E.a,Object(u.a)({tag:f.DEFAULT_SEARCH_TAG,locale:t},w)),r.a.createElement(h.a,null,l.map(((e,a)=>r.a.createElement("meta",Object(u.a)({key:`metadata_${a}`},e))))))}var g=t(148);t(57);a.a=function(e){const{children:a,noFooter:t,wrapperClassName:n}=e;return Object(g.a)(),r.a.createElement(m.a,null,r.a.createElement(b,e),r.a.createElement(l.a,null),r.a.createElement(o.a,null),r.a.createElement(s.a,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},a),!t&&r.a.createElement(i.a,null))}},144:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(135),l=t.n(c),o=t(120),s=t(22);a.a=e=>{const a=Object(n.useRef)(!1),c=Object(n.useRef)(null),i=Object(o.useHistory)(),{siteConfig:m={}}=Object(s.default)(),{baseUrl:u}=m,h=()=>{a.current||(Promise.all([fetch(`${u}search-doc.json`).then((e=>e.json())),fetch(`${u}lunr-index.json`).then((e=>e.json())),Promise.all([t.e(43),t.e(47)]).then(t.bind(null,162)),t.e(27).then(t.t.bind(null,159,7))]).then((([e,a,{default:t}])=>{0!==e.length&&((e,a,t)=>{new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:(e,a,t)=>{const n=u+t.url;document.createElement("a").href=n,i.push(n)}})})(e,a,t)})),a.current=!0)},d=Object(n.useCallback)((a=>{c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:d,onKeyDown:d,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:h,onMouseOver:h,onFocus:d,onBlur:d,ref:c}))}},251:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(125);a.default=function(){return r.a.createElement(c.a,{title:"Page Not Found"},r.a.createElement("main",{className:"container margin-vert--xl"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--6 col--offset-3"},r.a.createElement("h1",{className:"hero__title"},"Page Not Found"),r.a.createElement("p",null,"We could not find what you were looking for."),r.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}}}]);