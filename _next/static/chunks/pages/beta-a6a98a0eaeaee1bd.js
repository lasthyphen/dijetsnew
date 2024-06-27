(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8833],{32408:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/beta",function(){return a(16846)}])},64059:function(t,e,a){"use strict";var r=a(52322);e.Z=function(t){var e=t.children;return(0,r.jsx)("div",{children:e})}},29406:function(t,e,a){"use strict";a.d(e,{aD:function(){return r}});a(52322);var r=[{key:"read",title:"Average throughput with moderate workload of 100-200 Tx requests",stats:[{name:"Dijets",value:5480},{name:"Polkadot",value:1500},{name:"Ripple",value:1200},{name:"Binance",value:1e3},{name:"Ethereum",value:20},{name:"Solana",value:2460},{name:"Avalanche",value:1800},{name:"Algorand",value:1180}]},{key:"write",title:"Average throughput when stressed with a constant workload of 1,000 Tx requests",stats:[{name:"Dijets",value:4660},{name:"Polkadot",value:750},{name:"Ripple",value:560},{name:"Binance",value:280},{name:"Ethereum",value:5},{name:"Solana",value:890},{name:"Avalanche",value:650},{name:"Algorand",value:440}]}]},16846:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return f}});var r=a(98788),i=a(5163),o=a(52322),n=a(64059),u=a(2784),s=a(29406),h=a(61812),l=a(84466),c=a(55351),g=a(97729),m=a.n(g),p=a(5632),d=a(82505),_="".concat(l.iC," | We are now in Beta"),b=function(t){var e=t.sectionNumber,a=t.header;return(0,o.jsxs)("div",{className:"col-span-12",children:[(0,o.jsxs)("span",{className:"block mb-3 font-mono text-3xl text-scale-1200",children:["0",e]}),(0,o.jsx)("h3",{className:"text-6xl text-black dark:text-white",children:a})]})},v=function(){var t=function(t){var e=t.color,a=t.finalPercentage,n=t.duration,s=void 0===n?2e3:n,h=parseInt(a,10),l=(0,u.useState)(0),c=l[0],g=l[1],m=(0,u.useState)(!1),p=m[0],d=m[1],_=function(t){return t*(2-t)},b=2e3/60;return(0,u.useEffect)((function(){var t=0,e=Math.round(s/b);function a(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)((function(){var a,r;return(0,i.__generator)(this,(function(i){return(a=document.getElementById("performanceCharts"))&&!p&&a.getBoundingClientRect().top-window.innerHeight+20<=0&&(d(!0),g(0),r=setInterval((function(){t++;var a=_(t/e);g(h*a),t===e&&clearInterval(r)}),b)),[2]}))}))).apply(this,arguments)}return window.addEventListener("scroll",a,{passive:!0}),function(){return window.removeEventListener("scroll",a)}}),[p]),(0,o.jsx)("div",{className:"".concat(e," h-3 rounded-full"),style:{width:"".concat(c.toFixed(2),"%")}})},e=function(){return(0,o.jsx)("div",{id:"performanceCharts",children:s.aD.map((function(e){var a=(e.stats[0].value/e.stats[1].value).toFixed(1);return(0,o.jsxs)("div",{className:"mb-10 text-dark-400 dark:text-dark-300",children:[(0,o.jsx)("p",{className:"pb-2 mb-4 sm:w-36",children:e.title}),(0,o.jsxs)("div",{className:"flex flex-col sm:flex-row sm:items-center",children:[(0,o.jsx)("div",{className:"w-full sm:w-5/6",children:e.stats.map((function(a,r){return(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("p",{className:"w-20 py-2 pr-4 mr-4 text-left border-r sm:text-right lg:w-24",children:a.name}),(0,o.jsx)(t,{color:"Supabase"===a.name?"bg-brand dark:bg-brand-300":"bg-brand-300 dark:bg-brand-400",finalPercentage:Math.ceil(a.value/1600*100)}),(0,o.jsxs)("p",{className:"ml-2",children:[a.value,"/s"]})]},"metric_".concat(e.key,"_").concat(r))}))}),(0,o.jsxs)("div",{className:"flex flex-col text-left sm:w-1/6 sm:text-right",children:[(0,o.jsxs)("p",{className:"text-6xl text-dark-700 dark:text-dark-100",children:[a,"x"]}),(0,o.jsxs)("p",{className:"-mt-2 text-sm",children:["more ",e.key,"s per second"]})]})]})]},"".concat(e.key))}))})};return(0,o.jsx)("div",{id:"performance",className:"bg-white dark:bg-scale-200",children:(0,o.jsxs)("div",{className:"container grid grid-cols-12 px-8 py-20 mx-auto text-dark-400 dark:text-dark-300 gap-y-10 lg:px-28",children:[(0,o.jsx)(b,{sectionNumber:1,header:"Performance"}),(0,o.jsxs)("div",{className:"grid items-center grid-cols-12 col-span-12 mb-10 text-scale-1200 gap-x-2 lg:gap-x-8",children:[(0,o.jsxs)("div",{className:"col-span-12 text-base sm:col-span-9 xl:col-span-7",children:[(0,o.jsx)("p",{className:"mb-10",children:"Scalability has always been one of the key defining metric for a blockchain performance. High transaction latencies directly impact end-users experience, e.g., the relatively high finalisation times of Bitcoin transactions (10 minutes) make it unsuitable for interactive trade. execution, storage, and consensus. With the ultimate goal of unlocking blockchain technology for all users and use cases we set out to build Dijets."}),(0,o.jsx)("p",{children:" Dijets is a high-fidelity, high-security blockchain network that offers unmatched scalability, eliminating the consensus bottleneck of other blockchains without sacrificing security or decentralisation."}),(0,o.jsxs)("p",{className:"text-dark-400 dark:text-dark-300",children:["We're publishing the results of our benchmarks here and we'll continue to seek gains throughout our Beta program and beyond. Our"," ",(0,o.jsx)("a",{href:"https://github.com/supabase/benchmarks/",target:"_blank",className:"text-brand hover:text-brand",children:"benchmarks"})," ","are open source so that the community can better our methodologies and identify areas of improvement for the tools which we support at Supabase."]})]}),(0,o.jsx)("div",{className:"col-span-12 mt-10 mb-10",children:(0,o.jsx)(e,{})}),(0,o.jsxs)("div",{className:"col-span-12 text-base sm:col-span-9 xl:col-span-7",children:[(0,o.jsx)("p",{className:"mb-10",children:"Benchmarks were run from a neutral host (Digital Ocean Droplet 4 GB Memory / 80 GB Disk / SGP1 - Ubuntu 20.04 (LTS) x64) against a table/collection pre-populated with 1 million rows. The Supabase database and API used are each running on AWS EC2 t3a.micro instances."}),(0,o.jsx)("p",{className:"mb-10",children:"Supabase is available in 7 different geographic regions. We're adding more regions as we build up multi-cloud support. Soon we'll offer read-replicas to scale your database right to the edge - reducing latency and giving your users a better experience."}),(0,o.jsx)("p",{children:'One of our key metrics at Supabase is "Time to Value". How fast can a user go from sign up, to making their first API request? How fast can they go from development to production? We\'ve built several case studies on our blog, demonstrating how Supabase enables them to build and scale their product in as little time as possible.'})]})]})]})})},f=function(t){var e=(0,u.useState)(!1),a=(e[0],e[1],(0,p.useRouter)().basePath,t.darkMode,{performance:(0,u.useRef)(null)});return(0,o.jsxs)(d.Z,{hideHeader:!0,children:[(0,o.jsxs)(m(),{children:[(0,o.jsx)("title",{children:_}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,o.jsx)("meta",{name:"og:title",property:"og:title",content:_}),(0,o.jsx)("meta",{name:"twitter:site",content:_}),(0,o.jsx)("meta",{name:"twitter:text:title",content:_})]}),(0,o.jsx)(c.PB,{title:_,openGraph:{title:_,description:l.Yu,url:"https://supabase.com/beta",type:"article",article:{publishedTime:"2020-12-03T00:00:00Z",authors:[h[12].author_url],tags:["beta"]},images:[{url:"https://supabase.com/og/og-image-v2.jpg"}]}}),(0,o.jsx)(n.Z,{children:(0,o.jsx)("div",{ref:a.performance,children:(0,o.jsx)(v,{})})})]})}},61812:function(t){"use strict";t.exports=JSON.parse('[{"author_id":"angelico_de_los_reyes","author":"Angelico de los Reyes","position":"Engineering","author_url":"https://github.com/dragarcia","author_image_url":"https://github.com/dragarcia.png"},{"author_id":"ant_wilson","author":"Ant Wilson","position":"CTO and Co-Founder","author_url":"https://github.com/awalias","author_image_url":"https://github.com/awalias.png"},{"author_id":"dijets_dev","author":"Cyph","position":"Dev","author_url":"https://github.com/","author_image_url":"/images/twitter-profiles/ddev.png"},{"author_id":"dijets_official","author":"Dijets Inc.","position":"Official","author_url":"https://github.com/","author_image_url":"/images/twitter-profiles/dijets-inc.png"},{"author_id":"div_arora","author":"Div Arora","username":"darora","position":"Engineering","author_url":"https://github.com/darora","author_image_url":"https://github.com/darora.png"},{"author_id":"fracek","author":"Francesco Ceccon","username":"fracek","position":"Engineering","author_url":"https://github.com/fracek","author_image_url":"https://github.com/fracek.png"},{"author_id":"gurjeet","author":"Gurjeet Singh","username":"gurjeet","position":"Engineering","author_url":"https://github.com/gurjeet","author_image_url":"https://github.com/gurjeet.png"},{"author_id":"inian","author":"Inian Parameshwaran","username":"inian","position":"Engineering","author_url":"https://twitter.com/everConfusedGuy","author_image_url":"https://avatars.githubusercontent.com/u/2155545?v=4"},{"author_id":"kangmingtay","author":"Kang Ming Tay","username":"kangmingtay","position":"Engineering","author_url":"https://github.com/kangmingtay","author_image_url":"https://github.com/kangmingtay.png"},{"author_id":"oli_rice","author":"Oliver Rice","username":"olirice","position":"Engineering","author_url":"https://github.com/olirice","author_image_url":"https://github.com/olirice.png"},{"author_id":"paul_copplestone","author":"Paul Copplestone","position":"CEO and Co-Founder","author_url":"https://github.com/kiwicopple","author_image_url":"https://github.com/kiwicopple.png"},{"author_id":"qiao","author":"Qiao Han","position":"Engineering","author_url":"https://github.com/sweatybridge","author_image_url":"https://github.com/sweatybridge.png"},{"author_id":"rory_wilding","author":"Rory Wilding","position":"Head of Growth","author_url":"https://github.com/roryw10","author_image_url":"https://github.com/roryw10.png"},{"author_id":"steve_chavez","author":"Steve Chavez","username":"steve-chavez","position":"Engineering & PostgREST maintainer","author_url":"https://github.com/steve-chavez","author_image_url":"https://github.com/steve-chavez.png"},{"author_id":"supabase","author":"Supabase","position":"","author_url":"https://github.com/supabase","author_image_url":"https://github.com/supabase.png"},{"author_id":"thor_schaeff","author":"Thor Schaeff","position":"DevRel & DX","author_url":"https://twitter.com/thorwebdev","author_image_url":"https://github.com/thorwebdev.png"},{"author_id":"wenbo_xie","author":"Wen Bo Xie","username":"w3b6x9","position":"Engineering","author_url":"https://github.com/w3b6x9","author_image_url":"https://github.com/w3b6x9.png"},{"author_id":"dthyresson","author":"David Thyresson","username":"dthyresson","position":"Engineering","author_url":"https://github.com/dthyresson","author_image_url":"https://github.com/dthyresson.png"},{"author_id":"shanerice","author":"Shane Rice","username":"shanerice","position":"Marketing","author_url":"https://github.com/shanerice","author_image_url":"https://github.com/shanerice.png"},{"author_id":"alaister","author":"Alaister Young","username":"alaister","position":"Engineering","author_url":"https://github.com/alaister","author_image_url":"https://github.com/alaister.png"},{"author_id":"tyler_shukert","author":"Tyler Shukert","username":"dshukertjr","position":"DevRel & Flutter","author_url":"https://twitter.com/dshukertjr","author_image_url":"https://github.com/dshukertjr.png"},{"author_id":"victor","author":"Victor","username":"t3hmrman","position":"Guest Author","author_url":"https://github.com/t3hmrman","author_image_url":"https://github.com/t3hmrman.png"},{"author_id":"andrew_smith","author":"Andrew Smith","username":"silentworks","position":"DevRel & DX","author_url":"https://github.com/silentworks","author_image_url":"https://github.com/silentworks.png"},{"author_id":"rodrigo_mansueli","author":"Rodrigo Mansueli Nunes","username":"mansueli","position":"Support Engineer","author_url":"https://github.com/mansueli","author_image_url":"https://github.com/mansueli.png"},{"author_id":"stas","author":"Stanislav Muzhyk","username":"abc3","position":"Engineering","author_url":"https://github.com/abc3","author_image_url":"https://github.com/abc3.png"},{"author_id":"jonmeyers_io","author":"Jon Meyers","position":"Developer Advocate","author_url":"https://twitter.com/jonmeyers_io","author_image_url":"https://github.com/dijonmusters.png"},{"author_id":"michel","author":"Michel Pelletier","position":"Engineering","author_url":"https://github.com/michelp","author_image_url":"https://github.com/michelp.png"},{"author_id":"joel","author":"Joel Lee","username":"j0","position":"Engineering","author_url":"https://github.com/j0","author_image_url":"https://github.com/j0.png"},{"author_id":"simon_grimm","author":"Simon Grimm","username":"schlimmson","position":"Guest Author","author_url":"https://twitter.com/schlimmson","author_image_url":"https://github.com/saimon24.png"},{"author_id":"burggraf","author":"Mark Burggraf","username":"burggraf","position":"Engineering","author_url":"https://github.com/burggraf","author_image_url":"https://github.com/burggraf.png"},{"author_id":"pavel","author":"Pavel Borisov","username":"pavel","position":"Postgres Engineer","author_url":"https://github.com/pashkinelfe","author_image_url":"https://avatars.githubusercontent.com/u/63344111?v=4"},{"author_id":"ramiro","author":"Ramiro Nunez Dosio","position":"Growth Marketer","author_url":"https://twitter.com/ramiro__nd","author_image_url":"https://avatars.githubusercontent.com/u/20600542?v=4"},{"author_id":"jonny","author":"Jonathan Summers-Muir","position":"Engineering","author_url":"https://github.com/mildtomato","author_image_url":"https://github.com/mildtomato.png"},{"author_id":"fabrizio","author":"Fabrizio Fenoglio","position":"Engineering","author_url":"https://github.com/fenos","author_image_url":"https://github.com/fenos.png"},{"author_id":"bo_lu","author":"Bo Lu","position":"Engineering","author_url":"https://github.com/burmecia","author_image_url":"https://github.com/burmecia.png"},{"author_id":"stojan","author":"Stojan Dimitrovski","position":"Engineering","author_url":"https://github.com/hf","author_image_url":"https://github.com/hf.png"},{"author_id":"gregnr","author":"Greg Richardson","position":"Engineering","author_url":"https://github.com/gregnr","author_image_url":"https://github.com/gregnr.png"},{"author_id":"fsansalvadore","author":"Francesco Sansalvadore","position":"Engineering","author_url":"https://github.com/fsansalvadore","author_image_url":"https://github.com/fsansalvadore.png"},{"author_id":"marijana","author":"Marijana \u0160imag","position":"Design","author_url":"https://dribbble.com/marijanasimag","author_image_url":"https://github.com/marijanasimag.png"},{"author_id":"ziinc","author":"Lee TzeYiing","position":"Engineering","author_url":"https://github.com/Ziinc","author_image_url":"https://github.com/Ziinc.png"},{"author_id":"chasers","author":"Chase Granberry","position":"Engineering","author_url":"https://github.com/chasers","author_image_url":"https://github.com/chasers.png"},{"author_id":"joshenlim","author":"Joshen Lim","username":"joshenlim","position":"Engineering","author_url":"https://github.com/joshenlim","author_image_url":"https://github.com/joshenlim.png"},{"author_id":"laktek","author":"Lakshan Perera","position":"Engineering","author_url":"https://github.com/laktek","author_image_url":"https://github.com/laktek.png"},{"author_id":"saltcod","author":"Terry Sutton","position":"Engineering","author_url":"https://github.com/saltcod","author_image_url":"https://github.com/saltcod.png"},{"author_id":"daltjoh-aws","author":"John Dalton","position":"Product Management Leader @ AWS","author_url":"https://github.com/daltjoh-aws","author_image_url":"https://github.com/daltjoh-aws.png"},{"author_id":"egor_romanov","author":"Egor Romanov","position":"Engineering","author_url":"https://github.com/egor-romanov","author_image_url":"https://github.com/egor-romanov.png"},{"author_id":"kevcodez","author":"Kevin Gr\xfcneberg","position":"Engineering","author_url":"https://github.com/kevcodez","author_image_url":"https://github.com/kevcodez.png"}]')}},function(t){t.O(0,[995,4217,7493,2505,9774,2888,179],(function(){return e=32408,t(t.s=e);var e}));var e=t.O();_N_E=e}]);