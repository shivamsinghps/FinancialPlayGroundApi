(this.webpackJsonpccapp=this.webpackJsonpccapp||[]).push([[10],{285:function(t,e,a){"use strict";var n=a(5),i=a(0),r=(a(6),a(59)),o=a(569),s=a(2),c=function(t,e){return Object(n.a)({WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale",boxSizing:"border-box",WebkitTextSizeAdjust:"100%"},e&&{colorScheme:t.palette.mode})},d=function(t){return Object(n.a)({color:t.palette.text.primary},t.typography.body1,{backgroundColor:t.palette.background.default,"@media print":{backgroundColor:t.palette.common.white}})};e.a=function(t){var e=Object(r.a)({props:t,name:"MuiCssBaseline"}),a=e.children,u=e.enableColorScheme,l=void 0!==u&&u;return Object(s.jsxs)(i.Fragment,{children:[Object(s.jsx)(o.a,{styles:function(t){return function(t){var e,a,i={html:c(t,arguments.length>1&&void 0!==arguments[1]&&arguments[1]),"*, *::before, *::after":{boxSizing:"inherit"},"strong, b":{fontWeight:t.typography.fontWeightBold},body:Object(n.a)({margin:0},d(t),{"&::backdrop":{backgroundColor:t.palette.background.default}})},r=null==(e=t.components)||null==(a=e.MuiCssBaseline)?void 0:a.styleOverrides;return r&&(i=[i,r]),i}(t,l)}}),a]})}},463:function(t,e,a){"use strict";var n=a(10),i=a(21),r=a(5),o=a(0),s=(a(6),a(39)),c=a(135),d=a(59),u=a(38),l=a(119),b=a(136);function m(t){return Object(l.a)("MuiContainer",t)}Object(b.a)("MuiContainer",["root","disableGutters","fixed","maxWidthXs","maxWidthSm","maxWidthMd","maxWidthLg","maxWidthXl"]);var p=a(30),h=a(2),x=["className","component","disableGutters","fixed","maxWidth"],f=Object(u.a)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,e){var a=t.ownerState;return[e.root,e["maxWidth".concat(Object(p.a)(String(a.maxWidth)))],a.fixed&&e.fixed,a.disableGutters&&e.disableGutters]}})((function(t){var e=t.theme,a=t.ownerState;return Object(r.a)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!a.disableGutters&&Object(n.a)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}))}),(function(t){var e=t.theme;return t.ownerState.fixed&&Object.keys(e.breakpoints.values).reduce((function(t,a){var n=e.breakpoints.values[a];return 0!==n&&(t[e.breakpoints.up(a)]={maxWidth:"".concat(n).concat(e.breakpoints.unit)}),t}),{})}),(function(t){var e=t.theme,a=t.ownerState;return Object(r.a)({},"xs"===a.maxWidth&&Object(n.a)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),a.maxWidth&&"xs"!==a.maxWidth&&Object(n.a)({},e.breakpoints.up(a.maxWidth),{maxWidth:"".concat(e.breakpoints.values[a.maxWidth]).concat(e.breakpoints.unit)}))})),j=o.forwardRef((function(t,e){var a=Object(d.a)({props:t,name:"MuiContainer"}),n=a.className,o=a.component,u=void 0===o?"div":o,l=a.disableGutters,b=void 0!==l&&l,j=a.fixed,g=void 0!==j&&j,O=a.maxWidth,v=void 0===O?"lg":O,W=Object(i.a)(a,x),k=Object(r.a)({},a,{component:u,disableGutters:b,fixed:g,maxWidth:v}),S=function(t){var e=t.classes,a=t.fixed,n=t.disableGutters,i=t.maxWidth,r={root:["root",i&&"maxWidth".concat(Object(p.a)(String(i))),a&&"fixed",n&&"disableGutters"]};return Object(c.a)(r,m,e)}(k);return Object(h.jsx)(f,Object(r.a)({as:u,ownerState:k,className:Object(s.a)(S.root,n),ref:e},W))}));e.a=j},496:function(t,e,a){"use strict";var n=a(160);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a(161)),r=a(2),o=(0,i.default)((0,r.jsx)("path",{fillOpacity:".9",d:"M12 21.95h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.43c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.6 3.5-3.57v-1.43c0-5.52-4.48-10-10-10s-10 4.48-10 10 4.48 10 10 10zm0-7c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"}),"AlternateEmailTwoTone");e.default=o},568:function(t,e,a){"use strict";a.r(e),a.d(e,"default",(function(){return O}));var n=a(19),i=a(4),r=a(0),o=a(609),s=a(285),c=a(599),d=a(138),u=a(496),l=a.n(u),b=a(606),m=a(463),p=a(139),h=a(61),x=a.n(h),f=a(41),j=a(2);function g(t){return Object(j.jsxs)(b.a,Object(i.a)(Object(i.a)({variant:"body2",color:"text.secondary",align:"center"},t),{},{children:["Copyright \xa9 ",Object(j.jsx)("a",{href:"https://www.curiouscampus.com/",children:"Curious Campus"})," ",(new Date).getFullYear(),"."]}))}function O(){var t=Object(f.d)(),e=r.useState(!1),a=Object(n.a)(e,2),i=a[0],u=a[1],h=r.useState(null),O=Object(n.a)(h,2),v=O[0],W=O[1];return r.useEffect((function(){return null!==v&&(u(!0),x.a.post("http://localhost:9001/api/password_reset_request",{email:v}).then((function(e){u(!1),console.log(e),t.success("Reset Link Sent")})).catch((function(e){u(!1),t.error(e.response.data.message)}))),function(){}}),[v]),i?Object(j.jsx)(d.a,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",width:"100%"},children:Object(j.jsx)(p.a,{})}):Object(j.jsxs)(m.a,{component:"main",maxWidth:"xs",children:[Object(j.jsx)(s.a,{}),Object(j.jsxs)(d.a,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:[Object(j.jsx)(l.a,{sx:{fontSize:80}}),Object(j.jsx)(b.a,{component:"h1",variant:"h5",children:"Forgot Password"}),Object(j.jsxs)(d.a,{component:"form",onSubmit:function(t){t.preventDefault();var e=new FormData(t.currentTarget);W(e.get("email"))},noValidate:!0,sx:{mt:1},children:[Object(j.jsx)(c.a,{margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0}),Object(j.jsx)(o.a,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2,padding:2},children:"Send Reset OTP"})]})]}),Object(j.jsx)(g,{sx:{mt:8,mb:4}})]})}}}]);
//# sourceMappingURL=10.a3432060.chunk.js.map