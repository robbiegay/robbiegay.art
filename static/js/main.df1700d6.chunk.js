(this["webpackJsonprobbiegay.art"]=this["webpackJsonprobbiegay.art"]||[]).push([[0],{34:function(e,t,l){e.exports=l(47)},39:function(e,t,l){},40:function(e,t,l){},47:function(e,t,l){"use strict";l.r(t);var n=l(0),a=l.n(n),r=l(20),o=l.n(r),c=(l(39),l(11)),i=(l(40),l(1)),g=l(2),h=l(5),s=l(3),u=l(6),m=l(28),f=l(10),E=function(e){function t(e){var l;return Object(i.a)(this,t),(l=Object(h.a)(this,Object(s.a)(t).call(this,e))).blogButton=null,l.portfolioButton=null,l.musicButton=null,l.centerX=null,l.centerY=null,l.yPerc=null,l}return Object(u.a)(t,e),Object(g.a)(t,[{key:"animate",value:function(e,t,l){var n=this,a=[],r=f.a.lab(f.a.maxValues("lab")),o=20*(l.size.x/l.size.y);this.form.font(75,"normal","normal",1,"Roboto");for(var c=function(e){var t=e.$divide(l.size),n=.65-.3*l.pointer.$divide(l.size).y,a=r.$multiply(f.d.make(4,1).to(n,t.x-.5,t.y-.5));return f.a.LABtoRGB(a).toString("rgb")},i=0,g=(a=f.b.gridCells(l.innerBound,o,20)).length;i<g;i++){a[i][1].ceil();var h=a[i].interpolate(f.c.cycle((e+60*i)%1e3/1e3));this.form.fillOnly(c(h)).rect(a[i])}this.centerX=l.size.x/2,this.centerY=l.size.y/2,this.yPerc=l.size.y/100;var s=f.e.fromCenter([this.centerX,this.centerY-15*this.yPerc],400);this.form.fill("rgba(0,0,0,0)").font(75).stroke("rgba(0,0,0,0)",3).rect(s),this.form.fillOnly("#FFF").alignText("center").paragraphBox(s,"robbiegay",1,"middle",!1);var u=f.e.fromCenter([this.centerX,this.centerY+10*this.yPerc],300);this.form.fill("rgba(0,0,0,0)").font(40).stroke("rgba(0,0,0,0)",3).rect(u),this.form.fillOnly("#FFF").alignText("center").paragraphBox(u,"dev blog",1,"middle",!1),this.blogButton.render((function(e){return n.form.fillOnly("rgba(0,0,0,0.05)").polygon(e)}));var m=f.e.fromCenter([this.centerX,this.centerY+20*this.yPerc],300);this.form.fill("rgba(0,0,0,0)").font(40).stroke("rgba(0,0,0,0)",3).rect(m),this.form.fillOnly("#FFF").alignText("center").paragraphBox(m,"portfolio",1,"middle",!1),this.portfolioButton.render((function(e){return n.form.fillOnly("rgba(0,0,0,0.05)").polygon(e)}));var E=f.e.fromCenter([this.centerX,this.centerY+30*this.yPerc],300);this.form.fill("rgba(0,0,0,0)").font(40).stroke("rgba(0,0,0,0)",3).rect(E),this.form.fillOnly("#FFF").alignText("center").paragraphBox(E,"music",1,"middle",!1),this.musicButton.render((function(e){return n.form.fillOnly("rgba(0,0,0,0.05)").polygon(e)}))}},{key:"action",value:function(e,t,l,n){f.f.track([this.blogButton,this.portfolioButton,this.musicButton],e,new f.d(t,l),n)}},{key:"start",value:function(e,t){var l=this,n=function(e){return e.group.scale(1.1,e.group.centroid())},a=function(e){return e.group.scale(100/110,e.group.centroid())};this.centerX=t.size.x/2,this.centerY=t.size.y/2,this.yPerc=t.size.y/100,this.blogButton=f.g.fromPolygon([[this.centerX-100,this.centerY+6*this.yPerc],[this.centerX-100,this.centerY+14*this.yPerc],[this.centerX+100,this.centerY+14*this.yPerc],[this.centerX+100,this.centerY+6*this.yPerc]]),this.blogButton.onClick((function(e){l.props.changePage("blog")})),this.blogButton.onHover(n,a),this.portfolioButton=f.g.fromPolygon([[this.centerX-100,this.centerY+16*this.yPerc],[this.centerX-100,this.centerY+24*this.yPerc],[this.centerX+100,this.centerY+24*this.yPerc],[this.centerX+100,this.centerY+16*this.yPerc]]),this.portfolioButton.onClick((function(e){l.props.changePage("portfolio")})),this.portfolioButton.onHover(n,a),this.musicButton=f.g.fromPolygon([[this.centerX-100,this.centerY+26*this.yPerc],[this.centerX-100,this.centerY+34*this.yPerc],[this.centerX+100,this.centerY+34*this.yPerc],[this.centerX+100,this.centerY+26*this.yPerc]]),this.musicButton.onClick((function(e){l.props.changePage("music")})),this.musicButton.onHover(n,a),t.bindMouse().bindTouch().play()}}]),t}(m.a),P=l(18),B=l(19);var y=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(P.a,{expand:"md",sticky:"top"},a.a.createElement(P.a.Brand,{href:"#home"},"robbiegay"),a.a.createElement(P.a.Toggle,{"aria-controls":"basic-navbar-nav"}),a.a.createElement(P.a.Collapse,{id:"basic-navbar-nav"},a.a.createElement(B.a,{className:"mr-auto"},a.a.createElement(B.a.Link,{href:"#blog"},"blog"),a.a.createElement(B.a.Link,{href:"#portfolio"},"portfolio"),a.a.createElement(B.a.Link,{target:"_blank",href:"https://soundcloud.com/robbiegay"},"music")))))};var p=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"),a.a.createElement("h1",null,"Blog Page"))};var b=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null),a.a.createElement("h1",null,"Portfolio Page"))};var d=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(y,null),a.a.createElement("h1",null,"Music Page"))};var v=function(){var e=Object(n.useState)("home"),t=Object(c.a)(e,2),l=t[0],r=t[1];switch(l){case"home":return a.a.createElement("div",{className:"App"},a.a.createElement(E,{style:{height:"100vh",width:"100vw"},changePage:function(e){r(e)}}));case"blog":return a.a.createElement("div",{className:"App"},a.a.createElement(p,null));case"portfolio":return a.a.createElement("div",{className:"App"},a.a.createElement(b,null));case"music":return a.a.createElement("div",{className:"App"},a.a.createElement(d,null));default:console.log("-----------------------------------"),console.log("ERROR: Navigation handler triggered a default case."),console.log("Where were you trying to go?"),console.log("Redirecting -> HOME"),console.log("-----------------------------------"),r("home")}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.df1700d6.chunk.js.map