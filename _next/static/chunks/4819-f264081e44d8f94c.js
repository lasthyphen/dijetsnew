(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4819],{75818:function(e){e.exports=function(e){const n={keyword:"break default func interface select case map struct chan else goto package switch const fallthrough if range type continue for import return var go defer bool byte complex64 complex128 float32 float64 int8 int16 int32 int64 string uint8 uint16 uint32 uint64 int uint uintptr rune",literal:"true false iota nil",built_in:"append cap close complex copy imag len make new panic print println real recover delete"};return{name:"Go",aliases:["golang"],keywords:n,illegal:"</",contains:[e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,{className:"string",variants:[e.QUOTE_STRING_MODE,e.APOS_STRING_MODE,{begin:"`",end:"`"}]},{className:"number",variants:[{begin:e.C_NUMBER_RE+"[i]",relevance:1},e.C_NUMBER_MODE]},{begin:/:=/},{className:"function",beginKeywords:"func",end:"\\s*(\\{|$)",excludeEnd:!0,contains:[e.TITLE_MODE,{className:"params",begin:/\(/,end:/\)/,keywords:n,illegal:/["']/}]}]}}},78195:function(e,n,t){"use strict";t.d(n,{Z:function(){return x}});var r=t(52322),o=t(82098),l=t(50217),i=t(52993),s=t(48243),a=t(26852),c=t(2784),u=t(72282),d=t.n(u),h=t(5047),g=t(27666),p=t(86497),f=t(54299),m=t(14969),j=t(83667),b=t(20380),v={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"#272822",color:"#ddd"},"hljs-tag":{color:"#569cd6"},"hljs-keyword":{color:"#569cd6",fontWeight:"normal"},"hljs-selector-tag":{color:"#569cd6",fontWeight:"normal"},"hljs-literal":{color:"#569cd6",fontWeight:"normal"},"hljs-strong":{color:"#569cd6"},"hljs-name":{color:"#569cd6"},"hljs-code":{color:"#66d9ef"},"hljs-class .hljs-title":{color:"gray"},"hljs-attribute":{color:"#bf79db"},"hljs-symbol":{color:"#bf79db"},"hljs-regexp":{color:"#bf79db"},"hljs-link":{color:"#bf79db"},"hljs-string":{color:"#3ECF8E"},"hljs-bullet":{color:"#3ECF8E"},"hljs-subst":{color:"#3ECF8E"},"hljs-title":{color:"#3ECF8E",fontWeight:"normal"},"hljs-section":{color:"#3ECF8E",fontWeight:"normal"},"hljs-emphasis":{color:"#3ECF8E"},"hljs-type":{color:"#3ECF8E",fontWeight:"normal"},"hljs-built_in":{color:"#3ECF8E"},"hljs-builtin-name":{color:"#3ECF8E"},"hljs-selector-attr":{color:"#3ECF8E"},"hljs-selector-pseudo":{color:"#3ECF8E"},"hljs-addition":{color:"#3ECF8E"},"hljs-variable":{color:"#3ECF8E"},"hljs-template-tag":{color:"#3ECF8E"},"hljs-template-variable":{color:"#3ECF8E"},"hljs-comment":{color:"#75715e"},"hljs-quote":{color:"#75715e"},"hljs-deletion":{color:"#75715e"},"hljs-meta":{color:"#75715e"},"hljs-doctag":{fontWeight:"normal"},"hljs-selector-id":{fontWeight:"normal"}};var x=function(e){var n=(0,c.useState)(!1),t=n[0],u=n[1],x=e.children?e.children.split("\n")[0]:"",E="";x.includes("filename =")&&(E=x.split("=")[1]);var y,Z=e.children&&E?e.children.replace("".concat(x,"\n\n"),""):e.children,w=e.lang?e.lang:e.className?e.className.replace("language-",""):"js";return"jsx"===w&&(w="js"),h.Z.registerLanguage("js",p.Z),h.Z.registerLanguage("py",f.Z),h.Z.registerLanguage("sql",m.Z),h.Z.registerLanguage("bash",g.Z),h.Z.registerLanguage("kotlin",j.Z),h.Z.registerLanguage("go",b.Z),(0,r.jsxs)("div",{className:"not-prose dark overflow-hidden",children:[E&&(0,r.jsxs)("div",{className:" bg-scale-200 text-scale-900 flex h-8 w-full items-center gap-1 rounded-tr rounded-tl border-t border-r border-l px-4 font-sans ",children:["bash"===w?(0,r.jsx)(o.Z,{size:12,strokeWidth:2}):(0,r.jsx)(l.Z,{size:12,strokeWidth:2}),(0,r.jsx)("span",{className:"text-xs",children:null!==E&&void 0!==E?E:"index.js"})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(h.Z,{language:w,style:v,className:[!E&&"rounded-t-lg","rounded-b-lg"].join(" "),customStyle:{padding:"21px 24px",fontSize:"0.775rem",fontFamily:'"Dank Mono", "Monaco", "Courier New", monospace',lineHeight:1.4,background:null!==(y=e.background)&&void 0!==y?y:"#141414"},showLineNumbers:e.showLineNumbers,lineNumberStyle:{padding:"0px",marginRight:"21px",minWidth:"1.5em",opacity:"0.3",fontSize:"0.75rem"},children:Z}),!e.hideCopy&&e.children?(0,r.jsx)("div",{className:"dark absolute right-2 top-2",children:(0,r.jsx)(d(),{text:e.children,children:(0,r.jsx)(i.z,{type:"text",icon:t?(0,r.jsx)("span",{className:"text-brand",children:(0,r.jsx)(s.Z,{strokeWidth:3})}):(0,r.jsx)(a.Z,{}),onClick:function(){return u(!0),void setTimeout((function(){u(!1)}),1e3)},"aria-label":"Copy"})})}):null]})]})}},84819:function(e,n,t){"use strict";var r=t(52322),o=t(2784),l=t(52993),i=t(1210),s=t(3317),a=t(43952),c=t(98395),u=t(78195),d=t(39097),h=t.n(d);n.Z=function(e){var n=(0,o.useState)(void 0),t=n[0],d=n[1],g=(0,o.useState)(0),p=g[0],f=g[1];return(0,r.jsxs)("div",{className:"grid grid-cols-12 lg:gap-16",children:[(0,r.jsxs)("div",{className:"col-span-12 pb-8 lg:col-span-5 xl:col-span-5",children:[(0,r.jsx)("h2",{className:"h3",children:e.title}),(0,r.jsx)("p",{className:"p",children:e.text}),e.documentation_link&&(0,r.jsx)(h(),{href:e.documentation_link,as:e.documentation_link,children:(0,r.jsx)("a",{children:(0,r.jsx)(l.z,{size:"small",className:"mt-4",type:"default",icon:(0,r.jsx)(i.Z,{}),children:"Dijets API Documentation"})})}),e.footer&&(0,r.jsx)("div",{className:"py-8",children:e.footer})]}),(0,r.jsxs)("div",{className:"sbui-tabs--alt col-span-12 lg:col-span-7 xl:col-span-6 xl:col-start-7",children:[(0,r.jsx)(s.Z,{scrollable:!0,activeId:p.toString(),onChange:function(e){return n=Number(e),f(n),void t.slideTo(n);var n},children:e.content&&e.content.map((function(e,n){return(0,r.jsx)(s.Z.Panel,{label:e.title,id:n.toString(),children:(0,r.jsx)("span",{},n)},n)}))}),(0,r.jsx)("div",{className:"overflow-hidden",children:(0,r.jsx)(a.t,{onSwiper:d,style:{zIndex:0,marginRight:"1px"},initialSlide:p,spaceBetween:0,slidesPerView:1,speed:300,allowTouchMove:!1,autoHeight:!!e.autoHeight&&e.autoHeight,children:e.content&&e.content.map((function(n,t){return(0,r.jsx)(c.o,{children:(0,r.jsx)(u.Z,{lang:n.lang,size:e.size?e.size:"small",children:n.code},t)},t)}))})})]})]})}},48243:function(e,n,t){"use strict";var r=t(70865),o=t(52322),l=(t(2784),t(52766)),i=t(61137);n.Z=function(e){return(0,o.jsx)(i.Z,(0,r.Z)({icon:l.Z},e))}},26852:function(e,n,t){"use strict";var r=t(70865),o=t(52322),l=(t(2784),t(35807)),i=t(61137);n.Z=function(e){return(0,o.jsx)(i.Z,(0,r.Z)({icon:l.Z},e))}},50217:function(e,n,t){"use strict";var r=t(70865),o=t(52322),l=(t(2784),t(57393)),i=t(61137);n.Z=function(e){return(0,o.jsx)(i.Z,(0,r.Z)({icon:l.Z},e))}},82098:function(e,n,t){"use strict";var r=t(70865),o=t(52322),l=(t(2784),t(40506)),i=t(61137);n.Z=function(e){return(0,o.jsx)(i.Z,(0,r.Z)({icon:l.Z},e))}},57393:function(e,n,t){"use strict";var r=t(2784),o=t(13980),l=t.n(o);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=(0,r.forwardRef)((function(e,n){var t=e.color,o=void 0===t?"currentColor":t,l=e.size,a=void 0===l?24:l,c=s(e,["color","size"]);return r.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("path",{d:"M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"}),r.createElement("polyline",{points:"13 2 13 9 20 9"}))}));a.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},a.displayName="File",n.Z=a},40506:function(e,n,t){"use strict";var r=t(2784),o=t(13980),l=t.n(o);function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=(0,r.forwardRef)((function(e,n){var t=e.color,o=void 0===t?"currentColor":t,l=e.size,a=void 0===l?24:l,c=s(e,["color","size"]);return r.createElement("svg",i({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:o,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("polyline",{points:"4 17 10 11 4 5"}),r.createElement("line",{x1:"12",y1:"19",x2:"20",y2:"19"}))}));a.propTypes={color:l().string,size:l().oneOfType([l().string,l().number])},a.displayName="Terminal",n.Z=a},20380:function(e,n,t){"use strict";var r=t(71600);n.Z=void 0;var o=r(t(75818)).default;n.Z=o}}]);