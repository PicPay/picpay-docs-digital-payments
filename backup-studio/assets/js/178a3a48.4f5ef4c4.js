"use strict";(self.webpackChunkpicpay_frontend=self.webpackChunkpicpay_frontend||[]).push([[9787],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=s(a),p=r,f=d["".concat(l,".").concat(p)]||d[p]||u[p]||o;return a?n.createElement(f,c(c({ref:t},m),{},{components:a})):n.createElement(f,c({ref:t},m))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64727:(e,t,a)=>{a.d(t,{jL:()=>c,su:()=>M,y:()=>U,cW:()=>B});var n=a(67294),r=a(86010);const o={bannerContainer:"bannerContainer_ZA0+",home:"home_yg62",bannerInfos:"bannerInfos_HwCp",reverse:"reverse_cJZX",bannerImgPrincipal:"bannerImgPrincipal_OrEN",bannerActions:"bannerActions_bE0n","fade-in":"fade-in_siMU",bannerImgMobile:"bannerImgMobile_qePK",bannerInfosTitle:"bannerInfosTitle_4aGz",bannerInfosDescription:"bannerInfosDescription_lpnW",bannerContent:"bannerContent_ptNr"};function c(e){var t=e.bgColor,a=e.height,c=e.reverse,i=e.children;return n.createElement("section",{className:(0,r.Z)(o.banner),role:"banner",style:{backgroundColor:t}},n.createElement("div",{className:(0,r.Z)(o.bannerContent)},n.createElement("div",{className:(0,r.Z)(o.bannerContainer,c?o.reverse:o.home),style:{height:a}},i)))}var i=a(40488),l=a(15861),s=a(87757),m=a.n(s),u=a(51015),d=a(17189),p=a(83253),f=a.n(p),b=a(10999),g=a(25276);const v="feedback_Kxgv",h="feedbackHeader_mefI",E="feedbackHeaderImage_q7GU",k="feedbackContent_bmmq",y="feedbackContentTitle_6Jad",_="feedbackContentDisclaimer_OLIA",O="feedbackActions_cw7N";var C=function(e){var t=e.onCancel;return n.createElement("div",null,n.createElement("header",{className:h},n.createElement("img",{alt:"Feedback header",className:E,src:"/img/success.png"})),n.createElement("div",{className:k},n.createElement("h3",{className:y},"N\xf3s recebemos os seus dados e entraremos em contato em breve!"),n.createElement("p",{className:_},"Voc\xea ir\xe1 receber em breve um e-mail confirmando esse contato e nossa equipe entrar\xe1 em contato o mais r\xe1pido possivel por e-mail ou telefone para te ajudar!")),n.createElement("div",{className:O},n.createElement(g.X,{id:"btn_contact_close_form_success",onClick:function(){return t("BOTAO_CONTATO_SUCESSO","SUCESSO_FORMULARIO_CONTATO")},size:"sm",role:"button"},"Ok, Entendi")))},N=function(e){var t=e.onCancel,a=e.onReset;return n.createElement("div",null,n.createElement("header",{className:h},n.createElement("img",{alt:"Feedback header",className:E,src:"/img/error.svg"})),n.createElement("div",{className:k},n.createElement("h3",{className:y},"Algo deu errado!"),n.createElement("p",{className:_},"Tivemos um problema para enviar os seus dados para nossa equipe. Por favor, volte e envie o formul\xe1rio novamente para que possamos entrar em contato o mais r\xe1pido poss\xedvel")),n.createElement("div",{className:O},n.createElement("div",null," ",n.createElement(g.X,{type:"button",id:"btn_contact_close_form_try_again",onClick:a,size:"md",role:"button"},"Tentar novamente")),n.createElement(g.X,{type:"button",id:"btn_contact_close_form_error",onClick:function(){return t("BOTAO_ERRO_FECHAR_JANELA_CONTATO","ERRO_FORMULARIO_CONTATO")},variant:"link",size:"sm",role:"button"},"Fechar janela")))},x=function(e){var t=e.formSentSuccess,a=e.onCancel,r=e.onReset;return n.createElement("div",{className:v},t?n.createElement(C,{onCancel:a}):n.createElement(N,{onReset:r,onCancel:a}))},T=a(87462),A=a(42283),F=a(28834),I=a(19501),S=I.Ry().shape({name:I.Z_().required("Nome \xe9 obrigat\xf3rio!").min(3,"A quantidade m\xednima de caracteres \xe9 3").max(100,"A quantidade m\xe1xima de caracteres \xe9 100"),email:I.Z_().required("E-mail \xe9 obrigat\xf3rio!").email("E-mail inv\xe1lido!").max(150,"A quantidade m\xe1xima de caracteres \xe9 150"),phone:I.Z_().required("Telefone \xe9 obrigat\xf3rio!").max(15,"A quantidade m\xe1xima de caracteres \xe9 15"),tag:I.Z_().required("Assunto \xe9 obrigat\xf3rio!").notOneOf(["default"]),body:I.Z_().required("Mensagem \xe9 obrigat\xf3ria!").min(3,"A quantidade m\xednima de caracteres \xe9 3").max(200,"A quantidade m\xe1xima de caracteres \xe9 200"),terms:I.O7().required("Aceite dos termos \xe9 obrigat\xf3rio!").oneOf([!0])}),R={resolver:(0,F.X)(S)};const P={contact:"contact_eL51",contactHeader:"contactHeader_Rs8+",contactDisclaimer:"contactDisclaimer_MU7V",contactForm:"contactForm_qEyS",contactFormWrapper:"contactFormWrapper_+Sq2",contactFormArrow:"contactFormArrow_lhce",contactFormTextInput:"contactFormTextInput_YYbS",contactFormSelectContainer:"contactFormSelectContainer_hyPf",contactFormSelectLabel:"contactFormSelectLabel_ejaO",contactFormSelectInput:"contactFormSelectInput_vKoS",contactFormSelectInputError:"contactFormSelectInputError_+9CW",contactFormCheckboxField:"contactFormCheckboxField_81Xq",contactFormCheckboxLabel:"contactFormCheckboxLabel_W24E",contactFormCheckboxLabelError:"contactFormCheckboxLabelError_+uFG",contactFormActionContainer:"contactFormActionContainer_MXU6",contactFormError:"contactFormError_vtf8",contactFormTerms:"contactFormTerms_irIn",contactFormIcon:"contactFormIcon_eO1I"};var w=function(e){var t,a,o,c,i=e.user,l=e.onCancel,s=e.setCurrentTag,m=e.slug,u=e.doc,d=e.isFormLoading,p=e.onSubmit,f=(0,n.useState)(),v=f[0],h=f[1],E=(0,A.cI)(R),k=E.register,y=E.handleSubmit,_=E.formState,O=E.setValue,C=_.errors,N=_.isSubmitted,x=_.isSubmitting;return i&&(O("name",i.attributes.name[0]),O("email",i.email)),(0,n.useEffect)((function(){b.ZI.getTags(m);var e=(0,b.Sr)(u).subscribe((function(e){h(e)}));return function(){e.unsubscribe()}}),[m,u]),n.createElement("div",{className:P.contact},n.createElement("header",{className:P.contactHeader},n.createElement("div",null,n.createElement("h2",{className:P.contactHeaderTitle,id:"dialog1Title"},i?"Habilitar um projeto":"Solicite contato"))),n.createElement("h3",{className:P.contactDisclaimer},"Preencha o formul\xe1rio e nossa equipe entrar\xe1 em contato em breve"),n.createElement("form",{className:P.contactForm,onSubmit:y(p),autoComplete:"off","aria-label":"form"},!i&&n.createElement(n.Fragment,null,n.createElement(g.VK,(0,T.Z)({name:"name",idElement:"name",label:"Nome",size:"md",maxLength:"100",type:"text",inputmode:"text",className:P.contactFormTextInput},k("name"),{helperText:null==(t=C.name)?void 0:t.message,invalid:!!C.name,onApolloChange:function(e){return O("name",e.detail,{shouldValidate:!0})},"data-mdc-dialog-initial-focus":!0,"aria-label":"nome",role:"textbox"})),n.createElement(g.VK,(0,T.Z)({"aria-label":"email",name:"email",idElement:"email",label:"Email comercial",size:"md",maxLength:"150",type:"email",inputmode:"email",className:P.contactFormTextInput},k("email"),{helperText:null==(a=C.email)?void 0:a.message,invalid:!!C.email,onApolloChange:function(e){return O("email",e.detail,{shouldValidate:!0})},role:"textbox"}))),n.createElement(g.VK,(0,T.Z)({mask:"(99) 99999-9999",name:"phone",idElement:"phone",label:"Telefone comercial",size:"md",maxLength:"15",type:"tel",inputmode:"tel",className:P.contactFormTextInput},k("phone"),{helperText:null==(o=C.phone)?void 0:o.message,invalid:!!C.phone,onApolloChange:function(e){return O("phone",e.detail,{shouldValidate:!0})},"aria-label":"telefone",role:"textbox"})),n.createElement("div",{className:P.contactFormWrapper},n.createElement("div",{className:P.contactFormSelectContainer},n.createElement("select",(0,T.Z)({name:"tag",id:"tag",className:(0,r.Z)(P.contactFormSelectInput,N&&C.tag?P.contactFormSelectInputError:"")},k("tag"),{onChange:function(e){return O("tag",e.target.value,{shouldValidate:!0}),s(v[e.target.value])},defaultValue:"default","aria-label":"assunto"}),n.createElement("option",{disabled:!0,value:"default"},"Selecione"),null==v?void 0:v.map((function(e,t){return n.createElement("option",{key:t,value:t},e.subject)}))),n.createElement("label",{className:P.contactFormSelectLabel,htmlFor:"tag"},"Assunto *"),n.createElement(g.RD,{size:"sm",className:(0,r.Z)("material-icon",P.contactFormArrow),svgIcon:"arrows-angle-down-b"})),C.tag&&n.createElement("span",{className:P.contactFormError},n.createElement(g.RD,{"svg-icon":"feedback-danger-alt",size:"sm"})," ",n.createElement(g.RD,null),"Assunto \xe9 obrigat\xf3rio!")),n.createElement(g.VK,(0,T.Z)({name:"body",idElement:"body",label:"Mensagem",size:"md",maxLength:"200",type:"text",className:P.contactFormTextInput},k("body"),{helperText:null==(c=C.body)?void 0:c.message,invalid:!!C.body,onApolloChange:function(e){return O("body",e.detail,{shouldValidate:!0})},"aria-label":"mensagem",role:"textbox"})),n.createElement("div",{className:(0,r.Z)(P.contactFormCheckboxField,C.terms?P.contactFormCheckboxFieldError:"")},n.createElement(g.Hy,{name:"terms",id:"terms",onApolloChange:function(e){return O("terms",e.detail,{shouldValidate:!0})},"aria-label":"termos",role:"checkbox"},n.createElement("label",{className:P.contactFormCheckboxLabel,htmlFor:"terms"},"Eu li e aceito os"," ",n.createElement("a",{href:"https://picpay.com/site/privacidade",target:"_blank",rel:"noreferrer"},"termos de privacidade"))),C.terms&&n.createElement("span",{className:(0,r.Z)(P.contactFormError,P.contactFormTerms)},n.createElement(g.RD,{"svg-icon":"feedback-danger-alt",size:"sm",className:P.contactFormIcon}),n.createElement(g.RD,null),"Aceite dos termos \xe9 obrigat\xf3rio!")),n.createElement("div",{className:P.contactFormActionContainer},n.createElement(g.X,{id:"btn_contact_form_close",onClick:function(){return l("BOTAO_CANCELAR_CONTATO","FORMULARIO_CONTATO")},variant:"link",size:"sm","aria-label":"cancelar",role:"button"},"Cancelar"),n.createElement(g.X,{id:"btn_contact_form_submit",type:"submit",size:"sm","aria-label":"confirmar",role:"button",loading:d||x},"Solicitar contato"))))};const Z="modalContent_m-Bc",j="modalOverlay_zFse",q="modalClose_yYT9";function L(e){var t=e.id,a=e.user,o=e.slug,c=e.doc,i=(0,n.useState)(),s=i[0],p=i[1],v=(0,n.useState)("not-sent"),h=v[0],E=v[1],k="sent-success"===h||"sent-error"===h,y="sent-success"===h,_="loading"===h,O=(0,n.useState)(!1),C=O[0],N=O[1];function T(e,t){E("not-sent"),d.q$.track("Button Clicked",{button_name:e,page_name:"STUDIO_PICPAY_"+F(c),context:""+t}),N(!1)}var A=function(){var e=(0,l.Z)(m().mark((function e(t){var a;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:E("loading"),a=Object.assign({},t,s),b.ZI.sendContact(a).pipe((0,u.q)(1)).subscribe((function(e){E("sent-success"),d.q$.track("Button Clicked",{button_name:"BOTAO_ENVIAR_CONTATO",page_name:"STUDIO_PICPAY_"+F(c),context:"SUCESSO_FORMULARIO_CONTATO"})}),(function(e){E("sent-error"),d.q$.track("Button Clicked",{button_name:"BOTAO_ENVIAR_CONTATO",page_name:"STUDIO_PICPAY_"+F(c),context:"ERRO_FORMULARIO_CONTATO"})}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();function F(e){return e.toLocaleUpperCase()}return n.createElement(n.Fragment,null,n.createElement(g.X,{class:"btn-white",variant:"primary",id:(0,r.Z)("btn_contact_"+t),role:"button",onClick:function(){var e=F(c);d.q$.track("Button Clicked",{button_name:"BOTAO_CONTATO_"+e,page_name:"STUDIO_PICPAY_"+e,context:e}),N(!0)}},n.createElement(g.RD,{slot:"leading-icon","svg-icon":"security-key-skeleton",size:"sm"})," Usar este produto"),n.createElement(f(),{isOpen:C,onRequestClose:T,overlayClassName:j,className:Z,role:"dialog"},n.createElement(g.Fy,{className:q,icon:"interface-multiply","icon-pack":"interface","aria-label":"Fechar janela",size:"md",role:"button",onClick:function(){return T("BOTAO_FECHAR_CONTATO","FORMULARIO_CONTATO")}}),n.createElement(g.To,{"align-items":"center",justify:"center"},k?n.createElement(x,{formSentSuccess:y,onCancel:T,onReset:function(){E("not-sent"),d.q$.track("Button Clicked",{button_name:"BOTAO_TENTAR_NOVAMENTE_CONTATO",page_name:"STUDIO_PICPAY_"+F(c),context:"ERRO_TENTA_NOVAMENTE_CONTATO"})}}):n.createElement(w,{user:a,onSubmit:A,setCurrentTag:p,onCancel:T,slug:o,doc:c,isFormLoading:_}))))}var D=a(77409);function M(e){var t=e.id,a=e.doc,c=e.slug,l=(0,D.m)(i.Qs)[0];return n.createElement("div",{className:(0,r.Z)(o.bannerActions)},n.createElement(L,{user:l,doc:a,slug:c,id:t}))}function U(e){var t=e.color,a=e.title,c=e.description;return n.createElement("div",{className:(0,r.Z)(o.bannerInfos,"container"),style:{color:t}},n.createElement("h1",{className:(0,r.Z)(o.bannerInfosTitle)},a),n.createElement("p",{className:(0,r.Z)(o.bannerInfosDescription)},c))}var V=a(98483);function B(e){var t=e.imageUrl,a=e.altImage,c=e.heightImage,i=e.widthImage,l=e.haveBackgroundMobile;return(0,D.m)(V.K)[0]?n.createElement("div",{className:(0,r.Z)(o.bannerImgMobile),id:"mobile-image",style:{backgroundImage:'url("'+t+'")',display:l?"block":"none"}}):n.createElement("div",{className:(0,r.Z)(o.bannerImgPrincipal),id:"desktop-image"},n.createElement("img",{src:t,alt:a,style:{height:c,width:i}}))}},40488:(e,t,a)=>{a.d(t,{Qs:()=>c,kC:()=>i,x9:()=>l});var n=a(99016),r=a(92420),o=(0,n.MM)(r.M),c=(o.select("token"),o.select("user")),i=(o.select("logged"),o.selectLoading()),l=o.select("keycloakInitialized")},92420:(e,t,a)=>{a.d(t,{M:()=>n});var n=(0,a(99016).Ev)({token:void 0,user:void 0,logged:!1,keycloakInitialized:!1},{name:"auth"})},25276:(e,t,a)=>{a.d(t,{Qk:()=>b,bf:()=>g,X:()=>v,BB:()=>h,e6:()=>E,Nz:()=>k,Zr:()=>y,K8:()=>_,Hy:()=>O,bJ:()=>C,To:()=>N,vV:()=>x,RD:()=>T,Fy:()=>A,RE:()=>F,VK:()=>I});var n=a(63366),r=a(43144),o=a(94578),c=a(67294),i=a(87462),l=function(e,t,a){var n=t.className||t.class,r=a.className||a.class,o=u(e),c=u(n?n.split(" "):[]),i=u(r?r.split(" "):[]),l=[];return o.forEach((function(e){c.has(e)?(l.push(e),c.delete(e)):i.has(e)||l.push(e)})),c.forEach((function(e){return l.push(e)})),l.join(" ")},s=function(e,t){var a="on"+e,n=a in t;if(!n){var r=t.createElement("div");r.setAttribute(a,"return;"),n="function"==typeof r[a]}return n},m=function(e,t,a){var n=e.__events||(e.__events={}),r=n[t];r&&e.removeEventListener(t,r),e.addEventListener(t,n[t]=function(e){a&&a.call(this,e)})},u=function(e){var t=new Map;return e.forEach((function(e){return t.set(e,e)})),t},d=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.forEach((function(t){"function"==typeof t?t(e):null!=t&&(t.current=e)}))}},p=["children","forwardedRef","style","className","ref"],f=function(e,t,a){var u=e.toLowerCase().split("-").map((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})).join(""),f=function(t){function i(e){var a;return(a=t.call(this,e)||this).setComponentElRef=function(e){a.componentEl=e},a}(0,o.Z)(i,t);var f=i.prototype;return f.componentDidMount=function(){this.componentDidUpdate(this.props)},f.componentDidUpdate=function(e){!function(e,t,a){if(void 0===a&&(a={}),e instanceof Element){var n=l(e.classList,t,a);""!==n&&(e.className=n),Object.keys(t).forEach((function(a){if("children"!==a&&"style"!==a&&"ref"!==a&&"class"!==a&&"className"!==a&&"forwardedRef"!==a)if(0===a.indexOf("on")&&a[2]===a[2].toUpperCase()){var n=a.substring(2),r=n[0].toLowerCase()+n.substring(1);"undefined"==typeof document||s(r,document)||m(e,r,t[a])}else e[a]=t[a],"string"==typeof t[a]?e.setAttribute(a.replace(/([A-Z])/g,(function(e){return"-"+e[0].toLowerCase()})),t[a]):e[a]=t[a]}))}}(this.componentEl,this.props,e)},f.render=function(){var t=this.props,r=t.children,o=t.forwardedRef,i=t.style,l=(t.className,t.ref,(0,n.Z)(t,p)),m=Object.keys(l).reduce((function(e,t){if(0===t.indexOf("on")&&t[2]===t[2].toUpperCase()){var a=t.substring(2).toLowerCase();"undefined"!=typeof document&&s(a,document)&&(e[t]=l[t])}else e[t]=l[t];return e}),{});a&&(m=a(this.props,m));var u=Object.assign({},m,{ref:d(o,this.setComponentElRef),style:i});return c.createElement(e,u,r)},(0,r.Z)(i,null,[{key:"displayName",get:function(){return u}}]),i}(c.Component);return t&&(f.contextType=t),function(e,t){var a=function(t,a){return c.createElement(e,(0,i.Z)({},t,{forwardedRef:a}))};return a.displayName=t,c.forwardRef(a)}(f,u)},b=(a(87757),a(73935),f("apollo-avatar")),g=f("apollo-box"),v=f("apollo-button"),h=f("apollo-card"),E=f("apollo-card-action-buttons"),k=f("apollo-card-actions"),y=f("apollo-card-content"),_=f("apollo-center"),O=f("apollo-checkbox"),C=f("apollo-circular-progress"),N=f("apollo-flex"),x=f("apollo-heading"),T=f("apollo-icon"),A=f("apollo-icon-button"),F=f("apollo-text"),I=f("apollo-textfield")},37140:(e,t,a)=>{a.r(t),a.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>m,toc:()=>u,default:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),c=a(64727),i=["components"],l={id:"overview",title:"Vis\xe3o geral",description:"Aprenda como oferecer pagamentos digitais com PicPay.",slug:"/produtos/e-commerce"},s=void 0,m={unversionedId:"produtos/e-commerce/checkout/intro/overview",id:"produtos/e-commerce/checkout/intro/overview",isDocsHomePage:!1,title:"Vis\xe3o geral",description:"Aprenda como oferecer pagamentos digitais com PicPay.",source:"@site/docs/produtos/e-commerce/checkout/intro/overview.mdx",sourceDirName:"produtos/e-commerce/checkout/intro",slug:"/produtos/e-commerce",permalink:"/produtos/e-commerce",version:"current",frontMatter:{id:"overview",title:"Vis\xe3o geral",description:"Aprenda como oferecer pagamentos digitais com PicPay.",slug:"/produtos/e-commerce"},sidebar:"E-commerce",next:{title:"Como come\xe7ar",permalink:"/produtos/e-commerce/checkout/intro/getting-started"}},u=[{value:"O que \xe9",id:"o-que-\xe9",children:[]},{value:"Taxas",id:"taxas",children:[]},{value:"Funcionalidades dispon\xedveis.",id:"funcionalidades-dispon\xedveis",children:[]},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",children:[]},{value:"Obtendo ajuda",id:"obtendo-ajuda",children:[]}],d={toc:u};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c.jL,{height:"300px",bgColor:"#FFF",reverse:!0,mdxType:"Banner"},(0,o.kt)(c.cW,{imageUrl:"/img/icone-banner-ecommerce.png",altImage:"E-Commerce",widthImage:"200px",heightImage:"200px",haveBackgroundMobile:!1,mdxType:"BannerImage"}),(0,o.kt)(c.y,{title:"E-Commerce",description:"Aceite PicPay no seu e-commerce e fa\xe7a parte do movimento que est\xe1 revolucionando a rela\xe7\xe3o com dinheiro no Brasil",colorText:"rgb(23, 33, 38)",mdxType:"BannerContent"}),(0,o.kt)(c.su,{id:"ecommerce",doc:"e-commerce",slug:"external",mdxType:"BannerActions"})),(0,o.kt)("h2",{id:"o-que-\xe9"},"O que \xe9"),(0,o.kt)("p",null,"Nosso e-commerce \xe9 um plataforma oferecida para quem vende pela internet e quer faturar mais. Voc\xea ainda pode aproveitar nossa rede com mais de 47 milh\xf5es de usu\xe1rios!"),(0,o.kt)("p",null,"Oferecendo PicPay no seu e-commerce, seus clientes efetuam o pagamento de forma segura diretamente em seu aplicativo. Voc\xea pode criar uma conta como pessoa f\xedsica ou jur\xeddica."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:a(58846).Z})),(0,o.kt)("h2",{id:"taxas"},"Taxas"),(0,o.kt)("p",null,"Voc\xea n\xe3o paga taxa de ades\xe3o ou de cancelamento e seus primeiros 30 dias s\xe3o gratuitos! Nos meses seguintes, \xe9 s\xf3 escolher a taxa que melhor se adapta ao seu momento e quando quer receber, e vamos solicitar o pagamento de uma taxa de intermedia\xe7\xe3o."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"DIAS A RECEBER"),(0,o.kt)("th",{parentName:"tr",align:null},"TAXA"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("apollo-text",{color:"primary.base"},(0,o.kt)("strong",{parentName:"td"},"1 dia"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("apollo-text",{color:"primary.base"},(0,o.kt)("strong",{parentName:"td"},"5,19%")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("apollo-text",{color:"primary.base"},(0,o.kt)("strong",{parentName:"td"},"14 dias"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("apollo-text",{color:"primary.base"},(0,o.kt)("strong",{parentName:"td"},"4,61%")))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("apollo-text",{color:"primary.base"},(0,o.kt)("strong",{parentName:"td"},"30 dias"))),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("apollo-text",{color:"primary.base"},(0,o.kt)("strong",{parentName:"td"},"3,89%")))))),(0,o.kt)("h2",{id:"funcionalidades-dispon\xedveis"},"Funcionalidades dispon\xedveis."),(0,o.kt)("p",null,"Atualmente, a API de e-commerce do PicPay oferece as seguintes funcionalidades:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gera\xe7\xe3o de link de redirecionamento com QR Code;"),(0,o.kt)("li",{parentName:"ul"},"Gera\xe7\xe3o de QR Code para ser exibido dentro e-commerce e evitar o redirecionamento;"),(0,o.kt)("li",{parentName:"ul"},"Cancelamento de ordens n\xe3o pagas;"),(0,o.kt)("li",{parentName:"ul"},"Estorno total de ordens pagas;"),(0,o.kt)("li",{parentName:"ul"},"Consulta de status;")),(0,o.kt)("p",null,"Saiba mais sobre cada funcionalidade nos nossos guias ao longo desta p\xe1gina."),(0,o.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/produtos/e-commerce/checkout/intro/getting-started"},"Como come\xe7ar"),";")),(0,o.kt)("h2",{id:"obtendo-ajuda"},"Obtendo ajuda"),(0,o.kt)("p",null,"Esperamos ter ajudado com este artigo! Caso tenha restado alguma d\xfavida, voc\xea pode consultar o nosso FAQ ou entrar em contato atrav\xe9s do e-mail ",(0,o.kt)("a",{parentName:"p",href:"mailto:relacionamento-empresas@picpay.com"},"relacionamento-empresas@picpay.com")))}p.isMDXComponent=!0},86010:(e,t,a)=>{function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:()=>r})},58846:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/qrcode-5da6617f5130f8eed747c535c7bd3634.png"},43144:(e,t,a)=>{function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),Object.defineProperty(e,"prototype",{writable:!1}),e}a.d(t,{Z:()=>r})}}]);