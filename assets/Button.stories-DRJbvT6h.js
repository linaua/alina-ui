import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./react-C184PLS3.js";import{t as n}from"./jsx-runtime-B5xpDIur.js";var r,i,a=e((()=>{t(),r=n(),i=({primary:e=!1,size:t=`medium`,backgroundColor:n,label:i,...a})=>{let o=e?`storybook-button--primary`:`storybook-button--secondary`;return(0,r.jsx)(`button`,{type:`button`,className:[`storybook-button`,`storybook-button--${t}`,o].join(` `),style:{backgroundColor:n},...a,children:i})},i.__docgenInfo={description:`Primary UI component for user interaction`,methods:[],displayName:`Button`,props:{primary:{required:!1,tsType:{name:`boolean`},description:`Is this the principal call to action on the page?`,defaultValue:{value:`false`,computed:!1}},backgroundColor:{required:!1,tsType:{name:`string`},description:`What background color to use`},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium' | 'large'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`},{name:`literal`,value:`'large'`}]},description:`How large should the button be?`,defaultValue:{value:`'medium'`,computed:!1}},label:{required:!0,tsType:{name:`string`},description:`Button contents`},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Optional click handler`}}}})),o,s,c,l,u,d,f;e((()=>{a(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Example/Button`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{backgroundColor:{control:`color`}},args:{onClick:o()}},c={args:{primary:!0,label:`Button`}},l={args:{label:`Button`}},u={args:{size:`large`,label:`Button`}},d={args:{size:`small`,label:`Button`}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: 'Button'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Button'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Button'
  }
}`,...d.parameters?.docs?.source}}},f=[`Primary`,`Secondary`,`Large`,`Small`]}))();export{u as Large,c as Primary,l as Secondary,d as Small,f as __namedExportsOrder,s as default};