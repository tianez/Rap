webpackJsonp([3],{224:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(19),o=a(r),n=i(20),s=a(n),A=i(14),l=a(A),u=i(15),c=a(u),h=i(16),d=a(h),p=i(17),f=a(p),m=i(18),v=a(m),g=i(0),w=a(g),y=i(8),b=i(234),_=a(b),k=i(236),I=a(k),E=i(262),x=a(E),S=function(t){function e(t){(0,c.default)(this,e);var i=(0,f.default)(this,(e.__proto__||(0,l.default)(e)).call(this,t));return i.handleTouchEnd=function(t){i.setState({cur:t})},i.state={show:!1,cur:t.cur},i}return(0,v.default)(e,t),(0,d.default)(e,[{key:"componentWillMount",value:function(){this.handleReqData(this.props)}},{key:"componentWillReceiveProps",value:function(t){t.curcity.get("key")!==this.props.curcity.get("key")&&(this.props.dispatch("news/save",{swiper:[]}),this.handleReqData(t))}},{key:"handleReqData",value:function(){function t(t){return e.apply(this,arguments)}var e=(0,s.default)(o.default.mark(function t(e){var i,a;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.curcity.get("key"),t.next=3,apireq("api/swiper/"+i);case 3:a=t.sent,a.success&&(this.setState({cur:0}),this.props.dispatch("news/save",{swiper:a.data}));case 5:case"end":return t.stop()}},t,this)}));return t}()},{key:"render",value:function(){var t=this,e=this.props.swiper;return e&&e.size>0?w.default.createElement("div",{className:x.default.swiper},w.default.createElement(_.default,{style:{height:"150px"},onTouchEnd:this.handleTouchEnd,cur:this.state.cur},e.map(function(e,i){var a=null;switch(e.get("type")){case"video":a=w.default.createElement("video",{key:i,className:x.default.slide,controls:!0,preload:"auto","x-webkit-airplay":"true","x5-video-player-type":"h5","x5-video-player-fullscreen":"true","webkit-playsinline":"true",playsInline:"true",src:e.get("url")});break;default:a=w.default.createElement("div",{className:x.default.slide,key:i},w.default.createElement(I.default,{src:e.get("image"),show:t.state.cur==i}),w.default.createElement("div",{className:x.default.p},e.get("title")))}return a})),w.default.createElement("div",{className:x.default.curtab},this.state.cur+1+"/"+e.size)):w.default.createElement("div",{className:x.default.swiper},w.default.createElement("div",{className:x.default.loading},"loading"))}}]),e}(g.Component);S.defaultProps={cur:0},e.default=(0,y.connect)(function(t){return{curcity:t.getIn(["init","curcity"]),swiper:t.getIn(["news","swiper"])}})(S)},234:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(14),o=a(r),n=i(15),s=a(n),A=i(16),l=a(A),u=i(17),c=a(u),h=i(18),d=a(h),p=i(241),f=a(p),m=i(0),v=a(m),g=function(t){function e(t){(0,s.default)(this,e);var i=(0,c.default)(this,(e.__proto__||(0,o.default)(e)).call(this,t));return i.moveXY=0,i._moveX=0,i.state={cur:t.cur},i._onTouchStart=i._onTouchStart.bind(i),i._onTouchMove=i._onTouchMove.bind(i),i._onTouchEnd=i._onTouchEnd.bind(i),i}return(0,d.default)(e,t),(0,l.default)(e,[{key:"componentDidMount",value:function(){this._warper=this.refs.warper,this._width=this._warper.getBoundingClientRect().width}},{key:"_translate",value:function(t,e){this._warper.style.webkitTransitionDuration=this._warper.style.MozTransitionDuration=this._warper.style.msTransitionDuration=this._warper.style.OTransitionDuration=this._warper.style.transitionDuration=e+"ms",this._warper.style.transform="translateX("+t+"px)"}},{key:"_onTouchStart",value:function(t){var e=t.touches[0]||t;this._startX=e.pageX,this._startY=e.pageY}},{key:"_onTouchMove",value:function(t){var e=t.touches[0]||t;this._moveX=e.pageX-this._startX;var i=e.pageY-this._startY;if(0==this.moveXY&&(Math.abs(this._moveX)>Math.abs(i)?this.moveXY=1:this.moveXY=2),1===this.moveXY){var a=this.props.cur,r=.4*this._moveX-a*this._width;this._translate(r,0),this.arrow=this._moveX>0?1:-1,this.props.touchX&&this.props.touchX(this._moveX)}}},{key:"_onTouchEnd",value:function(t){var e=Math.abs(this._moveX);this.moveXY=0,this._moveX=0;var i=this.props.children.length||this.props.children.size||this.props.length,a=this.props.cur;0==a&&1==this.arrow||a==i-1&&-1==this.arrow||e<100||(a-=this.arrow);var r=-a*this._width;this._translate(r,200),e<100||this.props.onTouchEnd&&this.props.onTouchEnd(a)}},{key:"render",value:function(){var t=this.props,e=(t.children,t.cur),i=t.style,a={transform:"translateX(-"+100*e+"%)"};return v.default.createElement("div",{className:f.default.warp,style:i},v.default.createElement("div",{className:f.default.warper,style:a,ref:"warper",onTouchStart:this._onTouchStart,onTouchMove:this._onTouchMove,onTouchEnd:this._onTouchEnd},this.props.children.map(function(t,e){var i=100*e+"%";return v.default.createElement("div",{className:f.default.children,key:e,style:{transform:" translateX("+i+")"}},t)})))}}]),e}(v.default.Component);g.defaultProps={length:3,cur:0},e.default=g},236:function(t,e,i){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=i(10),o=a(r),n=i(14),s=a(n),A=i(15),l=a(A),u=i(16),c=a(u),h=i(17),d=a(h),p=i(18),f=a(p),m=i(0),v=a(m),g=i(237),w=a(g),y=i(239),b=a(y),_=i(240),k=a(_),I=function(t){function e(t){(0,l.default)(this,e);var i=(0,d.default)(this,(e.__proto__||(0,s.default)(e)).call(this,t));return i.handleUpdate=function(){var t=i.ele.getBoundingClientRect(),e=t.top,a=t.height,r=i.props,o=(r._vpt,r._vph),n=r._fwb;e+a+n>=0&&e<=o+n&&i.handleLoadImg()},i.handleLoadImg=function(){if(!i.state.loaded){i.showImage=!0;var t=i.props,e=t.src,a=t.errorImg,r=new Image;r.src=e,r.onload=function(){i.setState({loader:e,loaded:!0})},r.onerror=function(){i.setState({loader:a})}}},i.state={loader:t.loader,loaded:t.loaded},i.showImage=!1,i}return(0,f.default)(e,t),(0,c.default)(e,[{key:"componentDidMount",value:function(){!this.showImage&&this.props._fwb&&this.props.src&&this.handleUpdate(),!this.showImage&&this.props.show&&this.props.src&&this.handleLoadImg()}},{key:"componentWillReceiveProps",value:function(t){!this.showImage&&t.show&&this.props.src&&this.handleLoadImg()}},{key:"shouldComponentUpdate",value:function(t,e){return!this.state.loaded}},{key:"componentDidUpdate",value:function(t){!this.showImage&&t._fwb&&this.handleUpdate()}},{key:"render",value:function(){var t=this,e=this.props,i=e.className,a=e.style,r=(e.alt,this.state.loader);return v.default.createElement("div",{ref:function(e){return t.ele=e},onClick:this.handleLoadImg,className:w.default.LazyImg+" "+i,style:(0,o.default)({},a,{backgroundImage:"url("+r+")"})})}}]),e}(m.Component);I.defaultProps={_fwb:50,loader:k.default,errorImg:b.default,loaded:!1,show:!1},e.default=I},237:function(t,e,i){var a=i(238);"string"==typeof a&&(a=[[t.i,a,""]]);var r={};r.transform=void 0,i(222)(a,r),a.locals&&(t.exports=a.locals)},238:function(t,e,i){e=t.exports=i(221)(void 0),e.push([t.i,".LazyImg_LazyImg_2eZlg{background-size:cover;background-position:50%;background-repeat:no-repeat;height:100%}",""]),e.locals={LazyImg:"LazyImg_LazyImg_2eZlg"}},239:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAEsBAMAAAAfmfjxAAAAG1BMVEXd3d0AAADBwcE3Nzdubm5SUlKKioqlpaUbGxuyYLcKAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE0klEQVR4nO3bzY/bRBjHcTevHHGXwh6TpVCOhEDpMcsi4MgCQhw3ha44NpX6cmyoVPXPJmMn8Yz9zPTJKCYe9P0c0MZTP56f47Ede8gyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACfRm/ssTt21w/Ryn59P3bXDEKRr/ldBvhfdnLprhzFBTt2HoyBI1xCkawjSNQTpGoJ0DUG6hiBdQ5CuIcgBm7i4mLS8iaz9IOMnj8yTjDe/T9rcSqYKMsrze9WnF1eP1vli+2FpP2wZ/zV/l3/krvt8vXsoc/6dvmyMA4PcnxW92m3RCtK7KlrcIH/bz5e+VZeNcViQP7d92m2xCjIqu+IGcXLk+Vfasq0H+Sn3BRnsDiE7yGfbg2o+XwsdDZRtO0i1g+tBRvuhYAUZFwu/fmb+/vwP8/c9ZdmWg2x38Dc/3N5O3CC966Ll7Lfb28fVeivzbew/Pzf/4h9d2XaDlDv4obOxbZBXRYzH7mpjk+Om+mw6fG6tHSgbQx9kWetYlu2CjExX3tZXW9WHt4n7papsDHWQgdnpT2tNZZDL5rl1U3hdPxf3Zs4oCZSNoQ5yKe24IshA+j6yfnPwmkVViUDZGNogo8Z1wCiCbP5zNpGaalf54ku6qykbQxtk1exXVgYZi+fNnjsgSlP72AqUjWE2+FJS/ROzRbMzb5prmyBf5PnHzZbhpu6kvtDs/6fWB1/ZGN5Xb1UvzBaHYm+LINdiX6birp5ZX1OgbAxlkKm85zZBfpH7shnEr5tLN0fSJ4qyMZRBZu7txc4myK/ya9Nc7GLfGiSBsjF0QaSRa5irWX4mNIzkc4i9OFA2hgnyTjJxti6MXKMIcldoGObyvrYGd6BsDN3p13eSLIIshIY71mCwXVcHYqBsDG2Q12JTcaMkNWxG9YeeFXaVAmVjaIMsxKalb6deeo7+aXUkBsrG0AaZiE1LzxAxF4yFtPyD6mQdKBtDGcRzljRBxDkra+sSbhtW32CgbAxlEHHklkGkDvd8O3tQna0DZWMog4gjtwwiLR/7qo6rk0OgbAxlEM91aylfDs0q4nJ7c4GyMZRBFnKT8KOjMPAFyapjLlA2hjKI58fo0nOYD7zj2A1yjN+4W8ogE7lp6Tn7Dr3X7Op0FigbQxnE07T0jFdtEF0fVXRBxNuQzLnjcCiD+MrGaCdI3xtktr/9PUkQzynIBBHPoMogvrIx2gkSPLRu3ls2xgmCVGOEIIJ2gigviEkE0dyidD+I8qax+0HGvmuEexvf/SDKH1bdD6L8qZtAEN3DhwSC+B4H3XEeByUQZOW5m1w5D+gSCKJ7ZJpAkL7qIXYCQTw/NmqvFRIIonvRk0KQa82rtxSCTMVXizP3ZWgKQYbuDJp9Jef1dApBfBMGqkqJBDHX9saPxFltCkcSQfrN85Y7zyaVIJppTkkEKSaeOW+zXrkvP5MJYk5R9lSs+3ljKuCxg4izg17utxkZpDbJz+SoT848dhDZ/rCIDVJOuywnxT8o5mk789PSCZJ9WhZ6M5/Pyr8WdmtCQd47pTyZINVkcaM5yT+dINmTfbnzH2tNRw7StvFVMeTb/x9h/gMXD55NTt0HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABO5l9H2SI9+BJzugAAAABJRU5ErkJggg=="},240:function(t,e){t.exports="data:image/png;base64,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"},241:function(t,e,i){var a=i(242);"string"==typeof a&&(a=[[t.i,a,""]]);var r={};r.transform=void 0,i(222)(a,r),a.locals&&(t.exports=a.locals)},242:function(t,e,i){e=t.exports=i(221)(void 0),e.push([t.i,".touchContent_warp_1nI-e{width:100%;height:100%;-webkit-box-flex:1;-ms-flex:1;flex:1;overflow:hidden;background:#f8f8f8;position:relative}.touchContent_warper_1DPcV{width:100%;height:100%;position:absolute;background:red;-webkit-transition-duration:.2s;transition-duration:.2s}.touchContent_warper_1DPcV .touchContent_children_ywD3X{background:#ccc;overflow-y:auto;position:absolute;top:0;left:0;right:0;bottom:0;z-index:9990}",""]),e.locals={warp:"touchContent_warp_1nI-e",warper:"touchContent_warper_1DPcV",children:"touchContent_children_ywD3X"}},262:function(t,e,i){var a=i(263);"string"==typeof a&&(a=[[t.i,a,""]]);var r={};r.transform=void 0,i(222)(a,r),a.locals&&(t.exports=a.locals)},263:function(t,e,i){e=t.exports=i(221)(void 0),e.push([t.i,".SwiperList_loading_RSgKc{line-height:3rem;text-align:center}.SwiperList_swiper_3MGt1{height:3rem;position:relative}.SwiperList_swiper_3MGt1 .SwiperList_curtab_30UhH{position:absolute;height:.64rem;line-height:.64rem;right:0;bottom:0;color:#fff;padding:0 .1rem 0 0;font-size:.26rem}.SwiperList_slide_3ouNl{overflow-y:hidden;height:100%;display:block;position:relative;z-index:9}.SwiperList_slide_3ouNl img{display:block;width:100%;max-width:100%}.SwiperList_slide_3ouNl .SwiperList_p_aXDBc{position:absolute;width:100%;height:.64rem;line-height:.64rem;background:rgba(0,0,0,.5);bottom:0;color:#fff;z-index:9;padding:0 .8rem 0 .2rem;font-size:.26rem}",""]),e.locals={loading:"SwiperList_loading_RSgKc",swiper:"SwiperList_swiper_3MGt1",curtab:"SwiperList_curtab_30UhH",slide:"SwiperList_slide_3ouNl",p:"SwiperList_p_aXDBc"}}});
//# sourceMappingURL=3.map