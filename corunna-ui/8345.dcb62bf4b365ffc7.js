"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[8345],{8345:(U,u,a)=>{a.r(u),a.d(u,{GameListPageModule:()=>P});var f=a(9595),b=a(5861),G=a(8727),h=a(4850),p=a(9063),n=a(4006),s=a(8118),g=a(2958),x=a(4201),v=a(5115),Z=a(9808),o=a(4650),F=a(2412),S=a(6895),T=a(6726),A=a(2879);function L(t,y){1&t&&(o.TgZ(0,"h3",20),o._uU(1," Edit Game "),o.qZA())}function w(t,y){1&t&&(o.TgZ(0,"h3",20),o._uU(1," Create Game "),o.qZA())}function C(t,y){if(1&t){const i=o.EpF();o.TgZ(0,"ion-header",10)(1,"ion-toolbar",11),o.YNc(2,L,2,0,"h3",12),o.YNc(3,w,2,0,"h3",12),o.qZA()(),o.TgZ(4,"ion-content",13)(5,"form",14)(6,"div")(7,"label"),o._uU(8,"Game Name:"),o.qZA(),o._UZ(9,"input",15),o.qZA(),o.TgZ(10,"div")(11,"label"),o._uU(12,"Game Price:"),o.qZA(),o._UZ(13,"input",16),o.qZA(),o.TgZ(14,"div",17)(15,"ion-button",18),o.NdJ("handle",function(r){o.CHM(i);const c=o.oxw();return o.KtG(c.apiResponse(r))}),o._uU(16,"Save"),o.qZA(),o.TgZ(17,"ion-button",19),o.NdJ("click",function(){o.CHM(i);const r=o.oxw();return o.KtG(r.gameForm.reset())}),o._uU(18,"Clear"),o.qZA()()()()}if(2&t){const i=o.oxw();let e,r;o.xp6(2),o.Q6J("ngIf",null==(e=i.gameForm.get("_id"))?null:e.value),o.xp6(1),o.Q6J("ngIf",!(null!=(r=i.gameForm.get("_id"))&&r.value)),o.xp6(2),o.Q6J("formGroup",i.gameForm),o.xp6(10),o.Q6J("handler",i.handler)}}const N=function(){return[0,.5,.6]},J=[{path:"",component:(()=>{class t{constructor(i,e,r,c,d,k){var m,l=this;this.localStorageService=i,this.gameService=e,this.menuService=r,this.dialogService=c,this.platform=d,this.router=k,this.gameList=[],this.columns=[{field:"gameName",header:"Game Name"},{field:"gameCost",header:"Game Price"}],this.rowMenu=[{iconLeft:"edit",name:"Edit",clickAction:()=>{if("Super"!==this.staff.acctType)return;const m=this.menuService.contextRow.rowData;m&&(this.gameForm=new n.cw({_id:new n.NI(m._id),gameName:new n.NI(m.gameName,n.kI.required),gameCost:new n.NI(m.gameCost,[n.kI.required,n.kI.min(1)])}),this.modal.present(),this.menuService.closeAllMenu())}},{iconLeft:"trash-alt",iconLeftStyle:"f:red",name:"Delete",clickAction:(m=(0,b.Z)(function*(){"Super"===l.staff.acctType&&(yield(0,Z.n)(l.dialogService.openConfirmDialog({title:"Action COnfirmation",message:"Are you sure to delete this?"})))&&(l.gameService.deleteGame(l.menuService.contextRow.rowData?._id).subscribe(B=>{B?.modifiedCount&&l.getGames(),g.F.show({text:"Game "+p.kt.itemDeleted,duration:"long"})}),l.menuService.closeAllMenu())}),function(){return m.apply(this,arguments)})}],this.handler=()=>this.gameForm.valid?this.gameService.saveGame(this.gameForm.value):(g.F.show({text:p.xR.invalidForm,duration:"long"}),Promise.resolve()),this.gameForm=new n.cw({gameName:new n.NI(null,n.kI.required),gameCost:new n.NI(null,[n.kI.required,n.kI.min(1)])})}ngOnDestroy(){this.menuService.closeAllMenu()}ngOnInit(){this.staff=JSON.parse(this.localStorageService.get("staff-profile")||"{}"),this.getGames()}getGames(){this.gameService.getGames().subscribe(i=>{this.gameList=i})}apiResponse(i){i?._id&&(g.F.show({text:"Game saved successfully",duration:"long"}),this.gameForm.get("_id")?.value&&this.modal?.dismiss(),this.gameForm.reset(),this.getGames())}closeModal(){this.router.navigate(["Super"==this.staff.acctType?"/super/game-home":this.staff.acctType?.toLowerCase()])}static#o=this.\u0275fac=function(e){return new(e||t)(o.Y36(h.n2),o.Y36(G.h),o.Y36(x.hl),o.Y36(v.xA),o.Y36(F.t4),o.Y36(f.F0))};static#t=this.\u0275cmp=o.Xpm({type:t,selectors:[["healmah-game-list"]],viewQuery:function(e,r){if(1&e&&o.Gf(s.ki,5),2&e){let c;o.iGM(c=o.CRH())&&(r.modal=c.first)}},hostBindings:function(e,r){1&e&&o.NdJ("popstate",function(d){return r.closeModal(d)},!1,o.Jf7)},decls:14,vars:7,consts:[["color","primary"],["slot","start"],["color","light",3,"defaultHref"],["slot","end","color","light"],[3,"columns","data","rowContextMenu"],["trigger","open-account-modal","sheetModal","","handleBehavior","cycle",3,"initialBreakpoint","breakpoints"],["modal",""],["vertical","bottom","horizontal","start","slot","fixed"],["color","primary","id","open-account-modal"],["name","create-outline"],[1,"ion-no-border"],["color","tertiary"],["class","flex jc:center px:20 f:black!",4,"ngIf"],[1,"ion-padding"],[1,"f:black","flex","flex:column","gap:15","~height|300ms|ease-in","{flex;flex:column;gap:10}>div","{b:#0F85E9!}_input","{b:#0F85E9!}_select",3,"formGroup"],["type","text","formControlName","gameName",1,"form-control"],["type","text","formControlName","gameCost",1,"form-control"],[1,"d:flex","flex:row!","gap:10","mt:20"],["btnDisabler","",1,"flex:1",3,"handler","handle"],["color","danger","type","reset",1,"flex:1",3,"click"],[1,"flex","jc:center","px:20","f:black!"]],template:function(e,r){1&e&&(o.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1),o._UZ(3,"ion-back-button",2),o.qZA(),o.TgZ(4,"ion-title",3),o._uU(5,"Game List"),o.qZA()()(),o.TgZ(6,"ion-content",0),o._UZ(7,"prime-table",4),o.TgZ(8,"ion-modal",5,6),o.YNc(10,C,19,4,"ng-template"),o.qZA(),o.TgZ(11,"ion-fab",7)(12,"ion-fab-button",8),o._UZ(13,"ion-icon",9),o.qZA()()()),2&e&&(o.xp6(3),o.Q6J("defaultHref",null==r.staff||null==r.staff.acctType?null:r.staff.acctType.toLowerCase()),o.xp6(4),o.Q6J("columns",r.columns)("data",r.gameList)("rowContextMenu",r.rowMenu),o.xp6(1),o.Q6J("initialBreakpoint",.5)("breakpoints",o.DdM(6,N)))},dependencies:[S.O5,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,T.h,s.YG,s.Sm,s.W2,s.IJ,s.W4,s.Gu,s.gu,s.wd,s.sr,s.ki,s.oU,A.I],styles:["[_nghost-%COMP%]{--ion-color-primary: #333B46;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #333B46;--ion-color-primary-tint: #333B46;--ion-color-secondary: #1F2630;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #1F2630;--ion-color-secondary-tint: #1F2630;--ion-color-tertiary: #f3f3f3;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}"]})}return t})()}];let M=(()=>{class t{static#o=this.\u0275fac=function(e){return new(e||t)};static#t=this.\u0275mod=o.oAB({type:t});static#e=this.\u0275inj=o.cJS({imports:[f.Bz.forChild(J),f.Bz]})}return t})(),P=(()=>{class t{static#o=this.\u0275fac=function(e){return new(e||t)};static#t=this.\u0275mod=o.oAB({type:t});static#e=this.\u0275inj=o.cJS({imports:[h._o,v.gw,M]})}return t})()}}]);