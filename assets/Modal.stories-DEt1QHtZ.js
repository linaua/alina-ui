import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{t as r}from"./jsx-runtime-B5xpDIur.js";import{n as i,r as a,t as o}from"./es-B3i02thm.js";import{n as s,t as c}from"./Button-Jc2LB5uR.js";var l,u,d,f,p=e((()=>{l=t(n(),1),o(),u=r(),d={sm:`400px`,md:`560px`,lg:`800px`},f=({isOpen:e,onClose:t,title:n,children:r,size:o=`md`})=>((0,l.useEffect)(()=>{let n=e=>{e.key===`Escape`&&t()};return e&&document.addEventListener(`keydown`,n),()=>document.removeEventListener(`keydown`,n)},[e,t]),(0,l.useEffect)(()=>(document.body.style.overflow=e?`hidden`:``,()=>{document.body.style.overflow=``}),[e]),(0,u.jsx)(a,{children:e&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)(i.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.2},onClick:t,style:{position:`fixed`,inset:0,backgroundColor:`rgba(0,0,0,0.5)`,backdropFilter:`blur(4px)`,zIndex:1e3,display:`flex`,alignItems:`center`,justifyContent:`center`,padding:`16px`},children:(0,u.jsxs)(i.div,{initial:{opacity:0,scale:.95,y:10},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:10},transition:{type:`spring`,stiffness:300,damping:30},onClick:e=>e.stopPropagation(),style:{width:`100%`,maxWidth:d[o],backgroundColor:`var(--color-bg)`,borderRadius:`16px`,boxShadow:`0 25px 50px -12px rgba(0,0,0,0.25)`,overflow:`hidden`,zIndex:1001},children:[n&&(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`space-between`,padding:`20px 24px`,borderBottom:`1px solid var(--color-border)`},children:[(0,u.jsx)(`h2`,{style:{fontSize:`1.25rem`,fontWeight:700},children:n}),(0,u.jsx)(`button`,{onClick:t,style:{background:`none`,border:`none`,cursor:`pointer`,fontSize:`1.25rem`,color:`var(--color-text-muted)`,padding:`4px`},children:`✕`})]}),(0,u.jsx)(`div`,{style:{padding:`24px`},children:r})]},`modal`)},`backdrop`)})})),f.__docgenInfo={description:``,methods:[],displayName:`Modal`,props:{isOpen:{required:!0,tsType:{name:`boolean`},description:``},onClose:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},title:{required:!1,tsType:{name:`string`},description:``},children:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}}}}})),m,h,g,_,v;e((()=>{m=t(n(),1),p(),s(),h=r(),g={title:`Components/Modal`,component:f},_=()=>{let[e,t]=(0,m.useState)(!1);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{onClick:()=>t(!0),children:`Open modal window `}),(0,h.jsxs)(f,{isOpen:e,onClose:()=>t(!1),title:`Confirmation of action `,children:[(0,h.jsx)(`p`,{style:{color:`var(--color-text)`},children:`Are you sure you want to save these changes? This action cannot be undone.`}),(0,h.jsxs)(`div`,{style:{display:`flex`,gap:`12px`,marginTop:`24px`,justifyContent:`flex-end`},children:[(0,h.jsx)(c,{variant:`outline`,onClick:()=>t(!1),children:`Cancel`}),(0,h.jsx)(c,{onClick:()=>t(!1),children:`Confirm`})]})]})]})},_.__docgenInfo={description:``,methods:[],displayName:`Interactive`},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const [isOpen, setIsOpen] = useState(false);
  return <>
      <Button onClick={() => setIsOpen(true)}>Open modal window </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Confirmation of action ">
        <p style={{
        color: 'var(--color-text)'
      }}>
          Are you sure you want to save these changes? This action cannot be undone.
        </p>
        <div style={{
        display: 'flex',
        gap: '12px',
        marginTop: '24px',
        justifyContent: 'flex-end'
      }}>
          <Button variant="outline" onClick={() => setIsOpen(false)}>Cancel</Button>
          <Button onClick={() => setIsOpen(false)}>Confirm</Button>
        </div>
      </Modal>
    </>;
}`,..._.parameters?.docs?.source}}},v=[`Interactive`]}))();export{_ as Interactive,v as __namedExportsOrder,g as default};