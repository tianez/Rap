!function(e){function t(t){for(var o,u,i=t[0],l=t[1],s=t[2],d=0,f=[];d<i.length;d++)u=i[d],a[u]&&f.push(a[u][0]),a[u]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(c&&c(t);f.length;)f.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=u(u.s=n[0]))}return e}var o={},a={5:0},r=[];function u(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=a[e]=[t,o]});t.push(n[2]=o);var r=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=u.p+""+({}[e]||e)+"-"+{0:"95e9488c0ab832c83d1e",1:"b560bc43d4cffcbf34b0",2:"79d362a1789070bae627",3:"9892682e149bf30dae11"}[e]+".js";var l=setTimeout(function(){s({type:"timeout",target:i})},12e4);function s(t){i.onerror=i.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");u.type=o,u.request=r,n[1](u)}a[e]=void 0}}i.onerror=i.onload=s,r.appendChild(i)}return Promise.all(t)},u.m=e,u.c=o,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},u.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="./dist2/",u.oe=function(e){throw console.error(e),e};var i=window.webpackJsonp=window.webpackJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var c=l;r.push(["k7yg",4]),n()}({"+0q/":function(e,t,n){e.exports=n("AOTY")(54)},"0tvd":function(e,t,n){var o=n("WD0t");"string"==typeof o&&(o=[[e.i,o,""]]);n("DkTI")(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},"7l6G":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n("KN1l")),a=i(n("6F6v")),r=i(n("cDcd")),u=i(n("kcB3"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.children,n=(0,a.default)(e,["children"]);return r.default.createElement("div",(0,o.default)({className:u.default.layout,onClick:function(e){return e.stopPropagation()}},n),t)}},"8A20":function(e,t,n){e.exports=n("AOTY")(0)},"8LOv":function(e,t,n){e.exports=n("AOTY")(65)},AOTY:function(e,t){e.exports=vendor_library},FIq8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=p(n("nbCY")),a=p(n("z+k9")),r=p(n("G+8T")),u=p(n("p02J")),i=p(n("cLmd")),l=p(n("dAt5")),s=p(n("Fo7F"));n("ZsLX"),n("iQjw");var c=p(n("cDcd")),d=(n("8LOv"),n("rRcN"),p(n("7l6G"))),f=p(n("gJnY"));function p(e){return e&&e.__esModule?e:{default:e}}p(n("lBBd"));var A=function(e){function t(){return(0,u.default)(this,t),(0,l.default)(this,(t.__proto__||(0,r.default)(t)).apply(this,arguments))}return(0,s.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.children,r=e.loading;return c.default.createElement(d.default,null,c.default.createElement(o.default,{mode:"light",icon:c.default.createElement(a.default,{type:"left"}),onLeftClick:function(){return window.history.back()}},t),c.default.createElement(f.default,null,r&&n))}}]),t}(c.default.Component);t.default=A},Gto2:function(e,t,n){var o=n("MKsM");"string"==typeof o&&(o=[[e.i,o,""]]);n("DkTI")(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},Ha4D:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e={},t=navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)&&(e.isweixin=!0),/iphone|ipad|ipod/.test(t)?e.isios=!0:/android/.test(t)&&(e.isandroid=!0),e}},IGw9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(n("KN1l")),a=l(n("6F6v")),r=l(n("cDcd")),u=n("rRcN"),i=n("8LOv");function l(e){return e&&e.__esModule?e:{default:e}}t.default=(0,u.contextConsumers)(function(e){return{sessionKey:e.sessionKey}})(function(e){var t=e.component,n=e.sessionKey,u=(0,a.default)(e,["component","sessionKey"]);return n?r.default.createElement(i.Route,(0,o.default)({},u,{component:t})):r.default.createElement(i.Redirect,{to:{pathname:"/login",state:(0,o.default)({},u.location)}})})},MKsM:function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,".asyncComponent_content_3z8aB {\n  text-align: center;\n  line-height: 3rem; }\n","",{version:3,sources:["E:/www/webpack4/src/Libs/Extended/asyncComponent.scss"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,kBAAkB,EAAE",file:"asyncComponent.scss",sourcesContent:[".content {\n  text-align: center;\n  line-height: 3rem; }\n"],sourceRoot:""}]),t.locals={content:"asyncComponent_content_3z8aB"}},U4CV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(n("cDcd")),a=n("8LOv"),r=(l(n("IGw9")),l(n("arND"))),u=l(n("vB5G")),i=l(n("pi4I"));function l(e){return e&&e.__esModule?e:{default:e}}var s=(0,r.default)(function(){return Promise.all([n.e(1),n.e(3)]).then(function(){var e=n("/EKM");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0),c=(0,r.default)(function(){return Promise.all([n.e(0),n.e(2)]).then(function(){var e=n("ztAt");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0);t.default=function(){return o.default.createElement(u.default,null,o.default.createElement(i.default,null,o.default.createElement(a.HashRouter,null,o.default.createElement(a.Switch,null,o.default.createElement(a.Route,{path:"/",exact:!0,component:s}),o.default.createElement(a.Route,{path:"/addressbook",component:c})))))}},WD0t:function(e,t,n){(e.exports=n("3G5m")(!0)).push([e.i,"* {\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 0.1rem;\n  font-size: 62.5%;\n  font-size: 3.125vw;\n  max-width: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  background: #f8f8f8;\n  font-family: 'microsoft yahei', -apple-system-font, Helvetica Neue, sans-serif;\n}\n@media screen and (min-width: 600px) {\n  html {\n    font-size: 0.14rem;\n  }\n}\nbody {\n  background: #f8f8f8 !important;\n  font-size: 0.12rem;\n  width: 100%;\n  overflow-x: hidden;\n}\na,\na:hover {\n  outline: none;\n  text-decoration: none;\n}\ninput,\ntextarea,\n*:focus {\n  outline: none !important;\n}\ninput::-webkit-input-placeholder,\ntextarea::-webkit-input-placeholder {\n  color: #cdcdcd;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: #cdcdcd;\n}\nfieldset,\nimg {\n  border: none;\n}\nimg {\n  max-width: 100%;\n}\naddress,\ncite,\ndfn,\nem,\nvar {\n  font-style: normal;\n}\n/* 重置列表元素 */\nol,\nul {\n  list-style: none;\n}\n/* 重置表格元素 */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/* 重置 hr */\nhr {\n  border: none;\n  height: 0.01rem;\n}\ninput[type=button],\ninput[type=submit] {\n  -webkit-appearance: none;\n  outline: none;\n}\nvideo {\n  -o-object-position: 0 0;\n     object-position: 0 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  /*object-fit:fill;*/\n  width: 100%;\n}\n.clear {\n  clear: both;\n}\n#app {\n  height: 100%;\n}\n.am-navbar.am-navbar-light {\n  border-bottom: 1px solid #eee;\n}\n","",{version:3,sources:["E:/www/webpack4/src/style/app.less"],names:[],mappings:"AAAA;EACE,UAAU;EACV,WAAW;EACX,gDAAgD;EAChD,uBAAuB;CACxB;AACD;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,2BAA2B;EAC3B,+BAA+B;EAC/B,oBAAoB;EACpB,+EAA+E;CAChF;AACD;EACE;IACE,mBAAmB;GACpB;CACF;AACD;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;CACpB;AACD;;EAEE,cAAc;EACd,sBAAsB;CACvB;AACD;;;EAGE,yBAAyB;CAC1B;AACD;;EAEE,eAAe;CAChB;AACD;;EAEE,eAAe;CAChB;AACD;;EAEE,aAAa;CACd;AACD;EACE,gBAAgB;CACjB;AACD;;;;;EAKE,mBAAmB;CACpB;AACD,YAAY;AACZ;;EAEE,iBAAiB;CAClB;AACD,YAAY;AACZ;EACE,0BAA0B;EAC1B,kBAAkB;CACnB;AACD,WAAW;AACX;EACE,aAAa;EACb,gBAAgB;CACjB;AACD;;EAEE,yBAAyB;EACzB,cAAc;CACf;AACD;EACE,wBAAwB;KACrB,qBAAqB;EACxB,uBAAuB;KACpB,oBAAoB;EACvB,oBAAoB;EACpB,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,aAAa;CACd;AACD;EACE,8BAA8B;CAC/B",file:"app.less",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 0.1rem;\n  font-size: 62.5%;\n  font-size: 3.125vw;\n  max-width: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  background: #f8f8f8;\n  font-family: 'microsoft yahei', -apple-system-font, Helvetica Neue, sans-serif;\n}\n@media screen and (min-width: 600px) {\n  html {\n    font-size: 0.14rem;\n  }\n}\nbody {\n  background: #f8f8f8 !important;\n  font-size: 0.12rem;\n  width: 100%;\n  overflow-x: hidden;\n}\na,\na:hover {\n  outline: none;\n  text-decoration: none;\n}\ninput,\ntextarea,\n*:focus {\n  outline: none !important;\n}\ninput::-webkit-input-placeholder,\ntextarea::-webkit-input-placeholder {\n  color: #cdcdcd;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: #cdcdcd;\n}\nfieldset,\nimg {\n  border: none;\n}\nimg {\n  max-width: 100%;\n}\naddress,\ncite,\ndfn,\nem,\nvar {\n  font-style: normal;\n}\n/* 重置列表元素 */\nol,\nul {\n  list-style: none;\n}\n/* 重置表格元素 */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/* 重置 hr */\nhr {\n  border: none;\n  height: 0.01rem;\n}\ninput[type=button],\ninput[type=submit] {\n  -webkit-appearance: none;\n  outline: none;\n}\nvideo {\n  -o-object-position: 0 0;\n     object-position: 0 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  /*object-fit:fill;*/\n  width: 100%;\n}\n.clear {\n  clear: both;\n}\n#app {\n  height: 100%;\n}\n.am-navbar.am-navbar-light {\n  border-bottom: 1px solid #eee;\n}\n"],sourceRoot:""}])},arND:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=v(n("pRfh")),a=v(n("clYf")),r=v(n("G+8T")),u=v(n("p02J")),i=v(n("cLmd")),l=v(n("dAt5")),s=v(n("Fo7F")),c=v(n("nbCY")),d=v(n("z+k9"));n("ZsLX"),n("iQjw");var f=n("cDcd"),p=v(f),A=v(n("7l6G")),m=v(n("gJnY")),h=v(n("Gto2"));function v(e){return e&&e.__esModule?e:{default:e}}var g=function(){return p.default.createElement("div",null,"组件加载中...")},C=function(){return p.default.createElement(A.default,null,p.default.createElement(c.default,{mode:"light",icon:p.default.createElement(d.default,{type:"left"}),onLeftClick:function(){return window.history.back()}}),p.default.createElement(m.default,null,p.default.createElement("div",{className:h.default.content},p.default.createElement(d.default,{type:"loading",size:"lg"}))))};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){function c(e){(0,u.default)(this,c);var t=(0,l.default)(this,(c.__proto__||(0,r.default)(c)).call(this,e));return t.state={component:null},t}return(0,s.default)(c,n),(0,i.default)(c,[{key:"componentDidMount",value:(d=(0,a.default)(o.default.mark(function t(){var n,a;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,a=n.default,this.setState({component:a});case 5:case"end":return t.stop()}},t,this)})),function(){return d.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?p.default.createElement(e,this.props):t?p.default.createElement(C,null):p.default.createElement(g,null)}}]),c;var d}(f.Component)}},cDcd:function(e,t){e.exports=React},faye:function(e,t){e.exports=ReactDOM},gJnY:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n("KN1l")),a=i(n("6F6v")),r=i(n("cDcd")),u=i(n("kcB3"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.children,n=(0,a.default)(e,["children"]);return r.default.createElement("div",(0,o.default)({className:u.default.content},n),t)}},k7yg:function(e,t,n){"use strict";var o=d(n("Yo5m"));n("0tvd");var a=d(n("cDcd")),r=d(n("faye")),u=d(n("ub5t")),i=d(n("pBup")),l=d(n("Ha4D")),s=n("rRcN"),c=d(n("U4CV"));function d(e){return e&&e.__esModule?e:{default:e}}(0,o.default)(window,{Request:i.default,Immutable:u.default,$arr:(0,u.default)([]),$obj:(0,u.default)({}),userAgents:(0,l.default)()}),window.auths=["dashboard","organization","user","noticemanagement"],localStorage.userName="admin",localStorage.userId="57b2093a1e8945c79118b3ad5a952441",localStorage.orgId="2f48b9f151cf4f48b01030624cd7aac7",r.default.render(a.default.createElement(s.Provider,{value:{_site_id:1,_site_name:"云上视界科技有限公司",_logoText:"云上视界科技有限公司OA系统",_logoSrc:null,_menus:{}}},a.default.createElement(c.default,null)),document.getElementById("app"))},kcB3:function(e,t,n){var o=n("nmgi");"string"==typeof o&&(o=[[e.i,o,""]]);n("DkTI")(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},lBBd:function(e,t,n){var o=n("n9HH");"string"==typeof o&&(o=[[e.i,o,""]]);n("DkTI")(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},n9HH:function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,".nomatch_nomatch_2Jwma {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #fff; }\n","",{version:3,sources:["E:/www/webpack4/src/pages/Nomatch/nomatch.scss"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,iBAAiB,EAAE",file:"nomatch.scss",sourcesContent:[".nomatch {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  background: #fff; }\n"],sourceRoot:""}]),t.locals={nomatch:"nomatch_nomatch_2Jwma"}},nmgi:function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,".Layout_layout_3sdHK {\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99;\n  overflow: hidden auto; }\n\n.Layout_content_3gTA7 {\n  position: relative;\n  flex: 1;\n  overflow-y: auto;\n  background: #f1f1f1; }\n","",{version:3,sources:["E:/www/webpack4/src/Libs/Components/Layout/Layout.scss"],names:[],mappings:"AAAA;EACE,iBAAiB;EACjB,cAAc;EACd,uBAAuB;EACvB,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,sBAAsB,EAAE;;AAE1B;EACE,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;EACjB,oBAAoB,EAAE",file:"Layout.scss",sourcesContent:[".layout {\n  background: #fff;\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 99;\n  overflow: hidden auto; }\n\n.content {\n  position: relative;\n  flex: 1;\n  overflow-y: auto;\n  background: #f1f1f1; }\n"],sourceRoot:""}]),t.locals={layout:"Layout_layout_3sdHK",content:"Layout_content_3gTA7"}},pBup:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=u(n("heMk")),a=u(n("KN1l")),r=u(n("zr5I"));function u(e){return e&&e.__esModule?e:{default:e}}var i=r.default.CancelToken;r.default.defaults.timeout=1e4,r.default.defaults.dataType="json";var l=r.default.create();l.interceptors.request.use(function(e){return 0!=e.url.indexOf("https://")&&0!=e.url.indexOf("http://")&&(e.url=AppConfig.ApiUrl+e.url),e.cancelToken=new i(function(e){window.axiosCancel=e}),e.params=(0,a.default)({timestamp:Date.parse(new Date),orgId:localStorage.orgId,orgid:localStorage.orgId},e.params),e.headers=(0,a.default)({userId:localStorage.userId},e.headers),e}),l.interceptors.response.use(function(e){return(0,a.default)({success:!0,message:e.data.msg},e.data)},function(e){var t,n={};if(e.response){var r=e.response,u="object"!=(void 0===(t=r.data)?"undefined":(0,o.default)(t))||"[object object]"!=Object.prototype.toString.call(t).toLowerCase()||t.length?{}:r.data;n=(0,a.default)({message:u.message||u.msg||r.statusText,status:r.status},u)}else e.request?n.message="网络错误，请检查你的网络状态":console.log("Error",e.message);return 401==n.status&&(localStorage.removeItem("authorization"),store.dispatch("user/init",{})),n.success=!1,console.log(n),n}),t.default=l},pi4I:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=h(n("TbGf")),r=h(n("pRfh")),u=h(n("KDvK")),i=h(n("clYf")),l=h(n("G+8T")),s=h(n("p02J")),c=h(n("cLmd")),d=h(n("dAt5")),f=h(n("Fo7F"));n("IsDv"),n("dTC+");var p=h(n("cDcd")),A=n("rRcN"),m=h(n("FIq8"));function h(e){return e&&e.__esModule?e:{default:e}}var v=(0,A.contextConsumers)(function(e){return{orgInfo:e.orgInfo}})(o=function(e){function t(){var e,n,o,a;(0,s.default)(this,t);for(var r=arguments.length,u=Array(r),i=0;i<r;i++)u[i]=arguments[i];return n=o=(0,d.default)(this,(e=t.__proto__||(0,l.default)(t)).call.apply(e,[this].concat(u))),o.state={loading:!1},a=n,(0,d.default)(o,a)}return(0,f.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.getOrgInfo()}},{key:"getOrgInfo",value:function(){var e=(0,i.default)(r.default.mark(function e(){var t,n,o,a,i,l;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return u.default.loading("机构信息及权限获取中...",0),e.next=3,Request("relation/findOrg",{params:{userId:localStorage.userId}});case 3:if(!(t=e.sent).success){e.next=19;break}return u.default.hide(),n=localStorage.organizationId,o=t.data.orgList.list,-1==(a=o.findIndex(function(e){return e.orgId==n}))&&(a=0),(i=o[a])&&(n=i.orgId,localStorage.organizationId=n,localStorage.organizationName=i.orgName),e.next=14,Request("role/selectPermissionByUserId",{params:{id:localStorage.userId}});case 14:(l=e.sent).success&&(window.auths=l.data.permission.menus.map(function(e){return e.code})),this.props.dispatch.set({orgs:o,orgId:n,orgInfo:i}),e.next=23;break;case 19:if(this.setState({loading:!0}),6666!=t.errorCode){e.next=22;break}return e.abrupt("return");case 22:u.default.info(t.message);case 23:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.orgInfo,n=e.children;if(t)return n;var o=this.state.loading;return p.default.createElement(m.default,{title:"登录",loading:o},p.default.createElement(a.default,{img:p.default.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"}),title:"你还未加入任何机构"}))}}]),t}(p.default.Component))||o;t.default=v},rRcN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Consumer=t.contextConsumers=t.contextConsumer=t.Provider=void 0;var o=m(n("KN1l")),a=m(n("pRfh")),r=m(n("clYf")),u=m(n("G+8T")),i=m(n("p02J")),l=m(n("cLmd")),s=m(n("dAt5")),c=m(n("Fo7F")),d=n("cDcd"),f=m(d),p=m(n("ub5t")),A=m(n("+0q/"));function m(e){return e&&e.__esModule?e:{default:e}}var h=(0,d.createContext)(),v=t.Provider=function(e){function t(e){var n=this;(0,i.default)(this,t);var o,l=(0,s.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));l.callBack=(o=(0,r.default)(a.default.mark(function e(t){var o;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(l.state.data);case 2:o=e.sent,l.setContext(o);case 4:case"end":return e.stop()}},e,n)})),function(e){return o.apply(this,arguments)}),l.setContext=function(e){var t=l.state.data.merge((0,p.default)(e));l.setState({data:t})},l.setInContext=function(e,t){"string"==typeof e&&(e=[e]),t=l.state.data.setIn(e,(0,p.default)(t)),l.setState({data:t})},l.handleHashChange=function(){var e=window.location.href.split("?")[1],t={};e&&(t=A.default.parse(e),l.setContext({query:t}))};var c=e.value||{};return c.query={},l.state={data:(0,p.default)(c)},l.dispatch={callBack:l.callBack,set:l.setContext,setIn:l.setInContext},l}return(0,c.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",this.handleHashChange,!1),setTimeout(function(){e.handleHashChange()},10)}},{key:"render",value:function(){var e=this.props.children,t={context:this.state.data,dispatch:this.dispatch};return f.default.createElement(h.Provider,{value:t},e)}}]),t}(d.Component),g=t.contextConsumer=function(e){return function(t){function n(){return(0,i.default)(this,n),(0,s.default)(this,(n.__proto__||(0,u.default)(n)).apply(this,arguments))}return(0,c.default)(n,t),(0,l.default)(n,[{key:"render",value:function(){var t=this;return f.default.createElement(h.Consumer,null,function(n){return f.default.createElement(e,(0,o.default)({},t.props,n))})}}]),n}(f.default.Component)},C=function(e){function t(){return(0,i.default)(this,t),(0,s.default)(this,(t.__proto__||(0,u.default)(t)).apply(this,arguments))}return(0,c.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this.props,t=e._component,n=e.props,a=e.context,r=e.dispatch;return f.default.createElement(t,(0,o.default)({},n,a,{dispatch:r}))}}]),t}(d.Component),E=t.contextConsumers=function(e){return function(t){return function(n){function o(){return(0,i.default)(this,o),(0,s.default)(this,(o.__proto__||(0,u.default)(o)).apply(this,arguments))}return(0,c.default)(o,n),(0,l.default)(o,[{key:"render",value:function(){var n=this;return f.default.createElement(h.Consumer,null,function(o){var a=e?e(o.context):null;return f.default.createElement(C,{props:n.props,context:a,dispatch:o.dispatch,_component:t})})}}]),o}(f.default.Component)}};t.Consumer=h.Consumer,t.default=(0,o.default)({},h,{Provider:v,contextConsumer:g,contextConsumers:E})},ub5t:function(e,t,n){e.exports=n("AOTY")(66)},vB5G:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=A(n("TbGf")),r=A(n("KDvK")),u=A(n("G+8T")),i=A(n("p02J")),l=A(n("cLmd")),s=A(n("dAt5")),c=A(n("Fo7F"));n("IsDv"),n("dTC+");var d=A(n("cDcd")),f=n("rRcN"),p=A(n("FIq8"));function A(e){return e&&e.__esModule?e:{default:e}}var m=(0,f.contextConsumers)(function(e){return{sessionKey:e.sessionKey}})(o=function(e){function t(){var e,n,o,a;(0,i.default)(this,t);for(var r=arguments.length,l=Array(r),c=0;c<r;c++)l[c]=arguments[c];return n=o=(0,s.default)(this,(e=t.__proto__||(0,u.default)(t)).call.apply(e,[this].concat(l))),o.state={loading:!1},o.login=function(){YSSJ.login()},a=n,(0,s.default)(o,a)}return(0,c.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){r.default.hide(),this.props.dispatch.set({sessionKey:"sessionKey"})}},{key:"render",value:function(){var e=this.props,t=e.sessionKey,n=e.children;if(t)return n;var o=this.state.loading;return d.default.createElement(p.default,{title:"登录",loading:o},d.default.createElement(a.default,{img:d.default.createElement("img",{src:"https://gw.alipayobjects.com/zos/rmsportal/GIyMDJnuqmcqPLpHCSkj.svg"}),title:"你还未登录",message:d.default.createElement("div",{onClick:this.login},"前往登录")}))}}]),t}(d.default.Component))||o;t.default=m},zr5I:function(e,t){e.exports=axios}});