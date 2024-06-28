"use strict";(self.webpackChunkmy_project=self.webpackChunkmy_project||[]).push([[5064],{65064:(Re,S,s)=>{s.r(S),s.d(S,{ProvidersPage:()=>H,default:()=>fe});var e=s(92132),y=s(21272),w=s(7441),Z=s(7537),ee=s(61485),se=s(99248),ie=s(6239),te=s(83997),ae=s(90151),re=s(68074),ne=s(67030),z=s(85963),de=s(42455),le=s(38413),oe=s(55356),ue=s(4198),ce=s(35513),_e=s(26127),q=s(90361),P=s(33363),b=s(30893),ge=s(98765),me=s(25641),pe=s(88353),r=s(2129),Ee=s(41909),he=s(39404),x=s(54894),R=s(74930),Pe=s(37679),Me=s(60043),ve=s(61535),i=s(33544),n=s(14938),Te=s(77965),t=s(12083);const T=({description:l,disabled:M,intlLabel:p,error:_,name:c,onChange:v,placeholder:d,providerToEditName:E,type:m,value:u})=>{const{formatMessage:o}=(0,x.A)(),h=c==="noName"?`${window.strapi.backendURL}/api/connect/${E}/callback`:u,f=o({id:p.id,defaultMessage:p.defaultMessage},{provider:E,...p.values}),g=l?o({id:l.id,defaultMessage:l.defaultMessage},{provider:E,...l.values}):"";if(m==="bool")return(0,e.jsx)(w.l,{"aria-label":c,checked:u,disabled:M,hint:g,label:f,name:c,offLabel:o({id:"app.components.ToggleCheckbox.off-label",defaultMessage:"Off"}),onLabel:o({id:"app.components.ToggleCheckbox.on-label",defaultMessage:"On"}),onChange:D=>{v({target:{name:c,value:D.target.checked}})}});const I=d?o({id:d.id,defaultMessage:d.defaultMessage},{...d.values}):"",B=_?o({id:_,defaultMessage:_}):"";return(0,e.jsx)(Z.k,{"aria-label":c,disabled:M,error:B,label:f,name:c,onChange:v,placeholder:I,type:m,value:h})};T.defaultProps={description:null,disabled:!1,error:"",placeholder:null,value:""},T.propTypes={description:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}),disabled:i.bool,error:i.string,intlLabel:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}).isRequired,name:i.string.isRequired,onChange:i.func.isRequired,placeholder:i.shape({id:i.string.isRequired,defaultMessage:i.string.isRequired,values:i.object}),providerToEditName:i.string.isRequired,type:i.string.isRequired,value:i.oneOfType([i.bool,i.string])};const C=({headerBreadcrumbs:l,initialData:M,isSubmiting:p,layout:_,isOpen:c,onSubmit:v,onToggle:d,providerToEditName:E})=>{const{formatMessage:m}=(0,x.A)();return c?(0,e.jsxs)(ee.k,{onClose:d,labelledBy:"title",children:[(0,e.jsx)(se.r,{children:(0,e.jsx)(Pe.B,{label:l.join(", "),children:l.map((u,o,h)=>(0,e.jsx)(Me.m,{isCurrent:o===h.length-1,children:u},u))})}),(0,e.jsx)(ve.l1,{onSubmit:u=>v(u),initialValues:M,validationSchema:_.schema,validateOnChange:!1,children:({errors:u,handleChange:o,values:h})=>(0,e.jsxs)(r.lV,{children:[(0,e.jsx)(ie.c,{children:(0,e.jsx)(te.s,{direction:"column",alignItems:"stretch",gap:1,children:(0,e.jsx)(ae.x,{gap:5,children:_.form.map(f=>f.map(g=>(0,e.jsx)(re.E,{col:g.size,xs:12,children:(0,e.jsx)(T,{...g,error:u[g.name],onChange:o,value:h[g.name],providerToEditName:E})},g.name)))})})}),(0,e.jsx)(ne.j,{startActions:(0,e.jsx)(z.$,{variant:"tertiary",onClick:d,type:"button",children:m({id:"app.components.Button.cancel",defaultMessage:"Cancel"})}),endActions:(0,e.jsx)(z.$,{type:"submit",loading:p,children:m({id:"global.save",defaultMessage:"Save"})})})]})})]}):null};C.defaultProps={initialData:null,providerToEditName:null},C.propTypes={headerBreadcrumbs:i.arrayOf(i.string).isRequired,initialData:i.object,layout:i.shape({form:i.arrayOf(i.array),schema:i.object}).isRequired,isOpen:i.bool.isRequired,isSubmiting:i.bool.isRequired,onSubmit:i.func.isRequired,onToggle:i.func.isRequired,providerToEditName:i.string};const F={id:(0,n.g)("PopUpForm.Providers.redirectURL.front-end.label"),defaultMessage:"The redirect URL to your front-end app"},N={id:"http://www.client-app.com",defaultMessage:"http://www.client-app.com"},U={id:(0,n.g)("PopUpForm.Providers.enabled.description"),defaultMessage:"If disabled, users won't be able to use this provider."},W={id:(0,n.g)("PopUpForm.Providers.enabled.label"),defaultMessage:"Enable"},Q={id:(0,n.g)("PopUpForm.Providers.key.label"),defaultMessage:"Client ID"},$={id:(0,n.g)("PopUpForm.Providers.redirectURL.label"),defaultMessage:"The redirect URL to add in your {provider} application configurations"},O={id:(0,n.g)("PopUpForm.Providers.key.placeholder"),defaultMessage:"TEXT"},k={id:(0,n.g)("PopUpForm.Providers.secret.label"),defaultMessage:"Client Secret"},A={email:{form:[[{intlLabel:W,name:"enabled",type:"bool",description:U,size:6}]],schema:t.Ik().shape({enabled:t.lc().required(r.iW.required)})},providers:{form:[[{intlLabel:W,name:"enabled",type:"bool",description:U,size:6,validations:{required:!0}}],[{intlLabel:Q,name:"key",type:"text",placeholder:O,size:12,validations:{required:!0}}],[{intlLabel:k,name:"secret",type:"text",placeholder:O,size:12,validations:{required:!0}}],[{intlLabel:F,placeholder:N,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:$,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:t.Ik().shape({enabled:t.lc().required(r.iW.required),key:t.Yj().when("enabled",{is:!0,then:t.Yj().required(r.iW.required),otherwise:t.Yj()}),secret:t.Yj().when("enabled",{is:!0,then:t.Yj().required(r.iW.required),otherwise:t.Yj()}),callback:t.Yj().when("enabled",{is:!0,then:t.Yj().required(r.iW.required),otherwise:t.Yj()})})},providersWithSubdomain:{form:[[{intlLabel:W,name:"enabled",type:"bool",description:U,size:6,validations:{required:!0}}],[{intlLabel:Q,name:"key",type:"text",placeholder:O,size:12,validations:{required:!0}}],[{intlLabel:k,name:"secret",type:"text",placeholder:O,size:12,validations:{required:!0}}],[{intlLabel:{id:(0,n.g)({id:"PopUpForm.Providers.jwksurl.label"}),defaultMessage:"JWKS URL"},name:"jwksurl",type:"text",placeholder:O,size:12,validations:{required:!1}}],[{intlLabel:{id:(0,n.g)("PopUpForm.Providers.subdomain.label"),defaultMessage:"Host URI (Subdomain)"},name:"subdomain",type:"text",placeholder:{id:(0,n.g)("PopUpForm.Providers.subdomain.placeholder"),defaultMessage:"my.subdomain.com"},size:12,validations:{required:!0}}],[{intlLabel:F,placeholder:N,name:"callback",type:"text",size:12,validations:{required:!0}}],[{intlLabel:$,name:"noName",type:"text",validations:{},size:12,disabled:!0}]],schema:t.Ik().shape({enabled:t.lc().required(r.iW.required),key:t.Yj().when("enabled",{is:!0,then:t.Yj().required(r.iW.required),otherwise:t.Yj()}),secret:t.Yj().when("enabled",{is:!0,then:t.Yj().required(r.iW.required),otherwise:t.Yj()}),subdomain:t.Yj().when("enabled",{is:!0,then:t.Yj().required(r.iW.required),otherwise:t.Yj()}),callback:t.Yj().when("enabled",{is:!0,then:t.Yj().required(r.iW.required),otherwise:t.Yj()})})}},H=()=>{const{formatMessage:l,locale:M}=(0,x.A)(),p=(0,R.useQueryClient)(),{trackUsage:_}=(0,r.z1)(),[c,v]=y.useState(!1),[d,E]=y.useState(null),m=(0,r.hN)(),{lockApp:u,unlockApp:o}=(0,r.MA)(),{get:h,put:f}=(0,r.ry)(),{formatAPIError:g}=(0,r.wq)(),I=(0,r.QM)(M,{sensitivity:"base"});(0,r.L4)();const{isLoading:B,allowedActions:{canUpdate:D}}=(0,r.ec)({update:n.P.updateProviders}),{isLoading:be,data:K}=(0,R.useQuery)(["users-permissions","get-providers"],async()=>{const{data:a}=await h("/users-permissions/providers");return a},{initialData:{}}),V=(0,R.useMutation)(a=>f("/users-permissions/providers",a),{async onSuccess(){await p.invalidateQueries(["users-permissions","providers"]),m({type:"success",message:{id:(0,n.g)("notification.success.submit")}}),_("didEditAuthenticationProvider"),Y(),o()},onError(a){m({type:"warning",message:g(a)}),o()},refetchActive:!1}),L=Object.entries(K).reduce((a,[j,ye])=>{const{icon:J,enabled:Le,subdomain:xe}=ye;return a.push({name:j,icon:J==="envelope"?["fas","envelope"]:["fab",J],enabled:Le,subdomain:xe}),a},[]).sort((a,j)=>I.compare(a.name,j.name)),Oe=be||B,G=y.useMemo(()=>d?!!L.find(j=>j.name===d)?.subdomain:!1,[L,d]),De=y.useMemo(()=>d==="email"?A.email:G?A.providersWithSubdomain:A.providers,[d,G]),Y=()=>{v(a=>!a)},X=a=>{D&&(E(a.name),Y())},je=async a=>{u(),_("willEditAuthenticationProvider"),V.mutate({providers:{...K,[d]:a}})};return(0,e.jsxs)(de.P,{children:[(0,e.jsx)(r.x7,{name:l({id:(0,n.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),(0,e.jsxs)(le.g,{children:[(0,e.jsx)(oe.Q,{title:l({id:(0,n.g)("HeaderNav.link.providers"),defaultMessage:"Providers"})}),Oe?(0,e.jsx)(r.Bl,{}):(0,e.jsx)(ue.s,{children:(0,e.jsxs)(ce.X,{colCount:3,rowCount:L.length+1,children:[(0,e.jsx)(_e.d,{children:(0,e.jsxs)(q.Tr,{children:[(0,e.jsx)(P.Th,{children:(0,e.jsx)(b.o,{variant:"sigma",textColor:"neutral600",children:l({id:"global.name",defaultMessage:"Name"})})}),(0,e.jsx)(P.Th,{children:(0,e.jsx)(b.o,{variant:"sigma",textColor:"neutral600",children:l({id:(0,n.g)("Providers.status"),defaultMessage:"Status"})})}),(0,e.jsx)(P.Th,{children:(0,e.jsx)(b.o,{variant:"sigma",children:(0,e.jsx)(ge.s,{children:l({id:"global.settings",defaultMessage:"Settings"})})})})]})}),(0,e.jsx)(me.N,{children:L.map(a=>(0,e.jsxs)(q.Tr,{...(0,r.qM)({fn:()=>X(a),condition:D}),children:[(0,e.jsx)(P.Td,{width:"45%",children:(0,e.jsx)(b.o,{fontWeight:"semiBold",textColor:"neutral800",children:a.name})}),(0,e.jsx)(P.Td,{width:"65%",children:(0,e.jsx)(b.o,{textColor:a.enabled?"success600":"danger600","data-testid":`enable-${a.name}`,children:a.enabled?l({id:"global.enabled",defaultMessage:"Enabled"}):l({id:"global.disabled",defaultMessage:"Disabled"})})}),(0,e.jsx)(P.Td,{...r.dG,children:D&&(0,e.jsx)(pe.K,{onClick:()=>X(a),noBorder:!0,icon:(0,e.jsx)(Ee.A,{}),label:"Edit"})})]},a.name))})]})})]}),(0,e.jsx)(C,{initialData:K[d],isOpen:c,isSubmiting:V.isLoading,layout:De,headerBreadcrumbs:[l({id:(0,n.g)("PopUpForm.header.edit.providers"),defaultMessage:"Edit Provider"}),he(d)],onToggle:Y,onSubmit:je,providerToEditName:d})]})},fe=()=>(0,e.jsx)(r.kz,{permissions:n.P.readProviders,children:(0,e.jsx)(H,{})})}}]);
