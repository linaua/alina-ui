import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./jsx-runtime-B5xpDIur.js";import{n,t as r}from"./Button-Jc2LB5uR.js";var i,a,o,s,c,l,u,d;e((()=>{n(),i=t(),a={title:`Components/Button`,component:r,parameters:{layout:`centered`,docs:{description:{component:`A flexible button component with multiple variants, sizes, and states.`}}},argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`outline`,`ghost`,`danger`]},size:{control:`select`,options:[`sm`,`md`,`lg`]},isLoading:{control:`boolean`},fullWidth:{control:`boolean`},disabled:{control:`boolean`}},tags:[`autodocs`]},o={args:{children:`Button`,variant:`primary`}},s={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,gap:12,flexWrap:`wrap`},children:[`primary`,`secondary`,`outline`,`ghost`,`danger`].map(e=>(0,i.jsx)(r,{variant:e,children:e},e))})},c={render:()=>(0,i.jsx)(`div`,{style:{display:`flex`,gap:12,alignItems:`center`},children:[`sm`,`md`,`lg`].map(e=>(0,i.jsxs)(r,{size:e,children:[`Size `,e]},e))})},l={args:{children:`Loading...`,isLoading:!0}},u={args:{children:`Disabled`,disabled:!0}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'primary'
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>
{(['primary', 'secondary', 'outline', 'ghost', 'danger'] as const).map(v => <Button key={v} variant={v}>{v}</Button>)}
</div>
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    alignItems: 'center'
  }}>
{(['sm', 'md', 'lg'] as const).map(s => <Button key={s} size={s}>Size {s}</Button>)}
</div>
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Loading...',
    isLoading: true
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...u.parameters?.docs?.source}}},d=[`Primary`,`AllVariants`,`AllSizes`,`Loading`,`Disabled`]}))();export{c as AllSizes,s as AllVariants,u as Disabled,l as Loading,o as Primary,d as __namedExportsOrder,a as default};