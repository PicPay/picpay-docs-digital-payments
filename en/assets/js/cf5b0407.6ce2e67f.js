"use strict";(self.webpackChunkpicpay=self.webpackChunkpicpay||[]).push([[678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),s=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(h,a(a({ref:t},u),{},{components:n})):o.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var s=2;s<r;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},78661:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var o=n(87462),i=(n(67294),n(3905));const r={id:"postman-collection",title:"Postman Collection",description:"Collection do Postman para o PicPay 1-Click",hide_table_of_contents:!0},a={unversionedId:"one-click/resources/postman-collection",id:"one-click/resources/postman-collection",isDocsHomePage:!1,title:"Postman Collection",description:"Collection do Postman para o PicPay 1-Click",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/one-click/resources/postman-collection.md",sourceDirName:"one-click/resources",slug:"/one-click/resources/postman-collection",permalink:"/picpay-docs-digital-payments/en/one-click/resources/postman-collection",version:"current",frontMatter:{id:"postman-collection",title:"Postman Collection",description:"Collection do Postman para o PicPay 1-Click",hide_table_of_contents:!0},sidebar:"pagamentoLogado",previous:{title:"API Reference",permalink:"/picpay-docs-digital-payments/en/one-click/resources/api-reference"}},c=[{value:"About this guide",id:"about-this-guide",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"What can I do with this collection?",id:"what-can-i-do-with-this-collection",children:[]},{value:"Talk is cheap, show me the code!",id:"talk-is-cheap-show-me-the-code",children:[{value:"Getting the collection",id:"getting-the-collection",children:[]},{value:"Setting up your integration keys",id:"setting-up-your-integration-keys",children:[]}]},{value:"Didn&#39;t find what you needed?",id:"didnt-find-what-you-needed",children:[]}],l={toc:c},s="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(s,(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"about-this-guide"},"About this guide"),(0,i.kt)("p",null,"In this brief guide, we will describe how to use Postman as a support tool in your integration."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before starting your integration, you must have valid credentials. Currently, the PicPay 1-Click solution is not available to all of our merchants. Interested? Just contact us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:relacionamento-negocios@picpay.com"},"relacionamento-negocios@picpay.com")," to express your interest."),(0,i.kt)("h2",{id:"what-can-i-do-with-this-collection"},"What can I do with this collection?"),(0,i.kt)("p",null,"In our collection, we provide the following endpoints:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Endpoint for token generation"),(0,i.kt)("li",{parentName:"ul"},"Endpoint for token refresh"),(0,i.kt)("li",{parentName:"ul"},"Endpoint for refund"),(0,i.kt)("li",{parentName:"ul"},"Endpoint for charge"),(0,i.kt)("li",{parentName:"ul"},"Endpoint for retrieving user information")),(0,i.kt)("h2",{id:"talk-is-cheap-show-me-the-code"},"Talk is cheap, show me the code!"),(0,i.kt)("h3",{id:"getting-the-collection"},"Getting the collection"),(0,i.kt)("p",null,"Are you also a fan of Postman like us? Access our collection through the button below:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://app.getpostman.com/run-collection/e5b4593f331d1cb7fd49"},(0,i.kt)("img",{parentName:"a",src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"}))),(0,i.kt)("h3",{id:"setting-up-your-integration-keys"},"Setting up your integration keys"),(0,i.kt)("p",null,"After importing our collection, you can configure your keys within the environment settings as shown below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(23043).Z})),(0,i.kt)("h2",{id:"didnt-find-what-you-needed"},"Didn't find what you needed?"),(0,i.kt)("p",null,"We hope this article has been helpful! If you have any remaining questions, you can check our FAQ or contact us via email at ",(0,i.kt)("a",{parentName:"p",href:"mailto:relacionamento-negocios@picpay.com"},"relacionamento-negocios@picpay.com"),"."))}u.isMDXComponent=!0},23043:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/postman-environment-69ae205661a8221c87fc5398a1606660.png"}}]);