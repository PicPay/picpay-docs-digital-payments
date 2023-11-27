(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{128:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var a=n(3),r=(n(0),n(128));const i={id:"refund-payments",title:"Refunding Payments",sidebar_label:"Refunding Payments",hide_title:!1,description:"Learn how to refund payments in our PicPay 1-Click solution",keywords:["PicPay 1-Click","Refund","Login"]},o={unversionedId:"one-click-en/guides/refund-payments",id:"one-click-en/guides/refund-payments",isDocsHomePage:!1,title:"Refunding Payments",description:"Learn how to refund payments in our PicPay 1-Click solution",source:"@site/docs/one-click-en/guides/refund-payments.md",slug:"/one-click-en/guides/refund-payments",permalink:"/picpay-docs-digital-payments/one-click-en/guides/refund-payments",editUrl:"https://github.com/picpay/picpay-docs-digital-payments/tree/main/docs/one-click-en/guides/refund-payments.md",version:"current",sidebar_label:"Refunding Payments",sidebar:"pagamentoLogadoenglish",previous:{title:"Payments Processing",permalink:"/picpay-docs-digital-payments/one-click-en/guides/process-payments"},next:{title:"Getting User Information",permalink:"/picpay-docs-digital-payments/one-click-en/guides/user-info"}},c=[{value:"About this guide",id:"about-this-guide",children:[]},{value:"Before Starting",id:"before-starting",children:[]},{value:"How It works",id:"how-it-works",children:[{value:"Authentication",id:"authentication",children:[]},{value:"Requesting a refund of a charge to the user&#39;s wallet",id:"requesting-a-refund-of-a-charge-to-the-users-wallet",children:[]}]},{value:"Next Steps",id:"next-steps",children:[]},{value:"Getting help",id:"getting-help",children:[]}],s={toc:c};function l(e){let{components:t,...n}=e;return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"about-this-guide"},"About this guide"),Object(r.b)("p",null,"In this guide, we will describe the step-by-step process for you to request refunds for payments generated by our logged-in payment solution."),Object(r.b)("h2",{id:"before-starting"},"Before Starting"),Object(r.b)("p",null,"Before processing online payments by our ",Object(r.b)("strong",{parentName:"p"},"PicPay 1-Click")," solution, you must have a valid, non-expired access_token. You can check how to generate your tokens ",Object(r.b)("a",{parentName:"p",href:"/one-click/guides/oauth2-flow"},"in this article"),"."),Object(r.b)("h2",{id:"how-it-works"},"How It works"),Object(r.b)("h3",{id:"authentication"},"Authentication"),Object(r.b)("p",null,"In addition to the ",Object(r.b)("inlineCode",{parentName:"p"},"access_token"),", generated dynamically, the payment end-point needs an ",Object(r.b)("inlineCode",{parentName:"p"},"Api-Key")," that will be informed with your ",Object(r.b)("inlineCode",{parentName:"p"},"client_id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"client_secret"),"."),Object(r.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"about the Api-Key")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"Api-Key")," must not be shared in any way and must be stored securely on their servers.\n"))),Object(r.b)("h3",{id:"requesting-a-refund-of-a-charge-to-the-users-wallet"},"Requesting a refund of a charge to the user's wallet"),Object(r.b)("p",null,"The refund request must be generated with the ",Object(r.b)("inlineCode",{parentName:"p"},"transaction_id")," by the end-point ",Object(r.b)("inlineCode",{parentName:"p"},"v1/payments/{{transaction_id}}/refund"),", indicating the amount to be refunded in the body of the request. In the example below, we are requesting a refund of BRL 3.00 in the user's wallet."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Information")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("inlineCode",{parentName:"p"},"transaction_id")," is generated when creating the payment."))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'https://api.picpay.com/v1/payments/{{transaction_id}}/refund' \\\n--header  'Api-Key: {{api_key}}' \\\n--header 'Authorization: Bearer {access_token}' \\\n--header 'Content-Type: application/json' \\\n--data '{\"value\":3}'\n")),Object(r.b)("p",null,"If the request is successfully processed, it will return an HTTP code 204"),Object(r.b)("h4",{id:"how-will-the-refund-be-made"},"How will the refund be made?"),Object(r.b)("p",null,"The balance will be returned to the same place where the funds originated:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If the transaction was made by credit card, it will be reversed on the card;"),Object(r.b)("li",{parentName:"ul"},"If the transaction was made in the balance, the balance will return to the customer's wallet;"),Object(r.b)("li",{parentName:"ul"},"If the transaction is mixed (Balance + Card), part will return as balance in the wallet and part will be reversed on the card;")),Object(r.b)("h4",{id:"error-messages"},"Error messages"),Object(r.b)("p",null,"We do not report error codes in the chargeback process. We only inform if the transaction was reversed or not. Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "Transaction could not be refund"\n}\n')),Object(r.b)("h2",{id:"next-steps"},"Next Steps"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/one-click/guides/user-info"},"Consulting user informations"),";")),Object(r.b)("h2",{id:"getting-help"},"Getting help"),Object(r.b)("p",null,"We hope this article has helped! If you have any questions, you can consult our FAQ or contact us by email:\n",Object(r.b)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com."},"relacionamento-empresas@picpay.com.")," "))}l.isMDXComponent=!0}}]);