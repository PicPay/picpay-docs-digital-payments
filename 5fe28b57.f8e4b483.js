(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1026:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/sequence-diagram-qrcode-3ea687f31039f1a193db09da712661a0.png"},1027:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/ecommerce-qrcode-redirect-293fe5a6e0c4b11373c71ebb4554ec5e.png"},1028:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/ecommerce-qrcode-embeeded-513cbe984275536407544ee210fec957.png"},126:function(e,a,t){"use strict";t.d(a,"a",(function(){return d})),t.d(a,"b",(function(){return u}));var n=t(0),o=t.n(n);function c(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){c(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),m=function(e){var a=o.a.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=m(e.components);return o.a.createElement(p.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return o.a.createElement(o.a.Fragment,{},a)}},l=o.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=m(t),l=n,u=d["".concat(i,".").concat(l)]||d[l]||b[l]||c;return t?o.a.createElement(u,r(r({ref:a},p),{},{components:t})):o.a.createElement(u,r({ref:a},p))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,i=new Array(c);i[0]=l;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:n,i[1]=r;for(var p=2;p<c;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},91:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return r})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return d}));var n=t(3),o=t(8),c=(t(0),t(126)),i=["components"],r={id:"accepting-payments",title:"Aceitando Pagamentos",hide_title:!0},s={unversionedId:"checkout/guides/accepting-payments",id:"checkout/guides/accepting-payments",isDocsHomePage:!1,title:"Aceitando Pagamentos",description:"Aceitando pagamentos com a API p\xfablica",source:"@site/docs/checkout/guides/accepting-payments.md",slug:"/checkout/guides/accepting-payments",permalink:"/picpay-docs-digital-payments/checkout/guides/accepting-payments",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/checkout/guides/accepting-payments.md",version:"current",sidebar:"docs",previous:{title:"Como come\xe7ar",permalink:"/picpay-docs-digital-payments/checkout/intro/getting-started"},next:{title:"Solicitar cancelamentos",permalink:"/picpay-docs-digital-payments/checkout/guides/cancel-order"}},p=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos",children:[]},{value:"Como funciona?",id:"como-funciona",children:[{value:"Autentica\xe7\xe3o",id:"autentica\xe7\xe3o",children:[]},{value:"Funcionamento b\xe1sico",id:"funcionamento-b\xe1sico",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],m={toc:p};function d(e){var a=e.components,r=Object(o.a)(e,i);return Object(c.b)("wrapper",Object(n.a)({},m,r,{components:a,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"aceitando-pagamentos-com-a-api-p\xfablica"},"Aceitando pagamentos com a API p\xfablica"),Object(c.b)("h2",{id:"sobre-este-guia"},"Sobre este guia"),Object(c.b)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea aceite pagamentos online com PicPay, assim como o fluxo b\xe1sico de um pagamento com QR Code e o ciclo de vida dos pagamentos."),Object(c.b)("h2",{id:"pr\xe9-requisitos"},"Pr\xe9-requisitos"),Object(c.b)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Voc\xea pode conferir como obter suas credenciais ",Object(c.b)("a",{parentName:"p",href:"/checkout/intro/getting-started#antes-de-come%C3%A7ar"},"neste artigo"),"."),Object(c.b)("h2",{id:"como-funciona"},"Como funciona?"),Object(c.b)("h3",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),Object(c.b)("p",null,"O PicPay disponibiliza duas chaves de integra\xe7\xe3o: O ",Object(c.b)("inlineCode",{parentName:"p"},"x-picpay-token")," e o ",Object(c.b)("inlineCode",{parentName:"p"},"x-seller-token"),". Para esta opera\xe7\xe3o, voc\xea dever\xe1 utilizar o ",Object(c.b)("inlineCode",{parentName:"p"},"x-picpay-token")," em suas requisi\xe7\xf5es."),Object(c.b)("h3",{id:"funcionamento-b\xe1sico"},"Funcionamento b\xe1sico"),Object(c.b)("p",null,"O PicPay funciona como uma forma de pagamento ",Object(c.b)("strong",{parentName:"p"},"ass\xedncrona"),", ou seja, uma inten\xe7\xe3o de pagamento \xe9 gerada atrav\xe9s de nossa API de pagamento e permanece com o status ",Object(c.b)("inlineCode",{parentName:"p"},"pending")," at\xe9 que o usu\xe1rio efetue o pagamento com o aplicativo verdinho. Veja abaixo o fluxo b\xe1sico de funcionamento dos pagamentos via QR Code."),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:t(1026).default})),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Passo 1"),": O cliente seleciona o PicPay como forma de pagamento em seu e-commerce;"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Passo 2:")," Seu e-commerce deve efetuar uma chamada (server-side) para nossa API de pagamentos (/payments), gerando uma inten\xe7\xe3o de pagamento com status pending dentro do PicPay;"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://appws.picpay.com/ecommerce/public/payments\'  \\ \n--header \'x-picpay-token: {sua_chave_de_integracao}\'  \\ \n--header \'Content-Type: application/json\'  \\ \n--data-raw \'{ "referenceId": "102039", \n    "callbackUrl": "http://localhost/mockVtexPostCallback/?httpStatus=200", \n    "expiresAt": "2020-12-12T15:53:00+05:00", \n    "returnUrl": "http://www.picpay.com/#transacaoConcluida", \n    "value": 10, \n    "additionalInfo": [ null ], \n    "buyer": { \n        "firstName": "Jo\xe3o", \n        "lastName": "dos Testes", \n        "document": "010.091.001-91" \n    } \n}\'\n')),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Exemplo de request: O e-commerce cria uma inten\xe7\xe3o de pagamento de 10 reais no PicPay para o cliente Jo\xe3o dos Testes")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Passo 3:")," O PicPay devolve o QR Code no retorno da chamada da API de pagamentos (URL para redirecionamento em paymentUrl e imagem codificada em qrcode.base64);"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{  \n    "referenceId":  "102039",  \n    "paymentUrl":  "https://app.picpay.com/checkout/NWZkOTFjZTA4.....ZWJmM2QxMzA2",  \n    "qrcode":  {  \n        "content":  "https://app.picpay.com/checkout/NWZkOTFjZTA4.....ZWJmM2QxMzA2",  \n        "base64":  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAIAAAAP3aGb...(muitos caracteres)..II="  \n    },  \n    "expiresAt":  "2020-12-12T08:53:00-02:00"  \n}\n')),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Exemplo de response para o request do passo 3.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Passo 4:")," No seu e-commerce, voc\xea exibe o QR code para seu cliente efetuando o redirecionando para a URL ou exibindo o QR Code;"),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:t(1027).default}),"\n",Object(c.b)("em",{parentName:"p"},"Imagem 2 - Exemplo utilizando redirecionamento")),Object(c.b)("p",null,Object(c.b)("img",{alt:"img",src:t(1028).default}),"\n",Object(c.b)("em",{parentName:"p"},"Imagem 3 - Exemplo utilizando o QRCode na p\xe1gina")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Passo 5:")," Caso identificarmos que seu cliente tamb\xe9m \xe9 cliente PicPay, iremos enviar uma notifica\xe7\xe3o dentro do aplicativo PicPay avisando sobre o pagamento pendente. Em todos os casos iremos enviar um e-mail de pagamento pendente contendo o link de nossa p\xe1gina de checkout. Neste momento, teremos uma inten\xe7\xe3o de pagamento com o status pending (saiba mais sobre o ciclo de vida dos pagamentos aqui);"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Passo 6:")," O cliente efetua o pagamento atrav\xe9s do App PicPay (Com saldo ou cart\xe3o de cr\xe9dito)."),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Informa\xe7\xe3o")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Caso o cliente n\xe3o efetue o pagamento at\xe9 a data de expira\xe7\xe3o (enviada no momento de cria\xe7\xe3o), o pagamento passar\xe1 para o status expired"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Passo 7:")," Caso o pagamento seja bem sucedido, o PicPay envia uma notifica\xe7\xe3o para o e-commerce via ",Object(c.b)("strong",{parentName:"p"},"POST")," na URL de ",Object(c.b)("em",{parentName:"p"},"callback,")," fornecida na requisi\xe7\xe3o de pagamento como callbackUrl."),Object(c.b)("p",null,"Seu e-commerce dever\xe1 estar preparado para receber um ",Object(c.b)("strong",{parentName:"p"},"POST")," no endpoint /callback, utilizando o x-seller-token no ",Object(c.b)("em",{parentName:"p"},"header")," para autentica\xe7\xe3o da requisi\xe7\xe3o. Para que o recebimento do ",Object(c.b)("em",{parentName:"p"},"callback")," seja considerado confirmado, seu e-commerce deve responder com ",Object(c.b)("strong",{parentName:"p"},"HTTP Status 200"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\ http://www.sualoja.com.br/callback \\ \n    -H \'Content-Type: application/json\'  \\ \n    -H \'x-seller-token: 4ef4edbd-5cda-42da-860b-0e8d7b90c784\'  \\ \n    -d \'{   \n            "referenceId" : "102030", \n            "authorizationId" : "555008cef7f321d00ef236333" \n        }\'\n')),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Exemplo de notifica\xe7\xe3o que o PicPay envia para o e-commerce.")),Object(c.b)("div",{className:"admonition admonition-info alert alert--info"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Informa\xe7\xe3o")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Por\xe9m, por quest\xf5es de seguran\xe7a, n\xe3o iremos informar o novo status nesta requisi\xe7\xe3o. Para isto, sua loja (a partir do recebimento de nossa notifica\xe7\xe3o) dever\xe1 consultar nosso endpoint de status de pedidos."))),Object(c.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(c.b)("div",{parentName:"div",className:"admonition-heading"},Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",{parentName:"h5",className:"admonition-icon"},Object(c.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(c.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Aten\xe7\xe3o")),Object(c.b)("div",{parentName:"div",className:"admonition-content"},Object(c.b)("p",{parentName:"div"},"Se o callback n\xe3o chegar ap\xf3s o tempo determinado por voc\xea, recomendamos que uma consulta do status da ordem seja feita de forma direta (",Object(c.b)("strong",{parentName:"p"},"passo 8"),"). Isso \xe9 aplic\xe1vel para casos que precisem de confirma\xe7\xf5es inst\xe2ntaneas (compras presenciais ou vending-machines, por exemplo)."))),Object(c.b)("p",null,"Saiba mais sobre as notifica\xe7\xf5es que o PicPay envia ",Object(c.b)("a",{parentName:"p",href:"/checkout/guides/notifications"},"neste artigo"),"."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Passo 8:")," O seu e-commerce deve efetuar um GET utilizando o referenceId que enviamos por notifica\xe7\xe3o, atrav\xe9s para obten\xe7\xe3o do status do pagamento."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \\ https://appws.picpay.com/ecommerce/public/payments/{referenceId}/status \\ \n    -H 'Content-Type: application/json'  \\ \n    -H 'x-picpay-token: {sua_chave_de_integracao}'  \\  }'\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Exemplo de notifica\xe7\xe3o que o PicPay envia para o e-commerce.")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Passo 9:")," Caso o pagamento esteja confirmado, exibir confirma\xe7\xe3o no seu e-commerce."),Object(c.b)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/checkout/guides/order-status"},"Entenda os poss\xedveis status de um pagamento"),";"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/checkout/guides/cancel-order"},"Entenda como solicitar um cancelamento total"),";"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"/checkout/guides/notifications"},"Entenda um pouco mais sobre as notifica\xe7\xf5es que o PicPay envia"),";")),Object(c.b)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),Object(c.b)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",Object(c.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com."},"relacionamento-empresas@picpay.com.")," "))}d.isMDXComponent=!0}}]);