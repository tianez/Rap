(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{E4uO:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n("G+8T")),l=s(n("p02J")),r=s(n("cLmd")),i=s(n("dAt5")),u=s(n("Fo7F")),o=n("cDcd"),d=s(o);function s(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(e){(0,l.default)(this,t);var n=(0,i.default)(this,(t.__proto__||(0,a.default)(t)).call(this,e));return n.state={time:0},n.setIntervalTime=null,n}return(0,u.default)(t,e),(0,r.default)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.id,a=t.time,l=t.onTimeOut,r=Date.parse(new Date);localStorage["onlineexam_time_"+n]=r,this.setIntervalTime=setInterval(function(){a-=1,e.setState({time:a}),0==a&&(l&&l(),clearInterval(e.setIntervalTime))},1e3)}},{key:"componentWillReceiveProps",value:function(e){e.isover&&clearInterval(this.setIntervalTime)}},{key:"componentWillUnmount",value:function(){clearInterval(this.setIntervalTime)}},{key:"render",value:function(){var e=this.props,t=e.overtitle,n=e.isover,a=this.state.time;if(0==a||n)return d.default.createElement("div",null,t||"答题时间到");var l=["00","01","02","03","04","05","06","07","08","09"],r=parseInt(a/3600),i=parseInt(a%3600/60),u=parseInt(a%60);return[l[r]||r,l[i]||i,l[u]||u].join(":")}}]),t}(o.Component);t.default=c},"EP+1":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,l=((a=n("NbhV"))&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"Footer"})(["display:flex;line-height:0.44rem;height:0.44rem;"]);t.default=l},HOZa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=C(n("9NYg")),l=C(n("nbCY")),r=C(n("pRfh")),i=C(n("clYf")),u=C(n("G+8T")),o=C(n("p02J")),d=C(n("cLmd")),s=C(n("dAt5")),c=C(n("Fo7F")),f=C(n("glBr"));n("rj6/"),n("ZsLX"),n("bCZg");var m=n("cDcd"),h=C(m),p=(C(n("NbhV")),C(n("VaTa")),C(n("7l6G"))),v=C(n("gJnY")),g=C(n("APrv")),E=(C(n("hrJp")),C(n("UhCX"))),A=C(n("T1jg")),x=C(n("sPdF")),_=C(n("EP+1")),b=C(n("onmr"));function C(e){return e&&e.__esModule?e:{default:e}}var w=f.default.Item,y=w.Brief,k=function(e){function t(e){(0,o.default)(this,t);var n=(0,s.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return n.handlePre=function(){var e=n.state.cur;0!=e&&n.setState({cur:e-1})},n.handleNext=function(){var e=n.state,t=e.cur;t!=e.list.length-1&&n.setState({cur:t+1})},e.match.params.ExamId,n.state={cur:0,list:[],answer:{}},n}return(0,c.default)(t,e),(0,d.default)(t,[{key:"componentWillMount",value:function(){var e=(0,i.default)(r.default.mark(function e(){var t,n;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Request("answer/detail",{params:{id:this.props.match.params.ExamId}});case 2:(t=e.sent).success&&(n=t.data.detail,this.setState({timeout:1*n.examtime,list:n.detailInfoList,score:n.score}));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){this.props.match.params.ExamId;var e=this.state,t=e.cur,n=e.list,r=(e.answer,e.showSheet,e.score);if(0==n.length)return null;var i=n[t],u=i.answer;1*i.type==2&&(u=u.split(",")||[]);var o=i.subjecanswertList.map(function(e){return e.answerTitle}),d=["A","B","C","D","E","F"];return h.default.createElement(p.default,null,h.default.createElement(l.default,{mode:"light",icon:h.default.createElement(g.default,null)},"得分：",r||0),h.default.createElement(v.default,{className:b.default.content},h.default.createElement(E.default,{cur:t,curItem:i,list:n,totalscore:10}),h.default.createElement("div",{className:b.default.topic},i.content),h.default.createElement(A.default,{curItem:i,curAnswer:u,onChange:this.handleChange}),h.default.createElement(a.default,null),h.default.createElement(f.default,null,h.default.createElement(w,null,"正确答案：",i.sureanswerArr.map(function(e){return h.default.createElement("span",{key:e},d[o.indexOf(e)]," ")})),h.default.createElement(w,null,"解析：",h.default.createElement(y,null,i.remarks)))),h.default.createElement(_.default,null,h.default.createElement(x.default,{border:!0,disabled:0==t,onClick:this.handlePre},"上一题"),h.default.createElement(x.default,{disabled:t+1==n.length,onClick:this.handleNext},"下一题")))}}]),t}(m.Component);t.default=k},IgxL:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=I(n("nbCY")),l=I(n("pRfh")),r=I(n("KDvK")),i=I(n("clYf")),u=I(n("G+8T")),o=I(n("p02J")),d=I(n("cLmd")),s=I(n("dAt5")),c=I(n("Fo7F")),f=I(n("BgNd")),m=I(n("glBr")),h=I(n("0xQ3"));n("ZsLX"),n("dTC+"),n("qoEu"),n("bCZg"),n("dMhq");var p=n("cDcd"),v=I(p),g=(I(n("NbhV")),I(n("VaTa"))),E=I(n("7l6G")),A=I(n("gJnY")),x=I(n("APrv")),_=I(n("hrJp")),b=I(n("E4uO")),C=I(n("UhCX")),w=I(n("T1jg")),y=I(n("sPdF")),k=I(n("EP+1")),B=I(n("onmr"));function I(e){return e&&e.__esModule?e:{default:e}}h.default.CheckboxItem,m.default.Item.Brief;var S=f.default.alert,O=function(e){function t(e){var n=this;(0,o.default)(this,t);var a=(0,s.default)(this,(t.__proto__||(0,u.default)(t)).call(this,e));return a.handlePre=function(){var e=a.state.cur;0!=e&&a.setState({cur:e-1})},a.handleNext=function(){var e=a.state,t=e.cur;t!=e.list.length-1&&a.setState({cur:t+1})},a.handleChangeSheet=function(e){a.setState({cur:e,showSheet:!1})},a.handleShowSheet=function(){var e=a.state.showSheet;a.setState({showSheet:!e})},a.handleChange=function(e){console.log(e),a.props.match.params.ExamId;var t=a.state,n=t.cur,l=t.list,r=(t.data,t.answer),i=l[n];if(1*i.type==1)r[i.subjectid]=e;else{var u=r[i.subjectid]||[],o=u.indexOf(e);-1==o?u.push(e):u.splice(o,1),r[i.subjectid]=u}console.log(r),a.setState({answer:r})},a.handleTimeOut=function(){a.setState({istimeover:!0}),console.log("out")},a.handleSubmit=(0,i.default)(l.default.mark(function e(){var t,i,u,o,d,s,c;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(r.default.loading("答案提交中...",0),t=a.state,i=t.answer,t.list,t.istimeover,!t.isover){e.next=4;break}return e.abrupt("return",r.default.info("你已经提交过答案了"));case 4:return u=a.props.match.params.ExamId,o=(0,g.default)(1*localStorage["onlineexam_time_"+u]).fulldate,d=(0,g.default)().fulldate,e.next=9,Request("answer/save",{method:"post",data:{paperid:u,orgId:localStorage.organizationId,answerperson:localStorage.userId,examstarttime:o,examendtime:d,answers:i}});case 9:(s=e.sent).success?(r.default.hide(),a.setState({isover:!0}),c=a.props.history,S("答题得分",s.data.sum+"分",[{text:"关闭",onPress:function(){return console.log("cancel")},style:"default"},{text:"前往查看答案",onPress:function(){return c.replace("/onlineexam/record/"+s.data.seno)}}])):r.default.info(s.message);case 11:case"end":return e.stop()}},e,n)})),e.match.params.ExamId,a.state={cur:0,detail:{},list:[],answer:{},timeout:0,istimeover:!1,showSheet:!1,score:null,isover:!1},a}return(0,c.default)(t,e),(0,d.default)(t,[{key:"componentWillMount",value:function(){var e=(0,i.default)(l.default.mark(function e(){var t,n;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Request("paper/detail",{params:{id:this.props.match.params.ExamId}});case 2:(t=e.sent).success&&(n=t.data.detail,this.setState({timeout:60*n.examtime,list:n.infos,detail:n}));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props.match.params.ExamId,t=this.state,n=t.cur,l=t.list,r=t.answer,i=t.timeout,u=t.istimeover,o=t.showSheet,d=t.isover,s=t.detail;if(0==l.length)return null;var c=l[n],f=r[c.subjectid];return v.default.createElement(E.default,null,v.default.createElement(a.default,{mode:"light",icon:v.default.createElement(x.default,null),rightContent:v.default.createElement("div",{onClick:this.handleShowSheet},"答题卡")},0!=i&&v.default.createElement(b.default,{time:i,id:e,onTimeOut:this.handleTimeOut,isover:d,overtitle:d?"答题结束":null})),v.default.createElement(A.default,null,v.default.createElement(C.default,{cur:n,curItem:c,totalscore:s.totalscore,list:l}),v.default.createElement("div",{className:B.default.topic},c.subjectname),v.default.createElement(w.default,{curItem:c,curAnswer:f,onChange:this.handleChange}),u&&v.default.createElement("div",{className:B.default.timeover}),o&&v.default.createElement(_.default,{list:l,answer:r,onClick:this.handleChangeSheet})),u?v.default.createElement(k.default,null,v.default.createElement(y.default,{onClick:this.handleSubmit},"提交答案")):v.default.createElement(k.default,null,v.default.createElement(y.default,{border:!0,disabled:0==n,onClick:this.handlePre},"上一题"),n+1!=l.length?v.default.createElement(y.default,{disabled:n+1==l.length,onClick:this.handleNext},"下一题"):v.default.createElement(y.default,{onClick:this.handleSubmit},"提交答案")))}}]),t}(p.Component);t.default=O},NbhV:function(e,t,n){e.exports=n("AOTY")(57)},"O+42":function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,".OnlineExamIndex_Lazy_ZHp0o {\n  display: flex;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  flex-direction: column; }\n\n.OnlineExamIndex_LazyWarper_1hRRu {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  overflow-y: auto;\n  flex: 1; }\n\n.OnlineExamIndex_Item_4MVqy .am-list-thumb {\n  margin-right: 0 !important;\n  margin-left: 0.15rem; }\n\n.OnlineExamIndex_noItem_e4hPj {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1rem;\n  color: #666; }\n\n.OnlineExamIndex_thumb_1vewL {\n  width: 0.6rem;\n  height: 0.6rem;\n  background: #108ee9;\n  border-radius: 0.04rem;\n  text-align: center;\n  line-height: 0.6rem;\n  color: #fff;\n  font-size: 0.16rem; }\n\n.OnlineExamIndex_loadmore_2lw7z {\n  text-align: center;\n  line-height: 0.44rem;\n  color: #666; }\n","",{version:3,sources:["E:/www/webpack4/src/pages/OnlineExam/OnlineExamIndex/OnlineExamIndex.scss"],names:[],mappings:"AAAA;EACE,cAAc;EACd,mBAAmB;EACnB,aAAa;EACb,YAAY;EACZ,uBAAuB,EAAE;;AAE3B;EACE,aAAa;EACb,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,QAAQ,EAAE;;AAEZ;EACE,2BAA2B;EAC3B,qBAAqB,EAAE;;AAEzB;EACE,cAAc;EACd,oBAAoB;EACpB,wBAAwB;EACxB,aAAa;EACb,YAAY,EAAE;;AAEhB;EACE,cAAc;EACd,eAAe;EACf,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,oBAAoB;EACpB,YAAY;EACZ,mBAAmB,EAAE;;AAEvB;EACE,mBAAmB;EACnB,qBAAqB;EACrB,YAAY,EAAE",file:"OnlineExamIndex.scss",sourcesContent:[".Lazy {\n  display: flex;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  flex-direction: column; }\n\n.LazyWarper {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  overflow-y: auto;\n  flex: 1; }\n\n.Item :global(.am-list-thumb) {\n  margin-right: 0 !important;\n  margin-left: 0.15rem; }\n\n.noItem {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1rem;\n  color: #666; }\n\n.thumb {\n  width: 0.6rem;\n  height: 0.6rem;\n  background: #108ee9;\n  border-radius: 0.04rem;\n  text-align: center;\n  line-height: 0.6rem;\n  color: #fff;\n  font-size: 0.16rem; }\n\n.loadmore {\n  text-align: center;\n  line-height: 0.44rem;\n  color: #666; }\n"],sourceRoot:""}]),t.locals={Lazy:"OnlineExamIndex_Lazy_ZHp0o",LazyWarper:"OnlineExamIndex_LazyWarper_1hRRu",Item:"OnlineExamIndex_Item_4MVqy",noItem:"OnlineExamIndex_noItem_e4hPj",thumb:"OnlineExamIndex_thumb_1vewL",loadmore:"OnlineExamIndex_loadmore_2lw7z"}},T1jg:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i(n("glBr")),l=i(n("0xQ3"));n("bCZg"),n("dMhq");var r=i(n("cDcd"));function i(e){return e&&e.__esModule?e:{default:e}}var u=l.default.CheckboxItem;t.default=function(e){var t=e.curItem,n=e.curAnswer,l=e.onChange,i=["A","B","C","D","E","F"],o=t.subjecanswertList||t.answerList;return r.default.createElement(a.default,null,o.map(function(e,a){return 1*t.type==1?r.default.createElement(u,{key:e.id,checked:e.answerTitle==n,onChange:function(){return l&&l(e.answerTitle)}},r.default.createElement("div",null,i[a]," ",e.answerContent)):(n=n||[],r.default.createElement(u,{key:e.id,checked:-1!=n.indexOf(e.answerTitle),onChange:function(){return l&&l(e.answerTitle)}},r.default.createElement("div",null,i[a]," ",e.answerContent)))}))}},UgwG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l,r,i=x(n("2V83")),u=x(n("nbCY")),o=x(n("G+8T")),d=x(n("p02J")),s=x(n("cLmd")),c=x(n("dAt5")),f=x(n("Fo7F"));n("cmGT"),n("ZsLX");var m=n("cDcd"),h=x(m),p=x(n("7l6G")),v=x(n("gJnY")),g=x(n("APrv")),E=x(n("kH4e")),A=x(n("yTKe"));function x(e){return e&&e.__esModule?e:{default:e}}var _=(0,n("rRcN").contextConsumers)(function(e){return{initialPage:e.getIn(["init","initialPageExam"])}})((r=l=function(e){function t(){var e,n,a,l;(0,d.default)(this,t);for(var r=arguments.length,i=Array(r),u=0;u<r;u++)i[u]=arguments[u];return n=a=(0,c.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(i))),a.handleChange=function(e,t){a.props.dispatch.setIn(["init","initialPageExam"],t)},l=n,(0,c.default)(a,l)}return(0,f.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props,t=e.initialPage,n=e.history;return h.default.createElement(p.default,null,h.default.createElement(u.default,{mode:"light",icon:h.default.createElement(g.default,null)},"在线考试"),h.default.createElement(v.default,null,h.default.createElement(i.default,{tabs:[{title:"试卷库",sub:"0"},{title:"考试记录",sub:"1"}],initialPage:t,onChange:this.handleChange},h.default.createElement(E.default,{index:0,cur:t,history:n}),h.default.createElement(A.default,{index:1,cur:t,history:n}))))}}]),t}(m.Component),l.defaultProps={initialPage:0},a=r))||a;t.default=_},UhCX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("cDcd")),l=r(n("NbhV"));function r(e){return e&&e.__esModule?e:{default:e}}var i=l.default.div.withConfig({displayName:"Steps__Warper"})(["color:#108ee9;line-height:0.4rem;padding:0 0.15rem;display:flex;background:#f4f4f4;border-bottom:1px solid #f1f1f1;"]),u=l.default.div.withConfig({displayName:"Steps__Stepd"})(["flex:1;"]);t.default=function(e){var t=e.cur,n=e.curItem,l=e.list;return e.totalscore,a.default.createElement(i,null,a.default.createElement(u,null,1*n.type==1?"单选题":"多选题"),a.default.createElement("div",null,t+1,"/",l.length))}},Ut2a:function(e,t,n){var a=n("O+42");"string"==typeof a&&(a=[[e.i,a,""]]);n("DkTI")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},V3s7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n("cDcd")),l=n("8LOv"),r=o(n("UgwG")),i=o(n("IgxL")),u=o(n("HOZa"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.location,n=e.match;return a.default.createElement(l.Switch,{location:t},a.default.createElement(l.Route,{path:n.url,exact:!0,component:r.default}),a.default.createElement(l.Route,{path:n.url+"/record/:ExamId",exact:!0,component:u.default}),a.default.createElement(l.Route,{path:n.url+"/:ExamId",exact:!0,component:i.default}))}},VaTa:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,l=(a=n("KN1l"))&&a.__esModule?a:{default:a};t.default=function(e){var t=["00","01","02","03","04","05","06","07","08","09"],n=new Date;e&&(10==e.length&&(e=1*e*1e3),n=new Date(e));var a=n.getFullYear(),r=n.getMonth()+1,i=n.getDate(),u=n.getHours(),o=n.getMinutes(),d=n.getSeconds(),s={year:a.toString(),month:t[r]||r.toString(),day:t[i]||i.toString(),hour:t[u]||u.toString(),minute:t[o]||o.toString(),second:t[d]||d.toString()},c=s.year+"-"+s.month+"-"+s.day,f=c+" "+s.hour+":"+s.minute+":"+s.second;return(0,l.default)({},s,{ymd:c,fulldate:f,timestamp:n.getTime()})}},hrJp:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r(n("cDcd")),l=r(n("NbhV"));function r(e){return e&&e.__esModule?e:{default:e}}var i=l.default.div.withConfig({displayName:"AnswerSheet__Sheet"})(["position:absolute;z-index:999;top:0;left:0;width:100%;height:100%;background:#f8f8f8;padding:0.15rem;"]),u=l.default.div.withConfig({displayName:"AnswerSheet__Item"})(["background:",";display:inline-block;width:0.6rem;height:0.6rem;color:#fff;text-align:center;line-height:0.6rem;margin:0.05rem 0.1rem;border-radius:0.6rem;font-size:0.2rem;"],function(e){return e.disabled?"#ccc":"#108ee9"}),o=l.default.div.withConfig({displayName:"AnswerSheet__Tips"})(["line-height:0.24rem;margin:0.15rem 0;"]);t.default=function(e){var t=e.list,n=e.answer,l=e.onClick;return a.default.createElement(i,null,t.map(function(e,t){return a.default.createElement(u,{onClick:l.bind(null,t),disabled:void 0==n[e.subjectid],key:t},t+1)}),a.default.createElement(o,null,a.default.createElement("p",null,"蓝色表示你还已经回答的问题"),a.default.createElement("p",null,"灰色表示你还未回答的问题")))}},jpiG:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,l,r=f(n("G+8T")),i=f(n("p02J")),u=f(n("cLmd")),o=f(n("dAt5")),d=f(n("Fo7F")),s=n("cDcd"),c=f(s);function f(e){return e&&e.__esModule?e:{default:e}}var m=(l=a=function(e){function t(e){(0,i.default)(this,t);var n=(0,o.default)(this,(t.__proto__||(0,r.default)(t)).call(this,e));return n.handleScroll=function(){var e=new Date;if(!(n.startTime&&e-n.startTime<n.props.delaytime)){n.startTime=e;var t={scrollTop:n.lazyWarper.scrollTop,warperHeight:n.lazyWarper.getBoundingClientRect().height};n.props.onScroll&&n.props.onScroll(t)}},n.handleTouchStart=function(e){var t=e.touches[0]||e;n._startX=t.pageX,n._startY=t.pageY},n.handleTouchMove=function(e){var t=e.touches[0]||e,a=t.pageX-n._startX,l=t.pageY-n._startY;0==n.moveXY&&(Math.abs(a)>Math.abs(l)?n.moveXY=1:n.moveXY=2),1==n.moveXY?n.lazyWarper.style.overflowY="hidden":e.stopPropagation()},n.handleTouchEnd=function(e){n.lazyWarper.style.overflowY="auto",n.moveXY=0},n.startTime=null,n.moveXY=0,n}return(0,d.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.props.scrollTop&&(this.lazyWarper.scrollTop=this.props.scrollTop,this.handleScroll())}},{key:"render",value:function(){var e=this;return c.default.createElement("div",{ref:function(t){return e.lazyWarper=t},onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onScroll:this.handleScroll,style:this.props.style,className:this.props.className},this.props.children)}}]),t}(s.Component),a.defaultProps={delaytime:20,scrollTop:0},l);t.default=m},kH4e:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l,r,i=E(n("pRfh")),u=E(n("clYf")),o=E(n("G+8T")),d=E(n("p02J")),s=E(n("cLmd")),c=E(n("dAt5")),f=E(n("Fo7F")),m=E(n("glBr"));n("bCZg");var h=n("cDcd"),p=E(h),v=E(n("jpiG")),g=E(n("Ut2a"));function E(e){return e&&e.__esModule?e:{default:e}}var A=m.default.Item,x=A.Brief,_=(l=a=function(e){function t(e){(0,d.default)(this,t);var n=(0,c.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return r.call(n),n.state={data:[],loading:!0,page:1,hasNext:!0},n.loading=!1,n}return(0,f.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){this.handleinitReq(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.handleinitReq(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,a=t.hasNext,l=t.loading;return p.default.createElement("div",{className:g.default.Lazy},p.default.createElement(v.default,{onScroll:this.handleScroll,className:g.default.LazyWarper},p.default.createElement(m.default,null,n.length>0?n.map(function(t,n){return p.default.createElement(A,{key:t.id,arrow:"horizontal",className:g.default.Item,thumb:p.default.createElement("div",{className:g.default.thumb},"试卷",n+1),multipleLine:!0,onClick:e.handleClick.bind(null,t)},p.default.createElement("div",null,t.papername),p.default.createElement(x,null,p.default.createElement("div",null,"考试时间：",t.examtime,"分钟")))}):p.default.createElement(A,null,p.default.createElement("div",{className:g.default.noItem},"暂无数据"))),p.default.createElement("div",{ref:function(t){return e.load=t}}),a?!l&&p.default.createElement("div",{onClick:this.handleReq,className:g.default.loadmore},"更多数据加载中..."):n.length>0&&p.default.createElement("div",{className:g.default.loadmore},"没有更多数据了")))}}]),t}(h.Component),a.defaultProps={pageSize:10},r=function(){var e,t,n=this;this.handleinitReq=function(e){var t=e.cur;e.index==t&&n.handleReq(0,[],!0)},this.handleScroll=function(e){n.load.getBoundingClientRect().top<window.screen.height+100&&n.handleReq()},this.handleReq=(e=(0,u.default)(i.default.mark(function e(){var t,a,l,r,u,o,d,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.state.page,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.data,f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.state.hasNext;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.loading){e.next=2;break}return e.abrupt("return");case 2:if(f){e.next=4;break}return e.abrupt("return");case 4:return n.loading=!0,(t=n.props).index,a=t.pageSize,s+=1,l={userId:localStorage.userId,pnum:s,psize:a},e.next=10,Request("paper/list",{params:l});case 10:(r=e.sent).success&&(u=r.data.paperList,o=u.list,d=u.count,n.setState({data:c.concat(o),page:s,loading:!1,count:d,hasNext:o.length>0&&o.length>a-1})),n.loading=!1;case 13:case"end":return e.stop()}},e,n)})),function(){return e.apply(this,arguments)}),this.handleClick=(t=(0,u.default)(i.default.mark(function e(t){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.props.history.push("/onlineexam/"+t.id);case 2:case"end":return e.stop()}},e,n)})),function(e){return t.apply(this,arguments)})},l);t.default=_},onmr:function(e,t,n){var a=n("xZi4");"string"==typeof a&&(a=[[e.i,a,""]]);n("DkTI")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},sPdF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,l=n("NbhV"),r=((a=l)&&a.__esModule?a:{default:a}).default.div.withConfig({displayName:"Btn"})(["display:block;text-align:center;background:",";font-size:0.16rem;color:#fff;flex:1;",";"],function(e){return e.disabled?"#ccc":"#108ee9"},function(e){return e.border&&(0,l.css)(["border-right:1px solid rgba(0,0,0,0.1);"])});t.default=r},xZi4:function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,".OnlineExamDetail_content_3V2PN {\n  background: #fff;\n  flex: 1;\n  overflow-y: auto; }\n\n.OnlineExamDetail_topic_2dVLi {\n  line-height: 0.22rem;\n  padding: 0.15rem;\n  font-size: 0.16rem; }\n\n.OnlineExamDetail_timeover_1RkbD {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.03);\n  z-index: 9; }\n","",{version:3,sources:["E:/www/webpack4/src/pages/OnlineExam/OnlineExamDetail.scss"],names:[],mappings:"AAAA;EACE,iBAAiB;EACjB,QAAQ;EACR,iBAAiB,EAAE;;AAErB;EACE,qBAAqB;EACrB,iBAAiB;EACjB,mBAAmB,EAAE;;AAEvB;EACE,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,gCAAgC;EAChC,WAAW,EAAE",file:"OnlineExamDetail.scss",sourcesContent:[".content {\n  background: #fff;\n  flex: 1;\n  overflow-y: auto; }\n\n.topic {\n  line-height: 0.22rem;\n  padding: 0.15rem;\n  font-size: 0.16rem; }\n\n.timeover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.03);\n  z-index: 9; }\n"],sourceRoot:""}]),t.locals={content:"OnlineExamDetail_content_3V2PN",topic:"OnlineExamDetail_topic_2dVLi",timeover:"OnlineExamDetail_timeover_1RkbD"}},yTKe:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,l,r,i=E(n("pRfh")),u=E(n("clYf")),o=E(n("G+8T")),d=E(n("p02J")),s=E(n("cLmd")),c=E(n("dAt5")),f=E(n("Fo7F")),m=E(n("glBr"));n("bCZg");var h=n("cDcd"),p=E(h),v=E(n("jpiG")),g=E(n("Ut2a"));function E(e){return e&&e.__esModule?e:{default:e}}var A=m.default.Item,x=A.Brief,_=(l=a=function(e){function t(e){(0,d.default)(this,t);var n=(0,c.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return r.call(n),n.state={data:[],loading:!0,page:1,hasNext:!0},n.loading=!1,n}return(0,f.default)(t,e),(0,s.default)(t,[{key:"componentWillMount",value:function(){this.handleinitReq(this.props)}},{key:"componentWillReceiveProps",value:function(e){this.handleinitReq(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.data,a=t.hasNext,l=t.loading;return p.default.createElement("div",{className:g.default.Lazy},p.default.createElement(v.default,{onScroll:this.handleScroll,className:g.default.LazyWarper},p.default.createElement(m.default,null,n.length>0?n.map(function(t){return p.default.createElement(A,{key:t.id,arrow:"horizontal",className:g.default.Item,thumb:p.default.createElement("div",{className:g.default.thumb},t.score,"分"),multipleLine:!0,onClick:e.handleClick.bind(null,t)},p.default.createElement("div",null,t.papername),p.default.createElement(x,null,p.default.createElement("div",null,"考试时间：",t.examendtime)))}):p.default.createElement(A,null,p.default.createElement("div",{className:g.default.noItem},"暂无数据"))),p.default.createElement("div",{ref:function(t){return e.load=t}}),a?!l&&p.default.createElement("div",{onClick:this.handleReq,className:g.default.loadmore},"更多数据加载中..."):n.length>0&&p.default.createElement("div",{className:g.default.loadmore},"没有更多数据了")))}}]),t}(h.Component),a.defaultProps={pageSize:10},r=function(){var e,t,n=this;this.handleinitReq=function(e){var t=e.cur;e.index==t&&n.handleReq(0,[],!0)},this.handleScroll=function(e){n.load.getBoundingClientRect().top<window.screen.height+100&&n.handleReq()},this.handleReq=(e=(0,u.default)(i.default.mark(function e(){var t,a,l,r,u,o,d,s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n.state.page,c=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n.state.data,f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:n.state.hasNext;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.loading){e.next=2;break}return e.abrupt("return");case 2:if(f){e.next=4;break}return e.abrupt("return");case 4:return n.loading=!0,(t=n.props).index,a=t.pageSize,s+=1,l={answerperson:localStorage.userId,pnum:s,psize:a,orgid:localStorage.organizationId},e.next=10,Request("answer/list",{params:l});case 10:(r=e.sent).success&&(u=r.data.answerInfoList,o=u.list,d=u.count,n.setState({data:c.concat(o),page:s,loading:!1,count:d,hasNext:o.length>0&&o.length>a-1})),n.loading=!1;case 13:case"end":return e.stop()}},e,n)})),function(){return e.apply(this,arguments)}),this.handleClick=(t=(0,u.default)(i.default.mark(function e(t){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.props.history.push("/onlineexam/record/"+t.id);case 2:case"end":return e.stop()}},e,n)})),function(e){return t.apply(this,arguments)})},l);t.default=_}}]);