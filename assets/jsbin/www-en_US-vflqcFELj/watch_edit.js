(function(g){var window=this;var y4=function(){this.B=g.E("watch-headline-title");this.X=g.F("watch-title",this.B);this.A=g.E("watch-headline-title-form");this.ga=g.F("yt-alert-content",this.A);this.U=g.E("watch-headline-title-reset");this.C=g.E("watch-description-text");this.S=g.E("action-panel-details");this.j=g.E("watch-video-info-form");this.W=g.F("yt-alert-content",this.j);this.$=g.E("watch-video-info-submit");this.yb=g.E("watch-video-info-reset");this.privacyIcon=g.E("watch-privacy-icon");this.K=!1;this.L=g.F("eow-description-textarea",
this.j);this.G=g.F("eow-privacy-select",this.j);this.D=this.F=null;this.l=[];this.l.push(g.L(this.B,"click",(0,g.q)(this.QG,this)));this.l.push(g.L(this.A,"submit",(0,g.q)(this.XG,this)));this.l.push(g.L(this.U,"click",(0,g.q)(this.lr,this)));this.l.push(g.L(this.C,"click",(0,g.q)(function(){this.K||z4(this)},this)));this.l.push(g.L(this.$,"click",function(a){a.stopPropagation()}));this.l.push(g.L(this.j,"submit",(0,g.q)(this.ZG,this)));this.l.push(g.L(this.yb,"click",(0,g.q)(function(a){a.stopPropagation();
A4(this,!0)},this)));this.privacyIcon&&this.l.push(g.L(this.privacyIcon,"click",(0,g.q)(function(a){a.stopPropagation();z4(this)},this)))};var A4=function(a,b){g.N(a.C);g.R(a.j);g.J(a.C,"watch-editable");g.K(a.S,"watch-inline-edit-active");b&&(a.F&&(a.L.value=a.F),a.D&&(g.Do(a.G,a.D),g.Lp.getInstance().Ec(a.G)));a.K=!1};
var z4=function(a){g.R(a.C);g.N(a.j);g.K(a.C,"watch-editable");g.K(a.j,"yt-uix-form-error");g.J(a.S,"watch-inline-edit-active");a.F=a.L.value;a.D=a.G.value;a.j.scrollIntoView();a.L.select();a.K=!0};var B4=function(a){for(var b in a){var c=g.ek(a[b]);(0,g.A)(c.childNodes,function(a){if(a.id){var b=g.E(a.id);b&&(b.innerHTML=a.innerHTML,b.className=a.className,b.title=a.title)}})}};var C4;g.h=y4.prototype;g.h.dispose=function(){g.M(this.l);this.l=[]};
g.h.lr=function(){g.R(this.A);g.N(this.B);g.J(this.X,"watch-editable")};g.h.QG=function(){g.R(this.B);g.N(this.A);g.K(this.X,"watch-editable");g.K(this.A,"yt-uix-form-error");var a=g.F("yt-uix-form-input-text",this.A);a.value=g.xl(this.B);a.select()};g.h.XG=function(a){a.preventDefault();g.Io(this.A,{context:this,T:this.YG})};g.h.YG=function(a,b){0<b.errors.length?(g.bi(this.ga,b.errors[0]),g.J(this.A,"yt-uix-form-error")):(this.lr(),B4(b.html))};
g.h.ZG=function(a){a.preventDefault();g.Io(this.j,{context:this,T:this.$G})};g.h.$G=function(a,b){0<b.errors.length?(g.bi(this.W,b.errors[0]),g.J(this.j,"yt-uix-form-error")):(A4(this),B4(b.html))};g.ub(g.Ql({name:"www/watch_edit",deps:["www/watch"],page:"watch",init:function(){!C4&&g.x("WATCH_EDIT_ENABLED")&&(C4=new y4)},dispose:function(){C4&&(C4.dispose(),C4=null)}}));})(_yt_www);