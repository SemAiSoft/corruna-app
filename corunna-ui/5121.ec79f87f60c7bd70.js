"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[5121],{5121:(K,b,a)=>{a.r(b),a.d(b,{StockListPageModule:()=>H});var S=a(9595),x=a(5861),p=a(4850),n=a(4006),I=a(4201),Z=a(9063),s=a(8118),_=a(7407),N=a(8033),M=a(9809),m=a(2958),w=a(4715),t=a(4650),C=a(2412),v=a(6895),P=a(6726),A=a(8093),Q=a(9252),L=a(835),J=a(2879);function U(i,u){if(1&i&&(t.TgZ(0,"option",19),t._uU(1),t.qZA()),2&i){const o=u.$implicit;t.Q6J("value",o.branchName),t.xp6(1),t.Oqu(o.branchName)}}function q(i,u){if(1&i){const o=t.EpF();t.TgZ(0,"select",18),t.NdJ("change",function(){t.CHM(o);const e=t.oxw();return t.KtG(e.getStockItems())})("ngModelChange",function(e){t.CHM(o);const l=t.oxw();return t.KtG(l.shopBranch=e)}),t.TgZ(1,"option",19),t._uU(2,"All"),t.qZA(),t.YNc(3,U,2,2,"option",20),t.qZA()}if(2&i){const o=t.oxw();t.Q6J("ngModel",o.shopBranch),t.xp6(1),t.Q6J("value",null),t.xp6(2),t.Q6J("ngForOf",o.shopBranches)}}function E(i,u){if(1&i){const o=t.EpF();t.TgZ(0,"label",21),t.NdJ("ngModelChange",function(e){t.CHM(o);const l=t.oxw();return t.KtG(l.stockQueryType=e)}),t._uU(1,"Variants"),t.qZA()}if(2&i){const o=t.oxw();t.Q6J("ngModel",o.stockQueryType)}}function F(i,u){1&i&&(t.TgZ(0,"div")(1,"label",28),t._uU(2,"New Item Name:"),t.qZA(),t._UZ(3,"input",36),t.qZA())}function B(i,u){1&i&&(t.TgZ(0,"div",37)(1,"div",38)(2,"div",39)(3,"label",28),t._uU(4,"Currect Quantity:"),t.qZA(),t._UZ(5,"input",40),t.qZA(),t.TgZ(6,"div",39)(7,"label",28),t._uU(8,"New Quantity:"),t.qZA(),t._UZ(9,"input",41),t.qZA()(),t.TgZ(10,"div",38)(11,"div",39)(12,"label",28),t._uU(13,"Unit Cost Price:"),t.qZA(),t._UZ(14,"input",42),t.qZA(),t.TgZ(15,"div",39)(16,"label",28),t._uU(17,"Unit Selling Price:"),t.qZA(),t._UZ(18,"input",43),t.qZA()()())}function Y(i,u){if(1&i){const o=t.EpF();t.TgZ(0,"ion-header",22)(1,"ion-toolbar",23)(2,"h3",24),t._uU(3," Create/Edit "),t.qZA()()(),t.TgZ(4,"ion-content",25)(5,"form",26)(6,"div",27)(7,"div")(8,"label",28),t._uU(9,"What to Update:"),t.qZA(),t.TgZ(10,"select",29)(11,"option",30),t._uU(12,"Quantity & Prices"),t.qZA(),t.TgZ(13,"option",31),t._uU(14,"Item Name"),t.qZA()()()(),t.TgZ(15,"div")(16,"label",28),t._uU(17,"Stock Item Name:"),t.qZA(),t._UZ(18,"input",32),t.qZA(),t.YNc(19,F,4,0,"div",33),t.YNc(20,B,19,0,"div",34),t.TgZ(21,"ion-button",35),t.NdJ("handle",function(e){t.CHM(o);const l=t.oxw();return t.KtG(l.apiResponse(e))}),t._uU(22," Save "),t.qZA()()()}if(2&i){const o=t.oxw();let r,e;t.xp6(5),t.Q6J("formGroup",o.stockModeratorForm),t.xp6(14),t.Q6J("ngIf","itemName"===(null==(r=o.stockModeratorForm.get("updateType"))?null:r.value)),t.xp6(1),t.Q6J("ngIf","quantity"===(null==(e=o.stockModeratorForm.get("updateType"))?null:e.value)),t.xp6(1),t.Q6J("handler",o.handler)}}const R=function(){return[0,.6,.75]},D=[{path:"",component:(()=>{class i{constructor(o,r,e,l,c,d){var f=this;this.menuService=o,this.stockService=r,this.localStorageService=e,this.modalCtrl=l,this.settingsService=c,this.platform=d,this.columns=[{field:"sno",header:this.platform.platforms().includes("mobile")?"S/N":"S/NO"},{field:"itemName",header:"ITEM NAME"},{field:"quantity",header:this.platform.platforms().includes("mobile")?"QTTY":"QUANTITY"},{field:"unitCostPrice",header:"COST PRICE"},{field:"unitSellingPrice",header:"SALE PRICE"},{field:"createdAt",header:"DATE"}],this.tableMenu=[{iconLeft:"pen-alt",name:"Edit",clickAction:()=>{if("Super"!==this.staff.acctType)return;const g=this.menuService.contextRow.rowData._id;this.stockService.getStockItemPurchase(g).subscribe(function(){var j=(0,x.Z)(function*(h){if(h?._id){f.menuService.closeAllMenu();const T=h.itemsPurchased.findIndex(y=>y._id==g);if(-1==T)return void m.F.show({text:"Error, could not find the purchase for this item",duration:"long",position:"bottom"});const k=yield f.modalCtrl.create({component:M.Y,breakpoints:[0,.75,.85],initialBreakpoint:.75,backdropDismiss:!1,cssClass:"sheetModal",componentProps:{data:{purchase:h,itemIndex:T}}});k?.present().then(y=>{}),k.onDidDismiss().then(y=>{f.getStockItems()})}});return function(h){return j.apply(this,arguments)}}())}}],this.stockQueryType="single",this.stockItems=[],this.shopBranch=null,this.shopBranches=[],this.handler=g=>this.shopBranch?this.stockModeratorForm.invalid?(m.F.show({text:Z.xR.invalidForm,duration:"long",position:"bottom"}),Promise.resolve()):this.stockService.moderateStockItem(this.stockModeratorForm.value):(m.F.show({text:"Please select the intended shop branch",duration:"long",position:"bottom"}),Promise.resolve()),this.stockModeratorForm=new n.cw({shopBranch:new n.NI(null,n.kI.required),updateType:new n.NI("quantity",n.kI.required),itemName:new n.NI(null),newItemName:new n.NI(null),currentQtty:new n.NI(null),newQtty:new n.NI(null),unitCostPrice:new n.NI(null),unitSellingPrice:new n.NI(null)})}ngOnInit(){this.staff=JSON.parse(this.localStorageService.get("staff-profile")||"{}"),this.settingsService.getShopBranches().subscribe(o=>{this.shopBranches=o})}ionViewDidEnter(){"Super"!==this.staff?.acctType&&(this.columns=[{field:"sno",header:this.platform.platforms().includes("mobile")?"S/N":"S/NO"},{field:"itemName",header:"ITEM NAME"},{field:"quantity",header:this.platform.platforms().includes("mobile")?"QTTY":"QUANTITY"},{field:"unitSellingPrice",header:"SALE PRICE"},{field:"createdAt",header:"DATE"}]),"Super"==this.staff?.acctType&&this.tableMenu.push({iconLeft:"cube",name:"Update Stock",clickAction:()=>{const o=this.menuService.contextRow.rowData,r=this.stockItems.filter(e=>e.itemName==o.itemName).reduce((e,l)=>e+l.quantity,0);this.modal.componentProps={itemName:o.itemName,qtty:r},this.stockModeratorForm=new n.cw({shopBranch:new n.NI(this.shopBranch,n.kI.required),updateType:new n.NI("quantity",n.kI.required),itemName:new n.NI(o.itemName),newItemName:new n.NI(null),currentQtty:new n.NI(r),newQtty:new n.NI(r),unitCostPrice:new n.NI(o.unitCostPrice),unitSellingPrice:new n.NI(o.unitSellingPrice)}),this.menuService.closeAllMenu(),this.modal.present().then(()=>{const e={purchaseModal:!0,desc:"fake state for our modal"};history.state.modalState?history.replaceState(e,null):history.pushState(e,null)})}})}getStockItems(o){this.stockService.getStockItems(this.stockQueryType,"Super"==this.staff?.acctType?this.shopBranch:this.staff.shopBranch?.branchName).subscribe(r=>{this.stockItems=r?.length?r.map("Super"==this.staff?.acctType?(e,l)=>({_id:e?._id||e?.id,sno:l+1,itemName:e.itemName,quantity:e.quantity,unitCostPrice:e.unitCostPrice,unitSellingPrice:e.unitSellingPrice,createdAt:(0,N.Z)(new Date(e?.createdAt||new Date),"d/L/yy-h:ma")}):(e,l)=>({_id:e?._id||e?.id,sno:l+1,itemName:e.itemName,quantity:e.quantity,unitSellingPrice:e.unitSellingPrice,createdAt:(0,N.Z)(new Date(e?.createdAt||new Date),"d/L/yy-h:ma")})):[],o&&o.target.complete()})}apiResponse(o){o?._id&&(m.F.show({text:"Stock item updated successfully",duration:"long",position:"top"}),this.stockModeratorForm.reset(),this.closeModal(),this.getStockItems())}closeModal(){this.modal.dismiss()}static#t=this.\u0275fac=function(r){return new(r||i)(t.Y36(I.hl),t.Y36(_.q),t.Y36(p.n2),t.Y36(s.IN),t.Y36(w.g),t.Y36(C.t4))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["healmah-stock-list"]],viewQuery:function(r,e){if(1&r&&t.Gf(s.ki,5),2&r){let l;t.iGM(l=t.CRH())&&(e.modal=l.first)}},hostBindings:function(r,e){1&r&&t.NdJ("popstate",function(c){return e.closeModal(c)},!1,t.Jf7)},decls:24,vars:13,consts:[["color","primary"],["slot","start"],["color","light",3,"defaultHref"],["slot","start","color","light"],["slot","fixed",3,"ionRefresh"],[3,"columns","data","rowContextMenu","rowContextMenuEventType","isCustomCaption"],["dt",""],["caption",""],[1,"d-flex","justify-content-between","gap-2"],[1,"p-input-icon-left","flex-1","d:flex!","bg:white!"],[1,"pi","pi-search"],["type","search","placeholder","Search",1,"form-control","flex:1!","shadow-none","ps-5","b:none!",3,"placeholder","input"],["class","form-control form-select b:none! shadow:none! flex-basis:70px!",3,"ngModel","change","ngModelChange",4,"ngIf"],[1,"btn-group"],["btnRadio","single","tabindex","0","role","button",1,"btn","btn-outline-primary","px:2!",3,"ngModel","ngModelChange"],["class","btn btn-outline-warning px:2!","btnRadio","multiple","tabindex","0","role","button",3,"ngModel","ngModelChange",4,"ngIf"],["trigger","open-account-modal","sheetModal","","handleBehavior","cycle",3,"initialBreakpoint","breakpoints"],["modal",""],[1,"form-control","form-select","b:none!","shadow:none!","flex-basis:70px!",3,"ngModel","change","ngModelChange"],[3,"value"],[3,"value",4,"ngFor","ngForOf"],["btnRadio","multiple","tabindex","0","role","button",1,"btn","btn-outline-warning","px:2!",3,"ngModel","ngModelChange"],[1,"ion-no-border"],["color","tertiary"],[1,"flex","jc:center","px:20","f:black!"],[1,"ion-padding","pt:0!"],[1,"container","d-flex","flex-column","gap:12px",3,"formGroup"],[1,"flex","{flex:1!}>*"],["for",""],["formControlName","updateType",1,"form-control"],["value","quantity"],["value","itemName"],["type","text","readonly","","formControlName","itemName","placeholder","Item name",1,"form-control"],[4,"ngIf"],["class","d-flex flex-column gap-2 border-top",4,"ngIf"],["btnDisabler","","expand","block","fill","solid","shape","default",3,"handler","handle"],["wordCase","","case","capitalize","type","text","formControlName","newItemName","placeholder","Item name",1,"form-control"],[1,"d-flex","flex-column","gap-2","border-top"],[1,"d-flex","gap-2"],[1,"flex-1"],["type","text","readonly","","formControlName","currentQtty","placeholder","Current Quantity",1,"form-control"],["type","number","digitOnly","","formControlName","newQtty","placeholder","New Quantity",1,"form-control"],["type","number","digitOnly","","formControlName","unitCostPrice","placeholder","New Quantity",1,"form-control"],["type","number","digitOnly","","formControlName","unitSellingPrice","placeholder","New Quantity",1,"form-control"]],template:function(r,e){if(1&r){const l=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5,"Stock List"),t.qZA()()(),t.TgZ(6,"ion-content")(7,"ion-refresher",4),t.NdJ("ionRefresh",function(d){return e.getStockItems(d)}),t._UZ(8,"ion-refresher-content"),t.qZA(),t.TgZ(9,"prime-table",5,6)(11,"header",7)(12,"div",8)(13,"span",9),t._UZ(14,"i",10),t.TgZ(15,"input",11),t.NdJ("input",function(d){t.CHM(l);const f=t.MAs(10);return t.KtG(f.searchTable(d))}),t.qZA(),t.YNc(16,q,4,3,"select",12),t.qZA(),t.TgZ(17,"div",13)(18,"label",14),t.NdJ("ngModelChange",function(d){return e.stockQueryType=d})("ngModelChange",function(){return e.getStockItems()}),t._uU(19,"Single"),t.qZA(),t.YNc(20,E,2,1,"label",15),t.qZA()()()(),t.TgZ(21,"ion-modal",16,17),t.YNc(23,Y,23,4,"ng-template"),t.qZA()()}2&r&&(t.xp6(3),t.Q6J("defaultHref",null==e.staff||null==e.staff.acctType?null:e.staff.acctType.toLowerCase()),t.xp6(6),t.Q6J("columns",e.columns)("data",e.stockItems)("rowContextMenu",e.tableMenu)("rowContextMenuEventType",e.platform.is("iphone")?"click":"contextmenu")("isCustomCaption",!0),t.xp6(6),t.Q6J("placeholder",e.stockItems.length+" items"),t.xp6(1),t.Q6J("ngIf","Super"==(null==e.staff?null:e.staff.acctType)),t.xp6(2),t.Q6J("ngModel",e.stockQueryType),t.xp6(2),t.Q6J("ngIf","Super"==e.staff.acctType),t.xp6(1),t.Q6J("initialBreakpoint",.6)("breakpoints",t.DdM(12,R)))},dependencies:[v.sg,v.O5,n._Y,n.YN,n.Kr,n.Fj,n.wV,n.EJ,n.JJ,n.JL,n.On,n.sg,n.u,P.h,A.j,s.YG,s.Sm,s.W2,s.Gu,s.nJ,s.Wo,s.wd,s.sr,s.ki,s.oU,Q.L,L.lz,J.I],styles:["[_nghost-%COMP%]{--ion-color-primary: #EA6D35;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #1A2031;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #F4E9E9;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #f3f3f3;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}"]})}return i})()}];let O=(()=>{class i{static#t=this.\u0275fac=function(r){return new(r||i)};static#e=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({imports:[S.Bz.forChild(D),S.Bz]})}return i})();var G=a(5115);let H=(()=>{class i{static#t=this.\u0275fac=function(r){return new(r||i)};static#e=this.\u0275mod=t.oAB({type:i});static#o=this.\u0275inj=t.cJS({imports:[p._o,p.Nu,G.gw,O]})}return i})()}}]);