"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[3097],{6177:(O,v,o)=>{o.d(v,{c:()=>m});var d=o(4850),i=o(9063),g=o(4650);let m=(()=>{class r extends d.q2{constructor(){super(i.ih.Setting,"rmd",!0),this.getSystemConfig().subscribe(u=>{this.systemConfig=u})}getDeleted(u,e,l){return this.get({endPoint:[i.wm.settingsQuery],params:[{k:"type",v:u},{k:"sDate",v:JSON.stringify(e)},{k:"eDate",v:JSON.stringify(l)}]})}saveSystemConfig(u){return this.post({payload:u,endPoint:[i.yv.settingsStore,i.yv.saveSettings]})}getSystemConfig(){return this.get({endPoint:[i.wm.settingsQuery,i.wm.getSettings]})}static#e=this.\u0275fac=function(e){return new(e||r)};static#t=this.\u0275prov=g.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()},2603:(O,v,o)=>{o.d(v,{N:()=>r});var d=o(4850),i=o(9063),g=o(4650),m=o(8118);let r=(()=>{class p extends d.q2{constructor(e){super(i.ih.STOCK,"rmd",!0),this.modalCtrl=e}getOverview(e,l){return this.get({endPoint:[i.kg.stockQuery],params:[{k:"sDate",v:JSON.stringify(e)},{k:"eDate",v:JSON.stringify(l)}]})}getDashboardServices(e,l){return this.get({endPoint:[i.kg.stockQuery,i.cY.dispenseHistory],params:[{k:"sDate",v:JSON.stringify(e)},{k:"eDate",v:JSON.stringify(l)}]})}deleteDashboardSale(e,l,y){return this.delete({payload:l,params:[{k:"batchId",v:e},{k:"type",v:y}],endPoint:[i.ve.stockStore,i.eb.returnSaleItems]})}static#e=this.\u0275fac=function(l){return new(l||p)(g.LFG(m.IN))};static#t=this.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"})}return p})()},3097:(O,v,o)=>{o.r(v),o.d(v,{OverviewPageModule:()=>M});var d=o(9595),i=o(2603),g=o(9063),m=o(8115),r=o(895),p=o(5119),u=o(6177),e=o(4650),l=o(6895),y=o(4006),h=o(8118),D=o(2216),A=o(2054),_=o(9492);function Z(a,S){if(1&a&&(e.TgZ(0,"div",21)(1,"label"),e._uU(2,"Cash:"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()),2&a){const n=e.oxw();e.xp6(4),e.Oqu(e.lcZ(5,1,n.cashAmount||0))}}function P(a,S){if(1&a&&(e.TgZ(0,"div",21)(1,"label"),e._uU(2,"Bank:"),e.qZA(),e.TgZ(3,"span"),e._uU(4),e.ALo(5,"number"),e.qZA()()),2&a){const n=e.oxw();e.xp6(4),e.Oqu(e.lcZ(5,1,n.bankAmount||0))}}const b=function(){return{dateInputFormat:"DD/MM/YYYY",containerClass:"theme-blue",adaptivePosition:!0}},T=[{path:"",component:(()=>{class a{constructor(n,s){this.dashboardSaleService=n,this.systemConfigService=s,this.sDate=new Date,this.eDate=new Date,this.overview=[],this.colors=["#5470C6","#e91e63","#EE6666"],this.option={color:this.colors,tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{right:"12%"},toolbox:{feature:{saveAsImage:{show:!0}}},legend:{data:["Frequency","TotalAmount"]},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},axisLabel:{interval:0,rotate:35},data:["dt1","dt2"]}],yAxis:[{type:"value",name:"Frequency",position:"left",alignTicks:!0,axisLine:{show:!0,lineStyle:{color:this.colors[0]}}},{type:"value",name:"PlayAmount",position:"right",alignTicks:!0,axisLine:{show:!0,lineStyle:{color:this.colors[1]}},axisLabel:{formatter:(t,f)=>t<1e3?t.toString():t/1e3+"K"}}],series:[{name:"PlayCount",type:"bar",data:[2,4]},{name:"TotalAmount",type:"bar",yAxisIndex:1,data:[3,5]}]},this.chatData={},this.cashAmount=0,this.bankAmount=0}ngOnInit(){this.getOverview()}ionViewDidEnter(){this.systemConfigService.getSystemConfig().subscribe(n=>{this.settings=n,"Daily"==this.settings.commissionRange&&(this.sDate=(0,m.Z)(new Date)),"Weekly"==this.settings.commissionRange&&(this.sDate=(0,r.Z)(new Date)),"Monthly"==this.settings.commissionRange&&(this.sDate=(0,p.Z)(new Date)),this.getOverview()})}getOverview(){this.dashboardSaleService.getOverview(this.sDate,this.eDate).subscribe(n=>{const s=[...n?.gamesByPayMethod,...n?.saleByPayMethod,...n?.serviceByPayMethod];this.cashAmount=s?.filter(t=>"Cash"==t?._id)?.reduce((t,f)=>t+f?.amount,0),this.bankAmount=s?.filter(t=>"Bank"==t?._id)?.reduce((t,f)=>t+f?.amount,0),this.overview=n,this.chatData=n?.popularServices,this.formatForChat(this.chatData)})}onChartInit(n){this.echartsInstance=n,this.getOverview()}onChartEvent(n){}formatForChat(n){if(!n||!n.length)return;const s=[],t=[],f=[];(n=(0,g.Sy)(n)).forEach(c=>{s.push(c._id),t.push(c.amount),f.push(c.count)}),this.option={color:this.colors,title:{text:"Popular Hair Services"},tooltip:{trigger:"axis",axisPointer:{type:"cross"}},grid:{right:"12%",top:"20%"},toolbox:{feature:{saveAsImage:{show:!0}}},legend:{data:["Frequency","TotalAmount"],top:"25"},xAxis:[{type:"category",axisTick:{alignWithLabel:!0},axisLabel:{interval:0,rotate:35},data:[...s]}],yAxis:[{type:"value",name:"Frequency",position:"left",alignTicks:!0,axisLine:{show:!0,lineStyle:{color:this.colors[0]}}},{type:"value",name:"TotalAmount",position:"right",alignTicks:!0,axisLine:{show:!0,lineStyle:{color:this.colors[1]}},axisLabel:{formatter:(c,x)=>c<1e3?c.toString():c/1e3+"K"}}],series:[{name:"Frequency",type:"bar",data:[...f]},{name:"TotalAmount",type:"bar",yAxisIndex:1,data:[...t]}]}}static#e=this.\u0275fac=function(s){return new(s||a)(e.Y36(i.N),e.Y36(u.c))};static#t=this.\u0275cmp=e.Xpm({type:a,selectors:[["healmah-overview"]],decls:57,vars:30,consts:[[1,"bg:transparent!","shadow:none!","ion-no-border"],[1,"ion-no-border","ion-padding","min-h:25vh!","shadow:0|1|2|rgba(0,0,0,0.5)!","d:flex!","ai:center","rb:50px","f:white!","$background:url('assets/rmd/img/header.png')!","bg:cover","bg:no-repeat","bg:fixed","text-shadow:0|0|2|rgba(0,0,0,0.9)!","ml:-5","w:calc(100%+5px)"],[1,"rel","h:100%","w:100%","flex","flex-direction:column","gap:10"],[1,"d:flex","jc:space-between","{flex:1;d:flex;jc:center;ai:center;flex-direction:column;shadow:0|1|2|rgba(0,0,0,0.3);gap:5;padding:5}>*","r:15!","{f:bold;f:1.1rem}_span","{opacity:0.8}_ion-label"],[1,"flex:1","d:flex","jc:center","ai:center","flex-direction:column","shadow:0|1|2|rgba(0,0,0,0.3)","gap:5","padding:5","rb:15!","{f:bold;f:1.1rem}_span","{opacity:0.8}_ion-label"],[1,"ion-padding"],[1,"flex","gap:5","{b:#0F85E9!;rt:30}_input"],["type","text","bsDatepicker","",1,"form-control","rr:0!","rbl:0!",3,"ngModel","bsConfig","ngModelChange"],["type","text","bsDatepicker","",1,"form-control","r:0!",3,"ngModel","bsConfig","ngModelChange"],[1,"btn","btn-outline-info","b:#0F85E9!","rt:30","rl:0","rb:0!","rtl:0!","rtr:30!",3,"click"],["icon","search",1,"f:#1F5BBC"],[1,"bg:linear-gradient(180deg,#1F5BBC,#1F5BBC,rgb(233,30,99,0.7))","rb:30px","rt:0!","h:100px","w:100%","d:flex","flex-direction:column","ai:center","jc:center","pb:5"],[1,"flex","jc:space-between","w:100%","p:5","bb:1|solid|gray"],["class","flex gap:5 f:white! f:1.1rem! {f:bold}>span",4,"ngIf"],[1,"f:2rem","f:white","f:bold"],[1,"opacity:0.85"],[1,"f:white","opacity:0.8"],["echarts","",1,"h:400","w:100%!","mt:15",3,"options","chartInit","chartClick"],["vertical","bottom","horizontal","end","slot","fixed"],["routerLink","/super/register-home"],["icon","book-open",1,"f:white","f:1.5rem"],[1,"flex","gap:5","f:white!","f:1.1rem!","{f:bold}>span"]],template:function(s,t){1&s&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"section",2)(3,"header",3)(4,"div")(5,"span"),e._uU(6),e.ALo(7,"number"),e.qZA(),e.TgZ(8,"ion-label"),e._uU(9,"Service Total"),e.qZA()(),e.TgZ(10,"div")(11,"span"),e._uU(12),e.ALo(13,"number"),e.qZA(),e.TgZ(14,"ion-label"),e._uU(15,"Games Total"),e.qZA()()(),e.TgZ(16,"footer",3)(17,"div")(18,"span"),e._uU(19),e.ALo(20,"number"),e.qZA(),e.TgZ(21,"ion-label"),e._uU(22,"Sales Total"),e.qZA()(),e.TgZ(23,"div")(24,"span"),e._uU(25),e.ALo(26,"number"),e.qZA(),e.TgZ(27,"ion-label"),e._uU(28,"Payout Total"),e.qZA()()(),e.TgZ(29,"div",4)(30,"span"),e._uU(31),e.ALo(32,"number"),e.qZA(),e.TgZ(33,"ion-label"),e._uU(34,"Expenses Total"),e.qZA()()()()(),e.TgZ(35,"ion-content",5)(36,"div",6)(37,"input",7),e.NdJ("ngModelChange",function(c){return t.sDate=c}),e.qZA(),e.TgZ(38,"input",8),e.NdJ("ngModelChange",function(c){return t.eDate=c}),e.qZA(),e.TgZ(39,"button",9),e.NdJ("click",function(){return t.getOverview()}),e._UZ(40,"fa-icon",10),e.qZA()(),e.TgZ(41,"main",11)(42,"header",12),e.YNc(43,Z,6,3,"div",13),e.YNc(44,P,6,3,"div",13),e.qZA(),e.TgZ(45,"h2",14),e._uU(46),e.ALo(47,"number"),e.TgZ(48,"sub",15),e._uU(49),e.ALo(50,"number"),e.qZA()(),e.TgZ(51,"label",16),e._uU(52,"Gross Balance"),e.qZA()(),e.TgZ(53,"div",17),e.NdJ("chartInit",function(c){return t.onChartInit(c)})("chartClick",function(c){return t.onChartEvent({event:c})}),e.qZA(),e.TgZ(54,"ion-fab",18)(55,"ion-fab-button",19),e._UZ(56,"fa-icon",20),e.qZA()()()),2&s&&(e.xp6(6),e.Oqu(e.lcZ(7,14,(null==t.overview||null==t.overview.totalRenderedAmount?null:t.overview.totalRenderedAmount.amount)||0)),e.xp6(6),e.Oqu(e.lcZ(13,16,(null==t.overview||null==t.overview.totalGameAmount?null:t.overview.totalGameAmount.amount)||0)),e.xp6(7),e.Oqu(e.lcZ(20,18,(null==t.overview||null==t.overview.totalSaleAmount?null:t.overview.totalSaleAmount.amount)||0)),e.xp6(6),e.Oqu(e.lcZ(26,20,(null==t.overview||null==t.overview.totalPayoutAmount?null:t.overview.totalPayoutAmount.amount)||0)),e.xp6(6),e.Oqu(e.lcZ(32,22,(null==t.overview||null==t.overview.totalExpenseAmount?null:t.overview.totalExpenseAmount.amount)||0)),e.xp6(6),e.Q6J("ngModel",t.sDate)("bsConfig",e.DdM(28,b)),e.xp6(1),e.Q6J("ngModel",t.eDate)("bsConfig",e.DdM(29,b)),e.xp6(5),e.Q6J("ngIf",t.cashAmount),e.xp6(1),e.Q6J("ngIf",t.bankAmount),e.xp6(2),e.hij(" ",e.lcZ(47,24,((null==t.overview||null==t.overview.totalRenderedAmount?null:t.overview.totalRenderedAmount.amount)||0)+((null==t.overview||null==t.overview.totalGameAmount?null:t.overview.totalGameAmount.amount)||0)+((null==t.overview||null==t.overview.totalSaleAmount?null:t.overview.totalSaleAmount.amount)||0))," "),e.xp6(3),e.hij(" ",e.lcZ(50,26,((null==t.overview||null==t.overview.totalRenderedAmount?null:t.overview.totalRenderedAmount.amount)||0)+((null==t.overview||null==t.overview.totalGameAmount?null:t.overview.totalGameAmount.amount)||0)+((null==t.overview||null==t.overview.totalSaleAmount?null:t.overview.totalSaleAmount.amount)||0)-(((null==t.overview||null==t.overview.totalExpenseAmount?null:t.overview.totalExpenseAmount.amount)||0)+((null==t.overview||null==t.overview.totalPayoutAmount?null:t.overview.totalPayoutAmount.amount)||0)))," "),e.xp6(4),e.Q6J("options",t.option))},dependencies:[l.O5,y.Fj,y.JJ,y.On,d.rH,h.W2,h.IJ,h.W4,h.Gu,h.Q$,h.sr,h.YI,D.BN,A._w,_.Np,_.Y5,l.JJ],styles:["[_nghost-%COMP%]{--ion-color-primary: #1F5BBC;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #3dc2ff;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #f3f3f3;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}"]})}return a})()}];let E=(()=>{class a{static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=e.oAB({type:a});static#o=this.\u0275inj=e.cJS({imports:[d.Bz.forChild(T),d.Bz]})}return a})();var C=o(4850);let M=(()=>{class a{static#e=this.\u0275fac=function(s){return new(s||a)};static#t=this.\u0275mod=e.oAB({type:a});static#o=this.\u0275inj=e.cJS({imports:[C._o,C.Nu,A.Ns.forRoot({echarts:()=>o.e(1701).then(o.bind(o,1701))}),E]})}return a})()},8115:(O,v,o)=>{o.d(v,{Z:()=>g});var d=o(953),i=o(833);function g(m){(0,i.Z)(1,arguments);var r=(0,d.Z)(m);return r.setHours(0,0,0,0),r}},5119:(O,v,o)=>{o.d(v,{Z:()=>g});var d=o(953),i=o(833);function g(m){(0,i.Z)(1,arguments);var r=(0,d.Z)(m);return r.setDate(1),r.setHours(0,0,0,0),r}},895:(O,v,o)=>{o.d(v,{Z:()=>r});var d=o(953),i=o(1998),g=o(833),m=o(8370);function r(p,u){var e,l,y,h,D,A,_,Z;(0,g.Z)(1,arguments);var P=(0,m.j)(),b=(0,i.Z)(null!==(e=null!==(l=null!==(y=null!==(h=u?.weekStartsOn)&&void 0!==h?h:null==u||null===(D=u.locale)||void 0===D||null===(A=D.options)||void 0===A?void 0:A.weekStartsOn)&&void 0!==y?y:P.weekStartsOn)&&void 0!==l?l:null===(_=P.locale)||void 0===_||null===(Z=_.options)||void 0===Z?void 0:Z.weekStartsOn)&&void 0!==e?e:0);if(!(b>=0&&b<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var w=(0,d.Z)(p),T=w.getDay(),E=(T<b?7:0)+T-b;return w.setDate(w.getDate()-E),w.setHours(0,0,0,0),w}}}]);