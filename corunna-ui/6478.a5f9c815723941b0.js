"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[6478],{6478:(x,g,s)=>{s.r(g),s.d(g,{LgasModule:()=>C});var d=s(9595),i=s(4006),p=s(4669),u=s(5115),m=s(9063),t=s(4650),h=s(6895),f=s(2993),v=s(8118);function Z(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"div",14),t._UZ(1,"input",15),t.TgZ(2,"button",16),t.NdJ("click",function(){const a=t.CHM(e).index,l=t.oxw();return t.KtG(l.removeWards(a))}),t._UZ(3,"ng-icon",17),t.qZA()()}if(2&n){const e=c.index;t.xp6(1),t.Q6J("formControlName",e)}}function _(n,c){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"span",18)(9,"ng-icon",19),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.editLga(a))}),t.qZA(),t.TgZ(10,"ng-icon",20),t.NdJ("click",function(){const a=t.CHM(e).$implicit,l=t.oxw();return t.KtG(l.deleteLga(a))}),t.qZA()()()()}if(2&n){const e=c.$implicit,r=c.index;t.xp6(2),t.Oqu(r+1),t.xp6(2),t.Oqu(null==e?null:e.lgaName),t.xp6(2),t.Oqu(null==e||null==e.wards?null:e.wards.length)}}const A=[{path:"",component:(()=>{class n{constructor(e,r,o){this.settingsService=e,this.toastService=r,this.dialogService=o,this.lgas=[],this.lgaForm=new i.cw({lgaName:new i.NI(null,i.kI.required),wards:new i.Oe([])})}ionViewDidEnter(){this.getLgas()}get lgaWardArr(){return this.lgaForm.get("wards")}addWard(e){this.lgaWardArr.insert(0,new i.NI(e??null,i.kI.required))}removeWards(e){this.lgaWardArr.removeAt(e)}saveLga(){this.lgaForm.valid?this.settingsService.saveLga(this.lgaForm.value).subscribe(e=>{e?._id&&(this.getLgas(),this.lgaForm.reset(),this.lgaWardArr.clear())}):this.toastService.toast({type:"danger",title:"Input Error",message:m.xR.invalidForm,position:"center-center"})}editLga(e){this.lgaForm=new i.cw({_id:new i.NI(e?._id),lgaName:new i.NI(e?.lgaName,i.kI.required),wards:new i.Oe([])}),e?.wards?.length&&e?.wards?.forEach(r=>{this.addWard(r)})}getLgas(){this.settingsService.getLgas().subscribe(e=>this.lgas=e||[])}deleteLga(e){this.dialogService.openConfirmDialog({title:"Comfirm Action",message:"Are you to delete this LGA?"}).subscribe(r=>{r&&this.settingsService.deleteLga(e?._id).subscribe(o=>{o?._id&&(this.getLgas(),this.toastService.toast({type:"success",title:"Operation Success",message:"LGA "+m.kt.itemDeleted,position:"center-center"}))})})}static#t=this.\u0275fac=function(r){return new(r||n)(t.Y36(p.g),t.Y36(u.kl),t.Y36(u.xA))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["healmah-lgas"]],decls:33,vars:3,consts:[[1,"ion-padding"],[1,"text-center","bg:rgba(0,0,0,0.05)"],[1,"border","p:20px",3,"formGroup"],[1,"d:flex","gap:10","ai:end","{flex:1}>*"],["type","text","placeholder","LGA name","formControlName","lgaName",1,"form-control","shadow-none"],[1,"btn","btn-outline-primary","w:100%",3,"click"],[1,"btn","btn-outline-warning","w:100%",3,"click"],["formArrayName","wards",1,""],[1,"text-center"],[1,"btn","btn-outline-warning","ml:10",3,"click"],["name","faSolidPlus"],["class","flex gap:10 mb:7",4,"ngFor","ngForOf"],[1,"table","table-bordered","table-striped"],[4,"ngFor","ngForOf"],[1,"flex","gap:10","mb:7"],["placeholder","ward",1,"form-control","shadow-none",3,"formControlName"],[1,"btn","btn-outline-warning",3,"click"],["name","faSolidMinus"],[1,"d:flex","gap:5","jc:space-evenly"],["name","faSolidPen",1,"f:blue",3,"click"],["name","faSolidTrash",1,"text-danger",3,"click"]],template:function(r,o){1&r&&(t.TgZ(0,"ion-content",0)(1,"h3",1),t._uU(2,"LGA Form"),t.qZA(),t.TgZ(3,"form",2)(4,"div",3)(5,"div"),t._UZ(6,"input",4),t.qZA(),t.TgZ(7,"div")(8,"button",5),t.NdJ("click",function(){return o.saveLga()}),t._uU(9,"Save"),t.qZA()(),t.TgZ(10,"div")(11,"button",6),t.NdJ("click",function(){return o.lgaForm.reset()}),t._uU(12,"Reset"),t.qZA()()(),t.TgZ(13,"div",7)(14,"h2",8),t._uU(15," LGA Wards: "),t.TgZ(16,"button",9),t.NdJ("click",function(){return o.addWard()}),t._UZ(17,"ng-icon",10),t.qZA()(),t.YNc(18,Z,4,1,"div",11),t.qZA()(),t.TgZ(19,"h3",1),t._uU(20,"LGA List"),t.qZA(),t.TgZ(21,"table",12)(22,"thead")(23,"tr")(24,"th"),t._uU(25,"S/No"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"LGA Name"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Wards"),t.qZA(),t._UZ(30,"th"),t.qZA()(),t.TgZ(31,"tbody"),t.YNc(32,_,11,3,"tr",13),t.qZA()()()),2&r&&(t.xp6(3),t.Q6J("formGroup",o.lgaForm),t.xp6(15),t.Q6J("ngForOf",null==o.lgaWardArr?null:o.lgaWardArr.controls),t.xp6(14),t.Q6J("ngForOf",o.lgas))},dependencies:[h.sg,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,i.CE,f.Fv,v.W2]})}return n})()}];let L=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(A),d.Bz]})}return n})();var b=s(4850);let C=(()=>{class n{static#t=this.\u0275fac=function(r){return new(r||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[b._o,L]})}return n})()}}]);