webpackJsonp([8],{"0tGY":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});t("NYxO");var s=t("tmMk"),i=t("GQaK"),n={data:function(){return{scroll:null,isLoading:!0,isShowContainer:!1,isActive:!1,avatar:t("bVxe"),dataArtical:[{pageTitle:"2018大厂高级前端面试题汇总",img:t("bVxe"),userName:"寻找许仙",pageInfo:"深深感受到高级前端面试的套路。以下是自己整理的面试题汇总，不敢藏私，统统贡献出来。\n面试的公司分别是：阿里、网易、滴滴、今日头条、有赞、挖财、沪江、饿了么、携程、喜马拉雅、兑吧、微医、寺库、宝宝树、海康威视、蘑菇街、酷家乐、百分点和海风教育。\n以下是面试题汇总，前端进阶系列会持续深入更新面试题解，共勉！",pageTime:"2019-01-24",url:"face"},{pageTitle:"阿里面试题解答",img:t("bVxe"),userName:"寻找许仙",pageInfo:"深深感受到高级前端面试的套路。以下是自己整理的面试题汇总，不敢藏私，统统贡献出来。\n面试的公司分别是：阿里、网易、滴滴、今日头条、有赞、挖财、沪江、饿了么、携程、喜马拉雅、兑吧、微医、寺库、宝宝树、海康威视、蘑菇街、酷家乐、百分点和海风教育。\n以下是面试题汇总，前端进阶系列会持续深入更新面试题解，共勉！",pageTime:"2019-02-13",url:"ali"},{pageTitle:"前端面试集锦",img:t("bVxe"),userName:"寻找许仙",pageInfo:"解决前端面试吃闭门羹，集合前端部分专题",pageTime:"2019-03-22",url:"faceEase"}]}},methods:{mainTransition:function(e){this.isActive=!this.isActive,this.isUl=!this.isUl},goToDetail:function(e){this.$router.push({name:e})}},activated:function(){this.$store.commit("SET_TITLES","面试题解答"),this.$store.commit("SET_ISCHILDSHOWS",!1),this.scroll.refresh()},mounted:function(){var e=document.querySelector(".pageContainer");this.scroll=new i.a(e,{scrollY:!0,click:!0}),this.isLoading=!1,this.isShowContainer=!0},components:{"refresh-fs":s.a}},r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{directives:[{name:"show",rawName:"v-show",value:e.isShowContainer,expression:"isShowContainer"}],staticClass:"pageContainer"},[t("div",{staticClass:"page-better"},e._l(e.dataArtical,function(a){return t("div",{staticClass:"page-main",on:{click:function(t){e.goToDetail(a.url)}}},[t("h1",{staticClass:"page-titile"},[e._v(e._s(a.pageTitle))]),e._v(" "),t("div",{staticClass:"page-user-info"},[t("p",{staticClass:"page-p"},[t("img",{staticClass:"page-user-img",attrs:{src:e.avatar}}),e._v(" "),t("span",{staticClass:"page-username"},[e._v(e._s(a.userName))])]),e._v(" "),t("p",{staticClass:"page-p"},[t("span",{staticClass:"page-user-time"},[e._v(e._s(a.pageTime))])])]),e._v(" "),t("div",{staticClass:"page-artical-msg"},[t("P",[e._v(e._s(a.pageInfo))])],1)])})),e._v(" "),t("refresh-fs",{attrs:{isLoading:e.isLoading}})],1)},staticRenderFns:[]};var o=t("VU/8")(n,r,!1,function(e){t("7Wlv")},"data-v-c06f1f6e",null);a.default=o.exports},"7Wlv":function(e,a){}});