"use strict";(self.webpackChunkpicpay=self.webpackChunkpicpay||[]).push([[4739],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(o),u=n,g=d["".concat(c,".").concat(u)]||d[u]||m[u]||r;return o?a.createElement(g,i(i({ref:t},p),{},{components:o})):a.createElement(g,i({ref:t},p))}));function g(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,o)}u.displayName="MDXCreateElement"},650:(e,t,o)=>{o.r(t),o.d(t,{default:()=>p,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=o(87462),n=(o(67294),o(3905));const r={id:"getting-started",title:"Como come\xe7ar",sidebar_label:"Como come\xe7ar",hide_title:!1,description:"Aprenda como processar pagamentos na nossa solu\xe7\xe3o PicPay 1-Click",keywords:["PicPay 1-Click","Pagamento","Login"]},i={unversionedId:"one-click/intro/getting-started",id:"one-click/intro/getting-started",isDocsHomePage:!1,title:"Como come\xe7ar",description:"Aprenda como processar pagamentos na nossa solu\xe7\xe3o PicPay 1-Click",source:"@site/docs/one-click/intro/getting-started.md",sourceDirName:"one-click/intro",slug:"/one-click/intro/getting-started",permalink:"/picpay-docs-digital-payments/one-click/intro/getting-started",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/one-click/intro/getting-started.md",version:"current",sidebar_label:"Como come\xe7ar",frontMatter:{id:"getting-started",title:"Como come\xe7ar",sidebar_label:"Como come\xe7ar",hide_title:!1,description:"Aprenda como processar pagamentos na nossa solu\xe7\xe3o PicPay 1-Click",keywords:["PicPay 1-Click","Pagamento","Login"]},sidebar:"pagamentoLogado",previous:{title:"Vis\xe3o geral",permalink:"/picpay-docs-digital-payments/one-click/intro/overview"},next:{title:"Autentica\xe7\xe3o e autoriza\xe7\xe3o",permalink:"/picpay-docs-digital-payments/one-click/guides/oauth2-flow"}},s=[{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",children:[]},{value:"Testando sua integra\xe7\xe3o",id:"testando-sua-integra\xe7\xe3o",children:[]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],c={toc:s},l="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),(0,n.kt)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Atualmente, a solu\xe7\xe3o de ",(0,n.kt)("strong",{parentName:"p"},"PicPay 1-Click")," n\xe3o est\xe1 dispon\xedvel para todos os nossos lojistas. Se interessou? Basta entrar em contato atrav\xe9s do e-mail ",(0,n.kt)("a",{parentName:"p",href:"mailto:relacionamento-negocios@picpay.com"},"relacionamento-negocios@picpay.com")," demonstrando interesse."),(0,n.kt)("h2",{id:"testando-sua-integra\xe7\xe3o"},"Testando sua integra\xe7\xe3o"),(0,n.kt)("p",null,"Atualmente o PicPay n\xe3o disponibiliza ambiente de SandBox. Todos os testes ser\xe3o feitos no ambiente de produ\xe7\xe3o e n\xe3o geram qualquer \xf4nus ao desenvolvedor/lojista, sendo que todos os pagamentos realizados podem ser imediatamente estornados (atrav\xe9s de nossa API de cancelamento ou pelo painel lojista)."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:o(15835).Z})),(0,n.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/one-click/guides/oauth2-flow"},"Autentica\xe7\xe3o e autoriza\xe7\xe3o"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/one-click/guides/process-payments"},"Efetuando uma cobran\xe7a"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/one-click/guides/refund-payments"},"Solicitando um reembolso"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/one-click/guides/user-info"},"Consultando informa\xe7\xf5es dos usu\xe1rios"),";")),(0,n.kt)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),(0,n.kt)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",(0,n.kt)("a",{parentName:"p",href:"mailto:relacionamento-negocios@picpay.com"},"relacionamento-negocios@picpay.com")))}p.isMDXComponent=!0},15835:(e,t,o)=>{o.d(t,{Z:()=>a});const a=o.p+"assets/images/cancel-transactions-7b9356ad54ff92c07cb3f7ae747c99f3.gif"}}]);