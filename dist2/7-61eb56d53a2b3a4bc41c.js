(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"5ym+":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=g(i("nPKV")),a=g(i("pRfh")),o=g(i("clYf")),l=g(i("G+8T")),s=g(i("p02J")),c=g(i("cLmd")),u=g(i("dAt5")),d=g(i("Fo7F"));i("bbBG");var f=i("cDcd"),p=g(f),m=g(i("NbhV")),h=g(i("kqMm")),v=i("rRcN");function g(e){return e&&e.__esModule?e:{default:e}}var w=m.default.div.withConfig({displayName:"ServiceComponent__GridView"})(["display:flex;justify-content:center;align-items:center;flex-direction:column;height:100%;"]),_=m.default.div.withConfig({displayName:"ServiceComponent__IconView"})(["width:0.48rem;height:0.48rem;line-height:0.48rem;font-size:0.4rem;text-align:center;margin:0 auto;display:block;color:#000;"]),k=m.default.div.withConfig({displayName:"ServiceComponent__TitleView"})(["font-size:0.16rem;color:#000;line-height:0.24rem;"]),y=(0,v.contextConsumers)(function(e){return{serviceList:e.getIn(["init","serviceList"])}})(n=function(e){function t(e){var i=this;(0,s.default)(this,t);var n=(0,u.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));return n.getData=(0,o.default)(a.default.mark(function e(){var t,r;return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.props.serviceList){e.next=3;break}return e.abrupt("return");case 3:return n.setState({loading:!0,error:!1}),e.next=6,Apicloud("config",{params:{filter:{where:{name:"serviceList",site_id:1}}}});case 6:(t=e.sent).success?(n.setState({loading:!1}),(r=t.data[0].data.serviceList)&&n.props.dispatch.setIn(["init","serviceList"],r)):n.setState({loading:!1,error:!0});case 8:case"end":return e.stop()}},e,i)})),n.handleClick=function(e){var t=e.url;if(0==t.indexOf("https://")||0==t.indexOf("http://"))return n.props.history.push("/iframe?outlink="+t);n.props.history.replace("/"+t)},n.state={loading:!1,error:!1},n}return(0,d.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.props.serviceList,t=this.state,i=t.error,n=t.loading;return p.default.createElement(h.default,{loading:n,loadingTitle:"获取服务列表中...",error:i,errorAction:p.default.createElement("div",{onClick:this.getData},"获取服务列表失败，点击重试")},p.default.createElement(r.default,{data:e,columnNum:3,onClick:this.handleClick,renderItem:function(e){return p.default.createElement(w,null,p.default.createElement(_,{className:e.icon}),p.default.createElement(k,null,e.title))}}))}}]),t}(f.Component))||n;t.default=y}}]);
//# sourceMappingURL=7-61eb56d53a2b3a4bc41c.js.map