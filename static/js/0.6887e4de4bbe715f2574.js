webpackJsonp([0],{"19QO":function(n,o,a){var i=a("RStv");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=a("rjj0").default;e("9bc77dd0",i,!0,{})},"5Q0w":function(n,o,a){"use strict";var i=a("Fd2+"),e=a("19QO");a.n(e);o.a={name:"settings-page",data:function(){return{versionName:"V 1.0.0",currentLang:this.$i18n.locale,showLangPop:!1,langOptions:{en:"english",zh:"chinese"}}},methods:{onLangChange:function(n){this.showLangPop=!1,window.localStorage.setItem("language",n),this.$i18n.reload()},onLangClick:function(){this.showLangPop=!0},onVersionClick:function(){this._showToast("20190531 000928 test")},onExitClick:function(){var n=this;i.a.confirm({message:this.$t("logout_confirm")}).then(function(){localStorage.clear(),n._routeReplace("home")})},onBackClick:function(){this.$router.back()}}}},DtvU:function(n,o,a){"use strict";a.d(o,"a",function(){return i}),a.d(o,"b",function(){return e});var i=function(){var n=this,o=n.$createElement,a=n._self._c||o;return a("div",[a("van-nav-bar",{attrs:{"left-arrow":"",title:n.$t("settings"),fixed:"","z-index":10},on:{"click-left":n._routerBack}}),n._v(" "),a("div",{staticClass:"nav-con-16"},[a("van-cell-group",[a("van-cell",{attrs:{title:n.$t("version"),icon:"info-o",value:n.versionName,size:"large"},on:{click:n.onVersionClick}}),n._v(" "),a("van-cell",{attrs:{title:n.$t("language"),icon:"flag-o",value:n.$t(n.langOptions[n.currentLang]),size:"large","is-link":""},on:{click:n.onLangClick}}),n._v(" "),a("van-cell",{attrs:{title:n.$t("logout"),"is-link":"",icon:"user-o",size:"large"},on:{click:n.onExitClick}})],1)],1),n._v(" "),a("van-popup",{staticClass:"lang-pop",model:{value:n.showLangPop,callback:function(o){n.showLangPop=o},expression:"showLangPop"}},[a("van-radio-group",{on:{change:n.onLangChange},model:{value:n.currentLang,callback:function(o){n.currentLang=o},expression:"currentLang"}},[a("van-cell",{attrs:{clickable:""},on:{click:function(o){n.currentLang="en"}}},[a("van-radio",{attrs:{name:"en"},on:{click:function(o){n.showLangPop=!1}}},[n._v(n._s(n.$t(n.langOptions.en)))])],1),n._v(" "),a("van-cell",{attrs:{clickable:""},on:{click:function(o){n.currentLang="zh"}}},[a("van-radio",{attrs:{name:"zh"},on:{click:function(o){n.showLangPop=!1}}},[n._v(n._s(n.$t(n.langOptions.zh)))])],1)],1)],1)],1)},e=[]},RStv:function(n,o,a){o=n.exports=a("FZ+f")(!1),o.push([n.i,".van-radio{overflow:hidden;user-select:none}.van-radio__icon,.van-radio__label{display:inline-block;vertical-align:middle;line-height:20px}.van-radio__icon{height:20px}.van-radio__icon .van-icon{font-size:14px;color:transparent;text-align:center;line-height:inherit;width:20px;height:20px;box-sizing:border-box;border:1px solid #e5e5e5;transition:.2s}.van-radio__icon--round .van-icon{border-radius:100%}.van-radio__icon--checked .van-icon{color:#fff;border-color:#008b8b;background-color:#008b8b}.van-radio__icon--disabled .van-icon{border-color:#c8c9cc;background-color:#ebedf0}.van-radio__icon--disabled.van-radio__icon--checked .van-icon{color:#c8c9cc}.van-radio__label{color:#323233;margin-left:10px}.van-radio__label--left{float:left;margin:0 10px 0 0}.van-radio__label--disabled{color:#c8c9cc}",""])},fhZZ:function(n,o,a){var i=a("sRRQ");"string"==typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var e=a("rjj0").default;e("1335a336",i,!0,{})},sRRQ:function(n,o,a){o=n.exports=a("FZ+f")(!1),o.push([n.i,".lang-pop[data-v-0d15ecb6]{width:80%;padding:10px;border-radius:8px}",""])},xQPq:function(n,o,a){"use strict";function i(n){a("fhZZ")}Object.defineProperty(o,"__esModule",{value:!0});var e=a("5Q0w"),t=a("DtvU"),c=a("XyMi"),r=i,l=Object(c.a)(e.a,t.a,t.b,!1,r,"data-v-0d15ecb6",null);o.default=l.exports}});