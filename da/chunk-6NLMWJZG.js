import{a as h_,b as H_}from"./chunk-HBRULJOX.js";import{A as $_,B as y_,C as F_,D as b_,a as N_,b as N,d as d_,e as c_,i as R_,k as s_,l as m_,m as p_,n as g_,o as u_,q as A_,r as f_,s as P_,t as M_,x as D_,y as U_,z as I_}from"./chunk-NJ7CEKTT.js";import{a as T_,o as L_}from"./chunk-5PVX24OM.js";import{J as O_,S as S_}from"./chunk-X67GRL4Q.js";import{n as C_}from"./chunk-I7VUHP6G.js";import{Ab as S,Ba as f,Cb as m,Db as p,Eb as g,Fb as _,Gb as e,Hb as c,Jb as e_,Lc as l_,M as J,Mb as u,Nb as A,Ob as a,Pb as P,Pc as E_,Qb as M,Sb as t_,Yb as n_,Zb as i_,_a as o,_b as o_,cc as T,dc as D,ec as U,fa as s,ha as Q,ib as __,jc as a_,lc as r_,qa as Z,ra as Y,rb as O,vb as d}from"./chunk-GPUA3BWX.js";var v_=["Undecided","\u20AC15K-\u20AC30K","\u20AC30K-\u20AC100K","\u20AC100K-\u20AC250K","\u20AC250K-\u20AC500K","More than \u20AC500K"];var B_=["Mobile Apps","Hjemmeside","Tilpasset softwareudvikling","Kunstig intelligens (AI)","Digital Transformation","Personaleforst\xE6rkning","Support & Vedligeholdelse","Andet"];var K_=["ngForm"],V_=t=>({"pb-7":t});function w_(t,l){t&1&&(_(0,"h1",25),a(1,13),e());}function G_(t,l){t&1&&(_(0,"h2",25),a(1,14),e());}function x_(t,l){t&1&&(_(0,"mat-error",33),a(1,15),e());}function X_(t,l){t&1&&(_(0,"mat-error",33),a(1,16),e());}function z_(t,l){t&1&&(_(0,"mat-error",33),a(1,17),e());}function k_(t,l){t&1&&(_(0,"mat-error",33),a(1,18),e());}function q_(t,l){if(t&1&&(_(0,"mat-option",40),T(1),e()),t&2){let E=l.$implicit;d("value",E),o(),D(E);}}function j_(t,l){t&1&&(_(0,"mat-error",33),a(1,19),e());}function W_(t,l){if(t&1&&(u(0,8,1),c(1,"mat-option",40),A()),t&2){let E=l.$implicit;o(),d("value",E),P(E),M(0);}}function J_(t,l){t&1&&(_(0,"mat-error",33),a(1,20),e());}function Q_(t,l){t&1&&(_(0,"mat-error",33),a(1,21),e());}function Z_(t,l){t&1&&c(0,"div",55);}function Y_(t,l){if(t&1&&(_(0,"li",51)(1,"div",52)(2,"div",53)(3,"span",54),T(4),e()(),O(5,Z_,1,0,"div",55),e(),_(6,"p",56),T(7),e()()),t&2){let E=l.$implicit,r=l.$index,n=l.$count;o(4),U(" ",r+1," "),o(),S(r!==n-1?5:-1),o(),d("ngClass",r_(4,V_,r!==n-1)),o(),U(" ",E," ");}}var Me=(()=>{class t{constructor(){__(()=>this.originUrl=window.location.origin);}ngForm;isHeader=f(!1);variant=f("white");dialog=s(L_);fb=s(u_);api=s(F_);snackBar=s(y_);locationStrategy=s(l_);instructions=["Vi vil gennemg\xE5 din anmodning og begynde at tale om dit projekt.","Vores team udarbejder et projektforslag med tidsplaner, omkostninger og holdst\xF8rrelse.","Vi m\xF8des, f\xE6rdigg\xF8r aftalen og starter dit projekt."];budgetList=v_;topicList=B_;privacyUrl=`/${T_.privacyPolicy}`;originUrl;form=this.fb.nonNullable.group({name:["",N.required],company:["",N.required],email:["",[N.required,N.email,N.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{1,}")]],phoneNo:["",[N.required]],subject:["",N.required],budget:["",N.required],message:["",N.required]});isLoading=!1;get controls(){return this.form.controls;}get buttonLabel(){return this.isLoading?"Sending":"Send";}get remainingCharacters(){return 1e3-(+this.form.get("message")?.value?.length||0);}onSubmit(){if(this.form.invalid)return;this.isLoading=!0,this.form.disable();let E=this.form.getRawValue(),r=new FormData();Object.keys(E).forEach(C=>{let R=E[C];r.append(C,R);});let n=`${this.originUrl}${this.locationStrategy.path()}`;r.append("source",n),this.api.submitBudgetForm(r).pipe(J(()=>{this.isLoading=!1,this.form.enable();})).subscribe({next:()=>{this.ngForm.resetForm(),this.openFeedbackDialog();},error:C=>{let R=C.error.message||"Error occurred while submitting form";this.snackBar.open(R,"",{duration:5e3});}});}openFeedbackDialog(){this.dialog.open(b_,{width:"412px",disableClose:!0,hasBackdrop:!0,panelClass:"custom-container"});}static ɵfac=function(r){return new(r||t)();};static ɵcmp=Q({type:t,selectors:[["app-contact"]],viewQuery:function(r,n){if(r&1&&n_(K_,5),r&2){let C;i_(C=o_())&&(n.ngForm=C.first);}},inputs:{isHeader:[1,"isHeader"],variant:[1,"variant"]},standalone:!0,features:[a_],decls:81,vars:16,consts:()=>{let E;E="Indtast dit navn";let r;r="Indtast dit firmanavn";let n;n="Indtast din virksomheds email";let C;C="Indtast dit telefonnummer";let R;R="Inkluder projektets detaljer, varighed, tech stack, antal softwareudviklere der er brug for, og andre relevante oplysninger.";let I;I="Udfyld formularen nedenfor eller planl\xE6g et opkald, og vi vil vende tilbage til dig. * angiver et p\xE5kr\xE6vet felt.";let $;$="Navn";let h;h="Firma";let H;H="Virksomheds email";let L;L="Telefon";let y;y="Emne";let F;F="Budget (min. \u20AC15K)";let b;b="\n          "+"\uFFFD*58:1\uFFFD"+"\n          "+"\uFFFD#1:1\uFFFD"+"\n          "+"\uFFFD0:1\uFFFD"+"\n          "+"\uFFFD/#1:1\uFFFD"+"\n          "+"\uFFFD/*58:1\uFFFD"+"\n        ";let v;v="Beskriv dine behov detaljeret.";let B;B="\n          Remaining Characters: \n          "+"\uFFFD0\uFFFD"+"\n        ";let K;K="\n           By clicking Send, you agree to our Privacy Policy. \n          "+"\uFFFD#74\uFFFD"+"\n          "+"\uFFFD/#74\uFFFD"+"\n        ";let V;V="Hvad er n\xE6ste skridt?";let w;w="Kontakt os!";let G;G="Kontakt os!";let x;x="Venligst indtast dit navn";let X;X="Venligst indtast dit firmanavn";let z;z="Venligst indtast en gyldig e-mail.";let k;k="Venligst indtast et gyldigt telefonnummer.";let q;q="Emne er p\xE5kr\xE6vet";let j;j="Budget er p\xE5kr\xE6vet.";let W;return W="Dette felt er p\xE5kr\xE6vet",[["ngForm","ngForm"],I,$,h,H,L,y,F,b,v,B,K,V,w,G,x,X,z,k,q,j,W,[1,"py-14",3,"ngClass"],["aria-labelledby","contact-header",1,"container","d-flex","flex-column","gap-10","gap-md-14"],["id","contact-header",1,"d-flex","flex-column","gap-2"],["id","contact-us-heading",1,"heading-bold","fg-gray-7"],["aria-describedby","contact-description",1,"body-regular","fg-gray-4"],[1,"d-flex","flex-column","flex-md-row","gap-9"],["aria-describedby","form-instructions",1,"d-flex","flex-column","form-width","gap-5",3,"ngSubmit","formGroup"],["aria-label","Personal Information",1,"d-flex","flex-column","flex-lg-row","gap-5"],["appearance","fill","hideRequiredMarker","","subscriptSizing","dynamic",1,"w-100"],[1,"body-regular"],["matInput","","placeholder",E,"formControlName","name","autocomplete","name"],[1,"caption-regular"],["matInput","","placeholder",r,"formControlName","company","autocomplete","organization"],["aria-label","Contact Information",1,"d-flex","flex-column","flex-lg-row","gap-5"],["matInput","","placeholder",n,"formControlName","email","autocomplete","email"],["matInput","","placeholder",C,"formControlName","phoneNo","type","tel","autocomplete","tel","minlength","7","maxlength","14"],["aria-label","Project Topic",1,"d-flex","flex-column","flex-lg-row","gap-5"],["formControlName","subject"],[3,"value"],["formControlName","budget"],["appearance","fill","hideRequiredMarker","","subscriptSizing","dynamic"],["matInput","","placeholder",R,"formControlName","message","rows","4","maxlength","1000",1,"resize-none"],["align","end",1,"caption-regular"],[1,"d-flex","flex-column","flex-lg-row","align-items-lg-center","gap-5"],["styleClass","normal-btn-size","aria-label","Send Contact Form",3,"isLoading","isSubmit"],["aria-label","Privacy Agreement",1,"caption-regular","fg-gray-4"],["aria-label","Privacy Policy - Read our privacy policy for information on how we handle your data",1,"caption-regular","fg-gray-4",3,"routerLink"],["aria-labelledby","instructions-heading",1,"fit-content-height","d-flex","flex-column","w-100","p-7","gap-5",3,"ngClass"],["id","instructions-heading",1,"uppercase-heading","fg-gray-7"],[1,"d-flex","gap-4"],[1,"d-flex","flex-column","align-items-center"],[1,"d-flex","align-items-center","justify-content-center","min-size-40px","border","border-gray-2"],[1,"caption-regular","fg-gray-7"],[1,"w-0","h-100","border","border-gray-2"],["aria-label","Instructions",1,"caption-regular","fg-gray-7",3,"ngClass"]];},template:function(r,n){if(r&1){let C=e_();_(0,"div",22)(1,"article",23)(2,"section",24),O(3,w_,2,0,"h1",25)(4,G_,2,0,"h2",25),_(5,"p",26),a(6,1),e()(),_(7,"section",27)(8,"form",28,0),t_("ngSubmit",function(){return Z(C),Y(n.onSubmit());}),_(10,"fieldset",29)(11,"mat-form-field",30)(12,"mat-label",31),T(13,"* "),_(14,"span"),a(15,2),e()(),c(16,"input",32),O(17,x_,2,0,"mat-error",33),e(),_(18,"mat-form-field",30)(19,"mat-label",31),T(20,"* "),_(21,"span"),a(22,3),e()(),c(23,"input",34),O(24,X_,2,0,"mat-error",33),e()(),_(25,"fieldset",35)(26,"mat-form-field",30)(27,"mat-label",31),T(28,"* "),_(29,"span"),a(30,4),e()(),c(31,"input",36),O(32,z_,2,0,"mat-error",33),e(),_(33,"mat-form-field",30)(34,"mat-label",31),T(35,"* "),_(36,"span"),a(37,5),e()(),c(38,"input",37),O(39,k_,2,0,"mat-error",33),e()(),_(40,"fieldset",38)(41,"mat-form-field",30)(42,"mat-label",31),T(43,"* "),_(44,"span"),a(45,6),e()(),_(46,"mat-select",39),p(47,q_,2,2,"mat-option",40,m),e(),O(49,j_,2,0,"mat-error",33),e(),_(50,"mat-form-field",30)(51,"mat-label",31),T(52,"* "),_(53,"span"),a(54,7),e()(),_(55,"mat-select",41),u(56,8),p(57,W_,2,2,"mat-option",40,m),A(),e(),O(59,J_,2,0,"mat-error",33),e()(),_(60,"mat-form-field",42)(61,"mat-label",31),T(62,"* "),_(63,"span"),a(64,9),e()(),c(65,"textarea",43),_(66,"mat-hint",44),a(67,10),e(),O(68,Q_,2,0,"mat-error",33),e(),_(69,"div",45)(70,"app-button",46),T(71),e(),_(72,"span",47),u(73,11),c(74,"a",48),A(),e()()(),_(75,"aside",49)(76,"h3",50),a(77,12),e(),_(78,"ol"),p(79,Y_,8,6,"li",51,m),e()()()()();}r&2&&(d("ngClass",n.variant()==="white"?"bg-white-1":"bg-blue-1"),o(3),S(n.isHeader()?3:4),o(5),d("formGroup",n.form),o(9),S(n.controls.name.invalid?17:-1),o(7),S(n.controls.company.invalid?24:-1),o(8),S(n.controls.email.invalid?32:-1),o(7),S(n.controls.phoneNo.invalid?39:-1),o(8),g(n.topicList),o(2),S(n.controls.subject.invalid?49:-1),o(8),g(n.budgetList),o(2),S(n.controls.budget.invalid?59:-1),o(8),P(n.remainingCharacters),M(67),o(),S(n.controls.message.invalid?68:-1),o(2),d("isLoading",n.isLoading)("isSubmit",!0),o(),D(n.buttonLabel),o(3),d("routerLink",n.privacyUrl),o(),d("ngClass",n.variant()==="white"?"bg-gray-1":"bg-white-1"),o(4),g(n.instructions));},dependencies:[C_,E_,A_,R_,N_,d_,c_,p_,g_,s_,m_,U_,D_,f_,M_,P_,$_,I_,H_,h_,O_,S_],styles:[".form-width[_ngcontent-%COMP%]{min-width:600px}@media (max-width: 991.98px){.form-width[_ngcontent-%COMP%]{min-width:350px}}@media (max-width: 575.98px){.form-width[_ngcontent-%COMP%]{min-width:100%}}"]});}return t;})();export{Me as a};/**i18n:2959a088a4f851c603ee32029e8942bcc70b3666ad7eada0c74607a8984ba57d*/