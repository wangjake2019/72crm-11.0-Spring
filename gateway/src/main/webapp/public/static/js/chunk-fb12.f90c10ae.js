(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-fb12"],{"3z7q":function(e,t,i){"use strict";i.r(t);var a=i("7Qib"),s=i("3ojK"),n=i("1bNe"),l=i("gwiD"),o=i("vV2+"),r=i("mVxz"),c=i("tMlD"),d=i("ALhW"),p=i("slnp"),u=i("pKm3"),m=i("QbLZ"),h=i.n(m),v=i("VmBU"),f=i("Ir+r"),y=i("Ew9n"),_=i("MdnP"),b=i("hwzM"),g=i("/407"),D=i("BsgX"),w=i("KmSi"),C=i("dPzk"),L=i("z7oh"),k=i("L2JU"),T=i("jHPx"),x={name:"LogDetail",components:{SlideView:y.a,PictureListView:_.a,FileCell:b.a,RelatedBusinessCell:g.a,ReportMenu:D.a,ReportList:w.a,ReplyComment:C.a,CommentList:L.a,CRMFullScreenDetail:function(){return Promise.resolve().then(i.bind(null,"3z7q"))}},props:{id:[String,Number],noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,detail:null,relatedID:"",relatedCRMType:"",showRelatedDetail:!1,reportList:[{type:"customer",key:"customerCount",info:"今日新增客户",name:"今日新增客户 0"},{type:"business",key:"businessCount",info:"今日新增商机",name:"今日新增商机 0"},{type:"contract",key:"contractCount",info:"今日新增合同",name:"今日新增合同 0"},{type:"receivables",key:"receivablesMoney",info:"今日新增回款",name:"今日新增回款 0"},{type:"record",key:"recordCount",info:"今日新增跟进记录",name:"今日新增跟进记录 0"}],reportListShow:!1,fieldReportList:null,reportData:{title:"",placeholder:"",crmType:"",request:null,recordRequest:v.g,params:null,paging:!0,sortable:!1},commentLoading:!1,replyList:[]}},computed:h()({},Object(k.b)(["userInfo"]),{relatedListData:function(){for(var e={},t=["contacts","customer","business","contract"],i=0;i<t.length;i++){var a=t[i],s=this.detail[a+"List"]||[];s.length>0&&(e[a]=s)}return e}}),watch:{id:function(){this.viewAfterEnter()}},mounted:function(){},beforeDestroy:function(){},methods:{viewAfterEnter:function(){this.detail=null,this.getDetail(),this.getCommentList()},getDetail:function(){var e=this;this.loading=!0,Object(v.h)({logId:this.id}).then(function(t){if(e.detail=t.data,e.detail.getBulletin){var i=e.detail.bulletin||{};e.reportList=e.reportList.map(function(e){return"receivablesMoney"==e.key&&(i.receivablesMoney=Object(T.h)(Math.floor(i.receivablesMoney||0))),e.name=e.info+" "+i[e.key],e})}e.loading=!1}).catch(function(){e.loading=!1,e.hideView()})},checkRelatedDetail:function(e,t){this.relatedID=t[e+"Id"],this.relatedCRMType=e,this.showRelatedDetail=!0},hideView:function(){this.$emit("close"),this.$emit("hide-view")},reportSelect:function(e,t){t=this.detail,e.type&&(this.reportData.title="销售简报-"+e.info,this.reportData.placeholder={customer:"请输入客户名称",business:"请输入商机名称",contract:"请输入合同名称",receivables:"请输入回款编号",record:""}[e.type],this.reportData.crmType=e.type,this.reportData.params=t?{logId:t.logId}:{today:1},this.reportData.params.type={customer:1,business:2,contract:3,receivables:4,record:5}[e.type],"record"==e.type?(this.fieldReportList=[{label:"模块",prop:"crmType",width:300},{label:"新增跟进记录数",prop:"count"}],this.reportData.request=v.i,this.reportData.paging=!1,this.reportData.sortable=!1):(this.fieldReportList=this.getReportFieldList(e.type),this.reportData.request=v.g,this.reportData.paging=!0,this.reportData.sortable="custom"),this.reportListShow=!0)},getReportFieldList:function(e){return{customer:[{label:"客户名称",prop:"customerName"},{label:"成交状态",prop:"dealStatus"},{label:"最后跟进时间",prop:"lastTime"},{label:"创建时间",prop:"createTime"},{label:"负责人",prop:"ownerUserName"}],business:[{label:"商机名称",prop:"businessName"},{label:"商机阶段",prop:"statusName"},{label:"最后跟进时间",prop:"lastTime"},{label:"创建时间",prop:"createTime"},{label:"负责人",prop:"ownerUserName"}],contract:[{label:"合同名称",prop:"contractName"},{label:"合同状态",prop:"checkStatus"},{label:"创建时间",prop:"createTime"},{label:"公司签约人",prop:"companyUserName"}],receivables:[{label:"回款编号",prop:"number"},{label:"回款时间",prop:"returnTime"},{label:"负责人",prop:"ownerUserName"}]}[e]},getCommentList:function(){var e=this;Object(f.b)({typeId:this.id,type:2}).then(function(t){var i=t.data||[];e.replyList=i}).catch(function(){})},closeOtherReply:function(e){!e&&this.$refs.comment_list&&this.$refs.comment_list.closeReply()},deleteComment:function(e){this.replyList.splice(e,1)},handleReply:function(e){var t=this;this.commentLoading=!0,Object(f.c)({type:2,content:e,typeId:this.id}).then(function(e){e.data.user={userId:t.userInfo.userId,realname:t.userInfo.realname,img:t.userInfo.img},e.data.childCommentList=[],t.$refs.f_reply.commentsTextarea="",t.replyList.push(e.data),t.commentLoading=!1}).catch(function(){t.commentLoading=!1})}}},R=(i("Er5A"),i("KHd+")),$=Object(R.a)(x,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("slide-view",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-view",attrs:{"no-listener-class":e.noListenerClass,"body-style":{padding:0,height:"100%"},"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限"},on:{afterEnter:e.viewAfterEnter,close:e.hideView}},[e.detail?i("div",{staticClass:"main",attrs:{direction:"column",align:"stretch"}},[i("flexbox",{staticClass:"detail-header"},[i("div",{staticClass:"header-icon"},[i("i",{staticClass:"wk wk-log"})]),e._v(" "),i("div",{staticClass:"header-name"},[e._v("日志")])]),e._v(" "),i("div",{staticClass:"main__bd"},[i("div",{staticClass:"main__bd--info"},[i("div",{staticClass:"content"},[e.detail.content?i("div",{staticClass:"content-box"},[i("div",{staticClass:"content-title"},[e._v("\n              今日工作内容：\n            ")]),e._v(" "),i("div",{staticClass:"content-text"},[e._v(e._s(e.detail.content))])]):e._e(),e._v(" "),e.detail.tomorrow?i("div",{staticClass:"content-box"},[i("div",{staticClass:"content-title"},[e._v("\n              明日工作的内容：\n            ")]),e._v(" "),i("div",{staticClass:"content-text"},[e._v(e._s(e.detail.tomorrow))])]):e._e(),e._v(" "),e.detail.question?i("div",{staticClass:"content-box"},[i("div",{staticClass:"content-title"},[e._v("\n              遇到的问题：\n            ")]),e._v(" "),i("div",{staticClass:"content-text"},[e._v(e._s(e.detail.question))])]):e._e()]),e._v(" "),0!==e.detail.img.length?i("picture-list-view",{attrs:{list:e.detail.img}}):e._e(),e._v(" "),e.detail.sendUserList&&e.detail.sendUserList.length?i("flexbox",{staticClass:"send-list"},[i("span",{staticClass:"send-list__label"},[e._v("发送给：")]),e._v(" "),e._l(e.detail.sendUserList,function(e,t){return i("span",{key:t,staticClass:"send-list__user"},[i("xr-avatar",{attrs:{name:e.realname,size:32,src:e.img,id:e.userId,disabled:!1,trigger:"hover"}})],1)})],2):e._e(),e._v(" "),e.detail.file.length?i("div",{staticClass:"section"},[i("div",{staticClass:"section__hd"},[i("i",{staticClass:"wukong wukong-file"}),e._v(" "),i("span",[e._v("附件")]),e._v(" "),i("span",[e._v("("+e._s(e.detail.file.length)+")")])]),e._v(" "),i("div",{staticClass:"section__bd"},e._l(e.detail.file,function(t,a){return i("file-cell",{key:a,attrs:{data:t,list:e.detail.file,"cell-index":a}})}))]):e._e(),e._v(" "),Object.keys(e.relatedListData).length>0?i("div",{staticClass:"section"},[i("div",{staticClass:"section__hd"},[i("i",{staticClass:"wukong wukong-relevance"}),e._v(" "),i("span",[e._v("相关信息")])]),e._v(" "),i("div",{staticClass:"section__bd"},e._l(e.relatedListData,function(t,a){return i("div",{key:a},e._l(t,function(t,s){return i("related-business-cell",{key:s,attrs:{data:t,"cell-index":s,type:a,"show-foot":!1},nativeOn:{click:function(i){e.checkRelatedDetail(a,t)}}})}))}))]):e._e(),e._v(" "),e.detail.getBulletin?i("div",{staticClass:"section"},[i("div",{staticClass:"section__hd"},[i("i",{staticClass:"wk wk-briefing"}),e._v(" "),i("span",[e._v("销售简报")])]),e._v(" "),i("div",{staticClass:"section__bd"},[i("report-menu",{attrs:{list:e.reportList},on:{select:e.reportSelect}})],1)]):e._e()],1),e._v(" "),i("el-tabs",{staticClass:"commont",attrs:{value:"commont",type:"border-card"}},[i("el-tab-pane",{attrs:{label:"回复",name:"commont"}},[i("reply-comment",{directives:[{name:"loading",rawName:"v-loading",value:e.commentLoading,expression:"commentLoading"}],ref:"f_reply",on:{toggle:e.closeOtherReply,reply:e.handleReply}}),e._v(" "),e.replyList.length>0?i("comment-list",{ref:"comment_list",attrs:{id:e.id,list:e.replyList,type:"2"},on:{delete:e.deleteComment,"close-other-reply":function(t){e.$refs.f_reply.toggleFocus(!0)}}}):e._e()],1)],1)],1)],1):e._e(),e._v(" "),i("c-r-m-full-screen-detail",{attrs:{visible:e.showRelatedDetail,"crm-type":e.relatedCRMType,id:e.relatedID},on:{"update:visible":function(t){e.showRelatedDetail=t}}}),e._v(" "),i("report-list",{attrs:{show:e.reportListShow,title:e.reportData.title,placeholder:e.reportData.placeholder,"crm-type":e.reportData.crmType,request:e.reportData.request,params:e.reportData.params,"record-request":e.reportData.recordRequest,"field-list":e.fieldReportList,paging:e.reportData.paging,sortable:e.reportData.sortable},on:{"update:show":function(t){e.reportListShow=t}}})],1)},[],!1,null,"5f8557fb",null);$.options.__file="LogDetail.vue";var N=$.exports,I=i("FoeY"),S=i("jM2j"),j={name:"NoticeDetail",components:{SlideView:y.a,NewDialog:S.a},props:{id:[String,Number],noListenerClass:{type:Array,default:function(){return["el-table__body"]}}},data:function(){return{loading:!1,detail:null,announcementAddShow:!1}},computed:h()({},Object(k.b)(["oa"]),{permissionUpdate:function(){return this.oa&&this.oa.announcement&&this.oa.announcement.update},permissionDelete:function(){return this.oa&&this.oa.announcement&&this.oa.announcement.delete},moreTypes:function(){var e=[];return this.permissionUpdate&&e.push({type:"edit",name:"编辑",icon:"edit"}),this.permissionDelete&&e.push({type:"delete",name:"删除",icon:"delete"}),e}}),watch:{id:function(e){this.detail=null,this.getDetail()}},mounted:function(){this.getDetail()},beforeDestroy:function(){},methods:{getDetail:function(){var e=this;this.loading=!0,Object(I.c)(this.id).then(function(t){e.detail=t.data,e.loading=!1}).catch(function(){e.loading=!1,e.hideView()})},handleTypeDrop:function(e){"delete"==e?this.deleteDetail():this.announcementAddShow=!0},deleteDetail:function(){var e=this;this.$confirm("确定删除?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){Object(I.b)(e.id).then(function(t){e.$emit("delete"),e.$message({type:"success",message:"删除成功!"}),e.hideView()}).catch(function(){})}).catch(function(){e.$message({type:"info",message:"已取消删除"})})},hideView:function(){this.$emit("close"),this.$emit("hide-view")}}},M=(i("tIsx"),Object(R.a)(j,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("slide-view",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"d-view",attrs:{"no-listener-class":e.noListenerClass,"body-style":{padding:0,height:"100%"},"xs-empty-icon":"nopermission","xs-empty-text":"暂无权限"},on:{close:e.hideView}},[e.detail?i("div",{staticClass:"main",attrs:{direction:"column",align:"stretch"}},[i("flexbox",{staticClass:"detail-header"},[i("div",{staticClass:"header-icon"},[i("i",{staticClass:"wk wk-log"})]),e._v(" "),i("div",{staticClass:"header-name"},[e._v("公告")]),e._v(" "),e.moreTypes.length>0?i("el-dropdown",{attrs:{trigger:"click"},on:{command:e.handleTypeDrop}},[i("el-button",{attrs:{icon:"el-icon-more"}}),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},e._l(e.moreTypes,function(t,a){return i("el-dropdown-item",{key:a,attrs:{icon:e._f("wkIconPre")(t.icon),command:t.type}},[e._v(e._s(t.name))])}))],1):e._e()],1),e._v(" "),i("div",{staticClass:"detail-title"},[e._v(e._s(e.detail.title))]),e._v(" "),i("div",{staticClass:"detail-time"},[e._v(e._s(e.detail.updateTime))]),e._v(" "),i("div",{staticClass:"main__bd"},[e._v(e._s(e.detail.content))])],1):e._e(),e._v(" "),e.announcementAddShow?i("new-dialog",{attrs:{action:{type:"update",id:e.id,data:e.detail}},on:{onSubmit:e.getDetail,close:function(t){e.announcementAddShow=!1}}}):e._e()],1)},[],!1,null,"792aefd3",null));M.options.__file="NoticeDetail.vue";var O=M.exports,V=i("0dur"),q=i("uSKd"),E={name:"CRMFullScreenDetail",components:{LeadsDetail:s.a,CustomerDetail:n.a,ContactsDetail:l.a,BusinessDetail:o.a,ContractDetail:r.a,ProductDetail:c.a,ReceivablesDetail:d.a,ExamineDetail:p.a,TaskDetail:u.a,LogDetail:N,NoticeDetail:O,VisitDetail:V.a,InvoiceDetail:q.a},props:{id:[String,Number],crmType:{type:String,default:""},visible:{type:Boolean,default:!1}},data:function(){return{showDetail:!1}},computed:{tabName:function(){return"leads"==this.crmType?"LeadsDetail":"customer"==this.crmType?"CustomerDetail":"contacts"==this.crmType?"ContactsDetail":"business"==this.crmType?"BusinessDetail":"contract"==this.crmType?"ContractDetail":"product"==this.crmType?"ProductDetail":"receivables"==this.crmType?"ReceivablesDetail":"examine"==this.crmType?"ExamineDetail":"task"==this.crmType?"TaskDetail":"log"==this.crmType?"LogDetail":"announcement"==this.crmType?"NoticeDetail":"visit"==this.crmType?"VisitDetail":"invoice"==this.crmType?"InvoiceDetail":""}},watch:{visible:function(e){this.showDetail=e,e&&(document.body.appendChild(this.$el),this.$el.addEventListener("click",this.handleDocumentClick,!1),this.$el.style.zIndex=Object(a.q)())},showDetail:function(e){var t=this;e||setTimeout(function(){t.$emit("update:visible",!1)},350)}},mounted:function(){this.visible&&(document.body.appendChild(this.$el),this.$el.addEventListener("click",this.handleDocumentClick,!1),this.$el.style.zIndex=Object(a.q)())},beforeDestroy:function(){this.$el&&this.$el.parentNode&&(this.$el.parentNode.removeChild(this.$el),this.$el.removeEventListener("click",this.handleDocumentClick,!1))},methods:{hiddenView:function(){this.showDetail=!1},handleDocumentClick:function(e){this.$el==e.target&&(this.showDetail=!1)},detailHandle:function(e){"alloc"!==e.type&&"get"!==e.type&&"transfer"!==e.type&&"transform"!==e.type&&"delete"!==e.type&&"put_seas"!==e.type||(this.showDetail=!1),this.$emit("handle",e)}}},A=(i("fMq4"),Object(R.a)(E,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"full-container"},[e.id&&e.showDetail?i(e.tabName,e._b({tag:"component",staticClass:"d-view",attrs:{"crm-type":e.crmType,id:e.id},on:{handle:e.detailHandle,"hide-view":e.hiddenView}},"component",e.$attrs,!1)):e._e()],1)},[],!1,null,"4fcc3097",null));A.options.__file="CRMFullScreenDetail.vue";t.default=A.exports},"7BcT":function(e,t,i){},Dgey:function(e,t,i){},Er5A:function(e,t,i){"use strict";var a=i("Dgey");i.n(a).a},fMq4:function(e,t,i){"use strict";var a=i("kCt1");i.n(a).a},kCt1:function(e,t,i){},tIsx:function(e,t,i){"use strict";var a=i("7BcT");i.n(a).a}}]);