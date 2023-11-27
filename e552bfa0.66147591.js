(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{119:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return u}));var n=t(3),r=(t(0),t(128));const o={slug:"identificando-meu-canal",title:"Identifica\xe7\xe3o de canais",author:"Marcus Garcia",author_title:"Product Manager @ PicPay",author_url:"https://github.com/marcus-garcia",author_image_url:"https://avatars.githubusercontent.com/u/12819808?s=60&v=4",tags:["integradores","payments"]},i={permalink:"/picpay-docs-digital-payments/change-log/identificando-meu-canal",source:"@site/blog/2021-03-18-canais.md",description:"Ol\xe1, integradores!",date:"2021-03-18T00:00:00.000Z",tags:[{label:"integradores",permalink:"/picpay-docs-digital-payments/change-log/tags/integradores"},{label:"payments",permalink:"/picpay-docs-digital-payments/change-log/tags/payments"}],title:"Identifica\xe7\xe3o de canais",readingTime:.93,truncated:!1,prevItem:{title:"Ol\xe1, mundo f\xedsico",permalink:"/picpay-docs-digital-payments/change-log/Pagamentos digitais para mundo f\xedsico"}},c=[{value:"O que muda?",id:"o-que-muda",children:[]},{value:"Como utilizar",id:"como-utilizar",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],s={toc:c};function u(e){let{components:a,...t}=e;return Object(r.b)("wrapper",Object(n.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Ol\xe1, integradores!"),Object(r.b)("p",null,"Na \xfaltima melhoria em nossa API de pagamentos, passamos a permitir a identifica\xe7\xe3o dos nossos parceiros integradores. Se voc\xea se encaixa nessa categoria e possui mais de um lojista em sua integra\xe7\xe3o (cada um com sua chave individual) confira abaixo como identificar seu canal."),Object(r.b)("h2",{id:"o-que-muda"},"O que muda?"),Object(r.b)("p",null,"Com essa mudan\xe7a, podemos identificar e atuar mais rapidamente em casos de suporte al\xe9m de ter uma vis\xe3o consolidada do volume e transa\xe7\xf5es de todos os lojistas que est\xe3o sob sua integra\xe7\xe3o."),Object(r.b)("h2",{id:"como-utilizar"},"Como utilizar"),Object(r.b)("p",null,"T\xe1 f\xe1cil! =)"),Object(r.b)("p",null,"Basta incluir o campo ",Object(r.b)("inlineCode",{parentName:"p"},"channel")," em sua requisi\xe7\xe3o e indicar o nome do seu canal. Desta forma j\xe1 conseguiremos identificar suas transa\xe7\xf5es."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash",metastring:"{10}","{10}":!0},'curl --location --request POST \'https://appws.picpay.com/ecommerce/public/payments\'  \\ \n--header \'x-picpay-token: {sua_chave_de_integracao}\'  \\ \n--header \'Content-Type: application/json\'  \\ \n--data-raw \'{ "referenceId": "102039", \n    "callbackUrl": "http://localhost/mockVtexPostCallback/?httpStatus=200", \n    "expiresAt": "2020-12-12T15:53:00+05:00", \n    "returnUrl": "http://www.picpay.com/#transacaoConcluida", \n    "value": 10, \n    "additionalInfo": [ null ], \n    "channel" : "name-of-your-channel",\n    "purchaseMode" : "in-store",\n    "buyer": { \n        "firstName": "Jo\xe3o", \n        "lastName": "dos Testes", \n        "document": "010.091.001-91" \n    } \n}\'\n')),Object(r.b)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),Object(r.b)("p",null,"Esperamos ter ajudado com este artigo! Ficou alguma d\xfavida? Voc\xea pode consultar o nosso ",Object(r.b)("a",{parentName:"p",href:"https://ajudaempresas.picpay.com/hc/pt-br/categories/360003836611-PicPay-E-commerce"},"FAQ")," ou entrar em contato atrav\xe9s do e-mail ",Object(r.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com"),"."))}u.isMDXComponent=!0},128:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return b}));var n=t(0),r=t.n(n);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),l=function(e){var a=r.a.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},p=function(e){var a=l(e.components);return r.a.createElement(u.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=n,b=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?r.a.createElement(b,c(c({ref:a},u),{},{components:t})):r.a.createElement(b,c({ref:a},u))}));function b(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var u=2;u<o;u++)i[u]=t[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);