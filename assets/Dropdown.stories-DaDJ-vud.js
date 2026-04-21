import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{t as r}from"./jsx-runtime-B5xpDIur.js";import{n as i,r as a,t as o}from"./es-B3i02thm.js";import{n as s,t as c}from"./Button-Jc2LB5uR.js";var l,u,d,f=e((()=>{l=t(n(),1),o(),u=r(),d=({trigger:e,options:t})=>{let[n,r]=(0,l.useState)(!1),o=(0,l.useRef)(null);return(0,l.useEffect)(()=>{let e=e=>{o.current&&!o.current.contains(e.target)&&r(!1)};return document.addEventListener(`mousedown`,e),()=>document.removeEventListener(`mousedown`,e)},[]),(0,u.jsxs)(`div`,{ref:o,style:{position:`relative`,display:`inline-block`},children:[(0,u.jsx)(`div`,{onClick:()=>r(!n),style:{cursor:`pointer`},children:e}),(0,u.jsx)(a,{children:n&&(0,u.jsx)(i.div,{initial:{opacity:0,y:10,scale:.95},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:10,scale:.95},style:{position:`absolute`,top:`100%`,right:0,marginTop:`8px`,minWidth:`160px`,backgroundColor:`var(--color-bg)`,border:`1.5px solid var(--color-border)`,borderRadius:`8px`,boxShadow:`0 10px 15px -3px rgba(0,0,0,0.1)`,zIndex:1e3,padding:`4px`},children:t.map(e=>(0,u.jsx)(`div`,{onClick:()=>{e.onClick(),r(!1)},style:{padding:`8px 12px`,cursor:`pointer`,borderRadius:`6px`,color:`var(--color-text)`,fontSize:`0.875rem`},onMouseEnter:e=>e.currentTarget.style.backgroundColor=`var(--color-border)`,onMouseLeave:e=>e.currentTarget.style.backgroundColor=`transparent`,children:e.label},e.id))})})]})},d.__docgenInfo={description:``,methods:[],displayName:`Dropdown`,props:{trigger:{required:!0,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:``},options:{required:!0,tsType:{name:`Array`,elements:[{name:`DropdownOption`}],raw:`DropdownOption[]`},description:``}}}})),p,m,h,g;e((()=>{f(),s(),p=r(),m={title:`Components/Dropdown`,component:d},h={args:{trigger:(0,p.jsx)(c,{variant:`outline`,children:`Menu settings ⚙️`}),options:[{id:`1`,label:`Edit profile`,onClick:()=>console.log(`Edit`)},{id:`2`,label:`Change password`,onClick:()=>console.log(`Password`)},{id:`3`,label:`Exit`,onClick:()=>console.log(`Exit`)}]}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <Button variant="outline">Menu settings ⚙️</Button>,
    options: [{
      id: '1',
      label: 'Edit profile',
      onClick: () => console.log('Edit')
    }, {
      id: '2',
      label: 'Change password',
      onClick: () => console.log('Password')
    }, {
      id: '3',
      label: 'Exit',
      onClick: () => console.log('Exit')
    }]
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`]}))();export{h as Default,g as __namedExportsOrder,m as default};