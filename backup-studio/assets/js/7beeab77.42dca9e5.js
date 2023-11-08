"use strict";(self.webpackChunkpicpay_frontend=self.webpackChunkpicpay_frontend||[]).push([[4118],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return t?n.createElement(d,c(c({ref:r},u),{},{components:t})):n.createElement(d,c({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},42706:(e,r,t)=>{t.d(r,{w:()=>s});var n=t(67294),o=t(86010);const a="pageError_LcbV",c="pageErrorTitle_65rD",i="pageErrorImage_6eha",l="pageErrorContent_R2iw";function s(e){var r=e.title,t=e.children;return n.createElement("main",{className:(0,o.Z)("container",a)},n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},n.createElement("h1",{className:(0,o.Z)(c)},r),n.createElement("img",{className:(0,o.Z)(i),src:"/img/error.svg",alt:"rota n\xe3o encontrada"}),n.createElement("div",{className:(0,o.Z)(l)},t))))}},26552:(e,r,t)=>{t.d(r,{l:()=>l});var n=t(67294),o=t(85874),a=t(25276),c=t(17394),i=t(42706);function l(){var e=(0,c.iB)(),r=e.productIsLoading,t=e.currentSwaggerDoc;return n.createElement("div",{className:"container"},r?n.createElement(a.K8,null,n.createElement(a.bJ,{role:"progressbar","aria-label":"A documenta\xe7\xe3o est\xe1 sendo carregada"})):t?n.createElement(o.Z,{spec:t,docExpansion:"full",defaultModelExpandDepth:1}):n.createElement(i.w,{title:"Refer\xeancias da API - Algo deu errado!"},n.createElement("p",null,"N\xe3o conseguimos carregar os dados da API. ",n.createElement("br",null)," Tente novamente mais tarde ou entre em contato com nosso suporte.")))}},25276:(e,r,t)=>{t.d(r,{Qk:()=>y,bf:()=>v,X:()=>b,BB:()=>g,e6:()=>h,Nz:()=>E,Zr:()=>w,K8:()=>O,Hy:()=>k,bJ:()=>j,To:()=>x,vV:()=>P,RD:()=>N,Fy:()=>C,RE:()=>D,VK:()=>Z});var n=t(63366),o=t(43144),a=t(94578),c=t(67294),i=t(87462),l=function(e,r,t){var n=r.className||r.class,o=t.className||t.class,a=p(e),c=p(n?n.split(" "):[]),i=p(o?o.split(" "):[]),l=[];return a.forEach((function(e){c.has(e)?(l.push(e),c.delete(e)):i.has(e)||l.push(e)})),c.forEach((function(e){return l.push(e)})),l.join(" ")},s=function(e,r){var t="on"+e,n=t in r;if(!n){var o=r.createElement("div");o.setAttribute(t,"return;"),n="function"==typeof o[t]}return n},u=function(e,r,t){var n=e.__events||(e.__events={}),o=n[r];o&&e.removeEventListener(r,o),e.addEventListener(r,n[r]=function(e){t&&t.call(this,e)})},p=function(e){var r=new Map;return e.forEach((function(e){return r.set(e,e)})),r},f=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return function(e){return r.forEach((function(r){"function"==typeof r?r(e):null!=r&&(r.current=e)}))}},m=["children","forwardedRef","style","className","ref"],d=function(e,r,t){var p=e.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(""),d=function(r){function i(e){var t;return(t=r.call(this,e)||this).setComponentElRef=function(e){t.componentEl=e},t}(0,a.Z)(i,r);var d=i.prototype;return d.componentDidMount=function(){this.componentDidUpdate(this.props)},d.componentDidUpdate=function(e){!function(e,r,t){if(void 0===t&&(t={}),e instanceof Element){var n=l(e.classList,r,t);""!==n&&(e.className=n),Object.keys(r).forEach((function(t){if("children"!==t&&"style"!==t&&"ref"!==t&&"class"!==t&&"className"!==t&&"forwardedRef"!==t)if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){var n=t.substring(2),o=n[0].toLowerCase()+n.substring(1);"undefined"==typeof document||s(o,document)||u(e,o,r[t])}else e[t]=r[t],"string"==typeof r[t]?e.setAttribute(t.replace(/([A-Z])/g,(function(e){return"-"+e[0].toLowerCase()})),r[t]):e[t]=r[t]}))}}(this.componentEl,this.props,e)},d.render=function(){var r=this.props,o=r.children,a=r.forwardedRef,i=r.style,l=(r.className,r.ref,(0,n.Z)(r,m)),u=Object.keys(l).reduce((function(e,r){if(0===r.indexOf("on")&&r[2]===r[2].toUpperCase()){var t=r.substring(2).toLowerCase();"undefined"!=typeof document&&s(t,document)&&(e[r]=l[r])}else e[r]=l[r];return e}),{});t&&(u=t(this.props,u));var p=Object.assign({},u,{ref:f(a,this.setComponentElRef),style:i});return c.createElement(e,p,o)},(0,o.Z)(i,null,[{key:"displayName",get:function(){return p}}]),i}(c.Component);return r&&(d.contextType=r),function(e,r){var t=function(r,t){return c.createElement(e,(0,i.Z)({},r,{forwardedRef:t}))};return t.displayName=r,c.forwardRef(t)}(d,p)},y=(t(87757),t(73935),d("apollo-avatar")),v=d("apollo-box"),b=d("apollo-button"),g=d("apollo-card"),h=d("apollo-card-action-buttons"),E=d("apollo-card-actions"),w=d("apollo-card-content"),O=d("apollo-center"),k=d("apollo-checkbox"),j=d("apollo-circular-progress"),x=d("apollo-flex"),P=d("apollo-heading"),N=d("apollo-icon"),C=d("apollo-icon-button"),D=d("apollo-text"),Z=d("apollo-textfield")},16391:(e,r,t)=>{t.r(r),t.d(r,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>u,toc:()=>p,default:()=>m});var n=t(87462),o=t(63366),a=(t(67294),t(3905)),c=t(26552),i=["components"],l={id:"api-reference",title:"API Reference"},s=void 0,u={unversionedId:"produtos/e-commerce/checkout/resources/api-reference",id:"produtos/e-commerce/checkout/resources/api-reference",isDocsHomePage:!1,title:"API Reference",description:"",source:"@site/docs/produtos/e-commerce/checkout/resources/api-reference.mdx",sourceDirName:"produtos/e-commerce/checkout/resources",slug:"/produtos/e-commerce/checkout/resources/api-reference",permalink:"/produtos/e-commerce/checkout/resources/api-reference",version:"current",frontMatter:{id:"api-reference",title:"API Reference"},sidebar:"E-commerce",previous:{title:"Magento",permalink:"/produtos/e-commerce/checkout/plugins/magento"},next:{title:"Postman Collection",permalink:"/produtos/e-commerce/checkout/resources/postman"}},p=[],f={toc:p};function m(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)(c.l,{doc:"e-commerce",mdxType:"SwaggerComponent"}))}m.isMDXComponent=!0},86010:(e,r,t)=>{function n(e){var r,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(o&&(o+=" "),o+=t);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}function o(){for(var e,r,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(o&&(o+=" "),o+=r);return o}t.d(r,{Z:()=>o})},43144:(e,r,t)=>{function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function o(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),Object.defineProperty(e,"prototype",{writable:!1}),e}t.d(r,{Z:()=>o})}}]);