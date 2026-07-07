import{c as l,u as c,j as e,P as s,G as o}from"./index-D5iBF_fk.js";import"./react-vendor-Cf2IDCUb.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=l("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=l("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=l("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);function g(){const t=s.shortName.slice(0,1).toUpperCase(),a=c();return e.jsx("div",{className:"h-full overflow-auto p-4 sm:p-8",children:e.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-5",children:[e.jsx("div",{className:"size-20 shrink-0 rounded-2xl bg-gradient-primary grid place-items-center text-3xl font-display font-bold text-primary-foreground shadow-glow",children:t}),e.jsxs("div",{children:[e.jsx("h1",{className:"font-display text-2xl sm:text-3xl font-bold tracking-tight",children:s.name}),e.jsx("p",{className:"text-sm text-muted-foreground",children:a(s.title,s.titleFa)})]})]}),e.jsx("p",{className:"text-foreground/90 leading-relaxed text-balance",children:a(s.bio,s.bioFa)}),e.jsxs("div",{className:"grid sm:grid-cols-2 gap-3 text-sm",children:[e.jsx(i,{icon:e.jsx(m,{className:"size-4"}),label:s.email,href:`mailto:${s.email}`}),e.jsx(i,{icon:e.jsx(d,{className:"size-4"}),label:"smrsan.github.io",href:s.website}),e.jsx(i,{icon:e.jsx(o,{className:"size-4"}),label:"github.com/smrsan",href:s.github}),e.jsx(i,{icon:e.jsx(x,{className:"size-4"}),label:"linkedin.com/in/rz-ndf",href:s.linkedin})]})]})})}function i({icon:t,label:a,href:r}){const n=e.jsxs(e.Fragment,{children:[t,a]});return e.jsx("div",{className:"glass rounded-lg p-3 flex items-center gap-2 text-foreground/80",children:r?e.jsx("a",{href:r,target:"_blank",rel:"noreferrer",className:"flex items-center gap-2 hover:text-primary transition",children:n}):n})}export{g as AboutApp};
