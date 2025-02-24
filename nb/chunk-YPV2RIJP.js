import{a as u_}from"./chunk-N77O26QB.js";import{a as d_}from"./chunk-V4RNIAHC.js";import{A as p_,B as T_,C as c_,D as P_,a as Je,b as I,d as Ze,e as e_,i as __,k as t_,l as n_,n as i_,o as o_,q as r_,r as a_,s as l_,t as s_,x as R_,y as S_,z as E_}from"./chunk-NJ7CEKTT.js";import{a as je,o as g_}from"./chunk-5PVX24OM.js";import{N as Qe,O as Ye,S as te}from"./chunk-X67GRL4Q.js";import"./chunk-SAXABFI7.js";import{n as We}from"./chunk-I7VUHP6G.js";import{a as qe}from"./chunk-CUEOI5SB.js";import{Ab as N,Bb as v,Cb as Q,Db as A,Eb as C,Fb as e,Gb as _,Hb as S,Ib as f,Jb as O,M as Le,Mb as z,Nb as K,Ob as i,Pb as Ve,Pc as _e,Qb as Be,Qc as Ke,Rb as ke,Sb as m,Ub as p,Yb as Y,Zb as J,Zc as Xe,_a as l,_b as Z,a as xe,b as we,bc as X,cc as P,dc as ze,ec as h,fa as k,ha as j,jc as ee,kc as y,lc as G,pc as W,qa as T,ra as c,rb as d,sb as He,tb as Fe,vb as E,yb as q}from"./chunk-GPUA3BWX.js";var A_=["ngForm"],C_=t=>({"pb-7":t});function f_(t,R){t&1&&(e(0,"mat-error",25),i(1,10),_());}function M_(t,R){t&1&&(e(0,"mat-error",25),i(1,11),_());}function U_(t,R){t&1&&(e(0,"mat-error",25),i(1,12),_());}function N_(t,R){t&1&&(e(0,"mat-error",25),i(1,13),_());}function h_(t,R){t&1&&S(0,"div",42);}function G_(t,R){if(t&1&&(e(0,"li",38)(1,"div",39)(2,"div",40)(3,"span",41),P(4),_()(),d(5,h_,1,0,"div",42),_(),e(6,"p",43),P(7),_()()),t&2){let n=R.$implicit,a=R.$index,o=R.$count;l(4),h(" ",a+1," "),l(),N(a!==o-1?5:-1),l(),E("ngClass",G(4,C_,a!==o-1)),l(),h(" ",n," ");}}var m_=(()=>{class t{ngForm;dialog=k(g_);fb=k(o_);api=k(c_);snackBar=k(T_);instructions=["Vi vil gjennomg\xE5 foresp\xF8rselen din og planlegge et m\xF8te for \xE5 diskutere prosjektet ditt.","Hvis oppstarten din kvalifiserer, vil du motta 60 gratis utviklingstimer.","N\xE5r godkjent, vil vi gi deg et prosjektforslag og starte prosjektet ditt."];privacyUrl=`/${je.privacyPolicy}`;form=this.fb.nonNullable.group({name:["",I.required],company:["",I.required],email:["",[I.required,I.email,I.pattern("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{1,}")]],message:["",I.required]});isLoading=!1;get controls(){return this.form.controls;}get buttonLabel(){return this.isLoading?"Sending":"Send";}get remainingCharacters(){return 1e3-(+this.form.get("message")?.value?.length||0);}onSubmit(){if(this.form.invalid)return;this.isLoading=!0,this.form.disable();let n=this.form.getRawValue(),a=new FormData();Object.keys(n).forEach(o=>{let s=n[o];a.append(o,s);}),this.api.submitStartupForm(a).pipe(Le(()=>{this.isLoading=!1,this.form.enable();})).subscribe({next:()=>{this.ngForm.resetForm(),this.openFeedbackDialog();},error:o=>{let s=o.error.message||"Error occurred while submitting form";this.snackBar.open(s,"",{duration:5e3});}});}openFeedbackDialog(){this.dialog.open(P_,{width:"412px",disableClose:!0,hasBackdrop:!0,panelClass:"custom-container"});}static ɵfac=function(a){return new(a||t)();};static ɵcmp=j({type:t,selectors:[["app-startup-program-contact"]],viewQuery:function(a,o){if(a&1&&Y(A_,5),a&2){let s;J(s=Z())&&(o.ngForm=s.first);}},standalone:!0,features:[ee],decls:54,vars:10,consts:()=>{let n;n="Skriv inn ditt navn";let a;a="Skriv inn firmanavnet ditt";let o;o="Skriv inn din bedrifts e-postadresse";let s;s="Inkluder prosjektdetaljer, varighet, teknologistabel, antall programvareutviklere som trengs, og annen relevant informasjon.";let u;u="Krav dine 60 timer med utvikling";let M;M="Fyll ut skjemaet nedenfor, og vi vil komme tilbake til deg s\xE5 snart vi har behandlet foresp\xF8rselen din. * indikerer et obligatorisk felt.";let U;U="Navn";let D;D="Selskap";let $;$="Bedriftens e-post";let b;b="Beskriv behovene dine detaljert.";let x;x="\n          Remaining Characters: \n          "+"\uFFFD0\uFFFD"+"\n        ";let w;w="\n           By clicking Send, you agree to our Privacy Policy. \n          "+"\uFFFD#47\uFFFD"+"\n          "+"\uFFFD/#47\uFFFD"+"\n        ";let L;L="Hva skjer videre?";let H;H="Vennligst skriv inn navnet ditt";let F;F="Vennligst skriv inn navnet p\xE5 selskapet ditt";let V;V="Vennligst skriv inn en gyldig e-postadresse";let B;return B="Dette feltet er p\xE5krevd.",[["ngForm","ngForm"],u,M,U,D,$,b,x,w,L,H,F,V,B,["id","startup-contact-us-section",1,"py-14"],["aria-labelledby","startup-contact-header",1,"container","d-flex","flex-column","gap-10","gap-md-14"],["id","startup-contact-header",1,"d-flex","flex-column","gap-2"],["id","startup-contact-us-heading",1,"heading-bold","fg-gray-7"],["aria-describedby","startup-contact-description",1,"body-regular","fg-gray-4"],[1,"d-flex","flex-column","flex-md-row","gap-9"],["aria-describedby","form-instructions",1,"d-flex","flex-column","form-width","gap-5",3,"ngSubmit","formGroup"],["aria-label","Personal Information",1,"d-flex","flex-column","flex-lg-row","gap-5"],["appearance","fill","hideRequiredMarker","","subscriptSizing","dynamic",1,"w-100"],[1,"body-regular"],["matInput","","placeholder",n,"formControlName","name","autocomplete","name"],[1,"caption-regular"],["matInput","","placeholder",a,"formControlName","company","autocomplete","organization"],["aria-label","Contact Information",1,"d-flex","flex-column","flex-lg-row","gap-5"],["matInput","","placeholder",o,"formControlName","email","autocomplete","email"],["appearance","fill","hideRequiredMarker","","subscriptSizing","dynamic"],["matInput","","placeholder",s,"formControlName","message","rows","4","maxlength","1000",1,"resize-none"],["align","end",1,"caption-regular"],[1,"d-flex","flex-column","flex-lg-row","align-items-lg-center","gap-5"],["styleClass","normal-btn-size","aria-label","Send Contact Form",3,"isLoading","isSubmit"],["aria-label","Privacy Agreement",1,"caption-regular","fg-gray-4"],["aria-label","Privacy Policy - Read our privacy policy for information on how we handle your data",1,"caption-regular","fg-gray-4",3,"routerLink"],["aria-labelledby","instructions-heading",1,"fit-content-height","d-flex","flex-column","w-100","p-7","gap-5","bg-gray-1"],["id","instructions-heading",1,"uppercase-heading","fg-gray-7"],[1,"d-flex","gap-4"],[1,"d-flex","flex-column","align-items-center"],[1,"d-flex","align-items-center","justify-content-center","min-size-40px","border","border-gray-2"],[1,"caption-regular","fg-gray-7"],[1,"w-0","h-100","border","border-gray-2"],["aria-label","Instructions",1,"caption-regular","fg-gray-7",3,"ngClass"]];},template:function(a,o){if(a&1){let s=O();e(0,"div",14)(1,"article",15)(2,"section",16)(3,"h2",17),i(4,1),_(),e(5,"p",18),i(6,2),_()(),e(7,"section",19)(8,"form",20,0),m("ngSubmit",function(){return T(s),c(o.onSubmit());}),e(10,"fieldset",21)(11,"mat-form-field",22)(12,"mat-label",23),P(13,"* "),e(14,"span"),i(15,3),_()(),S(16,"input",24),d(17,f_,2,0,"mat-error",25),_(),e(18,"mat-form-field",22)(19,"mat-label",23),P(20,"* "),e(21,"span"),i(22,4),_()(),S(23,"input",26),d(24,M_,2,0,"mat-error",25),_()(),e(25,"fieldset",27)(26,"mat-form-field",22)(27,"mat-label",23),P(28,"* "),e(29,"span"),i(30,5),_()(),S(31,"input",28),d(32,U_,2,0,"mat-error",25),_()(),e(33,"mat-form-field",29)(34,"mat-label",23),P(35,"* "),e(36,"span"),i(37,6),_()(),S(38,"textarea",30),e(39,"mat-hint",31),i(40,7),_(),d(41,N_,2,0,"mat-error",25),_(),e(42,"div",32)(43,"app-button",33),P(44),_(),e(45,"span",34),z(46,8),S(47,"a",35),K(),_()()(),e(48,"aside",36)(49,"h3",37),i(50,9),_(),e(51,"ol"),A(52,G_,8,6,"li",38,Q),_()()()()();}a&2&&(l(8),E("formGroup",o.form),l(9),N(o.controls.name.invalid?17:-1),l(7),N(o.controls.company.invalid?24:-1),l(8),N(o.controls.email.invalid?32:-1),l(8),Ve(o.remainingCharacters),Be(40),l(),N(o.controls.message.invalid?41:-1),l(2),E("isLoading",o.isLoading)("isSubmit",!0),l(),ze(o.buttonLabel),l(3),E("routerLink",o.privacyUrl),l(5),C(o.instructions));},dependencies:[We,_e,r_,__,Je,Ze,e_,i_,t_,n_,S_,R_,a_,s_,l_,p_,E_,te],styles:[".form-width[_ngcontent-%COMP%]{min-width:600px}@media (max-width: 991.98px){.form-width[_ngcontent-%COMP%]{min-width:350px}}@media (max-width: 575.98px){.form-width[_ngcontent-%COMP%]{min-width:100%}}"]});}return t;})();var D_=["player"],y_=()=>[import("./chunk-KJ22EU6M.js").then(t=>t.YouTubePlayer)],I_=()=>[0,1],ne=()=>({$implicit:!0}),ie=t=>({highlight:t}),v_=()=>({autoplay:1,mute:1}),$_=t=>({"bg-blue-1":t});function b_(t,R){if(t&1&&S(0,"img",140),t&2){let n=R.$implicit;E("ngSrc",n.src);}}function x_(t,R){if(t&1&&(e(0,"div",70),A(1,b_,1,1,"img",140,v),_()),t&2){let n=p();l(),C(n.clientLogos);}}function w_(t,R){if(t&1&&(e(0,"li",144)(1,"mat-icon",145),P(2,"check_circle"),_(),e(3,"p",63),P(4),_()()),t&2){let n=R.$implicit,a=p().$index;l(),q("check-"+a),l(3),h(" ",n," ");}}function L_(t,R){if(t&1&&(e(0,"div",141)(1,"h4",142),P(2),_(),e(3,"ul",143),A(4,w_,5,3,"li",144,Q),_()()),t&2){let n=R.$implicit,a=R.$index;q("criteria-card-"+a),l(),q("underline-"+a),l(),h(" ",n.label," "),l(2),C(n.list);}}function H_(t,R){t&1&&f(0);}function F_(t,R){t&1&&f(0);}function V_(t,R){t&1&&f(0);}function B_(t,R){t&1&&f(0);}function k_(t,R){t&1&&f(0);}function z_(t,R){t&1&&f(0);}function K_(t,R){t&1&&f(0);}function X_(t,R){t&1&&f(0);}function W_(t,R){if(t&1){let n=O();e(0,"section",146),m("mouseenter",function(){let o=T(n).$implicit,s=p();return c(o&&(s.hoveredItem="productStrategy"));})("mouseleave",function(){T(n);let o=p();return c(o.hoveredItem="");}),S(1,"img",147),e(2,"div",148)(3,"h4",142),i(4,43),_(),e(5,"p",63),i(6,44),_()()();}if(t&2){let n=p();E("ngClass",G(2,ie,n.hoveredItem=="productStrategy")),l(),E("ngSrc",n.hoveredItem=="productStrategy"?"images/startup-program/strategy-Icon-hovered.svg":"images/startup-program/strategy-Icon.svg");}}function j_(t,R){if(t&1){let n=O();e(0,"section",146),m("mouseenter",function(){let o=T(n).$implicit,s=p();return c(o&&(s.hoveredItem="designDevelopment"));})("mouseleave",function(){T(n);let o=p();return c(o.hoveredItem="");}),S(1,"img",147),e(2,"div",148)(3,"h4",142),i(4,45),_(),e(5,"p",63),i(6,46),_()()();}if(t&2){let n=p();E("ngClass",G(2,ie,n.hoveredItem=="designDevelopment")),l(),E("ngSrc",n.hoveredItem=="designDevelopment"?"images/startup-program/design-dev-icon-hovered.svg":"images/startup-program/design-dev-icon.svg");}}function q_(t,R){if(t&1){let n=O();e(0,"section",146),m("mouseenter",function(){let o=T(n).$implicit,s=p();return c(o&&(s.hoveredItem="mvpDevelopment"));})("mouseleave",function(){T(n);let o=p();return c(o.hoveredItem="");}),S(1,"img",147),e(2,"div",148)(3,"h4",142),i(4,47),_(),e(5,"p",63),i(6,48),_()()();}if(t&2){let n=p();E("ngClass",G(2,ie,n.hoveredItem=="mvpDevelopment")),l(),E("ngSrc",n.hoveredItem=="mvpDevelopment"?"images/startup-program/mvp-dev-icon-hovered.svg":"images/startup-program/mvp-dev-icon.svg");}}function Q_(t,R){if(t&1){let n=O();e(0,"section",146),m("mouseenter",function(){let o=T(n).$implicit,s=p();return c(o&&(s.hoveredItem="growthScaling"));})("mouseleave",function(){T(n);let o=p();return c(o.hoveredItem="");}),S(1,"img",147),e(2,"div",148)(3,"h4",142),i(4,49),_(),e(5,"p",63),i(6,50),_()()();}if(t&2){let n=p();E("ngClass",G(2,ie,n.hoveredItem=="growthScaling")),l(),E("ngSrc",n.hoveredItem=="growthScaling"?"images/startup-program/growth-icon-hovered.svg":"images/startup-program/growth-icon.svg");}}function Y_(t,R){if(t&1){let n=O();e(0,"youtube-player",149,4),m("stateChange",function(o){T(n);let s=p();return c(s.onStateChange(o));}),_();}if(t&2){let n=p();E("videoId",n.videoId)("playerVars",y(2,v_));}}function J_(t,R){if(t&1){let n=O();e(0,"div",150),m("click",function(){let o=T(n).$implicit,s=p();return c(s.selectedRelation=o);}),P(1),_();}if(t&2){let n=R.$implicit,a=p();E("ngClass",G(2,$_,a.selectedRelation.label===n.label)),l(),h(" ",n.label," ");}}function Z_(t,R){if(t&1&&(e(0,"li",151)(1,"mat-icon",152),P(2,"check_small"),_(),e(3,"p",63),P(4),_()()),t&2){let n=R.$implicit;l(4),h(" ",n," ");}}function et(t,R){if(t&1&&(e(0,"ul",127),A(1,Z_,5,1,"li",151,v),_()),t&2){let n=p();l(),C(n.selectedRelation.list);}}var yt=(()=>{class t{player;clientLogos=u_.filter(n=>_t.includes(n.label)).map(n=>n.label==="Emere"?we(xe({},n),{src:"images/logos/clients/Emere-light.svg"}):n);relationshipList=tt;eligibilityList=nt;hoveredItem="";selectedRelation=this.relationshipList[0];videoId=qe.company_video_id;selectedCriteria=this.eligibilityList[0].label;onStateChange(n){n.data===0&&this.player.playVideo();}scrollTo(){let n=document.getElementById("startup-contact-us-section");if(!n)return;let a=n.getBoundingClientRect().top+window.scrollY;window.scrollTo({top:a,behavior:"smooth"});}static ɵfac=function(a){return new(a||t)();};static ɵcmp=j({type:t,selectors:[["app-startup-program"]],viewQuery:function(a,o){if(a&1&&Y(D_,5),a&2){let s;J(s=Z())&&(o.player=s.first);}},standalone:!0,features:[ee],decls:181,vars:18,consts:()=>{let n;n="Skillelinje for hovedbanneroverskrift & st\xF8ttetekst";let a;a="Behandlingsseksjon bilde";let o;o="Behandlingsseksjon bilde";let s;s="F\xE5 60 timer med utvikling gratis";let u;u="Irlands ledende programvareselskap \u2013 Hjelper oppstartsselskaper med \xE5 bli enhj\xF8rninger siden 2012";let M;M="F\xE5 dine 60 timer";let U;U="Fremhev suksessen til oppstartsselskapet ditt.";let D;D="\n           We\u2019ve developed startup web and mobile apps to go from zero to 2 million monthly users and helped raise over \u20AC40 million. Let us build your software, become your team, and guide you on the path to success. As a boutique firm with 100+ experts, we\u2019re here to support you through every stage of your product\u2019s journey. \n          "+"[\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD]"+"\n          "+"[\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD]"+"\n          "+"[\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD]"+"\n          "+"[\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD]"+"\n          "+"[\uFFFD#18\uFFFD|\uFFFD#19\uFFFD|\uFFFD#20\uFFFD]"+"\n          "+"[\uFFFD/#18\uFFFD|\uFFFD/#19\uFFFD|\uFFFD/#20\uFFFD]"+"\n        ",D=ke(D);let $;$="Oppstartsbedrifter vi har hjulpet og mer";let b;b="Selskapsberettigelses retningslinjer";let x;x="60 timer";let w;w="60 timer";let L;L="/credits";let H;H="Oppstartprogrammet";let F;F="Utviklings-time kreditt-pakker for oppstartsselskaper";let V;V="Kreditt-pakker for oppstartsselskaper";let B;B="\n           The Credit Packages for Startups provide tailored support for startups at various stages, from those with foundational gaps to those ready for significant growth. Startups can access credits to refine their MVP, implement key features, and scale operations based on their funding and market validation, helping them achieve substantial growth and secure additional funding. \n          "+"\uFFFD#56\uFFFD"+"\n          "+"\uFFFD/#56\uFFFD"+"\n        ";let g;g="Disse timene st\xF8tter implementeringen av st\xF8rre funksjoner, integrasjoner og skaleringsprosesser, noe som gj\xF8r det mulig for oppstartsbedrifter \xE5 oppn\xE5 betydelig vekst eller sikre ytterligere finansiering.";let oe;oe="F\xE5 dine 60 timer";let re;re="Kvalifiseringskriterier";let ae;ae="Hvorfor Startups velger oss";let le;le="Vi forst\xE5r at oppstartsbedrifter har unike behov. Enten du bygger en minimumsprodukt (MVP), skalerer opp, eller lanserer en ny funksjon, er vi her for \xE5 veilede deg gjennom hver eneste trinn i prosessen.";let se;se="Proven erfaring med oppstartsselskaper";let Re;Re="Vi har hjulpet utallige oppstartsselskaper med \xE5 lansere produktene sine fra bunnen av og skalere for \xE5 m\xF8te kravene fra en voksende brukerbase. Enten du trenger en nettside, mobilapp eller l\xF8sning basert p\xE5 blockchain, har vi ekspertisen som trengs for \xE5 hjelpe deg.";let Se;Se="Skreddersydde l\xF8sninger";let Ee;Ee="Vi tror ikke p\xE5 \xE9n st\xF8rrelse passer for alle l\xF8sninger. Vi tilpasser v\xE5r tiln\xE6rming for \xE5 m\xF8te de spesifikke utfordringene og m\xE5lene for din bedrift, slik at vi skaper noe som virkelig passer din visjon.";let pe;pe="Kostnadseffektiv utvikling";let ge;ge="Vi forst\xE5r budsjettbegrensningene til oppstartsbedrifter, derfor tilbyr vi fleksible prismodeller og smarte utviklingsstrategier som maksimerer investeringen din.";let Te;Te="Hvordan vi hjelper oppstartsselskaper med \xE5 vokse";let ce;ce="Ved Dev Centre House Ireland spesialiserer vi oss p\xE5 \xE5 designe og utvikle innovative produkter for oppstartsselskaper, inkludert webapplikasjoner, mobilapplikasjoner, blockchain-l\xF8sninger, og mye mer. Gjennom \xE5rene har vi hatt privilegiet av \xE5 jobbe med et variert utvalg av oppstartsselskaper, og hjulpet dem med \xE5 omforme ideene deres til vellykkede, skalerbare produkter.";let Pe;Pe="Vi fungerer som din tekniske partner, og tilbyr full st\xF8tte fra id\xE9fasen til lansering og videre. Slik jobber vi med oppstartsselskaper for \xE5 sikre langsiktig suksess:";let de;de="F\xE5 dine 60 timer";let ue;ue="V\xE5re sterke relasjoner med oppstartsselskaper";let me;me="Ved Dev Centre House Ireland tror vi at suksessen til ethvert prosjekt er forankret i et sterkt, samarbeidsbasert forhold. N\xE5r vi jobber med oppstartsselskaper, ser vi oss ikke bare som din tjenesteleverand\xF8r - vi blir en del av teamet ditt.";let Oe;Oe="Utbytte av v\xE5r erfaring for \xE5 drive deg fremover";let Ae;Ae="Etter \xE5 ha jobbet med utallige oppstartsbedrifter, har vi opparbeidet oss dyp innsikt i hva som fungerer og hva som ikke fungerer i oppstartsekosystemet.";let Ce;Ce="Vi har sett de vanlige feilene som kan bremse fremgangen, og vi har identifisert de vinnende strategiene som driver produkter til suksess.";let fe;fe="Vi tar denne erfaringen og bruker den direkte p\xE5 oppstarten din, styrer deg unna fallgruvene og tilpasser produktstrategien din med velpr\xF8vde suksessfaktorer.";let Me;Me="M\xE5let v\xE5rt er \xE5 sikre at du ikke bare unng\xE5r potensielle tilbakeslag, men ogs\xE5 legger den beste mulige grunnlaget for langsiktig suksess.";let Ue;Ue="Ved \xE5 dra nytte av denne kunnskapen, hjelper vi deg med \xE5 utforme vellykkede strategier og unng\xE5 de vanligste feilene som ofte p\xE5virker nyetablerte bedrifter.";let Ne;Ne="M\xE5let v\xE5rt er \xE5 sikre at du ikke bare unng\xE5r potensielle tilbakeslag, men ogs\xE5 legger den beste mulige grunnlaget for langsiktig suksess.";let he;he="Produktstrategi";let Ge;Ge="Vi jobber tett med deg for \xE5 forst\xE5 din visjon, m\xE5l og forretningsmodell. Derfra hjelper vi deg med \xE5 definere en produktstrategi som er i samsvar med dine forretningsm\xE5l.";let De;De="Design & Utvikling";let ye;ye="V\xE5rt team av designere og utviklere vil omforme ideen din til et vakkert utf\xF8rt, funksjonelt produkt. Enten det er en nettside, mobilapp eller cutting-edge blockchain plattform, har vi deg dekket.";let Ie;Ie="MVP-utvikling";let ve;ve="For oppstartsselskaper i tidlige stadier, spesialiserer vi oss p\xE5 MVP-utvikling for \xE5 f\xE5 produktet ditt raskt og kostnadseffektivt til markedet.";let $e;$e="Vekst og skalering";let be;return be="N\xE5r produktet ditt er lansert, fortsetter vi \xE5 jobbe med deg, hjelper deg med \xE5 analysere bruker tilbakemeldinger, implementere nye funksjoner, og skalere plattformen din etter hvert som virksomheten vokser.",[["productStrategy",""],["designDevelopment",""],["mvpDevelopment",""],["growthScaling",""],["player",""],s,u,M,U,D,$,b,x,w,L,H,F,V,B,g,oe,re,ae,le,se,Re,Se,Ee,pe,ge,Te,ce,Pe,de,ue,me,Oe,Ae,Ce,fe,Me,Ue,Ne,he,Ge,De,ye,Ie,ve,$e,be,[1,"bg-full-width-banner"],[1,"bg-tech-icon-banner"],[1,"container","heading-content","d-flex","flex-column","py-9","py-md-14","gap-8","gap-md-10"],[1,"d-flex","flex-column","gap-8","gap-md-5"],[1,"display","fg-gray-7"],["src","images/divider.svg","alt",n,"width","15","height","70",1,"d-block","d-md-none"],[1,"display-supporting","fg-gray-7"],["styleClass","claim-hrs-btn","aria-label","Claim 60 hours",3,"onClick"],[1,"py-9"],[1,"container","d-flex","flex-column","flex-lg-row","align-items-lg-center","justify-content-lg-between","gap-6","gap-lg-14"],[1,"d-flex","flex-column","gap-6","gap-lg-7"],[1,"process-heading","heading-bold","fg-gray-7"],[1,"body-regular","fg-gray-7"],[1,"body-bold"],["ngSrc","images/startup-program/startup-process.webp","width","600","height","500","alt",a,1,"d-block","d-md-none","img-fluid"],["fill","","ngSrc","images/startup-program/startup-process-desktop.webp","alt",o,1,"d-none","d-md-block","process-image","position-relative","img-fluid"],[1,"container","d-flex","flex-column","align-items-lg-center","gap-6","gap-md-10"],[1,"text-center","body-regular","fg-gray-7"],[1,"client-carousel"],[1,"slide-animation","d-inline-block"],[1,"container","d-flex","flex-column","gap-6"],[1,"text-center","heading-bold","fg-gray-7"],[1,"credit-container","py-9","px-5","p-md-9"],[1,"d-flex","flex-column","gap-6"],[1,"criteria-main","d-flex","flex-column","justify-content-md-between","h-100","gap-5"],[1,"d-flex","gap-9","justify-content-between","justify-content-md-start"],[1,"d-flex","flex-column"],[1,"d-inline-flex","align-items-baseline","fg-blue-5"],[1,"heading-bold","d-flex","d-lg-none"],[1,"heading-bold","d-none","d-lg-flex"],[1,"body-regular"],[1,"d-block","d-lg-none","caption-regular","fg-blue-5"],[1,"d-none","d-lg-block","caption-regular","fg-blue-5"],["ngSrc","images/startup-program/startup-credit-icon.svg","width","60","height","60"],[1,"d-flex","flex-column","gap-3"],[1,"sub-heading","fg-gray-7","d-block","d-lg-none"],[1,"body-regular","fg-gray-7","d-none","d-lg-block"],[1,"fw-bold"],[1,"body-regular","fg-gray-7","d-block","d-lg-none"],[1,"d-block","d-md-none","w-0","h-100","border","border-blue-1"],[1,"sub-heading","fg-blue-5","mx-lg-auto","mb-5"],[1,"d-flex","flex-column","flex-lg-row","p-0","justify-content-between","gap-5","gap-lg-14"],[1,"d-flex","flex-column","ps-3","gap-4",3,"class"],[1,"text-md-center","d-flex","flex-column","align-items-md-center","gap-6"],[1,"banner-container","d-flex","flex-column","gap-md-6"],[1,"slanted-banner","align-self-end","py-2","px-4","border-radius-3","caption-medium","bg-blue-5","fg-white-1"],[1,"banner-heading","heading-bold","fg-gray-7"],[1,"banner-desc","body-regular","fg-gray-7"],[1,"grid","gap-6"],[1,"d-flex","flex-column","gap-5","p-7"],["ngSrc","images/startup-program/startup-icon-1.svg","width","37","height","37"],[1,"max-w-178px","sub-heading","fg-gray-7"],["ngSrc","images/startup-program/startup-icon-2.svg","width","37","height","37"],[1,"max-w-88px","sub-heading","fg-gray-7"],["ngSrc","images/startup-program/startup-icon-3.svg","width","37","height","37"],[1,"max-w-136px","sub-heading","fg-gray-7"],[1,"py-9","bg-gray-1"],[1,"container"],[1,"row","d-flex","flex-column","flex-md-row","align-items-md-center","gap-6","gap-md-14"],[1,"col-12","col-lg-4","col-xl-5","d-flex","flex-column","p-0","gap-6"],[1,"heading-bold","fg-gray-7"],[1,"col-12","col-lg-7","col-xl-6","p-0"],[1,"d-flex","d-md-none","flex-column","gap-6"],[4,"ngTemplateOutlet"],[1,"row","d-none","d-md-flex","gap-7"],[1,"col","d-flex","flex-column","p-0","gap-7"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"col","d-flex","flex-column","p-0","pt-13","gap-7"],[1,"py-9","py-md-14"],[1,"container","d-flex","flex-column","gap-6","gap-md-8"],[1,"d-flex","flex-column","gap-6","gap-md-8"],[1,"row","d-flex","flex-column","flex-lg-row","gap-6","gap-md-8","gap-xl-14"],[1,"col","order-1","order-lg-2","p-0"],[1,"col-auto","order-2","order-lg-1","d-flex","flex-column","p-0","gap-6","gap-md-8"],[1,"tab-container","d-flex","gap-3"],[1,"cursor-pointer","fit-content-min-width","p-3","py-md-5","px-md-4","border","border-radius-2","border-blue-1","caption-regular","fg-gray-7",3,"ngClass"],[1,"max-w-466px","d-flex","flex-column","gap-3"],[1,"container","d-flex","flex-column","gap-6","gap-lg-8"],[1,"row","d-flex","gap-lg-8","gap-xl-12"],[1,"col","leverage-section","d-flex","flex-column","p-0","gap-6","gap-lg-8"],[1,"d-flex","flex-column","gap-6","gap-lg-8"],["ngSrc","images/startup-program/startup-leverage.webp","fill","","alt","startup leverage company image",1,"d-block","d-lg-none","position-relative","img-fluid"],[1,"col","p-0","d-none","d-lg-block"],["ngSrc","images/startup-program/startup-leverage.webp","fill","","alt","startup leverage company image",1,"position-relative","leverage-image","img-fluid"],[1,"py-14","bg-gray-7"],[1,"row","d-flex","flex-column","flex-lg-row","align-items-center","justify-content-center","gap-7"],[1,"col","p-0","text-center","goal-typography","fg-white-1"],[1,"col","p-0"],["ngSrc","images/startup-program/startup-goal.webp","fill","","alt","startup goal company founders image",1,"position-relative","img-fluid"],["width","60","height","60",1,"mx-7",3,"ngSrc"],[1,"d-flex","flex-column","ps-3","gap-4"],[1,"sub-heading","fg-gray-7"],[1,"d-flex","flex-column","gap-2"],[1,"d-flex","align-items-center","gap-3"],[1,"overflow-visible","material-symbols-outlined","h-10","w-10"],[1,"d-flex","flex-column","p-7","gap-6","bg-white-1","border-radius-2",3,"mouseenter","mouseleave","ngClass"],["width","64","height","64",3,"ngSrc"],[1,"d-flex","flex-column","gap-4"],[3,"stateChange","videoId","playerVars"],[1,"cursor-pointer","fit-content-min-width","p-3","py-md-5","px-md-4","border","border-radius-2","border-blue-1","caption-regular","fg-gray-7",3,"click","ngClass"],[1,"d-flex","align-items-center","gap-2"],[1,"overflow-visible","material-symbols-outlined"]];},template:function(a,o){if(a&1){let s=O();e(0,"div",51)(1,"section",52)(2,"article",53)(3,"section",54)(4,"h1",55),i(5,5),_(),S(6,"img",56),e(7,"p",57),i(8,6),_()(),e(9,"app-button",58),m("onClick",function(){return T(s),c(o.scrollTo());}),i(10,7),_()()()(),e(11,"div",59)(12,"article",60)(13,"section",61)(14,"h2",62),i(15,8),_(),e(16,"p",63),z(17,9),S(18,"span",64)(19,"span",64)(20,"span",64),K(),_()(),S(21,"img",65)(22,"img",66),_()(),e(23,"div",59)(24,"article",67)(25,"p",68),i(26,10),_(),e(27,"section",69),A(28,x_,3,0,"div",70,v),_()()(),e(30,"div",59)(31,"article",71)(32,"h2",72),i(33,11),_(),e(34,"div",73)(35,"section",74)(36,"section",75)(37,"div",76)(38,"div",77)(39,"div",78)(40,"span",79),i(41,12),_(),e(42,"span",80),i(43,13),_(),e(44,"span",81),i(45,14),_()(),e(46,"span",82),i(47,15),_(),e(48,"span",83),i(49,16),_()(),S(50,"img",84),_(),e(51,"div",85)(52,"p",86),i(53,17),_(),e(54,"p",87),z(55,18),S(56,"span",88),K(),_(),e(57,"p",89),i(58,19),_()(),e(59,"app-button",58),m("onClick",function(){return T(s),c(o.scrollTo());}),i(60,20),_()(),S(61,"div",90),e(62,"h3",91),i(63,21),_(),e(64,"section",92),A(65,L_,6,5,"div",93,v),_()()()()(),e(67,"div",59)(68,"article",71)(69,"section",94)(70,"div",95)(71,"div",96),P(72,"YOUR IDEA STARTS HERE"),_(),e(73,"h2",97),i(74,22),_()(),e(75,"p",98),i(76,23),_()(),e(77,"div",99)(78,"section",100),S(79,"img",101),e(80,"section",85)(81,"h3",102),i(82,24),_(),e(83,"p",63),i(84,25),_()()(),e(85,"section",100),S(86,"img",103),e(87,"section",85)(88,"h3",104),i(89,26),_(),e(90,"p",63),i(91,27),_()()(),e(92,"section",100),S(93,"img",105),e(94,"section",85)(95,"h3",106),i(96,28),_(),e(97,"p",63),i(98,29),_()()()()()(),e(99,"div",107)(100,"article",108)(101,"div",109)(102,"div",110)(103,"section",74)(104,"h2",111),i(105,30),_(),e(106,"div",74)(107,"p",63),i(108,31),_(),e(109,"p",63),i(110,32),_()()(),e(111,"app-button",58),m("onClick",function(){return T(s),c(o.scrollTo());}),i(112,33),_()(),e(113,"div",112)(114,"section",113),d(115,H_,1,0,"ng-container",114)(116,F_,1,0,"ng-container",114)(117,V_,1,0,"ng-container",114)(118,B_,1,0,"ng-container",114),_(),e(119,"section",115)(120,"div",116),d(121,k_,1,0,"ng-container",117)(122,z_,1,0,"ng-container",117),_(),e(123,"div",118),d(124,K_,1,0,"ng-container",117)(125,X_,1,0,"ng-container",117),_()()()()(),d(126,W_,7,4,"ng-template",null,0,W)(128,j_,7,4,"ng-template",null,1,W)(130,q_,7,4,"ng-template",null,2,W)(132,Q_,7,4,"ng-template",null,3,W),_(),e(134,"div",119)(135,"article",120)(136,"section",121)(137,"h2",111),i(138,34),_(),e(139,"p",63),i(140,35),_()(),e(141,"section",122)(142,"section",123),d(143,Y_,2,3),He(144,143,y_),Fe(),_(),e(146,"div",124)(147,"section",125),A(148,J_,2,4,"div",126,v),_(),d(150,et,3,0,"ul",127),_()()()(),e(151,"div",59)(152,"article",128)(153,"h2",111),i(154,36),_(),e(155,"div",129)(156,"div",130)(157,"ul",131)(158,"li",63),i(159,37),_(),e(160,"li",63),i(161,38),_(),e(162,"li",63),i(163,39),_()(),S(164,"img",132),e(165,"ul",131)(166,"li",63),i(167,40),_(),e(168,"li",63),i(169,41),_()()(),e(170,"div",133),S(171,"img",134),_()()()(),e(172,"div",135)(173,"article",108)(174,"div",136)(175,"p",137),i(176,42),_(),e(177,"div",138),S(178,"img",139),_()()()(),S(179,"app-startup-program-contact")(180,"app-offices");}if(a&2){let s=X(127),u=X(129),M=X(131),U=X(133);l(28),C(y(13,I_)),l(37),C(o.eligibilityList),l(50),E("ngTemplateOutlet",s),l(),E("ngTemplateOutlet",u),l(),E("ngTemplateOutlet",M),l(),E("ngTemplateOutlet",U),l(3),E("ngTemplateOutlet",s)("ngTemplateOutletContext",y(14,ne)),l(),E("ngTemplateOutlet",M)("ngTemplateOutletContext",y(15,ne)),l(2),E("ngTemplateOutlet",u)("ngTemplateOutletContext",y(16,ne)),l(),E("ngTemplateOutlet",U)("ngTemplateOutletContext",y(17,ne)),l(23),C(o.relationshipList),l(2),N(o.selectedRelation?150:-1);}},dependencies:[Xe,Ke,_e,Ye,Qe,d_,m_,te],styles:['.display[_ngcontent-%COMP%]{font-family:IBM Plex Sans,sans-serif;font-size:clamp(3rem,4vw + 2rem,3.75rem);line-height:clamp(4rem,5vw + 3rem,5rem);font-weight:700}.display-supporting[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:1.5rem;line-height:1.5rem;font-weight:400}.heading-regular[_ngcontent-%COMP%]{font-family:IBM Plex Sans,sans-serif;font-size:clamp(2rem,3vw + 1rem,2.5rem);line-height:clamp(2.5rem,3.5vw + 1.5rem,3rem);font-weight:400}.heading-semibold[_ngcontent-%COMP%]{font-family:IBM Plex Sans,sans-serif;font-size:clamp(2rem,3vw + 1rem,2.5rem);line-height:clamp(2.5rem,3.5vw + 1.5rem,3rem);font-weight:600}.heading-bold[_ngcontent-%COMP%]{font-family:IBM Plex Sans,sans-serif;font-size:clamp(2rem,3vw + 1rem,2.5rem);line-height:clamp(2.5rem,3.5vw + 1.5rem,3rem);font-weight:700}.sub-heading[_ngcontent-%COMP%]{font-family:IBM Plex Sans,sans-serif;font-size:1.25rem;line-height:1.5rem;font-weight:600}.uppercase-heading[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:1.25rem;line-height:1.5rem;font-weight:500;text-transform:uppercase}.body-regular[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:1rem;line-height:1.5rem;font-weight:400}.body-medium[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:1rem;line-height:1.5rem;font-weight:500}.body-semibold[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:1rem;line-height:1.5rem;font-weight:600}.body-bold[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:1rem;line-height:1.5rem;font-weight:700}.caption-regular[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:clamp(.75rem,1vw + .5rem,.875rem);line-height:1.125rem;font-weight:400}.caption-medium[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:clamp(.75rem,1vw + .5rem,.875rem);line-height:1.125rem;font-weight:500}.caption-semibold[_ngcontent-%COMP%]{font-family:Space Grotesk,sans-serif;font-size:clamp(.75rem,1vw + .5rem,.875rem);line-height:1.125rem;font-weight:600}.bg-full-width-banner[_ngcontent-%COMP%]{background-image:url("./media/hero-banner-full-73C6COJJ.svg");background-repeat:no-repeat;background-size:cover}.process-heading[_ngcontent-%COMP%]{max-width:359px}.process-image[_ngcontent-%COMP%]{width:581px!important;height:408px!important}.client-carousel[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;position:relative;max-width:970px}.client-carousel[_ngcontent-%COMP%]:before, .client-carousel[_ngcontent-%COMP%]:after{position:absolute;top:0;width:100px;height:100%;content:"";z-index:2}.client-carousel[_ngcontent-%COMP%]:before{left:0;background:linear-gradient(to left,#fff0,#fff)}.client-carousel[_ngcontent-%COMP%]:after{right:0;background:linear-gradient(to right,#fff0,#fff)}.slide-animation[_ngcontent-%COMP%]{animation:25s _ngcontent-%COMP%_slide infinite linear}.slanted-banner[_ngcontent-%COMP%]{transform:rotate(11deg)}.highlight[_ngcontent-%COMP%]{box-shadow:0 12px 56px #061c3d1f}.tab-container[_ngcontent-%COMP%]{overflow-x:auto;scrollbar-width:none}.tab-container[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.goal-typography[_ngcontent-%COMP%]{font-family:IBM Plex Sans,sans-serif;font-size:1.25rem;line-height:1.5rem;font-weight:600}.credit-container[_ngcontent-%COMP%]{border-top:12px solid var(--blue-5);border-radius:16px;border-bottom:1px solid var(--blue-1);border-left:1px solid var(--blue-1);border-right:1px solid var(--blue-1)}.criteria[_ngcontent-%COMP%]{border-left:3px solid var(--blue-1)}.criteria-highlight[_ngcontent-%COMP%]{border-left:3px solid var(--blue-5)}@keyframes _ngcontent-%COMP%_slide{0%{transform:translate(0)}to{transform:translate(-100%)}}@media (max-width: 767.98px){.banner-container[_ngcontent-%COMP%]{position:relative;max-width:330px}.banner-heading[_ngcontent-%COMP%]{max-width:300px}.slanted-banner[_ngcontent-%COMP%]{position:absolute;top:0;right:0;transform:rotate(21deg)}}@media (max-width: 991.98px){.process-image[_ngcontent-%COMP%]{width:700px!important;height:500px!important}.criteria-card-0[_ngcontent-%COMP%]{border-left:3px solid var(--blue-5)}.criteria-card-1[_ngcontent-%COMP%]{border-left:3px solid var(--blue-3)}.criteria-card-2[_ngcontent-%COMP%]{border-left:3px solid var(--gray-2)}}@media (min-width: 768px){.heading-content[_ngcontent-%COMP%]{max-width:656px;text-align:center}.bg-tech-icon-banner[_ngcontent-%COMP%]{background-image:url("./media/tech-logo-banner-AJV66T7A.webp");background-repeat:no-repeat;background-position:center;background-size:contain}.process-heading[_ngcontent-%COMP%]{max-width:359px}.banner-desc[_ngcontent-%COMP%]{max-width:825px}.help-header[_ngcontent-%COMP%]{max-width:454px}.goal-typography[_ngcontent-%COMP%]{font-family:IBM Plex Sans,sans-serif;font-size:clamp(2rem,3vw + 1rem,2.5rem);line-height:clamp(2.5rem,3.5vw + 1.5rem,3rem);font-weight:700}}@media (min-width: 992px){.underline-0[_ngcontent-%COMP%]{text-decoration:underline;text-decoration-color:var(--blue-5);text-underline-offset:8px}.underline-1[_ngcontent-%COMP%]{text-decoration:underline;text-decoration-color:var(--blue-3);text-underline-offset:8px}.underline-2[_ngcontent-%COMP%]{text-decoration:underline;text-decoration-color:var(--gray-2);text-underline-offset:8px}}@media (min-width: 1200px){.leverage-section[_ngcontent-%COMP%]{max-width:485px}}mat-icon.check-0[_ngcontent-%COMP%]{color:var(--blue-5)}mat-icon.check-1[_ngcontent-%COMP%]{color:var(--blue-3)}mat-icon.check-2[_ngcontent-%COMP%]{color:var(--gray-2)}']});}return t;})(),_t=["Tenantin.ie","FindQo.ie","Kurd Shopping","Emere","SEEYOU","Patrick Ward & Co. Solicitors","Prosperity","Dialsave","MedXNote"],tt=[{label:"Tett samarbeid",list:["Vi jobber direkte med deg, og opprettholder \xE5pne kommunikasjonslinjer til enhver tid.","M\xE5let v\xE5rt er \xE5 s\xF8rge for at du f\xF8ler deg st\xF8ttet og involvert i hvert steg av prosessen."]},{label:"Felles visjon",list:["Vi tar oss tid til \xE5 forst\xE5 ikke bare produktet ditt, men hele bedriften din.","Vi er her for \xE5 gi innsikt og retning som kan hjelpe oppstarten din med \xE5 vokse i riktig retning."]},{label:"Langsiktige partnerskap",list:["Vi forsvinner ikke etter lansering. V\xE5rt forhold til deg strekker seg godt utover leveringen av produktet ditt.","N\xE5r oppstarten din vokser, forblir vi ved din side, og hjelper deg med \xE5 h\xE5ndtere utfordringer og oppn\xE5 nye milep\xE6ler."]}],nt=[{label:"60 timer utviklingskreditter",list:["Finansiering: Samlet inn over \u20AC1,000,000.","Produkt: MVP er komplett, med noe trekkraft eller inntekt.","Team: Et dedikert teknisk team er p\xE5 plass; ekstern st\xF8tte trengs for \xE5 skalere.","Markedsvalidering: Tydelig validering, fokusert p\xE5 skaleringstiltak.","Veikart: Definert veikart med m\xE5l for funksjonsutvikling og forbedringer.","Ressurser: Evne til \xE5 ansette minst 3 ressurser."]},{label:"10 timer med utviklingskreditter",list:["Finansiering: Samlet mindre enn \u20AC100 000.","Produkt: Ingen MVP eller tydelig produktvisjon.","Erfaring: Grunnleggerne har begrenset bransjeerfaring.","Markedsunders\xF8kelse: Utilstrekkelig godkjenning eller unders\xF8kelse.","Vekststrategi: Uklar eller manglende.","Alignment: Forretningsmodellen eller konseptet passer ikke til v\xE5re utviklingsstyrker.","Veikart: Ingen konkrete neste steg for oppskalering eller utvikling."]},{label:"Ikke kvalifisert",list:["Finansiering: Samlet mindre enn \u20AC100 000.","Produkt: Ingen MVP eller tydelig produktvisjon.","Erfaring: Grunnleggerne har begrenset bransjeerfaring.","Markedsunders\xF8kelse: Utilstrekkelig godkjenning eller unders\xF8kelse.","Vekststrategi: Uklar eller manglende.","Alignment: Forretningsmodellen eller konseptet passer ikke til v\xE5re utviklingsstyrker.","Veikart: Ingen konkrete neste steg for oppskalering eller utvikling."]}];export{nt as ELIGIBILITY_LIST,tt as RELATIONSHIP_LIST,yt as StartupProgramComponent};/**i18n:2959a088a4f851c603ee32029e8942bcc70b3666ad7eada0c74607a8984ba57d*/