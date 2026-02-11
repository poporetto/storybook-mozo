import{j as a}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const b={primary:"text-bg-primary",secondary:"text-bg-secondary",success:"text-bg-success",danger:"text-bg-danger",warning:"text-bg-warning",info:"text-bg-info",light:"text-bg-light",dark:"text-bg-dark"};function e({variant:s="primary",children:v,className:y="",pill:x,...f}){const h=x||s==="rounded-pill"?"rounded-pill":"",B=["badge",s==="rounded-pill"?"text-bg-primary":b[s],h,y].filter(Boolean).join(" ");return a.jsx("span",{className:B,...f,children:v})}e.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{variant:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'success'
| 'danger'
| 'warning'
| 'info'
| 'light'
| 'dark'
| 'rounded-pill'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"},{name:"literal",value:"'rounded-pill'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},pill:{required:!1,tsType:{name:"boolean"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};const k={title:"Mozo/Badge",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","rounded-pill"]}}},r={args:{children:"Primary",variant:"primary"}},n={args:{children:"Pill badge",variant:"primary",pill:!0}},i={render:()=>a.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[a.jsx(e,{variant:"primary",children:"Primary"}),a.jsx(e,{variant:"secondary",children:"Secondary"}),a.jsx(e,{variant:"success",children:"Success"}),a.jsx(e,{variant:"danger",children:"Danger"}),a.jsx(e,{variant:"warning",children:"Warning"}),a.jsx(e,{variant:"info",children:"Info"}),a.jsx(e,{variant:"light",children:"Light"}),a.jsx(e,{variant:"dark",children:"Dark"}),a.jsx(e,{variant:"primary",pill:!0,children:"Pill"})]})};var t,l,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    children: 'Primary',
    variant: 'primary'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var o,c,g;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Pill badge',
    variant: 'primary',
    pill: true
  }
}`,...(g=(c=n.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var p,m,u;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-2">
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="danger">Danger</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="info">Info</Badge>
      <Badge variant="light">Light</Badge>
      <Badge variant="dark">Dark</Badge>
      <Badge variant="primary" pill>Pill</Badge>
    </div>
}`,...(u=(m=i.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const N=["Primary","Pill","AllVariants"];export{i as AllVariants,n as Pill,r as Primary,N as __namedExportsOrder,k as default};
