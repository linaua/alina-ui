import{n as e}from"./chunk-zsgVPwQN.js";import{t}from"./react-C184PLS3.js";import{t as n}from"./jsx-runtime-B5xpDIur.js";function r({columns:e,data:t,onRowClick:n,loading:r}){return(0,i.jsx)(`div`,{style:{overflowX:`auto`,borderRadius:`12px`,border:`1px solid var(--color-border)`},children:(0,i.jsxs)(`table`,{style:{width:`100%`,borderCollapse:`collapse`,fontSize:`0.875rem`},children:[(0,i.jsx)(`thead`,{children:(0,i.jsx)(`tr`,{style:{backgroundColor:`var(--color-bg-subtle)`},children:e.map(e=>(0,i.jsx)(`th`,{style:{padding:`12px 16px`,textAlign:`left`,fontWeight:600,color:`var(--color-text-muted)`,borderBottom:`1px solid var(--color-border)`,width:e.width,whiteSpace:`nowrap`},children:e.header},String(e.key)))})}),(0,i.jsx)(`tbody`,{children:r?Array.from({length:5}).map((t,n)=>(0,i.jsx)(`tr`,{children:e.map(e=>(0,i.jsx)(`td`,{style:{padding:`12px 16px`},children:(0,i.jsx)(`div`,{className:`animate-pulse`,style:{height:16,backgroundColor:`var(--color-border)`,borderRadius:4}})},String(e.key)))},n)):t.map((r,a)=>(0,i.jsx)(`tr`,{onClick:()=>n?.(r),style:{borderBottom:a<t.length-1?`1px solid var(--color-border)`:`none`,cursor:n?`pointer`:`default`,transition:`background-color 0.1s ease`},children:e.map(e=>(0,i.jsx)(`td`,{style:{padding:`12px 16px`,color:`var(--color-text)`},children:e.render?e.render(r):String(r[e.key]??``)},String(e.key)))},a))})]})})}var i,a=e((()=>{t(),i=n(),r.__docgenInfo={description:``,methods:[],displayName:`Table`,props:{columns:{required:!0,tsType:{name:`Array`,elements:[{name:`Column`,elements:[{name:`T`}],raw:`Column<T>`}],raw:`Column<T>[]`},description:``},data:{required:!0,tsType:{name:`Array`,elements:[{name:`T`}],raw:`T[]`},description:``},onRowClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(row: T) => void`,signature:{arguments:[{type:{name:`T`},name:`row`}],return:{name:`void`}}},description:``},loading:{required:!1,tsType:{name:`boolean`},description:``}}}})),o,s,c;e((()=>{a(),o={title:`Components/Table`,component:r,tags:[`autodocs`]},s={args:{columns:[{key:`name`,header:`Name`,width:`200px`},{key:`role`,header:`Role`},{key:`status`,header:`Status`}],data:[{id:1,name:`Alina Gordiy`,role:`Frontend Developer`,status:`Active`},{id:2,name:`Oleksandr K.`,role:`Designer`,status:`Inactive`}]}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      key: 'name',
      header: 'Name',
      width: '200px'
    }, {
      key: 'role',
      header: 'Role'
    }, {
      key: 'status',
      header: 'Status'
    }],
    data: [{
      id: 1,
      name: 'Alina Gordiy',
      role: 'Frontend Developer',
      status: 'Active'
    }, {
      id: 2,
      name: 'Oleksandr K.',
      role: 'Designer',
      status: 'Inactive'
    }]
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`]}))();export{s as Default,c as __namedExportsOrder,o as default};