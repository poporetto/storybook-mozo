import{j as r}from"./jsx-runtime-DiklIkkE.js";import{B as a}from"./Button-B5ezIrbK.js";import"./index-DRjF_FHU.js";const w={title:"Mozo/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark","link","outline-primary","outline-secondary"]},size:{control:"select",options:["sm","md","lg"]}}},n={args:{children:"Primary button",variant:"primary"}},e={args:{children:"Secondary",variant:"secondary"}},t={args:{children:"Outline primary",variant:"outline-primary"}},i={render:()=>r.jsxs("div",{className:"d-flex flex-wrap gap-2 align-items-center",children:[r.jsx(a,{variant:"primary",size:"sm",children:"Small"}),r.jsx(a,{variant:"primary",size:"md",children:"Medium"}),r.jsx(a,{variant:"primary",size:"lg",children:"Large"})]})},s={render:()=>r.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[r.jsx(a,{variant:"primary",children:"Primary"}),r.jsx(a,{variant:"secondary",children:"Secondary"}),r.jsx(a,{variant:"success",children:"Success"}),r.jsx(a,{variant:"danger",children:"Danger"}),r.jsx(a,{variant:"warning",children:"Warning"}),r.jsx(a,{variant:"info",children:"Info"}),r.jsx(a,{variant:"light",children:"Light"}),r.jsx(a,{variant:"dark",children:"Dark"}),r.jsx(a,{variant:"link",children:"Link"}),r.jsx(a,{variant:"outline-primary",children:"Outline"})]})};var o,c,d;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Primary button',
    variant: 'primary'
  }
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var l,m,u;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Secondary',
    variant: 'secondary'
  }
}`,...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var p,g,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Outline primary',
    variant: 'outline-primary'
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var y,B,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-2 align-items-center">
      <Button variant="primary" size="sm">Small</Button>
      <Button variant="primary" size="md">Medium</Button>
      <Button variant="primary" size="lg">Large</Button>
    </div>
}`,...(x=(B=i.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var h,j,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-wrap gap-2">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
      <Button variant="outline-primary">Outline</Button>
    </div>
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};const O=["Primary","Secondary","Outline","Sizes","AllVariants"];export{s as AllVariants,t as Outline,n as Primary,e as Secondary,i as Sizes,O as __namedExportsOrder,w as default};
