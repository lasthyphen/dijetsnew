(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2639,9490],{19490:function(e,t,n){"use strict";n.r(t);var r=n(52322),a=n(52993);t.default=function(e){var t=e.darkerBg,n=e.className;return(0,r.jsxs)("div",{className:["bg-scale-200 grid grid-cols-12 items-center gap-4 border-t py-32 text-center px-16",t&&"dark:bg-dark-900",n].join(" "),children:[(0,r.jsx)("div",{className:"col-span-12",children:(0,r.jsxs)("h2",{className:"h2",children:[(0,r.jsx)("span",{className:"text-scale-900",children:"Disrupt,"}),(0,r.jsxs)("span",{className:"text-scale-1200 dark:text-white block sm:inline",children:[" ","or be Disrupted."]})]})}),(0,r.jsx)("div",{className:"col-span-12 mt-4",children:(0,r.jsx)("a",{href:"https://wallet.dijets.io",children:(0,r.jsx)(a.z,{size:"medium",className:"text-white",children:"Dijets Wallet"})})})]})}},29406:function(e,t,n){"use strict";n.d(t,{aD:function(){return r}});n(52322);var r=[{key:"read",title:"Average throughput with moderate workload of 100-200 Tx requests",stats:[{name:"Dijets",value:5480},{name:"Polkadot",value:1500},{name:"Ripple",value:1200},{name:"Binance",value:1e3},{name:"Ethereum",value:20},{name:"Solana",value:2460},{name:"Avalanche",value:1800},{name:"Algorand",value:1180}]},{key:"write",title:"Average throughput when stressed with a constant workload of 1,000 Tx requests",stats:[{name:"Dijets",value:4660},{name:"Polkadot",value:750},{name:"Ripple",value:560},{name:"Binance",value:280},{name:"Ethereum",value:5},{name:"Solana",value:890},{name:"Avalanche",value:650},{name:"Algorand",value:440}]}]},2639:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(70865),a=n(52322),s=n(82098),i=n(67571),o=n(22469),l=n(76380),c=n(55351),d=n(25237),u=n.n(d),h=n(5632),p=n(47248),m=n(98788),f=n(5163),g=n(29406),x=n(2784),v=function(e){e.sectionNumber;var t=e.header;return(0,a.jsxs)("div",{className:"col-span-12",children:[(0,a.jsx)("span",{className:"block mb-3 font-mono text-sm text-brand text-['IBM_Plex_Mono'] tracking-tighter",children:"Dijets Scalability Evaluation"}),(0,a.jsx)("h3",{className:"text-4xl text-black dark:text-white",children:t})]})},b=function(){var e=function(e){var t=e.color,n=e.finalPercentage,r=e.duration,s=void 0===r?2e3:r,i=parseInt(n,10),o=(0,x.useState)(0),l=o[0],c=o[1],d=(0,x.useState)(!1),u=d[0],h=d[1],p=function(e){return e*(2-e)},g=800/60;return(0,x.useEffect)((function(){var e=0,t=Math.round(s/g);function n(){return r.apply(this,arguments)}function r(){return(r=(0,m.Z)((function(){var n,r;return(0,f.__generator)(this,(function(a){return(n=document.getElementById("performanceCharts"))&&!u&&n.getBoundingClientRect().top-window.innerHeight+20<=0&&(h(!0),c(0),r=setInterval((function(){e++;var n=p(e/t);c(i*n),e===t&&clearInterval(r)}),g)),[2]}))}))).apply(this,arguments)}return window.addEventListener("scroll",n,{passive:!0}),function(){return window.removeEventListener("scroll",n)}}),[u]),(0,a.jsx)("div",{className:"".concat(t," h-3 rounded-full"),style:{width:"".concat(l.toFixed(2),"%")}})},t=function(){return(0,a.jsx)("div",{id:"performanceCharts",children:g.aD.map((function(t){var n=(t.stats[0].value/t.stats[1].value).toFixed(1);return(0,a.jsxs)("div",{className:"mb-10 text-dark-400 dark:text-dark-300",children:[(0,a.jsx)("p",{className:"pb-2 mb-4 w-full text-[#4e4e4e] font-mono text-sm dark:text-[#f3f3f3] text-['IBM_Plex_Mono']",children:t.title}),(0,a.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center",children:[(0,a.jsx)("div",{className:"w-full sm:w-5/6",children:t.stats.map((function(n,r){return(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)("p",{className:"w-full py-2 pr-4 mr-4 text-left border-r sm:text-right lg:w-24",children:n.name}),(0,a.jsx)(e,{color:"Dijets"===n.name?"bg-brand":"bg-brand-500",finalPercentage:Math.ceil(n.value/1600*20)}),(0,a.jsxs)("p",{className:"ml-2",children:[n.value,"/s"]})]},"metric_".concat(t.key,"_").concat(r))}))}),(0,a.jsxs)("div",{className:"flex flex-col text-left sm:w-1/6 sm:text-right",children:[(0,a.jsxs)("p",{className:"text-6xl text-dark-700 dark:text-dark-100",children:[n,"x"]}),(0,a.jsx)("p",{className:"mt-1 text-xs text-scale-1200 dark:text-[#f3f3f3]",children:"faster throughput"})]})]})]},"".concat(t.key))}))})};return(0,a.jsx)("div",{id:"performance",className:"bg-surface-100",children:(0,a.jsxs)("div",{className:"container grid grid-cols-12 px-8 py-20 mx-auto text-dark-400 dark:text-dark-300 gap-y-10 lg:px-28",children:[(0,a.jsx)(v,{sectionNumber:1,header:"Performance"}),(0,a.jsxs)("div",{className:"grid items-center grid-cols-12 col-span-12 mb-10 text-scale-1200 gap-x-2 lg:gap-x-8",children:[(0,a.jsxs)("div",{className:"col-span-12 text-base sm:col-span-9 xl:col-span-7",children:[(0,a.jsx)("p",{className:"mb-10",children:"Scalability has always been one of the key defining metric for a blockchain performance. High transaction latencies directly impact end-users experience, e.g., the relatively high finalisation times of Bitcoin transactions (10 minutes) make it unsuitable for interactive trade. execution, storage, and consensus. With the ultimate goal of unlocking blockchain technology for all users and use cases we set out to build Dijets."}),(0,a.jsx)("p",{children:" Dijets is a high-fidelity, high-security blockchain network that offers unmatched scalability, eliminating the consensus bottleneck of other blockchains without sacrificing security or decentralisation."}),(0,a.jsxs)("p",{className:"text-dark-400 dark:text-dark-300",children:["To quantify Dijets scalability, we deploy a test network using"," ",(0,a.jsx)("a",{href:"https://github.com/Dijets-Inc/",target:"_blank",className:"text-brand hover:text-brand"}),"Dijets-CLI"," ","tool with varying network sizes composed of machines ranging from enterprise grade hardware with high computational power (datacenter) to commodity hardware with modest computational power including a Raspberry Pi."]})]}),(0,a.jsx)("div",{className:"col-span-12 mt-10 mb-10",children:(0,a.jsx)(t,{})}),(0,a.jsxs)("div",{className:"col-span-12 text-base sm:col-span-9 xl:col-span-7 mb-12",children:[(0,a.jsx)("p",{className:"mb-8 text-[#4e4e4e]",children:(0,a.jsx)("em",{children:"Note the stated performance results are not indicative of Peak Throughput."})}),(0,a.jsx)("p",{children:"The two performance evaluation setups measure a very specific notion of the availability of a blockchain as its ability to commit submitted transactions in a timely manner even when stressed with load peaks."}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"A blockchain is more available when it handles more intense bursts of transactions with low latency and without dropping any transaction. As a property this should be desirable for a scalable blockchain in order to handle realistic workloads of thousands of transactions per second wihtout increasing the hardware requirements for running a node."})]}),(0,a.jsx)(v,{sectionNumber:2,header:"Communication Overhead"}),(0,a.jsx)("div",{className:"grid items-center grid-cols-12 col-span-12 mb-10 text-scale-1200 gap-x-2 lg:gap-x-8",children:(0,a.jsxs)("div",{className:"col-span-12 text-base sm:col-span-9 xl:col-span-7",children:[(0,a.jsxs)("p",{className:"mt-10",children:["Classical consensus protocols typically include an all-to-all voting and has a designated leader who initiates the decision process and a series of all-to-all communication rounds to ensure that all correct/reputedly-good nodes reach the same decision. Such a protocol typically requires quadratic communication overhead with all-to-all communication of O(n\xb2). This means that for each round:",(0,a.jsxs)("ul",{className:"py-6",children:[(0,a.jsx)("li",{children:"- A network of 10 nodes, equates to 100 messages "}),(0,a.jsx)("li",{children:"- A network of 1,000 nodes, equates to 1,000,000 messages "}),(0,a.jsx)("li",{children:"- A network of 100,000 nodes equates to 10,000,000,000 messages "})]}),"The increasing number of messages proportional to the number of nodes is one of the main reasons blockchains suffer from bottlenecks. Blockchains have to deal with massive communication overheads and maintain low latency and high throughput. Protocols tend to cut down on the overheads and achieve better performance by sacrificing decentralisation and run manageable number of nodes. Better performance can also be achieved in the above scenario by really jacking up the hardware requirements to run a node."]}),(0,a.jsx)("p",{className:"py-4",children:" Dijets in comparison solves the communication overhead problem by keeping the number of messages each node has to handle per decision constantly low even if the network scales up to millions of validators, each one of those validators can participate in the network consensus without ever effecting its performance."})]})})]})]})})},y=(n(84988),n(19490)),j=n(86950),w=n(38020),k=u()((function(){return Promise.all([n.e(1850),n.e(9532),n.e(3952),n.e(7634)]).then(n.bind(n,3202))}),{loadableGenerated:{webpack:function(){return[3202]}}}),N=u()((function(){return Promise.all([n.e(1850),n.e(9001),n.e(8686),n.e(9183),n.e(3412)]).then(n.bind(n,13412))}),{loadableGenerated:{webpack:function(){return[13412]}},ssr:!1}),O=[{title:"Execution",description:"The modular nature of Dijets multi-chain architecture helps scale its execution layer.",highlightLines:"8",icon:(0,a.jsx)(s.Z,{strokeWidth:2})},{title:"Storage",description:"Verifiable Data Pruning in state management brings unprecedented optimisation to Dijets storage layer",highlightLines:"8",icon:(0,a.jsx)(i.Z,{strokeWidth:1.5})},{title:"Consensus",description:"Dijets highly scalable consensus uses a probabilistic model of repeated random sub-sampled voting",highlightLines:"8",icon:(0,a.jsx)(o.Z,{strokeWidth:1.5})}],E=[{title:"Set authentication",description:"Use the JWT token to set the authentication of the user",highlightLines:"15..20"},{title:"Use anything from Supabase",description:"supabase-js can interact with any part of the Supabase stack from Edge Functions, while respecting auth row level security policies.",highlightLines:"22..27"},{title:"Use secrets to store sensitive keys",description:"Set and edit secrets via the CLI, which can then be accessed via environment variables.",highlightLines:"7..13"},{title:"No limits",description:"You're empowered to run any logic you like using any data from the Supabase database.",highlightLines:"29..39"}];var P=function(){var e=(0,h.useRouter)().basePath,t=(0,x.useState)(void 0),n=(t[0],t[1],(0,x.useState)(0)),s=(n[0],n[1],"".concat("Dijets Scalability: Execution, Storage, and Consensus")),i="Blockchain scalability can be broken down into three general categories of execution, storage, and consensus. Scaling each property efficiently enables Dijets to process thousands of transactions per second.",o=(0,x.useState)(E[0].highlightLines);return o[0],o[1],(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(c.PB,{title:s,description:i,openGraph:{title:s,description:i,url:"https://dijets.io/scalability",images:[{url:"https://dijets.io".concat(e,"/images/product/database/database-og.jpg")}]}}),(0,a.jsxs)(j.Z,{children:[(0,a.jsx)("div",{className:"relative bg-scale-500 dark:bg-scale-100 overflow-hidden",children:(0,a.jsx)(N,{})}),(0,a.jsx)(w.Z,{children:(0,a.jsxs)("div",{className:"col-span-12 mb-10 space-y-12 lg:col-span-3 lg:mb-0 ",children:[(0,a.jsx)("div",{className:"grid gap-8 rounded md:grid-cols-2 xl:grid-cols-3",children:O.map((function(e,t){return(0,a.jsxs)("div",{className:"bg-scale-100 dark:bg-scale-300 group flex flex-col gap-4 rounded border px-8 py-6",children:[(0,a.jsx)("div",{className:"bg-scale-300 dark:bg-scale-500 text-scale-1200 group-hover:text-brand flex h-12 w-12 items-center justify-center rounded-md border transition-all group-hover:scale-105",children:e.icon?e.icon:(0,a.jsx)(l.Z,{strokeWidth:2})}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h3",{className:"text-scale-1200 text-lg",children:e.title}),(0,a.jsx)("p",{className:"text-scale-900 text-sm mt-2",children:e.description})]})]},t)}))}),(0,a.jsx)(k,(0,r.Z)({},p.Z.APIsection))]})}),(0,a.jsx)(b,{}),(0,a.jsx)(y.default,{})]})]})}},22469:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(70865),a=n(52322),s=n(2784),i=n(13980),o=n.n(i);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=(0,s.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,o=c(e,["color","size"]);return s.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),s.createElement("path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"}),s.createElement("polyline",{points:"3.27 6.96 12 12.01 20.73 6.96"}),s.createElement("line",{x1:"12",y1:"22.08",x2:"12",y2:"12"}))}));d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="Box";var u=d,h=n(61137);var p=function(e){return(0,a.jsx)(h.Z,(0,r.Z)({icon:u},e))}},76380:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(70865),a=n(52322),s=n(2784),i=n(13980),o=n.n(i);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=(0,s.forwardRef)((function(e,t){var n=e.color,r=void 0===n?"currentColor":n,a=e.size,i=void 0===a?24:a,o=c(e,["color","size"]);return s.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),s.createElement("polyline",{points:"16 18 22 12 16 6"}),s.createElement("polyline",{points:"8 6 2 12 8 18"}))}));d.propTypes={color:o().string,size:o().oneOfType([o().string,o().number])},d.displayName="Code";var u=d,h=n(61137);var p=function(e){return(0,a.jsx)(h.Z,(0,r.Z)({icon:u},e))}},67571:function(e,t,n){"use strict";var r=n(70865),a=n(52322),s=(n(2784),n(77732)),i=n(61137);t.Z=function(e){return(0,a.jsx)(i.Z,(0,r.Z)({icon:s.Z},e))}},82098:function(e,t,n){"use strict";var r=n(70865),a=n(52322),s=(n(2784),n(40506)),i=n(61137);t.Z=function(e){return(0,a.jsx)(i.Z,(0,r.Z)({icon:s.Z},e))}},84988:function(){},77732:function(e,t,n){"use strict";var r=n(2784),a=n(13980),s=n.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=(0,r.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,s=e.size,l=void 0===s?24:s,c=o(e,["color","size"]);return r.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("path",{d:"M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"}),r.createElement("polyline",{points:"17 21 17 13 7 13 7 21"}),r.createElement("polyline",{points:"7 3 7 8 15 8"}))}));l.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},l.displayName="Save",t.Z=l},40506:function(e,t,n){"use strict";var r=n(2784),a=n(13980),s=n.n(a);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=(0,r.forwardRef)((function(e,t){var n=e.color,a=void 0===n?"currentColor":n,s=e.size,l=void 0===s?24:s,c=o(e,["color","size"]);return r.createElement("svg",i({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),r.createElement("polyline",{points:"4 17 10 11 4 5"}),r.createElement("line",{x1:"12",y1:"19",x2:"20",y2:"19"}))}));l.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},l.displayName="Terminal",t.Z=l}}]);