"use strict";(self.webpackChunkpicpay=self.webpackChunkpicpay||[]).push([[9848],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,y=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(y,o(o({ref:t},p),{},{components:n})):r.createElement(y,o({ref:t},p))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1193:(e,t,n)=>{n.r(t),n.d(t,{default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={id:"idempotency-key",title:"Idempotency",sidebar_label:"Idempotency",hide_title:!1,description:"Learn how Idempotency works in PicPay 1-Click",keywords:["PicPay 1-Click","Information","Idempotency","Idempotency-Key","API"]},o={unversionedId:"one-click/guides/idempotency-key",id:"one-click/guides/idempotency-key",isDocsHomePage:!1,title:"Idempotency",description:"Learn how Idempotency works in PicPay 1-Click",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/one-click/guides/idempotency-key.md",sourceDirName:"one-click/guides",slug:"/one-click/guides/idempotency-key",permalink:"/picpay-docs-digital-payments/en/one-click/guides/idempotency-key",version:"current",sidebar_label:"Idempotency",frontMatter:{id:"idempotency-key",title:"Idempotency",sidebar_label:"Idempotency",hide_title:!1,description:"Learn how Idempotency works in PicPay 1-Click",keywords:["PicPay 1-Click","Information","Idempotency","Idempotency-Key","API"]},sidebar:"walletPicPay",previous:{title:"Getting User Information",permalink:"/picpay-docs-digital-payments/en/one-click/guides/user-info"},next:{title:"API Reference",permalink:"/picpay-docs-digital-payments/en/one-click/resources/api-reference"}},l=[{value:"About this guide",id:"about-this-guide",children:[]},{value:"Before Starting",id:"before-starting",children:[]},{value:"How It works",id:"how-it-works",children:[]},{value:"Next steps",id:"next-steps",children:[]},{value:"Getting help",id:"getting-help",children:[]}],c={toc:l},s="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"about-this-guide"},"About this guide"),(0,a.kt)("p",null,"In this guide we will describe how Idempotence works in ",(0,a.kt)("strong",{parentName:"p"},"PicPay 1-Click"),"."),(0,a.kt)("h2",{id:"before-starting"},"Before Starting"),(0,a.kt)("p",null,"Before processing online payments by our ",(0,a.kt)("strong",{parentName:"p"},"PicPay 1-Click")," solution, you must have a valid, non-expired ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token"),". You can check how to generate your tokens ",(0,a.kt)("a",{parentName:"p",href:"/one-click/guides/oauth2-flow"},"neste artigo"),"."),(0,a.kt)("h2",{id:"how-it-works"},"How It works"),(0,a.kt)("p",null,"Idempotence works as a way to prevent the same request from being executed twice, thus ensuring that the same event is not launched twice, ensuring the consistency of the data sent.\nIt is used by sending the ",(0,a.kt)("inlineCode",{parentName:"p"},"x-Idempotency-Key")," header with a value in string format with a size limit in payment and refund requests."),(0,a.kt)("h3",{id:""}),(0,a.kt)("p",null,"This value will be used as a key to retrieve the result of the same request. This way, if the client has doubts about whether a particular request was accepted or not, it can simply execute the request again with the same value in the ",(0,a.kt)("inlineCode",{parentName:"p"},"x-Idempotency-Key")," header."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If there is a request that has already been processed, we will repeat the same result without processing the request again, thus, there will be no duplication of payment or refund."),(0,a.kt)("li",{parentName:"ul"},"If there is no request already processed for the sent key, we will process the request normally.")),(0,a.kt)("p",null,"If there is any type of processing in progress at the time of the request (billing or refund) for that same key, we will return the HTTP status code 208 - Already Reported. It is necessary to repeat the call to be sure that the operation has been completed."),(0,a.kt)("p",null,"It is important to note that if the error is of the retryable type, a new request with the same idempotency key will result in a retry of the request. If the error is not retryable, the result of the request for the same ",(0,a.kt)("inlineCode",{parentName:"p"},"x-Idempotency-Key")," will always be the same."),(0,a.kt)("p",null,"The following table contains a classification of error types that cannot be retried."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Erro Type PicPay"),(0,a.kt)("th",{parentName:"tr",align:null},"Status Code"),(0,a.kt)("th",{parentName:"tr",align:null},"Message"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Duplicated_Transaction"),(0,a.kt)("td",{parentName:"tr",align:null},"(400) Bad Request"),(0,a.kt)("td",{parentName:"tr",align:null},"Duplicated transaction")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Funding_source_unavailable"),(0,a.kt)("td",{parentName:"tr",align:null},"(403) Forbidden"),(0,a.kt)("td",{parentName:"tr",align:null},"Funding source unavailable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Insufficient_funds"),(0,a.kt)("td",{parentName:"tr",align:null},"(406) Not Acceptable"),(0,a.kt)("td",{parentName:"tr",align:null},"Insufficient funds")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Invalid_funding_source"),(0,a.kt)("td",{parentName:"tr",align:null},"(406) Not Acceptable"),(0,a.kt)("td",{parentName:"tr",align:null},"Invalid founding source")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Account_closed"),(0,a.kt)("td",{parentName:"tr",align:null},"(406) Not Acceptable"),(0,a.kt)("td",{parentName:"tr",align:null},"The account is closed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Account_on_hold"),(0,a.kt)("td",{parentName:"tr",align:null},"(406) Not Acceptable"),(0,a.kt)("td",{parentName:"tr",align:null},"The account is on hold")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Invalid_Permission_refund"),(0,a.kt)("td",{parentName:"tr",align:null},"(406) Not Acceptable"),(0,a.kt)("td",{parentName:"tr",align:null},"Invalid Permission")))),(0,a.kt)("h2",{id:"next-steps"},"Next steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/one-click/guides/refund-payments"},"Requesting a refund"),";"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/one-click/guides/user-info"},"Consulting user informations"),";")),(0,a.kt)("h2",{id:"getting-help"},"Getting help"),(0,a.kt)("p",null,"We hope this article has helped! If you have any questions, you can consult our FAQ or contact us by e-mail : ",(0,a.kt)("a",{parentName:"p",href:"mailto:atendimento-empresas@picpay.com"},"atendimento-empresas@picpay.com")))}p.isMDXComponent=!0}}]);