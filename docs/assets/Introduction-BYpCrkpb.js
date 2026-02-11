import{j as n}from"./jsx-runtime-DiklIkkE.js";import{useMDXComponents as r}from"./index-ChEI-nsM.js";import{M as i}from"./index-Qr-lrUN3.js";import"./index-DRjF_FHU.js";import"./iframe-DHOShGs5.js";import"./index-DIvcuAjW.js";import"./index-D-Mha1DF.js";import"./index-DrFu-skq.js";function o(s){const e={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...s.components};return n.jsxs(n.Fragment,{children:[n.jsx(i,{title:"Mozo/Introduction"}),`
`,n.jsx(e.h1,{id:"mozo-design-system",children:"Mozo Design System"}),`
`,n.jsxs(e.p,{children:["Design system for ",n.jsx(e.a,{href:"https://mozo.com.au/",rel:"nofollow",children:"Mozo – The Money Saving Zone"}),", built with ",n.jsx(e.strong,{children:"Storybook"})," and ",n.jsx(e.strong,{children:"Bootstrap 5"}),"."]}),`
`,n.jsx(e.h2,{id:"brand",children:"Brand"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Primary color:"})," ",n.jsx(e.code,{children:"#11322c"})," (Mozo forest green)"]}),`
`,n.jsx(e.li,{children:"All primary buttons, links, and accents use this color via Bootstrap CSS variables."}),`
`]}),`
`,n.jsx(e.h2,{id:"stack",children:"Stack"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"React"})," + ",n.jsx(e.strong,{children:"TypeScript"})]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Bootstrap 5.3"})," (latest) for layout and components"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Vite"})," for build"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Storybook 8"})," for documentation and development"]}),`
`]}),`
`,n.jsx(e.h2,{id:"components",children:"Components"}),`
`,n.jsx(e.p,{children:"Use the sidebar to explore:"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Button"})," – Primary, secondary, outline, sizes"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Card"})," – Header, body, footer, image"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Badge"})," – Labels and pills"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Input"})," – Form fields with label, hint, error"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Alert"})," – Notifications and messages"]}),`
`]}),`
`,n.jsxs(e.p,{children:["All components are built on Bootstrap classes and themed with the Mozo primary color. Import from ",n.jsx(e.code,{children:"@/components"})," or the specific component path."]}),`
`,n.jsx(e.h2,{id:"usage",children:"Usage"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-tsx",children:`import { Button, Card, Badge, Input, Alert } from '@/components'
`})}),`
`,n.jsx(e.h2,{id:"design-tokens",children:"Design tokens"}),`
`,n.jsxs(e.p,{children:["See ",n.jsx(e.strong,{children:"Mozo / Design Tokens"})," for colors, typography, and spacing. Tokens are defined in ",n.jsx(e.code,{children:"src/design-tokens.ts"})," and applied via ",n.jsx(e.code,{children:"src/styles/mozo-theme.css"}),"."]})]})}function p(s={}){const{wrapper:e}={...r(),...s.components};return e?n.jsx(e,{...s,children:n.jsx(o,{...s})}):o(s)}export{p as default};
