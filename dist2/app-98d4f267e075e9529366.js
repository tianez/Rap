!function(e){function t(t){for(var a,i,l=t[0],u=t[1],c=t[2],s=0,f=[];s<l.length;s++)i=l[s],o[i]&&f.push(o[i][0]),o[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);for(d&&d(t);f.length;)f.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,l=1;l<n.length;l++){var u=n[l];0!==o[u]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},o={18:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise(function(t,a){n=o[e]=[t,a]});t.push(n[2]=a);var r=document.getElementsByTagName("head")[0],l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=i.p+""+({}[e]||e)+"-"+{0:"22b4661fd5e7d7355cdd",1:"557d66b1600eef09f316",2:"d2400d85d36a4b4483b8",3:"f155220dfdbedc229333",4:"5cb31c20417cc46d26b9",5:"96044380acb7c7f5b397",6:"76bd0b0cafd6bdcda839",7:"61eb56d53a2b3a4bc41c",8:"005f40354a8c7e4cda8d",9:"385018b223af80ec630f",10:"150853ace58139ef3231",11:"33a1ce5fdc63cc1469d4",12:"63c84bb2379d29c6cb2d",13:"98358f58c10b9d767aea",14:"23e8a0accb1e6570eee0",15:"3aad40065ade756271e4",17:"9845b0199cbb942cf710"}[e]+".js";var u=setTimeout(function(){c({type:"timeout",target:l})},12e4);function c(t){l.onerror=l.onload=null,clearTimeout(u);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");i.type=a,i.request=r,n[1](i)}o[e]=void 0}}l.onerror=l.onload=c,r.appendChild(l)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},i.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./dist2/",i.oe=function(e){throw console.error(e),e};var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var d=u;r.push(["k7yg",16]),n()}({"+0q/":function(e,t,n){e.exports=n("AOTY")(54)},"/EKM":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=b(n("KN1l")),r=b(n("pRfh")),i=b(n("clYf")),l=b(n("G+8T")),u=b(n("p02J")),c=b(n("cLmd")),d=b(n("dAt5")),s=b(n("Fo7F")),f=n("cDcd"),A=b(f),p=n("8LOv"),m=(b(n("arND")),b(n("l7WU"))),h=b(n("kqMm")),g=b(n("aTPC")),v=(b(n("jZFs")),n("McZH"),b(n("SlVv"))),C=n("rRcN"),E=b(n("5xGE"));function b(e){return e&&e.__esModule?e:{default:e}}var _=(0,C.contextConsumers)(function(e){return{init:e.init}})(a=(0,E.default)(a=function(e){function t(e){var n=this;(0,u.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.getData=(0,i.default)(r.default.mark(function e(){var t,o,i;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.time("testForEach"),e.next=3,db.news.toArray();case 3:return(t=e.sent)&&a.setState({items:t}),o={where:{},skip:0,limit:20,fields:["id","title","content","createdAt"]},a.props.getData("article",{params:{filter:o}}),e.next=9,Apicloud("article",{params:{filter:o}});case 9:i=e.sent,console.timeEnd("testForEach"),db.news.bulkPut(i.data),console.log(i.data),a.setState({items:i.data});case 14:case"end":return e.stop()}},e,n)})),a.state={items:[]},a}return(0,s.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){var e=(0,v.default)();console.log(e),this.getData()}},{key:"render",value:function(){var e=this.props,t=(e.init,e.data,e.loadState),n=this.state.items;return A.default.createElement(g.default,{title:"首页",selectedTab:"home",rightContent:A.default.createElement(p.Link,{to:"/news",style:{color:"#108ee9"}},"写文章")},A.default.createElement(m.default,{style:{height:"100%",background:"#fff"}},A.default.createElement(h.default,(0,o.default)({},t,{loadingTitle:"刷新中",errorAction:A.default.createElement("div",{onClick:this.getData},"出错了，点击重试！")})),n.map(function(e){return A.default.createElement(p.Link,{to:"/p/"+e.id,key:e.id,className:"listitem"},e.titleImg&&A.default.createElement("div",{className:"img",style:{backgroundImage:"url("+e.titleImg+")"}}),A.default.createElement("div",{className:"detail"},A.default.createElement("div",{className:"title"},e.title),A.default.createElement("div",{className:"info"},e.createdAt)))})))}}]),t}(f.Component))||a)||a;t.default=_},"/aHK":function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,".Loading_loading_qSiSO {\n  text-align: center;\n  background: #fff;\n  padding: 0.15rem 0; }\n\n.Loading_loadingTitle_36lC2 {\n  color: #666;\n  line-height: 0.24rem; }\n","",{version:3,sources:["E:/www/webpack4/src/Libs/Components/Layout/Loading.scss"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB,EAAE;;AAEvB;EACE,YAAY;EACZ,qBAAqB,EAAE",file:"Loading.scss",sourcesContent:[".loading {\n  text-align: center;\n  background: #fff;\n  padding: 0.15rem 0; }\n\n.loadingTitle {\n  color: #666;\n  line-height: 0.24rem; }\n"],sourceRoot:""}]),t.locals={loading:"Loading_loading_qSiSO",loadingTitle:"Loading_loadingTitle_36lC2"}},"0Lx+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n("cDcd")),o=i(n("l7WU")),r=i(n("aTPC"));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,i(n("arND")).default)(function(){return Promise.all([n.e(3),n.e(7)]).then(function(){var e=n("5ym+");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})});t.default=function(e){return a.default.createElement(r.default,{title:"服务",border:!1,selectedTab:"service"},a.default.createElement(o.default,null,a.default.createElement(l,e)))}},"0tvd":function(e,t,n){var a=n("WD0t");"string"==typeof a&&(a=[[e.i,a,""]]);n("DkTI")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},"1DQC":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n("cDcd")),o=i(n("l7WU")),r=i(n("aTPC"));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,i(n("arND")).default)(function(){return n.e(4).then(function(){var e=n("qp63");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})});t.default=function(e){return a.default.createElement(r.default,{title:"新闻",selectedTab:"news"},a.default.createElement(o.default,null,a.default.createElement(l,e)))}},"3V/B":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n("pRfh")),o=i(n("18by")),r=i(n("clYf"));function i(e){return e&&e.__esModule?e:{default:e}}var l,u=(l=(0,r.default)(a.default.mark(function e(t){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new o.default(function(e){return setTimeout(e,t)}));case 1:case"end":return e.stop()}},e,void 0)})),function(e){return l.apply(this,arguments)});t.default=u},"5xGE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=A(n("KN1l")),o=A(n("pRfh")),r=A(n("clYf")),i=A(n("G+8T")),l=A(n("p02J")),u=A(n("cLmd")),c=A(n("dAt5")),d=A(n("Fo7F")),s=A(n("cDcd")),f=A(n("3V/B"));function A(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return function(t){function n(){var e,t,a,u,d,s=this;(0,l.default)(this,n);for(var A=arguments.length,p=Array(A),m=0;m<A;m++)p[m]=arguments[m];return t=a=(0,c.default)(this,(e=n.__proto__||(0,i.default)(n)).call.apply(e,[this].concat(p))),a.state={data:{},loadState:{loading:!1,error:!1,errorMsg:""}},a.getData=(d=(0,r.default)(o.default.mark(function e(t,n){var r,i,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(a.delayStart=Date.now(),a.setState({loadState:{loading:!0,error:!1,errorMsg:""}}),!((r=a.delayStart+l-Date.now())>0)){e.next=6;break}return e.next=6,(0,f.default)(r);case 6:return e.next=8,Apicloud(t,n);case 8:(i=e.sent).success?a.setState({data:i.data,loadState:{loading:!1,error:!1,errorMsg:""}}):a.setState({loadState:{loading:!1,error:!0,errorMsg:i.message}});case 10:case"end":return e.stop()}},e,s)})),function(e,t){return d.apply(this,arguments)}),u=t,(0,c.default)(a,u)}return(0,d.default)(n,t),(0,u.default)(n,[{key:"render",value:function(){return s.default.createElement(e,(0,a.default)({},this.props,this.state,{getData:this.getData}))}}]),n}(s.default.Component)}},"6K6h":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=h(n("cDcd")),o=n("8LOv"),r=h(n("IGw9")),i=h(n("arND")),l=h(n("/EKM")),u=h(n("1DQC")),c=h(n("jPcL")),d=h(n("D4se")),s=h(n("0Lx+")),f=h(n("yhP6")),A=h(n("l7WU")),p=h(n("PUdj")),m=n("rRcN");function h(e){return e&&e.__esModule?e:{default:e}}var g=(0,i.default)(function(){return Promise.all([n.e(1),n.e(2),n.e(0),n.e(15)]).then(function(){var e=n("O3NY");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0),v=(0,i.default)(function(){return n.e(14).then(function(){var e=n("CO8x");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0),C=(0,i.default)(function(){return n.e(13).then(function(){var e=n("JShT");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0),E=(0,i.default)(function(){return n.e(12).then(function(){var e=n("5YwG");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0),b=(0,i.default)(function(){return n.e(11).then(function(){var e=n("/q4T");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0),_=(0,i.default)(function(){return Promise.all([n.e(1),n.e(10)]).then(function(){var e=n("9cwu");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0),y=(0,i.default)(function(){return n.e(9).then(function(){var e=n("PaWJ");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0),B=(0,i.default)(function(){return n.e(8).then(function(){var e=n("ErW6");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})},!0);t.default=(0,m.contextConsumers)(function(e){return{onLine:e.onLine}})(function(e){var t=e.location,n=e.redUrl,i=e.onLine;return a.default.createElement(f.default,null,!i&&a.default.createElement(p.default,null,"网络连接不可用"),a.default.createElement(A.default,null,a.default.createElement(o.Switch,{location:t},a.default.createElement(o.Route,{path:"/home",component:l.default}),a.default.createElement(o.Route,{path:"/news",exact:!0,component:u.default}),a.default.createElement(o.Route,{path:"/news/:id",exact:!0,component:C}),a.default.createElement(r.default,{path:"/friend",exact:!0,component:c.default}),a.default.createElement(r.default,{path:"/friend/add",exact:!0,component:_}),a.default.createElement(r.default,{path:"/friend/:id",exact:!0,component:y}),a.default.createElement(o.Route,{path:"/login",component:g}),a.default.createElement(o.Route,{path:"/ucenter",component:d.default}),a.default.createElement(o.Route,{path:"/service",component:s.default}),a.default.createElement(o.Route,{path:"/qrcode",component:v}),a.default.createElement(o.Route,{path:"/setting",component:E}),a.default.createElement(o.Route,{path:"/iframe",component:b}),a.default.createElement(o.Route,{path:"/p/:id",component:B}),a.default.createElement(o.Redirect,{path:"*",to:n}))))})},"8A20":function(e,t,n){e.exports=n("AOTY")(0)},"8LOv":function(e,t,n){e.exports=n("AOTY")(65)},"8RPl":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=m(n("NpIb")),r=m(n("G+8T")),i=m(n("p02J")),l=m(n("cLmd")),u=m(n("dAt5")),c=m(n("Fo7F"));n("Lat2");var d=n("cDcd"),s=m(d),f=m(n("nv+6")),A=n("rRcN"),p=n("8LOv");function m(e){return e&&e.__esModule?e:{default:e}}var h=(0,A.contextConsumers)(function(e){return{footerTabs:e.getIn(["init","footerTabs"])||$arr}})(a=(0,p.withRouter)(a=function(e){function t(){var e,n,a,o;(0,i.default)(this,t);for(var l=arguments.length,c=Array(l),d=0;d<l;d++)c[d]=arguments[d];return n=a=(0,u.default)(this,(e=t.__proto__||(0,r.default)(t)).call.apply(e,[this].concat(c))),a.handlePress=function(e){if(0==e.indexOf("https://")||0==e.indexOf("http://"))return a.props.history.push("/iframe?outlink="+e);a.props.history.replace("/"+e)},o=n,(0,u.default)(a,o)}return(0,c.default)(t,e),(0,l.default)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.selectedTab,a=t.footerTabs;return s.default.createElement("div",null,s.default.createElement(o.default,{unselectedTintColor:"#949494",tintColor:"#33A3F4",barTintColor:"white",style:{height:"0.5rem"},noRenderContent:!0},a.map(function(t){return s.default.createElement(o.default.Item,{title:t.title,key:t.key,icon:s.default.createElement("div",{className:t.icon+" "+f.default.icon}),selectedIcon:s.default.createElement("div",{className:t.icon+" "+f.default.selectedIcon}),badge:t.badge,dot:t.dot,selected:n===t.key,onPress:function(){return e.handlePress(t.key)}})})))}}]),t}(d.Component))||a)||a;t.default=h},AOKV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n("uB8n")),o=i(n("KN1l")),r=i(n("zr5I"));function i(e){return e&&e.__esModule?e:{default:e}}r.default.defaults.timeout=1e4,r.default.defaults.dataType="json";var l=r.default.create();l.interceptors.request.use(function(e){e.url="https://d.apicloud.com/mcm/api/"+e.url;var t=Date.now(),n=SHA1("A6984077246442UZ7F7872C0-8EB2-D116-C9AF-AF02A4B65BA0UZ"+t)+"."+t;return e.headers=(0,o.default)({},e.headers,{authorization:localStorage.authorization||"","X-APICloud-AppId":"A6984077246442","X-APICloud-AppKey":n}),e.params&&e.params.filter&&(e.params=(0,o.default)({},e.params,{filter:(0,a.default)(e.params.filter)})),e}),l.interceptors.response.use(function(e){return{success:200==e.status,message:e.statusText,data:e.data}},function(e){var t={};if(e.response){var n=e.response,a=isJson(n.data)?n.data:{};t=(0,o.default)({message:a.message||a.msg||n.statusText,status:n.status},a)}else e.request?t.message="网络错误，请检查你的网络状态":console.log("Error",e.message);return 401==t.status&&localStorage.removeItem("authorization"),t.success=!1,console.log(t),t}),t.default=l},AOTY:function(e,t){e.exports=vendor_library},APrv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n("z+k9")),o=s(n("G+8T")),r=s(n("p02J")),i=s(n("cLmd")),l=s(n("dAt5")),u=s(n("Fo7F"));n("iQjw");var c=n("cDcd"),d=s(c);function s(e){return e&&e.__esModule?e:{default:e}}var f=function(e){function t(){var e,n,a,i;(0,r.default)(this,t);for(var u=arguments.length,c=Array(u),d=0;d<u;d++)c[d]=arguments[d];return n=a=(0,l.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(c))),a.handleBack=function(){window.history.back()},i=n,(0,l.default)(a,i)}return(0,u.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){return d.default.createElement(a.default,{key:"back",type:"left",onClick:this.handleBack})}}]),t}(c.Component);t.default=f},D4se:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n("cDcd")),o=i(n("l7WU")),r=i(n("aTPC"));function i(e){return e&&e.__esModule?e:{default:e}}var l=(0,i(n("arND")).default)(function(){return n.e(6).then(function(){var e=n("gXhI");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})});t.default=function(e){var t=e.history;return a.default.createElement(r.default,{title:"个人中心",border:!1,selectedTab:"ucenter"},a.default.createElement(o.default,null,a.default.createElement(l,{history:t})))}},HAuW:function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,".Footer_icon_3PZg5,\n.Footer_selectedIcon_1SCRD {\n  width: 0.22rem;\n  height: 0.22rem;\n  font-size: 0.22rem; }\n\n.Footer_selectedIcon_1SCRD {\n  color: #108ee9; }\n","",{version:3,sources:["E:/www/webpack4/src/pages/Layout/Footer.scss"],names:[],mappings:"AAAA;;EAEE,eAAe;EACf,gBAAgB;EAChB,mBAAmB,EAAE;;AAEvB;EACE,eAAe,EAAE",file:"Footer.scss",sourcesContent:[".icon,\n.selectedIcon {\n  width: 0.22rem;\n  height: 0.22rem;\n  font-size: 0.22rem; }\n\n.selectedIcon {\n  color: #108ee9; }\n"],sourceRoot:""}]),t.locals={icon:"Footer_icon_3PZg5",selectedIcon:"Footer_selectedIcon_1SCRD"}},Ha4D:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e={},t=navigator.userAgent.toLowerCase();return"micromessenger"==t.match(/MicroMessenger/i)&&(e.isweixin=!0),/iphone|ipad|ipod/.test(t)?e.isios=!0:/android/.test(t)&&(e.isandroid=!0),e}},IGw9:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n("KN1l")),o=u(n("6F6v")),r=u(n("cDcd")),i=n("rRcN"),l=n("8LOv");function u(e){return e&&e.__esModule?e:{default:e}}t.default=(0,i.contextConsumers)(function(e){return{authorization:e.authorization}})(function(e){var t=e.component,n=e.authorization,i=(0,o.default)(e,["component","authorization"]);return n?r.default.createElement(l.Route,(0,a.default)({},i,{component:t})):r.default.createElement(l.Redirect,{to:{pathname:"/login",state:(0,a.default)({},i.location)}})})},LSyP:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,o=g(n("pRfh")),r=g(n("uB8n")),i=g(n("clYf")),l=g(n("G+8T")),u=g(n("p02J")),c=g(n("cLmd")),d=g(n("dAt5")),s=g(n("Fo7F")),f=n("cDcd"),A=g(f),p=g(n("PiFF")),m=g(n("kqMm")),h=g(n("6K6h"));function g(e){return e&&e.__esModule?e:{default:e}}var v=(0,n("rRcN").contextConsumers)(function(e){return{redUrl:e.getIn(["init","redUrl"]),isChangeChannal:e.isChangeChannal}})(a=function(e){function t(e){var n=this;(0,u.default)(this,t);var a=(0,d.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return a.handleChangeOnline=function(){a.props.dispatch.set({onLine:navigator.onLine})},a.handleChangeConnection=function(){var e=navigator.connection,t="none";"wifi"==e.type?t="wifi":"cellular"==e.type&&(t=e.effectiveType?e.effectiveType:"cellular"),a.props.dispatch.set({connectionType:t})},a.getCurrentPosition=function(){navigator.geolocation.getCurrentPosition(a.success,a.error,{enableHighAccuracy:!0,timeout:5e3,maximumAge:0})},a.success=function(e){var t=e.coords;console.log("Your current position is:"),console.log("Latitude : "+t.latitude),console.log("Longitude: "+t.longitude),console.log("More or less "+t.accuracy+" meters.")},a.error=function(e){console.warn("ERROR("+e.code+"): "+e.message)},a.getInit=(0,i.default)(o.default.mark(function e(){var t,i;return o.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0,error:!1}),e.next=3,Apicloud("config",{params:{filter:{where:{name:"init",site_id:1}}}});case 3:(t=e.sent).success?(a.setState({loading:!1}),(i=t.data[0].data)&&(localStorage.init=(0,r.default)(i),a.props.dispatch.set({init:i}))):a.setState({loading:!1,error:!0});case 5:case"end":return e.stop()}},e,n)})),a.state={loading:!0,error:!1},a}return(0,s.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("offline",this.handleChangeOnline),window.addEventListener("online",this.handleChangeOnline),navigator.connection.addEventListener("typechange",this.handleChangeConnection),this.handleChangeConnection(),this.getInit()}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.redUrl,n=e.isChangeChannal;t&&n&&(this.props.history.push(t),this.props.dispatch.set({isChangeChannal:!1}))}},{key:"render",value:function(){var e=this.props,t=e.redUrl,n=e.location,a=this.state,o=a.error,r=a.loading;return t?A.default.createElement(h.default,{location:n,redUrl:t}):A.default.createElement(p.default,null,A.default.createElement(m.default,{loading:r,loadingTitle:"初始化中...",error:o,errorAction:A.default.createElement("div",{onClick:this.getInit},"初始化失败，点击重试")}))}}]),t}(f.Component))||a;t.default=v},NbhV:function(e,t,n){e.exports=n("AOTY")(57)},PUdj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n("cDcd"));function o(e){return e&&e.__esModule?e:{default:e}}var r=o(n("NbhV")).default.div.withConfig({displayName:"Toptip__ToptipView"})(["padding:0.1rem;font-size:0.16rem;text-align:center;background:#f1f1f1;color:#f00;"]);t.default=function(e){var t=e.children;return a.default.createElement(r,null,t)}},PiFF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n("z+k9")),o=d(n("nbCY"));n("iQjw"),n("ZsLX");var r=d(n("cDcd")),i=d(n("NbhV")),l=d(n("yhP6")),u=d(n("l7WU")),c=d(n("APrv"));function d(e){return e&&e.__esModule?e:{default:e}}var s=i.default.div.withConfig({displayName:"LoadingFarmeWork__LoadingView"})(["text-align:center;line-height:3rem;"]);t.default=function(e){var t=e.children;return r.default.createElement(l.default,null,r.default.createElement(o.default,{mode:"light",icon:r.default.createElement(c.default,null)}),r.default.createElement(u.default,null,t||r.default.createElement(s,null,r.default.createElement(a.default,{type:"loading",size:"lg"}))))}},SlVv:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e?new Date(e):new Date,n=t.getDay(),a=6;0!=n&&(a=n-1);var o=new Date(t.valueOf()-864e5*a),r=new Date(t.valueOf()+864e5*(6-a)),i=new Date(t.getFullYear(),0,1),l=i.getDay(),u=1;0!=l&&(u=7-l+1),i=new Date(t.getFullYear(),0,1+u);var c=Math.ceil((t.valueOf()-i.valueOf())/864e5);return{startDayOfWeek:o,lastDayOfWeek:r,curWeek:Math.ceil(c/7)+1}}},WD0t:function(e,t,n){(e.exports=n("3G5m")(!0)).push([e.i,"* {\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 0.1rem;\n  font-size: 62.5%;\n  font-size: 3.125vw;\n  max-width: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  background: #f8f8f8;\n  font-family: 'microsoft yahei', -apple-system-font, Helvetica Neue, sans-serif;\n}\n@media screen and (min-width: 600px) {\n  html {\n    font-size: 0.14rem;\n  }\n}\nbody {\n  background: #f8f8f8 !important;\n  font-size: 0.12rem;\n  width: 100%;\n  overflow-x: hidden;\n}\na,\na:hover {\n  outline: none;\n  text-decoration: none;\n}\ninput,\ntextarea,\n*:focus {\n  outline: none !important;\n}\ninput::-webkit-input-placeholder,\ntextarea::-webkit-input-placeholder {\n  color: #cdcdcd;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: #cdcdcd;\n}\nfieldset,\nimg {\n  border: none;\n}\nimg {\n  max-width: 100%;\n}\naddress,\ncite,\ndfn,\nem,\nvar {\n  font-style: normal;\n}\n/* 重置列表元素 */\nol,\nul {\n  list-style: none;\n}\n/* 重置表格元素 */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/* 重置 hr */\nhr {\n  border: none;\n  height: 0.01rem;\n}\ninput[type=button],\ninput[type=submit] {\n  -webkit-appearance: none;\n  outline: none;\n}\nvideo {\n  -o-object-position: 0 0;\n     object-position: 0 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  /*object-fit:fill;*/\n  width: 100%;\n}\n.clear {\n  clear: both;\n}\n.listitem {\n  display: flex;\n  margin: 0;\n  padding: 0.08rem 0.15rem;\n  background: #fff;\n  color: #000;\n  border-bottom: 1px solid #f4f4f4;\n}\n.listitem .img {\n  width: 0.8rem;\n  height: 0.6rem;\n  background-size: cover;\n  background-position: center;\n  margin: 0 0.1rem 0 0;\n}\n.listitem .detail {\n  flex: 1;\n}\n.listitem .title {\n  font-size: 0.17rem;\n  line-height: 0.22rem;\n  height: auto;\n}\n.listitem .detail {\n  margin: 0.05rem 0;\n}\n.listitem .info {\n  display: block;\n  color: #999;\n  font-size: 0.13rem;\n  line-height: 0.16rem;\n  margin: 0.05rem 0 0;\n}\n.listitem .img + .detail {\n  margin: 0;\n}\n.listitem .img + .detail .title {\n  height: 0.44rem;\n}\n.listitem .img + .detail .info {\n  margin: 0;\n}\n.listitem .nodata {\n  padding: 0.2rem;\n  text-align: center;\n  background: #fff;\n  color: #666;\n  font-size: 0.17rem;\n}\n#app {\n  height: 100%;\n}\n.am-tabs-horizontal .am-tabs-pane-wrap-inactive {\n  height: auto !important;\n  overflow-y: auto !important;\n}\n","",{version:3,sources:["E:/www/webpack4/src/style/app.less"],names:[],mappings:"AAAA;EACE,UAAU;EACV,WAAW;EACX,gDAAgD;EAChD,uBAAuB;CACxB;AACD;EACE,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,2BAA2B;EAC3B,+BAA+B;EAC/B,oBAAoB;EACpB,+EAA+E;CAChF;AACD;EACE;IACE,mBAAmB;GACpB;CACF;AACD;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,YAAY;EACZ,mBAAmB;CACpB;AACD;;EAEE,cAAc;EACd,sBAAsB;CACvB;AACD;;;EAGE,yBAAyB;CAC1B;AACD;;EAEE,eAAe;CAChB;AACD;;EAEE,eAAe;CAChB;AACD;;EAEE,aAAa;CACd;AACD;EACE,gBAAgB;CACjB;AACD;;;;;EAKE,mBAAmB;CACpB;AACD,YAAY;AACZ;;EAEE,iBAAiB;CAClB;AACD,YAAY;AACZ;EACE,0BAA0B;EAC1B,kBAAkB;CACnB;AACD,WAAW;AACX;EACE,aAAa;EACb,gBAAgB;CACjB;AACD;;EAEE,yBAAyB;EACzB,cAAc;CACf;AACD;EACE,wBAAwB;KACrB,qBAAqB;EACxB,uBAAuB;KACpB,oBAAoB;EACvB,oBAAoB;EACpB,YAAY;CACb;AACD;EACE,YAAY;CACb;AACD;EACE,cAAc;EACd,UAAU;EACV,yBAAyB;EACzB,iBAAiB;EACjB,YAAY;EACZ,iCAAiC;CAClC;AACD;EACE,cAAc;EACd,eAAe;EACf,uBAAuB;EACvB,4BAA4B;EAC5B,qBAAqB;CACtB;AACD;EACE,QAAQ;CACT;AACD;EACE,mBAAmB;EACnB,qBAAqB;EACrB,aAAa;CACd;AACD;EACE,kBAAkB;CACnB;AACD;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,oBAAoB;CACrB;AACD;EACE,UAAU;CACX;AACD;EACE,gBAAgB;CACjB;AACD;EACE,UAAU;CACX;AACD;EACE,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,mBAAmB;CACpB;AACD;EACE,aAAa;CACd;AACD;EACE,wBAAwB;EACxB,4BAA4B;CAC7B",file:"app.less",sourcesContent:["* {\n  margin: 0;\n  padding: 0;\n  -webkit-tap-highlight-color: rgba(255, 0, 0, 0);\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 0.1rem;\n  font-size: 62.5%;\n  font-size: 3.125vw;\n  max-width: 100%;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  background: #f8f8f8;\n  font-family: 'microsoft yahei', -apple-system-font, Helvetica Neue, sans-serif;\n}\n@media screen and (min-width: 600px) {\n  html {\n    font-size: 0.14rem;\n  }\n}\nbody {\n  background: #f8f8f8 !important;\n  font-size: 0.12rem;\n  width: 100%;\n  overflow-x: hidden;\n}\na,\na:hover {\n  outline: none;\n  text-decoration: none;\n}\ninput,\ntextarea,\n*:focus {\n  outline: none !important;\n}\ninput::-webkit-input-placeholder,\ntextarea::-webkit-input-placeholder {\n  color: #cdcdcd;\n}\ninput::-moz-placeholder,\ntextarea::-moz-placeholder {\n  color: #cdcdcd;\n}\nfieldset,\nimg {\n  border: none;\n}\nimg {\n  max-width: 100%;\n}\naddress,\ncite,\ndfn,\nem,\nvar {\n  font-style: normal;\n}\n/* 重置列表元素 */\nol,\nul {\n  list-style: none;\n}\n/* 重置表格元素 */\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n/* 重置 hr */\nhr {\n  border: none;\n  height: 0.01rem;\n}\ninput[type=button],\ninput[type=submit] {\n  -webkit-appearance: none;\n  outline: none;\n}\nvideo {\n  -o-object-position: 0 0;\n     object-position: 0 0;\n  -o-object-fit: contain;\n     object-fit: contain;\n  /*object-fit:fill;*/\n  width: 100%;\n}\n.clear {\n  clear: both;\n}\n.listitem {\n  display: flex;\n  margin: 0;\n  padding: 0.08rem 0.15rem;\n  background: #fff;\n  color: #000;\n  border-bottom: 1px solid #f4f4f4;\n}\n.listitem .img {\n  width: 0.8rem;\n  height: 0.6rem;\n  background-size: cover;\n  background-position: center;\n  margin: 0 0.1rem 0 0;\n}\n.listitem .detail {\n  flex: 1;\n}\n.listitem .title {\n  font-size: 0.17rem;\n  line-height: 0.22rem;\n  height: auto;\n}\n.listitem .detail {\n  margin: 0.05rem 0;\n}\n.listitem .info {\n  display: block;\n  color: #999;\n  font-size: 0.13rem;\n  line-height: 0.16rem;\n  margin: 0.05rem 0 0;\n}\n.listitem .img + .detail {\n  margin: 0;\n}\n.listitem .img + .detail .title {\n  height: 0.44rem;\n}\n.listitem .img + .detail .info {\n  margin: 0;\n}\n.listitem .nodata {\n  padding: 0.2rem;\n  text-align: center;\n  background: #fff;\n  color: #666;\n  font-size: 0.17rem;\n}\n#app {\n  height: 100%;\n}\n.am-tabs-horizontal .am-tabs-pane-wrap-inactive {\n  height: auto !important;\n  overflow-y: auto !important;\n}\n"],sourceRoot:""}])},aTPC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n("nbCY"));n("ZsLX");var o=u(n("cDcd")),r=u(n("yhP6")),i=(u(n("l7WU")),u(n("8RPl"))),l=u(n("kcRE"));function u(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.headerShow,n=void 0===t||t,u=e.border,c=void 0===u||u,d=e.title,s=e.selectedTab,f=e.rightContent,A=e.children;return o.default.createElement(r.default,null,n&&o.default.createElement(a.default,{mode:"light",className:c&&l.default.header,rightContent:f},d),A,o.default.createElement(i.default,{selectedTab:s}))}},arND:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=A(n("pRfh")),o=A(n("clYf")),r=A(n("G+8T")),i=A(n("p02J")),l=A(n("cLmd")),u=A(n("dAt5")),c=A(n("Fo7F")),d=n("cDcd"),s=A(d),f=A(n("PiFF"));function A(e){return e&&e.__esModule?e:{default:e}}var p=function(){return s.default.createElement("div",null,"组件加载中...")};t.default=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n){function d(e){(0,i.default)(this,d);var t=(0,u.default)(this,(d.__proto__||(0,r.default)(d)).call(this,e));return t.state={component:null},t}return(0,c.default)(d,n),(0,l.default)(d,[{key:"componentDidMount",value:(A=(0,o.default)(a.default.mark(function t(){var n,o;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:n=t.sent,o=n.default,this.setState({component:o});case 5:case"end":return t.stop()}},t,this)})),function(){return A.apply(this,arguments)})},{key:"render",value:function(){var e=this.state.component;return e?s.default.createElement(e,this.props):t?s.default.createElement(f.default,null):s.default.createElement(p,null)}}]),d;var A}(d.Component)}},cDcd:function(e,t){e.exports=React},faye:function(e,t){e.exports=ReactDOM},jPcL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n("glBr"));n("bCZg");var o=u(n("cDcd")),r=u(n("l7WU")),i=u(n("aTPC")),l=u(n("arND"));function u(e){return e&&e.__esModule?e:{default:e}}a.default.Item;var c=(0,l.default)(function(){return Promise.all([n.e(0),n.e(5)]).then(function(){var e=n("wllJ");return"object"==typeof e&&e&&e.__esModule?e:Object.assign({},"object"==typeof e&&e,{default:e})})});t.default=function(e){return o.default.createElement(i.default,{title:"好友",selectedTab:"friend"},o.default.createElement(r.default,null,o.default.createElement(c,e)))}},jZFs:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("pRfh")),o=r(n("clYf"));function r(e){return e&&e.__esModule?e:{default:e}}var i,l=(i=(0,o.default)(a.default.mark(function e(t,n,o){var r;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!o||!t.test){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,Request("http://10.114.20.103:8888/mock/20/deptment/deptList");case 4:return(r=e.sent).success&&n.setIn(["test"],r.data),e.abrupt("return",r);case 7:case"end":return e.stop()}},e,void 0)})),function(e,t,n){return i.apply(this,arguments)});t.default=l},k7yg:function(e,t,n){"use strict";var a=p(n("Yo5m")),o=p(n("cDcd")),r=p(n("faye")),i=n("8LOv");n("0tvd");var l=p(n("ub5t")),u=p(n("pBup")),c=p(n("AOKV")),d=p(n("Ha4D")),s=p(n("vIny")),f=n("rRcN"),A=p(n("LSyP"));function p(e){return e&&e.__esModule?e:{default:e}}(0,a.default)(window,{Request:u.default,Apicloud:c.default,Immutable:l.default,$arr:(0,l.default)([]),$obj:(0,l.default)({}),userAgents:(0,d.default)(),rootDom:"app",auths:[],isDev:!0,db:s.default}),localStorage.site_id="2f48b9f151cf4f48b01030624cd7aac7";var m=localStorage.init?JSON.parse(localStorage.init):{};console.log(m);var h={_site_id:1,_site_name:"云上视界科技有限公司",_logoText:"云上视界科技有限公司OA系统",_logoSrc:null,_menus:{},init:m,isChangeChannal:!1,onLine:navigator.onLine};r.default.render(o.default.createElement(f.Provider,{value:h},o.default.createElement(i.HashRouter,null,o.default.createElement(i.Route,{component:A.default}))),document.getElementById("app"))},kcRE:function(e,t,n){var a=n("nIh9");"string"==typeof a&&(a=[[e.i,a,""]]);n("DkTI")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},kqMm:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n("z+k9"));n("iQjw");var o=i(n("cDcd")),r=i(n("ofkR"));function i(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.loading,n=e.loadingshow,i=void 0===n||n,l=e.loadingTitle,u=void 0===l?"数据加载中":l,c=e.error,d=e.errorAction,s=e.children;return t?i?o.default.createElement("div",{className:r.default.loading},o.default.createElement(a.default,{type:"loading"}),o.default.createElement("div",{className:r.default.loadingTitle},u)):null:c?o.default.createElement("div",{className:r.default.loading},d||"出错了"):s||null}},l7WU:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"ContentView"})(["position:relative;flex:1;overflow-x:hidden;overflow-y:auto;background:#f1f1f1;"]);t.default=o},nIh9:function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,'.Layout_header_1KQhF {\n  position: relative; }\n  .Layout_header_1KQhF:after {\n    content: "";\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 0.01rem;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scaleY(0.5);\n            transform: scaleY(0.5); }\n\n.Layout_message_OReIc {\n  position: relative; }\n\n.Layout_content_dDd_h {\n  position: relative;\n  flex: 1; }\n',"",{version:3,sources:["E:/www/webpack4/src/pages/Layout/Layout.scss"],names:[],mappings:"AAAA;EACE,mBAAmB,EAAE;EACrB;IACE,YAAY;IACZ,mBAAmB;IACnB,uBAAuB;IACvB,eAAe;IACf,WAAW;IACX,UAAU;IACV,YAAY;IACZ,UAAU;IACV,QAAQ;IACR,YAAY;IACZ,gBAAgB;IAChB,mCAAmC;YAC3B,2BAA2B;IACnC,+BAA+B;YACvB,uBAAuB,EAAE;;AAErC;EACE,mBAAmB,EAAE;;AAEvB;EACE,mBAAmB;EACnB,QAAQ,EAAE",file:"Layout.scss",sourcesContent:['.header {\n  position: relative; }\n  .header:after {\n    content: "";\n    position: absolute;\n    background-color: #ddd;\n    display: block;\n    z-index: 1;\n    top: auto;\n    right: auto;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    height: 0.01rem;\n    -webkit-transform-origin: 50% 100%;\n            transform-origin: 50% 100%;\n    -webkit-transform: scaleY(0.5);\n            transform: scaleY(0.5); }\n\n.message {\n  position: relative; }\n\n.content {\n  position: relative;\n  flex: 1; }\n'],sourceRoot:""}]),t.locals={header:"Layout_header_1KQhF",message:"Layout_message_OReIc",content:"Layout_content_dDd_h"}},"nv+6":function(e,t,n){var a=n("HAuW");"string"==typeof a&&(a=[[e.i,a,""]]);n("DkTI")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},ofkR:function(e,t,n){var a=n("/aHK");"string"==typeof a&&(a=[[e.i,a,""]]);n("DkTI")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},pBup:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n("heMk")),o=i(n("KN1l")),r=i(n("zr5I"));function i(e){return e&&e.__esModule?e:{default:e}}var l=r.default.CancelToken;r.default.defaults.timeout=1e4,r.default.defaults.dataType="json";var u=r.default.create();u.interceptors.request.use(function(e){return 0!=e.url.indexOf("https://")&&0!=e.url.indexOf("http://")&&(e.url=AppConfig.ApiUrl+e.url,e.params=(0,o.default)({timestamp:Date.parse(new Date),orgid:localStorage.organizationId,orgId:localStorage.organizationId},e.params),e.headers=(0,o.default)({userId:localStorage.userId},e.headers)),e.cancelToken=new l(function(e){window.axiosCancel=e}),e}),u.interceptors.response.use(function(e){return(0,o.default)({success:!0,message:e.data.msg},e.data)},function(e){var t,n={};if(e.response){var r=e.response,i="object"!=(void 0===(t=r.data)?"undefined":(0,a.default)(t))||"[object object]"!=Object.prototype.toString.call(t).toLowerCase()||t.length?{}:r.data;n=(0,o.default)({message:i.message||i.msg||r.statusText,status:r.status},i)}else e.request?n.message="网络错误，请检查你的网络状态":console.log("Error",e.message);return 401==n.status&&(localStorage.removeItem("authorization"),store.dispatch("user/init",{})),n.success=!1,console.log(n),n}),t.default=u},rRcN:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Consumer=t.contextConsumers=t.contextConsumer=t.Provider=void 0;var a=A(n("KN1l")),o=A(n("G+8T")),r=A(n("p02J")),i=A(n("cLmd")),l=A(n("dAt5")),u=A(n("Fo7F")),c=n("cDcd"),d=A(c),s=A(n("ub5t")),f=A(n("+0q/"));function A(e){return e&&e.__esModule?e:{default:e}}var p=(0,c.createContext)(),m=t.Provider=function(e){function t(e){(0,r.default)(this,t);var n=(0,l.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));n.callBack=function(e,t){e(n.state.data,n.dispatch,t)},n.setContext=function(e){var t=n.state.data.merge((0,s.default)(e));n.setState({data:t})},n.setInContext=function(e,t){"string"==typeof e&&(e=[e]),t=n.state.data.setIn(e,(0,s.default)(t)),n.setState({data:t})},n.handleHashChange=function(){var e=window.location.href.split("?")[1],t={};e&&(t=f.default.parse(e)),n.setContext({query:t})};var a=e.value||{};return a.query={},n.state={data:(0,s.default)(a)},n.dispatch={callBack:n.callBack,set:n.setContext,setIn:n.setInContext},n}return(0,u.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("popstate",this.handleHashChange,!1),setTimeout(function(){e.handleHashChange()},10)}},{key:"render",value:function(){var e=this.props.children,t={context:this.state.data,dispatch:this.dispatch};return d.default.createElement(p.Provider,{value:t},e)}}]),t}(c.Component),h=t.contextConsumer=function(e){return function(t){function n(){return(0,r.default)(this,n),(0,l.default)(this,(n.__proto__||(0,o.default)(n)).apply(this,arguments))}return(0,u.default)(n,t),(0,i.default)(n,[{key:"render",value:function(){var t=this;return d.default.createElement(p.Consumer,null,function(n){return d.default.createElement(e,(0,a.default)({},t.props,n))})}}]),n}(d.default.Component)},g=t.contextConsumers=function(e){return function(t){return function(n){function c(){return(0,r.default)(this,c),(0,l.default)(this,(c.__proto__||(0,o.default)(c)).apply(this,arguments))}return(0,u.default)(c,n),(0,i.default)(c,[{key:"render",value:function(){var n=this;return d.default.createElement(p.Consumer,null,function(o){var r=e?e(o.context,n.props):null;return d.default.createElement(t,(0,a.default)({},n.props,r,{dispatch:o.dispatch}))})}}]),c}(d.default.Component)}};t.Consumer=p.Consumer,t.default=(0,a.default)({},p,{Provider:m,contextConsumer:h,contextConsumers:g})},ub5t:function(e,t,n){e.exports=n("AOTY")(66)},vIny:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=new Dexie("webpack4");a.version(1).stores({friends:"++id, name, age",news:"id, title, content"}),t.default=a},yhP6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"LayoutView"})(["background:#f8f8f8;position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden auto;display:flex;flex:1;flex-direction:column;z-index:99;"]);t.default=o},zr5I:function(e,t){e.exports=axios}});
//# sourceMappingURL=app-98d4f267e075e9529366.js.map