webpackJsonp([1,2],[,,,,,,,function(t,e,a){"use strict";var s=a(43),n=a.n(s),i=a(45);n.a.use(i.a);var o=new i.a.Store({state:{aaaaa:!1},mutations:{increment:function(t){t.aaaaa=!t.aaaaa,console.log("m="+t.aaaaa)}},actions:{increm:function(t){var e=t.commit;return e("increment")}},getters:{aaaaa:function(t){return console.log("g="+t.aaaaa),t.aaaaa}}});e.a=o},,,,,,,,,,,,,,,,,,function(t,e,a){var s=a(3)(a(46),a(39),null,null);t.exports=s.exports},function(t,e){},function(t,e,a){"use strict";var s=a(2),n=a.n(s),i=a(44),o=a.n(i),r=a(31),l=a.n(r),c=a(30),u=(a.n(c),a(33)),d=a.n(u),p=a(32),m=a.n(p),h=a(28),g=a.n(h);n.a.use(o.a),e.a=new o.a({routes:[{path:"/",name:"index",component:l.a},{path:"/poetry",name:"poetry",component:d.a},{path:"/movie",name:"movie",component:m.a},{path:"*",name:"404",component:g.a}]})},function(t,e,a){var s=a(3)(null,a(41),null,null);t.exports=s.exports},function(t,e,a){var s=a(3)(a(47),a(36),null,null);t.exports=s.exports},function(t,e,a){var s=a(3)(null,null,null,null);t.exports=s.exports},function(t,e,a){var s=a(3)(a(48),a(40),null,null);t.exports=s.exports},function(t,e,a){var s=a(3)(a(49),a(38),null,null);t.exports=s.exports},function(t,e,a){var s=a(3)(a(50),a(35),null,null);t.exports=s.exports},function(t,e,a){var s=a(3)(a(51),a(37),null,null);t.exports=s.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"poetry"},[a("el-row",{staticStyle:{height:"100px","line-height":"100px","border-bottom":"1px solid #ccc"},attrs:{id:"header"}},[a("el-col",{attrs:{span:6}},[a("a",{attrs:{href:"./index.html"}},[a("h3",[t._v("诗歌打油")])])])],1),t._v(" "),a("el-row",{attrs:{id:"container"}},[a("el-col",{attrs:{span:6}},[a("el-row",{staticStyle:{margin:"30px 0"}},t._l([{a:"舒心中骚柔"},{a:"感万物变迁"},{a:"叹世事无常"},{a:"问人生何意"},{a:"畅安身侥幸"}],function(e){return a("el-col",{staticStyle:{height:"40px","line-height":"20px",padding:"10px 0"}},[t._v(t._s(e.a))])})),t._v(" "),a("el-row",{staticStyle:{"border-top":"1px solid #ccc","border-bottom":"1px solid #ccc"}},[a("el-col",{staticStyle:{height:"80px","line-height":"80px"},attrs:{span:10}},[a("el-button",{attrs:{type:"text"}},[t._v("关于作者")])],1),t._v(" "),a("el-col",{staticStyle:{"border-left":"1px solid #ccc",height:"80px","line-height":"80px"},attrs:{span:14}},[a("el-button",{attrs:{type:"text"}},[t._v("留言")])],1)],1)],1),t._v(" "),a("el-col",{staticStyle:{"border-left":"1px solid #ccc"},attrs:{span:18}},[t._l(t.edit_data_task,function(e){return a("el-row",{staticStyle:{"border-bottom":"1px solid #ccc",padding:"30px 0 30px 60px"}},[a("el-row",{staticStyle:{height:"40px","line-height":"40px","text-align":"left","font-size":"1rem"}},[a("el-col",{attrs:{span:3}},[a("h4",{staticStyle:{"text-align":"left"}},[t._v(t._s(e.number))])])],1),t._v(" "),a("el-row",{staticStyle:{height:"30px","line-height":"30px",color:"#999","font-size":"0.8rem"}},[a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:2}},[t._v("\n\t\t\t\t\t\t"+t._s(e.task_data.operater)+"\n\t\t\t\t\t")]),t._v(" "),a("el-col",{staticStyle:{"text-align":"left"},attrs:{span:2}},[t._v("\n\t\t\t\t\t\t"+t._s(e.time)+"\n\t\t\t\t\t")])],1),t._v(" "),a("el-row",{staticStyle:{"text-align":"left",margin:"20px 0"}},[t._v("\n\t\t\t\t\t"+t._s(e.task_data.task_content)+"\n\t\t\t\t")])],1)}),t._v(" "),a("el-row",{staticStyle:{height:"150px","line-height":"150px"}},[a("h5",[t._v("\n\t\t\t\t\tNo more , Please wait , thanks!\n\t\t\t\t")]),t._v(" "),a("el-button",{attrs:{type:"text"}},[a("a",{attrs:{href:"#"}},[t._v("返回顶部")])])],1)],2)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dia"},[a("el-dialog",{directives:[{name:"model",rawName:"v-model",value:t.aaaaa,expression:"aaaaa"}],attrs:{title:"编辑",size:"tiny"},domProps:{value:t.aaaaa},on:{click:function(e){t.dialogclick(this.$el)},input:function(e){t.aaaaa=e}}},[t._t("default"),t._v(" "),a("span",{staticClass:"dialog-footer",slot:"footer"},[a("el-button",{on:{click:t.increment}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.increment}},[t._v("确 定")])],1)],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tzj-test"},[t._t("default"),t._v(" "),a("h1",[t._v(t._s(t.test+"-测试-test"))])],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"movie"},[a("el-row",{staticStyle:{"border-bottom":"1px solid #ccc"}},[a("el-col",{staticStyle:{margin:"30px 0"}},[a("h3",[t._v("movies")])])],1),t._v(" "),t._l(t.showData,function(e,s){return a("el-row",{staticClass:"attention",staticStyle:{padding:"30px 0"}},[a("el-col",{attrs:{span:4,offset:2}},[a("el-card",{attrs:{"body-style":{padding:"0px"}}},[a("img",{staticClass:"image",attrs:{src:e.images.large,height:"auto",width:"100%"}}),t._v(" "),a("div",{staticStyle:{padding:"14px"}},[a("div",[t._v("\n              "+t._s(e.title)+"\n            ")])])])],1),t._v(" "),a("el-col",{attrs:{span:16,offset:2}},[a("h5",{staticStyle:{"text-align":"left"}},[t._v("观看时间："+t._s(s+1))]),t._v(" "),a("br"),t._v(" "),a("h5",{staticStyle:{"text-align":"left"}},[t._v("感想：")])])],1)}),t._v(" "),a("el-row",{staticStyle:{margin:"30px 0"}},[a("el-col",[a("div",{staticClass:"block"},[a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.sizeChange,layout:"total, prev, pager, next, jumper",total:250},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1)])],1)],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{width:"1200px",margin:"0 auto"},attrs:{id:"app"}},[a("el-row",{staticStyle:{background:"#eef1f6"},attrs:{id:"header"}},[a("el-col",{attrs:{span:14}},[a("el-col",{staticStyle:{height:"70px"},attrs:{span:4}},[a("router-link",{attrs:{to:"/"}},[a("h1",{staticStyle:{"line-height":"70px","margin-left":"40px"}},[t._v("tobeatus")])])],1)],1),t._v(" "),a("el-col",{attrs:{span:10}},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":"1",mode:"horizontal"}},[a("el-menu-item",{attrs:{index:"1"}},[a("router-link",{attrs:{to:"/"}},[t._v("home")])],1),t._v(" "),a("el-submenu",{attrs:{index:"2"}},[a("template",{slot:"title"},[t._v("attention")]),t._v(" "),t._l(t.navurl,function(e,s){return a("el-menu-item",{attrs:{index:"'2-'+index"}},[a("router-link",{attrs:{to:e.url}},[a("div",[t._v(t._s(e.title))])])],1)})],2),t._v(" "),a("el-menu-item",{attrs:{index:"3"}},[a("router-link",{attrs:{to:"/friends"}},[t._v("friends")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"4"}},[a("div",{on:{click:t.dialogVis}},[t._v("contact me")])]),t._v(" "),a("el-menu-item",{attrs:{index:"5"}},[a("div",[t._v("CV")])])],1)],1)],1),t._v(" "),a("tzj-dia",[a("tzj-test",[t._v(t._s(t.aaaaa+"-测试-app"))])],1),t._v(" "),a("router-view"),t._v(" "),a("el-row",{staticStyle:{background:"#eef1f6","margin-top":"50px"},attrs:{id:"footer"}},[a("el-col",{attrs:{span:16}},[a("el-col",{staticStyle:{height:"80px"},attrs:{span:4}},[a("router-link",{attrs:{to:"/"}},[a("h1",{staticStyle:{"line-height":"70px","margin-left":"40px"}},[t._v("tobeatus")])])],1)],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("el-menu",{staticClass:"el-menu-demo",attrs:{"default-active":"1",mode:"horizontal"}},[a("el-menu-item",{attrs:{index:"1"}},[a("router-link",{attrs:{to:"/"}},[t._v("home")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"2"}},[a("div",{on:{click:t.dialogVis}},[t._v("contact me")])]),t._v(" "),a("el-menu-item",{attrs:{index:"3"}},[a("router-link",{attrs:{to:"/friends"}},[t._v("friends")])],1),t._v(" "),a("el-menu-item",{attrs:{index:"4"}},[t._v("CV")])],1)],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("el-row",[a("el-col",[a("el-carousel",{attrs:{interval:4e3,height:"500px"}},t._l(1,function(e){return a("el-carousel-item",[a("div",{staticStyle:{"margin-top":"150px"}},[a("h2",[t._v("\n              to-beatus\n            ")])]),t._v(" "),a("div",{staticStyle:{"margin-top":"50px"}},[a("h5",[t._v("\n              These words would be written on my tombstone in the future :\n            ")]),t._v(" "),a("h5",{staticStyle:{"margin-top":"20px"}},[t._v('\n              "I guess it comes down to a simple choice:\'get busy living or get busy\n              dying\'." I think i chosen the first one."\n            ')])])])}))],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"404"},[a("el-row",[a("el-col",{staticStyle:{margin:"250px 0"}},[a("h1",[t._v("404")]),t._v(" "),a("br"),t._v(" "),a("h4",[t._v("Sorry,I'm hard working to build the page,Please wait,thanks.")])])],1)],1)},staticRenderFns:[]}},,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(29),n=a.n(s),i=a(34),o=a.n(i),r=a(7),l=[{background:"#D3DCE6"},{background:"#E5E9F2"}],c=[{name:"Jack"},{name:"Tom"},{name:"Jim"},{name:"Lucy"},{name:"jack"},{name:"jack"},{name:"jack"},{name:"jack"}],u=[{title:"poetry",url:"./poetry"},{title:"movie",url:"./movie"},{title:"tourism",url:"./tourism"},{title:"book",url:"./book"},{title:"food",url:"./food"},{title:"painting and calligraphy",url:"./painting"},{title:"song",url:"./song"},{title:"chess",url:"./chess"}];e.default={name:"app",components:{tzjDia:n.a,tzjTest:o.a},data:function(){return{navurl:u,store:r.a,classname:l,friends:c,formLabelWidth:"80px",edit_task_num:0}},computed:{aaaaa:function(){return this.store.state.aaaaa}},methods:{dialogVis:function(){this.store.dispatch("increm")}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(7);e.default={name:"dia",data:function(){return{store:s.a}},methods:{increment:function(){this.store.dispatch("increm")},dialogclick:function(t){console.log(t)}},computed:{aaaaa:function(){return this.store.state.aaaaa}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=[{imgname:"image",time:"2001.1.12",img:"http://exp.cdn-hotels.com/hotels/1000000/50000/44000/43999/43999_121_z.jpg"},{imgname:"image",time:"2001.2.12",img:"http://exp.cdn-hotels.com/hotels/1000000/50000/44000/43999/43999_121_z.jpg"},{imgname:"image",time:"2001.3.12",img:"http://exp.cdn-hotels.com/hotels/1000000/50000/44000/43999/43999_121_z.jpg"}];e.default={name:"index",data:function(){return{imgdata:s}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(13),n=(a.n(s),{startData:0,firstCurrentPage:1,pageSizes:[10,20,50],startsize:10});e.default={name:"movie",data:function(){return{showData:[],realData:[],startData:n.startData,endData:n.startsize,currentPage:n.firstCurrentPage,sizeChange:n.startsize,pageSizes:n.pageSizes}},created:function(){this.resource()},methods:{handleSizeChange:function(t){console.log("每页 "+t+" 条");var e=this;e.currentPage=1,e.startData=0,e.endData=t,e.sizeChange=t,e.showData=e.realData.slice(),e.showData=e.showData.slice(e.startData,e.endData)},handleCurrentChange:function(t){document.body.scrollTop=document.documentElement.scrollTop=0,console.log("当前页: "+t);var e=this;if(e.currentPage=t,e.startData=(t-1)*e.sizeChange,e.endData=e.startData+e.sizeChange,void 0==e.realData[e.startData]){var a=void 0;e.$http.jsonp("https://api.douban.com/v2/movie/top250",{before:function(){a=s.Loading.service({fullscreen:!0,text:"正在加载，请稍候~"})},params:{start:e.startData,count:e.sizeChange},method:"GET",emulateJSON:!0}).then(function(t){e.showData=t.data.subjects.slice(),a.close();for(var s=0;s<t.data.subjects.length;s++)e.realData[e.startData+s]=t.data.subjects[s]},function(t){console.log(t)})}else e.showData=e.realData.slice(),e.showData=e.showData.slice(e.startData,e.endData)},resource:function(){var t=this,e=void 0;t.$http.jsonp("https://api.douban.com/v2/movie/top250",{before:function(){e=s.Loading.service({fullscreen:!0,text:"正在加载，请稍候~"})},params:{count:t.sizeChange},method:"GET",emulateJSON:!0}).then(function(a){t.showData=a.data.subjects.slice(t.startData,t.endData),e.close(),t.realData=a.data.subjects},function(t){console.log(t)})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"poetry",data:function(){return{edit_data_task:s}}};var s=[{number:1,time:"2015-10-10",img:"http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg",delete:!1,seem:!0,status:"-1",task_data:{task_content:"asdasdasdas",operater:"小明"}},{number:2,time:"2015-10-10",img:"http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg",delete:!1,seem:!0,status:"-1",task_data:{task_content:"asdasdasdasdasdasdasasdas",operater:"小红"}},{number:3,time:"2015-10-10",img:"http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg",delete:!1,seem:!0,status:"0",task_data:{task_content:"asdasda啊发射点发爱书人他sdas",operater:"小李"}},{number:4,time:"2015-10-10",img:"http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg",delete:!1,seem:!0,status:"1",task_data:{task_content:"asdasdas阿 df sd   斯达阿萨德啊亲人 2若2das",operater:"小asd "}},{number:5,time:"2015-10-10",img:"http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg",delete:!1,seem:!0,status:"1",task_data:{task_content:"asdasdasdas",operater:"小asd a明"}},{number:6,time:"2015-10-10",img:"http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg",delete:!1,seem:!0,status:"0",task_data:{task_content:"asda asd asd as asqer2w4 tsdasdasdasdasdasasdas",operater:"小 e"}},{number:7,time:"2015-10-10",img:"http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg",delete:!1,seem:!0,status:"2",task_data:{task_content:"asdasda啊 as as d发射点发爱书人他sdas",operater:"小adsas d"}},{number:8,time:"2015-10-10",img:"http://img.taopic.com/uploads/allimg/110603/44-1106031A11380.jpg",delete:!1,seem:!0,status:"2",task_data:{task_content:"asdasdasd as   as阿斯达阿萨德啊亲人 2若2das",operater:"小as "}}]},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(7);e.default={name:"tzj-test",data:function(){return{store:s.a}},computed:{test:function(){return this.store.getters.aaaaa}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(2),n=a.n(s),i=a(13),o=a.n(i),r=a(26),l=(a.n(r),a(25)),c=a.n(l),u=a(27),d=a(24),p=a.n(d);n.a.use(p.a),n.a.use(o.a),new n.a({el:"#app",router:u.a,template:"<App/>",components:{App:c.a}})}],[91]);
//# sourceMappingURL=app.e7683022cfca3c81b86b.js.map