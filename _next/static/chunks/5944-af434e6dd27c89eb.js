"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5944],{64266:function(e,t,n){n.d(t,{VY:function(){return S},aV:function(){return j},fC:function(){return M},xz:function(){return A}});var r=n(7896),i=n(2784),o=n(17998),l=n(92211),a=n(2923),s=n(79616),c=n(72714),u=n(59241),f=n(87695),h=n(23372);const p="Tabs",[d,g]=(0,l.b)(p,[a.Pc]),m=(0,a.Pc)(),[b,k]=d(p),x=(0,i.forwardRef)(((e,t)=>{const{__scopeTabs:n,value:o,onValueChange:l,defaultValue:a,orientation:s="horizontal",dir:p,activationMode:d="automatic",...g}=e,m=(0,u.gm)(p),[k,x]=(0,f.T)({prop:o,onChange:l,defaultProp:a});return(0,i.createElement)(b,{scope:n,baseId:(0,h.M)(),value:k,onValueChange:x,orientation:s,dir:m,activationMode:d},(0,i.createElement)(c.WV.div,(0,r.Z)({dir:m,"data-orientation":s},g,{ref:t})))})),v="TabsList",y=(0,i.forwardRef)(((e,t)=>{const{__scopeTabs:n,loop:o=!0,...l}=e,s=k(v,n),u=m(n);return(0,i.createElement)(a.fC,(0,r.Z)({asChild:!0},u,{orientation:s.orientation,dir:s.dir,loop:o}),(0,i.createElement)(c.WV.div,(0,r.Z)({role:"tablist","aria-orientation":s.orientation},l,{ref:t})))})),C="TabsTrigger",w=(0,i.forwardRef)(((e,t)=>{const{__scopeTabs:n,value:l,disabled:s=!1,...u}=e,f=k(C,n),h=m(n),p=z(f.baseId,l),d=L(f.baseId,l),g=l===f.value;return(0,i.createElement)(a.ck,(0,r.Z)({asChild:!0},h,{focusable:!s,active:g}),(0,i.createElement)(c.WV.button,(0,r.Z)({type:"button",role:"tab","aria-selected":g,"aria-controls":d,"data-state":g?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:p},u,{ref:t,onMouseDown:(0,o.M)(e.onMouseDown,(e=>{s||0!==e.button||!1!==e.ctrlKey?e.preventDefault():f.onValueChange(l)})),onKeyDown:(0,o.M)(e.onKeyDown,(e=>{[" ","Enter"].includes(e.key)&&f.onValueChange(l)})),onFocus:(0,o.M)(e.onFocus,(()=>{const e="manual"!==f.activationMode;g||s||!e||f.onValueChange(l)}))})))})),D="TabsContent",F=(0,i.forwardRef)(((e,t)=>{const{__scopeTabs:n,value:o,forceMount:l,children:a,...u}=e,f=k(D,n),h=z(f.baseId,o),p=L(f.baseId,o),d=o===f.value,g=(0,i.useRef)(d);return(0,i.useEffect)((()=>{const e=requestAnimationFrame((()=>g.current=!1));return()=>cancelAnimationFrame(e)}),[]),(0,i.createElement)(s.z,{present:l||d},(({present:n})=>(0,i.createElement)(c.WV.div,(0,r.Z)({"data-state":d?"active":"inactive","data-orientation":f.orientation,role:"tabpanel","aria-labelledby":h,hidden:!n,id:p,tabIndex:0},u,{ref:t,style:{...e.style,animationDuration:g.current?"0s":void 0}}),n&&a)))}));function z(e,t){return`${e}-trigger-${t}`}function L(e,t){return`${e}-content-${t}`}const M=x,j=y,A=w,S=F},98351:function(e,t,n){n.d(t,{Z:function(){return We}});var r=n(87842),i=n(51748);const o={tokenize:function(e,t,n){let r=0;return function t(o){if((87===o||119===o)&&r<3)return r++,e.consume(o),t;if(46===o&&3===r)return e.consume(o),i;return n(o)};function i(e){return null===e?n(e):t(e)}},partial:!0},l={tokenize:function(e,t,n){let r,o,l;return a;function a(t){return 46===t||95===t?e.check(s,u,c)(t):null===t||(0,i.z3)(t)||(0,i.B8)(t)||45!==t&&(0,i.Xh)(t)?u(t):(l=!0,e.consume(t),a)}function c(t){return 95===t?r=!0:(o=r,r=void 0),e.consume(t),a}function u(e){return o||r||!l?n(e):t(e)}},partial:!0},a={tokenize:function(e,t){let n=0,r=0;return o;function o(a){return 40===a?(n++,e.consume(a),o):41===a&&r<n?l(a):33===a||34===a||38===a||39===a||41===a||42===a||44===a||46===a||58===a||59===a||60===a||63===a||93===a||95===a||126===a?e.check(s,t,l)(a):null===a||(0,i.z3)(a)||(0,i.B8)(a)?t(a):(e.consume(a),o)}function l(t){return 41===t&&r++,e.consume(t),o}},partial:!0},s={tokenize:function(e,t,n){return r;function r(a){return 33===a||34===a||39===a||41===a||42===a||44===a||46===a||58===a||59===a||63===a||95===a||126===a?(e.consume(a),r):38===a?(e.consume(a),l):93===a?(e.consume(a),o):60===a||null===a||(0,i.z3)(a)||(0,i.B8)(a)?t(a):n(a)}function o(e){return null===e||40===e||91===e||(0,i.z3)(e)||(0,i.B8)(e)?t(e):r(e)}function l(e){return(0,i.jv)(e)?a(e):n(e)}function a(t){return 59===t?(e.consume(t),r):(0,i.jv)(t)?(e.consume(t),a):n(t)}},partial:!0},c={tokenize:function(e,t,n){return function(t){return e.consume(t),r};function r(e){return(0,i.H$)(e)?n(e):t(e)}},partial:!0},u={tokenize:function(e,t,n){const r=this;return function(t){if(87!==t&&119!==t||!m.call(r,r.previous)||v(r.events))return n(t);return e.enter("literalAutolink"),e.enter("literalAutolinkWww"),e.check(o,e.attempt(l,e.attempt(a,i),n),n)(t)};function i(n){return e.exit("literalAutolinkWww"),e.exit("literalAutolink"),t(n)}},previous:m},f={tokenize:function(e,t,n){const r=this;let o="",s=!1;return function(t){if((72===t||104===t)&&b.call(r,r.previous)&&!v(r.events))return e.enter("literalAutolink"),e.enter("literalAutolinkHttp"),o+=String.fromCodePoint(t),e.consume(t),c;return n(t)};function c(t){if((0,i.jv)(t)&&o.length<5)return o+=String.fromCodePoint(t),e.consume(t),c;if(58===t){const n=o.toLowerCase();if("http"===n||"https"===n)return e.consume(t),u}return n(t)}function u(t){return 47===t?(e.consume(t),s?f:(s=!0,u)):n(t)}function f(t){return null===t||(0,i.Av)(t)||(0,i.z3)(t)||(0,i.B8)(t)||(0,i.Xh)(t)?n(t):e.attempt(l,e.attempt(a,h),n)(t)}function h(n){return e.exit("literalAutolinkHttp"),e.exit("literalAutolink"),t(n)}},previous:b},h={tokenize:function(e,t,n){const r=this;let o,l;return function(t){if(!x(t)||!k.call(r,r.previous)||v(r.events))return n(t);return e.enter("literalAutolink"),e.enter("literalAutolinkEmail"),a(t)};function a(t){return x(t)?(e.consume(t),a):64===t?(e.consume(t),s):n(t)}function s(t){return 46===t?e.check(c,f,u)(t):45===t||95===t||(0,i.H$)(t)?(l=!0,e.consume(t),s):f(t)}function u(t){return e.consume(t),o=!0,s}function f(a){return l&&o&&(0,i.jv)(r.previous)?(e.exit("literalAutolinkEmail"),e.exit("literalAutolink"),t(a)):n(a)}},previous:k},p={},d={text:p};let g=48;for(;g<123;)p[g]=h,g++,58===g?g=65:91===g&&(g=97);function m(e){return null===e||40===e||42===e||95===e||91===e||93===e||126===e||(0,i.z3)(e)}function b(e){return!(0,i.jv)(e)}function k(e){return!(47===e||x(e))}function x(e){return 43===e||45===e||46===e||95===e||(0,i.H$)(e)}function v(e){let t=e.length,n=!1;for(;t--;){const r=e[t][1];if(("labelLink"===r.type||"labelImage"===r.type)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}p[43]=h,p[45]=h,p[46]=h,p[95]=h,p[72]=[h,f],p[104]=[h,f],p[87]=[h,u],p[119]=[h,u];var y=n(8466),C=n(72473),w=n(36910);const D={tokenize:function(e,t,n){const r=this;return(0,C.f)(e,(function(e){const i=r.events[r.events.length-1];return i&&"gfmFootnoteDefinitionIndent"===i[1].type&&4===i[2].sliceSerialize(i[1],!0).length?t(e):n(e)}),"gfmFootnoteDefinitionIndent",5)},partial:!0};function F(e,t,n){const r=this;let i=r.events.length;const o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l;for(;i--;){const e=r.events[i][1];if("labelImage"===e.type){l=e;break}if("gfmFootnoteCall"===e.type||"labelLink"===e.type||"label"===e.type||"image"===e.type||"link"===e.type)break}return function(i){if(!l||!l._balanced)return n(i);const a=(0,w.d)(r.sliceSerialize({start:l.end,end:r.now()}));if(94!==a.codePointAt(0)||!o.includes(a.slice(1)))return n(i);return e.enter("gfmFootnoteCallLabelMarker"),e.consume(i),e.exit("gfmFootnoteCallLabelMarker"),t(i)}}function z(e,t){let n,r=e.length;for(;r--;)if("labelImage"===e[r][1].type&&"enter"===e[r][0]){n=e[r][1];break}e[r+1][1].type="data",e[r+3][1].type="gfmFootnoteCallLabelMarker";const i={type:"gfmFootnoteCall",start:Object.assign({},e[r+3][1].start),end:Object.assign({},e[e.length-1][1].end)},o={type:"gfmFootnoteCallMarker",start:Object.assign({},e[r+3][1].end),end:Object.assign({},e[r+3][1].end)};o.end.column++,o.end.offset++,o.end._bufferIndex++;const l={type:"gfmFootnoteCallString",start:Object.assign({},o.end),end:Object.assign({},e[e.length-1][1].start)},a={type:"chunkString",contentType:"string",start:Object.assign({},l.start),end:Object.assign({},l.end)},s=[e[r+1],e[r+2],["enter",i,t],e[r+3],e[r+4],["enter",o,t],["exit",o,t],["enter",l,t],["enter",a,t],["exit",a,t],["exit",l,t],e[e.length-2],e[e.length-1],["exit",i,t]];return e.splice(r,e.length-r+1,...s),e}function L(e,t,n){const r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,a=0;return function(t){return e.enter("gfmFootnoteCall"),e.enter("gfmFootnoteCallLabelMarker"),e.consume(t),e.exit("gfmFootnoteCallLabelMarker"),s};function s(t){return 94!==t?n(t):(e.enter("gfmFootnoteCallMarker"),e.consume(t),e.exit("gfmFootnoteCallMarker"),e.enter("gfmFootnoteCallString"),e.enter("chunkString").contentType="string",c)}function c(s){if(a>999||93===s&&!l||null===s||91===s||(0,i.z3)(s))return n(s);if(93===s){e.exit("chunkString");const i=e.exit("gfmFootnoteCallString");return o.includes((0,w.d)(r.sliceSerialize(i)))?(e.enter("gfmFootnoteCallLabelMarker"),e.consume(s),e.exit("gfmFootnoteCallLabelMarker"),e.exit("gfmFootnoteCall"),t):n(s)}return(0,i.z3)(s)||(l=!0),a++,e.consume(s),92===s?u:c}function u(t){return 91===t||92===t||93===t?(e.consume(t),a++,c):c(t)}}function M(e,t,n){const r=this,o=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let l,a,s=0;return function(t){return e.enter("gfmFootnoteDefinition")._container=!0,e.enter("gfmFootnoteDefinitionLabel"),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),c};function c(t){return 94===t?(e.enter("gfmFootnoteDefinitionMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionMarker"),e.enter("gfmFootnoteDefinitionLabelString"),e.enter("chunkString").contentType="string",u):n(t)}function u(t){if(s>999||93===t&&!a||null===t||91===t||(0,i.z3)(t))return n(t);if(93===t){e.exit("chunkString");const n=e.exit("gfmFootnoteDefinitionLabelString");return l=(0,w.d)(r.sliceSerialize(n)),e.enter("gfmFootnoteDefinitionLabelMarker"),e.consume(t),e.exit("gfmFootnoteDefinitionLabelMarker"),e.exit("gfmFootnoteDefinitionLabel"),h}return(0,i.z3)(t)||(a=!0),s++,e.consume(t),92===t?f:u}function f(t){return 91===t||92===t||93===t?(e.consume(t),s++,u):u(t)}function h(t){return 58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),o.includes(l)||o.push(l),(0,C.f)(e,p,"gfmFootnoteDefinitionWhitespace")):n(t)}function p(e){return t(e)}}function j(e,t,n){return e.check(y.w,t,e.attempt(D,t,n))}function A(e){e.exit("gfmFootnoteDefinition")}var S=n(98391),E=n(20898),O=n(27828);function T(e){let t=(e||{}).singleTilde;const n={tokenize:function(e,n,r){const i=this.previous,o=this.events;let l=0;return function(t){if(126===i&&"characterEscape"!==o[o.length-1][1].type)return r(t);return e.enter("strikethroughSequenceTemporary"),a(t)};function a(o){const s=(0,E.r)(i);if(126===o)return l>1?r(o):(e.consume(o),l++,a);if(l<2&&!t)return r(o);const c=e.exit("strikethroughSequenceTemporary"),u=(0,E.r)(o);return c._open=!u||2===u&&Boolean(s),c._close=!s||2===s&&Boolean(u),n(o)}},resolveAll:function(e,t){let n=-1;for(;++n<e.length;)if("enter"===e[n][0]&&"strikethroughSequenceTemporary"===e[n][1].type&&e[n][1]._close){let r=n;for(;r--;)if("exit"===e[r][0]&&"strikethroughSequenceTemporary"===e[r][1].type&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type="strikethroughSequence",e[r][1].type="strikethroughSequence";const i={type:"strikethrough",start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},o={type:"strikethroughText",start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},l=[["enter",i,t],["enter",e[r][1],t],["exit",e[r][1],t],["enter",o,t]],a=t.parser.constructs.insideSpan.null;a&&(0,S.d)(l,l.length,0,(0,O.C)(a,e.slice(r+1,n),t)),(0,S.d)(l,l.length,0,[["exit",o,t],["enter",e[n][1],t],["exit",e[n][1],t],["exit",i,t]]),(0,S.d)(e,r-1,n-r+3,l),n=r+l.length-2;break}}n=-1;for(;++n<e.length;)"strikethroughSequenceTemporary"===e[n][1].type&&(e[n][1].type="data");return e}};return null!==t&&void 0!==t||(t=!0),{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}}}class R{constructor(){this.map=[]}add(e,t,n){!function(e,t,n,r){let i=0;if(0===n&&0===r.length)return;for(;i<e.map.length;){if(e.map[i][0]===t)return e.map[i][1]+=n,void e.map[i][2].push(...r);i+=1}e.map.push([t,n,r])}(this,e,t,n)}consume(e){if(this.map.sort(((e,t)=>e[0]-t[0])),0===this.map.length)return;let t=this.map.length;const n=[];for(;t>0;)t-=1,n.push(e.slice(this.map[t][0]+this.map[t][1])),n.push(this.map[t][2]),e.length=this.map[t][0];n.push([...e]),e.length=0;let r=n.pop();for(;r;)e.push(...r),r=n.pop();this.map.length=0}}function _(e,t){let n=!1;const r=[];for(;t<e.length;){const i=e[t];if(n){if("enter"===i[0])"tableContent"===i[1].type&&r.push("tableDelimiterMarker"===e[t+1][1].type?"left":"none");else if("tableContent"===i[1].type){if("tableDelimiterMarker"===e[t-1][1].type){const e=r.length-1;r[e]="left"===r[e]?"center":"right"}}else if("tableDelimiterRow"===i[1].type)break}else"enter"===i[0]&&"tableDelimiterRow"===i[1].type&&(n=!0);t+=1}return r}const I={flow:{null:{tokenize:function(e,t,n){const r=this;let o,l=0,a=0;return function(e){let t=r.events.length-1;for(;t>-1;){const e=r.events[t][1].type;if("lineEnding"!==e&&"linePrefix"!==e)break;t--}const i=t>-1?r.events[t][1].type:null,o="tableHead"===i||"tableRow"===i?y:s;if(o===y&&r.parser.lazy[r.now().line])return n(e);return o(e)};function s(t){return e.enter("tableHead"),e.enter("tableRow"),function(e){if(124===e)return c(e);return o=!0,a+=1,c(e)}(t)}function c(t){return null===t?n(t):(0,i.Ch)(t)?a>1?(a=0,r.interrupt=!0,e.exit("tableRow"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),h):n(t):(0,i.xz)(t)?(0,C.f)(e,c,"whitespace")(t):(a+=1,o&&(o=!1,l+=1),124===t?(e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),o=!0,c):(e.enter("data"),u(t)))}function u(t){return null===t||124===t||(0,i.z3)(t)?(e.exit("data"),c(t)):(e.consume(t),92===t?f:u)}function f(t){return 92===t||124===t?(e.consume(t),u):u(t)}function h(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter("tableDelimiterRow"),o=!1,(0,i.xz)(t)?(0,C.f)(e,p,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):p(t))}function p(t){return 45===t||58===t?g(t):124===t?(o=!0,e.enter("tableCellDivider"),e.consume(t),e.exit("tableCellDivider"),d):v(t)}function d(t){return(0,i.xz)(t)?(0,C.f)(e,g,"whitespace")(t):g(t)}function g(t){return 58===t?(a+=1,o=!0,e.enter("tableDelimiterMarker"),e.consume(t),e.exit("tableDelimiterMarker"),m):45===t?(a+=1,m(t)):null===t||(0,i.Ch)(t)?x(t):v(t)}function m(t){return 45===t?(e.enter("tableDelimiterFiller"),b(t)):v(t)}function b(t){return 45===t?(e.consume(t),b):58===t?(o=!0,e.exit("tableDelimiterFiller"),e.enter("tableDelimiterMarker"),e.consume(t),e.exit("tableDelimiterMarker"),k):(e.exit("tableDelimiterFiller"),k(t))}function k(t){return(0,i.xz)(t)?(0,C.f)(e,x,"whitespace")(t):x(t)}function x(n){return 124===n?p(n):(null===n||(0,i.Ch)(n))&&o&&l===a?(e.exit("tableDelimiterRow"),e.exit("tableHead"),t(n)):v(n)}function v(e){return n(e)}function y(t){return e.enter("tableRow"),w(t)}function w(n){return 124===n?(e.enter("tableCellDivider"),e.consume(n),e.exit("tableCellDivider"),w):null===n||(0,i.Ch)(n)?(e.exit("tableRow"),t(n)):(0,i.xz)(n)?(0,C.f)(e,w,"whitespace")(n):(e.enter("data"),D(n))}function D(t){return null===t||124===t||(0,i.z3)(t)?(e.exit("data"),w(t)):(e.consume(t),92===t?F:D)}function F(t){return 92===t||124===t?(e.consume(t),D):D(t)}},resolveAll:function(e,t){let n,r,i,o=-1,l=!0,a=0,s=[0,0,0,0],c=[0,0,0,0],u=!1,f=0;const h=new R;for(;++o<e.length;){const p=e[o],d=p[1];"enter"===p[0]?"tableHead"===d.type?(u=!1,0!==f&&($(h,t,f,n,r),r=void 0,f=0),n={type:"table",start:Object.assign({},d.start),end:Object.assign({},d.end)},h.add(o,0,[["enter",n,t]])):"tableRow"===d.type||"tableDelimiterRow"===d.type?(l=!0,i=void 0,s=[0,0,0,0],c=[0,o+1,0,0],u&&(u=!1,r={type:"tableBody",start:Object.assign({},d.start),end:Object.assign({},d.end)},h.add(o,0,[["enter",r,t]])),a="tableDelimiterRow"===d.type?2:r?3:1):!a||"data"!==d.type&&"tableDelimiterMarker"!==d.type&&"tableDelimiterFiller"!==d.type?"tableCellDivider"===d.type&&(l?l=!1:(0!==s[1]&&(c[0]=c[1],i=V(h,t,s,a,void 0,i)),s=c,c=[s[1],o,0,0])):(l=!1,0===c[2]&&(0!==s[1]&&(c[0]=c[1],i=V(h,t,s,a,void 0,i),s=[0,0,0,0]),c[2]=o)):"tableHead"===d.type?(u=!0,f=o):"tableRow"===d.type||"tableDelimiterRow"===d.type?(f=o,0!==s[1]?(c[0]=c[1],i=V(h,t,s,a,o,i)):0!==c[1]&&(i=V(h,t,c,a,o,i)),a=0):!a||"data"!==d.type&&"tableDelimiterMarker"!==d.type&&"tableDelimiterFiller"!==d.type||(c[3]=o)}0!==f&&$(h,t,f,n,r);h.consume(t.events),o=-1;for(;++o<t.events.length;){const e=t.events[o];"enter"===e[0]&&"table"===e[1].type&&(e[1]._align=_(t.events,o))}return e}}}};function V(e,t,n,r,i,o){const l=1===r?"tableHeader":2===r?"tableDelimiter":"tableData";0!==n[0]&&(o.end=Object.assign({},B(t.events,n[0])),e.add(n[0],0,[["exit",o,t]]));const a=B(t.events,n[1]);if(o={type:l,start:Object.assign({},a),end:Object.assign({},a)},e.add(n[1],0,[["enter",o,t]]),0!==n[2]){const i=B(t.events,n[2]),o=B(t.events,n[3]),l={type:"tableContent",start:Object.assign({},i),end:Object.assign({},o)};if(e.add(n[2],0,[["enter",l,t]]),2!==r){const r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type="chunkText",r[1].contentType="text",n[3]>n[2]+1){const t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[["exit",l,t]])}return void 0!==i&&(o.end=Object.assign({},B(t.events,i)),e.add(i,0,[["exit",o,t]]),o=void 0),o}function $(e,t,n,r,i){const o=[],l=B(t.events,n);i&&(i.end=Object.assign({},l),o.push(["exit",i,t])),r.end=Object.assign({},l),o.push(["exit",r,t]),e.add(n+1,0,o)}function B(e,t){const n=e[t],r="enter"===n[0]?"start":"end";return n[1][r]}const H={tokenize:function(e,t,n){const r=this;return function(t){if(null!==r.previous||!r._gfmTasklistFirstContentOfListItem)return n(t);return e.enter("taskListCheck"),e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),o};function o(t){return(0,i.z3)(t)?(e.enter("taskListCheckValueUnchecked"),e.consume(t),e.exit("taskListCheckValueUnchecked"),l):88===t||120===t?(e.enter("taskListCheckValueChecked"),e.consume(t),e.exit("taskListCheckValueChecked"),l):n(t)}function l(t){return 93===t?(e.enter("taskListCheckMarker"),e.consume(t),e.exit("taskListCheckMarker"),e.exit("taskListCheck"),a):n(t)}function a(r){return(0,i.Ch)(r)?t(r):(0,i.xz)(r)?e.check({tokenize:W},t,n)(r):n(r)}}},P={text:{91:H}};function W(e,t,n){return(0,C.f)(e,(function(e){return null===e?n(e):t(e)}),"whitespace")}function Z(e,t){const n=String(e);if("string"!==typeof t)throw new TypeError("Expected character");let r=0,i=n.indexOf(t);for(;-1!==i;)r++,i=n.indexOf(t,i+t.length);return r}var q=n(98578),U=n(27689);const K={}.hasOwnProperty,X=function(e,t,n,r){let i,o;"string"===typeof t||t instanceof RegExp?(o=[[t,n]],i=r):(o=t,i=n),i||(i={});const l=(0,U.O)(i.ignore||[]),a=function(e){const t=[];if("object"!==typeof e)throw new TypeError("Expected array or object as schema");if(Array.isArray(e)){let n=-1;for(;++n<e.length;)t.push([N(e[n][0]),Q(e[n][1])])}else{let n;for(n in e)K.call(e,n)&&t.push([N(n),Q(e[n])])}return t}(o);let s=-1;for(;++s<a.length;)(0,q.S4)(e,"text",c);return e;function c(e,t){let n,r=-1;for(;++r<t.length;){const e=t[r];if(l(e,n?n.children.indexOf(e):void 0,n))return;n=e}if(n)return function(e,t){const n=t[t.length-1],r=a[s][0],i=a[s][1];let o=0;const l=n.children.indexOf(e);let c=!1,u=[];r.lastIndex=0;let f=r.exec(e.value);for(;f;){const n=f.index,l={index:f.index,input:f.input,stack:[...t,e]};let a=i(...f,l);if("string"===typeof a&&(a=a.length>0?{type:"text",value:a}:void 0),!1!==a&&(o!==n&&u.push({type:"text",value:e.value.slice(o,n)}),Array.isArray(a)?u.push(...a):a&&u.push(a),o=n+f[0].length,c=!0),!r.global)break;f=r.exec(e.value)}c?(o<e.value.length&&u.push({type:"text",value:e.value.slice(o)}),n.children.splice(l,1,...u)):u=[e];return l+u.length}(e,t)}};function N(e){return"string"===typeof e?new RegExp(function(e){if("string"!==typeof e)throw new TypeError("Expected a string");return e.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}(e),"g"):e}function Q(e){return"function"===typeof e?e:()=>e}const Y="phrasing",G=["autolink","link","image","label"],J={transforms:[function(e){X(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,ne],[/([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/g,re]],{ignore:["link","linkReference"]})}],enter:{literalAutolink:function(e){this.enter({type:"link",title:null,url:"",children:[]},e)},literalAutolinkEmail:te,literalAutolinkHttp:te,literalAutolinkWww:te},exit:{literalAutolink:function(e){this.exit(e)},literalAutolinkEmail:function(e){this.config.exit.autolinkEmail.call(this,e)},literalAutolinkHttp:function(e){this.config.exit.autolinkProtocol.call(this,e)},literalAutolinkWww:function(e){this.config.exit.data.call(this,e);this.stack[this.stack.length-1].url="http://"+this.sliceSerialize(e)}}},ee={unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Y,notInConstruct:G},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Y,notInConstruct:G},{character:":",before:"[ps]",after:"\\/",inConstruct:Y,notInConstruct:G}]};function te(e){this.config.enter.autolinkProtocol.call(this,e)}function ne(e,t,n,r,i){let o="";if(!ie(i))return!1;if(/^w/i.test(t)&&(n=t+n,t="",o="http://"),!function(e){const t=e.split(".");if(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))return!1;return!0}(n))return!1;const l=function(e){const t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(")");const i=Z(e,"(");let o=Z(e,")");for(;-1!==r&&i>o;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(")"),o++;return[e,n]}(n+r);if(!l[0])return!1;const a={type:"link",title:null,url:o+t+l[0],children:[{type:"text",value:t+l[0]}]};return l[1]?[a,{type:"text",value:l[1]}]:a}function re(e,t,n,r){return!(!ie(r,!0)||/[-\d_]$/.test(n))&&{type:"link",title:null,url:"mailto:"+t+"@"+n,children:[{type:"text",value:t+"@"+n}]}}function ie(e,t){const n=e.input.charCodeAt(e.index-1);return(0===e.index||(0,i.B8)(n)||(0,i.Xh)(n))&&(!t||47!==n)}var oe=n(12857);function le(e){return e.label||!e.identifier?e.label||"":(0,oe.v)(e.identifier)}function ae(e,t,n,r){let i=r.join.length;for(;i--;){const o=r.join[i](e,t,n,r);if(!0===o||1===o)break;if("number"===typeof o)return"\n".repeat(1+o);if(!1===o)return"\n\n\x3c!----\x3e\n\n"}return"\n\n"}const se=/\r?\n|\r/g;function ce(e){if(!e._compiled){const t=(e.atBreak?"[\\r\\n][\\t ]*":"")+(e.before?"(?:"+e.before+")":"");e._compiled=new RegExp((t?"("+t+")":"")+(/[|\\{}()[\]^$+*?.-]/.test(e.character)?"\\":"")+e.character+(e.after?"(?:"+e.after+")":""),"g")}return e._compiled}function ue(e,t){return fe(e,t.inConstruct,!0)&&!fe(e,t.notInConstruct,!1)}function fe(e,t,n){if("string"===typeof t&&(t=[t]),!t||0===t.length)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function he(e,t,n){const r=(n.before||"")+(t||"")+(n.after||""),i=[],o=[],l={};let a=-1;for(;++a<e.unsafe.length;){const t=e.unsafe[a];if(!ue(e.stack,t))continue;const n=ce(t);let o;for(;o=n.exec(r);){const e="before"in t||Boolean(t.atBreak),n="after"in t,r=o.index+(e?o[1].length:0);i.includes(r)?(l[r].before&&!e&&(l[r].before=!1),l[r].after&&!n&&(l[r].after=!1)):(i.push(r),l[r]={before:e,after:n})}}i.sort(pe);let s=n.before?n.before.length:0;const c=r.length-(n.after?n.after.length:0);for(a=-1;++a<i.length;){const e=i[a];e<s||e>=c||(e+1<c&&i[a+1]===e+1&&l[e].after&&!l[e+1].before&&!l[e+1].after||i[a-1]===e-1&&l[e].before&&!l[e-1].before&&!l[e-1].after||(s!==e&&o.push(de(r.slice(s,e),"\\")),s=e,!/[!-/:-@[-`{-~]/.test(r.charAt(e))||n.encode&&n.encode.includes(r.charAt(e))?(o.push("&#x"+r.charCodeAt(e).toString(16).toUpperCase()+";"),s++):o.push("\\")))}return o.push(de(r.slice(s,c),n.after)),o.join("")}function pe(e,t){return e-t}function de(e,t){const n=/\\(?=[!-/:-@[-`{-~])/g,r=[],i=[],o=e+t;let l,a=-1,s=0;for(;l=n.exec(o);)r.push(l.index);for(;++a<r.length;)s!==r[a]&&i.push(e.slice(s,r[a])),i.push("\\"),s=r[a];return i.push(e.slice(s)),i.join("")}function ge(e){const t=e||{},n=t.now||{};let r=t.lineShift||0,i=n.line||1,o=n.column||1;return{move:function(e){const t=e||"",n=t.split(/\r?\n|\r/g),l=n[n.length-1];return i+=n.length-1,o=1===n.length?o+l.length:1+l.length+r,t},current:function(){return{now:{line:i,column:o},lineShift:r}},shift:function(e){r+=e}}}function me(e){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},e)}function be(){this.buffer()}function ke(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=(0,w.d)(this.sliceSerialize(e)).toLowerCase()}function xe(e){this.exit(e)}function ve(e){this.enter({type:"footnoteReference",identifier:"",label:""},e)}function ye(){this.buffer()}function Ce(e){const t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=(0,w.d)(this.sliceSerialize(e)).toLowerCase()}function we(e){this.exit(e)}function De(e,t,n,r){const i=ge(r);let o=i.move("[^");const l=n.enter("footnoteReference"),a=n.enter("reference");return o+=i.move(he(n,le(e),{...i.current(),before:o,after:"]"})),a(),l(),o+=i.move("]"),o}function Fe(e,t,n,r){const i=ge(r);let o=i.move("[^");const l=n.enter("footnoteDefinition"),a=n.enter("label");return o+=i.move(he(n,le(e),{...i.current(),before:o,after:"]"})),a(),o+=i.move("]:"+(e.children&&e.children.length>0?" ":"")),i.shift(4),o+=i.move(function(e,t){const n=[];let r,i=0,o=0;for(;r=se.exec(e);)l(e.slice(i,r.index)),n.push(r[0]),i=r.index+r[0].length,o++;return l(e.slice(i)),n.join("");function l(e){n.push(t(e,o,!e))}}(function(e,t,n){const r=t.indexStack,i=e.children||[],o=t.createTracker(n),l=[];let a=-1;for(r.push(-1);++a<i.length;){const n=i[a];r[r.length-1]=a,l.push(o.move(t.handle(n,e,t,{before:"\n",after:"\n",...o.current()}))),"list"!==n.type&&(t.bulletLastUsed=void 0),a<i.length-1&&l.push(o.move(ae(n,i[a+1],e,t)))}return r.pop(),l.join("")}(e,n,i.current()),ze)),l(),o}function ze(e,t,n){return 0===t?e:(n?"":"    ")+e}function Le(e,t,n){const r=t.indexStack,i=e.children||[],o=[];let l=-1,a=n.before;r.push(-1);let s=t.createTracker(n);for(;++l<i.length;){const c=i[l];let u;if(r[r.length-1]=l,l+1<i.length){let n=t.handle.handlers[i[l+1].type];n&&n.peek&&(n=n.peek),u=n?n(i[l+1],e,t,{before:"",after:"",...s.current()}).charAt(0):""}else u=n.after;o.length>0&&("\r"===a||"\n"===a)&&"html"===c.type&&(o[o.length-1]=o[o.length-1].replace(/(\r?\n|\r)$/," "),a=" ",s=t.createTracker(n),s.move(o.join(""))),o.push(s.move(t.handle(c,e,t,{...s.current(),before:a,after:u}))),a=o[o.length-1].slice(-1)}return r.pop(),o.join("")}De.peek=function(){return"["};Ae.peek=function(){return"~"};const Me={canContainEols:["delete"],enter:{strikethrough:function(e){this.enter({type:"delete",children:[]},e)}},exit:{strikethrough:function(e){this.exit(e)}}},je={unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"]}],handlers:{delete:Ae}};function Ae(e,t,n,r){const i=ge(r),o=n.enter("strikethrough");let l=i.move("~~");return l+=Le(e,n,{...i.current(),before:l,after:"~"}),l+=i.move("~~"),o(),l}function Se(e,t,n){let r=e.value||"",i="`",o=-1;for(;new RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++o<n.unsafe.length;){const e=n.unsafe[o],t=ce(e);let i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;10===r.charCodeAt(e)&&13===r.charCodeAt(e-1)&&e--,r=r.slice(0,e)+" "+r.slice(i.index+1)}}return i+r+i}function Ee(e){return e.length}function Oe(e){const t="string"===typeof e?e.codePointAt(0):0;return 67===t||99===t?99:76===t||108===t?108:82===t||114===t?114:0}Se.peek=function(){return"`"};const Te={enter:{table:function(e){const t=e._align;this.enter({type:"table",align:t.map((e=>"none"===e?null:e)),children:[]},e),this.setData("inTable",!0)},tableData:_e,tableHeader:_e,tableRow:function(e){this.enter({type:"tableRow",children:[]},e)}},exit:{codeText:function(e){let t=this.resume();this.getData("inTable")&&(t=t.replace(/\\([\\|])/g,Ie));this.stack[this.stack.length-1].value=t,this.exit(e)},table:function(e){this.exit(e),this.setData("inTable")},tableData:Re,tableHeader:Re,tableRow:Re}};function Re(e){this.exit(e)}function _e(e){this.enter({type:"tableCell",children:[]},e)}function Ie(e,t){return"|"===t?t:e}function Ve(e){const t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,o=n?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:"\n",inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[\t :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{table:function(e,t,n,r){return a(function(e,t,n){const r=e.children;let i=-1;const o=[],l=t.enter("table");for(;++i<r.length;)o[i]=s(r[i],t,n);return l(),o}(e,n,r),e.align)},tableRow:function(e,t,n,r){const i=a([s(e,n,r)]);return i.slice(0,i.indexOf("\n"))},tableCell:l,inlineCode:function(e,t,n){let r=Se(e,0,n);n.stack.includes("tableCell")&&(r=r.replace(/\|/g,"\\$&"));return r}}};function l(e,t,n,r){const i=n.enter("tableCell"),l=n.enter("phrasing"),a=Le(e,n,{...r,before:o,after:o});return l(),i(),a}function a(e,t){return function(e,t={}){const n=(t.align||[]).concat(),r=t.stringLength||Ee,i=[],o=[],l=[],a=[];let s=0,c=-1;for(;++c<e.length;){const n=[],i=[];let f=-1;for(e[c].length>s&&(s=e[c].length);++f<e[c].length;){const o=null===(u=e[c][f])||void 0===u?"":String(u);if(!1!==t.alignDelimiters){const e=r(o);i[f]=e,(void 0===a[f]||e>a[f])&&(a[f]=e)}n.push(o)}o[c]=n,l[c]=i}var u;let f=-1;if("object"===typeof n&&"length"in n)for(;++f<s;)i[f]=Oe(n[f]);else{const e=Oe(n);for(;++f<s;)i[f]=e}f=-1;const h=[],p=[];for(;++f<s;){const e=i[f];let n="",r="";99===e?(n=":",r=":"):108===e?n=":":114===e&&(r=":");let o=!1===t.alignDelimiters?1:Math.max(1,a[f]-n.length-r.length);const l=n+"-".repeat(o)+r;!1!==t.alignDelimiters&&(o=n.length+o+r.length,o>a[f]&&(a[f]=o),p[f]=o),h[f]=l}o.splice(1,0,h),l.splice(1,0,p),c=-1;const d=[];for(;++c<o.length;){const e=o[c],n=l[c];f=-1;const r=[];for(;++f<s;){const o=e[f]||"";let l="",c="";if(!1!==t.alignDelimiters){const e=a[f]-(n[f]||0),t=i[f];114===t?l=" ".repeat(e):99===t?e%2?(l=" ".repeat(e/2+.5),c=" ".repeat(e/2-.5)):(l=" ".repeat(e/2),c=l):c=" ".repeat(e)}!1===t.delimiterStart||f||r.push("|"),!1===t.padding||!1===t.alignDelimiters&&""===o||!1===t.delimiterStart&&!f||r.push(" "),!1!==t.alignDelimiters&&r.push(l),r.push(o),!1!==t.alignDelimiters&&r.push(c),!1!==t.padding&&r.push(" "),!1===t.delimiterEnd&&f===s-1||r.push("|")}d.push(!1===t.delimiterEnd?r.join("").replace(/ +$/,""):r.join(""))}return d.join("\n")}(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function s(e,t,n){const r=e.children;let i=-1;const o=[],a=t.enter("tableRow");for(;++i<r.length;)o[i]=l(r[i],0,t,n);return a(),o}}function $e(e,t,n,r){const i=function(e){const t=e.options.listItemIndent||"tab";if(1===t||"1"===t)return"one";if("tab"!==t&&"one"!==t&&"mixed"!==t)throw new Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}(n);let o=n.bulletCurrent||function(e){const t=e.options.bullet||"*";if("*"!==t&&"+"!==t&&"-"!==t)throw new Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}(n);t&&"list"===t.type&&t.ordered&&(o=("number"===typeof t.start&&t.start>-1?t.start:1)+(!1===n.options.incrementListMarker?0:t.children.indexOf(e))+o);let l=o.length+1;("tab"===i||"mixed"===i&&(t&&"list"===t.type&&t.spread||e.spread))&&(l=4*Math.ceil(l/4));const a=n.createTracker(r);a.move(o+" ".repeat(l-o.length)),a.shift(l);const s=n.enter("listItem"),c=n.indentLines(n.containerFlow(e,a.current()),(function(e,t,n){if(t)return(n?"":" ".repeat(l))+e;return(n?o:o+" ".repeat(l-o.length))+e}));return s(),c}const Be={exit:{taskListCheckValueChecked:Pe,taskListCheckValueUnchecked:Pe,paragraph:function(e){const t=this.stack[this.stack.length-2];if(t&&"listItem"===t.type&&"boolean"===typeof t.checked){const e=this.stack[this.stack.length-1],n=e.children[0];if(n&&"text"===n.type){const r=t.children;let i,o=-1;for(;++o<r.length;){const e=r[o];if("paragraph"===e.type){i=e;break}}i===e&&(n.value=n.value.slice(1),0===n.value.length?e.children.shift():e.position&&n.position&&"number"===typeof n.position.start.offset&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}}},He={unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:function(e,t,n,r){const i=e.children[0],o="boolean"===typeof e.checked&&i&&"paragraph"===i.type,l="["+(e.checked?"x":" ")+"] ",a=ge(r);o&&a.move(l);let s=$e(e,t,n,{...r,...a.current()});o&&(s=s.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,(function(e){return e+l})));return s}}};function Pe(e){this.stack[this.stack.length-2].checked="taskListCheckValueChecked"===e.type}function We(e={}){const t=this.data();function n(e,n){(t[e]?t[e]:t[e]=[]).push(n)}n("micromarkExtensions",function(e){return(0,r.W)([d,{document:{91:{tokenize:M,continuation:{tokenize:j},exit:A}},text:{91:{tokenize:L},93:{add:"after",tokenize:F,resolveTo:z}}},T(e),I,P])}(e)),n("fromMarkdownExtensions",[J,{enter:{gfmFootnoteDefinition:me,gfmFootnoteDefinitionLabelString:be,gfmFootnoteCall:ve,gfmFootnoteCallString:ye},exit:{gfmFootnoteDefinition:xe,gfmFootnoteDefinitionLabelString:ke,gfmFootnoteCall:we,gfmFootnoteCallString:Ce}},Me,Te,Be]),n("toMarkdownExtensions",function(e){return{extensions:[ee,{unsafe:[{character:"[",inConstruct:["phrasing","label","reference"]}],handlers:{footnoteDefinition:Fe,footnoteReference:De}},je,Ve(e),He]}}(e))}}}]);