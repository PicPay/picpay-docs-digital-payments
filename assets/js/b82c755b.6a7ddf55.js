"use strict";(self.webpackChunkpicpay=self.webpackChunkpicpay||[]).push([[488],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>g});var o=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),p=function(e){var a=o.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},d=function(e){var a=p(e.components);return o.createElement(c.Provider,{value:a},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),l=p(t),u=n,g=l["".concat(c,".").concat(u)]||l[u]||m[u]||r;return t?o.createElement(g,s(s({ref:a},d),{},{components:t})):o.createElement(g,s({ref:a},d))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,s=new Array(r);s[0]=u;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i[l]="string"==typeof e?e:n,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},72062:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>i});var o=t(87462),n=(t(67294),t(3905));const r={id:"vtex",title:"VTEX"},s={unversionedId:"checkout/plugins/vtex",id:"checkout/plugins/vtex",isDocsHomePage:!1,title:"VTEX",description:"Introdu\xe7\xe3o",source:"@site/docs/checkout/plugins/vtex.md",sourceDirName:"checkout/plugins",slug:"/checkout/plugins/vtex",permalink:"/picpay-docs-digital-payments/checkout/plugins/vtex",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/checkout/plugins/vtex.md",version:"current",frontMatter:{id:"vtex",title:"VTEX"},sidebar:"docs",previous:{title:"Obter status do pagamento",permalink:"/picpay-docs-digital-payments/checkout/guides/order-status"},next:{title:"Magento",permalink:"/picpay-docs-digital-payments/checkout/plugins/magento"}},i=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",children:[]},{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",children:[]},{value:"Como utilizar",id:"como-utilizar",children:[{value:"Obtendo suas chaves de integra\xe7\xe3o",id:"obtendo-suas-chaves-de-integra\xe7\xe3o",children:[]},{value:"Habilitando o PicPay como forma de pagamento",id:"habilitando-o-picpay-como-forma-de-pagamento",children:[]},{value:"Configurando suas chaves dentro da VTEX",id:"configurando-suas-chaves-dentro-da-vtex",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],c={toc:i},p="wrapper";function d(e){let{components:a,...r}=e;return(0,n.kt)(p,(0,o.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),(0,n.kt)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea possa utilizar PicPay dentro do seu e-commerce com VTEX."),(0,n.kt)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),(0,n.kt)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Voc\xea pode conferir como obter suas credenciais ",(0,n.kt)("a",{parentName:"p",href:"/checkout/intro/getting-started#antes-de-come%C3%A7ar"},"neste artigo"),"."),(0,n.kt)("h2",{id:"como-utilizar"},"Como utilizar"),(0,n.kt)("h3",{id:"obtendo-suas-chaves-de-integra\xe7\xe3o"},"Obtendo suas chaves de integra\xe7\xe3o"),(0,n.kt)("p",null,"Suas chaves de integra\xe7\xe3o estar\xe3o dispon\xedveis dentro do ",(0,n.kt)("a",{parentName:"p",href:"https://lojista.picpay.com/ecommerce-token"},"painel lojista"),", no menu integra\xe7\xf5es."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Chaves de integra\xe7\xe3o VTEX",src:t(26480).Z})),(0,n.kt)("p",null,"Estas chaves dever\xe3o ser copiadas e inseridas dentro do seu painel de configura\xe7\xe3o da VTEX."),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Aten\xe7\xe3o")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Toda vez que novos tokens s\xe3o gerados atrav\xe9s do bot\xe3o ",(0,n.kt)("strong",{parentName:"p"},"Gerar Tokens"),", os tokens antigos ser\xe3o invalidados."))),(0,n.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"Problemas na obten\xe7\xe3o de chaves.")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Por conta de uma instabilidade em nosso novo painel lojista (",(0,n.kt)("a",{parentName:"p",href:"https://painel-empresas.picpay.com/"},"https://painel-empresas.picpay.com/"),") recomendamos que as chaves de integra\xe7\xe3o da VTEX sejam obtidas atrav\xe9s do painel lojista antigo (",(0,n.kt)("a",{parentName:"p",href:"https://lojista.picpay.com/ecommerce-token"},"https://lojista.picpay.com/ecommerce-token"),")."))),(0,n.kt)("h3",{id:"habilitando-o-picpay-como-forma-de-pagamento"},"Habilitando o PicPay como forma de pagamento"),(0,n.kt)("p",null,"Dentro de seu painel da VTEX, voc\xea dever\xe1 configurar o PicPay como um novo gateway de pagamentos."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Passo 1")," - Dentro da sess\xe3o de pagamentos, clique em ",(0,n.kt)("strong",{parentName:"p"},"Congigura\xe7\xf5es")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Menu VTEX",src:t(37740).Z})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Passo 2")," -Na aba Afilia\xe7\xf5es de Gateways, clique no bot\xe3o +."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Novo gateway",src:t(84919).Z})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Passo 3")," -Selecionar o conector PicPay."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Conectores",src:t(30343).Z})),(0,n.kt)("h3",{id:"configurando-suas-chaves-dentro-da-vtex"},"Configurando suas chaves dentro da VTEX"),(0,n.kt)("p",null,"Preencha os campos Application Key e Application Token com as informa\xe7\xf5es da sua conta PicPay e salve as configura\xe7\xf5es."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Conectores",src:t(48990).Z})),(0,n.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/checkout/guides/order-status"},"Entenda os poss\xedveis status de um pagamento"),";")),(0,n.kt)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),(0,n.kt)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",(0,n.kt)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com"),"."))}d.isMDXComponent=!0},30343:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/vtex-conectores-affc0f9a6eaa2d69c35f65a6b2fe4b30.png"},48990:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/vtex-config-44ea04af358519c4d71eac7cacc4dcf6.png"},26480:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/vtex-keys-11bd7278550eacf6a6e13b14f97d98cd.png"},37740:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/vtex-menu-99121e21bb0a8da93e751efe74657841.png"},84919:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/vtex-novo-gateway-4127b8985a5c6c19d12cf13223edeb32.png"}}]);