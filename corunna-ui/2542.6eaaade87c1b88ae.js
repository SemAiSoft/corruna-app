"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[2542],{2542:(w,m,o)=>{o.r(m),o.d(m,{GameHistoryPageModule:()=>$});var f=o(9595),s=o(5861),g=o(5115),u=o(8118),l=o(4201),P=o(6059),c=o(4850),y=o(9063),_=o(8115),b=o(895),M=o(5119),O=o(8033),Z=o(9808),T=o(2958),S=o(6177),t=o(4650),D=o(2412),h=o(6895),x=o(4006),E=o(6297),I=o(2216),U=o(9492),B=o(2879),G=o(5694);const R=function(){return{dateInputFormat:"DD/MM/YYYY",containerClass:"theme-blue",adaptivePosition:!0}};function L(n,p){if(1&n){const e=t.EpF();t.TgZ(0,"input",6),t.NdJ("ngModelChange",function(i){t.CHM(e);const d=t.oxw();return t.KtG(d.sDate=i)}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("ngModel",e.sDate)("bsConfig",t.DdM(2,R))}}function J(n,p){if(1&n&&(t.TgZ(0,"div",16)(1,"label"),t._uU(2),t.qZA(),t._uU(3,": "),t.TgZ(4,"span"),t._uU(5),t.ALo(6,"number"),t.qZA()()),2&n){const e=p.$implicit;t.xp6(2),t.Oqu(null==e?null:e._id),t.xp6(3),t.Oqu(t.lcZ(6,2,(null==e?null:e.amount)||0))}}function N(n,p){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2,"Player:"),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(4),t.Oqu(null==e.selectedRow?null:e.selectedRow.player)}}function k(n,p){if(1&n&&(t.TgZ(0,"span",29),t._uU(1),t.ALo(2,"date"),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.AsE(" ","Deleted by: "+(null==e.deletedBy?null:e.deletedBy.firstName)+" "+(null==e.deletedBy?null:e.deletedBy.surName)," - ",t.xi3(2,2,e.deletedAt,"medium")," ")}}const F=function(n,p){return{rowData:n,i:p}};function Y(n,p){if(1&n&&(t.TgZ(0,"tr",26)(1,"td",27),t._uU(2),t._UZ(3,"br"),t.YNc(4,k,3,5,"span",28),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"number"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"number"),t.qZA()()),2&n){const e=p.$implicit,r=p.index,i=t.oxw(2);t.Q6J("ownContextMenu",i.itemMenu)("contextRow",t.WLB(12,F,e,r))("eventType",i.platform.is("iphone")?"press":"conntextmenu"),t.xp6(2),t.hij(" ",e.gameName," "),t.xp6(2),t.Q6J("ngIf",e.deleted),t.xp6(2),t.Oqu(t.lcZ(7,8,e.gameCost)),t.xp6(3),t.Oqu(e.numOfTimes),t.xp6(2),t.Oqu(t.lcZ(12,10,(e.gameCost||1)*((null==e?null:e.numOfTimes)||1)))}}function j(n,p){if(1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",17)(2,"ion-title",18),t._UZ(3,"fa-icon",19),t._uU(4," Games History Detail "),t.qZA()()(),t.TgZ(5,"ion-content")(6,"table",20)(7,"tbody")(8,"tr")(9,"td"),t._uU(10,"Date:"),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.ALo(13,"date"),t.qZA()(),t.TgZ(14,"tr")(15,"td"),t._uU(16,"Sold By:"),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA()(),t.YNc(19,N,5,1,"tr",21),t.TgZ(20,"tr")(21,"td"),t._uU(22,"Total Amount:"),t.qZA(),t.TgZ(23,"td",22),t._uU(24),t.ALo(25,"number"),t.qZA()()()(),t.TgZ(26,"div",23),t._uU(27,"SALE ITEMS"),t.qZA(),t.TgZ(28,"table",24)(29,"thead")(30,"tr")(31,"th"),t._uU(32,"ITEM"),t.qZA(),t.TgZ(33,"th"),t._uU(34,"AMT"),t.qZA(),t.TgZ(35,"th"),t._uU(36,"X"),t.qZA(),t.TgZ(37,"th"),t._uU(38,"TOTAL"),t.qZA()()(),t.TgZ(39,"tbody"),t.YNc(40,Y,13,15,"tr",25),t.qZA()()()),2&n){const e=t.oxw();t.xp6(12),t.Oqu(t.xi3(13,6,e.selectedRow.createdAt,"LLL d, yy - h:m a")),t.xp6(6),t.AsE("",null==e.selectedRow||null==e.selectedRow.userAccount?null:e.selectedRow.userAccount.firstName," ",null==e.selectedRow||null==e.selectedRow.userAccount?null:e.selectedRow.userAccount.surName,""),t.xp6(1),t.Q6J("ngIf",null==e.selectedRow?null:e.selectedRow.player),t.xp6(5),t.Oqu(t.lcZ(25,9,e.selectedRow.amount||0)),t.xp6(16),t.Q6J("ngForOf",e.selectedRow.gameItems)}}const W=function(){return[0,.6,.8,.95]},Q=[{path:"",component:(()=>{class n{constructor(e,r,i,d,C,q,V){var A,a=this;this.localStorageService=e,this.gameService=r,this.platform=i,this.menuService=d,this.dialogService=C,this.router=q,this.systemConfigService=V,this.sDate=new Date,this.eDate=new Date,this.gameHistory=[],this.gameTotalAmount={},this.gamesByPay=[],this.columns=[{header:"INVOICE",field:"invoiceId"},{header:"Games",field:"gamesCount"},{header:"Amount",field:"amount"},{header:"DATE",field:"date"}],this.rowMenu=[{iconLeft:"book-open",name:"View",clickAction:(A=(0,s.Z)(function*(){a.selectedRow=a.menuService.contextRow.rowData,a.modal.present(),a.menuService.closeAllMenu()}),function(){return A.apply(this,arguments)})},{divider:!0,name:"",clickAction:function(){var A=(0,s.Z)(function*(){});return function(){return A.apply(this,arguments)}}()},{iconLeft:"trash-alt",iconLeftStyle:"f:red",name:"Delete",clickAction:function(){var A=(0,s.Z)(function*(){if("Super"!==a.staff.acctType)return void a.menuService.closeAllMenu();const v=a.menuService.contextRow.rowData;a.menuService.closeAllMenu(),v&&"Super"===a.staff.acctType&&(yield(0,Z.n)(a.dialogService.openConfirmDialog({title:"Action Confirmation",message:"Are you sure to delete this?"})))&&a.gameService.deleteHistory(v._id,"batch").subscribe(H=>{H?.modifiedCount>0&&(T.F.show({text:"Item "+y.kt.itemDeleted,duration:"long"}),a.getGameHistory(),a.gameService.updateReport.next(!0))})});return function(){return A.apply(this,arguments)}}()}],this.itemMenu=[{iconLeft:"trash-alt",iconLeftStyle:"f:red",name:"Delete",clickAction:function(){var A=(0,s.Z)(function*(){if("Super"!==a.staff.acctType)return void a.menuService.closeAllMenu();const v=a.menuService.contextRow.rowData;a.menuService.closeAllMenu(),v&&"Super"===a.staff.acctType&&(yield(0,Z.n)(a.dialogService.openConfirmDialog({title:"Action Confirmation",message:"Are you sure to delete this?"})))&&a.gameService.deleteHistory(v._id,"item").subscribe(H=>{H?._id&&(T.F.show({text:"Item "+y.kt.itemDeleted,duration:"long"}),a.getGameHistory(),a.gameService.updateReport.next(!0))})});return function(){return A.apply(this,arguments)}}()}],this.selectedRow=null}ngOnInit(){this.staff=JSON.parse(this.localStorageService.get("staff-profile")||"{}"),this.systemConfigService.getSystemConfig().subscribe(e=>{this.settings=e,"Daily"==this.settings.commissionRange&&(this.sDate=(0,_.Z)(new Date)),"Weekly"==this.settings.commissionRange&&(this.sDate=(0,b.Z)(new Date)),"Monthly"==this.settings.commissionRange&&(this.sDate=(0,M.Z)(new Date))}),this.getGameHistory()}ionViewDidEnter(){this.getGameHistory()}getGameHistory(){"Standard"==this.staff?.acctType&&(this.eDate=new Date,this.sDate=new Date),this.gameService.getHistory(this.sDate,this.eDate).subscribe(e=>{this.gameTotalAmount=e?.gamesTotalAmount||0,this.gamesByPay=e?.gamesByPayMethod||[],this.gameHistory=e?.history?.map(r=>({_id:r._id,invoiceId:r.invoiceId,gamesCount:r.gameItems.length,gameItems:r.gameItems,createdAt:r.createdAt,userAccount:r.userAccount,amount:r.gameItems.filter(i=>!i.deleted).reduce((i,d)=>i+d.gameCost*(d.numOfTimes||1),0),date:(0,O.Z)(new Date(r.createdAt),"d/M/yy - h:ma")}))})}closeModal(){this.router.navigate(["Super"==this.staff.acctType?"/super/game-home":this.staff.acctType?.toLowerCase()])}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(c.n2),t.Y36(P.h),t.Y36(D.t4),t.Y36(l.hl),t.Y36(g.xA),t.Y36(f.F0),t.Y36(S.c))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["healmah-game-history"]],viewQuery:function(r,i){if(1&r&&t.Gf(u.ki,5),2&r){let d;t.iGM(d=t.CRH())&&(i.modal=d.first)}},hostBindings:function(r,i){1&r&&t.NdJ("popstate",function(C){return i.closeModal(C)},!1,t.Jf7)},decls:23,vars:15,consts:[["color","primary"],["slot","start"],["color","light",3,"defaultHref"],["slot","end","color","light"],[1,"flex","gap:5","p:10","{b:#0F85E9!}_input"],["class","form-control","type","text","bsDatepicker","",3,"ngModel","bsConfig","ngModelChange",4,"ngIf"],["type","text","bsDatepicker","",1,"form-control",3,"ngModel","bsConfig","ngModelChange"],[1,"btn","btn-outline-primary",3,"click"],["icon","search"],[1,"bg:transparent","shadow:0|0|5px|rgba(0,0,0,0.2)","h:100px","w:100%","d:flex","flex-direction:column","ai:center","jc:center"],[1,"flex","jc:space-between","w:100%","p:5","bb:1|solid|gray"],["class","flex gap:5 f:black! f:1.1rem! {f:bold}>span",4,"ngFor","ngForOf"],[1,"f:2rem","f:black","f:bold"],[1,"f:black","opacity:0.8"],[3,"columns","data","rowContextMenu"],["handleBehavior","cycle",3,"initialBreakpoint","breakpoints"],[1,"flex","gap:5","f:black!","f:1.1rem!","{f:bold}>span"],["color","primary",1,"ion-padding-horizontal"],[1,"text-align:center!","d:flex!","gap:10"],["icon","book-open"],[1,"table","table-success"],[4,"ngIf"],["currency",""],[1,"text-center","text-decoration-underline"],[1,"table","table-info","table-striped"],["class","rel","contextMenu","",3,"ownContextMenu","contextRow","eventType",4,"ngFor","ngForOf"],["contextMenu","",1,"rel",3,"ownContextMenu","contextRow","eventType"],[1,"position:relative!"],["class","f:red! f:0.8rem",4,"ngIf"],[1,"f:red!","f:0.8rem"]],template:function(r,i){1&r&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5,"Played Games"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"div",4),t.YNc(8,L,1,3,"input",5),t.TgZ(9,"input",6),t.NdJ("ngModelChange",function(C){return i.eDate=C}),t.qZA(),t.TgZ(10,"button",7),t.NdJ("click",function(){return i.getGameHistory()}),t._UZ(11,"fa-icon",8),t.qZA()(),t.TgZ(12,"main",9)(13,"header",10),t.YNc(14,J,7,4,"div",11),t.qZA(),t.TgZ(15,"h2",12),t._uU(16),t.ALo(17,"number"),t.qZA(),t.TgZ(18,"label",13),t._uU(19,"Gross Balance"),t.qZA()(),t._UZ(20,"prime-table",14),t.TgZ(21,"ion-modal",15),t.YNc(22,j,41,11,"ng-template"),t.qZA()()),2&r&&(t.xp6(3),t.Q6J("defaultHref",null==i.staff||null==i.staff.acctType?null:i.staff.acctType.toLowerCase()),t.xp6(5),t.Q6J("ngIf","Standard"!==(null==i.staff?null:i.staff.acctType)),t.xp6(1),t.Q6J("ngModel",i.eDate)("bsConfig",t.DdM(13,R)),t.xp6(5),t.Q6J("ngForOf",i.gamesByPay),t.xp6(2),t.hij(" ",t.lcZ(17,11,(null==i.gameTotalAmount?null:i.gameTotalAmount.amount)||0)," "),t.xp6(4),t.Q6J("columns",i.columns)("data",i.gameHistory)("rowContextMenu",i.rowMenu),t.xp6(1),t.Q6J("initialBreakpoint",.6)("breakpoints",t.DdM(14,W)))},dependencies:[h.sg,h.O5,x.Fj,x.JJ,x.On,E.Sf,u.Sm,u.W2,u.Gu,u.wd,u.sr,u.ki,u.oU,I.BN,U.Np,U.Y5,B.I,G.l,h.JJ,h.uU],styles:["[_nghost-%COMP%]{--ion-color-primary: #1F5BBC;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #3dc2ff;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #f3f3f3;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}"]})}return n})()}];let K=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[f.Bz.forChild(Q),f.Bz]})}return n})(),$=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[c._o,c.Nu,g.gw,l.HV,K]})}return n})()},6177:(w,m,o)=>{o.d(m,{c:()=>u});var f=o(4850),s=o(9063),g=o(4650);let u=(()=>{class l extends f.q2{constructor(){super(s.ih.Setting,"rmd",!0),this.getSystemConfig().subscribe(c=>{this.systemConfig=c})}getDeleted(c,y,_){return this.get({endPoint:[s.wm.settingsQuery],params:[{k:"type",v:c},{k:"sDate",v:JSON.stringify(y)},{k:"eDate",v:JSON.stringify(_)}]})}saveSystemConfig(c){return this.post({payload:c,endPoint:[s.yv.settingsStore,s.yv.saveSettings]})}getSystemConfig(){return this.get({endPoint:[s.wm.settingsQuery,s.wm.getSettings]})}static#t=this.\u0275fac=function(y){return new(y||l)};static#e=this.\u0275prov=g.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},8115:(w,m,o)=>{o.d(m,{Z:()=>g});var f=o(953),s=o(833);function g(u){(0,s.Z)(1,arguments);var l=(0,f.Z)(u);return l.setHours(0,0,0,0),l}},5119:(w,m,o)=>{o.d(m,{Z:()=>g});var f=o(953),s=o(833);function g(u){(0,s.Z)(1,arguments);var l=(0,f.Z)(u);return l.setDate(1),l.setHours(0,0,0,0),l}},895:(w,m,o)=>{o.d(m,{Z:()=>l});var f=o(953),s=o(1998),g=o(833),u=o(8370);function l(P,c){var y,_,b,M,O,Z,T,S;(0,g.Z)(1,arguments);var t=(0,u.j)(),D=(0,s.Z)(null!==(y=null!==(_=null!==(b=null!==(M=c?.weekStartsOn)&&void 0!==M?M:null==c||null===(O=c.locale)||void 0===O||null===(Z=O.options)||void 0===Z?void 0:Z.weekStartsOn)&&void 0!==b?b:t.weekStartsOn)&&void 0!==_?_:null===(T=t.locale)||void 0===T||null===(S=T.options)||void 0===S?void 0:S.weekStartsOn)&&void 0!==y?y:0);if(!(D>=0&&D<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var h=(0,f.Z)(P),x=h.getDay(),E=(x<D?7:0)+x-D;return h.setDate(h.getDate()-E),h.setHours(0,0,0,0),h}}}]);