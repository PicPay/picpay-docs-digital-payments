"use strict";(self.webpackChunkpicpay=self.webpackChunkpicpay||[]).push([[8610],{43146:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(67294),n=a(86010),l=a(3905),s=a(24973),c=a(36742),m=a(44927),i=a(41217);const o="blogPostTitle_d4p0",d="blogPostDate_iEnO";var u=a(86700);const g=function(e){const t=function(){const{selectMessage:e}=(0,u.c2)();return t=>{const a=Math.ceil(t);return e(a,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{children:a,frontMatter:g,metadata:p,truncated:h,isBlogPostPage:E=!1}=e,{date:b,formattedDate:f,permalink:k,tags:v,readingTime:_}=p,{author:Z,title:N,image:y,keywords:w}=g,T=g.author_url||g.authorURL,I=g.author_title||g.authorTitle,x=g.author_image_url||g.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(i.Z,{keywords:w,image:y}),r.createElement("article",{className:E?void 0:"margin-bottom--xl"},(()=>{const e=E?"h1":"h2";return r.createElement("header",null,r.createElement(e,{className:(0,n.Z)("margin-bottom--sm",o)},E?N:r.createElement(c.Z,{to:k},N)),r.createElement("div",{className:"margin-vert--md"},r.createElement("time",{dateTime:b,className:d},f,_&&r.createElement(r.Fragment,null," \xb7 ",t(_)))),r.createElement("div",{className:"avatar margin-vert--md"},x&&r.createElement(c.Z,{className:"avatar__photo-link avatar__photo",href:T},r.createElement("img",{src:x,alt:Z})),r.createElement("div",{className:"avatar__intro"},Z&&r.createElement(r.Fragment,null,r.createElement("h4",{className:"avatar__name"},r.createElement(c.Z,{href:T},Z)),r.createElement("small",{className:"avatar__subtitle"},I)))))})(),r.createElement("div",{className:"markdown"},r.createElement(l.Zo,{components:m.Z},a)),(v.length>0||h)&&r.createElement("footer",{className:"row margin-vert--lg"},v.length>0&&r.createElement("div",{className:"col"},r.createElement("strong",null,r.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),v.map((e=>{let{label:t,permalink:a}=e;return r.createElement(c.Z,{key:a,className:"margin-horiz--sm",to:a},t)}))),h&&r.createElement("div",{className:"col text--right"},r.createElement(c.Z,{to:p.permalink,"aria-label":`Read more about ${N}`},r.createElement("strong",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},95601:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(67294),n=a(86010),l=a(36742);const s={sidebar:"sidebar_q+wC",sidebarItemTitle:"sidebarItemTitle_9G5K",sidebarItemList:"sidebarItemList_6T4b",sidebarItem:"sidebarItem_cjdF",sidebarItemLink:"sidebarItemLink_zyXk",sidebarItemLinkActive:"sidebarItemLinkActive_wcJs"};function c(e){let{sidebar:t}=e;return 0===t.items.length?null:r.createElement("div",{className:(0,n.Z)(s.sidebar,"thin-scrollbar")},r.createElement("h3",{className:s.sidebarItemTitle},t.title),r.createElement("ul",{className:s.sidebarItemList},t.items.map((e=>r.createElement("li",{key:e.permalink,className:s.sidebarItem},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},e.title))))))}},69404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var r=a(67294),n=a(68485),l=a(43146),s=a(36742),c=a(95601),m=a(24973),i=a(86700);function o(e){let{tagName:t,count:a}=e;const n=function(){const{selectMessage:e}=(0,i.c2)();return t=>e(t,(0,m.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return r.createElement(m.Z,{id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",values:{nPosts:n(a),tagName:t}},'{nPosts} tagged with "{tagName}"')}const d=function(e){const{metadata:t,items:a,sidebar:d}=e,{allTagsPath:u,name:g,count:p}=t;return r.createElement(n.Z,{title:`Posts tagged "${g}"`,description:`Blog | Tagged "${g}"`,wrapperClassName:i.kM.wrapper.blogPages,pageClassName:i.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("div",{className:"col col--3"},r.createElement(c.Z,{sidebar:d})),r.createElement("main",{className:"col col--7"},r.createElement("h1",null,r.createElement(o,{count:p,tagName:g})),r.createElement(s.Z,{href:u},r.createElement(m.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags")),r.createElement("div",{className:"margin-vert--xl"},a.map((e=>{let{content:t}=e;return r.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))))))}},41217:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(67294),n=a(99105),l=a(86700),s=a(44996);function c(e){let{title:t,description:a,keywords:c,image:m}=e;const{image:i}=(0,l.LU)(),o=(0,l.pe)(t),d=(0,s.Z)(m||i,{absolute:!0});return r.createElement(n.Z,null,t&&r.createElement("title",null,o),t&&r.createElement("meta",{property:"og:title",content:o}),a&&r.createElement("meta",{name:"description",content:a}),a&&r.createElement("meta",{property:"og:description",content:a}),c&&r.createElement("meta",{name:"keywords",content:Array.isArray(c)?c.join(","):c}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),d&&r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},68485:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(67294),n=a(86010),l=a(33946),s=a(70094),c=a(10844),m=a(7479),i=a(17557),o=a(87462),d=a(99105),u=a(52263),g=a(44996),p=a(34246),h=a(86700);function E(e){const{siteConfig:t,i18n:{currentLocale:a}}=(0,u.default)(),{favicon:n,themeConfig:{image:l,metadatas:s},url:c}=t,{title:m,description:i,image:E,keywords:b,permalink:f,searchMetadatas:k}=e,v=(0,h.pe)(m),_=E||l,Z=(0,g.Z)(_,{absolute:!0}),N=(0,g.Z)(n),y=a.split("-")[0];return r.createElement(r.Fragment,null,r.createElement(d.Z,null,r.createElement("html",{lang:y}),v&&r.createElement("title",null,v),v&&r.createElement("meta",{property:"og:title",content:v}),n&&r.createElement("link",{rel:"shortcut icon",href:N}),i&&r.createElement("meta",{name:"description",content:i}),i&&r.createElement("meta",{property:"og:description",content:i}),b&&b.length&&r.createElement("meta",{name:"keywords",content:b.join(",")}),_&&r.createElement("meta",{property:"og:image",content:Z}),_&&r.createElement("meta",{name:"twitter:image",content:Z}),_&&r.createElement("meta",{name:"twitter:image:alt",content:`Image for ${v}`}),f&&r.createElement("meta",{property:"og:url",content:c+f}),f&&r.createElement("link",{rel:"canonical",href:c+f}),r.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),r.createElement("link",{href:"https://fonts.googleapis.com/css?family=Nunito+Sans:200,300,400,600,700,800,900&display=swap",rel:"stylesheet"})),r.createElement(p.Z,(0,o.Z)({tag:h.HX,locale:a},k)),r.createElement(d.Z,null,s.map(((e,t)=>r.createElement("meta",(0,o.Z)({key:`metadata_${t}`},e))))))}var b=a(38245);const f=function(e){const{children:t,noFooter:a,wrapperClassName:o}=e;return(0,b.Z)(),r.createElement(i.Z,null,r.createElement(E,e),r.createElement(l.Z,null),r.createElement(s.Z,null),r.createElement(c.Z,null),r.createElement("div",{className:(0,n.Z)("main-wrapper",o)},t),!a&&r.createElement(m.Z,null))}},6979:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(67294),n=a(94184),l=a.n(n),s=a(16550),c=a(52263);const m=e=>{const t=(0,r.useRef)(!1),n=(0,r.useRef)(null),m=(0,s.k6)(),{siteConfig:i={}}=(0,c.default)(),{baseUrl:o}=i,d=()=>{t.current||(Promise.all([fetch(`${o}search-doc.json`).then((e=>e.json())),fetch(`${o}lunr-index.json`).then((e=>e.json())),Promise.all([a.e(6944),a.e(4452)]).then(a.bind(a,57780)),Promise.all([a.e(532),a.e(3343)]).then(a.bind(a,53343))]).then((e=>{let[t,a,{default:r}]=e;0!==t.length&&((e,t,a)=>{new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:(e,t,a)=>{const r=o+a.url;document.createElement("a").href=r,m.push(r)}})})(t,a,r)})),t.current=!0)},u=(0,r.useCallback)((t=>{n.current.contains(t.target)||n.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.createElement("div",{className:"navbar__search",key:"search-box"},r.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:u,onKeyDown:u,tabIndex:0}),r.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:d,onMouseOver:d,onFocus:u,onBlur:u,ref:n}))}}}]);