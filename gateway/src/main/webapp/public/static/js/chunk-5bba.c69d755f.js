(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-5bba"],{Fgig:function(t,i,a){},OVNj:function(t,i,a){"use strict";var e=a("Fgig");a.n(e).a},rWyX:function(t,i,a){"use strict";a.r(i);var e=a("JrBc"),n=a("MT78"),s=a.n(n),l=a("pHUW"),o={name:"RankingSigningStatistics",mixins:[e.a],data:function(){return{}},computed:{},mounted:function(){this.fieldList=[{field:"realname",name:"签订人"},{field:"structureName",name:"部门"},{field:"count",name:"签约合同数（个）"}],this.initAxis()},methods:{getDataList:function(t){var i=this;this.postParams=t,this.loading=!0,Object(l.q)(t).then(function(t){i.loading=!1,i.list=t.data||[];for(var a=[],e=[],n=t.data.length>10?10:t.data.length,s=0;s<n;s++){var l=t.data[s];a.splice(0,0,parseFloat(l.count)),e.splice(0,0,l.realname)}i.axisOption.yAxis[0].data=e,i.axisOption.series[0].data=a,i.chartObj.setOption(i.axisOption,!0)}).catch(function(){i.loading=!1})},initAxis:function(){this.chartObj=s.a.init(document.getElementById("axismain")),this.axisOption.tooltip.formatter="{b} : {c}个",this.axisOption.xAxis[0].name="（个）",this.chartObj.setOption(this.axisOption,!0)},exportClick:function(){this.requestExportInfo(l.r,this.postParams)}}},r=(a("OVNj"),a("KHd+")),c=Object(r.a)(o,function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"main-container"},[a("filtrate-handle-view",{staticClass:"filtrate-bar",attrs:{"show-user-select":!1,title:"签约合同排行","module-type":"ranking"},on:{load:function(i){t.loading=!0},change:t.getDataList}}),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"content-title"},[t._v("签约合同数排行（按实际签订时间）")]),t._v(" "),a("div",{directives:[{name:"empty",rawName:"v-empty",value:0===t.list.length,expression:"list.length === 0"}],staticClass:"axis-content",attrs:{"xs-empty-text":"暂无排行"}},[a("div",{attrs:{id:"axismain"}})]),t._v(" "),a("div",{staticClass:"table-content"},[a("div",{staticClass:"handle-bar"},[a("el-button",{staticClass:"export-btn",on:{click:t.exportClick}},[t._v("导出")])],1),t._v(" "),a("el-table",{attrs:{data:t.list,height:"400",stripe:"",border:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center","header-align":"center","show-overflow-tooltip":"",label:"公司总排名"},scopedSlots:t._u([{key:"default",fn:function(i){return[t._v("\n            "+t._s(i.$index+1)+"\n          ")]}}])}),t._v(" "),t._l(t.fieldList,function(t,i){return a("el-table-column",{key:i,attrs:{prop:t.field,label:t.name,align:"center","header-align":"center","show-overflow-tooltip":""}})})],2)],1)])],1)},[],!1,null,"1e128897",null);c.options.__file="RankingSigningStatistics.vue";i.default=c.exports}}]);