"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4559],{74559:function(e,t,n){n.r(t),n.d(t,{default:function(){return se}});var r=n(52322),a=n(2784),o={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},i={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},u=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],s={CSS:{},springs:{}};function l(e,t,n){return Math.min(Math.max(e,t),n)}function f(e,t){return e.indexOf(t)>-1}function c(e,t){return e.apply(null,t)}var d={arr:function(e){return Array.isArray(e)},obj:function(e){return f(Object.prototype.toString.call(e),"Object")},pth:function(e){return d.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||d.svg(e)},str:function(e){return"string"===typeof e},fnc:function(e){return"function"===typeof e},und:function(e){return"undefined"===typeof e},nil:function(e){return d.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return d.hex(e)||d.rgb(e)||d.hsl(e)},key:function(e){return!o.hasOwnProperty(e)&&!i.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function p(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function h(e,t){var n=p(e),r=l(d.und(n[0])?1:n[0],.1,100),a=l(d.und(n[1])?100:n[1],.1,100),o=l(d.und(n[2])?10:n[2],.1,100),i=l(d.und(n[3])?0:n[3],.1,100),u=Math.sqrt(a/r),f=o/(2*Math.sqrt(a*r)),c=f<1?u*Math.sqrt(1-f*f):0,h=f<1?(f*u-i)/c:-i+u;function g(e){var n=t?t*e/1e3:e;return n=f<1?Math.exp(-n*f*u)*(1*Math.cos(c*n)+h*Math.sin(c*n)):(1+h*n)*Math.exp(-n*u),0===e||1===e?e:1-n}return t?g:function(){var t=s.springs[e];if(t)return t;for(var n=1/6,r=0,a=0;;)if(1===g(r+=n)){if(++a>=16)break}else a=0;var o=r*n*1e3;return s.springs[e]=o,o}}function g(e){return void 0===e&&(e=10),function(t){return Math.ceil(l(t,1e-6,1)*e)*(1/e)}}var v=function(){var e=.1;function t(e,t){return 1-3*t+3*e}function n(e,t){return 3*t-6*e}function r(e){return 3*e}function a(e,a,o){return((t(a,o)*e+n(a,o))*e+r(a))*e}function o(e,a,o){return 3*t(a,o)*e*e+2*n(a,o)*e+r(a)}return function(t,n,r,i){if(0<=t&&t<=1&&0<=r&&r<=1){var u=new Float32Array(11);if(t!==n||r!==i)for(var s=0;s<11;++s)u[s]=a(s*e,t,r);return function(e){return t===n&&r===i||0===e||1===e?e:a(l(e),n,i)}}function l(n){for(var i=0,s=1;10!==s&&u[s]<=n;++s)i+=e;--s;var l=i+(n-u[s])/(u[s+1]-u[s])*e,f=o(l,t,r);return f>=.001?function(e,t,n,r){for(var i=0;i<4;++i){var u=o(t,n,r);if(0===u)return t;t-=(a(t,n,r)-e)/u}return t}(n,l,t,r):0===f?l:function(e,t,n,r,o){var i,u,s=0;do{(i=a(u=t+(n-t)/2,r,o)-e)>0?n=u:t=u}while(Math.abs(i)>1e-7&&++s<10);return u}(n,i,i+e,t,r)}}}(),m=function(){var e={linear:function(){return function(e){return e}}},t={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var t,n=4;e<((t=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=l(e,1,10),r=l(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}};return["Quad","Cubic","Quart","Quint","Expo"].forEach((function(e,n){t[e]=function(){return function(e){return Math.pow(e,n+2)}}})),Object.keys(t).forEach((function(n){var r=t[n];e["easeIn"+n]=r,e["easeOut"+n]=function(e,t){return function(n){return 1-r(e,t)(1-n)}},e["easeInOut"+n]=function(e,t){return function(n){return n<.5?r(e,t)(2*n)/2:1-r(e,t)(-2*n+2)/2}},e["easeOutIn"+n]=function(e,t){return function(n){return n<.5?(1-r(e,t)(1-2*n))/2:(r(e,t)(2*n-1)+1)/2}}})),e}();function y(e,t){if(d.fnc(e))return e;var n=e.split("(")[0],r=m[n],a=p(e);switch(n){case"spring":return h(e,t);case"cubicBezier":return c(v,a);case"steps":return c(g,a);default:return c(r,a)}}function x(e){try{return document.querySelectorAll(e)}catch(t){return}}function b(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],o=0;o<n;o++)if(o in e){var i=e[o];t.call(r,i,o,e)&&a.push(i)}return a}function w(e){return e.reduce((function(e,t){return e.concat(d.arr(t)?w(t):t)}),[])}function M(e){return d.arr(e)?e:(d.str(e)&&(e=x(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function j(e,t){return e.some((function(e){return e===t}))}function N(e){var t={};for(var n in e)t[n]=e[n];return t}function k(e,t){var n=N(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function C(e,t){var n=N(e);for(var r in t)n[r]=d.und(e[r])?t[r]:e[r];return n}function O(e){return d.rgb(e)?function(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}(e):d.hex(e)?function(e){var t=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,n,r){return t+t+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(e):d.hsl(e)?function(e){var t,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),o=parseInt(a[1],10)/360,i=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function l(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==i)t=n=r=u;else{var f=u<.5?u*(1+i):u+i-u*i,c=2*u-f;t=l(c,f,o+1/3),n=l(c,f,o),r=l(c,f,o-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+s+")"}(e):void 0}function P(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function I(e,t){return d.fnc(e)?e(t.target,t.id,t.total):e}function B(e,t){return e.getAttribute(t)}function D(e,t,n){if(j([n,"deg","rad","turn"],P(t)))return t;var r=s.CSS[t+n];if(!d.und(r))return r;var a=document.createElement(e.tagName),o=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;o.appendChild(a),a.style.position="absolute",a.style.width=100+n;var i=100/a.offsetWidth;o.removeChild(a);var u=i*parseFloat(t);return s.CSS[t+n]=u,u}function E(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?D(e,a,n):a}}function T(e,t){return d.dom(e)&&!d.inp(e)&&(!d.nil(B(e,t))||d.svg(e)&&e[t])?"attribute":d.dom(e)&&j(u,t)?"transform":d.dom(e)&&"transform"!==t&&E(e,t)?"css":null!=e[t]?"object":void 0}function F(e){if(d.dom(e)){for(var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;t=r.exec(n);)a.set(t[1],t[2]);return a}}function S(e,t,n,r){var a=f(t,"scale")?1:0+function(e){return f(e,"translate")||"perspective"===e?"px":f(e,"rotate")||f(e,"skew")?"deg":void 0}(t),o=F(e).get(t)||a;return n&&(n.transforms.list.set(t,o),n.transforms.last=t),r?D(e,o,r):o}function A(e,t,n,r){switch(T(e,t)){case"transform":return S(e,t,r,n);case"css":return E(e,t,n);case"attribute":return B(e,t);default:return e[t]||0}}function L(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=P(e)||0,a=parseFloat(t),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return a+o+r;case"-":return a-o+r;case"*":return a*o+r}}function q(e,t){if(d.col(e))return O(e);if(/\s/g.test(e))return e;var n=P(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function H(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function V(e){for(var t,n=e.points,r=0,a=0;a<n.numberOfItems;a++){var o=n.getItem(a);a>0&&(r+=H(t,o)),t=o}return r}function W(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return function(e){return 2*Math.PI*B(e,"r")}(e);case"rect":return function(e){return 2*B(e,"width")+2*B(e,"height")}(e);case"line":return function(e){return H({x:B(e,"x1"),y:B(e,"y1")},{x:B(e,"x2"),y:B(e,"y2")})}(e);case"polyline":return V(e);case"polygon":return function(e){var t=e.points;return V(e)+H(t.getItem(t.numberOfItems-1),t.getItem(0))}(e)}}function $(e,t){var n=t||{},r=n.el||function(e){for(var t=e.parentNode;d.svg(t)&&d.svg(t.parentNode);)t=t.parentNode;return t}(e),a=r.getBoundingClientRect(),o=B(r,"viewBox"),i=a.width,u=a.height,s=n.viewBox||(o?o.split(" "):[0,0,i,u]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:i,h:u,vW:s[2],vH:s[3]}}function _(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var a=$(e.el,e.svg),o=r(),i=r(-1),u=r(1),s=n?1:a.w/a.vW,l=n?1:a.h/a.vH;switch(e.property){case"x":return(o.x-a.x)*s;case"y":return(o.y-a.y)*l;case"angle":return 180*Math.atan2(u.y-i.y,u.x-i.x)/Math.PI}}function G(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=q(d.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:d.str(e)||t?r.split(n):[]}}function X(e){return b(e?w(d.arr(e)?e.map(M):M(e)):[],(function(e,t,n){return n.indexOf(e)===t}))}function Y(e){var t=X(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:F(e)}}}))}function Z(e,t){var n=N(t);if(/^spring/.test(n.easing)&&(n.duration=h(n.easing)),d.arr(e)){var r=e.length;2===r&&!d.obj(e[0])?e={value:e}:d.fnc(t.duration)||(n.duration=t.duration/r)}var a=d.arr(e)?e:[e];return a.map((function(e,n){var r=d.obj(e)&&!d.pth(e)?e:{value:e};return d.und(r.delay)&&(r.delay=n?0:t.delay),d.und(r.endDelay)&&(r.endDelay=n===a.length-1?t.endDelay:0),r})).map((function(e){return C(e,n)}))}function Q(e,t){var n=[],r=t.keyframes;for(var a in r&&(t=C(function(e){for(var t=b(w(e.map((function(e){return Object.keys(e)}))),(function(e){return d.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var a=t[r];n[a]=e.map((function(e){var t={};for(var n in e)d.key(n)?n==a&&(t.value=e[n]):t[n]=e[n];return t}))},a=0;a<t.length;a++)r(a);return n}(r),t)),t)d.key(a)&&n.push({name:a,tweens:Z(t[a],e)});return n}function R(e,t){var n;return e.tweens.map((function(r){var a=function(e,t){var n={};for(var r in e){var a=I(e[r],t);d.arr(a)&&1===(a=a.map((function(e){return I(e,t)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,t),o=a.value,i=d.arr(o)?o[1]:o,u=P(i),s=A(t.target,e.name,u,t),l=n?n.to.original:s,f=d.arr(o)?o[0]:l,c=P(f)||P(s),p=u||c;return d.und(i)&&(i=l),a.from=G(f,p),a.to=G(L(i,f),p),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=d.pth(o),a.isPathTargetInsideSVG=a.isPath&&d.svg(t.target),a.isColor=d.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}var z={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,a){if(r.list.set(t,n),t===r.last||a){var o="";r.list.forEach((function(e,t){o+=t+"("+e+") "})),e.style.transform=o}}};function U(e,t){Y(e).forEach((function(e){for(var n in t){var r=I(t[n],e),a=e.target,o=P(r),i=A(a,n,o,e),u=L(q(r,o||P(i)),i),s=T(a,n);z[s](a,n,u,e.transforms,!0)}}))}function J(e,t){return b(w(e.map((function(e){return t.map((function(t){return function(e,t){var n=T(e.target,t.name);if(n){var r=R(t,e),a=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(e,t)}))}))),(function(e){return!d.und(e)}))}function K(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,a.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,a.endDelay=n?a.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,a}var ee=0;var te=[],ne=function(){var e;function t(n){for(var r=te.length,a=0;a<r;){var o=te[a];o.paused?(te.splice(a,1),r--):(o.tick(n),a++)}e=a>0?requestAnimationFrame(t):void 0}return"undefined"!==typeof document&&document.addEventListener("visibilitychange",(function(){ae.suspendWhenDocumentHidden&&(re()?e=cancelAnimationFrame(e):(te.forEach((function(e){return e._onDocumentVisibility()})),ne()))})),function(){e||re()&&ae.suspendWhenDocumentHidden||!(te.length>0)||(e=requestAnimationFrame(t))}}();function re(){return!!document&&document.hidden}function ae(e){void 0===e&&(e={});var t,n=0,r=0,a=0,u=0,s=null;function f(e){var t=window.Promise&&new Promise((function(e){return s=e}));return e.finished=t,t}var c=function(e){var t=k(o,e),n=k(i,e),r=Q(n,e),a=Y(e.targets),u=J(a,r),s=K(u,n),l=ee;return ee++,C(t,{id:l,children:[],animatables:a,animations:u,duration:s.duration,delay:s.delay,endDelay:s.endDelay})}(e);f(c);function d(){var e=c.direction;"alternate"!==e&&(c.direction="normal"!==e?"normal":"reverse"),c.reversed=!c.reversed,t.forEach((function(e){return e.reversed=c.reversed}))}function p(e){return c.reversed?c.duration-e:e}function h(){n=0,r=p(c.currentTime)*(1/ae.speed)}function g(e,t){t&&t.seek(e-t.timelineOffset)}function v(e){for(var t=0,n=c.animations,r=n.length;t<r;){var a=n[t],o=a.animatable,i=a.tweens,u=i.length-1,s=i[u];u&&(s=b(i,(function(t){return e<t.end}))[0]||s);for(var f=l(e-s.start-s.delay,0,s.duration)/s.duration,d=isNaN(f)?1:s.easing(f),p=s.to.strings,h=s.round,g=[],v=s.to.numbers.length,m=void 0,y=0;y<v;y++){var x=void 0,w=s.to.numbers[y],M=s.from.numbers[y]||0;x=s.isPath?_(s.value,d*w,s.isPathTargetInsideSVG):M+d*(w-M),h&&(s.isColor&&y>2||(x=Math.round(x*h)/h)),g.push(x)}var j=p.length;if(j){m=p[0];for(var N=0;N<j;N++){p[N];var k=p[N+1],C=g[N];isNaN(C)||(m+=k?C+k:C+" ")}}else m=g[0];z[a.type](o.target,a.property,m,o.transforms),a.currentValue=m,t++}}function m(e){c[e]&&!c.passThrough&&c[e](c)}function y(e){var o=c.duration,i=c.delay,h=o-c.endDelay,y=p(e);c.progress=l(y/o*100,0,100),c.reversePlayback=y<c.currentTime,t&&function(e){if(c.reversePlayback)for(var n=u;n--;)g(e,t[n]);else for(var r=0;r<u;r++)g(e,t[r])}(y),!c.began&&c.currentTime>0&&(c.began=!0,m("begin")),!c.loopBegan&&c.currentTime>0&&(c.loopBegan=!0,m("loopBegin")),y<=i&&0!==c.currentTime&&v(0),(y>=h&&c.currentTime!==o||!o)&&v(o),y>i&&y<h?(c.changeBegan||(c.changeBegan=!0,c.changeCompleted=!1,m("changeBegin")),m("change"),v(y)):c.changeBegan&&(c.changeCompleted=!0,c.changeBegan=!1,m("changeComplete")),c.currentTime=l(y,0,o),c.began&&m("update"),e>=o&&(r=0,c.remaining&&!0!==c.remaining&&c.remaining--,c.remaining?(n=a,m("loopComplete"),c.loopBegan=!1,"alternate"===c.direction&&d()):(c.paused=!0,c.completed||(c.completed=!0,m("loopComplete"),m("complete"),!c.passThrough&&"Promise"in window&&(s(),f(c)))))}return c.reset=function(){var e=c.direction;c.passThrough=!1,c.currentTime=0,c.progress=0,c.paused=!0,c.began=!1,c.loopBegan=!1,c.changeBegan=!1,c.completed=!1,c.changeCompleted=!1,c.reversePlayback=!1,c.reversed="reverse"===e,c.remaining=c.loop,t=c.children;for(var n=u=t.length;n--;)c.children[n].reset();(c.reversed&&!0!==c.loop||"alternate"===e&&1===c.loop)&&c.remaining++,v(c.reversed?c.duration:0)},c._onDocumentVisibility=h,c.set=function(e,t){return U(e,t),c},c.tick=function(e){a=e,n||(n=a),y((a+(r-n))*ae.speed)},c.seek=function(e){y(p(e))},c.pause=function(){c.paused=!0,h()},c.play=function(){c.paused&&(c.completed&&c.reset(),c.paused=!1,te.push(c),h(),ne())},c.reverse=function(){d(),c.completed=!c.reversed,h()},c.restart=function(){c.reset(),c.play()},c.remove=function(e){ie(X(e),c)},c.reset(),c.autoplay&&c.play(),c}function oe(e,t){for(var n=t.length;n--;)j(e,t[n].animatable.target)&&t.splice(n,1)}function ie(e,t){var n=t.animations,r=t.children;oe(e,n);for(var a=r.length;a--;){var o=r[a],i=o.animations;oe(e,i),i.length||o.children.length||r.splice(a,1)}n.length||r.length||t.pause()}ae.version="3.2.1",ae.speed=1,ae.suspendWhenDocumentHidden=!0,ae.running=te,ae.remove=function(e){for(var t=X(e),n=te.length;n--;){ie(t,te[n])}},ae.get=A,ae.set=U,ae.convertPx=D,ae.path=function(e,t){var n=d.str(e)?x(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:$(n),totalLength:W(n)*(r/100)}}},ae.setDashoffset=function(e){var t=W(e);return e.setAttribute("stroke-dasharray",t),t},ae.stagger=function(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?y(t.easing):null,a=t.grid,o=t.axis,i=t.from||0,u="first"===i,s="center"===i,l="last"===i,f=d.arr(e),c=f?parseFloat(e[0]):parseFloat(e),p=f?parseFloat(e[1]):0,h=P(f?e[1]:e)||0,g=t.start||0+(f?c:0),v=[],m=0;return function(e,t,d){if(u&&(i=0),s&&(i=(d-1)/2),l&&(i=d-1),!v.length){for(var y=0;y<d;y++){if(a){var x=s?(a[0]-1)/2:i%a[0],b=s?(a[1]-1)/2:Math.floor(i/a[0]),w=x-y%a[0],M=b-Math.floor(y/a[0]),j=Math.sqrt(w*w+M*M);"x"===o&&(j=-w),"y"===o&&(j=-M),v.push(j)}else v.push(Math.abs(i-y));m=Math.max.apply(Math,v)}r&&(v=v.map((function(e){return r(e/m)*m}))),"reverse"===n&&(v=v.map((function(e){return o?e<0?-1*e:-e:Math.abs(m-e)})))}return g+(f?(p-c)/m:c)*(Math.round(100*v[t])/100)+h}},ae.timeline=function(e){void 0===e&&(e={});var t=ae(e);return t.duration=0,t.add=function(n,r){var a=te.indexOf(t),o=t.children;function u(e){e.passThrough=!0}a>-1&&te.splice(a,1);for(var s=0;s<o.length;s++)u(o[s]);var l=C(n,k(i,e));l.targets=l.targets||e.targets;var f=t.duration;l.autoplay=!1,l.direction=t.direction,l.timelineOffset=d.und(r)?f:L(r,f),u(t),t.seek(l.timelineOffset);var c=ae(l);u(c),o.push(c);var p=K(o,e);return t.delay=p.delay,t.endDelay=p.endDelay,t.duration=p.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t},ae.easing=y,ae.penner=m,ae.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e};var ue=ae,se=function(){var e=(0,a.useRef)(null),t=((0,a.useRef)(null),(0,a.useState)(!1)),n=(t[0],t[1],[{id:"svg1",type:"svg",viewbox:"0 0 155 284",width:"15.244%",height:"41.24%",left:"38.8%",top:"31.2%",path:"M.797 283.216c14.605-22.693 64.498-78.738 87.739-104.396-22.406-17.823-47.852-46.354-57.983-58.555 36.536-29.153 96.735-65.699 122.267-80.327-6.727-8.041-21.226-27.282-26.518-39.053",x1:"100%",x2:"100%",y1:"-20%",y1config:{initial:"-20%",frames:["-20%","100%"]},y2:"0",y2config:{initial:"0",frames:["0","130%"]},duration:350,delay:1350,offset:0,easing:"linear"},{id:"svg2",type:"svg",viewbox:"0 0 272 235",width:"27.458%",height:"34.045%",left:"50.8%",top:"31.4%",path:"M271.749 233.614C215.075 230.474 159.599 210.964 138.945 201.602C144.38 186.681 156.517 152.612 161.587 135.71C126.058 122.39 44.25 76.75 1.25 0.75",x1:"100%",x2:"100%",y1:"-20%",y1config:{initial:"-20%",frames:["-20%","100%"]},y2:"0",y2config:{initial:"0",frames:["0","130%"]},duration:300,delay:1350,offset:0,easing:"linear"},{id:"svg3",type:"svg",viewbox:"0 0 261 144",width:"26.687%",height:"20.49%",left:"25.1%",top:"31.4%",path:"M260.5 1.5C157.75 30.75 67.75 89 1.13281 143.202",x1:"100%",x2:"100%",y1:"-20%",y1config:{initial:"-20%",frames:["-20%","100%"]},y2:"0",y2config:{initial:"0",frames:["0","130%"]},duration:200,delay:1350,offset:0,easing:"linear"}]);(0,a.useEffect)((function(){o()}),[]);var o=function(){var e=ue.timeline({loop:!1,autoplay:!0});n.forEach((function(t){e.add({loop:!1,autoplay:!0,targets:"#functions-hero #".concat(t.id," linearGradient"),y2:t.y2config.frames,easing:null===t||void 0===t?void 0:t.easing,duration:null===t||void 0===t?void 0:t.duration,delay:null===t||void 0===t?void 0:t.delay},null===t||void 0===t?void 0:t.offset)}))};return(0,r.jsxs)("div",{ref:e,id:"functions-hero",className:" absolute inset-0 -left-28 top-4 w-[150%] md:w-[150%] aspect-[978/678] sm:-left-32 sm:-top-2 md:-left-44 lg:-left-10 lg:-top-10 lg:w-[130%] xl:-left-32 xl:w-[130%] ",children:[n.map((function(e){return(0,r.jsxs)("svg",{id:e.id,xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:e.viewbox,className:"absolute",style:{width:e.width,height:e.height,left:e.left,top:e.top},children:[(0,r.jsx)("path",{stroke:"url(#lg-".concat(e.id,")"),strokeWidth:"1.396",d:e.path}),(0,r.jsx)("defs",{children:(0,r.jsxs)("linearGradient",{id:"lg-".concat(e.id),x1:null===e||void 0===e?void 0:e.x1,x2:null===e||void 0===e?void 0:e.x2,y1:null===e||void 0===e?void 0:e.y1,y2:null===e||void 0===e?void 0:e.y2,gradientUnits:"userSpaceOnUse",children:[(0,r.jsx)("stop",{offset:"0",stopColor:"hsl(var(--foreground-default))",stopOpacity:"0"}),(0,r.jsx)("stop",{offset:"0.5",stopColor:"hsl(var(--foreground-default))",stopOpacity:"0.6"}),(0,r.jsx)("stop",{offset:"1",stopColor:"hsl(var(--foreground-default))",stopOpacity:"0"})]})})]},e.id)})),[{id:"dot1",type:"dot",left:"50%",top:"29.9%",delay:1},{id:"dot2",type:"dot",left:"24.3%",top:"50.2%",delay:1},{id:"dot3",type:"dot",left:"77.8%",top:"63.4%",delay:1}].map((function(e){return(0,r.jsxs)("div",{id:e.id,style:{left:e.left,top:e.top},className:"absolute origin-center w-[2.5%] h-[3.6%] flex items-center justify-center opacity-0 transition-opacity animate-fade-in delay-75",children:[(0,r.jsx)("span",{className:"absolute inset-0 w-full h-full rounded-full bg-foreground bg-opacity-20"}),(0,r.jsx)("span",{className:"absolute w-4/5 h-4/5 rounded-full bg-foreground bg-opacity-90"})]},e.id)})),(0,r.jsx)("div",{className:"absolute left-[51.15%] top-[10%] w-px h-[20%] overflow-hidden",children:(0,r.jsx)("span",{className:"absolute inset-0 w-full bg-gradient-to-t from-foreground to-transparent h-full delay-1200 animate-slide-in"})}),(0,r.jsx)("div",{className:"absolute left-[25.5%] top-[43%] w-px h-[8%] overflow-hidden",children:(0,r.jsx)("span",{className:"absolute inset-0 w-full bg-gradient-to-t from-foreground to-transparent h-full delay-1200 animate-slide-in"})}),(0,r.jsx)("div",{className:"absolute left-[28.7%] top-[18.9%] w-px h-[7%] overflow-hidden",children:(0,r.jsx)("span",{className:"absolute inset-0 w-full bg-gradient-to-t from-foreground to-transparent h-full delay-1200 animate-slide-in"})}),(0,r.jsx)("div",{className:"absolute left-[37.8%] top-[63.8%] w-px h-[9%] overflow-hidden",children:(0,r.jsx)("span",{className:"absolute inset-0 w-full bg-gradient-to-t from-foreground to-transparent opacity-[0.3] h-full delay-1200 animate-slide-in"})}),(0,r.jsx)("div",{className:"absolute left-[47.5%] top-[47.8%] w-px h-[9%] overflow-hidden",children:(0,r.jsx)("span",{className:"absolute inset-0 w-full bg-gradient-to-t from-foreground to-transparent opacity-[0.3] h-full delay-1200 animate-slide-in"})}),(0,r.jsx)("div",{className:"absolute left-[58.1%] top-[50.2%] w-px h-[5%] overflow-hidden",children:(0,r.jsx)("span",{className:"absolute inset-0 w-full bg-gradient-to-t from-foreground to-transparent opacity-[0.3] h-full delay-1200 animate-slide-in"})}),(0,r.jsx)("div",{className:"absolute left-[66.95%] top-[45.2%] w-px h-[5%] overflow-hidden",children:(0,r.jsx)("span",{className:"absolute inset-0 w-full bg-gradient-to-t from-foreground to-transparent opacity-[0.2] h-full delay-1200 animate-slide-in"})}),(0,r.jsx)("div",{className:"absolute left-[9.7%] top-[52.5%] w-px h-[8%] overflow-hidden",children:(0,r.jsx)("span",{className:"absolute inset-0 w-full bg-gradient-to-t from-foreground to-transparent h-full delay-1200 animate-slide-in"})}),(0,r.jsx)("img",{src:"/images/product/functions/globe-light.svg",alt:"globe wireframe",width:400,height:400,className:"w-full h-full dark:hidden block"}),(0,r.jsx)("img",{src:"/images/product/functions/globe.svg",alt:"globe wireframe",width:400,height:400,className:"w-full h-full hidden dark:block"})]})}}}]);