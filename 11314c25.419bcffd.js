(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{115:function(e,o,a){"use strict";a.d(o,"a",(function(){return u})),a.d(o,"b",(function(){return b}));var n=a(0),t=a.n(n);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function s(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);o&&(n=n.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?s(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function c(e,o){if(null==e)return{};var a,n,t=function(e,o){if(null==e)return{};var a,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||(t[a]=e[a]);return t}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var d=t.a.createContext({}),l=function(e){var o=t.a.useContext(d),a=o;return e&&(a="function"==typeof e?e(o):i(i({},o),e)),a},u=function(e){var o=l(e.components);return t.a.createElement(d.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.a.createElement(t.a.Fragment,{},o)}},m=t.a.forwardRef((function(e,o){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,b=u["".concat(s,".").concat(m)]||u[m]||p[m]||r;return a?t.a.createElement(b,i(i({ref:o},d),{},{components:a})):t.a.createElement(b,i({ref:o},d))}));function b(e,o){var a=arguments,n=o&&o.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=m;var i={};for(var c in o)hasOwnProperty.call(o,c)&&(i[c]=o[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<r;d++)s[d]=a[d];return t.a.createElement.apply(null,s)}return t.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},74:function(e,o,a){"use strict";a.r(o),a.d(o,"frontMatter",(function(){return s})),a.d(o,"metadata",(function(){return i})),a.d(o,"toc",(function(){return c})),a.d(o,"default",(function(){return l}));var n=a(3),t=a(8),r=(a(0),a(115)),s={id:"user-info",title:"Obtendo informa\xe7\xf5es do usu\xe1rio",sidebar_label:"Informa\xe7\xf5es do usu\xe1rio",hide_title:!1,description:"Aprenda como obter informa\xe7\xf5es b\xe1sicas dos usu\xe1rios na nossa solu\xe7\xe3o de Pagamento Logado",keywords:["Pagamento logado","Informa\xe7\xf5es","Data de nascimento","e-mail","Login"]},i={unversionedId:"pagamento-logado/guides/user-info",id:"pagamento-logado/guides/user-info",isDocsHomePage:!1,title:"Obtendo informa\xe7\xf5es do usu\xe1rio",description:"Aprenda como obter informa\xe7\xf5es b\xe1sicas dos usu\xe1rios na nossa solu\xe7\xe3o de Pagamento Logado",source:"@site/docs/pagamento-logado/guides/user-info.md",slug:"/pagamento-logado/guides/user-info",permalink:"/picpay-docs-digital-payments/pagamento-logado/guides/user-info",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/pagamento-logado/guides/user-info.md",version:"current",sidebar_label:"Informa\xe7\xf5es do usu\xe1rio",sidebar:"pagamentoLogado",previous:{title:"Reembolsando pagamentos",permalink:"/picpay-docs-digital-payments/pagamento-logado/guides/refund-payments"},next:{title:"Postman Collection",permalink:"/picpay-docs-digital-payments/pagamento-logado/resources/postman-collection"}},c=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",children:[]},{value:"Como funciona",id:"como-funciona",children:[{value:"Autentica\xe7\xe3o",id:"autentica\xe7\xe3o",children:[]},{value:"Obtendo informa\xe7\xf5es b\xe1sicas dos usu\xe1rios logado",id:"obtendo-informa\xe7\xf5es-b\xe1sicas-dos-usu\xe1rios-logado",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],d={toc:c};function l(e){var o=e.components,a=Object(t.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:o,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"sobre-este-guia"},"Sobre este guia"),Object(r.b)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea consulte informa\xe7\xf5es de usu\xe1rios autenticados atrav\xe9s de nossa solu\xe7\xe3o de pagamentos logada."),Object(r.b)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),Object(r.b)("p",null,"Antes de processar pagamentos online atrav\xe9s de nossa solu\xe7\xe3o de ",Object(r.b)("strong",{parentName:"p"},"Pagamento Logado"),", voc\xea deve possuir um ",Object(r.b)("inlineCode",{parentName:"p"},"access_token")," v\xe1lido e n\xe3o expirado. Voc\xea pode conferir como gerar seus tokens ",Object(r.b)("a",{parentName:"p",href:"/pagamento-logado/guides/oauth2-flow"},"neste artigo"),"."),Object(r.b)("h2",{id:"como-funciona"},"Como funciona"),Object(r.b)("h3",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),Object(r.b)("p",null,"Para esta opera\xe7\xe3o, apenas o ",Object(r.b)("inlineCode",{parentName:"p"},"access_token"),", gerado dinamicamente, \xe9 necess\xe1rio "),Object(r.b)("h3",{id:"obtendo-informa\xe7\xf5es-b\xe1sicas-dos-usu\xe1rios-logado"},"Obtendo informa\xe7\xf5es b\xe1sicas dos usu\xe1rios logado"),Object(r.b)("p",null,"Apenas com o ",Object(r.b)("inlineCode",{parentName:"p"},"access_token")," \xe9 poss\xedvel obter algumas informa\xf5es b\xe1sicas do cliente logado. Abaixo um exemplo:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api.picpay.com/oauth2/userinfo' \\\n--header 'Authorization: Bearer {access_token}' \n")),Object(r.b)("p",null,"Abaixo um exemplo de retorno de sucesso."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "seller": "polenta.store@pm.me",\n    "sub": "f:Xxxxxxx-xxxx-xxxx-xxxx-xxxxxxx:xxxxx",\n    "email_verified": true,\n    "birthdate": "2020-03-05",\n    "preferred_username": "polento",\n    "email": "polenta.the.dog@gmail.com"\n}\n')),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"O cliente ir\xe1 autorizar o e-commerce a ter acesso a essas informa\xe7\xf5es no momento do consentimento de permiss\xf5es, explicado ",Object(r.b)("a",{parentName:"p",href:"/pagamento-logado/guides/oauth2-flow#solicitando-a-autoriza%C3%A7%C3%A3o-do-usu%C3%A1rio"},"aqui")))),Object(r.b)("h4",{id:"mensagens-de-erro"},"Mensagens de erro"),Object(r.b)("p",null,"Caso algum erro ocorra, informaremos o motivo na resposta da requisi\xe7\xe3o"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "invalid_token",\n    "error_description": "Token verification failed"\n}\n')),Object(r.b)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/pagamento-logado/guides/process-payments"},"Efetuando uma cobran\xe7a"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/pagamento-logado/guides/refund-payments"},"Solicitando um reembolso"),";")),Object(r.b)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),Object(r.b)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",Object(r.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com."},"relacionamento-empresas@picpay.com.")," "))}l.isMDXComponent=!0}}]);