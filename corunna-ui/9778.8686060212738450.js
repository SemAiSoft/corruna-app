"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[9778],{7755:(l,a,e)=>{e.r(a),e.d(a,{SalesHistoryPageModule:()=>s});var c=e(9595),t=e(547),n=e(4650);const u=[{path:"",component:t.R}];let i=(()=>{class o{static#t=this.\u0275fac=function(d){return new(d||o)};static#s=this.\u0275mod=n.oAB({type:o});static#e=this.\u0275inj=n.cJS({imports:[c.Bz.forChild(u),c.Bz]})}return o})();var r=e(4850),h=e(5115);let s=(()=>{class o{static#t=this.\u0275fac=function(d){return new(d||o)};static#s=this.\u0275mod=n.oAB({type:o});static#e=this.\u0275inj=n.cJS({imports:[r._o,r.Nu,h.gw,i]})}return o})()},6109:(l,a,e)=>{e.d(a,{T:()=>i});var c=e(4850),t=e(9063),n=e(1135),u=e(4650);let i=(()=>{class r extends c.q2{constructor(){super(t.ih.STOCK,"cpt",!0),this.updateReport=new n.X(!1)}getPurchases(){return this.get({endPoint:[t.kg.stockQuery,t.kg.stockPurchase]})}getAllStocks(s){return this.get({endPoint:[t.kg.stockQuery,t.kg.activeStocks],params:[{k:"query-type",v:s}]})}saveStock(s){return this.post({endPoint:[t.ve.stockStore,t.ve.stockPurchase],payload:s})}savePurchase(s){return this.post({endPoint:[t.ve.stockStore,t.ve.stockPurchase],payload:s})}deleteStock(s){return this.delete({endPoint:[t.ve.stockStore,t.ve.stockPurchase],payload:s})}getSaleStocks(){return this.get({endPoint:[t.kg.stockQuery,t.ol.saleItems]})}processSale(s){return this.post({endPoint:[t.ve.stockStore,t.eb.dispenseOrder],payload:s})}getPreviousVendors(){return this.get({endPoint:[t.kg.stockQuery,t.kg.purchaseVendors]})}getOldStockItems(){return this.get({endPoint:[t.kg.stockQuery,t.kg.oldStocks]})}getStockItemPurchase(s){return this.get({endPoint:[t.kg.stockQuery,t.kg.stockPurchase],params:[{k:"stockItemId",v:s}]})}getOutOfStocks(s){return this.get({endPoint:[t.kg.stockQuery,t.kg.outOfStocks],params:[{k:"os-type",v:s}]})}static#t=this.\u0275fac=function(o){return new(o||r)};static#s=this.\u0275prov=u.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"})}return r})()}}]);