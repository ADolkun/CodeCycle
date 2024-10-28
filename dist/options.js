(()=>{"use strict";var e={22:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(601),r=n.n(o),a=n(314),s=n.n(a)()(r());s.push([e.id,"table,\ntbody,\ntr,\nth,\ntd {\n    background-color: rgba(255, 255, 255, 0.2) !important;\n}\n\n.custom-switch:focus {\n    border-color: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 0 5px 2px bisque;\n}\n\n.custom-switch:checked {\n    border-color: rgba(255, 255, 255, 0.2);\n    background-color: chocolate;\n    box-shadow: 0 0 5px 2px bisque;\n}\n\niframe {\n    overflow: hidden;\n    border: 0;\n}\n\n.custom-btn {\n    border-color: chocolate;\n    color: chocolate;\n}\n\n.custom-btn:hover {\n    border-color: rgba(235, 173, 129, 1);\n    background-color: rgba(235, 173, 129, 1);\n}\n\n.custom-btn:disabled {\n    border-color: rgba(70, 70, 70, 0.5);\n    color: rgb(70, 70, 70, 0.5);\n}\n\n.multifont {\n    font-family: 'Courier Prime', 'Noto Sans SC', sans-serif;\n}\n\na {\n    color: chocolate;\n}\n\n.custom-tooltip {\n    --bs-tooltip-bg: var(--bd-violet-bg);\n    --bs-tooltip-color: var(--bs-white);\n}",""]);const c=s},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(s[l]=!0)}for(var i=0;i<e.length;i++){var d=[].concat(e[i]);o&&s[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},s=[],c=0;c<e.length;c++){var l=e[c],i=o.base?l[0]+o.base:l[0],d=a[i]||0,u="".concat(i," ").concat(d);a[i]=d+1;var m=n(u),y={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(y);else{var p=r(y,o);o.byIndex=c,t.splice(c,0,{identifier:u,updater:p,references:1})}s.push(u)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var c=n(a[s]);t[c].references--}for(var l=o(e,r),i=0;i<a.length;i++){var d=n(a[i]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}a=l}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var o=n(72),r=n.n(o),a=n(825),s=n.n(a),c=n(659),l=n.n(c),i=n(56),d=n.n(i),u=n(540),m=n.n(u),y=n(113),p=n.n(y),g=n(22),v={};v.styleTagTransform=p(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=m(),r()(g.A,v),g.A&&g.A.locals&&g.A.locals;class f{constructor(){this.get=async e=>null,this.set=async(e,t)=>{}}}const b=async e=>new Promise(((t,n)=>{chrome.storage.local.get(e,(o=>{void 0===o||void 0===o[e]?n(e):t(o[e])}))})).catch((e=>{console.log(`get local storage data failed for key = ${e}`)})),h=async(e,t)=>new Promise((n=>{chrome.storage.local.set({[e]:t}),n()})).catch((e=>console.log(e)));new class extends f{constructor(){super(),this.get=b,this.set=h}};const w=async e=>new Promise(((t,n)=>{chrome.storage.sync.get(e,(e=>{void 0===e?n(key):t(e)}))})).catch((e=>{console.log(console.log(e))})),B=async(e,t)=>{if(n=t,Object.getPrototypeOf(n)!==Object.prototype)throw"shardedSet only supports JSON type val";var n;const o={},r=Object.keys(t);Array.prototype.forEach.call(r,(n=>{const r=(e=>(C(e)%20+20)%20)(n),a=`${e}#${r}`;a in o||(o[a]={}),o[a][n]=t[n]})),console.log("set shareded data to cloud:"),console.log(o),await(async e=>new Promise((t=>{chrome.storage.sync.set(e),t()})).catch((e=>console.log(e))))(o)},E=async e=>{const t=[];for(let n=0;n<20;n++)t.push(`${e}#${n}`);const n=await w(t),o={};if(void 0===n)return o;for(const e in n)Object.assign(o,n[e]);return console.log(`get ${e} sharded from cloud`),console.log(o),o};new class extends f{constructor(){super(),this.get=E,this.set=B}};const I=[1440,2880,5760,10080,21600],x=e=>new Date(e.submissionTime+60*I[e.proficiency]*1e3),S=e=>{const t=x(e);return Math.round((Date.now()-t)/36e5)},C=e=>{let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t},A=e=>(t,n)=>-e(t,n),T=(e,t)=>x(e).valueOf()-x(t).valueOf(),D=(e,t)=>S(t).valueOf()-S(e).valueOf(),k={sortByReviewTimeDesc:A(T),sortByReviewTimeAsc:T,sortByDelayHoursDesc:D,sortByDelayHoursAsc:A(D)},O=[k.sortByReviewTimeAsc,k.sortByReviewTimeDesc,k.sortByDelayHoursAsc,k.sortByDelayHoursDesc],P=e=>O.indexOf(e),N=e=>{let t;switch(e){case k.sortByDelayHoursAsc:t="Sort By Review Delayed Hours (ASC)";break;case k.sortByDelayHoursDesc:t="Sort By Review Delayed Hours (DESC)";break;case k.sortByReviewTimeAsc:t="Sort By Next Scheduled Review Time (ASC)";break;case k.sortByReviewTimeDesc:t="Sort By Next Scheduled Review Time (DESC)";break;default:t=""}return t},R={needReviewProblems:null,reviewScheduledProblems:null,completedProblems:null,toReviewPage:1,scheduledPage:1,completedPage:1,toReviewMaxPage:null,scheduledMaxPage:null,completedMaxPage:null,tooltipTriggerList:null,tooltipList:null,easyIntv:[1,3],mediumIntv:[1,3,4],hardIntv:[0,1,2,3,4],problemSortBy:k.sortByReviewTimeAsc,isCloudSyncEnabled:!1},L="problem_sort_by",M="configs",H="enable_cloud",_=(document.getElementById("pageInput0"),document.getElementById("pageInputLabel0"),document.getElementById("prevButton0"),document.getElementById("nextButton0"),document.getElementById("pageInput1"),document.getElementById("pageInputLabel1"),document.getElementById("prevButton1"),document.getElementById("nextButton1"),document.getElementById("pageInput2"),document.getElementById("pageInputLabel2"),document.getElementById("prevButton2"),document.getElementById("nextButton2"),document.getElementById("need-review-table"),document.getElementById("no-review-table"),document.getElementById("completed-table"),document.getElementsByClassName("check-btn-mark"),document.getElementsByClassName("delete-btn-mark"),document.getElementsByClassName("reset-btn-mark"),document.getElementsByClassName("undo-ops-btn"),document.getElementsByClassName("config-btn"),document.getElementById("siteLabel"),document.getElementById("switchButton"),document.getElementById("feedbackMessage"));document.defaultView,document.addEventListener("DOMContentLoaded",(async()=>{await(async()=>{await(async()=>{const e=await(async()=>await b("review_intervals"))();void 0!==e&&Object.assign(R,e)})(),await(async()=>{const e=await(async()=>await b(L))()|P(k.sortByReviewTimeAsc);R.problemSortBy=O[e]})(),await(async()=>{R.isCloudSyncEnabled=await(async()=>{const e=await b(M),t=void 0!==e&&e[H];return void 0===t&&(t=!1),t})()})()})();const e=document.getElementById("optionsForm"),t=document.getElementById("problemSorterSelect");O.map((e=>({id:P(e),text:N(e)}))).forEach((e=>{const n=document.createElement("option");n.value=e.id,n.textContent=e.text,t.append(n)}));const n=document.getElementById("syncToggle");n.checked=R.isCloudSyncEnabled||!1,e.addEventListener("submit",(async e=>{e.preventDefault();const o=t.value,r=n.checked;await(async e=>{await h(L,e)})(Number(o)),await(async e=>{const t=await b(M)||{CONFIG_INNER_KEY_ENABLE_CLOUD:!1};t[H]=e,await h(M,t)})(r),_.style.display="block",setTimeout((()=>_.style.display="none"),1e3)}))}))})();