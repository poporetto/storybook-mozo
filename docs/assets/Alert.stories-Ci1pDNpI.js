import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";function r({variant:a="primary",children:o,className:c="",dismissible:d,onDismiss:R,...S}){const M=["alert",`alert-${a}`,d?"alert-dismissible fade show":"",c].filter(Boolean).join(" ");return e.jsxs("div",{className:M,role:"alert",...S,children:[o,d&&e.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:R})]})}function T({children:a,className:o="",...c}){return e.jsx("h4",{className:`alert-heading ${o}`.trim(),...c,children:a})}function D(a){return e.jsx("a",{className:"alert-link",...a})}r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'info'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},dismissible:{required:!1,tsType:{name:"boolean"},description:""},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};T.__docgenInfo={description:"",methods:[],displayName:"AlertHeading",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};D.__docgenInfo={description:"",methods:[],displayName:"AlertLink"};const q={title:"Mozo/Alert",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark"]}}},s={args:{variant:"primary",children:"This is a primary alert with Mozo brand color — check it out!"}},i={render:()=>e.jsxs(r,{variant:"primary",children:[e.jsx(T,{children:"Well done!"}),e.jsx("p",{children:"You successfully read this important alert message from the Mozo design system."})]})},n={render:()=>e.jsxs(r,{variant:"primary",children:["This is a primary alert with ",e.jsx(D,{href:"#",children:"an example link"}),". Give it a click."]})},t={render:function(){return e.jsx(r,{variant:"warning",dismissible:!0,onDismiss:()=>window.alert("Dismissed"),children:"You can close this alert by clicking the close button."})}},l={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-2",style:{width:400},children:[e.jsx(r,{variant:"primary",children:"Primary (Mozo brand)"}),e.jsx(r,{variant:"secondary",children:"Secondary"}),e.jsx(r,{variant:"success",children:"Success"}),e.jsx(r,{variant:"danger",children:"Danger"}),e.jsx(r,{variant:"warning",children:"Warning"}),e.jsx(r,{variant:"info",children:"Info"})]})};var m,u,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    children: 'This is a primary alert with Mozo brand color — check it out!'
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,g,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Alert variant="primary">
      <AlertHeading>Well done!</AlertHeading>
      <p>You successfully read this important alert message from the Mozo design system.</p>
    </Alert>
}`,...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,v,A;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Alert variant="primary">
      This is a primary alert with <AlertLink href="#">an example link</AlertLink>. Give it a click.
    </Alert>
}`,...(A=(v=n.parameters)==null?void 0:v.docs)==null?void 0:A.source}}};var x,w,b;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: function DismissibleAlert() {
    return <Alert variant="warning" dismissible onDismiss={() => window.alert('Dismissed')}>
        You can close this alert by clicking the close button.
      </Alert>;
  }
}`,...(b=(w=t.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var j,k,N;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-2" style={{
    width: 400
  }}>
      <Alert variant="primary">Primary (Mozo brand)</Alert>
      <Alert variant="secondary">Secondary</Alert>
      <Alert variant="success">Success</Alert>
      <Alert variant="danger">Danger</Alert>
      <Alert variant="warning">Warning</Alert>
      <Alert variant="info">Info</Alert>
    </div>
}`,...(N=(k=l.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const z=["Primary","WithHeading","WithLink","Dismissible","AllVariants"];export{l as AllVariants,t as Dismissible,s as Primary,i as WithHeading,n as WithLink,z as __namedExportsOrder,q as default};
