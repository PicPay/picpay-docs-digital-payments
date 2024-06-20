"use strict";(self.webpackChunkpicpay=self.webpackChunkpicpay||[]).push([[5065],{3905:(e,o,t)=>{t.d(o,{Zo:()=>p,kt:()=>f});var a=t(67294);function r(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}function n(e,o){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);o&&(a=a.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var o=1;o<arguments.length;o++){var t=null!=arguments[o]?arguments[o]:{};o%2?n(Object(t),!0).forEach((function(o){r(e,o,t[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))}))}return e}function i(e,o){if(null==e)return{};var t,a,r=function(e,o){if(null==e)return{};var t,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||(r[t]=e[t]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],o.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),l=function(e){var o=a.useContext(s),t=o;return e&&(t="function"==typeof e?e(o):c(c({},o),e)),t},p=function(e){var o=l(e.components);return a.createElement(s.Provider,{value:o},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var o=e.children;return a.createElement(a.Fragment,{},o)}},m=a.forwardRef((function(e,o){var t=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(t),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||n;return t?a.createElement(f,c(c({ref:o},p),{},{components:t})):a.createElement(f,c({ref:o},p))}));function f(e,o){var t=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var n=t.length,c=new Array(n);c[0]=m;var i={};for(var s in o)hasOwnProperty.call(o,s)&&(i[s]=o[s]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<n;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36649:(e,o,t)=>{t.r(o),t.d(o,{default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>i});var a=t(87462),r=(t(67294),t(3905));const n={id:"postman",title:"Postman Collection",description:"Collection do Postman para gera\xe7\xe3o de QRCode com PicPay",hide_table_of_contents:!1},c={unversionedId:"checkout/resources/postman",id:"checkout/resources/postman",isDocsHomePage:!1,title:"Postman Collection",description:"Collection do Postman para gera\xe7\xe3o de QRCode com PicPay",source:"@site/docs/checkout/resources/postman.md",sourceDirName:"checkout/resources",slug:"/checkout/resources/postman",permalink:"/picpay-docs-digital-payments/checkout/resources/postman",version:"current",frontMatter:{id:"postman",title:"Postman Collection",description:"Collection do Postman para gera\xe7\xe3o de QRCode com PicPay",hide_table_of_contents:!1},sidebar:"docs",previous:{title:"API Reference",permalink:"/picpay-docs-digital-payments/checkout/resources/api-reference"},next:{title:"FAQ e-commerce",permalink:"/picpay-docs-digital-payments/checkout/resources/faq"}},i=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos",children:[]},{value:"O que posso fazer com esta collection?",id:"o-que-posso-fazer-com-esta-collection",children:[]},{value:"Talk is cheap, show me the code!",id:"talk-is-cheap-show-me-the-code",children:[{value:"Obtendo a collection",id:"obtendo-a-collection",children:[]},{value:"Configurar suas chaves de integra\xe7\xe3o",id:"configurar-suas-chaves-de-integra\xe7\xe3o",children:[]}]},{value:"N\xe3o achou o que precisava?",id:"n\xe3o-achou-o-que-precisava",children:[]}],s={toc:i},l="wrapper";function p(e){let{components:o,...n}=e;return(0,r.kt)(l,(0,a.Z)({},s,n,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"sobre-este-guia"},"Sobre este guia"),(0,r.kt)("p",null,"Neste breve guia vamos descrever como utilizar o Postman como ferramenta de apoio em sua integra\xe7\xe3o."),(0,r.kt)("h2",{id:"pr\xe9-requisitos"},"Pr\xe9-requisitos"),(0,r.kt)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Voc\xea pode conferir como obter suas credenciais ",(0,r.kt)("a",{parentName:"p",href:"/checkout/intro/getting-started#antes-de-come%C3%A7ar"},"neste artigo"),"."),(0,r.kt)("h2",{id:"o-que-posso-fazer-com-esta-collection"},"O que posso fazer com esta collection?"),(0,r.kt)("p",null,"Em nossa collection, disponibilizamos os seguintes endpoints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Endpoint para cria\xe7\xe3o de pagamento;"),(0,r.kt)("li",{parentName:"ul"},"Endpoint de consulta de ordem;"),(0,r.kt)("li",{parentName:"ul"},"Endpoint para cancelamento;"),(0,r.kt)("li",{parentName:"ul"},"Simula\xe7\xe3o de callback;")),(0,r.kt)("h2",{id:"talk-is-cheap-show-me-the-code"},"Talk is cheap, show me the code!"),(0,r.kt)("h3",{id:"obtendo-a-collection"},"Obtendo a collection"),(0,r.kt)("p",null,"Tamb\xe9m \xe9 um f\xe3 de postman como n\xf3s? Acesse nossa collection atrav\xe9s do bot\xe3o abaixo: "),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.getpostman.com/run-collection/e78cb7f8c7eaea11f471#?env%5BPicPay%20Public%5D=W3sia2V5IjoieC1waWNwYXktdG9rZW4iLCJ2YWx1ZSI6InlvdXJfdG9rZW4iLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6InJlZmVyZW5jZUlkIiwidmFsdWUiOiJzb21lX3JlZklkIiwiZW5hYmxlZCI6dHJ1ZX1d"},(0,r.kt)("img",{parentName:"a",src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"}))),(0,r.kt)("h3",{id:"configurar-suas-chaves-de-integra\xe7\xe3o"},"Configurar suas chaves de integra\xe7\xe3o"),(0,r.kt)("p",null,"Ap\xf3s importar nossa collection, voc\xea poder\xe1 configurar suas chaves dentro das configura\xe7\xf5es de ambientes como exibido abaixo:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"img",src:t(23043).Z})),(0,r.kt)("h2",{id:"n\xe3o-achou-o-que-precisava"},"N\xe3o achou o que precisava?"),(0,r.kt)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",(0,r.kt)("a",{parentName:"p",href:"mailto:relacionamento-negocios@picpay.com"},"relacionamento-negocios@picpay.com")))}p.isMDXComponent=!0},23043:(e,o,t)=>{t.d(o,{Z:()=>a});const a=t.p+"assets/images/postman-environment-69ae205661a8221c87fc5398a1606660.png"}}]);