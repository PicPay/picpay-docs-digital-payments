"use strict";(self.webpackChunkpicpay=self.webpackChunkpicpay||[]).push([[5362],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),g=i,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},98093:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={id:"vtex",title:"VTEX"},o={unversionedId:"checkout/plugins/vtex",id:"checkout/plugins/vtex",isDocsHomePage:!1,title:"VTEX",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/checkout/plugins/vtex.md",sourceDirName:"checkout/plugins",slug:"/checkout/plugins/vtex",permalink:"/picpay-docs-digital-payments/en/checkout/plugins/vtex",version:"current",frontMatter:{id:"vtex",title:"VTEX"},sidebar:"walletPicPay",previous:{title:"Get payment status",permalink:"/picpay-docs-digital-payments/en/checkout/guides/order-status"},next:{title:"Magento",permalink:"/picpay-docs-digital-payments/en/checkout/plugins/magento"}},c=[{value:"Introduction",id:"introduction",children:[]},{value:"Before getting started",id:"before-getting-started",children:[]},{value:"How to use",id:"how-to-use",children:[{value:"Getting your integration keys",id:"getting-your-integration-keys",children:[]},{value:"Enabling PicPay as a payment method",id:"enabling-picpay-as-a-payment-method",children:[]},{value:"Configuring your keys within VTEX",id:"configuring-your-keys-within-vtex",children:[]}]},{value:"Next steps",id:"next-steps",children:[]},{value:"Getting help",id:"getting-help",children:[]}],s={toc:c},l="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(l,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"In this guide, we will describe the step-by-step process for you to use PicPay within your e-commerce with VTEX."),(0,i.kt)("h2",{id:"before-getting-started"},"Before getting started"),(0,i.kt)("p",null,"Before starting your onboarding, you must have valid credentials. You can check how to obtain your credentials ",(0,i.kt)("a",{parentName:"p",href:"/checkout/intro/getting-started#antes-de-come%C3%A7ar"},"in this article"),"."),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("h3",{id:"getting-your-integration-keys"},"Getting your integration keys"),(0,i.kt)("p",null,"Your integration keys will be available within the ",(0,i.kt)("a",{parentName:"p",href:"https://lojista.picpay.com/ecommerce-token"},"retail panel"),", in the integrations menu."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"VTEX integration keys",src:n(26480).Z})),(0,i.kt)("p",null,"These keys must be copied and inserted into your VTEX configuration panel."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Attention")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Every time new tokens are generated using the ",(0,i.kt)("strong",{parentName:"p"},"Generate Tokens")," button, old tokens will be invalidated."))),(0,i.kt)("h3",{id:"enabling-picpay-as-a-payment-method"},"Enabling PicPay as a payment method"),(0,i.kt)("p",null,"Within your VTEX panel, you will need to configure PicPay as a new payment gateway."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1")," - Within the payments section, click on ",(0,i.kt)("strong",{parentName:"p"},"Settings"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Menu VTEX",src:n(37740).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2")," -On the Gateways Affiliations tab, click the + button."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"New gateway",src:n(84919).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3")," -Select the PicPay connector."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connectors",src:n(30343).Z})),(0,i.kt)("h3",{id:"configuring-your-keys-within-vtex"},"Configuring your keys within VTEX"),(0,i.kt)("p",null,"Fill in the fields ",(0,i.kt)("inlineCode",{parentName:"p"},"Application Key")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Application Token")," with your PicPay account information and save the settings."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Connectors",src:n(48990).Z})),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/checkout/guides/order-status"},"Understand the possible statuses of a payment"),";")),(0,i.kt)("h2",{id:"getting-help"},"Getting help"),(0,i.kt)("p",null,"We hope this article has been helpful! If you have any remaining questions, you can check our FAQ or contact us via email at ",(0,i.kt)("a",{parentName:"p",href:"mailto:relacionamento-negocios@picpay.com"},"relacionamento-negocios@picpay.com"),"."))}p.isMDXComponent=!0},30343:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vtex-conectores-affc0f9a6eaa2d69c35f65a6b2fe4b30.png"},48990:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vtex-config-44ea04af358519c4d71eac7cacc4dcf6.png"},26480:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vtex-keys-3b7c8309f2980beda8162d602d5d76b1.png"},37740:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vtex-menu-99121e21bb0a8da93e751efe74657841.png"},84919:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vtex-novo-gateway-4127b8985a5c6c19d12cf13223edeb32.png"}}]);