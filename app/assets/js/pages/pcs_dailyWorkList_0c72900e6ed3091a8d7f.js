webpackJsonp([4],{631:function(t,e,n){"use strict";(function(e,r,o){var i=(n(35),n(34)),a=n(657),s=n(704),c=e.baseEnv,l={page:void 0,datatableApi:void 0,queryParam:{siteCode:c.api.siteCode,serviceCode:"GMES-CLIENT-PCS00017",languageCode:"zh",userCode:"",operationCode:"",stationCode:"",productNum:"",productTrackNum:"",minSwitchOnDateTime:"",maxCreateDateTime:""},init:function(){r(document).off("keydown"),i.setBreadcrumb(["报工履历"]),this.loadPage(),i.translate('.page[data-page="andonLog"]'),this.event()},event:function(){var t=this,e={selector:".baogonglist",tpl:s,title:"查询",okBtnName:"查询",ready:function(){t.initWorkCenterData(),t.renderTimePicker(),t.renderAndonStatus(),t.initStationSlect()},submit:function(){var e={stationCode:r('select[name="stationCode"]').val(),productNum:r('input[name="productNum"]').val(),minCreateDateTime:r('input[name="minCreateDateTime"]').val(),maxCreateDateTime:r('input[name="maxCreateDateTime"]').val()};t.reloadDatatableByParam(e)}};this.popup=a(e);var t=this;r(".toggle-right-btn").on("click",function(e){console.log(),t.popup.open()})},loadPage:function(){var t=this,e=this.page.height-126;this.datatableApi=i.dataTable(r(".table-panel table",this.page),{scrollY:e,ordering:!1,order:[],pageLength:8,ajax:{serviceCode:"GMES-CLIENT-PCS00017",param:function(){return t.queryParam}},columns:[{data:"id",render:function(t,e,n,r){return r.settings._iDisplayStart+r.row+1}},{data:"productionSeqNum",name:"productionSeqNum"},{data:"productNum",name:"productNum"},{data:"materialText",name:"materialText"},{data:"quantity",name:"quantity"},{data:"confirmDateTime",name:"confirmDateTime",render:function(t,e,n){return function(t){function e(t){return parseInt(t)<10&&(t="0"+t),t}var n=new Date(t),r=n.getFullYear(),o=n.getMonth()+1,i=n.getDate(),a=n.getHours(),s=n.getMinutes(),c=n.getSeconds();return r+"-"+e(o)+"-"+e(i)+" "+e(a)+":"+e(s)+":"+e(c)}(t)}},{data:"stationText",name:"stationText"},{data:"operationText",name:"operationText"}]})},searchBtn:function(){r("[name='btnSearch']",this.page).on("click",function(){var t=myApp.formToJSON("#andonSetForm"),e={};console.log(t),e.workCenterCode=t.workCenterCode,e.stationCode=t.stationCode,t.typeCode&&(e.typeCode=t.typeCode.join(",")),e.statusECode=t.statusECode.join(","),e.minSwitchOnDateTime=t.SwitchOnDateTime.split(" - ")[0],e.maxCreateDateTime=t.SwitchOnDateTime.split(" - ")[1],e.minSwitchOffDateTime=t.SwitchOffDateTime.split(" - ")[0],e.maxSwitchOffDateTime=t.SwitchOffDateTime.split(" - ")[1],myApp.closePanel("right"),l.reloadDatatableByParam(e)})},initWorkCenterData:function(){var t=this;i.service("GMES-CLIENT-ANDON002",{},null,function(e){var n={allWorkCenterList:e.data};console.log(n),i.tplManager("allWorkCenterListTpl",n,"allWorkCenterListRender"),r("#allWorkCenterListRender",t.page).dropkick({change:function(){var e=r("#allWorkCenterListRender option:selected",t.page).val();t.reInitStationSlect(e)}})})},renderTimePicker:function(){o.datetimeSingRender("input.datetime",this.page)},renderAndonStatus:function(){o.checkboxRender("input[name='statusECode']",this.page)},initStationSlect:function(){r("#stationListRender",this.page).dropkick({change:function(){}})},reInitStationSlect:function(t){var e=this;i.service("GMES-CLIENT-ANDON003",{workCenterCode:t},null,function(t){var n=t.data,o={stationList:n};r("#stationListContainer",e.page).empty(),r("#stationListContainer",e.page).html('<select class="form-select-control" id="stationListRender" name="stationCode"><option value=""></option></select>'),i.tplManager("stationListTpl",o,"stationListRender"),r("#stationListRender",e.page).dropkick({change:function(){var t=r("#stationListRender option:selected",e.page).val();e.renderAndonType(t)}})})},renderAndonType:function(t){function e(t){r("#andonTypeRender").empty();for(var e=t.length,a=0;a<e;a++)t[a].typeText=t[a].typeText.substring(0,2);var s=0,c=[];do{var l={};0==s&&(l.showLabel=!0);var u=t.length;t.length>3?l.TypeGroup=t.splice(0,3):l.TypeGroup=t.splice(0,u),s++,c.push(l)}while(t.length>0);var p={allTypeGroup:c};i.tplManager("andonTypeTpl",p,"andonTypeRender"),o.checkboxRender("input[name='typeCode']",n.page)}var n=this;i.service("GMES-CLIENT-ANDON004",{},null).done(function(t){e(t.data)})},reloadDatatableByParam:function(t){this.queryParam=r.extend({},this.queryParam,t),this.datatableApi.ajax.reload()}};t.exports=l}).call(e,n(29),n(4),n(77))},654:function(t,e,n){"use strict";t.exports=n(656)},655:function(t,e,n){var r=n(654);t.exports=function(t){"use strict";t=t||{};var e="",n=[0,0],o=r.$escape,i=t.title,a=t.okBtnName;try{e+='<div class="client-popup">\r\n\t<h4 class="title">',n=[1,19],e+=o(i),e+='</h4>\r\n\t<div class="render-content" sw-layout="fit"></div>\r\n\t<div class="btn-content">\r\n\t\t<a class="client-popup-close-btn topbar-button button button-fill color-cyan">关闭</a>\r\n\t\t<a class="client-popup-submit-btn topbar-button button button-fill">',n=[5,70],e+=o(a),e+="</a>\r\n\t</div>\r\n</div>\r\n"}catch(t){throw{name:"RuntimeError",path:"E:\\yiyun\\pad\\vue-pad\\GMES_CLIENT_PAD\\src\\js\\utils\\popup\\index.tpl",message:t.message,line:n[0]+1,column:n[1]+1,source:'<div class="client-popup">\r\n\t<h4 class="title">{{title}}</h4>\r\n\t<div class="render-content" sw-layout="fit"></div>\r\n\t<div class="btn-content">\r\n\t\t<a class="client-popup-close-btn topbar-button button button-fill color-cyan">关闭</a>\r\n\t\t<a class="client-popup-submit-btn topbar-button button button-fill">{{okBtnName}}</a>\r\n\t</div>\r\n</div>\r\n',stack:t.stack}}return e}},656:function(t,e,n){"use strict";(function(e){function r(t){return"string"!=typeof t&&(t=void 0===t||null===t?"":"function"==typeof t?r(t.call(t)):JSON.stringify(t)),t}function o(t){var e=""+t,n=s.exec(e);if(!n)return t;var r="",o=void 0,i=void 0,a=void 0;for(o=n.index,i=0;o<e.length;o++){switch(e.charCodeAt(o)){case 34:a="&#34;";break;case 38:a="&#38;";break;case 39:a="&#39;";break;case 60:a="&#60;";break;case 62:a="&#62;";break;default:continue}i!==o&&(r+=e.substring(i,o)),i=o+1,r+=a}return i!==o?r+e.substring(i,o):r}/*! art-template@runtime | https://github.com/aui/art-template */
var i=n(662),a=Object.create(i?e:window),s=/["&'<>]/;a.$escape=function(t){return o(r(t))},a.$each=function(t,e){if(Array.isArray(t))for(var n=0,r=t.length;n<r;n++)e(t[n],n);else for(var o in t)e(t[o],o)},t.exports=a}).call(e,n(79))},657:function(t,e,n){"use strict";(function(e){function r(t){return t&&t.__esModule?t:{default:t}}var o=n(660),i=r(o),a=n(659),s=r(a),c=n(114),l=r(c),u=n(655),p=function t(n){if(!(this instanceof t))return new t(n);var r={selector:"body",position:"right",okBtnName:"提交",tpl:"<div></div>",title:"client",submit:e.noop,ready:e.noop};this.options=(0,l.default)({},r,n),this.init(),this.render(),this.ready(),this.event()};p.prototype.init=function(){var t=u(this.options);e(this.options.selector).find(".client-popup").remove(),e(this.options.selector).append(t)},p.prototype.render=function(){e(".render-content ,this.options.selector").append(this.options.tpl)},p.prototype.ready=function(){this.options.ready&&this.options.ready()},p.prototype.event=function(){var t=this;e(".client-popup").on("click",".client-popup-close-btn",function(){t.close()}),e(".client-popup").on("click",".client-popup-submit-btn",function(){t.submit()})},p.prototype.open=function(t){setTimeout(function(){e(".client-popup ,this.options.selector").removeClass("animateright"),e(".client-popup ,this.options.selector").addClass("animateleft"),t&&t()},10)},p.prototype.close=function(){e(".client-popup ,this.options.selector").removeClass("animateleft"),e(".client-popup ,this.options.selector").addClass("animateright")},p.prototype.submit=(0,s.default)(i.default.mark(function t(){return i.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(t.t0=this.options.submit,!t.t0){t.next=4;break}return t.next=4,this.options.submit();case 4:this.close();case 5:case"end":return t.stop()}},t,this)})),t.exports=function(t){return p(t)}}).call(e,n(4))},659:function(t,e,n){"use strict";e.__esModule=!0;var r=n(113),o=function(t){return t&&t.__esModule?t:{default:t}}(r);e.default=function(t){return function(){var e=t.apply(this,arguments);return new o.default(function(t,n){function r(i,a){try{var s=e[i](a),c=s.value}catch(t){return void n(t)}if(!s.done)return o.default.resolve(c).then(function(t){r("next",t)},function(t){r("throw",t)});t(c)}return r("next")})}}},660:function(t,e,n){t.exports=n(663)},662:function(t,e,n){(function(e){t.exports=!1;try{t.exports="[object process]"===Object.prototype.toString.call(e.process)}catch(t){}}).call(e,n(79))},663:function(t,e,n){var r=function(){return this}()||Function("return this")(),o=r.regeneratorRuntime&&Object.getOwnPropertyNames(r).indexOf("regeneratorRuntime")>=0,i=o&&r.regeneratorRuntime;if(r.regeneratorRuntime=void 0,t.exports=n(664),o)r.regeneratorRuntime=i;else try{delete r.regeneratorRuntime}catch(t){r.regeneratorRuntime=void 0}},664:function(t,e){!function(e){"use strict";function n(t,e,n,r){var i=e&&e.prototype instanceof o?e:o,a=Object.create(i.prototype),s=new f(r||[]);return a._invoke=l(t,n,s),a}function r(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function o(){}function i(){}function a(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(n,o,i,a){var s=r(t[n],t,o);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&g.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,i,a)},function(t){e("throw",t,i,a)}):Promise.resolve(l).then(function(t){c.value=t,i(c)},a)}a(s.arg)}function n(t,n){function r(){return new Promise(function(r,o){e(t,n,r,o)})}return o=o?o.then(r,r):r()}var o;this._invoke=n}function l(t,e,n){var o=k;return function(i,a){if(o===E)throw new Error("Generator is already running");if(o===N){if("throw"===i)throw a;return m()}for(n.method=i,n.arg=a;;){var s=n.delegate;if(s){var c=u(s,n);if(c){if(c===O)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===k)throw o=N,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=E;var l=r(t,e,n);if("normal"===l.type){if(o=n.done?N:S,l.arg===O)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=N,n.method="throw",n.arg=l.arg)}}}function u(t,e){var n=t.iterator[e.method];if(n===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,u(t,e),"throw"===e.method))return O;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return O}var o=r(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,O;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,O):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,O)}function p(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function d(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function f(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(p,this),this.reset(!0)}function h(t){if(t){var e=t[w];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(g.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=v,e.done=!0,e};return r.next=r}}return{next:m}}function m(){return{value:v,done:!0}}var v,y=Object.prototype,g=y.hasOwnProperty,b="function"==typeof Symbol?Symbol:{},w=b.iterator||"@@iterator",x=b.asyncIterator||"@@asyncIterator",C=b.toStringTag||"@@toStringTag",T="object"==typeof t,L=e.regeneratorRuntime;if(L)return void(T&&(t.exports=L));L=e.regeneratorRuntime=T?t.exports:{},L.wrap=n;var k="suspendedStart",S="suspendedYield",E="executing",N="completed",O={},D={};D[w]=function(){return this};var R=Object.getPrototypeOf,_=R&&R(R(h([])));_&&_!==y&&g.call(_,w)&&(D=_);var P=a.prototype=o.prototype=Object.create(D);i.prototype=P.constructor=a,a.constructor=i,a[C]=i.displayName="GeneratorFunction",L.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===i||"GeneratorFunction"===(e.displayName||e.name))},L.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,a):(t.__proto__=a,C in t||(t[C]="GeneratorFunction")),t.prototype=Object.create(P),t},L.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[x]=function(){return this},L.AsyncIterator=c,L.async=function(t,e,r,o){var i=new c(n(t,e,r,o));return L.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},s(P),P[C]="Generator",P[w]=function(){return this},P.toString=function(){return"[object Generator]"},L.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},L.values=h,f.prototype={constructor:f,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(d),!t)for(var e in this)"t"===e.charAt(0)&&g.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,r){return i.type="throw",i.arg=t,n.next=e,r&&(n.method="next",n.arg=v),!!r}if(this.done)throw t;for(var n=this,r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],i=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var a=g.call(o,"catchLoc"),s=g.call(o,"finallyLoc");if(a&&s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(a){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&g.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,O):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),O},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),d(n),O}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;d(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:h(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=v),O}}}(function(){return this}()||Function("return this")())},704:function(t,e){t.exports='<form id="llSetForm" class="search-panel">\r\n                \x3c!--工作中心--\x3e\r\n    <div class="row  no-gutter" >\r\n        <div class="col-100 form-group" sw-mode=\'x-equal\'>\r\n            <label class="form-label" data-i18n="COMMON.T.WORKCENTER">\r\n            \t工作中心\r\n            </label>\r\n            <div class="w100p">\r\n                <select  class="form-select-control" id="allWorkCenterListRender" name="workCenterCode"></select>\r\n                <script type="text/html" id="allWorkCenterListTpl">\r\n                    <option value=\'\' data-i18n="COMMON.T.ALL"></option>\r\n                    {{#each allWorkCenterList}}\r\n                        <option value={{workCenterCode}}>{{workCenterText}}</option>\r\n                    {{/each}}\r\n                <\/script>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \x3c!--站点--\x3e\r\n    <div class="row  no-gutter" >\r\n        <div class="col-100 form-group" sw-mode=\'x-equal\'>\r\n            <label class="form-label" data-i18n="COMMON.T.STATION">\r\n            \t站点\r\n            </label>\r\n            <div class="w100p" id="stationListContainer">\r\n                <select class="form-select-control" id="stationListRender" name="stationCode">\r\n                    <option value=""></option>\r\n                </select>\r\n            </div>\r\n            <script type="text/html" id="stationListTpl">\r\n                <option value=\'\' data-i18n="COMMON.T.ALL"></option>\r\n                {{#each stationList}}\r\n                <option value={{stationCode}}>{{stationText}}</option>\r\n                {{/each}}\r\n            <\/script>\r\n        </div>\r\n    </div>\r\n    \x3c!--触发时间--\x3e\r\n    <div class="row  no-gutter" >\r\n        <div class="col-100 form-group" sw-mode=\'x-equal\'>\r\n            <label class="form-label">\r\n                生产编号\r\n            </label>\r\n            <div class="w100p">\r\n                <input type="text" name="productNum" class="form-control">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \x3c!--关闭时间--\x3e\r\n    \x3c!--触发时间--\x3e\r\n    <div class="row  no-gutter" >\r\n        <div class="col-100 form-group" sw-mode=\'x-equal\'>\r\n            <label class="form-label">\r\n            \t开始时间\r\n            </label>\r\n            <div class="w100p">\r\n                <input type="text" name="minCreateDateTime" class="datetime form-control">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \x3c!--关闭时间--\x3e\r\n    <div class="row  no-gutter" >\r\n        <div class="col-100 form-group" sw-mode=\'x-equal\'>\r\n            <label class="form-label">\r\n            \t结束时间\r\n            </label>\r\n            <div class="w100p">\r\n                <input type="text" name="maxCreateDateTime" class="datetime form-control">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</form>   '}});
//# sourceMappingURL=pcs_dailyWorkList_0c72900e6ed3091a8d7f.js.map