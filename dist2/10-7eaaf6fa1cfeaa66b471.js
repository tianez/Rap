(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{E7b1:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=h(t("TP8Z")),i=h(t("pRfh")),r=h(t("KDvK")),a=h(t("clYf")),l=h(t("G+8T")),s=h(t("p02J")),c=h(t("cLmd")),A=h(t("dAt5")),u=h(t("Fo7F"));t("I94i"),t("dTC+");var d=t("cDcd"),f=h(d),m=t("8LOv"),E=h(t("XyZ/"));function h(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function n(e){(0,s.default)(this,n);var t=(0,A.default)(this,(n.__proto__||(0,l.default)(n)).call(this,e));return t.state={list:[]},t}return(0,u.default)(n,e),(0,c.default)(n,[{key:"componentDidMount",value:function(){this.getNoticeList()}},{key:"getNoticeList",value:function(){var e=(0,a.default)(i.default.mark(function e(){var n;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Request("bulletinInformation/getBulletinList",{params:{userId:localStorage.userId,pageNo:1,pageSize:3}});case 2:(n=e.sent).success?this.setState({list:n.data.page.list}):r.default.info(n.message);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.list;return f.default.createElement("div",{className:E.default.Notice},f.default.createElement("div",{className:"iconfont icon-tongzhigonggao "+E.default.icon}),e.length>0?f.default.createElement(o.default,{className:E.default.Carousel,vertical:!0,dots:!1,dragging:!1,swiping:!1,autoplay:!0,infinite:!0},e.map(function(e){return f.default.createElement(m.Link,{key:e.id,to:"/notice/"+e.id,className:E.default.item},e.title)})):f.default.createElement("div",{className:E.default.Carousel},"暂无公告"),f.default.createElement(m.Link,{to:"/notice",className:E.default.more},"更多"))}}]),n}(d.Component);n.default=p},JIBf:function(e,n,t){(n=e.exports=t("3G5m")(!0)).push([e.i,".Notice_Notice_1v0dG {\n  display: flex;\n  line-height: 0.36rem;\n  margin: 0.06rem 0;\n  padding: 0 0.15rem;\n  height: 0.36rem;\n  overflow: hidden; }\n\n.Notice_icon_1ZsvZ {\n  font-size: 0.24rem;\n  color: #999; }\n\n.Notice_Carousel_3rf1m {\n  flex: 1;\n  font-size: 0.14rem;\n  color: #0b0203;\n  height: 0.36rem;\n  overflow: hidden; }\n\n.Notice_item_2wD4B {\n  height: 0.36rem;\n  overflow: hidden;\n  color: #0b0203;\n  display: block; }\n\n.Notice_more_1upn2 {\n  color: #fe353b; }\n","",{version:3,sources:["E:/www/webpack4/src/pages/Home/Components/Notice.scss"],names:[],mappings:"AAAA;EACE,cAAc;EACd,qBAAqB;EACrB,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,iBAAiB,EAAE;;AAErB;EACE,mBAAmB;EACnB,YAAY,EAAE;;AAEhB;EACE,QAAQ;EACR,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,iBAAiB,EAAE;;AAErB;EACE,gBAAgB;EAChB,iBAAiB;EACjB,eAAe;EACf,eAAe,EAAE;;AAEnB;EACE,eAAe,EAAE",file:"Notice.scss",sourcesContent:[".Notice {\n  display: flex;\n  line-height: 0.36rem;\n  margin: 0.06rem 0;\n  padding: 0 0.15rem;\n  height: 0.36rem;\n  overflow: hidden; }\n\n.icon {\n  font-size: 0.24rem;\n  color: #999; }\n\n.Carousel {\n  flex: 1;\n  font-size: 0.14rem;\n  color: #0b0203;\n  height: 0.36rem;\n  overflow: hidden; }\n\n.item {\n  height: 0.36rem;\n  overflow: hidden;\n  color: #0b0203;\n  display: block; }\n\n.more {\n  color: #fe353b; }\n"],sourceRoot:""}]),n.locals={Notice:"Notice_Notice_1v0dG",icon:"Notice_icon_1ZsvZ",Carousel:"Notice_Carousel_3rf1m",item:"Notice_item_2wD4B",more:"Notice_more_1upn2"}},"XyZ/":function(e,n,t){var o=t("JIBf");"string"==typeof o&&(o=[[e.i,o,""]]);t("DkTI")(o,{hmr:!0,transform:void 0,insertInto:void 0}),o.locals&&(e.exports=o.locals)}}]);