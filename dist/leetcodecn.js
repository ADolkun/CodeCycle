(()=>{"use strict";var e,t,o,s,n={724:(e,t,o)=>{o.d(t,{A:()=>l});var s=o(147),n=o(347);const r=async e=>new Promise(((t,o)=>{chrome.storage.sync.get(e,(e=>{void 0===e?o(key):t(e)}))})).catch((e=>{console.log(console.log(e))})),a=async(e,t)=>{if(o=t,Object.getPrototypeOf(o)!==Object.prototype)throw"shardedSet only supports JSON type val";var o;const n={},r=Object.keys(t);Array.prototype.forEach.call(r,(o=>{const r=(e=>((0,s.G$)(e)%20+20)%20)(o),a=`${e}#${r}`;a in n||(n[a]={}),n[a][o]=t[o]})),console.log("set shareded data to cloud:"),console.log(n),await(async e=>new Promise((t=>{chrome.storage.sync.set(e),t()})).catch((e=>console.log(e))))(n)},i=async e=>{const t=[];for(let o=0;o<20;o++)t.push(`${e}#${o}`);const o=await r(t),s={};if(void 0===o)return s;for(const e in o)Object.assign(s,o[e]);return console.log(`get ${e} sharded from cloud`),console.log(s),s};class c extends n.T{constructor(){super(),this.get=i,this.set=a}}const l=new c},229:(e,t,o)=>{o.d(t,{W:()=>r});const s={operationName:"questionTitle",variables:{titleSlug:""}},n={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36",Connection:"keep-alive","Content-Type":"application/json",Referer:""},r=async()=>{let e=window.location.href;const t=e.match(/(com|cn)(\/|$)/);console.log(`current site is ${t[1]}`);const o=t?t[1]:"com",r=["/submissions/","/description/","/discussion/","/solutions/"];for(const t of r)if(e.includes(t)){e=e.substring(0,e.lastIndexOf(t)+1);break}const a=e.split("/").splice(-2)[0],i=await(async(e,t)=>{const o=`https://leetcode.${t}`;s.variables.titleSlug=e,s.query=`query questionTitle($titleSlug: String!) {\n        question(titleSlug: $titleSlug) {\n          questionFrontendId\n          ${"cn"===t?"translatedTitle":"title"}\n          difficulty\n        }\n      }`,n.Referer=`${o}/problems/${e}`;const r={method:"POST",headers:n,body:JSON.stringify(s),timeout:1e4},a=await fetch(`${o}/graphql`,r);return(await a.json()).data.question})(a,o);return{problemIndex:i.questionFrontendId,problemName:`${i.questionFrontendId}. ${"cn"===o?i.translatedTitle:i.title}`,problemLevel:i.difficulty,problemUrl:e}}},610:(e,t,o)=>{o.d(t,{Ay:()=>i,lR:()=>r,vc:()=>n});var s=o(347);const n=async e=>new Promise(((t,o)=>{chrome.storage.local.get(e,(s=>{void 0===s||void 0===s[e]?o(e):t(s[e])}))})).catch((e=>{console.log(`get local storage data failed for key = ${e}`)})),r=async(e,t)=>new Promise((o=>{chrome.storage.local.set({[e]:t}),o()})).catch((e=>console.log(e)));class a extends s.T{constructor(){super(),this.get=n,this.set=r}}const i=new a},347:(e,t,o)=>{o.d(t,{T:()=>s});class s{constructor(){this.get=async e=>null,this.set=async(e,t)=>{}}}},226:(e,t,o)=>{Object.freeze({MASTER:"mark as mastered",RESET:"reset progress",DELETE:"delete record"})},90:(e,t,o)=>{o.d(t,{AF:()=>s});class s{constructor(e,t,o,s,n,r,a){this.index=e,this.name=t,this.level=o,this.url=s,this.submissionTime=n,this.proficiency=r,this.modificationTime=a,this.isDeleted=!1}}},223:(e,t,o)=>{o.a(e,(async(e,t)=>{try{var s=o(908),n=o(873);console.log("Hello CodeCycle!"),await(0,s.A9)(),(0,n.D)(),t()}catch(e){t(e)}}),1)},873:(e,t,o)=>{o.d(t,{D:()=>i});var s=o(147),n=o(583),r=o(90);const a=e=>{console.log("Event captured:",e.type,e),(0,s.ZK)(e)&&(console.log("Submission detected!"),(()=>{let e;console.log("Monitoring submission result...");let t=10;const o=setInterval((async()=>{if(t<=0)return clearInterval(o),void console.log("Max retries reached");if(e=(0,s.OL)(),console.log("Current submission result:",e),void 0===e||0===e.length)return void t--;clearInterval(o);let a=(0,s.W2)(e);if(console.log("Submission success:",a),!a)return;const{problemIndex:i,problemName:c,problemLevel:l,problemUrl:d}=await(0,n.Qx)();await(0,n.k)();let u=(await(0,n.C5)())[i];u&&!0!==u.isDeleted?(0,s.Dv)(u)&&await(0,n.Ws)((0,s.er)(u)):(u=new r.AF(i,c,l,d,Date.now(),(0,s.Mv)(l)[0],Date.now()),await(0,n.Ws)(u)),await(0,n.k)(),console.log("Submission successfully tracked!")}),1e3)})())},i=()=>{const e=document.querySelector('[data-track-load="description_content"]')||document;console.log("Registering submission listeners..."),e.removeEventListener("click",a),e.removeEventListener("keydown",a),e.addEventListener("click",a),e.addEventListener("keydown",a),console.log("Submission listeners registered")}},908:(e,t,o)=>{o.d(t,{A9:()=>i});var s=o(610),n=o(776),r=o(984),a=o(920);const i=async()=>{await(async()=>{const e=await(async()=>await(0,s.vc)(r.rQ))();void 0!==e&&Object.assign(n.M,e)})(),await(async()=>{const e=await(async()=>await(0,s.vc)(r.fO))()|(0,a.TH)(a.qs.sortByReviewTimeAsc);n.M.problemSortBy=(0,a.mq)(e)})(),await(async()=>{n.M.isCloudSyncEnabled=await(async()=>{const e=await(0,s.vc)(r.v4),t=void 0!==e&&e[r.g5];return void 0===t&&(t=!1),t})()})()}},967:(e,t,o)=>{o.d(t,{e:()=>r});var s=o(610),n=o(984);const r=async()=>{let e=await(0,s.vc)(n.Qi);return console.log(`current cnMode is ${e}`),void 0===e&&(await(0,s.lR)(n.Qi,!1),e=!1),e}},87:(e,t,o)=>{o(226),o(967),o(610),o(583)},583:(e,t,o)=>{o.d(t,{C5:()=>l,Qx:()=>d,Ws:()=>u,k:()=>m});var s=o(229),n=o(610),r=(o(87),o(226),o(984)),a=o(967),i=o(776),c=o(147);o(724);const l=async()=>{const e=await(0,a.e)()?r.o9:r.So;let t=await(0,n.vc)(e);return void 0===t&&(t={}),t},d=async()=>await(0,s.W)(),u=async e=>{e.modificationTime=Date.now();const t=await l();t[e.index]=e,await(async e=>{const t=await(0,a.e)()?r.o9:r.So;await(0,n.lR)(t,e)})(t)},m=async()=>{if(!i.M.isCloudSyncEnabled)return;const e=await(0,a.e)()?r.o9:r.So;await(0,c.mG)(e,c.nC)}},776:(e,t,o)=>{o.d(t,{M:()=>s});const s={needReviewProblems:null,reviewScheduledProblems:null,completedProblems:null,toReviewPage:1,scheduledPage:1,completedPage:1,toReviewMaxPage:null,scheduledMaxPage:null,completedMaxPage:null,tooltipTriggerList:null,tooltipList:null,easyIntv:[0,1,3,4],mediumIntv:[0,1,3,4],hardIntv:[0,1,2,3,4],problemSortBy:o(920).qs.sortByReviewTimeAsc,isCloudSyncEnabled:!1}},803:(e,t,o)=>{o.d(t,{BX:()=>i,Hx:()=>n,Mz:()=>f,Xy:()=>r,c4:()=>s,dy:()=>u,fu:()=>c,lw:()=>d,o3:()=>a,pS:()=>m,uK:()=>l,uM:()=>y});const s=[1440,2880,5760,10080,21600],n="data-e2e-locator",r="console-submit-button",a="text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6",i="whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s",c="mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s",l="success__3Ai7",d="error__2Ft1",u="error__10k9",m="text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6",y="whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s",f="mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s"},984:(e,t,o)=>{o.d(t,{Qi:()=>s,So:()=>r,fO:()=>i,g5:()=>l,o9:()=>n,rQ:()=>a,v4:()=>c});const s="cn_mode",n="cn_records",r="records",a="review_intervals",i="problem_sort_by",c="configs",l="enable_cloud"},920:(e,t,o)=>{o.d(t,{TH:()=>l,mq:()=>d,qs:()=>i});var s=o(147);const n=e=>(t,o)=>-e(t,o),r=(e,t)=>(0,s.pH)(e).valueOf()-(0,s.pH)(t).valueOf(),a=(e,t)=>(0,s.y$)(t).valueOf()-(0,s.y$)(e).valueOf(),i={sortByReviewTimeDesc:n(r),sortByReviewTimeAsc:r,sortByDelayHoursDesc:a,sortByDelayHoursAsc:n(a)},c=[i.sortByReviewTimeAsc,i.sortByReviewTimeDesc,i.sortByDelayHoursAsc,i.sortByDelayHoursDesc],l=e=>c.indexOf(e),d=e=>c[e]},147:(e,t,o)=>{o.d(t,{Dv:()=>i,G$:()=>p,Mv:()=>d,OL:()=>u,W2:()=>m,ZK:()=>v,er:()=>y,mG:()=>g,nC:()=>f,pH:()=>c,y$:()=>l});var s=o(610),n=o(724),r=o(776),a=o(803);const i=e=>{if(e.proficiency>=a.c4.length)return!1;const t=new Date,o=new Date(e.submissionTime);return t.setHours(0,0,0,0),o.setHours(0,0,0,0),(t-o)/864e5>=a.c4[e.proficiency]/1440},c=e=>{const t=new Date(e.submissionTime),o=a.c4[e.proficiency]/1440;return t.setDate(t.getDate()+Math.floor(o)),t.setHours(0,0,0,0),t},l=e=>{const t=c(e);return Math.round((Date.now()-t)/36e5)},d=e=>"Easy"===e?r.M.easyIntv:"Medium"===e?r.M.mediumIntv:r.M.hardIntv,u=()=>document.getElementsByClassName(a.o3)[0]||document.getElementsByClassName(a.BX)[0]||document.getElementsByClassName(a.fu)[0]||document.getElementsByClassName(a.uK)[0]||document.getElementsByClassName(a.lw)[0]||document.getElementsByClassName(a.dy)[0]||document.getElementsByClassName(a.pS)[0]||document.getElementsByClassName(a.uM)[0]||document.getElementsByClassName(a.Mz)[0],m=e=>e.className.includes(a.o3)||e.className.includes(a.pS)||e.className.includes(a.uK),y=e=>{const t=d(e.problemLevel);let o;for(const s of t)if(s>e.proficiency){o=s;break}return e.proficiency=void 0!==o?o:a.c4.length,e.submissionTime=Date.now(),e.modificationTime=Date.now(),e},f=(e,t)=>{const o=new Set([...Object.keys(e),...Object.keys(t)]),s={};return o.forEach((o=>{const n=(r=e[o],null==(a=t[o])?r:null==r?a:void 0===a.modificationTime||null===a.modificationTime?r:void 0===r.modificationTime||null===r.modificationTime?a:r.modificationTime>a.modificationTime?r:a);var r,a;s[o]=n})),s},g=async(e,t)=>{await(async(e,t,o,s)=>{if(!r.M.isCloudSyncEnabled)return;const n=await e.get(o)||{},a=await t.get(o)||{},i=s(n,a);console.log("merging data from local and from cloud. local:"),console.log(n),console.log("merging data from local and from cloud. cloud:"),console.log(a),await e.set(o,i),await t.set(o,i)})(s.Ay,n.A,e,t)},p=e=>{let t=0;for(let o=0;o<e.length;o++)t=(t<<5)-t+e.charCodeAt(o),t|=0;return t},v=e=>{if(console.log("Checking submission event:",e.type),"click"===e.type){const t=(e=>{if(!e)return!1;if(e.getAttribute(a.Hx)===a.Xy)return!0;let t=e.parentElement,o=0;for(;t&&o<3;){if(t.getAttribute(a.Hx)===a.Xy)return!0;t=t.parentElement,o++}return!1})(e.target);return console.log("Is submit button:",t),t}if("keydown"===e.type){const t=/Mac|iPod|iPhone|iPad/.test(navigator.platform)?e.metaKey&&"Enter"===e.key:e.ctrlKey&&"Enter"===e.key;return console.log("Is keyboard shortcut:",t),t}return!1}}},r={};function a(e){var t=r[e];if(void 0!==t)return t.exports;var o=r[e]={exports:{}};return n[e](o,o.exports,a),o.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",o="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",s=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},a.a=(n,r,a)=>{var i;a&&((i=[]).d=-1);var c,l,d,u=new Set,m=n.exports,y=new Promise(((e,t)=>{d=t,l=e}));y[t]=m,y[e]=e=>(i&&e(i),u.forEach(e),y.catch((e=>{}))),n.exports=y,r((n=>{var r;c=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var r=[];r.d=0,n.then((e=>{a[t]=e,s(r)}),(e=>{a[o]=e,s(r)}));var a={};return a[e]=e=>e(r),a}}var i={};return i[e]=e=>{},i[t]=n,i})))(n);var a=()=>c.map((e=>{if(e[o])throw e[o];return e[t]})),l=new Promise((t=>{(r=()=>t(a)).r=0;var o=e=>e!==i&&!u.has(e)&&(u.add(e),e&&!e.d&&(r.r++,e.push(r)));c.map((t=>t[e](o)))}));return r.r?l:a()}),(e=>(e?d(y[o]=e):l(m),s(i)))),i&&i.d<0&&(i.d=0)},a.d=(e,t)=>{for(var o in t)a.o(t,o)&&!a.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a(223)})();