(this.webpackJsonpshoppies=this.webpackJsonpshoppies||[]).push([[0],{127:function(e,t,n){},128:function(e,t,n){},129:function(e,t,n){},130:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),s=n.n(c),r=n(42),i=n.n(r),o=(n(56),n(29)),u=n.n(o),l=n(43),d=n(12),j=n(151),b=n(153),m=Object(j.a)((function(e){return{root:{display:"flex","& > * + *":{marginLeft:e.spacing(2)}}}}));function h(){m();return Object(a.jsx)("div",{children:Object(a.jsx)(b.a,{size:25})})}var f=n(48),O=Object(f.create)({baseURL:"https://www.omdbapi.com/"}),v=function(e){var t="?apikey=".concat("aed130ef","&s=").concat(e.replace(" ","+"));return console.log(t),O.get(t)},p=s.a.createContext(),x=(n(127),function(e){var t=e.el,n=e.nominatedContainer,s=e.onPress,r=Object(c.useState)(!1),i=Object(d.a)(r,2),o=i[0],u=i[1],l=Object(c.useContext)(p),j=l.setDisplayNominate,b=l.nominated,m=t.Title,h=t.Year,f=t.Poster;return Object(a.jsx)("div",{className:"movieCard",style:o?{transform:"scale(1.1)",backgroundImage:"url(".concat(f||"https://pyxis.nymag.com/v1/imgs/50c/2ad/eed491e2a107c7446b014ba2f92efecd04-14-dumb-dumber-to.rsquare.w700.jpg",")"),transition:"0.2s"}:{backgroundImage:"url(".concat(f,")"),transition:"0.2s"},onMouseEnter:function(){u(!0),!n&&j("Nominate "+m),n&&j(m)},onMouseLeave:function(){u(!1),j("")},children:Object(a.jsxs)("div",{className:"cardBottom",children:[Object(a.jsx)("button",{type:"button",className:"nominate",onClick:function(){return s(t)},disabled:b.includes(t)&&!n,children:n?"Remove":"Nominate"}),Object(a.jsx)("div",{children:"".concat(function(){var e=m;return m&&m.length>32&&(e=(e=m.substr(0,26)).substr(0,Math.min(e.length,e.lastIndexOf(" ")))+"..."),e}()," - ").concat(h)})]})})}),g=function(e){var t=e.name,n=e.movies,c=e.nominatedContainer,s=e.onPress;return Object(a.jsxs)("div",{className:"moviesContainer",children:[Object(a.jsx)("div",{className:"title",children:Object(a.jsx)("div",{className:"spin",children:t})}),Object(a.jsx)("div",{className:"cardContainer",children:null===n||void 0===n?void 0:n.map((function(e){return Object(a.jsx)(x,{el:e,nominatedContainer:c,onPress:s},e.imdbID)}))})]})},N=function(e){var t=e.movies,n=Object(c.useContext)(p),s=n.nominated,r=n.setNominated;return Object(a.jsxs)("div",{className:"bottomContainer",children:[Object(a.jsx)(g,{movies:t,name:"Nominate A Movie",onPress:function(e){!s.includes(e)&&s.length<5&&(s.push(e),localStorage.setItem("data",JSON.stringify(s)))}}),Object(a.jsx)(g,{movies:s,name:"Nominated Movies",onPress:function(e){console.log(e,s);var t=s.filter((function(t){return t.Title!==e.Title}));r(t),localStorage.setItem("data",JSON.stringify(t))},nominatedContainer:!0})]})},S=function(e){var t=e.children;return Object(a.jsx)("h1",{className:"header",children:t})},C=n(154),y=n(156),k=n(155),w=function(e){var t=e.search,n=e.setSearch;return Object(a.jsx)("div",{className:"searchWrapper",children:Object(a.jsx)(C.a,{type:"text",placeholder:"Search",className:"searchInput",name:"search",disableUnderline:!0,autoFocus:!0,value:t,onChange:function(e){return n(e.target.value)},startAdornment:Object(a.jsx)(y.a,{position:"start",children:Object(a.jsx)(k.a,{})})})})},I=(n(128),function(){var e=Object(c.useState)([]),t=Object(d.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),i=Object(d.a)(r,2),o=i[0],j=i[1],b=Object(c.useState)(""),m=Object(d.a)(b,2),f=m[0],O=m[1],x=Object(c.useState)(""),g=Object(d.a)(x,2),C=g[0],y=g[1],k=Object(c.useState)(JSON.parse(localStorage.getItem("data"))||[]),I=Object(d.a)(k,2),P=I[0],M=I[1],T=function(){var e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v(o);case 4:if((t=e.sent).ok){e.next=7;break}return e.abrupt("return",j(o.split("+")[0]));case 7:s(t.data.Search);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){T()}),[o]),Object(c.useEffect)((function(){var e=setTimeout((function(){return j(f)}),1e3);return function(){return clearTimeout(e)}}),[f]);var F=window.innerWidth;return Object(a.jsxs)(p.Provider,{value:{setDisplayNominate:y,nominated:P,setNominated:M,setMovieQuery:j},children:[Object(a.jsx)(S,{children:F>1e3?"Shoppies: Why Spaceballs is the best movie of all time":"Shoppies"}),Object(a.jsx)(w,{search:f,setSearch:O}),Object(a.jsxs)("div",{className:"output",children:[Object(a.jsx)("span",{children:f&&0===(null===n||void 0===n?void 0:n.length)&&Object(a.jsx)(h,{})}),Object(a.jsx)("span",{children:o&&!C?"Searched for ".concat(o):C||null})]}),Object(a.jsx)(N,{movies:n})]})}),P=(n(129),function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(I,{})})}),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,158)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),M()},56:function(e,t,n){}},[[130,1,2]]]);
//# sourceMappingURL=main.f111c37b.chunk.js.map