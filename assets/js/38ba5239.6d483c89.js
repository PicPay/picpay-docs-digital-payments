"use strict";(self.webpackChunkpicpay=self.webpackChunkpicpay||[]).push([[2551],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=a,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},55828:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const o={id:"oauth2-flow",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization",hide_title:!1,description:"Learn how to obtain access tokens for your application by our services oauth2",keywords:["PicPay 1-Click","Authentication","Authorization","Login","Token"]},r={unversionedId:"one-click-en/guides/oauth2-flow",id:"one-click-en/guides/oauth2-flow",isDocsHomePage:!1,title:"Authentication and Authorization",description:"Learn how to obtain access tokens for your application by our services oauth2",source:"@site/docs/one-click-en/guides/oauth2-flow.md",sourceDirName:"one-click-en/guides",slug:"/one-click-en/guides/oauth2-flow",permalink:"/picpay-docs-digital-payments/one-click-en/guides/oauth2-flow",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/one-click-en/guides/oauth2-flow.md",version:"current",sidebar_label:"Authentication and Authorization",frontMatter:{id:"oauth2-flow",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization",hide_title:!1,description:"Learn how to obtain access tokens for your application by our services oauth2",keywords:["PicPay 1-Click","Authentication","Authorization","Login","Token"]},sidebar:"pagamentoLogadoenglish",next:{title:"Payments Processing",permalink:"/picpay-docs-digital-payments/one-click-en/guides/process-payments"}},s=[{value:"About this guide",id:"about-this-guide",children:[]},{value:"Before Starting",id:"before-starting",children:[{value:"Registro do aplicativo",id:"registro-do-aplicativo",children:[]},{value:"Getting the <code>client_id</code> and <code>client_secret</code>",id:"getting-the-client_id-and-client_secret",children:[]}]},{value:"How It works ?",id:"how-it-works-",children:[{value:"Redirecting user to login and password screen",id:"redirecting-user-to-login-and-password-screen",children:[]},{value:"Requesting user authorization",id:"requesting-user-authorization",children:[]},{value:"Token request",id:"token-request",children:[]},{value:"Updating the Tokens",id:"updating-the-tokens",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]},{value:"Getting help",id:"getting-help",children:[]}],l={toc:s},c="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(c,(0,i.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"about-this-guide"},"About this guide"),(0,a.kt)("p",null,"In this guide we will describe the step-by-step for you to obtain an access token to process online payments with PicPay by our logged payment solution."),(0,a.kt)("h2",{id:"before-starting"},"Before Starting"),(0,a.kt)("h3",{id:"registro-do-aplicativo"},"Registro do aplicativo"),(0,a.kt)("p",null,"Before starting your integration, you must have valid credentials. Currently for this product, the credentials creation process is done directly by the PicPay team"),(0,a.kt)("p",null,"For this payment solution, the e-commerce must already be a PicPay partner. The data required to register the application are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Registration email;"),(0,a.kt)("li",{parentName:"ul"},"Redirect URL or callback URL;")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The ",(0,a.kt)("strong",{parentName:"p"},"PicPay 1-Click")," solution is not available to all our merchants. Interested? Just contact us by email:  ",(0,a.kt)("a",{parentName:"p",href:"mailto:atrelationship-companies@picpay.com"},"atrelationship-companies@picpay.com")))),(0,a.kt)("h3",{id:"getting-the-client_id-and-client_secret"},"Getting the ",(0,a.kt)("inlineCode",{parentName:"h3"},"client_id")," and ",(0,a.kt)("inlineCode",{parentName:"h3"},"client_secret")),(0,a.kt)("p",null,"After registering the application, the PicPay will share the access credentials with the e-commerce in the form of a ",(0,a.kt)("inlineCode",{parentName:"p"},"client_id")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"client_secret"),"."),(0,a.kt)("h4",{id:"more-about-the-client_id"},"More about the ",(0,a.kt)("inlineCode",{parentName:"h4"},"client_id")),(0,a.kt)("p",null,"The \u2018client ID\u2019 is a publicly exposed string used by the service API to identify the application and also to create authorization URLs that are presented to users."),(0,a.kt)("h4",{id:"more-about-the-client_secret"},"More About the ",(0,a.kt)("inlineCode",{parentName:"h4"},"client_secret")),(0,a.kt)("p",null,"The client secret is used to authenticate the app's identity to the service API when the app requests access to a user's account, and should be kept private between the app and the API."),(0,a.kt)("h2",{id:"how-it-works-"},"How It works ?"),(0,a.kt)("p",null,"The basic flow of authentication and authorization consists of generating a code after the user enters his login/password in a PicPay interface."),(0,a.kt)("p",null,"With the generated code, the e-commerce must generate a token that will be used in all ",(0,a.kt)("inlineCode",{parentName:"p"},"server to server")," communication with PicPay. This token will allow the user to perform the following operations (depending on the configured scope):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Process payments;"),(0,a.kt)("li",{parentName:"ul"},"Refund payments;"),(0,a.kt)("li",{parentName:"ul"},"Get user information;")),(0,a.kt)("h3",{id:"redirecting-user-to-login-and-password-screen"},"Redirecting user to login and password screen"),(0,a.kt)("p",null,"Initially, your e-commerce should redirect your customers to the PicPay login and password page. For this, your e-commerce must generate the URL, whith your ",(0,a.kt)("inlineCode",{parentName:"p"},"client_id")," and redirection url. Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api.picpay.com/oauth2/auth?client_id=xxxxxxxxxxxx&response_type=code&redirect_uri=http://yourwebsite.com/api/payments'\n\nhttps://api.picpay.com/oauth2/auth?client_id=CLIENT_ID&response_type=code&redirect_uri=CALLBACK_URL&scope=scopes\n\n")),(0,a.kt)("p",null,"Brief explanation of the above URL parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"client_id"),": Application identifier provided by PicPay;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"redirect_uri"),": URL where the service redirects the user agent after granting an authorization code"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"response_type")," Must be equal ",(0,a.kt)("inlineCode",{parentName:"li"},"code"),", specifying that your application is requesting an authorization code grant")),(0,a.kt)("h3",{id:"requesting-user-authorization"},"Requesting user authorization"),(0,a.kt)("p",null,"When using the URL from the ",(0,a.kt)("a",{parentName:"p",href:"/one-click/guides/oauth2-flow#redirecionando-usu%C3%A1rio-para-tela-de-login-e-senha"},"previous step"),", the client will be redirected to a login and password page. Your customer must have to login using his PicPay username and password."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(85692).Z})),(0,a.kt)("p",null,"After login, the customer must verify the permissions requested by the application."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Information")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The requested permissions will depend on the scope settings set when creating the credentials."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(7069).Z})),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The client may or may not grant permissions. Your application must be prepared to receive two types of response."),(0,a.kt)("p",{parentName:"div"},"After the initial consent, PicPay will not ask the customer for permissions again."))),(0,a.kt)("p",null,"###Getting the authorization code"),(0,a.kt)("p",null,"If the client authorizes the application in the ",(0,a.kt)("a",{parentName:"p",href:"/one-click/guides/oauth2-flow#solicitando-a-autoriza%C3%A7%C3%A3o-do-usu%C3%A1rio"},"previous step"),", the user will be redirected to the indicated return URL."),(0,a.kt)("p",null,"The authorization code will be sent as a parameter along with the indicated URL and must be used to generate tokens in the next step."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"img",src:n(22775).Z})),(0,a.kt)("h3",{id:"token-request"},"Token request"),(0,a.kt)("p",null,"In order to carry out requests for payment, reimbursement or querying information, the e-commerce must inform a valid token as one of the header parameters of each request."),(0,a.kt)("p",null,"The e-commerce must request an access token with the authorization code obtained in ",(0,a.kt)("em",{parentName:"p"},"step 3")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"client_id")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"client_secret"),"."),(0,a.kt)("p",null,"Example token request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\   \nhttps://api.picpay.com/oauth2/token \\  \n-H "Content-Type=\'application/x-www-form-urlencoded\'" \\  \n-d "grant_type=authorization_code" \\  \n-d "client_id=CLIENT_ID" \\  \n-d "code=AUTHORIZATION_CODE"  \n-d "redirect_uri=REDIRECT_URI" \n')),(0,a.kt)("p",null,"If everything is ok, we will send the token as in the example below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "ACCESS_TOKEN",\n  "expires_in": 300, // time in seconds\n  "refresh_expires_in": 1800,\n  "refresh_token": "REFRESH_TOKEN",\n  "token_type": "bearer",\n  "id_token": "ID_TOKEN",\n  "not-before-policy": 1585954424,\n  "session_state": "fa158d89-9228-45c6-8486-e159f28b5bd5",\n  "scope": "openid email profile"\n}\n')),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Expiration time of a token")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The token expiration time will be displayed in seconds. After expiration, the token must be refreshed using ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh_token"),"."),(0,a.kt)("p",{parentName:"div"},"The duration of the tokens can be configured in the creation and configuration of credentials by PicPay."))),(0,a.kt)("h3",{id:"updating-the-tokens"},"Updating the Tokens"),(0,a.kt)("p",null,"After a predetermined period, the ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," granted to the application will expire, requiring a request for a new ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token"),". For this, a ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh_token")," is used, generated in the same request as the ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," (see Authentication and Authorization). Below is an example of a request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\nhttps://api.picpay.com/oauth2/token \\\n-H "Content-Type=\'application/x-www-form-urlencoded\'" \\\n-d "grant_type=refresh_token" \\\n-d "client_id=CLIENT_ID" \\\n-d "client_secret=CLIENT_SECRET" \\\n-d "refresh_token=REFRESH_TOKEN"\n')),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Token refresh flow")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"The token refresh flow must be provided in your application as the ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh_token")," will expire at some point. If the token is not updated, the user must login and password again."))),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"With a valid ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token"),", your application will be able to make charges, refunds or consult some basic user information. Check the next steps below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/one-click/guides/process-payments"},"Making a charge"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/one-click/guides/refund-payments"},"Requesting a refund"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/one-click/guides/user-info"},"Consulting user informations"),";")),(0,a.kt)("h2",{id:"getting-help"},"Getting help"),(0,a.kt)("p",null,"We hope this article has helped! If you have any questions, you can consult our FAQ or contact us by e-mail :  ",(0,a.kt)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com"),"."))}p.isMDXComponent=!0},7069:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/authorization-1621d88f3192505e6d376c5f7d383b86.png"},22775:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/get-with-code-bf7db0bb4e49247abeaede6011ced180.png"},85692:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/login-f00fa88a6d60ad6f8f417b05091e8920.png"}}]);