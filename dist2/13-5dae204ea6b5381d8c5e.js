(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"/Txa":function(e,t,n){"use strict";n("vUYC"),n("5PV2")},"0uMg":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"BjView"})(["text-align:center;line-height:",";height:",";min-height:",";position:relative;bottom:0;left:0;width:100%;background:#fff;font-size:0.16rem;color:#108ee9;"],"0.44rem;","0.44rem;","0.44rem;");t.default=r},"2Jj9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"NoDataView__NoData"})(["display:flex;align-items:center;justify-content:center;height:1rem;color:#666;"]);t.default=r},"5PV2":function(e,t,n){var a=n("WNs3");"string"==typeof a&&(a=[[e.i,a,""]]);n("DkTI")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},FI4c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"LoadMoreView__LoadMore"})(["text-align:center;line-height:0.44rem;color:#666;"]);t.default=r},HQdF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,o,i,l,d,s=I(n("KDvK")),u=I(n("2V83")),c=I(n("nbCY")),A=I(n("nwkg")),f=I(n("pRfh")),m=I(n("clYf")),h=I(n("G+8T")),p=I(n("p02J")),g=I(n("cLmd")),C=I(n("dAt5")),B=I(n("Fo7F")),E=I(n("glBr"));n("dTC+"),n("cmGT"),n("ZsLX"),n("/Txa"),n("bCZg");var b=n("cDcd"),v=I(b),w=I(n("7l6G")),_=I(n("gJnY")),y=I(n("APrv")),x=(I(n("SU3N")),I(n("sSWE"))),k=I(n("FI4c")),M=I(n("2Jj9")),T=I(n("bCfC")),Y=I(n("fp/F")),z=I(n("V61l")),S=I(n("ypVV")),N=I(n("0uMg")),R=n("rRcN");function I(e){return e&&e.__esModule?e:{default:e}}var P=E.default.Item,j=P.Brief,V=(0,R.contextConsumers)(function(e){return{initialPage:e.getIn(["init","initialPageCopys"])}})((o=r=function(e){function t(){var e,n,a,r,o,i=this;(0,p.default)(this,t);for(var l=arguments.length,d=Array(l),s=0;s<l;s++)d[s]=arguments[s];return n=a=(0,C.default)(this,(e=t.__proto__||(0,h.default)(t)).call.apply(e,[this].concat(d))),a.state={counts:{}},a.handleChange=function(e,t){a.props.dispatch.setIn(["init","initialPageCopys"],t)},a.handleCount=function(e,t){var n=a.state.counts;n[e]=t,a.setState({counts:n})},a.handleClick=(o=(0,m.default)(f.default.mark(function e(t){var n,r;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.props.history,"N"!=t.readState){e.next=6;break}return e.next=4,Request("cc/read",{method:"post",params:{ccId:t.ccId}});case 4:r=e.sent,console.log(r);case 6:"form"==t.type?n.push("/approved/detail/"+t.businessId+"?readState="+t.readState):n.push("/notice/approved/"+t.businessId);case 7:case"end":return e.stop()}},e,i)})),function(e){return o.apply(this,arguments)}),r=n,(0,C.default)(a,r)}return(0,B.default)(t,e),(0,g.default)(t,[{key:"render",value:function(){var e=this,t=this.props.initialPage,n=this.state.counts,a=[{title:"全部",sub:"0"},{title:v.default.createElement(A.default,{text:n[1]},"未读"),sub:"1"},{title:"已读",sub:"2"}];return v.default.createElement(w.default,null,v.default.createElement(c.default,{mode:"light",icon:v.default.createElement(y.default,null)},"我的抄送"),v.default.createElement(_.default,null,v.default.createElement(u.default,{tabs:a,initialPage:t,onChange:this.handleChange},a&&a.map(function(n,a){return v.default.createElement(D,{key:a,index:a,cur:t,onClick:e.handleClick,onCount:e.handleCount})}))))}}]),t}(b.Component),r.defaultProps={initialPage:0},a=o))||a;t.default=V;var D=(l=i=function(e){function t(e){(0,p.default)(this,t);var n=(0,C.default)(this,(t.__proto__||(0,h.default)(t)).call(this,e));return d.call(n),n.state={data:[],loading:!0,page:1,hasNext:!0},n.loading=!1,n}return(0,B.default)(t,e),(0,g.default)(t,[{key:"componentWillMount",value:function(){this.handleinitReq(this.props,!0)}},{key:"componentWillReceiveProps",value:function(e){this.handleinitReq(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.onClick,a=t.index,r=this.state,o=r.data,i=r.hasNext,l=r.loading;return v.default.createElement(T.default,null,v.default.createElement(Y.default,{onScroll:this.handleScroll},v.default.createElement(E.default,null,o.length>0?o.map(function(e){var t=e.ccUserName||e.userName||"";return v.default.createElement(P,{key:e.businessId,arrow:"horizontal",className:x.default.Item,thumb:v.default.createElement(z.default,null,t.slice(0,1)),multipleLine:!0,onClick:n.bind(null,e)},v.default.createElement("div",null,e.ccTitle),v.default.createElement(j,null,v.default.createElement("div",null,"申请时间：",e.createTime),v.default.createElement("div",null,"抄送时间：",e.ccTime),"N"==e.readState?v.default.createElement(S.default,{disabled:!0},"未读"):v.default.createElement(S.default,null,"已读")))}):v.default.createElement(P,null,v.default.createElement(M.default,null,"暂无数据"))),v.default.createElement("div",{ref:function(t){return e.load=t}}),i?!l&&v.default.createElement(k.default,{onClick:this.handleReq},"更多数据加载中..."):o.length>0&&v.default.createElement(k.default,null,"没有更多数据了")),1==a&&v.default.createElement(N.default,{onClick:this.handleYd},"标记全部为已读"))}}]),t}(b.Component),i.defaultProps={pageSize:10},d=function(){var e,t=this;this.handleinitReq=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.cur;(e.index==a||n)&&t.handleReq(0,[],!0)},this.handleScroll=function(e){t.load.getBoundingClientRect().top<window.screen.height+100&&t.handleReq()},this.handleReq=(e=(0,m.default)(f.default.mark(function e(){var n,a,r,o,i,l,d,s,u,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.page,A=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.state.data,m=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.state.hasNext;return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return");case 2:if(m){e.next=4;break}return e.abrupt("return");case 4:return t.loading=!0,n=t.props,a=n.index,r=n.pageSize,o=n.onCount,c+=1,i={userId:localStorage.userId,uid:localStorage.userId,pageNo:c,pageSize:r,orgid:localStorage.organizationId},1==a?i.readState="N":2==a&&(i.readState="Y"),e.next=11,Request("cc/getCcList",{params:i});case 11:(l=e.sent).success&&(d=l.data.page,s=d.list,u=d.count,A=A.concat(s),t.setState({data:A,page:c,loading:!1,count:u,hasNext:s.length>0&&s.length>r-1}),1==a&&o&&o(1,u)),t.loading=!1;case 14:case"end":return e.stop()}},e,t)})),function(){return e.apply(this,arguments)}),this.handleYd=(0,m.default)(f.default.mark(function e(){return f.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Request("cc/readAll",{method:"post",params:{userId:localStorage.userId,orgid:localStorage.organizationId}});case 2:e.sent.success&&(s.default.info("标记已读成功"),t.handleReq(0,[],!0));case 4:case"end":return e.stop()}},e,t)}))},l)},Jft9:function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,".RelatedToMe_Lazy_8D3d7 {\n  display: flex;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  flex-direction: column; }\n\n.RelatedToMe_LazyWarper_33mOu {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  overflow-y: auto;\n  flex: 1; }\n\n.RelatedToMe_Item_30ZrA .am-list-thumb {\n  margin-right: 0 !important;\n  margin-left: 0.15rem; }\n\n.RelatedToMe_noItem_1BFlF {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1rem;\n  color: #666; }\n\n.RelatedToMe_thumb_3tSEB {\n  width: 0.4rem;\n  height: 0.4rem;\n  background: #108ee9;\n  border-radius: 0.4rem;\n  text-align: center;\n  line-height: 0.4rem;\n  color: #fff;\n  font-size: 0.16rem; }\n\n.RelatedToMe_status_1Wr09 {\n  color: #f00; }\n\n.RelatedToMe_statusAgree_1OThJ {\n  color: green; }\n\n.RelatedToMe_loadmore_o6TB_ {\n  text-align: center;\n  line-height: 0.44rem;\n  color: #666; }\n\n.RelatedToMe_ydbtn_10MA9 {\n  text-align: center;\n  line-height: 0.44rem;\n  height: 0.44rem;\n  min-height: 0.44rem;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: #fff;\n  font-size: 0.16rem;\n  color: #108ee9; }\n","",{version:3,sources:["E:/www/webpack4/src/pages/RelatedToMe/RelatedToMe.scss"],names:[],mappings:"AAAA;EACE,cAAc;EACd,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,uBAAuB,EAAE;;AAE3B;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,QAAQ,EAAE;;AAEZ;EACE,2BAA2B;EAC3B,qBAAqB,EAAE;;AAEzB;EACE,cAAc;EACd,oBAAoB;EACpB,wBAAwB;EACxB,aAAa;EACb,YAAY,EAAE;;AAEhB;EACE,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB,EAAE;;AAEvB;EACE,YAAY,EAAE;;AAEhB;EACE,aAAa,EAAE;;AAEjB;EACE,mBAAmB;EACnB,qBAAqB;EACrB,YAAY,EAAE;;AAEhB;EACE,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,eAAe,EAAE",file:"RelatedToMe.scss",sourcesContent:[".Lazy {\n  display: flex;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  flex-direction: column; }\n\n.LazyWarper {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  overflow-y: auto;\n  flex: 1; }\n\n.Item :global(.am-list-thumb) {\n  margin-right: 0 !important;\n  margin-left: 0.15rem; }\n\n.noItem {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1rem;\n  color: #666; }\n\n.thumb {\n  width: 0.4rem;\n  height: 0.4rem;\n  background: #108ee9;\n  border-radius: 0.4rem;\n  text-align: center;\n  line-height: 0.4rem;\n  color: #fff;\n  font-size: 0.16rem; }\n\n.status {\n  color: #f00; }\n\n.statusAgree {\n  color: green; }\n\n.loadmore {\n  text-align: center;\n  line-height: 0.44rem;\n  color: #666; }\n\n.ydbtn {\n  text-align: center;\n  line-height: 0.44rem;\n  height: 0.44rem;\n  min-height: 0.44rem;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: #fff;\n  font-size: 0.16rem;\n  color: #108ee9; }\n"],sourceRoot:""}]),t.locals={Lazy:"RelatedToMe_Lazy_8D3d7",LazyWarper:"RelatedToMe_LazyWarper_33mOu",Item:"RelatedToMe_Item_30ZrA",noItem:"RelatedToMe_noItem_1BFlF",thumb:"RelatedToMe_thumb_3tSEB",status:"RelatedToMe_status_1Wr09",statusAgree:"RelatedToMe_statusAgree_1OThJ",loadmore:"RelatedToMe_loadmore_o6TB_",ydbtn:"RelatedToMe_ydbtn_10MA9"}},NbhV:function(e,t,n){e.exports=n("AOTY")(57)},SU3N:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=(a=n("cDcd"))&&a.__esModule?a:{default:a};t.default=function(e){var t=e.time,n=new Date(parseInt(t)),a=n.getFullYear()+"-",o=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",i=n.getDate()+" ",l=n.getHours();l=l<10?"0"+l:l;var d=n.getMinutes();d=d<10?"0"+d:d;var s=n.getSeconds(),u=a+o+i+l+":"+d+":"+(s=s<10?"0"+s:s);return r.default.createElement("span",null,u)}},V61l:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"ThumbView"})(["width:0.4rem;height:0.4rem;background:#108ee9;border-radius:0.4rem;text-align:center;line-height:0.4rem;color:#fff;font-size:0.16rem;"]);t.default=r},WNs3:function(e,t,n){(e.exports=n("3G5m")(!0)).push([e.i,'.am-badge {\n  position: relative;\n  display: inline-block;\n  line-height: 1;\n  vertical-align: middle;\n}\n.am-badge-text {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: absolute;\n  top: -0.06rem;\n  height: 0.18rem;\n  line-height: 0.18rem;\n  min-width: 0.09rem;\n  border-radius: 0.12rem;\n  padding: 0 0.05rem;\n  text-align: center;\n  font-size: 0.12rem;\n  color: #fff;\n  background-color: #ff5b05;\n  white-space: nowrap;\n  -webkit-transform: translateX(-45%);\n          transform: translateX(-45%);\n  -webkit-transform-origin: -10% center;\n          transform-origin: -10% center;\n  z-index: 10;\n  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\\5FAE\\8F6F\\96C5\\9ED1", SimSun, sans-serif;\n}\n.am-badge-text a {\n  color: #fff;\n}\n.am-badge-text p {\n  margin: 0;\n  padding: 0;\n}\n.am-badge-hot .am-badge-text {\n  background-color: #f96268;\n}\n.am-badge-dot {\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  -webkit-transform-origin: 0 center;\n          transform-origin: 0 center;\n  top: -0.04rem;\n  height: 0.08rem;\n  width: 0.08rem;\n  border-radius: 100%;\n  background: #ff5b05;\n  z-index: 10;\n}\n.am-badge-dot-large {\n  height: 0.16rem;\n  width: 0.16rem;\n}\n.am-badge-not-a-wrapper .am-badge-text,\n.am-badge-not-a-wrapper .am-badge-dot {\n  top: auto;\n  display: block;\n  position: relative;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.am-badge-corner {\n  width: 0.8rem;\n  padding: 0.08rem;\n  position: absolute;\n  right: -0.32rem;\n  top: 0.08rem;\n  background-color: #ff5b05;\n  color: #fff;\n  white-space: nowrap;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  text-align: center;\n  font-size: 0.15rem;\n}\n.am-badge-corner-wrapper {\n  overflow: hidden;\n}\n',"",{version:3,sources:["E:/www/webpack4/node_modules/.2.1.8@antd-mobile/lib/badge/style/index.less"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,sBAAsB;EACtB,eAAe;EACf,uBAAuB;CACxB;AACD;EACE,mCAAmC;EACnC,oCAAoC;EACpC,mCAAmC;EACnC,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,0BAA0B;EAC1B,oBAAoB;EACpB,oCAAoC;UAC5B,4BAA4B;EACpC,sCAAsC;UAC9B,8BAA8B;EACtC,YAAY;EACZ,2IAA2I;CAC5I;AACD;EACE,YAAY;CACb;AACD;EACE,UAAU;EACV,WAAW;CACZ;AACD;EACE,0BAA0B;CAC3B;AACD;EACE,mBAAmB;EACnB,oCAAoC;UAC5B,4BAA4B;EACpC,mCAAmC;UAC3B,2BAA2B;EACnC,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,oBAAoB;EACpB,oBAAoB;EACpB,YAAY;CACb;AACD;EACE,gBAAgB;EAChB,eAAe;CAChB;AACD;;EAEE,UAAU;EACV,eAAe;EACf,mBAAmB;EACnB,iCAAiC;UACzB,yBAAyB;CAClC;AACD;EACE,cAAc;EACd,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,0BAA0B;EAC1B,YAAY;EACZ,oBAAoB;EACpB,iCAAiC;UACzB,yBAAyB;EACjC,mBAAmB;EACnB,mBAAmB;CACpB;AACD;EACE,iBAAiB;CAClB",file:"index.less",sourcesContent:['.am-badge {\n  position: relative;\n  display: inline-block;\n  line-height: 1;\n  vertical-align: middle;\n}\n.am-badge-text {\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  position: absolute;\n  top: -0.06rem;\n  height: 0.18rem;\n  line-height: 0.18rem;\n  min-width: 0.09rem;\n  border-radius: 0.12rem;\n  padding: 0 0.05rem;\n  text-align: center;\n  font-size: 0.12rem;\n  color: #fff;\n  background-color: #ff5b05;\n  white-space: nowrap;\n  -webkit-transform: translateX(-45%);\n          transform: translateX(-45%);\n  -webkit-transform-origin: -10% center;\n          transform-origin: -10% center;\n  z-index: 10;\n  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "\\5FAE\\8F6F\\96C5\\9ED1", SimSun, sans-serif;\n}\n.am-badge-text a {\n  color: #fff;\n}\n.am-badge-text p {\n  margin: 0;\n  padding: 0;\n}\n.am-badge-hot .am-badge-text {\n  background-color: #f96268;\n}\n.am-badge-dot {\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  -webkit-transform-origin: 0 center;\n          transform-origin: 0 center;\n  top: -0.04rem;\n  height: 0.08rem;\n  width: 0.08rem;\n  border-radius: 100%;\n  background: #ff5b05;\n  z-index: 10;\n}\n.am-badge-dot-large {\n  height: 0.16rem;\n  width: 0.16rem;\n}\n.am-badge-not-a-wrapper .am-badge-text,\n.am-badge-not-a-wrapper .am-badge-dot {\n  top: auto;\n  display: block;\n  position: relative;\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n}\n.am-badge-corner {\n  width: 0.8rem;\n  padding: 0.08rem;\n  position: absolute;\n  right: -0.32rem;\n  top: 0.08rem;\n  background-color: #ff5b05;\n  color: #fff;\n  white-space: nowrap;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  text-align: center;\n  font-size: 0.15rem;\n}\n.am-badge-corner-wrapper {\n  overflow: hidden;\n}\n'],sourceRoot:""}])},bCfC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"LazyView"})(["display:flex;position:relative;height:100%;width:100%;flex-direction:column;"]);t.default=r},"fp/F":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n("NbhV")),r=o(n("jpiG"));function o(e){return e&&e.__esModule?e:{default:e}}var i=(0,a.default)(r.default).withConfig({displayName:"LazyWarperView"})(["height:100%;width:100%;position:relative;overflow-y:auto;flex:1;"]);t.default=i},jpiG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r,o=A(n("G+8T")),i=A(n("p02J")),l=A(n("cLmd")),d=A(n("dAt5")),s=A(n("Fo7F")),u=n("cDcd"),c=A(u);function A(e){return e&&e.__esModule?e:{default:e}}var f=(r=a=function(e){function t(e){(0,i.default)(this,t);var n=(0,d.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.handleScroll=function(){var e=new Date;if(!(n.startTime&&e-n.startTime<n.props.delaytime)){n.startTime=e;var t={scrollTop:n.lazyWarper.scrollTop,warperHeight:n.lazyWarper.getBoundingClientRect().height};n.props.onScroll&&n.props.onScroll(t)}},n.handleTouchStart=function(e){var t=e.touches[0]||e;n._startX=t.pageX,n._startY=t.pageY},n.handleTouchMove=function(e){var t=e.touches[0]||e,a=t.pageX-n._startX,r=t.pageY-n._startY;0==n.moveXY&&(Math.abs(a)>Math.abs(r)?n.moveXY=1:n.moveXY=2),1==n.moveXY?n.lazyWarper.style.overflowY="hidden":e.stopPropagation()},n.handleTouchEnd=function(e){n.lazyWarper.style.overflowY="auto",n.moveXY=0},n.startTime=null,n.moveXY=0,n}return(0,s.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.props.scrollTop&&(this.lazyWarper.scrollTop=this.props.scrollTop,this.handleScroll())}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{ref:function(t){return e.lazyWarper=t},onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onScroll:this.handleScroll,style:this.props.style,className:this.props.className},this.props.children)}}]),t}(u.Component),a.defaultProps={delaytime:20,scrollTop:0},r);t.default=f},nwkg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=c(n("KN1l")),r=c(n("fHx6")),o=c(n("p02J")),i=c(n("cLmd")),l=c(n("dAt5")),d=c(n("Fo7F")),s=c(n("0L45")),u=c(n("cDcd"));function c(e){return e&&e.__esModule?e:{default:e}}var A=function(e){function t(){return(0,o.default)(this,t),(0,l.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,d.default)(t,e),(0,i.default)(t,[{key:"render",value:function(){var e,t,n=this.props,o=n.className,i=n.prefixCls,l=n.children,d=n.text,c=n.size,A=n.overflowCount,f=n.dot,m=n.corner,h=n.hot,p=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&(n[a[r]]=e[a[r]])}return n}(n,["className","prefixCls","children","text","size","overflowCount","dot","corner","hot"]);A=A,d="number"==typeof d&&d>A?A+"+":d,f&&(d="");var g=(0,s.default)((e={},(0,r.default)(e,i+"-dot",f),(0,r.default)(e,i+"-dot-large",f&&"large"===c),(0,r.default)(e,i+"-text",!f&&!m),(0,r.default)(e,i+"-corner",m),(0,r.default)(e,i+"-corner-large",m&&"large"===c),e)),C=(0,s.default)(i,o,(t={},(0,r.default)(t,i+"-not-a-wrapper",!l),(0,r.default)(t,i+"-corner-wrapper",m),(0,r.default)(t,i+"-hot",!!h),(0,r.default)(t,i+"-corner-wrapper-large",m&&"large"===c),t));return u.default.createElement("span",{className:C},l,(d||f)&&u.default.createElement("sup",(0,a.default)({className:g},p),d))}}]),t}(u.default.Component);t.default=A,A.defaultProps={prefixCls:"am-badge",size:"small",overflowCount:99,dot:!1,corner:!1},e.exports=t.default},sSWE:function(e,t,n){var a=n("Jft9");"string"==typeof a&&(a=[[e.i,a,""]]);n("DkTI")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},ypVV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,r=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"StatusView"})(["color:",";"],function(e){return e.disabled?"#f00":"green"});t.default=r}}]);