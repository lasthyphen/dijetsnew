"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4059],{7086:function(e,a,r){var n=r(52322),l=r(2784),s=r(11590);a.Z=function(e){var a=e.outerClassName,r=e.innerClassName,c=e.activeColor,t=void 0===c?"default":c,i=e.hasShimmer,o=void 0!==i&&i,d=e.hasActiveOnHover,u=void 0!==d&&d,v=e.hasInnerShimmer,h=void 0!==v&&v,m=e.shimmerFromColor,g=e.shimmerToColor,x=e.children,f=(0,l.useRef)(null),p=(0,l.useRef)(null),b=o||h,j=function(e){if(!b||!f.current||!p.current)return null;var a=f.current,r=p.current,n=a.getBoundingClientRect(),l=n.x,s=n.y,c=n.width,i=n.height,d=e.clientX-l,v=e.clientY-s,x=d>-0&&d<c+0&&v>-0&&v<i+0;if(o){var j=u&&x?"radial-gradient(65rem circle at ".concat(d,"px ").concat(v,"px, var(").concat("brand"===t?"--colors-brand9":"--colors-scale9","), transparent), "):"";a.style.backgroundImage="\n      ".concat(j,"radial-gradient(30rem circle at ").concat(d,"px ").concat(v,"px, ").concat(null!==m&&void 0!==m?m:"var(--colors-scale8)",", ").concat(null!==g&&void 0!==g?g:"var(--colors-scale5)",")")}h&&(r.style.backgroundImage=x?"radial-gradient(7rem circle at ".concat(d,"px ").concat(v,"px, var(--colors-scale5), transparent), radial-gradient(20rem circle at ").concat(d,"px ").concat(v,"px, var(--colors-scale4), transparent)"):"")};return(0,l.useEffect)((function(){return window.addEventListener("mousemove",j),function(){window.removeEventListener("mousemove",j)}}),[]),(0,n.jsx)("div",{ref:f,className:(0,s.cn)("relative rounded-xl bg-scale-400 from-scale-800 to-scale-800 p-px transition-all shadow-md",!b&&u?"brand"===t?"hover:bg-none hover:!bg-brand":"hover:bg-none hover:!bg-scale-900":"",a),children:(0,n.jsxs)("div",{className:(0,s.cn)("relative h-full z-10 rounded-xl bg-scale-200 dark:bg-scale-300 overflow-hidden transition-all text-scale-1100",r),children:[x,(0,n.jsx)("div",{ref:p,className:"absolute z-0 inset-0 w-full h-full pointer-events-none"})]})})}},74059:function(e,a,r){r.r(a);var n=r(52322),l=r(2784),s=r(35463),c=r(9311),t=r(44377),i=r(93556),o=r(38020),d=r(7086),u=r(23549),v=function(e){var a=e.highlight,r=e.index,s=(0,l.useRef)(null),c=(0,l.useState)(!1),o=c[0],v=c[1],h=(0,t.Y)(s,{once:!0}),m=u.xF,g=(0,u.O8)({delay:.4+.1*r}),x=a.image;return(0,n.jsx)(i.m.div,{ref:s,initial:m,onMouseEnter:function(){return v(!0)},onMouseLeave:function(){return v(!1)},animate:h?g:m,children:(0,n.jsxs)(d.Z,{hasShimmer:!0,innerClassName:"flex flex-col !bg-scale-100",children:[(0,n.jsxs)("div",{className:"relative w-full aspect-[1.35/1] mb-4",children:[(0,n.jsx)("div",{className:"absolute inset-0 w-full h-full z-10",style:{background:"radial-gradient(100% 50% at 50% 50%, transparent, var(--colors-scale1))"}}),a.image&&(0,n.jsx)(x,{isHovered:o}),a.svg&&a.svg]}),(0,n.jsxs)("div",{className:"p-8",children:[(0,n.jsx)("h3",{className:"text-lg text-scale-1200 mb-2",children:a.title}),(0,n.jsx)("p",{className:"text-scale-900",children:a.paragraph})]})]})})};a.default=function(e){var a=e.highlights;return(0,n.jsx)(o.Z,{children:(0,n.jsx)(s.X,{features:c.H,children:(0,n.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4",children:a.map((function(e,a){return(0,n.jsx)(v,{highlight:e,index:a},e.title)}))})})})}}}]);