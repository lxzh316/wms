(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[31],{"0eb0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-md",staticStyle:{width:"100%","margin-top":"-20px"}},[a("q-table",{staticClass:"my-sticky-header-table shadow-24",attrs:{data:t.table_list,"row-key":"id",separator:t.separator,loading:t.loading,filter:t.filter,columns:t.columns,"hide-bottom":"",pagination:t.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:t.height},flat:"",bordered:""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"top",fn:function(){return[a("q-btn-group",{attrs:{push:""}},[a("q-btn",{attrs:{label:"New",icon:"add"},on:{click:function(e){t.newForm=!0}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n             New one data\n           ")])],1),a("q-btn",{attrs:{label:"refresh",icon:"refresh"},on:{click:function(e){return t.reFresh()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n             Refresh data\n           ")])],1),a("q-btn",{attrs:{label:"Download",icon:"cloud_download"},on:{click:function(e){return t.downloadData()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n            Download 1 month data\n           ")])],1)],1),a("q-space"),a("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:"Search word"},scopedSlots:t._u([{key:"append",fn:function(){return[a("q-icon",{attrs:{name:"search"}})]},proxy:!0}]),model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(e){return[a("q-tr",{attrs:{props:e}},[e.row.id===t.editid?[a("q-td",{key:"staff_name",attrs:{props:e}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Staff_name",autofocus:""},model:{value:t.editFormData.staff_name,callback:function(e){t.$set(t.editFormData,"staff_name",e)},expression:"editFormData.staff_name"}})],1)]:e.row.id!==t.editid?[a("q-td",{key:"staff_name",attrs:{props:e}},[t._v("\n             "+t._s(e.row.staff_name)+"\n           ")])]:t._e(),e.row.id===t.editid?[a("q-td",{key:"staff_type",attrs:{props:e}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Staff_type"},model:{value:t.editFormData.staff_type,callback:function(e){t.$set(t.editFormData,"staff_type",e)},expression:"editFormData.staff_type"}})],1)]:e.row.id!==t.editid?[a("q-td",{key:"staff_type",attrs:{props:e}},[t._v("\n             "+t._s(e.row.staff_type)+"\n           ")])]:t._e(),a("q-td",{key:"create_time",attrs:{props:e}},[t._v("\n           "+t._s(e.row.create_time)+"\n         ")]),a("q-td",{key:"update_time",attrs:{props:e}},[t._v("\n           "+t._s(e.row.update_time)+"\n         ")]),t.editMode?t.editMode?[e.row.id===t.editid?[a("q-td",{key:"action",attrs:{props:e}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"secondary",icon:"check"},on:{click:function(e){return t.editDataSubmit()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n                Confirm edit data\n              ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"red",icon:"close"},on:{click:function(e){return t.editDataCancel()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n                Cancel edit data\n              ")])],1)],1)]:e.row.id!==t.editid?void 0:t._e()]:t._e():[a("q-td",{key:"action",attrs:{props:e}},[a("q-btn",{attrs:{round:"",flat:"",push:"",color:"secondary",icon:"edit"},on:{click:function(a){return t.editData(e.row)}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n                Edit one line\n              ")])],1),a("q-btn",{attrs:{round:"",flat:"",push:"",color:"red",icon:"delete"},on:{click:function(a){return t.deleteData(e.row.id)}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n                Delete one line\n              ")])],1),a("q-btn",{attrs:{color:"teal",label:"Contact",icon:"contacts"},on:{click:function(a){return t.ChatWith(e.row.staff_name)}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n                Contact with him\n              ")])],1)],1)]],2)]}}])}),[a("div",{staticClass:"q-pa-lg flex flex-center"},[a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:"Previous",icon:"navigate_before"},on:{click:function(e){return t.getListPrevious()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          Previous\n        ")])],1),a("q-btn",{directives:[{name:"show",rawName:"v-show",value:t.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:"Next","icon-right":"navigate_next"},on:{click:function(e){return t.getListNext()}}},[a("q-tooltip",{attrs:{"content-class":"bg-indigo",offset:[10,10],"content-style":"font-size: 12px"}},[t._v("\n          Next\n        ")])],1)],1)],a("q-dialog",{model:{value:t.newForm,callback:function(e){t.newForm=e},expression:"newForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[t._v("New one data")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[t._v("Close")])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[a("q-input",{attrs:{dense:"",outlined:"",square:"",label:"Staff_Name",autofocus:"",rules:[function(t){return t&&t.length>0||"Please Enter the Staff_Name"}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newDataSubmit()}},model:{value:t.newFormData.staff_name,callback:function(e){t.$set(t.newFormData,"staff_name",e)},expression:"newFormData.staff_name"}}),a("q-input",{staticStyle:{"margin-top":"5px"},attrs:{dense:"",outlined:"",square:"",label:"Staff_Type",rules:[function(t){return t&&t.length>0||"Please Enter the Staff_Type"}]},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.newDataSubmit()}},model:{value:t.newFormData.staff_type,callback:function(e){t.$set(t.newFormData,"staff_type",e)},expression:"newFormData.staff_type"}})],1),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.newDataCancel()}}},[t._v("Cancel")]),a("q-btn",{attrs:{color:"primary"},on:{click:function(e){return t.newDataSubmit()}}},[t._v("Submit")])],1)],1)],1),a("q-dialog",{model:{value:t.deleteForm,callback:function(e){t.deleteForm=e},expression:"deleteForm"}},[a("q-card",{staticClass:"shadow-24"},[a("q-bar",{staticClass:"bg-light-blue-10 text-white rounded-borders",staticStyle:{height:"50px"}},[a("div",[t._v("Delete one data")]),a("q-space"),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{dense:"",flat:"",icon:"close"}},[a("q-tooltip",[t._v("Close")])],1)],1),a("q-card-section",{staticClass:"scroll",staticStyle:{"max-height":"325px",width:"400px"}},[t._v("\n       This is an irreversible process.\n     ")]),a("div",{staticStyle:{float:"right",padding:"15px 15px 15px 0"}},[a("q-btn",{staticStyle:{"margin-right":"25px"},attrs:{color:"white","text-color":"black"},on:{click:function(e){return t.deleteDataCancel()}}},[t._v("Cancel")]),a("q-btn",{attrs:{color:"primary"},on:{click:function(e){return t.deleteDataSubmit()}}},[t._v("Submit")])],1)],1)],1)],2)},o=[],i=(a("5319"),a("3004")),s={name:"Pagedriverlist",data(){return{openid:"",login_name:"",authin:"0",pathname:"driver/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],columns:[{name:"staff_name",required:!0,label:"Staff_Name",align:"left",field:"staff_name"},{name:"staff_type",label:"Staff_Type",field:"staff_type",align:"center"},{name:"create_time",label:"Create_time",field:"create_time",align:"center"},{name:"update_time",label:"Update_time",field:"update_time",align:"center"},{name:"action",label:"Action",align:"right"}],filter:"",pagination:{page:1,rowsPerPage:"30"},newForm:!1,newFormData:{staff_name:"",staff_type:""},editid:0,editFormData:{},editMode:!1,deleteForm:!1,deleteid:0,sender:"",receiver:"",chat:!1,chat_list:"",chat_text:"",chat_next:null}},methods:{getList(){var t=this;t.$q.localStorage.has("auth")&&Object(i["d"])(t.pathname,{}).then((e=>{if(t.table_list=e.results,e.previous){var a=e.previous.split(":")[0];e.previous.replace(a,window.location.href.split(":")[0]),t.pathname_previous=e.previous}else t.pathname_previous=e.previous;if(e.next){var n=e.next.split(":")[0];e.next.replace(n,window.location.href.split(":")[0]),t.pathname_next=e.next}else t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListPrevious(){var t=this;t.$q.localStorage.has("auth")&&Object(i["d"])(t.pathname_previous,{}).then((e=>{if(t.table_list=e.results,e.previous){var a=e.previous.split(":")[0];e.previous.replace(a,window.location.href.split(":")[0]),t.pathname_previous=e.previous}else t.pathname_previous=e.previous;if(e.next){var n=e.next.split(":")[0];e.next.replace(n,window.location.href.split(":")[0]),t.pathname_next=e.next}else t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){var t=this;t.$q.localStorage.has("auth")&&Object(i["d"])(t.pathname_next,{}).then((e=>{if(t.table_list=e.results,e.previous){var a=e.previous.split(":")[0];e.previous.replace(a,window.location.href.split(":")[0]),t.pathname_previous=e.previous}else t.pathname_previous=e.previous;if(e.next){var n=e.next.split(":")[0];e.next.replace(n,window.location.href.split(":")[0]),t.pathname_next=e.next}else t.pathname_next=e.next})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){var t=this;t.getList()},newDataSubmit(){var t=this;Object(i["f"])(t.pathname,t.newFormData).then((e=>{400===e.status_code?t.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===e.status_code?t.$q.notify({message:e.detail,icon:"close",color:"negative"}):(t.getList(),t.newDataCancel(),t.$q.notify({message:"Success Create",icon:"check",color:"green"}))})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},newDataCancel(){var t=this;t.newForm=!1,t.newFormData={staff_name:"",staff_type:""}},editData(t){var e=this;e.editMode=!0,e.editid=t.id,e.editFormData={staff_name:t.staff_name,staff_type:t.staff_type}},editDataSubmit(){var t=this;Object(i["g"])(t.pathname+t.editid+"/",t.editFormData).then((e=>{console.log(e),400===e.status_code?t.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===e.status_code?t.$q.notify({message:e.detail,icon:"close",color:"negative"}):(t.editDataCancel(),t.getList(),t.$q.notify({message:"Success Edit Data",icon:"check",color:"green"}))})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},editDataCancel(){var t=this;t.editMode=!1,t.editid=0,t.editFormData={staff_name:"",staff_type:""}},deleteData(t){var e=this;e.deleteForm=!0,e.deleteid=t},deleteDataSubmit(){var t=this;Object(i["c"])(t.pathname+t.deleteid+"/").then((e=>{400===e.status_code?t.$q.notify({message:"Please Enter the words",icon:"close",color:"negative"}):500===e.status_code?t.$q.notify({message:e.detail,icon:"close",color:"negative"}):(t.deleteDataCancel(),t.getList(),t.$q.notify({message:"Success Edit Data",icon:"check",color:"green"}))})).catch((e=>{t.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},deleteDataCancel(){var t=this;t.deleteForm=!1,t.deleteid=0}},created(){var t=this;t.getList(),t.$q.localStorage.has("openid")?t.openid=t.$q.localStorage.getItem("openid"):(t.openid="",t.$q.localStorage.set("openid","")),t.$q.localStorage.has("login_name")?t.login_name=t.$q.localStorage.getItem("login_name"):(t.login_name="",t.$q.localStorage.set("login_name","")),t.$q.localStorage.has("auth")?t.authin="1":t.authin="0"},mounted(){this.$q.platform.is.electron?this.height=String(this.$q.screen.height-290)+"px":this.height=this.$q.screen.height-290+"px"},updated(){},destroyed(){}},r=s,l=a("2877"),c=a("f749"),d=a("eaac"),p=a("e7a9"),f=a("9c40"),u=a("05c0"),m=a("2c91"),h=a("27f9"),g=a("0016"),_=a("bd08"),v=a("db86"),b=a("24e8"),q=a("f09f"),y=a("d847"),w=a("a370"),x=a("7f67"),k=a("eebe"),D=a.n(k),S=Object(l["a"])(r,n,o,!1,null,null,null);"function"===typeof c["default"]&&Object(c["default"])(S);e["default"]=S.exports;D()(S,"components",{QTable:d["a"],QBtnGroup:p["a"],QBtn:f["a"],QTooltip:u["a"],QSpace:m["a"],QInput:h["a"],QIcon:g["a"],QTr:_["a"],QTd:v["a"],QDialog:b["a"],QCard:q["a"],QBar:y["a"],QCardSection:w["a"]}),D()(S,"directives",{ClosePopup:x["a"]})},"4e11":function(t,e){},f749:function(t,e,a){"use strict";var n=a("4e11"),o=a.n(n);e["default"]=o.a}}]);