(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{115:function(e,a,o){"use strict";o.d(a,"a",(function(){return m})),o.d(a,"b",(function(){return b}));var n=o(0),t=o.n(n);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function s(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?s(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function c(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=t.a.createContext({}),p=function(e){var a=t.a.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},m=function(e){var a=p(e.components);return t.a.createElement(d.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},l=t.a.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=p(o),l=n,b=m["".concat(s,".").concat(l)]||m[l]||u[l]||r;return o?t.a.createElement(b,i(i({ref:a},d),{},{components:o})):t.a.createElement(b,i({ref:a},d))}));function b(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=l;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var d=2;d<r;d++)s[d]=o[d];return t.a.createElement.apply(null,s)}return t.a.createElement.apply(null,o)}l.displayName="MDXCreateElement"},80:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return s})),o.d(a,"metadata",(function(){return i})),o.d(a,"toc",(function(){return c})),o.d(a,"default",(function(){return p}));var n=o(3),t=o(8),r=(o(0),o(115)),s={id:"process-payments",title:"Processando pagamentos",sidebar_label:"Processando pagamentos",hide_title:!1,description:"Aprenda como processar pagamentos na nossa solu\xe7\xe3o de Pagamento Logado",keywords:["Pagamento logado","Pagamento","Login"]},i={unversionedId:"pagamento-logado/guides/process-payments",id:"pagamento-logado/guides/process-payments",isDocsHomePage:!1,title:"Processando pagamentos",description:"Aprenda como processar pagamentos na nossa solu\xe7\xe3o de Pagamento Logado",source:"@site/docs/pagamento-logado/guides/process-payments.md",slug:"/pagamento-logado/guides/process-payments",permalink:"/picpay-docs-digital-payments/pagamento-logado/guides/process-payments",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/pagamento-logado/guides/process-payments.md",version:"current",sidebar_label:"Processando pagamentos",sidebar:"pagamentoLogado",previous:{title:"Autentica\xe7\xe3o e autoriza\xe7\xe3o",permalink:"/picpay-docs-digital-payments/pagamento-logado/guides/oauth2-flow"},next:{title:"Reembolsando pagamentos",permalink:"/picpay-docs-digital-payments/pagamento-logado/guides/refund-payments"}},c=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",children:[]},{value:"Como funciona",id:"como-funciona",children:[{value:"Autentica\xe7\xe3o",id:"autentica\xe7\xe3o",children:[]},{value:"Gerando uma cobran\xe7a na carteira do usu\xe1rio",id:"gerando-uma-cobran\xe7a-na-carteira-do-usu\xe1rio",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],d={toc:c};function p(e){var a=e.components,o=Object(t.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,o,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"sobre-este-guia"},"Sobre este guia"),Object(r.b)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea processe pagamentos com o PicPay atrav\xe9s de nossa solu\xe7\xe3o de pagamentos logada."),Object(r.b)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),Object(r.b)("p",null,"Antes de processar pagamentos online atrav\xe9s de nossa solu\xe7\xe3o de ",Object(r.b)("strong",{parentName:"p"},"Pagamento Logado"),", voc\xea deve possuir um ",Object(r.b)("inlineCode",{parentName:"p"},"access_token")," v\xe1lido e n\xe3o expirado. Voc\xea pode conferir como gerar seus tokens ",Object(r.b)("a",{parentName:"p",href:"/pagamento-logado/guides/oauth2-flow"},"neste artigo"),"."),Object(r.b)("h2",{id:"como-funciona"},"Como funciona"),Object(r.b)("h3",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),Object(r.b)("p",null,"Al\xe9m do ",Object(r.b)("inlineCode",{parentName:"p"},"access_token"),", gerado dinamicamente, o end-point de pagamentos necessita tamb\xe9m de uma ",Object(r.b)("inlineCode",{parentName:"p"},"Api-Key")," que lhe ser\xe1 informada junto com seu ",Object(r.b)("inlineCode",{parentName:"p"},"client_id")," e ",Object(r.b)("inlineCode",{parentName:"p"},"client_secret"),"."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Sobre o Api-Key")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"O ",Object(r.b)("inlineCode",{parentName:"p"},"Api-Key")," n\xe3o dever\xe1 ser compartilhado de forma alguma e deve ficar armazenado de forma segura em seus servidores. "))),Object(r.b)("h3",{id:"gerando-uma-cobran\xe7a-na-carteira-do-usu\xe1rio"},"Gerando uma cobran\xe7a na carteira do usu\xe1rio"),Object(r.b)("p",null,"Possuindo um ",Object(r.b)("inlineCode",{parentName:"p"},"access_token")," v\xe1lido, o processo de gera\xe7\xe3o de uma cobran\xe7a na carteira dos clientes \xe9 extremamente simples e fluido. A cobran\xe7a dever\xe1 ser gerada atrav\xe9s do end-point ",Object(r.b)("inlineCode",{parentName:"p"},"v1/payments/charge"),", indicando o valor a ser debitado no corpo da requisi\xe7\xe3o. No exemplo abaixo, estamos solicitando a cobran\xe7a de R$ 3,00 na carteira do usu\xe1rio."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"\ncurl --location --request POST 'https://api.picpay.com/v1/payments/charge' \\\n--header 'Api-Key: {{api_key}}' \\\n--header 'Authorization: Bearer {access_token} \\\n--header 'Content-Type: application/x-www-form-urlencoded' \\\n--data-urlencode 'value=3'\n\n")),Object(r.b)("p",null,"Abaixo um exemplo de retorno de sucesso. O campo ",Object(r.b)("inlineCode",{parentName:"p"},"transaction_id")," deve ser guardado pois \xe9 a chave para processos de estorno."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "transaction_id": "246599282",\n    "created_at": "2021-02-22 19:29:16"\n}\n')),Object(r.b)("h4",{id:"qual-ser\xe1-a-origem-dos-fundos-"},"Qual ser\xe1 a origem dos fundos ?"),Object(r.b)("p",null,"O valor da cobran\xe7a poder\xe1 ser debitado do cart\xe3o de cr\xe9dito, saldo ou ambos (saldo + cart\xe3o). Caso o cliente possua a op\xe7\xe3o de ",Object(r.b)("em",{parentName:"p"},"Usar saldo")," habilitada no App, iremos consumir primeiramente o saldo do usu\xe1rio e posteriormente (caso n\xe3o haja saldo suficiente), efetuar uma cobran\xe7a no cart\xe3o."),Object(r.b)("p",null,"Exemplo: Estou efetuando uma compra de R$60, possuo R$19 de saldo em minha carteira. O PicPay ir\xe1 consumir os R$19 e efetuar uma cobran\xe7a de R$41 no cart\xe3o cadastrado."),Object(r.b)("h4",{id:"mensagens-de-erro"},"Mensagens de erro"),Object(r.b)("p",null,"N\xe3o informamos os c\xf3digos de erro nos retornos das transa\xe7\xf5es. Apenas informamos se a transa\xe7\xe3o foi aprovada ou n\xe3o."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "message":"Unauthorized transaction."\n}\n')),Object(r.b)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/pagamento-logado/guides/refund-payments"},"Solicitando um reembolso"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/pagamento-logado/guides/user-info"},"Consultando informa\xe7\xf5es dos usu\xe1rios"),";")),Object(r.b)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),Object(r.b)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",Object(r.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com."},"relacionamento-empresas@picpay.com.")," "))}p.isMDXComponent=!0}}]);