"use strict";(self.webpackChunk_minimal_minimal_kit_react=self.webpackChunk_minimal_minimal_kit_react||[]).push([[8958],{67871:function(e,n,r){r.d(n,{Z:function(){return v}});var t=r(1413),i=r(45987),s=r(65406),a=r.n(s),o=r(57829),l=r(61113),c=r(47723),d=r(29466),u=r(3404),m=r(46417),x=["links","activeLast"];function h(e){var n=e.links,r=e.activeLast,s=void 0!==r&&r,a=(0,i.Z)(e,x),c=n[n.length-1].name,d=n.map((function(e){return(0,m.jsx)(p,{link:e},e.name)})),h=n.map((function(e){return(0,m.jsx)("div",{children:e.name!==c?(0,m.jsx)(p,{link:e}):(0,m.jsx)(l.Z,{variant:"body2",sx:{maxWidth:260,overflow:"hidden",whiteSpace:"nowrap",color:"text.disabled",textOverflow:"ellipsis"},children:c})},e.name)}));return(0,m.jsx)(u.Z,(0,t.Z)((0,t.Z)({separator:(0,m.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})},a),{},{children:s?d:h}))}function p(e){var n=e.link,r=n.href,t=n.name,i=n.icon;return(0,m.jsxs)(c.Z,{variant:"body2",component:d.rU,to:r||"#",sx:{lineHeight:2,display:"flex",alignItems:"center",color:"text.primary","& > div":{display:"inherit"}},children:[i&&(0,m.jsx)(o.Z,{sx:{mr:1,"& svg":{width:20,height:20}},children:i}),t]},t)}var f=["links","action","heading","moreLink","sx"];function v(e){var n=e.links,r=e.action,s=e.heading,d=e.moreLink,u=void 0===d?[]:d,x=e.sx,p=(0,i.Z)(e,f);return(0,m.jsxs)(o.Z,{sx:(0,t.Z)({mb:5},x),children:[(0,m.jsxs)(o.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,m.jsxs)(o.Z,{sx:{flexGrow:1},children:[(0,m.jsx)(l.Z,{variant:"h4",gutterBottom:!0,children:s}),(0,m.jsx)(h,(0,t.Z)({links:n},p))]}),r&&(0,m.jsx)(o.Z,{sx:{flexShrink:0},children:r})]}),(0,m.jsx)(o.Z,{sx:{mt:2},children:a()(u)?(0,m.jsx)(c.Z,{href:u,target:"_blank",rel:"noopener",variant:"body2",children:u}):u.map((function(e){return(0,m.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}},41307:function(e,n,r){r.d(n,{Z:function(){return s}});var t=r(29439),i=r(47313);function s(e){var n=(0,i.useState)(e||!1),r=(0,t.Z)(n,2),s=r[0],a=r[1];return{toggle:s,onToggle:function(){return a(!s)},onOpen:function(){return a(!0)},onClose:function(){return a(!1)},setToggle:a}}},33405:function(e,n,r){r.d(n,{Z:function(){return S}});var t=r(15861),i=r(87757),s=r.n(i),a=r(28089),o=r(75627),l=r(1432),c=r(66149),d=r(33604),u=r(96467),m=r(35898),x=r(57829),h=r(19536),p=r(4117),f=r(69099),v=r(32703),j=r(95597),Z=r(38204),b=r(59616),g=r(36287),y=r(92719),w=r(37980),k=function(){var e=(0,t.Z)(s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.Z.post(g.bl.billingAddress.create,n,!0);case 3:return(r=e.sent)&&r.status&&"200"===r.status.toString()&&(0,y.WI)((0,w.y$)(r.data)),e.abrupt("return",r);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}(),C=r(46417);function S(e){var n=e.open,r=e.onClose,i=e.onNextStep,b=(e.onCreateBilling,a.Ry().shape({surename:a.Z_().required("Surename is required"),name:a.Z_().required("Name is required"),street:a.Z_().required("Street is required"),building:a.Z_().required("Building is required"),index:a.Z_().required("Index is required"),tin:a.Z_().required("TIN is required")})),g={surename:"",name:"",country:j.hW[0].label,phone:"",street:"",building:"",flat:"",index:"",tin:"",isDefault:!0},y=(0,o.cI)({resolver:(0,l.X)(b),defaultValues:g}),w=y.handleSubmit,S=y.formState.isSubmitting,I=function(){var e=(0,t.Z)(s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k(n);case 3:i(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(n){return e.apply(this,arguments)}}();return(0,C.jsxs)(c.Z,{fullWidth:!0,maxWidth:"sm",open:n,onClose:r,children:[(0,C.jsx)(d.Z,{children:"Add new address"}),(0,C.jsxs)(Z.RV,{methods:y,onSubmit:w(I),children:[(0,C.jsx)(u.Z,{children:(0,C.jsxs)(m.Z,{spacing:3,children:[(0,C.jsxs)(x.Z,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[(0,C.jsx)(Z.au,{name:"surename",label:"Sure Name*"}),(0,C.jsx)(Z.au,{name:"name",label:"Name*"})]}),(0,C.jsx)(Z.au,{name:"phone",label:"Phone Number*"}),(0,C.jsx)(Z.Cc,{name:"country",label:"Country",children:j.hW.map((function(e){return(0,C.jsx)("option",{value:e.label,children:e.label},e.code)}))}),(0,C.jsx)(Z.au,{name:"street",label:"The outside*"}),(0,C.jsxs)(x.Z,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[(0,C.jsx)(Z.au,{name:"building",label:"House, building*"}),(0,C.jsx)(Z.au,{name:"flat",label:"Flat"})]}),(0,C.jsxs)(x.Z,{sx:{display:"grid",rowGap:3,columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[(0,C.jsx)(Z.au,{name:"index",label:"Index*"}),(0,C.jsx)(Z.au,{name:"tin",label:"TIN"})]}),(0,C.jsx)(Z.jb,{name:"isDefault",label:"Use this address as default.",sx:{mt:3}})]})}),(0,C.jsx)(h.Z,{}),(0,C.jsxs)(p.Z,{children:[(0,C.jsx)(v.Z,{type:"submit",variant:"contained",loading:S,children:"Add this Address"}),(0,C.jsx)(f.Z,{color:"inherit",variant:"outlined",onClick:r,children:"Cancel"})]})]})]})}},98479:function(e,n,r){r.d(n,{Z:function(){return V}});var t=r(15861),i=r(1413),s=r(29439),a=r(87757),o=r.n(a),l=r(41895),c=r(28089),d=r(47313),u=r(97890),m=r(75627),x=(r(1432),r(32703)),h=r(73428),p=r(19536),f=r(35898),v=r(48175),j=r(95597),Z=r(38204),b=r(54285),g=r(57829),y=r(61113),w=r(69099),k=(r(76221),r(42593)),C=r(46417);function S(){var e=(0,m.Gc)(),n=e.control,r=e.setValue,t=e.watch,i=(0,m.Dq)({control:n,name:"items"}),s=i.fields,a=i.append,o=i.remove,c=t();return(0,C.jsxs)(g.Z,{sx:{p:3},children:[(0,C.jsx)(y.Z,{variant:"h6",sx:{color:"text.disabled",mb:3},children:"Details:"}),(0,C.jsx)(f.Z,{divider:(0,C.jsx)(p.Z,{flexItem:!0,sx:{borderStyle:"dashed"}}),spacing:3,children:s.map((function(e,n){return(0,C.jsxs)(f.Z,{alignItems:"flex-end",spacing:1.5,children:[(0,C.jsxs)(g.Z,{sx:{display:"grid",rowGap:3,columnGap:2,alignItems:"center",gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(2, 1fr)"}},children:[(0,C.jsx)(Z.au,{size:"small",name:"items[".concat(n,"].url"),label:"Link to the product*",InputLabelProps:{shrink:!0}}),(0,C.jsx)(y.Z,{children:"Choose products on the Portuguese localization of the site of the brand you need, there is a wider range and current prices for the product you are interested in"}),(0,C.jsx)(Z.au,{size:"small",name:"items[".concat(n,"].product"),label:"Name to the product*",InputLabelProps:{shrink:!0}}),(0,C.jsx)(y.Z,{children:"For accuracy, copy the name of the product on the website of the brand you are interested in"}),(0,C.jsx)(Z.au,{size:"small",name:"items[".concat(n,"].vendor"),label:"Vendor to code*",InputLabelProps:{shrink:!0}}),(0,C.jsx)(y.Z,{children:"The exact article number will help the flawless redemption of your order"}),(0,C.jsx)(Z.au,{type:"number",size:"small",name:"items[".concat(n,"].price"),label:"Price this product*",InputLabelProps:{shrink:!0}}),(0,C.jsxs)(g.Z,{sx:{display:"grid",rowGap:3,alignItems:"center",columnGap:2,gridTemplateColumns:{xs:"repeat(1, 1fr)",sm:"repeat(3, 1fr)"}},children:[(0,C.jsx)(Z.au,{size:"small",name:"items[".concat(n,"].size"),label:"Size*",InputLabelProps:{shrink:!0}}),(0,C.jsx)(Z.au,{size:"small",name:"items[".concat(n,"].color"),label:"Color*",InputLabelProps:{shrink:!0}}),(0,C.jsx)(Z.au,{type:"number",size:"small",name:"items[".concat(n,"].quantify"),label:"Quantify*",InputLabelProps:{shrink:!0}})]}),(0,C.jsx)(Z.au,{multiline:!0,rows:4,size:"small",name:"items[".concat(n,"].comment"),label:"A comment*",InputLabelProps:{shrink:!0}}),(0,C.jsx)(y.Z,{children:"Leave a comment, for example, specify a different size if yours is out of stock"})]}),(0,C.jsx)(w.Z,{size:"small",color:"error",startIcon:(0,C.jsx)(k.Z,{icon:"eva:trash-2-outline"}),onClick:function(){return function(e){o(e)}(n)},children:"Remove"})]},e.id)}))}),(0,C.jsx)(p.Z,{sx:{my:3,borderStyle:"dashed"}}),(0,C.jsxs)(f.Z,{spacing:2,direction:{xs:"column-reverse",md:"row"},alignItems:{xs:"flex-start",md:"center"},children:[(0,C.jsx)(w.Z,{size:"small",startIcon:(0,C.jsx)(k.Z,{icon:"eva:plus-fill"}),onClick:function(){console.log(c);for(var e=!1,n=0;n<c.items.length;n+=1){var r=c.items[n];if(console.log(r),""===r.url.trim()||""===r.product.trim()||""===r.vendor.trim()||parseFloat(r.price)<=0||""===r.size.trim()||""===r.color.trim()||parseFloat(r.quantify)<=0){e=!0;break}}e?l.h4.show("Should to fill all needed categories","error",5e3):a({url:"",product:"",vendor:"",price:"",size:"",color:"",quantify:1,comment:""})},sx:{flexShrink:0},children:"Add new detail"}),(0,C.jsxs)(f.Z,{spacing:2,justifyContent:"flex-end",direction:{xs:"column",md:"row"},sx:{width:1},children:[(0,C.jsx)(Z.au,{size:"small",label:"Discount",name:"discount",onChange:function(e){return r("discount",Number(e.target.value))},sx:{maxWidth:{md:200}}}),(0,C.jsx)(Z.au,{size:"small",label:"Taxes",name:"taxes",onChange:function(e){return r("taxes",Number(e.target.value))},sx:{maxWidth:{md:200}}})]})]})]})}var I=r(56352),q=r(54982),z=r(78490),T=r(80315),_=r(67250),L=r(41307),D=r(66149),W=r(89840),F=r(62677),G=r(33405);function N(e){var n=e.open,r=e.selected,t=e.onClose,i=e.onSelect,a=e.addressOptions,o=(0,d.useState)(!1),l=(0,s.Z)(o,2),c=l[0],u=l[1];return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(G.Z,{open:c,onClose:function(){u(!1)},onNextStep:function(){},onCreateBilling:function(){}}),(0,C.jsxs)(D.Z,{fullWidth:!0,maxWidth:"xs",open:n,onClose:t,children:[(0,C.jsxs)(f.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{py:2.5,px:3},children:[(0,C.jsx)(y.Z,{variant:"h6",children:" Select address "}),(0,C.jsx)(w.Z,{size:"small",variant:"outlined",startIcon:(0,C.jsx)(k.Z,{icon:"eva:plus-fill"}),sx:{alignSelf:"flex-end"},onClick:function(){u(!c)},children:"Add New"})]}),(0,C.jsx)(F.Z,{sx:{p:1.5,pt:0,maxHeight:640},children:a.map((function(e){return(0,C.jsxs)(W.Z,{selected:r(e._id),onClick:function(){return function(e){i(e),t()}(e)},sx:{p:1.5,borderRadius:1,flexDirection:"column",alignItems:"flex-start"},children:[(0,C.jsxs)(y.Z,{variant:"subtitle2",children:[e.surename," ",e.name]}),(0,C.jsxs)(y.Z,{variant:"caption",sx:{color:"primary.main",my:.5,fontWeight:"fontWeightMedium"},children:[e.phone,", ",e.country]}),(0,C.jsxs)(y.Z,{variant:"body2",sx:{color:"text.secondary"},children:[e.index,",",e.building," ",e.flat,",",e.street,", ",e.tin]})]},e._id)}))})]})]})}function P(){var e=(0,m.Gc)(),n=e.watch,r=e.setValue,t=e.formState.errors,i=(0,_.Z)("up","md"),a=(0,I.v9)((function(e){return e.billingAddress})).addressList,o=n();(0,d.useEffect)((function(){if(o.items.length>0){var e=o.items[0];o.invoiceTo&&null!==o.invoiceTo&&o.invoiceTo._id?e.url.length>0&&e.product.length>0&&e.vendor.length>0&&e.size.length>0&&e.color.length>0&&parseFloat(e.price)>0&&parseFloat(e.quantify)>0?g(2):g(1):g(0)}}),[o]);var l=(0,L.Z)(),c=(l.toggle,l.onOpen,l.onClose,(0,L.Z)()),u=c.toggle,x=c.onOpen,h=c.onClose,v=(o.invoiceFrom,o.invoiceTo),j=(0,d.useState)(0),Z=(0,s.Z)(j,2),b=Z[0],g=Z[1];return(0,C.jsxs)(f.Z,{spacing:{xs:2,md:5},direction:{xs:"column",md:"row"},divider:(0,C.jsx)(p.Z,{flexItem:!0,orientation:i?"vertical":"horizontal",sx:{borderStyle:"dashed"}}),sx:{p:3},children:[(0,C.jsxs)(f.Z,{sx:{width:1},children:[(0,C.jsx)(f.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:1},children:(0,C.jsx)(y.Z,{variant:"h6",sx:{color:"text.disabled"},children:"Status:"})}),(0,C.jsx)(q.Z,{activeStep:b,alternativeLabel:!0,children:["Choice your recipient address","Fill the form of order information ","Confirm your order information again"].map((function(e,n){return(0,C.jsx)(z.Z,{children:(0,C.jsx)(T.Z,{children:e})},e)}))})]}),(0,C.jsxs)(f.Z,{sx:{width:1},children:[(0,C.jsxs)(f.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{mb:1},children:[(0,C.jsx)(y.Z,{variant:"h6",sx:{color:"text.disabled"},children:"Recipient's address and details:"}),(0,C.jsx)(w.Z,{size:"small",startIcon:(0,C.jsx)(k.Z,{icon:v?"eva:edit-fill":"eva:plus-fill"}),onClick:x,children:v?"Change":"Add"}),(0,C.jsx)(N,{open:u,onClose:h,selected:function(e){return(null===v||void 0===v?void 0:v._id)===e},onSelect:function(e){return r("invoiceTo",e)},addressOptions:a})]}),v?(0,C.jsx)(A,{address:v}):(0,C.jsx)(y.Z,{typography:"caption",sx:{color:"error.main"},children:t.invoiceTo?t.invoiceTo.message:null})]})]})}function A(e){var n=e.address;return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(y.Z,{variant:"subtitle2",children:[n.surename," ",n.name]}),(0,C.jsxs)(y.Z,{variant:"body2",sx:{mt:1,mb:.5},children:[n.index,",",n.building," ",n.flat,", ",n.tin]}),(0,C.jsxs)(y.Z,{variant:"body2",children:[n.phone,",",n.country]})]})}var R=r(10251);function V(e){var n=e.isEdit,r=e.currentInvoice,a=(0,u.s0)(),g=((0,b.Z)().user,(0,d.useState)(!1)),y=(0,s.Z)(g,2),w=y[0],k=(y[1],(0,d.useState)(!1)),I=(0,s.Z)(k,2),q=I[0],z=I[1],T=(c.Ry().shape({createDate:c.Z_().nullable().required("Create date is required"),dueDate:c.Z_().nullable().required("Due date is required"),invoiceTo:c.nK().nullable().required("Invoice to is required")}),(0,d.useMemo)((function(){return{createDate:(null===r||void 0===r?void 0:r.createDate)||null,dueDate:(null===r||void 0===r?void 0:r.dueDate)||null,taxes:(null===r||void 0===r?void 0:r.taxes)||"",status:(null===r||void 0===r?void 0:r.status)||"draft",discount:(null===r||void 0===r?void 0:r.discount)||"",invoiceFrom:(null===r||void 0===r?void 0:r.invoiceFrom)||j.Fr[0],invoiceTo:(null===r||void 0===r?void 0:r.invoiceTo)||null,items:(null===r||void 0===r?void 0:r.items)||[{url:"",product:"",vendor:"",price:1,size:"",color:"",quantify:1,comment:""}]}}),[r])),_=(0,m.cI)({defaultValues:T}),L=_.reset,D=_.watch,W=_.handleSubmit,F=_.formState.isSubmitting,G=D();(0,d.useEffect)((function(){n&&r&&L(T),n||L(T)}),[n,r]);var N=(0,i.Z)((0,i.Z)({},G),{},{items:G.items.map((function(e){return(0,i.Z)((0,i.Z)({},e),{},{total:e.quantify*e.price})}))}),A=function(){var e=(0,t.Z)(o().mark((function e(){var n,r,t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=G.invoiceTo,console.log(G.items),null===n||void 0===n._id?l.h4.show("Select Your Recipient address","error",5e3):([],t=[],(r={}).recipient=n._id,r.status="draft",r.indexes=t,r.items=G.items,(0,R.VW)(r));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=(0,t.Z)(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),e.prev=1,e.next=4,new Promise((function(e){return setTimeout(e,500)}));case 4:L(),z(!1),a(v.vB.invoice.list),console.log(JSON.stringify(N,null,2)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();return(0,C.jsxs)(Z.RV,{methods:_,children:[(0,C.jsxs)(h.Z,{children:[(0,C.jsx)(P,{}),(0,C.jsx)(p.Z,{sx:{my:3,borderStyle:"dashed"}}),(0,C.jsx)(S,{})]}),(0,C.jsxs)(f.Z,{justifyContent:"flex-end",direction:"row",spacing:2,sx:{mt:3},children:[(0,C.jsx)(x.Z,{color:"inherit",size:"medium",variant:"contained",loading:w&&F,onClick:W(A),children:"Confirm & Save as Draft"}),(0,C.jsx)(x.Z,{size:"medium",variant:"contained",loading:q&&F,onClick:W(V),children:"Confirm & Send"})]})]})}}}]);