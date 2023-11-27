(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{110:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return d}));var o=t(3),n=(t(0),t(128));const r={id:"order-status",title:"Obter status do pagamento"},i={unversionedId:"checkout/guides/order-status",id:"checkout/guides/order-status",isDocsHomePage:!1,title:"Obter status do pagamento",description:"Sobre este guia",source:"@site/docs/checkout/guides/order-status.md",slug:"/checkout/guides/order-status",permalink:"/picpay-docs-digital-payments/checkout/guides/order-status",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/checkout/guides/order-status.md",version:"current",sidebar:"docs",previous:{title:"Gerenciar notifica\xe7\xf5es",permalink:"/picpay-docs-digital-payments/checkout/guides/notifications"},next:{title:"VTEX",permalink:"/picpay-docs-digital-payments/checkout/plugins/vtex"}},c=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos",children:[]},{value:"Como funciona?",id:"como-funciona",children:[{value:"Autentica\xe7\xe3o",id:"autentica\xe7\xe3o",children:[]},{value:"Funcionamento b\xe1sico",id:"funcionamento-b\xe1sico",children:[]},{value:"Ciclo de vida de um pagamento",id:"ciclo-de-vida-de-um-pagamento",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],s={toc:c};function d(e){let{components:a,...t}=e;return Object(n.b)("wrapper",Object(o.a)({},s,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"sobre-este-guia"},"Sobre este guia"),Object(n.b)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea consulte o status de suas ordens geradas atrav\xe9s de nossa API de e-commerce."),Object(n.b)("h2",{id:"pr\xe9-requisitos"},"Pr\xe9-requisitos"),Object(n.b)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Voc\xea pode conferir como obter suas credenciais ",Object(n.b)("a",{parentName:"p",href:"/checkout/intro/getting-started#antes-de-come%C3%A7ar"},"neste artigo"),"."),Object(n.b)("h2",{id:"como-funciona"},"Como funciona?"),Object(n.b)("h3",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),Object(n.b)("p",null,"O PicPay disponibiliza duas chaves de integra\xe7\xe3o: O x-picpay-token e o x-seller-token. Para esta opera\xe7\xe3o, voc\xea dever\xe1 utilizar o x-picpay-token em suas requisi\xe7\xf5es."),Object(n.b)("h3",{id:"funcionamento-b\xe1sico"},"Funcionamento b\xe1sico"),Object(n.b)("p",null,"Voc\xea poder\xe1 consultar o status de toda ordem gerada por seu e-commerce atrav\xe9s do referenceId \xfanico informado no momento da requisi\xe7\xe3o de pagamento. O endpoint de consulta ir\xe1 retornar apenas o status de sua ordem, assim como os campos informados dentro de additional_info."),Object(n.b)("div",{className:"admonition admonition-info alert alert--info"},Object(n.b)("div",{parentName:"div",className:"admonition-heading"},Object(n.b)("h5",{parentName:"div"},Object(n.b)("span",{parentName:"h5",className:"admonition-icon"},Object(n.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(n.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Informa\xe7\xe3o")),Object(n.b)("div",{parentName:"div",className:"admonition-content"},Object(n.b)("p",{parentName:"div"},"Os dados do comprador ou o QRCode gerado na cria\xe7\xe3o da inten\xe7\xe3o de pagamento n\xe3o ser\xe3o devolvidos pelo endpoint de consulta."))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Passo 1"),": O seu e-commerce deve efetuar um GET utilizando o referenceId informado no momento da requisi\xe7\xe3o (e que tamb\xe9m enviamos por notifica\xe7\xe3o a cada mudan\xe7a de status). Entende um pouco mais sobre notifica\xe7\xf5es ","[aqui]"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \\ https://appws.picpay.com/ecommerce/public/payments/{referenceId}/status \\ \n    -H 'Content-Type: application/json' \\ \n    -H 'x-picpay-token: {sua_chave_de_integracao}' \\ '`\n")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Exemplo de requisi\xe7\xe3o para consultar o status de uma ordem.")),Object(n.b)("h3",{id:"ciclo-de-vida-de-um-pagamento"},"Ciclo de vida de um pagamento"),Object(n.b)("p",null,"Ao chamar o endpoint de pagamentos, uma ordem \xe9 gerada dentro do PicPay com status created. A ordem de status created poder\xe1 ser ou paga ou cancelada. Caso seja cancelada ou atinja a data de expira\xe7\xe3o (informada em expirationDate, no momento da cria\xe7\xe3o da ordem), a ordem passara para o status expired."),Object(n.b)("p",null,"As ordens pagas com sucesso pelos usu\xe1rios ter\xe3o seu status atualizado para paid. Caso o PicPay identifique algum comportamento fraudulento no processo de pagamentos, ir\xe1 analisar a ordem que por sua vez ficar\xe1 com o status analysis."),Object(n.b)("p",null,"Abaixo um resumo sobre os status explicados acima, assim como outros status relevantes:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"created"),": registro criado;"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"expired"),": prazo para pagamento expirado ou ordem cancelada;"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"analysis"),": pago e em processo de an\xe1lise anti-fraude;"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"paid"),": pago;"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"completed"),": pago e saldo dispon\xedvel;"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"refunded"),": pago e devolvido;"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"chargeback"),": pago e com chargeback;")),Object(n.b)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/checkout/guides/cancel-order"},"Entenda como solicitar um cancelamento total"),";"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"/checkout/guides/notifications"},"Entenda um pouco mais sobre as notifica\xe7\xf5es que o PicPay envia"),";")),Object(n.b)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),Object(n.b)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",Object(n.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com."},"relacionamento-empresas@picpay.com.")," "))}d.isMDXComponent=!0},128:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return b}));var o=t(0),n=t.n(o);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=n.a.createContext({}),u=function(e){var a=n.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},p=function(e){var a=u(e.components);return n.a.createElement(d.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return n.a.createElement(n.a.Fragment,{},a)}},m=n.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(t),m=o,b=p["".concat(i,".").concat(m)]||p[m]||l[m]||r;return t?n.a.createElement(b,c(c({ref:a},d),{},{components:t})):n.a.createElement(b,c({ref:a},d))}));function b(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<r;d++)i[d]=t[d];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);