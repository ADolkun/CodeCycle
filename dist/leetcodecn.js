(()=>{"use strict";var e,t,o,n,a={188:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(384),a=o(648);const s=async e=>new Promise(((t,o)=>{chrome.storage.sync.get(e,(e=>{void 0===e?o(key):t(e)}))})).catch((e=>{console.log(console.log(e))})),r=async(e,t)=>{if(o=t,Object.getPrototypeOf(o)!==Object.prototype)throw"shardedSet only supports JSON type val";var o;const a={},s=Object.keys(t);Array.prototype.forEach.call(s,(o=>{const s=(e=>((0,n.zJ)(e)%20+20)%20)(o),r=`${e}#${s}`;r in a||(a[r]={}),a[r][o]=t[o]})),console.log("set shareded data to cloud:"),console.log(a),await(async e=>new Promise((t=>{chrome.storage.sync.set(e),t()})).catch((e=>console.log(e))))(a)},i=async e=>{const t=[];for(let o=0;o<20;o++)t.push(`${e}#${o}`);const o=await s(t),n={};if(void 0===o)return n;for(const e in o)Object.assign(n,o[e]);return console.log(`get ${e} sharded from cloud`),console.log(n),n};class c extends a.i{constructor(){super(),this.get=i,this.set=r}}const l=new c},891:(e,t,o)=>{o.d(t,{Cy:()=>a,ZP:()=>i,qy:()=>s});var n=o(648);const a=async e=>new Promise(((t,o)=>{chrome.storage.local.get(e,(n=>{void 0===n||void 0===n[e]?o(e):t(n[e])}))})).catch((e=>{console.log(`get local storage data failed for key = ${e}`)})),s=async(e,t)=>new Promise((o=>{chrome.storage.local.set({[e]:t}),o()})).catch((e=>console.log(e)));class r extends n.i{constructor(){super(),this.get=a,this.set=s}}const i=new r},648:(e,t,o)=>{o.d(t,{i:()=>n});class n{constructor(){this.get=async e=>null,this.set=async(e,t)=>{}}}},597:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var n=o(970),a=o(279);console.log("Hello PMCA!"),await(0,n.O1)(),document.addEventListener("click",a.L),t()}catch(e){t(e)}}),1)},279:(e,t,o)=>{o.d(t,{L:()=>p});var n=o(384);const a={operationName:"questionTitle",variables:{titleSlug:""}},s={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36",Connection:"keep-alive","Content-Type":"application/json",Referer:""};var r=o(891);Object.freeze({MASTER:"mark as mastered",RESET:"reset progress",DELETE:"delete record"});var i=o(134);const c=async()=>{let e=await(0,r.Cy)(i.dw);return console.log(`current cnMode is ${e}`),void 0===e&&(await(0,r.qy)(i.dw,!1),e=!1),e};var l=o(214);o(188);const d=async()=>{const e=await c()?i.Q$:i.y0;let t=await(0,r.Cy)(e);return void 0===t&&(t={}),t},m=async e=>{e.modificationTime=Date.now();const t=await d();t[e.index]=e,await(async e=>{const t=await c()?i.Q$:i.y0;await(0,r.qy)(t,e)})(t)},u=async()=>{if(!l.h.isCloudSyncEnabled)return;const e=await c()?i.Q$:i.y0;await(0,n.gV)(e,n.bK)};class y{constructor(e,t,o,n,a,s,r){this.index=e,this.name=t,this.level=o,this.url=n,this.submissionTime=a,this.proficiency=s,this.modificationTime=r,this.isDeleted=!1}}const f=()=>{let e,t=10;const o=setInterval((async()=>{if(t<=0)return void clearInterval(o);if(e=(0,n._t)(),void 0===e||0===e.length)return void t--;if(clearInterval(o),!(0,n.mf)(e))return;const{problemIndex:r,problemName:i,problemLevel:c,problemUrl:l}=await(async()=>await(async()=>{let e=window.location.href;const t=e.match(/(com|cn)(\/|$)/);console.log(`current site is ${t[1]}`);const o=t?t[1]:"com",n=["/submissions/","/description/","/discussion/","/solutions/"];for(const t of n)if(e.includes(t)){e=e.substring(0,e.lastIndexOf(t)+1);break}const r=e.split("/").splice(-2)[0],i=await(async(e,t)=>{const o=`https://leetcode.${t}`;a.variables.titleSlug=e,a.query=`query questionTitle($titleSlug: String!) {\n        question(titleSlug: $titleSlug) {\n          questionFrontendId\n          ${"cn"===t?"translatedTitle":"title"}\n          difficulty\n        }\n      }`,s.Referer=`${o}/problems/${e}`;const n={method:"POST",headers:s,body:JSON.stringify(a),timeout:1e4},r=await fetch(`${o}/graphql`,n);return(await r.json()).data.question})(r,o);return{problemIndex:i.questionFrontendId,problemName:`${i.questionFrontendId}. ${"cn"===o?i.translatedTitle:i.title}`,problemLevel:i.difficulty,problemUrl:e}})())();await u();let f=(await d())[r];f&&!0!==f.isDeleted?(0,n.Hj)(f)&&await m((0,n.zd)(f)):(f=new y(r,i,c,l,Date.now(),(0,n.tL)(c)[0],Date.now()),await m(f)),await u(),console.log("Submission successfully tracked!")}),1e3)},p=e=>{const t=e.target;[(0,n.P2)(t),t.parentElement&&(0,n.P2)(t.parentElement),t.parentElement&&t.parentElement.parentElement&&(0,n.P2)(t.parentElement.parentElement)].reduce(((e,t)=>e||t))&&f()}},970:(e,t,o)=>{o.d(t,{O1:()=>i});var n=o(891),a=o(214),s=o(134),r=o(192);const i=async()=>{await(async()=>{const e=await(async()=>await(0,n.Cy)(s.FB))();void 0!==e&&Object.assign(a.h,e)})(),await(async()=>{const e=await(async()=>await(0,n.Cy)(s.ql))()|(0,r.jD)(r.SL.sortByReviewTimeAsc);a.h.problemSortBy=(0,r.HF)(e)})(),await(async()=>{a.h.isCloudSyncEnabled=await(async()=>{const e=await(0,n.Cy)(s.fR),t=void 0!==e&&e[s.$z];return void 0===t&&(t=!1),t})()})()}},214:(e,t,o)=>{o.d(t,{h:()=>n});const n={needReviewProblems:null,reviewScheduledProblems:null,completedProblems:null,toReviewPage:1,scheduledPage:1,completedPage:1,toReviewMaxPage:null,scheduledMaxPage:null,completedMaxPage:null,tooltipTriggerList:null,tooltipList:null,easyIntv:[1,3],mediumIntv:[1,3,4],hardIntv:[0,1,2,3,4],problemSortBy:o(192).SL.sortByReviewTimeAsc,isCloudSyncEnabled:!1}},497:(e,t,o)=>{o.d(t,{Ah:()=>i,EC:()=>u,Ex:()=>a,FG:()=>l,Oe:()=>f,P_:()=>d,Vq:()=>c,X6:()=>r,eK:()=>m,kQ:()=>s,mq:()=>n,u4:()=>y});const n=[1440,2880,5760,10080,21600],a="data-e2e-locator",s="console-submit-button",r="text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6",i="whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s",c="mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s",l="success__3Ai7",d="error__2Ft1",m="error__10k9",u="text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6",y="whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s",f="mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s"},134:(e,t,o)=>{o.d(t,{$z:()=>l,FB:()=>r,Q$:()=>a,dw:()=>n,fR:()=>c,ql:()=>i,y0:()=>s});const n="cn_mode",a="cn_records",s="records",r="review_intervals",i="problem_sort_by",c="configs",l="enable_cloud"},192:(e,t,o)=>{o.d(t,{HF:()=>d,SL:()=>i,jD:()=>l});var n=o(384);const a=e=>(t,o)=>-e(t,o),s=(e,t)=>(0,n.xt)(e).valueOf()-(0,n.xt)(t).valueOf(),r=(e,t)=>(0,n.J1)(t).valueOf()-(0,n.J1)(e).valueOf(),i={sortByReviewTimeDesc:a(s),sortByReviewTimeAsc:s,sortByDelayHoursDesc:r,sortByDelayHoursAsc:a(r)},c=[i.sortByReviewTimeAsc,i.sortByReviewTimeDesc,i.sortByDelayHoursAsc,i.sortByDelayHoursDesc],l=e=>c.indexOf(e),d=e=>c[e]},384:(e,t,o)=>{o.d(t,{Hj:()=>i,J1:()=>l,P2:()=>m,_t:()=>u,bK:()=>p,gV:()=>w,mf:()=>y,tL:()=>d,xt:()=>c,zJ:()=>g,zd:()=>f});var n=o(891),a=o(188),s=o(214),r=o(497);const i=e=>!(e.proficiency>=r.mq.length)&&(Date.now()-e.submissionTime)/6e4>=r.mq[e.proficiency],c=e=>new Date(e.submissionTime+60*r.mq[e.proficiency]*1e3),l=e=>{const t=c(e);return Math.round((Date.now()-t)/36e5)},d=e=>"Easy"===e?s.h.easyIntv:"Medium"===e?s.h.mediumIntv:s.h.hardIntv,m=e=>e.getAttribute(r.Ex)===r.kQ,u=()=>document.getElementsByClassName(r.X6)[0]||document.getElementsByClassName(r.Ah)[0]||document.getElementsByClassName(r.Vq)[0]||document.getElementsByClassName(r.FG)[0]||document.getElementsByClassName(r.P_)[0]||document.getElementsByClassName(r.eK)[0]||document.getElementsByClassName(r.EC)[0]||document.getElementsByClassName(r.u4)[0]||document.getElementsByClassName(r.Oe)[0],y=e=>e.className.includes(r.X6)||e.className.includes(r.EC)||e.className.includes(r.FG),f=e=>{const t=d(e.problemLevel);let o;for(const n of t)if(n>e.proficiency){o=n;break}return e.proficiency=void 0!==o?o:r.mq.length,e.submissionTime=Date.now(),e.modificationTime=Date.now(),e},p=(e,t)=>{const o=new Set([...Object.keys(e),...Object.keys(t)]),n={};return o.forEach((o=>{const a=(s=e[o],null==(r=t[o])?s:null==s?r:void 0===r.modificationTime||null===r.modificationTime?s:void 0===s.modificationTime||null===s.modificationTime?r:s.modificationTime>r.modificationTime?s:r);var s,r;n[o]=a})),n},w=async(e,t)=>{await(async(e,t,o,n)=>{if(!s.h.isCloudSyncEnabled)return;const a=await e.get(o)||{},r=await t.get(o)||{},i=n(a,r);console.log("merging data from local and from cloud. local:"),console.log(a),console.log("merging data from local and from cloud. cloud:"),console.log(r),await e.set(o,i),await t.set(o,i)})(n.ZP,a.Z,e,t)},g=e=>{let t=0;for(let o=0;o<e.length;o++)t=(t<<5)-t+e.charCodeAt(o),t|=0;return t}}},s={};function r(e){var t=s[e];if(void 0!==t)return t.exports;var o=s[e]={exports:{}};return a[e](o,o.exports,r),o.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",n=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},r.a=(a,s,r)=>{var i;r&&((i=[]).d=-1);var c,l,d,m=new Set,u=a.exports,y=new Promise(((e,t)=>{d=t,l=e}));y[t]=u,y[e]=e=>(i&&e(i),m.forEach(e),y.catch((e=>{}))),a.exports=y,s((a=>{var s;c=(a=>a.map((a=>{if(null!==a&&"object"==typeof a){if(a[e])return a;if(a.then){var s=[];s.d=0,a.then((e=>{r[t]=e,n(s)}),(e=>{r[o]=e,n(s)}));var r={};return r[e]=e=>e(s),r}}var i={};return i[e]=e=>{},i[t]=a,i})))(a);var r=()=>c.map((e=>{if(e[o])throw e[o];return e[t]})),l=new Promise((t=>{(s=()=>t(r)).r=0;var o=e=>e!==i&&!m.has(e)&&(m.add(e),e&&!e.d&&(s.r++,e.push(s)));c.map((t=>t[e](o)))}));return s.r?l:r()}),(e=>(e?d(y[o]=e):l(u),n(i)))),i&&i.d<0&&(i.d=0)},r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r(597)})();