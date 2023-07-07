(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{125:function(e,a,o){"use strict";o.d(a,"a",(function(){return u})),o.d(a,"b",(function(){return b}));var n=o(0),t=o.n(n);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function s(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?s(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function c(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=t.a.createContext({}),p=function(e){var a=t.a.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},u=function(e){var a=p(e.components);return t.a.createElement(d.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},l=t.a.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(o),l=n,b=u["".concat(s,".").concat(l)]||u[l]||m[l]||r;return o?t.a.createElement(b,i(i({ref:a},d),{},{components:o})):t.a.createElement(b,i({ref:a},d))}));function b(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=l;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<r;d++)s[d]=o[d];return t.a.createElement.apply(null,s)}return t.a.createElement.apply(null,o)}l.displayName="MDXCreateElement"},76:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return r})),o.d(a,"metadata",(function(){return s})),o.d(a,"toc",(function(){return i})),o.d(a,"default",(function(){return d}));var n=o(3),t=(o(0),o(125));const r={id:"process-payments",title:"Processando pagamentos",sidebar_label:"Processando pagamentos",hide_title:!1,description:"Aprenda como processar pagamentos na nossa solu\xe7\xe3o PicPay 1-Click",keywords:["PicPay 1-Click","Pagamento","Login"]},s={unversionedId:"one-click/guides/process-payments",id:"one-click/guides/process-payments",isDocsHomePage:!1,title:"Processando pagamentos",description:"Aprenda como processar pagamentos na nossa solu\xe7\xe3o PicPay 1-Click",source:"@site/docs/one-click/guides/process-payments.md",slug:"/one-click/guides/process-payments",permalink:"/picpay-docs-digital-payments/one-click/guides/process-payments",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/one-click/guides/process-payments.md",version:"current",sidebar_label:"Processando pagamentos",sidebar:"pagamentoLogado",previous:{title:"Autentica\xe7\xe3o e autoriza\xe7\xe3o",permalink:"/picpay-docs-digital-payments/one-click/guides/oauth2-flow"},next:{title:"Reembolsando pagamentos",permalink:"/picpay-docs-digital-payments/one-click/guides/refund-payments"}},i=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",children:[]},{value:"Como funciona",id:"como-funciona",children:[{value:"Autentica\xe7\xe3o",id:"autentica\xe7\xe3o",children:[]},{value:"Gerando uma cobran\xe7a na carteira do usu\xe1rio",id:"gerando-uma-cobran\xe7a-na-carteira-do-usu\xe1rio",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],c={toc:i};function d(e){let{components:a,...o}=e;return Object(t.b)("wrapper",Object(n.a)({},c,o,{components:a,mdxType:"MDXLayout"}),Object(t.b)("h2",{id:"sobre-este-guia"},"Sobre este guia"),Object(t.b)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea processe pagamentos com o PicPay atrav\xe9s de nossa solu\xe7\xe3o de pagamentos logada."),Object(t.b)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),Object(t.b)("p",null,"Antes de processar pagamentos online atrav\xe9s de nossa solu\xe7\xe3o de ",Object(t.b)("strong",{parentName:"p"},"PicPay 1-Click"),", voc\xea deve possuir um ",Object(t.b)("inlineCode",{parentName:"p"},"access_token")," v\xe1lido e n\xe3o expirado. Voc\xea pode conferir como gerar seus tokens ",Object(t.b)("a",{parentName:"p",href:"/one-click/guides/oauth2-flow"},"neste artigo"),"."),Object(t.b)("h2",{id:"como-funciona"},"Como funciona"),Object(t.b)("h3",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),Object(t.b)("p",null,"Al\xe9m do ",Object(t.b)("inlineCode",{parentName:"p"},"access_token"),", gerado dinamicamente, o end-point de pagamentos necessita tamb\xe9m de uma ",Object(t.b)("inlineCode",{parentName:"p"},"Api-Key")," que lhe ser\xe1 informada junto com seu ",Object(t.b)("inlineCode",{parentName:"p"},"client_id")," e ",Object(t.b)("inlineCode",{parentName:"p"},"client_secret"),"."),Object(t.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(t.b)("div",{parentName:"div",className:"admonition-heading"},Object(t.b)("h5",{parentName:"div"},Object(t.b)("span",{parentName:"h5",className:"admonition-icon"},Object(t.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(t.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Sobre o Api-Key")),Object(t.b)("div",{parentName:"div",className:"admonition-content"},Object(t.b)("p",{parentName:"div"},"O ",Object(t.b)("inlineCode",{parentName:"p"},"Api-Key")," n\xe3o dever\xe1 ser compartilhado de forma alguma e deve ficar armazenado de forma segura em seus servidores. "))),Object(t.b)("h3",{id:"gerando-uma-cobran\xe7a-na-carteira-do-usu\xe1rio"},"Gerando uma cobran\xe7a na carteira do usu\xe1rio"),Object(t.b)("p",null,"Possuindo um ",Object(t.b)("inlineCode",{parentName:"p"},"access_token")," v\xe1lido, o processo de gera\xe7\xe3o de uma cobran\xe7a na carteira dos clientes \xe9 extremamente simples e fluido. A cobran\xe7a dever\xe1 ser gerada atrav\xe9s do end-point ",Object(t.b)("inlineCode",{parentName:"p"},"v1/payments/charge"),", indicando o valor a ser debitado no corpo da requisi\xe7\xe3o. No exemplo abaixo, estamos solicitando a cobran\xe7a de R$ 3,00 na carteira do usu\xe1rio."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-bash"},"\ncurl --location --request POST 'https://api.picpay.com/v1/payments/charge' \\\n--header 'Api-Key: {{api_key}}' \\\n--header 'Authorization: Bearer {access_token} \\\n--header 'Content-Type: application/x-www-form-urlencoded' \\\n--data-urlencode 'value=3'\n\n")),Object(t.b)("p",null,"Abaixo um exemplo de retorno de sucesso. O campo ",Object(t.b)("inlineCode",{parentName:"p"},"transaction_id")," deve ser guardado pois \xe9 a chave para processos de estorno."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n    "transaction_id": "246599282",\n    "created_at": "2021-02-22 19:29:16"\n}\n')),Object(t.b)("h4",{id:"qual-ser\xe1-a-origem-dos-fundos-"},"Qual ser\xe1 a origem dos fundos ?"),Object(t.b)("p",null,"O valor da cobran\xe7a poder\xe1 ser debitado do cart\xe3o de cr\xe9dito, saldo ou ambos (saldo + cart\xe3o). Caso o cliente possua a op\xe7\xe3o de ",Object(t.b)("em",{parentName:"p"},"Usar saldo")," habilitada no App, iremos consumir primeiramente o saldo do usu\xe1rio e posteriormente (caso n\xe3o haja saldo suficiente), efetuar uma cobran\xe7a no cart\xe3o."),Object(t.b)("p",null,"Exemplo: Estou efetuando uma compra de R$60, possuo R$19 de saldo em minha carteira. O PicPay ir\xe1 consumir os R$19 e efetuar uma cobran\xe7a de R$41 no cart\xe3o cadastrado."),Object(t.b)("h4",{id:"mensagens-de-erro"},"Mensagens de erro"),Object(t.b)("p",null,"N\xe3o informamos os c\xf3digos de erro nos retornos das transa\xe7\xf5es. Apenas informamos se a transa\xe7\xe3o foi aprovada ou n\xe3o."),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n    "message":"Unauthorized transaction."\n}\n')),Object(t.b)("h4",{id:"timeout-de-cobran\xe7a"},"Timeout de cobran\xe7a"),Object(t.b)("blockquote",null,Object(t.b)("p",{parentName:"blockquote"},"Atualmente um pagamento tem como timeout padr\xe3o o valor de 30 segundos. Esse gerenciamento \xe9 feito internamente para evitar problemas com cobran\xe7as indevidas.\nNa pr\xe1tica, caso o pagamento demore mais de 30s para retornar um sucesso a api vai retornar um erro 500 e caso o pagamento seja resolvido posteriormente ele automaticamente ser\xe1 desfeito atrav\xe9s de um reembolso autom\xe1tico."),Object(t.b)("p",{parentName:"blockquote"},"Caso a sua api tenha um timeout diferente de 30 segundos ser\xe1 preciso solicitar essa altera\xe7\xe3o para a sua integra\xe7\xe3o")),Object(t.b)("p",null,"Nesses casos a requisi\xe7\xe3o responder\xe1 com o HTTP Status Code ",Object(t.b)("strong",{parentName:"p"},"408 Request Timeout")," e com o seguinte body:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "Request took too long to process.",\n    "business_code": "REQUEST_TIMEOUT"\n}\n')),Object(t.b)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"/one-click/guides/refund-payments"},"Solicitando um reembolso"),";"),Object(t.b)("li",{parentName:"ul"},Object(t.b)("a",{parentName:"li",href:"/one-click/guides/user-info"},"Consultando informa\xe7\xf5es dos usu\xe1rios"),";")),Object(t.b)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),Object(t.b)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",Object(t.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com."},"relacionamento-empresas@picpay.com.")," "))}d.isMDXComponent=!0}}]);