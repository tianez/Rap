(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+XMT":function(e,t,n){var a,u;void 0===(u="function"==typeof(a=function(e,t){"use strict";var n=5e3,a="callback";function u(e){try{delete window[e]}catch(t){window[e]=void 0}}function r(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)}t.exports=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],o=e,c=t.timeout||n,l=t.jsonpCallback||a,d=void 0;return new Promise(function(n,a){var i=t.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),f=l+"_"+i;window[i]=function(e){n({ok:!0,json:function(){return Promise.resolve(e)}}),d&&clearTimeout(d),r(f),u(i)},o+=-1===o.indexOf("?")?"?":"&";var s=document.createElement("script");s.setAttribute("src",""+o+l+"="+i),t.charset&&s.setAttribute("charset",t.charset),s.id=f,document.getElementsByTagName("head")[0].appendChild(s),d=setTimeout(function(){a(new Error("JSONP request to "+e+" timed out")),u(i),r(f),window[i]=function(){u(i)}},c),s.onerror=function(){a(new Error("JSONP request to "+e+" failed")),u(i),r(f),d&&clearTimeout(d)}})}})?a.apply(t,[t,e]):a)||(e.exports=u)},"TA+V":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=w(n("nbCY")),u=w(n("pRfh")),r=w(n("clYf")),o=w(n("G+8T")),c=w(n("p02J")),l=w(n("cLmd")),d=w(n("dAt5")),i=w(n("Fo7F"));n("ZsLX");var f=n("cDcd"),s=w(f),p=w(n("yhP6")),m=w(n("l7WU")),v=w(n("APrv")),h=w(n("dlyW"));function w(e){return e&&e.__esModule?e:{default:e}}var y=function(e){function t(){var e,n,a,l,i=this;(0,c.default)(this,t);for(var f=arguments.length,s=Array(f),p=0;p<f;p++)s[p]=arguments[p];return n=a=(0,d.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(s))),a.getData=(0,r.default)(u.default.mark(function e(){var t;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.default)("https://api.douban.com/v2/user/1000001");case 2:t=e.sent,console.log(t);case 4:case"end":return e.stop()}},e,i)})),l=n,(0,d.default)(a,l)}return(0,i.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){return s.default.createElement(p.default,null,s.default.createElement(a.default,{mode:"dark",icon:s.default.createElement(v.default,null)},"测试页面"),s.default.createElement(m.default,null,s.default.createElement("video",{controls:!0,preload:"auto",src:"public/video/2.mp4"}),s.default.createElement("div",null,"111111111111111111111111111111111")))}}]),t}(f.Component);t.default=y},dlyW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n("pRfh")),u=c(n("18by")),r=c(n("clYf")),o=c(n("+XMT"));function c(e){return e&&e.__esModule?e:{default:e}}var l,d=(l=(0,r.default)(a.default.mark(function e(t){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new u.default(function(e,n){(0,o.default)(t).then(function(e){return e.json()}).then(function(t){e({success:!0,data:t})}).catch(function(t){e({success:!1,message:t.message})})}));case 1:case"end":return e.stop()}},e,void 0)})),function(e){return l.apply(this,arguments)});t.default=d}}]);
//# sourceMappingURL=8-7e898d9c34743dedee91.js.map