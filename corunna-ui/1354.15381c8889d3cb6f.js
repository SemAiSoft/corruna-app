"use strict";(self.webpackChunkcorunna_ui=self.webpackChunkcorunna_ui||[]).push([[1354],{1354:(Z,l,i)=>{i.r(l),i.d(l,{LoginPageModule:()=>b});var c=i(9595),g=i(1224),e=i(4006),f=i(2958),d=i(4850),u=i(9063),o=i(4650),m=i(6726),r=i(8118);const h=[{path:"",component:(()=>{class t{constructor(n,a,s){this.userAccountService=n,this.router=a,this.localStorageService=s,this.handler=y=>this.userLoginForm.invalid?(f.F.show({text:u.xR.invalidForm,duration:"long",position:"top"}),console.log(this.userLoginForm.value),Promise.resolve()):this.userAccountService.login(this.userLoginForm.value),this.userLoginForm=new e.cw({userName:new e.NI(null,e.kI.required),passWord:new e.NI(null,e.kI.required)})}ngOnInit(){}ionViewDidEnter(){this.localStorageService.remove("staff-profile"),this.routeSub=this.router.events.subscribe(n=>{n instanceof c.OD&&"popstate"==n?.navigationTrigger&&(n.url.includes("/super")||n.url.includes("/standard"))&&this.router.navigate(["/login"])})}ionViewDidLeave(){this.routeSub?.unsubscribe()}apiResponse(n){n?.staff&&(f.F.show({text:"Login successful, welcome back!",duration:"long",position:"top"}),this.localStorageService.set("staff-profile",JSON.stringify(n.staff)),this.localStorageService.set("auth-token",n.token),this.userAccountService.welcomeUser(n?.staff.acctType?.toLowerCase()),this.userLoginForm.reset())}static#o=this.\u0275fac=function(a){return new(a||t)(o.Y36(g.N),o.Y36(c.F0),o.Y36(d.n2))};static#n=this.\u0275cmp=o.Xpm({type:t,selectors:[["healmah-login"]],decls:30,vars:3,consts:[[1,"ion-no-border","abs"],[1,"$background:transparent!","$opacity:0"],["slot","end","color","light",1,"opacity-50"],["color","tertiary",1,"ion-no-padding"],[1,"rel"],[3,"src"],[1,"block","w:100%","abs","top:33%","left:33%","translate(-30%,-50)","z:5","text-align:center","f:white!"],[1,"text-align:left!"],[1,"f:30px","f:bold","f:monospace"],[1,"ion-text-capitalize"],[1,"shadow:none!","bg:transparent!","py:0!","w:95%","abs","top:38%","left:50%","translate(-53%,-50)","z:5"],[1,"m:0!","py:0!"],[1,"text-center"],[1,"m:0!","py:0!","mt:100px!"],[1,"flex","flex:column","gap:20","my:30",3,"formGroup"],[1,"background:transparent"],["slot","start","id","lbl1","name","person-circle-outline"],["type","text","aria-labelledby","lbl1","formControlName","userName","placeholder","username"],["slot","start","id","lbl2","name","lock-open-outline"],["type","password","aria-labelledby","lbl2","formControlName","passWord","placeholder","*********"],["color","primary","btnDisabler","","expand","block","fill","solid",3,"handler","handle"],[1,"btn","w:fit-content!","b:none!","mx-auto"],["name","finger-print-outline",1,"f:50px"]],template:function(a,s){1&a&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-title",2),o._uU(3," Login "),o.qZA()()(),o.TgZ(4,"ion-content",3)(5,"header",4),o._UZ(6,"ion-img",5),o.TgZ(7,"section",6)(8,"h1",7)(9,"label",8),o._uU(10,"Dr's"),o.qZA(),o._UZ(11,"br"),o.TgZ(12,"span",9),o._uU(13," Veterinary Consult "),o.qZA()()()(),o.TgZ(14,"ion-card",10)(15,"ion-card-header",11)(16,"ion-card-title",12),o._uU(17,"Welcome"),o.qZA()(),o.TgZ(18,"ion-card-content",13)(19,"form",14)(20,"ion-item",15),o._UZ(21,"ion-icon",16)(22,"ion-input",17),o.qZA(),o.TgZ(23,"ion-item"),o._UZ(24,"ion-icon",18)(25,"ion-input",19),o.qZA(),o.TgZ(26,"ion-button",20),o.NdJ("handle",function(v){return s.apiResponse(v)}),o._uU(27," Login "),o.qZA(),o.TgZ(28,"button",21),o._UZ(29,"ion-icon",22),o.qZA()()()()()),2&a&&(o.xp6(6),o.Q6J("src","/assets/dvt/img/login-bg.png"),o.xp6(13),o.Q6J("formGroup",s.userLoginForm),o.xp6(7),o.Q6J("handler",s.handler))},dependencies:[e._Y,e.JJ,e.JL,e.sg,e.u,m.h,r.YG,r.PM,r.FN,r.Zi,r.Dq,r.W2,r.Gu,r.gu,r.Xz,r.pK,r.Ie,r.wd,r.sr,r.j9],styles:["[_nghost-%COMP%]{--ion-color-primary: #EA6D35;--ion-color-primary-rgb: 56, 128, 255;--ion-color-primary-contrast: #ffffff;--ion-color-primary-contrast-rgb: 255, 255, 255;--ion-color-primary-shade: #3171e0;--ion-color-primary-tint: #4c8dff;--ion-color-secondary: #1A2031;--ion-color-secondary-rgb: 61, 194, 255;--ion-color-secondary-contrast: #ffffff;--ion-color-secondary-contrast-rgb: 255, 255, 255;--ion-color-secondary-shade: #36abe0;--ion-color-secondary-tint: #50c8ff;--ion-color-tertiary: #F4E9E9;--ion-color-tertiary-rgb: 82, 96, 255;--ion-color-tertiary-contrast: #ffffff;--ion-color-tertiary-contrast-rgb: 255, 255, 255;--ion-color-tertiary-shade: #4854e0;--ion-color-tertiary-tint: #6370ff;--ion-color-success: #2dd36f;--ion-color-success-rgb: 45, 211, 111;--ion-color-success-contrast: #ffffff;--ion-color-success-contrast-rgb: 255, 255, 255;--ion-color-success-shade: #28ba62;--ion-color-success-tint: #42d77d;--ion-color-warning: #ffc409;--ion-color-warning-rgb: 255, 196, 9;--ion-color-warning-contrast: #000000;--ion-color-warning-contrast-rgb: 0, 0, 0;--ion-color-warning-shade: #e0ac08;--ion-color-warning-tint: #ffca22;--ion-color-danger: #eb445a;--ion-color-danger-rgb: 235, 68, 90;--ion-color-danger-contrast: #ffffff;--ion-color-danger-contrast-rgb: 255, 255, 255;--ion-color-danger-shade: #cf3c4f;--ion-color-danger-tint: #ed576b;--ion-color-dark: #222428;--ion-color-dark-rgb: 34, 36, 40;--ion-color-dark-contrast: #ffffff;--ion-color-dark-contrast-rgb: 255, 255, 255;--ion-color-dark-shade: #1e2023;--ion-color-dark-tint: #383a3e;--ion-color-medium: #f3f3f3;--ion-color-medium-rgb: 146, 148, 156;--ion-color-medium-contrast: #ffffff;--ion-color-medium-contrast-rgb: 255, 255, 255;--ion-color-medium-shade: #808289;--ion-color-medium-tint: #9d9fa6;--ion-color-light: #f4f5f8;--ion-color-light-rgb: 244, 245, 248;--ion-color-light-contrast: #000000;--ion-color-light-contrast-rgb: 0, 0, 0;--ion-color-light-shade: #d7d8da;--ion-color-light-tint: #f5f6f9}h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{background:linear-gradient(90deg,#F6D651 10%,#2dd36f 40%,#FF3AF3 50%,#00DDCE 70%);background-clip:text;-webkit-background-clip:text;color:transparent!important;font-size:smaller}"]})}return t})()}];let p=(()=>{class t{static#o=this.\u0275fac=function(a){return new(a||t)};static#n=this.\u0275mod=o.oAB({type:t});static#r=this.\u0275inj=o.cJS({imports:[c.Bz.forChild(h),c.Bz]})}return t})(),b=(()=>{class t{static#o=this.\u0275fac=function(a){return new(a||t)};static#n=this.\u0275mod=o.oAB({type:t});static#r=this.\u0275inj=o.cJS({imports:[d._o,p]})}return t})()}}]);