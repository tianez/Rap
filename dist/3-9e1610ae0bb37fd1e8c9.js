webpackJsonp([3],{227:function(e,t,r){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=r(19),i=a(n),c=r(9),u=a(c),l=r(20),o=a(l),d=r(11),s=a(d),_=r(12),f=a(_),m=r(13),k=a(m),g=r(14),v=a(g),h=r(15),p=a(h),b=r(0),N=a(b),x=r(8),w=r(16),y=r(108),I=a(y),E=r(110),z=a(E),J=r(285),V=a(J),P=function(e){function t(e){return(0,f.default)(this,t),(0,v.default)(this,(t.__proto__||(0,s.default)(t)).call(this,e))}return(0,p.default)(t,e),(0,k.default)(t,[{key:"componentDidMount",value:function(){function e(){return t.apply(this,arguments)}var t=(0,o.default)(i.default.mark(function e(){var t;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,apicloud("user/"+localStorage.userId);case 2:t=e.sent,t.success&&this.props.dispatch("user/save",(0,u.default)({},t.data));case 4:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.props.user,t={};return e.get("avatar")&&(t.backgroundImage="url('"+e.get("avatar")+"')"),N.default.createElement("div",{className:"warper"},N.default.createElement("div",{className:"header"},N.default.createElement("div",{className:"h1"},"个人中心")),N.default.createElement("div",{className:"content"},N.default.createElement("div",{className:V.default.avatar},N.default.createElement("div",{className:V.default.i},N.default.createElement("div",{className:V.default.img,style:t})),N.default.createElement("div",{className:V.default.n},e.get("username"))),N.default.createElement("div",{className:V.default.list},N.default.createElement(w.Link,{to:"/logout",className:V.default.a},N.default.createElement("i",{className:V.default.i1+" c3 iconfont icon-seeusero"}),N.default.createElement("div",{className:V.default.n},"登出"),N.default.createElement("i",{className:V.default.i2+" iconfont icon-jiantou-left"}))),N.default.createElement(z.default,null)),N.default.createElement(I.default,null))}}]),t}(b.Component);t.default=(0,x.connect)(function(e){return{user:e.get("user")}})(P)},285:function(e,t,r){var a=r(286);"string"==typeof a&&(a=[[e.i,a,""]]);var n={};n.transform=void 0,r(224)(a,n),a.locals&&(e.exports=a.locals)},286:function(e,t,r){t=e.exports=r(223)(void 0),t.push([e.i,'.ucenter_avatar_1k_Vk{background:url("/public/images/ucenter.jpg");background-size:cover;height:2.8rem;text-align:center;padding:.5rem 0}.ucenter_avatar_1k_Vk .ucenter_i_3y5NR{position:relative;width:1.4rem;height:1.4rem;margin:0 auto;background:#fff;border-radius:1.4rem;z-index:0}.ucenter_avatar_1k_Vk .ucenter_i_3y5NR:after,.ucenter_avatar_1k_Vk .ucenter_i_3y5NR:before{content:"";position:absolute;background:#fff;border-radius:1.4rem}.ucenter_avatar_1k_Vk .ucenter_i_3y5NR:before{width:1.48rem;height:1.48rem;top:-.04rem;left:-.04rem;opacity:.5;z-index:1}.ucenter_avatar_1k_Vk .ucenter_i_3y5NR:after{width:1.6rem;height:1.6rem;top:-.1rem;left:-.1rem;opacity:.17;z-index:1}.ucenter_avatar_1k_Vk .ucenter_iconfont_2jkqv{font-size:1rem;color:#f93838;position:relative;z-index:9999}.ucenter_avatar_1k_Vk .ucenter_img_31YPd{width:1.4rem;height:1.4rem;position:relative;z-index:99999;overflow:hidden;border-radius:1.4rem;background-size:cover}.ucenter_avatar_1k_Vk .ucenter_n_3kUkJ{color:#fff;font-size:.48rem;line-height:.48rem}.ucenter_list_1gI1N .ucenter_a_3nJn4{display:block;line-height:.96rem;height:.96rem;border-bottom:1px solid #e5e5e5;padding:0 .3rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.ucenter_list_1gI1N .ucenter_i1_1wdJI{font-size:.4rem;background:#999;color:#fff;width:.68rem;height:.68rem;line-height:.64rem;text-align:center;display:block;border-radius:.8rem;margin:.12rem .2rem 0 0}.ucenter_list_1gI1N .ucenter_i1_1wdJI.c1{background:#6cb400}.ucenter_list_1gI1N .ucenter_i1_1wdJI.c2{background:#ffae00}.ucenter_list_1gI1N .ucenter_i1_1wdJI.c3{background:#f93838}.ucenter_list_1gI1N .ucenter_n_3kUkJ{-webkit-box-flex:1;-ms-flex:1;flex:1;color:#666;font-size:.28rem}.ucenter_list_1gI1N .ucenter_i2_3kP4C{font-size:.32rem;-webkit-transform:rotate(180deg);transform:rotate(180deg)}.ucenter_list_1gI1N .ucenter_i2_3kP4C:before{width:.2rem;height:.2rem;top:.4rem;left:.5rem;border-color:#a3a3a3}',""]),t.locals={avatar:"ucenter_avatar_1k_Vk",i:"ucenter_i_3y5NR",iconfont:"ucenter_iconfont_2jkqv",img:"ucenter_img_31YPd",n:"ucenter_n_3kUkJ",list:"ucenter_list_1gI1N",a:"ucenter_a_3nJn4",i1:"ucenter_i1_1wdJI",i2:"ucenter_i2_3kP4C"}}});
//# sourceMappingURL=3.map