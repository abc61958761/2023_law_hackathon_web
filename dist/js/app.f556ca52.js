(function(t){function e(e){for(var s,c,n=e[0],o=e[1],l=e[2],u=0,v=[];u<n.length;u++)c=n[u],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&v.push(r[c][0]),r[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var o=a[n];0!==r[o]&&(s=!1)}s&&(i.splice(e--,1),t=c(c.s=a[0]))}return t}var s={},r={app:0},i=[];function c(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=t,c.c=s,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)c.d(a,s,function(e){return t[e]}.bind(null,s));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],o=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=o;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"054a":function(t,e,a){"use strict";a("d7cb")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[a("h2",{staticClass:"d-flex align-center"},[t._v(" Test ")]),a("v-spacer")],1),a("v-navigation-drawer",{staticStyle:{position:"relative"},attrs:{app:""}},[a("v-list",{staticClass:"pa-0"},[a("v-list-item",{staticClass:"py-1",staticStyle:{background:"#6291F4"}},[a("v-list-item-avatar",[t._v(" LOGO ")]),a("span",{staticClass:"font-weight-medium ",staticStyle:{color:"#FFFFFF","font-size":"18px"}},[t._v("Lawseasy")])],1)],1),a("v-divider"),a("v-list",[a("v-subheader",[t._v("專案管理")]),a("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,s){return a("v-list-item",{key:s,on:{click:function(a){return t.goRoute(e)}}},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1),t.isVerdictPage?a("div",{staticClass:"d-flex",staticStyle:{position:"absolute",top:"64px",background:"#234122",width:"90%"}},[a("v-list",{staticStyle:{width:"100%"}},[a("v-list-item-group",{attrs:{color:"primary"},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,s){return a("v-list-item",{key:s},[a("v-list-item-icon",[a("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),a("v-list-item-content",[a("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1):t._e()],1),a("v-main",{staticClass:"d-flex flex-column",staticStyle:{height:"100vh",overflow:"hidden"}},[a("v-container",{staticStyle:{height:"100%",overflow:"hidden"},attrs:{"d-flex":"","flex-column":""}},[a("router-view")],1)],1)],1)},i=[],c=a("5530"),n=a("2f62"),o={name:"App",data:function(){return{selectedItem:null,items:[{icon:null,text:"我的專案",path:"projects"},{icon:null,text:"標記設定",path:""}]}},computed:Object(c["a"])({},Object(n["b"])({isVerdictPage:"getIsVerdictPage"})),methods:{goRoute:function(t){this.$router.push("/".concat(t.path))}}},l=o,d=(a("5c0b"),a("2877")),u=a("6544"),v=a.n(u),p=a("7496"),m=a("40dc"),f=a("a523"),b=a("ce7e"),g=a("132d"),h=a("8860"),x=a("da13"),y=a("8270"),F=a("5d23"),C=a("1baa"),_=a("34c3"),k=a("f6c4"),S=a("f774"),w=a("2fa4"),V=a("e0c7"),I=Object(d["a"])(l,r,i,!1,null,null,null),j=I.exports;v()(I,{VApp:p["a"],VAppBar:m["a"],VContainer:f["a"],VDivider:b["a"],VIcon:g["a"],VList:h["a"],VListItem:x["a"],VListItemAvatar:y["a"],VListItemContent:F["a"],VListItemGroup:C["a"],VListItemIcon:_["a"],VListItemTitle:F["b"],VMain:k["a"],VNavigationDrawer:S["a"],VSpacer:w["a"],VSubheader:V["a"]});var D=a("f309");s["a"].use(D["a"]);var T=new D["a"]({}),A=a("8c4f"),O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex pa-4",staticStyle:{height:"54px","align-items":"center"}},[a("div",{staticClass:"mr-4 font-weight-medium"},[t._v("我的專案 ")]),a("v-divider",{staticClass:"mr-4",attrs:{vertical:""}}),a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbItems},scopedSlots:t._u([{key:"divider",fn:function(){return[t._v(" — ")]},proxy:!0}])}),a("v-spacer"),a("v-btn",{staticStyle:{background:"#F5F8FA",color:"#7E8299"},attrs:{depressed:""}},[t._v("已結束專案")]),a("v-btn",{staticClass:"ml-4",staticStyle:{background:"#6291F4",color:"#ffffff"},attrs:{depressed:""}},[t._v("建立專案")])],1),a("div",{staticClass:"pa-4",staticStyle:{background:"#FAFCFE"}},[a("h2",{staticClass:"mb-4"},[t._v("我的專案")]),a("div",{staticClass:"px-8 py-5",staticStyle:{"border-radius":"12px",background:"#ffffff"}},[a("div",{staticClass:"d-flex align-center pa-4 mb-4",staticStyle:{background:"#F5F8FA","border-radius":"4px"}},[a("span",{staticClass:"font-weight-medium mr-4"},[t._v("關鍵字")]),a("v-text-field",{staticClass:"mr-4",attrs:{placeholder:"請輸入判決書名稱",outlined:"",dense:"","hide-details":"true"}}),a("v-menu",{attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on,r=e.attrs;return[a("v-text-field",t._g(t._b({attrs:{"hide-details":"true",dense:"",outlined:"",placeholder:"起始時間 - 結束時間","append-icon":"mdi-calendar"},model:{value:t.computedDateFormatted,callback:function(e){t.computedDateFormatted=e},expression:"computedDateFormatted"}},"v-text-field",r,!1),s))]}}]),model:{value:t.menu2,callback:function(e){t.menu2=e},expression:"menu2"}},[a("v-date-picker",{attrs:{"no-title":""},on:{input:function(e){t.menu2=!1}},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1),a("v-spacer"),a("v-btn",{staticClass:"mr-4",staticStyle:{background:"#6291F4",color:"#ffffff"},attrs:{depressed:""}},[t._v("搜尋")]),a("v-btn",{staticStyle:{background:"#F5F8FA",color:"#7E8299"},attrs:{depressed:""}},[t._v("清除")])],1),a("v-data-table",{staticClass:"elevation-0 project_table",attrs:{headers:t.headers,items:t.desserts,page:t.page,"hide-default-footer":""},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.actions",fn:function(e){var s=e.item;return[a("v-btn",{staticClass:"mr-2",staticStyle:{color:"#A1A5B7"},attrs:{depressed:"",outlined:""},on:{click:function(e){return t.markSetting(s)}}},[t._v("標記設定")]),a("v-btn",{staticStyle:{background:"#A1A5B7",color:"#ffffff"},attrs:{depressed:""},on:{click:function(e){return t.goVerdicts(s)}}},[t._v("查看標記狀況")])]}},{key:"item.edit",fn:function(){return[a("v-btn",{staticClass:"pa-0",staticStyle:{"min-wight":"30px",color:"#F18B41"},attrs:{color:"#FFF2E3",small:"",depressed:""}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-pencil ")])],1)]},proxy:!0},{key:"item.delete",fn:function(){return[a("v-btn",{staticClass:"mx-1 pa-0",staticStyle:{"min-wight":"30px",color:"#F1416C"},attrs:{color:"#FFF5F8",small:"",depressed:""},on:{click:function(e){t.deleteItem=!0}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-trash-can ")])],1)]},proxy:!0}])}),a("div",{staticClass:"d-flex mt-4 align-center"},[a("span",[t._v("Showing 1 to 10 of 50 entries")]),a("v-spacer"),a("v-pagination",{attrs:{length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)])])},P=[],E=a("3835"),$=(a("ac1f"),a("1276"),a("99af"),a("4d90"),{data:function(t){return{pageCount:10,page:1,dateFormatted:t.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),date:"",menu2:!1,headers:[{text:"專案名稱",align:"start",sortable:!1,value:"name"},{text:"起始時間",value:"startTime"},{text:"結束時間",value:"endTime"},{text:"參與人員",value:"joinMembers"},{text:"操作",value:"actions",align:"center"},{text:"編輯",value:"edit",align:"center"},{text:"刪除",value:"delete",align:"center"}],desserts:[{id:1,name:"test",startTime:"2021-11-11",endTime:"2021-11-12",joinMembers:["test1"]},{id:2,name:"test",startTime:"2021-11-11",endTime:"2021-11-12",joinMembers:["test1"]},{id:3,name:"test",startTime:"2021-11-11",endTime:"2021-11-12",joinMembers:["test1"]}],breadcrumbItems:[{text:"我的專案",disabled:!0}]}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)}},watch:{date:function(){this.dateFormatted=this.formatDate(this.date)}},methods:{markSetting:function(t){this.$router.push("/mark-setting/".concat(t.id))},goVerdicts:function(t){this.$router.push("/projects/".concat(t.id,"/verdicts"))},formatDate:function(t){if(!t)return null;var e=t.split("-"),a=Object(E["a"])(e,3),s=a[0],r=a[1],i=a[2];return"".concat(s,"/").concat(r,"/").concat(i)},parseDate:function(t){if(!t)return null;var e=t.split("/"),a=Object(E["a"])(e,3),s=a[0],r=a[1],i=a[2];return"".concat(i,"-").concat(s.padStart(2,"0"),"-").concat(r.padStart(2,"0"))}}}),B=$,M=(a("054a"),a("2bc5")),G=a("8336"),L=a("8fea"),z=a("2e4b"),R=a("e449"),N=a("891e"),J=a("8654"),Y=Object(d["a"])(B,O,P,!1,null,null,null),q=Y.exports;v()(Y,{VBreadcrumbs:M["a"],VBtn:G["a"],VDataTable:L["a"],VDatePicker:z["a"],VDivider:b["a"],VIcon:g["a"],VMenu:R["a"],VPagination:N["a"],VSpacer:w["a"],VTextField:J["a"]});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex pa-4",staticStyle:{height:"54px","align-items":"center"}},[a("div",{staticClass:"mr-4 font-weight-medium"},[t._v("標記設定 ")]),a("v-divider",{staticClass:"mr-4",attrs:{vertical:""}}),a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.items},scopedSlots:t._u([{key:"divider",fn:function(){return[t._v(" — ")]},proxy:!0}])}),a("v-spacer"),a("v-btn",{staticStyle:{background:"#F5F8FA",color:"#7E8299"},attrs:{depressed:""}},[t._v("返回")]),a("v-btn",{staticClass:"ml-4",staticStyle:{background:"#6291F4",color:"#ffffff"},attrs:{depressed:""}},[t._v("建立標記設定")])],1),a("div",{staticClass:"pa-4",staticStyle:{background:"#FAFCFE"}},[a("div",{staticClass:"mb-4",staticStyle:{"font-weight":"700","font-size":"20px"}},[t._v("離婚後親權裁判預測專案")]),a("div",{staticClass:"d-flex"},[a("v-card",{staticClass:"pa-4 mr-2",staticStyle:{flex:"1"},attrs:{elevation:"0"}},[a("div",{staticClass:"d-flex align-center"},[a("v-card-title",[t._v("選擇變相")]),a("v-spacer"),a("v-btn",{staticStyle:{background:"#6291F4",color:"#ffffff"},attrs:{depressed:""},on:{click:function(e){t.markSettingDialog=!0}}},[t._v("建立自訂義")])],1),a("v-card",{staticClass:"mt-4",attrs:{elevation:"0"}},[a("v-card-subtitle",{staticStyle:{"font-weight":"700"}},[t._v("有無變相")]),a("v-card",{staticStyle:{background:"#FAFCFE"},attrs:{elevation:"0"}},t._l(5,(function(e){return a("v-chip",{key:e,staticClass:"ma-2",attrs:{label:"",size:"x-large"}},[t._v(" 是否有關 ")])})),1)],1),a("v-divider",{staticClass:"my-4"}),a("v-card",{attrs:{elevation:"0"}},[a("v-card-subtitle",{staticStyle:{"font-weight":"700"}},[t._v("連續變相")]),a("v-card",{staticStyle:{background:"#FAFCFE"},attrs:{elevation:"0"}},t._l(5,(function(e){return a("v-chip",{key:e,staticClass:"ma-2",attrs:{label:"",size:"x-large"}},[t._v(" 是否有關 ")])})),1)],1)],1),a("v-card",{staticClass:"ml-2 pa-4",staticStyle:{flex:"1"},attrs:{elevation:"0"}},[a("v-card-title",[t._v("預覽")]),t._l(t.test,(function(e,s){return a("v-card",{key:s,staticClass:"pa-4 mb-2",attrs:{outlined:""}},[a("div",{staticClass:"d-flex"},[t._v(" 法院層級 "),a("v-spacer"),a("v-btn",{staticClass:"mx-1 pa-0",staticStyle:{"min-wight":"30px",color:"#A1A5B7"},attrs:{disabled:0==s,color:"#F5F8FA",small:"",depressed:""},on:{click:function(e){return t.down(s)}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-arrow-up-bold ")])],1),a("v-btn",{staticClass:"mx-1 pa-0",staticStyle:{"min-wight":"30px",color:"#A1A5B7"},attrs:{disabled:s==t.test.length-1,color:"#F5F8FA",small:"",depressed:""},on:{click:function(e){return t.top(s)}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-arrow-down-bold ")])],1),a("v-btn",{staticClass:"mx-1 pa-0",staticStyle:{"min-wight":"30px",color:"#F18B41"},attrs:{color:"#FFF2E3",small:"",depressed:""}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-pencil ")])],1),a("v-btn",{staticClass:"mx-1 pa-0",staticStyle:{"min-wight":"30px",color:"#F1416C"},attrs:{color:"#FFF5F8",small:"",depressed:""},on:{click:function(e){t.deleteItem=!0}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-trash-can ")])],1)],1),"radio"==e.type?a("v-radio-group",{attrs:{row:"","hide-details":"true"},model:{value:t.radioGroup,callback:function(e){t.radioGroup=e},expression:"radioGroup"}},[a("v-radio",{attrs:{label:"是",value:"Yes"}}),a("v-radio",{attrs:{label:"否",value:"No"}})],1):t._e(),"textarea"==e.type?a("v-textarea",{staticClass:"mt-4",attrs:{"auto-grow":"",outlined:"",rows:"1","row-height":"15","hide-details":"true"}}):t._e(),"field"==e.type?a("v-text-field",{staticClass:"mt-4",attrs:{outlined:"","hide-details":"true"}}):t._e()],1)}))],2)],1)]),a("v-dialog",{attrs:{width:"500"},model:{value:t.markSettingDialog,callback:function(e){t.markSettingDialog=e},expression:"markSettingDialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h6"},[t._v(" 建立自訂義 "),a("v-spacer"),a("span",{staticClass:"body-2 mr-4"},[t._v("選取變相")]),a("v-switch",{model:{value:t.switch1,callback:function(e){t.switch1=e},expression:"switch1"}})],1),a("v-divider"),a("v-card-text",{staticClass:"py-10"},[a("v-row",{staticClass:"mb-4 align-center",attrs:{"no-gutters":""}},[a("v-col",{attrs:{md:"4"}},[t._v(" 類型"),a("span",{staticClass:"font-weight-bold",staticStyle:{color:"#F1416C"}},[t._v("＊")])]),a("v-col",{attrs:{md:"8"}},[a("v-select",{attrs:{items:t.selfTypeItems,dense:"",outlined:"","hide-details":"true"},model:{value:t.selfType,callback:function(e){t.selfType=e},expression:"selfType"}})],1)],1),a("v-row",{staticClass:"mb-4 align-center",attrs:{"no-gutters":""}},[a("v-col",{attrs:{md:"4"}},[t._v(" 題目"),a("span",{staticClass:"font-weight-bold",staticStyle:{color:"#F1416C"}},[t._v("＊")])]),a("v-col",{attrs:{md:"8"}},[a("v-text-field",{attrs:{outlined:"",dense:"","hide-details":"true",placeholder:"請填寫名稱"}})],1)],1),a("v-row",{staticClass:"mb-4 align-center",attrs:{"no-gutters":""}},[a("v-col",{attrs:{md:"4"}},[t._v(" 樣式"),a("span",{staticClass:"font-weight-bold",staticStyle:{color:"#F1416C"}},[t._v("＊")])]),a("v-col",{attrs:{md:"8"}},[a("v-select",{attrs:{items:t.patternItems,dense:"",outlined:"","hide-details":"true"},model:{value:t.pattern,callback:function(e){t.pattern=e},expression:"pattern"}})],1)],1),"多選"==t.pattern?[t._l(t.multipleItems,(function(e,s){return a("v-row",{key:s,staticClass:"mb-2 align-center",attrs:{"no-gutters":""}},[0==s?[a("v-col",{attrs:{md:"4"}},[t._v(" 選項 ")]),a("v-col",{attrs:{md:"6"}},[a("v-text-field",{attrs:{outlined:"",dense:"","hide-details":"true"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}})],1),a("v-col",{staticClass:"justify-center d-flex",attrs:{md:"2"}},[a("v-btn",{staticClass:"pa-0",staticStyle:{"min-wight":"30px",color:"#F18B41"},attrs:{color:"#FFF2E3",small:"",depressed:""},on:{click:t.addMultipleItems}},[t._v(" 新增 ")])],1)]:[a("v-col",{attrs:{md:"4"}}),a("v-col",{attrs:{md:"6"}},[a("v-text-field",{attrs:{outlined:"",dense:"","hide-details":"true"},model:{value:e.value,callback:function(a){t.$set(e,"value",a)},expression:"item.value"}})],1),a("v-col",{staticClass:"justify-center d-flex",attrs:{md:"2"}},[a("v-btn",{staticClass:"mx-1 pa-0",staticStyle:{"min-wight":"30px",color:"#F1416C"},attrs:{color:"#FFF5F8",small:"",depressed:""},on:{click:function(e){return t.removeMultipleItems(s)}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-trash-can ")])],1)],1)]],2)})),a("v-row",{staticClass:"mt-2 mb-4 align-center",attrs:{"no-gutters":""}},[a("v-col",{attrs:{md:"4"}},[t._v(" 說明 ")]),a("v-col",{attrs:{md:"8"}},[a("v-textarea",{attrs:{"auto-grow":"",outlined:"",rows:"1","row-height":"15","hide-details":"true"}})],1)],1)]:t._e(),"文字欄位"==t.pattern?[a("v-row",{staticClass:"mb-4 align-center",attrs:{"no-gutters":""}},[a("v-col",{attrs:{md:"4"}},[t._v(" 格式"),a("span",{staticClass:"font-weight-bold",staticStyle:{color:"#F1416C"}},[t._v("＊")])]),a("v-col",{attrs:{md:"8"}},[a("v-radio-group",{attrs:{row:"","hide-details":"true"},model:{value:t.radioGroup,callback:function(e){t.radioGroup=e},expression:"radioGroup"}},[a("v-radio",{attrs:{label:"不限",value:"Yes"}}),a("v-radio",{attrs:{label:"僅限數字",value:"No"}})],1)],1)],1),a("v-row",{staticClass:"mb-4 align-center",attrs:{"no-gutters":""}},[a("v-col",{attrs:{md:"4"}},[t._v(" 字數限制 ")]),a("v-col",{attrs:{md:"3"}},[a("v-checkbox",{attrs:{label:"限制"},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1),a("v-col",{attrs:{md:"5"}},[t.checkbox?a("v-text-field",{attrs:{outlined:"",dense:"","hide-details":"true"}}):t._e()],1)],1),a("v-row",{staticClass:"mb-4 align-center",attrs:{"no-gutters":""}},[a("v-col",{attrs:{md:"4"}},[t._v(" 說明 ")]),a("v-col",{attrs:{md:"8"}},[a("v-textarea",{attrs:{"auto-grow":"",outlined:"",rows:"1","row-height":"15","hide-details":"true"}})],1)],1)]:t._e(),"日期"==t.pattern?[a("v-row",{staticClass:"mb-4 align-center",attrs:{"no-gutters":""}},[a("v-col",{attrs:{md:"4"}},[t._v(" 說明 ")]),a("v-col",{attrs:{md:"8"}},[a("v-textarea",{attrs:{"auto-grow":"",outlined:"",rows:"1","row-height":"15","hide-details":"true"}})],1)],1)]:t._e()],2),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticStyle:{color:"#7E8299"},attrs:{color:"#F5F8FA",depressed:""},on:{click:function(e){t.markSettingDialog=!1}}},[t._v(" 取消 ")]),a("v-btn",{staticStyle:{color:"#FFFFFF"},attrs:{depressed:"",color:"#6291F4"},on:{click:function(e){t.markSettingDialog=!1}}},[t._v(" 建立 ")])],1)],1)],1),a("v-dialog",{attrs:{width:"500"},model:{value:t.deleteItem,callback:function(e){t.deleteItem=e},expression:"deleteItem"}},[a("v-card",[a("v-card-title",{staticClass:"text-h6"},[t._v(" 立即刪除 ")]),a("v-divider"),a("v-card-text",{staticClass:"py-10"},[a("div",{staticClass:"font-weight-bold"},[t._v("提醒您！")]),a("div",[t._v("刪除此變相之後，無法再復原，必須重新建立")])]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{staticStyle:{color:"#7E8299"},attrs:{color:"#F5F8FA",depressed:""},on:{click:function(e){t.deleteItem=!1}}},[t._v(" 取消 ")]),a("v-btn",{staticStyle:{color:"#FFFFFF"},attrs:{depressed:"",color:"#F1416C"},on:{click:t.clickDeleteItem}},[t._v(" 刪除 ")])],1)],1)],1)],1)},K=[],Q=(a("a434"),{data:function(){return{multipleItems:[{value:""}],checkbox:!0,switch1:!0,selfType:"有無變相",selfTypeItems:[{text:"有無變相"},{text:"連續變相"}],pattern:"多選",patternItems:[{text:"多選"},{text:"文字欄位"},{text:"日期"}],markSettingDialog:!1,deleteItem:!1,radioGroup:"",items:[{text:"專案列表",disabled:!1,to:"/projects",exact:!0},{text:"標記設定",disabled:!0}],test:[{type:"radio",value:"2"},{type:"textarea",value:"2"},{type:"field",value:"2"}]}},methods:{clickDeleteItem:function(){this.deleteItem=!1},addMultipleItems:function(){this.multipleItems.push({value:""})},removeMultipleItems:function(t){this.multipleItems.splice(t,1)},down:function(t){var e=this.test[t];this.test.splice(t,1),this.test.splice(t-1,0,e)},top:function(t){var e=this.test[t];this.test.splice(t,1),this.test.splice(t+1,0,e)}}}),U=Q,W=a("b0af"),X=a("99d9"),Z=a("ac7c"),tt=a("cc20"),et=a("62ad"),at=a("169a"),st=a("67b6"),rt=a("43a6"),it=a("0fd9"),ct=a("b974"),nt=a("b73d"),ot=a("a844"),lt=Object(d["a"])(U,H,K,!1,null,null,null),dt=lt.exports;v()(lt,{VBreadcrumbs:M["a"],VBtn:G["a"],VCard:W["a"],VCardActions:X["a"],VCardSubtitle:X["b"],VCardText:X["c"],VCardTitle:X["d"],VCheckbox:Z["a"],VChip:tt["a"],VCol:et["a"],VDialog:at["a"],VDivider:b["a"],VIcon:g["a"],VRadio:st["a"],VRadioGroup:rt["a"],VRow:it["a"],VSelect:ct["a"],VSpacer:w["a"],VSwitch:nt["a"],VTextField:J["a"],VTextarea:ot["a"]});var ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex pa-4",staticStyle:{height:"54px","align-items":"center"}},[a("div",{staticClass:"mr-4 font-weight-medium"},[t._v("標記狀況 ")]),a("v-divider",{staticClass:"mr-4",attrs:{vertical:""}}),a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbItems},scopedSlots:t._u([{key:"divider",fn:function(){return[t._v(" — ")]},proxy:!0}])}),a("v-spacer"),a("v-btn",{staticStyle:{background:"#F5F8FA",color:"#7E8299"},attrs:{depressed:""}},[t._v("返回")]),a("v-btn",{staticClass:"ml-4",staticStyle:{background:"#6291F4",color:"#ffffff"},attrs:{depressed:""}},[t._v("建立標記設定")])],1),a("div",{staticClass:"pa-4",staticStyle:{background:"#FAFCFE"}},[a("h2",{staticClass:"mb-4"},[t._v("離婚後親權裁判預測專案")]),a("v-data-table",{staticClass:"elevation-0 project_table",attrs:{headers:t.headers,items:t.desserts,page:t.page,"hide-default-footer":""},on:{"update:page":function(e){t.page=e},"page-count":function(e){t.pageCount=e}},scopedSlots:t._u([{key:"item.name",fn:function(e){var s=e.item;return[a("router-link",{attrs:{to:"/"},nativeOn:{click:function(e){return t.goVerdictDetail(s)}}},[t._v(t._s(s.name))])]}},{key:"item.delete",fn:function(){return[a("v-btn",{staticClass:"mx-1 pa-0",staticStyle:{"min-wight":"30px",color:"#F1416C"},attrs:{color:"#FFF5F8",small:"",depressed:""},on:{click:function(e){t.deleteItem=!0}}},[a("v-icon",{attrs:{dark:""}},[t._v(" mdi-trash-can ")])],1)]},proxy:!0}])}),a("div",{staticClass:"d-flex mt-4 align-center"},[a("span",[t._v("Showing 1 to 10 of 50 entries")]),a("v-spacer"),a("v-pagination",{attrs:{length:t.pageCount},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1)],1)])},vt=[],pt={data:function(t){return{projectId:1,pageCount:10,page:1,dateFormatted:t.formatDate(new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10)),date:"",menu2:!1,headers:[{text:"名稱",align:"start",sortable:!1,value:"name"},{text:"進度",value:"schedule"},{text:"檢查",value:"check"},{text:"標記者",value:"markers"},{text:"標記時間",value:"markTime"},{text:"刪除",value:"delete",align:"center"}],desserts:[{id:1,name:"法務部 法律字第10603504060號",schedule:100,check:!1,markers:["test1"],markTime:"2021-11-11"}],breadcrumbItems:[{text:"我的專案",disabled:!1,to:"/projects",exact:!0},{text:"標記狀況",disabled:!0}]}},computed:{computedDateFormatted:function(){return this.formatDate(this.date)}},watch:{date:function(){this.dateFormatted=this.formatDate(this.date)}},methods:{markSetting:function(t){this.$router.push("/mark-setting/".concat(t.id))},goVerdicts:function(t){this.$router.push("/projects/".concat(t.id,"/verdicts"))},formatDate:function(t){if(!t)return null;var e=t.split("-"),a=Object(E["a"])(e,3),s=a[0],r=a[1],i=a[2];return"".concat(s,"/").concat(r,"/").concat(i)},parseDate:function(t){if(!t)return null;var e=t.split("/"),a=Object(E["a"])(e,3),s=a[0],r=a[1],i=a[2];return"".concat(i,"-").concat(s.padStart(2,"0"),"-").concat(r.padStart(2,"0"))},goVerdictDetail:function(t){this.$router.push("/projects/".concat(t.id,"/verdicts/").concat(t.id))}}},mt=pt,ft=(a("b0b2"),Object(d["a"])(mt,ut,vt,!1,null,null,null)),bt=ft.exports;v()(ft,{VBreadcrumbs:M["a"],VBtn:G["a"],VDataTable:L["a"],VDivider:b["a"],VIcon:g["a"],VPagination:N["a"],VSpacer:w["a"]});var gt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-flex pa-4",staticStyle:{height:"54px","align-items":"center"}},[a("div",{staticClass:"mr-4 font-weight-medium"},[t._v("標記內容 ")]),a("v-divider",{staticClass:"mr-4",attrs:{vertical:""}}),a("v-breadcrumbs",{staticClass:"pa-0",attrs:{items:t.breadcrumbItems},scopedSlots:t._u([{key:"divider",fn:function(){return[t._v(" — ")]},proxy:!0}])}),a("v-spacer"),a("v-btn",{staticStyle:{background:"#F5F8FA",color:"#7E8299"},attrs:{depressed:""}},[t._v("返回")]),a("v-btn",{staticClass:"ml-4",staticStyle:{background:"#6291F4",color:"#ffffff"},attrs:{depressed:""}},[t._v("建立標記設定")])],1),t._m(0)])},ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pa-4",staticStyle:{background:"#FAFCFE"}},[a("h2",{staticClass:"mb-4"},[t._v("法務部 法律字第10603504060號")])])}],xt={data:function(){return{breadcrumbItems:[{text:"我的專案",disabled:!1,to:"/projects",exact:!0},{text:"標記狀況",disabled:!0}]}},created:function(){this.$store.dispatch("setIsVerdictPage",!0)},destroyed:function(){this.$store.dispatch("setIsVerdictPage",!1)}},yt=xt,Ft=Object(d["a"])(yt,gt,ht,!1,null,null,null),Ct=Ft.exports;v()(Ft,{VBreadcrumbs:M["a"],VBtn:G["a"],VDivider:b["a"],VSpacer:w["a"]}),s["a"].use(A["a"]);var _t=[{path:"/",component:q,alias:"/projects"},{path:"/mark-setting/:projectId",component:dt},{path:"/projects/:projectId/verdicts",component:bt},{path:"/projects/:projectId/verdicts/:verdictId",component:Ct}],kt=new A["a"]({mode:"history",routes:_t}),St=kt,wt={state:{isVerdictPage:!1},mutations:{updateIsVerdictPage:function(t,e){t.isVerdictPage=e}},actions:{setIsVerdictPage:function(t,e){var a=t.commit;a("updateIsVerdictPage",e)}},getters:{getIsVerdictPage:function(t){return t.isVerdictPage}}},Vt=wt;function It(){return new n["a"].Store({modules:{verdict:Vt}})}s["a"].use(n["a"]),s["a"].config.productionTip=!1;var jt=It();new s["a"]({vuetify:T,store:jt,router:St,render:function(t){return t(j)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){},b0b2:function(t,e,a){"use strict";a("f96a")},d7cb:function(t,e,a){},f96a:function(t,e,a){}});
//# sourceMappingURL=app.f556ca52.js.map