(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9195],{50906:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(10821)}])},51318:function(t,e,r){"use strict";var i=r(52322),o=r(61812),a=r(96577),n=r.n(a),s=r(39097),u=r.n(s);r(2784);e.Z=function(t){var e=t.post,r=e.author?e.author.split(","):[],a=[];if(r)for(var s=function(t){a.push(o.find((function(e){return e.author_id===r[t]})))},l=0;l<r.length;l++)s(l);return(0,i.jsx)("div",{children:(0,i.jsx)(u(),{href:e.path,children:(0,i.jsx)("a",{className:"group inline-block min-w-full",children:(0,i.jsxs)("div",{className:"flex flex-col space-y-6",children:[(0,i.jsxs)("div",{className:"flex flex-col space-y-3",children:[(0,i.jsx)("div",{className:"border-scale-300 relative mb-4 h-60 w-full overflow-auto rounded-lg border shadow-sm",children:(0,i.jsx)(n(),{layout:"fill",src:e.thumb?"casestudy"===e.type?e.thumb:"/images/blog/".concat(e.thumb):"/images/blog/blog-placeholder.png",objectFit:"cover",className:"scale-100 transform duration-100 ease-in group-hover:scale-105",alt:"case study thumbnail"})}),(0,i.jsx)("h3",{className:"text-scale-1200 max-w-sm text-xl",children:e.title}),(0,i.jsx)("p",{className:"text-scale-1100 max-w-sm text-base",children:e.description}),e.date&&(0,i.jsxs)("div",{className:"text-scale-900 flex items-center space-x-1.5 text-sm",children:[(0,i.jsx)("p",{children:e.date}),e.readingTime&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"\u2022"}),(0,i.jsx)("p",{children:e.readingTime})]})]})]}),(0,i.jsx)("div",{className:"flex items-center -space-x-2",children:a.map((function(t,e){return(0,i.jsx)("div",{className:"dark:ring-scale-200 w-10 rounded-full ring-2 ring-white",children:t.author_image_url&&(0,i.jsx)(n(),{src:t.author_image_url,className:"dark:border-dark rounded-full border",alt:"".concat(t.author," avatar"),width:"100%",height:"100%",layout:"responsive"})},e)}))})]})})})})}},10821:function(t,e,r){"use strict";r.r(e),r.d(e,{__N_SSG:function(){return F},default:function(){return B}});var i=r(70865),o=r(50930),a=r(52322),n=r(2784),s=r(5632),u=r(96577),l=r.n(u),c=r(39097),h=r.n(c),p=r(55351),g=r(61812),d=r(86950),m=r(51318),f=r(76635),v=r(52993),b=r(89672),_=r(13980),x=r.n(_);function y(){return y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},y.apply(this,arguments)}function j(t,e){if(null==t)return{};var r,i,o=function(t,e){if(null==t)return{};var r,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var w=(0,n.forwardRef)((function(t,e){var r=t.color,i=void 0===r?"currentColor":r,o=t.size,a=void 0===o?24:o,s=j(t,["color","size"]);return n.createElement("svg",y({ref:e,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("polyline",{points:"6 9 12 15 18 9"}))}));w.propTypes={color:x().string,size:x().oneOfType([x().string,x().number])},w.displayName="ChevronDown";var N=w,k=r(61137);var C=function(t){return(0,a.jsx)(k.Z,(0,i.Z)({icon:N},t))},E=r(29234),O=r(5869),z=r(42893),Z=r(66383);var S=r(5147),L=r(91850),T=r(94589),P=(0,L.E)(v.z),R=function(t){var e,r=t.posts,i=t.setPosts,o=t.setCategory,u=t.allCategories,l=t.handlePosts,c=null===(e=function(){var t=(0,s.useRouter)().query;return(0,n.useMemo)((function(){return Object.fromEntries(Object.entries(t).map((function(t){var e=(0,Z.Z)(t,2),r=e[0],i=e[1];return Array.isArray(i)?[r,i[0]]:[r,i]})))}),[t])}())||void 0===e?void 0:e.category,h=(0,n.useState)(""),p=h[0],g=h[1],d=(0,S.Gc)(1023),m=(0,S.Gc)(1535),_=(0,n.useState)(!1),x=_[0],y=_[1],j=(0,s.useRouter)();(0,n.useEffect)((function(){y(!d)}),[d]),(0,n.useEffect)((function(){p?i(w):l()}),[p]),(0,n.useEffect)((function(){j.isReady&&c&&"all"!==c&&o(c)}),[c,j.isReady]);var w=(0,n.useCallback)((function(){if(p){var t=r.filter((function(t){var e,r,i;return(null===(e=t.tags)||void 0===e?void 0:e.join(" ").replaceAll("-"," ").includes(p.toLowerCase()))||(null===(r=t.title)||void 0===r?void 0:r.toLowerCase().includes(p.toLowerCase()))||(null===(i=t.author)||void 0===i?void 0:i.includes(p.toLowerCase()))}));return t}}),[p]);return(0,a.jsx)("div",{className:"flex flex-row items-center justify-between gap-2",children:(0,a.jsxs)(T.M,{exitBeforeEnter:!0,children:[!x&&(0,a.jsx)(L.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.05}},className:"flex lg:hidden",children:(0,a.jsxs)(b.h_,{children:[(0,a.jsx)(b.$F,{children:(0,a.jsx)(v.z,{type:"outline",iconRight:(0,a.jsx)(C,{}),className:"w-full min-w-[200px] flex justify-between items-center py-2",children:c?(0,f.startCase)(null===c||void 0===c?void 0:c.replaceAll("-"," ")):"All Posts"})}),(0,a.jsx)(b.AW,{side:"bottom",align:"start",children:u.map((function(t){return(0,a.jsx)(b.Xi,{onClick:function(){return o(t)},className:["all"===t&&!c||t===c?"text-brand-600":""].join(" "),children:"all"===t?"All Posts":(0,f.startCase)(t.replaceAll("-"," "))},"custom-expiry")}))})]})}),(0,a.jsx)("div",{className:"hidden lg:flex flex-wrap items-center flex-grow gap-2",children:u.map((function(t){return(0,a.jsx)(v.z,{type:"all"!==t||p||c?t===c?"alternative":"outline":"alternative",onClick:function(){return o(t)},size:m?"tiny":"small",children:"all"===t?"All":(0,f.startCase)(t.replaceAll("-"," "))},t)}))}),!x&&(0,a.jsx)(P,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.05}},size:"large",type:"default",onClick:function(){return y(!0)},children:(0,a.jsx)(E.Z,{size:"tiny"})}),x&&(0,a.jsx)(L.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.05}},className:"w-full lg:max-w-[240px] xl:max-w-[280px]",children:(0,a.jsx)(O.Z,{icon:(0,a.jsx)(E.Z,{size:"tiny"}),size:"small",layout:"vertical",autoComplete:"off",type:"search",placeholder:"Search blog",value:p,onChange:function(t){c&&o("all"),g(t.target.value)},className:"w-full",actions:d&&(0,a.jsx)(v.z,{type:"link",onClick:function(){g(""),y(!1)},className:"text-scale-1100 hover:text-scale-1200",children:(0,a.jsx)(z.Z,{size:"tiny"})})})})]})})};function A(t){for(var e=function(t){i.push(g.find((function(e){return e.author_id===r[t]})))},r=t.author.split(","),i=[],o=0;o<r.length;o++)e(o);return(0,a.jsx)("div",{className:"w-full cursor-pointer",children:(0,a.jsx)(h(),{href:"".concat(t.path),children:(0,a.jsxs)("a",{className:"grid gap-8 lg:grid-cols-2 lg:gap-16",children:[(0,a.jsx)("div",{className:"relative h-96 w-full overflow-auto rounded-lg border",children:(0,a.jsx)(l(),{src:"/images/blog/"+(t.thumb?t.thumb:t.image),layout:"fill",objectFit:"cover",alt:"blog thumbnail"})}),(0,a.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,a.jsxs)("div",{className:"text-scale-900 flex space-x-2 text-sm",children:[(0,a.jsx)("p",{children:t.date}),(0,a.jsx)("p",{children:"\u2022"}),(0,a.jsx)("p",{children:t.readingTime})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"h2",children:t.title}),(0,a.jsx)("p",{className:"p text-xl",children:t.description})]}),(0,a.jsx)("div",{className:"grid w-max grid-flow-col grid-rows-4 gap-4",children:i.map((function(t,e){return(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[t.author_image_url&&(0,a.jsx)("div",{className:"relative h-10 w-10 overflow-auto",children:(0,a.jsx)(l(),{src:t.author_image_url,alt:"".concat(t.author," avatar"),className:"rounded-full",layout:"fill",objectFit:"cover"})}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("span",{className:"text-scale-1200 m-0 text-sm",children:t.author}),(0,a.jsx)("span",{className:"text-scale-900 m-0 text-xs",children:t.position})]})]},e)}))})]})]})})},t.slug)}var F=!0,B=function(t){var e=(0,n.useState)(t.blogs),r=e[0],u=e[1],l=(0,n.useState)("all"),c=l[0],h=l[1],g=(0,s.useRouter)(),f="Dijets - Modular L0 Framework for the new Web.",v="Get all your Dijets News on Dijets blog.";(0,n.useEffect)((function(){b()}),[c]);var b=function(){var e=(0,o.Z)(t.blogs);e.shift(),"all"===c?g.replace("/blog",void 0,{shallow:!0,scroll:!1}):(g.query.category=c,g.replace(g,void 0,{shallow:!0,scroll:!1})),u("all"===c?e:t.blogs.filter((function(t){var e;return null===(e=t.categories)||void 0===e?void 0:e.includes(c)})))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.PB,{title:f,description:v,openGraph:{title:f,description:v,url:"https://dijets.io/".concat(g.pathname),images:[{url:"https://dijets.io/images/og/og-image-v2.jpg"}]},additionalLinkTags:[{rel:"alternate",type:"application/rss+xml",href:"https://dijets.io/rss.xml"}]}),(0,a.jsxs)(d.Z,{children:[(0,a.jsx)("h1",{className:"sr-only",children:"Supabase blog"}),(0,a.jsx)("div",{className:"overflow-hidden py-12",children:(0,a.jsx)("div",{className:"container mx-auto mt-16 px-8 sm:px-16 xl:px-20",children:(0,a.jsx)("div",{className:"mx-auto ",children:t.blogs.slice(0,1).map((function(t,e){return(0,a.jsx)(A,(0,i.Z)({},t),e)}))})})}),(0,a.jsx)("div",{className:"border-scale-600 border-t",children:(0,a.jsxs)("div",{className:"container mx-auto mt-16 px-8 sm:px-16 xl:px-20",children:[(0,a.jsx)(R,{posts:r,setPosts:u,setCategory:h,allCategories:["all","services","development","council members","team","dijets inc","announcement"],handlePosts:b}),(0,a.jsx)("ol",{className:"grid grid-cols-12 py-16 lg:gap-16",children:(null===r||void 0===r?void 0:r.length)?null===r||void 0===r?void 0:r.map((function(t,e){return(0,a.jsx)("div",{className:"col-span-12 mb-16 md:col-span-12 lg:col-span-6 xl:col-span-4",children:(0,a.jsx)(m.Z,{post:t})},e)})):(0,a.jsx)("p",{className:"text-sm text-scale-800 col-span-full",children:"No results"})})]})})]})]})}},75445:function(t,e,r){"use strict";var i=r(70865),o=r(52322),a=(r(2784),r(3552)),n=r(61137);e.Z=function(t){return(0,o.jsx)(n.Z,(0,i.Z)({icon:a.Z},t))}},26852:function(t,e,r){"use strict";var i=r(70865),o=r(52322),a=(r(2784),r(35807)),n=r(61137);e.Z=function(t){return(0,o.jsx)(n.Z,(0,i.Z)({icon:a.Z},t))}},29234:function(t,e,r){"use strict";var i=r(70865),o=r(52322),a=(r(2784),r(32465)),n=r(61137);e.Z=function(t){return(0,o.jsx)(n.Z,(0,i.Z)({icon:a.Z},t))}},5869:function(t,e,r){"use strict";r.d(e,{Z:function(){return f}});var i=r(70865),o=r(96670),a=r(26297),n=r(52322),s=r(2784),u=r(26852),l=r(52993),c=r(47978),h=r(79629),p=r(68550),g=r(59642),d=r(19532);function m(t){var e=t.autoComplete,r=t.autoFocus,o=t.className,m=t.inputClassName,f=t.iconContainerClassName,v=t.copy,b=t.defaultValue,_=t.descriptionText,x=t.disabled,y=t.error,j=t.icon,w=t.id,N=void 0===w?"":w,k=t.name,C=void 0===k?"":k,E=t.inputRef,O=t.label,z=t.afterLabel,Z=t.beforeLabel,S=t.labelOptional,L=t.layout,T=t.onChange,P=t.onBlur,R=t.onCopy,A=t.placeholder,F=t.type,B=void 0===F?"text":F,D=t.value,G=void 0===D?void 0:D,M=t.style,W=t.reveal,I=void 0!==W&&W,V=t.actions,J=t.size,X=void 0===J?"medium":J,q=(t.borderless,t.validation),H=(0,a.Z)(t,["autoComplete","autoFocus","className","inputClassName","iconContainerClassName","copy","defaultValue","descriptionText","disabled","error","icon","id","name","inputRef","label","afterLabel","beforeLabel","labelOptional","layout","onChange","onBlur","onCopy","placeholder","type","value","style","reveal","actions","size","borderless","validation"]),K=(0,s.useState)("Copy"),Y=K[0],Q=K[1],$=(0,s.useState)(!0),U=$[0],tt=$[1],et=(0,g.Z)("input"),rt=(0,d.G)(),it=rt.formContextOnChange,ot=rt.values,at=rt.errors,nt=rt.handleBlur,st=rt.touched,ut=rt.fieldLevelValidation;ot&&!G&&(G=ot[N||C]),y||(at&&!y&&(y=at[N||C]),y=st&&st[N]?y:void 0),(0,s.useEffect)((function(){q&&ut(N,q(G))}),[]);var lt=["peer/input",et.base];return y&&lt.push(et.variants.error),y||lt.push(et.variants.standard),j&&lt.push(et.with_icon),X&&lt.push(et.size[X]),x&&lt.push(et.disabled),m&&lt.push(m),(0,n.jsx)(c.l,{label:O,afterLabel:z,beforeLabel:Z,labelOptional:S,layout:L,id:N,error:y,descriptionText:_,style:M,size:X,className:o,children:(0,n.jsxs)("div",{className:et.container,children:[(0,n.jsx)("input",(0,i.Z)({autoComplete:e,autoFocus:r,defaultValue:b,disabled:x,id:N,name:C,onChange:function(t){T&&T(t),it&&it(t),q&&ut(N,q(t.target.value))},onBlur:function(t){nt&&setTimeout((function(){nt(t)}),100),P&&P(t)},onCopy:R,placeholder:A,ref:E,type:B,value:I&&U?"**** **** **** ****":G,className:lt.join(" ")},H)),j&&(0,n.jsx)(p.Z,{icon:j,className:f}),v||y||V?(0,n.jsxs)("div",{className:et.actions_container,children:[y&&(0,n.jsx)(h.Z,{size:X}),!v||I&&U?null:(0,n.jsx)(l.z,{size:"tiny",type:"default",icon:(0,n.jsx)(u.Z,{}),onClick:function(){return function(t){var e;null===(e=navigator.clipboard.writeText(t))||void 0===e||e.then((function(){Q("Copied"),setTimeout((function(){Q("Copy")}),3e3),null===R||void 0===R||R()}),(function(){Q("Failed to copy")}))}(G)},children:Y}),I&&U?(0,n.jsx)(l.z,{size:"tiny",type:"default",onClick:function(){tt(!1)},children:"Reveal"}):null,V&&V]}):null]})})}m.TextArea=function(t){var e=t.className,r=t.textAreaClassName,p=t.descriptionText,m=t.disabled,f=t.error,v=t.icon,b=t.id,_=void 0===b?"":b,x=t.name,y=void 0===x?"":x,j=t.label,w=t.afterLabel,N=t.beforeLabel,k=t.labelOptional,C=t.layout,E=t.onChange,O=t.onBlur,z=t.placeholder,Z=t.value,S=t.style,L=t.rows,T=void 0===L?4:L,P=t.limit,R=t.size,A=(t.borderless,t.validation),F=t.copy,B=void 0!==F&&F,D=t.onCopy,G=t.actions,M=(0,a.Z)(t,["className","textAreaClassName","descriptionText","disabled","error","icon","id","name","label","afterLabel","beforeLabel","labelOptional","layout","onChange","onBlur","placeholder","value","style","rows","limit","size","borderless","validation","copy","onCopy","actions"]),W=(0,s.useState)(0),I=(W[0],W[1]),V=(0,s.useState)("Copy"),J=V[0],X=V[1],q=(0,d.G)(),H=q.formContextOnChange,K=q.values,Y=q.errors,Q=q.handleBlur,$=q.touched,U=q.fieldLevelValidation;K&&!Z&&(Z=K[_||y]),f||(Y&&!f&&(f=Y[_||y]),f=$&&$[_||y]?f:void 0),(0,s.useEffect)((function(){A&&U(_,A(Z))}),[]);var tt=(0,g.Z)("input"),et=[tt.base];return f&&et.push(tt.variants.error),f||et.push(tt.variants.standard),v&&et.push(tt.with_icon),R&&et.push(tt.size[R]),m&&et.push(tt.disabled),r&&et.push(r),(0,n.jsx)(c.l,{className:e,label:j,afterLabel:w,beforeLabel:N,labelOptional:k,layout:C,id:_,error:f,descriptionText:p,style:S,size:R,children:(0,n.jsxs)("div",{className:tt.container,children:[(0,n.jsx)("textarea",(0,o.Z)((0,i.Z)({disabled:m,id:_,name:y,rows:T,cols:100,placeholder:z,onChange:function(t){I(t.target.value.length),E&&E(t),H&&H(t),A&&U(_,A(t.target.value))},onBlur:function(t){Q&&setTimeout((function(){Q(t)}),100),O&&O(t)},onCopy:D,value:Z,className:et.join(" "),maxLength:P},M),{children:Z})),B||f||G?(0,n.jsx)("div",{className:tt.textarea_actions_container,children:(0,n.jsxs)("div",{className:tt.textarea_actions_container_items,children:[f&&(0,n.jsx)(h.Z,{size:R}),B&&(0,n.jsx)(l.z,{size:"tiny",type:"default",onClick:function(){return function(t){navigator.clipboard.writeText(t).then((function(){X("Copied"),setTimeout((function(){X("Copy")}),3e3),null===D||void 0===D||D()}),(function(){X("Failed to copy")}))}(Z)},icon:(0,n.jsx)(u.Z,{}),children:J}),G&&G]})}):null]})})};var f=m},79629:function(t,e,r){"use strict";r.d(e,{Z:function(){return n}});var i=r(52322),o=(r(2784),r(59642)),a=r(75445);function n(t){var e=t.style,r=t.size,n=(0,o.Z)("inputErrorIcon");return(0,i.jsx)("div",{className:n.base,style:e,children:(0,i.jsx)(a.Z,{size:r,strokeWidth:2,className:""})})}},68550:function(t,e,r){"use strict";r.d(e,{Z:function(){return n}});var i=r(52322),o=(r(2784),r(59642)),a=r(11590);function n(t){var e=t.icon,r=t.className,n=(0,o.Z)("inputIconContainer");return(0,i.jsx)("div",{className:(0,a.cn)(n.base,r),children:e})}},3552:function(t,e,r){"use strict";var i=r(2784),o=r(13980),a=r.n(o);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},n.apply(this,arguments)}function s(t,e){if(null==t)return{};var r,i,o=function(t,e){if(null==t)return{};var r,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=(0,i.forwardRef)((function(t,e){var r=t.color,o=void 0===r?"currentColor":r,a=t.size,u=void 0===a?24:a,l=s(t,["color","size"]);return i.createElement("svg",n({ref:e,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.createElement("circle",{cx:"12",cy:"12",r:"10"}),i.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),i.createElement("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"}))}));u.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},u.displayName="AlertCircle",e.Z=u},35807:function(t,e,r){"use strict";var i=r(2784),o=r(13980),a=r.n(o);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},n.apply(this,arguments)}function s(t,e){if(null==t)return{};var r,i,o=function(t,e){if(null==t)return{};var r,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=(0,i.forwardRef)((function(t,e){var r=t.color,o=void 0===r?"currentColor":r,a=t.size,u=void 0===a?24:a,l=s(t,["color","size"]);return i.createElement("svg",n({ref:e,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.createElement("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),i.createElement("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}))}));u.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},u.displayName="Copy",e.Z=u},32465:function(t,e,r){"use strict";var i=r(2784),o=r(13980),a=r.n(o);function n(){return n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i])}return t},n.apply(this,arguments)}function s(t,e){if(null==t)return{};var r,i,o=function(t,e){if(null==t)return{};var r,i,o={},a=Object.keys(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)r=a[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=(0,i.forwardRef)((function(t,e){var r=t.color,o=void 0===r?"currentColor":r,a=t.size,u=void 0===a?24:a,l=s(t,["color","size"]);return i.createElement("svg",n({ref:e,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.createElement("circle",{cx:"11",cy:"11",r:"8"}),i.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))}));u.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},u.displayName="Search",e.Z=u},61812:function(t){"use strict";t.exports=JSON.parse('[{"author_id":"angelico_de_los_reyes","author":"Angelico de los Reyes","position":"Engineering","author_url":"https://github.com/dragarcia","author_image_url":"https://github.com/dragarcia.png"},{"author_id":"ant_wilson","author":"Ant Wilson","position":"CTO and Co-Founder","author_url":"https://github.com/awalias","author_image_url":"https://github.com/awalias.png"},{"author_id":"dijets_dev","author":"Cyph","position":"Dev","author_url":"https://github.com/","author_image_url":"/images/twitter-profiles/ddev.png"},{"author_id":"dijets_official","author":"Dijets Inc.","username":"dijets","position":"Official","author_url":"https://github.com/","author_image_url":"/images/twitter-profiles/dijets-inc.png"},{"author_id":"div_arora","author":"Div Arora","username":"darora","position":"Engineering","author_url":"https://github.com/darora","author_image_url":"https://github.com/darora.png"},{"author_id":"fracek","author":"Francesco Ceccon","username":"fracek","position":"Engineering","author_url":"https://github.com/fracek","author_image_url":"https://github.com/fracek.png"},{"author_id":"gurjeet","author":"Gurjeet Singh","username":"gurjeet","position":"Engineering","author_url":"https://github.com/gurjeet","author_image_url":"https://github.com/gurjeet.png"},{"author_id":"inian","author":"Inian Parameshwaran","username":"inian","position":"Engineering","author_url":"https://twitter.com/everConfusedGuy","author_image_url":"https://avatars.githubusercontent.com/u/2155545?v=4"},{"author_id":"kangmingtay","author":"Kang Ming Tay","username":"kangmingtay","position":"Engineering","author_url":"https://github.com/kangmingtay","author_image_url":"https://github.com/kangmingtay.png"},{"author_id":"oli_rice","author":"Oliver Rice","username":"olirice","position":"Engineering","author_url":"https://github.com/olirice","author_image_url":"https://github.com/olirice.png"},{"author_id":"paul_copplestone","author":"Paul Copplestone","position":"CEO and Co-Founder","author_url":"https://github.com/kiwicopple","author_image_url":"https://github.com/kiwicopple.png"},{"author_id":"qiao","author":"Qiao Han","position":"Engineering","author_url":"https://github.com/sweatybridge","author_image_url":"https://github.com/sweatybridge.png"},{"author_id":"rory_wilding","author":"Rory Wilding","position":"Head of Growth","author_url":"https://github.com/roryw10","author_image_url":"https://github.com/roryw10.png"},{"author_id":"steve_chavez","author":"Steve Chavez","username":"steve-chavez","position":"Engineering & PostgREST maintainer","author_url":"https://github.com/steve-chavez","author_image_url":"https://github.com/steve-chavez.png"},{"author_id":"supabase","author":"Supabase","position":"","author_url":"https://github.com/supabase","author_image_url":"https://github.com/supabase.png"},{"author_id":"thor_schaeff","author":"Thor Schaeff","position":"DevRel & DX","author_url":"https://twitter.com/thorwebdev","author_image_url":"https://github.com/thorwebdev.png"},{"author_id":"wenbo_xie","author":"Wen Bo Xie","username":"w3b6x9","position":"Engineering","author_url":"https://github.com/w3b6x9","author_image_url":"https://github.com/w3b6x9.png"},{"author_id":"dthyresson","author":"David Thyresson","username":"dthyresson","position":"Engineering","author_url":"https://github.com/dthyresson","author_image_url":"https://github.com/dthyresson.png"},{"author_id":"shanerice","author":"Shane Rice","username":"shanerice","position":"Marketing","author_url":"https://github.com/shanerice","author_image_url":"https://github.com/shanerice.png"},{"author_id":"alaister","author":"Alaister Young","username":"alaister","position":"Engineering","author_url":"https://github.com/alaister","author_image_url":"https://github.com/alaister.png"},{"author_id":"tyler_shukert","author":"Tyler Shukert","username":"dshukertjr","position":"DevRel & Flutter","author_url":"https://twitter.com/dshukertjr","author_image_url":"https://github.com/dshukertjr.png"},{"author_id":"victor","author":"Victor","username":"t3hmrman","position":"Guest Author","author_url":"https://github.com/t3hmrman","author_image_url":"https://github.com/t3hmrman.png"},{"author_id":"andrew_smith","author":"Andrew Smith","username":"silentworks","position":"DevRel & DX","author_url":"https://github.com/silentworks","author_image_url":"https://github.com/silentworks.png"},{"author_id":"rodrigo_mansueli","author":"Rodrigo Mansueli Nunes","username":"mansueli","position":"Support Engineer","author_url":"https://github.com/mansueli","author_image_url":"https://github.com/mansueli.png"},{"author_id":"stas","author":"Stanislav Muzhyk","username":"abc3","position":"Engineering","author_url":"https://github.com/abc3","author_image_url":"https://github.com/abc3.png"},{"author_id":"jonmeyers_io","author":"Jon Meyers","position":"Developer Advocate","author_url":"https://twitter.com/jonmeyers_io","author_image_url":"https://github.com/dijonmusters.png"},{"author_id":"michel","author":"Michel Pelletier","position":"Engineering","author_url":"https://github.com/michelp","author_image_url":"https://github.com/michelp.png"},{"author_id":"joel","author":"Joel Lee","username":"j0","position":"Engineering","author_url":"https://github.com/j0","author_image_url":"https://github.com/j0.png"},{"author_id":"simon_grimm","author":"Simon Grimm","username":"schlimmson","position":"Guest Author","author_url":"https://twitter.com/schlimmson","author_image_url":"https://github.com/saimon24.png"},{"author_id":"burggraf","author":"Mark Burggraf","username":"burggraf","position":"Engineering","author_url":"https://github.com/burggraf","author_image_url":"https://github.com/burggraf.png"},{"author_id":"pavel","author":"Pavel Borisov","username":"pavel","position":"Postgres Engineer","author_url":"https://github.com/pashkinelfe","author_image_url":"https://avatars.githubusercontent.com/u/63344111?v=4"},{"author_id":"ramiro","author":"Ramiro Nunez Dosio","position":"Growth Marketer","author_url":"https://twitter.com/ramiro__nd","author_image_url":"https://avatars.githubusercontent.com/u/20600542?v=4"},{"author_id":"jonny","author":"Jonathan Summers-Muir","position":"Engineering","author_url":"https://github.com/mildtomato","author_image_url":"https://github.com/mildtomato.png"},{"author_id":"fabrizio","author":"Fabrizio Fenoglio","position":"Engineering","author_url":"https://github.com/fenos","author_image_url":"https://github.com/fenos.png"},{"author_id":"bo_lu","author":"Bo Lu","position":"Engineering","author_url":"https://github.com/burmecia","author_image_url":"https://github.com/burmecia.png"},{"author_id":"stojan","author":"Stojan Dimitrovski","position":"Engineering","author_url":"https://github.com/hf","author_image_url":"https://github.com/hf.png"},{"author_id":"gregnr","author":"Greg Richardson","position":"Engineering","author_url":"https://github.com/gregnr","author_image_url":"https://github.com/gregnr.png"},{"author_id":"fsansalvadore","author":"Francesco Sansalvadore","position":"Engineering","author_url":"https://github.com/fsansalvadore","author_image_url":"https://github.com/fsansalvadore.png"},{"author_id":"marijana","author":"Marijana \u0160imag","position":"Design","author_url":"https://dribbble.com/marijanasimag","author_image_url":"https://github.com/marijanasimag.png"},{"author_id":"ziinc","author":"Lee TzeYiing","position":"Engineering","author_url":"https://github.com/Ziinc","author_image_url":"https://github.com/Ziinc.png"},{"author_id":"chasers","author":"Chase Granberry","position":"Engineering","author_url":"https://github.com/chasers","author_image_url":"https://github.com/chasers.png"},{"author_id":"joshenlim","author":"Joshen Lim","username":"joshenlim","position":"Engineering","author_url":"https://github.com/joshenlim","author_image_url":"https://github.com/joshenlim.png"},{"author_id":"laktek","author":"Lakshan Perera","position":"Engineering","author_url":"https://github.com/laktek","author_image_url":"https://github.com/laktek.png"},{"author_id":"saltcod","author":"Terry Sutton","position":"Engineering","author_url":"https://github.com/saltcod","author_image_url":"https://github.com/saltcod.png"},{"author_id":"daltjoh-aws","author":"John Dalton","position":"Product Management Leader @ AWS","author_url":"https://github.com/daltjoh-aws","author_image_url":"https://github.com/daltjoh-aws.png"},{"author_id":"egor_romanov","author":"Egor Romanov","position":"Engineering","author_url":"https://github.com/egor-romanov","author_image_url":"https://github.com/egor-romanov.png"},{"author_id":"kevcodez","author":"Kevin Gr\xfcneberg","position":"Engineering","author_url":"https://github.com/kevcodez","author_image_url":"https://github.com/kevcodez.png"}]')}},function(t){t.O(0,[995,3285,1850,7493,6950,9774,2888,179],(function(){return e=50906,t(t.s=e);var e}));var e=t.O();_N_E=e}]);