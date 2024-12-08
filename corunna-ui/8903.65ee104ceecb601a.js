"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[8903],{8903:(D,C,n)=>{n.d(C,{T:()=>Z});var P=n(5861),e=n(5115),m=n(4201),g=n(6109),p=n(9063),t=n(2958),h=n(8033),l=n(9418),i=n(4650),k=n(9595),y=n(8398),b=n(2412),M=n(8118),O=n(4006),I=n(835),x=n(2879);let Z=(()=>{class S{constructor(f,_,a,A,o,s,r,c){var u=this;this.stocksService=f,this.menuService=_,this.toastService=a,this.router=A,this.localStorageService=o,this.dialogService=s,this.platform=r,this.modalCtrl=c,this.columns=[{field:"itemName",header:"ITEM NAME"},{field:"quantity",header:"QUANTITY"},{field:"unitCostPrice",header:"COST"},{field:"unitSellingPrice",header:"SALE"},{field:"createdAt",header:"DATE"}],this.stocks=[],this.stockQueryType="single",this.tableMenu=[{iconLeft:"pen-alt",name:"Edit",clickAction:()=>{if("Super"!==this.staff.acctType)return;const d=this.menuService.contextRow.rowData._id;this.stocksService.getStockItemPurchase(d).subscribe(function(){var E=(0,P.Z)(function*(v){if(v?._id){u.menuService.closeAllMenu();const L=v.itemsPurchased.findIndex(N=>N._id==d);if(-1==L)return void t.F.show({text:"Error, could not find the purchase for this item",duration:"long",position:"bottom"});const T=yield u.modalCtrl.create({component:l.Y,breakpoints:[0,.65,.75],initialBreakpoint:.65,backdropDismiss:!1,cssClass:"sheetModal",componentProps:{data:{purchase:v,itemIndex:L}}});T?.present().then(N=>{}),T.onDidDismiss().then(N=>{u.getStockItems()})}else t.F.show({text:"Error, could not find the purchase for this item",duration:"long",position:"bottom"})});return function(v){return E.apply(this,arguments)}}())}},{iconLeftStyle:"f:red",iconLeft:"trash-alt",name:"Delete",clickAction:()=>{"Super"===this.staff.acctType&&this.dialogService.openConfirmDialog({title:"Action Confirmation",message:"Are you sure to delete this stock?",containerStyle:"bg:white! f:black!"}).subscribe(d=>{d&&this.stocksService.deleteStock(this.menuService.contextRow.rowData?._id).subscribe(function(){var E=(0,P.Z)(function*(v){(v?.length||Array.isArray(v))&&(yield t.F.show({text:"Stock item "+p.kt.itemDeleted,duration:"long",position:"top"}),u.stocks=v,u.menuService.closeAllMenu())});return function(v){return E.apply(this,arguments)}}())})}}],this.stocksWothByPrice=0,this.stocksWothByCost=0}ionViewDidEnter(){this.staff=JSON.parse(this.localStorageService.get("staff-profile")||"{}")}ionViewDidLeave(){this.menuService.closeAllMenu()}getStockItems(){this.stocksService.getAllStocks(this.stockQueryType).subscribe(f=>{f?.length&&(this.stocks=f?.map(_=>({_id:_._id,itemName:_.itemName,quantity:_.quantity,unitCostPrice:_.unitCostPrice,unitSellingPrice:_.unitSellingPrice,createdAt:(0,h.Z)(new Date(_.createdAt??new Date),"d/M/y - h:ma")})),this.stocksWothByCost=(0,p.bY)(f.reduce((_,a)=>_+a.quantity*a.unitCostPrice,0)),this.stocksWothByPrice=(0,p.bY)(f.reduce((_,a)=>_+a.quantity*a.unitSellingPrice,0)))})}closeModal(){this.router.navigate(["Super"==this.staff.acctType?"/super/stock-home":this.staff.acctType?.toLowerCase()])}static#t=this.\u0275fac=function(_){return new(_||S)(i.Y36(g.T),i.Y36(m.hl),i.Y36(e.kl),i.Y36(k.F0),i.Y36(y.n),i.Y36(e.xA),i.Y36(b.t4),i.Y36(M.IN))};static#e=this.\u0275cmp=i.Xpm({type:S,selectors:[["healmah-stock-list"]],hostBindings:function(_,a){1&_&&i.NdJ("popstate",function(o){return a.closeModal(o)},!1,i.Jf7)},decls:19,vars:9,consts:[["color","secondary"],["slot","start"],["color","light",3,"defaultHref"],["slot","end","color","light"],["color","primary"],[3,"columns","data","rowContextMenu","rowsPerPage","isCustomCaption"],["dt",""],["caption",""],[1,"d-flex","justify-content-between","gap-1"],[1,"flex:1!","d:flex!","ai:center","pl:7","bg:white!","gap:6"],[1,"pi","pi-search"],["type","search","placeholder","Search",1,"form-control","flex:1!","shadow-none","b:none!","f:0.9rem!","m:0!","px:0!",3,"placeholder","input"],[1,"btn-group"],["btnRadio","single","tabindex","0","role","button",1,"btn","btn-outline-primary","px:2!",3,"ngModel","ngModelChange"],["btnRadio","multiple","tabindex","0","role","button",1,"btn","btn-outline-warning","px:2!",3,"ngModel","ngModelChange"]],template:function(_,a){if(1&_){const A=i.EpF();i.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),i._UZ(3,"ion-back-button",2),i.qZA(),i.TgZ(4,"ion-title",3),i._uU(5,"Stock List"),i.qZA()()(),i.TgZ(6,"ion-content",4)(7,"prime-table",5,6)(9,"header",7)(10,"div",8)(11,"span",9),i._UZ(12,"i",10),i.TgZ(13,"input",11),i.NdJ("input",function(s){i.CHM(A);const r=i.MAs(8);return i.KtG(r.searchTable(s))}),i.qZA()(),i.TgZ(14,"div",12)(15,"label",13),i.NdJ("ngModelChange",function(s){return a.stockQueryType=s})("ngModelChange",function(){return a.getStockItems()}),i._uU(16,"Single"),i.qZA(),i.TgZ(17,"label",14),i.NdJ("ngModelChange",function(s){return a.stockQueryType=s}),i._uU(18,"Variants"),i.qZA()()()()()()}2&_&&(i.xp6(3),i.Q6J("defaultHref",null==a.staff||null==a.staff.acctType?null:a.staff.acctType.toLowerCase()),i.xp6(4),i.Q6J("columns",a.columns)("data",a.stocks)("rowContextMenu",a.tableMenu)("rowsPerPage",25)("isCustomCaption",!0),i.xp6(6),i.Q6J("placeholder","N"+a.stocksWothByCost+" ~ N"+a.stocksWothByPrice),i.xp6(2),i.Q6J("ngModel",a.stockQueryType),i.xp6(2),i.Q6J("ngModel",a.stockQueryType))},dependencies:[O.JJ,O.On,M.Sm,M.W2,M.Gu,M.wd,M.sr,M.oU,I.lz,x.I],styles:["[_nghost-%COMP%]{--ion-color-primary: #333B46;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #333B46;--ion-color-primary-tint: #333B46;--ion-color-secondary: #1F2630;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #1F2630;--ion-color-secondary-tint: #1F2630;--ion-color-tertiary: #f3f3f3;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}"]})}return S})()},9418:(D,C,n)=>{n.d(C,{Y:()=>_});var P=n(6109),e=n(4006),m=n(2958),g=n(9063),p=n(7978),t=n(4650),h=n(8118),l=n(2412),i=n(6895),k=n(6726),y=n(5939),b=n(8093),M=n(2216),O=n(7165),I=n(9252),x=n(1191);function Z(a,A){1&a&&(t.TgZ(0,"h3",20),t._uU(1," Edit Purchase "),t.qZA())}function S(a,A){1&a&&(t.TgZ(0,"h3",20),t._uU(1," Create Purchase "),t.qZA())}function U(a,A){if(1&a){const o=t.EpF();t.TgZ(0,"div",23)(1,"div",24)(2,"div",25)(3,"label",26),t._uU(4,"Item name:"),t.qZA(),t.TgZ(5,"input",27,28),t.NdJ("change",function(r){t.CHM(o);const c=t.MAs(6),u=t.MAs(11),d=t.oxw(2);return t.KtG(d.avoidDuplicateName(c,u,r))})("typeaheadOnSelect",function(r){t.CHM(o);const c=t.MAs(6),u=t.MAs(11),d=t.oxw(2);return t.KtG(d.avoidDuplicateName(c,u,r))}),t.qZA()(),t.TgZ(7,"div",25)(8,"ion-label"),t._uU(9,"Quantity:"),t.qZA(),t.TgZ(10,"input",29,30),t.NdJ("input",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.unitCostPriceChanged())}),t.qZA()()(),t.TgZ(12,"div",24)(13,"div",25)(14,"ion-label"),t._uU(15,"Cost Price:"),t.qZA(),t.TgZ(16,"input",31),t.NdJ("change",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.unitCostPriceChanged())})("input",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.unitCostPriceChanged())}),t.qZA()(),t.TgZ(17,"div",25)(18,"ion-label"),t._uU(19,"Selling Price:"),t.qZA(),t.TgZ(20,"input",32),t.NdJ("input",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.setPriceOrMarkup("markup"))})("change",function(){t.CHM(o);const r=t.oxw(2);return t.KtG(r.setPriceOrMarkup("markup"))}),t.qZA()()()()}if(2&a){const o=t.oxw().$implicit,s=t.oxw();let r,c;t.Q6J("formGroupName",s.activePage),t.xp6(5),t.Q6J("disable",null==(r=o.get("id"))?null:r.value)("typeahead",s.oldStockList)("typeaheadOptionField","_id"),t.xp6(5),t.Q6J("disable",null==(c=o.get("id"))?null:c.value),t.xp6(6),t.Q6J("decimal",!0),t.xp6(4),t.Q6J("decimal",!0)}}function f(a,A){if(1&a&&(t.TgZ(0,"div",21),t.YNc(1,U,21,7,"div",22),t.qZA()),2&a){const o=A.index,s=t.oxw();t.xp6(1),t.Q6J("ngIf",s.activePage===o)}}let _=(()=>{class a{constructor(o,s,r){this.modalController=o,this.navParams=s,this.stocksService=r,this.itemCostWorth=0,this.itemsCostWorth=0,this.activePage=0,this.oldStockList=[],this.purchaseVendors=[],this.handler=c=>this.purchaseForm.invalid?(m.F.show({text:g.xR.invalidForm,duration:"long",position:"bottom"}),Promise.resolve()):this.stocksService.savePurchase(this.purchaseForm.getRawValue()),this.purchaseForm=new e.cw({vendor:new e.NI(null,e.kI.required),itemsPurchased:new e.Oe([this.purchasedItemsGroup()])})}ngOnInit(){this.getOldStockItemList();const o=this.navParams.get("data");o?.purchase&&(this.fillForm(o.purchase),o?.itemIndex>=0&&(this.activePage=o?.itemIndex))}ngOnDestroy(){history.state.purchaseModal&&history.back()}ionViewDidEnter(){this.stocksService.getPreviousVendors().subscribe(o=>{this.purchaseVendors=o})}closeModal(){this.modalController.dismiss()}get itemsPurchasedArr(){return this.purchaseForm.get("itemsPurchased")}purchasedItemsGroup(o){return new e.cw({id:new e.NI(o?._id),itemName:new e.NI(o?.itemName??null,e.kI.required),expiryDate:new e.NI(new Date(o?.expiryDate??(0,p.Z)(new Date,1))),quantity:new e.NI(o?.quantity??null,[e.kI.required,e.kI.min(0)]),unitCostPrice:new e.NI(o?.unitCostPrice??null,[e.kI.required,e.kI.min(1)]),unitSellingPrice:new e.NI(o?.unitSellingPrice??null,[e.kI.required,e.kI.min(1)]),unitSellingMarkup:new e.NI(o?.unitSellingMarkup??null)})}addItemPurchased(){this.purchaseForm.valid?(this.itemsPurchasedArr.push(this.purchasedItemsGroup()),this.activePage=this.itemsPurchasedArr.length-1,this.calculateStockWorth()):m.F.show({text:"Please ensure previous items are set up correctly before adding another.",position:"bottom",duration:"long"})}removeItemPurchased(){if(this.itemsPurchasedArr.controls[this.activePage]?.get("id")?.value)m.F.show({text:"Already saved items can not be removed.",position:"bottom",duration:"long"});else{if(this.itemsPurchasedArr.controls.length<=1)return;this.itemsPurchasedArr.removeAt(this.activePage),this.activePage=this.itemsPurchasedArr.length-1,this.calculateStockWorth()}}fillForm(o){this.purchaseForm=new e.cw({id:new e.NI(o._id),vendor:new e.NI(o.vendor,e.kI.required),itemsPurchased:new e.Oe([...o.itemsPurchased.map((s,r)=>{this.activePage=r;const c=s.unitCostPrice;return s.unitSellingMarkup=(0,g.QV)((s.unitSellingPrice-c)/c*100??0,2),this.purchasedItemsGroup(s)})])}),this.calculateStockWorth()}getOldStockItemList(){this.stocksService.getOldStockItems().subscribe(o=>{this.oldStockList=o})}paginate(o){this.activePage=o.page,this.calculateStockWorth()}calculateStockWorth(){this.itemsCostWorth=0;for(let o=0;o<this.itemsPurchasedArr.length;o++)this.itemsPurchasedArr.controls[o]?.get("quantity")?.invalid||this.itemsPurchasedArr.controls[o]?.get("unitCostPrice")?.invalid||(this.itemsCostWorth+=parseFloat(this.itemsPurchasedArr.controls[o]?.get("quantity")?.value)*parseFloat(this.itemsPurchasedArr.controls[o]?.get("unitCostPrice")?.value)||0);this.itemCostWorth=parseInt(this.itemsPurchasedArr.controls[this.activePage]?.get("quantity")?.value||0)*parseFloat(this.itemsPurchasedArr.controls[this.activePage]?.get("unitCostPrice")?.value||0)||0}avoidDuplicateName(o,s,r){const c=this.itemsPurchasedArr.controls[this.activePage].get("itemName")?.value;if(this.itemsPurchasedArr.getRawValue().filter(d=>d.itemName===c)?.length>1)return m.F.show({text:"Item with same name already exist, please edit the former.",position:"bottom",duration:"long"}),this.itemsPurchasedArr.controls[this.activePage].get("itemName")?.reset(),void o?.focus();if(r?.item){const d=r.item,E=d.unitCostPrice;d.unitSellingMarkup=(0,g.QV)((d.unitSellingPrice-E)/E*100||0,2),this.itemsPurchasedArr.controls[this.activePage].get("unitCostPrice")?.setValue(d.unitCostPrice),this.itemsPurchasedArr.controls[this.activePage].get("unitSellingPrice")?.setValue(d.unitSellingPrice),this.itemsPurchasedArr.controls[this.activePage].get("unitSellingMarkup")?.setValue(d.unitSellingMarkup),s?.focus()}}unitCostPriceChanged(){if(this.itemsPurchasedArr.controls[this.activePage].get("unitSellingMarkup")?.value||this.itemsPurchasedArr.controls[this.activePage].get("unitSellingMarkup")?.setValue(25),this.itemsPurchasedArr.controls[this.activePage].get("unitCostPrice")?.value&&this.itemsPurchasedArr.controls[this.activePage].get("quantity")?.value){const o=parseFloat(this.itemsPurchasedArr.controls[this.activePage].get("unitSellingMarkup")?.value)*parseFloat(this.itemsPurchasedArr.controls[this.activePage].get("unitCostPrice")?.value||1)/100,s=parseFloat(this.itemsPurchasedArr.controls[this.activePage].get("unitCostPrice")?.value)+o;this.itemsPurchasedArr.controls[this.activePage].get("unitSellingPrice")?.setValue((0,g.QV)(s,0))}this.calculateStockWorth()}setPriceOrMarkup(o){if("markup"==o){const s=parseFloat(this.itemsPurchasedArr.controls[this.activePage].get("unitCostPrice")?.value),r=parseFloat(this.itemsPurchasedArr.controls[this.activePage].get("unitSellingPrice")?.value);if(!s||!r)return;const u=(r-s)/s*100;this.itemsPurchasedArr.controls[this.activePage].get("unitSellingMarkup")?.setValue((0,g.QV)(u||0,2))}else{const s=parseFloat(this.itemsPurchasedArr.controls[this.activePage].get("unitSellingMarkup")?.value)*parseFloat(this.itemsPurchasedArr.controls[this.activePage].get("unitCostPrice")?.value||1)/100,r=parseFloat(this.itemsPurchasedArr.controls[this.activePage].get("unitCostPrice")?.value)+s;this.itemsPurchasedArr.controls[this.activePage].get("unitSellingPrice")?.setValue((0,g.QV)(r||0,0))}}apiResponse(o){o?._id&&(m.F.show({text:"Purchase saved successfully",duration:"long",position:"top"}),this.purchaseForm.get("id")?.value?this.fillForm(o):(this.purchaseForm.reset(),this.itemsPurchasedArr.clear(),this.itemsPurchasedArr.push(this.purchasedItemsGroup())))}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(h.IN),t.Y36(l.X1),t.Y36(P.T))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["healmah-stock-purchase"]],hostBindings:function(s,r){1&s&&t.NdJ("popstate",function(u){return r.closeModal(u)},!1,t.Jf7)},decls:33,vars:17,consts:[[1,"ion-no-border"],["color","tertiary"],[1,"flex","jc:space-between","ai:center!","px:20","f:black!","h:100%"],["class","f:black!",4,"ngIf"],["icon","times",1,"f:1.5rem","text-danger",3,"click"],[1,"ion-padding-horizontal"],[1,"pt:10",3,"formGroup"],[1,"flex","{flex:1}>div","gap:10"],["wordCase","","case","capitalize","formControlName","vendor","type","text","wordCase","","case","capitalize","container","body",1,"form-control","shadow-none",3,"typeahead","typeaheadOptionField"],[1,"flex","ai:center","{flex:1}_h4","my:20","bg:rgba(0,0,0,0.1)","r:5","p:3"],[1,"flex","ai:center","jc:center"],["icon","minus-circle",1,"btn","btn-outline-warning","btn-sm","m-sm-0",3,"click"],[1,"flex","ai:center","jc:center","mx:10"],["icon","plus-circle",1,"btn","btn-outline-success","btn-sm","m-sm-0",3,"click"],["class","form-group","formArrayName","itemsPurchased",4,"ngFor","ngForOf"],[1,"px-1","d-flex","flex-column","py-2"],[1,"p-0",3,"pageLinkSize","rows","first","totalRecords","onPageChange"],[1,"d-flex"],["btnDisabler","","expand","full","fill","solid","shape","round",1,"w-100",3,"handler","handle"],["expand","full","color","warning","fill","solid","shape","round",1,"w-100"],[1,"f:black!"],["formArrayName","itemsPurchased",1,"form-group"],["class","flex flex-direction:column gap:10",3,"formGroupName",4,"ngIf"],[1,"flex","flex-direction:column","gap:10",3,"formGroupName"],[1,"d-flex","gap-2"],[1,"flex-1"],["for",""],["formControlName","itemName","wordCase","","case","capitalize","controlConfig","","container","body","type","text",1,"form-control","shadow-none",3,"disable","typeahead","typeaheadOptionField","change","typeaheadOnSelect"],["self",""],["formControlName","quantity","controlConfig","","digitOnly","","type","number",1,"form-control","shadow-none",3,"disable","input"],["qtty",""],["type","number","digitOnly","","formControlName","unitCostPrice",1,"form-control","shadow-none",3,"decimal","change","input"],["digitOnly","","formControlName","unitSellingPrice","type","number",1,"form-control","shadow-none",3,"decimal","input","change"]],template:function(s,r){if(1&s&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"header",2),t.YNc(3,Z,2,0,"h3",3),t.YNc(4,S,2,0,"h3",3),t.TgZ(5,"fa-icon",4),t.NdJ("click",function(){return r.modalController.dismiss()}),t.qZA()()()(),t.TgZ(6,"ion-content",5)(7,"form",6)(8,"div",7)(9,"div")(10,"ion-label"),t._uU(11,"Vendor Name:"),t.qZA(),t._UZ(12,"input",8),t.qZA()(),t.TgZ(13,"header",9)(14,"h4",10),t._uU(15),t.ALo(16,"number"),t.qZA(),t.TgZ(17,"fa-icon",11),t.NdJ("click",function(){return r.removeItemPurchased()}),t.qZA(),t.TgZ(18,"h3",12),t._uU(19,"ITEMS"),t.qZA(),t.TgZ(20,"fa-icon",13),t.NdJ("click",function(){return r.addItemPurchased()}),t.qZA(),t.TgZ(21,"h4",10),t._uU(22),t.ALo(23,"number"),t.qZA()(),t.TgZ(24,"main"),t.YNc(25,f,2,1,"div",14),t.qZA(),t.TgZ(26,"footer",15)(27,"p-paginator",16),t.NdJ("onPageChange",function(u){return r.paginate(u)}),t.qZA(),t.TgZ(28,"div",17)(29,"ion-button",18),t.NdJ("handle",function(u){return r.apiResponse(u)}),t._uU(30," Save "),t.qZA(),t.TgZ(31,"ion-button",19),t._uU(32," Reset "),t.qZA()()()()()),2&s){let c,u;t.xp6(3),t.Q6J("ngIf",null==(c=r.purchaseForm.get("_id"))?null:c.value),t.xp6(1),t.Q6J("ngIf",!(null!=(u=r.purchaseForm.get("_id"))&&u.value)),t.xp6(3),t.Q6J("formGroup",r.purchaseForm),t.xp6(5),t.Q6J("typeahead",r.purchaseVendors)("typeaheadOptionField","_id"),t.xp6(3),t.hij(" ",t.lcZ(16,13,r.itemCostWorth||0)," "),t.xp6(7),t.hij(" ",t.lcZ(23,15,r.itemsCostWorth||0)," "),t.xp6(3),t.Q6J("ngForOf",r.itemsPurchasedArr.controls),t.xp6(2),t.Q6J("pageLinkSize",3)("rows",1)("first",r.activePage)("totalRecords",r.itemsPurchasedArr.length),t.xp6(2),t.Q6J("handler",r.handler)}},dependencies:[i.sg,i.O5,e._Y,e.Fj,e.wV,e.JJ,e.JL,e.sg,e.u,e.x0,e.CE,k.h,y.V,b.j,h.YG,h.W2,h.Gu,h.Q$,h.sr,M.BN,O.D,I.L,x.Bp,i.JJ]})}return a})()},6109:(D,C,n)=>{n.d(C,{T:()=>p});var P=n(4850),e=n(9063),m=n(1135),g=n(4650);let p=(()=>{class t extends P.q2{constructor(){super(e.ih.STOCK,"cpt",!0),this.updateReport=new m.X(!1)}getPurchases(){return this.get({endPoint:[e.kg.stockQuery,e.kg.stockPurchase]})}getAllStocks(l){return this.get({endPoint:[e.kg.stockQuery,e.kg.activeStocks],params:[{k:"query-type",v:l}]})}saveStock(l){return this.post({endPoint:[e.ve.stockStore,e.ve.stockPurchase],payload:l})}savePurchase(l){return this.post({endPoint:[e.ve.stockStore,e.ve.stockPurchase],payload:l})}deleteStock(l){return this.delete({endPoint:[e.ve.stockStore,e.ve.stockPurchase],payload:l})}getSaleStocks(){return this.get({endPoint:[e.kg.stockQuery,e.ol.saleItems]})}processSale(l){return this.post({endPoint:[e.ve.stockStore,e.eb.dispenseOrder],payload:l})}getPreviousVendors(){return this.get({endPoint:[e.kg.stockQuery,e.kg.purchaseVendors]})}getOldStockItems(){return this.get({endPoint:[e.kg.stockQuery,e.kg.oldStocks]})}getStockItemPurchase(l){return this.get({endPoint:[e.kg.stockQuery,e.kg.stockPurchase],params:[{k:"stockItemId",v:l}]})}getOutOfStocks(l){return this.get({endPoint:[e.kg.stockQuery,e.kg.outOfStocks],params:[{k:"os-type",v:l}]})}static#t=this.\u0275fac=function(i){return new(i||t)};static#e=this.\u0275prov=g.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})()},5866:(D,C,n)=>{n.d(C,{Z:()=>g});var P=n(1998),e=n(953),m=n(833);function g(p,t){(0,m.Z)(2,arguments);var h=(0,e.Z)(p),l=(0,P.Z)(t);if(isNaN(l))return new Date(NaN);if(!l)return h;var i=h.getDate(),k=new Date(h.getTime());return k.setMonth(h.getMonth()+l+1,0),i>=k.getDate()?k:(h.setFullYear(k.getFullYear(),k.getMonth(),i),h)}},7978:(D,C,n)=>{n.d(C,{Z:()=>g});var P=n(1998),e=n(5866),m=n(833);function g(p,t){(0,m.Z)(2,arguments);var h=(0,P.Z)(t);return(0,e.Z)(p,12*h)}}}]);