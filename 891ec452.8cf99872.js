(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||d[b]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=(n(0),n(128));const i={id:"process-payments",title:"Payments Processing",sidebar_label:"Payments Processing",hide_title:!1,description:"Learn how to process payments in our PicPay 1-Click solution",keywords:["PicPay 1-Click","Payments","Login"]},o={unversionedId:"one-click-en/guides/process-payments",id:"one-click-en/guides/process-payments",isDocsHomePage:!1,title:"Payments Processing",description:"Learn how to process payments in our PicPay 1-Click solution",source:"@site/docs/one-click-en/guides/process-payments.md",slug:"/one-click-en/guides/process-payments",permalink:"/picpay-docs-digital-payments/one-click-en/guides/process-payments",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/one-click-en/guides/process-payments.md",version:"current",sidebar_label:"Payments Processing",sidebar:"pagamentoLogadoenglish",previous:{title:"Authentication and Authorization",permalink:"/picpay-docs-digital-payments/one-click-en/guides/oauth2-flow"},next:{title:"Refunding Payments",permalink:"/picpay-docs-digital-payments/one-click-en/guides/refund-payments"}},c=[{value:"About this guide",id:"about-this-guide",children:[]},{value:"before starting",id:"before-starting",children:[]},{value:"How it works",id:"how-it-works",children:[{value:"Authentication",id:"authentication",children:[]},{value:"Generating a charge to the user&#39;s wallet",id:"generating-a-charge-to-the-users-wallet",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]},{value:"Getting help",id:"getting-help",children:[]}],s={toc:c};function l(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"about-this-guide"},"About this guide"),Object(r.b)("p",null,"In this guide we will describe the step-by-step process for you to process payments with PicPay by our logged payment solution."),Object(r.b)("h2",{id:"before-starting"},"before starting"),Object(r.b)("p",null,"Before processing online payments by our ",Object(r.b)("strong",{parentName:"p"},"PicPay 1-Click")," solution, you must have a valid, non-expired access_token. You can check how to generate your tokens ",Object(r.b)("a",{parentName:"p",href:"/one-click/guides/oauth2-flow"},"in this article"),"."),Object(r.b)("h2",{id:"how-it-works"},"How it works"),Object(r.b)("h3",{id:"authentication"},"Authentication"),Object(r.b)("p",null,"In addition to the ",Object(r.b)("inlineCode",{parentName:"p"},"access_token"),", generated dynamically, the payment end-point also needs an ",Object(r.b)("inlineCode",{parentName:"p"},"Api-Key")," that will be informed with your ",Object(r.b)("inlineCode",{parentName:"p"},"client_id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"client_secret"),"."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"About the Api-Key")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"Api-Key")," must not be shared in any way and must be stored securely on their servers."))),Object(r.b)("h3",{id:"generating-a-charge-to-the-users-wallet"},"Generating a charge to the user's wallet"),Object(r.b)("p",null,"With a valid ",Object(r.b)("inlineCode",{parentName:"p"},"access_token"),", the process of generating a charge on the customer's wallet is extremely simple. The charge must be generated by the end-point ",Object(r.b)("inlineCode",{parentName:"p"},"v1/payments/charge"),", indicating the amount to be debited in the body of the request. In the example below, we are requesting the charge of BRL 3.00 to the user's wallet."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"\ncurl --location --request POST 'https://api.picpay.com/v1/payments/charge' \\\n--header 'Api-Key: {{api_key}}' \\\n--header 'Authorization: Bearer {access_token}' \\\n--header 'Content-Type: application/json' \\\n--data '{\"value\":3}'\n\n")),Object(r.b)("p",null,"Below is an example of a successful return. The ",Object(r.b)("inlineCode",{parentName:"p"},"transaction_id")," must be saved as it is the key for reversal processes."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "transaction_id": "246599282",\n    "created_at": "2021-02-22 19:29:16"\n}\n')),Object(r.b)("h4",{id:"what-will-be-the-origin-of-the-funds"},"What will be the origin of the funds?"),Object(r.b)("p",null,"The charge amount may be debited from the credit card, balance or both (balance + card). If the customer has the ",Object(r.b)("em",{parentName:"p"},"Use balance")," option enabled in the App, we will first consume the user's balance and later (if there is not enough balance), charge the card."),Object(r.b)("p",null,"Example: I'm making a purchase of R$60, I have a balance of R$19 in my wallet. PicPay will consume R$19 and charge the registered card for R$41."),Object(r.b)("h4",{id:"error-messages"},"Error Messages"),Object(r.b)("p",null,"We do not report error codes on transaction returns. We only inform you if the transaction was approved or not."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "message":"Unauthorized transaction."\n}\n')),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/one-click/guides/refund-payments"},"Requesting a refund"),";"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/one-click/guides/user-info"},"Consulting user information"),";")),Object(r.b)("h2",{id:"getting-help"},"Getting help"),Object(r.b)("p",null,"We hope this article has helped! If you have any questions, you can consult our FAQ or contact us by e-mail : ",Object(r.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com."},"relacionamento-empresas@picpay.com.")," "))}l.isMDXComponent=!0}}]);