(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{115:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return b}));var o=t(0),n=t.n(o);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u=n.a.createContext({}),p=function(e){var a=n.a.useContext(u),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=p(e.components);return n.a.createElement(u.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=o,b=d["".concat(c,".").concat(m)]||d[m]||l[m]||r;return t?n.a.createElement(b,i(i({ref:a},u),{},{components:t})):n.a.createElement(b,i({ref:a},u))}));function b(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,c=new Array(r);c[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<r;u++)c[u]=t[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return p}));var o=t(3),n=t(8),r=(t(0),t(115)),c={id:"notifications",title:"Gerenciar notifica\xe7\xf5es"},i={unversionedId:"checkout/guides/notifications",id:"checkout/guides/notifications",isDocsHomePage:!1,title:"Gerenciar notifica\xe7\xf5es",description:"Sobre este guia",source:"@site/docs/checkout/guides/notifications.md",slug:"/checkout/guides/notifications",permalink:"/picpay-docs-digital-payments/checkout/guides/notifications",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/checkout/guides/notifications.md",version:"current",sidebar:"docs",previous:{title:"Solicitar cancelamentos",permalink:"/picpay-docs-digital-payments/checkout/guides/cancel-order"},next:{title:"Obter status do pagamento",permalink:"/picpay-docs-digital-payments/checkout/guides/order-status"}},s=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos",children:[]},{value:"Como funciona?",id:"como-funciona",children:[{value:"Autentica\xe7\xe3o",id:"autentica\xe7\xe3o",children:[]},{value:"Funcionamento b\xe1sico",id:"funcionamento-b\xe1sico",children:[]},{value:"Situa\xe7\xf5es de notifica\xe7\xe3o",id:"situa\xe7\xf5es-de-notifica\xe7\xe3o",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],u={toc:s};function p(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"sobre-este-guia"},"Sobre este guia"),Object(r.b)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea receba notifica\xe7\xf5es sobre mudan\xe7a de status de suas ordens geradas atrav\xe9s de nossa API de e-commerce."),Object(r.b)("h2",{id:"pr\xe9-requisitos"},"Pr\xe9-requisitos"),Object(r.b)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Voc\xea pode conferir como obter suas credenciais ",Object(r.b)("a",{parentName:"p",href:"/checkout/intro/getting-started#antes-de-come%C3%A7ar"},"neste artigo"),"."),Object(r.b)("h2",{id:"como-funciona"},"Como funciona?"),Object(r.b)("h3",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),Object(r.b)("p",null,"O PicPay disponibiliza duas chaves de integra\xe7\xe3o: O x-picpay-token e o x-seller-token. Para esta opera\xe7\xe3o, voc\xea dever\xe1 estar pronto para receber requisi\xe7\xf5es em seus servidores, utilizando o x-seller-token para autenticar as requisi\xe7\xf5es."),Object(r.b)("h3",{id:"funcionamento-b\xe1sico"},"Funcionamento b\xe1sico"),Object(r.b)("p",null,"Ap\xf3s qualquer mudan\xe7a de status em suas ordens o PicPay notificar\xe1 a URL de callback (callbackUrl) informada no momento da requisi\xe7\xe3o de pagamento. Acompanhe abaixo como seu e-commerce deve estar preparado para receber as notifica\xe7\xf5es."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Passo 1:")," Imediatamente ap\xf3s qualquer mudan\xe7a de status de uma ordem, o PicPay envia uma notifica\xe7\xe3o para seu e-commerce via ",Object(r.b)("strong",{parentName:"p"},"POST")," na URL de ",Object(r.b)("em",{parentName:"p"},"callback,")," fornecida na requisi\xe7\xe3o de pagamento como callbackUrl."),Object(r.b)("p",null,"Seu e-commerce dever\xe1 estar preparado para receber um ",Object(r.b)("strong",{parentName:"p"},"POST")," no endpoint /callback, utilizando o x-seller-token no ",Object(r.b)("em",{parentName:"p"},"header")," para autentica\xe7\xe3o da requisi\xe7\xe3o. Para que o recebimento do ",Object(r.b)("em",{parentName:"p"},"callback")," seja considerado confirmado, seu e-commerce deve responder com ",Object(r.b)("strong",{parentName:"p"},"HTTP Status 200"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\ http://www.sualoja.com.br/callback \\ \n    -H \'Content-Type: application/json\' \\ \n    -H \'x-seller-token: 4ef4edbd-5cda-42da-860b-0e8d7b90c784\' \\ \n    -d \'{ \n            "referenceId" : "102030", \n            "authorizationId" : "555008cef7f321d00ef236333" \n        }\'\n')),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Exemplo de notifica\xe7\xe3o que o PicPay envia para o e-commerce.")),Object(r.b)("p",null,"Por quest\xf5es de seguran\xe7a \xe9 extremamente importante que o seu e-commerce fa\xe7a a valida\xe7\xe3o do x-seller-token"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Passo 2:")," O seu e-commerce deve efetuar um GET utilizando o referenceId que enviamos por notifica\xe7\xe3o, atrav\xe9s para obten\xe7\xe3o do novo status do pagamento."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \\ https://appws.picpay.com/ecommerce/public/payments/{referenceId}/status \\ \n    -H 'Content-Type: application/json' \\ \n    -H 'x-picpay-token: {sua_chave_de_integracao}' \\ '\n")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Exemplo de obten\xe7\xe3o de status")),Object(r.b)("h3",{id:"situa\xe7\xf5es-de-notifica\xe7\xe3o"},"Situa\xe7\xf5es de notifica\xe7\xe3o"),Object(r.b)("p",null,"Seu e-commerce ser\xe1 notificado nas seguintes situa\xe7\xf5es:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Pedido expirado: n\xe3o \xe9 mais poss\xedvel paga-lo usando PicPay;"),Object(r.b)("li",{parentName:"ul"},"Pagamento em an\xe1lise: usu\xe1rio pagou por\xe9m o pagamento est\xe1 sob an\xe1lise;"),Object(r.b)("li",{parentName:"ul"},"Pedido pago;"),Object(r.b)("li",{parentName:"ul"},"Pedido completado: saldo dispon\xedvel para saque;"),Object(r.b)("li",{parentName:"ul"},"Pagamento devolvido: foi pago e estornado para o cliente;"),Object(r.b)("li",{parentName:"ul"},"Pagamento com chargeback: cliente solicitou \xe0 operadora o cancelamento do pagamento;")),Object(r.b)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/checkout/guides/order-status"},"Entenda os poss\xedveis status de um pagamento"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/checkout/guides/cancel-order"},"Entenda como solicitar um cancelamento total"),";")),Object(r.b)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),Object(r.b)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",Object(r.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com."},"relacionamento-empresas@picpay.com.")," "))}p.isMDXComponent=!0}}]);