(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-c890"],{"0YyN":function(e,t,r){},"6Hyi":function(e,t,r){"use strict";t.a={props:{},data:function(){return{focusKey:null}},methods:{checkFromItem:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(this.focusKey=null,!e)return!1;if(this.clearError(),!this.rules.hasOwnProperty(e))return!0;for(var r=this.rules[e],s=0;s<r.length;s++){var o=r[s];if(o.hasOwnProperty("required")&&o.required&&!t)return this.setError(e,o.msg),!1;if(o.hasOwnProperty("reg")&&o.reg)if(o.required){if(!o.reg.test(t))return this.setError(e,o.msg),!1}else if(t&&!o.reg.test(t))return this.setError(e,o.msg),!1;if(o.validator&&!o.validator())return this.setError(e,o.msg),!1}return!0},setError:function(e,t){var r=this;setTimeout(function(){r.validateRes[e]=!1,r.errorInfo=t},200)}}}},"89D7":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4OUNDRjkwNEQzNkExMUU5QTVBREM4MENCNEY2MTM3RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4OUNDRjkwNUQzNkExMUU5QTVBREM4MENCNEY2MTM3RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjg5Q0NGOTAyRDM2QTExRTlBNUFEQzgwQ0I0RjYxMzdFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjg5Q0NGOTAzRDM2QTExRTlBNUFEQzgwQ0I0RjYxMzdFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+xL1tegAAASpJREFUeNqck01qwlAUhZ+x2G7DgSgK7R6KA6VdhuDvRHDm2Jm0dKAgscsQOpDuolUngosQMWLwnHCfXGMM6oEPXu7LOffl8pJYl0ompDyogDJIS20JfsAY/OuXEyogBT5AHTgmWj5wQRtsWHhQ5gkomngxuAoyckLPdvq8wqz1KqcNEguSGujJdY2TzZ63Ro17SjV6HRlY0la9ft88drsnIVyzxj0leioc4gyLXLgbDdteL3i2a3+xCB9szoCtDNFEhVAXzEYP8V4FActL3dmZhGeitHLkhkWaeWwSEzJlwDfYH69jp3P2zTaEe0r0jO1VHoDGjd8/BE07RN7t6Q3mX/EcfxoPvMlJ/Bgj90bgXTwnfx0LLfAMvgCHsANr8Ce1F7nCG2s6CDAAvTdp/OEIuWMAAAAASUVORK5CYII="},QoxM:function(e,t,r){e.exports=r.p+"static/img/logo_white.87cc53d.png"},g2GJ:function(e,t,r){"use strict";var s=r("gZwI");r.n(s).a},gZwI:function(e,t,r){},gjeX:function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
!function(){"use strict";var ERROR="input is invalid type",WINDOW="object"==typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"==typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"==typeof module&&module.exports,AMD=__webpack_require__("PDX0"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!=typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(e){return"object"==typeof e&&e.buffer&&e.buffer.constructor===ArrayBuffer});var createOutputMethod=function(e){return function(t){return new Md5(!0).update(t)[e]()}},createMethod=function(){var e=createOutputMethod("hex");NODE_JS&&(e=nodeWrap(e)),e.create=function(){return new Md5},e.update=function(t){return e.create().update(t)};for(var t=0;t<OUTPUT_TYPES.length;++t){var r=OUTPUT_TYPES[t];e[r]=createOutputMethod(r)}return e},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(e){if("string"==typeof e)return crypto.createHash("md5").update(e,"utf8").digest("hex");if(null===e||void 0===e)throw ERROR;return e.constructor===ArrayBuffer&&(e=new Uint8Array(e)),Array.isArray(e)||ArrayBuffer.isView(e)||e.constructor===Buffer?crypto.createHash("md5").update(new Buffer(e)).digest("hex"):method(e)};return nodeMethod};function Md5(e){if(e)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var t=new ArrayBuffer(68);this.buffer8=new Uint8Array(t),this.blocks=new Uint32Array(t)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(e){if(!this.finalized){var t,r=typeof e;if("string"!==r){if("object"!==r)throw ERROR;if(null===e)throw ERROR;if(ARRAY_BUFFER&&e.constructor===ArrayBuffer)e=new Uint8Array(e);else if(!(Array.isArray(e)||ARRAY_BUFFER&&ArrayBuffer.isView(e)))throw ERROR;t=!0}for(var s,o,i=0,n=e.length,a=this.blocks,c=this.buffer8;i<n;){if(this.hashed&&(this.hashed=!1,a[0]=a[16],a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0),t)if(ARRAY_BUFFER)for(o=this.start;i<n&&o<64;++i)c[o++]=e[i];else for(o=this.start;i<n&&o<64;++i)a[o>>2]|=e[i]<<SHIFT[3&o++];else if(ARRAY_BUFFER)for(o=this.start;i<n&&o<64;++i)(s=e.charCodeAt(i))<128?c[o++]=s:s<2048?(c[o++]=192|s>>6,c[o++]=128|63&s):s<55296||s>=57344?(c[o++]=224|s>>12,c[o++]=128|s>>6&63,c[o++]=128|63&s):(s=65536+((1023&s)<<10|1023&e.charCodeAt(++i)),c[o++]=240|s>>18,c[o++]=128|s>>12&63,c[o++]=128|s>>6&63,c[o++]=128|63&s);else for(o=this.start;i<n&&o<64;++i)(s=e.charCodeAt(i))<128?a[o>>2]|=s<<SHIFT[3&o++]:s<2048?(a[o>>2]|=(192|s>>6)<<SHIFT[3&o++],a[o>>2]|=(128|63&s)<<SHIFT[3&o++]):s<55296||s>=57344?(a[o>>2]|=(224|s>>12)<<SHIFT[3&o++],a[o>>2]|=(128|s>>6&63)<<SHIFT[3&o++],a[o>>2]|=(128|63&s)<<SHIFT[3&o++]):(s=65536+((1023&s)<<10|1023&e.charCodeAt(++i)),a[o>>2]|=(240|s>>18)<<SHIFT[3&o++],a[o>>2]|=(128|s>>12&63)<<SHIFT[3&o++],a[o>>2]|=(128|s>>6&63)<<SHIFT[3&o++],a[o>>2]|=(128|63&s)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var e=this.blocks,t=this.lastByteIndex;e[t>>2]|=EXTRA[3&t],t>=56&&(this.hashed||this.hash(),e[0]=e[16],e[16]=e[1]=e[2]=e[3]=e[4]=e[5]=e[6]=e[7]=e[8]=e[9]=e[10]=e[11]=e[12]=e[13]=e[14]=e[15]=0),e[14]=this.bytes<<3,e[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var e,t,r,s,o,i,n=this.blocks;this.first?t=((t=((e=((e=n[0]-680876937)<<7|e>>>25)-271733879<<0)^(r=((r=(-271733879^(s=((s=(-1732584194^2004318071&e)+n[1]-117830708)<<12|s>>>20)+e<<0)&(-271733879^e))+n[2]-1126478375)<<17|r>>>15)+s<<0)&(s^e))+n[3]-1316259209)<<22|t>>>10)+r<<0:(e=this.h0,t=this.h1,r=this.h2,t=((t+=((e=((e+=((s=this.h3)^t&(r^s))+n[0]-680876936)<<7|e>>>25)+t<<0)^(r=((r+=(t^(s=((s+=(r^e&(t^r))+n[1]-389564586)<<12|s>>>20)+e<<0)&(e^t))+n[2]+606105819)<<17|r>>>15)+s<<0)&(s^e))+n[3]-1044525330)<<22|t>>>10)+r<<0),t=((t+=((e=((e+=(s^t&(r^s))+n[4]-176418897)<<7|e>>>25)+t<<0)^(r=((r+=(t^(s=((s+=(r^e&(t^r))+n[5]+1200080426)<<12|s>>>20)+e<<0)&(e^t))+n[6]-1473231341)<<17|r>>>15)+s<<0)&(s^e))+n[7]-45705983)<<22|t>>>10)+r<<0,t=((t+=((e=((e+=(s^t&(r^s))+n[8]+1770035416)<<7|e>>>25)+t<<0)^(r=((r+=(t^(s=((s+=(r^e&(t^r))+n[9]-1958414417)<<12|s>>>20)+e<<0)&(e^t))+n[10]-42063)<<17|r>>>15)+s<<0)&(s^e))+n[11]-1990404162)<<22|t>>>10)+r<<0,t=((t+=((e=((e+=(s^t&(r^s))+n[12]+1804603682)<<7|e>>>25)+t<<0)^(r=((r+=(t^(s=((s+=(r^e&(t^r))+n[13]-40341101)<<12|s>>>20)+e<<0)&(e^t))+n[14]-1502002290)<<17|r>>>15)+s<<0)&(s^e))+n[15]+1236535329)<<22|t>>>10)+r<<0,t=((t+=((s=((s+=(t^r&((e=((e+=(r^s&(t^r))+n[1]-165796510)<<5|e>>>27)+t<<0)^t))+n[6]-1069501632)<<9|s>>>23)+e<<0)^e&((r=((r+=(e^t&(s^e))+n[11]+643717713)<<14|r>>>18)+s<<0)^s))+n[0]-373897302)<<20|t>>>12)+r<<0,t=((t+=((s=((s+=(t^r&((e=((e+=(r^s&(t^r))+n[5]-701558691)<<5|e>>>27)+t<<0)^t))+n[10]+38016083)<<9|s>>>23)+e<<0)^e&((r=((r+=(e^t&(s^e))+n[15]-660478335)<<14|r>>>18)+s<<0)^s))+n[4]-405537848)<<20|t>>>12)+r<<0,t=((t+=((s=((s+=(t^r&((e=((e+=(r^s&(t^r))+n[9]+568446438)<<5|e>>>27)+t<<0)^t))+n[14]-1019803690)<<9|s>>>23)+e<<0)^e&((r=((r+=(e^t&(s^e))+n[3]-187363961)<<14|r>>>18)+s<<0)^s))+n[8]+1163531501)<<20|t>>>12)+r<<0,t=((t+=((s=((s+=(t^r&((e=((e+=(r^s&(t^r))+n[13]-1444681467)<<5|e>>>27)+t<<0)^t))+n[2]-51403784)<<9|s>>>23)+e<<0)^e&((r=((r+=(e^t&(s^e))+n[7]+1735328473)<<14|r>>>18)+s<<0)^s))+n[12]-1926607734)<<20|t>>>12)+r<<0,t=((t+=((i=(s=((s+=((o=t^r)^(e=((e+=(o^s)+n[5]-378558)<<4|e>>>28)+t<<0))+n[8]-2022574463)<<11|s>>>21)+e<<0)^e)^(r=((r+=(i^t)+n[11]+1839030562)<<16|r>>>16)+s<<0))+n[14]-35309556)<<23|t>>>9)+r<<0,t=((t+=((i=(s=((s+=((o=t^r)^(e=((e+=(o^s)+n[1]-1530992060)<<4|e>>>28)+t<<0))+n[4]+1272893353)<<11|s>>>21)+e<<0)^e)^(r=((r+=(i^t)+n[7]-155497632)<<16|r>>>16)+s<<0))+n[10]-1094730640)<<23|t>>>9)+r<<0,t=((t+=((i=(s=((s+=((o=t^r)^(e=((e+=(o^s)+n[13]+681279174)<<4|e>>>28)+t<<0))+n[0]-358537222)<<11|s>>>21)+e<<0)^e)^(r=((r+=(i^t)+n[3]-722521979)<<16|r>>>16)+s<<0))+n[6]+76029189)<<23|t>>>9)+r<<0,t=((t+=((i=(s=((s+=((o=t^r)^(e=((e+=(o^s)+n[9]-640364487)<<4|e>>>28)+t<<0))+n[12]-421815835)<<11|s>>>21)+e<<0)^e)^(r=((r+=(i^t)+n[15]+530742520)<<16|r>>>16)+s<<0))+n[2]-995338651)<<23|t>>>9)+r<<0,t=((t+=((s=((s+=(t^((e=((e+=(r^(t|~s))+n[0]-198630844)<<6|e>>>26)+t<<0)|~r))+n[7]+1126891415)<<10|s>>>22)+e<<0)^((r=((r+=(e^(s|~t))+n[14]-1416354905)<<15|r>>>17)+s<<0)|~e))+n[5]-57434055)<<21|t>>>11)+r<<0,t=((t+=((s=((s+=(t^((e=((e+=(r^(t|~s))+n[12]+1700485571)<<6|e>>>26)+t<<0)|~r))+n[3]-1894986606)<<10|s>>>22)+e<<0)^((r=((r+=(e^(s|~t))+n[10]-1051523)<<15|r>>>17)+s<<0)|~e))+n[1]-2054922799)<<21|t>>>11)+r<<0,t=((t+=((s=((s+=(t^((e=((e+=(r^(t|~s))+n[8]+1873313359)<<6|e>>>26)+t<<0)|~r))+n[15]-30611744)<<10|s>>>22)+e<<0)^((r=((r+=(e^(s|~t))+n[6]-1560198380)<<15|r>>>17)+s<<0)|~e))+n[13]+1309151649)<<21|t>>>11)+r<<0,t=((t+=((s=((s+=(t^((e=((e+=(r^(t|~s))+n[4]-145523070)<<6|e>>>26)+t<<0)|~r))+n[11]-1120210379)<<10|s>>>22)+e<<0)^((r=((r+=(e^(s|~t))+n[2]+718787259)<<15|r>>>17)+s<<0)|~e))+n[9]-343485551)<<21|t>>>11)+r<<0,this.first?(this.h0=e+1732584193<<0,this.h1=t-271733879<<0,this.h2=r-1732584194<<0,this.h3=s+271733878<<0,this.first=!1):(this.h0=this.h0+e<<0,this.h1=this.h1+t<<0,this.h2=this.h2+r<<0,this.h3=this.h3+s<<0)},Md5.prototype.hex=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,s=this.h3;return HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var e=this.h0,t=this.h1,r=this.h2,s=this.h3;return[255&e,e>>8&255,e>>16&255,e>>24&255,255&t,t>>8&255,t>>16&255,t>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&s,s>>8&255,s>>16&255,s>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var e=new ArrayBuffer(16),t=new Uint32Array(e);return t[0]=this.h0,t[1]=this.h1,t[2]=this.h2,t[3]=this.h3,e},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var e,t,r,s="",o=this.array(),i=0;i<15;)e=o[i++],t=o[i++],r=o[i++],s+=BASE64_ENCODE_CHAR[e>>>2]+BASE64_ENCODE_CHAR[63&(e<<4|t>>>4)]+BASE64_ENCODE_CHAR[63&(t<<2|r>>>6)]+BASE64_ENCODE_CHAR[63&r];return e=o[i],s+=BASE64_ENCODE_CHAR[e>>>2]+BASE64_ENCODE_CHAR[e<<4&63]+"=="};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))}()}).call(this,__webpack_require__("8oxB"),__webpack_require__("yLpj"))},sZuK:function(e,t,r){"use strict";r.r(t);var s=[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top-nav"},[t("img",{attrs:{src:r("QoxM"),alt:""}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"welcome__title"},[t("i",{staticClass:"el-icon-success"}),this._v("恭喜您，已成功安装悟空CRM\n      ")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"welcome__tips"},[this._v("你需要通过手机号来"),t("a",{attrs:{href:"https://www.72crm.com/crm/#/login?type=register",target:"_blank"}},[this._v("注册悟空ID")]),this._v("，该手机号将作为您登录系统的管理员帐号。\n        注册成功后，您需要进入【悟空个人中心】，点击【开源版下载】"),t("a",{attrs:{href:"https://www.72crm.com/user/company_info",target:"_blank"}},[this._v("获取您的序列号")]),this._v("\n          如您已经注册悟空ID，您只需要点击"),t("a",{attrs:{href:"https://www.72crm.com/user/company_info",target:"_blank"}},[this._v("登录个人中心")]),this._v("即可查看您的序列号")])}],o=r("GQeE"),i=r.n(o),n=r("fe1z"),a=r("XJYT"),c=r("6Hyi"),u=r("ehos"),f=r("gjeX"),l=r.n(f),h={name:"LoginByWelcome",components:{},mixins:[c.a],data:function(){return{redirect:void 0,form:{},errorInfo:null,validateRes:{username:!0,code:!0,password:!0,verifyPassword:!0}}},computed:{rules:function(){var e=this;return{username:[{required:!0,msg:"手机号不能为空"},{reg:/^1[1-9]\d{9}$/,msg:"请输入正确的手机号码"}],code:[{required:!0,msg:"序列号不能为空"},{validator:function(){var t="";if(e.form.username&&e.form.username.length>6)for(var r=l()(e.form.username),s=e.form.username.substring(e.form.username.length-6),o=0;o<s.length;o++)t+=r[s[o]];return t==e.form.code},msg:"请输入正确的序列号"}],password:[{required:!0,msg:"初始化密码不能为空"},{reg:/^(?=.*[a-zA-Z])(?=.*\d).{6,20}$/,msg:"密码由6-20位字母、数字组成"}],verifyPassword:[{required:!0,msg:"确认密码不能为空"},{reg:/^(?=.*[a-zA-Z])(?=.*\d).{6,20}$/,msg:"确认密码由6-20位字母、数字组成"},{validator:function(){return e.form.password===e.form.verifyPassword},msg:"两次输入的密码不一致"}]}}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},mounted:function(){var e=this;this.$nextTick(function(){e.$refs.username.focus()})},created:function(){this.debouncedHandleLogin=Object(u.debounce)(300,this.handleLogin),this.getInit()},methods:{handleLogin:function(){var e=this;if(this.checkForm()){var t=a.Loading.service({target:document.querySelector(".login-main-content")});Object(n.a)({username:this.form.username,code:this.form.code,password:this.form.password}).then(function(r){e.$router.push("/login"),t.close()}).catch(function(){t.close()})}},checkForm:function(){this.clearError();for(var e=i()(this.validateRes),t=0;t<e.length;t++){if(!this.checkFromItem(e[t],this.form[e[t]]||null))return!1}return!0},helpClik:function(){this.helpDialogVisible=!0},getInit:function(){var e=this;Object(n.d)().then(function(t){1==t.data&&e.$router.push("/login")}).catch(function(){})},clearError:function(){this.errorInfo=null,this.validateRes={username:!0,code:!0,password:!0,verifyPassword:!0}}}},d=(r("xWgu"),r("KHd+")),_=Object(d.a)(h,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login-by-wel"},[s("el-form",{staticClass:"login-from",attrs:{"label-position":"left","label-width":"60px"}},[s("el-form-item",{attrs:{label:"手机号","label-position":"left"}},[s("el-input",{ref:"username",class:{error:!e.validateRes.username},attrs:{placeholder:"请输入您的手机号",autofocus:"",type:"text"},on:{focus:function(t){e.focusKey="username"},blur:function(t){e.checkFromItem("username",e.form.username)}},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.debouncedHandleLogin(t):null}},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username","string"==typeof t?t.trim():t)},expression:"form.username"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"序列号"}},[s("el-input",{ref:"code",class:{error:!e.validateRes.code},attrs:{maxlength:20,placeholder:"请输入您的序列号",type:"code"},on:{focus:function(t){e.focusKey="code"},blur:e.checkForm},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.debouncedHandleLogin(t):null}},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code","string"==typeof t?t.trim():t)},expression:"form.code"}})],1),e._v(" "),s("div",{staticClass:"wel-tips"},[e._v("您无需联网，在离线状态下也可完成验证")]),e._v(" "),s("el-divider"),e._v(" "),[s("div",{staticClass:"wel-title"},[e._v("初始化管理员登录密码")]),e._v(" "),s("el-form-item",{attrs:{label:"密码"}},[s("el-input",{ref:"password",class:{error:!e.validateRes.password},attrs:{placeholder:"请输入您的初始化密码",autofocus:"",type:"text"},on:{focus:function(t){e.focusKey="password"},blur:function(t){e.checkFromItem("password",e.form.password)}},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.debouncedHandleLogin(t):null}},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password","string"==typeof t?t.trim():t)},expression:"form.password"}})],1),e._v(" "),s("el-form-item",{attrs:{label:"密码"}},[s("el-input",{ref:"verifyPassword",class:{error:!e.validateRes.verifyPassword},attrs:{placeholder:"请再次输入您的密码",autofocus:"",type:"text"},on:{focus:function(t){e.focusKey="verifyPassword"},blur:function(t){e.checkFromItem("verifyPassword",e.form.verifyPassword)}},nativeOn:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.debouncedHandleLogin(t):null}},model:{value:e.form.verifyPassword,callback:function(t){e.$set(e.form,"verifyPassword","string"==typeof t?t.trim():t)},expression:"form.verifyPassword"}})],1)]],2),e._v(" "),s("div",{staticClass:"error-info",class:{ok:!Boolean(e.errorInfo)}},[e.errorInfo?s("div",{staticClass:"box"},[s("img",{staticClass:"icon",attrs:{src:r("89D7"),alt:""}}),e._v(" "),s("span",[e._v(e._s(e.errorInfo))])]):e._e()]),e._v(" "),s("div",{staticClass:"control"},[s("div",{staticClass:"btn",staticStyle:{"font-size":"16px"},on:{click:e.debouncedHandleLogin}},[e._v("\n      以管理员身份登录\n    ")])])],1)},[],!1,null,"fd61d2fe",null);_.options.__file="LoginByWelcome.vue";var p={name:"Login",components:{LoginByWelcome:_.exports},data:function(){return{}},watch:{},created:function(){},methods:{}},A=(r("g2GJ"),Object(d.a)(p,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"welcome-wrapper"},[e._m(0),e._v(" "),r("div",{staticClass:"container"},[r("div",{staticClass:"welcome-main-content"},[e._m(1),e._v(" "),r("div",{staticClass:"welcome__des"},[e._v("您已成功安装悟空CRM，您可以尽情享用悟空CRM开源版所有功能及服务。在使用悟空CRM前，\n      您需要完成您的账户验证，以及初始化管理员的登录密码。")]),e._v(" "),r("div",{staticClass:"welcome__main"},[e._m(2),e._v(" "),r("login-by-welcome")],1)])])])},s,!1,null,"625f89aa",null));A.options.__file="Welcome.vue";t.default=A.exports},xWgu:function(e,t,r){"use strict";var s=r("0YyN");r.n(s).a}}]);