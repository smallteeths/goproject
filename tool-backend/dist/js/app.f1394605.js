(function(e){function t(t){for(var i,r,s=t[0],o=t[1],c=t[2],m=0,u=[];m<s.length;m++)r=s[m],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&u.push(l[r][0]),l[r]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);d&&d(t);while(u.length)u.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,s=1;s<a.length;s++){var o=a[s];0!==l[o]&&(i=!1)}i&&(n.splice(t--,1),e=r(r.s=a[0]))}return e}var i={},l={app:0},n=[];function r(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var i=a("85ec"),l=a.n(i);l.a},"3b80":function(e,t,a){},"3ccc":function(e,t,a){"use strict";var i=a("3b80"),l=a.n(i);l.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e623"),a("e379"),a("5dc8"),a("37e1");var i=a("2b0e"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rancher-layout",attrs:{id:"app"}},[a("Main",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},n=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"rancher-header"},[e._v(" RANCHER-UI-FACEMASK ")]),a("PlugInPage")],1)},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"rancher-upload-layout"},[a("div",{staticClass:"rancher-upload-info"},[a("el-row",{attrs:{type:"flex",gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"rancher-upload-label grid-content bg-purple"},[a("div",{staticStyle:{padding:"30px"}},[e._v("使用说明")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"rancher-upload-content grid-content bg-purple"},[a("div",{staticStyle:{padding:"10px 0px"}},[a("div",{staticStyle:{"text-align":"left",padding:"5px 0px"}},[e._v("1. 上传静态文件到docker容器")]),a("div",{staticStyle:{"text-align":"left",padding:"5px 0px"}},[e._v("2. docker cp ${rancherui} ${containerId}:/go/src/tool-backend/rancherui/")]),a("div",{staticStyle:{"text-align":"left",padding:"5px 0px"}},[e._v("3. 等待NODE包下载完毕")]),a("div",{staticStyle:{"text-align":"left",padding:"5px 0px"}},[e._v("4. 替换文件并等待打包完成点击下载tar包")])])])])],1),a("el-row",{attrs:{type:"flex",gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"rancher-upload-label grid-content bg-purple"},[a("div",{staticStyle:{"padding-top":"30px"}},[e._v("LOGO")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"rancher-upload-content grid-content bg-purple"},[a("el-upload",{attrs:{action:"/upload/logo","list-type":"picture-card","show-file-list":e.showFileList,"on-success":e.handleSuccess}},[a("i",{staticClass:"el-icon-plus"})]),a("div",{staticClass:"rancher-upload-img",on:{click:e.handlePictureCardPreview}},[a("img",{attrs:{src:e.imageUrl,alt:""}})])],1)])],1),a("el-row",{attrs:{type:"flex",gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"rancher-upload-label grid-content bg-purple"},[a("div",{staticStyle:{"padding-top":"30px"}},[e._v("登录页背景")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"rancher-upload-content grid-content bg-purple"},[a("el-upload",{attrs:{action:"/upload/loginBackground","list-type":"picture-card","show-file-list":e.showFileList,"on-success":e.handleLoginBackGroundSuccess}},[a("i",{staticClass:"el-icon-plus"})]),a("div",{staticClass:"rancher-upload-img",on:{click:e.handleLoginBackGroundPictureCardPreview}},[a("img",{attrs:{src:e.loginBackGroundImageUrl,alt:""}})])],1)])],1),a("el-row",{attrs:{type:"flex",gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"rancher-upload-label grid-content bg-purple"},[a("div",{staticStyle:{"padding-top":"20px"}},[e._v("备案号")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"rancher-from-content grid-content bg-purple"},[a("el-form",{style:{width:"100%"},attrs:{"label-position":e.labelPosition,"label-width":"120px"}},[a("el-form-item",{attrs:{label:"login页面备案号"}},[a("div",{style:{display:"flex","align-items":"center"}},[a("el-input",{style:{width:"30%","margin-right":"20px"},attrs:{placeholder:"链接名字"},model:{value:e.formLogin.name,callback:function(t){e.$set(e.formLogin,"name",t)},expression:"formLogin.name"}}),a("el-input",{style:{width:"30%","margin-right":"20px"},attrs:{placeholder:"链接地址"},model:{value:e.formLogin.value,callback:function(t){e.$set(e.formLogin,"value",t)},expression:"formLogin.value"}})],1)])],1)],1)])],1),a("el-row",{attrs:{type:"flex",gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"rancher-upload-label grid-content bg-purple"},[a("div",{staticStyle:{"padding-top":"30px"}},[e._v("主题颜色")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"rancher-from-content grid-content bg-purple"},[a("el-form",{style:{width:"100%"},attrs:{"label-position":e.labelPosition,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"primary"}},[a("div",{style:{display:"flex","align-items":"center"}},[a("el-input",{style:{width:"30%","margin-right":"20px"},model:{value:e.formTheme.primary,callback:function(t){e.$set(e.formTheme,"primary",t)},expression:"formTheme.primary"}}),a("span",{style:{"margin-right":"20px"}},[e._v("普通按钮的背景颜色")]),a("span",{staticClass:"from-color-display",style:{background:e.formTheme.primary}})],1)]),a("el-form-item",{attrs:{label:"secondary"}},[a("div",{style:{display:"flex","align-items":"center"}},[a("el-input",{style:{width:"30%","margin-right":"20px"},model:{value:e.formTheme.secondary,callback:function(t){e.$set(e.formTheme,"secondary",t)},expression:"formTheme.secondary"}}),a("span",{style:{"margin-right":"20px"}},[e._v("Title标题的颜色")]),a("span",{staticClass:"from-color-display",style:{background:e.formTheme.secondary}})],1)]),a("el-form-item",{attrs:{label:"success"}},[a("div",{style:{display:"flex","align-items":"center"}},[a("el-input",{style:{width:"30%","margin-right":"20px"},model:{value:e.formTheme.success,callback:function(t){e.$set(e.formTheme,"success",t)},expression:"formTheme.success"}}),a("span",{style:{"margin-right":"20px"}},[e._v("成功状态的颜色")]),a("span",{staticClass:"from-color-display",style:{background:e.formTheme.success}})],1)]),a("el-form-item",{attrs:{label:"warning"}},[a("div",{style:{display:"flex","align-items":"center"}},[a("el-input",{style:{width:"30%","margin-right":"20px"},model:{value:e.formTheme.warning,callback:function(t){e.$set(e.formTheme,"warning",t)},expression:"formTheme.warning"}}),a("span",{style:{"margin-right":"20px"}},[e._v("警告状态的颜色")]),a("span",{staticClass:"from-color-display",style:{background:e.formTheme.warning}})],1)]),a("el-form-item",{attrs:{label:"error"}},[a("div",{style:{display:"flex","align-items":"center"}},[a("el-input",{style:{width:"30%","margin-right":"20px"},model:{value:e.formTheme.error,callback:function(t){e.$set(e.formTheme,"error",t)},expression:"formTheme.error"}}),a("span",{style:{"margin-right":"20px"}},[e._v("错误状态的颜色")]),a("span",{staticClass:"from-color-display",style:{background:e.formTheme.error}})],1)]),a("el-form-item",{attrs:{label:"info"}},[a("div",{style:{display:"flex","align-items":"center"}},[a("el-input",{style:{width:"30%","margin-right":"20px"},model:{value:e.formTheme.info,callback:function(t){e.$set(e.formTheme,"info",t)},expression:"formTheme.info"}}),a("span",{style:{"margin-right":"20px"}},[e._v("选中状态的背景颜色")]),a("span",{staticClass:"from-color-display",style:{background:e.formTheme.info}})],1)]),a("el-form-item",{attrs:{label:"disabled"}},[a("div",{style:{display:"flex","align-items":"center"}},[a("el-input",{style:{width:"30%","margin-right":"20px"},model:{value:e.formTheme.disabled,callback:function(t){e.$set(e.formTheme,"disabled",t)},expression:"formTheme.disabled"}}),a("span",{style:{"margin-right":"20px"}},[e._v("禁用状态的背景颜色")]),a("span",{staticClass:"from-color-display",style:{background:e.formTheme.disabled}})],1)]),a("el-form-item",{attrs:{label:"textColor"}},[a("div",{style:{display:"flex","align-items":"center"}},[a("el-input",{style:{width:"30%","margin-right":"20px"},model:{value:e.formTheme.textColor,callback:function(t){e.$set(e.formTheme,"textColor",t)},expression:"formTheme.textColor"}}),a("span",{style:{"margin-right":"20px"}},[e._v("文本颜色")]),a("span",{staticClass:"from-color-display",style:{background:e.formTheme.textColor}})],1)]),a("el-form-item",{attrs:{label:"linkColor"}},[a("div",{style:{display:"flex","align-items":"center"}},[a("el-input",{style:{width:"30%","margin-right":"20px"},model:{value:e.formTheme.linkColor,callback:function(t){e.$set(e.formTheme,"linkColor",t)},expression:"formTheme.linkColor"}}),a("span",{style:{"margin-right":"20px"}},[e._v("链接文本和颜色")]),a("span",{staticClass:"from-color-display",style:{background:e.formTheme.linkColor}})],1)]),a("el-form-item",{attrs:{label:"lightGrey"}},[a("div",{style:{display:"flex","align-items":"center"}},[a("el-input",{style:{width:"30%","margin-right":"20px"},model:{value:e.formTheme.lightGrey,callback:function(t){e.$set(e.formTheme,"lightGrey",t)},expression:"formTheme.lightGrey"}}),a("span",{style:{"margin-right":"20px"}},[e._v("用于card header背景颜色")]),a("span",{staticClass:"from-color-display",style:{background:e.formTheme.lightGrey}})],1)]),a("el-form-item",{attrs:{label:"midGrey"}},[a("div",{style:{display:"flex","align-items":"center"}},[a("el-input",{style:{width:"30%","margin-right":"20px"},model:{value:e.formTheme.midGrey,callback:function(t){e.$set(e.formTheme,"midGrey",t)},expression:"formTheme.midGrey"}}),a("span",{style:{"margin-right":"20px"}},[e._v("用于描述性文本颜色 占位符等")]),a("span",{staticClass:"from-color-display",style:{background:e.formTheme.midGrey}})],1)]),a("el-form-item",{attrs:{label:"darkGrey"}},[a("div",{style:{display:"flex","align-items":"center"}},[a("el-input",{style:{width:"30%","margin-right":"20px"},model:{value:e.formTheme.darkGrey,callback:function(t){e.$set(e.formTheme,"darkGrey",t)},expression:"formTheme.darkGrey"}}),a("span",{style:{"margin-right":"20px"}},[e._v("用于第一级title checkbox的文字等")]),a("span",{staticClass:"from-color-display",style:{background:e.formTheme.darkGrey}})],1)])],1)],1)])],1),a("el-row",{attrs:{type:"flex",gutter:20}},[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"rancher-upload-label grid-content bg-purple"},[a("div",{staticStyle:{"padding-top":"30px"}},[e._v("添加链接地址")])])]),a("el-col",{attrs:{span:20}},[a("div",{staticClass:"rancher-from-content grid-content bg-purple"},[a("el-form",{ref:"dynamicValidateForm",staticClass:"rancher-from",attrs:{"label-position":e.labelPosition,model:e.dynamicValidateForm,"label-width":"100px"}},[e._l(e.dynamicValidateForm.domains,(function(t,i){return a("el-form-item",{key:t.key,attrs:{label:"链接地址",prop:"domains."+i+".value",rules:{required:!1,message:"不能为空",trigger:"blur"}}},[a("div",{staticClass:"rancher-form-layout"},[a("el-input",{attrs:{placeholder:"链接名字"},model:{value:t.name,callback:function(a){e.$set(t,"name",a)},expression:"domain.name"}}),a("el-input",{attrs:{placeholder:"链接地址"},model:{value:t.value,callback:function(a){e.$set(t,"value",a)},expression:"domain.value"}}),a("el-button",{on:{click:function(a){return a.preventDefault(),e.removeDomain(t)}}},[e._v("删除")])],1)])})),a("el-form-item",[a("div",{staticClass:"rancher-form-link-action"},[a("el-button",{on:{click:e.addDomain}},[e._v("新增链接")]),a("el-button",{on:{click:function(t){return e.resetForm()}}},[e._v("重置")])],1)])],2)],1)])],1),a("el-row",{attrs:{type:"flex",gutter:20}},[a("el-col",{attrs:{span:18}},[a("div",{staticStyle:{display:"flex",height:"40px","text-align":"left","line-height":"40px","overflow-y":"auto"}},[e._v("Build Info : "+e._s(e.loginfo))])]),a("el-col",{attrs:{span:6}},[a("div",{staticClass:"rancher-upload-save"},[a("el-button",{on:{click:e.clickHandle}},[e._v("Save")]),a("el-button",{directives:[{name:"loading",rawName:"v-loading",value:e.buildDisabled,expression:"buildDisabled"}],attrs:{disabled:e.buildDisabled},on:{click:e.test}},[e._v("Build 静态文件")]),a("el-button",{on:{click:e.download}},[e._v("下载资源")])],1)])],1),a("el-dialog",{attrs:{visible:e.loginBackGroundDialogVisible,size:"tiny"},on:{"update:visible":function(t){e.loginBackGroundDialogVisible=t}}},[a("img",{attrs:{width:"100%",src:e.loginBackGroundDialogImageUrl,alt:""}})])],1),a("div",{staticClass:"rancher-upload-list"},[a("ul",{staticStyle:{padding:"15px","font-size":"14px"}},[a("el-card",{staticClass:"box-card",attrs:{shadow:"never"}},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("Rancher-ui 静态文件")]),a("el-popconfirm",{attrs:{title:"确定清空Rancher-ui静态文件么"},on:{onConfirm:e.handleDelete}},[a("i",{staticClass:"el-icon-delete",staticStyle:{"margin-left":"5px",cursor:"pointer"},attrs:{slot:"reference"},slot:"reference"})])],1),a("div",{staticStyle:{background:"rgba(248, 248, 248, 1)",padding:"10px 0px"}},[e._v(" 静态文件状态 "),a("div",{staticStyle:{"margin-top":"10px",padding:"10px"}},[e._v(e._s(e.rancherUiState))])]),a("div",{staticStyle:{background:"rgba(248, 248, 248, 1)",padding:"10px 0px"}},[e._v(" NODE包状态 "),a("i",{staticClass:"el-icon-refresh",staticStyle:{"margin-left":"5px",cursor:"pointer"},on:{click:e.installNode}}),a("div",{staticStyle:{"margin-top":"10px",padding:"10px"}},[e._v(e._s(e.rancherInstallState))])])])],1)])])},c=[],d=(a("99af"),a("4160"),a("c975"),a("d81d"),a("a434"),a("b0c0"),a("159b"),a("d3b7"),a("bc3a")),m=a.n(d),u=a("5c96"),p=a.n(u),f=m.a.create({timeout:3e4});f.interceptors.request.use((function(e){return e}),(function(e){console.log(e),Promise.reject(e)})),f.interceptors.response.use((function(e){var t=e.data,a=/^20\d+/;return a.test(e.status)?e.data:(Object(u["Message"])({message:t.message,type:"error",duration:5e3}),Promise.reject("error"))}),(function(e){return console.log("err"+e),Object(u["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var g=f,h={post:function(e,t,a){return console.log(a),g.post(e,t,a)},get:function(e,t,a){var i={};return t&&Object.assign(i,{params:t}),a&&Object.assign(i,a),g.get(e,i)},put:function(e,t,a){return g.put(e,t,a)},delete:function(e,t,a){var i={};return t&&Object.assign(i,{params:t}),a&&Object.assign(i,a),g.delete(e,i)}},y={name:"LogoImage",data:function(){return{ws:"",loginfo:"",buildDisabled:!1,rancherUiState:"rancher-ui文件未上传",wsInstall:"",rancherInstallState:"",modalNotify:"",host:"",linkws:"",startTimer:"",showFileList:!1,dialogImageUrl:"",dialogVisible:!1,imageUrl:"",fileName:"",loginBackGroundImageUrl:"",loginBackGroundFileName:"",loginBackGroundDialogImageUrl:"",loginBackGroundDialogVisible:!1,dynamicValidateForm:{domains:[{name:"",value:""}],email:""},formLogin:{name:"",value:""},labelPosition:"left",formTheme:{primary:"#0075A8",secondary:"#34495E",success:"#27AA5E",warning:"#F1C40F",error:"#F15354",info:"#78C9CF",disabled:"#dee1e3",textColor:"#454545",linkColor:"#3497DA",lightGrey:"#ecf0f1",midGrey:"#8B959C",darkGrey:"#3d3d3d"},formThemeDefault:{primary:"#0075A8",secondary:"#34495E",success:"#27AA5E",warning:"#F1C40F",error:"#F15354",info:"#78C9CF",disabled:"#dee1e3",textColor:"#454545",linkColor:"#3497DA",lightGrey:"#ecf0f1",midGrey:"#8B959C",darkGrey:"#3d3d3d"}}},props:{msg:String},created:function(){var e=this,t=window.location;this.host=t.host,h.post("/upload/variableLastConfig").then((function(t){if(t.data){if(e.dynamicValidateForm.domains=JSON.parse(t.data.link_data),e.fileName=t.data.file_name,e.imageUrl="http://".concat(e.host,"/upload/public/static/uploadfile/").concat(t.data.file_name),e.loginBackGroundFileName=t.data.loginbg_file_name,e.loginBackGroundImageUrl="http://".concat(e.host,"/upload/public/static/uploadfile/").concat(t.data.loginbg_file_name),t.data.variables_data){var a=JSON.parse(t.data.variables_data);for(var i in e.formTheme)a[i]&&(e.formTheme[i]=a[i])}if(t.data.loginrecord_data){var l=JSON.parse(t.data.loginrecord_data);for(var n in e.formLogin)l[n]&&(e.formLogin[n]=l[n])}}})),this.timer=setInterval((function(){h.get("/upload/isRancheruiExist").then((function(t){"empty"===t.data.message?e.rancherUiState="rancher-ui文件未上传":"rancherui"===t.data.message?e.rancherUiState="开源ui静态文件已上传":"pandarid"===t.data.message&&(e.rancherUiState="企业版ui静态文件已上传")}))}),3e3),this.modalNotify=this.$notify({title:"rancher-ui静态文件没有上传",duration:0})},methods:{handlePictureCardPreview:function(){this.dialogImageUrl=this.imageUrl,this.dialogVisible=!0},handleSuccess:function(e){"OK"===e.message&&(this.fileName=e.data.file_name,this.imageUrl="http://".concat(this.host,"/upload/public/static/uploadfile/").concat(e.data.file_name))},handleLoginBackGroundPictureCardPreview:function(){this.loginBackGroundDialogImageUrl=this.loginBackGroundImageUrl,this.loginBackGroundDialogVisible=!0},handleLoginBackGroundSuccess:function(e){"OK"===e.message&&(this.loginBackGroundFileName=e.data.loginbg_file_name,this.loginBackGroundImageUrl="http://".concat(this.host,"/upload/public/static/uploadfile/").concat(e.data.loginbg_file_name))},test:function(){var e=this;this.ws&&(this.ws.onclose=function(){console.log("Connection close !!!")},this.ws="");var t=window.location;this.ws=new WebSocket("ws://".concat(t.host,"/upload/test")),this.buildDisabled=!0,this.ws.onopen=function(){e.ws.send("build"),console.log("Connection open ...")},this.ws.onmessage=function(t){t.data&&("Failed build"!==t.data&&"Done build"!==t.data||(e.wsInstall.onclose=function(){console.log("Connection close !!!")},e.ws="",e.buildDisabled=!1))},this.ws.onclose=function(t){console.log(t),e.linkws="链接关闭"},this.startTimer=setInterval((function(){h.get("/upload/isDone").then((function(t){"done"===t.data.message?(e.loginfo="Done build",e.buildDisabled=!1,e.startTimer&&clearInterval(e.startTimer)):e.loginfo="Building 详情请看docker logs ${ContainerId}"}))}),1e4)},resetForm:function(){this.dynamicValidateForm.domains.forEach((function(e){e.name="",e.value=""}))},removeDomain:function(e){var t=this.dynamicValidateForm.domains.indexOf(e);-1!==t&&this.dynamicValidateForm.domains.splice(t,1)},addDomain:function(){this.dynamicValidateForm.domains.push({value:"",key:Date.now()})},clickHandle:function(){var e=this,t=this.dynamicValidateForm.domains.map((function(e){return{name:e.name,value:e.value}})),a={};for(var i in this.formTheme)this.formTheme[i]?a[i]=this.formTheme[i]:a[i]=this.formThemeDefault[i];h.post("/upload/save",{file_name:this.fileName,loginbg_file_name:this.loginBackGroundFileName,link_data:t.length>0&&t[0].name&&t[0].value?JSON.stringify(t):"",loginrecord_data:this.formLogin.name&&this.formLogin.value?JSON.stringify(this.formLogin):"",variables_data:JSON.stringify(a)}).then((function(t){"OK"===t.message?e.$message({message:"替换文件成功",type:"success"}):e.$message({message:"替换文件失败",type:"error"})}))},download:function(){"企业版ui静态文件已上传"===this.rancherUiState?window.open("http://".concat(this.host,"/upload/public/rancherui/pandaria-ui/dist/static/2.3-dev.tar.gz")):window.open("http://".concat(this.host,"/upload/public/rancherui/ui/dist/static/master-dev.tar.gz"))},handleDelete:function(){var e=this;h.get("/upload/DeleteDir").then((function(t){0===t.code&&"OK"===t.message&&(e.$message({message:"清空文件成功",type:"success"}),e.rancherInstallState="")}))},installNode:function(){var e=this;if("企业版ui静态文件已上传"===this.rancherUiState||"开源ui静态文件已上传"===this.rancherUiState){this.wsInstall="";var t=window.location;this.wsInstall=new WebSocket("ws://".concat(t.host,"/upload/NpmInstall")),this.wsInstall.onopen=function(){"企业版ui静态文件已上传"===e.rancherUiState?e.wsInstall.send("installfile"):e.wsInstall.send("osinstallfile")},this.wsInstall.onmessage=function(t){t&&t.data&&(e.rancherInstallState=t.data)}}}},watch:{rancherUiState:function(e){var t=this;if("企业版ui静态文件已上传"===e||"开源ui静态文件已上传"===e){this.modalNotify&&this.modalNotify.close();var a=window.location;this.wsInstall=new WebSocket("ws://".concat(a.host,"/upload/NpmInstall")),this.wsInstall.onopen=function(){"企业版ui静态文件已上传"===e?t.wsInstall.send("installfile"):t.wsInstall.send("osinstallfile")},this.wsInstall.onmessage=function(e){e&&e.data&&(t.rancherInstallState=e.data)}}else this.modalNotify&&this.modalNotify.close(),this.modalNotify=this.$notify({title:"rancher-ui静态文件没有上传",duration:0})}},beforeDestroy:function(){this.timer&&clearInterval(this.timer),this.startTimer&&clearInterval(this.startTimer)}},v=y,b=(a("3ccc"),a("2877")),x=Object(b["a"])(v,o,c,!1,null,"10bfd56b",null),w=x.exports,k={props:{msg:String},components:{PlugInPage:w}},C=k,_=(a("f303"),Object(b["a"])(C,r,s,!1,null,"2cc20efe",null)),T=_.exports,S={name:"app",components:{Main:T}},G=S,I=(a("034f"),Object(b["a"])(G,l,n,!1,null,null,null)),O=I.exports,D=(a("0fae"),"http://127.0.0.1:9091/upload/public/static/uploadfile/"),F="http://127.0.0.1:9091/upload/public/rancherui/ui/dist/static/master-dev.tar.gz",N="http://127.0.0.1:9091/upload/public/rancherui/pandaria-ui/dist/static/2.3-dev.tar.gz",U={picURL:D,rancherStaticURL:F,pandariaStaticURL:N};i["default"].config.productionTip=!1,i["default"].use(p.a),i["default"].prototype.GLOBAL=U,new i["default"]({render:function(e){return e(O)}}).$mount("#app")},"85ec":function(e,t,a){},9763:function(e,t,a){},f303:function(e,t,a){"use strict";var i=a("9763"),l=a.n(i);l.a}});
//# sourceMappingURL=app.f1394605.js.map