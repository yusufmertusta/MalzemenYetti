!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){var r=t(1);if(!r.init())throw new Error("Abort!");var o=r.get();try{!function(e,n,r,a,i){var s,c,u=null,l={scripts:[{name:"qchoice",loadModule:function(){return t(3)},firstParty:!0},{name:"adconsent",skipLoadOnExists:!0,loadModule:function(){return t(4)},onLoad:{emitEvent:"adnginLoaderReady",scripts:[{name:"pbjs",obj:{que:[]},queue:"que",path:"?v="+escape(e)},{name:"apstag",obj:{init:function(){this._Q.push(["i",arguments])},fetchBids:function(){this._Q.push(["f",arguments])},setDisplayBids:function(){},targetingKeys:function(){return[]},_Q:[]}},{name:"gpt",obj:{cmd:[]},queue:"cmd"},{name:"adsbygoogle",obj:[]},{name:"adngin",obj:{queue:[],metrics:{timing:{}}},queue:"queue",path:"/"+escape(n)+"/"+escape(e)+"/adngin.js",firstParty:!0},{name:"scripts",argus:{obj:{cmd:[]},queue:"cmd",firstParty:!0}}]},firstParty:!0}]},d=window.performance,f=d.now?function(){return a(d.now())}:function(){return-1},p=function(e,n){var t=function(e){return(d.getEntriesByType?d.getEntriesByType("resource"):[]).find((function(n){return e(n.name)}))||{startTime:-1,responseEnd:-1}}(n),r=h[e]||(h[e]={});r.requested=[a(t.startTime)],r.loaded=[a(t.responseEnd)],r.ready=[f()]},g=function(e,n,t,r){var a=o.resources||(o.resources={}),i=document.createElement("script");i.type="text/javascript",i.async=!0,i.onload=function(){p(n,(function(e){return e.toLowerCase().indexOf(t.toLowerCase())>=0})),a[n].loaded=!0,r&&r()},h[n]||(h[n]={}),h[n].queued=[f()],a[n]={scriptElement:i,loaded:!1},i.src=t,document.head.appendChild(i)},v=function(e,n,t){e.scripts.forEach((function(e){var o=r[e.name]||{};!i(o)&&o.load&&n(o.objName,e),e.onLoad&&e.onLoad.scripts&&t(e.onLoad)}))},m=function(e,n){var t=n.obj;if(t)if(window[e]){var r=window[e];for(var o in t)r[o]=r[o]||t[o]}else window[e]=t},b=function(e,n){var t=n.queue;t&&window[e][t].push((function(){var t;(h[t=n.name||e]||(h[t]={})).apiReady=[f()]}))};((s=window).adsbygoogle||(s.adsbygoogle=[])).pauseAdRequests=1,(c=window).snigelPubConf||(c.snigelPubConf={}),function e(n){return v(n,m,e)}(l);var y=window[r.adngin.objName],h=y.metrics.timing;p("loader",(function(e){return/.*snigel.*loader.js$/i.test(e)})),function e(n){return v(n,b,e)}(l),u=o.settings&&o.settings.adconsent&&o.settings.adconsent.consentWall?function(e,n,t,r){var a=o.settings.adconsent.objName||"adconsent";window[a]&&!e.firstParty?window[a]("isConsentWallUser",null,(function(o){o.hasSubscription||g(e,n,t,r)})):g(e,n,t,r)}:g,function e(n){if(!n)return!1;n.emitEvent&&(window.dispatchEvent(new CustomEvent(n.emitEvent)),y[n.emitEvent]=!0,h.loader[n.emitEvent]=[f()]),n.scripts&&n.scripts.forEach((function(n){var t=r[n.name]||{},o=function(){var e=!!window[t.objName];return t.load&&(!e||e&&!n.skipLoadOnExists)};i(t)?t.forEach((function(e){if(void 0===e.freq||a(100*Math.random())<e.freq){var t=e.name,r=n[t]||{};m(t,r),b(t,r),u(r,e.name||e.url,e.url)}})):(o()&&n.loadModule&&n.loadModule(),o()&&t.url?function(e,n){var t=r[e.name].queryParameters,o=r[e.name].url+(e.path||"")+(t?"?"+t:""),i=r[e.name].exp;if(i&&i.url&&i.freq){var s=i.queryParameters||t||"";a(100*Math.random())<i.freq&&(o=i.url+(i.path||e.path||"")+(s?"?"+s:""))}u(e,e.name,o,n)}(n,(function(){return e(n.onLoad)})):e(n.onLoad))}))}(l)}(o.version,o.site,o.settings,Math.floor,Array.isArray)}catch(e){if(!0===o.passThroughException)throw e;console.error(e)}},function(e,n,t){function r(e){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,o,a=[],i=!0,s=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){s=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(s)throw o}}return a}(e,n)||function(e,n){if(!e)return;if("string"==typeof e)return a(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return a(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var i=t(2),s=function(e,n){console.warn("Override detected: '"+n);var t=function(){var n=document.getElementById("sn-session-override-warnings");n||((n=document.createElement("div")).id="sn-session-override-warnings",n.setAttribute("style","background: darkred; position: fixed; bottom: 0; left: 0; right: 0; z-index: 1000000; padding: 0.25em; color: white; font-family: monospace; font-size: small;"),n.innerHTML="(!) Session overrides:",n.addEventListener("mouseover",(function(){return n.style.opacity="0.20"})),n.addEventListener("mouseout",(function(){return n.style.opacity="1"})),document.body.appendChild(n)),n.innerHTML+=e},r=document.readyState;"interactive"===r||"complete"===r?t():document.addEventListener("DOMContentLoaded",(function e(){document.removeEventListener("DOMContentLoaded",e,!1),t()}),!1)};e.exports={init:function(){try{var e,n=(e=window)._snigelConfig||(e._snigelConfig={}),t=window.localStorage,a=JSON.parse(window.sessionStorage.getItem("snSessionOverrides")),c=a&&a.loaderUrl&&a.loaderUrl===document.currentScript.src;if(!c||a.loaderSettingsOverride){for(var u in i)"exp"!=u&&(n[u]=i[u]);if(i.exp){var l,d,f=o((t.getItem("_sn_exp")||"").split(";"),2);l=f[0],d=f[1],l!=i.cfgVer&&(l=i.cfgVer,d=void 0),i.exp.some((function(e){if(d==e.id||null==d&&Math.random()<e.freq){var t="exp="+(d=e.id),r=e.settings.adngin.queryParameters;return e.settings.adngin.queryParameters=r?r+"&"+t:t,n.settings=e.settings,!0}return!1}))||(d=0),t.setItem("_sn_exp",l+";"+d)}else t.removeItem("_sn_exp")}if(a){var p=a.loaderUrl;if(p&&!c){s(" (Loader overriden) ","Loader'.");var g=document.createElement("script");return g.src=p,g.async=!0,document.head.appendChild(g),!1}var v=a.products,m=a.adEngineCoreConfig;v&&"object"===r(v)&&!Array.isArray(v)&&Object.entries(v).forEach((function(e){var t=o(e,2),r=t[0],a=t[1],i=n.settings[r],c=a.message||"";i.url=a.url,i.queryParameters=a.queryParameters,s(" ("+r+", "+c+")",r+"': "+c)})),m&&(n.adEngineCoreConfigOverride=m,s(" (AdEngine coreConfig overriden) ","AdEngine coreConfig'."))}}catch(e){}return!0},get:function(){return window._snigelConfig||{}}}},function(e){e.exports=JSON.parse('{"site":"supercook.com","version":"13032-1734013014581","cfgVer":15498,"settings":{"adngin":{"load":true,"objName":"adngin","url":"//adengine.snigelweb.com"},"pbjs":{"load":true,"objName":"pbjs","url":"//cdn.snigelweb.com/prebid/8.52.0/prebid.js"},"adconsent":{"load":true,"objName":"adconsent","url":"//cdn.snigelweb.com/adconsent/adconsent.js","consentWall":false},"apstag":{"load":true,"objName":"apstag","url":"//c.amazon-adsystem.com/aax2/apstag.js"},"gpt":{"load":true,"objName":"googletag","url":"//securepubads.g.doubleclick.net/tag/js/gpt.js?network-code=22152718"},"scripts":[{"url":"//cdn.snigelweb.com/argus/argus.js","freq":100,"name":"argus"},{"url":"//boot.pbstck.com/v1/tag/f68bf373-14eb-4efc-ad1d-6c63c637938a","freq":10,"name":"pubstack"},{"url":"//cdnx.snigelweb.com/315b44bc-10e5-45a8-8f58-064d6e7317c0.js","freq":100,"name":"pubstack"}]}}')},function(e,n){},function(e,n,t){"use strict";!function(e,n,t,r,o,a,i,s){var c=e._snigelConfig;if(c)try{t=c.settings.adconsent.objName}catch(e){}var u=void 0,l=229,d="__"+t,f="stub",p="loaded",g="pwuserstatus",v=void 0,m={tcfeuv2:{z:1,v:2,sid:2,api:o,f:o,s:"getTCData",c:"euconsent-v2",n:"GDPR"},uspv1:{z:2,v:1,sid:6,api:i,f:i,s:"getUSPData",c:"usprivacy",n:"CCPA"},tcfcav1:{z:3,v:2,sid:5,api:t+".pipeda",f:"__tcfca",s:"getTCData",c:"caconsent",n:"PIPEDA"},usnat:{z:4,v:1,sid:7,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usconsent",n:"USNATIONAL"},usca:{z:5,v:1,sid:8,api:t+".usnat",f:"__usnat",s:"getUSData",c:"uscaconsent",n:"US-CALIFORNIA"},usco:{z:6,v:1,sid:10,api:t+".usnat",f:"__usnat",s:"getUSData",c:"uscoconsent",n:"US-COLORADO"},usct:{z:7,v:1,sid:12,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usctconsent",n:"US-CONNECTICUT"},usva:{z:8,v:1,sid:9,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usvaconsent",n:"US-VIRGINIA"},usut:{z:9,v:1,sid:11,api:t+".usnat",f:"__usnat",s:"getUSData",c:"usutconsent",n:"US-UTAH"}},b=[1,2],y={gppVersion:"1.1",supportedAPIs:Object.keys(m).map((function(e){return m[e].sid+":"+e})),cmpStatus:f,cmpDisplayStatus:"disabled",cmpId:l};function h(e){return"function"==typeof e}function C(e){return"string"==typeof e}try{s=localStorage}catch(e){}var S,w,E=e.performance,I=E&&E.now?function(){return Math.floor(E.now())}:function(){return 0};function L(e){if(window.argus){var n=1===e.length&&e[0]instanceof Error?{stack:e[0].stack}:{log:e,stack:(new Error).stack};window.argus.cmd.push((function(){window.argus.queueError("adconsent",n)}))}}!function(){if(h(e.CustomEvent))return!1;function t(e,t){t=t||{bubbles:!1,cancelable:!1,detail:u};var r=n.createEvent("CustomEvent");return r.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),r}t.prototype=e.Event.prototype,e.CustomEvent=t}();try{var A=function(n,t,r,o){e.console[n]&&Q.level>=t&&console[n].apply(console,function(e,n,t){return e=[].slice.call(e),n&&e.unshift(n),e.unshift("display: inline-block; color: #fff; background: "+t+"; padding: 1px 4px; border-radius: 3px;"),e.unshift("%cAdConsent"),e}(r,n.toUpperCase()+":",o))},_=function(n){return n===r?function(t,r,o){e[n](t,o,r,u)}:function(t,r,o){e[n](t,u,o,r)}},j=function(e,n,t){return!n||n===e.version||(U(t,null,!1),$("Wrong framework version detected: "+n),!1)},O=function(e,n,t){var r=te.applies?u:te.applies,o={tcString:u,tcfPolicyVersion:5,cmpId:l,cmpVersion:86,gdprApplies:r,eventStatus:!1===r?"tcloaded":u,cmpStatus:te.status,listenerId:n,isServiceSpecific:!0,useNonStandardStacks:!1,publisherCC:F.publisherCC,purposeOneTreatment:!1};return $("Sending TCData structure:",o,t),U(t,o,!0),o},k=function(e,n,t,r,o){e.queue.push({command:n,version:t,parameter:o,callback:r})},P=function(n){for(var t=Array.isArray(n)?n:(n||"").split("."),r=t.length>1,o=t.length-1,a=t[o],i=e,s=0;s<o&&(i=i[t[s]]);s++);return{r:i,e:a,apiParts:t,api:i?i[a]:u,internal:r}},T=function(t,o){var a=function(n){var o=n.data,a=C(o);try{var i=(a?JSON.parse(o):o)[t+"Call"];if(i){var s=function(e,r){try{if(n&&n.source&&n.source.postMessage){var o={};o[t+"Return"]={returnValue:e,success:r===u||r,callId:i.callId},n.source.postMessage(a?JSON.stringify(o):o,"*")}}catch(e){}};t===r?e[t](i.command,s,i.parameter,i.version):e[t](i.command,i.version,s,i.parameter)}}catch(e){}},i=P(t);if(!i.internal){!function t(r){if(!e.frames[r]){var o=n.body;if(o){var a=n.createElement("iframe");a.style.display="none",a.name=r,o.appendChild(a)}else setTimeout(t,5,r)}}(t+"Locator")}i.r&&!h(i.api)&&(i.r[i.e]=function(e,n,a,s){var c=P(i.apiParts).api;if(!c.queue)return c(e,n,a,s);var l=!1;for(var d in o)if(e===d)return l=!0,(0,o[d])(c,e,n,a,s);if(!l)if(t===r){var f=(e||"none").split("."),p=2===f.length?m[f[0]]:u;if(p){var g=P(p.api);g.internal?g.api(f[1],a,n):g.api(f[1],p.v,n,a)}else Y("Unknown "+t+"() API call '"+e+"'")}else i.internal?k(c,e,s,a,n):k(c,e,n,a,s)},i.r[i.e].queue=[],i.internal||(e.addEventListener?e.addEventListener("message",a,!1):e.attachEvent("onmessage",a)))},U=function(e,n,t){h(e)&&setTimeout((function(){e(n,t)}),0)},x=function(e,n){return e&&3!==e||3!==n?e||n?e&&1!==e||1!==n?2:1:0:3},N=function(n,t,r,o,a){if(r||X("setConsentRegion is deprecated and should be only used in debug mode."),Z.region===u)if(ee[a]){for(var s in m){var c=ne[s];c.applies=c.region==a,c.applies?y.currentAPI=s:(c.loaded=!0,c.status=p)}var l;Z.region=a,y.applicableSections=[y.currentAPI?m[y.currentAPI].sid:-1],K("Configured consent region "+ee[a]),l=function(n){var t=e[n],r=t.queue;if(r){t.queue=[];for(var o=0;o<r.length;o++){var a=r[o];t(a.command,a.version,a.callback,a.parameter)}}},Z.region!==m.tcfeuv2.z&&H.processListeners(O),Z.region!==m.uspv1.z&&l(i),0===Z.region&&l(d)}else Y("Incorrect consent region "+a)},q=function(e){U(e,{hasSubscription:!1},!0)},D=function(e,n){U(n,{message:"Consent Wall not available in this region",enabled:!1},!0)},M=function(e){U(e,{consentWallEnabled:!1},!0)},V=function(n,t){B.utils.setStorageItem(g,1,31556926),C(n)&&(e.location.href=n)},z=function(e,n){for(var t in J.eventListeners)"id"!==t&&U(J.eventListeners[t],G(e,t,n))},R=function(e,n,t){var r=JSON.parse(JSON.stringify(y));return U(t,r,!0),r},W=function(e,n,t,o){var a=C(o)&&m[o];if(a){var i=P(a.api);return i.internal?i.api(a.s,u,t):i.api(a.s,a.v,t)}return function(e,n,t){var o=r+"() API call '"+e+"': "+t;return Y(o),U(n,{message:o},!1),null}(n,t,"Unknown section '"+o+"'.")},G=function(e,n,t){return{eventName:e,listenerId:Number.parseInt(n),data:t,pingData:R()}},B=_(d);B.utils={getStorageItem:function(e){if(s){var n="_sn_"+e;try{var t=s.getItem(n).split("~");if(2===t.length&&parseInt(t[0])>=Date.now())return t[1];s.removeItem(n)}catch(e){s.removeItem(n)}}},setStorageItem:function(e,n,t){s&&s.setItem("_sn_"+e,Date.now()+1e3*t+"~"+n)},deleteStorageItem:function(e){s&&s.removeItem("_sn_"+e)}},B.functions={},B.constants={},B.constants.pwUserStatusStorageName=g,B.gdpr=_(o);var H=B.gdpr;H.listenerId=1,H.tcfListeners=[],H.addEventListener=function(e,n,t){if(j(te,e,n)){$("Adding event listener "+H.listenerId,n);var r={id:H.listenerId++,callback:n||function(){}};H.tcfListeners.push(r),t(null,r.id,r.callback)}},H.removeEventListener=function(e,n,t,r,o){if(j(te,t,r)){$("Removing event listener "+o);for(var a=0;a<H.tcfListeners.length;a++)if(H.tcfListeners[a].id==o)return H.tcfListeners.splice(a,1),void U(r,!0);X("Couldn't find listener id "+o+"."),U(r,!1)}},H.getTCData=function(e,n,t,r){if(j(te,t,r))return O(0,0,r)},H.processListeners=function(e){for(var n=H.tcfListeners.slice(),t=0;t<n.length;t++)e(null,n[t].id,n[t].callback)},B.ccpa=_(i),B.gpp=_(r);var J=B.gpp;J.eventListeners={id:0},J.fibonacciEncode=function(e){var n=function e(n,t){if(t=t||[],!n)return t;for(var r=0;n>=b[r];)++r>=b.length&&b.push(b[r-1]+b[r-2]);return t.push(r),e(n-b[r-1],t)}(e),t="";if(n.length){var r,o=0,a=n[0],i=n[o];t="1";for(var s=a;s>0;s--)r="0",s===i&&(r="1",++o<n.length&&(i=n[o])),t=r+t}return t},J.fibonacciDecode=function(e){var n=0;if(e.length>1)for(var t=0;t<e.length-1;t++)t>=b.length&&b.push(b[t-1]+b[t-2]),"1"===e.charAt(t)&&(n+=b[t]);return n},B.version=86,B.cmpId=l,B.cfg=c&&c.adConsentConfigOverrides?c.adConsentConfigOverrides:{apiBaseUrl:"https://cdn.snigelweb.com/adconsent/86",publisherCC:"US",storage:0};var F=B.cfg;B.log={levels:{off:0,error:1,warning:2,info:3,debug:4},level:2,error:function(){L(arguments),A("error",1,arguments,"#ff0000")},warn:function(){A("warn",2,arguments,"#ffe600")},info:function(){A("info",3,arguments,"#3b88a3")},debug:function(){A("debug",4,arguments,"#808080")}};var Q=B.log,$=Q.debug,K=Q.info,X=Q.warn,Y=Q.error;B.consent=function(){var e={regions:{0:"NONE"},region:u,api:{}};for(var n in m){var t=m[n];e.regions[t.z]=t.n,e.api[n]={region:t.z,loaded:!1,applies:u,version:t.v,status:f}}return e}();var Z=B.consent,ee=Z.regions,ne=Z.api,te=ne.tcfeuv2,re=ne.uspv1;B.analytics={enabled:!1,callback:u,send:function(e){oe.sendEvent(ee[Z.region],e,I())},sendEvent:function(n,t,r){K("Sending analytics event action"+(oe.enabled?"":" disabled")+": "+n+", label: "+t+", value: "+r),oe.enabled&&(oe.callback||function(n){e.gtag?gtag("event",n.action,{event_category:n.category,event_label:n.label,event_value:n.value}):e.ga?ga("send",{hitType:"event",eventCategory:n.category,eventAction:n.action,eventLabel:n.label,eventValue:n.value,nonInteraction:n.nonInteraction}):X("Unable to find Google Analytics module (gtag or ga).")})({category:"AdConsent",action:n,label:t||n,value:r||0,nonInteraction:!0})}};var oe=B.analytics,ae=oe.send;B.event={fired:{},dispatchCustomEvent:function(e,t,r){r&&se[e]||(se[e]=!0,$("Emitting custom event "+e+" with details: ",t),n.dispatchEvent(new CustomEvent(e,t)))},dispatchCustomEventConsent:function(e,n){var t={0:"N/A",1:"NoConsent",2:"PartialConsent",3:"FullConsent"};ae(t[n]),Z.region!=m.tcfeuv2.z&&Z.region!=m.tcfcav1.z||0==e||ae("Publisher"+t[e]);var r=x(e,n);v=3==r,ie.dispatchCustomEvent("cmpConsentAvailable",{detail:{consentSummary:{mapping:{0:"not available",1:"no consent",2:"partial consent",3:"full consent"},publisherConsent:e,vendorsConsent:n,globalConsent:r,gdprApplies:te.applies,uspApplies:re.applies,currentAPI:y.currentAPI}}})}};var ie=B.event,se=ie.fired,ce=(w=e.location.search)?w.replace(/^\?/,"").split("&").reduce((function(e,n){var t=n.split("="),r=t[0],o=t.length>1?t[1]:u;return/\[\]$/.test(r)?(e[r=r.replace("[]","")]=e[r]||[],e[r].push(o)):e[r]=o||"",e}),{}):{},ue=("true"==ce.sn_debug?"debug":null)||("true"==ce.adconsent_debug?"debug":null)||ce.adconsent_log;if(Q.level=Q.levels[ue]||Q.level,e[t])return void Y("Stub is tried to load again!");if(e[o]||e[i]||e[r])return void X("A cmp is already registered in the system. AdConsent is stopping.");e[t]=B,B.resolveGlobalConsent=x;var le=!1;B.functions.isConsentWallUser=q,B.functions.enableConsentWall=D,B.functions.isConsentWallEnabled=M,B.functions.ensureConsentWall=V;var de=function(e,t,r,o){var a=function(){return U(o,{fullConsent:v,region:y.currentAPI},!0)};void 0===v?n.addEventListener("cmpConsentAvailable",(function e(){n.removeEventListener("cmpConsentAvailable",e),a()})):a()};B.functions.getConsent=de,T(o,{ping:function(e,n,t,r){U(r,{gdprApplies:te.applies,cmpLoaded:te.loaded,cmpStatus:te.status,displayStatus:"disabled",apiVersion:"2.2",cmpVersion:86,cmpId:l,gvlVersion:u,tcfPolicyVersion:5},!0)},getTCData:H.getTCData,addEventListener:function(e,n,t,r,o){H.addEventListener(t,r,O)},removeEventListener:H.removeEventListener}),T(i,{getUSPData:function(e,n,t,r,o){if(!1===re.applies){if(j(re,t,r)){var a={version:m.uspv1.v,uspString:m.uspv1.v+"---"};return U(r,a,!0),a}}else k(e,n,t,r,o)}}),S=function(t){var r=!0,o=y.cmpStatus;y.cmpStatus=p;var a=y.cmpDisplayStatus,i=t.type;if("cmpGUIShow"===i?(y.cmpDisplayStatus="visible",y.signalStatus="not ready",z("signalStatus","not ready"),r=!1):"cmpGUISubmit"===i&&(y.cmpDisplayStatus="hidden",z("sectionChange",y.currentAPI)),a!==y.cmpDisplayStatus?z("cmpDisplayStatus",y.cmpDisplayStatus):o!==p?z("cmpStatus",p):r=!1,r){var c=function(t){var r={sectionId:3,gppVersion:1,parsedSections:{}},o=function(e,n,t){var r=C(e)?e:Number(e).toString(2);if(n)for(var o=(n-r.length%n)%n,a=0;a<o;a++)t?r+="0":r="0"+r;return r},a={},i=[];for(var c in m){var u=m[c];if(u&&u.c){var l="_sn_"+u.c,d=(s&&s.getItem(l)||"").split("~");if(d&&2===d.length)try{parseInt(d[0])>=(new Date).getTime()?(a[u.sid]=d[1],i.push(u.sid)):s.removeItem(l)}catch(e){}else{var f=("; "+n.cookie).split("; "+u.c+"=");f.length>=2&&(a[u.sid]=f[f.length-1].split(";").shift(),i.push(u.sid))}r.parsedSections[c]=W(0,null,null,c)}}var p="",g="";p+=o(r.sectionId,6),p+=o(r.gppVersion,6),p+=o(i.length,12);var v=0;return r.sectionList=i.sort((function(e,n){return e-n})),r.sectionList.forEach((function(e){p+=o(0,1);var n=e-v;p+=J.fibonacciEncode(n),g+="~"+a[e],v=e})),p=o(p,6,!0),r.gppString=function(n){for(var t=o(n,8,!0),r="",a=0;a<t.length;a+=8)r+=String.fromCharCode(parseInt(t.substr(a,8),2));return e.btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"")}(p)+g,r}();y.signalStatus="ready",y.sectionList=c.sectionList,y.gppString=c.gppString,y.parsedSections=c.parsedSections,z("signalStatus","ready")}},n.addEventListener("cmpGUIShow",S),n.addEventListener("cmpGUISubmit",S),n.addEventListener("cmpConsentAvailable",S),T(m.tcfcav1.api,{}),T(m.usnat.api,{}),T(d,{start:function t(r,o,a,i,c){if(Z.region!==u){if(!le)if(le=!0,0==Z.region)ie.dispatchCustomEventConsent(3,3);else if(y.currentAPI){var l=n.createElement("script");l.type="text/javascript",l.async=!0,l.charset="utf-8",l.src=B.cfg.apiBaseUrl+"/adconsent"+m[y.currentAPI].f+".js",n.head.appendChild(l)}}else!function(n,t){if((!n||!n.country)&&(n=null,s)){var r=s.getItem("snconsent_geo");if(r){var o=s.getItem("snconsent_geo_exp");if(o)try{parseInt(o)>=(new Date).getTime()&&(n=JSON.parse(e.atob(r)))}catch(e){}}}if(n)t(n);else{var a=new XMLHttpRequest;a.open("GET","https://pro.ip-api.com/json/?fields=24582&key=33arzTfj1gigDqW"),a.timeout=5e3,a.onload=function(){var n=a.responseText.toLowerCase(),r=JSON.parse(n);r={country:r.countrycode,region:r.region},s&&(s.setItem("snconsent_geo",e.btoa(JSON.stringify(r))),s.setItem("snconsent_geo_exp",(new Date).getTime()+36e5)),t(r)},a.onerror=a.ontimeout=function(){t(null)},a.send()}}(c,(function(e){if(e&&(F.country=e.country?e.country.toLowerCase():null,F.region=(e.region||"").toLowerCase()),B.utils.getStorageItem(g))N(0,0,1,0,m.tcfeuv2.z);else if("us"===F.country)switch(F.region){case"ca":N(0,0,1,0,m.uspv1.z);break;default:N(0,0,1,0,0)}else-1!=="at be bg hr cy cz dk ee fi fr de gr hu is ie it lv li lt lu mt nl no pl pt ro sk si es se gb ch".indexOf(F.country)?N(0,0,1,0,m.tcfeuv2.z):(F.country||(ae("ErrorGeotargeting"),Y("Geotargeting failed")),N(0,0,1,0,0));t()}))},setStorageType:function(e,n,t,r,o){0!==o&&1!==o?U(r,{message:"Invalid storage type: should be 0 (cookie) or 1 (local storage)."},!1):1!==o||s?(F.storage=o,U(r,null,!0)):U(r,{message:"Storage type 'localStorage' was selected, but local storage is not available. Reverting to cookie storage."},!1)},setPublisherCC:function(e,n,t,r,o){C(o)&&2==o.length?(F.publisherCC=o.toUpperCase(),U(r,null,!0)):U(r,{message:"Invalid publisher country code detected. Ignoring call."},!1)},setConsentRegion:N,enableGoogleAnalytics:function(e,n,t,r,o){oe.enabled=o===u||!!o,oe.callback=r},enableInlineConsent:function(e,n,t,r,o){var a=function(e,n,t,r){if(t)e[n].forEach((function(e){e.processed,e.elem.setAttribute("src",e.src)})),delete e[n];else{var a=o&&o.labels||{};e[n].forEach((function(e){if(!e.processed&&(e.processed=1,"IFRAME"===e.type)){var t=e.elem.contentDocument;t.head.innerHTML+='<link rel="stylesheet" href="'+B.cfg.apiBaseUrl+"/adconsent"+m[y.currentAPI].f+'.css">',t.head.innerHTML+="<style>.sn-inline-bg{text-align:center}.sn-inline-bg > p{height:calc(50% - 1.5em);align-content:end;text-align:center}.sn-b-def{width:50%;margin-left:10px}</style>";for(var o=document.getElementsByTagName("style"),i=0;i<o.length;i++)t.head.appendChild(o[i].cloneNode(!0));var s=t.createElement("div");s.classList="snigel-cmp-framework sn-inline-bg";var c=t.createElement("p");c.innerHTML=(a.consentText||"To see this content you need to give permission to vendor ")+(e.name?e.name:n);var u=t.createElement("div");u.classList="sn-b-def sn-blue",u.innerHTML=a.allow||"Allow",u.addEventListener("click",(function(){return H("allowVendor",{id:n,isCustom:r})}));var l=t.createElement("div");l.classList="sn-b-def",l.innerHTML=a.showOptions||"Show all options",l.addEventListener("click",(function(){return B("showGUI")})),s.appendChild(c),s.appendChild(u),s.appendChild(l),t.body.appendChild(s)}}))}},i=document.querySelectorAll("[data-cmp-vendor]");if(i&&i.length){var s={vendor:{},customVendor:{}};i.forEach((function(e){var n,t,r,o,a=e.dataset,i=a.cmpVendor.toUpperCase(),c=a.cmpSrc||"";c.length>2&&(i.length&&"C"===i.charAt(0)?(n=s.customVendor,t=parseInt(i.substring(1))):(n=s.vendor,t=parseInt(i)),t>0&&((r=n)[o=t]||(r[o]=[]),n[t].push({elem:e,type:e.tagName.toUpperCase(),processed:0,name:a.cmpVname||"",src:c})))})),H("addEventListener",null,(function(e){if(!1===e.gdprApplies||"tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus){var n=Object.keys(s.vendor),t=Object.keys(s.customVendor);n.forEach((function(n){return a(s.vendor,n,!1===e.gdprApplies||e.vendor.consents[n])})),t.length&&(!1===e.gdprApplies?t.forEach((function(e){return a(s.customVendor,e,!0,!0)})):H("getCustomVendorsConsent",null,(function(e){t.forEach((function(n){return a(s.customVendor,n,e[n],!0)}))})))}}));var c=Object.keys(s.vendor).length,u=Object.keys(s.customVendor).length,l=function(e){return 1!=e?"s":""},d="Enabled inline consent for "+c+" vendor"+l(c)+" and "+u+" custom vendor"+l(u)+".";$(d),U(r,{message:d},!0)}},isConsentWallUser:function(e,n,t,r){0===Z.region?q(r):k(e,n,t,r,null)},isConsentWallEnabled:function(e,n,t,r){0===Z.region?M(r):k(e,n,t,r,null)},ensureConsentWall:function(e,n,t,r,o){0===Z.region?V(o):k(e,n,t,r,o)},enableConsentWall:function(e,n,t,r,o){0===Z.region?D(0,r):k(e,n,t,r,o)},getConsent:de});var fe=t+"Ready";e.dispatchEvent(new CustomEvent(fe)),e.dataLayer||(e.dataLayer=[]),e.dataLayer.push({event:fe})}catch(e){if(L(e),c&&c.passThroughException)throw e;console.error(e)}}(window,document,"adconsent","__gpp","__tcfapi",0,"__uspapi")}]);