webpackJsonp([12],{JsA4:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});t("NYxO");var a={data:function(){return{isActive:!1,avatar:t("bVxe"),dataArtical:{pageTitle:"2018阿里面试题汇总",img:t("bVxe"),userName:"寻找许仙",pageInfo:"现今前端市场大量人口充斥，良莠不齐，市面上面试试题层出不穷。本文主要是针对一些面试题的解答专题",pageTime:"2019-02-13"}}},methods:{mainTransition:function(n){this.isActive=!this.isActive,this.isUl=!this.isUl}},activated:function(){this.$store.commit("SET_TITLES","面试经验"),this.$store.commit("SET_ISCHILDSHOWS",!1)},mounted:function(){},components:{}},o={render:function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("transition",{attrs:{name:"fadeMask"}},[t("div",{staticClass:"page-container"},[t("div",{staticClass:"page-main"},[t("h1",{staticClass:"page-titile"},[n._v(n._s(n.dataArtical.pageTitle))]),n._v(" "),t("div",{staticClass:"page-user-info"},[t("p",{staticClass:"page-p"},[t("img",{staticClass:"page-user-img",attrs:{src:n.avatar}}),n._v(" "),t("span",{staticClass:"page-username"},[n._v(n._s(n.dataArtical.userName))])]),n._v(" "),t("p",{staticClass:"page-p"},[t("span",{staticClass:"page-user-time"},[n._v(n._s(n.dataArtical.pageTime))])])]),n._v(" "),t("div",{staticClass:"page-artical-msg"},[t("P",[n._v("\n          1. 使用过的koa2中间件\n          koa-swig koa-router koa-static koa-simple-router\n        ")]),n._v(" "),t("p",[n._v("\n          2. koa-body原理\n        ")]),n._v(" "),t("P",[n._v("\n          3. 介绍自己写过的中间件\n          专门处理htmlplugin的中间件，在插件文件混入到index.html的过程中，处理，获取部分内容\n        ")]),n._v(" "),t("p",[n._v("\n          4. cluster（https://juejin.im/post/5b178f535188257d5902fdfa）\n          cluster借助child_process模块的fork()方法来创建子进程，通过fork方式创建的子进程与父进程之间建立了IPC通道，支持双向通信。子进程数与cpu核数相一致。cluster实现负载均衡 mater进程分发，\n        ")]),n._v(" "),t("p",[n._v("\n          5. 在建立ipc之前父子进程如何通信\n          Node.js 在启动子进程的时候，主进程先建立 IPC 频道，然后将 IPC 频道的 fd (文件描述符) 通过 process.env 环境变量（NODE_CHANNEL_FD）的方式传递给子进程，然后子进程通过 fd 连上 IPC 与父进程建立连接。\n        ")]),n._v(" "),t("p",[n._v("\n          6. 介绍pm2\n          内建负载均衡（使用Node cluster 集群模块、子进程，可以参考朴灵的《深入浅出node.js》一书第九章）\n          线程守护，keep alive\n          0秒停机重载，维护升级的时候不需要停机.\n          现在 Linux (stable) & MacOSx (stable) & Windows (stable).多平台支持\n          停止不稳定的进程（避免无限循环）\n          控制台检测\n          提供 HTTP API\n          远程控制和实时的接口API ( Nodejs 模块,允许和PM2进程管理器交互 )\n          pm2是一个保存在后台的进程，一个守护进程，负责处理您所有正在运行的进程。\n          pm2 start app.js\n          该应用在pm2的进程列表中注册\n          该应用在后台启动\n        ")]),n._v(" "),t("p",[n._v("\n          7. 如何和MySQL进行通信\n          ?...\n        ")]),n._v(" "),t("p",[n._v("\n          8. React生命周期及自己的理解\n          装载组件触发\n          componentWillMount 调用setState\n          componentWillDidMount 在装载完成（render之后调用）ReactDom.findDOMNode(this);获得组件的DOM节点\n          更新组件时触发\n          componentWillReceiveProps\n          sholuldComponentUpdate\n          componentWillUpdate\n          componentDidUpdate\n          卸载组件时触发\n          componentWillUnmount\n        ")]),n._v(" "),t("p",[n._v("\n          9. 如何配置React-Router\n          react-router-reduce\n          react-router-dom\n          react-router\n          npm install react-router-dom --save\n        ")]),n._v(" "),t("p",[n._v("\n          10. 服务端渲染SSR\n          借助node实现服务器直出，做性能监控，配合webpack gulp处理服务器端代码 koa router koa-fetch log4 jsDOC\n        ")]),n._v(" "),t("p",[n._v("\n          11. hash和history两种模式的区别\n          window.history window.document window.location\n          location.hash location.href location.port location.hostname location.host location.search\n          location.reload() location.replace()\n          hash\n          hash模式背后的原理是onhashchange事件,可以在window对象上监听这个事件:\n          window.onhashchange = function(event){\n          console.log(event.oldURL, event.newURL);\n          let hash = location.hash.slice(1);\n          document.body.style.color = hash;\n          }\n          因为hash发生变化的url都会被浏览器记录下来，从而你会发现浏览器的前进后退都可以用了，同时点击后退时，页面字体颜色也会发生变化。\n          history\n          切换历史状态包括back、forward、go\n          history.pushState({color:'red'}, 'red', 'red')\n          history.back();\n          setTimeout(function(){\n          history.forward();\n          },0)\n          window.onpopstate = function(event){\n          console.log(event.state)\n          if(event.state && event.state.color === 'red'){\n          document.body.style.color = 'red';\n          }\n          }\n          ")]),t("p",[n._v("\n            12. 介绍Redux数据流的流程\n            action触发->dispatch-> reducer整合state->输出新的state->引起视图变化\n            基于事务处理setState\n            存在异步的disptach 处理完合并到reducer中\n          ")]),n._v(" "),t("p",[n._v("\n            13. Redux如何实现多个组件之间的通信，多个组件使用相同状态如何进行管理\n            ?... 鉴于react使用太少\n          ")]),n._v(" "),t("p",[n._v("\n            14. 多个组件之间如何拆分各自的state，每块小的组件有自己的状态，它们之间还有一些公共的状态需要维护，如何思考这块\n          ")]),n._v(" "),t("p",[n._v("\n            15. 使用过的Redux中间件\n          ")]),n._v(" "),t("p",[n._v("\n            16. 如何解决跨域的问题\n            https://mp.weixin.qq.com/s/6l4IVdCqH4DF6zckmnDc_w\n            .com 顶级域名(一级域名)\n            baidu.com 一级域名\n            tieba.baidu .com 二级域名\n            jsonp Access-Control-Allow-Origin jquery-jsonp\n            postmassge: postMessage是HTML5 XMLHttpRequest Level 2中的API，且是为数不多可以跨域操作的window属性之一\n            websocket(socket.io) 本域名向3000端口发信息\n            node中间层代理 服务器之间不存在跨域\n            nginx反向代理\n            window.name + iframe\n            location.hash + iframe\n            document.domain + iframe\n          ")]),n._v(" "),t("p",[n._v("\n            17. 常见Http请求头\n            accept accept-charset accepte-encoding connection content-length accepet-language cookies host referer user-agent\n          ")]),n._v(" "),t("p",[n._v("\n            18. 移动端适配1px的问题\n            使用伪类after before 缩小0.5倍\n            .item {\n            position: relative;\n            }\n            .item:after {\n            content: '';\n            display: block;\n            position: absolute;\n            width: 100%;\n            left: 0;\n            bottom: 0;\n            height: 1px;\n            background-color: #c8c7cc;\n            -webkit-transform: scaleY(0.5);\n            transform: scaleY(0.5);\n            }\n          ")]),n._v(" "),t("p",[n._v("\n            19. 介绍flex布局\n            弹性布局 六个容器属性 六个项目属性\n            容器属性： flex-wrap flex-flow justify-content flext-direction align-items align-content\n            项目属性: order flex align-self flex-grow flex-shrink flex-basis\n          ")]),n._v(" "),t("p",[n._v("\n            20. 其他css方式设置垂直居中\n            display: flex; justify-content: center; align-items: center;\n            display: table-cell; vertical-aglign: center; text-align: center;\n            绝对定位和负边距：position: absolute; width: 100px; height: 50px; top: 50%; left: 50%; margin-left: -50px; margin-top: 20px; text-align: center;\n            transform: translate(-50%, -50%);\n            添加一个span元素 display: inline-block;\n            display: flex; 和margin： auto;\n            display: -webkit-box; -webkit-box-pack: center;-webkit-box-align: center; -webkit-box-orient: vertical; text-align: center;\n          ")]),n._v(" "),t("p",[n._v("\n            21. 居中为什么要使用transform（为什么不使用marginLeft/Top）\n            减少回流\n          ")]),n._v(" "),t("p",[n._v("\n            22. 使用过webpack里面哪些plugin和loader\n            loader: css-loader vue-loader style-loader babel-loader cache-loader postcss-lader sass-loader sass-loader\n            plugin:\n            optimize-css-assets-webpack-plugin（优化,压缩css)\n            html-webpack-plugin（压缩js,导入各自输出index.html）\n            html-minifier(压缩html)\n            webpack-merge\n            extract-text-webpack-plugin PurifyCSSPlugin // 提取压缩css\n            mini-css-extract-plugin 分离css\n            CopyWebpackPlugin\n            UglifyjsWebpackPlugin\n          ")]),n._v(" "),t("p",[n._v("\n            23. webpack里面的插件是怎么实现的\n            webpack插件其实是一个带apply方法的类，插件挂载到webpackhooks上，等到执行时机，tapable触发发布，执行apply\n          ")]),n._v(" "),t("p",[n._v("\n            24. dev-server是怎么跑起来\n            ?....\n          ")]),n._v(" "),t("p",[n._v("\n            25. 项目优化\n            webpack优化：https://juejin.im/post/5b652b036fb9a04fa01d616b\n            resolve字段告诉webpack怎么去搜索文件，所以首先要重视resolve字段的配置：\n            externals 配置externals，排除因为已使用\n           标签引入而不用打包的代码，\n              module.noParse字段告诉Webpack不必解析哪些文件，可以用来排除对非模块化库文件的解析\n              使用DllPlugin减少基础模块编译次数\n              使用HappyPack开启多进程Loader转换\n              使用ParallelUglifyPlugin开启多进程压缩JS文件\n              process.env.NODE_ENV\n              Scope Hoisting 我们可以发现模块数组是由一个一个闭包函数组成，闭包函数形成独立的作用域，分别被__webpack_require__调用，保证模块化而不会互相污染作用域。将所有闭包放至一个闭包中，通过减少闭包函数数量从而加快JS的执行速度，且代码体积有所减少\n              使用Prepack提前求值\n              分割代码以按需加载:\n                  document.getElementById('btn').addEventListener('click',function(){\n                      import(/* webpackChunkName:\"show\" */ './show').then((show)=>{\n                          show('Webpack');\n                      })\n                  })\n              多页面应用提取页面间公共代码，以利用缓存  optimization: { splitChunks: {\n              使用CDN加速静态资源加载\n              使用Tree Shaking剔除JS死代码\n              压缩CSS：css-loader?minimize、PurifyCSSPlugin optimize-css-assets-webpack-plugin（优化,压缩css) \n              webpack-bundle-analyzer 可视化分析工具，比Webapck Analyse更直观。使用也很简单：\n      ")]),n._v(" "),t("p",[n._v('\n      26. 抽取公共文件是怎么配置的\n          optimization: {\n              splitChunks: {\n                  cacheGroups: {\n                      commons: {\n                          chunks: "initial", \n                          name: "commons", // 通过将公共模块拆出来，最终合成的文件能够在最开始的时候加载一次，便存到缓存中供后续使用。\n                          minChunks: 3,\n                          minSize: 0,\n                      }\n                  }\n              },\n              runtimeChunk: {\n                  name: "runtime"\n              }\n          },\n          CommonsChunkPlugin：在webpack4中已经废除\n      ')]),n._v(" "),t("p",[n._v("\n      27. 项目中如何处理安全问题(https://juejin.im/post/5c446eb1e51d45517624f7db)\n          "),t("em",[n._v("xss: ")]),n._v("XSS (Cross-Site Scripting)，跨站脚本攻击跨站脚本攻击是指通过存在安全漏洞的Web网站注册用户的浏览器内运行非法的HTML标签或JavaScript进行的一种攻击。\n              Content-Security-Policy文档\n              转义字符\n              js-xss\n              httpOnly\n\n          "),t("em",[n._v("CSRF(Cross Site Request Forgery):")]),n._v("即跨站请求伪造，是一种常见的Web攻击，它利用用户已登录的身份，在用户毫不知情的情况下，以用户的名义完成非法操作。\n              Cookie 不随着跨域请求发送\n              referer token \n              验证码\n\n          "),t("em",[n._v("点击劫持")]),n._v("是一种视觉欺骗的攻击手段。攻击者将需要攻击的网站通过 iframe 嵌套的方式嵌入自己的网页中，并将 iframe 设置为透明，在页面中透出一个按钮诱导用户点击。\n              X-FRAME-OPTIONS 不允许使用iframe方式展示\n\n          "),t("em",[n._v("URL跳转漏洞：")]),n._v(" 借助未验证的URL跳转，将应用程序引导到不安全的第三方区域，从而导致的安全问题。\n              http://www.wooyun.org/login.php?jumpto=http://www.evil.com \n              <?php\n              $url=$_GET['jumpto'];\n              header(\"Location: $url\");\n              ?>\n                  referer限制\n                  有效token\n\n          "),t("em",[n._v("sql注入")]),n._v("\n          OS命令注入和SQL注入差不多，只不过SQL注入是针对数据库的，而OS命令注入是针对操作系统的。OS命令注入攻击指通过Web应用，执行非法的操作系统命令达到攻击的目的。只要在能调用Shell函数的地方就有存在被攻击的风险。倘若调用Shell时存在疏漏，就可以执行插入的非法命令。\n                  ")]),n._v(" "),t("p",[n._v("\n                      28：\n                      react setState原理\n                  ")]),n._v(" "),t("p",[n._v("\n                      29：\n                      vue 数组原理\n                  ")]),n._v(" "),t("p",[n._v("\n                      30：\n                      js数组和对象区别\n                  ")]),n._v(" "),t("p",[n._v("\n                      30：\n                      webpack事件流： environment entryoption run compiler compilation make emit \n                  ")]),n._v(" "),t("p",[n._v("\n                      31: 浏览器缓存：localforage.js \n                          application: manifest service worker clear storage\n                          storage: local storage session storage indexed Db websql cookies\n                          cache: cache storage application cache\n                  ")]),n._v(" "),t("p",[n._v("\n                      31: 浏览器缓存：localforage.js \n                          application: manifest service worker clear storage\n                          storage: local storage session storage indexed Db websql cookies\n                          cache: cache storage application cache\n                  ")])],1)])])])},staticRenderFns:[]};var s=t("VU/8")(a,o,!1,function(n){t("j8Ef")},"data-v-5d4baa30",null);e.default=s.exports},j8Ef:function(n,e){}});