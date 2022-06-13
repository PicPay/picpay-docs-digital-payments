(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{111:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return i})),o.d(t,"metadata",(function(){return s})),o.d(t,"toc",(function(){return l})),o.d(t,"default",(function(){return p}));var a=o(3),n=o(8),r=(o(0),o(119)),c=["components"],i={id:"postman",title:"Postman Collection",description:"Collection do Postman para gera\xe7\xe3o de QRCode com PicPay",hide_table_of_contents:!1},s={unversionedId:"checkout/resources/postman",id:"checkout/resources/postman",isDocsHomePage:!1,title:"Postman Collection",description:"Collection do Postman para gera\xe7\xe3o de QRCode com PicPay",source:"@site/docs/checkout/resources/postman.md",slug:"/checkout/resources/postman",permalink:"/picpay-docs-digital-payments/checkout/resources/postman",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/checkout/resources/postman.md",version:"current",sidebar:"docs",previous:{title:"API Reference",permalink:"/picpay-docs-digital-payments/checkout/resources/api-reference"},next:{title:"FAQ e-commerce",permalink:"/picpay-docs-digital-payments/checkout/resources/faq"}},l=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos",children:[]},{value:"O que posso fazer com esta collection?",id:"o-que-posso-fazer-com-esta-collection",children:[]},{value:"Talk is cheap, show me the code!",id:"talk-is-cheap-show-me-the-code",children:[{value:"Obtendo a collection",id:"obtendo-a-collection",children:[]},{value:"Configurar suas chaves de integra\xe7\xe3o",id:"configurar-suas-chaves-de-integra\xe7\xe3o",children:[]}]},{value:"N\xe3o achou o que precisava?",id:"n\xe3o-achou-o-que-precisava",children:[]}],u={toc:l};function p(e){var t=e.components,i=Object(n.a)(e,c);return Object(r.b)("wrapper",Object(a.a)({},u,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"sobre-este-guia"},"Sobre este guia"),Object(r.b)("p",null,"Neste breve guia vamos descrever como utilizar o Postman como ferramenta de apoio em sua integra\xe7\xe3o."),Object(r.b)("h2",{id:"pr\xe9-requisitos"},"Pr\xe9-requisitos"),Object(r.b)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Voc\xea pode conferir como obter suas credenciais ",Object(r.b)("a",{parentName:"p",href:"/checkout/intro/getting-started#antes-de-come%C3%A7ar"},"neste artigo"),"."),Object(r.b)("h2",{id:"o-que-posso-fazer-com-esta-collection"},"O que posso fazer com esta collection?"),Object(r.b)("p",null,"Em nossa collection, disponibilizamos os seguintes endpoints:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Endpoint para cria\xe7\xe3o de pagamento;"),Object(r.b)("li",{parentName:"ul"},"Endpoint de consulta de ordem;"),Object(r.b)("li",{parentName:"ul"},"Endpoint para cancelamento;"),Object(r.b)("li",{parentName:"ul"},"Simula\xe7\xe3o de callback;")),Object(r.b)("h2",{id:"talk-is-cheap-show-me-the-code"},"Talk is cheap, show me the code!"),Object(r.b)("h3",{id:"obtendo-a-collection"},"Obtendo a collection"),Object(r.b)("p",null,"Tamb\xe9m \xe9 um f\xe3 de postman como n\xf3s? Acesse nossa collection atrav\xe9s do bot\xe3o abaixo: "),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://app.getpostman.com/run-collection/e78cb7f8c7eaea11f471#?env%5BPicPay%20Public%5D=W3sia2V5IjoieC1waWNwYXktdG9rZW4iLCJ2YWx1ZSI6InlvdXJfdG9rZW4iLCJlbmFibGVkIjp0cnVlfSx7ImtleSI6InJlZmVyZW5jZUlkIiwidmFsdWUiOiJzb21lX3JlZklkIiwiZW5hYmxlZCI6dHJ1ZX1d"},Object(r.b)("img",{parentName:"a",src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"}))),Object(r.b)("h3",{id:"configurar-suas-chaves-de-integra\xe7\xe3o"},"Configurar suas chaves de integra\xe7\xe3o"),Object(r.b)("p",null,"Ap\xf3s importar nossa collection, voc\xea poder\xe1 configurar suas chaves dentro das configura\xe7\xf5es de ambientes como exibido abaixo:"),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:o(328).default})),Object(r.b)("h2",{id:"n\xe3o-achou-o-que-precisava"},"N\xe3o achou o que precisava?"),Object(r.b)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",Object(r.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com")))}p.isMDXComponent=!0},119:function(e,t,o){"use strict";o.d(t,"a",(function(){return p})),o.d(t,"b",(function(){return b}));var a=o(0),n=o.n(a);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=n.a.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(o),m=a,b=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return o?n.a.createElement(b,i(i({ref:t},l),{},{components:o})):n.a.createElement(b,i({ref:t},l))}));function b(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,c=new Array(r);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=o[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},328:function(e,t,o){"use strict";o.r(t),t.default=o.p+"assets/images/postman-environment-69ae205661a8221c87fc5398a1606660.png"}}]);