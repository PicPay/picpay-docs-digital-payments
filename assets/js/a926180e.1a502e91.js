"use strict";(self.webpackChunkpicpay=self.webpackChunkpicpay||[]).push([[2217],{3905:(e,a,t)=>{t.d(a,{Zo:()=>u,kt:()=>g});var o=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,n=function(e,a){if(null==e)return{};var t,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=o.createContext({}),l=function(e){var a=o.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},u=function(e){var a=l(e.components);return o.createElement(p.Provider,{value:a},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},d=o.forwardRef((function(e,a){var t=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(t),d=n,g=m["".concat(p,".").concat(d)]||m[d]||c[d]||r;return t?o.createElement(g,i(i({ref:a},u),{},{components:t})):o.createElement(g,i({ref:a},u))}));function g(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=t.length,i=new Array(r);i[0]=d;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s[m]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<r;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},43801:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var o=t(87462),n=(t(67294),t(3905));const r={id:"magento",title:"Magento"},i={unversionedId:"checkout/plugins/magento",id:"checkout/plugins/magento",isDocsHomePage:!1,title:"Magento",description:"Introdu\xe7\xe3o",source:"@site/docs/checkout/plugins/magento.md",sourceDirName:"checkout/plugins",slug:"/checkout/plugins/magento",permalink:"/picpay-docs-digital-payments/checkout/plugins/magento",version:"current",frontMatter:{id:"magento",title:"Magento"},sidebar:"docs",previous:{title:"VTEX",permalink:"/picpay-docs-digital-payments/checkout/plugins/vtex"},next:{title:"API Reference",permalink:"/picpay-docs-digital-payments/checkout/resources/api-reference"}},s=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",children:[]},{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",children:[]},{value:"Como utilizar",id:"como-utilizar",children:[{value:"Acessar a p\xe1gina oficial dos plugins do GitHub",id:"acessar-a-p\xe1gina-oficial-dos-plugins-do-github",children:[]},{value:"Instala\xe7\xe3o para Magento 1",id:"instala\xe7\xe3o-para-magento-1",children:[]},{value:"Instala\xe7\xe3o para Magento 2",id:"instala\xe7\xe3o-para-magento-2",children:[]},{value:"Instala\xe7\xe3o manual para Magento 2",id:"instala\xe7\xe3o-manual-para-magento-2",children:[]},{value:"Configura\xe7\xf5es",id:"configura\xe7\xf5es",children:[]}]},{value:"Credenciais e Configura\xe7\xf5es Gerais",id:"credenciais-e-configura\xe7\xf5es-gerais",children:[]},{value:"Configura\xe7\xf5es de Checkout e Layout",id:"configura\xe7\xf5es-de-checkout-e-layout",children:[{value:"Logs",id:"logs",children:[]},{value:"Callbacks",id:"callbacks",children:[]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]}]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],p={toc:s},l="wrapper";function u(e){let{components:a,...t}=e;return(0,n.kt)(l,(0,o.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),(0,n.kt)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea possa utilizar PicPay dentro do seu e-commerce com Magento 1 ou 2."),(0,n.kt)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),(0,n.kt)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Voc\xea pode conferir como obter suas credenciais ",(0,n.kt)("a",{parentName:"p",href:"/checkout/intro/getting-started#antes-de-come%C3%A7ar"},"neste artigo"),"."),(0,n.kt)("h2",{id:"como-utilizar"},"Como utilizar"),(0,n.kt)("h3",{id:"acessar-a-p\xe1gina-oficial-dos-plugins-do-github"},"Acessar a p\xe1gina oficial dos plugins do GitHub"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Link para Magento 1: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/PicPay/magento1"},"https://github.com/PicPay/magento1")),(0,n.kt)("li",{parentName:"ul"},"Link para Magento 2: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/PicPay/magento2"},"https://github.com/PicPay/magento2"))),(0,n.kt)("h3",{id:"instala\xe7\xe3o-para-magento-1"},"Instala\xe7\xe3o para Magento 1"),(0,n.kt)("p",null,"Para configurar o PicPay como forma de pagamento no Magento 1 disponibilizamos duas op\xe7\xf5es:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CDN"),(0,n.kt)("br",{parentName:"p"}),"\n","Efetue o download de nosso plugin atrav\xe9s de nosso CDN e copie os arquivos para seu ambiente: ",(0,n.kt)("a",{parentName:"p",href:"https://cdn.picpay.com/ecommerce/Picpay_Payment-1.0.2.tgz"},"https://cdn.picpay.com/ecommerce/Picpay_Payment-1.0.2.tgz")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Composer"),(0,n.kt)("br",{parentName:"p"}),"\n","Efetue a instala\xe7\xe3o utilizando Composer."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composer require picpay/magento1\n")),(0,n.kt)("h3",{id:"instala\xe7\xe3o-para-magento-2"},"Instala\xe7\xe3o para Magento 2"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Composer"),(0,n.kt)("br",{parentName:"p"}),"\n","Efetue a instala\xe7\xe3o utilizando Composer."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Passo 1"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"composer require picpay/magento2\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Passo 2"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"php bin/magento setup:upgrade\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Passo 3"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"php bin/magento setup:di:compile\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Passo 4"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"php bin/magento setup:static-content:deploy pt_BR en_US\n")),(0,n.kt)("h3",{id:"instala\xe7\xe3o-manual-para-magento-2"},"Instala\xe7\xe3o manual para Magento 2"),(0,n.kt)("p",null,"Essa primeira etapa fa\xe7a apenas se seu Magento n\xe3o tem o Laminas (vers\xf5es menores que o 2.3.5).",(0,n.kt)("br",null),"\nCaso seu magento n\xe3o tenha o Laminas, instale a depend\xeancia"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Passo 1"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"composer require laminas/laminas-http:>2.4.0\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Passo 2"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"composer require firebase/php-jwt:*\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Passo 3"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"composer require bacon/bacon-qr-code:*\n")),(0,n.kt)("p",null,"Realize o download do arquivo no ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/picpay/magento2"},"GitHub"))," e cole os arquivos na pasta\n",(0,n.kt)("strong",{parentName:"p"},"app/code/Picpay/Payment"),"."),(0,n.kt)("p",null,"Depois rode os comandos de instala\xe7\xe3o abaixo:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Passo 1"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"php bin/magento setup:upgrade\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Passo 2"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"php bin/magento setup:di:compile\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Passo 3"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"php bin/magento setup:static-content:deploy pt_BR en_US\n")),(0,n.kt)("h3",{id:"configura\xe7\xf5es"},"Configura\xe7\xf5es"),(0,n.kt)("p",null,"Para realizar a configura\xe7\xe3o do m\xf3dulo PicPay para Magento 2, acesse:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Painel Administrador")," > ",(0,n.kt)("strong",{parentName:"li"},"Vendas")," > ",(0,n.kt)("strong",{parentName:"li"},"Picpay")," > ",(0,n.kt)("strong",{parentName:"li"},"Configura\xe7\xf5es")," > localize a op\xe7\xe3o PicPay dentro do menu ",(0,n.kt)("strong",{parentName:"li"},"Outros meios de Pagamento"),";"),(0,n.kt)("li",{parentName:"ul"},"Em seguida, no menu ",(0,n.kt)("strong",{parentName:"li"},"PicPay"),", clique em ",(0,n.kt)("strong",{parentName:"li"},"Credenciais")," e ",(0,n.kt)("strong",{parentName:"li"},"Configura\xe7\xf5es Gerais"),";",(0,n.kt)("br",null))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Aten\xe7\xe3o: Esta configura\xe7\xe3o habilita a utiliza\xe7\xe3o do m\xf3dulo PicPay.")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Insira as credenciais usadas para os servi\xe7os do PicPay (",(0,n.kt)("em",{parentName:"li"},"API Token do PicPay")," e ",(0,n.kt)("em",{parentName:"li"},"Seller Token do PicPay"),"), caso voc\xea n\xe3o tenha a mesma \xe9 necess\xe1rio entrar em contato com o m\xe9todo de pagamento.")),(0,n.kt)("h2",{id:"credenciais-e-configura\xe7\xf5es-gerais"},"Credenciais e Configura\xe7\xf5es Gerais"),(0,n.kt)("p",null,"Abaixo os detalhes de cada configura\xe7\xe3o:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"T\xedtulo"),": Insira o t\xedtulo da configura\xe7\xe3o;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"API Token do PicPay"),": Insira o API Token do PicPay;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Seller Token do PicPay"),": Insira o Seller Token do PicPay;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Horas para Expirar"),": Horas para expirar a transa\xe7\xe3o (apenas n\xfameros);"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Status para novos pedidos"),": Status atribu\xeddo aos pedidos rec\xe9m-criados antes da confirma\xe7\xe3o do pagamento, via notifica\xe7\xf5es do servidor;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pagamento de pa\xedses aplic\xe1veis"),": Insira aqui os pa\xedses onde o pagamento \xe9 aplic\xe1vel;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Habilitar notifica\xe7\xe3o de status do pedido"),": Marque esta op\xe7\xe3o se deseja habilitar a notifica\xe7\xe3o do status do pedido;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Habilitar log de debug"),": Ao ativar esta fun\xe7\xe3o, os logs ser\xe3o registrados no servidor para fins de depura\xe7\xe3o.")),(0,n.kt)("h2",{id:"configura\xe7\xf5es-de-checkout-e-layout"},"Configura\xe7\xf5es de Checkout e Layout"),(0,n.kt)("p",null,"Neste campo voc\xea ir\xe1 configurar o comportamento do checkout:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Modalidade de Checkout"),": Determine a p\xe1gina onde o processo de pagamento ocorrer\xe1."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},'Largura do QRCode no "Modo na mesma P\xe1gina (transparente)"'),": Especifique o tamanho do QRCode em pixels para o modo de checkout transparente. Utilize apenas n\xfameros."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Largura do QRCode na p\xe1gina de informa\xe7\xf5es de pagamento"),": Defina o tamanho do QRCode em pixels para a p\xe1gina de informa\xe7\xf5es de pagamento. Utilize apenas n\xfameros."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Usar Texto Personalizado no Formul\xe1rio"),": Ative esta op\xe7\xe3o se deseja exibir uma mensagem personalizada na p\xe1gina de Checkout."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Mostrar QRCode na P\xe1gina de Sucesso"),": Determine se deseja exibir o QRCode na p\xe1gina de sucesso."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Mensagem para mostrar junto ao QRCode na p\xe1gina de sucesso"),": Insira a mensagem que ser\xe1 exibida ao lado do QRCode na p\xe1gina de sucesso.")),(0,n.kt)("h3",{id:"logs"},"Logs"),(0,n.kt)("p",null,"Nesta funcionalidade apresentamos os Callbacks no menu de op\xe7\xf5es do Magento.\nCaso tenha algum retorno de erro, por exemplo estorno/reembolso ou captura, o registro do erro encontra-se no arquivo de logs do pr\xf3prio Magento."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Caminho"),": ",(0,n.kt)("inlineCode",{parentName:"li"},"pasta_raiz_do_magento/var/logs"))),(0,n.kt)("h3",{id:"callbacks"},"Callbacks"),(0,n.kt)("p",null,"Atrav\xe9s do menu abaixo, \xe9 poss\xedvel visualizar o payload de callback retornado para PicPay."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Caminho"),": Vendas > PicPay > Callbacks")),(0,n.kt)("h3",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/checkout/guides/order-status"},"Entenda os poss\xedveis status de um pagamento"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/checkout/guides/cancel-order"},"Entenda como solicitar um cancelamento total"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/checkout/guides/notifications"},"Entenda um pouco mais sobre as notifica\xe7\xf5es que o PicPay envia"),";")),(0,n.kt)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),(0,n.kt)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",(0,n.kt)("a",{parentName:"p",href:"mailto:relacionamento-negocios@picpay.com"},"relacionamento-negocios@picpay.com")),(0,n.kt)("p",null,"Adicionalmente, voc\xea tamb\xe9m pode abrir um issue em nossos reposit\xf3rios de ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/PicPay/magento1/issues"},"Magento 1")," ou ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/PicPay/magento2/issues"},"Magento 2"),"."))}u.isMDXComponent=!0}}]);