"use strict";(self.webpackChunkpicpay_frontend=self.webpackChunkpicpay_frontend||[]).push([[311],{3905:(e,o,a)=>{a.d(o,{Zo:()=>l,kt:()=>u});var t=a(67294);function i(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){i(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,t,i=function(e,o){if(null==e)return{};var a,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||(i[a]=e[a]);return i}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var d=t.createContext({}),c=function(e){var o=t.useContext(d),a=o;return e&&(a="function"==typeof e?e(o):r(r({},o),e)),a},l=function(e){var o=c(e.components);return t.createElement(d.Provider,{value:o},e.children)},p={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var a=e.components,i=e.mdxType,n=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(a),u=i,g=m["".concat(d,".").concat(u)]||m[u]||p[u]||n;return a?t.createElement(g,r(r({ref:o},l),{},{components:a})):t.createElement(g,r({ref:o},l))}));function u(e,o){var a=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=m;var s={};for(var d in o)hasOwnProperty.call(o,d)&&(s[d]=o[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<n;c++)r[c]=a[c];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},69345:(e,o,a)=>{a.r(o),a.d(o,{frontMatter:()=>s,contentTitle:()=>d,metadata:()=>c,toc:()=>l,default:()=>m});var t=a(87462),i=a(63366),n=(a(67294),a(3905)),r=["components"],s={id:"oauth2-flow",title:"Autentica\xe7\xe3o e autoriza\xe7\xe3o",sidebar_label:"Autentica\xe7\xe3o e autoriza\xe7\xe3o",hide_title:!1,description:"Aprenda como obter tokens de acesso para sua aplica\xe7\xe3o atrav\xe9s de nossos servi\xe7os oauth2.",keywords:["Pagamento logado","Autentica\xe7\xe3o","Autoriza\xe7\xe3o","Login","Token"]},d=void 0,c={unversionedId:"produtos/e-commerce/pagamento-logado/guides/oauth2-flow",id:"produtos/e-commerce/pagamento-logado/guides/oauth2-flow",isDocsHomePage:!1,title:"Autentica\xe7\xe3o e autoriza\xe7\xe3o",description:"Aprenda como obter tokens de acesso para sua aplica\xe7\xe3o atrav\xe9s de nossos servi\xe7os oauth2.",source:"@site/docs/produtos/e-commerce/pagamento-logado/guides/oauth2-flow.mdx",sourceDirName:"produtos/e-commerce/pagamento-logado/guides",slug:"/produtos/e-commerce/pagamento-logado/guides/oauth2-flow",permalink:"/produtos/e-commerce/pagamento-logado/guides/oauth2-flow",version:"current",frontMatter:{id:"oauth2-flow",title:"Autentica\xe7\xe3o e autoriza\xe7\xe3o",sidebar_label:"Autentica\xe7\xe3o e autoriza\xe7\xe3o",hide_title:!1,description:"Aprenda como obter tokens de acesso para sua aplica\xe7\xe3o atrav\xe9s de nossos servi\xe7os oauth2.",keywords:["Pagamento logado","Autentica\xe7\xe3o","Autoriza\xe7\xe3o","Login","Token"]},sidebar:"E-commerce",previous:{title:"Como come\xe7ar",permalink:"/produtos/e-commerce/pagamento-logado/intro/getting-started"},next:{title:"Processando pagamentos",permalink:"/produtos/e-commerce/pagamento-logado/guides/process-payments"}},l=[{value:"Sobre este guia",id:"sobre-este-guia",children:[]},{value:"Antes de come\xe7ar",id:"antes-de-come\xe7ar",children:[{value:"Registro do aplicativo",id:"registro-do-aplicativo",children:[]},{value:"Obten\xe7\xe3o do <code>client_id</code> e <code>client_secret</code>",id:"obten\xe7\xe3o-do-client_id-e-client_secret",children:[]}]},{value:"Como funciona?",id:"como-funciona",children:[{value:"Redirecionando usu\xe1rio para tela de login e senha",id:"redirecionando-usu\xe1rio-para-tela-de-login-e-senha",children:[]},{value:"Solicitando a autoriza\xe7\xe3o do usu\xe1rio",id:"solicitando-a-autoriza\xe7\xe3o-do-usu\xe1rio",children:[]},{value:"Obtendo o c\xf3digo de autoriza\xe7\xe3o",id:"obtendo-o-c\xf3digo-de-autoriza\xe7\xe3o",children:[]},{value:"Solicita\xe7\xe3o dos tokens",id:"solicita\xe7\xe3o-dos-tokens",children:[]},{value:"Atualiza\xe7\xe3o dos tokens",id:"atualiza\xe7\xe3o-dos-tokens",children:[]}]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],p={toc:l};function m(e){var o=e.components,s=(0,i.Z)(e,r);return(0,n.kt)("wrapper",(0,t.Z)({},p,s,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"sobre-este-guia"},"Sobre este guia"),(0,n.kt)("p",null,"Neste guia vamos descrever o passo-a-passo para que voc\xea obtenha um token de acesso para processar pagamentos online com o PicPay atrav\xe9s de nossa solu\xe7\xe3o de pagamentos logada."),(0,n.kt)("h2",{id:"antes-de-come\xe7ar"},"Antes de come\xe7ar"),(0,n.kt)("h3",{id:"registro-do-aplicativo"},"Registro do aplicativo"),(0,n.kt)("p",null,"Antes de iniciar sua integra\xe7\xe3o, voc\xea deve possuir credenciais v\xe1lidas. Atualmente, para este produto, o processo de cria\xe7\xe3o de credenciais \xe9 realizado diretamente pelo time do PicPay."),(0,n.kt)("p",null,"Para esta solu\xe7\xe3o de pagamentos, o e-commerce j\xe1 deve ser um parceiro do PicPay. Os dados necess\xe1rios para realizar o registro do aplicativo s\xe3o:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"E-mail de cadastro;"),(0,n.kt)("li",{parentName:"ul"},"URI de redirecionamento ou URL de callback;")),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"A solu\xe7\xe3o de ",(0,n.kt)("strong",{parentName:"p"},"Pagamento Logado")," n\xe3o est\xe1 dispon\xedvel para todos os nossos lojistas. Se interessou? Basta entrar em contato atrav\xe9s do e-mail ",(0,n.kt)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com")," demonstrando interesse."))),(0,n.kt)("h3",{id:"obten\xe7\xe3o-do-client_id-e-client_secret"},"Obten\xe7\xe3o do ",(0,n.kt)("inlineCode",{parentName:"h3"},"client_id")," e ",(0,n.kt)("inlineCode",{parentName:"h3"},"client_secret")),(0,n.kt)("p",null,"Ap\xf3s o registro do aplicativo, o PicPay compartilhar\xe1 com o e-commerce as credenciais de acesso, na forma de um ",(0,n.kt)("inlineCode",{parentName:"p"},"client_id")," e um ",(0,n.kt)("inlineCode",{parentName:"p"},"client_secret"),"."),(0,n.kt)("h4",{id:"um-pouco-mais-sobre-o-client_id"},"Um pouco mais sobre o ",(0,n.kt)("inlineCode",{parentName:"h4"},"client_id")),(0,n.kt)("p",null,"O client ID \xe9 uma sequ\xeancia exposta publicamente usada pela API de servi\xe7o para identificar o aplicativo e tamb\xe9m para criar URLs de autoriza\xe7\xe3o que s\xe3o apresentadas aos usu\xe1rios."),(0,n.kt)("h4",{id:"um-pouco-mais-sobre-o-client_secret"},"Um pouco mais sobre o ",(0,n.kt)("inlineCode",{parentName:"h4"},"client_secret")),(0,n.kt)("p",null,"O client secret \xe9 usado para autenticar a identidade do aplicativo na API de servi\xe7o quando o aplicativo solicita o acesso \xe0 conta de um usu\xe1rio e deve ser mantido privado entre o aplicativo e a API."),(0,n.kt)("h2",{id:"como-funciona"},"Como funciona?"),(0,n.kt)("p",null,"O fluxo b\xe1sico de autentica\xe7\xe3o e autoriza\xe7\xe3o consiste na gera\xe7\xe3o de um c\xf3digo ap\xf3s o usu\xe1rio digitar seu login/senha em uma interface do PicPay."),(0,n.kt)("p",null,"Com o c\xf3digo gerado, o e-commerce deve gerar um token que ser\xe1 utilizado em toda comunica\xe7\xe3o ",(0,n.kt)("inlineCode",{parentName:"p"},"server to server")," com o PicPay. Este token possibilitar\xe1 que o usu\xe1rio efetue as seguintes opera\xe7\xf5es (dependendo do escopo configurado):"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Processar pagamentos;"),(0,n.kt)("li",{parentName:"ul"},"Reembolsar pagamentos;"),(0,n.kt)("li",{parentName:"ul"},"Obter informa\xe7\xf5es do usu\xe1rio;")),(0,n.kt)("h3",{id:"redirecionando-usu\xe1rio-para-tela-de-login-e-senha"},"Redirecionando usu\xe1rio para tela de login e senha"),(0,n.kt)("p",null,"Inicialmente, seu e-commerce dever\xe1 redirecionar seus clientes para a p\xe1gina de login e senha do PicPay. Para isso, seu e-commerce dever\xe1 gerar a URL, que dever\xe1 conter seu ",(0,n.kt)("inlineCode",{parentName:"p"},"client_id")," e url de redirecionamento. Exemplo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api.picpay.com/oauth2/auth?client_id=xxxxxxxxxxxx&response_type=code&redirect_uri=http://yourwebsite.com/api/payments'\n\nhttps://api.picpay.com/oauth2/auth?client_id=CLIENT_ID&response_type=code&redirect_uri=CALLBACK_URL&scope=scopes\n\n")),(0,n.kt)("p",null,"Breve explica\xe7\xe3o sobre os parametros da URL acima:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"client_id"),": Identificador da aplica\xe7\xe3o fornecido pelo PicPay;"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"redirect_uri"),": URL para onde o servi\xe7o redireciona o agente do usu\xe1rio ap\xf3s a concess\xe3o de um c\xf3digo de autoriza\xe7\xe3o"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"response_type")," Deve ser igual a ",(0,n.kt)("inlineCode",{parentName:"li"},"code"),", especificando que seu aplicativo est\xe1 solicitando uma concess\xe3o de c\xf3digo de autoriza\xe7\xe3o")),(0,n.kt)("h3",{id:"solicitando-a-autoriza\xe7\xe3o-do-usu\xe1rio"},"Solicitando a autoriza\xe7\xe3o do usu\xe1rio"),(0,n.kt)("p",null,"Ao utilizar a URL do ",(0,n.kt)("a",{parentName:"p",href:"#redirecionando-usu%C3%A1rio-para-tela-de-login-e-senha"},"passo anterior"),", o cliente ser\xe1 redirecionado para uma p\xe1gina de login e senha. Seu cliente dever\xe1 ent\xe3o efetuar o login atrav\xe9s de seu usu\xe1rio e senha do PicPay."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(87420).Z})),(0,n.kt)("p",null,"Ap\xf3s o login, o cliente dever\xe1 revisar as permiss\xf5es solicitadas pelo aplicativo."),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Informa\xe7\xe3o")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"As permiss\xf5es solicitadas ir\xe3o depender das configura\xe7\xf5es de escopo setadas no momento da cria\xe7\xe3o das credenciais."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(41653).Z})),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Aten\xe7\xe3o")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"O cliente poder\xe1 conceder ou n\xe3o as permiss\xf5es. Sua aplica\xe7\xe3o dever\xe1 estar preparada para receber os dois tipos de resposta."),(0,n.kt)("p",{parentName:"div"},"Ap\xf3s o concentimento inicial, o PicPay n\xe3o solicitar\xe1 novamente as permiss\xf5es ao cliente."))),(0,n.kt)("h3",{id:"obtendo-o-c\xf3digo-de-autoriza\xe7\xe3o"},"Obtendo o c\xf3digo de autoriza\xe7\xe3o"),(0,n.kt)("p",null,"Caso o cliente autorize o aplicativo no ",(0,n.kt)("a",{parentName:"p",href:"#solicitando-a-autoriza%C3%A7%C3%A3o-do-usu%C3%A1rio"},"passo anterior"),", o usu\xe1rio ser\xe1 redirecionado para a URL de retorno indicada."),(0,n.kt)("p",null,"O c\xf3digo de autoriza\xe7\xe3o ser\xe1 enviado como um parametro junto a URI indicada e dever\xe1 ser utilizado para a gera\xe7\xe3o dos tokens no passo seguinte."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"img",src:a(34264).Z})),(0,n.kt)("h3",{id:"solicita\xe7\xe3o-dos-tokens"},"Solicita\xe7\xe3o dos tokens"),(0,n.kt)("p",null,"Para realizar as solicita\xe7\xf5es de pagamento, reembolso ou consulta de informa\xe7\xf5es, o e-commerce dever\xe1 informar um token v\xe1lido como um dos par\xe2metros do header de cada requisi\xe7\xe3o."),(0,n.kt)("p",null,"Para tanto, o e-commerce dever\xe1 solicitar um access token com o c\xf3digo de autoriza\xe7\xe3o obtido no ",(0,n.kt)("em",{parentName:"p"},"passo 3")," e o ",(0,n.kt)("inlineCode",{parentName:"p"},"client_id")," e o ",(0,n.kt)("inlineCode",{parentName:"p"},"client_secret"),"."),(0,n.kt)("p",null,"Exemplo de requisi\xe7\xe3o de token:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\nhttps://api.picpay.com/oauth2/token \\\n-H "Content-Type=\'application/x-www-form-urlencoded\'" \\\n-d "grant_type=authorization_code" \\\n-d "client_id=CLIENT_ID" \\\n-d "code=AUTHORIZATION_CODE"\n-d "redirect_uri=REDIRECT_URI"\n')),(0,n.kt)("p",null,"Caso esteja tudo certo, enviaremos o token como no exemplo abaixo:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "access_token": "ACCESS_TOKEN",\n    "expires_in": 300, // tempo em segundos\n    "refresh_expires_in": 1800,\n    "refresh_token": "REFRESH_TOKEN",\n    "token_type": "bearer",\n    "id_token": "ID_TOKEN",\n    "not-before-policy": 1585954424,\n    "session_state": "fa158d89-9228-45c6-8486-e159f28b5bd5",\n    "scope": "openid email profile"\n}\n')),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Tempo de expira\xe7\xe3o de um token")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"O tempo de expira\xe7\xe3o do token ser\xe1 exibido em segundos. Ap\xf3s a expira\xe7\xe3o o token dever\xe1 ser atualizado atrav\xe9s do ",(0,n.kt)("inlineCode",{parentName:"p"},"refresh_token"),"."),(0,n.kt)("p",{parentName:"div"},"A dura\xe7\xe3o dos tokens poder\xe1 ser configurada na cria\xe7\xe3o e configura\xe7\xe3o das credenciais pelo PicPay."))),(0,n.kt)("h3",{id:"atualiza\xe7\xe3o-dos-tokens"},"Atualiza\xe7\xe3o dos tokens"),(0,n.kt)("p",null,"Ap\xf3s um per\xedodo pre-determinado, o ",(0,n.kt)("inlineCode",{parentName:"p"},"access_token")," concedido \xe0 aplica\xe7\xe3o ir\xe1 expirar, sendo necess\xe1ria a solicita\xe7\xe3o de um novo ",(0,n.kt)("inlineCode",{parentName:"p"},"access_token"),". Para isso, utiliza-se um ",(0,n.kt)("inlineCode",{parentName:"p"},"refresh_token"),", gerado na mesma solicita\xe7\xe3o do ",(0,n.kt)("inlineCode",{parentName:"p"},"access_token")," (ver Autentica\xe7\xe3o e Autoriza\xe7\xe3o). Abaixo um exemplo de requisi\xe7\xe3o:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\nhttps://api.picpay.com/oauth2/token \\\n-H "Content-Type=\'application/x-www-form-urlencoded\'" \\\n-d "grant_type=refresh_token" \\\n-d "client_id=CLIENT_ID" \\\n-d "client_secret=CLIENT_SECRET" \\\n-d "refresh_token=REFRESH_TOKEN"\n')),(0,n.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Fluxo de atualiza\xe7\xe3o de tokens")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"O fluxo de atualiza\xe7\xe3o de tokens precisa ser obrigatoriamente previsto em sua aplica\xe7\xe3o dado que o ",(0,n.kt)("inlineCode",{parentName:"p"},"refresh_token")," ir\xe1 expirar em algum momento. Caso o token n\xe3o seja atualizado o usu\xe1rio dever\xe1 fazer login e senha novamente."))),(0,n.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("p",null,"Com um ",(0,n.kt)("inlineCode",{parentName:"p"},"access_token")," v\xe1lido, seu aplicativo poder\xe1 efetuar cobran\xe7as, reembolsos ou consultar algumas informa\xe7\xf5es b\xe1sicas dos usu\xe1rios. Confira abaixo os pr\xf3ximos passos:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/produtos/e-commerce/pagamento-logado/guides/process-payments"},"Efetuando uma cobran\xe7a"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/produtos/e-commerce/pagamento-logado/guides/refund-payments"},"Solicitando um reembolso"),";"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/produtos/e-commerce/pagamento-logado/guides/user-info"},"Consultando informa\xe7\xf5es dos usu\xe1rios"),";")),(0,n.kt)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),(0,n.kt)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",(0,n.kt)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com"),"."))}m.isMDXComponent=!0},41653:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/authorization-215c1bae78f431516d91f18b854ee873.png"},34264:(e,o,a)=>{a.d(o,{Z:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDAAAAEkCAMAAADuNTEOAAACo1BMVEUAAAD////c3NzQ0tTS0tXR09PU1dbQ09TR0tPQ0tPR0tTQ09PQ09PQ0tTR09PT09Oqqqr////a2trR09Tg4ODT1dbu7u9UVFTx8fL+/v4iIiLx8vJhYWHq///qq2JUmtNiq+r//856VFTO///OhyKGy///6rf/56lUVHoih85aWlr/y4ZUVJxzc3OcVFSp5///0ZzptnrTmlS36v/v8PC3elTT//9Uerf//9OGIoYiYan//+l6YWFhYXr/5rP//+qFhYXMlmF6tulhlsyz5v+c0f//zZRherN6subt7u66urrmsnqUzf+pqaliYanm///Ly8siIoaXl5dycnKGIiKpYSKUYWHd3d2zemGpYWL//8xiIiJhYZRaWnf//+bM//9adqS5j1oiImLK29ukytpaj7mQWlp3WlrayqSGImLj5OSQt9ra2rlaWpC52trJo3f39/ekdlra2snbt5BiIoYAvgDq/+rq6+ve3+Do/893o8lUenpiImLm5+i+7b+pq4b09PV5eVbW19jo6bR6enqpq2L7/Py36unP/8+K4IrOh2JXz1d6emEixh0ZyQ+30f/Y2dq3vNNiq6nSz5WMjIxhfHw3yTjm/+bCxMPT6rexwqAKvQyzzf/N/+i317fMsrOvr6+GYamDg4PTsnRa3DOphyKGy+rT/+mz5ua36tOfy8pdl7v/0bfTtrfDmZrluJi3tZW71+b09eWcteDf4Np6ttXi5NJ7sdLW1dBiq86Hp8iLjMPJ2sGkyrmko7nptrf/zbOsrKyGq6menp6ugpRiYYZ81H533nm5rXh4eHjosG1o0GmcelRDzEQ/0ymGYSKGq+qc0emyob56treGh6kih6nmzZSkrJCpYYacmnqUlnpadneGh2KGYWKUlmG2hVpiYSIfhJ+KAAAAEXRSTlMAQED6T9/SureroZ+IfXYpA6W/Eb8AAB7QSURBVHja7NoxasNAEEBR5wjTz1HkBSFjKUjgQmCLEJzeldvU8REc0qQwvkIukKNlVlqUIhBP5Wb/axZGqj/DsgsBgNseFoZgACAYAAgGABeCAcCNYABwu0cwQqGqjdwQikoA5OVvMNoYi/Al/yIYQI6mYByvfXQ9ekNAMIAcpQ1j10c7G7TayaRUfX4JxXthh+wH1Xqz1pNWrapWBAPIUAqGXKwXFzEWjCkOZaxFFYp602qzH2ItmrXNxZTLFcEA8jPfYZz7s5hpw3ja1q9bNfWbdWGt1g01lTVj/EW1IxhAfuZgHPqDmFiHFIxxmQgpGHYYC4Z9W65aggHkKAXDPMqk1C4G42OwM3ymYMRKyPcqBiNOSoIB5GgOxq9WTTNec2qXgmEJUV2OwZBS9UQwgBzx0hMAwQAgBAOAG8EA4EYwALgRDABuBAOAG8EA4EYwALgRDABuBAOAG8EA4EYwALgRDOCHffN5cRqI4rjg79+O4xKNmh1tYlsi1l1/r6AgiIggVFxEelJP1ktBsSu6qAsqePHXRTwIIgpeFD348yZ68SIInv1XfO/lmw7b2tpo1LXpB5tkZl7ezLxmvpmZrn26JjuCcWlzl9TU1AWd+D2uqj59pgrtBWP7BsdxCptU1ww7e5UaosOwQ+whB9tWq19jRVV3z0BVWbwR1Pnv2D1q5Hx1mU6Hibr6U6w5HKTgpbay56n1AyLU2gqGjPd1azuPeRgONglGYdPOLYVNzYKRPxgl/UAe1R051QIKa691Ipau6CwYqK4NnlG/AbrTKhi1CZ0az1V3oJ+2JW7wm4LhB20Sto53AzoD3H27mgLguj8KwdHS5LddLwdk+rwlHQRj55b1W9XP2Oi0CgafkwqGtRnTCakqAP6iYKBXrRzRKbI/gWCkMINIIBif7uqMcGtF/kwuLP5MMGo3dW8zc3GnGcYgC4FDsjHkEIOsIKIiGym1lzML9xwubxIMtmEHkBMMrUduORe6RDnn86movPcVOirllXP2kVyuE1OLx4fLM4zrF13XSMoNGgPpinu8pFTosoV3Wwy9KGEoN+CRFhbphcl58JDfN0pNVYCLDI75j5/LV9wALc5XOG/Ng0dcRSh1q806TW4iUD7Hbs3JEl2ZuA2hbTGVE9wLPjIhnTy+SfICDgA3EgYeZ/HJeoiAAb6sKChIcG9tUPJfdFYYOEHPiGfieOGofAmoDcqY7nVmtxOMaAtjeP1W0g2WjiErGBudvXS6I2LQOsOQLQzVIhgVo3wzeYbh8dMYyNlmjuvE7J/0wvdHVufPiGMGUkLqVORiOkl1fhCORAmTv1BSEAzGM+yBhmW+ErAB8A2O5DhfeTxaJDu5DW+ZNYeNIpd8PzqRIp8kUJAAz3C9aEPUJfSZ8yMbQCWUBS2mLsnbEAbIlUZbDwwMUI6gIEHu+A6RpmD3N50hah4rqsQrjhr/o5giKKSpq3TvM6PdDOPcBt6JcIhtD0kISDRiwZB9zcL9tTS3+OGSZLh10zMarM2CYeQDcPlSJ2Zc3qINwQjYvVyCWA88TGwMamN7T6YeMJB3tGEP9KFCNrAeMP3kUXr2aAmNl6kM+WAD+iBvmU6VA1KXtF9kLzQKbYi6hD7zR7Q52soJo9kEHaSNnPLdAAYQhEYc4IGBAcoRFCRCl6BCwXulM8TpkUdFCRSenugr4GfCBmVc9z4L2i5JSAsw7IeaBCP6+WTnFlqYiGDARHHBMMvM+q3dCoZvmhbgz3RiNivQWTCgFE2Ccftw0DAISXY8FgyeR7CHcKSDYCDTb7xl6BUN73WdKhIongqJql0vPc3FgoEuWcGwAx6IZFgtsJLRQTBgIOUISpwowgvxePSQzhBPaRbJ2twqGAgK6UYWAjK3w6Zn4doWloobrApD9IEY8OXOW6ISe3i1wtBZbmIbzm9ekkAwIBCyEOe0XHhlO5Pe/UEn5uoPBEM2/LAagR7wgLaCwVrgs4iQJTeDDDmPlxZ+wKbszDfwgB8/KE3mGKzkEnlhNCS9Yuz9hU6TI1GgZKFFVYS336lYMCjPCgYbWX3Db0ZSirCj9zCQAsQh9gBgwHchKEigBlDXGeJYoEiyJao2akZ5x0sUlAwFZGFbwaBxv+0szSKijYnzawdJFZzCZeyBDm7kg6IiyiCozKF7WDDouvCEFzPr77QIBvaHPFkbuNh245zG+rqqE/JcMeLaTs8lFUwWDFQYv5Wx6UmWhkqOX5TtwvIVY3eyyJt4wMLD4IjBihaT3Vfew8BemFQRntIpcgmB8qWRLFkNwUCX0GcbVqMgGNwLOkfNoyNHHwY+liliAA8CDPBlISj45kIpApd0hthVofDbePGRY/LmaMkGZaXufbCH0RlMIdIFIxeERWwfJt0AqKq08YNY4jqAFgM72tCL9HYxBuo2UNDef/7naTFVnRnG+wER5k+bIoLBgP1jr6fr7ri5DBsYf1gwkv+pR31sQqfA0moNgQL5iizg0gfTKKKouiEjPyOCaj8gwpxpSQSjT58m6kd6+S8bwcTY/n5AiIFZi6bofz7r8x+xoufpB+Q7O3dsgzAQg2F0ButACnswVSpKGoZgFcSAKdJFOulc5RS/N8QnN/53836rAvMRDEAwgBAMYJhgAMMEAxgmGMAJhoLxWqhm5lFlTtcNxtW3Cem5r4+AbDB+ZcYaOfi6MkgH49+o6h2QC8azUdcSkAhGjW1Cej4BqWDcGnWtARt7d9OqRBQGcPwzPBQMDGhWWopR3itm5UIQ/ABBLqJN2/bZC4X0SkVUVCBUFERtgqI2Ba3aVdDLZ+p5njk5UjmdNqH4/9G9d5yZe3f+OWcmz/xDMNZjbUIsclqAfwjGeqxNiEUuCBAdDPduC9YVMxL8azC4irG+tgrwz8HwRWyxbi6d4QIG+PAZAIIBYDGCASAawQAQjWAAiEYwAEQjGACiEQwA0QgGgGgEA0A0ggEg2n8MxoG9SZLU2xJtI0mGIr1Osme/5Hbt2Ca/aCUDAbCCioLRLe3a0S1JIT/RkuDB2GaB0GDkR/4ejN3H0rQh5TRND5Wqqf8QAEupOBi9jr/5i7WSEIz6RT3bv88dKQ6G9aImqlwRV24IgGVVHAx/t28miYUgUdusIPYlLX01tJ31h4kft2C8SYa9zvGv+krHGcmgZUce7DhnYw79c3aa/zU7FCITCkEwgJVQFIzsEsbmnv3aDUvHRh6MlqVhz31/2+cjjBd79by3HfuFgWzW23bEZjU6pLBfOrDXflGPzAWjP6r1R7MpCcEAllrhCOPs3npbu6G6z5KhvvdnwfBxQv2Jjx3yYLQ393yuX9PDG4kZhimJnWE/rCH6b25K4sEQaTYYYQCroHhKou90+yFag1+Ckd0+6XUsC3kwWvWL3VMejKGoiGBItUIwgFXxt4ueOmCwVNxpJT4lsfe8zSxss3dXLCQDb4Ft+nBkkM1YtDKvSnYkBMP22l/cyKckmd3n9xEMYEUUB0N7oCMGm13Yxcpz/v5Pspshdgm0Zd9ED+kOD4b1ZHZNtFuyIw+yYISLnj4muZIHQzXTlGsYwGoIwYjhgwUAa4xgACAYAGLx4TMAIgQDQDSCASAawQAQjWAAiEYwAEQjGACiEQwA0QgGgGgrG4zJzS9fbk4EwCorCEb4xGkxP61wnXD38cZE3fgoAFbYomCElfdelWzl78A2f2MLXMiHvwRjMr3hvk3E9EdpWrP1f/0T7VV/EZRT21euyPYjNQGwXBYHY27VLJdv5rwOEbumt2+6W1MxzYo0D+/cfmKflBv2z7ac7ZaqL6dTpRfA0ikaYSSDMOG47usBh81u6YB+ZauGh6yoXsdOkbC4uL/Mltdyj8aPbqlH47EE2w/ubDZEqocfH92nQ42KOM2EHypXmiykAyyfxcGQDW9CGFbsmi2c5cG4nD3hKA+GL7VVb88WF/elwueCETySoHmoVK70R/cOXtdyHL4agtHXeti38r2nPM0IWD4FwcjW3rNKaCZswDAXjLN7fTwxC4bttm176Q8lyAYaP03HwTdxvpJn+f2otl2DcV/b8WswePwZsIyKguHjhrD6rxUhD4Yv1+nDB+/JH4Jhe3OT8W03nojzx50105rsPvl4pG2o/jYlYW1PYAktDsbrtmbAH2Jk3bDnEdmmLfFr27NUbGZ3ScLqv7O81Nvysu1TEvfp1nN165MYvwNiYQgXOH28YXymku3rjyoCYMkU3SXxy5jZyt/JOY1EmKLY9uUdNkeZnWcPKwln2+FsjfC6ByOYTL9/n04kU01VRZp+CzXcY80PNSS7rUoxgGXDfw0HQDAACMEAEI1gAIhGMABEIxgAohEMANEIBoBoBANANIIB4Ad759Z6QxSG8fIN3lJqYsxmBrtdTiU5R/4kIscLKXLnXkouJERuhBQulCQX8gVcu3RBXFCUj+J9n/W019hOS8728yszs2etNbNdzK93zfz3M8VIGEKIYiQMIUQxEoYQopjfJgyE5uAHqMUsWsD0LfwG3hwP3TIhxP/D14QRCRhffM9ACII6ICuYsfVdwhhV4x+3j9PEBweq48ss1jl3Cz+Fx7oxY944qashOvsYHC63tFW1dyFWShQWooAfFAau/C/BtAviljj2DL2LhUEWn1xogGniVndW4/0DN3f7Emx6vRCROoMTb5s8ArRNPYxdl0+EMIaWGaUXFjCWXAhRwI9VGPORiRMpW2cWzFnyxouI8ICvEJwTPVJUHwoOBHz6nhgQw7wpxjFj3Ecwe3ym7xpc1yTFcDmLd8/z/ed9mambsAOWnfWphxiZhYEMQASHbjrYbUIsudJ4hAC/ThjM0EJMX0xOIg6cyeApim8LpiUrGQeMFmb4RTKXt7gwfNN7z/juGyEbTHIwlNRp+kFoD1YFoY0xfu2nrHFPCT4bgV2kLwzOcJIwOE0ZIJZcwhAC/MIK47RHc7o3HM/kC0PADl5HoPzwj74rmLH0YhKUIpRGaMSlwRrFWXJ3gTf74byhBwqByW28z6ixj4TRwiEpvS9tkp4w+odDdKiLY4BYcglDCPCrhMGc8FiZ2aIvCWPGgMsBZpj5rDDgCDhlhnHjGZQOJAoDZxSFwYHK8Q3SeukxqoK1p3ySkaclk8KIKUjeP1p7CrHkEoYQ4FcKw2cgl1bFmwOuZmFwSrKF/1wnj+cZXGEGwaQpCTonYfhAl8g1w1QEnWJNeAuzDjUgTTzXCKgwUE8Y7oIGvJOR9NDGM5AJYUR1AvPwpidjyXXTUwjwK4XhV/jqUzHXmOkJgzc9o2DA7UxfRm9v8CVixZecSzHiFygMWxEjMGwR4sazMGo8+UzCYJq4P1x1OsvCwHNUdIQw+PiVwqjRGwWJTz3QK/qjnbHkeqwqxFfRX3oKIUzCEEIUI2EIIYqRMIQQxUgYQohiJAwhRDEShhCiGAlDCFGMhCGEKEbCEEIUI2EIIYqRMIQQxUgYQog/QnlqOD/Ot6+zkmE6AUIwEK9VDH6YXgDCPQl/9/47wG/v83dQwIaYRgpTwxmC82XYJSL8+InJGV+lH6k1IYy2sy9QJAyEg/5EJAwhrDw13E1QIowcwVVimCyMSSCMHwHCEEL8TIpTwx+uighwQ+Q3gsDPIw2cgeKxaawwkALqe1lhIJdvfsoLfpSlMzgwTspprL5+wINu/BMqjFHla1/Eqte7Y/ZvtDfcVzWDGGl2BS0AEvLF6TUXK76pxHv0O/AUPJzV6IAvhBYf1O/m5rkYZ699gX3RI32Hwb0H1XFFeYlpojQ1PEzA9O/bEQQeKXxswqaDexjhjIj6Ragnx5mlzPEXWRgplJcVRh2Rvx2LAr5zBDsAQj8jgG/TwWF04eC2iQg+HAKBnxwXl/G8thsNI6irHqLZV/0OPAUPl3P8HOaB5m7eOjjQ8CQdcgD9zPwPeEsMFWJ6KE0NP+UX+zj9e34KBe4FigeYhKAFm0kY8QlNl9LshozwtjIKg/bINnAoDITsYX/b8Wr+rDA6DEZA32DN5XfPR018Hg19lzP8qEOWAw8Wx+AXaqvOWP/E6BgU48AnwsApJAwxTZSmhqNSyEbAgk2LCoSxfM7LpVssA2UUCAN8Vhg1Jw99YTghgjtPnt7veDXzcP0OnxWGWU8Z4HPCQD6oa0rCEFNKaWp4CIPp3xSGb6amCWFgSuJjkzAQDoz5DR+hEFylnBz0hcFHJaggCKYknvv9kTD4YUIYoH217Mp7CoNn6HfgKXgElCltLnfyt8HQmvUNj2HsI2GIKaU0NTwudqZ/j4Vh69A0IQz76KYnPuHOKfRDYSAfnLneDS9R5n5z2hA54VQHtqtuXBJUGFvj7mO05BlHgFsi/mITXs3o1+UOAKfg4Rgtji+E77D3424chw7H/T4Kw8mdTsIQUweF8avBOxV/IpymNPZ7CT/ozc5iivk9wsCzFvuptCgtfi8og/SSEzHF/B5hLI8HtEKIfx39+EwIIWEIIUzCEEIUI2EIIYqRMIQQxUgYQohiJAwhRDEShhDij0FhzBZCiG8zSxWGEEJTEiGEhCGEKEbCEEIUI2EIIYqRMIQQxUgYQohiJAwhRDEShhDiT5GFccvI4UNz587dsNW+m51zd5ltXL99j02y+UuHQ8M2H4fzbt8Tm0KIvxcKw/bv22EBLtx82Rfz/cKIzrtiWIyLtY/ceeSoCSE+sHcuK05EURQF/+DEaX1BIH/QkYRITMouLNKQhNCJNj6xffdIZ6IDBw4VQRRFJ6IgggMnKogT/QEFBb/FvW8dU5KEWIqPFO5FW3XfFwdn5dwbpVeWqTA2ru42QmFMhj8duL8ijCZ2aW9+wTxOhDDw7JgQYmWZCgO8PWfmGUYL4RxFmwcnwyjad2tYvx5FHToBL0T1zTV0sQYThGEGcmGEplE/dPsJBx2c2sRC69k87oRduM86n0+GmDkZtkwIsbLMCcMDnR//8EaIZlhjfTKs721HHWihQyng1Y5a5sNYQA9BnjBtwpPZxahf34vUgcUmVsjmhZ3gIBdGu/4IwkAFDyHEqrLoSHKxzygP0f8wQnjzhMIEAhFPCeAHUY+X5xGUhOUZxkVvYhcq6MO8zCa+gqck3wkDPplIGEKsPAsvPaEDvgwwvO8uFIbxuPLYh4FcGO4PrJELA52AK3BeqOVHEgwmvDyRMIRYYRZ8rcq4xQmBH/x3zLw86m8ezI4k6y4MoxRe+DDLhXEra4IbQiU7krSZhdw7gMZsaJZbwEN+JOE+uvQUYtVxYeRQGIhoxj3PEHxMWESo+6WnC6MdRZ5mhIjPLz2zJqQmN1HBq34dc9vZ9YaXWkbanJELQ1+rCrHquDCWEu4w/gT0x/foH24JsdoUE4Y++IUQEoYQojj6z2dCCAlDCAEkDCFEYSQMIURhJAwhxD/DhVERQogfs0vCEEJIGEIICUMIURgJQwhRGAlDCFEYCUMIURgJQwhRGAlDCPGvyIXxpuKcOlatVsdHKoU5W92uVE4cP3R4rmfLl1nUceF8tXqpsoO5QojS8E0YGzdSVimMQ4c9/JfBgUfx/HlhcPA2+2iLs6fPVIQQZWEqjI33MetBGBfOF4jjneqvCmPr9BnukqnpUkUIURamwgC93WjIwhgu2KpWoY2zVXCUBgkW2UFtm43jj9XQ/50wvBPzcNjwkw06UIM6Lle3s+4sNcmEwUWPVoQQZWGBMBjoIQ2AN6iOs7kwcIrA61nILfIMI3DocOikQ/hEdnHq2PgIMwgUtyANT0K4wyUM4ZEEg7fQKIQoCYuOJC+PMdqDBd5VtxHpU2FssXF8+zhCff5Iwk66Bu/xK2QQNEVmk22UsDA7AYXBGiUjYQhRJhZeesIFfKF2dkYYDHmmEJDAnDDYyRKG5cJAJ0CJT55OprelnmlIGEKUh9mvVf3Sc/z4PFXxHFbgkYQRzysHFi+8rtASl04cnxFG1rlTvRSmcwKPHRDCU3eJJyU87fDFRl16ClEmXBg5FAYkcOjl+W9XmJ9hBtxdji/7HejRHT4Q8LOXnuxEMoKRvLwIrwrHZskHWmgPsJPdm6JNX6sKUSpcGMtgKvF7oT+I/uGWEOWikDD01acQQsIQQhRG//lMCCFhCCECEoYQojAShhCiMBKGEOLfsUu/KlEIod+tKoSQMIQQhZEwhBCFkTCEEIWRMIQQhZEwhBCFkTCEEIWRMIQQhfkbwtgfRVHLfkAbg/YdyKsLZzQjsG5/kqRnf4xGbPPEbBz0rFsDXes2rAhpYjmYI0Q5mRdGEyG+Z22pMVwQ9w7sWeuY11mYpVnfOxnW99qPGfVbVg5cGCHq04aEIf4vMmGce7BBHpwzd0XzB2G+H1YJr44tgatw5I9pR2UUhkkY4j/DM4zBBhmYq4AZA374ssmQh492dDV6gmxh2o8elNF1Ze3m2r4PUQe5xPUInaM+WumbaYbRjDiaK7Sy484eTInqn1hEGZ084GweDEVrYpl1NiwXTbeGRy9l/OJsMDBU0x5a+HcY1GqIyZhnBoYq/8RxLbEU7T58KVzIal2uxcEDVBPuY+B7YcQJXw6262EM9kgt34mi6NVqGBleYVgsYYiy4sKw+/DFfbNZYdADsAVqkAb6UN08GIYxotmAiEcLRlANe9b2HYAlRn0XhqvDOIsrhMZs2P6olc3osIUZhhebYU2OXU6SIloZv40uP+qTgfUaLAC2WNqgOabCoFDY6cOX06BoIB8fzHV7NkgMfH+HEVsuDO4TpwZDDBrmO6WwRGxJgmJiCWtd9iQShigr0zuMGxs3jMwKAx/7oMUakgfkEy3LaCInCMJgSztTyai/ea2PWPcTDV/hTW9wBRcNp2Aq+1FnC4XhRTRiI4pmKQzaOMZPt0a6DPA4TWMDSc2CUJhwTDMMb/HhtgyMxkz8+OAkHcS9LpQE8gyDZuCLcE+QGHeu+U6NbCSlkybW4IA0SXUkESVmKoyTGycN5HcYLoyszlJofpYHMsYUEgZTEF9v1MecGWGsG6AwWPRJdAz6l9NA4FEYDa+m8SBhUJNaw4XRnRFGkWjloG443vhgrhunLHOt7MGuJOaL+OI2LwyYIkygN0AykDDEV/buZsWJIArD8DWUrZYiEnAhWajExD8QQYWIUUTpTXsNrlypIMIoohtBtwriUgTBje69NM9XfbTjT7SiUZyq92GY7tRUZ2aTb+pUkpNtzAPDLIIMz5L4ozqVFx99fXDh83Op77QKUJnxXWC8vL5UkqSDlyuf5577KjBSofLqqkb8NF2Usw16qb2iwNDKX9p2oaIkUZqkkqRfBrQpMIZC4dfaVgVE55NVkCzaNsjisKqUzh71OtdB/M49MJZLkmuqSlJJ0lc0LSUJtrEfvw5DuaB/8g/TqmAoKOz8os/RoDZEVaQsB4a2Ls88WQoMTdKA7iHd51eB4S/oSAVOf6pBuw8N/tzicKfASEVGa2dngx6Ucvbz9mLaGLVKoQ8MjZz16b9wLV3Z+WRLnCFouqXNiyutJtjfoXOd9IHhvymkmf1Bd5D+npZNT2xjHhjfOrdiD+GyDWc4Z/ugAIrjgZEl8/VV2+lVFQD+WmCc+3WdkKoV8gIoE28+A0BgAAgEBoBsBAaAbAQGgGwEBoBsBAaAbAQGgGwEBoBsBAaAbNs5MPZu7a7InkcBKM4/C4xHO5vKdFsBKMy6gXH6+HgWfsPWg6Y+twNQlvUD49CJsMqpI6MgMvV5rmsqtIuyBIXZaEkyiR4Yyo6vAuNYU6UbASjKqsDQWiLGk/v776eOxDhKp7e0wjgaYzwfDh64eyB6LGho/CJGuz3VD3VBnPcXH7W595oq3QlAUVYHxjTOlRon90/iB21c+IAFxsQSwFLg4IE+DERrC//ez9EKo7/4vObcaKr0LABFWRkYWjOMbBURzWiqFYUGUhhMxzP7wci+UkTIQa01/JZNHs8UGH5xMLebKu0MQFFWB0YKgecWCjJRbaGB1z8OjFTAzCcpYjTBA2MU3FZTpXsBKMrqwFAIjN8csXB4O/NNTBt4/KUkmQ+BISpS+pHzNm2WypL+YpUkddYkXQDK8rM9jBjnQbuXlhKqMtLA6WHTczkwJn3tMdUSJI7vj2camaeLU2BUmRjdzQCUxQPjH1jsfLarIg/uUI+gPH8eGNNo5gFA+Xi3KgACA0AgMABkIzAAZCMwAGQjMABkIzAAZCMwAGQjMABk+w8Do6pe4KgB3ZvdpgOjxl7gqMAueituIDC8vcWymzX2AkcFduwN2HRgVNoLHDVgjbHxwKi2FzhqQDOTdQNDLTnn3izHDt4iR43BvW1Orb3AUYNFwFqBoabgIXzpED6ywyhMU6fOPjCq7KKFWtD/aM3AOJq64njDX7uhg/XcMxYkUm0vcNRgT8AGAsPCYrCvAcrEx1yuGxiTOJQk6QMEjurDzxQcT3XLUJOgWHyQ9pqBoawYNj212Xn3gD7HSIMeGOZ9AxSIZ1WzAmN9izsPdgFFebaTDQzefAaAwACwEoEBIBuBASAbgQEgG4EBIBuBASAbgQF8ar+OaQAAQBgIJmjAv1YWdrqx3In4tMQEA4gJBvBmg9EAt7IwAJcEEAwgJhjAlw3GAI+iE3tdwO+nAAAAAElFTkSuQmCC"},87420:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/login-7dec8ea2914c23ad07f0ef539e5ff798.png"}}]);