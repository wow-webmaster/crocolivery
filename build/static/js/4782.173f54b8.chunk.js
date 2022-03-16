"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[4782],{291:function(e,r,t){t.r(r),t.d(r,{default:function(){return u}});var a=t(43265),o=t(48175),n=t(11338),l=t(71361),i=t(67871),s=t(75316),c=t(46417);function u(){var e=(0,n.Z)().themeStretch;return(0,c.jsx)(l.Z,{title:"Blog: New Post",children:(0,c.jsxs)(a.Z,{maxWidth:!e&&"lg",children:[(0,c.jsx)(i.Z,{heading:"Create a new post",links:[{name:"Dashboard",href:o.vB.root},{name:"Blog",href:o.vB.blog.root},{name:"New Post"}]}),(0,c.jsx)(s.Ge,{})]})})}},3404:function(e,r,t){t.d(r,{Z:function(){return M}});var a=t(93433),o=t(29439),n=t(4942),l=t(87462),i=t(63366),s=t(47313),c=(t(96214),t(83061)),u=t(50317),d=t(88564),m=t(25469),p=t(61113),f=t(17551),h=t(54750),g=t(46417),x=(0,h.Z)((0,g.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),Z=t(67999),v=(0,d.ZP)(Z.Z)((function(e){var r=e.theme;return(0,l.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,l.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,l.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,f._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,f._4)(r.palette.grey[600],.12)})})})),b=(0,d.ZP)(x)({width:24,height:16});var C=function(e){var r=e;return(0,g.jsx)("li",{children:(0,g.jsx)(v,(0,l.Z)({focusRipple:!0},e,{ownerState:r,children:(0,g.jsx)(b,{ownerState:r})}))})},w=t(22131);function y(e){return(0,w.Z)("MuiBreadcrumbs",e)}var k=(0,t(655).Z)("MuiBreadcrumbs",["root","ol","li","separator"]),j=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],B=(0,d.ZP)(p.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,n.Z)({},"& .".concat(k.li),r.li),r.root]}})({}),S=(0,d.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),R=(0,d.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function _(e,r,t,a){return e.reduce((function(o,n,l){return l<e.length-1?o=o.concat(n,(0,g.jsx)(R,{"aria-hidden":!0,className:r,ownerState:a,children:t},"separator-".concat(l))):o.push(n),o}),[])}var M=s.forwardRef((function(e,r){var t=(0,m.Z)({props:e,name:"MuiBreadcrumbs"}),n=t.children,d=t.className,p=t.component,f=void 0===p?"nav":p,h=t.expandText,x=void 0===h?"Show path":h,Z=t.itemsAfterCollapse,v=void 0===Z?1:Z,b=t.itemsBeforeCollapse,w=void 0===b?1:b,k=t.maxItems,R=void 0===k?8:k,M=t.separator,N=void 0===M?"/":M,P=(0,i.Z)(t,j),z=s.useState(!1),A=(0,o.Z)(z,2),I=A[0],T=A[1],L=(0,l.Z)({},t,{component:f,expanded:I,expandText:x,itemsAfterCollapse:v,itemsBeforeCollapse:w,maxItems:R,separator:N}),W=function(e){var r=e.classes;return(0,u.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},y,r)}(L),q=s.useRef(null),D=s.Children.toArray(n).filter((function(e){return s.isValidElement(e)})).map((function(e,r){return(0,g.jsx)("li",{className:W.li,children:e},"child-".concat(r))}));return(0,g.jsx)(B,(0,l.Z)({ref:r,component:f,color:"text.secondary",className:(0,c.Z)(W.root,d),ownerState:L},P,{children:(0,g.jsx)(S,{className:W.ol,ref:q,ownerState:L,children:_(I||R&&D.length<=R?D:function(e){return w+v>=e.length?e:[].concat((0,a.Z)(e.slice(0,w)),[(0,g.jsx)(C,{"aria-label":x,onClick:function(){T(!0);var e=q.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,a.Z)(e.slice(e.length-v,e.length)))}(D),W.separator,N,L)})}))}))}}]);