"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1500],{78195:function(e,l,s){s.d(l,{Z:function(){return E}});var o=s(52322),n=s(82098),r=s(50217),t=s(52993),a=s(48243),i=s(26852),c=s(2784),d=s(72282),h=s.n(d),u=s(56708),g=s(27666),j=s(86497),m=s(54299),f=s(14969),b=s(83667),p=s(20380),x={hljs:{display:"block",overflowX:"auto",padding:"0.5em",background:"#272822",color:"#ddd"},"hljs-tag":{color:"#569cd6"},"hljs-keyword":{color:"#569cd6",fontWeight:"normal"},"hljs-selector-tag":{color:"#569cd6",fontWeight:"normal"},"hljs-literal":{color:"#569cd6",fontWeight:"normal"},"hljs-strong":{color:"#569cd6"},"hljs-name":{color:"#569cd6"},"hljs-code":{color:"#66d9ef"},"hljs-class .hljs-title":{color:"gray"},"hljs-attribute":{color:"#bf79db"},"hljs-symbol":{color:"#bf79db"},"hljs-regexp":{color:"#bf79db"},"hljs-link":{color:"#bf79db"},"hljs-string":{color:"#3ECF8E"},"hljs-bullet":{color:"#3ECF8E"},"hljs-subst":{color:"#3ECF8E"},"hljs-title":{color:"#3ECF8E",fontWeight:"normal"},"hljs-section":{color:"#3ECF8E",fontWeight:"normal"},"hljs-emphasis":{color:"#3ECF8E"},"hljs-type":{color:"#3ECF8E",fontWeight:"normal"},"hljs-built_in":{color:"#3ECF8E"},"hljs-builtin-name":{color:"#3ECF8E"},"hljs-selector-attr":{color:"#3ECF8E"},"hljs-selector-pseudo":{color:"#3ECF8E"},"hljs-addition":{color:"#3ECF8E"},"hljs-variable":{color:"#3ECF8E"},"hljs-template-tag":{color:"#3ECF8E"},"hljs-template-variable":{color:"#3ECF8E"},"hljs-comment":{color:"#75715e"},"hljs-quote":{color:"#75715e"},"hljs-deletion":{color:"#75715e"},"hljs-meta":{color:"#75715e"},"hljs-doctag":{fontWeight:"normal"},"hljs-selector-id":{fontWeight:"normal"}};var E=function(e){var l=(0,c.useState)(!1),s=l[0],d=l[1],E=e.children?e.children.split("\n")[0]:"",Z="";E.includes("filename =")&&(Z=E.split("=")[1]);var v,C=e.children&&Z?e.children.replace("".concat(E,"\n\n"),""):e.children,N=e.lang?e.lang:e.className?e.className.replace("language-",""):"js";return"jsx"===N&&(N="js"),u.Z.registerLanguage("js",j.Z),u.Z.registerLanguage("py",m.Z),u.Z.registerLanguage("sql",f.Z),u.Z.registerLanguage("bash",g.Z),u.Z.registerLanguage("kotlin",b.Z),u.Z.registerLanguage("go",p.Z),(0,o.jsxs)("div",{className:"not-prose dark overflow-hidden",children:[Z&&(0,o.jsxs)("div",{className:" bg-scale-200 text-scale-900 flex h-8 w-full items-center gap-1 rounded-tr rounded-tl border-t border-r border-l px-4 font-sans ",children:["bash"===N?(0,o.jsx)(n.Z,{size:12,strokeWidth:2}):(0,o.jsx)(r.Z,{size:12,strokeWidth:2}),(0,o.jsx)("span",{className:"text-xs",children:null!==Z&&void 0!==Z?Z:"index.js"})]}),(0,o.jsxs)("div",{className:"relative",children:[(0,o.jsx)(u.Z,{language:N,style:x,className:[!Z&&"rounded-t-lg","rounded-b-lg"].join(" "),customStyle:{padding:"21px 24px",fontSize:"0.775rem",fontFamily:'"Dank Mono", "Monaco", "Courier New", monospace',lineHeight:1.4,background:null!==(v=e.background)&&void 0!==v?v:"#141414"},showLineNumbers:e.showLineNumbers,lineNumberStyle:{padding:"0px",marginRight:"21px",minWidth:"1.5em",opacity:"0.3",fontSize:"0.75rem"},children:C}),!e.hideCopy&&e.children?(0,o.jsx)("div",{className:"dark absolute right-2 top-2",children:(0,o.jsx)(h(),{text:e.children,children:(0,o.jsx)(t.z,{type:"text",icon:s?(0,o.jsx)("span",{className:"text-brand",children:(0,o.jsx)(a.Z,{strokeWidth:3})}):(0,o.jsx)(i.Z,{}),onClick:function(){return d(!0),void setTimeout((function(){d(!1)}),1e3)},"aria-label":"Copy"})})}):null]})]})}},45532:function(e,l,s){var o=s(52322),n=(s(2784),s(11590)),r=s(78195);l.Z=function(e){var l=e.code,s=e.style,t=e.className,a=e.showLineNumbers;return(0,o.jsxs)("div",{className:(0,n.cn)("relative rounded-2xl shadow-lg p-2 pt-0 w-full h-full bg-alternative-200 border flex flex-col",t),style:s,children:[(0,o.jsxs)("div",{className:"w-full px-2 py-3 relative flex items-center gap-1.5 lg:gap-2",children:[(0,o.jsx)("div",{className:"w-2 h-2 bg-border rounded-full"}),(0,o.jsx)("div",{className:"w-2 h-2 bg-border rounded-full"}),(0,o.jsx)("div",{className:"w-2 h-2 bg-border rounded-full"})]}),(0,o.jsx)("div",{className:"h-full w-full rounded-lg",children:(0,o.jsx)(r.Z,{lang:"js",size:"small",showLineNumbers:a,children:l})})]})}},31500:function(e,l,s){s.r(l);var o=s(52322),n=(s(2784),s(45532));l.default=function(){return(0,o.jsx)(n.Z,{code:"import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'\n\nDeno.serve(async (req: Request) => {\n  // Create supabase client\n  const supabase = createClient(\n    Deno.env.get('SUPABASE_URL')!,\n    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!,\n    { global: {\n        headers: {\n          Authorization: req.headers.get('Authorization')!}\n        }\n    }\n  )\n\n  // Get the session or user object\n  const { data } = await supabase.auth.getUser()\n  const user = data.user\n})",showLineNumbers:!0})}},48243:function(e,l,s){var o=s(70865),n=s(52322),r=(s(2784),s(52766)),t=s(61137);l.Z=function(e){return(0,n.jsx)(t.Z,(0,o.Z)({icon:r.Z},e))}},26852:function(e,l,s){var o=s(70865),n=s(52322),r=(s(2784),s(35807)),t=s(61137);l.Z=function(e){return(0,n.jsx)(t.Z,(0,o.Z)({icon:r.Z},e))}},50217:function(e,l,s){var o=s(70865),n=s(52322),r=(s(2784),s(57393)),t=s(61137);l.Z=function(e){return(0,n.jsx)(t.Z,(0,o.Z)({icon:r.Z},e))}},82098:function(e,l,s){var o=s(70865),n=s(52322),r=(s(2784),s(40506)),t=s(61137);l.Z=function(e){return(0,n.jsx)(t.Z,(0,o.Z)({icon:r.Z},e))}}}]);