(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/oFY":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(n("KN1l")),r=f(n("p02J")),i=f(n("cLmd")),o=f(n("dAt5")),l=f(n("Fo7F")),s=f(n("0L45")),c=f(n("cDcd")),d=f(n("z+k9")),u=f(n("2Pxw"));function f(e){return e&&e.__esModule?e:{default:e}}var m=function(e){function t(e){(0,r.default)(this,t);var n=(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onClick=function(){var e=n.props,t=e.mode,a=e.onClick;a&&a(),"closable"===t&&n.setState({show:!1})},n.state={show:!0},n}return(0,l.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e=this.props,t=e.mode,n=e.icon,r=e.onClick,i=e.children,o=e.className,l=e.prefixCls,f=e.action,m=e.marqueeProps,A=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n}(e,["mode","icon","onClick","children","className","prefixCls","action","marqueeProps"]),p={},h=null;"closable"===t?h=c.default.createElement("div",{className:l+"-operation",onClick:this.onClick,role:"button","aria-label":"close"},f||c.default.createElement(d.default,{type:"cross",size:"md"})):("link"===t&&(h=c.default.createElement("div",{className:l+"-operation",role:"button","aria-label":"go to detail"},f||c.default.createElement(d.default,{type:"right",size:"md"}))),p.onClick=r);var v=(0,s.default)(l,o);return this.state.show?c.default.createElement("div",(0,a.default)({className:v},A,p,{role:"alert"}),n&&c.default.createElement("div",{className:l+"-icon","aria-hidden":"true"},n),c.default.createElement("div",{className:l+"-content"},c.default.createElement(u.default,(0,a.default)({prefixCls:l,text:i},m))),h):null}}]),t}(c.default.Component);t.default=m,m.defaultProps={prefixCls:"am-notice-bar",mode:"",icon:c.default.createElement(d.default,{type:"voice",size:"xxs"}),onClick:function(){}},e.exports=t.default},"0LYc":function(e,t,n){var a=n("283j");"string"==typeof a&&(a=[[e.i,a,""]]);n("DkTI")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},"283j":function(e,t,n){(e.exports=n("3G5m")(!0)).push([e.i,'.am-notice-bar {\n  background-color: #fefcec;\n  height: 0.36rem;\n  overflow: hidden;\n  font-size: 0.14rem;\n  line-height: 0.36rem;\n  color: #f76a24;\n  display: flex;\n}\n.am-notice-bar-content {\n  flex: 1;\n  width: 100%;\n  margin: auto 0.15rem;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.am-notice-bar-icon {\n  margin-left: 0.15rem;\n  display: flex;\n  align-items: center;\n}\n.am-notice-bar-icon .am-notice-bar-trips {\n  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2238%22%20height%3D%2233%22%20viewBox%3D%220%200%2038%2033%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Etrips%3C%2Ftitle%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M17.838%2028.8c-.564-.468-1.192-.983-1.836-1.496-4.244-3.385-5.294-3.67-6.006-3.67-.014%200-.027.005-.04.005-.015%200-.028-.005-.042-.005H3.562c-.734%200-.903-.203-.903-.928V10.085c0-.49.058-.8.66-.8h5.782c.693%200%201.758-.28%206.4-3.628.828-.597%201.637-1.197%202.336-1.723V28.8zM19.682.19c-.463-.22-1.014-.158-1.417.157-.02.016-1.983%201.552-4.152%203.125C10.34%206.21%209.243%206.664%209.02%206.737H3.676c-.027%200-.053.003-.08.004H1.183c-.608%200-1.1.486-1.1%201.085V25.14c0%20.598.492%201.084%201.1%201.084h8.71c.22.08%201.257.55%204.605%203.24%201.947%201.562%203.694%203.088%203.712%203.103.25.22.568.333.89.333.186%200%20.373-.038.55-.116.48-.213.79-.684.79-1.204V1.38c0-.506-.294-.968-.758-1.19z%22%20mask%3D%22url(%23mask-2)%22%2F%3E%3Cpath%20d%3D%22M31.42%2016.475c0-3.363-1.854-6.297-4.606-7.876-.125-.066-.42-.192-.625-.192-.612%200-1.108.488-1.108%201.09%200%20.404.22.764.55.952%202.128%201.19%203.565%203.442%203.565%206.025%200%202.627-1.486%204.913-3.677%206.087-.318.19-.53.54-.53.934%200%20.602.496%201.09%201.107%201.09.26.002.568-.15.568-.15%202.835-1.556%204.754-4.538%204.754-7.96%22%20mask%3D%22url(%23mask-4)%22%2F%3E%3Cg%3E%3Cpath%20d%3D%22M30.14%203.057c-.205-.122-.41-.22-.658-.22-.608%200-1.1.485-1.1%201.084%200%20.433.26.78.627.977%204.043%202.323%206.762%206.636%206.762%2011.578%200%204.938-2.716%209.248-6.755%2011.572-.354.19-.66.55-.66.993%200%20.6.494%201.084%201.102%201.084.243%200%20.438-.092.65-.213%204.692-2.695%207.848-7.7%207.848-13.435%200-5.723-3.142-10.718-7.817-13.418%22%20mask%3D%22url(%23mask-6)%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");\n}\n.am-notice-bar-icon + div {\n  margin-left: 0.05rem;\n}\n.am-notice-bar-operation {\n  display: flex;\n  align-items: center;\n  padding-right: 0.08rem;\n}\n',"",{version:3,sources:["E:/www/webpack4/node_modules/.2.1.8@antd-mobile/lib/notice-bar/style/index.less"],names:[],mappings:"AAAA;EACE,0BAA0B;EAC1B,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,qBAAqB;EACrB,eAAe;EACf,cAAc;CACf;AACD;EACE,QAAQ;EACR,YAAY;EACZ,qBAAqB;EACrB,YAAY;EACZ,iBAAiB;EACjB,wBAAwB;EACxB,oBAAoB;CACrB;AACD;EACE,qBAAqB;EACrB,cAAc;EACd,oBAAoB;CACrB;AACD;EACE,00DAA00D;CAC30D;AACD;EACE,qBAAqB;CACtB;AACD;EACE,cAAc;EACd,oBAAoB;EACpB,uBAAuB;CACxB",file:"index.less",sourcesContent:['.am-notice-bar {\n  background-color: #fefcec;\n  height: 0.36rem;\n  overflow: hidden;\n  font-size: 0.14rem;\n  line-height: 0.36rem;\n  color: #f76a24;\n  display: flex;\n}\n.am-notice-bar-content {\n  flex: 1;\n  width: 100%;\n  margin: auto 0.15rem;\n  width: auto;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.am-notice-bar-icon {\n  margin-left: 0.15rem;\n  display: flex;\n  align-items: center;\n}\n.am-notice-bar-icon .am-notice-bar-trips {\n  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20width%3D%2238%22%20height%3D%2233%22%20viewBox%3D%220%200%2038%2033%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Ctitle%3Etrips%3C%2Ftitle%3E%3Cg%20fill-rule%3D%22evenodd%22%3E%3Cpath%20d%3D%22M17.838%2028.8c-.564-.468-1.192-.983-1.836-1.496-4.244-3.385-5.294-3.67-6.006-3.67-.014%200-.027.005-.04.005-.015%200-.028-.005-.042-.005H3.562c-.734%200-.903-.203-.903-.928V10.085c0-.49.058-.8.66-.8h5.782c.693%200%201.758-.28%206.4-3.628.828-.597%201.637-1.197%202.336-1.723V28.8zM19.682.19c-.463-.22-1.014-.158-1.417.157-.02.016-1.983%201.552-4.152%203.125C10.34%206.21%209.243%206.664%209.02%206.737H3.676c-.027%200-.053.003-.08.004H1.183c-.608%200-1.1.486-1.1%201.085V25.14c0%20.598.492%201.084%201.1%201.084h8.71c.22.08%201.257.55%204.605%203.24%201.947%201.562%203.694%203.088%203.712%203.103.25.22.568.333.89.333.186%200%20.373-.038.55-.116.48-.213.79-.684.79-1.204V1.38c0-.506-.294-.968-.758-1.19z%22%20mask%3D%22url(%23mask-2)%22%2F%3E%3Cpath%20d%3D%22M31.42%2016.475c0-3.363-1.854-6.297-4.606-7.876-.125-.066-.42-.192-.625-.192-.612%200-1.108.488-1.108%201.09%200%20.404.22.764.55.952%202.128%201.19%203.565%203.442%203.565%206.025%200%202.627-1.486%204.913-3.677%206.087-.318.19-.53.54-.53.934%200%20.602.496%201.09%201.107%201.09.26.002.568-.15.568-.15%202.835-1.556%204.754-4.538%204.754-7.96%22%20mask%3D%22url(%23mask-4)%22%2F%3E%3Cg%3E%3Cpath%20d%3D%22M30.14%203.057c-.205-.122-.41-.22-.658-.22-.608%200-1.1.485-1.1%201.084%200%20.433.26.78.627.977%204.043%202.323%206.762%206.636%206.762%2011.578%200%204.938-2.716%209.248-6.755%2011.572-.354.19-.66.55-.66.993%200%20.6.494%201.084%201.102%201.084.243%200%20.438-.092.65-.213%204.692-2.695%207.848-7.7%207.848-13.435%200-5.723-3.142-10.718-7.817-13.418%22%20mask%3D%22url(%23mask-6)%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E");\n}\n.am-notice-bar-icon + div {\n  margin-left: 0.05rem;\n}\n.am-notice-bar-operation {\n  display: flex;\n  align-items: center;\n  padding-right: 0.08rem;\n}\n'],sourceRoot:""}])},"2Pxw":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=d(n("KN1l")),r=d(n("p02J")),i=d(n("cLmd")),o=d(n("dAt5")),l=d(n("Fo7F")),s=d(n("cDcd")),c=d(n("faye"));function d(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(){(0,r.default)(this,t);var e=(0,o.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.state={animatedWidth:0,overflowWidth:0},e}return(0,l.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this._measureText(),this._startAnimation()}},{key:"componentDidUpdate",value:function(){this._measureText(),this._marqueeTimer||this._startAnimation()}},{key:"componentWillUnmount",value:function(){clearTimeout(this._marqueeTimer)}},{key:"render",value:function(){var e=this,t=this.props,n=t.prefixCls,r=t.className,i=t.text,o=(0,a.default)({position:"relative",right:this.state.animatedWidth,whiteSpace:"nowrap",display:"inline-block"},this.props.style);return s.default.createElement("div",{className:n+"-marquee-wrap "+r,style:{overflow:"hidden"},role:"marquee"},s.default.createElement("div",{ref:function(t){return e.textRef=t},className:n+"-marquee",style:o},i))}},{key:"_startAnimation",value:function(){var e=this;this._marqueeTimer&&clearTimeout(this._marqueeTimer);var t=1/this.props.fps*1e3,n=0===this.state.animatedWidth?this.props.leading:t;0!==this.state.overflowWidth&&(this._marqueeTimer=setTimeout(function n(){var a=e.state.overflowWidth,r=e.state.animatedWidth+1,i=r>a;if(i){if(!e.props.loop)return;r=0}i&&e.props.trailing?e._marqueeTimer=setTimeout(function(){e.setState({animatedWidth:r}),e._marqueeTimer=setTimeout(n,t)},e.props.trailing):(e.setState({animatedWidth:r}),e._marqueeTimer=setTimeout(n,t))},n))}},{key:"_measureText",value:function(){var e=c.default.findDOMNode(this),t=this.textRef;if(e&&t){var n=e.offsetWidth,a=t.offsetWidth-n;a!==this.state.overflowWidth&&this.setState({overflowWidth:a})}}}]),t}(s.default.Component);t.default=u,u.defaultProps={text:"",loop:!1,leading:500,trailing:800,fps:40,className:""},e.exports=t.default},"5xGE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=m(n("KN1l")),r=m(n("pRfh")),i=m(n("clYf")),o=m(n("G+8T")),l=m(n("p02J")),s=m(n("cLmd")),c=m(n("dAt5")),d=m(n("Fo7F")),u=m(n("cDcd")),f=m(n("3V/B"));function m(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return function(t){function n(){var e,t,a,s,d,u=this;(0,l.default)(this,n);for(var m=arguments.length,A=Array(m),p=0;p<m;p++)A[p]=arguments[p];return t=a=(0,c.default)(this,(e=n.__proto__||(0,o.default)(n)).call.apply(e,[this].concat(A))),a.state={loadState:{loading:!1,error:!1,errorMsg:""}},a.getData=(d=(0,i.default)(r.default.mark(function e(t,n){var i,o,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.delayStart=Date.now(),a.setState({loadState:{loading:!0,error:!1,errorMsg:""}}),e.next=4,Apicloud(t,n);case 4:if(i=e.sent,!((o=a.delayStart+l-Date.now())>0)){e.next=9;break}return e.next=9,(0,f.default)(o);case 9:i.success?a.setState({data:i.data,loadState:{loading:!1,error:!1,errorMsg:""}}):a.setState({loadState:{loading:!1,error:!0,errorMsg:i.message}});case 10:case"end":return e.stop()}},e,u)})),function(e,t){return d.apply(this,arguments)}),s=t,(0,c.default)(a,s)}return(0,d.default)(n,t),(0,s.default)(n,[{key:"render",value:function(){return u.default.createElement(e,(0,a.default)({},this.props,this.state,{getData:this.getData}))}}]),n}(u.default.Component)}},BIly:function(e,t,n){var a=n("yQI2");"string"==typeof a&&(a=[[e.i,a,""]]);n("DkTI")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},ErW6:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,i=w(n("KN1l")),o=w(n("/oFY")),l=w(n("pRfh")),s=w(n("clYf")),c=w(n("G+8T")),d=w(n("p02J")),u=w(n("cLmd")),f=w(n("dAt5")),m=w(n("Fo7F"));n("rWUU");var A=n("cDcd"),p=w(A),h=w(n("l7WU")),v=w(n("p/zi")),E=w(n("kqMm")),g=w(n("ntpP")),C=w(n("BIly")),B=w(n("5xGE"));function w(e){return e&&e.__esModule?e:{default:e}}var _=(a=(0,n("rRcN").contextConsumers)(function(e){return{onLine:e.onLine}}),(0,B.default)(r=a(r=function(e){function t(){var e,n,a,r,i=this;(0,d.default)(this,t);for(var o=arguments.length,u=Array(o),m=0;m<o;m++)u[m]=arguments[m];return n=a=(0,f.default)(this,(e=t.__proto__||(0,c.default)(t)).call.apply(e,[this].concat(u))),a.state={isCache:!1,loadState:{}},a.getData=(0,s.default)(l.default.mark(function e(){var t,n,r,o,s;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.props,n=t.onLine,r=t.match,o=r.params.id,e.next=4,db.news.where("id").equalsIgnoreCase(o).toArray();case 4:(s=e.sent)[0]&&a.setState({data:s[0],isCache:!0}),n&&a.props.getData("article/"+o);case 7:case"end":return e.stop()}},e,i)})),r=n,(0,f.default)(a,r)}return(0,m.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.props.onLine,t=this.state,n=t.data,a=void 0===n?{}:n,r=t.loadState,l=t.isCache;return p.default.createElement(v.default,{title:"文章详情"},!e&&p.default.createElement(o.default,{mode:"closable",icon:null},"无网络，现在访问的是离线数据"),p.default.createElement(h.default,{style:{padding:"15px",background:"#fff"}},p.default.createElement(E.default,(0,i.default)({},r,{reflush:!0,loadingTitle:l?"刷新中...":"获取数据中...",errorAction:p.default.createElement("div",{onClick:this.getData},"出错了，点击重试！")})),p.default.createElement("div",{className:C.default.title},a.title),p.default.createElement("div",{className:C.default.info},a.createdAt&&(0,g.default)(a.createdAt).format("YYYY-MM-DD HH:mm:ss")),p.default.createElement("div",{className:C.default.content,dangerouslySetInnerHTML:{__html:a.content}})))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.data?{data:e.data,loadState:e.loadState}:{loadState:e.loadState}}}]),t}(A.Component))||r)||r);t.default=_},"p/zi":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(n("nbCY"));n("ZsLX");var r=s(n("cDcd")),i=s(n("yhP6")),o=s(n("APrv")),l=(s(n("l7WU")),s(n("8RPl")),s(n("kcRE")));function s(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.border,n=void 0===t||t,s=e.title,c=e.children;return r.default.createElement(i.default,null,r.default.createElement(a.default,{mode:"light",icon:r.default.createElement(o.default,null),className:n&&l.default.header},s),c)}},rWUU:function(e,t,n){"use strict";n("vUYC"),n("iQjw"),n("0LYc")},yQI2:function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,".Detail_title_3ZHPF {\n  font-size: 0.24rem;\n  line-height: 0.32rem; }\n\n.Detail_info_UYEsM {\n  display: block;\n  color: #999;\n  font-size: 0.14rem;\n  margin: 0.15rem 0 0.1rem; }\n\n.Detail_content_2M5vu {\n  font-size: 0.16rem;\n  line-height: 0.26rem; }\n  .Detail_content_2M5vu p {\n    padding: 0.05rem 0;\n    text-indent: 2em; }\n  .Detail_content_2M5vu img {\n    display: block;\n    max-width: 100%;\n    margin: 0 auto; }\n","",{version:3,sources:["E:/www/webpack4/src/pages/Article/Detail.scss"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,qBAAqB,EAAE;;AAEzB;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,yBAAyB,EAAE;;AAE7B;EACE,mBAAmB;EACnB,qBAAqB,EAAE;EACvB;IACE,mBAAmB;IACnB,iBAAiB,EAAE;EACrB;IACE,eAAe;IACf,gBAAgB;IAChB,eAAe,EAAE",file:"Detail.scss",sourcesContent:[".title {\n  font-size: 0.24rem;\n  line-height: 0.32rem; }\n\n.info {\n  display: block;\n  color: #999;\n  font-size: 0.14rem;\n  margin: 0.15rem 0 0.1rem; }\n\n.content {\n  font-size: 0.16rem;\n  line-height: 0.26rem; }\n  .content p {\n    padding: 0.05rem 0;\n    text-indent: 2em; }\n  .content img {\n    display: block;\n    max-width: 100%;\n    margin: 0 auto; }\n"],sourceRoot:""}]),t.locals={title:"Detail_title_3ZHPF",info:"Detail_info_UYEsM",content:"Detail_content_2M5vu"}}}]);
//# sourceMappingURL=8-b0972a1a3071ee88b907.js.map