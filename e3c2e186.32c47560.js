(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{105:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return i})),o.d(a,"metadata",(function(){return s})),o.d(a,"toc",(function(){return c})),o.d(a,"default",(function(){return m}));var n=o(3),t=o(8),r=(o(0),o(115)),i={id:"refund-payments",title:"Reembolsando pagamentos",sidebar_label:"Reembolsando pagamentos",hide_title:!1,description:"Aprenda como reembolsar pagamentos na nossa solu\xe7\xe3o de Pagamento Logado",keywords:["Pagamento logado","Reembolso","Login"]},s={unversionedId:"pagamento-logado/guides/refund-payments",id:"pagamento-logado/guides/refund-payments",isDocsHomePage:!1,title:"Reembolsando pagamentos",description:"Aprenda como reembolsar pagamentos na nossa solu\xe7\xe3o de Pagamento Logado",source:"@site/docs/pagamento-logado/guides/refund-payments.md",slug:"/pagamento-logado/guides/refund-payments",permalink:"/picpay-docs-digital-payments/pagamento-logado/guides/refund-payments",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/pagamento-logado/guides/refund-payments.md",version:"current",sidebar_label:"Reembolsando pagamentos",sidebar:"pagamentoLogado",previous:{title:"Processando pagamentos",permalink:"/picpay-docs-digital-payments/pagamento-logado/guides/process-payments"},next:{title:"Obtendo informa\xe7\xf5es do usu\xe1rio",permalink:"/picpay-docs-digital-payments/pagamento-logado/guides/user-info"}},c=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",children:[]},{value:"Como funciona",id:"como-funciona",children:[{value:"Autentica\xe7\xe3o",id:"autentica\xe7\xe3o",children:[]},{value:"Solicitando um reembolso de uma cobran\xe7a \xe0 carteira do usu\xe1rio",id:"solicitando-um-reembolso-de-uma-cobran\xe7a-\xe0-carteira-do-usu\xe1rio",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],d={toc:c};function m(e){var a=e.components,o=Object(t.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,o,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"sobre-este-guia"},"Sobre este guia"),Object(r.b)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea solicite reembolsos de pagamentos gerados atrav\xe9s de nossa solu\xe7\xe3o de pagamentos logada."),Object(r.b)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),Object(r.b)("p",null,"Antes de processar pagamentos online atrav\xe9s de nossa solu\xe7\xe3o de ",Object(r.b)("strong",{parentName:"p"},"Pagamento Logado"),", voc\xea deve possuir um ",Object(r.b)("inlineCode",{parentName:"p"},"access_token")," v\xe1lido e n\xe3o expirado. Voc\xea pode conferir como gerar seus tokens ",Object(r.b)("a",{parentName:"p",href:"/pagamento-logado/guides/oauth2-flow"},"neste artigo"),"."),Object(r.b)("h2",{id:"como-funciona"},"Como funciona"),Object(r.b)("h3",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),Object(r.b)("p",null,"Al\xe9m do ",Object(r.b)("inlineCode",{parentName:"p"},"access_token"),", gerado dinamicamente, o end-point de pagamentos necessita tamb\xe9m de uma ",Object(r.b)("inlineCode",{parentName:"p"},"Api-Key")," que lhe ser\xe1 informada junto com seu ",Object(r.b)("inlineCode",{parentName:"p"},"client_id")," e ",Object(r.b)("inlineCode",{parentName:"p"},"client_secret"),"."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Sobre o Api-Key")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"O ",Object(r.b)("inlineCode",{parentName:"p"},"Api-Key")," n\xe3o dever\xe1 ser compartilhado de forma alguma e dever\xe1 ficar armazenado de forma segura em seus servidores. "))),Object(r.b)("h3",{id:"solicitando-um-reembolso-de-uma-cobran\xe7a-\xe0-carteira-do-usu\xe1rio"},"Solicitando um reembolso de uma cobran\xe7a \xe0 carteira do usu\xe1rio"),Object(r.b)("p",null,"A solicita\xe7\xe3o de reembolso dever\xe1 ser gerada com o ",Object(r.b)("inlineCode",{parentName:"p"},"transaction_id")," atrav\xe9s do end-point ",Object(r.b)("inlineCode",{parentName:"p"},"v1/payments/{{transaction_id}}/refund"),", indicando o valor a ser reembolsado no corpo da requisi\xe7\xe3o. No exemplo abaixo, estamos solicitando o reembolso de R$ 3,00 na carteira do usu\xe1rio."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Informa\xe7\xe3o")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"O campo ",Object(r.b)("inlineCode",{parentName:"p"},"transaction_id")," \xe9 gerado no momento da cria\xe7\xe3o do pagamento."))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://api.picpay.com/v1/payments/{{transaction_id}}/refund' \\\n--header  'Api-Key: {{api_key}}' \\\n--header 'Authorization: Bearer {access_token}' \\\n--header 'Content-Type: application/x-www-form-urlencoded' \\\n--data-urlencode 'value=3'\n")),Object(r.b)("p",null,"Caso a solicita\xe7\xe3o seja processada com sucesso, retornar\xe1 um c\xf3digo HTTP 204"),Object(r.b)("h4",{id:"como-ser\xe1-feito-o-reembolso"},"Como ser\xe1 feito o reembolso?"),Object(r.b)("p",null,"O saldo ser\xe1 retornado ao mesmo lugar da origem dos fundos, ou seja:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Caso a transa\xe7\xe3o tiver sido feita por cart\xe3o de cr\xe9dito, ser\xe1 estornada no cart\xe3o;"),Object(r.b)("li",{parentName:"ul"},"Caso a transa\xe7\xe3o tiver sido feita no saldo, o saldo retornar\xe1 a carteira do cliente;"),Object(r.b)("li",{parentName:"ul"},"Caso a transa\xe7\xe3o seja mista (Saldo + Cart\xe3o), parte retornara como saldo na carteira e parte ser\xe1 estornada no cart\xe3o;")),Object(r.b)("h4",{id:"mensagens-de-erro"},"Mensagens de erro"),Object(r.b)("p",null,"N\xe3o informamos os c\xf3digos de erro no processo de estorno. Apenas informamos se a transa\xe7\xe3o foi estornada ou n\xe3o. Exemplo:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "Transaction could not be refund"\n}\n')),Object(r.b)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/pagamento-logado/guides/user-info"},"Consultando informa\xe7\xf5es dos usu\xe1rios"),";")),Object(r.b)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),Object(r.b)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",Object(r.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com."},"relacionamento-empresas@picpay.com.")," "))}m.isMDXComponent=!0},115:function(e,a,o){"use strict";o.d(a,"a",(function(){return p})),o.d(a,"b",(function(){return b}));var n=o(0),t=o.n(n);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function c(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=t.a.createContext({}),m=function(e){var a=t.a.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},p=function(e){var a=m(e.components);return t.a.createElement(d.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},u=t.a.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=m(o),u=n,b=p["".concat(i,".").concat(u)]||p[u]||l[u]||r;return o?t.a.createElement(b,s(s({ref:a},d),{},{components:o})):t.a.createElement(b,s({ref:a},d))}));function b(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var c in a)hasOwnProperty.call(a,c)&&(s[c]=a[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var d=2;d<r;d++)i[d]=o[d];return t.a.createElement.apply(null,i)}return t.a.createElement.apply(null,o)}u.displayName="MDXCreateElement"}}]);