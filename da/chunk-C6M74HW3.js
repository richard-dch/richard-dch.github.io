import{a as te}from"./chunk-ZHVGDABI.js";import{A as Y,B as J,C as ee,a as w,b as M,d as B,g as K,j as V,q as G,s as z,u as X,x as Q,y as j,z as q}from"./chunk-NJ7CEKTT.js";import{a as k,n as Z,o as W}from"./chunk-5PVX24OM.js";import{N as H,O as $,S as b}from"./chunk-X67GRL4Q.js";import{n as U}from"./chunk-I7VUHP6G.js";import{$b as g,Ab as s,Ba as N,Fb as o,Gb as _,Hb as A,Ib as m,Jb as R,M as P,Mb as D,Nb as x,Ob as E,Pc as F,Qc as L,Sb as S,Ub as r,_a as a,ac as v,cc as I,fa as d,ha as T,jc as y,mb as u,mc as h,qa as f,ra as O,rb as p,vb as l}from"./chunk-GPUA3BWX.js";var ne=(()=>{class t{dialogRef=d(Z);static ɵfac=function(i){return new(i||t)();};static ɵcmp=T({type:t,selectors:[["app-cta-feedback"]],standalone:!0,features:[y],decls:8,vars:0,consts:()=>{let e;e="Tak!";let i;i="Vi har modtaget din e-mail og vil kontakte dig s\xE5 hurtigt som muligt.";let n;return n="Forst\xE5et",[e,i,n,[1,"d-flex","flex-column","align-items-center","justify-content-center","py-10","px-6","gap-6","bg-white-1"],["src","images/confirmation-success.svg","alt","Confirmation of CTA email submission","width","80","height","80"],[1,"sub-heading","fg-gray-7"],[1,"body-regular","text-center","fg-gray-4"],["styleClass","normal-btn-size",3,"onClick"]];},template:function(i,n){i&1&&(o(0,"section",3),A(1,"img",4),o(2,"h2",5),E(3,0),_(),o(4,"p",6),E(5,1),_(),o(6,"app-button",7),S("onClick",function(){return n.dialogRef.close();}),E(7,2),_()());},dependencies:[b]});}return t;})();var oe=["headline"],_e=["supportingText"],ae=["supportingText2"],le=["buttonLabel"],re=["buttonContent"],Ce=(t,c)=>[t,c];function ce(t,c){if(t&1&&(o(0,"h2",5),m(1,14),_()),t&2){let e=r(2);a(),l("ngTemplateOutlet",e.headlineContent()||null);}}function se(t,c){t&1&&(o(0,"mat-error",10),E(1,1),_());}function pe(t,c){if(t&1){let e=R();o(0,"app-button",15),S("onClick",function(){f(e);let n=r(2);return O(n.sendMail());}),m(1,14),_();}if(t&2){let e=r(2);l("isLoading",e.isLoading),a(),l("ngTemplateOutlet",e.buttonLabelContent()||null);}}function me(t,c){if(t&1){let e=R();p(0,ce,2,1,"h2",5),o(1,"section",4)(2,"section",6)(3,"mat-form-field",7)(4,"input",8),S("keydown.enter",function(){f(e);let n=r();return O(n.sendMail());}),_(),o(5,"mat-icon",9),I(6,"mail"),_(),p(7,se,2,0,"mat-error",10),_(),p(8,pe,2,2,"app-button",11),_(),o(9,"span",12),D(10,0),A(11,"a",13),x(),_()();}if(t&2){let e=r();s(e.headlineContent()?0:-1),a(4),l("formControl",e.email),a(3),s(e.email.invalid?7:-1),a(),s(e.buttonLabelContent()?8:-1),a(3),l("routerLink",e.privacyUrl);}}function de(t,c){if(t&1&&(o(0,"h2",5),m(1,14),_()),t&2){let e=r(2);a(),l("ngTemplateOutlet",e.headlineContent()||null);}}function ue(t,c){if(t&1&&(o(0,"p",17),m(1,14),_()),t&2){let e=r(2);a(),l("ngTemplateOutlet",e.supportingTextContent()||null);}}function Ee(t,c){if(t&1&&(o(0,"p",17),m(1,14),_()),t&2){let e=r(2);a(),l("ngTemplateOutlet",e.supportingText2Content()||null);}}function Se(t,c){if(t&1){let e=R();o(0,"app-button",19),S("onClick",function(){f(e);let n=r(2);return O(n.openCalendly());}),m(1,14),_();}if(t&2){let e=r(2);a(),l("ngTemplateOutlet",e.buttonLabelContent()||null);}}function ge(t,c){if(t&1&&m(0,14),t&2){let e=r(2);l("ngTemplateOutlet",e.buttonContent()||null);}}function Te(t,c){if(t&1&&(o(0,"div",16),p(1,de,2,1,"h2",5),o(2,"section"),p(3,ue,2,1,"p",17)(4,Ee,2,1,"p",17),_()(),p(5,Se,2,1,"app-button",18)(6,ge,1,1,"ng-container",14)),t&2){let e=r();a(),s(e.headlineContent()?1:-1),a(2),s(e.supportingTextContent()?3:-1),a(),s(e.supportingText2Content()?4:-1),a(),s(e.buttonLabelContent()?5:-1),a(),s(e.buttonContent()?6:-1);}}var ze=(()=>{class t{variant=N("light-blue");type=N("calendly");styleClass=N("");headlineContent=u("headline");supportingTextContent=u("supportingText");supportingText2Content=u("supportingText2");buttonLabelContent=u("buttonLabel");buttonContent=u("buttonContent");dialog=d(W);calendlyService=d(te);api=d(ee);snackBar=d(J);privacyUrl=`/${k.privacyPolicy}`;email=new K("",[M.required,M.email,M.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{1,}")]);isLoading=!1;openCalendly(){this.calendlyService.openCalendlyPopup();}sendMail(){if(this.email.markAsTouched(),this.email.invalid)return;this.isLoading=!0,this.email.disable();let e=new FormData();e.append("email",this.email.value??""),this.api.submitEmailForm(e).pipe(P(()=>{this.isLoading=!1,this.email.enable();})).subscribe({next:()=>{this.email.reset(),this.openFeedbackDialog();},error:i=>{let n=i.error.email||"Error occurred while submitting form";this.snackBar.open(n,"",{duration:5e3});}});}openFeedbackDialog(){this.dialog.open(ne,{width:"412px",disableClose:!0,hasBackdrop:!0,panelClass:"custom-container"});}static ɵfac=function(i){return new(i||t)();};static ɵcmp=T({type:t,selectors:[["app-cta-section"]],contentQueries:function(i,n,C){i&1&&(g(C,n.headlineContent,oe,5),g(C,n.supportingTextContent,_e,5),g(C,n.supportingText2Content,ae,5),g(C,n.buttonLabelContent,le,5),g(C,n.buttonContent,re,5)),i&2&&v(5);},inputs:{variant:[1,"variant"],type:[1,"type"],styleClass:[1,"styleClass"]},standalone:!0,features:[y],decls:4,vars:6,consts:()=>{let e;e="Indtast din e-mail";let i;i="\n           Your information is confidential. See Privacy Policy. \n          "+"\uFFFD#11\uFFFD"+"\n          "+"\uFFFD/#11\uFFFD"+"\n        ";let n;return n="Venligst indtast en gyldig e-mail.",[i,n,[1,"cta-container","d-flex","align-items-center","bg-filler-banner","py-14",3,"ngClass"],[1,"container","d-flex","flex-column","flex-md-row","align-items-md-center","justify-content-md-between","gap-7",3,"ngClass"],[1,"d-flex","flex-column","gap-5","gap-md-4"],[1,"heading-text","heading-bold"],[1,"d-flex","flex-column","flex-md-row","gap-5","gap-md-6"],["appearance","fill","hideRequiredMarker","","subscriptSizing","dynamic"],["matInput","","placeholder",e,"autocomplete","email",3,"keydown.enter","formControl"],["matPrefix",""],[1,"caption-regular"],["styleClass","cta-email-btn","aria-label","Send CTA email",3,"isLoading"],["aria-label","Privacy Agreement",1,"text-md-end","caption-regular","fg-gray-4"],["aria-label","Privacy Policy - Read our privacy policy for information on how we handle your data",1,"caption-regular","fg-gray-4",3,"routerLink"],[3,"ngTemplateOutlet"],["styleClass","cta-email-btn","aria-label","Send CTA email",3,"onClick","isLoading"],[1,"d-flex","flex-column","gap-3"],[1,"support-text","body-regular"],["styleClass","cta-btn","leftIcon","call"],["styleClass","cta-btn","leftIcon","call",3,"onClick"]];},template:function(i,n){i&1&&(o(0,"article",2)(1,"section",3),p(2,me,12,5,"section",4)(3,Te,7,5),_()()),i&2&&(l("ngClass",h(3,Ce,n.variant(),n.type())),a(),l("ngClass",n.styleClass()),a(),s(n.type()==="email"?2:3));},dependencies:[F,L,G,w,B,V,U,j,Q,z,X,Y,q,$,H,b],styles:['.bg-filler-banner[_ngcontent-%COMP%]{background-image:url("./media/filler-banner-right-TFQDZIY3.svg");background-repeat:no-repeat;background-position:right}.bg-filler-banner.dark[_ngcontent-%COMP%]{background-color:var(--gray-7)}.bg-filler-banner.dark[_ngcontent-%COMP%]   .heading-text[_ngcontent-%COMP%], .bg-filler-banner.dark[_ngcontent-%COMP%]   .support-text[_ngcontent-%COMP%]{color:var(--gray-1)}.bg-filler-banner.white[_ngcontent-%COMP%]{background-color:var(--white-1)}.bg-filler-banner.light-blue[_ngcontent-%COMP%]{background-color:var(--blue-1)}.bg-filler-banner.email[_ngcontent-%COMP%]{background-position:left;background-image:url("./media/filler-banner-left-GNG6ORKG.svg")}.cta-container[_ngcontent-%COMP%]{min-height:200px}.heading-text[_ngcontent-%COMP%], .support-text[_ngcontent-%COMP%]{color:var(--gray-7)}']});}return t;})();export{ze as a};/**i18n:2959a088a4f851c603ee32029e8942bcc70b3666ad7eada0c74607a8984ba57d*/