(this["webpackJsonpreact-project-sample"]=this["webpackJsonpreact-project-sample"]||[]).push([[0],{20:function(t,e,i){t.exports=i(30)},25:function(t,e,i){},30:function(t,e,i){"use strict";i.r(e);var a=i(0),s=i.n(a),n=i(4),c=i.n(n),r=(i(25),i(7)),o=i(3),l=i(2),u=i(1),h=i(6),f=i.n(h),k=i(12),b=i(13),m=function(){function t(e,i,a){var s=this;Object(k.a)(this,t),this.checkIsMate=function(){for(var t=s.blackKing,e=Object(u.a)(s.positions[t],2),i=e[0],a=e[1],n=s.isProtected[t],c=Object(r.a)(s.state),o=[],l=i-1;l<=i+1;l++)if(console.log("_board[i]",l),c[l])for(var h=a-1;h<=a+1;h++)(c[l][h]||0===c[l][h])&&o.push(c[l][h]);return console.log(o),o.includes(0)?"This isn't mate":o.includes(0)||!1!==n?"White wins.":"This is stalemate. Nobody wins"},this.state=JSON.parse(JSON.stringify(e)),this.positions=Object(l.a)({},i),this.isProtected=Object(l.a)({},a),this.attackZone=1,this.king=10,this.queen=20,this.horse=30,this.bishop=40,this.blackKing=50}return Object(b.a)(t,[{key:"isNotBlocking",value:function(t,e,i){var a=this.state[t][e];return a<10||a===i||(50===a?(this.isProtected=Object(l.a)({},this.isProtected,Object(o.a)({},a,!0)),!0):(this.isProtected=Object(l.a)({},this.isProtected,Object(o.a)({},a,!0)),!1))}},{key:"queenZone",value:function(){var t=this.queen,e=Object(u.a)(this.positions[t],2),i=e[0],a=e[1],s=i+a,n=i-a,c=[t,this.blackKing];t:for(var r=i;r>=0;r--)for(var o=a;o<8;o++)if(r+o===s){if(!this.isNotBlocking(r,o,t))break t;if(c.includes(this.state[r][o]))continue;this.state[r][o]=this.attackZone}t:for(var l=i;l>=0;l--)for(var h=a;h<8;h++)if(h===a){if(!this.isNotBlocking(l,h,t))break t;if(c.includes(this.state[l][h]))continue;this.state[l][h]=this.attackZone}t:for(var f=i;f>=0;f--)for(var k=a;k>=0;k--)if(f-k===n){if(!this.isNotBlocking(f,k,t))break t;if(c.includes(this.state[f][k]))continue;this.state[f][k]=this.attackZone}t:for(var b=i;b<8;b++)for(var m=a;m<8;m++)if(b-m===n){if(!this.isNotBlocking(b,m,t))break t;if(c.includes(this.state[b][m]))continue;this.state[b][m]=this.attackZone}t:for(var v=i;v<8;v++)for(var g=a;g<8;g++)if(g===a){if(!this.isNotBlocking(v,g,t))break t;if(c.includes(this.state[v][g]))continue;this.state[v][g]=this.attackZone}t:for(var d=i;d<8;d++)for(var O=a;O>=0;O--)if(d+O===s){if(!this.isNotBlocking(d,O,t))break t;if(c.includes(this.state[d][O]))continue;this.state[d][O]=this.attackZone}for(var j=a-1;j>=0&&this.isNotBlocking(i,j,t);j--)50!==this.state[i][j]&&(this.state[i][j]=this.attackZone);for(var N=a+1;N<8&&this.isNotBlocking(i,N,t);N++)50!==this.state[i][N]&&(this.state[i][N]=this.attackZone)}},{key:"elphZone",value:function(){var t=this.bishop,e=Object(u.a)(this.positions[t],2),i=e[0],a=e[1],s=i+a,n=i-a,c=[t,this.blackKing];t:for(var r=i;r>=0;r--)for(var o=a;o<8;o++)if(r+o===s){if(!this.isNotBlocking(r,o,t))break t;if(c.includes(this.state[r][o]))continue;this.state[r][o]=this.attackZone}t:for(var l=i;l>=0;l--)for(var h=a;h>=0;h--)if(l-h===n){if(!this.isNotBlocking(l,h,t))break t;if(c.includes(this.state[l][h]))continue;this.state[l][h]=this.attackZone}t:for(var f=i;f<8;f++)for(var k=a;k<8;k++)if(f-k===n){if(!this.isNotBlocking(f,k,t))break t;if(c.includes(this.state[f][k]))continue;this.state[f][k]=this.attackZone}t:for(var b=i;b<8;b++)for(var m=a;m>=0;m--)if(b+m===s){if(!this.isNotBlocking(b,m,t))break t;if(c.includes(this.state[b][m]))continue;this.state[b][m]=this.attackZone}}},{key:"kingZone",value:function(){for(var t=this.king,e=Object(u.a)(this.positions[t],2),i=e[0],a=e[1],s=[t,this.blackKing],n=i-1;n<=i+1;n++)for(var c=a-1;c<=a+1;c++)!this.state[n]||c<0||c>7||s.includes(this.state[n][c])||this.isNotBlocking(n,c,t)&&(this.state[n][c]=this.attackZone)}},{key:"horseZone",value:function(){for(var t=this.horse,e=Object(u.a)(this.positions[t],2),i=e[0],a=e[1],s=[t,this.blackKing],n=a-1,c=a-2,r=a+1,o=a+2,l=i-2;l<=i+2;l++)this.state[l]&&(l!==i+2&&l!==i-2||(n>=0&&this.isNotBlocking(l,n,t)&&s.includes(this.state[l][a])&&(this.state[l][n]=this.attackZone),r<7&&this.isNotBlocking(l,r,t)&&s.includes(this.state[l][a])&&(this.state[l][r]=this.attackZone)),l!==i-1&&l!==i+1||(c>=0&&this.isNotBlocking(l,c,t)&&s.includes(this.state[l][a])&&(this.state[l][c]=this.attackZone),o<7&&this.isNotBlocking(l,o,t)&&s.includes(this.state[l][a])&&(this.state[l][o]=this.attackZone)))}},{key:"runAll",value:function(){this.queenZone(),this.elphZone(),this.kingZone(),this.horseZone()}}]),t}(),v=i(5),g=v.a.div((function(t){var e=t.activeFigure,i=t.elm;return"\n   animation-name: ".concat(e===i?"scaleIn":"",";\n\tbackground-size: cover;\n\tbackground-position: center;\n   ")})),d=function(t){var e=t.elm,i=t.selectActiveFigure,a=t.activeFigure,n=["chess-figure","chess-figure--".concat(e),"chess-figure--outside"];return s.a.createElement(g,{className:n.join(" "),activeFigure:a,elm:e,onClick:i.bind(void 0,e)})},O=v.a.div((function(t){return"\n\t\n\tbackground-size: cover;\n\tbackground-position: center;\n   "})),j=v.a.li((function(t){var e=t.activeFigure,i=t.figuresProtected,a=t.item;return"\n   background-color:".concat(1===a?"rgba(255, 0, 0, 0.200)":i[a]&&50===a?"rgba(255, 0, 0, 0.500)":i[a]?"rgba(0, 184, 0, 0.350)":"",";\n   &:hover {\n     background-color: ").concat(e?"rgba(255, 208, 0, 0.250)":"",";\n   }\n   \n   ")})),N=function(t){var e=t.state,i=t.setFigures,a=t.figuresProtected,n=t.activeFigure;return s.a.createElement("div",{className:"chess-board"},e.map((function(t,e){return s.a.createElement("ul",{key:f()(),className:"chess-board__row"},t.map((function(t,c){return s.a.createElement(j,{figuresProtected:a,item:t,activeFigure:n,key:f()(),onClick:function(a){return function(t,e,a,s){i(e,a,s,{x:t.clientX,y:t.clientY})}(a,e,c,t)},className:"chess-board__cell"},t>9?s.a.createElement(O,{className:"\n\t\t\t\t\t\t\t\t\t\tchess-figure \n\t\t\t\t\t\t\t\t\t\tchess-board__cell-figure  \n\t\t\t\t\t\t\t\t\t\tchess-figure--".concat(t)}):null)})))})))},p=i(17),E={enter:500,exit:500},Z=function(t){var e=t.show,i=t.closeModal,a=t.mateStatus;return c.a.createPortal(s.a.createElement(p.a,{mountOnEnter:!0,unmountOnExit:!0,in:e,timeout:E},(function(t){var e=["modal","entering"===t?"modal--open":"exiting"===t?"modal--closed":null];return console.log(t),s.a.createElement("div",{className:e.join(" ")},s.a.createElement("h1",{className:"mate-checker__status"},a),s.a.createElement("button",{className:"btn",onClick:i},"Reset positions"))})),document.getElementById("root"))},y=i(18),B=function(t){var e=t.className,i=t.children,a=Object(y.a)(t,["className","children"]);return s.a.createElement("button",Object.assign({},a,{className:e?"ns-btn ".concat(e):"ns-btn"}),i)},_=function(){var t=Array(8).fill(Array(8).fill(0)),e={10:null,20:null,30:null,40:null,50:null},i={10:!1,20:!1,30:!1,40:!1,50:!1},n=Object(a.useState)(t),c=Object(u.a)(n,2),h=c[0],k=c[1],b=Object(a.useState)(!1),v=Object(u.a)(b,2),g=v[0],O=v[1],j=Object(a.useState)(""),p=Object(u.a)(j,2),E=p[0],y=p[1],_=Object(a.useState)(i),P=Object(u.a)(_,2),S=P[0],F=P[1],w=Object(a.useState)(e),A=Object(u.a)(w,2),x=A[0],J=A[1],K=Object(a.useState)(""),M=Object(u.a)(K,2),I=M[0],q=M[1],C=function(t){y(t===E?"":t)};return s.a.createElement("div",{className:"mate-checker"},s.a.createElement("div",{className:"mate-checker__main"},s.a.createElement("div",{className:"mate-checker__container"},s.a.createElement("div",{className:"mate-checker__figures"},Object.keys(x).map((function(t){return x[t]?s.a.createElement("div",{key:f()()}):s.a.createElement(d,{activeFigure:E,selectActiveFigure:C,figuresPositions:x,key:f()(),elm:+t})}))),s.a.createElement(N,{state:h,activeFigure:E,setFigures:function(t,e,i){if(!g){var a=JSON.stringify(h),s=JSON.parse(a);if(!E){if(!i)return;return J((function(t){return Object(l.a)({},t,Object(o.a)({},i,null))})),s[t][e]=0,k(s)}s[t][e]>9?alert("This field has already occupied"):(J((function(i){return Object(l.a)({},i,Object(o.a)({},E,[t,e]))})),s[t][e]=E,k(s),y(""))}},figuresProtected:S}),s.a.createElement("div",null,s.a.createElement("div",{className:"mate-checker__control-btns"},s.a.createElement(B,{onClick:function(){if(!g){var t=new m(h,x,S);Object.values(x).map((function(t){return t})).includes(null)?alert("Please set all figures"):!function(t,e){var i=Object(r.a)(t),a=i[0],s=i[1],n=Object(r.a)(e),c=n[0],o=n[1];return!(Math.abs(a-c)<=1&&Math.abs(s-o)<=1)}(x[10],x[50])?alert("You can't set two kings next to each other"):(t.runAll(),k(t.state),F((function(e){return Object(l.a)({},e,{},t.isProtected)})),q(t.checkIsMate()),O(!0))}}},"Submit")),s.a.createElement(Z,{show:g,mateStatus:I,closeModal:function(){k(t),J(e),F(i),O(!1)}})))))};var P=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(_,null))};c.a.render(s.a.createElement(P,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.9c986212.chunk.js.map