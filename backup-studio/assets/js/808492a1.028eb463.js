"use strict";(self.webpackChunkpicpay_frontend=self.webpackChunkpicpay_frontend||[]).push([[681],{3905:(e,a,o)=>{o.d(a,{Zo:()=>u,kt:()=>m});var t=o(67294);function r(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){r(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,r=function(e,a){if(null==e)return{};var o,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)o=n[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=t.createContext({}),p=function(e){var a=t.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):c(c({},a),e)),o},u=function(e){var a=p(e.components);return t.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},l=t.forwardRef((function(e,a){var o=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(o),m=r,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||n;return o?t.createElement(f,c(c({ref:a},u),{},{components:o})):t.createElement(f,c({ref:a},u))}));function m(e,a){var o=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=o.length,c=new Array(n);c[0]=l;var i={};for(var s in a)hasOwnProperty.call(a,s)&&(i[s]=a[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<n;p++)c[p]=o[p];return t.createElement.apply(null,c)}return t.createElement.apply(null,o)}l.displayName="MDXCreateElement"},95182:(e,a,o)=>{o.r(a),o.d(a,{frontMatter:()=>i,contentTitle:()=>s,metadata:()=>p,toc:()=>u,default:()=>l});var t=o(87462),r=o(63366),n=(o(67294),o(3905)),c=["components"],i={id:"cancel-order",title:"Solicitar cancelamentos"},s=void 0,p={unversionedId:"produtos/e-commerce/checkout/guides/cancel-order",id:"produtos/e-commerce/checkout/guides/cancel-order",isDocsHomePage:!1,title:"Solicitar cancelamentos",description:"Sobre este guia",source:"@site/docs/produtos/e-commerce/checkout/guides/cancel-order.mdx",sourceDirName:"produtos/e-commerce/checkout/guides",slug:"/produtos/e-commerce/checkout/guides/cancel-order",permalink:"/produtos/e-commerce/checkout/guides/cancel-order",version:"current",frontMatter:{id:"cancel-order",title:"Solicitar cancelamentos"},sidebar:"E-commerce",previous:{title:"Aceitando Pagamentos",permalink:"/produtos/e-commerce/checkout/guides/accepting-payments"},next:{title:"Gerenciar notifica\xe7\xf5es",permalink:"/produtos/e-commerce/checkout/guides/notifications"}},u=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Pr\xe9-requisitos",id:"pr\xe9-requisitos",children:[]},{value:"Como funciona?",id:"como-funciona",children:[{value:"Autentica\xe7\xe3o",id:"autentica\xe7\xe3o",children:[]},{value:"Funcionamento b\xe1sico",id:"funcionamento-b\xe1sico",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],d={toc:u};function l(e){var a=e.components,o=(0,r.Z)(e,c);return(0,n.kt)("wrapper",(0,t.Z)({},d,o,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"sobre-este-guia"},"Sobre este guia"),(0,n.kt)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea cancelar suas ordens pendentes ou pagas atrav\xe9s de nossa API de e-commerce."),(0,n.kt)("h2",{id:"pr\xe9-requisitos"},"Pr\xe9-requisitos"),(0,n.kt)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Voc\xea pode conferir como obter suas credenciais ",(0,n.kt)("a",{parentName:"p",href:"/produtos/e-commerce/checkout/intro/getting-started#antes-de-come%C3%A7ar"},"neste artigo"),"."),(0,n.kt)("h2",{id:"como-funciona"},"Como funciona?"),(0,n.kt)("h3",{id:"autentica\xe7\xe3o"},"Autentica\xe7\xe3o"),(0,n.kt)("p",null,"O PicPay disponibiliza duas chaves de integra\xe7\xe3o: O x-picpay-token e o x-seller-token. Para esta opera\xe7\xe3o, voc\xea dever\xe1 utilizar o x-picpay-token em suas requisi\xe7\xf5es."),(0,n.kt)("h3",{id:"funcionamento-b\xe1sico"},"Funcionamento b\xe1sico"),(0,n.kt)("p",null,"Voc\xea poder\xe1 cancelar qualquer ordem gerada por seu e-commerce atrav\xe9s de nosso end-point de cancelamento. Confira abaixo as regras:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cen\xe1rio 1")," Se j\xe1 foi pago, o cliente PicPay ser\xe1 estornado caso sua conta de Lojista no PicPay tenha saldo para realizar o estorno e caso o cliente PicPay tenha recebido algum cashback nesta transa\xe7\xe3o, este valor ser\xe1 estornado do cliente (para isto o mesmo deve possuir saldo). Todas esses requisitos devem ser cumpridos para que o estorno da transa\xe7\xe3o ocorra com sucesso. Neste caso, o authorizationId tamb\xe9m deve ser enviado no corpo da requisi\xe7\xe3o."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://appws.picpay.com/ecommerce/public/payments/{referenceId}/cancellations' \\\n    --header 'x-picpay-token: {sua_chave_de_integracao}' \\\n    --header 'Content-Type: application/json' \\\n    --data-raw '{ \"authorizationId\": \"601327196d038600273bbf1c\" }'\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Exemplo de cancelamento de ordem paga.")),(0,n.kt)("p",null,"No exemplo acima, esta ordem ir\xe1 passar do status paid para refunded"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cen\xe1rio 2")," Se ainda n\xe3o foi pago, a transa\xe7\xe3o ser\xe1 cancelada em nosso servidor e n\xe3o permitir\xe1 pagamento por parte do cliente PicPay. Neste caso, o referenceId \xe9 suficiente para a opera\xe7\xe3o."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://appws.picpay.com/ecommerce/public/payments/{referenceId}/cancellations' \\\n    --header 'x-picpay-token: {sua_chave_de_integracao}' \\\n    --header 'Content-Type: application/json' \\\n    --data-raw ''`\n")),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Exemplo de cancelamento de ordem pendente.")),(0,n.kt)("p",null,"No exemplo acima, esta ordem ir\xe1 passar do status created para expired."),(0,n.kt)("p",null,"Para transa\xe7\xf5es pagas com saldo, o valor ser\xe1 devolvido \xe0 carteira do usu\xe1rio quase que imediatamente ap\xf3s a opera\xe7\xe3o. O estorno de uma transa\xe7\xe3o feita com cart\xe3o de cr\xe9dito pode demorar alguns dias ser refletido na fatura do cliente."),(0,n.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/produtos/e-commerce/checkout/guides/order-status"},"Entenda os poss\xedveis status de um pagamento"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/produtos/e-commerce/checkout/guides/notifications"},"Entenda um pouco mais sobre as notifica\xe7\xf5es que o PicPay envia"),";")),(0,n.kt)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),(0,n.kt)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",(0,n.kt)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com"),"."))}l.isMDXComponent=!0}}]);