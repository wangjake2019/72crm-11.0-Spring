(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5570"],{"2NAp":function(t,e,i){"use strict";var s=i("mrH5");i.n(s).a},"2caY":function(t,e,i){},BsgX:function(t,e,i){"use strict";var s={name:"ReportMenu",components:{},mixins:[i("Z+Ht").a],props:{list:Array},data:function(){return{}},computed:{},watch:{},mounted:function(){},beforeDestroy:function(){},methods:{itemClick:function(t){this.$emit("select",t)}}},n=(i("kSFP"),i("KHd+")),o=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",{staticClass:"report-menu"},t._l(t.list,function(e,s){return i("span",{key:s,staticClass:"report-menu-btn",on:{click:function(i){t.itemClick(e)}}},[i("i",{staticClass:"report-menu-btn__icon",class:t.getXrIcon(e.type),style:{color:t.getXrIconColor(e.type)}}),t._v(" "),i("span",{staticClass:"report-menu-btn__name"},[t._v(t._s(e.name))])])}))},[],!1,null,"d819a984",null);o.options.__file="ReportMenu.vue";e.a=o.exports},FuWY:function(t,e,i){},KmSi:function(t,e,i){"use strict";var s=i("QbLZ"),n=i.n(s),o=i("4XAY"),r=i("ZoMv"),a=i("yPq4"),c=i("O8VQ"),l=i("Ew9n"),u={name:"RecordList",components:{LogCell:c.a,SlideView:l.a,CRMFullScreenDetail:function(){return Promise.all([i.e("chunk-fb12"),i.e("chunk-374b")]).then(i.bind(null,"3z7q"))}},filters:{crmIconClass:function(t){return"wk wk-"+r.a.convertTypeToKey(t)},crmName:function(t){return r.a.convertTypeToName(t)}},props:{crmType:String,request:Function,params:Object,listenerIDs:{type:Array,default:function(){return["crm-main-container"]}},noListenerIDs:{type:Array,default:function(){return[]}},noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,page:1,noMore:!1,list:[],scrollKey:Date.now(),showFullDetail:!1,relationID:"",relationCrmType:""}},computed:{crmIcon:function(){var t=this.crmType.replace("crm_","");return i("p3hS")("./"+t+".png")},scrollDisabled:function(){return this.loading||this.noMore}},watch:{params:function(){this.refreshList()}},mounted:function(){},methods:{refreshList:function(){this.page=1,this.list=[],this.noMore=!1,this.scrollKey=Date.now()},getList:function(){var t=this;this.loading=!0,this.request(n()({page:this.page,limit:15},this.params)).then(function(e){t.page++,t.list=t.list.concat(e.data.list),t.noMore=e.data.lastPage,t.loading=!1}).catch(function(){t.noMore=!0,t.loading=!1})},checkRelationDetail:function(t,e){var i=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.relationID=e,this.relationCrmType=i?r.a.convertTypeToKey(t):t,this.showFullDetail=!0},hideView:function(){this.$emit("hide")}}},p=(i("lm3i"),i("KHd+")),h=Object(p.a)(u,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("slide-view",{staticClass:"d-view",attrs:{"listener-ids":t.listenerIDs,"no-listener-ids":t.noListenerIDs,"no-listener-class":t.noListenerClass,"body-style":{padding:0,height:"100%"}},on:{close:t.hideView}},[i("flexbox",{staticClass:"t-section"},[i("img",{staticClass:"t-img",attrs:{src:t.crmIcon}}),t._v(" "),i("div",{staticClass:"t-name"},[t._v("跟进记录")])]),t._v(" "),i("div",{staticClass:"t-content"},[i("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:t.getList,expression:"getList"}],key:t.scrollKey,attrs:{"infinite-scroll-disabled":"scrollDisabled","infinite-scroll-distance":"100"}},t._l(t.list,function(e,s){return i("log-cell",{key:s,attrs:{item:e,index:s,"can-delete":!1},on:{"crm-detail":t.checkRelationDetail}},[i("div",{staticClass:"relate-cell",on:{click:function(i){t.checkRelationDetail(e.activityType,e.activityTypeId,!0)}}},[i("i",{staticClass:"relate-cell-icon",class:t._f("crmIconClass")(e.activityType)}),t._v(" "),i("span",{staticClass:"relate-cell-type"},[t._v(t._s(t._f("crmName")(e.activityType))+"-")]),t._v(" "),i("span",{staticClass:"relate-cell-name"},[t._v(t._s(e.crmTypeName))])])])})),t._v(" "),t.loading?i("p",{staticClass:"scroll-bottom-tips"},[t._v("加载中...")]):t._e(),t._v(" "),t.noMore?i("p",{staticClass:"scroll-bottom-tips"},[t._v("没有更多了")]):t._e()]),t._v(" "),i("c-r-m-full-screen-detail",{attrs:{visible:t.showFullDetail,"crm-type":t.relationCrmType,id:t.relationID},on:{"update:visible":function(e){t.showFullDetail=e}}})],1)},[],!1,null,"52a40eb4",null);h.options.__file="RecordList.vue";var d=h.exports,m=i("L2JU"),f=i("4peS"),w=i.n(f),y=i("dAOq"),g={name:"ReportList",components:{CRMAllDetail:a.a,RecordList:d},filters:{dealIcon:function(t){return 1==t?"wk wk-success deal-suc":"wk wk-close deal-un"},dealName:function(t){return 1==t?"已成交":"未成交"}},mixins:[y.a],props:{show:{type:Boolean,default:!1},title:String,placeholder:{type:String,default:"请输入搜索内容"},crmType:String,fieldList:Array,recordRequest:Function,request:Function,params:Object,paging:{type:Boolean,default:!0},sortable:{type:[Boolean,String],default:!1}},data:function(){return{inputContent:"",loading:!1,tableHeight:this.getTableHeight(),list:[],showFieldList:[],sortData:{},currentPage:1,pageSize:w.a.get("crmPageSizes")||15,pageSizes:[15,30,60,100],total:0,rowID:"",rowType:"",showDview:!1,recordParams:{},recordShow:!1}},computed:n()({},Object(m.b)(["crm"]),{showExamineStatus:function(){return"contract"==this.crmType&&"receivables"==this.crmType},showFillColumn:function(){return!this.fieldList||!this.fieldList.length}}),watch:{show:function(t){t&&this.initInfo()}},mounted:function(){this.$el.addEventListener("click",this.handleDocumentClick,!1)},destroyed:function(){this.$el&&this.$el.removeEventListener("click",this.handleDocumentClick,!1)},methods:{getTableHeight:function(){var t=document.documentElement.clientHeight;return t-.2*t-200},initInfo:function(){var t=this;this.inputContent="",this.showFieldList=[],this.sortData={},this.$nextTick(function(){t.$refs.crmTable.clearSort()}),this.list=[],this.currentPage=1,window.onresize=function(){t.tableHeight=t.getTableHeight()},this.fieldList?(this.showFieldList=this.fieldList,this.getList()):this.getFieldList()},searchInput:function(){this.currentPage=1,this.getList()},getList:function(){var t=this;this.loading=!0;var e={};this.paging&&(e={page:this.currentPage,limit:this.pageSize}),this.placeholder&&(e.search=this.inputContent),this.sortData.order&&(e.sortField=this.sortData.prop,e.order="ascending"==this.sortData.order?2:1),this.request(n()({},e,this.params)).then(function(e){t.paging?(t.list=e.data.list,t.total=e.data.totalRow):t.list=e.data,t.loading=!1}).catch(function(){t.loading=!1})},getFieldList:function(){var t=this;if(0==this.showFieldList.length){this.loading=!0;var e="business_status"==this.crmType?"business":this.crmType,i={label:r.a[e]};Object(o.A)(i).then(function(e){for(var i=0;i<e.data.length;i++){var s=e.data[i],n=0;n=s.width?s.width:s.name&&s.name.length<=6?15*s.name.length+45:140,t.showFieldList.push({prop:s.fieldName,label:s.name,width:n})}t.getList()}).catch(function(){t.loading=!1})}else this.getList()},fieldFormatter:function(t,e){return this.fieldList&&this.fieldList.length&&"crmType"==e.property?r.a.convertTypeToName(t[e.property]):""===t[e.property]||null===t[e.property]?"--":t[e.property]},sortChange:function(t,e,i){this.sortData=t,this.getList()},handleSizeChange:function(t){w.a.set("crmPageSizes",t),this.pageSize=t,this.getList()},handleCurrentChange:function(t){this.currentPage=t,this.getList()},handleRowClick:function(t,e,i){"leads"===this.crmType?"leadsName"===e.property?(this.rowID=t.leadsId,this.showDview=!0):this.showDview=!1:"customer"===this.crmType?"customerName"===e.property?(this.rowID=t.customerId,this.rowType="customer",this.showDview=!0):this.showDview=!1:"contacts"===this.crmType?"customerName"===e.property?(this.rowID=t.customerId,this.rowType="customer",this.showDview=!0):"name"===e.property?(this.rowID=t.contactsId,this.rowType="contacts",this.showDview=!0):this.showDview=!1:"business"===this.crmType||"business_status"===this.crmType?"customerName"===e.property?(this.rowID=t.customerId,this.rowType="customer",this.showDview=!0):"businessName"===e.property?(this.rowID=t.businessId,this.rowType="business",this.showDview=!0):this.showDview=!1:"contract"===this.crmType?"customerName"===e.property?(this.rowID=t.customerId,this.rowType="customer",this.showDview=!0):"businessName"===e.property?(this.rowID=t.businessId,this.rowType="business",this.showDview=!0):"contactsName"===e.property?(this.rowID=t.contactsId,this.rowType="contacts",this.showDview=!0):"num"===e.property||"name"===e.property?(this.rowID=t.contractId,this.rowType="contract",this.showDview=!0):this.showDview=!1:"product"===this.crmType?"name"===e.property?(this.rowID=t.productId,this.showDview=!0):this.showDview=!1:"receivables"===this.crmType?"customerName"===e.property?(this.rowID=t.customerId,this.rowType="customer",this.showDview=!0):"contractNum"===e.property?(this.rowID=t.contractId,this.rowType="contract",this.showDview=!0):"number"===e.property?(this.rowID=t.receivablesId,this.rowType="receivables",this.showDview=!0):this.showDview=!1:"record"===this.crmType&&("count"===e.property&&t.count?(this.rowType="crm_"+r.a.convertTypeToKey(t.crmType),this.recordParams=n()({crmType:t.crmType,queryType:0},this.params),this.recordShow=!0):this.recordShow=!1)},handleHandle:function(t){"alloc"!==t.type&&"get"!==t.type&&"transfer"!==t.type&&"transform"!==t.type&&"delete"!==t.type&&"put_seas"!==t.type||(this.showDview=!1),"edit"!==t.type&&this.getList()},cellClassName:function(t){var e=t.row,i=t.column;t.rowIndex,t.columnIndex;return this.crmType&&("customerName"===i.property||"businessName"===i.property||"name"===i.property||"contactsName"===i.property||"num"===i.property||"contractNum"===i.property||"number"===i.property||"record"===this.crmType&&"count"===i.property&&e[i.property])?"can-visit--underline":""},hideView:function(){this.$emit("update:show",!1),this.$emit("hide")},handleDocumentClick:function(t){var e=!0,i=document.getElementsByClassName("el-table__row");if(i&&e)for(var s=0;s<i.length;s++){if(i[s].contains(t.target)){e=!1;break}}document.getElementById("slide")&&document.getElementById("slide").contains(t.target)&&(e=!1),e&&(this.showDview=!1)}}},v=(i("smxo"),Object(p.a)(g,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-dialog",{attrs:{visible:t.show,"append-to-body":!0,"close-on-click-modal":!1,top:"10vh",width:"80%","custom-class":"no-padding-dialog"},on:{close:t.hideView}},[i("div",{staticClass:"header",attrs:{slot:"title"},on:{click:function(e){t.showDview=!1}},slot:"title"},[i("span",{staticClass:"title"},[t._v(t._s(t.title))]),t._v(" "),t.placeholder?i("el-input",{staticClass:"search-input",attrs:{placeholder:t.placeholder},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.searchInput(e):null}},model:{value:t.inputContent,callback:function(e){t.inputContent=e},expression:"inputContent"}},[i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},nativeOn:{click:function(e){return t.searchInput(e)}},slot:"append"})],1):t._e()],1),t._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"content"},[i("div",{staticClass:"list-body"},[i("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"crmTable",staticStyle:{width:"100%"},attrs:{id:"crm-table",data:t.list,height:t.tableHeight,"cell-class-name":t.cellClassName,stripe:"",border:"","highlight-current-row":""},on:{"row-click":t.handleRowClick,"sort-change":t.sortChange}},[t._l(t.showFieldList,function(e,s){return i("el-table-column",{key:s,attrs:{sortable:"poolDay"!=e.prop&&"custom",fixed:0==s,prop:e.prop,label:e.label,width:e.width,"show-overflow-tooltip":""},scopedSlots:t._u([{key:"default",fn:function(s){return["dealStatus"==e.prop?[i("i",{class:t._f("dealIcon")(s.row[e.prop])}),t._v(" "),i("span",[t._v(t._s(t._f("dealName")(s.row[e.prop])))])]:"status"==e.prop?[2==s.row.status?i("i",{staticClass:"wk wk-circle-password customer-lock"}):t._e()]:"checkStatus"==e.prop?[i("span",{staticClass:"status-mark",style:{backgroundColor:t.getStatusColor(s.row.checkStatus)}}),t._v(" "),i("span",[t._v(t._s(t.getStatusName(s.row.checkStatus)))])]:[t._v(t._s(t.fieldFormatter(s.row,s.column)))]]}}])})}),t._v(" "),t.showFillColumn?i("el-table-column"):t._e()],2),t._v(" "),t.paging?i("div",{staticClass:"p-contianer"},[i("el-pagination",{staticClass:"p-bar",attrs:{"current-page":t.currentPage,"page-sizes":t.pageSizes,"page-size":t.pageSize,total:t.total,background:"",layout:"prev, pager, next, sizes, total, jumper"},on:{"update:pageSize":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e()],1)]),t._v(" "),i("c-r-m-all-detail",{staticClass:"d-view",attrs:{visible:t.showDview,"crm-type":t.rowType,id:t.rowID},on:{"update:visible":function(e){t.showDview=e},handle:t.handleHandle}}),t._v(" "),t.recordShow?i("record-list",{attrs:{"crm-type":t.rowType,request:t.recordRequest,params:t.recordParams},on:{handle:t.getList,hide:function(e){t.recordShow=!1}}}):t._e()],1)])},[],!1,null,"7218b0a7",null));v.options.__file="index.vue";e.a=v.exports},MdnP:function(t,e,i){"use strict";var s={name:"PictureListView",props:{list:{type:Array,required:!0}},methods:{imgZoom:function(t,e){this.$bus.emit("preview-image-bus",{index:e,data:t.map(function(t,e,i){return{url:t.filePath||t.url,name:t.name}})})}}},n=(i("2NAp"),i("KHd+")),o=Object(n.a)(s,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"picture-list-view"},t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"img-list-item",on:{click:function(e){t.imgZoom(t.list,s)}}},[i("img",{directives:[{name:"src",rawName:"v-src",value:e.filePath||e.url,expression:"imgItem.filePath || imgItem.url"}],key:e.filePath||e.url})])}))},[],!1,null,"5437fe00",null);o.options.__file="PictureListView.vue";e.a=o.exports},NUy3:function(t,e,i){},VmBU:function(t,e,i){"use strict";i.d(e,"e",function(){return n}),i.d(e,"a",function(){return o}),i.d(e,"c",function(){return r}),i.d(e,"b",function(){return a}),i.d(e,"j",function(){return c}),i.d(e,"h",function(){return l}),i.d(e,"f",function(){return u}),i.d(e,"g",function(){return p}),i.d(e,"i",function(){return h}),i.d(e,"d",function(){return d}),i.d(e,"m",function(){return m}),i.d(e,"l",function(){return f}),i.d(e,"k",function(){return w}),i.d(e,"n",function(){return y});var s=i("t3Un");function n(t){return Object(s.a)({url:"oaLog/queryList",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:t})}function o(t){return Object(s.a)({url:"oaLog/addOrUpdate",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:t})}function r(t){return Object(s.a)({url:"oaLog/addOrUpdate",method:"post",headers:{"Content-Type":"application/json;charset=UTF-8"},data:t})}function a(t){return Object(s.a)({url:"oaLog/deleteById",method:"post",data:t})}function c(t){return Object(s.a)({url:"oaLog/readLog",method:"post",data:t})}function l(t){return Object(s.a)({url:"oaLog/queryById",method:"post",data:t})}function u(t){return Object(s.a)({url:"oaLog/queryLogBulletin",method:"post",data:t})}function p(t){return Object(s.a)({url:"oaLog/queryLogBulletinByType",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function h(t){return Object(s.a)({url:"oaLog/queryLogRecordCount",method:"post",data:t})}function d(t){return Object(s.a)({url:"oaLog/getLogWelcomeSpeech",method:"post",data:t})}function m(t){return Object(s.a)({url:"oaLog/export",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"},responseType:"blob"})}function f(t){return Object(s.a)({url:"oaLog/queryCompleteStats",method:"post",data:t})}function w(t){return Object(s.a)({url:"oaLog/queryCompleteOaLogList",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}function y(t){return Object(s.a)({url:"oaLog/queryIncompleteOaLogList",method:"post",data:t,headers:{"Content-Type":"application/json;charset=UTF-8"}})}},kSFP:function(t,e,i){"use strict";var s=i("NUy3");i.n(s).a},lm3i:function(t,e,i){"use strict";var s=i("FuWY");i.n(s).a},mrH5:function(t,e,i){},smxo:function(t,e,i){"use strict";var s=i("2caY");i.n(s).a}}]);