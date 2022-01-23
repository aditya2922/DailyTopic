!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=192)}({0:function(e,t){e.exports=window.wp.element},1:function(e,t){e.exports=window.yoast.propTypes},10:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},11:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},12:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},120:function(e,t,n){var r=n(12),o=n(48),i=n(167),s=n(168);function a(t){var n="function"==typeof Map?new Map:void 0;return e.exports=a=function(e){if(null===e||!i(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==n){if(n.has(e))return n.get(e);n.set(e,t)}function t(){return s(e,arguments,r(this).constructor)}return t.prototype=Object.create(e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),o(t,e)},a(t)}e.exports=a},13:function(e,t){e.exports=window.yoast.styledComponents},15:function(e,t){e.exports=function(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}},155:function(e,t,n){"use strict";var r=n(16),o=n.n(r),i=n(9),s=n.n(i),a=n(10),c=n.n(a),u=n(11),l=n.n(u),p=n(18),f=n.n(p),d=n(19),y=n.n(d),x=n(12),h=n.n(x),g=n(0),m=n(7),b=n.n(m),v=n(2),w=n(4),O=n(24),j=n(1),S=n.n(j),_=n(15),k=n.n(_),E=n(120),I=n.n(E);var P,R,A=function(e){f()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var o=h()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return y()(this,e)});function o(e,t,n,i,a){var c;return s()(this,o),(c=r.call(this,e)).name="RequestError",c.url=t,c.method=n,c.statusCode=i,c.stackTrace=a,c}return o}(I()(Error)),T=n(13),B=n.n(T),C=B.a.div(P||(P=k()(["\n\tmargin-top: 8px;\n"]))),D=B.a.pre(R||(R=k()(["\n\toverflow-x: scroll;\n\tmax-width: 500px;\n\tborder: 1px solid;\n\tpadding: 16px;\n"])));function q(e){var t=e.title,n=e.value;return n?Object(g.createElement)("p",null,Object(g.createElement)("strong",null,t),Object(g.createElement)("br",null),n):null}function M(e){var t=e.title,n=e.value;return n?Object(g.createElement)("details",null,Object(g.createElement)("summary",null,t),Object(g.createElement)(D,null,n)):null}function N(e){var t=e.message,n=e.error;return Object(g.createElement)(w.Alert,{type:"error"},Object(g.createElement)("div",{dangerouslySetInnerHTML:{__html:t}}),Object(g.createElement)("details",null,Object(g.createElement)("summary",null,Object(v.__)("Error details","wordpress-seo")),Object(g.createElement)(C,null,Object(g.createElement)(q,{title:Object(v.__)("Request URL","wordpress-seo"),value:n.url}),Object(g.createElement)(q,{title:Object(v.__)("Request method","wordpress-seo"),value:n.method}),Object(g.createElement)(q,{title:Object(v.__)("Status code","wordpress-seo"),value:n.statusCode}),Object(g.createElement)(q,{title:Object(v.__)("Error message","wordpress-seo"),value:n.message}),Object(g.createElement)(M,{title:Object(v.__)("Response","wordpress-seo"),value:n.parseString}),Object(g.createElement)(M,{title:Object(v.__)("Error stack trace","wordpress-seo"),value:n.stackTrace}))))}q.propTypes={title:S.a.string.isRequired,value:S.a.any},q.defaultProps={value:""},M.propTypes={title:S.a.string.isRequired,value:S.a.string},M.defaultProps={value:""},N.propTypes={message:S.a.string.isRequired,error:S.a.oneOfType([S.a.instanceOf(Error),S.a.instanceOf(A)]).isRequired};var z=function(e){f()(o,e);var t,n,r=(t=o,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=h()(t);if(n){var o=h()(this).constructor;e=Reflect.construct(r,arguments,o)}else e=r.apply(this,arguments);return y()(this,e)});function o(e,t){var n;return s()(this,o),(n=r.call(this,e)).name="ParseError",n.parseString=t,n}return o}(I()(Error));var F=function(e){f()(m,e);var t,n,r,i,a,u,p,d,x=(p=m,d=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=h()(p);if(d){var n=h()(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y()(this,e)});function m(e){var t;return s()(this,m),(t=x.call(this,e)).settings=yoastIndexingData,t.state={state:"idle",processed:0,error:null,amount:parseInt(t.settings.amount,10),firstTime:"1"===t.settings.firstTime},t.startIndexing=t.startIndexing.bind(l()(t)),t.stopIndexing=t.stopIndexing.bind(l()(t)),t}return c()(m,[{key:"doIndexingRequest",value:(u=o()(b.a.mark((function e(t,n){var r,o,i,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,{method:"POST",headers:{"X-WP-Nonce":n}});case 2:return r=e.sent,e.next=5,r.text();case 5:o=e.sent,e.prev=6,i=JSON.parse(o),e.next=13;break;case 10:throw e.prev=10,e.t0=e.catch(6),new z("Error parsing the response to JSON.",o);case 13:if(r.ok){e.next=16;break}throw s=i.data?i.data.stackTrace:"",new A(i.message,t,"POST",r.status,s);case 16:return e.abrupt("return",i);case 17:case"end":return e.stop()}}),e,null,[[6,10]])}))),function(_x,e){return u.apply(this,arguments)})},{key:"doPreIndexingAction",value:(a=o()(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof this.props.preIndexingActions[t]){e.next=3;break}return e.next=3,this.props.preIndexingActions[t](this.settings);case 3:case"end":return e.stop()}}),e,this)}))),function(e){return a.apply(this,arguments)})},{key:"doPostIndexingAction",value:(i=o()(b.a.mark((function e(t,n){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("function"!=typeof this.props.indexingActions[t]){e.next=3;break}return e.next=3,this.props.indexingActions[t](n.objects,this.settings);case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return i.apply(this,arguments)})},{key:"doIndexing",value:(r=o()(b.a.mark((function e(t){var n,r=this;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=this.settings.restApi.root+this.settings.restApi.indexing_endpoints[t];case 1:if(!this.isState("in_progress")||!1===n){e.next=11;break}return e.prev=2,e.delegateYield(b.a.mark((function e(){var o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.doPreIndexingAction(t);case 2:return e.next=4,r.doIndexingRequest(n,r.settings.restApi.nonce);case 4:return o=e.sent,e.next=7,r.doPostIndexingAction(t,o);case 7:r.setState((function(e){return{processed:e.processed+o.objects.length,firstTime:!1}})),n=o.next_url;case 9:case"end":return e.stop()}}),e)}))(),"t0",4);case 4:e.next=9;break;case 6:e.prev=6,e.t1=e.catch(2),this.setState({state:"errored",error:e.t1,firstTime:!1});case 9:e.next=1;break;case 11:case"end":return e.stop()}}),e,this,[[2,6]])}))),function(e){return r.apply(this,arguments)})},{key:"index",value:(n=o()(b.a.mark((function e(){var t,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0,n=Object.keys(this.settings.restApi.indexing_endpoints);case 1:if(!(t<n.length)){e.next=8;break}return r=n[t],e.next=5,this.doIndexing(r);case 5:t++,e.next=1;break;case 8:this.isState("errored")||this.isState("idle")||this.completeIndexing();case 9:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"startIndexing",value:(t=o()(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({processed:0,state:"in_progress"},this.index);case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"completeIndexing",value:function(){this.setState({state:"completed"})}},{key:"stopIndexing",value:function(){this.setState((function(e){return{state:"idle",processed:0,amount:e.amount-e.processed}}))}},{key:"componentDidMount",value:function(){var e,t;if(!this.settings.disabled&&(this.props.indexingStateCallback(0===this.state.amount?"completed":this.state.state),"true"===new URLSearchParams(window.location.search).get("start-indexation"))){var n=function(e,t){var n=new URL(e);return n.searchParams.delete("start-indexation"),n.href}(window.location.href);null,e=document.title,t=n,window.history.pushState(null,e,t),this.startIndexing()}}},{key:"componentDidUpdate",value:function(e,t){this.state.state!==t.state&&this.props.indexingStateCallback(this.state.state)}},{key:"isState",value:function(e){return this.state.state===e}},{key:"renderFirstIndexationNotice",value:function(){return Object(g.createElement)(w.Alert,{type:"info"},Object(v.__)("This feature includes and replaces the Text Link Counter and Internal Linking Analysis","wordpress-seo"))}},{key:"renderStartButton",value:function(){return Object(g.createElement)(w.NewButton,{variant:"primary",onClick:this.startIndexing},Object(v.__)("Start SEO data optimization","wordpress-seo"))}},{key:"renderStopButton",value:function(){return Object(g.createElement)(w.NewButton,{variant:"secondary",onClick:this.stopIndexing},Object(v.__)("Stop SEO data optimization","wordpress-seo"))}},{key:"renderDisabledTool",value:function(){return Object(g.createElement)(g.Fragment,null,Object(g.createElement)("p",null,Object(g.createElement)(w.NewButton,{variant:"secondary",disabled:!0},Object(v.__)("Start SEO data optimization","wordpress-seo"))),Object(g.createElement)(w.Alert,{type:"info"},Object(v.__)("SEO data optimization is disabled for non-production environments.","wordpress-seo")))}},{key:"renderProgressBar",value:function(){return Object(g.createElement)(g.Fragment,null,Object(g.createElement)(w.ProgressBar,{style:{height:"16px",margin:"8px 0"},progressColor:O.colors.$color_pink_dark,max:parseInt(this.state.amount,10),value:this.state.processed}),Object(g.createElement)("p",{style:{color:O.colors.$palette_grey_text}},Object(v.__)("Optimizing SEO data... This may take a while.","wordpress-seo")))}},{key:"renderErrorAlert",value:function(){return Object(g.createElement)(N,{message:yoastIndexingData.errorMessage,error:this.state.error})}},{key:"renderTool",value:function(){return Object(g.createElement)(g.Fragment,null,this.isState("in_progress")&&this.renderProgressBar(),this.isState("errored")&&this.renderErrorAlert(),this.isState("idle")&&this.state.firstTime&&this.renderFirstIndexationNotice(),this.isState("in_progress")?this.renderStopButton():this.renderStartButton())}},{key:"render",value:function(){return this.settings.disabled?this.renderDisabledTool():this.isState("completed")||0===this.state.amount?Object(g.createElement)(w.Alert,{type:"success"},Object(v.__)("SEO data optimization complete","wordpress-seo")):this.renderTool()}}]),m}(g.Component);F.propTypes={indexingActions:S.a.object,preIndexingActions:S.a.object,indexingStateCallback:S.a.func},F.defaultProps={indexingActions:{},preIndexingActions:{},indexingStateCallback:function(){}},t.a=F},16:function(e,t){function n(e,t,n,r,o,i,s){try{var a=e[i](s),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(r,o)}e.exports=function(e){return function(){var t=this,r=arguments;return new Promise((function(o,i){var s=e.apply(t,r);function a(e){n(s,o,i,a,c,"next",e)}function c(e){n(s,o,i,a,c,"throw",e)}a(void 0)}))}}},167:function(e,t){e.exports=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}},168:function(e,t,n){var r=n(48);function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function i(t,n,s){return o()?e.exports=i=Reflect.construct:e.exports=i=function(e,t,n){var o=[null];o.push.apply(o,t);var i=new(Function.bind.apply(e,o));return n&&r(i,n.prototype),i},i.apply(null,arguments)}e.exports=i},18:function(e,t,n){var r=n(48);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},19:function(e,t,n){var r=n(35),o=n(11);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},192:function(e,t,n){"use strict";n.r(t);var r,o=n(0),i=n(25),s=n.n(i),a=n(155),c={},u={};function l(){r||(r=document.getElementById("yoast-seo-indexing-action")),r&&Object(o.render)(Object(o.createElement)(a.a,{preIndexingActions:c,indexingActions:u}),r)}window.yoast=window.yoast||{},window.yoast.indexing=window.yoast.indexing||{},window.yoast.indexing.registerPreIndexingAction=function(e,t){c[e]=t,l()},window.yoast.indexing.registerIndexingAction=function(e,t){u[e]=t,l()},window.yoast.indexation=window.yoast.indexing,window.yoast.indexation.registerPreIndexationAction=function(e,t){console.warn("Deprecated since 15.1. Use 'window.yoast.indexing.registerPreIndexingAction' instead."),window.yoast.indexing.registerPreIndexingAction(e,t)},window.yoast.indexation.registerIndexationAction=function(e,t){console.warn("Deprecated since 15.1. Use 'window.yoast.indexing.registerIndexingAction' instead."),window.yoast.indexing.registerIndexingAction(e,t)},s()((function(){l()}))},2:function(e,t){e.exports=window.wp.i18n},24:function(e,t){e.exports=window.yoast.styleGuide},25:function(e,t){e.exports=window.jQuery},35:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},4:function(e,t){e.exports=window.yoast.componentsNew},48:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},7:function(e,t){e.exports=window.regeneratorRuntime},9:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}}});