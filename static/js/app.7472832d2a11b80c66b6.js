webpackJsonp([20],{"34iZ":function(e,t){!function(){var e="@charset \"utf-8\";html{color:#000;background:#fff;overflow-y:scroll;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}html *{outline:0;-webkit-text-size-adjust:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}html,body{font-family:sans-serif}body,div,dl,dt,dd,ul,ol,li,pre,code,form,fieldset,legend,input,textarea,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{margin:0;padding:0}input,select,textarea{font-size:100%}table{border-collapse:collapse;border-spacing:0}fieldset,img{border:0}abbr,acronym{border:0;font-variant:normal}del{text-decoration:line-through}address,caption,cite,code,dfn,em,th,var{font-style:normal;font-weight:500}ol,ul{list-style:none}caption,th{text-align:left}q:before,q:after{content:''}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}a:hover{text-decoration:underline}ins,a{text-decoration:none;color: #333}",t=document.createElement("style");if(document.getElementsByTagName("head")[0].appendChild(t),t.styleSheet)t.styleSheet.disabled||(t.styleSheet.cssText=e);else try{t.innerHTML=e}catch(n){t.innerText=e}}(),function(e,t){function n(){var t=o.getBoundingClientRect().width;t/l>540&&(t=540*l);var n=t/10;o.style.fontSize=n+"px",u.rem=e.rem=n}var i,a=e.document,o=a.documentElement,s=a.querySelector('meta[name="viewport"]'),r=a.querySelector('meta[name="flexible"]'),l=0,c=0,u=t.flexible||(t.flexible={});if(s){console.warn("浏览器测试");var d=s.getAttribute("content").match(/initial\-scale=([\d\.]+)/);d&&(c=parseFloat(d[1]),l=parseInt(1/c))}else if(r){var m=r.getAttribute("content");if(m){var h=m.match(/initial\-dpr=([\d\.]+)/),p=m.match(/maximum\-dpr=([\d\.]+)/);console.log(h),h&&(l=parseFloat(h[1]),c=parseFloat((1/l).toFixed(2))),p&&(l=parseFloat(p[1]),c=parseFloat((1/l).toFixed(2)))}}if(!l&&!c){var f=(e.navigator.appVersion.match(/android/gi),e.navigator.appVersion.match(/iphone/gi)),v=e.devicePixelRatio;console.log(f),console.log(v),c=1/(l=f?v>=3&&(!l||l>=3)?3:v>=2&&(!l||l>=2)?2:1:1)}if(o.setAttribute("data-dpr",l),!s)if((s=a.createElement("meta")).setAttribute("name","viewport"),s.setAttribute("content","initial-scale="+c+", maximum-scale="+c+", minimum-scale="+c+", user-scalable=no"),o.firstElementChild)o.firstElementChild.appendChild(s);else{var b=a.createElement("div");b.appendChild(s),a.write(b.innerHTML)}e.addEventListener("resize",function(){clearTimeout(i),i=setTimeout(n,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(i),i=setTimeout(n,300))},!1),"complete"===a.readyState?a.body.style.fontSize=12*l+"px":a.addEventListener("DOMContentLoaded",function(){a.body.style.fontSize=12*l+"px"},!1),n(),u.dpr=e.dpr=l,u.refreshRem=n,u.rem2px=function(e){var t=parseFloat(e)*this.rem;return"string"==typeof e&&e.match(/rem$/)&&(t+="px"),t},u.px2rem=function(e){var t=parseFloat(e)/this.rem;return"string"==typeof e&&e.match(/px$/)&&(t+="rem"),t}}(window,window.lib||(window.lib={}))},"8dda":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Dd8w"),a=n.n(i),o=n("NYxO"),s={data:function(){return{}},methods:{},watch:{isChildShow:function(e,t){var n=this;setTimeout(function(){n.$emit("child-event",!1)},3e3)}},computed:a()({},Object(o.b)(["isChildShow","resInfo"])),mounted:function(){},components:{}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{directives:[{name:"show",rawName:"v-show",value:this.isChildShow,expression:"isChildShow"}],staticClass:"layer_mask"},[t("div",{staticClass:"layer_box"},[this._v(this._s(this.resInfo))])])},staticRenderFns:[]};var l=n("VU/8")(s,r,!1,function(e){n("mK+w")},"data-v-0e8aff16",null);t.default=l.exports},AwGH:function(e,t){},D453:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("Dd8w"),a=n.n(i),o=n("NYxO"),s={props:["articalItems"],data:function(){return{isActive:!1,isUl:!1,isMaskShow:!1,Items:this.articalItems}},methods:{mainTransition:function(e){this.isMaskShow=!this.isMaskShow,this.isActive=!this.isActive,this.isUl=!this.isUl},closeMask:function(e){e.stopPropagation(),this.isMaskShow=!this.isMaskShow,this.isActive=!this.isActive,this.isUl=!this.isUl},pageUrl:function(e,t){t+=1;this.$router.push({path:"/mainPage"+t,query:{plan:"private"}})},goToMain:function(){this.$router.push({path:"/jsMainPage"})}},computed:a()({},Object(o.b)(["title"])),created:function(){console.log("top vue created")},mounted:function(){console.log("top vue mounted")}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"el-top-nav",attrs:{id:"el-top-nav"}},[n("div",{staticClass:"el-btn",class:[e.isActive?"btn-rotate-true":""],on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.mainTransition(t)}}},[e._m(0)]),e._v(" "),n("div",{staticClass:"main-icon",on:{click:e.goToMain}},[n("i",{staticClass:"iconfont icon-zhuyedianji-copy"})]),e._v(" "),n("div",{staticClass:"top-title"},[e._v("\n      "+e._s(e.title)+"\n  ")]),e._v(" "),n("transition",{attrs:{name:"fadeMask"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isMaskShow,expression:"isMaskShow"}],staticClass:"main-mask",on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.closeMask(t)}}})]),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.isUl,expression:"isUl"}],staticClass:"main-ul"},[n("ul",e._l(e.Items,function(t,i){return n("li",{staticClass:"page-li",on:{click:function(t){t.stopPropagation(),t.preventDefault(),e.closeMask(t)}}},[n("router-link",{staticClass:"page-a",attrs:{to:{path:t.url}}},[e._v(e._s(t.title))])],1)}))])])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("span",{staticClass:"el-btn-bar"}),this._v(" "),t("span",{staticClass:"el-btn-bar"})])}]};var l=n("VU/8")(s,r,!1,function(e){n("vH6N")},"data-v-292f6f5a",null);t.default=l.exports},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={};n.d(i,"title",function(){return T}),n.d(i,"resInfo",function(){return A}),n.d(i,"isChildShow",function(){return F}),n.d(i,"isGoShow",function(){return U});var a=n("7+uW"),o=n("D453"),s=n("SKcX"),r=n("8dda"),l=n("NYxO"),c={data:function(){return{isChildShow:this.$store.state.isChildShow,isGoShow:!1,articalItems:[{title:"javascript",url:"/jsMainPage"},{title:"html",url:"/htmlMainPage"},{title:"css",url:"/cssMainPage"},{title:"面试集合",url:"/faceMainPage"},{title:"nodejs",url:"/nodeMainPage"}]}},created:function(){console.log("app vue created")},mounted:function(){console.log("app vue mounted")},computed:{},methods:{showMessageFromChild:function(e){e||this.$store.commit("SET_ISCHILDSHOWS",!1)},mainSetGo:function(e){this.isGoShow=e},mainSetGoMove:function(){}},components:{"top-nav":o.default,"footer-page":s.default,"res-info":r.default}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"appVue"}},[t("top-nav",{attrs:{articalItems:this.articalItems}}),this._v(" "),t("keep-alive",[t("router-view")],1),this._v(" "),t("footer-page"),this._v(" "),t("res-info",{directives:[{name:"show",rawName:"v-show",value:this.isChildShow,expression:"isChildShow"}],on:{"child-event":this.showMessageFromChild}})],1)},staticRenderFns:[]};var d=n("VU/8")(c,u,!1,function(e){n("Uyjk")},"data-v-f233ec3c",null).exports,m=n("Gu7T"),h=n.n(m),p=n("lHA8"),f=n.n(p),v=n("/ocq"),b=[{path:"/topNav",name:"topNav",component:function(){return new Promise(function(e){e()}).then(n.bind(null,"D453"))}},{path:"/footer",name:"footer",component:function(){return new Promise(function(e){e()}).then(n.bind(null,"SKcX"))}},{path:"/resInfo",name:"resInfo",component:function(){return new Promise(function(e){e()}).then(n.bind(null,"8dda"))}}],g=[{path:"/face",name:"face",component:function(){return Promise.all([n.e(0),n.e(18)]).then(n.bind(null,"cdL1"))}},{path:"/ali",name:"ali",component:function(){return Promise.all([n.e(0),n.e(15)]).then(n.bind(null,"JsA4"))}},{path:"/faceEase",name:"faceEase",component:function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"jINb"))}}],w=[{path:"/animate",name:"animate",component:function(){return n.e(5).then(n.bind(null,"MEbq"))}},{path:"/moveBanner",name:"moveBanner",component:function(){return n.e(2).then(n.bind(null,"jzCV"))}},{path:"/es",name:"es",component:function(){return n.e(12).then(n.bind(null,"O1xe"))}},{path:"/vueJsDemo",name:"vueJsDemo",component:function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"FZmM"))}},{path:"/shuanFa",name:"shuanFa",component:function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"UZ16"))}},{path:"/designPatterns",name:"designPatterns",component:function(){return Promise.all([n.e(0),n.e(17)]).then(n.bind(null,"wv2p"))}}],S=n("k1GD"),P=n.n(S),M=[{path:"/flex",name:"flex",component:function(){return n.e(3).then(n.bind(null,"C4Dw"))}},{path:"/css3D",name:"css3D",component:function(){return n.e(8).then(n.bind(null,"LASs"))}}],x=[{path:"/pubu",name:"pubu",component:function(){return n.e(1).then(n.bind(null,"b9tp"))}},{path:"/canvas",name:"canvas",component:function(){return Promise.all([n.e(0),n.e(9)]).then(n.bind(null,"o4ih"))}}],_=[{path:"/",name:"jsMainPage",redirect:"/jsMainPage"},{path:"/jsMainPage",name:"jsMainPage",component:function(){return Promise.all([n.e(0),n.e(13)]).then(n.bind(null,"Amke"))}},{path:"/cssMainPage",name:"cssMainPage",component:function(){return Promise.all([n.e(0),n.e(16)]).then(n.bind(null,"7YVj"))}},{path:"/htmlMainPage",name:"htmlMainPage",component:function(){return Promise.all([n.e(0),n.e(14)]).then(n.bind(null,"S0tl"))}},{path:"/nodeMainPage",name:"nodeMainPage",component:function(){return Promise.all([n.e(0),n.e(11)]).then(n.bind(null,"sPX1"))}},{path:"/faceMainPage",name:"faceMainPage",component:function(){return Promise.all([n.e(0),n.e(10)]).then(n.bind(null,"0tGY"))}}];a.a.use(v.a);var C,y=new f.a([].concat(h()(b),h()(g),h()(w),h()(P.a),h()(M),h()(x),h()(_))),k=new v.a({routes:y}),E=n("mtWM"),I=n.n(E),j=(n("AwGH"),n("34iZ"),n("mUbh")),T=function(e){return e.title},A=function(e){return e.resInfo},F=function(e){return e.isChildShow},U=function(e){return e.isGoShow},D={title:"蜗牛也有春天",resInfo:"欢迎您1！",isChildShow:!1},O=n("bOdI"),N=n.n(O),G=(C={},N()(C,"SET_TITLES",function(e,t){e.title=t}),N()(C,"SET_RESINFOS",function(e,t){e.resInfo=t}),N()(C,"SET_ISCHILDSHOWS",function(e,t){e.isChildShow=t}),N()(C,"SET_ISGOSHOW",function(e,t){e.isGoShow=t}),C);n("sax8");a.a.use(l.a);var H=new l.a.Store({actions:j,getters:i,state:D,mutations:G,strict:!1,plugins:[]});a.a.prototype.$ajax=I.a,a.a.config.productionTip=!1,a.a.component("my-component",{template:"<div>A custom component!</div>"}),new a.a({el:"#app",router:k,store:H,components:{App:d},template:"<App/>"})},SKcX:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={render:function(){var e=this.$createElement;return(this._self._c||e)("footer",{staticClass:"footer"})},staticRenderFns:[]};var a=n("VU/8")({name:"scroll-top",props:{},methods:{},mounted:function(){}},i,!1,function(e){n("sRUz")},"data-v-23e3d4e0",null);t.default=a.exports},Uyjk:function(e,t){},k1GD:function(e,t){},"mK+w":function(e,t){},mUbh:function(e,t){},sRUz:function(e,t){},vH6N:function(e,t){}},["NHnr"]);