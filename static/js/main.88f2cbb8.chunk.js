(this["webpackJsonpbattleships-app"]=this["webpackJsonpbattleships-app"]||[]).push([[0],{18:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(2),i=n.n(s),r=n(12),c=n.n(r),o=n(7),l=n(5);n(18);function j(e,t,n,a){this.boat=[],this.position=t,this.direction=n,this.name=a;for(var s=0;s<e;s++)this.boat.push([s])}var b=n(3),u=n(4),d=function(e){var t=e.board,n=e.updateBoard,i=e.player,r=e.setBoard,c=e.VrsComputer,l=e.setComputerTurn,j=e.computerTurn,d=function(e){t.forEach((function(t){l(!1),t.key===e&&(t.containsShip?t.hit=!0:t.missed=!0)})),n(Object(o.a)(t),r)};function h(e,n){e=Math.ceil(e),n=Math.floor(n);var a=Math.floor(Math.random()*(n-e)+e);!0===t[a].hit||!0===t[a].missed?h(0,100):d(a)}return Object(s.useEffect)((function(){!0===j&&!0===c&&"Player 2"===i&&h(0,100)}),[{board:t}]),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"Player 1"===i?"player":"player2",children:[i,"'s Turn"]}),Object(a.jsx)("div",{className:"board",children:t.map((function(e){return!0===e.missed?Object(a.jsx)("div",{className:e.missed?"squareMiss":"square",children:Object(a.jsx)(b.a,{icon:u.d})},e.key):!0===e.hit?Object(a.jsx)("div",{className:e.missed?"squareMiss":"square",children:Object(a.jsx)(b.a,{icon:u.a})},e.key):Object(a.jsx)("div",{className:e.missed?"squareMiss":"square",children:Object(a.jsx)(b.a,{onClick:function(){return d(e.key)},icon:u.e})},e.key)}))})]})},h=function(){for(var e=[],t=0;t<100;t++){var n={key:t,containsShip:"",missed:!1,hit:!1};e.push(n)}return e},p=function(){return Object(a.jsx)("h1",{className:"header",children:"BATTLESHIPS"})},O=function(e){var t=e.board,n=e.board2,s=t.filter((function(e){return!0===e.hit})).length/15*100,i=n.filter((function(e){return!0===e.hit})).length/15*100;return Object(a.jsxs)("div",{className:"gameUpdate",children:[Object(a.jsxs)("div",{children:["you have killed ",i.toFixed(0),"% of player 2's sailors"]}),100===s?Object(a.jsx)("div",{className:"winner",children:"Player 2 wins"}):"",100===i?Object(a.jsx)("div",{className:"winner",children:"Player 1 wins"}):"",Object(a.jsx)("div",{}),Object(a.jsxs)("div",{children:[" you have killed ",s.toFixed(0),"% of player 1's sailors"]})]})},f=function(e){var t=e.player,n=e.boat;return Object(a.jsxs)("div",{className:"boatHolder",children:[t.boat.length===n.length?Object(a.jsx)(b.a,{size:"3x",icon:u.c}):Object(a.jsx)(b.a,{size:"3x",icon:u.b}),Object(a.jsxs)("div",{className:"hitHolder",children:[Object(a.jsx)("div",{className:"hits",children:t.boat.map((function(e){return Object(a.jsx)("div",{className:"blueBlock"},e)}))}),Object(a.jsx)("div",{className:"hits",children:n.map((function(e){return Object(a.jsx)("div",{className:"redBlock"},e)}))})]})]})},m=function(e){var t=e.player,n=e.board,s=e.playerTurn,i=n.filter((function(e){return e.containsShip===t[0].name&&!0===e.hit})),r=n.filter((function(e){return e.containsShip===t[1].name&&!0===e.hit})),c=n.filter((function(e){return e.containsShip===t[2].name&&!0===e.hit})),o=n.filter((function(e){return e.containsShip===t[3].name&&!0===e.hit}));return!1===s&&5===t[0].name||!0===s&&1===t[0].name?Object(a.jsxs)("div",{className:"boatupdateBorder",children:[Object(a.jsx)(f,{player:t[0],boat:i}),Object(a.jsx)(f,{player:t[1],boat:r}),Object(a.jsx)(f,{player:t[2],boat:c}),Object(a.jsx)(f,{player:t[3],boat:o})]}):Object(a.jsxs)("div",{className:"boatupdate",children:[Object(a.jsx)(f,{player:t[0],boat:i}),Object(a.jsx)(f,{player:t[1],boat:r}),Object(a.jsx)(f,{player:t[2],boat:c}),Object(a.jsx)(f,{player:t[3],boat:o})]})};var x=function(){var e=Object(s.useState)(h),t=Object(l.a)(e,2),n=t[0],i=t[1],r=Object(s.useState)(h),c=Object(l.a)(r,2),b=c[0],u=c[1],f=Object(s.useState)(!0),x=Object(l.a)(f,2),v=x[0],y=x[1],N=Object(s.useState)(!1),S=Object(l.a)(N,2),T=S[0],g=S[1],k=Object(s.useState)(!1),w=Object(l.a)(k,2),C=w[0],B=w[1],P=Object(s.useState)(!1),E=Object(l.a)(P,2),M=E[0],q=E[1],F=[new j(3,4,!1,1),new j(3,45,!0,2),new j(5,84,!1,3),new j(4,24,!0,4)],H=[new j(3,23,!1,5),new j(3,76,!0,6),new j(5,55,!1,7),new j(4,11,!0,8)],A=function(){y(!1),F.forEach((function(e){if(!0===e.direction)for(var t=e.position;t<e.position+10*e.boat.length;t+=10)n[t].containsShip=e.name,console.log(t);else for(var a=e.position;a<e.position+e.boat.length;a++)n[a].containsShip=e.name;i(Object(o.a)(n))})),H.forEach((function(e){if(!0===e.direction)for(var t=e.position;t<e.position+10*e.boat.length;t+=10)b[t].containsShip=e.name;else for(var n=e.position;n<e.position+e.boat.length;n++)b[n].containsShip=e.name;u(Object(o.a)(b))}))},L=function(e,t){t(e)};return Object(s.useEffect)((function(){setTimeout((function(){g(!T),q(!0)}),1500)}),[b,n]),Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(p,{}),Object(a.jsxs)("div",{className:"boats1",children:[Object(a.jsx)(m,{board:b,player:H,playerTurn:T}),Object(a.jsx)("div",{className:"boardContainer",children:T?Object(a.jsx)(d,{board:n,player:"Player 2",updateBoard:L,setBoard:i,VrsComputer:C,computerTurn:M,setComputerTurn:q}):Object(a.jsx)(d,{board:b,player:"Player 1",updateBoard:L,setBoard:u,VrsComputer:C,computerTurn:M,setComputerTurn:q})}),Object(a.jsx)(m,{board:n,player:F,playerTurn:T})]}),Object(a.jsx)(O,{board:n,board2:b,Player1:F,Player2:H}),v?Object(a.jsxs)("div",{className:"buttonHolder",children:[Object(a.jsx)("button",{onClick:function(){B(!0),q(!0),A()},children:"'BATTLE THE COMPUTER?'"}),Object(a.jsx)("button",{onClick:A,children:"'DESTROY A HUMAN!!'"})]}):""]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),i(e),r(e)}))};c.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root")),v()}},[[24,1,2]]]);
//# sourceMappingURL=main.88f2cbb8.chunk.js.map