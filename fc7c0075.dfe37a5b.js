(window.webpackJsonp=window.webpackJsonp||[]).push([[41,8],{109:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(123);t.default=function(){return r.a.createElement(c.a,{title:"Hello"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"50vh",fontSize:"20px"}},r.a.createElement("p",null,"Edit ",r.a.createElement("code",null,"pages/hello.js")," and save to reload.")))}},123:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(117),l=a(142),o=a(143),i=a(160),s=a(145),m=a(159),u=a(3),d=a(24),h=a(22),p=a(125),E=a(146),f=a(116);function b(e){var t=Object(h.default)(),a=t.siteConfig,n=t.i18n.currentLocale,c=a.favicon,l=a.themeConfig,o=l.image,i=l.metadatas,s=a.url,m=e.title,b=e.description,g=e.image,j=e.keywords,v=e.permalink,y=e.searchMetadatas,w=Object(f.useTitleFormatter)(m),O=g||o,k=Object(p.a)(O,{absolute:!0}),x=Object(p.a)(c),S=n.split("-")[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,null,r.a.createElement("html",{lang:S}),w&&r.a.createElement("title",null,w),w&&r.a.createElement("meta",{property:"og:title",content:w}),c&&r.a.createElement("link",{rel:"shortcut icon",href:x}),b&&r.a.createElement("meta",{name:"description",content:b}),b&&r.a.createElement("meta",{property:"og:description",content:b}),j&&j.length&&r.a.createElement("meta",{name:"keywords",content:j.join(",")}),O&&r.a.createElement("meta",{property:"og:image",content:k}),O&&r.a.createElement("meta",{name:"twitter:image",content:k}),O&&r.a.createElement("meta",{name:"twitter:image:alt",content:"Image for "+w}),v&&r.a.createElement("meta",{property:"og:url",content:s+v}),v&&r.a.createElement("link",{rel:"canonical",href:s+v}),r.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap",rel:"stylesheet"})),r.a.createElement(E.a,Object(u.a)({tag:f.DEFAULT_SEARCH_TAG,locale:n},y)),r.a.createElement(d.a,null,i.map((function(e,t){return r.a.createElement("meta",Object(u.a)({key:"metadata_"+t},e))}))))}var g=a(147);a(57);t.a=function(e){var t=e.children,a=e.noFooter,n=e.wrapperClassName;return Object(g.a)(),r.a.createElement(m.a,null,r.a.createElement(b,e),r.a.createElement(l.a,null),r.a.createElement(o.a,null),r.a.createElement(i.a,null),r.a.createElement("div",{className:Object(c.a)("main-wrapper",n)},t),!a&&r.a.createElement(s.a,null))}},144:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(134),l=a.n(c),o=a(124),i=a(22);t.a=function(e){var t=Object(n.useRef)(!1),c=Object(n.useRef)(null),s=Object(o.useHistory)(),m=Object(i.default)().siteConfig,u=(void 0===m?{}:m).baseUrl,d=function(){t.current||(Promise.all([fetch(u+"search-doc.json").then((function(e){return e.json()})),fetch(u+"lunr-index.json").then((function(e){return e.json()})),Promise.all([a.e(45),a.e(48)]).then(a.bind(null,161)),a.e(24).then(a.t.bind(null,158,7))]).then((function(e){var t=e[0],a=e[1],n=e[2].default;0!==t.length&&function(e,t,a){new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,a){var n=u+a.url;document.createElement("a").href=n,s.push(n)}})}(t,a,n)})),t.current=!0)},h=Object(n.useCallback)((function(t){c.current.contains(t.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:h,onBlur:h,ref:c}))}}}]);