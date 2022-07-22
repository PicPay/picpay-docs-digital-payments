(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{101:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return p}));var o=t(3),n=(t(0),t(119));const r={slug:"Pagamentos digitais para mundo f\xedsico",title:"Ol\xe1, mundo f\xedsico",author:"Marcus Garcia",author_title:"Product Manager @ PicPay",author_url:"https://github.com/marcus-garcia",author_image_url:"https://avatars.githubusercontent.com/u/12819808?s=60&v=4",tags:["mundo-fisico","pagamentos"]},i={permalink:"/picpay-docs-digital-payments/change-log/Pagamentos digitais para mundo f\xedsico",source:"@site/blog/2021-03-19-mundo-fisico.md",description:"Ol\xe1, mundo f\xedsico!",date:"2021-03-19T00:00:00.000Z",tags:[{label:"mundo-fisico",permalink:"/picpay-docs-digital-payments/change-log/tags/mundo-fisico"},{label:"pagamentos",permalink:"/picpay-docs-digital-payments/change-log/tags/pagamentos"}],title:"Ol\xe1, mundo f\xedsico",readingTime:1.36,truncated:!1,nextItem:{title:"Identifica\xe7\xe3o de canais",permalink:"/picpay-docs-digital-payments/change-log/identificando-meu-canal"}},c=[{value:"O que muda?",id:"o-que-muda",children:[]},{value:"Como utilizar",id:"como-utilizar",children:[]},{value:"Ponto de aten\xe7\xe3o",id:"ponto-de-aten\xe7\xe3o",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],s={toc:c};function p(e){let{components:a,...t}=e;return Object(n.b)("wrapper",Object(o.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Ol\xe1, mundo f\xedsico!"),Object(n.b)("p",null,"Recentemente fizemos uma melhoria em nossa API de pagamentos que simplifica sua utiliza\xe7\xe3o por lojistas do mundo f\xedsico. Se voc\xea se encaixa nessa categoria, confira abaixo como se beneficiar."),Object(n.b)("h2",{id:"o-que-muda"},"O que muda?"),Object(n.b)("p",null,"Compras em lojas f\xedsicas fazem com que os lojistas nem sempre possuam dados de seus clientes, como por exemplo CPF, e-mail, telefone, etc. "),Object(n.b)("p",null,"Solicit\xe1-los no momento da transa\xe7\xe3o presencial pode criar fric\xe7\xe3o para o ponto de venda e por isso removemos a obrigatoriedade destes dados."),Object(n.b)("h2",{id:"como-utilizar"},"Como utilizar"),Object(n.b)("p",null,"\xc9 muito simples! =)"),Object(n.b)("p",null,"Basta incluir o campo ",Object(n.b)("inlineCode",{parentName:"p"},"purchaseMode")," em sua requisi\xe7\xe3o com o valor ",Object(n.b)("inlineCode",{parentName:"p"},"in-store")," e pronto! Desta forma os dados de ",Object(n.b)("inlineCode",{parentName:"p"},"buyer")," deixam de ser obrigat\xf3rios. Confira um exemplo abaixo:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash",metastring:"{11}","{11}":!0},'curl --location --request POST \'https://appws.picpay.com/ecommerce/public/payments\'  \\ \n--header \'x-picpay-token: {sua_chave_de_integracao}\'  \\ \n--header \'Content-Type: application/json\'  \\ \n--data-raw \'{ "referenceId": "102039", \n    "callbackUrl": "http://localhost/mockVtexPostCallback/?httpStatus=200", \n    "expiresAt": "2020-12-12T15:53:00+05:00", \n    "returnUrl": "http://www.picpay.com/#transacaoConcluida", \n    "value": 10, \n    "additionalInfo": [ null ], \n    "channel" : "name-of-your-channel",\n    "purchaseMode" : "in-store",\n    "buyer": { \n        "firstName": "Jo\xe3o", \n        "lastName": "dos Testes", \n        "document": "010.091.001-91" \n    } \n}\'\n')),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Importante")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"Apesar de n\xe3o ser obrigat\xf3rio, voc\xea ainda poder\xe1 enviar os dados de ",Object(n.b)("inlineCode",{parentName:"p"},"buyer")," na requisi\xe7\xe3o. Lembre-se que os n\xedveis de convers\xe3o aumentam consideravelmente quando os dados de ",Object(n.b)("inlineCode",{parentName:"p"},"buyer")," s\xe3o enviados, j\xe1 que o cliente recebe uma notifica\xe7\xe3o via push.")),Object(n.b)("h2",{id:"ponto-de-aten\xe7\xe3o"},"Ponto de aten\xe7\xe3o"),Object(n.b)("p",null,"As credenciais do lojista ser\xe3o bloqueadas caso o PicPay identifique que o mesmo est\xe1 enviando transa\xe7\xf5es 100% online (como, por exemplo, transa\xe7\xf5es de e-commerce como ",Object(n.b)("inlineCode",{parentName:"p"},"in-store"),'), apenas para "driblar" a obrigatoriedade dos dados de ',Object(n.b)("inlineCode",{parentName:"p"},"buyer"),"."),Object(n.b)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),Object(n.b)("p",null,"Esperamos ter ajudado com este artigo! Ficou alguma d\xfavida? Voc\xea pode consultar o nosso ",Object(n.b)("a",{parentName:"p",href:"https://ajudaempresas.picpay.com/hc/pt-br/categories/360003836611-PicPay-E-commerce"},"FAQ")," ou entrar em contato atrav\xe9s do e-mail ",Object(n.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com"),"."))}p.isMDXComponent=!0},119:function(e,a,t){"use strict";t.d(a,"a",(function(){return u})),t.d(a,"b",(function(){return b}));var o=t(0),n=t.n(o);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=n.a.createContext({}),l=function(e){var a=n.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},u=function(e){var a=l(e.components);return n.a.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||r;return t?n.a.createElement(b,c(c({ref:a},p),{},{components:t})):n.a.createElement(b,c({ref:a},p))}));function b(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<r;p++)i[p]=t[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);