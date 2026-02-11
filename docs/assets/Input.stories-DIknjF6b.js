import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";function r({label:c,hint:n,error:i,size:m,id:z,className:I="",...$}){const a=z??`mozo-input-${Math.random().toString(36).slice(2,9)}`,d=!!i;return e.jsxs("div",{className:"mb-3",children:[c&&e.jsx("label",{htmlFor:a,className:"form-label",children:c}),e.jsx("input",{id:a,className:`form-control ${m?`form-control-${m}`:""} ${d?"is-invalid":""} ${I}`.trim(),"aria-invalid":d,"aria-describedby":n?`${a}-hint`:d?`${a}-error`:void 0,...$}),n&&e.jsx("div",{id:`${a}-hint`,className:"form-text",children:n}),i&&e.jsx("div",{id:`${a}-error`,className:"invalid-feedback",children:i})]})}r.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},hint:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'lg'"}]},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["InputHTMLAttributes"]};const D={title:"Mozo/Input",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","lg"]}}},s={args:{label:"Email address",placeholder:"name@example.com"}},l={args:{label:"Password",type:"password",hint:"We'll never share your details with anyone else."}},t={args:{label:"Username",error:"Please choose a username.",defaultValue:"short"}},o={render:()=>e.jsxs("div",{style:{width:320},children:[e.jsx(r,{label:"Small",size:"sm",placeholder:"Small"}),e.jsx(r,{label:"Default",placeholder:"Default"}),e.jsx(r,{label:"Large",size:"lg",placeholder:"Large"})]})};var p,u,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Email address',
    placeholder: 'name@example.com'
  }
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,f,b;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    hint: 'We\\'ll never share your details with anyone else.'
  }
}`,...(b=(f=l.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,y,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    error: 'Please choose a username.',
    defaultValue: 'short'
  }
}`,...(v=(y=t.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var j,S,w;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 320
  }}>
      <Input label="Small" size="sm" placeholder="Small" />
      <Input label="Default" placeholder="Default" />
      <Input label="Large" size="lg" placeholder="Large" />
    </div>
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};const T=["Default","WithHint","WithError","Sizes"];export{s as Default,o as Sizes,t as WithError,l as WithHint,T as __namedExportsOrder,D as default};
