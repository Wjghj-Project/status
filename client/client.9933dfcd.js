function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let a;function c(t,e){return a||(a=document.createElement("a")),a.href=e,t===a.href}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t){return null==t?"":t}let h,d,p=!1;function m(t,e,n,r){for(;t<e;){const s=t+(e-t>>1);n(s)<=r?t=s+1:e=s}return t}function g(t,e){if(p){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const r=e[n];void 0!==r.claim_order&&t.push(r)}e=t}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let s=0;for(let t=0;t<e.length;t++){const o=e[t].claim_order,i=(s>0&&e[n[s]].claim_order<=o?s+1:m(1,s,(t=>e[n[t]].claim_order),o))-1;r[t]=n[i]+1;const a=i+1;n[a]=t,s=Math.max(a,s)}const o=[],i=[];let a=e.length-1;for(let t=n[s]+1;0!=t;t=r[t-1]){for(o.push(e[t-1]);a>=t;a--)i.push(e[a]);a--}for(;a>=0;a--)i.push(e[a]);o.reverse(),i.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<i.length;e++){for(;n<o.length&&i[e].claim_order>=o[n].claim_order;)n++;const r=n<o.length?o[n]:null;t.insertBefore(i[e],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function _(t,e,n){p&&!n?g(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function $(t){t.parentNode&&t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function y(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function E(t){return document.createTextNode(t)}function x(){return E(" ")}function S(){return E("")}function T(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function N(t){return function(e){return e.preventDefault(),t.call(this,e)}}function j(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:j(t,r,e[r])}function P(t){return Array.from(t.childNodes)}function L(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function R(t,e,n,r,s=!1){L(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s||(t.claim_info.last_index=r),o}}for(let r=t.claim_info.last_index-1;r>=0;r--){const o=t[r];if(e(o)){const e=n(o);return void 0===e?t.splice(r,1):t[r]=e,s?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=r,o}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function I(t,e,n,r){return R(t,(t=>t.nodeName===e),(t=>{const e=[];for(let r=0;r<t.attributes.length;r++){const s=t.attributes[r];n[s.name]||e.push(s.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>r(e)))}function k(t,e,n){return I(t,e,n,w)}function H(t,e,n){return I(t,e,n,y)}function O(t,e){return R(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>E(e)),!0)}function C(t){return O(t," ")}function U(t,e,n){for(let r=n;r<t.length;r+=1){const n=t[r];if(8===n.nodeType&&n.textContent.trim()===e)return r}return t.length}function M(t,e){const n=U(t,"HTML_TAG_START",0),r=U(t,"HTML_TAG_END",n);if(n===r)return new J(void 0,e);L(t);const s=t.splice(n,r-n+1);$(s[0]),$(s[s.length-1]);const o=s.slice(1,s.length-1);for(const e of o)e.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new J(o,e)}function D(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function G(t,e){t.value=null==e?"":e}function W(t,e,n,r){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function B(){if(void 0===h){h=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){h=!0}}return h}function z(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=w("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const r=B();let s;return r?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",s=T(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{s=T(n.contentWindow,"resize",e)}),function(t,e){t.appendChild(e)}(t,n),()=>{(r||s&&n.contentWindow)&&s(),$(n)}}function q(t,e){const n=[];let r=0;for(const s of e.childNodes)if(8===s.nodeType){const e=s.textContent.trim();e===`HEAD_${t}_END`?(r-=1,n.push(s)):e===`HEAD_${t}_START`&&(r+=1,n.push(s))}else r>0&&n.push(s);return n}class K{constructor(t=!1){this.is_svg=!1,this.is_svg=t,this.e=this.n=null}c(t){this.h(t)}m(t,e,n=null){this.e||(this.is_svg?this.e=y(e.nodeName):this.e=w(e.nodeName),this.t=e,this.c(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)b(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach($)}}class J extends K{constructor(t,e=!1){super(e),this.e=this.n=null,this.l=t}c(t){this.l?this.n=this.l:super.c(t)}i(t){for(let e=0;e<this.n.length;e+=1)_(this.t,this.n[e],t)}}function F(t,e){return new t(e)}function V(t){d=t}function Y(){if(!d)throw new Error("Function called outside component initialization");return d}function X(t){Y().$$.on_mount.push(t)}function Q(t){Y().$$.after_update.push(t)}function Z(t){Y().$$.on_destroy.push(t)}const tt=[],et=[],nt=[],rt=[],st=Promise.resolve();let ot=!1;function it(t){nt.push(t)}const at=new Set;let ct=0;function lt(){const t=d;do{for(;ct<tt.length;){const t=tt[ct];ct++,V(t),ut(t.$$)}for(V(null),tt.length=0,ct=0;et.length;)et.pop()();for(let t=0;t<nt.length;t+=1){const e=nt[t];at.has(e)||(at.add(e),e())}nt.length=0}while(tt.length);for(;rt.length;)rt.pop()();ot=!1,at.clear(),V(t)}function ut(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(it)}}const ft=new Set;let ht;function dt(){ht={r:0,c:[],p:ht}}function pt(){ht.r||s(ht.c),ht=ht.p}function mt(t,e){t&&t.i&&(ft.delete(t),t.i(e))}function gt(t,e,n,r){if(t&&t.o){if(ft.has(t))return;ft.add(t),ht.c.push((()=>{ft.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}else r&&r()}function bt(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const i=t[o],a=e[o];if(a){for(const t in i)t in a||(r[t]=1);for(const t in a)s[t]||(n[t]=a[t],s[t]=1);t[o]=a}else for(const t in i)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function _t(t){return"object"==typeof t&&null!==t?t:{}}function $t(t){t&&t.c()}function vt(t,e){t&&t.l(e)}function wt(t,e,r,i){const{fragment:a,after_update:c}=t.$$;a&&a.m(e,r),i||it((()=>{const e=t.$$.on_mount.map(n).filter(o);t.$$.on_destroy?t.$$.on_destroy.push(...e):s(e),t.$$.on_mount=[]})),c.forEach(it)}function yt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Et(t,e){-1===t.$$.dirty[0]&&(tt.push(t),ot||(ot=!0,st.then(lt)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xt(e,n,o,i,a,c,l,u=[-1]){const f=d;V(e);const h=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};l&&l(h.root);let m=!1;if(h.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&a(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),m&&Et(e,t)),n})):[],h.update(),m=!0,s(h.before_update),h.fragment=!!i&&i(h.ctx),n.target){if(n.hydrate){p=!0;const t=P(n.target);h.fragment&&h.fragment.l(t),t.forEach($)}else h.fragment&&h.fragment.c();n.intro&&mt(e.$$.fragment),wt(e,n.target,n.anchor,n.customElement),p=!1,lt()}V(f)}class St{$destroy(){yt(this,1),this.$destroy=t}$on(e,n){if(!o(n))return t;const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const t=r.indexOf(n);-1!==t&&r.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Tt=[];function Nt(e,n=t){let r;const s=new Set;function o(t){if(i(e,t)&&(e=t,r)){const t=!Tt.length;for(const t of s)t[1](),Tt.push(t,e);if(t){for(let t=0;t<Tt.length;t+=2)Tt[t][0](Tt[t+1]);Tt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(i,a=t){const c=[i,a];return s.add(c),1===s.size&&(r=n(o)||t),i(e),()=>{s.delete(c),0===s.size&&(r(),r=null)}}}}const jt={};var At={owner:"Wjghj-Project",repo:"status",sites:[{name:"小鱼君和他的朋友们 (Wjghj Wiki)",url:"https://www.wjghj.cn"},{name:"小鱼君的博客 (Dragon Fish's Blog)",url:"https://blog.wjghj.cn"},{name:"万界规划局共享资源库 (Wjghj Project Static Database)",url:"https://common.wjghj.cn"},{name:"万界大百科 (Wjghj Notion)",url:"https://www.notion.so/epbureau/9a6d9bd0704244a1818624f032d013f9"},{name:"Chatbot SILI",url:"https://sili.wjghj.cn"},{name:"游戏人生 Wiki 项目组 (NGNL Wiki Project Team)",url:"https://ngnlwiki.cn"},{name:"万界规划局 wiki (EPBureau Fandom)",url:"https://epbureau.fandom.com"}],"status-website":{cname:"status.wjghj.cn",logoUrl:"https://www.wjghj.cn/public/icons/wiki-wordmark.svg",name:"Wjghj Monitor",introTitle:"**万界规划局项目组 Wjghj Project**",introMessage:"万界规划局是 **机智的小鱼君** (AKA: __Dragon Fish__) 建立的，以小说《将来过去时》以及 web 前后端为核心的（目前）只有一名成员的项目组。\n\n项目组的重点项目有 **小说《将来过去时》** 及其衍生作品、**网站“小鱼君和他的朋友们”** 以及 **GitHub/Wjghj-Project** 的开源工具。",navbar:[{title:"首页",href:"/"},{title:"数据",href:"https://github.com/$OWNER/$REPO"},{title:"项目组",href:"https://proj.wjghj.cn/"},{title:"GitHub",href:"https://github.com/$OWNER"}]},i18n:{activeIncidents:"正在发生的事件",allSystemsOperational:"🟩 好耶，系统全功率运转中~",incidentReport:"事故报告 #$NUMBER →",activeIncidentSummary:"自 $DATE 起 $POSTS 条相关动态",incidentTitle:"事件详情 $NUMBER",incidentDetails:"事件详情",incidentFixed:"已修复",incidentOngoing:"宕机中",incidentOpenedAt:"开始于",incidentClosedAt:"结束于",incidentViewOnGitHub:"在 GitHub 查看",incidentCommentSummary:"$AUTHOR 于 $DATE 发布",incidentBack:"← 返回事件列表",pastIncidents:"已处理的事件",pastIncidentsResolved:"已于 $MINUTES 分钟内解决，共 $POSTS 条动态",liveStatus:"实时状态",overallUptime:"总体运行状态: $UPTIME",overallUptimeTitle:"总体运行状态",averageResponseTime:"平均响应时间: $TIMEms",averageResponseTimeTitle:"平均响应",sevelDayResponseTime:"7天响应时间",responseTimeMs:"响应时间 (毫秒)",up:"正常",down:"宕机",degraded:"较差",ms:"ms",loading:"加载中",navGitHub:"GitHub",footer:"Powered by [Upptime](https://upptime.js.org)",rateLimitExceededTitle:"频率受限",rateLimitExceededIntro:"您已达到请求数上限，因此您可能需要尝试在一个小时后再次访问。或者，您可以添加 GitHub 个人访问令牌以继续使用此网站。",rateLimitExceededWhatDoesErrorMean:"这个报错意味着什么？",rateLimitExceededErrorMeaning:"我们使用 GitHub API 获取实时数据。默认情况下，GitHub 允许每个 IP 地址每小时 60 个请求，您已经达到了使用上限。",rateLimitExceededErrorHowCanFix:"我如何处理它？",rateLimitExceededErrorFix:"您可以稍等一小时，您的 IP 地址限制将恢复。或者，您可以添加您的 GitHub 个人访问令牌，这将使您获得每小时 5000 个请求的上限。",rateLimitExceededGeneratePAT:"了解如何生成个人访问令牌",rateLimitExceededHasSet:"您已配置个人访问令牌。",rateLimitExceededRemoveToken:"移除令牌",rateLimitExceededGitHubPAT:"GitHub 个人访问令牌",rateLimitExceededCopyPastePAT:"复制并粘贴您的令牌",rateLimitExceededSaveToken:"保存令牌",errorTitle:"哎呀，出大问题",errorIntro:"暂时无法获取最新的状态数据……",errorText:"如果您位于中国大陆，则可能是无法访问 GitHub 数据导致的。您也可以稍后再试。",errorHome:"回到首页",pastScheduledMaintenance:"已完成的定期维护",scheduledMaintenance:"定期维护",scheduledMaintenanceSummaryStarted:"已于 $DURATION 分钟前($DATE)开始",scheduledMaintenanceSummaryStarts:"开始于 $DURATION 分钟前($DATE)",startedAt:"已开始于",startsAt:"开始于",duration:"历时",durationMin:"$DURATION 分钟",incidentCompleted:"完成",incidentScheduled:"排队",url:"URL",status:"状态",history:"历史",responseTimeGraphAlt:"响应时间趋势",responseTime:"响应时间",responseTimeDay:"24小时响应时间",responseTimeWeek:"7天响应时间",responseTimeMonth:"30天响应时间",responseTimeYear:"1年响应时间",uptime:"可用率",uptimeDay:"4小时可用率",uptimeWeek:"7日可用率",uptimeMonth:"30日可用率",uptimeYear:"1年可用率",liveStatusHtmlComment:"",degradedPerformance:"🟨 啊咧，系统可用率偏低……",completeOutage:"🟥 出大问题，全线系统均已宕机！",partialOutage:"🟧 糟糕，部分系统宕机中……",incidentSubscribe:"订阅处理进展"},path:"https://status.wjghj.cn"};function Pt(t,e,n){const r=t.slice();return r[1]=e[n],r}function Lt(e){let n,r,s,o=At["status-website"]&&!At["status-website"].hideNavLogo&&function(e){let n,r;return{c(){n=w("img"),this.h()},l(t){n=k(t,"IMG",{alt:!0,src:!0,class:!0}),this.h()},h(){j(n,"alt",""),c(n.src,r=At["status-website"].logoUrl)||j(n,"src",r),j(n,"class","svelte-a08hsz")},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}(),i=At["status-website"]&&!At["status-website"].hideNavTitle&&function(e){let n,r,s=At["status-website"].name+"";return{c(){n=w("div"),r=E(s)},l(t){n=k(t,"DIV",{});var e=P(n);r=O(e,s),e.forEach($)},m(t,e){_(t,n,e),g(n,r)},p:t,d(t){t&&$(n)}}}();return{c(){n=w("div"),r=w("a"),o&&o.c(),s=x(),i&&i.c(),this.h()},l(t){n=k(t,"DIV",{});var e=P(n);r=k(e,"A",{href:!0,class:!0});var a=P(r);o&&o.l(a),s=C(a),i&&i.l(a),a.forEach($),e.forEach($),this.h()},h(){j(r,"href",At["status-website"].logoHref||At.path),j(r,"class","logo svelte-a08hsz")},m(t,e){_(t,n,e),g(n,r),o&&o.m(r,null),g(r,s),i&&i.m(r,null)},p(t,e){At["status-website"]&&!At["status-website"].hideNavLogo&&o.p(t,e),At["status-website"]&&!At["status-website"].hideNavTitle&&i.p(t,e)},d(t){t&&$(n),o&&o.d(),i&&i.d()}}}function Rt(t){let e,n,r,s,o,i=t[1].title+"";return{c(){e=w("li"),n=w("a"),r=E(i),o=x(),this.h()},l(t){e=k(t,"LI",{});var s=P(e);n=k(s,"A",{"aria-current":!0,href:!0,target:!0,class:!0});var a=P(n);r=O(a,i),a.forEach($),o=C(s),s.forEach($),this.h()},h(){j(n,"aria-current",s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0),j(n,"href",t[1].href.replace("$OWNER",At.owner).replace("$REPO",At.repo)),j(n,"target",t[1].target||"_self"),j(n,"class","svelte-a08hsz")},m(t,s){_(t,e,s),g(e,n),g(n,r),g(e,o)},p(t,e){1&e&&s!==(s=t[0]===("/"===t[1].href?void 0:t[1].href)?"page":void 0)&&j(n,"aria-current",s)},d(t){t&&$(e)}}}function It(e){let n,r,s,o,i,a=At["status-website"]&&At["status-website"].logoUrl&&Lt(),c=At["status-website"]&&At["status-website"].navbar&&function(t){let e,n=At["status-website"].navbar,r=[];for(let e=0;e<n.length;e+=1)r[e]=Rt(Pt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);_(t,e,n)},p(t,s){if(1&s){let o;for(n=At["status-website"].navbar,o=0;o<n.length;o+=1){const i=Pt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Rt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){v(r,t),t&&$(e)}}}(e),l=At["status-website"]&&At["status-website"].navbarGitHub&&!At["status-website"].navbar&&function(e){let n,r,s,o=At.i18n.navGitHub+"";return{c(){n=w("li"),r=w("a"),s=E(o),this.h()},l(t){n=k(t,"LI",{});var e=P(n);r=k(e,"A",{href:!0,class:!0});var i=P(r);s=O(i,o),i.forEach($),e.forEach($),this.h()},h(){j(r,"href",`https://github.com/${At.owner}/${At.repo}`),j(r,"class","svelte-a08hsz")},m(t,e){_(t,n,e),g(n,r),g(r,s)},p:t,d(t){t&&$(n)}}}();return{c(){n=w("nav"),r=w("div"),a&&a.c(),s=x(),o=w("ul"),c&&c.c(),i=x(),l&&l.c(),this.h()},l(t){n=k(t,"NAV",{class:!0});var e=P(n);r=k(e,"DIV",{class:!0});var u=P(r);a&&a.l(u),s=C(u),o=k(u,"UL",{class:!0});var f=P(o);c&&c.l(f),i=C(f),l&&l.l(f),f.forEach($),u.forEach($),e.forEach($),this.h()},h(){j(o,"class","svelte-a08hsz"),j(r,"class","container svelte-a08hsz"),j(n,"class","svelte-a08hsz")},m(t,e){_(t,n,e),g(n,r),a&&a.m(r,null),g(r,s),g(r,o),c&&c.m(o,null),g(o,i),l&&l.m(o,null)},p(t,[e]){At["status-website"]&&At["status-website"].logoUrl&&a.p(t,e),At["status-website"]&&At["status-website"].navbar&&c.p(t,e),At["status-website"]&&At["status-website"].navbarGitHub&&!At["status-website"].navbar&&l.p(t,e)},i:t,o:t,d(t){t&&$(n),a&&a.d(),c&&c.d(),l&&l.d()}}}function kt(t,e,n){let{segment:r}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment)},[r]}class Ht extends St{constructor(t){super(),xt(this,t,kt,It,i,{segment:0})}}var Ot={"":["<em>","</em>"],_:["<strong>","</strong>"],"*":["<strong>","</strong>"],"~":["<s>","</s>"],"\n":["<br />"]," ":["<br />"],"-":["<hr />"]};function Ct(t){return t.replace(RegExp("^"+(t.match(/^(\t| )+/)||"")[0],"gm"),"")}function Ut(t){return(t+"").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Mt(t,e){var n,r,s,o,i,a=/((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm,c=[],l="",u=e||{},f=0;function h(t){var e=Ot[t[1]||""],n=c[c.length-1]==t;return e?e[1]?(n?c.pop():c.push(t),e[0|n]):e[0]:t}function d(){for(var t="";c.length;)t+=h(c[c.length-1]);return t}for(t=t.replace(/^\[(.+?)\]:\s*(.+)$/gm,(function(t,e,n){return u[e.toLowerCase()]=n,""})).replace(/^\n+|\n+$/g,"");s=a.exec(t);)r=t.substring(f,s.index),f=a.lastIndex,n=s[0],r.match(/[^\\](\\\\)*\\$/)||((i=s[3]||s[4])?n='<pre class="code '+(s[4]?"poetry":s[2].toLowerCase())+'"><code'+(s[2]?' class="language-'+s[2].toLowerCase()+'"':"")+">"+Ct(Ut(i).replace(/^\n+|\n+$/g,""))+"</code></pre>":(i=s[6])?(i.match(/\./)&&(s[5]=s[5].replace(/^\d+/gm,"")),o=Mt(Ct(s[5].replace(/^\s*[>*+.-]/gm,""))),">"==i?i="blockquote":(i=i.match(/\./)?"ol":"ul",o=o.replace(/^(.*)(\n|$)/gm,"<li>$1</li>")),n="<"+i+">"+o+"</"+i+">"):s[8]?n='<img src="'+Ut(s[8])+'" alt="'+Ut(s[7])+'">':s[10]?(l=l.replace("<a>",'<a href="'+Ut(s[11]||u[r.toLowerCase()])+'">'),n=d()+"</a>"):s[9]?n="<a>":s[12]||s[14]?n="<"+(i="h"+(s[14]?s[14].length:s[13]>"="?1:2))+">"+Mt(s[12]||s[15],u)+"</"+i+">":s[16]?n="<code>"+Ut(s[16])+"</code>":(s[17]||s[1])&&(n=h(s[17]||"--"))),l+=r,l+=n;return(l+t.substring(f)+d()).replace(/^\n+|\n+$/g,"")}function Dt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Gt(t,e,n){const r=t.slice();return r[3]=e[n],r}function Wt(t,e,n){const r=t.slice();return r[8]=e[n],r}function Bt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){j(n,"rel","stylesheet"),j(n,"href",`${At.path}/themes/${(At["status-website"]||{}).theme||"light"}.css`)},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function zt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0}),this.h()},h(){j(n,"rel","stylesheet"),j(n,"href",(At["status-website"]||{}).themeUrl)},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function qt(e){let n,r;return{c(){n=w("script"),this.h()},l(t){n=k(t,"SCRIPT",{src:!0}),P(n).forEach($),this.h()},h(){c(n.src,r=e[8].src)||j(n,"src",r),n.async=!!e[8].async,n.defer=!!e[8].async},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function Kt(e){let n;return{c(){n=w("link"),this.h()},l(t){n=k(t,"LINK",{rel:!0,href:!0,media:!0}),this.h()},h(){j(n,"rel",e[3].rel),j(n,"href",e[3].href),j(n,"media",e[3].media)},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function Jt(e){let n;return{c(){n=w("meta"),this.h()},l(t){n=k(t,"META",{name:!0,content:!0}),this.h()},h(){j(n,"name",e[3].name),j(n,"content",e[3].content)},m(t,e){_(t,n,e)},p:t,d(t){t&&$(n)}}}function Ft(e){let n,r,s,o,i,a,c,u,f,h,d,p,m,b,y,E,T,N,A=Mt(At.i18n.footer.replace(/\$REPO/,`https://github.com/${At.owner}/${At.repo}`))+"",L=(At["status-website"]||{}).customHeadHtml&&function(e){let n,r,s=(At["status-website"]||{}).customHeadHtml+"";return{c(){n=new J(!1),r=S(),this.h()},l(t){n=M(t,!1),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),_(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}();let R=((At["status-website"]||{}).themeUrl?zt:Bt)(e),I=(At["status-website"]||{}).scripts&&function(t){let e,n=(At["status-website"]||{}).scripts,r=[];for(let e=0;e<n.length;e+=1)r[e]=qt(Wt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);_(t,e,n)},p(t,s){if(0&s){let o;for(n=(At["status-website"]||{}).scripts,o=0;o<n.length;o+=1){const i=Wt(t,n,o);r[o]?r[o].p(i,s):(r[o]=qt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){v(r,t),t&&$(e)}}}(e),H=(At["status-website"]||{}).links&&function(t){let e,n=(At["status-website"]||{}).links,r=[];for(let e=0;e<n.length;e+=1)r[e]=Kt(Gt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);_(t,e,n)},p(t,s){if(0&s){let o;for(n=(At["status-website"]||{}).links,o=0;o<n.length;o+=1){const i=Gt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Kt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){v(r,t),t&&$(e)}}}(e),O=(At["status-website"]||{}).metaTags&&function(t){let e,n=(At["status-website"]||{}).metaTags,r=[];for(let e=0;e<n.length;e+=1)r[e]=Jt(Dt(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=S()},l(t){for(let e=0;e<r.length;e+=1)r[e].l(t);e=S()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);_(t,e,n)},p(t,s){if(0&s){let o;for(n=(At["status-website"]||{}).metaTags,o=0;o<n.length;o+=1){const i=Dt(t,n,o);r[o]?r[o].p(i,s):(r[o]=Jt(i),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){v(r,t),t&&$(e)}}}(e),U=At["status-website"].css&&function(e){let n,r,s=`<style>${At["status-website"].css}</style>`;return{c(){n=new J(!1),r=S(),this.h()},l(t){n=M(t,!1),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),_(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}(),D=At["status-website"].js&&function(e){let n,r,s=`<script>${At["status-website"].js}<\/script>`;return{c(){n=new J(!1),r=S(),this.h()},l(t){n=M(t,!1),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),_(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}(),G=(At["status-website"]||{}).customBodyHtml&&function(e){let n,r,s=(At["status-website"]||{}).customBodyHtml+"";return{c(){n=new J(!1),r=S(),this.h()},l(t){n=M(t,!1),r=S(),this.h()},h(){n.a=r},m(t,e){n.m(s,t,e),_(t,r,e)},p:t,d(t){t&&$(r),t&&n.d()}}}();p=new Ht({props:{segment:e[0]}});const W=e[2].default,B=function(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}(W,e,e[1],null);return{c(){L&&L.c(),n=S(),R.c(),r=w("link"),s=w("link"),o=w("link"),I&&I.c(),i=S(),H&&H.c(),a=S(),O&&O.c(),c=S(),U&&U.c(),u=S(),D&&D.c(),f=S(),h=x(),G&&G.c(),d=x(),$t(p.$$.fragment),m=x(),b=w("main"),B&&B.c(),y=x(),E=w("footer"),T=w("p"),this.h()},l(t){const e=q("svelte-fmspuk",document.head);L&&L.l(e),n=S(),R.l(e),r=k(e,"LINK",{rel:!0,href:!0}),s=k(e,"LINK",{rel:!0,type:!0,href:!0}),o=k(e,"LINK",{rel:!0,type:!0,href:!0}),I&&I.l(e),i=S(),H&&H.l(e),a=S(),O&&O.l(e),c=S(),U&&U.l(e),u=S(),D&&D.l(e),f=S(),e.forEach($),h=C(t),G&&G.l(t),d=C(t),vt(p.$$.fragment,t),m=C(t),b=k(t,"MAIN",{class:!0});var l=P(b);B&&B.l(l),l.forEach($),y=C(t),E=k(t,"FOOTER",{class:!0});var g=P(E);T=k(g,"P",{}),P(T).forEach($),g.forEach($),this.h()},h(){j(r,"rel","stylesheet"),j(r,"href",`${At.path}/global.css`),j(s,"rel","icon"),j(s,"type","image/svg"),j(s,"href",(At["status-website"]||{}).faviconSvg||(At["status-website"]||{}).favicon||"https://raw.githubusercontent.com/upptime/upptime/master/assets/upptime-icon.svg"),j(o,"rel","icon"),j(o,"type","image/png"),j(o,"href",(At["status-website"]||{}).favicon||"/logo-192.png"),j(b,"class","container"),j(E,"class","svelte-jbr799")},m(t,e){L&&L.m(document.head,null),g(document.head,n),R.m(document.head,null),g(document.head,r),g(document.head,s),g(document.head,o),I&&I.m(document.head,null),g(document.head,i),H&&H.m(document.head,null),g(document.head,a),O&&O.m(document.head,null),g(document.head,c),U&&U.m(document.head,null),g(document.head,u),D&&D.m(document.head,null),g(document.head,f),_(t,h,e),G&&G.m(t,e),_(t,d,e),wt(p,t,e),_(t,m,e),_(t,b,e),B&&B.m(b,null),_(t,y,e),_(t,E,e),g(E,T),T.innerHTML=A,N=!0},p(t,[e]){(At["status-website"]||{}).customHeadHtml&&L.p(t,e),R.p(t,e),(At["status-website"]||{}).scripts&&I.p(t,e),(At["status-website"]||{}).links&&H.p(t,e),(At["status-website"]||{}).metaTags&&O.p(t,e),At["status-website"].css&&U.p(t,e),At["status-website"].js&&D.p(t,e),(At["status-website"]||{}).customBodyHtml&&G.p(t,e);const n={};1&e&&(n.segment=t[0]),p.$set(n),B&&B.p&&(!N||2&e)&&function(t,e,n,r,s,o){if(s){const i=l(e,n,r,o);t.p(i,s)}}(B,W,t,t[1],N?function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(W,t[1],e,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[1]),null)},i(t){N||(mt(p.$$.fragment,t),mt(B,t),N=!0)},o(t){gt(p.$$.fragment,t),gt(B,t),N=!1},d(t){L&&L.d(t),$(n),R.d(t),$(r),$(s),$(o),I&&I.d(t),$(i),H&&H.d(t),$(a),O&&O.d(t),$(c),U&&U.d(t),$(u),D&&D.d(t),$(f),t&&$(h),G&&G.d(t),t&&$(d),yt(p,t),t&&$(m),t&&$(b),B&&B.d(t),t&&$(y),t&&$(E)}}}function Vt(t,e,n){let{$$slots:r={},$$scope:s}=e,{segment:o}=e;return t.$$set=t=>{"segment"in t&&n(0,o=t.segment),"$$scope"in t&&n(1,s=t.$$scope)},[o,s,r]}class Yt extends St{constructor(t){super(),xt(this,t,Vt,Ft,i,{segment:0})}}function Xt(t){let e,n,r=t[1].stack+"";return{c(){e=w("pre"),n=E(r)},l(t){e=k(t,"PRE",{});var s=P(e);n=O(s,r),s.forEach($)},m(t,r){_(t,e,r),g(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&D(n,r)},d(t){t&&$(e)}}}function Qt(e){let n,r,s,o,i,a,c,l,u,f=e[1].message+"";document.title=n=e[0];let h=e[2]&&e[1].stack&&Xt(e);return{c(){r=x(),s=w("h1"),o=E(e[0]),i=x(),a=w("p"),c=E(f),l=x(),h&&h.c(),u=S(),this.h()},l(t){q("svelte-1moakz",document.head).forEach($),r=C(t),s=k(t,"H1",{class:!0});var n=P(s);o=O(n,e[0]),n.forEach($),i=C(t),a=k(t,"P",{class:!0});var d=P(a);c=O(d,f),d.forEach($),l=C(t),h&&h.l(t),u=S(),this.h()},h(){j(s,"class","svelte-17w3omn"),j(a,"class","svelte-17w3omn")},m(t,e){_(t,r,e),_(t,s,e),g(s,o),_(t,i,e),_(t,a,e),g(a,c),_(t,l,e),h&&h.m(t,e),_(t,u,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&D(o,t[0]),2&e&&f!==(f=t[1].message+"")&&D(c,f),t[2]&&t[1].stack?h?h.p(t,e):(h=Xt(t),h.c(),h.m(u.parentNode,u)):h&&(h.d(1),h=null)},i:t,o:t,d(t){t&&$(r),t&&$(s),t&&$(i),t&&$(a),t&&$(l),h&&h.d(t),t&&$(u)}}}function Zt(t,e,n){let{status:r}=e,{error:s}=e;return t.$$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,false]}class te extends St{constructor(t){super(),xt(this,t,Zt,Qt,i,{status:0,error:1})}}function ee(t){let n,r,s;const o=[t[4].props];var i=t[4].component;function a(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return i&&(n=F(i,a())),{c(){n&&$t(n.$$.fragment),r=S()},l(t){n&&vt(n.$$.fragment,t),r=S()},m(t,e){n&&wt(n,t,e),_(t,r,e),s=!0},p(t,e){const s=16&e?bt(o,[_t(t[4].props)]):{};if(i!==(i=t[4].component)){if(n){dt();const t=n;gt(t.$$.fragment,1,0,(()=>{yt(t,1)})),pt()}i?(n=F(i,a()),$t(n.$$.fragment),mt(n.$$.fragment,1),wt(n,r.parentNode,r)):n=null}else i&&n.$set(s)},i(t){s||(n&&mt(n.$$.fragment,t),s=!0)},o(t){n&&gt(n.$$.fragment,t),s=!1},d(t){t&&$(r),n&&yt(n,t)}}}function ne(t){let e,n;return e=new te({props:{error:t[0],status:t[1]}}),{c(){$t(e.$$.fragment)},l(t){vt(e.$$.fragment,t)},m(t,r){wt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(mt(e.$$.fragment,t),n=!0)},o(t){gt(e.$$.fragment,t),n=!1},d(t){yt(e,t)}}}function re(t){let e,n,r,s;const o=[ne,ee],i=[];function a(t,e){return t[0]?0:1}return e=a(t),n=i[e]=o[e](t),{c(){n.c(),r=S()},l(t){n.l(t),r=S()},m(t,n){i[e].m(t,n),_(t,r,n),s=!0},p(t,s){let c=e;e=a(t),e===c?i[e].p(t,s):(dt(),gt(i[c],1,1,(()=>{i[c]=null})),pt(),n=i[e],n?n.p(t,s):(n=i[e]=o[e](t),n.c()),mt(n,1),n.m(r.parentNode,r))},i(t){s||(mt(n),s=!0)},o(t){gt(n),s=!1},d(t){i[e].d(t),t&&$(r)}}}function se(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[re]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new Yt({props:o}),{c(){$t(n.$$.fragment)},l(t){vt(n.$$.fragment,t)},m(t,e){wt(n,t,e),r=!0},p(t,[e]){const r=12&e?bt(s,[4&e&&{segment:t[2][0]},8&e&&_t(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(mt(n.$$.fragment,t),r=!0)},o(t){gt(n.$$.fragment,t),r=!1},d(t){yt(n,t)}}}function oe(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:i}=e,{level0:a}=e,{level1:c=null}=e,{notify:l}=e;var u,f;return Q(l),u=jt,f=r,Y().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,i=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,c=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,i,a,c,r,l]}class ie extends St{constructor(t){super(),xt(this,t,oe,se,i,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const ae=[],ce=[{js:()=>Promise.all([import("./index.237dcf54.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","index-e08df70b.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./rate-limit-exceeded.b1228f24.js"),__inject_styles(["client-0275e36e.css","rate-limit-exceeded-ec20dc01.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.1ab31d0b.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-a58f5d99.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./_number_.0b0c44df.js"),__inject_styles(["client-0275e36e.css","createOctokit-865318f3.css","_number_-9a5d58bf.css"])]).then((function(t){return t[0]}))},{js:()=>Promise.all([import("./error.4df1c65d.js"),__inject_styles(["client-0275e36e.css","error-64ad0d96.css"])]).then((function(t){return t[0]}))}],le=(ue=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/rate-limit-exceeded\/?$/,parts:[{i:1}]},{pattern:/^\/incident\/([^/]+?)\/?$/,parts:[null,{i:2,params:t=>({number:ue(t[1])})}]},{pattern:/^\/history\/([^/]+?)\/?$/,parts:[null,{i:3,params:t=>({number:ue(t[1])})}]},{pattern:/^\/error\/?$/,parts:[{i:4}]}]);var ue;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function fe(t,e,n,r){return new(n||(n=Promise))((function(s,o){function i(t){try{c(r.next(t))}catch(t){o(t)}}function a(t){try{c(r.throw(t))}catch(t){o(t)}}function c(t){var e;t.done?s(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))}function he(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}let de,pe=1;const me="undefined"!=typeof history?history:{pushState:()=>{},replaceState:()=>{},scrollRestoration:"auto"},ge={};let be,_e;function $e(t){const e=Object.create(null);return t.length?(t=>"undefined"!=typeof URLSearchParams?[...new URLSearchParams(t).entries()]:t.slice(1).split("&").map((t=>{const[,e,n=""]=/([^=]*)(?:=([\S\s]*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));return[e,n]})))(t).reduce(((t,[e,n])=>("string"==typeof t[e]&&(t[e]=[t[e]]),"object"==typeof t[e]?t[e].push(n):t[e]=n,t)),e):e}function ve(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(be))return null;let e=t.pathname.slice(be.length);if(""===e&&(e="/"),!ae.some((t=>t.test(e))))for(let n=0;n<le.length;n+=1){const r=le[n],s=r.pattern.exec(e);if(s){const n=$e(t.search),o=r.parts[r.parts.length-1],i=o.params?o.params(s):{},a={host:location.host,path:e,query:n,params:i};return{href:t.href,route:r,match:s,page:a}}}}function we(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)return;if(t.defaultPrevented)return;const e=he(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=ve(s);if(o){xe(o,null,e.hasAttribute("sapper:noscroll"),s.hash),t.preventDefault(),me.pushState({id:de},"",s.href)}}function ye(){return{x:pageXOffset,y:pageYOffset}}function Ee(t){if(ge[de]=ye(),t.state){const e=ve(new URL(location.href));e?xe(e,t.state.id):location.href=location.href}else!function(t){pe=t}(pe+1),function(t){de=t}(pe),me.replaceState({id:de},"",location.href)}function xe(t,e,n,r){return fe(this,void 0,void 0,(function*(){const s=!!e;if(s)de=e;else{const t=ye();ge[de]=t,de=e=++pe,ge[de]=n?t:{x:0,y:0}}if(yield _e(t),document.activeElement&&document.activeElement instanceof HTMLElement&&document.activeElement.blur(),!n){let t,n=ge[e];r&&(t=document.getElementById(r.slice(1)),t&&(n={x:0,y:t.getBoundingClientRect().top+scrollY})),ge[de]=n,n&&(s||t)?scrollTo(n.x,n.y):scrollTo(0,0)}}))}function Se(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}let Te,Ne=null;function je(t){const e=he(t.target);e&&e.hasAttribute("sapper:prefetch")&&function(t){const e=ve(new URL(t,Se(document)));if(e)Ne&&t===Ne.href||(Ne={href:t,promise:qe(e)}),Ne.promise}(e.href)}function Ae(t){clearTimeout(Te),Te=setTimeout((()=>{je(t)}),20)}function Pe(t,e={noscroll:!1,replaceState:!1}){const n=ve(new URL(t,Se(document)));if(n){const r=xe(n,null,e.noscroll);return me[e.replaceState?"replaceState":"pushState"]({id:de},"",t),r}return location.href=t,new Promise((()=>{}))}const Le="undefined"!=typeof __SAPPER__&&__SAPPER__;let Re,Ie,ke,He=!1,Oe=[],Ce="{}";const Ue={page:function(t){const e=Nt(t);let n=!0;return{notify:function(){n=!0,e.update((t=>t))},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe((e=>{(void 0===r||n&&e!==r)&&t(r=e)}))}}}({}),preloading:Nt(null),session:Nt(Le&&Le.session)};let Me,De,Ge;function We(t,e){const{error:n}=t;return Object.assign({error:n},e)}function Be(t){return fe(this,void 0,void 0,(function*(){Re&&Ue.preloading.set(!0);const e=function(t){return Ne&&Ne.href===t.href?Ne.promise:qe(t)}(t),n=Ie={},r=yield e,{redirect:s}=r;if(n===Ie)if(s)yield Pe(s.location,{replaceState:!0});else{const{props:e,branch:n}=r;yield ze(n,e,We(e,t.page))}}))}function ze(t,e,n){return fe(this,void 0,void 0,(function*(){Ue.page.set(n),Ue.preloading.set(!1),Re?Re.$set(e):(e.stores={page:{subscribe:Ue.page.subscribe},preloading:{subscribe:Ue.preloading.subscribe},session:Ue.session},e.level0={props:yield ke},e.notify=Ue.page.notify,Re=new ie({target:Ge,props:e,hydrate:!0})),Oe=t,Ce=JSON.stringify(n.query),He=!0,De=!1}))}function qe(t){return fe(this,void 0,void 0,(function*(){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},i={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};if(!ke){const t=()=>({});ke=Le.preloaded[0]||t.call(i,{host:n.host,path:n.path,query:n.query,params:{}},Me)}let a,c=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=yield Promise.all(e.parts.map(((e,a)=>fe(this,void 0,void 0,(function*(){const f=r[a];if(function(t,e,n,r){if(r!==Ce)return!0;const s=Oe[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(a,f,l,s)&&(u=!0),o.segments[c]=r[a+1],!e)return{segment:f};const h=c++;let d;if(De||u||!Oe[a]||Oe[a].part!==e.i){u=!1;const{default:r,preload:s}=yield ce[e.i].js();let o;o=He||!Le.preloaded[a+1]?s?yield s.call(i,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Me):{}:Le.preloaded[a+1],d={component:r,props:o,segment:f,match:l,part:e.i}}else d=Oe[a];return o[`level${h}`]=d})))))}catch(t){o.error=t,o.status=500,a=[]}return{redirect:s,props:o,branch:a}}))}var Ke,Je,Fe;Ue.session.subscribe((t=>fe(void 0,void 0,void 0,(function*(){if(Me=t,!He)return;De=!0;const e=ve(new URL(location.href)),n=Ie={},{redirect:r,props:s,branch:o}=yield qe(e);n===Ie&&(r?yield Pe(r.location,{replaceState:!0}):yield ze(o,s,We(s,e.page)))})))),Ke={target:document.querySelector("#sapper")},Je=Ke.target,Ge=Je,Fe=Le.baseUrl,be=Fe,_e=Be,"scrollRestoration"in me&&(me.scrollRestoration="manual"),addEventListener("beforeunload",(()=>{me.scrollRestoration="auto"})),addEventListener("load",(()=>{me.scrollRestoration="manual"})),addEventListener("click",we),addEventListener("popstate",Ee),addEventListener("touchstart",je),addEventListener("mousemove",Ae),Le.error?Promise.resolve().then((()=>function(){const{host:t,pathname:e,search:n}=location,{session:r,preloaded:s,status:o,error:i}=Le;ke||(ke=s&&s[0]);const a={error:i,status:o,session:r,level0:{props:ke},level1:{props:{status:o,error:i},component:te},segments:s},c=$e(n);ze([],a,{host:t,path:e,query:c,params:{},error:i})}())):Promise.resolve().then((()=>{const{hash:t,href:e}=location;me.replaceState({id:pe},"",e);const n=ve(new URL(location.href));if(n)return xe(n,pe,!0,t)}));export{D as A,T as B,s as C,et as D,M as E,c as F,f as G,J as H,W as I,q as J,Mt as K,y as L,H as M,Pe as N,G as O,N as P,e as Q,A as R,St as S,bt as T,Q as U,Z as V,u as W,_t as X,it as Y,z as Z,x as a,k as b,C as c,P as d,w as e,$ as f,j as g,_ as h,xt as i,dt as j,pt as k,mt as l,E as m,O as n,X as o,g as p,t as q,At as r,i as s,gt as t,S as u,v,$t as w,vt as x,wt as y,yt as z};

import __inject_styles from './inject_styles.803b7e80.js';