import{n as e,o as t}from"./chunk-zsgVPwQN.js";import{t as n}from"./react-C184PLS3.js";import{t as r}from"./jsx-runtime-B5xpDIur.js";import{n as i,t as a}from"./es-B3i02thm.js";var o,s,c=e((()=>{n(),a(),o=r(),s=({checked:e,onChange:t,label:n,disabled:r})=>(0,o.jsxs)(`label`,{style:{display:`inline-flex`,alignItems:`center`,gap:`10px`,cursor:r?`not-allowed`:`pointer`,opacity:r?.5:1},children:[(0,o.jsx)(i.div,{onClick:()=>!r&&t(!e),animate:{backgroundColor:e?`var(--color-primary)`:`#cbd5e1`},style:{width:44,height:24,borderRadius:`9999px`,padding:2,display:`flex`,alignItems:`center`,cursor:r?`not-allowed`:`pointer`},children:(0,o.jsx)(i.div,{animate:{x:e?20:0},transition:{type:`spring`,stiffness:500,damping:30},style:{width:20,height:20,borderRadius:`50%`,backgroundColor:`#ffffff`,boxShadow:`0 1px 3px rgba(0,0,0,0.2)`}})}),n&&(0,o.jsx)(`span`,{style:{fontSize:`0.875rem`,fontWeight:500},children:n})]}),s.__docgenInfo={description:``,methods:[],displayName:`Switch`,props:{checked:{required:!0,tsType:{name:`boolean`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(checked: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`checked`}],return:{name:`void`}}},description:``},label:{required:!1,tsType:{name:`string`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``}}}})),l,u,d,f,p;e((()=>{l=t(n(),1),c(),u=r(),d={title:`Components/Switch`,component:s},f=()=>{let[e,t]=(0,l.useState)(!1);return(0,u.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`12px`},children:[(0,u.jsx)(s,{checked:e,onChange:t}),(0,u.jsx)(`span`,{style:{color:`var(--color-text)`},children:e?`On`:`Off`})]})},f.__docgenInfo={description:``,methods:[],displayName:`Interactive`},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`() => {
  const [enabled, setEnabled] = useState(false);
  return <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '12px'
  }}>
      <Switch checked={enabled} onChange={setEnabled} />
      <span style={{
      color: 'var(--color-text)'
    }}>{enabled ? 'On' : 'Off'}</span>
    </div>;
}`,...f.parameters?.docs?.source}}},p=[`Interactive`]}))();export{f as Interactive,p as __namedExportsOrder,d as default};