import{c as h,b as w,u as v,j as e,P as t,T as u,E as g,S as f,L as j,l as o}from"./index-D5iBF_fk.js";import"./react-vendor-Cf2IDCUb.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=h("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=h("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);function x(){const c=o(!1,!0),l=o("Resume","رزومه"),s=o("Professional Summary","خلاصه حرفه‌ای"),r=o("Experience","سوابق کاری"),b=o("Education","تحصیلات"),$=o("Skills","مهارت‌ها"),N=o("Languages","زبان‌ها"),p=`<!doctype html><html><head><meta charset="utf-8"><title>${t.name} — ${l}</title>
<style>
  @page { size: A4; margin: 18mm; }
  body { font-family: ${c?"'Vazirmatn', 'Inter', -apple-system, system-ui, sans-serif":"'Inter', -apple-system, system-ui, sans-serif"}; color: #111; line-height: 1.5; direction: ${c?"rtl":"ltr"}; }
  h1 { font-size: 24px; margin: 0; }
  h2 { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: #555; margin: 22px 0 8px; border-bottom: 1px solid #ddd; padding-bottom: 4px; }
  .sub { color: #555; font-size: 13px; margin-top: 2px; }
  .meta { color: #777; font-size: 11px; margin-top: 4px; }
  ul { padding: 0; margin: 0; list-style: none; }
  li { margin: 8px 0; }
  .row { display: flex; justify-content: space-between; font-size: 13px; gap: 12px; }
  .row b { color: #111; }
  .row em { color: #777; font-style: normal; white-space: nowrap; }
  p.det { font-size: 12px; color: #333; margin: 2px 0 0; }
  .skills { font-size: 12px; color: #333; }
  .summary { font-size: 12px; color: #333; }
</style></head><body>
<h1>${t.name}</h1>
<div class="sub">${o(t.title,t.titleFa)}</div>
<div class="meta">${t.email} · ${t.website} · ${t.linkedin}</div>
<h2>${s}</h2><p class="summary">${o(t.summary,t.summaryFa)}</p>
<h2>${r}</h2><ul>${u.map(a=>{const n=o(a.role,a.roleFa),i=o(a.highlights,a.highlightsFa),d=a.location&&a.location!=="Tehran, Iran"?`<p class="det">${a.location}</p>`:"";return`<li><div class="row"><b>${n} · ${a.company}</b><em>${a.period}</em></div>${d}<p class="det">${i.join(" ")}</p></li>`}).join("")}</ul>
<h2>${b}</h2><ul>${g.map(a=>{const n=o(a.degree,a.degreeFa),i=o(a.school,a.schoolFa),d=a.location&&a.location!=="Tehran, Iran"?` · ${a.location}`:"";return`<li><div class="row"><b>${n}</b><em>${a.year}</em></div><p class="det">${i}${d}</p></li>`}).join("")}</ul>
<h2>${$}</h2><p class="skills">${f.map(a=>`<strong>${o(a.group,a.groupFa)}:</strong> ${a.items.join(", ")}`).join("<br>")}</p>
<h2>${N}</h2><p class="skills">${j.map(a=>`${o(a.name,a.nameFa)} (${o(a.level,a.levelFa)})`).join(" · ")}</p>
<script>window.onload=()=>{setTimeout(()=>window.print(),200)}<\/script>
</body></html>`,m=window.open("","_blank","noopener,noreferrer,width=900,height=1000");if(!m){const a=new Blob([p],{type:"text/html"}),n=URL.createObjectURL(a),i=document.createElement("a");i.href=n,i.download=`${t.shortName}-resume.html`,i.click(),URL.revokeObjectURL(n);return}m.document.open(),m.document.write(p),m.document.close()}function L(){const c=w(),l=v();return e.jsx("div",{className:"h-full overflow-auto p-6",children:e.jsxs("div",{className:"max-w-2xl mx-auto space-y-6",children:[e.jsxs("header",{className:"flex items-start justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"font-display text-2xl font-bold",children:t.name}),e.jsx("p",{className:"text-sm text-muted-foreground",children:l(t.title,t.titleFa)}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-1",children:[t.email," · ",t.website]})]}),e.jsxs("div",{className:"flex gap-2 ui-unselectable",children:[e.jsxs("button",{onClick:x,className:"px-3 py-1.5 rounded-lg glass text-xs flex items-center gap-1 hover:border-primary/60 transition",title:c("print"),children:[e.jsx(y,{className:"size-3"})," PDF"]}),e.jsxs("a",{href:"#",onClick:s=>{s.preventDefault(),x()},className:"px-3 py-1.5 rounded-lg glass text-xs flex items-center gap-1 hover:border-primary/60 transition",children:[e.jsx(k,{className:"size-3"})," ",c("download")]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 ui-unselectable",children:l("Professional Summary","خلاصه حرفه‌ای")}),e.jsx("p",{className:"text-sm text-foreground/80 leading-relaxed",children:l(t.summary,t.summaryFa)})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 ui-unselectable",children:l("Experience","سوابق کاری")}),e.jsx("ul",{className:"space-y-3",children:u.map(s=>e.jsxs("li",{className:"glass rounded-lg p-3",children:[e.jsxs("div",{className:"flex justify-between gap-3 text-sm",children:[e.jsxs("span",{className:"font-medium",children:[l(s.role,s.roleFa)," · ",s.company]}),e.jsx("span",{className:"text-muted-foreground shrink-0",children:s.period})]}),s.location&&s.location!=="Tehran, Iran"&&e.jsx("p",{className:"text-xs text-muted-foreground mt-0.5",children:s.location}),e.jsx("ul",{className:"mt-2 space-y-1",children:l(s.highlights,s.highlightsFa).map(r=>e.jsx("li",{className:"text-xs text-foreground/70 list-disc ml-4",children:r},r))})]},s.id))})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 ui-unselectable",children:l("Education","تحصیلات")}),e.jsx("ul",{className:"space-y-2",children:g.map(s=>e.jsxs("li",{className:"glass rounded-lg p-3 text-sm",children:[e.jsxs("div",{className:"flex justify-between gap-3",children:[e.jsx("span",{className:"font-medium",children:l(s.degree,s.degreeFa)}),e.jsx("span",{className:"text-muted-foreground",children:s.year})]}),e.jsxs("p",{className:"text-xs text-foreground/70 mt-1",children:[l(s.school,s.schoolFa),s.location&&s.location!=="Tehran, Iran"?` · ${s.location}`:""]})]},`${s.degree}-${s.year}`))})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 ui-unselectable",children:l("Skills","مهارت‌ها")}),e.jsx("div",{className:"space-y-2",children:f.map(s=>e.jsxs("p",{className:"text-sm text-foreground/80",children:[e.jsxs("span",{className:"font-medium",children:[l(s.group,s.groupFa),":"]})," ",s.items.join(", ")]},s.group))})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 ui-unselectable",children:l("Languages","زبان‌ها")}),e.jsx("p",{className:"text-sm text-foreground/80",children:j.map(s=>`${l(s.name,s.nameFa)} (${l(s.level,s.levelFa)})`).join(" · ")})]})]})})}export{L as ResumeApp};
