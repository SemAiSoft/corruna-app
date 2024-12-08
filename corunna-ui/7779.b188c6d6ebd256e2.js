"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[7779],{7779:(O,p,n)=>{n.r(p),n.d(p,{OutOfStockPageModule:()=>v});var g=n(9595),m=(n(9063),n(1263)),h=n(4850),o=n(4650),l=n(2412),c=n(8118),r=n(4006),k=n(835),b=n(2879);const S=[{path:"",component:(()=>{class i{constructor(a,s,e,d){this.stockService=a,this.platform=s,this.router=e,this.localStorageService=d,this.osTab="os",this.shopBranch=null,this.stockItems=[],this.columns=[{field:"sno",header:this.platform.platforms().includes("mobile")?"S/N":"S/NO"},{field:"_id",header:"ITEM NAME"},{field:"quantity",header:this.platform.platforms().includes("mobile")?"QTTY":"QUANTITY"},{field:"unitCostPrice",header:"COST PRICE"},{field:"avgCons",header:this.platform.platforms().includes("mobile")?"ADC":"AVG DAILY CONS"},{field:"avgCost",header:(this.platform.platforms().includes("mobile"),"COST")}]}ngOnInit(){}ionViewDidEnter(){this.staff=JSON.parse(this.localStorageService.get("staff-profile")||"{}")}getOutOfStock(a){this.stockService.getOutOfStocks(this.osTab).subscribe(s=>{a&&a.target.complete(),this.stockItems=s?.length?s.map((e,d)=>({sno:d+1,_id:e?._id||e?.id,itemName:e.itemName,quantity:e.quantity,unitCostPrice:Math.round(e.unitCostPrice),avgCons:e.avgCons,avgCost:Math.round(e.avgCost)})):[]})}closeModal(){this.router.navigate(["Super"==this.staff.acctType?"/super/stock-home":this.staff.acctType?.toLowerCase()])}static#o=this.\u0275fac=function(s){return new(s||i)(o.Y36(m.T),o.Y36(l.t4),o.Y36(g.F0),o.Y36(h.n2))};static#t=this.\u0275cmp=o.Xpm({type:i,selectors:[["healmah-out-of-stock"]],hostBindings:function(s,e){1&s&&o.NdJ("popstate",function(u){return e.closeModal(u)},!1,o.Jf7)},decls:21,vars:6,consts:[["color","primary"],["slot","start"],["color","light","defaultHref","super"],["slot","start","color","light"],["slot","fixed",3,"ionRefresh"],[3,"columns","data","isCustomCaption"],["dt",""],["caption",""],[1,"d-flex","justify-content-between","gap-2"],[1,"p-input-icon-left","flex-1","d:flex!","bg:white!"],[1,"pi","pi-search"],["type","search","placeholder","Search",1,"form-control","flex:1!","shadow-none","ps-5","b:none!",3,"placeholder","input"],[1,"btn-group","flex-basis:fit-content"],["btnRadio","os","tabindex","0","role","button",1,"btn","btn-outline-primary","px:2!",3,"ngModel","ngModelChange"],["btnRadio","nos","tabindex","0","role","button",1,"btn","btn-outline-warning","px:2!",3,"ngModel","ngModelChange"]],template:function(s,e){if(1&s){const d=o.EpF();o.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),o._UZ(3,"ion-back-button",2),o.qZA(),o.TgZ(4,"ion-title",3),o._uU(5,"Out Of Stocks"),o.qZA()()(),o.TgZ(6,"ion-content")(7,"ion-refresher",4),o.NdJ("ionRefresh",function(f){return e.getOutOfStock(f)}),o._UZ(8,"ion-refresher-content"),o.qZA(),o.TgZ(9,"prime-table",5,6)(11,"header",7)(12,"div",8)(13,"span",9),o._UZ(14,"i",10),o.TgZ(15,"input",11),o.NdJ("input",function(f){o.CHM(d);const C=o.MAs(10);return o.KtG(C.searchTable(f))}),o.qZA()(),o.TgZ(16,"div",12)(17,"label",13),o.NdJ("ngModelChange",function(f){return e.osTab=f})("ngModelChange",function(){return e.getOutOfStock()}),o._uU(18,"O/S"),o.qZA(),o.TgZ(19,"label",14),o.NdJ("ngModelChange",function(f){return e.osTab=f}),o._uU(20,"NO/S"),o.qZA()()()()()()}2&s&&(o.xp6(9),o.Q6J("columns",e.columns)("data",e.stockItems)("isCustomCaption",!0),o.xp6(6),o.Q6J("placeholder",e.stockItems.length+" items"),o.xp6(2),o.Q6J("ngModel",e.osTab),o.xp6(2),o.Q6J("ngModel",e.osTab))},dependencies:[r.JJ,r.On,c.Sm,c.W2,c.Gu,c.nJ,c.Wo,c.wd,c.sr,c.oU,k.lz,b.I],styles:["[_nghost-%COMP%]{--ion-color-primary: #1F5BBC;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #3dc2ff;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #f3f3f3;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}"]})}return i})()}];let y=(()=>{class i{static#o=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=o.oAB({type:i});static#e=this.\u0275inj=o.cJS({imports:[g.Bz.forChild(S),g.Bz]})}return i})();var P=n(5115);let v=(()=>{class i{static#o=this.\u0275fac=function(s){return new(s||i)};static#t=this.\u0275mod=o.oAB({type:i});static#e=this.\u0275inj=o.cJS({imports:[h._o,h.Nu,P.gw,y]})}return i})()},1263:(O,p,n)=>{n.d(p,{T:()=>o});var g=n(4850),t=n(9063),m=n(1135),h=n(4650);let o=(()=>{class l extends g.q2{constructor(){super(t.ih.STOCK,"rmd",!0),this.updateReport=new m.X(!1)}getPurchases(){return this.get({endPoint:[t.kg.stockQuery,t.kg.stockPurchase]})}getAllStocks(r){return this.get({endPoint:[t.kg.stockQuery,t.kg.activeStocks],params:[{k:"query-type",v:r}]})}saveStock(r){return this.post({endPoint:[t.ve.stockStore,t.ve.stockPurchase],payload:r})}savePurchase(r){return this.post({endPoint:[t.ve.stockStore,t.ve.stockPurchase],payload:r})}deleteStock(r){return this.delete({endPoint:[t.ve.stockStore,t.ve.stockPurchase],payload:r})}getSaleStocks(){return this.get({endPoint:[t.kg.stockQuery,t.ol.saleItems]})}processSale(r){return this.post({endPoint:[t.ve.stockStore,t.eb.dispenseOrder],payload:r})}getPreviousVendors(){return this.get({endPoint:[t.kg.stockQuery,t.kg.purchaseVendors]})}getOldStockItems(){return this.get({endPoint:[t.kg.stockQuery,t.kg.oldStocks]})}getStockItemPurchase(r){return this.get({endPoint:[t.kg.stockQuery,t.kg.stockPurchase],params:[{k:"stockItemId",v:r}]})}getOutOfStocks(r){return this.get({endPoint:[t.kg.stockQuery,t.kg.outOfStocks],params:[{k:"os-type",v:r}]})}static#o=this.\u0275fac=function(k){return new(k||l)};static#t=this.\u0275prov=h.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"})}return l})()}}]);