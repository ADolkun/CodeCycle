(()=>{"use strict";class e{constructor(){this.get=async e=>null,this.set=async(e,t)=>{}}}const t=async e=>new Promise(((t,o)=>{chrome.storage.local.get(e,(s=>{void 0===s||void 0===s[e]?o(e):t(s[e])}))})).catch((e=>{console.log(`get local storage data failed for key = ${e}`)})),o=async(e,t)=>new Promise((o=>{chrome.storage.local.set({[e]:t}),o()})).catch((e=>console.log(e))),s=new class extends e{constructor(){super(),this.get=t,this.set=o}},n=async e=>new Promise(((t,o)=>{chrome.storage.sync.get(e,(e=>{void 0===e?o(key):t(e)}))})).catch((e=>{console.log(console.log(e))})),i=async(e,t)=>{if(o=t,Object.getPrototypeOf(o)!==Object.prototype)throw"shardedSet only supports JSON type val";var o;const s={},n=Object.keys(t);Array.prototype.forEach.call(n,(o=>{const n=(e=>(v(e)%20+20)%20)(o),i=`${e}#${n}`;i in s||(s[i]={}),s[i][o]=t[o]})),console.log("set shareded data to cloud:"),console.log(s),await(async e=>new Promise((t=>{chrome.storage.sync.set(e),t()})).catch((e=>console.log(e))))(s)},a=async e=>{const t=[];for(let o=0;o<20;o++)t.push(`${e}#${o}`);const o=await n(t),s={};if(void 0===o)return s;for(const e in o)Object.assign(s,o[e]);return console.log(`get ${e} sharded from cloud`),console.log(s),s},r=new class extends e{constructor(){super(),this.get=a,this.set=i}},l=[1440,2880,5760,10080,21600],c="data-e2e-locator",d="console-submit-button",m="text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6",u="success__3Ai7",g="text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6",y=e=>{const t=new Date(e.submissionTime),o=l[e.proficiency]/1440;return t.setDate(t.getDate()+Math.floor(o)),t.setHours(0,0,0,0),t},f=e=>{const t=y(e);return Math.round((Date.now()-t)/864e5)},w=e=>"Easy"===e?T.easyIntv:"Medium"===e?T.mediumIntv:T.hardIntv,p=(e,t)=>{const o=new Set([...Object.keys(e),...Object.keys(t)]),s={};return o.forEach((o=>{const n=(i=e[o],null==(a=t[o])?i:null==i?a:void 0===a.modificationTime||null===a.modificationTime?i:void 0===i.modificationTime||null===i.modificationTime?a:i.modificationTime>a.modificationTime?i:a);var i,a;s[o]=n})),s},v=e=>{let t=0;for(let o=0;o<e.length;o++)t=(t<<5)-t+e.charCodeAt(o),t|=0;return t},b=e=>(t,o)=>-e(t,o),h=(e,t)=>y(e).valueOf()-y(t).valueOf(),x=(e,t)=>f(t).valueOf()-f(e).valueOf(),k={sortByReviewTimeDesc:b(h),sortByReviewTimeAsc:h,sortByDelayHoursDesc:x,sortByDelayHoursAsc:b(x)},E=[k.sortByReviewTimeAsc,k.sortByReviewTimeDesc,k.sortByDelayHoursAsc,k.sortByDelayHoursDesc],T={needReviewProblems:null,reviewScheduledProblems:null,completedProblems:null,toReviewPage:1,scheduledPage:1,completedPage:1,toReviewMaxPage:null,scheduledMaxPage:null,completedMaxPage:null,tooltipTriggerList:null,tooltipList:null,easyIntv:[0,1,3,4],mediumIntv:[0,1,3,4],hardIntv:[0,1,2,3,4],problemSortBy:k.sortByReviewTimeAsc,isCloudSyncEnabled:!1},S="cn_mode",C="cn_records",D="records",B={operationName:"questionTitle",variables:{titleSlug:""}},O={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36",Connection:"keep-alive","Content-Type":"application/json",Referer:""};Object.freeze({MASTER:"mark as mastered",RESET:"reset progress",DELETE:"delete record"});const I=async()=>{let e=await t(S);return console.log(`current cnMode is ${e}`),void 0===e&&(await o(S,!1),e=!1),e},N=async()=>{const e=await I()?C:D;let o=await t(e);return void 0===o&&(o={}),o},P=async e=>{e.modificationTime=Date.now();const t=await N();t[e.index]=e,await(async e=>{const t=await I()?C:D;await o(t,e)})(t)},$=async()=>{if(!T.isCloudSyncEnabled)return;const e=await I()?C:D;await(async(e,t)=>{await(async(e,t,o,s)=>{if(!T.isCloudSyncEnabled)return;const n=await e.get(o)||{},i=await t.get(o)||{},a=s(n,i);console.log("merging data from local and from cloud. local:"),console.log(n),console.log("merging data from local and from cloud. cloud:"),console.log(i),await e.set(o,a),await t.set(o,a)})(s,r,e,t)})(e,p)};class A{constructor(e,t,o,s,n,i,a){this.index=e,this.name=t,this.level=o,this.url=s,this.submissionTime=n,this.proficiency=i,this.modificationTime=a,this.isDeleted=!1}}const M=()=>{let e;console.log("Monitoring submission result...");let t=10;const o=setInterval((async()=>{if(t<=0)return clearInterval(o),void console.log("Max retries reached");if(e=document.getElementsByClassName(m)[0]||document.getElementsByClassName("whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s")[0]||document.getElementsByClassName("mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s")[0]||document.getElementsByClassName(u)[0]||document.getElementsByClassName("error__2Ft1")[0]||document.getElementsByClassName("error__10k9")[0]||document.getElementsByClassName(g)[0]||document.getElementsByClassName("whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s")[0]||document.getElementsByClassName("mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s")[0],console.log("Current submission result:",e),void 0===e||0===e.length)return void t--;clearInterval(o);let s=(e=>e.className.includes(m)||e.className.includes(g)||e.className.includes(u))(e);if(console.log("Submission success:",s),!s)return;const{problemIndex:n,problemName:i,problemLevel:a,problemUrl:r}=await(async()=>await(async()=>{let e=window.location.href;const t=e.match(/(com|cn)(\/|$)/);console.log(`current site is ${t[1]}`);const o=t?t[1]:"com",s=["/submissions/","/description/","/discussion/","/solutions/"];for(const t of s)if(e.includes(t)){e=e.substring(0,e.lastIndexOf(t)+1);break}const n=e.split("/").splice(-2)[0],i=await(async(e,t)=>{const o=`https://leetcode.${t}`;B.variables.titleSlug=e,B.query=`query questionTitle($titleSlug: String!) {\n        question(titleSlug: $titleSlug) {\n          questionFrontendId\n          ${"cn"===t?"translatedTitle":"title"}\n          difficulty\n        }\n      }`,O.Referer=`${o}/problems/${e}`;const s={method:"POST",headers:O,body:JSON.stringify(B),timeout:1e4},n=await fetch(`${o}/graphql`,s);return(await n.json()).data.question})(n,o);return{problemIndex:i.questionFrontendId,problemName:`${i.questionFrontendId}. ${"cn"===o?i.translatedTitle:i.title}`,problemLevel:i.difficulty,problemUrl:e}})())();await $();let c=(await N())[n];c&&!0!==c.isDeleted?(e=>{if(e.proficiency>=l.length)return!1;const t=new Date,o=new Date(e.submissionTime);return t.setHours(0,0,0,0),o.setHours(0,0,0,0),(t-o)/864e5>=l[e.proficiency]/1440})(c)&&await P((e=>{const t=w(e.problemLevel);let o;for(const s of t)if(s>e.proficiency){o=s;break}return e.proficiency=void 0!==o?o:l.length,e.submissionTime=Date.now(),e.modificationTime=Date.now(),e})(c)):(c=new A(n,i,a,r,Date.now(),w(a)[0],Date.now()),await P(c)),await $(),console.log("Submission successfully tracked!")}),1e3)},R=e=>{console.log("Event captured:",e.type,e),(e=>{if(console.log("Checking submission event:",e.type),"click"===e.type){const t=(e=>{if(!e)return!1;if(e.getAttribute(c)===d)return!0;let t=e.parentElement,o=0;for(;t&&o<3;){if(t.getAttribute(c)===d)return!0;t=t.parentElement,o++}return!1})(e.target);return console.log("Is submit button:",t),t}if("keydown"===e.type){const t=/Mac|iPod|iPhone|iPad/.test(navigator.platform)?e.metaKey&&"Enter"===e.key:e.ctrlKey&&"Enter"===e.key;return console.log("Is keyboard shortcut:",t),t}return!1})(e)&&(console.log("Submission detected!"),M())};console.log("Initializing CodeCycle...");const L=async()=>{await(async()=>{await(async()=>{const e=await(async()=>await t("review_intervals"))();void 0!==e&&Object.assign(T,e)})(),await(async()=>{const e=await(async()=>await t("problem_sort_by"))()|(o=k.sortByReviewTimeAsc,E.indexOf(o));var o;T.problemSortBy=E[e]})(),await(async()=>{T.isCloudSyncEnabled=await(async()=>{const e=await t("configs"),o=void 0!==e&&e.enable_cloud;return void 0===o&&(o=!1),o})()})()})(),(()=>{const e=document.querySelector('[data-track-load="description_content"]')||document;console.log("Registering submission listeners..."),e.removeEventListener("click",R),e.removeEventListener("keydown",R),e.addEventListener("click",R),e.addEventListener("keydown",R),console.log("Submission listeners registered")})(),console.log("CodeCycle initialized!")};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",L):L()})();