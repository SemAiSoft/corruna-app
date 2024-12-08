"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[1374],{1374:(H,g,n)=>{n.r(g),n.d(g,{RenderedServiceHistoryPageModule:()=>W});var u=n(9595),c=n(5861),h=n(4201),f=n(5115),l=n(9063),E=n(8033),a=n(8115),p=n(895),A=n(5119),P=n(2457),O=n(6177),M=n(392),Z=n(2958),b=n(4850),e=n(4650),m=n(8118),_=n(6257),v=n(6895),D=n(4006),x=n(2216),B=n(9492),L=n(2879);const R=function(){return{dateInputFormat:"DD/MM/YYYY",containerClass:"theme-blue",adaptivePosition:!0}};function w(r,C){if(1&r){const t=e.EpF();e.TgZ(0,"input",7),e.NdJ("ngModelChange",function(i){e.CHM(t);const y=e.oxw();return e.KtG(y.sDate=i)}),e.qZA()}if(2&r){const t=e.oxw();e.Q6J("ngModel",t.sDate)("bsConfig",e.DdM(2,R))}}function N(r,C){if(1&r&&(e.TgZ(0,"section")(1,"h1"),e._uU(2),e.ALo(3,"number"),e.qZA(),e._uU(4," Total Commissions "),e.qZA()),2&r){const t=e.oxw();e.xp6(2),e.hij(" ",e.lcZ(3,1,null==t.serviceHistory||null==t.serviceHistory.main?null:t.serviceHistory.main.commissionAmount)," ")}}function j(r,C){if(1&r&&(e.TgZ(0,"div",29)(1,"h1"),e._uU(2),e.ALo(3,"number"),e.qZA(),e._uU(4," Balance "),e.qZA()),2&r){const t=e.oxw();e.xp6(2),e.hij(" ",e.lcZ(3,1,((null==t.serviceHistory||null==t.serviceHistory.main?null:t.serviceHistory.main.cost)||1)-((null==t.serviceHistory||null==t.serviceHistory.main?null:t.serviceHistory.main.commissionAmount)||1))," ")}}function J(r,C){if(1&r&&(e.TgZ(0,"div")(1,"h6"),e._uU(2),e.qZA(),e.TgZ(3,"span",30),e._uU(4),e.qZA()()),2&r){const t=C.$implicit;e.xp6(2),e.Oqu((null==t?null:t._id)||"None"),e.xp6(2),e.Oqu(null==t?null:t.cost)}}function k(r,C){if(1&r&&(e.TgZ(0,"tr",31)(1,"td",32),e._uU(2),e.qZA(),e.TgZ(3,"td",32),e._uU(4),e.ALo(5,"number"),e.qZA(),e.TgZ(6,"td",32),e._uU(7),e.ALo(8,"number"),e.qZA(),e.TgZ(9,"td",32),e._uU(10),e.qZA(),e.TgZ(11,"td",32),e._uU(12),e.ALo(13,"number"),e.ALo(14,"number"),e.qZA()()),2&r){const t=C.$implicit;e.xp6(2),e.hij(" ",null==t?null:t.serviceName," "),e.xp6(2),e.hij(" ",e.lcZ(5,7,null==t?null:t.serviceCost)," "),e.xp6(3),e.AsE(" ",e.lcZ(8,9,null==t?null:t.commissionAmount)," (",null==t?null:t.serviceCommission,"%) "),e.xp6(3),e.hij(" ",null==t?null:t.numOfTimes," "),e.xp6(2),e.AsE(" ",e.lcZ(13,11,((null==t?null:t.serviceCost)||1)*((null==t?null:t.numOfTimes)||1))," ~ ",e.lcZ(14,13,((null==t?null:t.commissionAmount)||1)*((null==t?null:t.numOfTimes)||1))," ")}}const F=[{path:"",component:(()=>{class r{constructor(t,o,i,y,T,K,Q,$,q,z){var S,s=this;this.modalCtrl=t,this.systemConfigService=o,this.router=i,this.servicesService=y,this.dialogService=T,this.menuService=K,this.dashbaorderServcieService=Q,this.print=$,this.printerService=q,this.localStorageService=z,this.sDate=new Date,this.eDate=new Date,this.serviceHistory={},this.columns=[{field:"serviceName",header:"SERVICE"},{field:"serviceCost",header:"COST"},{field:"commissionAmount",header:"COM"},{field:"numOfTimes",header:"X"},{field:"staff",header:"STAFF"},{field:"time",header:"DATE"},{field:"user",header:"USER"}],this.tableMenu=[{name:"Print",iconLeft:"print",clickAction:(S=(0,c.Z)(function*(){s.servicesService.serviceToPrint=s.serviceHistory.byBatch.find(d=>d._id==s.menuService.contextRow.rowData?.batchId),s.servicesService.serviceToPrint.serviceItems=s.servicesService.serviceToPrint.serviceItems.filter(d=>!d.deleted),s.menuService.closeAllMenu(),setTimeout((0,c.Z)(function*(){yield s.printerService.printSectionToBle(s.servicesService.serviceToPrint,s.systemConfigService.systemConfig.printType,"print-section-history")}),2e3)}),function(){return S.apply(this,arguments)})},{name:"Delete Service",iconLeft:"trash-alt",clickAction:function(){var S=(0,c.Z)(function*(){if("Super"!==s.staff.acctType)return void s.menuService.closeAllMenu();const d=s.menuService.contextRow.rowData;s.menuService.closeAllMenu(),s.dialogService.openConfirmDialog({title:"Confirm Action",message:"Deleting rendered service is irreversible, sure to continue?"}).subscribe(U=>{U&&s.dashbaorderServcieService.deleteDashboardService(d.batchId,d._id,"single").subscribe(I=>{I?._id&&(Z.F.show({text:l.kt.itemDeleted}),s.getServiceHistory())})})});return function(){return S.apply(this,arguments)}}(),iconLeftStyle:"f:rgb(173,55,57)"},{name:"",divider:!0,clickAction:function(){var S=(0,c.Z)(function*(){});return function(){return S.apply(this,arguments)}}()},{name:"",divider:!0,clickAction:function(){var S=(0,c.Z)(function*(){});return function(){return S.apply(this,arguments)}}()},{name:"Delete Batch",iconLeft:"trash",clickAction:function(){var S=(0,c.Z)(function*(){if("Super"!==s.staff.acctType)return void s.menuService.closeAllMenu();const d=s.menuService.contextRow.rowData;s.menuService.closeAllMenu(),s.dialogService.openConfirmDialog({title:"Confirm Action",message:"Deleting rendered service is irreversible, sure to continue?"}).subscribe(U=>{U&&s.dashbaorderServcieService.deleteDashboardService(d.batchId,d._id,"batch").subscribe(I=>{I?.modifiedCount&&(Z.F.show({text:l.kt.itemDeleted}),s.getServiceHistory())})})});return function(){return S.apply(this,arguments)}}(),iconLeftStyle:"f:red"}]}ngOnInit(){this.getServiceHistory(),this.serviceHistory.services=this.serviceHistory?.services?.map(t=>({_id:t._id,invoiceId:t?.invoiceId,batchId:t?.batchId,serviceName:t?.serviceName,serviceCost:t?.serviceCost,commissionAmount:t?.commissionAmount,serviceCommission:t?.serviceCommission,renderedBy:t?.renderedBy?.firstName+" "+t?.renderedBy?.surName,createdAt:t?.createdAt,userAccount:t?.userAccount,numOfTimes:t?.numOfTimes,staff:t?.renderedBy?.firstName,recordedBy:t?.registeredBy,time:(0,E.Z)(new Date(t?.createdAt),"d/M/yy - h:ma")})),this.servicesService.serviceToPrint=null,this.staff=JSON.parse(this.localStorageService.get("staff-profile")||"{}"),this.systemConfigService.getSystemConfig().subscribe(t=>{this.settings=t,"Daily"==this.settings.commissionRange&&(this.sDate=(0,a.Z)(new Date)),"Weekly"==this.settings.commissionRange&&(this.sDate=(0,p.Z)(new Date)),"Monthly"==this.settings.commissionRange&&(this.sDate=(0,A.Z)(new Date))})}ngOnDestroy(){}ionViewDidEnter(){this.getServiceHistory()}getServiceHistory(){"Standard"==this.staff?.acctType&&(this.eDate=new Date,this.sDate=new Date),this.dashbaorderServcieService.getDashboardServices(this.sDate,this.eDate).subscribe(t=>{this.serviceHistory=t,this.serviceHistory.services=this.serviceHistory?.services.map(o=>({_id:o._id,invoiceId:o?.invoiceId,batchId:o?.batchId,serviceName:o?.serviceName,serviceCost:o?.serviceCost,commissionAmount:o?.commissionAmount,serviceCommission:o?.serviceCommission,renderedBy:o?.renderedBy?.firstName+" "+o?.renderedBy?.surName,createdAt:o?.createdAt,userAccount:o?.userAccount,numOfTimes:o?.numOfTimes,staff:o?.renderedBy?.firstName,time:(0,E.Z)(new Date(o?.createdAt),"d/M/yy - h:ma"),user:o?.userAccount}))})}closeModal(){this.router.navigate(["Super"==this.staff.acctType?"/super/hair-home":this.staff.acctType?.toLowerCase()])}static#e=this.\u0275fac=function(o){return new(o||r)(e.Y36(m.IN),e.Y36(O.c),e.Y36(u.F0),e.Y36(M.r),e.Y36(f.xA),e.Y36(h.hl),e.Y36(P.D),e.Y36(_.XU),e.Y36(f.vP),e.Y36(b.n2))};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["healmah-rendered-service-history"]],hostBindings:function(o,i){1&o&&e.NdJ("popstate",function(T){return i.closeModal(T)},!1,e.Jf7)},decls:63,vars:31,consts:[["color","primary"],["slot","start"],["color","light",3,"defaultHref"],["slot","end"],["color","tertiary"],[1,"flex","gap:5","p:10","{b:#0F85E9!}_input","print-none"],["class","form-control","type","text","bsDatepicker","",3,"ngModel","bsConfig","ngModelChange",4,"ngIf"],["type","text","bsDatepicker","",1,"form-control",3,"ngModel","bsConfig","ngModelChange"],[1,"btn","btn-outline-primary",3,"click"],["icon","search"],[1,"p:10","rel","print-none"],[1,"print-none","w:150px","h:150px","r:50%","bg:#0F85E9","abs","bottom:-10","right:-20px","z:-1","blur(120px)"],[1,"p:10","f:black!","rt:10","flex","gap:10","jc:space-around","bg:transparent","shadow:0|-3px|2px|rgba(0,0,0,0.1);","{text-align:center}"],[4,"ngIf"],["class"," p:10 f:black! rb:10\n      flex flex:column gap:0 jc:space-around bg:transparent shadow:0|3|2px|rgba(0,0,0,0.1);\n      {text-align:center}\n    ",4,"ngIf"],[1,"flex","ai:center","gap:5","f:black!","jc:space-around","pt:10"],[4,"ngFor","ngForOf"],[1,"p:4","print-none"],[3,"columns","data","rowsPerPage","rowContextMenu"],["id","print-section-history",1,"w:100vw","f:black!","d:none","display:block@print","{text-align:center}>h2","{text-align:center}>h4","{text-align:center}>h6"],[2,"text-align","center","margin","0"],[2,"text-align","center","margin","0","font-family","monospace"],[2,"text-align","center"],[1,"f:beryl-1"],[1,"table","table-striped","table-bordered",2,"border","1px solid lightgray","width","100%"],[2,"caption-side","bottom","text-align","center","padding","10px"],["style","padding: 10px;",4,"ngFor","ngForOf"],["colspan","3"],["colspan","2"],[1,"p:10","f:black!","rb:10","flex","flex:column","gap:0","jc:space-around","bg:transparent","shadow:0|3|2px|rgba(0,0,0,0.1);","{text-align:center}"],[1,"d-block"],[2,"padding","10px"],[2,"padding","10px","border-bottom","1px solid lightgray","border-right","1px solid lightgray"]],template:function(o,i){if(1&o&&(e.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),e._UZ(3,"ion-back-button",2),e.qZA(),e.TgZ(4,"ion-title",3),e._uU(5,"Rendered Services"),e.qZA()()(),e.TgZ(6,"ion-content",4)(7,"div",5),e.YNc(8,w,1,3,"input",6),e.TgZ(9,"input",7),e.NdJ("ngModelChange",function(T){return i.eDate=T}),e.qZA(),e.TgZ(10,"button",8),e.NdJ("click",function(){return i.getServiceHistory()}),e._UZ(11,"fa-icon",9),e.qZA()(),e.TgZ(12,"header",10),e._UZ(13,"div",11),e.TgZ(14,"div",12)(15,"section")(16,"h1"),e._uU(17),e.ALo(18,"number"),e.qZA(),e._uU(19," Total Amount "),e.qZA(),e.YNc(20,N,5,3,"section",13),e.qZA(),e.YNc(21,j,5,3,"div",14),e.TgZ(22,"div",15),e.YNc(23,J,5,2,"div",16),e.qZA()(),e.TgZ(24,"main",17),e._UZ(25,"prime-table",18),e.qZA(),e.TgZ(26,"div",19)(27,"h1",20),e._uU(28,"RICHMOND"),e.qZA(),e.TgZ(29,"h2",21),e._uU(30,"Beauty & Hair Studio"),e.qZA(),e.TgZ(31,"p",22),e._uU(32,"Shop 51 - IBB MALL, Shiroro Road, Tunga Minna"),e.qZA(),e.TgZ(33,"h4",20)(34,"span"),e._uU(35),e.ALo(36,"uppercase"),e.qZA()(),e._UZ(37,"hr",23),e.TgZ(38,"table",24)(39,"caption",25),e._uU(40),e.ALo(41,"date"),e.qZA(),e.TgZ(42,"thead")(43,"tr")(44,"th"),e._uU(45,"SERVICE"),e.qZA(),e.TgZ(46,"th"),e._uU(47,"COST"),e.qZA(),e.TgZ(48,"th"),e._uU(49,"COM"),e.qZA(),e.TgZ(50,"th"),e._uU(51,"TIMES"),e.qZA(),e.TgZ(52,"th"),e._uU(53,"TOT"),e.qZA()()(),e.TgZ(54,"tbody"),e.YNc(55,k,15,15,"tr",26),e.qZA(),e.TgZ(56,"tfoot")(57,"th",27),e._uU(58),e.ALo(59,"number"),e.qZA(),e.TgZ(60,"th",28),e._uU(61),e.ALo(62,"number"),e.qZA()()()()()),2&o){let y,T;e.xp6(3),e.Q6J("defaultHref",null==i.staff||null==i.staff.acctType?null:i.staff.acctType.toLowerCase()),e.xp6(5),e.Q6J("ngIf","Standard"!==(null==i.staff?null:i.staff.acctType)),e.xp6(1),e.Q6J("ngModel",i.eDate)("bsConfig",e.DdM(30,R)),e.xp6(8),e.hij(" ",e.lcZ(18,19,null==i.serviceHistory||null==i.serviceHistory.main?null:i.serviceHistory.main.cost)," "),e.xp6(3),e.Q6J("ngIf","Super"==(null==i.staff?null:i.staff.acctType)),e.xp6(1),e.Q6J("ngIf","Super"==(null==i.staff?null:i.staff.acctType)),e.xp6(2),e.Q6J("ngForOf",null==i.serviceHistory?null:i.serviceHistory.byPayMethod),e.xp6(2),e.Q6J("columns",i.columns)("data",null==i.serviceHistory?null:i.serviceHistory.services)("rowsPerPage",10)("rowContextMenu",i.tableMenu),e.xp6(10),e.AsE("",e.lcZ(36,21,"Staff Service Invoice")," #",null==i.servicesService||null==i.servicesService.serviceToPrint?null:i.servicesService.serviceToPrint.invoiceId,""),e.xp6(5),e.AsE(" WELL DONE, ",(null==i.servicesService||null==i.servicesService.serviceToPrint||null==i.servicesService.serviceToPrint.renderedBy?null:i.servicesService.serviceToPrint.renderedBy.firstName)+" "+(null==i.servicesService||null==i.servicesService.serviceToPrint||null==i.servicesService.serviceToPrint.renderedBy?null:i.servicesService.serviceToPrint.renderedBy.surName)," @ ",e.xi3(41,23,null==i.servicesService||null==i.servicesService.serviceToPrint?null:i.servicesService.serviceToPrint.createdAt,"LLL M, yyyy - h:mma")," "),e.xp6(15),e.Q6J("ngForOf",null==i.servicesService||null==i.servicesService.serviceToPrint?null:i.servicesService.serviceToPrint.serviceItems),e.xp6(3),e.hij("Total Cost: ",e.lcZ(59,26,null==(y=i.servicesService.serviceToPrintTotals(null==i.servicesService?null:i.servicesService.serviceToPrint))?null:y.totalCost),""),e.xp6(3),e.hij("Total Commission: ",e.lcZ(62,28,null==(T=i.servicesService.serviceToPrintTotals(null==i.servicesService?null:i.servicesService.serviceToPrint))?null:T.totalCommission),"")}},dependencies:[v.sg,v.O5,D.Fj,D.JJ,D.On,m.Sm,m.W2,m.Gu,m.wd,m.sr,m.oU,x.BN,B.Np,B.Y5,L.I,v.gd,v.JJ,v.uU],styles:["[_nghost-%COMP%]{--ion-color-primary: #1F5BBC;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #3dc2ff;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #f3f3f3;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}"]})}return r})()}];let Y=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=e.oAB({type:r});static#i=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(F),u.Bz]})}return r})(),W=(()=>{class r{static#e=this.\u0275fac=function(o){return new(o||r)};static#t=this.\u0275mod=e.oAB({type:r});static#i=this.\u0275inj=e.cJS({imports:[b._o,b.Nu,f.gw,Y]})}return r})()},6177:(H,g,n)=>{n.d(g,{c:()=>f});var u=n(4850),c=n(9063),h=n(4650);let f=(()=>{class l extends u.q2{constructor(){super(c.ih.Setting,"rmd",!0),this.getSystemConfig().subscribe(a=>{this.systemConfig=a})}getDeleted(a,p,A){return this.get({endPoint:[c.wm.settingsQuery],params:[{k:"type",v:a},{k:"sDate",v:JSON.stringify(p)},{k:"eDate",v:JSON.stringify(A)}]})}saveSystemConfig(a){return this.post({payload:a,endPoint:[c.yv.settingsStore,c.yv.saveSettings]})}getSystemConfig(){return this.get({endPoint:[c.wm.settingsQuery,c.wm.getSettings]})}static#e=this.\u0275fac=function(p){return new(p||l)};static#t=this.\u0275prov=h.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},8115:(H,g,n)=>{n.d(g,{Z:()=>h});var u=n(953),c=n(833);function h(f){(0,c.Z)(1,arguments);var l=(0,u.Z)(f);return l.setHours(0,0,0,0),l}},5119:(H,g,n)=>{n.d(g,{Z:()=>h});var u=n(953),c=n(833);function h(f){(0,c.Z)(1,arguments);var l=(0,u.Z)(f);return l.setDate(1),l.setHours(0,0,0,0),l}},895:(H,g,n)=>{n.d(g,{Z:()=>l});var u=n(953),c=n(1998),h=n(833),f=n(8370);function l(E,a){var p,A,P,O,M,Z,b,e;(0,h.Z)(1,arguments);var m=(0,f.j)(),_=(0,c.Z)(null!==(p=null!==(A=null!==(P=null!==(O=a?.weekStartsOn)&&void 0!==O?O:null==a||null===(M=a.locale)||void 0===M||null===(Z=M.options)||void 0===Z?void 0:Z.weekStartsOn)&&void 0!==P?P:m.weekStartsOn)&&void 0!==A?A:null===(b=m.locale)||void 0===b||null===(e=b.options)||void 0===e?void 0:e.weekStartsOn)&&void 0!==p?p:0);if(!(_>=0&&_<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=(0,u.Z)(E),D=v.getDay(),x=(D<_?7:0)+D-_;return v.setDate(v.getDate()-x),v.setHours(0,0,0,0),v}}}]);