(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9195],{50906:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return r(10821)}])},51318:function(e,t,r){"use strict";var i=r(52322),o=r(61812),a=r(96577),n=r.n(a),s=r(39097),u=r.n(s);r(2784);t.Z=function(e){var t=e.post,r=t.author?t.author.split(","):[],a=[];if(r)for(var s=function(e){a.push(o.find((function(t){return t.author_id===r[e]})))},l=0;l<r.length;l++)s(l);return(0,i.jsx)("div",{children:(0,i.jsx)(u(),{href:t.path,children:(0,i.jsx)("a",{className:"group inline-block min-w-full",children:(0,i.jsxs)("div",{className:"flex flex-col space-y-6",children:[(0,i.jsxs)("div",{className:"flex flex-col space-y-3",children:[(0,i.jsx)("div",{className:"border-scale-300 relative mb-4 h-60 w-full overflow-auto rounded-lg border shadow-sm",children:(0,i.jsx)(n(),{layout:"fill",src:t.thumb?"casestudy"===t.type?t.thumb:"/images/blog/".concat(t.thumb):"/images/blog/blog-placeholder.png",objectFit:"cover",className:"scale-100 transform duration-100 ease-in group-hover:scale-105",alt:"case study thumbnail"})}),(0,i.jsx)("h3",{className:"text-scale-1200 max-w-sm text-xl",children:t.title}),(0,i.jsx)("p",{className:"text-scale-1100 max-w-sm text-base",children:t.description}),t.date&&(0,i.jsxs)("div",{className:"text-scale-900 flex items-center space-x-1.5 text-sm",children:[(0,i.jsx)("p",{children:t.date}),t.readingTime&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"\u2022"}),(0,i.jsx)("p",{children:t.readingTime})]})]})]}),(0,i.jsx)("div",{className:"flex items-center -space-x-2",children:a.map((function(e,t){return(0,i.jsx)("div",{className:"dark:ring-scale-200 w-10 rounded-full ring-2 ring-white",children:e.author_image_url&&(0,i.jsx)(n(),{src:e.author_image_url,className:"dark:border-dark rounded-full border",alt:"".concat(e.author," avatar"),width:"100%",height:"100%",layout:"responsive"})},t)}))})]})})})})}},10821:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return F},default:function(){return B}});var i=r(70865),o=r(50930),a=r(52322),n=r(2784),s=r(5632),u=r(96577),l=r.n(u),c=r(39097),h=r.n(c),p=r(55351),d=r(61812),g=r(7180),m=r(51318),f=r(76635),v=r(52993),b=r(89672),_=r(13980),x=r.n(_);function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},y.apply(this,arguments)}function j(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var w=(0,n.forwardRef)((function(e,t){var r=e.color,i=void 0===r?"currentColor":r,o=e.size,a=void 0===o?24:o,s=j(e,["color","size"]);return n.createElement("svg",y({ref:t,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},s),n.createElement("polyline",{points:"6 9 12 15 18 9"}))}));w.propTypes={color:x().string,size:x().oneOfType([x().string,x().number])},w.displayName="ChevronDown";var N=w,k=r(61137);var C=function(e){return(0,a.jsx)(k.Z,(0,i.Z)({icon:N},e))},E=r(29234),O=r(5869),z=r(42893),Z=r(66383);var S=r(5147),L=r(91850),T=r(94589),P=(0,L.E)(v.z),R=function(e){var t,r=e.posts,i=e.setPosts,o=e.setCategory,u=e.allCategories,l=e.handlePosts,c=null===(t=function(){var e=(0,s.useRouter)().query;return(0,n.useMemo)((function(){return Object.fromEntries(Object.entries(e).map((function(e){var t=(0,Z.Z)(e,2),r=t[0],i=t[1];return Array.isArray(i)?[r,i[0]]:[r,i]})))}),[e])}())||void 0===t?void 0:t.category,h=(0,n.useState)(""),p=h[0],d=h[1],g=(0,S.Gc)(1023),m=(0,S.Gc)(1535),_=(0,n.useState)(!1),x=_[0],y=_[1],j=(0,s.useRouter)();(0,n.useEffect)((function(){y(!g)}),[g]),(0,n.useEffect)((function(){p?i(w):l()}),[p]),(0,n.useEffect)((function(){j.isReady&&c&&"all"!==c&&o(c)}),[c,j.isReady]);var w=(0,n.useCallback)((function(){if(p){var e=r.filter((function(e){var t,r,i;return(null===(t=e.tags)||void 0===t?void 0:t.join(" ").replaceAll("-"," ").includes(p.toLowerCase()))||(null===(r=e.title)||void 0===r?void 0:r.toLowerCase().includes(p.toLowerCase()))||(null===(i=e.author)||void 0===i?void 0:i.includes(p.toLowerCase()))}));return e}}),[p]);return(0,a.jsx)("div",{className:"flex flex-row items-center justify-between gap-2",children:(0,a.jsxs)(T.M,{exitBeforeEnter:!0,children:[!x&&(0,a.jsx)(L.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.05}},className:"flex lg:hidden",children:(0,a.jsxs)(b.h_,{children:[(0,a.jsx)(b.$F,{children:(0,a.jsx)(v.z,{type:"outline",iconRight:(0,a.jsx)(C,{}),className:"w-full min-w-[200px] flex justify-between items-center py-2",children:c?(0,f.startCase)(null===c||void 0===c?void 0:c.replaceAll("-"," ")):"All Posts"})}),(0,a.jsx)(b.AW,{side:"bottom",align:"start",children:u.map((function(e){return(0,a.jsx)(b.Xi,{onClick:function(){return o(e)},className:["all"===e&&!c||e===c?"text-brand-600":""].join(" "),children:"all"===e?"All Posts":(0,f.startCase)(e.replaceAll("-"," "))},"custom-expiry")}))})]})}),(0,a.jsx)("div",{className:"hidden lg:flex flex-wrap items-center flex-grow gap-2",children:u.map((function(e){return(0,a.jsx)(v.z,{type:"all"!==e||p||c?e===c?"alternative":"outline":"alternative",onClick:function(){return o(e)},size:m?"tiny":"small",children:"all"===e?"All":(0,f.startCase)(e.replaceAll("-"," "))},e)}))}),!x&&(0,a.jsx)(P,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.05}},size:"large",type:"default",onClick:function(){return y(!0)},children:(0,a.jsx)(E.Z,{size:"tiny"})}),x&&(0,a.jsx)(L.E.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,transition:{duration:.05}},className:"w-full lg:max-w-[240px] xl:max-w-[280px]",children:(0,a.jsx)(O.Z,{icon:(0,a.jsx)(E.Z,{size:"tiny"}),size:"small",layout:"vertical",autoComplete:"off",type:"search",placeholder:"Search blog",value:p,onChange:function(e){c&&o("all"),d(e.target.value)},className:"w-full",actions:g&&(0,a.jsx)(v.z,{type:"link",onClick:function(){d(""),y(!1)},className:"text-scale-1100 hover:text-scale-1200",children:(0,a.jsx)(z.Z,{size:"tiny"})})})})]})})};function A(e){for(var t=function(e){i.push(d.find((function(t){return t.author_id===r[e]})))},r=e.author.split(","),i=[],o=0;o<r.length;o++)t(o);return(0,a.jsx)("div",{className:"w-full cursor-pointer",children:(0,a.jsx)(h(),{href:"".concat(e.path),children:(0,a.jsxs)("a",{className:"grid gap-8 lg:grid-cols-2 lg:gap-16",children:[(0,a.jsx)("div",{className:"relative h-96 w-full overflow-auto rounded-lg border",children:(0,a.jsx)(l(),{src:"/images/blog/"+(e.thumb?e.thumb:e.image),layout:"fill",objectFit:"cover",alt:"blog thumbnail"})}),(0,a.jsxs)("div",{className:"flex flex-col space-y-2",children:[(0,a.jsxs)("div",{className:"text-scale-900 flex space-x-2 text-sm",children:[(0,a.jsx)("p",{children:e.date}),(0,a.jsx)("p",{children:"\u2022"}),(0,a.jsx)("p",{children:e.readingTime})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h2",{className:"h2",children:e.title}),(0,a.jsx)("p",{className:"p text-xl",children:e.description})]}),(0,a.jsx)("div",{className:"grid w-max grid-flow-col grid-rows-4 gap-4",children:i.map((function(e,t){return(0,a.jsxs)("div",{className:"flex items-center space-x-3",children:[e.author_image_url&&(0,a.jsx)("div",{className:"relative h-10 w-10 overflow-auto",children:(0,a.jsx)(l(),{src:e.author_image_url,alt:"".concat(e.author," avatar"),className:"rounded-full",layout:"fill",objectFit:"cover"})}),(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("span",{className:"text-scale-1200 m-0 text-sm",children:e.author}),(0,a.jsx)("span",{className:"text-scale-900 m-0 text-xs",children:e.position})]})]},t)}))})]})]})})},e.slug)}var F=!0,B=function(e){var t=(0,n.useState)(e.blogs),r=t[0],u=t[1],l=(0,n.useState)("all"),c=l[0],h=l[1],d=(0,s.useRouter)(),f="Dijets - Modular L0 Framework for the new Web.",v="Get all your Dijets News on Dijets blog.";(0,n.useEffect)((function(){b()}),[c]);var b=function(){var t=(0,o.Z)(e.blogs);t.shift(),"all"===c?d.replace("/blog",void 0,{shallow:!0,scroll:!1}):(d.query.category=c,d.replace(d,void 0,{shallow:!0,scroll:!1})),u("all"===c?t:e.blogs.filter((function(e){var t;return null===(t=e.categories)||void 0===t?void 0:t.includes(c)})))};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(p.PB,{title:f,description:v,openGraph:{title:f,description:v,url:"https://dijets.io/".concat(d.pathname),images:[{url:"https://dijets.io/images/og/og-image-v2.jpg"}]},additionalLinkTags:[{rel:"alternate",type:"application/rss+xml",href:"https://dijets.io/rss.xml"}]}),(0,a.jsxs)(g.Z,{children:[(0,a.jsx)("h1",{className:"sr-only",children:"Supabase blog"}),(0,a.jsx)("div",{className:"overflow-hidden py-12",children:(0,a.jsx)("div",{className:"container mx-auto mt-16 px-8 sm:px-16 xl:px-20",children:(0,a.jsx)("div",{className:"mx-auto ",children:e.blogs.slice(0,1).map((function(e,t){return(0,a.jsx)(A,(0,i.Z)({},e),t)}))})})}),(0,a.jsx)("div",{className:"border-scale-600 border-t",children:(0,a.jsxs)("div",{className:"container mx-auto mt-16 px-8 sm:px-16 xl:px-20",children:[(0,a.jsx)(R,{posts:r,setPosts:u,setCategory:h,allCategories:["all","services","development","council members","team","dijets inc","announcement"],handlePosts:b}),(0,a.jsx)("ol",{className:"grid grid-cols-12 py-16 lg:gap-16",children:(null===r||void 0===r?void 0:r.length)?null===r||void 0===r?void 0:r.map((function(e,t){return(0,a.jsx)("div",{className:"col-span-12 mb-16 md:col-span-12 lg:col-span-6 xl:col-span-4",children:(0,a.jsx)(m.Z,{post:e})},t)})):(0,a.jsx)("p",{className:"text-sm text-scale-800 col-span-full",children:"No results"})})]})})]})]})}},75445:function(e,t,r){"use strict";var i=r(70865),o=r(52322),a=(r(2784),r(3552)),n=r(61137);t.Z=function(e){return(0,o.jsx)(n.Z,(0,i.Z)({icon:a.Z},e))}},26852:function(e,t,r){"use strict";var i=r(70865),o=r(52322),a=(r(2784),r(35807)),n=r(61137);t.Z=function(e){return(0,o.jsx)(n.Z,(0,i.Z)({icon:a.Z},e))}},29234:function(e,t,r){"use strict";var i=r(70865),o=r(52322),a=(r(2784),r(32465)),n=r(61137);t.Z=function(e){return(0,o.jsx)(n.Z,(0,i.Z)({icon:a.Z},e))}},5869:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var i=r(70865),o=r(96670),a=r(26297),n=r(52322),s=r(2784),u=r(26852),l=r(52993),c=r(47978),h=r(79629),p=r(68550),d=r(59642),g=r(19532);function m(e){var t=e.autoComplete,r=e.autoFocus,o=e.className,m=e.inputClassName,f=e.iconContainerClassName,v=e.copy,b=e.defaultValue,_=e.descriptionText,x=e.disabled,y=e.error,j=e.icon,w=e.id,N=void 0===w?"":w,k=e.name,C=void 0===k?"":k,E=e.inputRef,O=e.label,z=e.afterLabel,Z=e.beforeLabel,S=e.labelOptional,L=e.layout,T=e.onChange,P=e.onBlur,R=e.onCopy,A=e.placeholder,F=e.type,B=void 0===F?"text":F,D=e.value,G=void 0===D?void 0:D,M=e.style,W=e.reveal,I=void 0!==W&&W,V=e.actions,J=e.size,X=void 0===J?"medium":J,q=(e.borderless,e.validation),H=(0,a.Z)(e,["autoComplete","autoFocus","className","inputClassName","iconContainerClassName","copy","defaultValue","descriptionText","disabled","error","icon","id","name","inputRef","label","afterLabel","beforeLabel","labelOptional","layout","onChange","onBlur","onCopy","placeholder","type","value","style","reveal","actions","size","borderless","validation"]),K=(0,s.useState)("Copy"),Y=K[0],Q=K[1],$=(0,s.useState)(!0),U=$[0],ee=$[1],te=(0,d.Z)("input"),re=(0,g.G)(),ie=re.formContextOnChange,oe=re.values,ae=re.errors,ne=re.handleBlur,se=re.touched,ue=re.fieldLevelValidation;oe&&!G&&(G=oe[N||C]),y||(ae&&!y&&(y=ae[N||C]),y=se&&se[N]?y:void 0),(0,s.useEffect)((function(){q&&ue(N,q(G))}),[]);var le=["peer/input",te.base];return y&&le.push(te.variants.error),y||le.push(te.variants.standard),j&&le.push(te.with_icon),X&&le.push(te.size[X]),x&&le.push(te.disabled),m&&le.push(m),(0,n.jsx)(c.l,{label:O,afterLabel:z,beforeLabel:Z,labelOptional:S,layout:L,id:N,error:y,descriptionText:_,style:M,size:X,className:o,children:(0,n.jsxs)("div",{className:te.container,children:[(0,n.jsx)("input",(0,i.Z)({autoComplete:t,autoFocus:r,defaultValue:b,disabled:x,id:N,name:C,onChange:function(e){T&&T(e),ie&&ie(e),q&&ue(N,q(e.target.value))},onBlur:function(e){ne&&setTimeout((function(){ne(e)}),100),P&&P(e)},onCopy:R,placeholder:A,ref:E,type:B,value:I&&U?"**** **** **** ****":G,className:le.join(" ")},H)),j&&(0,n.jsx)(p.Z,{icon:j,className:f}),v||y||V?(0,n.jsxs)("div",{className:te.actions_container,children:[y&&(0,n.jsx)(h.Z,{size:X}),!v||I&&U?null:(0,n.jsx)(l.z,{size:"tiny",type:"default",icon:(0,n.jsx)(u.Z,{}),onClick:function(){return function(e){var t;null===(t=navigator.clipboard.writeText(e))||void 0===t||t.then((function(){Q("Copied"),setTimeout((function(){Q("Copy")}),3e3),null===R||void 0===R||R()}),(function(){Q("Failed to copy")}))}(G)},children:Y}),I&&U?(0,n.jsx)(l.z,{size:"tiny",type:"default",onClick:function(){ee(!1)},children:"Reveal"}):null,V&&V]}):null]})})}m.TextArea=function(e){var t=e.className,r=e.textAreaClassName,p=e.descriptionText,m=e.disabled,f=e.error,v=e.icon,b=e.id,_=void 0===b?"":b,x=e.name,y=void 0===x?"":x,j=e.label,w=e.afterLabel,N=e.beforeLabel,k=e.labelOptional,C=e.layout,E=e.onChange,O=e.onBlur,z=e.placeholder,Z=e.value,S=e.style,L=e.rows,T=void 0===L?4:L,P=e.limit,R=e.size,A=(e.borderless,e.validation),F=e.copy,B=void 0!==F&&F,D=e.onCopy,G=e.actions,M=(0,a.Z)(e,["className","textAreaClassName","descriptionText","disabled","error","icon","id","name","label","afterLabel","beforeLabel","labelOptional","layout","onChange","onBlur","placeholder","value","style","rows","limit","size","borderless","validation","copy","onCopy","actions"]),W=(0,s.useState)(0),I=(W[0],W[1]),V=(0,s.useState)("Copy"),J=V[0],X=V[1],q=(0,g.G)(),H=q.formContextOnChange,K=q.values,Y=q.errors,Q=q.handleBlur,$=q.touched,U=q.fieldLevelValidation;K&&!Z&&(Z=K[_||y]),f||(Y&&!f&&(f=Y[_||y]),f=$&&$[_||y]?f:void 0),(0,s.useEffect)((function(){A&&U(_,A(Z))}),[]);var ee=(0,d.Z)("input"),te=[ee.base];return f&&te.push(ee.variants.error),f||te.push(ee.variants.standard),v&&te.push(ee.with_icon),R&&te.push(ee.size[R]),m&&te.push(ee.disabled),r&&te.push(r),(0,n.jsx)(c.l,{className:t,label:j,afterLabel:w,beforeLabel:N,labelOptional:k,layout:C,id:_,error:f,descriptionText:p,style:S,size:R,children:(0,n.jsxs)("div",{className:ee.container,children:[(0,n.jsx)("textarea",(0,o.Z)((0,i.Z)({disabled:m,id:_,name:y,rows:T,cols:100,placeholder:z,onChange:function(e){I(e.target.value.length),E&&E(e),H&&H(e),A&&U(_,A(e.target.value))},onBlur:function(e){Q&&setTimeout((function(){Q(e)}),100),O&&O(e)},onCopy:D,value:Z,className:te.join(" "),maxLength:P},M),{children:Z})),B||f||G?(0,n.jsx)("div",{className:ee.textarea_actions_container,children:(0,n.jsxs)("div",{className:ee.textarea_actions_container_items,children:[f&&(0,n.jsx)(h.Z,{size:R}),B&&(0,n.jsx)(l.z,{size:"tiny",type:"default",onClick:function(){return function(e){navigator.clipboard.writeText(e).then((function(){X("Copied"),setTimeout((function(){X("Copy")}),3e3),null===D||void 0===D||D()}),(function(){X("Failed to copy")}))}(Z)},icon:(0,n.jsx)(u.Z,{}),children:J}),G&&G]})}):null]})})};var f=m},79629:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var i=r(52322),o=(r(2784),r(59642)),a=r(75445);function n(e){var t=e.style,r=e.size,n=(0,o.Z)("inputErrorIcon");return(0,i.jsx)("div",{className:n.base,style:t,children:(0,i.jsx)(a.Z,{size:r,strokeWidth:2,className:""})})}},68550:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var i=r(52322),o=(r(2784),r(59642)),a=r(11590);function n(e){var t=e.icon,r=e.className,n=(0,o.Z)("inputIconContainer");return(0,i.jsx)("div",{className:(0,a.cn)(n.base,r),children:t})}},3552:function(e,t,r){"use strict";var i=r(2784),o=r(13980),a=r.n(o);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},n.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=(0,i.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,a=e.size,u=void 0===a?24:a,l=s(e,["color","size"]);return i.createElement("svg",n({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.createElement("circle",{cx:"12",cy:"12",r:"10"}),i.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"12"}),i.createElement("line",{x1:"12",y1:"16",x2:"12.01",y2:"16"}))}));u.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},u.displayName="AlertCircle",t.Z=u},35807:function(e,t,r){"use strict";var i=r(2784),o=r(13980),a=r.n(o);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},n.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=(0,i.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,a=e.size,u=void 0===a?24:a,l=s(e,["color","size"]);return i.createElement("svg",n({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.createElement("rect",{x:"9",y:"9",width:"13",height:"13",rx:"2",ry:"2"}),i.createElement("path",{d:"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"}))}));u.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},u.displayName="Copy",t.Z=u},32465:function(e,t,r){"use strict";var i=r(2784),o=r(13980),a=r.n(o);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},n.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=(0,i.forwardRef)((function(e,t){var r=e.color,o=void 0===r?"currentColor":r,a=e.size,u=void 0===a?24:a,l=s(e,["color","size"]);return i.createElement("svg",n({ref:t,xmlns:"http://www.w3.org/2000/svg",width:u,height:u,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),i.createElement("circle",{cx:"11",cy:"11",r:"8"}),i.createElement("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"}))}));u.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},u.displayName="Search",t.Z=u},61812:function(e){"use strict";e.exports=JSON.parse('[{"author_id":"angelico_de_los_reyes","author":"Angelico de los Reyes","position":"Engineering","author_url":"https://github.com/dragarcia","author_image_url":"https://github.com/dragarcia.png"},{"author_id":"saleem_fareed","author":"Saleem Fareed","position":"Founder","author_url":"https://github.com/","author_image_url":"/images/twitter-profiles/saleem_fareed.png"},{"author_id":"dijets_dev","author":"Cyph","position":"Dev","author_url":"https://github.com/","author_image_url":"/images/twitter-profiles/ddev.png"},{"author_id":"dijets_official","author":"Dijets Inc.","position":"Official","author_url":"https://github.com/","author_image_url":"/images/twitter-profiles/dijets-inc.png"},{"author_id":"div_arora","author":"Div Arora","username":"darora","position":"Engineering","author_url":"https://github.com/darora","author_image_url":"https://github.com/darora.png"},{"author_id":"fracek","author":"Francesco Ceccon","username":"fracek","position":"Engineering","author_url":"https://github.com/fracek","author_image_url":"https://github.com/fracek.png"},{"author_id":"gurjeet","author":"Gurjeet Singh","username":"gurjeet","position":"Engineering","author_url":"https://github.com/gurjeet","author_image_url":"https://github.com/gurjeet.png"},{"author_id":"inian","author":"Inian Parameshwaran","username":"inian","position":"Engineering","author_url":"https://twitter.com/everConfusedGuy","author_image_url":"https://avatars.githubusercontent.com/u/2155545?v=4"},{"author_id":"kangmingtay","author":"Kang Ming Tay","username":"kangmingtay","position":"Engineering","author_url":"https://github.com/kangmingtay","author_image_url":"https://github.com/kangmingtay.png"},{"author_id":"oli_rice","author":"Oliver Rice","username":"olirice","position":"Engineering","author_url":"https://github.com/olirice","author_image_url":"https://github.com/olirice.png"},{"author_id":"paul_copplestone","author":"Paul Copplestone","position":"CEO and Co-Founder","author_url":"https://github.com/kiwicopple","author_image_url":"https://github.com/kiwicopple.png"},{"author_id":"qiao","author":"Qiao Han","position":"Engineering","author_url":"https://github.com/sweatybridge","author_image_url":"https://github.com/sweatybridge.png"},{"author_id":"rory_wilding","author":"Rory Wilding","position":"Head of Growth","author_url":"https://github.com/roryw10","author_image_url":"https://github.com/roryw10.png"},{"author_id":"steve_chavez","author":"Steve Chavez","username":"steve-chavez","position":"Engineering & PostgREST maintainer","author_url":"https://github.com/steve-chavez","author_image_url":"https://github.com/steve-chavez.png"},{"author_id":"supabase","author":"Supabase","position":"","author_url":"https://github.com/supabase","author_image_url":"https://github.com/supabase.png"},{"author_id":"thor_schaeff","author":"Thor Schaeff","position":"DevRel & DX","author_url":"https://twitter.com/thorwebdev","author_image_url":"https://github.com/thorwebdev.png"},{"author_id":"wenbo_xie","author":"Wen Bo Xie","username":"w3b6x9","position":"Engineering","author_url":"https://github.com/w3b6x9","author_image_url":"https://github.com/w3b6x9.png"},{"author_id":"dthyresson","author":"David Thyresson","username":"dthyresson","position":"Engineering","author_url":"https://github.com/dthyresson","author_image_url":"https://github.com/dthyresson.png"},{"author_id":"shanerice","author":"Shane Rice","username":"shanerice","position":"Marketing","author_url":"https://github.com/shanerice","author_image_url":"https://github.com/shanerice.png"},{"author_id":"alaister","author":"Alaister Young","username":"alaister","position":"Engineering","author_url":"https://github.com/alaister","author_image_url":"https://github.com/alaister.png"},{"author_id":"tyler_shukert","author":"Tyler Shukert","username":"dshukertjr","position":"DevRel & Flutter","author_url":"https://twitter.com/dshukertjr","author_image_url":"https://github.com/dshukertjr.png"},{"author_id":"victor","author":"Victor","username":"t3hmrman","position":"Guest Author","author_url":"https://github.com/t3hmrman","author_image_url":"https://github.com/t3hmrman.png"},{"author_id":"andrew_smith","author":"Andrew Smith","username":"silentworks","position":"DevRel & DX","author_url":"https://github.com/silentworks","author_image_url":"https://github.com/silentworks.png"},{"author_id":"rodrigo_mansueli","author":"Rodrigo Mansueli Nunes","username":"mansueli","position":"Support Engineer","author_url":"https://github.com/mansueli","author_image_url":"https://github.com/mansueli.png"},{"author_id":"stas","author":"Stanislav Muzhyk","username":"abc3","position":"Engineering","author_url":"https://github.com/abc3","author_image_url":"https://github.com/abc3.png"},{"author_id":"jonmeyers_io","author":"Jon Meyers","position":"Developer Advocate","author_url":"https://twitter.com/jonmeyers_io","author_image_url":"https://github.com/dijonmusters.png"},{"author_id":"michel","author":"Michel Pelletier","position":"Engineering","author_url":"https://github.com/michelp","author_image_url":"https://github.com/michelp.png"},{"author_id":"joel","author":"Joel Lee","username":"j0","position":"Engineering","author_url":"https://github.com/j0","author_image_url":"https://github.com/j0.png"},{"author_id":"simon_grimm","author":"Simon Grimm","username":"schlimmson","position":"Guest Author","author_url":"https://twitter.com/schlimmson","author_image_url":"https://github.com/saimon24.png"},{"author_id":"burggraf","author":"Mark Burggraf","username":"burggraf","position":"Engineering","author_url":"https://github.com/burggraf","author_image_url":"https://github.com/burggraf.png"},{"author_id":"pavel","author":"Pavel Borisov","username":"pavel","position":"Postgres Engineer","author_url":"https://github.com/pashkinelfe","author_image_url":"https://avatars.githubusercontent.com/u/63344111?v=4"},{"author_id":"ramiro","author":"Ramiro Nunez Dosio","position":"Growth Marketer","author_url":"https://twitter.com/ramiro__nd","author_image_url":"https://avatars.githubusercontent.com/u/20600542?v=4"},{"author_id":"jonny","author":"Jonathan Summers-Muir","position":"Engineering","author_url":"https://github.com/mildtomato","author_image_url":"https://github.com/mildtomato.png"},{"author_id":"fabrizio","author":"Fabrizio Fenoglio","position":"Engineering","author_url":"https://github.com/fenos","author_image_url":"https://github.com/fenos.png"},{"author_id":"bo_lu","author":"Bo Lu","position":"Engineering","author_url":"https://github.com/burmecia","author_image_url":"https://github.com/burmecia.png"},{"author_id":"stojan","author":"Stojan Dimitrovski","position":"Engineering","author_url":"https://github.com/hf","author_image_url":"https://github.com/hf.png"},{"author_id":"gregnr","author":"Greg Richardson","position":"Engineering","author_url":"https://github.com/gregnr","author_image_url":"https://github.com/gregnr.png"},{"author_id":"fsansalvadore","author":"Francesco Sansalvadore","position":"Engineering","author_url":"https://github.com/fsansalvadore","author_image_url":"https://github.com/fsansalvadore.png"},{"author_id":"marijana","author":"Marijana \u0160imag","position":"Design","author_url":"https://dribbble.com/marijanasimag","author_image_url":"https://github.com/marijanasimag.png"},{"author_id":"ziinc","author":"Lee TzeYiing","position":"Engineering","author_url":"https://github.com/Ziinc","author_image_url":"https://github.com/Ziinc.png"},{"author_id":"chasers","author":"Chase Granberry","position":"Engineering","author_url":"https://github.com/chasers","author_image_url":"https://github.com/chasers.png"},{"author_id":"joshenlim","author":"Joshen Lim","username":"joshenlim","position":"Engineering","author_url":"https://github.com/joshenlim","author_image_url":"https://github.com/joshenlim.png"},{"author_id":"laktek","author":"Lakshan Perera","position":"Engineering","author_url":"https://github.com/laktek","author_image_url":"https://github.com/laktek.png"},{"author_id":"saltcod","author":"Terry Sutton","position":"Engineering","author_url":"https://github.com/saltcod","author_image_url":"https://github.com/saltcod.png"},{"author_id":"daltjoh-aws","author":"John Dalton","position":"Product Management Leader @ AWS","author_url":"https://github.com/daltjoh-aws","author_image_url":"https://github.com/daltjoh-aws.png"},{"author_id":"egor_romanov","author":"Egor Romanov","position":"Engineering","author_url":"https://github.com/egor-romanov","author_image_url":"https://github.com/egor-romanov.png"},{"author_id":"kevcodez","author":"Kevin Gr\xfcneberg","position":"Engineering","author_url":"https://github.com/kevcodez","author_image_url":"https://github.com/kevcodez.png"}]')}},function(e){e.O(0,[995,1706,1850,7493,7180,9774,2888,179],(function(){return t=50906,e(e.s=t);var t}));var t=e.O();_N_E=t}]);