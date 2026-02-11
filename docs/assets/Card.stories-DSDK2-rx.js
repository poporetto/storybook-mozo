import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as g}from"./Button-B5ezIrbK.js";import"./index-DRjF_FHU.js";function d({children:r,className:a="",...t}){return e.jsx("div",{className:`card ${a}`.trim(),...t,children:r})}function T({children:r,className:a="",...t}){return e.jsx("div",{className:`card-header ${a}`.trim(),...t,children:r})}function c({children:r,className:a="",...t}){return e.jsx("div",{className:`card-body ${a}`.trim(),...t,children:r})}function R({children:r,className:a="",...t}){return e.jsx("div",{className:`card-footer ${a}`.trim(),...t,children:r})}function n({children:r,className:a="",...t}){return e.jsx("h5",{className:`card-title ${a}`.trim(),...t,children:r})}function b({children:r,className:a="",...t}){return e.jsx("h6",{className:`card-subtitle mb-2 text-body-secondary ${a}`.trim(),...t,children:r})}function l({children:r,className:a="",...t}){return e.jsx("p",{className:`card-text ${a}`.trim(),...t,children:r})}function _(r){return e.jsx("img",{className:"card-img-top",...r,alt:r.alt??""})}function m(r){return e.jsx("a",{className:"card-link",...r})}d.__docgenInfo={description:"",methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};T.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};c.__docgenInfo={description:"",methods:[],displayName:"CardBody",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};R.__docgenInfo={description:"",methods:[],displayName:"CardFooter",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};n.__docgenInfo={description:"",methods:[],displayName:"CardTitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};b.__docgenInfo={description:"",methods:[],displayName:"CardSubtitle",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};l.__docgenInfo={description:"",methods:[],displayName:"CardText",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{defaultValue:{value:"''",computed:!1},required:!1}},composes:["HTMLAttributes"]};_.__docgenInfo={description:"",methods:[],displayName:"CardImg"};m.__docgenInfo={description:"",methods:[],displayName:"CardLink"};const I={title:"Mozo/Card",component:d,parameters:{layout:"centered"},tags:["autodocs"]},o={render:()=>e.jsx(d,{style:{width:"18rem"},children:e.jsxs(c,{children:[e.jsx(n,{children:"Card title"}),e.jsx(b,{children:"Supporting subtitle"}),e.jsx(l,{children:"Some quick example text for the card. Mozo helps you make your money count for more."}),e.jsx(g,{variant:"primary",children:"Go somewhere"})]})})},s={render:()=>e.jsxs(d,{style:{width:"18rem"},children:[e.jsx(T,{children:"Featured"}),e.jsxs(c,{children:[e.jsx(n,{children:"Special title"}),e.jsx(l,{children:"Content for the card body."}),e.jsx(m,{href:"#",children:"Card link"}),e.jsx(m,{href:"#",children:"Another link"})]}),e.jsx(R,{className:"text-body-secondary",children:"Last updated 2 mins ago"})]})},i={render:()=>e.jsxs(d,{style:{width:"18rem"},children:[e.jsx(_,{src:"https://placehold.co/400x200/11322c/ffffff?text=Mozo",alt:"Card cap"}),e.jsxs(c,{children:[e.jsx(n,{children:"Card with image"}),e.jsx(l,{children:"Image above and content below, using Mozo primary as placeholder."}),e.jsx(g,{variant:"primary",size:"sm",children:"Action"})]})]})};var u,p,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '18rem'
  }}>
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Supporting subtitle</CardSubtitle>
        <CardText>
          Some quick example text for the card. Mozo helps you make your money count for more.
        </CardText>
        <Button variant="primary">Go somewhere</Button>
      </CardBody>
    </Card>
}`,...(h=(p=o.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var f,C,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '18rem'
  }}>
      <CardHeader>Featured</CardHeader>
      <CardBody>
        <CardTitle>Special title</CardTitle>
        <CardText>Content for the card body.</CardText>
        <CardLink href="#">Card link</CardLink>
        <CardLink href="#">Another link</CardLink>
      </CardBody>
      <CardFooter className="text-body-secondary">Last updated 2 mins ago</CardFooter>
    </Card>
}`,...(x=(C=s.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var y,N,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: '18rem'
  }}>
      <CardImg src="https://placehold.co/400x200/11322c/ffffff?text=Mozo" alt="Card cap" />
      <CardBody>
        <CardTitle>Card with image</CardTitle>
        <CardText>Image above and content below, using Mozo primary as placeholder.</CardText>
        <Button variant="primary" size="sm">Action</Button>
      </CardBody>
    </Card>
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};const k=["Default","WithHeaderAndFooter","WithImage"];export{o as Default,s as WithHeaderAndFooter,i as WithImage,k as __namedExportsOrder,I as default};
