"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[2731],{6177:(S,l,o)=>{o.d(l,{c:()=>g});var f=o(4850),r=o(9063),d=o(4650);let g=(()=>{class s extends f.q2{constructor(){super(r.ih.Setting,"rmd",!0),this.getSystemConfig().subscribe(a=>{this.systemConfig=a})}getDeleted(a,u,h){return this.get({endPoint:[r.wm.settingsQuery],params:[{k:"type",v:a},{k:"sDate",v:JSON.stringify(u)},{k:"eDate",v:JSON.stringify(h)}]})}saveSystemConfig(a){return this.post({payload:a,endPoint:[r.yv.settingsStore,r.yv.saveSettings]})}getSystemConfig(){return this.get({endPoint:[r.wm.settingsQuery,r.wm.getSettings]})}static#t=this.\u0275fac=function(u){return new(u||s)};static#o=this.\u0275prov=d.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"})}return s})()},2731:(S,l,o)=>{o.r(l),o.d(l,{StaffPageModule:()=>I});var f=o(5115),r=o(9595),d=o(5861),g=o(2958),Z=(o(9063),o(392)),a=o(8115),u=o(895),h=o(5119),D=o(8033),O=o(2457),b=o(6177),t=o(4650),M=o(8398),y=o(4006),m=o(8118),p=o(2216),v=o(9492),P=o(2879),_=o(6895);const A=function(){return{dateInputFormat:"DD/MM/YYYY",containerClass:"theme-blue",adaptivePosition:!0}},T=[{path:"",component:(()=>{class c{constructor(n,e,i,E,C){this.router=n,this.localStorageService=e,this.servicesServices=i,this.dashbaorderServcieService=E,this.systemConfigService=C,this.sDate=new Date,this.eDate=new Date,this.columns=[{field:"invoiceId",header:"ID"},{field:"serviceName",header:"SERVICE"},{field:"serviceCost",header:"COST"},{field:"serviceCommission",header:"%"},{field:"commissionAmount",header:"COM"},{field:"numOfTimes",header:"X"},{field:"time",header:"TIME"}]}ngOnInit(){var n=this;return(0,d.Z)(function*(){yield g.F.show({text:"Welcome back, dear User!",duration:"long",position:"top"}),n.systemConfigService.getSystemConfig().subscribe(e=>{n.settings=e,"Daily"==n.settings.commissionRange&&(n.sDate=(0,a.Z)(new Date)),"Weekly"==n.settings.commissionRange&&(n.sDate=(0,u.Z)(new Date)),"Monthly"==n.settings.commissionRange&&(n.sDate=(0,h.Z)(new Date))})})()}ionViewDidEnter(){var n=this;return(0,d.Z)(function*(){n.staff=JSON.parse(n.localStorageService.get("staff-profile")||"{}"),n.staff?._id?n.getServiceHistory():n.router.navigateByUrl("")})()}getServiceHistory(){this.dashbaorderServcieService.getDashboardServices(this.sDate,this.eDate,this.staff?._id).subscribe(n=>{this.serviceHistory=n,this.serviceHistory.services=this.serviceHistory?.services.map(e=>({invoiceId:e?.invoiceId,serviceName:e?.serviceName,serviceCost:e?.serviceCost,commissionAmount:e?.commissionAmount,serviceCommission:e?.serviceCommission,renderedBy:e?.renderedBy,createdAt:e?.createdAt,registeredBy:e?.registeredBy,numOfTimes:e?.numOfTimes,staff:e?.renderedBy?.firstName,recordedBy:e?.registeredBy,time:(0,D.Z)(new Date(e?.createdAt),"h:ma")}))})}static#t=this.\u0275fac=function(e){return new(e||c)(t.Y36(r.F0),t.Y36(M.n),t.Y36(Z.r),t.Y36(O.D),t.Y36(b.c))};static#o=this.\u0275cmp=t.Xpm({type:c,selectors:[["healmah-staff"]],decls:29,vars:14,consts:[[1,"ion-no-border","ion-no-padding","bg:#f3f3f3"],[1,"mt:-5","ml:-5","w:calc(100%+5px)","$background:url('assets/rmd/img/header.png')!","bg:cover","bg:no-repeat","bg:fixed","h:25vh!","rb:35px!","shadow:0|2|1|rgba(0,0,0,0.1)"],[1,"height:10vh","w:100%","flex","jc:space-between","ai:center","p:10px|10px"],[1,"content"],["color","warning","routerLink","","slot","start","name","lock-closed-outline",1,"f:25px"],[1,"flex","ai:center","jc:space-between","mt:30px","px:10px","pl:20px!","f:white"],["icon","user-circle",1,"f:blue","f:40px"],["color","tertiary",1,"ion-padding-top"],[1,"flex","gap:5","p:10","{b:#0F85E9!}_input"],["type","text","bsDatepicker","",1,"form-control",3,"ngModel","bsConfig","ngModelChange"],[1,"btn","btn-outline-primary",3,"click"],["icon","search"],[1,"p:10","rel"],[1,"w:150px","h:150px","r:50%","bg:#0F85E9","abs","bottom:-10","right:-20px","z:-1","blur(120px)"],[1,"p:10","f:black!","rt:10","flex","gap:10","jc:space-around","bg:transparent","shadow:0|-3px|2px|rgba(0,0,0,0.1);","{text-align:center}"],[1,"p:4"],[3,"columns","data","rowsPerPage"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"div",2)(3,"div",3)(4,"h2"),t._uU(5,"RICHMOND"),t.qZA(),t.TgZ(6,"h4"),t._uU(7,"Beauty & Hair Studio"),t.qZA()(),t._UZ(8,"ion-icon",4),t.qZA(),t.TgZ(9,"div",5)(10,"label"),t._uU(11),t.qZA(),t._UZ(12,"fa-icon",6),t.qZA()()(),t.TgZ(13,"ion-content",7)(14,"div",8)(15,"input",9),t.NdJ("ngModelChange",function(C){return i.sDate=C}),t.qZA(),t.TgZ(16,"input",9),t.NdJ("ngModelChange",function(C){return i.eDate=C}),t.qZA(),t.TgZ(17,"button",10),t.NdJ("click",function(){return i.getServiceHistory()}),t._UZ(18,"fa-icon",11),t.qZA()(),t.TgZ(19,"header",12),t._UZ(20,"div",13),t.TgZ(21,"div",14)(22,"section")(23,"h1"),t._uU(24),t.ALo(25,"number"),t.qZA(),t._uU(26," Total Commissions "),t.qZA()()(),t.TgZ(27,"main",15),t._UZ(28,"prime-table",16),t.qZA()()),2&e&&(t.xp6(11),t.AsE(" ",null==i.staff?null:i.staff.firstName," ",null==i.staff?null:i.staff.surName," "),t.xp6(4),t.Q6J("ngModel",i.sDate)("bsConfig",t.DdM(12,A)),t.xp6(1),t.Q6J("ngModel",i.eDate)("bsConfig",t.DdM(13,A)),t.xp6(8),t.hij(" ",t.lcZ(25,10,null==i.serviceHistory||null==i.serviceHistory.main?null:i.serviceHistory.main.commissionAmount)," "),t.xp6(4),t.Q6J("columns",i.columns)("data",null==i.serviceHistory?null:i.serviceHistory.services)("rowsPerPage",10))},dependencies:[y.Fj,y.JJ,y.On,r.rH,m.W2,m.Gu,m.gu,m.sr,m.YI,p.BN,v.Np,v.Y5,P.I,_.JJ],styles:["[_nghost-%COMP%]{--ion-color-primary: #1F5BBC;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #3dc2ff;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #f3f3f3;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:5px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-weight:900;font-family:monospace;letter-spacing:2px;font-size:2rem;margin:0}.content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#E38739 0%,#2dd36f 20%,#FF3AF3 50%,#2dd36f 70%);background-clip:text;-webkit-background-clip:text;color:transparent!important}"]})}return c})()}];let B=(()=>{class c{static#t=this.\u0275fac=function(e){return new(e||c)};static#o=this.\u0275mod=t.oAB({type:c});static#e=this.\u0275inj=t.cJS({imports:[r.Bz.forChild(T),r.Bz]})}return c})();var x=o(4850);let I=(()=>{class c{static#t=this.\u0275fac=function(e){return new(e||c)};static#o=this.\u0275mod=t.oAB({type:c});static#e=this.\u0275inj=t.cJS({imports:[x._o,x.Nu,f.gw,B]})}return c})()},8115:(S,l,o)=>{o.d(l,{Z:()=>d});var f=o(953),r=o(833);function d(g){(0,r.Z)(1,arguments);var s=(0,f.Z)(g);return s.setHours(0,0,0,0),s}},5119:(S,l,o)=>{o.d(l,{Z:()=>d});var f=o(953),r=o(833);function d(g){(0,r.Z)(1,arguments);var s=(0,f.Z)(g);return s.setDate(1),s.setHours(0,0,0,0),s}},895:(S,l,o)=>{o.d(l,{Z:()=>s});var f=o(953),r=o(1998),d=o(833),g=o(8370);function s(Z,a){var u,h,D,O,b,t,M,y;(0,d.Z)(1,arguments);var m=(0,g.j)(),p=(0,r.Z)(null!==(u=null!==(h=null!==(D=null!==(O=a?.weekStartsOn)&&void 0!==O?O:null==a||null===(b=a.locale)||void 0===b||null===(t=b.options)||void 0===t?void 0:t.weekStartsOn)&&void 0!==D?D:m.weekStartsOn)&&void 0!==h?h:null===(M=m.locale)||void 0===M||null===(y=M.options)||void 0===y?void 0:y.weekStartsOn)&&void 0!==u?u:0);if(!(p>=0&&p<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=(0,f.Z)(Z),P=v.getDay(),_=(P<p?7:0)+P-p;return v.setDate(v.getDate()-_),v.setHours(0,0,0,0),v}}}]);