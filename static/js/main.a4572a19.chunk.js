(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{124:function(e,t,n){},125:function(e,t,n){},126:function(e,t,n){},127:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),s=n.n(c),r=n(40),i=n.n(r),o=(n(53),n(27)),u=n.n(o),l=n(41),d=n(12),j=n(147);function b(){return Object(a.jsx)("div",{children:Object(a.jsx)(j.a,{size:25})})}var m=n(46),h=Object(m.create)({baseURL:"https://www.omdbapi.com/"}),O=function(e){var t="?apikey=".concat("aed130ef","&s=").concat(e.replace(" ","+"));return h.get(t)},v=function(e){var t=e.setNominated;return Object(a.jsxs)("div",{className:"bruceBanner",children:["You have nominated 5 movies. You can start over by pushing the RED button",Object(a.jsx)("button",{type:"button",className:"resetButton",onClick:function(){t([]),localStorage.setItem("data",JSON.stringify([]))},children:"Reset"})]})},f=function(e){var t=e.children;return Object(a.jsx)("h1",{className:"header",children:t})},p=s.a.createContext(),x=n(148),g=n(150),N=n(149),S=function(e){var t=e.search,n=e.setSearch;return Object(a.jsx)("div",{className:"searchWrapper",children:Object(a.jsx)(x.a,{type:"text",placeholder:"Search",className:"searchInput",name:"search",disableUnderline:!0,autoFocus:!0,value:t,onChange:function(e){return n(e.target.value)},startAdornment:Object(a.jsx)(g.a,{position:"start",children:Object(a.jsx)(N.a,{})})})})},y=(n(124),function(e){var t=e.el,n=e.nominatedContainer,s=e.onPress,r=Object(c.useState)(!1),i=Object(d.a)(r,2),o=i[0],u=i[1],l=Object(c.useContext)(p),j=l.setDisplayNominate,b=l.nominated,m=t.Title,h=t.Year,O=t.Poster;return Object(a.jsx)("div",{className:"movieCard",style:o?{transform:"scale(1.1)",backgroundImage:"url(".concat(O||"https://pyxis.nymag.com/v1/imgs/50c/2ad/eed491e2a107c7446b014ba2f92efecd04-14-dumb-dumber-to.rsquare.w700.jpg",")"),transition:"0.2s"}:{backgroundImage:"url(".concat(O,")"),transition:"0.2s"},onMouseEnter:function(){u(!0),!n&&j("Nominate "+m),n&&j(m)},onMouseLeave:function(){u(!1),j("")},children:Object(a.jsxs)("div",{className:"cardBottom",children:[Object(a.jsx)("button",{type:"button",className:"nominate",onClick:function(){return s(t)},disabled:b.includes(t)&&!n,children:n?"Remove":"Nominate"}),Object(a.jsx)("div",{children:"".concat(function(){var e=m;return m&&m.length>32&&(e=(e=m.substr(0,26)).substr(0,Math.min(e.length,e.lastIndexOf(" ")))+"..."),e}()," - ").concat(h)})]})})}),C=function(e){var t=e.name,n=e.movies,c=e.nominatedContainer,s=e.onPress;return Object(a.jsxs)("div",{className:"moviesContainer",children:[Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("div",{className:"spin",children:t})}),Object(a.jsx)("div",{className:"cardContainer",children:null===n||void 0===n?void 0:n.map((function(e){return Object(a.jsx)(y,{el:e,nominatedContainer:c,onPress:s},e.imdbID)}))})]})},k=function(e){var t=e.movies,n=Object(c.useContext)(p),s=n.nominated,r=n.setNominated;return Object(a.jsxs)("div",{className:"bottomContainer",children:[Object(a.jsx)(C,{movies:t,name:"Nominate A Movie",onPress:function(e){!s.includes(e)&&s.length<5&&(s.push(e),localStorage.setItem("data",JSON.stringify(s)))}}),Object(a.jsx)(C,{movies:s,name:"Nominated Movies",onPress:function(e){var t=s.filter((function(t){return t.Title!==e.Title}));r(t),localStorage.setItem("data",JSON.stringify(t))},nominatedContainer:!0})]})},I=(n(125),function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),i=Object(d.a)(r,2),o=i[0],j=i[1],m=Object(c.useState)(""),h=Object(d.a)(m,2),x=h[0],g=h[1],N=Object(c.useState)(""),y=Object(d.a)(N,2),C=y[0],I=y[1],w=Object(c.useState)(JSON.parse(localStorage.getItem("data"))||[]),P=Object(d.a)(w,2),M=P[0],T=P[1],J=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,O(o);case 4:if((t=e.sent).ok){e.next=7;break}return e.abrupt("return",j(o.split("+")[0]));case 7:s(t.data.Search);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){J()}),[o]),Object(c.useEffect)((function(){var e=setTimeout((function(){return j(x)}),1e3);return function(){return clearTimeout(e)}}),[x]),Object(a.jsxs)(p.Provider,{value:{setDisplayNominate:I,nominated:M,setNominated:T,setMovieQuery:j},children:[M.length>=5?Object(a.jsx)(v,{setNominated:T}):null,Object(a.jsx)(f,{children:window.innerWidth>1e3?"Shoppies: Why Spaceballs is the best movie of all time":"Shoppies"}),Object(a.jsx)(S,{search:x,setSearch:g}),Object(a.jsxs)("div",{className:"output",children:[Object(a.jsx)("span",{children:x&&0===(null===n||void 0===n?void 0:n.length)&&Object(a.jsx)(b,{})}),Object(a.jsx)("span",{children:o&&!C?"Searched for ".concat(o):C||null})]}),Object(a.jsx)(k,{movies:n,nominated:!0,setNominated:!0})]})}),w=(n(126),function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(I,{})})}),P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,151)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),P()},53:function(e,t,n){}},[[127,1,2]]]);
//# sourceMappingURL=main.a4572a19.chunk.js.map