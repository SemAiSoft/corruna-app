"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[5994],{5994:(x,d,o)=>{o.r(d),o.d(d,{HomePageModule:()=>y});var a=o(9595),g=o(5861),h=o(5115),c=o(4850),t=o(4650),e=o(8118),f=o(2412),m=o(7021),u=o(2216),v=o(8191);const s=function(){return{exact:!0}},Z=[{path:"",component:(()=>{class n{constructor(i,l,r,P,A){this.menuCtrl=i,this.router=l,this.toastService=r,this.localStorageService=P,this.platfom=A,this.logoutCount=2}ngOnInit(){this.sub=this.router.events.subscribe(i=>{if(i instanceof a.OD){const l=i?.url?.split("/")?.filter(r=>r);if(this.router.url==i.url||"popstate"==i.navigationTrigger&&"super"==l.at(0)&&l?.length>1)return this.logoutCount--,this.logoutCount>=1?void this.router.navigate(["super/dashboard-home"]):void this.router.navigate([""]);"imperative"==i.navigationTrigger&&(this.logoutCount=2)}})}ionViewDidEnter(){var i=this;return(0,g.Z)(function*(){i.logoutCount=2,i.staff=JSON.parse(i.localStorageService.get("staff-profile")||"{}"),i.staff?._id||i.goTo("")})()}goTo(i){this.router.navigateByUrl(i)}static#o=this.\u0275fac=function(l){return new(l||n)(t.Y36(e._q),t.Y36(a.F0),t.Y36(h.kl),t.Y36(c.n2),t.Y36(f.t4))};static#t=this.\u0275cmp=t.Xpm({type:n,selectors:[["healmah-home"]],decls:49,vars:11,consts:[[1,"ion-no-border"],["color","primary"],["slot","start",1,"px:10","d:flex!","ai:center","gap:10","{font-weight:bold;letter-spacing:1px;f:1.2rem}>span"],[1,"w:35px","h:35px"],["src","assets/rmd/img/icon.png","fallbackImg","","width","30","height","30"],["slot","end","routerLink","",1,"pr:10"],["color","tertiary"],["color","primary",1,"h:50px!","position:relative!","p:0!","d:flex!","ai:end!","pointer-events:none!"],[1,"bg:#1F5BBC!","h:50px","w:100%!","pointer-events:auto!"],[1,"m:0!","p:0!","h:100%","d:flex","gap:10","ai:center!","jc:center!","rel","{transition:250ms|transform}_*","{w:70px;h:70px;z:1;d:flex;flex-direction:column;ai:center;jc:center}>li","{translateY(-30px);bg:linear-gradient(45deg,#FF3AF3,#1F5BBC,#e91e63);w:60px;h:60px;r:50%;b:6px|solid|#f3f3f3}>li.active>a>span.icon","{translateY(10px);opacity:1}>li.active>a>label","{position:relative;d:flex;flex-direction:column;ai:center;jc:center;w:100%;text-align:center}>li>a","{position:relative;d:flex;ai:center;jc:center;f:1.5rem;f:white!;w:60px;h:60px;r:50%;}>li>a_.icon","{position:absolute;font-weight:400;f:0.75em;f:white!;translateY(20px);letter-spacing:0.05em;opacity:0}>li>a>label"],["routerLink","/super/dashboard-home","routerLinkActive","active",3,"routerLinkActiveOptions"],[1,"icon","rel"],["name","apps-outline"],["routerLink","/super/hair-home","routerLinkActive","active",3,"routerLinkActiveOptions"],["name","map:beauty-salon","iconStyle","f:white! rotate(90deg)","size","25px"],["routerLink","/super/stock-home","routerLinkActive","active",3,"routerLinkActiveOptions"],["icon","cubes"],["routerLink","/super/game-home","routerLinkActive","active",3,"routerLinkActiveOptions"],["name","game-controller-outline"],["routerLink","/super/setting-home","routerLinkActive","active",3,"routerLinkActiveOptions"],["name","options-outline"]],template:function(l,r){1&l&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-label",2)(3,"ion-avatar",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"span"),t._uU(6," RICHMOND "),t.qZA()(),t.TgZ(7,"ion-label",5),t._uU(8),t.qZA()()(),t.TgZ(9,"ion-content",6),t._UZ(10,"ion-router-outlet"),t.qZA(),t.TgZ(11,"ion-footer",7)(12,"footer",8)(13,"ul",9)(14,"li",10)(15,"a")(16,"span",11),t._UZ(17,"ion-icon",12),t.qZA(),t.TgZ(18,"label"),t._uU(19,"Home"),t.qZA(),t._UZ(20,"span"),t.qZA()(),t.TgZ(21,"li",13)(22,"a")(23,"span",11),t._UZ(24,"icon",14),t.qZA(),t.TgZ(25,"label"),t._uU(26,"Service"),t.qZA(),t._UZ(27,"span"),t.qZA()(),t.TgZ(28,"li",15)(29,"a")(30,"span",11),t._UZ(31,"fa-icon",16),t.qZA(),t.TgZ(32,"label"),t._uU(33,"Stocks"),t.qZA(),t._UZ(34,"span"),t.qZA()(),t.TgZ(35,"li",17)(36,"a")(37,"span",11),t._UZ(38,"ion-icon",18),t.qZA(),t.TgZ(39,"label"),t._uU(40,"Games"),t.qZA(),t._UZ(41,"span"),t.qZA()(),t.TgZ(42,"li",19)(43,"a")(44,"span",11),t._UZ(45,"ion-icon",20),t.qZA(),t.TgZ(46,"label"),t._uU(47,"Settings"),t.qZA(),t._UZ(48,"span"),t.qZA()()()()()),2&l&&(t.xp6(8),t.hij(" hi, ",null==r.staff?null:r.staff.firstName," "),t.xp6(6),t.Q6J("routerLinkActiveOptions",t.DdM(6,s)),t.xp6(7),t.Q6J("routerLinkActiveOptions",t.DdM(7,s)),t.xp6(7),t.Q6J("routerLinkActiveOptions",t.DdM(8,s)),t.xp6(7),t.Q6J("routerLinkActiveOptions",t.DdM(9,s)),t.xp6(7),t.Q6J("routerLinkActiveOptions",t.DdM(10,s)))},dependencies:[a.rH,a.Od,m.Z,e.BJ,e.W2,e.fr,e.Gu,e.gu,e.Q$,e.sr,e.jP,e.YI,u.BN,v.o],styles:["[_nghost-%COMP%]{--ion-color-primary: #1F5BBC;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #3dc2ff;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #f3f3f3;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #92949c;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}"]})}return n})(),children:[{path:"dashboard-home",loadChildren:()=>o.e(3097).then(o.bind(o,3097)).then(n=>n.OverviewPageModule)},{path:"setting-home",loadChildren:()=>Promise.all([o.e(8592),o.e(8276)]).then(o.bind(o,8276)).then(n=>n.SettingHomePageModule)},{path:"hair-home",loadChildren:()=>Promise.all([o.e(8592),o.e(5432)]).then(o.bind(o,5432)).then(n=>n.HairHomePageModule)},{path:"stock-home",loadChildren:()=>Promise.all([o.e(2030),o.e(6015),o.e(8592),o.e(2256)]).then(o.bind(o,2256)).then(n=>n.StockHomePageModule)},{path:"game-home",loadChildren:()=>Promise.all([o.e(8592),o.e(3710)]).then(o.bind(o,3710)).then(n=>n.GameHomePageModule)},{path:"",redirectTo:"dashboard-home",pathMatch:"full"}]},{path:"game-play",loadChildren:()=>Promise.all([o.e(8592),o.e(7035)]).then(o.bind(o,7035)).then(n=>n.GamePlayPageModule)},{path:"game-history",loadChildren:()=>Promise.all([o.e(8592),o.e(2542)]).then(o.bind(o,2542)).then(n=>n.GameHistoryPageModule)},{path:"game-list",loadChildren:()=>Promise.all([o.e(8592),o.e(5810)]).then(o.bind(o,5810)).then(n=>n.GameListPageModule)},{path:"sell-stock",loadChildren:()=>Promise.all([o.e(8592),o.e(3745)]).then(o.bind(o,3156)).then(n=>n.StockSellPageModule)},{path:"sales-history",loadChildren:()=>Promise.all([o.e(6015),o.e(8659)]).then(o.bind(o,6974)).then(n=>n.SalesHistoryPageModule)},{path:"stock-list",loadChildren:()=>Promise.all([o.e(2030),o.e(8592)]).then(o.bind(o,943)).then(n=>n.StockListPageModule)},{path:"stock-out",loadChildren:()=>o.e(7779).then(o.bind(o,7779)).then(n=>n.OutOfStockPageModule)},{path:"render-service",loadChildren:()=>Promise.all([o.e(8592),o.e(736)]).then(o.bind(o,736)).then(n=>n.RenderServicePageModule)},{path:"staff-service-history",loadChildren:()=>Promise.all([o.e(8592),o.e(838)]).then(o.bind(o,838)).then(n=>n.StaffServiceHistoryPageModule)},{path:"service-history",loadChildren:()=>Promise.all([o.e(8592),o.e(1374)]).then(o.bind(o,1374)).then(n=>n.RenderedServiceHistoryPageModule)},{path:"service-list",loadChildren:()=>Promise.all([o.e(8592),o.e(734)]).then(o.bind(o,734)).then(n=>n.ServiceListPageModule)},{path:"register-home",loadChildren:()=>Promise.all([o.e(8592),o.e(1822)]).then(o.bind(o,1822)).then(n=>n.RegisterHomePageModule)}];let p=(()=>{class n{static#o=this.\u0275fac=function(l){return new(l||n)};static#t=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[a.Bz.forChild(Z),a.Bz]})}return n})(),y=(()=>{class n{constructor(i){this.navController=i}static#o=this.\u0275fac=function(l){return new(l||n)(t.LFG(f.SH))};static#t=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[c._o,p,h.EV,c.QX]})}return n})()}}]);