"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[2429],{2429:(x,l,o)=>{o.r(l),o.d(l,{AccountListPageModule:()=>v});var u=o(9595),a=o(4669),d=o(5115),t=o(4650),g=o(6895),A=o(2993),m=o(8118);function h(s,T){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"span",3)(13,"ng-icon",4),t.NdJ("click",function(){const i=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.editAccount(i))}),t.qZA(),t.TgZ(14,"ng-icon",5),t.NdJ("click",function(){const i=t.CHM(e).$implicit,r=t.oxw();return t.KtG(r.deleteAccount(i))}),t.qZA()()()()}if(2&s){const e=T.$implicit;t.xp6(2),t.AsE("",null==e?null:e.firstName," ",null==e?null:e.surName,""),t.xp6(2),t.Oqu(null==e?null:e.email),t.xp6(2),t.Oqu(null==e||null==e.sector?null:e.sector.sectorName),t.xp6(2),t.Oqu(null==e?null:e.acctType),t.xp6(2),t.Oqu((null==e||null==e.acctCode?null:e.acctCode.acctCode)||"NIL")}}const f=[{path:"",component:(()=>{class s{constructor(e,c,n){this.settingsService=e,this.dialogService=c,this.router=n,this.userAccounts=[]}ionViewDidEnter(){this.user=JSON.parse(localStorage.getItem("nix-staff")||"{}"),this.settingsService.getUserAccounts().subscribe(e=>{this.userAccounts=e,this.userAccounts="All"==this.user?.sector?.sectorName?e:e?.filter(c=>c?.sector?.sectorName?.toLowerCase()==this.user?.sector?.sectorName?.toLowerCase())||[]})}editAccount(e){this.router.navigate(["core/settings/account-form"],{state:e})}deleteAccount(e){this.dialogService.openConfirmDialog({title:"Comfirm Action",message:"Are you to delete this account?"}).subscribe(c=>{c&&this.settingsService.deleteUserAccount(e?._id).subscribe(n=>{this.settingsService.getUserAccounts().subscribe(i=>{this.userAccounts=i,this.userAccounts="All"==this.user?.sector?.sectorName?i:i?.filter(r=>r?.sector?.sectorName?.toLowerCase()==this.user?.sector?.sectorName?.toLowerCase())||[]})})})}static#t=this.\u0275fac=function(c){return new(c||s)(t.Y36(a.g),t.Y36(d.xA),t.Y36(u.F0))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["healmah-account-list"]],decls:17,vars:1,consts:[[1,"table-responsive","p:15@media(min-width:870px)"],[1,"table","table-primary","table-bordered","table-striped-columns","table-striped"],[4,"ngFor","ngForOf"],[1,"d:flex","gap:5"],["name","faSolidUserPen",1,"f:blue",3,"click"],["name","faSolidTrash",1,"text-danger",3,"click"]],template:function(c,n){1&c&&(t.TgZ(0,"ion-content")(1,"div",0)(2,"table",1)(3,"thead")(4,"th"),t._uU(5,"Name"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Email"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Sector"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Account Type"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Account Code"),t.qZA(),t._UZ(14,"th"),t.qZA(),t.TgZ(15,"tbody"),t.YNc(16,h,15,6,"tr",2),t.qZA()()()()),2&c&&(t.xp6(16),t.Q6J("ngForOf",n.userAccounts))},dependencies:[g.sg,A.Fv,m.W2]})}return s})()}];let p=(()=>{class s{static#t=this.\u0275fac=function(c){return new(c||s)};static#e=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({imports:[u.Bz.forChild(f),u.Bz]})}return s})();var Z=o(4850);let v=(()=>{class s{static#t=this.\u0275fac=function(c){return new(c||s)};static#e=this.\u0275mod=t.oAB({type:s});static#s=this.\u0275inj=t.cJS({imports:[Z._o,p]})}return s})()}}]);