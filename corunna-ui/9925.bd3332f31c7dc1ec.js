"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[9925],{9925:(N,p,s)=>{s.r(p),s.d(p,{SellStockPageModule:()=>G});var S=s(9595),c=s(5861),n=s(4006),I=s(5115),l=s(9063),h=s(1247),a=s(2958),m=s(4850),T=s(9808),A=s(4715),y=s(9652),t=s(4650),v=s(6895),b=s(6726),P=s(223),u=s(8118),F=s(2216),k=s(9252),B=s(1191);function w(o,d){if(1&o&&(t.TgZ(0,"option",34),t._uU(1),t.qZA()),2&o){const e=d.$implicit;t.Q6J("value",e.branchName),t.xp6(1),t.Oqu(e.branchName)}}function U(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"div",8)(1,"div",9)(2,"label",10)(3,"span",9),t._uU(4,"Branch:"),t.qZA()(),t.TgZ(5,"select",32),t.NdJ("change",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.getSalesStockItems())}),t.YNc(6,w,2,2,"option",33),t.qZA()()()}if(2&o){const e=t.oxw();t.xp6(6),t.Q6J("ngForOf",e.shopBranches)}}function M(o,d){1&o&&(t.TgZ(0,"th"),t._uU(1,"S/NO"),t.qZA())}function q(o,d){1&o&&(t.TgZ(0,"th"),t._uU(1,"UNIT PRICE"),t.qZA())}function O(o,d){1&o&&(t.TgZ(0,"th"),t._uU(1,"AMT"),t.qZA())}function J(o,d){1&o&&(t.TgZ(0,"th"),t._uU(1,"QTTY"),t.qZA())}function D(o,d){1&o&&(t.TgZ(0,"th"),t._uU(1,"QUANTITY"),t.qZA())}function Q(o,d){1&o&&(t.TgZ(0,"th"),t._uU(1,"AMOUNT"),t.qZA())}function C(o,d){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().index;t.xp6(1),t.Oqu(e+1)}}function Y(o,d){if(1&o&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.value.unitSellingPrice)}}const _=function(){return["desktop"]};function E(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"tr"),t.YNc(1,C,2,1,"td",20),t.TgZ(2,"td"),t._uU(3),t.qZA(),t.YNc(4,Y,2,1,"td",20),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"fa-icon",35),t.NdJ("click",function(){const f=t.CHM(e).index,g=t.oxw();return t.KtG(g.removeSaleItem(f))}),t.qZA()()()}if(2&o){const e=d.$implicit;t.xp6(1),t.Q6J("ifDeviceIs",t.DdM(5,_)),t.xp6(2),t.Oqu(e.value.itemName),t.xp6(1),t.Q6J("ifDeviceIs",t.DdM(6,_)),t.xp6(2),t.Oqu(e.value.quantity),t.xp6(2),t.Oqu(e.value.amount)}}const x=function(){return["mobile"]},z=[{path:"",component:(()=>{class o{constructor(e,i,r,f){this.dispensaryService=e,this.settingsService=i,this.healmahDialogService=r,this.localStorageService=f,this.saleItems=[],this.selectItem={},this.saleQtty=[],this.totalAmount=0,this.shopBranches=[],this.handler=()=>(this.saleForm.get("shopBranch")?.setValue("Super"!==this.staff.acctType?this.staff.shopBranch?._id:this.shopBranches.find(g=>g.branchName==this.saleForm.get("shopBranchSelect")?.value)?._id),!this.saleItemsArr.length||this.saleItemsArr.invalid||this.saleForm.invalid?(a.F.show({text:l.xR.invalidForm,duration:"long",position:"bottom"}),console.log("INVALID ",this.saleForm.value),Promise.resolve()):this.dispensaryService.saveSale(this.saleForm.value)),this.saleForm=new n.cw({shopBranchSelect:new n.NI(null),selectedDrugName:new n.NI(null),selectedQuantity:new n.NI(null),shopBranch:new n.NI(null),payMethod:new n.NI("Cash",n.kI.required),saleItems:new n.Oe([]),idempotencyKey:new n.NI((0,y.x0)())})}ngOnInit(){this.staff=JSON.parse(this.localStorageService.get("staff-profile")||"{}"),this.saleForm.get("shopBranchSelect")?.setValue(this.staff?.shopBranch?.branchName),this.getShopBranches(),this.getSalesStockItems()}getSalesStockItems(){var e=this;return(0,c.Z)(function*(){const i=yield(0,T.n)(e.dispensaryService.getSaleItems("Super"!==e.staff.acctType?e.staff.shopBranch?.branchName:e.saleForm.get("shopBranchSelect")?.value));e.saleItems=i&&i?.length?i:[]})()}getShopBranches(){var e=this;return(0,c.Z)(function*(){const i=yield(0,T.n)(e.settingsService.getShopBranches());e.shopBranches=i&&i?.length?i:[]})()}get saleItemsArr(){return this.saleForm.get("saleItems")}saleItemGroup(e){return new n.cw({itemName:new n.NI(e?.itemName||null,n.kI.required),quantity:new n.NI(e?.quantity||null,n.kI.required),unitCostPrice:new n.NI(e?.unitCostPrice||null,n.kI.required),unitSellingPrice:new n.NI(e?.unitSellingPrice||null,n.kI.required),amount:new n.NI(e?.amount||null,n.kI.required)})}stockItemSelected(e,i){if(this.selectItem=e.item,this.saleItemsArr.controls.find(f=>f.get("itemName")?.value==this.selectItem.itemName))return a.F.show({text:`${this.selectItem.itemName} is already selected, please edit it.`,position:"bottom",duration:"long"}),this.saleForm.get("selectedDrugName")?.reset(),void(this.selectItem=null);i.focus()}qttyBeingInputted(){const e=parseInt(this.saleForm.get("selectedQuantity")?.value);if(!e)return;this.saleQtty=[];const i=this.selectItem.unitSellingPrice*e;i&&this.saleQtty.push(`${e} = ${i}`)}addSelectedItem(e){const i=parseInt(this.saleForm.get("selectedQuantity")?.value);i>this.selectItem.quantity?a.F.show({text:`${this.selectItem.itemName}'s quantity remains ${this.selectItem.quantity}`,position:"bottom",duration:"long"}):(this.saleItemsArr.push(this.saleItemGroup({itemName:this.selectItem.itemName,quantity:i,unitCostPrice:this.selectItem.unitCostPrice,unitSellingPrice:this.selectItem.unitSellingPrice,amount:i*this.selectItem.unitSellingPrice})),this.saleForm.get("selectedDrugName")?.reset(),this.saleForm.get("selectedQuantity")?.reset(),e.focus(),this.calcTotalAmount())}removeSaleItem(e){this.saleItemsArr.removeAt(e),this.calcTotalAmount()}calcTotalAmount(){this.totalAmount=this.saleItemsArr.controls.reduce((e,i)=>e+parseFloat(i.get("amount")?.value),0)}apiResponse(e){e?._id&&(this.resetForm(),a.F.show({text:"Sale processed successfully",position:"bottom",duration:"long"}),this.saleForm.get("payMethod")?.setValue("Cash"),this.saleForm.get("shopBranchSelect")?.setValue(this.shopBranches[0]?.branchName),this.getSalesStockItems())}resetForm(){this.saleForm.reset(),this.saleForm.get("idempotencyKey")?.setValue((0,y.x0)()),this.saleItemsArr.clear(),this.totalAmount=0}static#t=this.\u0275fac=function(i){return new(i||o)(t.Y36(h.t),t.Y36(A.g),t.Y36(I.xA),t.Y36(m.n2))};static#e=this.\u0275cmp=t.Xpm({type:o,selectors:[["healmah-sell-stock"]],decls:59,vars:22,consts:[["color","primary"],["slot","start"],["color","light",3,"defaultHref"],["slot","start","color","light"],[1,"ion-padding"],[3,"formGroup"],["sizeMd","8","sizeSm","8","sizeXs","12",1,"flex","flex-column","gap:15"],["class","d-flex",4,"ngIf"],[1,"d-flex"],[1,"w-100"],[1,"flex","ai:center","jc:space-between"],["formControlName","payMethod",1,"form-control","r:0!","form-select","shadow:none!"],["value","Cash"],["value","Bank"],[1,""],["type","text","typeaheadOptionField","itemName","formControlName","selectedDrugName","placeholder","Item",1,"form-control","rounded-0","shadow:none!",2,"flex","2",3,"typeahead","typeaheadOnSelect"],["item",""],["type","text","digitOnly","","formControlName","selectedQuantity","typeaheadOptionField","amount","placeholder","1",1,"form-control","rounded-0","shadow-none",2,"flex","1",3,"typeahead","typeaheadOnSelect","input"],["qtty",""],[1,"table","table-striped","table-info","mt:20"],[4,"ifDeviceIs"],[4,"ngFor","ngForOf"],["sizeMd","4","sizeSm","4","sizeSm","12",1,"p-2"],[1,"w-100","d-flex","flex-column","align-items-center","my-5"],[1,"w-100","text-center","text-primary"],[2,"font-size","2rem","text-align","center"],["vertical","bottom","horizontal","start","slot","fixed"],["color","primary","btnDisabler","",3,"handler","handle"],["name","checkmark-outline"],["vertical","bottom","horizontal","end","slot","fixed"],["color","warning",3,"click"],["name","trash-bin-outline"],["formControlName","shopBranchSelect",1,"form-control","form-select","shadow:none!",3,"change"],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["icon","times",1,"text-danger","pointer",3,"click"]],template:function(i,r){if(1&i){const f=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),t._UZ(3,"ion-back-button",2),t.qZA(),t.TgZ(4,"ion-title",3),t._uU(5,"Sell Stock"),t.qZA()()(),t.TgZ(6,"ion-content",4)(7,"ion-grid")(8,"form",5)(9,"ion-row")(10,"ion-col",6),t.YNc(11,U,7,1,"div",7),t.TgZ(12,"div",8)(13,"div",9)(14,"label",10)(15,"span",9),t._uU(16,"Pay Method:"),t.qZA()(),t.TgZ(17,"select",11)(18,"option",12),t._uU(19,"Cash"),t.qZA(),t.TgZ(20,"option",13),t._uU(21,"Bank"),t.qZA()()()(),t.TgZ(22,"div",14)(23,"label"),t._uU(24,"Stock:"),t.qZA(),t.TgZ(25,"input",15,16),t.NdJ("typeaheadOnSelect",function(Z){t.CHM(f);const K=t.MAs(31);return t.KtG(r.stockItemSelected(Z,K))}),t.qZA()(),t.TgZ(27,"div")(28,"label"),t._uU(29,"Quantity: "),t.qZA(),t.TgZ(30,"input",17,18),t.NdJ("typeaheadOnSelect",function(){t.CHM(f);const Z=t.MAs(26);return t.KtG(r.addSelectedItem(Z))})("input",function(){return r.qttyBeingInputted()}),t.qZA()(),t.TgZ(32,"table",19)(33,"thead")(34,"tr"),t.YNc(35,M,2,0,"th",20),t.TgZ(36,"th"),t._uU(37,"ITEM"),t.qZA(),t.YNc(38,q,2,0,"th",20),t.YNc(39,O,2,0,"th",20),t.YNc(40,J,2,0,"th",20),t.YNc(41,D,2,0,"th",20),t.YNc(42,Q,2,0,"th",20),t._UZ(43,"th"),t.qZA()(),t.TgZ(44,"tbody"),t.YNc(45,E,11,7,"tr",21),t.qZA()()(),t.TgZ(46,"ion-col",22)(47,"div",23)(48,"span",24),t._uU(49,"TOTAL AMOUNT:"),t.qZA(),t.TgZ(50,"h1",25),t._uU(51),t.ALo(52,"number"),t.qZA()()()()()(),t.TgZ(53,"ion-fab",26)(54,"ion-fab-button",27),t.NdJ("handle",function(Z){return r.apiResponse(Z)}),t._UZ(55,"ion-icon",28),t.qZA()(),t.TgZ(56,"ion-fab",29)(57,"ion-fab-button",30),t.NdJ("click",function(){return r.resetForm()}),t._UZ(58,"ion-icon",31),t.qZA()()()}2&i&&(t.xp6(3),t.Q6J("defaultHref",null==r.staff||null==r.staff.acctType?null:r.staff.acctType.toLowerCase()),t.xp6(5),t.Q6J("formGroup",r.saleForm),t.xp6(3),t.Q6J("ngIf","Super"==(null==r.staff?null:r.staff.acctType)),t.xp6(14),t.Q6J("typeahead",r.saleItems),t.xp6(5),t.Q6J("typeahead",r.saleQtty),t.xp6(5),t.Q6J("ifDeviceIs",t.DdM(16,_)),t.xp6(3),t.Q6J("ifDeviceIs",t.DdM(17,_)),t.xp6(1),t.Q6J("ifDeviceIs",t.DdM(18,x)),t.xp6(1),t.Q6J("ifDeviceIs",t.DdM(19,x)),t.xp6(1),t.Q6J("ifDeviceIs",t.DdM(20,_)),t.xp6(1),t.Q6J("ifDeviceIs",t.DdM(21,_)),t.xp6(3),t.Q6J("ngForOf",r.saleItemsArr.controls),t.xp6(6),t.Oqu(t.lcZ(52,14,r.totalAmount||0)),t.xp6(3),t.Q6J("handler",r.handler))},dependencies:[v.sg,v.O5,n._Y,n.YN,n.Kr,n.Fj,n.EJ,n.JJ,n.JL,n.sg,n.u,b.h,P.B,u.Sm,u.wI,u.W2,u.IJ,u.W4,u.jY,u.Gu,u.gu,u.Nd,u.wd,u.sr,u.oU,F.BN,k.L,B.Bp,v.JJ],styles:["[_nghost-%COMP%]{--ion-color-primary: #EA6D35;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #1A2031;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #F4E9E9;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #f3f3f3;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}"]})}return o})()}];let R=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[S.Bz.forChild(z),S.Bz]})}return o})(),G=(()=>{class o{static#t=this.\u0275fac=function(i){return new(i||o)};static#e=this.\u0275mod=t.oAB({type:o});static#o=this.\u0275inj=t.cJS({imports:[m._o,m.Nu,R]})}return o})()},4715:(N,p,s)=>{s.d(p,{g:()=>I});var S=s(4850),c=s(9063),n=s(4650);let I=(()=>{class l extends S.q2{constructor(){super(c.ih.Setting,"dvt",!0)}saveShopBranch(a){return this.post({endPoint:[c.yv.settingsStore,c.yv.shopBranch],payload:a})}assignToShop(a){return this.put({endPoint:[c.yv.settingsStore,c.yv.shopBranch],payload:a})}getShopBranches(){return this.get({endPoint:[c.wm.settingsQuery,c.wm.shopBranch]})}deleteShopBranch(a){return this.delete({payload:a,endPoint:[c.yv.settingsStore,c.yv.shopBranch]})}static#t=this.\u0275fac=function(m){return new(m||l)};static#e=this.\u0275prov=n.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()},9652:(N,p,s)=>{s.d(p,{x0:()=>I});let I=(l=21)=>crypto.getRandomValues(new Uint8Array(l)).reduce((h,a)=>h+((a&=63)<36?a.toString(36):a<62?(a-26).toString(36).toUpperCase():a>62?"-":"_"),"")}}]);