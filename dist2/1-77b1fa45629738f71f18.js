(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{c9Zt:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n,d=c(a("G+8T")),u=c(a("p02J")),r=c(a("cLmd")),l=c(a("dAt5")),i=c(a("Fo7F")),o=a("cDcd"),f=c(o);function c(t){return t&&t.__esModule?t:{default:t}}var s=(0,a("rRcN").contextConsumers)(function(t,e){return{data:t.getIn(["news",e.tab.id])||$obj}})(n=function(t){function e(){return(0,u.default)(this,e),(0,l.default)(this,(e.__proto__||(0,d.default)(e)).apply(this,arguments))}return(0,i.default)(e,t),(0,r.default)(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.tab,a=t.dispatch,n=t.data;n.loaded||(n=n.set("loaded",!0),setTimeout(function(){a.setIn(["news",e.id],n)},Math.random()))}},{key:"render",value:function(){var t=this.props,e=t.tab;return t.data,f.default.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%",backgroundColor:"#fff"}},f.default.createElement("p",null,"Content of ",e.title))}}]),e}(o.Component))||n;e.default=s},qp63:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=p(a("2V83")),d=p(a("KN1l")),u=p(a("G+8T")),r=p(a("p02J")),l=p(a("cLmd")),i=p(a("dAt5")),o=p(a("Fo7F"));a("cmGT");var f=a("cDcd"),c=p(f),s=p(a("c9Zt"));function p(t){return t&&t.__esModule?t:{default:t}}var h=function(t){function e(){var t,a,n,d;(0,r.default)(this,e);for(var l=arguments.length,o=Array(l),f=0;f<l;f++)o[f]=arguments[f];return a=n=(0,i.default)(this,(t=e.__proto__||(0,u.default)(e)).call.apply(t,[this].concat(o))),n.state={},n.renderContent=function(t){return c.default.createElement(s.default,{tab:t})},d=a,(0,i.default)(n,d)}return(0,o.default)(e,t),(0,l.default)(e,[{key:"render",value:function(){return c.default.createElement(n.default,{tabs:[{title:"恩施",id:1},{title:"利川",id:2},{title:"云上恩施",id:3},{title:"4th Tab",id:4},{title:"5th Tab",id:5},{title:"6th Tab",id:6},{title:"7th Tab",id:7},{title:"8th Tab",id:8},{title:"9th Tab",id:9}],className:"ds",renderTabBar:function(t){return c.default.createElement(n.default.DefaultTabBar,(0,d.default)({},t,{page:4}))}},this.renderContent)}}]),e}(f.Component);e.default=h}}]);
//# sourceMappingURL=1-77b1fa45629738f71f18.js.map