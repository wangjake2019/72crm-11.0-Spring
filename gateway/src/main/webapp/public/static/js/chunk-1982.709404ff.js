(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1982"],{"/esw":function(t,e,s){"use strict";var a=s("Flj7"),i={name:"TaskCell",components:{},mixins:[s("kK4T").a],props:{data:Object,dataIndex:Number,dataSection:Number},data:function(){return{}},computed:{priority:function(){return 0!=this.data.priority&&this.data.priority?this.getPriorityColor(this.data.priority):this.priorityList[3]},showLabels:function(){return this.data.labelList.length>3?this.data.labelList.slice(0,3):this.data.labelList},hideShowLabels:function(){return this.data.labelList.length>3?this.data.labelList.slice(3):[]}},watch:{},mounted:function(){},methods:{taskOverClick:function(t){var e=this;Object(a.n)({taskId:t.taskId,status:t.checked?5:1}).then(function(t){e.$emit("on-handle","complete",e.data,e.dataIndex,e.dataSection)}).catch(function(){t.checked=!1})},rowFun:function(t){this.$emit("on-handle","view",this.data,this.dataIndex,this.dataSection)},onmouseoverFun:function(t){this.$refs.itemSpan.offsetWidth>this.$refs.listLeft.offsetWidth-21?this.$set(t,"show",!0):this.$set(t,"show",!1)}}},n=(s("SFIQ"),s("KHd+")),l=Object(n.a)(i,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"taskRow",staticClass:"list task-cell",on:{click:function(e){t.rowFun(t.data)}}},[s("div",{ref:"listLeft",staticClass:"list-left"},[s("div",{class:t.data.checked?"title title-active":"title",on:{click:function(t){t.stopPropagation()}}},[s("el-checkbox",{on:{change:function(e){t.taskOverClick(t.data)}},model:{value:t.data.checked,callback:function(e){t.$set(t.data,"checked",e)},expression:"data.checked"}})],1),t._v(" "),s("span",{staticClass:"priority",style:{backgroundColor:t.priority.color}},[t._v(t._s(t.priority.label))]),t._v(" "),s("el-tooltip",{attrs:{placement:"bottom",effect:"light","popper-class":"task-tooltip tooltip-change-border"}},[s("div",{attrs:{slot:"content"},slot:"content"},[s("span",[t._v(t._s(t.data.name))])]),t._v(" "),s("span",{ref:"itemSpan",class:t.data.checked?"item-name-active":"item-name"},[t._v("\n        "+t._s(t.data.name)+"\n      ")])])],1),t._v(" "),s("div",{staticClass:"list-right"},[t.data.labelList&&t.data.labelList.length>0?s("div",{staticClass:"tag-box"},[t._l(t.showLabels,function(e,a){return s("span",{key:a,staticClass:"k-name",style:{background:e.color}},[t._v(t._s(e.labelName))])}),t._v(" "),t.hideShowLabels.length?s("el-tooltip",{attrs:{placement:"top",effect:"light","popper-class":"tooltip-change-border"}},[s("div",{staticClass:"tooltip-content",attrs:{slot:"content"},slot:"content"},t._l(t.hideShowLabels,function(e,a){return s("div",{key:a,staticClass:"item-label",staticStyle:{display:"inline-block","margin-right":"10px"}},[s("span",{staticClass:"k-name",staticStyle:{"border-radius":"3px",color:"#FFF",padding:"3px 10px"},style:{background:e.color||"#ccc"}},[t._v(t._s(e.labelName))])])})),t._v(" "),s("el-button",{staticClass:"more-btn",attrs:{icon:"el-icon-more"}})],1):t._e()],2):t._e(),t._v(" "),t.data.stopTime?s("span",{class:["due-time",{"is-past":1==t.data.isEnd}]},[t._v("\n      截止时间"+t._s(t._f("moment")(t.data.stopTime,"YYYY-MM-DD"))+"\n    ")]):t._e(),t._v(" "),s("div",{staticClass:"img-group"},[t.data.relationCount?s("div",{staticClass:"img-box"},[s("i",{staticClass:"wukong wukong-relevance"}),t._v(" "),s("span",[t._v(t._s(t.data.relationCount))])]):t._e(),t._v(" "),t.data.childAllCount>0?s("div",{staticClass:"img-box"},[s("i",{staticClass:"wukong wukong-sub-task"}),t._v(" "),s("span",[t._v(t._s(t.data.childWCCount)+"/"+t._s(t.data.childAllCount))])]):t._e(),t._v(" "),t.data.fileCount?s("div",{staticClass:"img-box"},[s("i",{staticClass:"wukong wukong-file"}),t._v(" "),s("span",[t._v(t._s(t.data.fileCount))])]):t._e(),t._v(" "),t.data.commentCount?s("div",{staticClass:"img-box"},[s("i",{staticClass:"wukong wukong-comment-task"}),t._v(" "),s("span",[t._v(t._s(t.data.commentCount))])]):t._e()]),t._v(" "),t.data.mainUser&&t.data.mainUser.userId?s("xr-avatar",{staticClass:"user-img",attrs:{name:t.data.mainUser.realname,id:t.data.mainUser.userId,size:24,src:t.data.mainUser.img,disabled:!1,trigger:"hover"},on:{click:function(t){t.stopPropagation()}}}):t._e()],1)])},[],!1,null,"3ccd9955",null);l.options.__file="TaskCell.vue";e.a=l.exports},"006g":function(t,e,s){},"1qo9":function(t,e,s){"use strict";var a=s("e1wl");s.n(a).a},A4N6:function(t,e,s){},ADZW:function(t,e,s){},HCIq:function(t,e,s){"use strict";var a=s("ADZW");s.n(a).a},Kcnz:function(t,e,s){"use strict";var a=s("ffUk");s.n(a).a},SFIQ:function(t,e,s){"use strict";var a=s("006g");s.n(a).a},e1wl:function(t,e,s){},"ej9+":function(t,e,s){"use strict";var a={name:"BaseTabsHead",components:{},props:{selectValue:[String,Number],tabs:Array},data:function(){return{currentValue:""}},computed:{},watch:{selectValue:function(){this.currentValue=this.selectValue}},mounted:function(){this.currentValue=this.selectValue},beforeDestroy:function(){},methods:{handleTabsClick:function(t,e){this.$emit("update:selectValue",t.name),this.$emit("change",t.name)}}},i=(s("jGgZ"),s("KHd+")),n=Object(i.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("flexbox",{staticClass:"base-tabs-head",attrs:{justify:"space-between"}},[s("div",[t._t("left")],2),t._v(" "),s("el-tabs",{on:{"tab-click":t.handleTabsClick},model:{value:t.currentValue,callback:function(e){t.currentValue=e},expression:"currentValue"}},t._l(t.tabs,function(t,e){return s("el-tab-pane",{key:e+t.name,attrs:{label:t.label,name:t.name}})})),t._v(" "),s("div",[t._t("right")],2)],1)},[],!1,null,"52d082d3",null);n.options.__file="index.vue";e.a=n.exports},ersz:function(t,e,s){"use strict";s.r(e);var a=s("FyfS"),i=s.n(a),n=s("QbLZ"),l=s.n(n),o=s("zsVz"),r={name:"TaskTabsHead",components:{BaseTabsHead:s("ej9+").a},props:{title:String},data:function(){return{}},computed:{},watch:{},mounted:function(){},beforeDestroy:function(){},methods:{exportClick:function(){this.$emit("export")}}},c=(s("Kcnz"),s("KHd+")),u=Object(c.a)(r,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("base-tabs-head",t._g(t._b({staticClass:"Task-tabs-head"},"base-tabs-head",t.$attrs,!1),t.$listeners),[s("span",{staticClass:"task-title",attrs:{slot:"left"},slot:"left"},[s("i",{staticClass:"wk wk-task"}),t._v(t._s(t.title)+"\n  ")]),t._v(" "),s("el-button",{staticClass:"export-btn",attrs:{slot:"right"},on:{click:t.exportClick},slot:"right"},[t._v("导出")])],1)},[],!1,null,"80aaeef4",null);u.options.__file="TaskTabsHead.vue";var d=u.exports,h=s("/esw"),p=s("pKm3"),f=s("C3Po"),k=s("8GhS"),v=s("7Qib"),m={name:"TaskFilter",components:{XhUserCell:k.p},props:{dueDate:String,priority:String,users:Array,done:Boolean},data:function(){return{dueDateValue:"",priorityValue:"",doneValue:!1,usersList:[],priorityOptions:[{label:"全部",key:""},{label:"高",key:"3"},{label:"中",key:"2"},{label:"低",key:"1"},{label:"无",key:"0"}]}},computed:{},watch:{},created:function(){this.dueDateValue=this.dueDate,this.priorityValue=this.priority,this.doneValue=this.done,this.usersList=Object(v.t)(this.users)},beforeDestroy:function(){},methods:{closeClick:function(){this.$emit("close")},userChage:function(t){this.usersList=t.value},saveClick:function(){this.$emit("save",this.dueDateValue,this.priorityValue,this.doneValue,this.usersList),this.$emit("close")},handleDateClose:function(){this.$refs.filterDatePicker.pickerVisible=!1}}},b=(s("1qo9"),Object(c.a)(m,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task-filter"},[t._m(0),t._v(" "),s("div",{staticClass:"task-filter__body"},[s("el-form",{ref:"form",attrs:{"label-width":"80px"}},[s("el-form-item",{attrs:{label:"负责人"}},[s("xh-user-cell",{staticClass:"handle-item-content",attrs:{value:t.users},on:{"value-change":t.userChage}})],1),t._v(" "),s("el-form-item",{attrs:{label:"截止时间"}},[s("el-date-picker",{directives:[{name:"elclickoutside",rawName:"v-elclickoutside",value:t.handleDateClose,expression:"handleDateClose"}],ref:"filterDatePicker",attrs:{type:"date",placeholder:"选择日期","value-format":"yyyy-MM-dd"},model:{value:t.dueDateValue,callback:function(e){t.dueDateValue=e},expression:"dueDateValue"}})],1),t._v(" "),s("el-form-item",{attrs:{label:"优先级"}},[s("el-select",{model:{value:t.priorityValue,callback:function(e){t.priorityValue=e},expression:"priorityValue"}},t._l(t.priorityOptions,function(t){return s("el-option",{key:t.key,attrs:{label:t.label,value:t.key}})}))],1),t._v(" "),s("el-form-item",{attrs:{label:"显示已完成"}},[s("el-switch",{model:{value:t.doneValue,callback:function(e){t.doneValue=e},expression:"doneValue"}})],1)],1)],1),t._v(" "),s("div",{staticClass:"task-filter__footer"},[s("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[s("el-button",{nativeOn:{click:function(e){return t.closeClick(e)}}},[t._v("取消")]),t._v(" "),s("el-button",{directives:[{name:"debounce",rawName:"v-debounce",value:t.saveClick,expression:"saveClick"}],attrs:{type:"primary"}},[t._v("保存")])],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"task-filter__header"},[e("span",{staticClass:"task-filter__title"},[this._v("筛选")])])}],!1,null,"81ce5678",null));b.options.__file="TaskFilter.vue";var _=b.exports,g=s("L2JU"),y=s("ehos"),C={name:"Index",components:{TaskTabsHead:d,TaskCell:h.a,TaskDetail:p.a,TaskQuickAdd:f.a,TaskFilter:_},props:{},data:function(){return{tabsSelectValue:"0",taskType:"",list:[],loading:!1,noMore:!1,scrollKey:Date.now(),page:1,dueDate:"",search:"",priority:"",showDone:!0,userList:[],taskFilterShow:!1,progress:{stopTask:0,allTask:0},moreTypes:[{type:"show/hide",name:"显示已完成任务/隐藏已完成任务",icon:"eye"}],taskID:"",detailIndex:-1,taskDetailShow:!1}},computed:l()({},Object(g.b)(["userInfo"]),{tabs:function(){return 1==this.taskType?[{label:"全部",name:"0"},{label:"我负责的",name:"1"},{label:"我参与的",name:"3"}]:[{label:"全部",name:"0"},{label:"下属负责的",name:"1"},{label:"下属参与的",name:"3"}]},title:function(){return 1==this.taskType?"我的任务":"下属的任务"},scrollDisabled:function(){return this.loading||this.noMore},progressValue:function(){return 0==this.progress.stopTask?0:parseInt(this.progress.stopTask/this.progress.allTask*100)}}),watch:{},created:function(){this.debouncedRefreshList=Object(y.debounce)(300,this.refreshList)},mounted:function(){this.taskType=this.$route.params.type},beforeRouteUpdate:function(t,e,s){this.taskType=t.params.type,this.showDone=!0,this.progress={stopTask:0,allTask:0},this.tabsSelectValue="0",this.dueDate="",this.priority="",this.userList=[],this.search="",this.refreshList(),s()},beforeDestroy:function(){},methods:{progressFormat:function(t){return this.progress.stopTask+"/"+this.progress.allTask},refreshList:function(){this.page=1,this.list=[],this.noMore=!1,this.scrollKey=Date.now()},taskFilterSave:function(t,e,s,a){this.priority=e,this.dueDate=t,this.showDone=s,this.userList=a,this.refreshList()},getList:function(){var t=this;this.loading=!0;var e={page:this.page,limit:15,type:this.tabsSelectValue,priority:this.priority,dueDate:this.dueDate,status:this.showDone?"":"1",mainUserId:this.userList&&this.userList.length?this.userList[0].userId:""};this.search&&(e.search=this.search),1!=this.taskType&&(e.mold=1),Object(o.g)(e).then(function(s){if(t.loading=!1,t.tabsSelectValue==e.type){if(!t.noMore){var a=!0,n=!1,l=void 0;try{for(var o,r=i()(s.data.page.list);!(a=(o=r.next()).done);a=!0){var c=o.value;5==c.status&&(c.checked=!0)}}catch(t){n=!0,l=t}finally{try{!a&&r.return&&r.return()}finally{if(n)throw l}}t.list=t.list.concat(s.data.page.list),t.page++}t.noMore=s.data.page.lastPage,t.progress=s.data}else t.refreshList()}).catch(function(){t.noMore=!0,t.loading=!1})},tabsChange:function(t){this.refreshList()},taskCellHandle:function(t,e,s){"view"==t?(this.taskID=e.taskId,this.detailIndex=s,this.taskDetailShow=!0):"complete"==t&&(this.progress.stopTask=e.checked?++this.progress.stopTask:--this.progress.stopTask)},detailHandle:function(t){var e=this;if("delete"==t.type)this.list.splice(t.index,1);else{var s=1;t.index>0&&(s=Math.ceil(t.index/5));var a={page:s,limit:5,type:this.tabsSelectValue,priority:this.priority,dueDate:this.dueDate,status:this.showDone?"":"1"};1!=this.taskType&&(a.mold=1),Object(o.g)(a).then(function(s){for(var a=e.list[t.index],i=0;i<s.data.page.list.length;i++){var n=s.data.page.list[i];if(n.taskId==a.taskId){5==n.status&&(n.checked=!0),e.list.splice(t.index,1,n);break}}e.progress=s.data}).catch(function(){})}},exportClick:function(){var t=this;this.loading=!0;var e={type:this.tabsSelectValue,priority:this.priority,dueDate:this.dueDate,status:this.showDone?"":"1"};1!=this.taskType&&(e.mold=1),Object(o.h)(e).then(function(e){Object(v.c)(e),t.loading=!1}).catch(function(){t.loading=!1})}}},w=(s("HCIq"),Object(c.a)(C,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("task-tabs-head",{attrs:{tabs:t.tabs,title:t.title,"select-value":t.tabsSelectValue},on:{"update:selectValue":function(e){t.tabsSelectValue=e},change:t.tabsChange,export:t.exportClick}}),t._v(" "),s("div",{staticClass:"content-wrapper",attrs:{direction:"column",align:"stretch"}},[s("flexbox",{staticClass:"content-wrapper__hd",attrs:{justify:"space-around"}},[s("flexbox",[1==t.taskType?s("xr-avatar",{staticClass:"head-img",attrs:{name:t.userInfo.realname,size:40,src:t.userInfo.img}}):s("i",{staticClass:"wk wk-multi-user user-icon head-img"}),t._v(" "),s("el-progress",{attrs:{percentage:t.progressValue,format:t.progressFormat}})],1),t._v(" "),s("flexbox",{staticClass:"header-right",attrs:{justify:"flex-end"}},[s("el-input",{attrs:{placeholder:"请输入任务名称","prefix-icon":"el-icon-search"},on:{input:t.debouncedRefreshList},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),s("el-popover",{attrs:{"popper-class":"no-padding-popover",placement:"bottom",width:"300",trigger:"click"},model:{value:t.taskFilterShow,callback:function(e){t.taskFilterShow=e},expression:"taskFilterShow"}},[t.taskFilterShow?s("task-filter",{attrs:{"due-date":t.dueDate,priority:t.priority,done:t.showDone,users:t.userList},on:{close:function(e){t.taskFilterShow=!1},save:t.taskFilterSave}}):t._e(),t._v(" "),s("el-button",{attrs:{slot:"reference",icon:"wk wk-screening"},on:{click:function(e){t.taskFilterShow=!0}},slot:"reference"},[t._v("筛选")])],1)],1)],1),t._v(" "),s("div",{staticClass:"cell-section"},[s("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getList,expression:"getList"}],key:""+t.scrollKey+t.tabsSelectValue,attrs:{"infinite-scroll-distance":"100","infinite-scroll-disabled":"scrollDisabled"}},t._l(t.list,function(e,a){return s("task-cell",{key:a,attrs:{data:e,"data-index":a},on:{"on-handle":t.taskCellHandle}})})),t._v(" "),t.loading?s("p",{staticClass:"scroll-bottom-tips"},[t._v("加载中...")]):t._e(),t._v(" "),t.noMore?s("p",{staticClass:"scroll-bottom-tips"},[t._v("没有更多了")]):t._e()]),t._v(" "),s("div",{staticClass:"task-add"},[s("task-quick-add",{on:{send:t.refreshList}})],1)],1),t._v(" "),t.taskDetailShow?s("task-detail",{ref:"particulars",attrs:{id:t.taskID,"detail-index":t.detailIndex,"no-listener-class":["task-cell"]},on:{"on-handle":t.detailHandle,close:function(e){t.taskDetailShow=!1}}}):t._e()],1)},[],!1,null,"c9fd7b4c",null));w.options.__file="index.vue";e.default=w.exports},ffUk:function(t,e,s){},jGgZ:function(t,e,s){"use strict";var a=s("A4N6");s.n(a).a}}]);