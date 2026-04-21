import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{t as r}from"./jsx-runtime-B5xpDIur.js";import{n as i,t as a}from"./es-B3i02thm.js";var o,s,c,l=e((()=>{o=t(n(),1),a(),s=r(),c=({tabs:e})=>{let[t,n]=(0,o.useState)(e[0].id);return(0,s.jsxs)(`div`,{children:[(0,s.jsx)(`div`,{style:{display:`flex`,borderBottom:`1px solid var(--color-border)`,marginBottom:`16px`},children:e.map(e=>(0,s.jsxs)(`button`,{onClick:()=>n(e.id),style:{padding:`10px 20px`,border:`none`,background:`none`,cursor:`pointer`,position:`relative`,color:t===e.id?`var(--color-primary)`:`var(--color-text-muted)`},children:[e.label,t===e.id&&(0,s.jsx)(i.div,{layoutId:`activeTab`,style:{position:`absolute`,bottom:-1,left:0,right:0,height:`2px`,backgroundColor:`var(--color-primary)`}})]},e.id))}),(0,s.jsx)(`div`,{children:e.find(e=>e.id===t)?.content})]})},c.__docgenInfo={description:``,methods:[],displayName:`Tabs`,props:{tabs:{required:!0,tsType:{name:`Array`,elements:[{name:`Tab`}],raw:`Tab[]`},description:``}}}})),u,d,f;e((()=>{l(),u={title:`Components/Tabs`,component:c,tags:[`autodocs`]},d={args:{tabs:[{id:`tab1`,label:`General`,content:`General settings content`},{id:`tab2`,label:`Security`,content:`Here are the security settings`},{id:`tab3`,label:`Notification`,content:`Message management`}]}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    tabs: [{
      id: 'tab1',
      label: 'General',
      content: 'General settings content'
    }, {
      id: 'tab2',
      label: 'Security',
      content: 'Here are the security settings'
    }, {
      id: 'tab3',
      label: 'Notification',
      content: 'Message management'
    }]
  }
}`,...d.parameters?.docs?.source}}},f=[`Default`]}))();export{d as Default,f as __namedExportsOrder,u as default};