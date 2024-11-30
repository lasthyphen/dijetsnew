(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7942],{57449:function(e){e.exports=function(){"use strict";return function(e,t){var n=t.prototype,a=n.format;n.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return a.bind(this)(e);var r=this.$utils(),i=(e||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,(function(e){switch(e){case"Q":return Math.ceil((t.$M+1)/3);case"Do":return n.ordinal(t.$D);case"gggg":return t.weekYear();case"GGGG":return t.isoWeekYear();case"wo":return n.ordinal(t.week(),"W");case"w":case"ww":return r.s(t.week(),"w"===e?1:2,"0");case"W":case"WW":return r.s(t.isoWeek(),"W"===e?1:2,"0");case"k":case"kk":return r.s(String(0===t.$H?24:t.$H),"k"===e?1:2,"0");case"X":return Math.floor(t.$d.getTime()/1e3);case"x":return t.$d.getTime();case"z":return"["+t.offsetName()+"]";case"zzz":return"["+t.offsetName("long")+"]";default:return e}}));return a.bind(this)(i)}}}()},67338:function(e){e.exports=function(){"use strict";var e={year:0,month:1,day:2,hour:3,minute:4,second:5},t={};return function(n,a,r){var i,l=function(e,n,a){void 0===a&&(a={});var r=new Date(e),i=function(e,n){void 0===n&&(n={});var a=n.timeZoneName||"short",r=e+"|"+a,i=t[r];return i||(i=new Intl.DateTimeFormat("en-US",{hour12:!1,timeZone:e,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:a}),t[r]=i),i}(n,a);return i.formatToParts(r)},s=function(t,n){for(var a=l(t,n),i=[],s=0;s<a.length;s+=1){var o=a[s],c=o.type,u=o.value,d=e[c];d>=0&&(i[d]=parseInt(u,10))}var h=i[3],v=24===h?0:h,m=i[0]+"-"+i[1]+"-"+i[2]+" "+v+":"+i[4]+":"+i[5]+":000",f=+t;return(r.utc(m).valueOf()-(f-=f%1e3))/6e4},o=a.prototype;o.tz=function(e,t){void 0===e&&(e=i);var n=this.utcOffset(),a=this.toDate(),l=a.toLocaleString("en-US",{timeZone:e}),s=Math.round((a-new Date(l))/1e3/60),o=r(l).$set("millisecond",this.$ms).utcOffset(15*-Math.round(a.getTimezoneOffset()/15)-s,!0);if(t){var c=o.utcOffset();o=o.add(n-c,"minute")}return o.$x.$timezone=e,o},o.offsetName=function(e){var t=this.$x.$timezone||r.tz.guess(),n=l(this.valueOf(),t,{timeZoneName:e}).find((function(e){return"timezonename"===e.type.toLowerCase()}));return n&&n.value};var c=o.startOf;o.startOf=function(e,t){if(!this.$x||!this.$x.$timezone)return c.call(this,e,t);var n=r(this.format("YYYY-MM-DD HH:mm:ss:SSS"));return c.call(n,e,t).tz(this.$x.$timezone,!0)},r.tz=function(e,t,n){var a=n&&t,l=n||t||i,o=s(+r(),l);if("string"!=typeof e)return r(e).tz(l);var c=function(e,t,n){var a=e-60*t*1e3,r=s(a,n);if(t===r)return[a,t];var i=s(a-=60*(r-t)*1e3,n);return r===i?[a,r]:[e-60*Math.min(r,i)*1e3,Math.max(r,i)]}(r.utc(e,a).valueOf(),o,l),u=c[0],d=c[1],h=r(u).utcOffset(d);return h.$x.$timezone=l,h},r.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},r.tz.setDefault=function(e){i=e}}}()},70599:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/[slug]",function(){return n(5161)}])},49601:function(e,t){"use strict";t.Z={www_hp_hero_startProject:{action:"www_hp_hero_startProject",category:"link",label:""},www_hp_hero_documentation:{action:"www_hp_hero_documentation",category:"link",label:""},www_hp_subhero_products_database:{action:"www_hp_subhero_products_database",category:"link",label:""},www_hp_subhero_products_auth:{action:"www_hp_subhero_products_auth",category:"link",label:""},www_hp_subhero_products_storage:{action:"www_hp_subhero_products_storage",category:"link",label:""},www_hp_subhero_products_edgeFunctions:{action:"www_hp_subhero_products_edgeFunctions",category:"link",label:""},www_hp_subhero_products_realtime:{action:"www_hp_subhero_products_realtime",category:"link",label:""}}},61958:function(e,t,n){"use strict";var a=n(63516),r=n(84466);t.Z={sendEvent:function(e,t,n){if(r.XK||r.rv){var i=e.category,l=e.action,s=e.label,o=e.value;return(0,a.v)("".concat(r.T5,"/telemetry/event"),{action:l,category:i,label:s,value:o,page_referrer:null===document||void 0===document?void 0:document.referrer,page_title:null===document||void 0===document?void 0:document.title,page_location:n.asPath,ga:{screen_resolution:null===t||void 0===t?void 0:t.screenResolution,language:null===t||void 0===t?void 0:t.language}})}}}},5161:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return T},default:function(){return W}});var a={};n.r(a),n.d(a,{default:function(){return S}});var r=n(98788),i=n(70865),l=n(96670),s=n(5163),o=n(52322),c=n(2784),u=n(96577),d=n.n(u),h=n(5632),v=n(91491),m=n(55351),f=n(28879),g=n.n(f);var p=c.forwardRef((function(e,t){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),c.createElement("path",{d:"M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"}))}));var x=c.forwardRef((function(e,t){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),c.createElement("path",{fillRule:"evenodd",d:"M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z",clipRule:"evenodd"}))}));var w=c.forwardRef((function(e,t){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),c.createElement("path",{fillRule:"evenodd",d:"M9 3a1 1 0 012 0v5.5a.5.5 0 001 0V4a1 1 0 112 0v4.5a.5.5 0 001 0V6a1 1 0 112 0v5a7 7 0 11-14 0V9a1 1 0 012 0v2.5a.5.5 0 001 0V4a1 1 0 012 0v4.5a.5.5 0 001 0V3z",clipRule:"evenodd"}))}));var _=c.forwardRef((function(e,t){return c.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",ref:t},e),c.createElement("path",{fillRule:"evenodd",d:"M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z",clipRule:"evenodd"}))})),b=n(61812),j=n(39916),N=n(77174),y=n(38617),z=n(5147),k=n(61958),A=n(49601),R=n(10264),Z=n.n(R),E=n(67338),D=n.n(E),O=n(57449),M=n.n(O),$=n(52993),V=n(7180),C=n(38020),Y=n(61939),G=n(39037),S={src:"/_next/static/media/dhun-light.c35269f0.png",height:464,width:1283,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAaklEQVR4nGOUUVarYRXiDPv78uvE75/vLODgledk+P+Pg4GBgRWIPzNKmWtf4DSS0/+y5+YGtnfflv3nZuVg+MfAz8jI8AKogIVRQEK8jlVFJOzPnTcTjH6LzrvB9UGQ8T/jP6CCr0AFHACy0SF7PNOKGAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3};const H=(0,n(56626).Z)("ChevronLeft",[["polyline",{points:"15 18 9 12 15 6",key:"kvxz59"}]]);var P=n(34406);g().extend(Z()),g().extend(D()),g().extend(M());var T=!0,W=function(e){var t,n,c,u,f,R,Z,E,D,O,M,S,T,W,U,L,B,F,I,X,K=e.event,Q=K.content,J=null===(t=K.speakers)||void 0===t?void 0:t.split(","),q=null===J||void 0===J?void 0:J.map((function(e){return b.find((function(t){return t.author_id===e}))})).filter(j.BX),ee=K.onDemand||Date.parse(K.date)>Date.now(),te={title:null!==(B=K.meta_title)&&void 0!==B?B:K.title,description:null!==(F=K.meta_description)&&void 0!==F?F:K.description,url:"https://supabase.com/events/".concat(K.slug)},ne={conference:function(e){return(0,o.jsx)(p,(0,i.Z)({},e))},hackathon:function(e){return(0,o.jsx)(x,(0,i.Z)({},e))},launch_week:function(e){return(0,o.jsx)(p,(0,i.Z)({},e))},meetup:function(e){return(0,o.jsx)(w,(0,i.Z)({},e))},talk:function(e){return(0,o.jsx)(_,(0,i.Z)({},e))},webinar:function(e){return(0,o.jsx)(p,(0,i.Z)({},e))}},ae=(0,y.F)().resolvedTheme,re="dark"===ae?"/images/events/events-bg-dark.svg":"/images/events/events-bg-light.svg",ie=ne[K.type],le=(0,h.useRouter)(),se=(0,z.Mk)(),oe=function(){var e=(0,r.Z)((function(e){return(0,s.__generator)(this,(function(t){switch(t.label){case 0:return[4,k.Z.sendEvent(e,se,le)];case 1:return t.sent(),[2]}}))}));return function(t){return e.apply(this,arguments)}}(),ce=z.jU?location.origin:P.env.VERCEL_URL?P.env.VERCEL_URL:"https://dijets.io";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(m.PB,{title:te.title,description:te.description,openGraph:{title:te.title,description:te.description,url:te.url,type:"article",images:[{url:"".concat(ce).concat(le.basePath,"/images/events/").concat(K.image?K.image:K.thumb),alt:"".concat(K.title," thumbnail"),width:1200,height:627}],videos:K.video?[{url:K.video,type:"application/x-shockwave-flash",width:640,height:385}]:void 0,article:{publishedTime:K.date,tags:null===(n=K.tags)||void 0===n?void 0:n.map((function(e){return e}))}}}),(0,o.jsxs)(V.Z,{children:[(0,o.jsx)("div",{className:"flex flex-col w-full bg-alternative",children:(0,o.jsx)(C.Z,{className:"!py-2 flex items-start my-4",children:(0,o.jsxs)("a",{href:"/events",className:"text-foreground-lighter hover:text-foreground flex !m-0 !p-0 !leading-3 gap-1 cursor-pointer items-center text-sm transition",children:[(0,o.jsx)(H,{className:"w-4 h-4"}),"All Events"]})})}),(0,o.jsxs)("div",{className:"flex flex-col w-full",children:[(0,o.jsxs)("header",{className:"relative bg-alternative w-full overflow-hidden",children:[(0,o.jsx)(d(),{src:re,alt:"",layout:"fill",sizes:"100%",className:"not-sr-only w-full h-full absolute inset-0 object-cover object-bottom"}),(0,o.jsx)(C.Z,{className:" relative z-10 lg:min-h-[400px] h-full grid grid-cols-1 lg:grid-cols-2 gap-8 text-foreground-light !py-10 md:!py-16 ",children:(0,o.jsxs)("div",{className:"h-full flex flex-col justify-between",children:[(0,o.jsxs)("div",{className:"flex flex-col gap-2 md:gap-3 items-start mb-8",children:[(0,o.jsxs)("div",{className:"flex flex-row text-sm items-center flex-wrap",children:[(0,o.jsx)(ie,{className:"hidden sm:inline-block w-4 h-4 text-brand mr-2"}),(0,o.jsx)("span",{className:"uppercase text-brand font-mono",children:K.type}),(0,o.jsx)("span",{className:"mx-3 px-3 border-x",children:g()(K.date).tz(K.timezone).format("DD MMM YYYY [at] hA z")}),(0,o.jsxs)("span",{className:"",children:["Duration: ",K.duration]})]}),(0,o.jsx)("h1",{className:"text-foreground text-3xl lg:text-4xl",children:K.title}),(0,o.jsx)("p",{children:K.subtitle}),(0,o.jsx)($.z,{type:"primary",size:"medium",className:"mt-2",disabled:!ee,asChild:!0,children:(0,o.jsx)("a",{href:null!==(I=null===(c=K.main_cta)||void 0===c?void 0:c.url)&&void 0!==I?I:"#",target:(null===(u=K.main_cta)||void 0===u?void 0:u.target)?null===(f=K.main_cta)||void 0===f?void 0:f.target:void 0,onClick:function(){return oe(A.Z.www_event)},children:ee?(null===(R=K.main_cta)||void 0===R?void 0:R.label)?null===(Z=K.main_cta)||void 0===Z?void 0:Z.label:"Register to this event":(null===(E=K.main_cta)||void 0===E?void 0:E.disabled_label)?null===(D=K.main_cta)||void 0===D?void 0:D.disabled_label:"Registrations are closed"})})]}),(0,o.jsxs)("div",{className:"flex flex-col text-sm",children:[(0,o.jsx)("span",{children:"Share on"}),(0,o.jsx)(Y.Z,{title:te.title,slug:te.url})]})]})})]}),(0,o.jsxs)(C.Z,{className:"grid lg:grid-cols-3 gap-12 !py-10 md:!py-16",children:[K.company&&(0,o.jsx)("div",{className:"order-first lg:col-span-full flex items-center gap-4 md:gap-6 lg:mb-4",children:(0,o.jsx)(d(),{src:"dark"===ae?G:a,width:"120px",height:"43px",alt:"Dijets"})}),(0,o.jsxs)("main",{className:"lg:col-span-2",children:[(0,o.jsxs)("div",{className:"prose prose-docs",children:[(0,o.jsx)("h2",{className:"text-foreground-light text-sm font-mono uppercase",children:"About this event"}),(0,o.jsx)(v.R,(0,l.Z)((0,i.Z)({},Q),{components:(0,N.Z)()}))]}),(0,o.jsx)("aside",{className:"mt-8",children:(0,o.jsx)($.z,{type:"primary",size:"medium",className:"mt-2",disabled:!ee,asChild:!0,children:(0,o.jsx)("a",{href:null!==(X=null===(O=K.main_cta)||void 0===O?void 0:O.url)&&void 0!==X?X:"#","aria-disabled":!ee,target:(null===(M=K.main_cta)||void 0===M?void 0:M.target)?null===(S=K.main_cta)||void 0===S?void 0:S.target:void 0,children:ee?(null===(T=K.main_cta)||void 0===T?void 0:T.label)?null===(W=K.main_cta)||void 0===W?void 0:W.label:"Register now":(null===(U=K.main_cta)||void 0===U?void 0:U.disabled_label)?null===(L=K.main_cta)||void 0===L?void 0:L.disabled_label:"Registrations are closed"})})})]}),(0,o.jsx)("aside",{className:"order-first lg:order-last",children:q&&(0,o.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,o.jsx)("h2",{className:"text-foreground-light text-sm font-mono uppercase",children:"Speakers"}),(0,o.jsx)("ul",{className:"list-none flex flex-col md:flex-row flex-wrap lg:flex-col gap-4 md:gap-8 lg:gap-4",children:null===q||void 0===q?void 0:q.map((function(e){return(0,o.jsx)("li",{children:(0,o.jsxs)("a",{href:e.author_url,target:"_blank",className:"flex gap-4",children:[(0,o.jsx)("div",{className:"relative ring-background w-10 h-10 md:w-12 md:h-12 rounded-full ring-2 cursor-pointer",children:(null===e||void 0===e?void 0:e.author_image_url)&&(0,o.jsx)(d(),{src:e.author_image_url,className:"rounded-full object-cover border border-default w-full h-full",alt:"".concat(e.author," avatar"),width:100,height:100,draggable:!1})}),(0,o.jsxs)("div",{className:"flex flex-col gap-1",children:[(0,o.jsx)("p",{children:null===e||void 0===e?void 0:e.author}),(0,o.jsx)("span",{className:"text-xs text-foreground-light",children:null===e||void 0===e?void 0:e.position})]})]})},null===e||void 0===e?void 0:e.author_id)}))})]})})]})]})]})]})}}},function(e){e.O(0,[4996,995,1706,1850,4001,8817,3859,2743,8686,5944,7e3,7493,7180,7174,6452,9774,2888,179],(function(){return t=70599,e(e.s=t);var t}));var t=e.O();_N_E=t}]);