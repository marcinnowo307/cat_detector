(function(g){var window=this;var C2=function(a,b){g.pf(a.u,8*b+2);var c=a.u.end();a.C.push(c);a.B+=c.length;c.push(a.B);return c},D2=function(a,b){var c=b.pop();
for(c=a.B+a.u.length()-c;127<c;)b.push(c&127|128),c>>>=7,a.B++;b.push(c);a.B++},yFa=function(a,b,c){null!=c&&(g.pf(a.u,8*b+1),a=a.u,b=c>>>0,c=Math.floor((c-b)/4294967296)>>>0,g.Af=b,g.Bf=c,g.qf(a,g.Af),g.qf(a,g.Bf))},E2=function(a,b,c){null!=c&&(g.pf(a.u,8*b),a.u.u.push(c?1:0))},F2=function(a,b,c){if(null!=c){b=C2(a,b);
for(var d=a.u,e=0;e<c.length;e++){var f=c.charCodeAt(e);if(128>f)d.u.push(f);else if(2048>f)d.u.push(f>>6|192),d.u.push(f&63|128);else if(65536>f)if(55296<=f&&56319>=f&&e+1<c.length){var h=c.charCodeAt(e+1);56320<=h&&57343>=h&&(f=1024*(f-55296)+h-56320+65536,d.u.push(f>>18|240),d.u.push(f>>12&63|128),d.u.push(f>>6&63|128),d.u.push(f&63|128),e++)}else d.u.push(f>>12|224),d.u.push(f>>6&63|128),d.u.push(f&63|128)}D2(a,b)}},G2=function(a,b,c,d){null!=c&&(b=C2(a,b),d(c,a),D2(a,b))},H2=function(a,b,c,d){if(null!=
c)for(var e=0;e<c.length;e++){var f=C2(a,b);
d(c[e],a);D2(a,f)}},zFa=function(a,b){var c=(b-a.u)/(a.B-a.u);
if(0>=c)return 0;if(1<=c)return 1;for(var d=0,e=1,f=0,h=0;8>h;h++){f=g.In(a,c);var l=(g.In(a,c+1E-6)-f)/1E-6;if(1E-6>Math.abs(f-b))return c;if(1E-6>Math.abs(l))break;else f<b?d=c:e=c,c-=(f-b)/l}for(h=0;1E-6<Math.abs(f-b)&&8>h;h++)f<b?(d=c,c=(c+e)/2):(e=c,c=(c+d)/2),f=g.In(a,c);return c},I2=function(a,b,c){a.u||(a.u={});
if(!a.u[c]){var d=g.Kf(a,c);d&&(a.u[c]=new b(d))}return a.u[c]},AFa=function(a,b,c){a.u||(a.u={});
c=c||[];for(var d=[],e=0;e<c.length;e++)d[e]=g.Rf(c[e]);a.u[b]=c;g.Mf(a,b,d)},J2=function(a,b,c,d){(c=g.If(a,c))&&c!==b&&void 0!==d&&(a.u&&c in a.u&&(a.u[c]=void 0),g.Mf(a,c,void 0));
g.Mf(a,b,d)},K2=function(){return{G:"svg",
T:{height:"100%",version:"1.1",viewBox:"0 0 110 26",width:"100%"},R:[{G:"path",ub:!0,L:"ytp-svg-fill",T:{d:"M 16.68,.99 C 13.55,1.03 7.02,1.16 4.99,1.68 c -1.49,.4 -2.59,1.6 -2.99,3 -0.69,2.7 -0.68,8.31 -0.68,8.31 0,0 -0.01,5.61 .68,8.31 .39,1.5 1.59,2.6 2.99,3 2.69,.7 13.40,.68 13.40,.68 0,0 10.70,.01 13.40,-0.68 1.5,-0.4 2.59,-1.6 2.99,-3 .69,-2.7 .68,-8.31 .68,-8.31 0,0 .11,-5.61 -0.68,-8.31 -0.4,-1.5 -1.59,-2.6 -2.99,-3 C 29.11,.98 18.40,.99 18.40,.99 c 0,0 -0.67,-0.01 -1.71,0 z m 72.21,.90 0,21.28 2.78,0 .31,-1.37 .09,0 c .3,.5 .71,.88 1.21,1.18 .5,.3 1.08,.40 1.68,.40 1.1,0 1.99,-0.49 2.49,-1.59 .5,-1.1 .81,-2.70 .81,-4.90 l 0,-2.40 c 0,-1.6 -0.11,-2.90 -0.31,-3.90 -0.2,-0.89 -0.5,-1.59 -1,-2.09 -0.5,-0.4 -1.10,-0.59 -1.90,-0.59 -0.59,0 -1.18,.19 -1.68,.49 -0.49,.3 -1.01,.80 -1.21,1.40 l 0,-7.90 -3.28,0 z m -49.99,.78 3.90,13.90 .18,6.71 3.31,0 0,-6.71 3.87,-13.90 -3.37,0 -1.40,6.31 c -0.4,1.89 -0.71,3.19 -0.81,3.99 l -0.09,0 c -0.2,-1.1 -0.51,-2.4 -0.81,-3.99 l -1.37,-6.31 -3.40,0 z m 29.59,0 0,2.71 3.40,0 0,17.90 3.28,0 0,-17.90 3.40,0 c 0,0 .00,-2.71 -0.09,-2.71 l -9.99,0 z m -53.49,5.12 8.90,5.18 -8.90,5.09 0,-10.28 z m 89.40,.09 c -1.7,0 -2.89,.59 -3.59,1.59 -0.69,.99 -0.99,2.60 -0.99,4.90 l 0,2.59 c 0,2.2 .30,3.90 .99,4.90 .7,1.1 1.8,1.59 3.5,1.59 1.4,0 2.38,-0.3 3.18,-1 .7,-0.7 1.09,-1.69 1.09,-3.09 l 0,-0.5 -2.90,-0.21 c 0,1 -0.08,1.6 -0.28,2 -0.1,.4 -0.5,.62 -1,.62 -0.3,0 -0.61,-0.11 -0.81,-0.31 -0.2,-0.3 -0.30,-0.59 -0.40,-1.09 -0.1,-0.5 -0.09,-1.21 -0.09,-2.21 l 0,-0.78 5.71,-0.09 0,-2.62 c 0,-1.6 -0.10,-2.78 -0.40,-3.68 -0.2,-0.89 -0.71,-1.59 -1.31,-1.99 -0.7,-0.4 -1.48,-0.59 -2.68,-0.59 z m -50.49,.09 c -1.09,0 -2.01,.18 -2.71,.68 -0.7,.4 -1.2,1.12 -1.49,2.12 -0.3,1 -0.5,2.27 -0.5,3.87 l 0,2.21 c 0,1.5 .10,2.78 .40,3.78 .2,.9 .70,1.62 1.40,2.12 .69,.5 1.71,.68 2.81,.78 1.19,0 2.08,-0.28 2.78,-0.68 .69,-0.4 1.09,-1.09 1.49,-2.09 .39,-1 .49,-2.30 .49,-3.90 l 0,-2.21 c 0,-1.6 -0.2,-2.87 -0.49,-3.87 -0.3,-0.89 -0.8,-1.62 -1.49,-2.12 -0.7,-0.5 -1.58,-0.68 -2.68,-0.68 z m 12.18,.09 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.18,-0.70 -0.18,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .18,2.39 .68,3.09 .49,.7 1.21,1 2.21,1 1.4,0 2.48,-0.69 3.18,-2.09 l .09,0 .31,1.78 2.59,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 17.31,0 0,11.90 c -0.1,.3 -0.29,.48 -0.59,.68 -0.2,.2 -0.51,.31 -0.81,.31 -0.3,0 -0.58,-0.10 -0.68,-0.40 -0.1,-0.3 -0.21,-0.70 -0.21,-1.40 l 0,-10.99 -3.40,0 0,11.21 c 0,1.4 .21,2.39 .71,3.09 .5,.7 1.18,1 2.18,1 1.39,0 2.51,-0.69 3.21,-2.09 l .09,0 .28,1.78 2.62,0 0,-14.99 c 0,0 -3.40,.00 -3.40,-0.09 z m 20.90,2.09 c .4,0 .58,.11 .78,.31 .2,.3 .30,.59 .40,1.09 .1,.5 .09,1.21 .09,2.21 l 0,1.09 -2.5,0 0,-1.09 c 0,-1 -0.00,-1.71 .09,-2.21 0,-0.4 .11,-0.8 .31,-1 .2,-0.3 .51,-0.40 .81,-0.40 z m -50.49,.12 c .5,0 .8,.18 1,.68 .19,.5 .28,1.30 .28,2.40 l 0,4.68 c 0,1.1 -0.08,1.90 -0.28,2.40 -0.2,.5 -0.5,.68 -1,.68 -0.5,0 -0.79,-0.18 -0.99,-0.68 -0.2,-0.5 -0.31,-1.30 -0.31,-2.40 l 0,-4.68 c 0,-1.1 .11,-1.90 .31,-2.40 .2,-0.5 .49,-0.68 .99,-0.68 z m 39.68,.09 c .3,0 .61,.10 .81,.40 .2,.3 .27,.67 .37,1.37 .1,.6 .12,1.51 .12,2.71 l .09,1.90 c 0,1.1 .00,1.99 -0.09,2.59 -0.1,.6 -0.19,1.08 -0.49,1.28 -0.2,.3 -0.50,.40 -0.90,.40 -0.3,0 -0.51,-0.08 -0.81,-0.18 -0.2,-0.1 -0.39,-0.29 -0.59,-0.59 l 0,-8.5 c .1,-0.4 .29,-0.7 .59,-1 .3,-0.3 .60,-0.40 .90,-0.40 z"}}]}},
BFa=function(a){this.eC=a},L2=function(a,b,c){this.D=a;
this.B=b;this.u=c||[];this.Ao=new Map},M2=function(a,b){L2.call(this,a,3,b)},DFa=function(){this.I=new CFa;
this.B=new Map;this.F=new Set;this.C=0;this.D=100;this.flushInterval=3E4;this.u=new g.Om(this.flushInterval);this.u.ya("tick",this.mH,!1,this)},EFa=function(a,b){return a.F.has(b)?void 0:a.B.get(b)},FFa=function(a){for(var b=0;b<a.length;b++)a[b].clear()},GFa=function(){if(!N2){N2=new DFa;
var a=g.Xo("client_streamz_web_flush_count",-1);-1!==a&&(N2.D=a)}this.u=N2;this.u.WI("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe",{zJ:3,yJ:"client_name"})},IFa=function(a){g.Jf(this,a,HFa,null)},JFa=function(a){g.Jf(this,a,null,null)},LFa=function(a,b){var c=g.Qf(a,JFa,1);
0<c.length&&H2(b,1,c,KFa)},KFa=function(a,b){var c=g.Kf(a,1);
null!=c&&g.Df(b,1,c);c=g.Kf(a,2);null!=c&&g.Cf(b,2,c)},NFa=function(a){g.Jf(this,a,MFa,null)},PFa=function(a){g.Jf(this,a,null,OFa)},QFa=function(a){g.Jf(this,a,null,null)},RFa=function(a){g.Jf(this,a,null,null)},O2=function(a){g.Jf(this,a,SFa,null)},Q2=function(a){g.Jf(this,a,null,P2)},S2=function(a){g.Jf(this,a,null,R2)},VFa=function(a,b){var c=I2(a,QFa,1);
null!=c&&G2(b,1,c,TFa);c=I2(a,RFa,2);null!=c&&G2(b,2,c,UFa)},TFa=function(a,b){var c=g.Kf(a,1);
null!=c&&F2(b,1,c);c=g.Kf(a,2);null!=c&&F2(b,2,c);c=g.Kf(a,3);null!=c&&E2(b,3,c)},UFa=function(a,b){var c=g.Kf(a,1);
null!=c&&F2(b,1,c);c=g.Kf(a,2);null!=c&&F2(b,2,c);c=g.Kf(a,3);null!=c&&g.zf(b,3,c);c=g.Kf(a,4);null!=c&&E2(b,4,c)},YFa=function(a,b){var c=g.Qf(a,Q2,1);
0<c.length&&H2(b,1,c,WFa);c=I2(a,S2,2);null!=c&&G2(b,2,c,XFa)},WFa=function(a,b){var c=g.Kf(a,1);
null!=c&&F2(b,1,c);c=g.Kf(a,2);null!=c&&g.zf(b,2,c);c=g.Kf(a,3);null!=c&&E2(b,3,c)},XFa=function(a,b){var c=g.Kf(a,1);
null!=c&&g.Cf(b,1,c);c=g.Kf(a,2);null!=c&&g.Df(b,2,c);c=I2(a,IFa,3);null!=c&&G2(b,3,c,LFa)},CFa=function(){},T2=function(a){g.B.call(this);
this.callback=a;this.C=new g.Hn(0,0,.4,0,.2,1,1,1);this.delay=new g.ln(this.next,window,this);this.startTime=this.duration=this.B=this.u=NaN;g.C(this,this.delay)},U2=function(a){g.U.call(this,{G:"div",
L:"ytp-related-on-error-overlay"});var b=this;this.api=a;this.I=this.B=0;this.animationDelay=1E3;this.N=new g.YN(this);this.D=[];this.u=[];this.F=0;this.title=new g.U({G:"h2",L:"ytp-related-title",ba:"{{title}}"});this.previous=new g.U({G:"button",ia:["ytp-button","ytp-previous"],T:{"aria-label":"Poka\u017c poprzednio proponowane filmy"},R:[g.SL()]});this.X=new T2(function(f){b.suggestions.element.scrollLeft=-f});
this.tileWidth=this.C=0;this.K=!0;this.next=new g.U({G:"button",ia:["ytp-button","ytp-next"],T:{"aria-label":"Poka\u017c wi\u0119cej proponowanych film\u00f3w"},R:[g.TL()]});g.C(this,this.N);a=a.S();this.W=a.B;g.C(this,this.title);this.title.fa(this.element);this.suggestions=new g.U({G:"div",L:"ytp-suggestions"});g.C(this,this.suggestions);this.suggestions.fa(this.element);g.C(this,this.previous);this.previous.fa(this.element);this.previous.ya("click",this.yL,this);g.C(this,this.X);for(var c=0;16>
c;c++){var d=new g.U({G:"a",L:"ytp-suggestion-link",T:{href:"{{link}}",target:a.F,"aria-label":"{{aria_label}}"},R:[{G:"div",L:"ytp-suggestion-image",R:[{G:"div",T:{"data-is-live":"{{is_live}}"},L:"ytp-suggestion-duration",ba:"{{duration}}"}]},{G:"div",L:"ytp-suggestion-title",T:{title:"{{hover_title}}"},ba:"{{title}}"},{G:"div",L:"ytp-suggestion-author",ba:"{{views_or_author}}"}]});g.C(this,d);d.fa(this.suggestions.element);var e=d.ha("ytp-suggestion-link");g.tg(e,"transitionDelay",c/20+"s");this.N.P(e,
"click",g.Ra(this.zL,c));this.D.push(d)}g.C(this,this.next);this.next.fa(this.element);this.next.ya("click",this.xL,this);this.N.P(this.api,"videodatachange",this.Pa);this.resize(this.api.Ja().getPlayerSize());this.Pa();this.show()},V2=function(a){a.next.element.style.bottom=a.I+"px";
a.previous.element.style.bottom=a.I+"px";var b=a.C,c=a.F-a.u.length*(a.tileWidth+a.B);g.K(a.element,"ytp-scroll-min",0<=b);g.K(a.element,"ytp-scroll-max",b<=c)},ZFa=function(a){for(var b=0;b<a.u.length;b++){var c=b,d=a.u[b].Ma();
c=a.D[c];var e=d.shortViewCount?d.shortViewCount:d.author,f=d.El();g.mD(a.api.S())&&(f=g.Nd(f,g.eP("emb_rel_err")));c.element.style.display="";var h=c.ha("ytp-suggestion-title");g.Fn.test(d.title)?h.dir="rtl":g.qBa.test(d.title)&&(h.dir="ltr");h=c.ha("ytp-suggestion-author");g.Fn.test(e)?h.dir="rtl":g.qBa.test(e)&&(h.dir="ltr");h=d.isLivePlayback?"Na \u017cywo":d.lengthSeconds?g.DM(d.lengthSeconds):"";c.update({views_or_author:e,duration:h,link:f,hover_title:d.title,title:d.title,aria_label:d.qq||
null,is_live:d.isLivePlayback});c=c.ha("ytp-suggestion-image");d=d.ue();c.style.backgroundImage=d?"url("+d+")":""}for(;b<a.D.length;b++)a.D[b].element.style.display="none";V2(a)},W2=function(a){g.FO.call(this,a);
var b=this,c=a.S();c=new g.U({G:"a",L:"ytp-small-redirect",T:{href:g.$D(c),target:c.F,"aria-label":"Wr\u00f3\u0107 do YouTube, by znale\u017a\u0107 wi\u0119cej film\u00f3w"},R:[{G:"svg",T:{fill:"#fff",height:"100%",viewBox:"0 0 24 24",width:"100%"},R:[{G:"path",T:{d:"M0 0h24v24H0V0z",fill:"none"}},{G:"path",T:{d:"M21.58 7.19c-.23-.86-.91-1.54-1.77-1.77C18.25 5 12 5 12 5s-6.25 0-7.81.42c-.86.23-1.54.91-1.77 1.77C2 8.75 2 12 2 12s0 3.25.42 4.81c.23.86.91 1.54 1.77 1.77C5.75 19 12 19 12 19s6.25 0 7.81-.42c.86-.23 1.54-.91 1.77-1.77C22 15.25 22 12 22 12s0-3.25-.42-4.81zM10 15V9l5.2 3-5.2 3z"}}]}]});
c.fa(this.element);g.C(this,c);this.u=new U2(a);this.u.fa(this.element);g.C(this,this.u);this.P(a,"videodatachange",function(){b.show()});
this.resize(this.api.Ja().getPlayerSize())},$Fa=function(a,b){a.ha("ytp-error-content").style.paddingTop="0px";
var c=a.ha("ytp-error-content"),d=c.clientHeight;a.u.resize(b,b.height-d);c.style.paddingTop=(b.height-a.u.element.clientHeight)/2-d/2+"px"},aGa=function(a,b){var c=a.api.S(),d;
b.reason&&(X2(b.reason)?d=g.AG(b.reason):d=g.GO(g.S(b.reason)),a.Fc(d,"content"));var e;b.subreason&&(X2(b.subreason)?e=g.AG(b.subreason):e=g.GO(g.S(b.subreason)),a.Fc(e,"subreason"));if(g.P(c.experiments,"embeds_enable_age_gating_playability_check")&&b.proceedButton&&b.proceedButton.buttonRenderer&&(e=b.proceedButton.buttonRenderer,c=a.ha("ytp-error-content-wrap-subreason"),d=g.Ge("A"),e.text&&e.text.simpleText)){var f=e.text.simpleText;d.textContent=f;a:{for(var h=(c||document).getElementsByTagName("A"),
l=0;l<h.length;l++)if(h[l].textContent===f){f=!0;break a}f=!1}f||(e.navigationEndpoint&&e.navigationEndpoint.urlEndpoint&&((f=e.navigationEndpoint.urlEndpoint.url)&&d.setAttribute("href",f),(e=e.navigationEndpoint.urlEndpoint.target)&&d.setAttribute("target",e)),c.appendChild(d))}},X2=function(a){if(a.runs)for(var b=0;b<a.runs.length;b++)if(a.runs[b].navigationEndpoint)return!0;
return!1},Y2=function(a,b){g.U.call(this,{G:"a",
ia:["ytp-impression-link"],T:{target:"{{target}}",href:"{{url}}","aria-label":"Obejrzyj w\u00a0YouTube"},R:[{G:"div",L:"ytp-impression-link-content",T:{"aria-hidden":"true"},R:[{G:"div",L:"ytp-impression-link-text",ba:"Obejrzyj w"},{G:"div",L:"ytp-impression-link-logo",R:[K2()]}]}]});this.api=a;this.B=b;this.za("target",a.S().F);this.api.Lb(this.element,this,96714);this.P(this.api,"presentingplayerstatechange",this.zg);this.P(this.api,"videoplayerreset",this.u);this.P(this.element,"click",this.onClick);
this.u()},Z2=function(a){g.U.call(this,{G:"div",
L:"ytp-muted-autoplay-endscreen-overlay",R:[{G:"div",L:"ytp-muted-autoplay-end-panel",R:[{G:"div",L:"ytp-muted-autoplay-end-text",ba:"{{text}}"}]}]});this.api=a;this.B=this.ha("ytp-muted-autoplay-end-panel");this.u=new g.yO(this.api);g.C(this,this.u);this.u.fa(this.B,0);this.api.Lb(this.element,this,52428);this.P(this.api,"presentingplayerstatechange",this.C);this.ya("click",this.onClick);this.hide()},$2=function(a){g.U.call(this,{G:"div",
L:"ytp-muted-autoplay-overlay",R:[{G:"div",L:"ytp-muted-autoplay-bottom-buttons",R:[{G:"button",ia:["ytp-muted-autoplay-equalizer","ytp-button"],R:[{G:"div",ia:["ytp-muted-autoplay-equalizer-icon"],R:[{G:"svg",T:{height:"100%",version:"1.1",viewBox:"-4 -4 24 24",width:"100%"},R:[{G:"g",T:{fill:"#fff"},R:[{G:"rect",L:"ytp-equalizer-bar-left",T:{height:"9",width:"4",x:"1",y:"7"}},{G:"rect",L:"ytp-equalizer-bar-middle",T:{height:"14",width:"4",x:"6",y:"2"}},{G:"rect",L:"ytp-equalizer-bar-right",T:{height:"12",
width:"4",x:"11",y:"4"}}]}]}]}]}]}]});this.api=a;this.bottomButtons=this.ha("ytp-muted-autoplay-bottom-buttons");this.ha("ytp-muted-autoplay-equalizer");this.C=new g.E(this.B,4E3,this);a.Lb(this.element,this,39306);this.P(a,"presentingplayerstatechange",this.u);this.P(a,"onMutedAutoplayStarts",this.u);this.ya("click",this.onClick);this.hide()},a3=function(a,b){g.U.call(this,{G:"div",
L:"ytp-pause-overlay"});var c=this;this.api=a;this.N=b;this.animationDelay=1E3;this.B=new g.YN(this);this.I=new g.tM(this,1E3,!1,100);this.D=[];this.u=[];this.F=0;this.K=!1;this.da=0;this.title=new g.U({G:"h2",L:"ytp-related-title",ba:"{{title}}"});this.previous=new g.U({G:"button",ia:["ytp-button","ytp-previous"],T:{"aria-label":"Poka\u017c poprzednio proponowane filmy"},R:[g.SL()]});this.X=new T2(function(m){c.suggestions.element.scrollLeft=-m});
this.Z=this.tileWidth=this.C=0;this.next=new g.U({G:"button",ia:["ytp-button","ytp-next"],T:{"aria-label":"Poka\u017c wi\u0119cej proponowanych film\u00f3w"},R:[g.TL()]});this.expandButton=new g.U({G:"button",ia:["ytp-button","ytp-expand"],ba:"Wi\u0119cej film\u00f3w"});g.C(this,this.B);g.C(this,this.I);var d=a.S();"0"===d.controlsType&&g.J(a.getRootNode(),"ytp-pause-overlay-controls-hidden");this.W=d.B;g.C(this,this.title);this.title.fa(this.element);this.suggestions=new g.U({G:"div",L:"ytp-suggestions"});
g.C(this,this.suggestions);this.suggestions.fa(this.element);g.C(this,this.previous);this.previous.fa(this.element);this.previous.ya("click",this.vL,this);var e=g.tB||g.wg?{style:"will-change: opacity"}:void 0;g.C(this,this.X);for(var f=0;16>f;f++){var h=new g.U({G:"a",L:"ytp-suggestion-link",T:{href:"{{link}}",target:d.F,"aria-label":"{{aria_label}}"},R:[{G:"div",L:"ytp-suggestion-image"},{G:"div",L:"ytp-suggestion-overlay",T:e,R:[{G:"div",L:"ytp-suggestion-title",ba:"{{title}}"},{G:"div",L:"ytp-suggestion-author",
ba:"{{author_and_views}}"},{G:"div",T:{"data-is-live":"{{is_live}}"},L:"ytp-suggestion-duration",ba:"{{duration}}"}]}]});g.C(this,h);h.fa(this.suggestions.element);var l=h.ha("ytp-suggestion-link");g.tg(l,"transitionDelay",f/20+"s");this.B.P(l,"click",g.Ra(this.wL,f));this.D.push(h)}g.C(this,this.next);this.next.fa(this.element);this.next.ya("click",this.uL,this);d=new g.U({G:"button",ia:["ytp-button","ytp-collapse"],T:{"aria-label":"Ukryj p\u00f3\u0142k\u0119 \u201eWi\u0119cej film\u00f3w\u201d"},
R:[{G:"svg",T:{height:"100%",viewBox:"0 0 16 16",width:"100%"},R:[{G:"path",T:{d:"M13 4L12 3 8 7 4 3 3 4 7 8 3 12 4 13 8 9 12 13 13 12 9 8z",fill:"#fff"}}]}]});g.C(this,d);d.fa(this.element);d.ya("click",this.RN,this);g.C(this,this.expandButton);this.expandButton.fa(this.element);this.expandButton.ya("click",this.SN,this);this.B.P(this.api,"appresize",this.Ra);this.B.P(this.api,"fullscreentoggled",this.Ik);this.B.P(this.api,"presentingplayerstatechange",this.Sb);this.B.P(this.api,"videodatachange",
this.Pa);this.Ra(this.api.Ja().getPlayerSize());this.Pa()},b3=function(a){var b=a.N.xe()?32:16;
b=a.Z/2+b;a.next.element.style.bottom=b+"px";a.previous.element.style.bottom=b+"px";b=a.C;var c=a.F-a.u.length*(a.tileWidth+8);g.K(a.element,"ytp-scroll-min",0<=b);g.K(a.element,"ytp-scroll-max",b<=c)},bGa=function(a){for(var b=0;b<a.u.length;b++){var c=a.u[b].Ma(),d=a.D[b],e=c.shortViewCount?c.author+" \u2022 "+c.shortViewCount:c.author;
d.element.style.display="";g.pBa.test(c.title)&&(d.ha("ytp-suggestion-title").dir="rtl");g.pBa.test(e)&&(d.ha("ytp-suggestion-author").dir="rtl");var f=c.isLivePlayback?"Na \u017cywo":c.lengthSeconds?g.DM(c.lengthSeconds):"";var h=c.El();g.mD(a.api.S())&&(h=g.Nd(h,g.eP("emb_rel_pause")));d.update({author_and_views:e,duration:f,link:h,title:c.title,aria_label:c.qq||null,is_live:c.isLivePlayback});d=d.ha("ytp-suggestion-image");c=c.ue();d.style.backgroundImage=c?"url("+c+")":""}for(;b<a.D.length;b++)a.D[b].element.style.display=
"none";b3(a)},c3=function(a){var b=a.S();
g.U.call(this,{G:"a",ia:["ytp-watermark","yt-uix-sessionlink"],T:{target:b.F,href:"{{url}}","aria-label":g.sK("Obejrzyj na $WEBSITE",{WEBSITE:g.KD(b)}),"data-sessionlink":"feature=player-watermark"},R:[K2()]});this.api=a;this.u=null;this.B=!1;this.state=a.Va();a.Lb(this.element,this,76758);this.P(a,"videodatachange",this.WA);this.P(a,"videodatachange",this.Pa);this.P(a,"presentingplayerstatechange",this.AL);this.P(a,"appresize",this.Ra);b=this.state;this.state!==b&&(this.state=b);this.WA();this.Pa();
this.Ra(a.Ja().getPlayerSize())},d3=function(a){g.hO.call(this,a);
this.J=a;this.B=new g.YN(this);g.C(this,this.B);this.load()};g.k=L2.prototype;g.k.bR=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.Ao.set(this.eD(c),[new BFa(a)])};
g.k.UC=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];b=this.eD(b);return this.Ao.has(b)?this.Ao.get(b):void 0};
g.k.GJ=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return(b=this.UC(b))&&b.length?b[0]:void 0};
g.k.clear=function(){this.Ao.clear()};
g.k.eD=function(a){for(var b=[],c=0;c<arguments.length;++c)b[c-0]=arguments[c];return b?b.join(","):"key"};g.u(M2,L2);M2.prototype.C=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=0;var e=this.GJ(c);e&&(d=e.eC);this.bR(d+a,c)};g.k=DFa.prototype;g.k.mH=function(){var a=this.B.values();a=[].concat(g.ma(a)).filter(function(b){return b.Ao.size});
a.length&&this.I.flush(a);FFa(a);this.C=0;this.u.enabled&&this.u.stop()};
g.k.WI=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.B.has(a)||this.B.set(a,new M2(a,c))};
g.k.cL=function(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];this.dL.apply(this,[a,1].concat(g.ma(c)))};
g.k.dL=function(a,b,c){for(var d=[],e=2;e<arguments.length;++e)d[e-2]=arguments[e];(e=EFa(this,a))&&e instanceof M2&&(e.C(b,d),this.u.enabled||this.u.start(),this.C++,this.C>=this.D&&this.mH())};
g.k.QG=function(a,b,c){for(var d=2;d<arguments.length;++d);EFa(this,a)};g.Ta(IFa,g.Ef);g.Ta(JFa,g.Ef);var HFa=[1];g.Ta(NFa,g.Ef);g.Ta(PFa,g.Ef);g.Ta(QFa,g.Ef);g.Ta(RFa,g.Ef);g.Ta(O2,g.Ef);g.Ta(Q2,g.Ef);g.Ta(S2,g.Ef);var MFa=[3,6,4],OFa=[[1,2]],SFa=[1],P2=[[1,2,3]],R2=[[1,2,3]];CFa.prototype.flush=function(a){a=void 0===a?[]:a;if(g.Wo("enable_client_streamz_web")){a=g.q(a);for(var b=a.next();!b.done;b=a.next()){b=b.value;var c=new NFa;c=g.Mf(c,1,b.D);for(var d=b,e=[],f=0;f<d.u.length;f++)e.push(d.u[f].yJ);c=g.Mf(c,3,e||[]);d=[];e=[];f=g.q(b.Ao.keys());for(var h=f.next();!h.done;h=f.next())e.push(h.value.split(","));for(f=0;f<e.length;f++){h=e[f];var l=b.B;for(var m=b.UC(h)||[],n=[],p=0;p<m.length;p++){var r=m[p];r=r&&r.eC;var t=new S2;switch(l){case 3:J2(t,1,R2[0],Number(r));
break;case 2:J2(t,2,R2[0],Number(r))}n.push(t)}l=n;for(m=0;m<l.length;m++){p=l[m];n=new O2;n.u||(n.u={});r=p?g.Rf(p):p;n.u[2]=p;n=g.Mf(n,2,r);p=h;r=[];t=b;for(var w=[],x=0;x<t.u.length;x++)w.push(t.u[x].zJ);t=w;for(w=0;w<t.length;w++){x=t[w];var y=p[w],F=new Q2;switch(x){case 3:J2(F,1,P2[0],String(y));break;case 2:J2(F,2,P2[0],Number(y));break;case 1:J2(F,3,P2[0],"true"==y)}r.push(F)}AFa(n,1,r);d.push(n)}}AFa(c,4,d);d=b=new g.xf;e=g.Kf(c,1);null!=e&&F2(d,1,e);e=g.Kf(c,5);null!=e&&yFa(d,5,e);e=I2(c,
PFa,2);null!=e&&G2(d,2,e,VFa);e=g.Kf(c,3);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)F2(d,3,e[f]);e=g.Kf(c,6);if(0<e.length&&null!=e)for(f=0;f<e.length;f++)yFa(d,6,e[f]);e=g.Qf(c,O2,4);0<e.length&&H2(d,4,e,YFa);b=g.yf(b);b={serializedIncrementBatch:g.tf(b)};g.Or("streamzIncremented",b)}}};var N2;g.u(T2,g.B);T2.prototype.start=function(a,b,c){this.u=a;this.B=b;this.duration=c;this.startTime=(0,g.M)();this.next()};
T2.prototype.next=function(){var a=(0,g.M)()-this.startTime;var b=this.C;a=zFa(b,a/this.duration);if(0==a)b=b.F;else if(1==a)b=b.N;else{var c=g.ge(b.F,b.I,a),d=g.ge(b.I,b.K,a);b=g.ge(b.K,b.N,a);c=g.ge(c,d,a);d=g.ge(d,b,a);b=g.ge(c,d,a)}b=g.ee(b,0,1);this.callback((this.B-this.u)*b+this.u);1>b&&this.delay.start()};g.u(U2,g.U);g.k=U2.prototype;g.k.hide=function(){this.K=!0;g.U.prototype.hide.call(this)};
g.k.show=function(){this.K=!1;g.U.prototype.show.call(this)};
g.k.isHidden=function(){return this.K};
g.k.xL=function(){this.scrollTo(this.C-this.F)};
g.k.yL=function(){this.scrollTo(this.C+this.F)};
g.k.zL=function(a,b){var c=this.u[a],d=c.Bd;g.AO(b,this.api,this.W,d||void 0)&&this.api.Ji(c.Ma().videoId,d,c.getPlaylistId())};
g.k.resize=function(a,b){var c=this.api.S(),d=16/9,e=650<=a.width,f=480>a.width||290>a.height,h=Math.min(this.u.length,this.D.length);if(150>=Math.min(a.width,a.height)||0===h||!c.ob)this.hide();else{var l;if(e){var m=l=28;this.B=16}else this.B=m=l=8;if(f){var n=6;e=14;var p=12;f=24;c=12}else n=8,e=18,p=16,f=36,c=16;l=a.width-(48+l+m);m=Math.ceil(l/150);m=Math.min(3,m);m=l/m-this.B;var r=Math.floor(m/d);b&&r+100>b&&50<m&&(r=Math.max(b,50/d),m=Math.ceil(l/(d*(r-100)+this.B)),m=l/m-this.B,r=Math.floor(m/
d));50>m||g.TN(this.api)?this.hide():this.show();for(d=0;d<h;d++){var t=this.D[d],w=t.ha("ytp-suggestion-image");w.style.width=m+"px";w.style.height=r+"px";t.ha("ytp-suggestion-title").style.width=m+"px";t.ha("ytp-suggestion-author").style.width=m+"px";t=t.ha("ytp-suggestion-duration");t.style.display=t&&100>m?"none":""}h=e+n+p+4;this.I=h+c+(r-f)/2;this.suggestions.element.style.height=r+h+"px";this.tileWidth=m;this.F=l;this.C=0;this.suggestions.element.scrollLeft=-0;V2(this)}};
g.k.Pa=function(){var a=this,b=this.api.getVideoData(),c=this.api.S();this.W=b.F?!1:c.B;if(b.suggestions){var d=g.Ne(b.suggestions,function(e){return e&&!e.list});
this.u=g.Mc(d,function(e){e=g.VQ(c,e);g.C(a,e);return e})}else this.u.length=0;
ZFa(this);b.F?this.title.update({title:g.sK("Wi\u0119cej film\u00f3w z kana\u0142u $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:b.author})}):this.title.update({title:"Wi\u0119cej film\u00f3w w YouTube"})};
g.k.scrollTo=function(a){a=g.ee(a,this.F-this.u.length*(this.tileWidth+this.B),0);this.X.start(this.C,a,this.animationDelay);this.C=a;V2(this)};g.u(W2,g.FO);W2.prototype.show=function(){g.FO.prototype.show.call(this);$Fa(this,this.api.Ja().getPlayerSize())};
W2.prototype.resize=function(a){g.FO.prototype.resize.call(this,a);$Fa(this,a);g.K(this.element,"related-on-error-overlay-visible",!this.u.isHidden())};
W2.prototype.B=function(a){g.FO.prototype.B.call(this,a);var b=this.api.getVideoData();if(g.P(this.api.S().experiments,"embed_parse_error_renderer_killswitch")||!b.lF&&!b.playerErrorMessageRenderer){var c;a.dj&&(b.wm?X2(b.wm)?c=g.AG(b.wm):c=g.GO(g.S(b.wm)):c=g.GO(a.dj),this.Fc(c,"subreason"))}else(a=b.lF)?aGa(this,a):b.playerErrorMessageRenderer&&aGa(this,b.playerErrorMessageRenderer)};g.u(Y2,g.U);Y2.prototype.zg=function(){this.api.Va().isCued()||(this.hide(),this.api.Qa(this.element,!1))};
Y2.prototype.u=function(){var a=this.api.getVideoData(),b=this.api.S(),c=this.api.getVideoData().F,d=b.Bb;b=!b.ob;var e=this.B.Oe();d||e||c||b||!a.videoId?(this.hide(),this.api.Qa(this.element,!1)):(a=g.Nd(this.api.getVideoUrl(),g.eP("emb_imp_woyt")),this.za("url",a),this.show())};
Y2.prototype.onClick=function(a){var b=g.Nd(this.api.getVideoUrl(),g.eP("emb_imp_woyt"));g.BO(b,this.api,a);this.api.vb(this.element)};
Y2.prototype.show=function(){this.api.Va().isCued()&&(g.U.prototype.show.call(this),this.api.wr(this.element)&&this.api.Qa(this.element,!0))};g.u(Z2,g.U);Z2.prototype.C=function(){var a=this.api.Va(),b=this.api.getVideoData();g.P(this.api.S().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&(g.T(a,2)&&!this.bb?(this.show(),this.u.show(),a=this.api.getVideoData(),this.za("text",a.oB),g.K(this.element,"ytp-muted-autoplay-show-end-panel",!0),this.api.Qa(this.element,this.bb),this.api.va("onMutedAutoplayEnds")):this.hide())};
Z2.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.xI(a);this.api.loadVideoById(a.videoId,b);this.api.vb(this.element);this.hide()};g.u($2,g.U);$2.prototype.u=function(){var a=this.api.Va(),b=this.api.getVideoData();g.P(this.api.S().experiments,"embeds_enable_muted_autoplay")&&b.mutedAutoplay&&!g.T(a,2)?this.bb||(g.U.prototype.show.call(this),this.C.start(),this.api.Qa(this.element,this.bb)):this.hide()};
$2.prototype.B=function(){g.K(this.element,"ytp-muted-autoplay-hide-watermark",!0)};
$2.prototype.onClick=function(){var a=this.api.getVideoData(),b=this.api.getCurrentTime();a.mutedAutoplay=!1;a.endSeconds=NaN;g.xI(a);this.api.loadVideoById(a.videoId,b);this.api.vb(this.element)};g.u(a3,g.U);g.k=a3.prototype;g.k.hide=function(){g.xn(this.api.getRootNode(),"ytp-expand-pause-overlay");g.U.prototype.hide.call(this)};
g.k.RN=function(){this.K=!0;g.xn(this.api.getRootNode(),"ytp-expand-pause-overlay");this.expandButton.focus()};
g.k.SN=function(){this.K=!1;g.J(this.api.getRootNode(),"ytp-expand-pause-overlay")};
g.k.uL=function(){this.scrollTo(this.C-this.F)};
g.k.vL=function(){this.scrollTo(this.C+this.F)};
g.k.wL=function(a,b){if(1E3>(0,g.M)()-this.da)g.np(b),document.activeElement.blur();else{var c=this.u[a],d=c.Bd;g.AO(b,this.api,this.W,d||void 0)&&this.api.Ji(c.Ma().videoId,d,c.getPlaylistId())}};
g.k.Ik=function(){this.Ra(this.api.Ja().getPlayerSize())};
g.k.Sb=function(a){if(!(g.T(a.state,1)||g.T(a.state,16)||g.T(a.state,32))){var b=!g.P(this.api.S().experiments,"embeds_disable_pauseoverlay_on_autoplay_blocked_killswitch")&&g.T(a.state,2048);!g.T(a.state,4)||g.T(a.state,2)||b?this.I.hide():this.u.length&&(this.K||(g.J(this.api.getRootNode(),"ytp-expand-pause-overlay"),b3(this)),this.I.show(),this.da=(0,g.M)())}};
g.k.Ra=function(a){var b=16/9,c=this.N.xe();a=a.width-(c?112:58);c=Math.ceil(a/(c?320:192));c=(a-8*c)/c;b=Math.floor(c/b);for(var d=0;d<this.D.length;d++){var e=this.D[d].ha("ytp-suggestion-image");e.style.width=c+"px";e.style.height=b+"px"}this.suggestions.element.style.height=b+"px";this.tileWidth=c;this.Z=b;this.F=a;this.C=0;this.suggestions.element.scrollLeft=-0;b3(this)};
g.k.Pa=function(){var a=this,b=this.api.S(),c=this.api.getVideoData();this.W=c.F?!1:b.B;if(c.suggestions){var d=g.Ne(c.suggestions,function(e){return e&&!e.list});
this.u=g.Mc(d,function(e){e=g.VQ(b,e);g.C(a,e);return e})}else this.u.length=0;
bGa(this);c.F?this.title.update({title:g.sK("Wi\u0119cej film\u00f3w z kana\u0142u $DNI_RELATED_CHANNEL",{DNI_RELATED_CHANNEL:c.author})}):this.title.update({title:"Wi\u0119cej film\u00f3w"})};
g.k.scrollTo=function(a){a=g.ee(a,this.F-this.u.length*(this.tileWidth+8),0);this.X.start(this.C,a,this.animationDelay);this.C=a;b3(this)};g.u(c3,g.U);g.k=c3.prototype;g.k.WA=function(){var a=this.api.getVideoData(),b=this.api.getVideoData(1).F,c=this.api.S();a=(a.mutedAutoplay||c.Bb&&!g.T(this.state,2))&&!(b&&c.pfpChazalUi);g.OL(this,a);this.api.Qa(this.element,a)};
g.k.AL=function(a){a=a.state;this.state!==a&&(this.state=a);this.WA()};
g.k.Pa=function(){if(this.api.getVideoData().videoId){var a=this.api.getVideoUrl(!0,!1,!1,!0);this.za("url",a);this.u||(this.u=this.ya("click",this.onClick))}else this.u&&(this.za("url",null),this.Kb(this.u),this.u=null)};
g.k.onClick=function(a){var b=this.api.getVideoUrl(!g.EM(a),!1,!0,!0);g.BO(b,this.api,a);this.api.vb(this.element)};
g.k.Ra=function(a){if((a=480>a.width)&&!this.B||!a&&this.B){var b=new g.U(K2()),c=this.ha("ytp-watermark");g.K(c,"ytp-watermark-small",a);g.Ie(c);b.fa(c);this.B=a}};g.u(d3,g.hO);g.k=d3.prototype;g.k.Ai=function(){return!1};
g.k.create=function(){var a=this.J.S(),b=g.MN(this.J);a.ob&&(this.F=new a3(this.J,b),g.C(this,this.F),g.WN(this.J,this.F.element,4));g.P(a.experiments,"embeds_enable_muted_autoplay")&&(this.u=new $2(this.J),g.C(this,this.u),g.WN(this.J,this.u.element,4),this.D=new Z2(this.J),g.C(this,this.D),g.WN(this.J,this.D.element,4));if(a.Bb||this.u)this.watermark=new c3(this.J),g.C(this,this.watermark),g.WN(this.J,this.watermark.element,7);g.P(a.experiments,"embeds_impression_link")&&(this.C=new Y2(this.J,b),
g.C(this,this.C),g.WN(this.J,this.C.element,7));this.B.P(this.J,"appresize",this.Ra);this.B.P(this.J,"presentingplayerstatechange",this.zg);this.B.P(this.J,"videodatachange",this.PR);this.B.P(this.J,"onMutedAutoplayStarts",this.JO);this.tb(this.J.Va());this.player.Yc("embed");g.P(a.experiments,"enable_cookie_reissue_iframe")&&a.Gf&&!g.Cq("__Secure-3PAPISID")&&(a=a.deviceParams.c,a=void 0===a?"WEB":a,(new GFa).u.cL("/client_streamz/youtube/web/debug/third_party_apisid_cookie_reissue_iframe",a),a=g.Ge("IFRAME"),
a.src="/signin?go=true",a.style.display="none",document.body.appendChild(a))};
g.k.Ra=function(){var a=this.J.Ja().getPlayerSize();this.Rd&&this.Rd.resize(a)};
g.k.zg=function(a){this.tb(a.state)};
g.k.tb=function(a){g.T(a,128)?(this.Rd||(this.Rd=new W2(this.J),g.C(this,this.Rd),g.WN(this.J,this.Rd.element,4)),this.Rd.B(a.getData()),this.Rd.show(),g.J(this.J.getRootNode(),"ytp-embed-error")):this.Rd&&(this.Rd.dispose(),this.Rd=null,g.xn(this.J.getRootNode(),"ytp-embed-error"))};
g.k.JO=function(){this.J.getVideoData().mutedAutoplay&&this.u&&this.watermark&&this.watermark.fa(this.u.bottomButtons,0)};
g.k.PR=function(){var a=this.J.getVideoData();this.watermark&&this.u&&!a.mutedAutoplay&&g.Pe(this.u.element,this.watermark.element)&&g.WN(this.J,this.watermark.element,7)};g.nO.embed=d3;})(_yt_player);
