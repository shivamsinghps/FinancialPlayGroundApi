(this.webpackJsonpccapp=this.webpackJsonpccapp||[]).push([[10],{187:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(0);var r=a(131),i=a(470),n=a(600),s=a(599),c=a(3);function o(){return Object(c.jsx)(r.a,{sx:{m:1,display:"flex",height:"fit-content"},children:Object(c.jsxs)(i.a,{container:!0,justifyContent:"space-around",alignItems:"flex-start",children:[Object(c.jsx)(i.a,{item:!0,xs:12,md:6,lg:3,children:Object(c.jsxs)(n.a,{sx:{textAlign:"center",backgroundColor:"primary.dark"},children:[Object(c.jsx)(s.a,{variant:"h6",children:"Total Value"}),Object(c.jsx)(s.a,{variant:"h5",sx:{fontWeight:"bold"},children:"80"})]})}),Object(c.jsx)(i.a,{item:!0,xs:12,md:6,lg:3,children:Object(c.jsxs)(n.a,{sx:{textAlign:"center",backgroundColor:"primary.dark"},children:[Object(c.jsx)(s.a,{variant:"h6",children:"Investment"}),Object(c.jsx)(s.a,{variant:"h5",sx:{fontWeight:"bold"},children:"70"})]})}),Object(c.jsx)(i.a,{item:!0,xs:12,md:6,lg:3,children:Object(c.jsxs)(n.a,{sx:{textAlign:"center",backgroundColor:"primary.dark"},children:[Object(c.jsx)(s.a,{variant:"h6",children:"Funds Available"}),Object(c.jsx)(s.a,{variant:"h5",sx:{fontWeight:"bold"},children:"30"})]})})]})})}},223:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(0);var r=a(304),i=a(4),n=a(3),s=[{field:"id",headerName:"ID",width:90},{field:"firstName",headerName:"First name",width:150,editable:!0},{field:"lastName",headerName:"Last name",width:150,editable:!0},{field:"age",headerName:"Age",type:"number",width:110,editable:!0},{field:"fullName",headerName:"Full name",description:"This column has a value getter and is not sortable.",sortable:!1,width:160,valueGetter:function(e){return"".concat(e.getValue(e.id,"firstName")||""," ").concat(e.getValue(e.id,"lastName")||"")}}],c=[{id:1,lastName:"Snow",firstName:"Jon",age:35},{id:2,lastName:"Lannister",firstName:"Cersei",age:42},{id:3,lastName:"Lannister",firstName:"Jaime",age:45},{id:4,lastName:"Stark",firstName:"Arya",age:16},{id:5,lastName:"Targaryen",firstName:"Daenerys",age:null},{id:6,lastName:"Melisandre",firstName:null,age:150},{id:7,lastName:"Clifford",firstName:"Ferrara",age:44},{id:8,lastName:"Frances",firstName:"Rossini",age:36},{id:9,lastName:"Roxie",firstName:"Harvey",age:65},{id:10,lastName:"Snow",firstName:"Jon",age:35},{id:12,lastName:"Lannister",firstName:"Cersei",age:42},{id:13,lastName:"Lannister",firstName:"Jaime",age:45}];function o(e){var t=e.count,a=e.columns,o=e.demodata,l=e.height,d=Object(i.f)();return Object(n.jsx)("div",{style:{height:l||600,width:"100%"},children:Object(n.jsx)(r.a,{rows:o||c,onRowClick:function(e){d("/details?id=".concat(e.row.symbol))},columns:a||s,pageSize:t||9,rowsPerPageOptions:t?[t]:[9],disableSelectionOnClick:!0})})}},268:function(e,t,a){"use strict";var r=a(150);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(a(154)),n=a(3),s=(0,i.default)((0,n.jsx)("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack");t.default=s},530:function(e,t,a){"use strict";var r=a(16),i=a(6),n=a(2),s=a(0),c=(a(7),a(35)),o=a(128),l=a(34),d=a(54),u=a(163),m=a(3),h=Object(u.a)(Object(m.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),f=a(112),j=a(129);function b(e){return Object(f.a)("MuiAvatar",e)}Object(j.a)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var x=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=Object(l.a)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant],a.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,a=e.ownerState;return Object(n.a)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===a.variant&&{borderRadius:t.shape.borderRadius},"square"===a.variant&&{borderRadius:0},a.colorDefault&&{color:t.palette.background.default,backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]})})),p=Object(l.a)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),O=Object(l.a)(h,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var v=s.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiAvatar"}),l=a.alt,u=a.children,h=a.className,f=a.component,j=void 0===f?"div":f,v=a.imgProps,N=a.sizes,y=a.src,w=a.srcSet,k=a.variant,S=void 0===k?"circular":k,A=Object(i.a)(a,x),C=null,D=function(e){var t=e.crossOrigin,a=e.referrerPolicy,i=e.src,n=e.srcSet,c=s.useState(!1),o=Object(r.a)(c,2),l=o[0],d=o[1];return s.useEffect((function(){if(i||n){d(!1);var e=!0,r=new Image;return r.onload=function(){e&&d("loaded")},r.onerror=function(){e&&d("error")},r.crossOrigin=t,r.referrerPolicy=a,r.src=i,n&&(r.srcset=n),function(){e=!1}}}),[t,a,i,n]),l}(Object(n.a)({},v,{src:y,srcSet:w})),I=y||w,R=I&&"error"!==D,z=Object(n.a)({},a,{colorDefault:!R,component:j,variant:S}),F=function(e){var t=e.classes,a={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return Object(o.a)(a,b,t)}(z);return C=R?Object(m.jsx)(p,Object(n.a)({alt:l,src:y,srcSet:w,sizes:N,ownerState:z,className:F.img},v)):null!=u?u:I&&l?l[0]:Object(m.jsx)(O,{className:F.fallback}),Object(m.jsx)(g,Object(n.a)({as:j,ownerState:z,className:Object(c.a)(F.root,h),ref:t},A,{children:C}))}));t.a=v},581:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var r=a(16),i=a(5),n=a(0),s=a(131),c=a(600),o=a(470),l=a(530),d=a(34),u=a(599),m=a(511),h=a(223),f=a(268),j=a.n(f),b=a(45),x=a(36),g=a(132),p=a(56),O=a.n(p),v=a(187),N=a(3),y=Object(d.a)(c.a)((function(e){var t=e.theme;return Object(i.a)(Object(i.a)({},t.typography.body2),{},{padding:t.spacing(1),textAlign:"center",color:t.palette.text.secondary})})),w=[{field:"id",headerName:"ID",width:90},{field:"stockId",headerName:"Stock Id",width:120},{field:"stockName",headerName:"StockName",width:120},{field:"type",headerName:"Type",width:80},{field:"quantity",headerName:"Quantity",type:"number",width:100},{field:"price",headerName:"At Price",type:"number",width:110},{field:"on",headerName:"On",type:"dateTime",width:130}];function k(){var e=n.useState([]),t=Object(r.a)(e,2),a=t[0],i=t[1],d=n.useState(!1),f=Object(r.a)(d,2),p=f[0],k=f[1],S=n.useContext(x.a).authState.auth.data;return n.useEffect((function(){return S&&(k(!0),O.a.get("http://localhost:9001/api/transactions",{headers:{Authorization:"Brearer ".concat(S.token)}}).then((function(e){var t=e.data.data.transactions.map((function(e,t){var a=new Date(e.createdAt);return{id:t+1,stockId:e.stockId,stockName:e.stockName,type:e.type,quantity:e.quantity,price:e.price,on:a.toLocaleDateString()}}));i(t),k(!1)})).catch((function(e){k(!1),console.log(e)}))),function(){}}),[S]),Object(N.jsx)(s.a,{sx:{display:"flex",flexWrap:"wrap",justifyContent:"center",alignContent:"center",width:"100vw",mt:2},children:Object(N.jsxs)(c.a,{elevation:3,sx:{width:"80vw"},children:[Object(N.jsxs)(b.b,{to:{pathname:"/dashboard"},style:{textDecoration:"none"},children:[Object(N.jsxs)(s.a,{sx:{display:"flex",flexWrap:"wrap"},children:[Object(N.jsx)(j.a,{color:"primary",sx:{m:2}}),Object(N.jsx)(u.a,{sx:{mt:2},children:"Dashboard"})]})," "]}),Object(N.jsxs)(s.a,{sx:{flexGrow:1,mb:5,ml:5,mr:5},children:[Object(N.jsxs)(o.a,{container:!0,spacing:2,children:[Object(N.jsx)(o.a,{item:!0,xs:12,md:4,children:Object(N.jsxs)(y,{sx:{display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(N.jsx)(l.a,{sx:{height:"6rem",width:"6rem",fontSize:36,backgroundColor:"rgba(148, 31, 51)"},children:S.user.firstName[0]}),Object(N.jsx)(u.a,{variant:"h5",sx:{mt:1},children:S.user.firstName+" "+S.user.lastName}),Object(N.jsx)(u.a,{variant:"subtitle",sx:{mt:1},children:S.user.email}),Object(N.jsx)(m.a,{sx:{mt:3,width:"100%",mb:3}}),"Current Wallet",Object(N.jsxs)(u.a,{variant:"h4",sx:{mt:1},children:["$",S.user.currentWalletValue.toFixed(2)]})]})}),Object(N.jsxs)(o.a,{item:!0,xs:12,md:8,children:[Object(N.jsx)(u.a,{sx:{mb:"5px",fontWeight:"bold"},children:"Transactions"}),p?Object(N.jsx)(s.a,{sx:{height:500,display:"flex",justifyContent:"center",alignItems:"center",opacity:.8},children:Object(N.jsx)(g.a,{})}):Object(N.jsx)(h.a,{count:8,columns:w,demodata:a,height:500})]})]}),Object(N.jsx)(v.a,{})]})]})})}}}]);
//# sourceMappingURL=10.cd94b747.chunk.js.map