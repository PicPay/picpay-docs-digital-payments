"use strict";(self.webpackChunkpicpay=self.webpackChunkpicpay||[]).push([[2540],{3905:(e,o,a)=>{a.d(o,{Zo:()=>d,kt:()=>f});var n=a(67294);function t(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function r(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?r(Object(a),!0).forEach((function(o){t(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,n,t=function(e,o){if(null==e)return{};var a,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var c=n.createContext({}),l=function(e){var o=n.useContext(c),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},d=function(e){var o=l(e.components);return n.createElement(c.Provider,{value:o},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var o=e.children;return n.createElement(n.Fragment,{},o)}},m=n.forwardRef((function(e,o){var a=e.components,t=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(a),m=t,f=u["".concat(c,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(f,i(i({ref:o},d),{},{components:a})):n.createElement(f,i({ref:o},d))}));function f(e,o){var a=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var c in o)hasOwnProperty.call(o,c)&&(s[c]=o[c]);s.originalType=e,s[u]="string"==typeof e?e:t,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},77306:(e,o,a)=>{a.r(o),a.d(o,{default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(87462),t=(a(67294),a(3905));const r={id:"user-info",title:"Obtendo informa\xe7\xf5es do usu\xe1rio",sidebar_label:"Informa\xe7\xf5es do usu\xe1rio",hide_title:!1,description:"Aprenda como obter informa\xe7\xf5es b\xe1sicas dos usu\xe1rios na nossa solu\xe7\xe3o PicPay 1-Click",keywords:["PicPay 1-Click","Informa\xe7\xf5es","Data de nascimento","e-mail","Login"]},i={unversionedId:"one-click/guides/user-info",id:"one-click/guides/user-info",isDocsHomePage:!1,title:"Obtendo informa\xe7\xf5es do usu\xe1rio",description:"Aprenda como obter informa\xe7\xf5es b\xe1sicas dos usu\xe1rios na nossa solu\xe7\xe3o PicPay 1-Click",source:"@site/docs/one-click/guides/user-info.md",sourceDirName:"one-click/guides",slug:"/one-click/guides/user-info",permalink:"/picpay-docs-digital-payments/one-click/guides/user-info",version:"current",sidebar_label:"Informa\xe7\xf5es do usu\xe1rio",frontMatter:{id:"user-info",title:"Obtendo informa\xe7\xf5es do usu\xe1rio",sidebar_label:"Informa\xe7\xf5es do usu\xe1rio",hide_title:!1,description:"Aprenda como obter informa\xe7\xf5es b\xe1sicas dos usu\xe1rios na nossa solu\xe7\xe3o PicPay 1-Click",keywords:["PicPay 1-Click","Informa\xe7\xf5es","Data de nascimento","e-mail","Login"]},sidebar:"pagamentoLogado",previous:{title:"Reembolsando pagamentos",permalink:"/picpay-docs-digital-payments/one-click/guides/refund-payments"},next:{title:"API Reference",permalink:"/picpay-docs-digital-payments/one-click/resources/api-reference"}},s=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",children:[]},{value:"Como funciona",id:"como-funciona",children:[{value:"Autentica\xe7\xe3o",id:"autentica\xe7\xe3o",children:[]},{value:"Obtendo informa\xe7\xf5es b\xe1sicas dos usu\xe1rios logado",id:"obtendo-informa\xe7\xf5es-b\xe1sicas-dos-usu\xe1rios-logado",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],c={toc:s},l="wrapper";function d(e){let{components:o,...a}=e;return(0,t.kt)(l,(0,n.Z)({},c,a,{components:o,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"sobre-este-guia"},"Sobre este guia"),(0,t.kt)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea consulte informa\xe7\xf5es de usu\xe1rios autenticados atrav\xe9s de nossa solu\xe7\xe3o de pagamentos logada."),(0,t.kt)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),(0,t.kt)("p",null,"Antes de processar pagamentos online atrav\xe9s de nossa solu\xe7\xe3o de ",(0,t.kt)("strong",{parentName:"p"},"PicPay 1-Click"),", voc\xea deve possuir um ",(0,t.kt)("inlineCode",{parentName:"p"},"access_token")," v\xe1lido e n\xe3o expirado. Voc\xea pode conferir como gerar seus tokens ",(0,t.kt)("a",{parentName:"p",href:"/one-click/guides/oauth2-flow"},"neste artigo"),"."),(0,t.kt)("h2",{id:"como-funciona"},"Como funciona"),(0,t.kt)("h3",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),(0,t.kt)("p",null,"Para esta opera\xe7\xe3o, apenas o ",(0,t.kt)("inlineCode",{parentName:"p"},"access_token"),", gerado dinamicamente, \xe9 necess\xe1rio "),(0,t.kt)("h3",{id:"obtendo-informa\xe7\xf5es-b\xe1sicas-dos-usu\xe1rios-logado"},"Obtendo informa\xe7\xf5es b\xe1sicas dos usu\xe1rios logado"),(0,t.kt)("p",null,"Apenas com o ",(0,t.kt)("inlineCode",{parentName:"p"},"access_token")," \xe9 poss\xedvel obter algumas informa\xf5es b\xe1sicas do cliente logado. Abaixo um exemplo:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api.picpay.com/oauth2/userinfo' \\\n--header 'Authorization: Bearer {access_token}' \n")),(0,t.kt)("p",null,"Abaixo um exemplo de retorno de sucesso."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "seller": "polenta.store@pm.me",\n    "sub": "f:Xxxxxxx-xxxx-xxxx-xxxx-xxxxxxx:xxxxx",\n    "email_verified": true,\n    "birthdate": "2020-03-05",\n    "preferred_username": "polento",\n    "email": "polenta.the.dog@gmail.com"\n}\n')),(0,t.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,t.kt)("div",{parentName:"div",className:"admonition-heading"},(0,t.kt)("h5",{parentName:"div"},(0,t.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,t.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,t.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,t.kt)("div",{parentName:"div",className:"admonition-content"},(0,t.kt)("p",{parentName:"div"},"O cliente ir\xe1 autorizar o e-commerce a ter acesso a essas informa\xe7\xf5es no momento do consentimento de permiss\xf5es, explicado ",(0,t.kt)("a",{parentName:"p",href:"/one-click/guides/oauth2-flow#solicitando-a-autoriza%C3%A7%C3%A3o-do-usu%C3%A1rio"},"aqui")))),(0,t.kt)("h4",{id:"mensagens-de-erro"},"Mensagens de erro"),(0,t.kt)("p",null,"Caso algum erro ocorra, informaremos o motivo na resposta da requisi\xe7\xe3o"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "invalid_token",\n    "error_description": "Token verification failed"\n}\n')),(0,t.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/one-click/guides/process-payments"},"Efetuando uma cobran\xe7a"),";"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("a",{parentName:"li",href:"/one-click/guides/refund-payments"},"Solicitando um reembolso"),";")),(0,t.kt)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),(0,t.kt)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",(0,t.kt)("a",{parentName:"p",href:"mailto:relacionamento-negocios@picpay.com"},"relacionamento-negocios@picpay.com"),"."))}d.isMDXComponent=!0}}]);