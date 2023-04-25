(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(r,".").concat(u)]||d[u]||b[u]||o;return n?i.a.createElement(h,c(c({ref:t},l),{},{components:n})):i.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},323:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/login-f00fa88a6d60ad6f8f417b05091e8920.png"},324:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/authorization-1621d88f3192505e6d376c5f7d383b86.png"},325:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/get-with-code-bf7db0bb4e49247abeaede6011ced180.png"},85:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),i=n(8),o=(n(0),n(126)),r=["components"],c={id:"oauth2-flow",title:"Authentication and Authorization",sidebar_label:"Authentication and Authorization",hide_title:!1,description:"Learn how to obtain access tokens for your application by our services oauth2",keywords:["PicPay 1-Click","Authentication","Authorization","Login","Token"]},s={unversionedId:"one-click-en/guides/oauth2-flow",id:"one-click-en/guides/oauth2-flow",isDocsHomePage:!1,title:"Authentication and Authorization",description:"Learn how to obtain access tokens for your application by our services oauth2",source:"@site/docs/one-click-en/guides/oauth2-flow.md",slug:"/one-click-en/guides/oauth2-flow",permalink:"/picpay-docs-digital-payments/one-click-en/guides/oauth2-flow",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/one-click-en/guides/oauth2-flow.md",version:"current",sidebar_label:"Authentication and Authorization",sidebar:"pagamentoLogadoenglish",next:{title:"Payments Processing",permalink:"/picpay-docs-digital-payments/one-click-en/guides/process-payments"}},l=[{value:"About this guide",id:"about-this-guide",children:[]},{value:"Before Starting",id:"before-starting",children:[{value:"Registro do aplicativo",id:"registro-do-aplicativo",children:[]},{value:"Getting the <code>client_id</code> and <code>client_secret</code>",id:"getting-the-client_id-and-client_secret",children:[]}]},{value:"How It works ?",id:"how-it-works-",children:[{value:"Redirecting user to login and password screen",id:"redirecting-user-to-login-and-password-screen",children:[]},{value:"Requesting user authorization",id:"requesting-user-authorization",children:[]},{value:"Token request",id:"token-request",children:[]},{value:"Updating the Tokens",id:"updating-the-tokens",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]},{value:"Getting help",id:"getting-help",children:[]}],p={toc:l};function d(e){var t=e.components,c=Object(i.a)(e,r);return Object(o.b)("wrapper",Object(a.a)({},p,c,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"about-this-guide"},"About this guide"),Object(o.b)("p",null,"In this guide we will describe the step-by-step for you to obtain an access token to process online payments with PicPay by our logged payment solution."),Object(o.b)("h2",{id:"before-starting"},"Before Starting"),Object(o.b)("h3",{id:"registro-do-aplicativo"},"Registro do aplicativo"),Object(o.b)("p",null,"Before starting your integration, you must have valid credentials. Currently for this product, the credentials creation process is done directly by the PicPay team"),Object(o.b)("p",null,"For this payment solution, the e-commerce must already be a PicPay partner. The data required to register the application are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Registration email;"),Object(o.b)("li",{parentName:"ul"},"Redirect URL or callback URL;")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The ",Object(o.b)("strong",{parentName:"p"},"PicPay 1-Click")," solution is not available to all our merchants. Interested? Just contact us by email:  ",Object(o.b)("a",{parentName:"p",href:"mailto:atrelationship-companies@picpay.com"},"atrelationship-companies@picpay.com")))),Object(o.b)("h3",{id:"getting-the-client_id-and-client_secret"},"Getting the ",Object(o.b)("inlineCode",{parentName:"h3"},"client_id")," and ",Object(o.b)("inlineCode",{parentName:"h3"},"client_secret")),Object(o.b)("p",null,"After registering the application, the PicPay will share the access credentials with the e-commerce in the form of a ",Object(o.b)("inlineCode",{parentName:"p"},"client_id")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"client_secret"),"."),Object(o.b)("h4",{id:"more-about-the-client_id"},"More about the ",Object(o.b)("inlineCode",{parentName:"h4"},"client_id")),Object(o.b)("p",null,"The \u2018client ID\u2019 is a publicly exposed string used by the service API to identify the application and also to create authorization URLs that are presented to users."),Object(o.b)("h4",{id:"more-about-the-client_secret"},"More About the ",Object(o.b)("inlineCode",{parentName:"h4"},"client_secret")),Object(o.b)("p",null,"The client secret is used to authenticate the app's identity to the service API when the app requests access to a user's account, and should be kept private between the app and the API."),Object(o.b)("h2",{id:"how-it-works-"},"How It works ?"),Object(o.b)("p",null,"The basic flow of authentication and authorization consists of generating a code after the user enters his login/password in a PicPay interface."),Object(o.b)("p",null,"With the generated code, the e-commerce must generate a token that will be used in all ",Object(o.b)("inlineCode",{parentName:"p"},"server to server")," communication with PicPay. This token will allow the user to perform the following operations (depending on the configured scope):"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Process payments;"),Object(o.b)("li",{parentName:"ul"},"Refund payments;"),Object(o.b)("li",{parentName:"ul"},"Get user information;")),Object(o.b)("h3",{id:"redirecting-user-to-login-and-password-screen"},"Redirecting user to login and password screen"),Object(o.b)("p",null,"Initially, your e-commerce should redirect your customers to the PicPay login and password page. For this, your e-commerce must generate the URL, whith your ",Object(o.b)("inlineCode",{parentName:"p"},"client_id")," and redirection url. Example:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'https://api.picpay.com/oauth2/auth?client_id=xxxxxxxxxxxx&response_type=code&redirect_uri=http://yourwebsite.com/api/payments'\n\nhttps://api.picpay.com/oauth2/auth?client_id=CLIENT_ID&response_type=code&redirect_uri=CALLBACK_URL&scope=scopes\n\n")),Object(o.b)("p",null,"Brief explanation of the above URL parameters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"client_id"),": Application identifier provided by PicPay;"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"redirect_uri"),": URL where the service redirects the user agent after granting an authorization code"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"response_type")," Must be equal ",Object(o.b)("inlineCode",{parentName:"li"},"code"),", specifying that your application is requesting an authorization code grant")),Object(o.b)("h3",{id:"requesting-user-authorization"},"Requesting user authorization"),Object(o.b)("p",null,"When using the URL from the ",Object(o.b)("a",{parentName:"p",href:"/one-click/guides/oauth2-flow#redirecionando-usu%C3%A1rio-para-tela-de-login-e-senha"},"previous step"),", the client will be redirected to a login and password page. Your customer must have to login using his PicPay username and password."),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(323).default})),Object(o.b)("p",null,"After login, the customer must verify the permissions requested by the application."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Information")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The requested permissions will depend on the scope settings set when creating the credentials."))),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(324).default})),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The client may or may not grant permissions. Your application must be prepared to receive two types of response."),Object(o.b)("p",{parentName:"div"},"After the initial consent, PicPay will not ask the customer for permissions again."))),Object(o.b)("p",null,"###Getting the authorization code"),Object(o.b)("p",null,"If the client authorizes the application in the ",Object(o.b)("a",{parentName:"p",href:"/one-click/guides/oauth2-flow#solicitando-a-autoriza%C3%A7%C3%A3o-do-usu%C3%A1rio"},"previous step"),", the user will be redirected to the indicated return URL."),Object(o.b)("p",null,"The authorization code will be sent as a parameter along with the indicated URL and must be used to generate tokens in the next step."),Object(o.b)("p",null,Object(o.b)("img",{alt:"img",src:n(325).default})),Object(o.b)("h3",{id:"token-request"},"Token request"),Object(o.b)("p",null,"In order to carry out requests for payment, reimbursement or querying information, the e-commerce must inform a valid token as one of the header parameters of each request."),Object(o.b)("p",null,"The e-commerce must request an access token with the authorization code obtained in ",Object(o.b)("em",{parentName:"p"},"step 3")," and the ",Object(o.b)("inlineCode",{parentName:"p"},"client_id")," and ",Object(o.b)("inlineCode",{parentName:"p"},"client_secret"),"."),Object(o.b)("p",null,"Example token request:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\   \nhttps://api.picpay.com/oauth2/token \\  \n-H "Content-Type=\'application/x-www-form-urlencoded\'" \\  \n-d "grant_type=authorization_code" \\  \n-d "client_id=CLIENT_ID" \\  \n-d "code=AUTHORIZATION_CODE"  \n-d "redirect_uri=REDIRECT_URI" \n')),Object(o.b)("p",null,"If everything is ok, we will send the token as in the example below:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "ACCESS_TOKEN",\n  "expires_in": 300, // time in seconds\n  "refresh_expires_in": 1800,\n  "refresh_token": "REFRESH_TOKEN",\n  "token_type": "bearer",\n  "id_token": "ID_TOKEN",\n  "not-before-policy": 1585954424,\n  "session_state": "fa158d89-9228-45c6-8486-e159f28b5bd5",\n  "scope": "openid email profile"\n}\n')),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Expiration time of a token")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The token expiration time will be displayed in seconds. After expiration, the token must be refreshed using ",Object(o.b)("inlineCode",{parentName:"p"},"refresh_token"),"."),Object(o.b)("p",{parentName:"div"},"The duration of the tokens can be configured in the creation and configuration of credentials by PicPay."))),Object(o.b)("h3",{id:"updating-the-tokens"},"Updating the Tokens"),Object(o.b)("p",null,"After a predetermined period, the ",Object(o.b)("inlineCode",{parentName:"p"},"access_token")," granted to the application will expire, requiring a request for a new ",Object(o.b)("inlineCode",{parentName:"p"},"access_token"),". For this, a ",Object(o.b)("inlineCode",{parentName:"p"},"refresh_token")," is used, generated in the same request as the ",Object(o.b)("inlineCode",{parentName:"p"},"access_token")," (see Authentication and Authorization). Below is an example of a request:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\nhttps://api.picpay.com/oauth2/token \\\n-H "Content-Type=\'application/x-www-form-urlencoded\'" \\\n-d "grant_type=refresh_token" \\\n-d "client_id=CLIENT_ID" \\\n-d "client_secret=CLIENT_SECRET" \\\n-d "refresh_token=REFRESH_TOKEN"\n')),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Token refresh flow")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"The token refresh flow must be provided in your application as the ",Object(o.b)("inlineCode",{parentName:"p"},"refresh_token")," will expire at some point. If the token is not updated, the user must login and password again."))),Object(o.b)("h2",{id:"next-steps"},"Next Steps"),Object(o.b)("p",null,"With a valid ",Object(o.b)("inlineCode",{parentName:"p"},"access_token"),", your application will be able to make charges, refunds or consult some basic user information. Check the next steps below:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/one-click/guides/process-payments"},"Making a charge"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/one-click/guides/refund-payments"},"Requesting a refund"),";"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/one-click/guides/user-info"},"Consulting user informations"),";")),Object(o.b)("h2",{id:"getting-help"},"Getting help"),Object(o.b)("p",null,"We hope this article has helped! If you have any questions, you can consult our FAQ or contact us by e-mail :  ",Object(o.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com."},"relacionamento-empresas@picpay.com.")," "))}d.isMDXComponent=!0}}]);