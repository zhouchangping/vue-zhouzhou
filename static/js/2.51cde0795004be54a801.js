webpackJsonp([2],{"1kkB":function(t,e,i){t.exports=i.p+"static/img/2.7e7fae5.jpg"},"9K5W":function(t,e){function i(t){this.wrap=t.dom,this.list=t.list,this.init(),this.renderDOM(),this.bindDOM()}i.prototype.init=function(){this.radio=window.innerHeight/window.innerWidth,this.scaleW=window.innerWidth,this.idx=0},i.prototype.renderDOM=function(){var t=this.wrap,e=this.list,i=e.length;document.getElementsByTagName("body")[0].style.width=window.innerWidth+"px",this.outer=document.createElement("ul");for(var n=0;n<i;n++){var s=document.createElement("li"),o=e[n];s.style.cssText="position: absolute; display: -webkit-box;height: 100%;width:"+window.innerWidth+"pxdisplay: -webkit-box; -webkit-box-pack: center; -webkit-box-align: center; transform: translate3d("+n*this.scaleW+"px, 0, 0)",o&&(o.height/o.width>this.radio?s.innerHTML='<img height="'+window.innerHeight+'" src="'+o.img+'">':s.innerHTML='<img width="'+window.innerWidth+'" src="'+o.img+'">'),this.outer.appendChild(s)}this.outer.style.cssText="width:"+this.scaleW+"px;height: 100%",t.style.height=window.innerHeight-60+"px",t.appendChild(this.outer)},i.prototype.goIndex=function(t){var e,i=this.idx,n=this.outer.getElementsByTagName("li"),s=n.length;"number"==typeof t?e=i:"string"==typeof t&&(e=i+1*t),e>s-1?e=s-1:e<0&&(e=0),this.idx=e,n[e].style.webkitTransition="-webkit-transform 0.2s ease-out",n[e-1]&&(n[e-1].style.webkitTransition="-webkit-transform 0.2s ease-out"),n[e+1]&&(n[e+1].style.webkitTransition="-webkit-transform 0.2s ease-out"),n[e].style.webkitTransform="translate3d(0, 0, 0)",n[e-1]&&(n[e-1].style.webkitTransform="translate3d(-"+this.scaleW+"px, 0, 0)"),n[e+1]&&(n[e+1].style.webkitTransform="translate3d("+this.scaleW+"px, 0, 0)")},i.prototype.bindDOM=function(){var t=this,e=t.scaleW,i=t.outer;t.list.length;i.addEventListener("touchstart",function(e){t.startTime=1*new Date,t.startX=e.touches[0].pageX,t.offsetX=0;for(var i=e.target;"LI"!=i.nodeName&&"BODY"!=i.nodeName;)i=i.parentNode;t.target=i}),i.addEventListener("touchmove",function(e){e.preventDefault(),t.offsetX=e.targetTouches[0].pageX-t.startX;for(var n=i.getElementsByTagName("li"),s=t.idx-1,o=s+3;s<o;s++)n[s]&&(n[s].style.webkitTransition="none"),n[s]&&(n[s].style.webkitTransform="translate3d("+((s-t.idx)*t.scaleW+t.offsetX)+"px, 0, 0)")}),i.addEventListener("touchend",function(n){n.preventDefault();var s=e/6,o=1*new Date;i.getElementsByTagName("li");o-t.startTime>300?t.offsetX>=s?t.goIndex("-1"):t.offsetX<0&&t.offsetX<-s?t.goIndex("+1"):t.goIndex("0"):t.offsetX>50?t.goIndex("-1"):t.offsetX<-50?t.goIndex("+1"):t.goIndex("0")})},t.exports=i},ALYQ:function(t,e,i){t.exports=i.p+"static/img/5.7c852a8.jpg"},G2SX:function(t,e,i){t.exports=i.p+"static/img/3.31db5be.jpg"},Uaes:function(t,e,i){t.exports=i.p+"static/img/7.3b97998.jpg"},lufT:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("NYxO");var n=i("9K5W"),s=i.n(n),o={data:function(){return{list:[{height:950,width:800,img:i("rfBT")},{height:1187,width:900,img:i("1kkB")},{height:766,width:980,img:i("G2SX")},{height:754,width:980,img:i("v1YU")},{height:1187,width:900,img:i("ALYQ")},{height:766,width:980,img:i("p/KA")},{height:754,width:980,img:i("Uaes")}]}},methods:{},activated:function(){this.$store.commit("SET_TITLES","图片滑动")},mounted:function(){new s.a({dom:document.getElementById("canvas"),list:this.list})},deactivated:function(){},components:{}},a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"main"}},[e("div",{attrs:{id:"canvas"}})])}]};var r=i("VU/8")(o,a,!1,function(t){i("mBtv")},"data-v-55aea828",null);e.default=r.exports},mBtv:function(t,e){},"p/KA":function(t,e,i){t.exports=i.p+"static/img/6.45f789a.jpg"},rfBT:function(t,e,i){t.exports=i.p+"static/img/1.03342d6.jpg"},v1YU:function(t,e,i){t.exports=i.p+"static/img/4.25e610e.jpg"}});
//# sourceMappingURL=2.51cde0795004be54a801.js.map