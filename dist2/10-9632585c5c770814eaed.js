(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+XMT":function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(e,t){"use strict";var n=5e3,a="callback";function r(e){try{delete window[e]}catch(t){window[e]=void 0}}function l(e){var t=document.getElementById(e);t&&document.getElementsByTagName("head")[0].removeChild(t)}t.exports=function(e){var t=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],i=e,u=t.timeout||n,o=t.jsonpCallback||a,c=void 0;return new Promise(function(n,a){var s=t.jsonpCallbackFunction||"jsonp_"+Date.now()+"_"+Math.ceil(1e5*Math.random()),d=o+"_"+s;window[s]=function(e){n({ok:!0,json:function(){return Promise.resolve(e)}}),c&&clearTimeout(c),l(d),r(s)},i+=-1===i.indexOf("?")?"?":"&";var f=document.createElement("script");f.setAttribute("src",""+i+o+"="+s),t.charset&&f.setAttribute("charset",t.charset),f.id=d,document.getElementsByTagName("head")[0].appendChild(f),c=setTimeout(function(){a(new Error("JSONP request to "+e+" timed out")),r(s),l(d),window[s]=function(){r(s)}},u),f.onerror=function(){a(new Error("JSONP request to "+e+" failed")),r(s),l(d),c&&clearTimeout(c)}})}})?a.apply(t,[t,e]):a)||(e.exports=r)},"47JL":function(e,t,n){var a=n("kIoh");"string"==typeof a&&(a=[[e.i,a,""]]);n("DkTI")(a,{hmr:!0,transform:void 0,insertInto:void 0}),a.locals&&(e.exports=a.locals)},"6G0w":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r,l=_(n("KN1l")),i=_(n("pRfh")),u=_(n("clYf")),o=_(n("G+8T")),c=_(n("p02J")),s=_(n("cLmd")),d=_(n("dAt5")),f=_(n("Fo7F")),m=n("cDcd"),p=_(m),h=(_(n("ntpP")),_(n("l7WU"))),v=_(n("p/zi")),A=_(n("kqMm")),g=_(n("47JL")),E=_(n("FLGI"));function _(e){return e&&e.__esModule?e:{default:e}}var w=(a=(0,n("rRcN").contextConsumers)(function(e){return{onLine:e.onLine}}),(0,E.default)(r=a(r=function(e){function t(){var e,n,a,r,l=this;(0,c.default)(this,t);for(var s=arguments.length,f=Array(s),m=0;m<s;m++)f[m]=arguments[m];return n=a=(0,d.default)(this,(e=t.__proto__||(0,o.default)(t)).call.apply(e,[this].concat(f))),a.state={data:null,isCache:!1},a.getData=(0,u.default)(i.default.mark(function e(){var t,n,r;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:(t=a.props).onLine,n=t.match,r=n.params.id,a.props.getData({url:"movie/subject/"+r},function(){var e=(0,u.default)(i.default.mark(function e(t){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:a.setState({data:t});case 1:case"end":return e.stop()}},e,l)}));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}},e,l)})),r=n,(0,d.default)(a,r)}return(0,f.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.props.loadState,t=this.state,n=t.data,a=t.isCache;return console.log(n),p.default.createElement(v.default,{title:"详情"},p.default.createElement(h.default,{style:{padding:"15px",background:"#fff"}},p.default.createElement(A.default,(0,l.default)({},e,{reflush:a,errorAction:p.default.createElement("div",{onClick:this.getData},"出错了，点击重试！")}),n&&p.default.createElement("div",null,p.default.createElement("div",{className:g.default.title},n.title+" "+n.original_title,"（",n.year,"）"),p.default.createElement("div",{className:g.default.info},p.default.createElement("div",null,"导演：",n.directors.map(function(e){return e.name+"，"})),n.writers&&p.default.createElement("div",null,"编剧：",n.writers.map(function(e){return e.name+"，"})),p.default.createElement("div",null,"主演：",n.casts.map(function(e){return e.name+"，"})),p.default.createElement("div",null,"类型：",n.genres.map(function(e){return e+"，"})),p.default.createElement("div",null,"制片国家/地区：",n.countries.map(function(e){return e+"，"})),p.default.createElement("div",null,"别名：",n.aka.map(function(e){return e+"，"})),p.default.createElement("div",null,"评分：",n.rating.average),p.default.createElement("div",null,"评分人数：",n.ratings_count),p.default.createElement("div",null,"想看人数：",n.wish_count),p.default.createElement("div",null,"看过人数：",n.collect_count)),p.default.createElement("div",{className:g.default.content},p.default.createElement("div",null,n.images&&p.default.createElement("img",{src:n.images.large,alt:""})),p.default.createElement("div",{dangerouslySetInnerHTML:{__html:n.summary}}))))))}}]),t}(m.Component))||r)||r);t.default=w},FLGI:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=v(n("KN1l")),r=v(n("pRfh")),l=v(n("6F6v")),i=v(n("clYf")),u=v(n("G+8T")),o=v(n("p02J")),c=v(n("cLmd")),s=v(n("dAt5")),d=v(n("Fo7F")),f=v(n("cDcd")),m=v(n("+0q/")),p=v(n("3V/B")),h=v(n("dlyW"));function v(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return function(t){function n(){var e,t,a,c,d,f=this;(0,o.default)(this,n);for(var v=arguments.length,A=Array(v),g=0;g<v;g++)A[g]=arguments[g];return t=a=(0,s.default)(this,(e=n.__proto__||(0,u.default)(n)).call.apply(e,[this].concat(A))),a.state={loadState:{loading:!1,error:!1,errorMsg:"",isOk:!1}},a.getData=(d=(0,i.default)(r.default.mark(function e(){var t,n,i,u,o,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=arguments[1],d=c.url,v=c.delaytime,A=void 0===v?0:v,g=c.cachetime,E=void 0===g?E:g,_=(0,l.default)(c,["url","delaytime","cachetime"]);return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!a.loading){e.next=2;break}return e.abrupt("return");case 2:return a.loading=!0,a.delayStart=Date.now(),a.setState({loadState:{loading:!0,error:!1,errorMsg:"",isOk:!1}}),t="https://api.douban.com/v2/"+d+"?"+m.default.stringify(_.params),n=void 0,e.next=9,db.req.where("req").equalsIgnoreCase(t).last();case 9:if(!(i=e.sent)){e.next=20;break}if(n=i.res,!(u=i.time)||!(Date.now()-u>E)&&n.success){e.next=18;break}return e.next=16,(0,h.default)(t);case 16:n=e.sent,db.req.put({req:t,res:n,time:Date.now()});case 18:e.next=24;break;case 20:return e.next=22,(0,h.default)(t);case 22:n=e.sent,db.req.put({req:t,res:n,time:Date.now()});case 24:if(!((o=a.delayStart+A-Date.now())>0)){e.next=28;break}return e.next=28,(0,p.default)(o);case 28:if(!n.success){e.next=35;break}if(!s){e.next=32;break}return e.next=32,s(n.data);case 32:a.setState({loadState:{loading:!1,error:!1,errorMsg:"",isOk:!0}}),e.next=36;break;case 35:a.setState({loadState:{loading:!1,error:!0,errorMsg:n.message,isOk:!1}});case 36:a.loading=!1;case 37:case"end":return e.stop()}},e,f)})),function(){return d.apply(this,arguments)}),c=t,(0,s.default)(a,c)}return(0,d.default)(n,t),(0,c.default)(n,[{key:"render",value:function(){return f.default.createElement(e,(0,a.default)({},this.props,this.state,{getData:this.getData}))}}]),n}(f.default.Component)}},dlyW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=u(n("pRfh")),r=u(n("18by")),l=u(n("clYf")),i=u(n("+XMT"));function u(e){return e&&e.__esModule?e:{default:e}}var o,c=(o=(0,l.default)(a.default.mark(function e(t){return a.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new r.default(function(e,n){(0,i.default)(t).then(function(e){return e.json()}).then(function(t){e({success:!0,data:t})}).catch(function(t){e({success:!1,message:t.message})})}));case 1:case"end":return e.stop()}},e,void 0)})),function(e){return o.apply(this,arguments)});t.default=c},kIoh:function(e,t,n){(t=e.exports=n("3G5m")(!0)).push([e.i,".Detail_title_2z_sV {\n  font-size: 0.22rem;\n  line-height: 0.32rem; }\n\n.Detail_info_3sf1M {\n  display: block;\n  color: #999;\n  font-size: 0.14rem;\n  margin: 0.1rem 0;\n  line-height: 0.24rem; }\n\n.Detail_content_3sWxZ {\n  font-size: 0.16rem;\n  line-height: 0.26rem;\n  text-indent: 2em; }\n  .Detail_content_3sWxZ p,\n  .Detail_content_3sWxZ div {\n    padding: 0.05rem 0;\n    text-indent: 2em; }\n  .Detail_content_3sWxZ img {\n    display: block;\n    max-width: 100%;\n    margin: 0 auto; }\n","",{version:3,sources:["E:/www/webpack4/src/pages/Movies/Detail.scss"],names:[],mappings:"AAAA;EACE,mBAAmB;EACnB,qBAAqB,EAAE;;AAEzB;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,qBAAqB,EAAE;;AAEzB;EACE,mBAAmB;EACnB,qBAAqB;EACrB,iBAAiB,EAAE;EACnB;;IAEE,mBAAmB;IACnB,iBAAiB,EAAE;EACrB;IACE,eAAe;IACf,gBAAgB;IAChB,eAAe,EAAE",file:"Detail.scss",sourcesContent:[".title {\n  font-size: 0.22rem;\n  line-height: 0.32rem; }\n\n.info {\n  display: block;\n  color: #999;\n  font-size: 0.14rem;\n  margin: 0.1rem 0;\n  line-height: 0.24rem; }\n\n.content {\n  font-size: 0.16rem;\n  line-height: 0.26rem;\n  text-indent: 2em; }\n  .content p,\n  .content div {\n    padding: 0.05rem 0;\n    text-indent: 2em; }\n  .content img {\n    display: block;\n    max-width: 100%;\n    margin: 0 auto; }\n"],sourceRoot:""}]),t.locals={title:"Detail_title_2z_sV",info:"Detail_info_3sf1M",content:"Detail_content_3sWxZ"}},"p/zi":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=o(n("nbCY"));n("ZsLX");var r=o(n("cDcd")),l=o(n("yhP6")),i=o(n("APrv")),u=(o(n("l7WU")),o(n("8RPl")),o(n("kcRE")));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){var t=e.border,n=void 0===t||t,o=e.title,c=e.children;return r.default.createElement(l.default,null,r.default.createElement(a.default,{mode:"dark",icon:r.default.createElement(i.default,null),className:n&&u.default.header},o),c)}}}]);
//# sourceMappingURL=10-9632585c5c770814eaed.js.map