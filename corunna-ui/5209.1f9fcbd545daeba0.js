"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[5209],{5209:(F,y,n)=>{n.r(y),n.d(y,{ServiceListPageModule:()=>Y});var v=n(9595),a=n(5861),g=n(5115),S=n(1067),u=n(9063),k=n(4201),d=n(2958),h=n(2039),t=n(4006),o=n(4650),Z=n(2412),c=n(8118),P=n(6895),I=n(8093);function N(i,w){1&i&&(o.TgZ(0,"h3",12),o._uU(1," Edit Service "),o.qZA())}function x(i,w){1&i&&(o.TgZ(0,"h3",12),o._uU(1," Create Service "),o.qZA())}function E(i,w){if(1&i&&(o.TgZ(0,"option",13),o._uU(1),o.qZA()),2&i){const e=w.$implicit;o.Q6J("value",e),o.xp6(1),o.Oqu(e)}}let A=(()=>{class i{constructor(e,s,r,l,f,p){this.servicesService=e,this.toastService=s,this.menuService=r,this.systemConfigService=l,this.platform=f,this.navParams=p,this.services=[],this.commissions=[],this.serviceForm=new t.cw({serviceName:new t.NI(null,t.kI.required),serviceCost:new t.NI(null,[t.kI.required,t.kI.min(1)]),serviceCommission:new t.NI(null,[t.kI.required,t.kI.min(1)])})}saveService(){var e=this;return(0,a.Z)(function*(){e.serviceForm.invalid?yield d.F.show({text:u.xR.invalidForm,duration:"long",position:"top"}):e.servicesService.saveService(e.serviceForm.value).subscribe(function(){var s=(0,a.Z)(function*(r){r?._id&&(e.serviceForm.reset(),yield d.F.show({text:u.kt.formSaved,duration:"long",position:"top"}))});return function(r){return s.apply(this,arguments)}}())})()}ngOnInit(){const e=this.navParams.get("data");e&&(this.serviceForm=new t.cw({_id:new t.NI(e?._id),serviceName:new t.NI(e?.serviceName,t.kI.required),serviceCost:new t.NI(e?.serviceCost,[t.kI.required,t.kI.min(1)]),serviceCommission:new t.NI(e?.serviceCommission,[t.kI.required,t.kI.min(1)])}))}ionViewDidEnter(){this.systemConfigService.getSystemConfig().subscribe(e=>{e?._id&&(this.commissions=e.serviceCommissions)})}ionViewDidLeave(){this.serviceForm.reset(),this.menuService.contextRow=null}static#o=this.\u0275fac=function(s){return new(s||i)(o.Y36(S.r),o.Y36(g.kl),o.Y36(k.hl),o.Y36(h.c),o.Y36(Z.t4),o.Y36(Z.X1))};static#e=this.\u0275cmp=o.Xpm({type:i,selectors:[["healmah-service-edit"]],decls:26,vars:6,consts:[["color","primary"],["color","light",1,"app-title",3,"slot"],["class","flex jc:center px:20 f:white!",4,"ngIf"],["color","light",3,"slot"],["color","tertiary"],[1,"p:15","flex","flex:column","gap:15","{flex;flex:column;gap:10}>div","{f:black}_label","{b:#0F85E9!}_input","{b:#0F85E9!}_select",3,"formGroup"],["type","text","wordCase","","case","capitalize","formControlName","serviceName",1,"form-control"],["type","number","formControlName","serviceCost",1,"form-control"],["formControlName","serviceCommission",1,"form-control","form-select"],[3,"value",4,"ngFor","ngForOf"],[1,"btn","btn-outline-primary","mt:10",3,"click"],["type","reset",1,"btn","btn-outline-warning","mt:10",3,"click"],[1,"flex","jc:center","px:20","f:white!"],[3,"value"]],template:function(s,r){if(1&s&&(o.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title",1),o.YNc(3,N,2,0,"h3",2),o.YNc(4,x,2,0,"h3",2),o.qZA(),o._UZ(5,"ion-menu-button",3),o.qZA()(),o.TgZ(6,"ion-content",4)(7,"form",5)(8,"div")(9,"label"),o._uU(10,"Service name:"),o.qZA(),o._UZ(11,"input",6),o.qZA(),o.TgZ(12,"div")(13,"label"),o._uU(14,"Service Cost:"),o.qZA(),o._UZ(15,"input",7),o.qZA(),o.TgZ(16,"div")(17,"label"),o._uU(18,"Service Commission (%):"),o.qZA(),o.TgZ(19,"select",8),o._UZ(20,"option"),o.YNc(21,E,2,2,"option",9),o.qZA()(),o.TgZ(22,"button",10),o.NdJ("click",function(){return r.saveService()}),o._uU(23,"Save"),o.qZA(),o.TgZ(24,"button",11),o.NdJ("click",function(){return r.serviceForm.reset()}),o._uU(25,"Clear"),o.qZA()()()),2&s){let l,f;o.xp6(2),o.Q6J("slot",r.platform.is("iphone")?"end":"start"),o.xp6(1),o.Q6J("ngIf",null==(l=r.serviceForm.get("_id"))?null:l.value),o.xp6(1),o.Q6J("ngIf",!(null!=(f=r.serviceForm.get("_id"))&&f.value)),o.xp6(1),o.Q6J("slot",r.platform.is("iphone")?"start":"end"),o.xp6(2),o.Q6J("formGroup",r.serviceForm),o.xp6(14),o.Q6J("ngForOf",r.commissions)}},dependencies:[P.sg,P.O5,t._Y,t.YN,t.Kr,t.Fj,t.wV,t.EJ,t.JJ,t.JL,t.sg,t.u,I.j,c.W2,c.Gu,c.fG,c.wd,c.sr],styles:["[_nghost-%COMP%]{--ion-color-primary: #333B46;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #333B46;--ion-color-primary-tint: #333B46;--ion-color-secondary: #1F2630;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #1F2630;--ion-color-secondary-tint: #1F2630;--ion-color-tertiary: #f3f3f3;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}"]})}return i})();var M=n(8398),J=n(2879);const L=[{path:"",component:(()=>{class i{constructor(e,s,r,l,f,p,_,O){var T,m=this;this.servicesService=e,this.toastService=s,this.localStorageService=r,this.menuService=l,this.router=f,this.dialogService=p,this.platform=_,this.modalCtrl=O,this.columns=[{field:"serviceName",header:"SERVICE NAME"},{field:"serviceCost",header:"SERVICE COST"},{field:"serviceCommission",header:"COMMISSION"}],this.tableMenu=[{iconLeft:"pen-alt",name:"Edit",clickAction:(T=(0,a.Z)(function*(){"Super"===m.staff.acctType&&(m.modal=yield m.modalCtrl.create({component:A,breakpoints:[0,.65,.75],initialBreakpoint:.65,cssClass:"sheetModal",componentProps:{data:m.menuService.contextRow.rowData}}),m.menuService.closeAllMenu(),m.modal?.present().then(b=>{}),m.modal.onDidDismiss().then(b=>{m.getServices()}))}),function(){return T.apply(this,arguments)})},{iconLeftStyle:"f:red",iconLeft:"trash-alt",name:"Delete",clickAction:()=>{"Super"===this.staff.acctType&&this.dialogService.openConfirmDialog({title:"Action Confirmation",message:"Are you sure to delete this service?",containerStyle:"f:white! bg:black!"}).subscribe(T=>{T&&this.servicesService.deleteService(this.menuService.contextRow.rowData?._id).subscribe(function(){var b=(0,a.Z)(function*(C){(C?.length||Array.isArray(C))&&(m.services=C,yield d.F.show({text:"Service "+u.kt.itemDeleted,duration:"long",position:"top"}),m.menuService.closeAllMenu())});return function(C){return b.apply(this,arguments)}}())})}}],this.services=[]}ionViewDidEnter(){this.staff=JSON.parse(this.localStorageService.get("staff-profile")||"{}"),this.servicesService.getServices().subscribe(e=>{e?.length&&(this.services=e)})}openModal(){var e=this;return(0,a.Z)(function*(){e.modal=yield e.modalCtrl.create({component:A,breakpoints:[0,.65,.75],initialBreakpoint:.65,cssClass:"sheetModal"}),e.modal?.present().then(s=>{}),e.modal.onDidDismiss().then(s=>{e.getServices()})})()}getServices(){this.servicesService.getServices().subscribe(e=>{e?.length&&(this.services=e)})}closeModal(){this.router.navigate(["Super"==this.staff.acctType?"/super/hair-home":this.staff.acctType?.toLowerCase()])}static#o=this.\u0275fac=function(s){return new(s||i)(o.Y36(S.r),o.Y36(g.kl),o.Y36(M.n),o.Y36(k.hl),o.Y36(v.F0),o.Y36(g.xA),o.Y36(Z.t4),o.Y36(c.IN))};static#e=this.\u0275cmp=o.Xpm({type:i,selectors:[["healmah-service-list"]],hostBindings:function(s,r){1&s&&o.NdJ("popstate",function(f){return r.closeModal(f)},!1,o.Jf7)},decls:15,vars:6,consts:[["color","secondary"],["slot","start"],["color","light",3,"defaultHref"],["color","light","slot","end"],["color","primary",1,"$padding-top:5px","$padding-bottom:5px","$padding-start:5px","$padding-end:5px"],[3,"columns","data","isCustomCaption","rowContextMenu","rowsPerPage"],["table",""],["caption","",1,"d-flex","gap-1"],[1,"flex","ai:center","gap:5","bg:white","flex:1","pl:10","r:5"],[1,"pi","pi-search",3,"click"],["type","search","placeholder","Search",1,"form-control","shadow:none!","ps-3","b:none!",3,"input"],[1,"btn","btn-primary",3,"click"],["slot","icon-only","name","add"]],template:function(s,r){if(1&s){const l=o.EpF();o.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),o._UZ(3,"ion-back-button",2),o.qZA(),o.TgZ(4,"ion-title",3),o._uU(5,"Service List"),o.qZA()()(),o.TgZ(6,"ion-content",4)(7,"prime-table",5,6)(9,"caption",7)(10,"span",8)(11,"i",9),o.NdJ("click",function(){return r.getServices()}),o.qZA(),o.TgZ(12,"input",10),o.NdJ("input",function(p){o.CHM(l);const _=o.MAs(8);return o.KtG(_.searchTable(p))}),o.qZA()(),o.TgZ(13,"button",11),o.NdJ("click",function(){return r.openModal()}),o._UZ(14,"ion-icon",12),o.qZA()()()()}2&s&&(o.xp6(3),o.Q6J("defaultHref",null==r.staff||null==r.staff.acctType?null:r.staff.acctType.toLowerCase()),o.xp6(4),o.Q6J("columns",r.columns)("data",r.services)("isCustomCaption",!0)("rowContextMenu",r.tableMenu)("rowsPerPage",25))},dependencies:[c.Sm,c.W2,c.Gu,c.gu,c.wd,c.sr,c.oU,J.I],styles:["[_nghost-%COMP%]{--ion-color-primary: #333B46;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #333B46;--ion-color-primary-tint: #333B46;--ion-color-secondary: #1F2630;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #1F2630;--ion-color-secondary-tint: #1F2630;--ion-color-tertiary: #f3f3f3;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}"]})}return i})()}];let D=(()=>{class i{static#o=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275mod=o.oAB({type:i});static#t=this.\u0275inj=o.cJS({imports:[v.Bz.forChild(L),v.Bz]})}return i})();var U=n(4850);let Y=(()=>{class i{static#o=this.\u0275fac=function(s){return new(s||i)};static#e=this.\u0275mod=o.oAB({type:i});static#t=this.\u0275inj=o.cJS({imports:[U._o,g.gw,D]})}return i})()},2039:(F,y,n)=>{n.d(y,{c:()=>S});var v=n(4850),a=n(9063),g=n(4650);let S=(()=>{class u extends v.q2{constructor(){super(a.ih.Setting,"cpt",!0),this.getSystemConfig().subscribe(d=>{this.systemConfig=d})}getDeleted(d,h,t){return this.get({endPoint:[a.wm.settingsQuery],params:[{k:"type",v:d},{k:"sDate",v:JSON.stringify(h)},{k:"eDate",v:JSON.stringify(t)}]})}saveSystemConfig(d){return this.post({payload:d,endPoint:[a.yv.settingsStore,a.yv.saveSettings]})}getSystemConfig(){return this.get({endPoint:[a.wm.settingsQuery,a.wm.getSettings]})}static#o=this.\u0275fac=function(h){return new(h||u)};static#e=this.\u0275prov=g.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"})}return u})()}}]);