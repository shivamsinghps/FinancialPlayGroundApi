(this.webpackJsonpccapp=this.webpackJsonpccapp||[]).push([[4],{117:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(25),u=a.n(r),s=(a(94),a(4)),o=a(51),i=a.n(o),l=a(75),j=a(3),b=a(82),O=a(140),d=a(137),f=a(2),h=Object(b.a)({palette:{type:"dark",primary:{main:"#941f33",dark:"rgba(183,18,18,0.35)",light:"#bb677f"},secondary:{main:"#d8ac05"},background:{default:"#e8e5e5"},divider:"rgba(0,0,0,0.31)",success:{main:"#3ab71d"}},typography:{fontSize:16}});function p(e){var t=e.children;return Object(f.jsx)(d.a,{theme:h,children:t})}h=Object(O.a)(h);var x=a(139),g=a(138),y=a(40),m=a(7),E=a(41),S=a(64),R=a(80),v=a(65),k=c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(10)]).then(a.bind(null,568))})),I=c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(11)]).then(a.bind(null,580))})),P=c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(12)]).then(a.bind(null,604))})),T=c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(14),a.e(15)]).then(a.bind(null,605))})),C=c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(9)]).then(a.bind(null,593))})),D=c.a.lazy((function(){return Promise.all([a.e(0),a.e(6),a.e(16)]).then(a.bind(null,596))})),_=c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(13)]).then(a.bind(null,588))})),L=c.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(3),a.e(7)]).then(a.bind(null,594))})),G={position:E.b.BOTTOM_CENTER,timeout:3e3,offset:"30px",transition:E.c.SCALE};var U=function(){var e=c.a.useContext(y.a),t=e.authDispatch,a=e.stocksDispatch,r=e.authState.auth;return e.sto,c.a.useEffect((function(){!function(e){e({type:m.c});var t=localStorage.getItem("data");t=JSON.parse(t),console.log(t),e(t?{type:m.d,payload:t}:{type:m.a})}(t)}),[]),Object(S.a)(Object(l.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null!==r.data&&(Object(v.a)()(a),console.log("res pol set"));case 1:case"end":return e.stop()}}),e)}))),2e4),Object(f.jsx)(p,{children:Object(f.jsx)(E.a,Object(s.a)(Object(s.a)({template:R.a},G),{},{children:Object(f.jsx)(n.Suspense,{fallback:Object(f.jsx)(g.a,{sx:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center",opacity:.8},children:Object(f.jsx)(x.a,{})}),children:Object(f.jsx)(j.c,{children:null==r.data?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{path:"/forgotPassword",element:Object(f.jsx)(k,{})}),Object(f.jsx)(j.a,{path:"/resetPassword",element:Object(f.jsx)(I,{})}),Object(f.jsx)(j.a,{path:"/signup",element:Object(f.jsx)(T,{})}),Object(f.jsx)(j.a,{path:"/signin",element:Object(f.jsx)(P,{})}),Object(f.jsx)(j.a,{path:"/*",element:Object(f.jsx)(P,{})})]}):Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(j.a,{path:"/dashboard",element:Object(f.jsx)(C,{})}),Object(f.jsx)(j.a,{path:"/profile",element:Object(f.jsx)(_,{})}),Object(f.jsx)(j.a,{path:"/portfolio",element:Object(f.jsx)(L,{})}),Object(f.jsx)(j.a,{path:"/details",element:Object(f.jsx)(D,{})}),Object(f.jsx)(j.a,{path:"/*",element:Object(f.jsx)(C,{})})]})})})}))})},z=a(50),N=function(e){e&&e instanceof Function&&a.e(17).then(a.bind(null,589)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,u=t.getTTFB;a(e),n(e),c(e),r(e),u(e)}))};u.a.render(Object(f.jsx)(y.b,{children:Object(f.jsx)(z.a,{children:Object(f.jsx)(U,{})})}),document.getElementById("root")),N()},40:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return f}));var n=a(19),c=a(0),r=a(4),u=a(7),s={auth:{loading:!1,data:null,error:null}},o=function(e,t){var a=t.payload;switch(t.type){case u.h:case u.c:return Object(r.a)(Object(r.a)({},e),{},{auth:Object(r.a)(Object(r.a)({},e.auth),{},{error:!1,loading:!0})});case u.i:case u.d:return Object(r.a)(Object(r.a)({},e),{},{auth:Object(r.a)(Object(r.a)({},e.auth),{},{loading:!1,data:a})});case u.g:case u.b:return Object(r.a)(Object(r.a)({},e),{},{auth:Object(r.a)(Object(r.a)({},e.auth),{},{loading:!1,error:a})});case u.j:return Object(r.a)(Object(r.a)({},e),{},{auth:Object(r.a)(Object(r.a)({},e.auth),{},{loading:!1,data:Object(r.a)(Object(r.a)({},e.auth.data),{},{user:a})})});case u.e:case u.a:return s;default:return e}},i=function(e,t){switch(console.log(t.payload),t.type){case u.k:return Object(r.a)(Object(r.a)({},e),{},{stocks:Object(r.a)(Object(r.a)({},e.stocks),{},{quotes:t.payload})});case u.f:return Object(r.a)(Object(r.a)({},e),{},{stocks:Object(r.a)(Object(r.a)({},e.stocks),{},{error:t.payload})});default:return e}},l=function(e,t){return t.type,e},j={stocks:{quotes:null,error:null}},b={ui:{loading:!1,error:null}},O=a(2),d=Object(c.createContext)({}),f=function(e){var t=e.children,a=Object(c.useReducer)(o,s),r=Object(n.a)(a,2),u=r[0],f=r[1],h=Object(c.useReducer)(i,j),p=Object(n.a)(h,2),x=p[0],g=p[1],y=Object(c.useReducer)(l,b),m=Object(n.a)(y,2),E=m[0],S=m[1];return Object(O.jsx)(d.Provider,{value:{authState:u,authDispatch:f,stocksState:x,stocksDispatch:g,uiState:E,uiDispatch:S},children:t})}},64:function(e,t,a){"use strict";var n=a(0);t.a=function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])}},65:function(e,t,a){"use strict";a.d(t,"a",(function(){return u}));var n=a(61),c=a.n(n),r=a(7),u=function(){return function(e){c.a.get("http://localhost:9001/api/getListData",{}).then((function(t){localStorage.quotes=JSON.stringify(t.data.data.quotes),e({type:r.k,payload:t.data.data.quotes})})).catch((function(t){void 0===t.response?e({type:r.f,payload:"Server Error"}):e({type:r.f,payload:t.response.data.userFriendlyMessage})}))}}},7:function(e,t,a){"use strict";a.d(t,"h",(function(){return n})),a.d(t,"i",(function(){return c})),a.d(t,"g",(function(){return r})),a.d(t,"c",(function(){return u})),a.d(t,"d",(function(){return s})),a.d(t,"b",(function(){return o})),a.d(t,"e",(function(){return i})),a.d(t,"j",(function(){return l})),a.d(t,"a",(function(){return j})),a.d(t,"k",(function(){return b})),a.d(t,"f",(function(){return O}));var n="REGISTER_LOADING",c="REGISTER_SUCCESS",r="REGISTER_ERROR",u="LOGIN_LOADING",s="LOGIN_SUCCESS",o="LOGIN_ERROR",i="LOGOUT_USER",l="UPDATED_USER",j="AUTOLOGIN_ERROR",b="UPDATE_QUOTES",O="QUOTES_ERROR"},94:function(e,t,a){}},[[117,5,8]]]);
//# sourceMappingURL=main.e7c3f343.chunk.js.map