(this.webpackJsonpccapp=this.webpackJsonpccapp||[]).push([[4],{111:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(21),u=n.n(r),s=(n(88),n(5)),i=n(46),o=n.n(i),l=n(69),j=n(4),b=n(76),d=n(134),O=n(131),f=n(3),h=Object(b.a)({palette:{type:"dark",primary:{main:"#941f33",dark:"rgba(183,18,18,0.35)",light:"#bb677f"},secondary:{main:"#d8ac05"},background:{default:"#e8e5e5"},divider:"rgba(0,0,0,0.31)",success:{main:"#3ab71d"}},typography:{fontSize:16}});function p(e){var t=e.children;return Object(f.jsx)(O.a,{theme:h,children:t})}h=Object(d.a)(h);var x=n(133),g=n(132),y=n(36),m=n(8),E=n(37),S=function(e,t){var n=Object(a.useRef)();Object(a.useEffect)((function(){n.current=e}),[e]),Object(a.useEffect)((function(){if(null!==t){var e=setInterval((function(){n.current()}),t);return function(){return clearInterval(e)}}}),[t])},R=n(74),v=n(59),k=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,560))})),I=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(12)]).then(n.bind(null,573))})),P=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(13)]).then(n.bind(null,596))})),T=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(14),n.e(16)]).then(n.bind(null,597))})),w=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(9)]).then(n.bind(null,585))})),C=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6),n.e(15)]).then(n.bind(null,588))})),D=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(10)]).then(n.bind(null,580))})),_=c.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(2),n.e(3),n.e(7)]).then(n.bind(null,586))})),L={position:E.b.BOTTOM_CENTER,timeout:3e3,offset:"30px",transition:E.c.SCALE};var G=function(){var e=c.a.useContext(y.a),t=e.authDispatch,n=e.stocksDispatch,r=e.authState.auth;return e.sto,c.a.useEffect((function(){!function(e){e({type:m.c});var t=localStorage.getItem("data");e((t=JSON.parse(t))?{type:m.d,payload:t}:{type:m.a})}(t)}),[]),S(Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==r.data&&(Object(v.a)()(n),console.log("res pol set"));case 1:case"end":return e.stop()}}),e)}))),2e4),Object(f.jsx)(p,{children:Object(f.jsx)(E.a,Object(s.a)(Object(s.a)({template:R.a},L),{},{children:Object(f.jsx)(a.Suspense,{fallback:Object(f.jsx)(g.a,{sx:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center",opacity:.8},children:Object(f.jsx)(x.a,{})}),children:Object(f.jsx)(j.c,{children:null==r.data?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{path:"/forgotPassword",element:Object(f.jsx)(k,{})}),Object(f.jsx)(j.a,{path:"/resetPassword",element:Object(f.jsx)(I,{})}),Object(f.jsx)(j.a,{path:"/signup",element:Object(f.jsx)(T,{})}),Object(f.jsx)(j.a,{path:"/signin",element:Object(f.jsx)(P,{})}),Object(f.jsx)(j.a,{path:"/*",element:Object(f.jsx)(P,{})})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{path:"/dashboard",element:Object(f.jsx)(w,{})}),Object(f.jsx)(j.a,{path:"/profile",element:Object(f.jsx)(D,{})}),Object(f.jsx)(j.a,{path:"/portfolio",element:Object(f.jsx)(_,{})}),Object(f.jsx)(j.a,{path:"/details",element:Object(f.jsx)(C,{})}),Object(f.jsx)(j.a,{path:"/*",element:Object(f.jsx)(w,{})})]})})})}))})},U=n(45),z=function(e){e&&e instanceof Function&&n.e(17).then(n.bind(null,581)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,u=t.getTTFB;n(e),a(e),c(e),r(e),u(e)}))};u.a.render(Object(f.jsx)(y.b,{children:Object(f.jsx)(U.a,{children:Object(f.jsx)(G,{})})}),document.getElementById("root")),z()},36:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return f}));var a=n(16),c=n(0),r=n(5),u=n(8),s={auth:{loading:!1,data:null,error:null}},i=function(e,t){var n=t.payload;switch(t.type){case u.h:case u.c:return Object(r.a)(Object(r.a)({},e),{},{auth:Object(r.a)(Object(r.a)({},e.auth),{},{error:!1,loading:!0})});case u.i:case u.d:return Object(r.a)(Object(r.a)({},e),{},{auth:Object(r.a)(Object(r.a)({},e.auth),{},{loading:!1,data:n})});case u.g:case u.b:return Object(r.a)(Object(r.a)({},e),{},{auth:Object(r.a)(Object(r.a)({},e.auth),{},{loading:!1,error:n})});case u.j:return Object(r.a)(Object(r.a)({},e),{},{auth:Object(r.a)(Object(r.a)({},e.auth),{},{loading:!1,data:Object(r.a)(Object(r.a)({},e.auth.data),{},{user:n})})});case u.e:case u.a:return s;default:return e}},o=function(e,t){switch(t.type){case u.k:return Object(r.a)(Object(r.a)({},e),{},{stocks:Object(r.a)(Object(r.a)({},e.stocks),{},{quotes:t.payload})});case u.f:return Object(r.a)(Object(r.a)({},e),{},{stocks:Object(r.a)(Object(r.a)({},e.stocks),{},{error:t.payload})});default:return e}},l=function(e,t){return t.type,e},j={stocks:{quotes:null,error:null}},b={ui:{loading:!1,error:null}},d=n(3),O=Object(c.createContext)({}),f=function(e){var t=e.children,n=Object(c.useReducer)(i,s),r=Object(a.a)(n,2),u=r[0],f=r[1],h=Object(c.useReducer)(o,j),p=Object(a.a)(h,2),x=p[0],g=p[1],y=Object(c.useReducer)(l,b),m=Object(a.a)(y,2),E=m[0],S=m[1];return Object(d.jsx)(O.Provider,{value:{authState:u,authDispatch:f,stocksState:x,stocksDispatch:g,uiState:E,uiDispatch:S},children:t})}},57:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=-1!==window.location.hostname.indexOf("localhost")?"http://localhost:9001":window.location.origin},59:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(56),c=n.n(a),r=n(57),u=n(8),s=function(){return function(e){c.a.get(r.a+"/api/getListData",{}).then((function(t){localStorage.quotes=JSON.stringify(t.data.data.quotes),e({type:u.k,payload:t.data.data.quotes})})).catch((function(t){void 0===t.response?e({type:u.f,payload:"Server Error"}):e({type:u.f,payload:t.response.data.userFriendlyMessage})}))}}},8:function(e,t,n){"use strict";n.d(t,"h",(function(){return a})),n.d(t,"i",(function(){return c})),n.d(t,"g",(function(){return r})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"j",(function(){return l})),n.d(t,"a",(function(){return j})),n.d(t,"k",(function(){return b})),n.d(t,"f",(function(){return d}));var a="REGISTER_LOADING",c="REGISTER_SUCCESS",r="REGISTER_ERROR",u="LOGIN_LOADING",s="LOGIN_SUCCESS",i="LOGIN_ERROR",o="LOGOUT_USER",l="UPDATED_USER",j="AUTOLOGIN_ERROR",b="UPDATE_QUOTES",d="QUOTES_ERROR"},88:function(e,t,n){}},[[111,5,8]]]);
//# sourceMappingURL=main.6d1b50c9.chunk.js.map