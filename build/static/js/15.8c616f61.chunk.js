(this.webpackJsonpccapp=this.webpackJsonpccapp||[]).push([[15],{187:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(0);var r=a(131),n=a(470),c=a(600),i=a(599),s=a(3);function o(){return Object(s.jsx)(r.a,{sx:{m:1,display:"flex",height:"fit-content"},children:Object(s.jsxs)(n.a,{container:!0,justifyContent:"space-around",alignItems:"flex-start",children:[Object(s.jsx)(n.a,{item:!0,xs:12,md:6,lg:3,children:Object(s.jsxs)(c.a,{sx:{textAlign:"center",backgroundColor:"primary.dark"},children:[Object(s.jsx)(i.a,{variant:"h6",children:"Total Value"}),Object(s.jsx)(i.a,{variant:"h5",sx:{fontWeight:"bold"},children:"80"})]})}),Object(s.jsx)(n.a,{item:!0,xs:12,md:6,lg:3,children:Object(s.jsxs)(c.a,{sx:{textAlign:"center",backgroundColor:"primary.dark"},children:[Object(s.jsx)(i.a,{variant:"h6",children:"Investment"}),Object(s.jsx)(i.a,{variant:"h5",sx:{fontWeight:"bold"},children:"70"})]})}),Object(s.jsx)(n.a,{item:!0,xs:12,md:6,lg:3,children:Object(s.jsxs)(c.a,{sx:{textAlign:"center",backgroundColor:"primary.dark"},children:[Object(s.jsx)(i.a,{variant:"h6",children:"Funds Available"}),Object(s.jsx)(i.a,{variant:"h5",sx:{fontWeight:"bold"},children:"30"})]})})]})})}},589:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return R}));var r=a(16),n=a(5),c=a(0),i=a.n(c),s=a(600),o=a(131),l=a(599),d=a(470),j=a(511),b=a(268),x=a.n(b),h=a(45),p=a(34),u=a(184),m=a(579),O=a(580),g=a(520),y=a(521),f=a(532),v=a(3);function k(e){var t=e.chartData,a=Object(u.a)(),r=t.map((function(e){return{time:e.date.slice(8,10),amount:e.open}}));return Object(v.jsx)(c.Fragment,{children:Object(v.jsx)(m.a,{children:Object(v.jsxs)(O.a,{data:r,margin:{top:5,right:5,bottom:5},children:[Object(v.jsx)(g.a,{dataKey:"time",stroke:a.palette.text.secondary,style:a.typography.body2}),Object(v.jsx)(y.a,{stroke:a.palette.text.secondary,style:a.typography.body2}),Object(v.jsx)(f.a,{isAnimationActive:!1,type:"monotone",dataKey:"amount",stroke:a.palette.primary.main,dot:!1})]})})})}var w=a(601),C=a(528),D=a(497);function A(e){var t=e.news;return Object(v.jsx)(w.a,{sx:{width:"100%",height:200,bgcolor:"background.paper",overflow:"auto","&::-webkit-scrollbar":{width:"0.2em"},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0,0,0,0.00)",webkitBoxShadow:"inset 0 0 6px rgba(0,0,0,0.00)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0,0,0,.1)",outline:"1px solid slategrey"}},children:t.map((function(e,t){return Object(v.jsxs)("div",{children:[Object(v.jsx)(C.a,{alignItems:"flex-start",children:Object(v.jsx)(D.a,{primary:e.title,secondary:Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)(l.a,{sx:{display:"inline"},component:"span",variant:"body2",color:"text.primary",children:e.date.slice(0,16)}),Object(v.jsxs)("a",{href:e.link,target:"_blank",children:["-",e.description.slice(0,50),"..."]})]})})}),Object(v.jsx)(j.a,{variant:"inset",component:"li"})]},t)}))})}var E=a(606);function I(e){var t=e.details;return console.log("kk",t),Object(v.jsxs)(w.a,{sx:{width:"100%",height:200,bgcolor:"background.paper",overflow:"auto","&::-webkit-scrollbar":{width:"0.2em"},"&::-webkit-scrollbar-track":{boxShadow:"inset 0 0 6px rgba(0,0,0,0.00)",webkitBoxShadow:"inset 0 0 6px rgba(0,0,0,0.00)"},"&::-webkit-scrollbar-thumb":{backgroundColor:"rgba(0,0,0,.1)",outline:"1px solid slategrey"}},children:[Object(v.jsx)(C.a,{alignItems:"flex-start",children:Object(v.jsx)(D.a,{secondary:Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)(l.a,{sx:{display:"inline",mr:1,fontWeight:"bold"},component:"span",variant:"body2",color:"text.primary",children:"Current Price"}),Object(v.jsxs)(l.a,{color:"primary",children:["$ ",t.price.regularMarketPrice]})]})})}),Object(v.jsx)(j.a,{variant:"inset",component:"li"}),Object(v.jsx)(C.a,{alignItems:"flex-start",children:Object(v.jsx)(D.a,{secondary:Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)(l.a,{sx:{display:"inline",mr:1,fontWeight:"bold"},component:"span",variant:"body2",color:"text.primary",children:"Today High"}),Object(v.jsxs)(l.a,{color:"primary",children:["$ ",t.price.regularMarketDayHigh]})]})})}),Object(v.jsx)(j.a,{variant:"inset",component:"li"}),Object(v.jsx)(C.a,{alignItems:"flex-start",children:Object(v.jsx)(D.a,{secondary:Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)(l.a,{sx:{display:"inline",mr:1,fontWeight:"bold"},component:"span",variant:"body2",color:"text.primary",children:"Today Low"}),Object(v.jsxs)(l.a,{color:"primary",children:["$ ",t.price.regularMarketDayLow]})]})})}),Object(v.jsx)(j.a,{variant:"inset",component:"li"}),Object(v.jsx)(C.a,{alignItems:"flex-start",children:Object(v.jsx)(D.a,{secondary:Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)(l.a,{sx:{display:"inline",mr:1,fontWeight:"bold"},component:"span",variant:"body2",color:"text.primary",children:"Open"}),Object(v.jsxs)(l.a,{color:"primary",children:["$ ",t.price.regularMarketOpen]})]})})}),Object(v.jsx)(j.a,{variant:"inset",component:"li"}),Object(v.jsx)(C.a,{alignItems:"flex-start",children:Object(v.jsx)(D.a,{secondary:Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)(l.a,{sx:{display:"inline",mr:1,fontWeight:"bold"},component:"span",variant:"body2",color:"text.primary",children:"Prev. Close"}),Object(v.jsxs)(l.a,{color:"primary",children:["$ ",t.price.regularMarketPreviousClose]})]})})}),Object(v.jsx)(j.a,{variant:"inset",component:"li"}),Object(v.jsx)(C.a,{alignItems:"flex-start",children:Object(v.jsx)(D.a,{secondary:Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)(l.a,{sx:{display:"inline",mr:1,fontWeight:"bold"},component:"span",variant:"body2",color:"text.primary",children:"Volume"}),Object(v.jsxs)(l.a,{color:"primary",children:["$ ",t.price.regularMarketVolume]})]})})}),Object(v.jsx)(j.a,{variant:"inset",component:"li"}),Object(v.jsx)(C.a,{alignItems:"flex-start",children:Object(v.jsx)(D.a,{secondary:Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)(l.a,{sx:{display:"inline",mr:1,fontWeight:"bold"},component:"span",variant:"body2",color:"text.primary",children:"Change"}),Object(v.jsxs)(l.a,{color:"primary",children:["$ ",t.price.regularMarketChange]})]})})}),Object(v.jsx)(j.a,{variant:"inset",component:"li"}),Object(v.jsx)(C.a,{alignItems:"flex-start",children:Object(v.jsx)(D.a,{secondary:Object(v.jsxs)(c.Fragment,{children:[Object(v.jsx)(l.a,{sx:{display:"inline",mr:1,fontWeight:"bold"},component:"span",variant:"body2",color:"text.primary",children:"Change Percentage"}),Object(v.jsxs)(l.a,{color:"primary",children:["% ",(100*t.price.regularMarketChangePercent).toFixed(2)]})]})})})]})}var F=a(187),T=a(36),P=a(132),W=a(56),L=a.n(W),S=a(602),N=a(588),H=a(8),B=a(522),M=a.n(B),$=a(37),_={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:250,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:2,borderRadius:4};function q(e){var t=e.text,a=e.curentPrice,i=e.stockId,s=e.stockName,d=c.useContext(T.a),j=d.authDispatch,b=d.authState.auth,x=b.data,h=b.loading,p=Object($.d)(),u=c.useState(!1),m=Object(r.a)(u,2),O=m[0],g=m[1],y=c.useState(0),f=Object(r.a)(y,2),k=f[0],w=f[1],C=function(e){w(0);var t={atPrice:a,quantity:k,stockId:i,stockName:s};console.log(t),function(e){var t=e.alert,a=e.url,r=e.reqParams,c=e.token;return function(e){e({type:H.c}),L.a.post(a,Object(n.a)({},r),{headers:{Authorization:"Brearer ".concat(c)}}).then((function(a){localStorage.data=JSON.stringify(a.data.data),t.success(a.data.message),e({type:H.j,payload:a.data.data.user})})).catch((function(a){t.error(a.response.data.message),e({type:H.b,payload:a.response?a.response.data:"COULD NOT CONNECT"})}))}}({alert:p,url:"BUY"===e?"http://localhost:9001/api/buy":"http://localhost:9001/api/sell",reqParams:t,token:x.token})(j)};return Object(v.jsxs)("div",{children:[Object(v.jsx)(S.a,{sx:{backgroundColor:"BUY"===t?"green":"primary",width:{xs:"6rem",md:"8rem",lg:"10rem"}},onClick:function(){return g(!0)},children:t}),Object(v.jsx)(N.a,{open:O,onClose:function(){return g(!1)},"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:h?Object(v.jsx)(o.a,{sx:{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center",opacity:.8},children:Object(v.jsx)(P.a,{})}):Object(v.jsxs)(o.a,{sx:_,children:[Object(v.jsx)(M.a,{sx:{float:"right",mb:1},onClick:function(){return g(!1)}}),Object(v.jsxs)(E.a,{size:"small","aria-label":"small outlined button group",children:[Object(v.jsx)(l.a,{sx:{fontWeight:"bold",mr:2},children:"Quantity"}),Object(v.jsx)(S.a,{disabled:k<1,onClick:function(){w(k-1)},children:"-"}),Object(v.jsx)(S.a,{children:k}),Object(v.jsx)(S.a,{onClick:function(){w(k+1)},children:"+"})]}),Object(v.jsxs)(E.a,{sx:{width:"100%",mt:2},size:"small","aria-label":"small outlined button group",children:[Object(v.jsx)(l.a,{sx:{fontWeight:"bold",mr:3},children:"Amount"}),Object(v.jsx)(S.a,{children:(k*a).toFixed(4)})]}),Object(v.jsx)(S.a,{sx:{backgroundColor:"BUY"===t?"green":"primary",mt:3,width:{xs:"6rem",md:"8rem",lg:"10rem"}},onClick:function(){return C(t)},disabled:0===k,children:t})]})})]})}var z=Object(p.a)(s.a)((function(e){var t=e.theme;return Object(n.a)(Object(n.a)({},t.typography.subtitle1),{},{padding:t.spacing(1),textAlign:"left",color:t.palette.text.secondary,overflow:"auto",fontWeight:"bold"})})),U=function(e,t){switch(t.type){case"NEWS_FETCHED":return Object(n.a)(Object(n.a)({},e),{},{news:t.payload,newsLoading:!1});case"DETAILS_FETCHED":return Object(n.a)(Object(n.a)({},e),{},{details:t.payload,detailsLoading:!1});case"CHART_DATA_FETCHED":return Object(n.a)(Object(n.a)({},e),{},{chartData:t.payload,chartLoading:!1});default:return e}},Y={news:[],newsLoading:!0,details:null,detailsLoading:!0,chartData:null,chartLoading:!0,data:null,stat:null,statLoading:!0};function R(){var e,t,a,n,c,b,p=i.a.useReducer(U,Y),u=Object(r.a)(p,2),m=u[0],O=u[1],g=Object(h.c)(),y=Object(r.a)(g,1)[0].get("id"),f=i.a.useContext(T.a).authState.auth.data,w=f.user.stats.filter((function(e){return e.key===y}))[0];return i.a.useEffect((function(){y&&f&&L.a.post("http://localhost:9001/api/getNews",{stockId:y},{headers:{Authorization:"Brearer ".concat(f.token)}}).then((function(e){O({type:"NEWS_FETCHED",payload:e.data.data.news})})).catch((function(e){console.log(e)}))}),[y,f]),i.a.useEffect((function(){y&&f&&L.a.post("http://localhost:9001/api/getData",{stockId:y},{headers:{Authorization:"Brearer ".concat(f.token)}}).then((function(e){O({type:"DETAILS_FETCHED",payload:e.data.data.quotes})})).catch((function(e){console.log(e)}))}),[y,f]),i.a.useEffect((function(){y&&f&&L.a.post("http://localhost:9001/api/history",{stockId:y},{headers:{Authorization:"Brearer ".concat(f.token)}}).then((function(e){O({type:"CHART_DATA_FETCHED",payload:e.data.data.quotes})})).catch((function(e){console.log(e)}))}),[y,f]),Object(v.jsx)(o.a,{sx:{display:"flex",flexWrap:"wrap",mt:2,justifyContent:"center",alignContent:"center",width:"100vw"},children:Object(v.jsxs)(s.a,{elevation:3,sx:{width:"80vw"},children:[Object(v.jsxs)(h.b,{to:{pathname:"/dashboard"},style:{textDecoration:"none"},children:[Object(v.jsxs)(o.a,{sx:{display:"flex",flexWrap:"wrap"},children:[Object(v.jsx)(x.a,{color:"primary",sx:{m:2}}),Object(v.jsx)(l.a,{sx:{mt:2},children:"Dashboard"})]})," "]}),Object(v.jsx)(o.a,{sx:{mb:1,ml:5,mr:5},children:Object(v.jsxs)(d.a,{container:!0,spacing:2,justifyContent:"space-around",children:[Object(v.jsx)(d.a,{item:!0,xs:12,md:7,sx:{mt:2,height:260},children:m.chartLoading?Object(v.jsx)(P.a,{}):Object(v.jsx)(k,{chartData:m.chartData})}),Object(v.jsx)(d.a,{item:!0,xs:12,md:4,sx:{height:260},children:Object(v.jsxs)(z,{children:["  ",m.details&&m.details.price.shortName," (",m.details&&m.details.price.symbol,")",Object(v.jsxs)(E.a,{variant:"contained","aria-label":"outlined primary button group",sx:{ml:1},children:[Object(v.jsx)(q,{text:"BUY",curentPrice:null===(e=m.details)||void 0===e?void 0:e.price.regularMarketPrice,stockId:null===(t=m.details)||void 0===t?void 0:t.price.symbol,stockName:null===(a=m.details)||void 0===a?void 0:a.price.shortName}),Object(v.jsx)(q,{text:"SELL",curentPrice:null===(n=m.details)||void 0===n?void 0:n.price.regularMarketPrice,stockId:null===(c=m.details)||void 0===c?void 0:c.price.symbol,stockName:null===(b=m.details)||void 0===b?void 0:b.price.shortName})]}),Object(v.jsx)(z,{sx:{p:1,m:1,textAlign:"center",height:140},children:w?Object(v.jsxs)(v.Fragment,{children:[" ",Object(v.jsxs)(l.a,{variant:"body2",children:["No. Of Shares in Holding ",Object(v.jsx)("br",{})," #"," ",Object(v.jsx)("strong",{children:w.quantity})]}),Object(v.jsx)(j.a,{}),Object(v.jsxs)(l.a,{variant:"body2",children:["Average Price of share holdings ",Object(v.jsx)("br",{}),"$"," ",Object(v.jsxs)("strong",{children:[" ",w.TotalPrice/w.quantity]})]}),Object(v.jsx)(j.a,{}),Object(v.jsxs)(l.a,{variant:"body2",children:["Total Price of share holdings ",Object(v.jsx)("br",{}),"$"," ",Object(v.jsxs)("strong",{children:[" ",w.TotalPrice]})]})]}):Object(v.jsx)(l.a,{variant:"subtitle1",children:"You Do not have this share in your portfolio"})})]})}),Object(v.jsx)(d.a,{item:!0,xs:12,md:7,sx:{m:1},children:Object(v.jsxs)(z,{children:["News",m.newsLoading?Object(v.jsx)(P.a,{}):Object(v.jsx)(A,{news:m.news})]})}),Object(v.jsx)(d.a,{item:!0,xs:12,md:4,sx:{m:1},children:Object(v.jsxs)(z,{children:["Details",m.detailsLoading?Object(v.jsx)(P.a,{}):Object(v.jsx)(I,{details:m.details})]})}),Object(v.jsx)(d.a,{item:!0,xs:12,children:Object(v.jsx)(F.a,{})})]})})]})})}}}]);
//# sourceMappingURL=15.8c616f61.chunk.js.map