"use strict";(self.webpackChunkpicpay=self.webpackChunkpicpay||[]).push([[1954],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,h=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(h,r(r({ref:t},l),{},{components:n})):a.createElement(h,r({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46797:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={id:"accepting-payments",title:"Accepting Payments",hide_title:!0},r={unversionedId:"checkout/guides/accepting-payments",id:"checkout/guides/accepting-payments",isDocsHomePage:!1,title:"Accepting Payments with the public API",description:"About this guide",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/checkout/guides/accepting-payments.md",sourceDirName:"checkout/guides",slug:"/checkout/guides/accepting-payments",permalink:"/picpay-docs-digital-payments/en/checkout/guides/accepting-payments",version:"current",frontMatter:{id:"accepting-payments",title:"Accepting Payments",hide_title:!0},sidebar:"docs",previous:{title:"How to get started",permalink:"/picpay-docs-digital-payments/en/checkout/intro/getting-started"},next:{title:"Request cancellations",permalink:"/picpay-docs-digital-payments/en/checkout/guides/cancel-order"}},s=[{value:"About this guide",id:"about-this-guide",children:[]},{value:"Prerequisites",id:"prerequisites",children:[]},{value:"How does it work?",id:"how-does-it-work",children:[{value:"Authentication",id:"authentication",children:[]},{value:"Basic operation",id:"basic-operation",children:[]}]},{value:"Next steps",id:"next-steps",children:[]},{value:"Getting help",id:"getting-help",children:[]}],c={toc:s},p="wrapper";function l(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"about-this-guide"},"About this guide"),(0,i.kt)("p",null,"In this guide we will describe the step-by-step process for you to accept online payments with PicPay, as well as the basic flow of a payment with QR Code and the payment lifecycle."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before starting your onboarding, you must have valid credentials. You can check how to obtain your credentials ",(0,i.kt)("a",{parentName:"p",href:"../intro/getting-started#antes-de-come%C3%A7ar"},"in this article"),"."),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("h3",{id:"authentication"},"Authentication"),(0,i.kt)("p",null,"PicPay provides two integration keys: ",(0,i.kt)("inlineCode",{parentName:"p"},"x-picpay-token")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"x-seller-token"),". For this operation, you should use the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-picpay-token")," in your requests."),(0,i.kt)("h3",{id:"basic-operation"},"Basic operation"),(0,i.kt)("p",null,"PicPay operates as an asynchronous payment method. This means a payment intent is generated through our payment API and remains in the ",(0,i.kt)("inlineCode",{parentName:"p"},"pending")," status until the user completes the payment using the PicPay app. Below is the basic flow of QR Code payments."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(70043).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 1"),": The customer selects PicPay as the payment method on your e-commerce platform;"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 2:")," Your e-commerce platform must make a server-side call to our payment API (/payments), generating a payment intent with a pending status within PicPay;"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location --request POST \'https://appws.picpay.com/ecommerce/public/payments\'  \\ \n--header \'x-picpay-token: {your_integration_key}\'  \\ \n--header \'Content-Type: application/json\'  \\ \n--data-raw \'{ "referenceId": "102039", \n    "callbackUrl": "http://localhost/mockVtexPostCallback/?httpStatus=200", \n    "expiresAt": "2020-12-12T15:53:00+05:00", \n    "returnUrl": "http://www.picpay.com/#transacaoConcluida", \n    "value": 10, \n    "additionalInfo": [ null ], \n    "buyer": { \n        "firstName": "Jo\xe3o", \n        "lastName": "dos Testes", \n        "document": "010.091.001-91" \n    } \n}\'\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example of request: The e-commerce creates a payment intent of 10 reais on PicPay for the customer Jo\xe3o dos Testes.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 3:")," PicPay returns the QR Code in the API payments callback response (URL for redirection in paymentUrl and encoded image in qrcode.base64);"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{  \n    "referenceId":  "102039",  \n    "paymentUrl":  "https://app.picpay.com/checkout/NWZkOTFjZTA4.....ZWJmM2QxMzA2",  \n    "qrcode":  {  \n        "content":  "https://app.picpay.com/checkout/NWZkOTFjZTA4.....ZWJmM2QxMzA2",  \n        "base64":  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAIAAAAP3aGb...(muitos caracteres)..II="  \n    },  \n    "expiresAt":  "2020-12-12T08:53:00-02:00"  \n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example response to step 3 request.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 4:")," In your e-commerce, you display the QR code to your customer by either redirecting to the URL or showing the QR code directly;"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(14278).Z}),"\n",(0,i.kt)("em",{parentName:"p"},"Image 2 - Example using redirection")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(53796).Z}),"\n",(0,i.kt)("em",{parentName:"p"},"Image 3 - Example using the QR code on the page")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 5:")," If we identify that your customer is also a PicPay user, we will send a notification within the PicPay app informing them about the pending payment. In all cases, we will also send a pending payment email containing the link to our checkout page. At this point, there will be a payment intent with a pending status (learn more about the payment lifecycle here)."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 6:")," The customer makes the payment through the PicPay app (using either their balance or a credit card)."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Information")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the customer does not make the payment by the expiration date (sent at the time of creation), the payment will move to the status expired."))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 7:")," If the payment is successful, PicPay sends a notification to the e-commerce via ",(0,i.kt)("strong",{parentName:"p"},"POST")," to the callback URL provided in the payment request as callbackUrl."),(0,i.kt)("p",null,"Your e-commerce should be prepared to receive a ",(0,i.kt)("strong",{parentName:"p"},"POST")," at the endpoint /callback, using the ",(0,i.kt)("inlineCode",{parentName:"p"},"x-seller-token")," in the header for authentication of the request. To confirm the receipt of the callback, your e-commerce must respond with ",(0,i.kt)("strong",{parentName:"p"},"HTTP Status 200"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\ http://www.sualoja.com.br/callback \\ \n    -H \'Content-Type: application/json\'  \\ \n    -H \'x-seller-token: 4ef4edbd-5cda-42da-860b-0e8d7b90c784\'  \\ \n    -d \'{   \n            "referenceId" : "102030", \n            "authorizationId" : "555008cef7f321d00ef236333" \n        }\'\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example of notification that PicPay sends to the e-commerce.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Information")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"However, for security reasons, we will not disclose the new status in this request. Therefore, your store (upon receiving our notification) should query our order status endpoint."))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"Attention")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If the callback does not arrive within the time determined by you, we recommend that a direct status check of the order be performed (",(0,i.kt)("strong",{parentName:"p"},"step 8"),"). This is applicable in cases that require instant confirmations (such as in-store purchases or vending machines, for example)."))),(0,i.kt)("p",null,"Learn more about the notifications that PicPay sends ",(0,i.kt)("a",{parentName:"p",href:"./notifications"},"in this article"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 8:")," Your e-commerce should perform a GET request using the referenceId sent in the notification to obtain the payment status."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X GET \\ https://appws.picpay.com/ecommerce/public/payments/{referenceId}/status \\ \n    -H 'Content-Type: application/json'  \\ \n    -H 'x-picpay-token: {your_integration_key}'  \\  }'\n")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example of notification that PicPay sends to the e-commerce.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Step 9:")," If the payment is confirmed, display confirmation on your e-commerce site."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./order-status"},"Understand the possible statuses of a payment"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./cancel-order"},"Understand how to request a full cancellation"),";"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./notifications"},"Learn more about the notifications that PicPay sends"),";")),(0,i.kt)("h2",{id:"getting-help"},"Getting help"),(0,i.kt)("p",null,"We hope this article has been helpful! If you have any remaining questions, you can check our FAQ or contact us via email at ",(0,i.kt)("a",{parentName:"p",href:"mailto:relacionamento-negocios@picpay.com"},"relacionamento-negocios@picpay.com"),"."))}l.isMDXComponent=!0},53796:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ecommerce-qrcode-embeeded-513cbe984275536407544ee210fec957.png"},14278:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ecommerce-qrcode-redirect-293fe5a6e0c4b11373c71ebb4554ec5e.png"},70043:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sequence-diagram-qrcode-3ea687f31039f1a193db09da712661a0.png"}}]);