(function(){"use strict";var e={2447:function(e,t,n){n(765);var o=n(9545),a=(n(4165),n(3649)),r=(n(9599),n(5630)),i=(n(5708),n(3042)),l=(n(2234),n(857)),s=(n(9105),n(2672)),u=(n(9968),n(9030)),c=(n(3533),n(2727)),p=(n(6159),n(391)),d=(n(2470),n(1781)),f=n(9242),m=n(3396);const g=["src"];var v={setup(e){function t(){var e=document.createElement("audio");e.setAttribute("id","audio"),e.setAttribute("autoplay","autoplay"),e.setAttribute("loop","loop"),document.body.appendChild(e),e.load(),e.play(),e.pause(),document.addEventListener("WeixinJSBridgeReady",(function(){document.getElementById("audio").play()}),!1)}return window.onload=function(){t()},document.body.removeChild(document.getElementById("Loading")),(e,t)=>{const o=(0,m.up)("router-view");return(0,m.wg)(),(0,m.iD)(m.HY,null,[(0,m._)("audio",{id:"audio",src:n(3389),autoplay:"autoplay",loop:"loop"},null,8,g),(0,m.Wm)(o)],64)}}};const h=v;var b=h,_=n(2483),w=(n(7658),n(4870)),k=n(6561),y=n(7387),I=n.n(y),U=n(4161),x=n(4908),D=n(6907),P=n(2814);const W=(0,m._)("header",null,null,-1),S={id:"building"},F=(0,m.uE)('<div class="infosquare"><div class="avatar"><img src="" id="avatar_img"></div><div class="userinfo1" id="userinfo1">系统用户</div><div class="userinfo2" id="userinfo2">本月积分:0</div></div>',1),C={class:"rightside"},$={class:"rightcomb"},O={class:"popup-example-block"},E=(0,m.Uk)("玩法说明"),z=(0,m._)("div",{class:"righttitle"},"帮助",-1),N={class:"rightcomb"},Z={class:"popup-example-block"},j=(0,m.Uk)("积分排名"),M=(0,m._)("div",{class:"righttitle"},"排名",-1),A={class:"rightcomb"},T={class:"popup-example-block"},H=(0,m.Uk)("通知公告"),R=(0,m._)("div",{class:"righttitle"},"公告",-1),B={class:"rightcomb"},L=(0,m._)("div",{class:"righttitle"},"社区",-1),q={class:"leftbutton2"},J=(0,m.Uk)("开始巡查");var Y={setup(e){const t=(0,m.FN)()?.appContext.config.globalProperties.$userId,n=(0,m.FN)()?.appContext.config.globalProperties.$hostSite,o=(0,m.FN)()?.appContext.config.globalProperties.$slpToken,a=(0,m.FN)()?.appContext.config.globalProperties.$formId,r=(0,m.FN)()?.appContext.config.globalProperties.$formFieldId,i=(0,m.FN)()?.appContext.config.globalProperties.$MonthlyFormId,l=(0,m.FN)()?.appContext.config.globalProperties.$MonthlyFormFieldId,s=(0,_.tv)();function u(){let e=new Date,t=e.getFullYear(),n=e.getMonth()+1;return n<10&&(n=`0${n}`),`${t}${n}`}var c=u();const p=n+"/api/v4/users/"+t,d=n+"/api/v4/forms/"+a+"/responses/search.json?page=1&per_page=1&query%5B"+r.userId+"%5D="+t,f=(0,w.iH)(!1),g=(0,w.iH)(!1),v=(0,w.iH)(!1);Date.prototype.Format=function(e){var t={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),S:this.getMilliseconds()};for(var n in/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),t)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1==RegExp.$1.length?t[n]:("00"+t[n]).substr((""+t[n]).length)));return e};let h=U.Z.create({headers:{Authorization:o}});const b=async()=>{const e=await h.get(p);return e};b().then((e=>{var t=e.data.nickname,n=e.data.headimgurl;I()("#userinfo1").html(t),I()("#avatar_img").attr("src",n)}));const y=async()=>{const e=n+"/api/v4/forms/"+i+"/responses/search.json?page=1&per_page=1&query%5B"+l.userID+"%5D="+t+"&query%5B"+l.month+"%5D="+c,o=await h.get(e);return o};y().then((e=>{var t=0;console.log("GetData3 res",e),e.data.length>0&&(t=e.data[0].mapped_values.points.value[0]),I()("#userinfo2").html("本月积分:"+t)}));const Y=async()=>{const e=await h.get(d);return e};function V(){let e=new Date,t=e.getFullYear(),n=e.getMonth();return 0==n&&(t-=1,n=12),n<10&&(n=`0${n}`),`${t}${n}`}Y().then((e=>{if(console.log("GetData2 res",e),e.data.length>0){var n=e.data[0].mapped_values.starttime.text_value[0],o=e.data[0].mapped_values.state.text_value[0],a=e.data[0].mapped_values.roundID.text_value[0],r=(new Date).Format("yyyy-MM-dd")+" 00:00:00";n>=r&&"进行中"==o&&(alert("您在今日有未完成的冒险，请继续加油哦！如果巡河结束请记得点击“结束巡查”哦~"),s.push({path:"/about",query:{user:t,roundID:a}}))}}));var G=V();const K=async()=>{const e=n+"/api/v4/forms/"+i+"/responses/search.json?page=1&per_page=100&query%5B"+l.month+"%5D="+c,t=await h.get(e);return t};var Q=new Array;K().then((e=>{var n;for(n in e.data)Q.push({userId:parseInt(e.data[n].mapped_values.userID.value[0]),nickname:e.data[n].mapped_values.nickname.value[0],point:parseInt(e.data[n].mapped_values.points.value[0])});Q.sort((function(e,t){return e.point===t.point?e.userId-t.userId:t.point-e.point}));var o="未上榜";for(var a in Q)if(t==Q[a].userId){o=parseInt(a)+1;break}console.log("myRank1",o),sessionStorage.setItem("myRank1",String(o));while(Q.length<100)Q.push({userId:-1,nickname:"虚位以待",point:null});sessionStorage.setItem("pointData1",JSON.stringify(Q))}));const X=async()=>{const e=n+"/api/v4/forms/"+i+"/responses/search.json?page=1&per_page=100&query%5B"+l.month+"%5D="+G,t=await h.get(e);return t};var ee=new Array;function te(){window.location.href="http://gov.52gl.cn/"}return X().then((e=>{var n;for(n in e.data)ee.push({userId:parseInt(e.data[n].mapped_values.userID.value[0]),nickname:e.data[n].mapped_values.nickname.value[0],point:parseInt(e.data[n].mapped_values.points.value[0])});ee.sort((function(e,t){return e.point===t.point?e.userId-t.userId:t.point-e.point})),console.log("userId",t),console.log("pointData2",ee);var o="未上榜";for(var a in ee)if(t==ee[a].userId){o=parseInt(a)+1;break}console.log("myRank2",o),sessionStorage.setItem("myRank2",String(o));while(ee.length<100)ee.push({userId:-1,nickname:"虚位以待",point:null});sessionStorage.setItem("pointData2",JSON.stringify(ee))})),(e,t)=>{const n=(0,m.up)("var-icon"),o=(0,m.up)("var-button"),a=(0,m.up)("popup-block-title"),r=(0,m.up)("var-popup"),i=(0,m.up)("font"),l=(0,m.up)("van-button"),s=(0,m.up)("var-image");return(0,m.wg)(),(0,m.iD)("body",null,[W,(0,m._)("div",S,[F,(0,m._)("div",C,[(0,m._)("div",$,[(0,m.Wm)(o,{round:"",color:"#ffffffcc",onClick:t[0]||(t[0]=e=>f.value=!0)},{default:(0,m.w5)((()=>[(0,m.Wm)(n,{name:"help-circle-outline",size:26})])),_:1}),(0,m.Wm)(r,{show:f.value,"onUpdate:show":t[1]||(t[1]=e=>f.value=e)},{default:(0,m.w5)((()=>[(0,m._)("div",O,[(0,m.Wm)(a,null,{default:(0,m.w5)((()=>[E])),_:1}),(0,m.Wm)(P.Z)])])),_:1},8,["show"]),z]),(0,m._)("div",N,[(0,m.Wm)(o,{round:"",color:"#ffffffcc",onClick:t[2]||(t[2]=e=>v.value=!0)},{default:(0,m.w5)((()=>[(0,m.Wm)(n,{name:"star",size:26})])),_:1}),(0,m.Wm)(r,{show:v.value,"onUpdate:show":t[3]||(t[3]=e=>v.value=e)},{default:(0,m.w5)((()=>[(0,m._)("div",Z,[(0,m.Wm)(a,null,{default:(0,m.w5)((()=>[j])),_:1}),(0,m.Wm)(x.Z)])])),_:1},8,["show"]),M]),(0,m._)("div",A,[(0,m.Wm)(o,{round:"",color:"#ffffffcc",onClick:t[4]||(t[4]=e=>g.value=!0)},{default:(0,m.w5)((()=>[(0,m.Wm)(n,{name:"information-outline",size:26})])),_:1}),(0,m.Wm)(r,{show:g.value,"onUpdate:show":t[5]||(t[5]=e=>g.value=e)},{default:(0,m.w5)((()=>[(0,m._)("div",T,[(0,m.Wm)(a,null,{default:(0,m.w5)((()=>[H])),_:1}),(0,m.Wm)(D.Z)])])),_:1},8,["show"]),R]),(0,m._)("div",B,[(0,m.Wm)(o,{round:"",color:"#ffffffcc",onClick:te},{default:(0,m.w5)((()=>[(0,m.Wm)(n,{name:"home",size:26})])),_:1}),L])]),(0,m._)("div",q,[(0,m.Wm)(l,{to:"/loctry?backurl=home&roundID=",class:"mainbutton",id:"startbutton",color:"#ffffffcc"},{default:(0,m.w5)((()=>[(0,m.Wm)(i,{color:"#2c3e50"},{default:(0,m.w5)((()=>[J])),_:1})])),_:1}),(0,m.Wm)(s,{src:(0,w.SU)(k)},null,8,["src"])])])])}}};const V=Y;var G=V;const K=[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:()=>n.e(443).then(n.bind(n,7038))},{path:"/pipe1",name:"pipe1",component:()=>n.e(443).then(n.bind(n,7830))},{path:"/pipe2",name:"pipe2",component:()=>n.e(443).then(n.bind(n,9206))},{path:"/loctry",name:"loctry",component:()=>n.e(443).then(n.bind(n,652))},{path:"/loctry2",name:"loctry2",component:()=>n.e(443).then(n.bind(n,3668))},{path:"/stagereport",name:"stagereport",component:()=>n.e(443).then(n.bind(n,1545))},{path:"/stagereportsuc",name:"stagereportsuc",component:()=>n.e(443).then(n.bind(n,1547))},{path:"/getloctool",name:"getloctool",component:()=>n.e(443).then(n.bind(n,8478))},{path:"/pipepic",name:"pipepic",component:()=>n.e(443).then(n.bind(n,5507))}],Q=(0,_.p7)({history:(0,_.r5)(),routes:K});var X=Q,ee=n(65),te=(0,ee.MT)({state:{},getters:{},mutations:{},actions:{},modules:{}}),ne=n(3795);n(8785);const oe=(0,f.ri)(b);oe.use(te).use(X).use(ne.ZPm).use(o.ZP).use(a.ZP).use(r.ZP).use(i.ZP).use(l.ZP).use(s.ZP).use(u.ZP).use(c.ZP).use(p.ZP).use(d.ZP).mount("#app"),oe.config.globalProperties.$userId=window.location.hash.split("&")[0].split("=")[1],oe.config.globalProperties.$hostSite="https://www.cdhtgx.com",oe.config.globalProperties.$formId=719,oe.config.globalProperties.$stageFlowId=1443,oe.config.globalProperties.$pointsFormId=720,oe.config.globalProperties.$MonthlyFormId=728,oe.config.globalProperties.$slpToken="5b94717c9598b4d5134b8f27010c603aa5f0ffef4025b9c2d0090300a50d19f2:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lc3BhY2VfaWQiOjF9.n1Z5bDjw_D5ztkzyISDUuYgGffws8ZIvsC7fx2kbIHE",oe.config.globalProperties.$formFieldId={roundID:20785,userId:20786,startTime:20787,startLoc:20788,state:20791,endTime:20789,endLoc:20790,points:20792,stages:[20793,20794,20795,20796,20797,20798,20799,20800,20801,20802,20803,20804,20805,20806,20807]},oe.config.globalProperties.$flowFieldId={userID:20622,roundID:20827,reporttime:20820,nickname:20821,phone:20822,stage:20823,problem:20824,class:20825,handle:20614,picURL:20826,problemOptionTrue:47428,problemOptionFalse:47429,handleOptionTrue:47075,handleOptionFalse:47076,next_vertex_id:31377},oe.config.globalProperties.$pointsFormFieldId={key:20808,userID:20809,point:20810,source:20811,createtime:20812},oe.config.globalProperties.$MonthlyFormFieldId={userID:20813,month:20815,points:20816,phone:20817,nickname:20814},oe.config.globalProperties.$paths=[[104.077568,30.588752],[104.077359,30.586116],[104.077912,30.583498],[104.077922,30.580727],[104.076849,30.578464],[104.075025,30.576413],[104.072236,30.572644],[104.072322,30.57076],[104.074682,30.568912],[104.080605,30.568931],[104.081678,30.568044],[104.081806,30.566492],[104.084789,30.56699],[104.080218,30.574085],[104.081334,30.579036],[104.080819,30.582324],[104.079274,30.585483],[104.079735,30.588255],[104.078597,30.588587]],oe.config.globalProperties.$points={1:[104.077665,30.578063],2:[104.077541,30.577856],3:[104.076941,30.577223],4:[104.076146,30.576478],5:[104.075859,30.57617],6:[104.075202,30.575512],7:[104.074772,30.575022],8:[104.073632,30.57388],9:[104.073276,30.573181],10:[104.073134,30.572898],11:[104.073099,30.572443],12:[104.074394,30.56992],13:[104.076335,30.569159],14:[104.078196,30.569436],15:[104.081259,30.569143],16:[104.081378,30.569109],17:[104.075491,30.574288]},oe.config.globalProperties.$distanceLimit=30},2814:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(3396);const a={class:"maintable2"},r=(0,o._)("div",{class:"noticetext"},[(0,o.Uk)("     欢迎参与“码上卫士”全民治水活动！"),(0,o._)("br"),(0,o.Uk)("     保护湖河环境，建设美好家园，“码上卫士”将陪伴您开启趣味巡河之旅。"),(0,o._)("br"),(0,o.Uk)("     每日巡河任务主要有三部分组成：日常巡河、闯关打卡和问题上报。具体说明如下："),(0,o._)("br"),(0,o.Uk)("      1. 当您来到河边，点击“开始巡查”，开启冒险。"),(0,o._)("br"),(0,o.Uk)("      2. 巡查中，您可以通过“闯关打卡”，选择查看关卡线索，破解打卡地点； 若您毫无头绪，也可以通过关卡定位，导航至打卡地点；当您到达打卡地点，请对打卡地点的水体和排口情况进行确认打卡。"),(0,o._)("br"),(0,o.Uk)("      3. 若您在巡查中，发现与堤岸、水体、河床、排口和公共设施相关的任何问题，请点击“问题上报”告知我们， 如果发现的问题，是您能自行处置的，请您伸出援手；无法自行处置的问题，请不要担心，我们将会安排工作人员前去处理。"),(0,o._)("br"),(0,o.Uk)("      4. 当您完成今日的巡查准备踏上归途时，请记得回来点击“结束巡查”，确保您此次的巡查可以获得相应的积分哦~"),(0,o._)("br"),(0,o.Uk)("      5. 您可以点击“排名”，查看您本月和上月的积分排名。"),(0,o._)("br"),(0,o.Uk)("      6. 每月积分靠前的“卫士”，可能会有惊喜在等您，请加油吧！"),(0,o._)("br")],-1),i=[r];var l={setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)("div",a,i))}};const s=l;var u=s},6907:function(e,t,n){n.d(t,{Z:function(){return c}});var o=n(3396),a=n(4870);const r={class:"maintable2"},i=(0,o._)("div",{class:"noticetext"},[(0,o.Uk)(" 一、河湖问题类别："),(0,o._)("br"),(0,o.Uk)("    水体、排口、河床、堤岸、公共设施"),(0,o._)("br"),(0,o.Uk)(" 二、具体问题："),(0,o._)("br"),(0,o.Uk)(" 堤岸："),(0,o._)("br"),(0,o.Uk)("     1. 河长公示牌存在倾斜、破损、变形、变色、老化、字体不清等问题，河长职务、姓名、电话被遮挡等；"),(0,o._)("br"),(0,o.Uk)("     2. 河岸绿化带存在焚烧落叶、不文明祭祀的行为；"),(0,o._)("br"),(0,o.Uk)("     3. 存在非法垂钓、电鱼、网鱼、药鱼等破坏水生态环境的行为；"),(0,o._)("br"),(0,o.Uk)("     4. 岸边有白色垃圾、宠物大便等。"),(0,o._)("br"),(0,o.Uk)(" 水体："),(0,o._)("br"),(0,o.Uk)("     1. 水面有明显漂浮物和生活垃圾；"),(0,o._)("br"),(0,o.Uk)("     2. 水面有动物遗骸；"),(0,o._)("br"),(0,o.Uk)("     3. 水体有异味，水体颜色异常，呈黑色、白色、黄色等。"),(0,o._)("br"),(0,o.Uk)(" 河床："),(0,o._)("br"),(0,o.Uk)("     1. 枯水期河床有淤泥堆积；"),(0,o._)("br"),(0,o.Uk)("     2. 河滩区存在养殖、种菜的行为；"),(0,o._)("br"),(0,o.Uk)("     3. 存在盗采砂石行为。"),(0,o._)("br"),(0,o.Uk)(" 排口："),(0,o._)("br"),(0,o.Uk)("     1. 河道沿岸餐饮商铺、企业、在建工地、居民等存在直排废污水，存在倾倒垃圾、余泥渣土、建筑废弃物等行为；"),(0,o._)("br"),(0,o.Uk)("     2. 入河排口有污水排放，排放水体的颜色、气味异常。"),(0,o._)("br"),(0,o.Uk)(" 公共设施："),(0,o._)("br"),(0,o.Uk)("     1. 河堤步道路面破损，影响行走；"),(0,o._)("br"),(0,o.Uk)("     2. 河堤护栏损坏、缺失，存在安全隐患问题。 ")],-1),l=(0,o._)("div",{class:"noticetext"},[(0,o.Uk)("      1. 日常巡河：从开始巡查时间到结束巡查时间达到15分钟，视为有效巡河获得2积分；"),(0,o._)("br"),(0,o.Uk)("     2. 闯关打卡：成功打卡一个点获得1积分，一次巡查，一个点只能打卡一次；"),(0,o._)("br"),(0,o.Uk)("     3. 问题上报：问题成功上报，后台人员审核成功后，获得2积分；自行解决问题，并拍照上传，后台人员审核成功后，获得3积分。 ")],-1);var s={setup(e){const t=(0,a.iH)(["1"]);return(e,n)=>{const a=(0,o.up)("van-collapse-item"),s=(0,o.up)("van-collapse");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o.Wm)(s,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=e=>t.value=e),accordion:""},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{title:"全民参与“码上治水”",name:"1"},{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(a,{title:"积分获取规则",name:"2"},{default:(0,o.w5)((()=>[l])),_:1})])),_:1},8,["modelValue"])])}}};const u=s;var c=u},4908:function(e,t,n){n.d(t,{Z:function(){return h}});var o=n(3396),a=n(7139),r=n(4870),i=n(6737);const l=(0,o.Uk)("我的排名"),s={class:"maintable"},u=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"排名"),(0,o._)("th",null,"用户昵称"),(0,o._)("th",null,"积分")])],-1),c={class:"table-example-footer"},p={class:"maintable"},d=(0,o.Uk)("我的排名"),f=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",null,"排名"),(0,o._)("th",null,"用户昵称"),(0,o._)("th",null,"积分")])],-1),m={class:"table-example-footer"};var g={setup(e){(0,i.ZP)({"--table-row-height":"24px","--table-tbody-td-font-size":"12px","--pagination-total-line-height":"10px","--pagination-font-size":"12px","--pagination-item-margin":"0 25px","--table-thead-th-font-size":"12px"});const t=(0,r.iH)(0);var n=sessionStorage.getItem("myRank1"),g=sessionStorage.getItem("myRank2"),v=sessionStorage.getItem("pointData1"),h=JSON.parse(v);const b=(0,r.iH)(_(1,10));function _(e,t){return Array.from({length:t}).map(((n,o)=>{const a=(e-1)*t+o+1;return{rank:a,name:h[a-1].nickname,point:h[a-1].point}}))}function w(e,t){b.value=_(e,t)}var k=sessionStorage.getItem("pointData2"),y=JSON.parse(k);const I=(0,r.iH)(U(1,10));function U(e,t){return Array.from({length:t}).map(((n,o)=>{const a=(e-1)*t+o+1;return{rank:a,name:y[a-1].nickname,point:y[a-1].point}}))}function x(e,t){I.value=U(e,t)}return(e,i)=>{const v=(0,o.up)("var-col"),h=(0,o.up)("var-row"),_=(0,o.up)("var-pagination"),k=(0,o.up)("var-table"),y=(0,o.up)("van-tab"),U=(0,o.up)("van-tabs");return(0,o.wg)(),(0,o.j4)(U,{active:t.value,"onUpdate:active":i[0]||(i[0]=e=>t.value=e),color:"#2c3e50"},{default:(0,o.w5)((()=>[(0,o.Wm)(y,{title:"本月排名"},{default:(0,o.w5)((()=>[(0,o._)("div",null,[(0,o.Wm)(h,{gutter:0},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{span:12},{default:(0,o.w5)((()=>[l])),_:1}),(0,o.Wm)(v,{span:12},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)((0,r.SU)(n)),1)])),_:1})])),_:1})]),(0,o._)("div",s,[(0,o.Wm)(k,null,{footer:(0,o.w5)((()=>[(0,o._)("div",c,[(0,o.Wm)(_,{current:1,total:100,"show-size-changer":!1,onChange:w})])])),default:(0,o.w5)((()=>[u,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(b.value,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.rank},[(0,o._)("td",null,(0,a.zw)(e.rank),1),(0,o._)("td",null,(0,a.zw)(e.name),1),(0,o._)("td",null,(0,a.zw)(e.point),1)])))),128))])])),_:1})])])),_:1}),(0,o.Wm)(y,{title:"上月排名"},{default:(0,o.w5)((()=>[(0,o._)("div",p,[(0,o._)("div",null,[(0,o.Wm)(h,{gutter:0},{default:(0,o.w5)((()=>[(0,o.Wm)(v,{span:12},{default:(0,o.w5)((()=>[d])),_:1}),(0,o.Wm)(v,{span:12},{default:(0,o.w5)((()=>[(0,o.Uk)((0,a.zw)((0,r.SU)(g)),1)])),_:1})])),_:1})]),(0,o.Wm)(k,null,{footer:(0,o.w5)((()=>[(0,o._)("div",m,[(0,o.Wm)(_,{current:1,total:100,"show-size-changer":!1,onChange:x})])])),default:(0,o.w5)((()=>[f,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(I.value,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.rank},[(0,o._)("td",null,(0,a.zw)(e.rank),1),(0,o._)("td",null,(0,a.zw)(e.name),1),(0,o._)("td",null,(0,a.zw)(e.point),1)])))),128))])])),_:1})])])),_:1})])),_:1},8,["active"])}}};const v=g;var h=v},3389:function(e,t,n){e.exports=n.p+"media/cut.77754f76.mp3"},6561:function(e,t,n){e.exports=n.p+"img/one2.04cc93e1.png"}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={exports:{}};return e[o].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,r){if(!o){var i=1/0;for(c=0;c<e.length;c++){o=e[c][0],a=e[c][1],r=e[c][2];for(var l=!0,s=0;s<o.length;s++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,r<i&&(i=r));if(l){e.splice(c--,1);var u=a();void 0!==u&&(t=u)}}return t}r=r||0;for(var c=e.length;c>0&&e[c-1][2]>r;c--)e[c]=e[c-1];e[c]=[o,a,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/about.582043c3.js"}}(),function(){n.miniCssF=function(e){return"css/about.73c1f787.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-h5:";n.l=function(o,a,r,i){if(e[o])e[o].push(a);else{var l,s;if(void 0!==r)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var p=u[c];if(p.getAttribute("src")==o||p.getAttribute("data-webpack")==t+r){l=p;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+r),l.src=o),e[o]=[a];var d=function(t,n){l.onerror=l.onload=null,clearTimeout(f);var a=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=d.bind(null,l.onerror),l.onload=d.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(n){if(r.onerror=r.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=l,r.parentNode&&r.parentNode.removeChild(r),a(s)}};return r.onerror=r.onload=i,r.href=t,n?n.parentNode.insertBefore(r,n.nextSibling):document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===t))return a}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){a=i[o],r=a.getAttribute("data-href");if(r===e||r===t)return a}},o=function(o){return new Promise((function(a,r){var i=n.miniCssF(o),l=n.p+i;if(t(i,l))return a();e(o,l,null,a,r)}))},a={143:0};n.f.miniCss=function(e,t){var n={443:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=r);var i=n.p+n.u(t),l=new Error,s=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",l.name="ChunkLoadError",l.type=r,l.request=i,a[1](l)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,r,i=o[0],l=o[1],s=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var c=s(n)}for(t&&t(o);u<i.length;u++)r=i[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(c)},o=self["webpackChunkvue_h5"]=self["webpackChunkvue_h5"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2447)}));o=n.O(o)})();