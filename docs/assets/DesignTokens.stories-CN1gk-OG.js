import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const o={color:{primary:"#11322c",primaryEmphasis:"#0a1f1b",primaryBgSubtle:"#d4e0de"},typography:{fontFamily:"var(--bs-font-sans-serif)"}},y={title:"Mozo/Design Tokens",parameters:{layout:"centered"},tags:["autodocs"]},r={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-3",style:{width:320},children:[e.jsxs("div",{children:[e.jsx("div",{className:"small text-body-secondary mb-1",children:"Primary"}),e.jsx("div",{className:"rounded border",style:{width:"100%",height:48,backgroundColor:o.color.primary}}),e.jsx("code",{className:"small",children:o.color.primary})]}),e.jsxs("div",{children:[e.jsx("div",{className:"small text-body-secondary mb-1",children:"Primary emphasis (darker)"}),e.jsx("div",{className:"rounded border",style:{width:"100%",height:48,backgroundColor:o.color.primaryEmphasis}}),e.jsx("code",{className:"small",children:o.color.primaryEmphasis})]}),e.jsxs("div",{children:[e.jsx("div",{className:"small text-body-secondary mb-1",children:"Primary subtle background"}),e.jsx("div",{className:"rounded border",style:{width:"100%",height:48,backgroundColor:o.color.primaryBgSubtle}}),e.jsx("code",{className:"small",children:o.color.primaryBgSubtle})]})]})},s={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-2",children:[e.jsx("p",{style:{fontFamily:o.typography.fontFamily},children:"Body: The quick brown fox jumps over the lazy dog."}),e.jsx("p",{className:"fw-medium",style:{fontFamily:o.typography.fontFamily},children:"Medium: The quick brown fox jumps over the lazy dog."}),e.jsx("p",{className:"fw-bold",style:{fontFamily:o.typography.fontFamily},children:"Bold: The quick brown fox jumps over the lazy dog."})]})};var a,l,d;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-3" style={{
    width: 320
  }}>
      <div>
        <div className="small text-body-secondary mb-1">Primary</div>
        <div className="rounded border" style={{
        width: '100%',
        height: 48,
        backgroundColor: tokens.color.primary
      }} />
        <code className="small">{tokens.color.primary}</code>
      </div>
      <div>
        <div className="small text-body-secondary mb-1">Primary emphasis (darker)</div>
        <div className="rounded border" style={{
        width: '100%',
        height: 48,
        backgroundColor: tokens.color.primaryEmphasis
      }} />
        <code className="small">{tokens.color.primaryEmphasis}</code>
      </div>
      <div>
        <div className="small text-body-secondary mb-1">Primary subtle background</div>
        <div className="rounded border" style={{
        width: '100%',
        height: 48,
        backgroundColor: tokens.color.primaryBgSubtle
      }} />
        <code className="small">{tokens.color.primaryBgSubtle}</code>
      </div>
    </div>
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var i,m,t;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-2">
      <p style={{
      fontFamily: tokens.typography.fontFamily
    }}>
        Body: The quick brown fox jumps over the lazy dog.
      </p>
      <p className="fw-medium" style={{
      fontFamily: tokens.typography.fontFamily
    }}>
        Medium: The quick brown fox jumps over the lazy dog.
      </p>
      <p className="fw-bold" style={{
      fontFamily: tokens.typography.fontFamily
    }}>
        Bold: The quick brown fox jumps over the lazy dog.
      </p>
    </div>
}`,...(t=(m=s.parameters)==null?void 0:m.docs)==null?void 0:t.source}}};const p=["Colors","Typography"];export{r as Colors,s as Typography,p as __namedExportsOrder,y as default};
