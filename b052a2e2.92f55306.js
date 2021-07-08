(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{115:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return b}));var o=t(0),r=t.n(o);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),u=function(e){var a=r.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},d=function(e){var a=u(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(t),m=o,b=d["".concat(c,".").concat(m)]||d[m]||l[m]||n;return t?r.a.createElement(b,i(i({ref:a},p),{},{components:t})):r.a.createElement(b,i({ref:a},p))}));function b(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,c=new Array(n);c[0]=m;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<n;p++)c[p]=t[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},94:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return s})),t.d(a,"default",(function(){return u}));var o=t(3),r=t(8),n=(t(0),t(115)),c={id:"cancel-order",title:"Solicitar cancelamentos"},i={unversionedId:"checkout/guides/cancel-order",id:"checkout/guides/cancel-order",isDocsHomePage:!1,title:"Solicitar cancelamentos",description:"Sobre este guia",source:"@site/docs/checkout/guides/cancel-order.md",slug:"/checkout/guides/cancel-order",permalink:"/picpay-docs-digital-payments/checkout/guides/cancel-order",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/checkout/guides/cancel-order.md",version:"current",sidebar:"docs",previous:{title:"Aceitando Pagamentos",permalink:"/picpay-docs-digital-payments/checkout/guides/accepting-payments"},next:{title:"Gerenciar notifica\xe7\xf5es",permalink:"/picpay-docs-digital-payments/checkout/guides/notifications"}},s=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos",children:[]},{value:"Como funciona?",id:"como-funciona",children:[{value:"Autentica\xe7\xe3o",id:"autentica\xe7\xe3o",children:[]},{value:"Funcionamento b\xe1sico",id:"funcionamento-b\xe1sico",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],p={toc:s};function u(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},p,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"sobre-este-guia"},"Sobre este guia"),Object(n.b)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea cancelar suas ordens pendentes ou pagas atrav\xe9s de nossa API de e-commerce."),Object(n.b)("h2",{id:"pr\xe9-requisitos"},"Pr\xe9-requisitos"),Object(n.b)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Voc\xea pode conferir como obter suas credenciais ",Object(n.b)("a",{parentName:"p",href:"/checkout/intro/getting-started#antes-de-come%C3%A7ar"},"neste artigo"),"."),Object(n.b)("h2",{id:"como-funciona"},"Como funciona?"),Object(n.b)("h3",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),Object(n.b)("p",null,"O PicPay disponibiliza duas chaves de integra\xe7\xe3o: O x-picpay-token e o x-seller-token. Para esta opera\xe7\xe3o, voc\xea dever\xe1 utilizar o x-picpay-token em suas requisi\xe7\xf5es."),Object(n.b)("h3",{id:"funcionamento-b\xe1sico"},"Funcionamento b\xe1sico"),Object(n.b)("p",null,"Voc\xea poder\xe1 cancelar qualquer ordem gerada por seu e-commerce atrav\xe9s de nosso end-point de cancelamento. Confira abaixo as regras:"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Cen\xe1rio 1")," Se j\xe1 foi pago, o cliente PicPay ser\xe1 estornado caso sua conta de Lojista no PicPay tenha saldo para realizar o estorno e caso o cliente PicPay tenha recebido algum cashback nesta transa\xe7\xe3o, este valor ser\xe1 estornado do cliente (para isto o mesmo deve possuir saldo). Todas esses requisitos devem ser cumpridos para que o estorno da transa\xe7\xe3o ocorra com sucesso. Neste caso, o authorizationId tamb\xe9m deve ser enviado no corpo da requisi\xe7\xe3o."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://appws.picpay.com/ecommerce/public/payments/{referenceId}/cancellations' \\ \n    --header 'x-picpay-token: {sua_chave_de_integracao}' \\ \n    --header 'Content-Type: application/json' \\ \n    --data-raw '{ \"authorizationId\": \"601327196d038600273bbf1c\" }'\n")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Exemplo de cancelamento de ordem paga.")),Object(n.b)("p",null,"No exemplo acima, esta ordem ir\xe1 passar do status paid para refunded"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Cen\xe1rio 2")," Se ainda n\xe3o foi pago, a transa\xe7\xe3o ser\xe1 cancelada em nosso servidor e n\xe3o permitir\xe1 pagamento por parte do cliente PicPay. Neste caso, o referenceId \xe9 suficiente para a opera\xe7\xe3o."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://appws.picpay.com/ecommerce/public/payments/{referenceId}/cancellations' \\ \n    --header 'x-picpay-token: {sua_chave_de_integracao}' \\ \n    --header 'Content-Type: application/json' \\ \n    --data-raw ''`\n")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Exemplo de cancelamento de ordem pendente.")),Object(n.b)("p",null,"No exemplo acima, esta ordem ir\xe1 passar do status created para expired."),Object(n.b)("p",null,"Para transa\xe7\xf5es pagas com saldo, o valor ser\xe1 devolvido \xe0 carteira do usu\xe1rio quase que imediatamente ap\xf3s a opera\xe7\xe3o. O estorno de uma transa\xe7\xe3o feita com cart\xe3o de cr\xe9dito pode demorar alguns dias ser refletido na fatura do cliente."),Object(n.b)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/checkout/guides/order-status"},"Entenda os poss\xedveis status de um pagamento"),";"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/checkout/guides/notifications"},"Entenda um pouco mais sobre as notifica\xe7\xf5es que o PicPay envia"),";")),Object(n.b)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),Object(n.b)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",Object(n.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com."},"relacionamento-empresas@picpay.com.")," "))}u.isMDXComponent=!0}}]);