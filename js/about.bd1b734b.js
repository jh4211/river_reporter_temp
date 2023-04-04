"use strict";(self["webpackChunkvue_h5"]=self["webpackChunkvue_h5"]||[]).push([[443],{7634:function(e,o,n){n(7658),function(o,n){e.exports=n()}(0,(function(){function e(e){var l=[];return e.AMapUI&&l.push(o(e.AMapUI)),e.Loca&&l.push(n(e.Loca)),Promise.all(l)}function o(e){return new Promise((function(o,n){var c=[];if(e.plugins)for(var s=0;s<e.plugins.length;s+=1)-1==a.AMapUI.plugins.indexOf(e.plugins[s])&&c.push(e.plugins[s]);if(t.AMapUI===l.failed)n("前次请求 AMapUI 失败");else if(t.AMapUI===l.notload){t.AMapUI=l.loading,a.AMapUI.version=e.version||a.AMapUI.version,s=a.AMapUI.version;var u=document.body||document.head,p=document.createElement("script");p.type="text/javascript",p.src="https://webapi.amap.com/ui/"+s+"/main.js",p.onerror=function(e){t.AMapUI=l.failed,n("请求 AMapUI 失败")},p.onload=function(){if(t.AMapUI=l.loaded,c.length)window.AMapUI.loadUI(c,(function(){for(var e=0,n=c.length;e<n;e++){var l=c[e].split("/").slice(-1)[0];window.AMapUI[l]=arguments[e]}for(o();i.AMapUI.length;)i.AMapUI.splice(0,1)[0]()}));else for(o();i.AMapUI.length;)i.AMapUI.splice(0,1)[0]()},u.appendChild(p)}else t.AMapUI===l.loaded?e.version&&e.version!==a.AMapUI.version?n("不允许多个版本 AMapUI 混用"):c.length?window.AMapUI.loadUI(c,(function(){for(var e=0,n=c.length;e<n;e++){var l=c[e].split("/").slice(-1)[0];window.AMapUI[l]=arguments[e]}o()})):o():e.version&&e.version!==a.AMapUI.version?n("不允许多个版本 AMapUI 混用"):i.AMapUI.push((function(e){e?n(e):c.length?window.AMapUI.loadUI(c,(function(){for(var e=0,n=c.length;e<n;e++){var l=c[e].split("/").slice(-1)[0];window.AMapUI[l]=arguments[e]}o()})):o()}))}))}function n(e){return new Promise((function(o,n){if(t.Loca===l.failed)n("前次请求 Loca 失败");else if(t.Loca===l.notload){t.Loca=l.loading,a.Loca.version=e.version||a.Loca.version;var c=a.Loca.version,s=a.AMap.version.startsWith("2"),u=c.startsWith("2");if(s&&!u||!s&&u)n("JSAPI 与 Loca 版本不对应！！");else{s=a.key,u=document.body||document.head;var p=document.createElement("script");p.type="text/javascript",p.src="https://webapi.amap.com/loca?v="+c+"&key="+s,p.onerror=function(e){t.Loca=l.failed,n("请求 AMapUI 失败")},p.onload=function(){for(t.Loca=l.loaded,o();i.Loca.length;)i.Loca.splice(0,1)[0]()},u.appendChild(p)}}else t.Loca===l.loaded?e.version&&e.version!==a.Loca.version?n("不允许多个版本 Loca 混用"):o():e.version&&e.version!==a.Loca.version?n("不允许多个版本 Loca 混用"):i.Loca.push((function(e){e?n(e):n()}))}))}if(!window)throw Error("AMap JSAPI can only be used in Browser.");var l;(function(e){e.notload="notload",e.loading="loading",e.loaded="loaded",e.failed="failed"})(l||(l={}));var a={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},t={AMap:l.notload,AMapUI:l.notload,Loca:l.notload},i={AMap:[],AMapUI:[],Loca:[]},c=[],s=function(e){"function"==typeof e&&(t.AMap===l.loaded?e(window.AMap):c.push(e))};return{load:function(o){return new Promise((function(n,i){if(t.AMap==l.failed)i("");else if(t.AMap==l.notload){var u=o.key,p=o.version,d=o.plugins;u?(window.AMap&&"lbs.amap.com"!==location.host&&i("禁止多种API加载方式混用"),a.key=u,a.AMap.version=p||a.AMap.version,a.AMap.plugins=d||a.AMap.plugins,t.AMap=l.loading,p=document.body||document.head,window.___onAPILoaded=function(a){if(delete window.___onAPILoaded,a)t.AMap=l.failed,i(a);else for(t.AMap=l.loaded,e(o).then((function(){n(window.AMap)}))["catch"](i);c.length;)c.splice(0,1)[0]()},d=document.createElement("script"),d.type="text/javascript",d.src="https://webapi.amap.com/maps?callback=___onAPILoaded&v="+a.AMap.version+"&key="+u+"&plugin="+a.AMap.plugins.join(","),d.onerror=function(e){t.AMap=l.failed,i(e)},p.appendChild(d)):i("请填写key")}else if(t.AMap==l.loaded)if(o.key&&o.key!==a.key)i("多个不一致的 key");else if(o.version&&o.version!==a.AMap.version)i("不允许多个版本 JSAPI 混用");else{if(u=[],o.plugins)for(p=0;p<o.plugins.length;p+=1)-1==a.AMap.plugins.indexOf(o.plugins[p])&&u.push(o.plugins[p]);u.length?window.AMap.plugin(u,(function(){e(o).then((function(){n(window.AMap)}))["catch"](i)})):e(o).then((function(){n(window.AMap)}))["catch"](i)}else if(o.key&&o.key!==a.key)i("多个不一致的 key");else if(o.version&&o.version!==a.AMap.version)i("不允许多个版本 JSAPI 混用");else{var r=[];if(o.plugins)for(p=0;p<o.plugins.length;p+=1)-1==a.AMap.plugins.indexOf(o.plugins[p])&&r.push(o.plugins[p]);s((function(){r.length?window.AMap.plugin(r,(function(){e(o).then((function(){n(window.AMap)}))["catch"](i)})):e(o).then((function(){n(window.AMap)}))["catch"](i)}))}}))},reset:function(){delete window.AMap,delete window.AMapUI,delete window.Loca,a={key:"",AMap:{version:"1.4.15",plugins:[]},AMapUI:{version:"1.1",plugins:[]},Loca:{version:"1.3.2"}},t={AMap:l.notload,AMapUI:l.notload,Loca:l.notload},i={AMap:[],AMapUI:[],Loca:[]}}}}))},89:function(e,o){o.Z=(e,o)=>{const n=e.__vccOpts||e;for(const[l,a]of o)n[l]=a;return n}},650:function(e,o,n){n.r(o),n.d(o,{default:function(){return ue}});var l=n(3396),a=n(4870),t=n(7387),i=n.n(t),c=n(4161);const s={class:"popup-example-block"},u=(0,l._)("thead",null,[(0,l._)("tr",null," 关卡列表 ")],-1),p=(0,l.Uk)("1"),d={class:"popup-example-block"},r=(0,l.Uk)("2"),m={class:"popup-example-block"},f=(0,l.Uk)("3"),w={class:"popup-example-block"},v=(0,l.Uk)("4"),_={class:"popup-example-block"},h=(0,l.Uk)("5"),W={class:"popup-example-block"},g=(0,l.Uk)("6"),k={class:"popup-example-block"},b=(0,l.Uk)("7"),A={class:"popup-example-block"},M=(0,l.Uk)("8"),U={class:"popup-example-block"},x=(0,l.Uk)("9"),I={class:"popup-example-block"},y=(0,l.Uk)("10"),L={class:"popup-example-block"},P=(0,l.Uk)("11"),z={class:"popup-example-block"},C=(0,l.Uk)("12"),H={class:"popup-example-block"};var S={setup(e){const o=(0,a.iH)(!1),n=(0,a.iH)(!1),t=(0,a.iH)(!1),i=(0,a.iH)(!1),c=(0,a.iH)(!1),S=(0,a.iH)(!1),j=(0,a.iH)(!1),E=(0,a.iH)(!1),B=(0,a.iH)(!1),O=(0,a.iH)(!1),T=(0,a.iH)(!1),J=(0,a.iH)(!1),D=()=>{o.value=!0},q=()=>{n.value=!0},V=()=>{t.value=!0},Y=()=>{i.value=!0},N=()=>{c.value=!0},X=()=>{S.value=!0},F=()=>{j.value=!0},G=()=>{E.value=!0},Q=()=>{B.value=!0},Z=()=>{O.value=!0},R=()=>{T.value=!0},$=()=>{J.value=!0};return(e,a)=>{const K=(0,l.up)("van-icon"),ee=(0,l.up)("font"),oe=(0,l.up)("van-grid-item"),ne=(0,l.up)("van-grid"),le=(0,l.up)("van-popup"),ae=(0,l.up)("var-table");return(0,l.wg)(),(0,l.iD)("div",s,[(0,l.Wm)(ae,{class:"table_inside"},{default:(0,l.w5)((()=>[u,(0,l._)("tbody",null,[(0,l.Wm)(ne,{clickable:"","column-num":3},{default:(0,l.w5)((()=>[(0,l.Wm)(oe,{"is-link":"",onClick:D},{default:(0,l.w5)((()=>[(0,l.Wm)(K,{name:"https://cdn-icons-png.flaticon.com/512/2559/2559764.png",size:"45"}),(0,l.Wm)(ee,{color:"#2c3e50",size:"2"},{default:(0,l.w5)((()=>[p])),_:1})])),_:1}),(0,l.Wm)(le,{show:o.value,"onUpdate:show":a[0]||(a[0]=e=>o.value=e),"bind:close":"closePopup"},{default:(0,l.w5)((()=>[(0,l._)("div",d,[(0,l.Wm)(ne,{clickable:"","column-num":3},{default:(0,l.w5)((()=>[(0,l.Wm)(oe,{icon:"search",text:"线索",to:"/pipe1"}),(0,l.Wm)(oe,{icon:"location-o",text:"导航",url:"https://router.map.qq.com/short?l=2a3d7f4e0815ea6537818ae08e242b28&tempSource=pcMap"}),(0,l.Wm)(oe,{icon:"passed",text:"打卡",url:"https://www.cdhtgx.com/namespaces/1/yet_another_workflow/flows/1445/journeys/new"})])),_:1})])])),_:1},8,["show"]),(0,l.Wm)(oe,{"is-link":"",onClick:q},{default:(0,l.w5)((()=>[(0,l.Wm)(K,{name:"https://cdn-icons-png.flaticon.com/512/2559/2559764.png",size:"45"}),(0,l.Wm)(ee,{color:"#2c3e50",size:"2"},{default:(0,l.w5)((()=>[r])),_:1})])),_:1}),(0,l.Wm)(le,{show:n.value,"onUpdate:show":a[1]||(a[1]=e=>n.value=e),"bind:close":"closePopup"},{default:(0,l.w5)((()=>[(0,l._)("div",m,[(0,l.Wm)(ne,{clickable:"","column-num":3},{default:(0,l.w5)((()=>[(0,l.Wm)(oe,{icon:"search",text:"线索",to:"/pipe2"}),(0,l.Wm)(oe,{icon:"location-o",text:"导航",url:"https://router.map.qq.com/short?l=bb3d63c25e0e1ef05aa7a8a96aec61e3&tempSource=pcMap"}),(0,l.Wm)(oe,{icon:"passed",text:"打卡",url:"https://www.cdhtgx.com/namespaces/1/yet_another_workflow/flows/1447/journeys/new"})])),_:1})])])),_:1},8,["show"]),(0,l.Wm)(oe,{"is-link":"",onClick:V},{default:(0,l.w5)((()=>[(0,l.Wm)(K,{name:"https://cdn-icons-png.flaticon.com/512/2559/2559764.png",size:"45"}),(0,l.Wm)(ee,{color:"#2c3e50",size:"2"},{default:(0,l.w5)((()=>[f])),_:1})])),_:1}),(0,l.Wm)(le,{show:t.value,"onUpdate:show":a[2]||(a[2]=e=>t.value=e),"bind:close":"closePopup"},{default:(0,l.w5)((()=>[(0,l._)("div",w,[(0,l.Wm)(ne,{clickable:"","column-num":3},{default:(0,l.w5)((()=>[(0,l.Wm)(oe,{icon:"search",text:"线索",url:""}),(0,l.Wm)(oe,{icon:"location-o",text:"导航",url:""}),(0,l.Wm)(oe,{icon:"passed",text:"打卡",url:""})])),_:1})])])),_:1},8,["show"]),(0,l.Wm)(oe,{"is-link":"",onClick:Y},{default:(0,l.w5)((()=>[(0,l.Wm)(K,{name:"https://cdn-icons-png.flaticon.com/512/2559/2559764.png",size:"45"}),(0,l.Wm)(ee,{color:"#2c3e50",size:"2"},{default:(0,l.w5)((()=>[v])),_:1})])),_:1}),(0,l.Wm)(le,{show:i.value,"onUpdate:show":a[3]||(a[3]=e=>i.value=e),"bind:close":"closePopup"},{default:(0,l.w5)((()=>[(0,l._)("div",_,[(0,l.Wm)(ne,{clickable:"","column-num":3},{default:(0,l.w5)((()=>[(0,l.Wm)(oe,{icon:"search",text:"线索",url:""}),(0,l.Wm)(oe,{icon:"location-o",text:"导航",url:""}),(0,l.Wm)(oe,{icon:"passed",text:"打卡",url:""})])),_:1})])])),_:1},8,["show"]),(0,l.Wm)(oe,{"is-link":"",onClick:N},{default:(0,l.w5)((()=>[(0,l.Wm)(K,{name:"https://cdn-icons-png.flaticon.com/512/2559/2559764.png",size:"45"}),(0,l.Wm)(ee,{color:"#2c3e50",size:"2"},{default:(0,l.w5)((()=>[h])),_:1})])),_:1}),(0,l.Wm)(le,{show:c.value,"onUpdate:show":a[4]||(a[4]=e=>c.value=e),"bind:close":"closePopup"},{default:(0,l.w5)((()=>[(0,l._)("div",W,[(0,l.Wm)(ne,{clickable:"","column-num":3},{default:(0,l.w5)((()=>[(0,l.Wm)(oe,{icon:"search",text:"线索",url:""}),(0,l.Wm)(oe,{icon:"location-o",text:"导航",url:""}),(0,l.Wm)(oe,{icon:"passed",text:"打卡",url:""})])),_:1})])])),_:1},8,["show"]),(0,l.Wm)(oe,{"is-link":"",onClick:X},{default:(0,l.w5)((()=>[(0,l.Wm)(K,{name:"https://cdn-icons-png.flaticon.com/512/2559/2559764.png",size:"45"}),(0,l.Wm)(ee,{color:"#2c3e50",size:"2"},{default:(0,l.w5)((()=>[g])),_:1})])),_:1}),(0,l.Wm)(le,{show:S.value,"onUpdate:show":a[5]||(a[5]=e=>S.value=e),"bind:close":"closePopup"},{default:(0,l.w5)((()=>[(0,l._)("div",k,[(0,l.Wm)(ne,{clickable:"","column-num":3},{default:(0,l.w5)((()=>[(0,l.Wm)(oe,{icon:"search",text:"线索",url:""}),(0,l.Wm)(oe,{icon:"location-o",text:"导航",url:""}),(0,l.Wm)(oe,{icon:"passed",text:"打卡",url:""})])),_:1})])])),_:1},8,["show"]),(0,l.Wm)(oe,{"is-link":"",onClick:F},{default:(0,l.w5)((()=>[(0,l.Wm)(K,{name:"https://cdn-icons-png.flaticon.com/512/2559/2559764.png",size:"45"}),(0,l.Wm)(ee,{color:"#2c3e50",size:"2"},{default:(0,l.w5)((()=>[b])),_:1})])),_:1}),(0,l.Wm)(le,{show:j.value,"onUpdate:show":a[6]||(a[6]=e=>j.value=e),"bind:close":"closePopup"},{default:(0,l.w5)((()=>[(0,l._)("div",A,[(0,l.Wm)(ne,{clickable:"","column-num":3},{default:(0,l.w5)((()=>[(0,l.Wm)(oe,{icon:"search",text:"线索",url:""}),(0,l.Wm)(oe,{icon:"location-o",text:"导航",url:""}),(0,l.Wm)(oe,{icon:"passed",text:"打卡",url:""})])),_:1})])])),_:1},8,["show"]),(0,l.Wm)(oe,{"is-link":"",onClick:G},{default:(0,l.w5)((()=>[(0,l.Wm)(K,{name:"https://cdn-icons-png.flaticon.com/512/2559/2559764.png",size:"45"}),(0,l.Wm)(ee,{color:"#2c3e50",size:"2"},{default:(0,l.w5)((()=>[M])),_:1})])),_:1}),(0,l.Wm)(le,{show:E.value,"onUpdate:show":a[7]||(a[7]=e=>E.value=e),"bind:close":"closePopup"},{default:(0,l.w5)((()=>[(0,l._)("div",U,[(0,l.Wm)(ne,{clickable:"","column-num":3},{default:(0,l.w5)((()=>[(0,l.Wm)(oe,{icon:"search",text:"线索",url:""}),(0,l.Wm)(oe,{icon:"location-o",text:"导航",url:""}),(0,l.Wm)(oe,{icon:"passed",text:"打卡",url:""})])),_:1})])])),_:1},8,["show"]),(0,l.Wm)(oe,{"is-link":"",onClick:Q},{default:(0,l.w5)((()=>[(0,l.Wm)(K,{name:"https://cdn-icons-png.flaticon.com/512/2559/2559764.png",size:"45"}),(0,l.Wm)(ee,{color:"#2c3e50",size:"2"},{default:(0,l.w5)((()=>[x])),_:1})])),_:1}),(0,l.Wm)(le,{show:B.value,"onUpdate:show":a[8]||(a[8]=e=>B.value=e),"bind:close":"closePopup"},{default:(0,l.w5)((()=>[(0,l._)("div",I,[(0,l.Wm)(ne,{clickable:"","column-num":3},{default:(0,l.w5)((()=>[(0,l.Wm)(oe,{icon:"search",text:"线索",url:""}),(0,l.Wm)(oe,{icon:"location-o",text:"导航",url:""}),(0,l.Wm)(oe,{icon:"passed",text:"打卡",url:""})])),_:1})])])),_:1},8,["show"]),(0,l.Wm)(oe,{"is-link":"",onClick:Z},{default:(0,l.w5)((()=>[(0,l.Wm)(K,{name:"https://cdn-icons-png.flaticon.com/512/2559/2559764.png",size:"45"}),(0,l.Wm)(ee,{color:"#2c3e50",size:"2"},{default:(0,l.w5)((()=>[y])),_:1})])),_:1}),(0,l.Wm)(le,{show:O.value,"onUpdate:show":a[9]||(a[9]=e=>O.value=e),"bind:close":"closePopup"},{default:(0,l.w5)((()=>[(0,l._)("div",L,[(0,l.Wm)(ne,{clickable:"","column-num":3},{default:(0,l.w5)((()=>[(0,l.Wm)(oe,{icon:"search",text:"线索",url:""}),(0,l.Wm)(oe,{icon:"location-o",text:"导航",url:""}),(0,l.Wm)(oe,{icon:"passed",text:"打卡",url:""})])),_:1})])])),_:1},8,["show"]),(0,l.Wm)(oe,{"is-link":"",onClick:R},{default:(0,l.w5)((()=>[(0,l.Wm)(K,{name:"https://cdn-icons-png.flaticon.com/512/2559/2559764.png",size:"45"}),(0,l.Wm)(ee,{color:"#2c3e50",size:"2"},{default:(0,l.w5)((()=>[P])),_:1})])),_:1}),(0,l.Wm)(le,{show:T.value,"onUpdate:show":a[10]||(a[10]=e=>T.value=e),"bind:close":"closePopup"},{default:(0,l.w5)((()=>[(0,l._)("div",z,[(0,l.Wm)(ne,{clickable:"","column-num":3},{default:(0,l.w5)((()=>[(0,l.Wm)(oe,{icon:"search",text:"线索",url:""}),(0,l.Wm)(oe,{icon:"location-o",text:"导航",url:""}),(0,l.Wm)(oe,{icon:"passed",text:"打卡",url:""})])),_:1})])])),_:1},8,["show"]),(0,l.Wm)(oe,{"is-link":"",onClick:$},{default:(0,l.w5)((()=>[(0,l.Wm)(K,{name:"https://cdn-icons-png.flaticon.com/512/2559/2559764.png",size:"45"}),(0,l.Wm)(ee,{color:"#2c3e50",size:"2"},{default:(0,l.w5)((()=>[C])),_:1})])),_:1}),(0,l.Wm)(le,{show:J.value,"onUpdate:show":a[11]||(a[11]=e=>J.value=e),"bind:close":"closePopup"},{default:(0,l.w5)((()=>[(0,l._)("div",H,[(0,l.Wm)(ne,{clickable:"","column-num":3},{default:(0,l.w5)((()=>[(0,l.Wm)(oe,{icon:"search",text:"线索",url:""}),(0,l.Wm)(oe,{icon:"location-o",text:"导航",url:""}),(0,l.Wm)(oe,{icon:"passed",text:"打卡",url:""})])),_:1})])])),_:1},8,["show"])])),_:1})])])),_:1})])}}};const j=S;var E=j,B=n(6561),O=n.p+"img/one3.9463677a.png",T=n.p+"img/one4.8299ff32.png";const J=(0,l._)("header",null,null,-1),D={id:"building"},q={id:"gifbg"},V=(0,l.uE)('<div class="infosquare"><div class="avatar"><img src="" id="avatar_img"></div><div class="userinfo1" id="userinfo1">系统用户</div><div class="userinfo2">160 积分</div></div>',1),Y={class:"rightside"},N={class:"rightcomb"},X={class:"popup-example-block"},F=(0,l._)("thead",null,[(0,l._)("tr",null," 今日任务 ")],-1),G=(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",null,"开始巡查"),(0,l._)("td"),(0,l._)("td",null,"1 / 1")]),(0,l._)("tr",null,[(0,l._)("td",null,"排口闯关"),(0,l._)("td"),(0,l._)("td",null,"0 / 12")]),(0,l._)("tr",null,[(0,l._)("td",null,"问题上报"),(0,l._)("td"),(0,l._)("td",null,"0 / 10")]),(0,l._)("tr",null,[(0,l._)("td",null,"捡拾垃圾"),(0,l._)("td"),(0,l._)("td",null,"0 / 7")])],-1),Q=(0,l._)("div",{class:"righttitle"},"任务",-1),Z={class:"rightcomb"},R={class:"popup-example-block"},$=(0,l._)("thead",null,[(0,l._)("tr",null," 积分排名 ")],-1),K=(0,l._)("tbody",null,[(0,l._)("tr",null,[(0,l._)("td",null,"1"),(0,l._)("td",null,"系统用户"),(0,l._)("td",null,"160")]),(0,l._)("tr",null,[(0,l._)("td",null,"2"),(0,l._)("td"),(0,l._)("td")]),(0,l._)("tr",null,[(0,l._)("td",null,"3"),(0,l._)("td"),(0,l._)("td")]),(0,l._)("tr",null,[(0,l._)("td",null,"4"),(0,l._)("td"),(0,l._)("td")]),(0,l._)("tr",null,[(0,l._)("td",null,"5"),(0,l._)("td"),(0,l._)("td")])],-1),ee=(0,l._)("div",{class:"righttitle"},"排名",-1),oe={class:"leftbutton1"},ne=(0,l.Uk)("闯关打卡"),le={class:"leftbutton2"},ae=(0,l.Uk)("结束巡查"),te={class:"leftbutton3"},ie=(0,l.Uk)("问题上报");var ce={setup(e){const o=(0,l.FN)()?.appContext.config.globalProperties.$userId,n=(0,l.FN)()?.appContext.config.globalProperties.$hostSite;console.log("ABOUT userId1",o);const t=n+"/api/v4/users/"+o,s=(0,a.iH)(!1),u=(0,a.iH)(!1),p=(0,a.iH)(!1);let d=c.Z.create({headers:{Authorization:"1818e888554137be28504ea8619b6dd853009b93177e2e78c87922cb5c0d0591:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lc3BhY2VfaWQiOjE0fQ.XcP7Q5FLXholrXoVIyVeV3s0SPY_ILNUrYOBpOIDP0w"}});const r=async()=>{const e=await d.get(t);return e};return r().then((e=>{var o=e.data.nickname,n=e.data.headimgurl;i()("#userinfo1").html(o),i()("#avatar_img").attr("src",n)})),(e,o)=>{const n=(0,l.up)("var-icon"),t=(0,l.up)("var-button"),i=(0,l.up)("var-table"),c=(0,l.up)("var-popup"),d=(0,l.up)("font"),r=(0,l.up)("van-button"),m=(0,l.up)("var-image");return(0,l.wg)(),(0,l.iD)("body",null,[J,(0,l._)("div",D,[(0,l._)("div",q,[V,(0,l._)("div",Y,[(0,l._)("div",N,[(0,l.Wm)(t,{round:"",color:"#ffffffcc",onClick:o[0]||(o[0]=e=>s.value=!0)},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{name:"format-list-checkbox",size:26})])),_:1}),(0,l.Wm)(c,{show:s.value,"onUpdate:show":o[1]||(o[1]=e=>s.value=e)},{default:(0,l.w5)((()=>[(0,l._)("div",X,[(0,l.Wm)(i,{class:"table_inside"},{default:(0,l.w5)((()=>[F,G])),_:1})])])),_:1},8,["show"]),Q]),(0,l._)("div",Z,[(0,l.Wm)(t,{round:"",color:"#ffffffcc",onClick:o[2]||(o[2]=e=>u.value=!0)},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{name:"star",size:26})])),_:1}),(0,l.Wm)(c,{show:u.value,"onUpdate:show":o[3]||(o[3]=e=>u.value=e)},{default:(0,l.w5)((()=>[(0,l._)("div",R,[(0,l.Wm)(i,{class:"table_inside"},{default:(0,l.w5)((()=>[$,K])),_:1})])])),_:1},8,["show"]),ee])]),(0,l._)("div",oe,[(0,l.Wm)(r,{class:"mainbutton",color:"#ffffffcc",onClick:o[4]||(o[4]=e=>p.value=!0)},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{color:"#2c3e50"},{default:(0,l.w5)((()=>[ne])),_:1})])),_:1}),(0,l.Wm)(m,{src:(0,a.SU)(O)},null,8,["src"]),(0,l.Wm)(c,{show:p.value,"onUpdate:show":o[5]||(o[5]=e=>p.value=e)},{default:(0,l.w5)((()=>[(0,l.Wm)(E)])),_:1},8,["show"])]),(0,l._)("div",le,[(0,l.Wm)(r,{url:"https://skylarkly.com/namespaces/14/yet_another_workflow/flows/2768/journeys/new",class:"mainbutton",color:"#ffffffcc"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{color:"#2c3e50"},{default:(0,l.w5)((()=>[ae])),_:1})])),_:1}),(0,l.Wm)(m,{src:(0,a.SU)(B)},null,8,["src"])]),(0,l._)("div",te,[(0,l.Wm)(r,{url:"https://skylarkly.com/namespaces/14/yet_another_workflow/flows/2770/journeys/new",class:"mainbutton",color:"#ffffffcc"},{default:(0,l.w5)((()=>[(0,l.Wm)(d,{color:"#2c3e50"},{default:(0,l.w5)((()=>[ie])),_:1})])),_:1}),(0,l.Wm)(m,{src:(0,a.SU)(T)},null,8,["src"])])])])])}}};const se=ce;var ue=se},3083:function(e,o,n){n.r(o),n.d(o,{default:function(){return r}});n(7658);var l=n(3396),a=n(7634),t=n.n(a);const i=e=>((0,l.dD)("data-v-3206b461"),e=e(),(0,l.Cn)(),e),c=i((()=>(0,l._)("div",{id:"container"},null,-1))),s=i((()=>(0,l._)("div",{class:"info"},[(0,l._)("h4",{id:"status"}),(0,l._)("hr"),(0,l._)("p",{id:"result"}),(0,l._)("hr"),(0,l._)("p",null,"由于众多浏览器已不再支持非安全域的定位请求，为保位成功率和精度，请升级您的站点到HTTPS。")],-1)));var u={setup(e){function o(){t().load({key:"3e1217f80b69910259f04c3a071bbd98",version:"2.0"}).then((e=>{const o=new e.Map("container",{viewMode:"2D",zoom:10,center:[104.374926,30.310678]});function n(e){document.getElementById("status").innerHTML="定位成功";var o=[];o.push("定位结果："+e.position),o.push("定位类别："+e.location_type),e.accuracy&&o.push("精度："+e.accuracy+" 米"),o.push("是否经过偏移："+(e.isConverted?"是":"否")),document.getElementById("result").innerHTML=o.join("<br>"),console.log("result",o)}function l(e){document.getElementById("status").innerHTML="定位失败",document.getElementById("result").innerHTML="失败原因排查信息:"+e.message}e.plugin("AMap.Geolocation",(function(){var a=new e.Geolocation({enableHighAccuracy:!0,timeout:1e4,buttonPosition:"RB",buttonOffset:new e.Pixel(10,20),zoomToAccuracy:!0});o.addControl(a),a.getCurrentPosition((function(e,o){"complete"==e?n(o):l(o)}))})),e.plugin(["AMap.ToolBar","AMap.Scale","AMap.HawkEye"],(function(){o.addControl(new e.HawkEye),o.addControl(new e.Scale)}))})).catch((e=>{console.log(e)}))}return o(),(e,o)=>((0,l.wg)(),(0,l.iD)(l.HY,null,[c,s],64))}},p=n(89);const d=(0,p.Z)(u,[["__scopeId","data-v-3206b461"]]);var r=d},7830:function(e,o,n){n.r(o),n.d(o,{default:function(){return s}});var l=n(3396),a=n(4870),t=n.p+"img/pipe1.99499502.jpg",i={setup(e){return(e,o)=>{const n=(0,l.up)("var-image");return(0,l.wg)(),(0,l.j4)(n,{src:(0,a.SU)(t)},null,8,["src"])}}};const c=i;var s=c},9206:function(e,o,n){n.r(o),n.d(o,{default:function(){return s}});var l=n(3396),a=n(4870),t=n.p+"img/pipe2.bd2714dd.jpg",i={setup(e){return(e,o)=>{const n=(0,l.up)("var-image");return(0,l.wg)(),(0,l.j4)(n,{src:(0,a.SU)(t)},null,8,["src"])}}};const c=i;var s=c}}]);