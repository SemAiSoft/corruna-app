"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[9421],{9421:(Z,c,n)=>{n.r(c),n.d(c,{CashierPageModule:()=>m});var a=n(9595),s=n(5861),d=n(2958),o=n(4650),g=n(8398),r=n(8118),f=n(2216);const h=[{path:"",component:(()=>{class t{constructor(i,e){this.router=i,this.localStorageService=e}ngOnInit(){return(0,s.Z)(function*(){yield d.F.show({text:"Welcome back, dear User!",duration:"long",position:"top"})})()}ionViewDidEnter(){var i=this;return(0,s.Z)(function*(){i.staff=JSON.parse(i.localStorageService.get("staff-profile")||"{}"),i.staff?._id||i.router.navigateByUrl("")})()}static#o=this.\u0275fac=function(e){return new(e||t)(o.Y36(a.F0),o.Y36(g.n))};static#n=this.\u0275cmp=o.Xpm({type:t,selectors:[["healmah-cashier"]],decls:71,vars:2,consts:[[1,"ion-no-border","ion-no-padding","bg:#333B46!"],[1,"h:25vh!","rb:35px!","shadow:0|2|1|rgba(0,0,0,0.1)"],[1,"height:10vh","w:100%","flex","jc:space-between","ai:center","p:10px|10px"],[1,"content"],["color","warning","routerLink","","slot","start","name","lock-closed-outline",1,"f:25px"],[1,"flex","ai:center","jc:space-between","mt:30px","px:10px","pl:20px!","f:white"],["icon","user-circle",1,"f:blue","f:40px"],["color","primary",1,"ion-padding-top"],["size","6","size-md","4","size-lg","2"],["routerLink","./render-service",1,"ion-activatable","ripple-parent","rectangle","rel","h:130px!"],[1,"text-align:center","mt:10px","{f:50px;f:#1F2630}_fa-icon","{f:18px!}_ion-card-subtitle"],["icon","calendar-check"],["routerLink","./services-history",1,"ion-activatable","ripple-parent","rectangle","rel","h:130px!"],["icon","clipboard-list"],["routerLink","./sell-stock",1,"ion-activatable","ripple-parent","rectangle","rel","h:130px!"],["icon","cart-plus"],["routerLink","./sales-history",1,"ion-activatable","ripple-parent","rectangle","rel","h:130px!"],["icon","list"],["routerLink","./game-play",1,"ion-activatable","ripple-parent","rectangle","rel","h:130px!"],["routerLink","./game-history",1,"ion-activatable","ripple-parent","rectangle","rel","h:130px!"],["size","12","size-md","4","size-lg","2"],["routerLink","./register",1,"ion-activatable","ripple-parent","rectangle","rel","h:130px!"],["icon","wallet"]],template:function(e,l){1&e&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"div",2)(3,"div",3)(4,"h2"),o._uU(5,"HAIR SALON"),o.qZA(),o.TgZ(6,"h4"),o._uU(7,"Bristol Hair Capitol"),o.qZA()(),o._UZ(8,"ion-icon",4),o.qZA(),o.TgZ(9,"div",5)(10,"label"),o._uU(11),o.qZA(),o._UZ(12,"fa-icon",6),o.qZA()()(),o.TgZ(13,"ion-content",7)(14,"ion-grid")(15,"ion-row")(16,"ion-col",8)(17,"ion-card",9),o._UZ(18,"ion-ripple-effect"),o.TgZ(19,"ion-card-header",10),o._UZ(20,"fa-icon",11),o.TgZ(21,"ion-card-subtitle"),o._uU(22,"Render Service"),o.qZA()()()(),o.TgZ(23,"ion-col",8)(24,"ion-card",12),o._UZ(25,"ion-ripple-effect"),o.TgZ(26,"ion-card-header",10),o._UZ(27,"fa-icon",13),o.TgZ(28,"ion-card-subtitle"),o._uU(29,"Service History"),o.qZA()()()(),o.TgZ(30,"ion-col",8)(31,"ion-card",14),o._UZ(32,"ion-ripple-effect"),o.TgZ(33,"ion-card-header",10),o._UZ(34,"fa-icon",15),o.TgZ(35,"ion-card-subtitle"),o._uU(36,"Sell Stock Item"),o.qZA()()()(),o.TgZ(37,"ion-col",8)(38,"ion-card",16),o._UZ(39,"ion-ripple-effect"),o.TgZ(40,"ion-card-header",10),o._UZ(41,"fa-icon",17),o.TgZ(42,"ion-card-subtitle"),o._uU(43,"Sales "),o._UZ(44,"br"),o._uU(45," History"),o.qZA()()()(),o.TgZ(46,"ion-col",8)(47,"ion-card",18),o._UZ(48,"ion-ripple-effect"),o.TgZ(49,"ion-card-header",10),o._UZ(50,"fa-icon",15),o.TgZ(51,"ion-card-subtitle"),o._uU(52,"Play "),o._UZ(53,"br"),o._uU(54,"Game"),o.qZA()()()(),o.TgZ(55,"ion-col",8)(56,"ion-card",19),o._UZ(57,"ion-ripple-effect"),o.TgZ(58,"ion-card-header",10),o._UZ(59,"fa-icon",17),o.TgZ(60,"ion-card-subtitle"),o._uU(61,"Games "),o._UZ(62,"br"),o._uU(63," History"),o.qZA()()()(),o.TgZ(64,"ion-col",20)(65,"ion-card",21),o._UZ(66,"ion-ripple-effect"),o.TgZ(67,"ion-card-header",10),o._UZ(68,"fa-icon",22),o.TgZ(69,"ion-card-subtitle"),o._uU(70,"Salon Register"),o.qZA()()()()()()()),2&e&&(o.xp6(11),o.AsE(" ",null==l.staff?null:l.staff.firstName," ",null==l.staff?null:l.staff.surName," "))},dependencies:[a.rH,r.PM,r.Zi,r.tO,r.wI,r.W2,r.jY,r.Gu,r.gu,r.H$,r.Nd,r.sr,r.YI,f.BN],styles:["[_nghost-%COMP%]{--ion-color-primary: #333B46;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #333B46;--ion-color-primary-tint: #333B46;--ion-color-secondary: #1F2630;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #1F2630;--ion-color-secondary-tint: #1F2630;--ion-color-tertiary: #f3f3f3;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}.content[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:5px}.content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{color:#fff;font-weight:900;font-family:monospace;letter-spacing:2px;font-size:2rem;margin:0}.content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{background:linear-gradient(90deg,#E38739 0%,#2dd36f 20%,#FF3AF3 50%,#2dd36f 70%);background-clip:text;-webkit-background-clip:text;color:transparent!important}ion-toolbar[_ngcontent-%COMP%]{--background: linear-gradient(30deg, #1F2630 12%, transparent 12.5%, transparent 87%, #1F2630 87.5%, #1F2630), linear-gradient(150deg, #1F2630 12%, transparent 12.5%, transparent 87%, #1F2630 87.5%, #1F2630), linear-gradient(30deg, #1F2630 12%, transparent 12.5%, transparent 87%, #1F2630 87.5%, #1F2630), linear-gradient(150deg, #1F2630 12%, transparent 12.5%, transparent 87%, #1F2630 87.5%, #1F2630), linear-gradient(60deg, #1F263077 25%, transparent 25.5%, transparent 75%, #1F263077 75%, #1F263077), linear-gradient(60deg, #1F263077 25%, transparent 25.5%, transparent 75%, #1F263077 75%, #1F263077);background-size:20px 35px;background-position:0 0,0 0,10px 18px,10px 18px,0 0,10px 18px}"]})}return t})(),children:[]},{path:"render-service",loadChildren:()=>Promise.all([n.e(8592),n.e(6027)]).then(n.bind(n,6027)).then(t=>t.RenderServicePageModule),title:"RichMond Beauty Studio - Render Salon Service"},{path:"sell-stock",loadChildren:()=>Promise.all([n.e(8592),n.e(7846)]).then(n.bind(n,4167)).then(t=>t.StockSellPageModule),title:"RichMond Beauty Studio - Sell Stock"},{path:"sales-history",loadChildren:()=>Promise.all([n.e(547),n.e(9778)]).then(n.bind(n,7755)).then(t=>t.SalesHistoryPageModule),title:"RichMond Beauty Studio - Sales History"},{path:"services-history",loadChildren:()=>Promise.all([n.e(8592),n.e(3885)]).then(n.bind(n,3885)).then(t=>t.RenderedServiceHistoryPageModule),title:"RichMond Beauty Studio - Services History"},{path:"register",loadChildren:()=>Promise.all([n.e(8592),n.e(1070)]).then(n.bind(n,1070)).then(t=>t.RegisterHomePageModule)},{path:"game-play",loadChildren:()=>Promise.all([n.e(8592),n.e(2872)]).then(n.bind(n,2872)).then(t=>t.GamePlayPageModule)},{path:"game-history",loadChildren:()=>Promise.all([n.e(8592),n.e(3313)]).then(n.bind(n,3313)).then(t=>t.GameHistoryPageModule)}];let p=(()=>{class t{static#o=this.\u0275fac=function(e){return new(e||t)};static#n=this.\u0275mod=o.oAB({type:t});static#t=this.\u0275inj=o.cJS({imports:[a.Bz.forChild(h),a.Bz]})}return t})();var u=n(4850);let m=(()=>{class t{static#o=this.\u0275fac=function(e){return new(e||t)};static#n=this.\u0275mod=o.oAB({type:t});static#t=this.\u0275inj=o.cJS({imports:[u._o,p]})}return t})()}}]);