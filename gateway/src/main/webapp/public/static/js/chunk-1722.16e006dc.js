(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-1722"],{"/8+L":function(t,e,n){"use strict";var i=n("HoSj");n.n(i).a},"9kPm":function(t,e,n){"use strict";e.a={data:function(){return{showTable:!0}},methods:{mixinSortFn:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"ascending";if("[object Array]"!==Object.prototype.toString.call(t))return[];if(!e)return t;t.sort(function(t,i){if(t[e]===i[e])return 0;var a=isNaN(Number(t[e]))||isNaN(Number(i[e]))?t[e]<i[e]:Number(t[e])<Number(i[e]);return"descending"===n?a?1:-1:a?-1:1})}}}},HoSj:function(t,e,n){},KJIt:function(t,e,n){"use strict";n.r(e);var i=n("9kPm"),a=n("31UX"),o=n("vwqx"),s={name:"AchievementInvoiceStatistics",components:{FiltrateHandleView:n("CMIa").a},mixins:[a.a,i.a],data:function(){return{loading:!1,tableHeight:document.documentElement.clientHeight-240,postParams:{},list:[],data:{},fieldList:[{field:"type",name:"日期"},{field:"receivablesMoney",name:"回款金额"},{field:"invoiceMoney",name:"开票金额"},{field:"receivablesNoInvoice",name:"已回款未开票"},{field:"invoiceNoReceivables",name:"已开票未回款"}]}},computed:{},mounted:function(){var t=this;window.onresize=function(){t.tableHeight=document.documentElement.clientHeight-240}},methods:{getDataList:function(t){var e=this;this.postParams=t,this.loading=!0,Object(o.c)(t).then(function(t){var n=t.data||{};e.data=n,e.list=n.list||[],e.loading=!1}).catch(function(){e.loading=!1})},exportClick:function(){this.requestExportInfo(o.d,this.postParams)}}},l=(n("/8+L"),n("KHd+")),r=Object(l.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-container"},[n("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{"show-year-select":!0,title:"发票统计分析","module-type":"invoice"},on:{load:function(e){t.loading=!0},change:t.getDataList}},[n("el-button",{staticClass:"export-button",attrs:{type:"primary"},nativeOn:{click:function(e){return t.exportClick(e)}}},[t._v("导出")])],1),t._v(" "),n("div",{staticClass:"content"},[n("div",{staticClass:"content-title"},[t._v("\n      回款金额："),n("span",{staticClass:"special"},[t._v(t._s(t.data.receivablesMoney||0))]),t._v("元；开票金额："),n("span",{staticClass:"special"},[t._v(t._s(t.data.invoiceMoney||0))]),t._v("元")]),t._v(" "),n("div",{staticClass:"table-content"},[t.showTable?n("el-table",{attrs:{data:t.list,height:t.tableHeight,stripe:"",border:"","highlight-current-row":""},on:{"sort-change":function(e){var n=e.prop,i=e.order;return t.mixinSortFn(t.list,n,i)}}},t._l(t.fieldList,function(t,e){return n("el-table-column",{key:e,attrs:{prop:t.field,label:t.name,sortable:"custom",align:"center","header-align":"center","show-overflow-tooltip":""}})})):t._e()],1)])],1)},[],!1,null,"46a0db44",null);r.options.__file="AchievementInvoiceStatistics.vue";e.default=r.exports}}]);