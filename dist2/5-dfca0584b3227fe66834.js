(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0uMg":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,l=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"BjView"})(["text-align:center;line-height:",";height:",";min-height:",";position:relative;bottom:0;left:0;width:100%;background:#fff;font-size:0.16rem;color:#108ee9;"],"0.44rem;","0.44rem;","0.44rem;");t.default=l},"2Jj9":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,l=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"NoDataView__NoData"})(["display:flex;align-items:center;justify-content:center;height:1rem;color:#666;"]);t.default=l},FI4c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,l=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"LoadMoreView__LoadMore"})(["text-align:center;line-height:0.44rem;color:#666;"]);t.default=l},HQdF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l,r,o,i,u,d=N(n("pRfh")),s=N(n("clYf")),c=N(n("G+8T")),f=N(n("p02J")),h=N(n("cLmd")),m=N(n("dAt5")),A=N(n("Fo7F")),p=n("cDcd"),g=N(p),E=n("Lrpq"),v=N(n("7l6G")),_=N(n("gJnY")),B=N(n("APrv")),C=(N(n("SU3N")),N(n("sSWE"))),y=N(n("FI4c")),b=N(n("2Jj9")),M=N(n("bCfC")),w=N(n("fp/F")),T=N(n("V61l")),x=N(n("ypVV")),R=N(n("0uMg")),S=n("rRcN");function N(e){return e&&e.__esModule?e:{default:e}}var Y=E.List.Item,k=Y.Brief,z=(0,S.contextConsumers)(function(e){return{initialPage:e.getIn(["init","initialPageCopys"])}})((r=l=function(e){function t(){var e,n,a,l,r,o=this;(0,f.default)(this,t);for(var i=arguments.length,u=Array(i),h=0;h<i;h++)u[h]=arguments[h];return n=a=(0,m.default)(this,(e=t.__proto__||(0,c.default)(t)).call.apply(e,[this].concat(u))),a.state={counts:{}},a.handleChange=function(e,t){a.props.dispatch.setIn(["init","initialPageCopys"],t)},a.handleCount=function(e,t){var n=a.state.counts;n[e]=t,a.setState({counts:n})},a.handleClick=(r=(0,s.default)(d.default.mark(function e(t){var n,l;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.props.history,"N"!=t.readState){e.next=6;break}return e.next=4,Request("cc/read",{method:"post",params:{ccId:t.ccId}});case 4:l=e.sent,console.log(l);case 6:"form"==t.type?n.push("/approved/detail/"+t.businessId+"?readState="+t.readState):n.push("/notice/approved/"+t.businessId);case 7:case"end":return e.stop()}},e,o)})),function(e){return r.apply(this,arguments)}),l=n,(0,m.default)(a,l)}return(0,A.default)(t,e),(0,h.default)(t,[{key:"render",value:function(){var e=this,t=this.props.initialPage,n=this.state.counts,a=[{title:"全部",sub:"0"},{title:g.default.createElement(E.Badge,{text:n[1]},"未读"),sub:"1"},{title:"已读",sub:"2"}];return g.default.createElement(v.default,null,g.default.createElement(E.NavBar,{mode:"light",icon:g.default.createElement(B.default,null)},"我的抄送"),g.default.createElement(_.default,{className:C.default.content},g.default.createElement(E.Tabs,{tabs:a,initialPage:t,onChange:this.handleChange},a&&a.map(function(n,a){return g.default.createElement(I,{key:a,index:a,cur:t,onClick:e.handleClick,onCount:e.handleCount})}))))}}]),t}(p.Component),l.defaultProps={initialPage:0},a=r))||a;t.default=z;var I=(i=o=function(e){function t(e){(0,f.default)(this,t);var n=(0,m.default)(this,(t.__proto__||(0,c.default)(t)).call(this,e));return u.call(n),n.state={data:[],loading:!0,page:1,hasNext:!0},n.loading=!1,n}return(0,A.default)(t,e),(0,h.default)(t,[{key:"componentWillMount",value:function(){this.handleinitReq(this.props,!0)}},{key:"componentWillReceiveProps",value:function(e){this.handleinitReq(e)}},{key:"render",value:function(){var e=this,t=this.props,n=t.onClick,a=t.index,l=this.state,r=l.data,o=l.hasNext,i=l.loading;return g.default.createElement(M.default,null,g.default.createElement(w.default,{onScroll:this.handleScroll},g.default.createElement(E.List,null,r.length>0?r.map(function(e){var t=e.ccUserName||e.userName||"";return g.default.createElement(Y,{key:e.businessId,arrow:"horizontal",className:C.default.Item,thumb:g.default.createElement(T.default,null,t.slice(0,1)),multipleLine:!0,onClick:n.bind(null,e)},g.default.createElement("div",null,e.ccTitle),g.default.createElement(k,null,g.default.createElement("div",null,"申请时间：",e.createTime),g.default.createElement("div",null,"抄送时间：",e.ccTime),"N"==e.readState?g.default.createElement(x.default,{disabled:!0},"未读"):g.default.createElement(x.default,null,"已读")))}):g.default.createElement(Y,null,g.default.createElement(b.default,null,"暂无数据"))),g.default.createElement("div",{ref:function(t){return e.load=t}}),o?!i&&g.default.createElement(y.default,{onClick:this.handleReq},"更多数据加载中..."):r.length>0&&g.default.createElement(y.default,null,"没有更多数据了")),1==a&&g.default.createElement(R.default,{onClick:this.handleYd},"标记全部为已读"))}}]),t}(p.Component),o.defaultProps={pageSize:10},u=function(){var e,t=this;this.handleinitReq=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.cur;(e.index==a||n)&&t.handleReq(0,[],!0)},this.handleScroll=function(e){t.load.getBoundingClientRect().top<window.screen.height+100&&t.handleReq()},this.handleReq=(e=(0,s.default)(d.default.mark(function e(){var n,a,l,r,o,i,u,s,c,f=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t.state.page,h=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.state.data,m=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.state.hasNext;return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.loading){e.next=2;break}return e.abrupt("return");case 2:if(m){e.next=4;break}return e.abrupt("return");case 4:return t.loading=!0,n=t.props,a=n.index,l=n.pageSize,r=n.onCount,f+=1,o={userId:localStorage.userId,uid:localStorage.userId,pageNo:f,pageSize:l,orgid:localStorage.organizationId},1==a?o.readState="N":2==a&&(o.readState="Y"),e.next=11,Request("cc/getCcList",{params:o});case 11:(i=e.sent).success&&(u=i.data.page,s=u.list,c=u.count,h=h.concat(s),t.setState({data:h,page:f,loading:!1,count:c,hasNext:s.length>0&&s.length>l-1}),1==a&&r&&r(1,c)),t.loading=!1;case 14:case"end":return e.stop()}},e,t)})),function(){return e.apply(this,arguments)}),this.handleYd=(0,s.default)(d.default.mark(function e(){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Request("cc/readAll",{method:"post",params:{userId:localStorage.userId,orgid:localStorage.organizationId}});case 2:e.sent.success&&(E.Toast.info("标记已读成功"),t.handleReq(0,[],!0));case 4:case"end":return e.stop()}},e,t)}))},i)},Jft9:function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,".RelatedToMe_Lazy_8D3d7 {\n  display: flex;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  flex-direction: column; }\n\n.RelatedToMe_LazyWarper_33mOu {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  overflow-y: auto;\n  flex: 1; }\n\n.RelatedToMe_Item_30ZrA .am-list-thumb {\n  margin-right: 0 !important;\n  margin-left: 0.15rem; }\n\n.RelatedToMe_noItem_1BFlF {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1rem;\n  color: #666; }\n\n.RelatedToMe_thumb_3tSEB {\n  width: 0.4rem;\n  height: 0.4rem;\n  background: #108ee9;\n  border-radius: 0.4rem;\n  text-align: center;\n  line-height: 0.4rem;\n  color: #fff;\n  font-size: 0.16rem; }\n\n.RelatedToMe_status_1Wr09 {\n  color: #f00; }\n\n.RelatedToMe_statusAgree_1OThJ {\n  color: green; }\n\n.RelatedToMe_loadmore_o6TB_ {\n  text-align: center;\n  line-height: 0.44rem;\n  color: #666; }\n\n.RelatedToMe_ydbtn_10MA9 {\n  text-align: center;\n  line-height: 0.44rem;\n  height: 0.44rem;\n  min-height: 0.44rem;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: #fff;\n  font-size: 0.16rem;\n  color: #108ee9; }\n","",{version:3,sources:["E:/www/webpack4/src/pages/RelatedToMe/RelatedToMe.scss"],names:[],mappings:"AAAA;EACE,cAAc;EACd,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,uBAAuB,EAAE;;AAE3B;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,QAAQ,EAAE;;AAEZ;EACE,2BAA2B;EAC3B,qBAAqB,EAAE;;AAEzB;EACE,cAAc;EACd,oBAAoB;EACpB,wBAAwB;EACxB,aAAa;EACb,YAAY,EAAE;;AAEhB;EACE,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,sBAAsB;EACtB,mBAAmB;EACnB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB,EAAE;;AAEvB;EACE,YAAY,EAAE;;AAEhB;EACE,aAAa,EAAE;;AAEjB;EACE,mBAAmB;EACnB,qBAAqB;EACrB,YAAY,EAAE;;AAEhB;EACE,mBAAmB;EACnB,qBAAqB;EACrB,gBAAgB;EAChB,oBAAoB;EACpB,mBAAmB;EACnB,UAAU;EACV,QAAQ;EACR,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;EACnB,eAAe,EAAE",file:"RelatedToMe.scss",sourcesContent:[".Lazy {\n  display: flex;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  flex-direction: column; }\n\n.LazyWarper {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  overflow-y: auto;\n  flex: 1; }\n\n.Item :global(.am-list-thumb) {\n  margin-right: 0 !important;\n  margin-left: 0.15rem; }\n\n.noItem {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1rem;\n  color: #666; }\n\n.thumb {\n  width: 0.4rem;\n  height: 0.4rem;\n  background: #108ee9;\n  border-radius: 0.4rem;\n  text-align: center;\n  line-height: 0.4rem;\n  color: #fff;\n  font-size: 0.16rem; }\n\n.status {\n  color: #f00; }\n\n.statusAgree {\n  color: green; }\n\n.loadmore {\n  text-align: center;\n  line-height: 0.44rem;\n  color: #666; }\n\n.ydbtn {\n  text-align: center;\n  line-height: 0.44rem;\n  height: 0.44rem;\n  min-height: 0.44rem;\n  position: relative;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: #fff;\n  font-size: 0.16rem;\n  color: #108ee9; }\n"],sourceRoot:""}]),t.locals={Lazy:"RelatedToMe_Lazy_8D3d7",LazyWarper:"RelatedToMe_LazyWarper_33mOu",Item:"RelatedToMe_Item_30ZrA",noItem:"RelatedToMe_noItem_1BFlF",thumb:"RelatedToMe_thumb_3tSEB",status:"RelatedToMe_status_1Wr09",statusAgree:"RelatedToMe_statusAgree_1OThJ",loadmore:"RelatedToMe_loadmore_o6TB_",ydbtn:"RelatedToMe_ydbtn_10MA9"}},NbhV:function(e,t,n){e.exports=n("AOTY")(57)},SU3N:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,l=(a=n("cDcd"))&&a.__esModule?a:{default:a};t.default=function(e){var t=e.time,n=new Date(parseInt(t)),a=n.getFullYear()+"-",r=(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-",o=n.getDate()+" ",i=n.getHours();i=i<10?"0"+i:i;var u=n.getMinutes();u=u<10?"0"+u:u;var d=n.getSeconds(),s=a+r+o+i+":"+u+":"+(d=d<10?"0"+d:d);return l.default.createElement("span",null,s)}},V61l:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,l=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"ThumbView"})(["width:0.4rem;height:0.4rem;background:#108ee9;border-radius:0.4rem;text-align:center;line-height:0.4rem;color:#fff;font-size:0.16rem;"]);t.default=l},bCfC:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,l=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"LazyView"})(["display:flex;position:relative;height:100%;width:100%;flex-direction:column;"]);t.default=l},"fp/F":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("NbhV")),l=r(n("jpiG"));function r(e){return e&&e.__esModule?e:{default:e}}var o=(0,a.default)(l.default).withConfig({displayName:"LazyWarperView"})(["height:100%;width:100%;position:relative;overflow-y:auto;flex:1;"]);t.default=o},jpiG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,l,r=f(n("G+8T")),o=f(n("p02J")),i=f(n("cLmd")),u=f(n("dAt5")),d=f(n("Fo7F")),s=n("cDcd"),c=f(s);function f(e){return e&&e.__esModule?e:{default:e}}var h=(l=a=function(e){function t(e){(0,o.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.handleScroll=function(){var e=new Date;if(!(n.startTime&&e-n.startTime<n.props.delaytime)){n.startTime=e;var t={scrollTop:n.lazyWarper.scrollTop,warperHeight:n.lazyWarper.getBoundingClientRect().height};n.props.onScroll&&n.props.onScroll(t)}},n.handleTouchStart=function(e){var t=e.touches[0]||e;n._startX=t.pageX,n._startY=t.pageY},n.handleTouchMove=function(e){var t=e.touches[0]||e,a=t.pageX-n._startX,l=t.pageY-n._startY;0==n.moveXY&&(Math.abs(a)>Math.abs(l)?n.moveXY=1:n.moveXY=2),1==n.moveXY?n.lazyWarper.style.overflowY="hidden":e.stopPropagation()},n.handleTouchEnd=function(e){n.lazyWarper.style.overflowY="auto",n.moveXY=0},n.startTime=null,n.moveXY=0,n}return(0,d.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){this.props.scrollTop&&(this.lazyWarper.scrollTop=this.props.scrollTop,this.handleScroll())}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{ref:function(t){return e.lazyWarper=t},onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onScroll:this.handleScroll,style:this.props.style,className:this.props.className},this.props.children)}}]),t}(s.Component),a.defaultProps={delaytime:20,scrollTop:0},l);t.default=h},sSWE:function(e,t,n){var a=n("Jft9");"string"==typeof a&&(a=[[e.i,a,""]]);n("DkTI")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},ypVV:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,l=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"StatusView"})(["color:",";"],function(e){return e.disabled?"#f00":"green"});t.default=l}}]);