!function(e){function t(t){for(var o,i,u=t[0],l=t[1],c=t[2],s=0,f=[];s<u.length;s++)i=u[s],a[i]&&f.push(a[i][0]),a[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(d&&d(t);f.length;)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],o=!0,u=1;u<n.length;u++){var l=n[u];0!==a[l]&&(o=!1)}o&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},a={15:0},r=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,o){n=a[e]=[t,o]});t.push(n[2]=o);var r=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=i.p+""+({}[e]||e)+"-"+{0:"c16e7573800fca61560e",1:"557d66b1600eef09f316",2:"5cf61d672a7cdb84433c",3:"a7d8756a094132a6c825",4:"af8ea2ce68451516f98f",5:"af122aa937f19563718f",6:"feb26a8a8e1de0b8d05c",7:"de7072e9b75ac06e0567",8:"40e14e52d927815f60e0",9:"7d4659e005a1613f2ef7",10:"a51a9d061fcb345412f0",11:"3307f1d99119c694ba80",12:"f359034320c4314cfd6e",14:"5743a13c9a8a61bff771"}[e]+".js";var l=setTimeout(function(){c({type:"timeout",target:u})},12e4);function c(t){u.onerror=u.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+r+")");i.type=o,i.request=r,n[1](i)}a[e]=void 0}}u.onerror=u.onload=c,r.appendChild(u)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./dist2/",i.oe=function(e){throw console.error(e),e};var u=window.webpackJsonp=window.webpackJsonp||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var d=l;r.push(["k7yg",13]),n()}({"+0q/":function(e,t,n){e.exports=n("AOTY")(54)},"/EKM":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=g(n("pRfh")),r=g(n("clYf")),i=g(n("G+8T")),u=g(n("p02J")),l=g(n("cLmd")),c=g(n("dAt5")),d=g(n("Fo7F")),s=n("cDcd"),f=g(s),p=n("8LOv"),m=(g(n("arND")),g(n("l7WU"))),A=g(n("aTPC")),h=(g(n("jZFs")),g(n("GRcE"))),v=n("McZH");function g(e){return e&&e.__esModule?e:{default:e}}var C=(0,n("rRcN").contextConsumers)(function(e){return{init:e.init}})(o=function(e){function t(e){var n=this;(0,u.default)(this,t);var o=(0,c.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return o.handleDb=(0,r.default)(a.default.mark(function e(){var t,o,r;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,db.friends.add({name:"Camilla",age:25});case 2:return t=e.sent,console.log(t),e.next=6,db.friends.put({id:100,name:"Foo22",age:43});case 6:return o=e.sent,console.log(o),e.next=10,db.friends.where("age").above(25).toArray();case 10:r=e.sent,console.log(r);case 12:case"end":return e.stop()}},e,n)})),o.state={hidden:!1,fullScreen:!1,show:!1,items:[{id:1,text:"Buy eggs"},{id:2,text:"Pay bills"},{id:3,text:"Invite friends over"},{id:4,text:"Fix the TV"}]},o}return(0,d.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){var e=(0,r.default)(a.default.mark(function e(){var t;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t={where:{},skip:0,limit:20},h.default.get("article",t,function(e,t){var n=JSON.parse(t.text);console.log(n)}.bind(this));case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.props,n=(t.init,t.history,t.location,this.state),o=n.items,a=n.show;return f.default.createElement(A.default,{title:"首页",selectedTab:"home"},f.default.createElement(m.default,{style:{height:"100%",background:"#fff"}},"首页",f.default.createElement("button",{className:"remove-btn",onClick:function(){e.setState(function(e){return{show:!e.show}})}},"点击"),f.default.createElement(p.Link,{to:"/home/1"},"home1"),f.default.createElement("div",null,f.default.createElement(p.Link,{to:"/login"},"登录")),f.default.createElement(p.Link,{to:"/home/2"},"home2"),f.default.createElement(v.TransitionGroup,{className:"todo-list"},a&&f.default.createElement(v.CSSTransition,{key:"show",timeout:5e3,classNames:"fade"},f.default.createElement("div",null,"show")),o.map(function(t){var n=t.id,o=t.text;return f.default.createElement(v.CSSTransition,{key:n,timeout:5e3,classNames:"fade"},f.default.createElement("div",null,f.default.createElement("button",{className:"remove-btn",onClick:function(){e.setState(function(e){return{items:e.items.filter(function(e){return e.id!==n})}})}},"×"),o))})),f.default.createElement("input",{type:"file",name:"",id:""})))}}]),t}(s.Component))||o;t.default=C},"/aHK":function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,".Loading_loading_qSiSO {\n  text-align: center;\n  background: #fff;\n  padding: 0.15rem 0; }\n\n.Loading_loadingTitle_36lC2 {\n  color: #666;\n  line-height: 0.24rem; }\n","",{version:3,sources:["E:/www/webpack4/src/Libs/Components/Layout/Loading.scss"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB,EAAE;;AAEvB;EACE,YAAY;EACZ,qBAAqB,EAAE",file:"Loading.scss",sourcesContent:[".loading {\n  text-align: center;\n  background: #fff;\n  padding: 0.15rem 0; }\n\n.loadingTitle {\n  color: #666;\n  line-height: 0.24rem; }\n"],sourceRoot:""}]),t.locals={loading:"Loading_loading_qSiSO",loadingTitle:"Loading_loadingTitle_36lC2"}},"0Lx+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n("cDcd")),a=i(n("l7WU")),r=i(n("aTPC"));function i(e){return e&&e.__esModule?e:{default:e}}var u=(0,i(n("arND")).default)(function(){return Promise.all([n.e(2),n.e(6)]).then(function(){var e=n("5ym+");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})});t.default=function(e){return o.default.createElement(r.default,{title:"服务",border:!1,selectedTab:"service"},o.default.createElement(a.default,null,o.default.createElement(u,e)))}},"0tvd":function(e,t,n){var o=n("WD0t");"string"==typeof o&&(o=[[e.i,o,""]]);n("DkTI")(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},"1DQC":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n("cDcd")),a=i(n("l7WU")),r=i(n("aTPC"));function i(e){return e&&e.__esModule?e:{default:e}}var u=(0,i(n("arND")).default)(function(){return n.e(3).then(function(){var e=n("qp63");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})});t.default=function(e){return o.default.createElement(r.default,{title:"新闻",selectedTab:"news"},o.default.createElement(a.default,null,o.default.createElement(u,e)))}},"6K6h":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=A(n("cDcd")),a=n("8LOv"),r=(A(n("IGw9")),A(n("arND"))),i=A(n("/EKM")),u=A(n("1DQC")),l=A(n("jPcL")),c=A(n("D4se")),d=A(n("0Lx+")),s=A(n("yhP6")),f=A(n("l7WU")),p=A(n("PUdj")),m=n("rRcN");function A(e){return e&&e.__esModule?e:{default:e}}var h=(0,r.default)(function(){return Promise.all([n.e(0),n.e(12)]).then(function(){var e=n("O3NY");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0),v=(0,r.default)(function(){return n.e(11).then(function(){var e=n("CO8x");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0),g=(0,r.default)(function(){return n.e(10).then(function(){var e=n("JShT");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0),C=(0,r.default)(function(){return n.e(9).then(function(){var e=n("5YwG");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0),b=(0,r.default)(function(){return n.e(8).then(function(){var e=n("/q4T");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0),E=(0,r.default)(function(){return Promise.all([n.e(1),n.e(7)]).then(function(){var e=n("9cwu");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0);t.default=(0,m.contextConsumers)(function(e){return{onLine:e.onLine}})(function(e){var t=e.location,n=e.redUrl,r=e.onLine;return o.default.createElement(s.default,null,!r&&o.default.createElement(p.default,null,"网络连接不可用"),o.default.createElement(f.default,null,o.default.createElement(a.Switch,{location:t},o.default.createElement(a.Route,{path:"/home",component:i.default}),o.default.createElement(a.Route,{path:"/news",exact:!0,component:u.default}),o.default.createElement(a.Route,{path:"/news/:id",exact:!0,component:g}),o.default.createElement(a.Route,{path:"/friend",exact:!0,component:l.default}),o.default.createElement(a.Route,{path:"/friend/add",exact:!0,component:E}),o.default.createElement(a.Route,{path:"/login",component:h}),o.default.createElement(a.Route,{path:"/ucenter",component:c.default}),o.default.createElement(a.Route,{path:"/service",component:d.default}),o.default.createElement(a.Route,{path:"/qrcode",component:v}),o.default.createElement(a.Route,{path:"/setting",component:C}),o.default.createElement(a.Route,{path:"/iframe",component:b}),o.default.createElement(a.Redirect,{path:"/",exact:!0,to:n}))))})},"8A20":function(e,t,n){e.exports=n("AOTY")(0)},"8LOv":function(e,t,n){e.exports=n("AOTY")(65)},"8RPl":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=A(n("NpIb")),r=A(n("G+8T")),i=A(n("p02J")),u=A(n("cLmd")),l=A(n("dAt5")),c=A(n("Fo7F"));n("Lat2");var d=n("cDcd"),s=A(d),f=A(n("nv+6")),p=n("rRcN"),m=n("8LOv");function A(e){return e&&e.__esModule?e:{default:e}}var h=(0,p.contextConsumers)(function(e){return{footerTabs:e.getIn(["init","footerTabs"])||$arr}})(o=(0,m.withRouter)(o=function(e){function t(){var e,n,o,a;(0,i.default)(this,t);for(var u=arguments.length,c=Array(u),d=0;d<u;d++)c[d]=arguments[d];return n=o=(0,l.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(c))),o.handlePress=function(e){if(0==e.indexOf("https://")||0==e.indexOf("http://"))return o.props.history.push("/iframe?outlink="+e);o.props.history.replace("/"+e)},a=n,(0,l.default)(o,a)}return(0,c.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.selectedTab,o=t.footerTabs;return s.default.createElement("div",null,s.default.createElement(a.default,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white",style:{height:"0.5rem"},noRenderContent:!0},o.map(function(t){return s.default.createElement(a.default.Item,{title:t.title,key:t.key,icon:s.default.createElement("div",{className:t.icon+" "+f.default.icon}),selectedIcon:s.default.createElement("div",{className:t.icon+" "+f.default.selectedIcon}),badge:t.badge,dot:t.dot,selected:n===t.key,onPress:function(){return e.handlePress(t.key)}})})))}}]),t}(d.Component))||o)||o;t.default=h},AOKV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n("uB8n")),a=i(n("KN1l")),r=i(n("zr5I"));function i(e){return e&&e.__esModule?e:{default:e}}r.default.defaults.timeout=1e4,r.default.defaults.dataType="json";var u=r.default.create();u.interceptors.request.use(function(e){e.url="https://d.apicloud.com/mcm/api/"+e.url;var t=Date.now(),n=SHA1("A6065581285444UZ7F7872C0-8EB2-D116-C9AF-AF02A4B65BA0UZ"+t)+"."+t;return e.headers=(0,a.default)({},e.headers,{authorization:localStorage.authorization||"","X-APICloud-AppId":"A6065581285444","X-APICloud-AppKey":n}),e.params&&e.params.filter&&(e.params=(0,a.default)({},e.params,{filter:(0,o.default)(e.params.filter)})),e}),t.default=u},AOTY:function(e,t){e.exports=vendor_library},APrv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n("z+k9")),a=s(n("G+8T")),r=s(n("p02J")),i=s(n("cLmd")),u=s(n("dAt5")),l=s(n("Fo7F"));n("iQjw");var c=n("cDcd"),d=s(c);function s(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){var e,n,o,i;(0,r.default)(this,t);for(var l=arguments.length,c=Array(l),d=0;d<l;d++)c[d]=arguments[d];return n=o=(0,u.default)(this,(e=t.__proto__||(0,a.default)(t)).call.apply(e,[this].concat(c))),o.handleBack=function(){window.history.back()},i=n,(0,u.default)(o,i)}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return d.default.createElement(o.default,{key:"back",type:"left",onClick:this.handleBack})}}]),t}(c.Component);t.default=f},D4se:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n("cDcd")),a=i(n("l7WU")),r=i(n("aTPC"));function i(e){return e&&e.__esModule?e:{default:e}}var u=(0,i(n("arND")).default)(function(){return n.e(5).then(function(){var e=n("gXhI");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})});t.default=function(e){var t=e.history;return o.default.createElement(r.default,{title:"个人中心",border:!1,selectedTab:"ucenter"},o.default.createElement(a.default,null,o.default.createElement(u,{history:t})))}},GRcE:function(e,t,n){"use strict";var o=r(n("uB8n")),a=r(n("WKT2"));function r(e){return e&&e.__esModule?e:{default:e}}var i="A6065581285444",u="7F7872C0-8EB2-D116-C9AF-AF02A4B65BA0",l="https://d.apicloud.com/mcm/api/",c={get:function(e,t,n){if(1==window.navigator.onLine){var r=Date.now(),c=SHA1(i+"UZ"+u+"UZ"+r)+"."+r;a.default.get(l+e).set("X-APICloud-AppId",i).set("X-APICloud-AppKey",c).set("authorization","").query({filter:(0,o.default)(t)}).end(n)}else console.log("网络出现故障！")},post:function(e,t,n){if(1==window.navigator.onLine){var o=Date.now(),r=SHA1(i+"UZ"+u+"UZ"+o)+"."+o,c=storedb("user").find()?storedb("user").find()[0].id:"";a.default.post(l+e).set("X-APICloud-AppId",i).set("X-APICloud-AppKey",r).set("authorization",c).send(t).end(n)}else console.log("网络出现故障！")}};e.exports=c},HAuW:function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,".Footer_icon_3PZg5,\n.Footer_selectedIcon_1SCRD {\n  width: 0.22rem;\n  height: 0.22rem;\n  font-size: 0.22rem; }\n\n.Footer_selectedIcon_1SCRD {\n  color: #108ee9; }\n","",{version:3,sources:["E:/www/webpack4/src/pages/Layout/Footer.scss"],names:[],mappings:"AAAA;;EAEE,eAAe;EACf,gBAAgB;EAChB,mBAAmB,EAAE;;AAEvB;EACE,eAAe,EAAE",file:"Footer.scss",sourcesContent:[".icon,\n.selectedIcon {\n  width: 0.22rem;\n  height: 0.22rem;\n  font-size: 0.22rem; }\n\n.selectedIcon {\n  color: #108ee9; }\n"],sourceRoot:""}]),t.locals={icon:"Footer_icon_3PZg5",selectedIcon:"Footer_selectedIcon_1SCRD"}},Ha4D:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e={},t=navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)&&(e.isweixin=!0),/iphone|ipad|ipod/.test(t)?e.isios=!0:/android/.test(t)&&(e.isandroid=!0),e}},IGw9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(n("KN1l")),a=l(n("6F6v")),r=l(n("cDcd")),i=n("rRcN"),u=n("8LOv");function l(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.contextConsumers)(function(e){return{sessionKey:e.sessionKey}})(function(e){var t=e.component,n=e.sessionKey,i=(0,a.default)(e,["component","sessionKey"]);return n?r.default.createElement(u.Route,(0,o.default)({},i,{component:t})):r.default.createElement(u.Redirect,{to:{pathname:"/login",state:(0,o.default)({},i.location)}})})},LSyP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,a=A(n("uB8n")),r=A(n("G+8T")),i=A(n("p02J")),u=A(n("cLmd")),l=A(n("dAt5")),c=A(n("Fo7F")),d=n("cDcd"),s=A(d),f=A(n("PiFF")),p=A(n("kqMm")),m=A(n("6K6h"));function A(e){return e&&e.__esModule?e:{default:e}}var h={redUrl:"/home",footerTabs:[{title:"首页",key:"home",icon:"iconfont icon-shouye",badge:1},{title:"新闻",key:"news",icon:"iconfont icon-news"},{title:"服务",key:"service",icon:"iconfont icon-gerenzhongxin"},{title:"好友",key:"friend",icon:"iconfont icon-tongxun",dot:!0},{title:"个人中心",key:"ucenter",icon:"iconfont icon-gerenzhongxin"}]},v=(0,n("rRcN").contextConsumers)(function(e){return{redUrl:e.getIn(["init","redUrl"]),isChangeChannal:e.isChangeChannal}})(o=function(e){function t(e){(0,i.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.handleChangeOnline=function(){n.props.dispatch.set({onLine:navigator.onLine})},n.handleChangeConnection=function(){var e=navigator.connection,t="none";"wifi"==e.type?t="wifi":"cellular"==e.type&&(t=e.effectiveType?e.effectiveType:"cellular"),n.props.dispatch.set({connectionType:t})},n.getCurrentPosition=function(){navigator.geolocation.getCurrentPosition(n.success,n.error,{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},n.success=function(e){var t=e.coords;console.log("Your current position is:"),console.log("Latitude : "+t.latitude),console.log("Longitude: "+t.longitude),console.log("More or less "+t.accuracy+" meters.")},n.error=function(e){console.warn("ERROR("+e.code+"): "+e.message)},n.getInit=function(){n.props.footerTabs,n.setState({loading:!0,error:!1}),setTimeout(function(){n.setState({loading:!1,error:!0}),localStorage.init=(0,a.default)(h),n.props.dispatch.set({init:h})},3e3)},n.state={loading:!0,error:!1},n}return(0,c.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("offline",this.handleChangeOnline),window.addEventListener("online",this.handleChangeOnline),navigator.connection.addEventListener("typechange",this.handleChangeConnection),this.handleChangeConnection(),this.getInit()}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.redUrl,n=e.isChangeChannal;t&&n&&(this.props.history.push(t),this.props.dispatch.set({isChangeChannal:!1}))}},{key:"render",value:function(){var e=this.props,t=e.redUrl,n=e.location,o=this.state,a=o.error,r=o.loading;return t?s.default.createElement(m.default,{location:n,redUrl:t}):s.default.createElement(f.default,null,s.default.createElement(p.default,{loading:r,loadingTitle:"初始化中...",error:a,errorAction:s.default.createElement("div",{onClick:this.getInit},"初始化失败，点击重试")}))}}]),t}(d.Component))||o;t.default=v},NbhV:function(e,t,n){e.exports=n("AOTY")(57)},PUdj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=a(n("cDcd"));function a(e){return e&&e.__esModule?e:{default:e}}var r=a(n("NbhV")).default.div.withConfig({displayName:"Toptip__ToptipView"})(["padding:0.1rem;font-size:0.16rem;text-align:center;background:#f1f1f1;color:#f00;"]);t.default=function(e){var t=e.children;return o.default.createElement(r,null,t)}},PiFF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=d(n("z+k9")),a=d(n("nbCY"));n("iQjw"),n("ZsLX");var r=d(n("cDcd")),i=d(n("NbhV")),u=d(n("yhP6")),l=d(n("l7WU")),c=d(n("APrv"));function d(e){return e&&e.__esModule?e:{default:e}}var s=i.default.div.withConfig({displayName:"LoadingFarmeWork__LoadingView"})(["text-align:center;line-height:30rem;"]);t.default=function(e){var t=e.children;return r.default.createElement(u.default,null,r.default.createElement(a.default,{mode:"light",icon:r.default.createElement(c.default,null)}),r.default.createElement(l.default,null,t||r.default.createElement(s,null,r.default.createElement(o.default,{type:"loading",size:"lg"}))))}},WD0t:function(e,t,n){(e.exports=n("3G5m")(!0)).push([e.i,"* {\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 0.1rem;\n  font-size: 62.5%;\n  font-size: 3.125vw;\n  max-width: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  background: #f8f8f8;\n  font-family: 'microsoft yahei', -apple-system-font, Helvetica Neue, sans-serif;\n}\n@media screen and (min-width: 600px) {\n  html {\n    font-size: 0.14rem;\n  }\n}\nbody {\n  background: #f8f8f8 !important;\n  font-size: 0.12rem;\n  width: 100%;\n  overflow-x: hidden;\n}\na,\na:hover {\n  outline: none;\n  text-decoration: none;\n}\ninput,\ntextarea,\n*:focus {\n  outline: none !important;\n}\ninput::-webkit-input-placeholder,\ntextarea::-webkit-input-placeholder {\n  color: #cdcdcd;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: #cdcdcd;\n}\nfieldset,\nimg {\n  border: none;\n}\nimg {\n  max-width: 100%;\n}\naddress,\ncite,\ndfn,\nem,\nvar {\n  font-style: normal;\n}\n/* 重置列表元素 */\nol,\nul {\n  list-style: none;\n}\n/* 重置表格元素 */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/* 重置 hr */\nhr {\n  border: none;\n  height: 0.01rem;\n}\ninput[type=button],\ninput[type=submit] {\n  -webkit-appearance: none;\n  outline: none;\n}\nvideo {\n  -o-object-position: 0 0;\n     object-position: 0 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  /*object-fit:fill;*/\n  width: 100%;\n}\n.clear {\n  clear: both;\n}\n#app {\n  height: 100%;\n}\n.am-tabs-horizontal .am-tabs-pane-wrap-inactive {\n  height: auto !important;\n  overflow-y: auto !important;\n}\n","",{version:3,sources:["E:/www/webpack4/src/style/app.less"],names:[],mappings:"AAAA;EACE,UAAU;EACV,WAAW;EACX,gDAAgD;EAChD,uBAAuB;CACxB;AACD;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,2BAA2B;EAC3B,+BAA+B;EAC/B,oBAAoB;EACpB,+EAA+E;CAChF;AACD;EACE;IACE,mBAAmB;GACpB;CACF;AACD;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;CACpB;AACD;;EAEE,cAAc;EACd,sBAAsB;CACvB;AACD;;;EAGE,yBAAyB;CAC1B;AACD;;EAEE,eAAe;CAChB;AACD;;EAEE,eAAe;CAChB;AACD;;EAEE,aAAa;CACd;AACD;EACE,gBAAgB;CACjB;AACD;;;;;EAKE,mBAAmB;CACpB;AACD,YAAY;AACZ;;EAEE,iBAAiB;CAClB;AACD,YAAY;AACZ;EACE,0BAA0B;EAC1B,kBAAkB;CACnB;AACD,WAAW;AACX;EACE,aAAa;EACb,gBAAgB;CACjB;AACD;;EAEE,yBAAyB;EACzB,cAAc;CACf;AACD;EACE,wBAAwB;KACrB,qBAAqB;EACxB,uBAAuB;KACpB,oBAAoB;EACvB,oBAAoB;EACpB,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,aAAa;CACd;AACD;EACE,wBAAwB;EACxB,4BAA4B;CAC7B",file:"app.less",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 0.1rem;\n  font-size: 62.5%;\n  font-size: 3.125vw;\n  max-width: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  background: #f8f8f8;\n  font-family: 'microsoft yahei', -apple-system-font, Helvetica Neue, sans-serif;\n}\n@media screen and (min-width: 600px) {\n  html {\n    font-size: 0.14rem;\n  }\n}\nbody {\n  background: #f8f8f8 !important;\n  font-size: 0.12rem;\n  width: 100%;\n  overflow-x: hidden;\n}\na,\na:hover {\n  outline: none;\n  text-decoration: none;\n}\ninput,\ntextarea,\n*:focus {\n  outline: none !important;\n}\ninput::-webkit-input-placeholder,\ntextarea::-webkit-input-placeholder {\n  color: #cdcdcd;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: #cdcdcd;\n}\nfieldset,\nimg {\n  border: none;\n}\nimg {\n  max-width: 100%;\n}\naddress,\ncite,\ndfn,\nem,\nvar {\n  font-style: normal;\n}\n/* 重置列表元素 */\nol,\nul {\n  list-style: none;\n}\n/* 重置表格元素 */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/* 重置 hr */\nhr {\n  border: none;\n  height: 0.01rem;\n}\ninput[type=button],\ninput[type=submit] {\n  -webkit-appearance: none;\n  outline: none;\n}\nvideo {\n  -o-object-position: 0 0;\n     object-position: 0 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  /*object-fit:fill;*/\n  width: 100%;\n}\n.clear {\n  clear: both;\n}\n#app {\n  height: 100%;\n}\n.am-tabs-horizontal .am-tabs-pane-wrap-inactive {\n  height: auto !important;\n  overflow-y: auto !important;\n}\n"],sourceRoot:""}])},aTPC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(n("nbCY"));n("ZsLX");var a=l(n("cDcd")),r=l(n("yhP6")),i=(l(n("l7WU")),l(n("8RPl"))),u=l(n("kcRE"));function l(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.headerShow,n=void 0===t||t,l=e.border,c=void 0===l||l,d=e.title,s=e.selectedTab,f=e.children;return a.default.createElement(r.default,null,n&&a.default.createElement(o.default,{mode:"light",className:c&&u.default.header},d),f,a.default.createElement(i.default,{selectedTab:s}))}},arND:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=p(n("pRfh")),a=p(n("clYf")),r=p(n("G+8T")),i=p(n("p02J")),u=p(n("cLmd")),l=p(n("dAt5")),c=p(n("Fo7F")),d=n("cDcd"),s=p(d),f=p(n("PiFF"));function p(e){return e&&e.__esModule?e:{default:e}}var m=function(){return s.default.createElement("div",null,"组件加载中...")};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){function d(e){(0,i.default)(this,d);var t=(0,l.default)(this,(d.__proto__||(0,r.default)(d)).call(this,e));return t.state={component:null},t}return(0,c.default)(d,n),(0,u.default)(d,[{key:"componentDidMount",value:(p=(0,a.default)(o.default.mark(function t(){var n,a;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,a=n.default,this.setState({component:a});case 5:case"end":return t.stop()}},t,this)})),function(){return p.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?s.default.createElement(e,this.props):t?s.default.createElement(f.default,null):s.default.createElement(m,null)}}]),d;var p}(d.Component)}},cDcd:function(e,t){e.exports=React},faye:function(e,t){e.exports=ReactDOM},jPcL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=l(n("glBr"));n("bCZg");var a=l(n("cDcd")),r=l(n("l7WU")),i=l(n("aTPC")),u=l(n("arND"));function l(e){return e&&e.__esModule?e:{default:e}}o.default.Item;var c=(0,u.default)(function(){return n.e(4).then(function(){var e=n("OOq/");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})});t.default=function(e){return a.default.createElement(i.default,{title:"好友",selectedTab:"friend"},a.default.createElement(r.default,null,a.default.createElement(c,e)))}},jZFs:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r(n("pRfh")),a=r(n("clYf"));function r(e){return e&&e.__esModule?e:{default:e}}var i,u=(i=(0,a.default)(o.default.mark(function e(t,n,a){var r;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a||!t.test){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Request("http://10.114.20.103:8888/mock/20/deptment/deptList");case 4:return(r=e.sent).success&&n.setIn(["test"],r.data),e.abrupt("return",r);case 7:case"end":return e.stop()}},e,void 0)})),function(e,t,n){return i.apply(this,arguments)});t.default=u},k7yg:function(e,t,n){"use strict";var o=m(n("Yo5m")),a=m(n("cDcd")),r=m(n("faye")),i=n("8LOv");n("0tvd");var u=m(n("ub5t")),l=m(n("pBup")),c=m(n("AOKV")),d=m(n("Ha4D")),s=m(n("vIny")),f=n("rRcN"),p=m(n("LSyP"));function m(e){return e&&e.__esModule?e:{default:e}}(0,o.default)(window,{Request:l.default,Apicloud:c.default,Immutable:u.default,$arr:(0,u.default)([]),$obj:(0,u.default)({}),userAgents:(0,d.default)(),rootDom:"app",auths:[],isDev:!0,db:s.default}),localStorage.site_id="2f48b9f151cf4f48b01030624cd7aac7";var A={_site_id:1,_site_name:"云上视界科技有限公司",_logoText:"云上视界科技有限公司OA系统",_logoSrc:null,_menus:{},init:localStorage.init?JSON.parse(localStorage.init):{},isChangeChannal:!1,onLine:navigator.onLine};r.default.render(a.default.createElement(f.Provider,{value:A},a.default.createElement(i.HashRouter,null,a.default.createElement(i.Route,{component:p.default}))),document.getElementById("app"))},kcRE:function(e,t,n){var o=n("nIh9");"string"==typeof o&&(o=[[e.i,o,""]]);n("DkTI")(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},kqMm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n("z+k9"));n("iQjw");var a=i(n("cDcd")),r=i(n("ofkR"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.loading,n=e.loadingTitle,i=void 0===n?"数据加载中":n,u=e.error,l=e.errorAction,c=e.children;return t?a.default.createElement("div",{className:r.default.loading},a.default.createElement(o.default,{type:"loading"}),a.default.createElement("div",{className:r.default.loadingTitle},i)):u?a.default.createElement("div",{className:r.default.loading},l||"出错了"):c||null}},l7WU:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=((o=n("NbhV"))&&o.__esModule?o:{default:o}).default.div.withConfig({displayName:"ContentView"})(["position:relative;flex:1;overflow-y:auto;background:#f1f1f1;"]);t.default=a},nIh9:function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,'.Layout_header_1KQhF {\n  position: relative; }\n  .Layout_header_1KQhF:after {\n    content: "";\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 0.01rem;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scaleY(0.5);\n            transform: scaleY(0.5); }\n\n.Layout_message_OReIc {\n  position: relative; }\n\n.Layout_content_dDd_h {\n  position: relative;\n  flex: 1; }\n',"",{version:3,sources:["E:/www/webpack4/src/pages/Layout/Layout.scss"],names:[],mappings:"AAAA;EACE,mBAAmB,EAAE;EACrB;IACE,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,WAAW;IACX,UAAU;IACV,YAAY;IACZ,UAAU;IACV,QAAQ;IACR,YAAY;IACZ,gBAAgB;IAChB,mCAAmC;YAC3B,2BAA2B;IACnC,+BAA+B;YACvB,uBAAuB,EAAE;;AAErC;EACE,mBAAmB,EAAE;;AAEvB;EACE,mBAAmB;EACnB,QAAQ,EAAE",file:"Layout.scss",sourcesContent:['.header {\n  position: relative; }\n  .header:after {\n    content: "";\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 0.01rem;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scaleY(0.5);\n            transform: scaleY(0.5); }\n\n.message {\n  position: relative; }\n\n.content {\n  position: relative;\n  flex: 1; }\n'],sourceRoot:""}]),t.locals={header:"Layout_header_1KQhF",message:"Layout_message_OReIc",content:"Layout_content_dDd_h"}},"nv+6":function(e,t,n){var o=n("HAuW");"string"==typeof o&&(o=[[e.i,o,""]]);n("DkTI")(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},ofkR:function(e,t,n){var o=n("/aHK");"string"==typeof o&&(o=[[e.i,o,""]]);n("DkTI")(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)},pBup:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i(n("heMk")),a=i(n("KN1l")),r=i(n("zr5I"));function i(e){return e&&e.__esModule?e:{default:e}}var u=r.default.CancelToken;r.default.defaults.timeout=1e4,r.default.defaults.dataType="json";var l=r.default.create();l.interceptors.request.use(function(e){return 0!=e.url.indexOf("https://")&&0!=e.url.indexOf("http://")&&(e.url=AppConfig.ApiUrl+e.url,e.params=(0,a.default)({timestamp:Date.parse(new Date),orgid:localStorage.organizationId,orgId:localStorage.organizationId},e.params),e.headers=(0,a.default)({userId:localStorage.userId},e.headers)),e.cancelToken=new u(function(e){window.axiosCancel=e}),e}),l.interceptors.response.use(function(e){return(0,a.default)({success:!0,message:e.data.msg},e.data)},function(e){var t,n={};if(e.response){var r=e.response,i="object"!=(void 0===(t=r.data)?"undefined":(0,o.default)(t))||"[object object]"!=Object.prototype.toString.call(t).toLowerCase()||t.length?{}:r.data;n=(0,a.default)({message:i.message||i.msg||r.statusText,status:r.status},i)}else e.request?n.message="网络错误，请检查你的网络状态":console.log("Error",e.message);return 401==n.status&&(localStorage.removeItem("authorization"),store.dispatch("user/init",{})),n.success=!1,console.log(n),n}),t.default=l},rRcN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Consumer=t.contextConsumers=t.contextConsumer=t.Provider=void 0;var o=p(n("KN1l")),a=p(n("G+8T")),r=p(n("p02J")),i=p(n("cLmd")),u=p(n("dAt5")),l=p(n("Fo7F")),c=n("cDcd"),d=p(c),s=p(n("ub5t")),f=p(n("+0q/"));function p(e){return e&&e.__esModule?e:{default:e}}var m=(0,c.createContext)(),A=t.Provider=function(e){function t(e){(0,r.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));n.callBack=function(e,t){e(n.state.data,n.dispatch,t)},n.setContext=function(e){var t=n.state.data.merge((0,s.default)(e));n.setState({data:t})},n.setInContext=function(e,t){"string"==typeof e&&(e=[e]),t=n.state.data.setIn(e,(0,s.default)(t)),n.setState({data:t})},n.handleHashChange=function(){var e=window.location.href.split("?")[1],t={};e&&(t=f.default.parse(e)),n.setContext({query:t})};var o=e.value||{};return o.query={},n.state={data:(0,s.default)(o)},n.dispatch={callBack:n.callBack,set:n.setContext,setIn:n.setInContext},n}return(0,l.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",this.handleHashChange,!1),setTimeout(function(){e.handleHashChange()},10)}},{key:"render",value:function(){var e=this.props.children,t={context:this.state.data,dispatch:this.dispatch};return d.default.createElement(m.Provider,{value:t},e)}}]),t}(c.Component),h=t.contextConsumer=function(e){return function(t){function n(){return(0,r.default)(this,n),(0,u.default)(this,(n.__proto__||(0,a.default)(n)).apply(this,arguments))}return(0,l.default)(n,t),(0,i.default)(n,[{key:"render",value:function(){var t=this;return d.default.createElement(m.Consumer,null,function(n){return d.default.createElement(e,(0,o.default)({},t.props,n))})}}]),n}(d.default.Component)},v=t.contextConsumers=function(e){return function(t){return function(n){function c(){return(0,r.default)(this,c),(0,u.default)(this,(c.__proto__||(0,a.default)(c)).apply(this,arguments))}return(0,l.default)(c,n),(0,i.default)(c,[{key:"render",value:function(){var n=this;return d.default.createElement(m.Consumer,null,function(a){var r=e?e(a.context,n.props):null;return d.default.createElement(t,(0,o.default)({},n.props,r,{dispatch:a.dispatch}))})}}]),c}(d.default.Component)}};t.Consumer=m.Consumer,t.default=(0,o.default)({},m,{Provider:A,contextConsumer:h,contextConsumers:v})},ub5t:function(e,t,n){e.exports=n("AOTY")(66)},vIny:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=new Dexie("webpack4");o.version(1).stores({friends:"++id, name, age",news:"++id, title, content"}),t.default=o},yhP6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,a=((o=n("NbhV"))&&o.__esModule?o:{default:o}).default.div.withConfig({displayName:"LayoutView"})(["background:#f8f8f8;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden auto;display:flex;flex:1;flex-direction:column;z-index:99;"]);t.default=a},zr5I:function(e,t){e.exports=axios}});
//# sourceMappingURL=app-2f7e1c441def05314ddc.js.map