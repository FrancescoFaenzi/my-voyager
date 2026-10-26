import{S as C,N as k,c as U,a as N}from"./scheme-B5yDGcZu.js";import{i as L,o as E,n as p,d as _,h as O}from"./hash-DiV5pi0r.js";function F(n){return n.kind==="starred"?JSON.stringify([n.kind,n.id]):JSON.stringify([n.kind,n.platform,n.accountHash,n.conversationId,n.id])}function R(n,t){if(n.kind==="highlight")return n.platform!==void 0&&L(t.href,n.platform);if(t.protocol!=="https:")return!1;const a=C.createDefault().resolveByUrl(t.href);if(!a)return!1;const r=n.conversationId.includes(":")?n.conversationId.split(":")[0]:null;return r?a.id===r:k.has(a.id)}function G(n){const t=new URL(n.conversationUrl);if(!R(n,t))throw new TypeError("Saved item URL is not an allowed conversation URL");const a=n.kind==="highlight"?`gv-highlight-${n.id}`:`gv-turn-${n.turnId}`;return t.hash=a,t.href}function H(n){return`starred:${n.conversationId}:${n.turnId}`}function K(n,t){const a=n.map(e=>({id:H(e),kind:"starred",conversationId:e.conversationId,conversationUrl:e.conversationUrl,conversationTitle:e.conversationTitle,turnId:e.turnId,content:e.content,text:e.text,account:e.account,savedAt:e.starredAt,firstSeenAt:e.starredAt})),r=t.filter(e=>e.deletedAt===void 0&&L(e.conversationUrl,e.platform)).map(e=>({id:e.id,kind:"highlight",conversationId:e.conversationId,conversationUrl:e.conversationUrl,conversationTitle:e.conversationTitle,turnId:e.turnId,content:e.anchor.quote.exact,note:e.note,color:e.color,accountHash:e.accountHash,platform:e.platform,savedAt:e.updatedAt,firstSeenAt:e.createdAt}));return[...a,...r].sort((e,i)=>i.savedAt-e.savedAt||e.id.localeCompare(i.id))}function z(n,t,a){const r=a.trim().toLocaleLowerCase();return n.filter(e=>t==="starred"&&e.kind!=="starred"||t==="highlights"&&e.kind!=="highlight"?!1:r?[e.text??e.content,e.note,e.conversationTitle,e.conversationUrl,e.turnId,new Date(e.savedAt).toISOString()].filter(l=>typeof l=="string"&&l.length>0).join(`
`).toLocaleLowerCase().includes(r):!0)}function $(n,t){return t.trim()?"pm_starred_no_results":n==="highlights"?"savedLibraryNoHighlights":n==="starred"?"noStarredMessages":"savedLibraryEmpty"}function j(n,t){return t===0?n("savedLibraryUnassigned"):n("savedLibraryAccountNumber").replace("{number}",String(t))}const J=`/* The shared confirm card, inside its own shadow root (see tokens.css).
 * Host-only rules are \`!important\`: a page rule that matches the host (\`div {}\`,
 * a reset) beats a normal \`:host\` declaration whatever its specificity.
 * left/top stay inline, written by the layer's placement. */
:host {
  position: fixed !important;
  z-index: var(--gv-z-top, 2147483647) !important;
  display: block !important;
  margin: 0 !important;
  padding: 0 !important;
  border: 0 !important;
  background: transparent !important;
  transform: none !important;
}

:host([data-gv-rtl]) {
  direction: rtl !important;
}

.gv-confirm {
  box-sizing: border-box;
  inline-size: max-content;
  max-inline-size: min(300px, calc(100vw - 16px));
  padding: 12px;
  border: 1px solid var(--gv-ui-border, oklch(0.92 0.004 250 / 0.7));
  border-radius: 12px;
  background: var(--gv-ui-surface, oklch(0.995 0.002 250));
  color: var(--gv-ui-text, oklch(0.14 0.004 285));
  box-shadow: var(--gv-ui-shadow, 0 6px 20px oklch(0 0 0 / 0.16));
  font-family: var(
    --gv-ui-font,
    ui-sans-serif,
    system-ui,
    -apple-system,
    'Segoe UI',
    Roboto,
    Helvetica,
    Arial,
    sans-serif
  );
  font-size: 13px;
  line-height: 1.4;
  animation: gv-confirm-in var(--gv-ui-motion, 160ms) var(--gv-ui-ease, ease-out);
}

@keyframes gv-confirm-in {
  from {
    opacity: 0;
    transform: translateY(2px);
  }
}

.gv-confirm-message {
  margin: 0 0 10px;
  overflow-wrap: anywhere;
}

/* \`dir=auto\` resolves an English message to LTR; keep it on the RTL start edge. */
:host([data-gv-rtl]) .gv-confirm-message {
  text-align: right;
}

.gv-confirm-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.gv-confirm-button {
  box-sizing: border-box;
  min-block-size: 28px;
  padding: 4px 12px;
  border: 1px solid var(--gv-ui-border, oklch(0.92 0.004 250 / 0.7));
  border-radius: 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
}

.gv-confirm-button:hover {
  background: var(--gv-ui-surface-hover, oklch(0.97 0.003 250));
}

.gv-confirm-button:focus-visible {
  outline: 2px solid var(--gv-ui-focus-ring, oklch(0.601 0.1 140));
  outline-offset: 2px;
}

.gv-confirm-button[data-emphasis='primary'] {
  border-color: transparent;
  background: var(--gv-ui-primary, oklch(0.601 0.1 140));
  color: var(--gv-ui-primary-fg, #ffffff);
}

.gv-confirm[data-tone='danger'] .gv-confirm-button[data-emphasis='primary'] {
  background: var(--gv-ui-danger, oklch(0.55 0.19 25));
  color: var(--gv-ui-danger-fg, oklch(1 0 0));
}

.gv-confirm-button[data-emphasis='primary']:hover {
  filter: brightness(1.06);
}

.gv-confirm-button[data-emphasis='secondary'] {
  color: var(--gv-ui-primary, oklch(0.601 0.1 140));
}
`,M="data-gv-confirm-anchor";let h=null;function Y(n){return h?.popover.close(),h?.settle(null),h=null,n.signal?.aborted?Promise.resolve(null):new Promise(t=>{let a=!1;const r=d=>{a||(a=!0,n.anchor?.removeAttribute(M),h?.popover===e&&(h=null),t(d))},e=E({anchor:n.anchor,side:n.side??"below",align:n.align,css:J,signal:n.signal,onDismiss:()=>r(null)});n.scheme&&(e.host.dataset.gvUiScheme=n.scheme);const i=document.createElement("div");i.className="gv-confirm",i.dataset.tone=n.tone,i.setAttribute("role","alertdialog"),i.setAttribute("aria-labelledby","gv-confirm-message");const l=document.createElement("p");l.className="gv-confirm-message",l.id="gv-confirm-message",l.dir="auto",l.textContent=n.message;const g=document.createElement("div");g.className="gv-confirm-actions";const f=(d,A,s)=>{const o=document.createElement("button");return o.type="button",o.className="gv-confirm-button",o.dataset.emphasis=A,o.textContent=d,o.addEventListener("click",()=>{e.close(),r(s)}),g.append(o),o},b=f(n.cancelLabel??U("pm_cancel"),"cancel",null),S=n.choices.map(d=>f(d.label,d.emphasis??"primary",d.id));i.append(l,g),e.root.append(i),e.place(),n.anchor?.setAttribute(M,""),h={popover:e,settle:r};const x=[...S].reverse().find(d=>d.dataset.emphasis==="primary");(n.tone==="danger"?b:x??S[0]).focus({preventScroll:!0})})}class W{static async sendMessage(t,a){return new Promise((r,e)=>{chrome.runtime.sendMessage({type:t,payload:a},i=>{if(chrome.runtime.lastError){e(new Error(chrome.runtime.lastError.message));return}if(!i||!i.ok){e(new Error(i?.error||"Operation failed"));return}r(i)})})}static decodeStorageChange(t,a){if(t!=="local")return;const r=a[N.SAVED_LIBRARY_STARS];if(!(!r||typeof r!="object"||Array.isArray(r)))return"newValue"in r?r.newValue===void 0?p(void 0):_(r.newValue):"oldValue"in r?p(void 0):void 0}static async getAllStarredMessages(){const t=await this.sendMessage("gv.starred.getAll");return p(t.data)}static async getStarredMessagesForConversation(t){const a=await this.sendMessage("gv.starred.getForConversation",{conversationId:t});return p({messages:{[t]:a.messages}}).messages[t]}static async addStarredMessage(t){await this.sendMessage("gv.starred.add",t)}static async backfillStarredTexts(t,a){await this.sendMessage("gv.starred.backfillTexts",{conversationId:t,entries:a})}static async removeStarredMessage(t,a){await this.sendMessage("gv.starred.remove",{conversationId:t,turnId:a})}static async mergeCloud(t){const a=await this.sendMessage("gv.starred.mergeCloud",t);return{status:a.status,count:a.count}}static async mergeSync(t,a){const r=await this.sendMessage("gv.starred.mergeSync",{...t,accountScope:a});return{status:r.status,count:r.count}}static async isMessageStarred(t,a){return(await this.getStarredMessagesForConversation(t)).some(e=>e.turnId===a)}static async getAllStarredMessagesSorted(){const t=await this.getAllStarredMessages(),a=[];return Object.values(t.messages).forEach(r=>{a.push(...r)}),a.sort((r,e)=>e.starredAt-r.starredAt)}static async reconcileConversationIds(t,a,r){const e=await this.sendMessage("gv.starred.reconcileConversationIds",{targetConversationId:t,sourceConversationIds:a,conversationUrl:r});return p({messages:{[t]:e.messages}}).messages[t]}}const Q="gv.chatgpt.getJumpAccount",X=2e3,T="all",y="unknown",m="unassigned";function P(n,t){if(n.kind==="highlight"&&n.platform)return n.platform;const a=n.conversationId.includes(":")?n.conversationId.split(":")[0]:null,r=t.resolveByUrl(n.conversationUrl);return r?a?a===r.id?r.id:y:k.has(r.id)?r.id:y:y}function D(n,t){if(n.accountHash)return JSON.stringify([t,"hash",n.accountHash]);if(!n.account)return m;const a=t==="gemini"?["hash",O(n.account)]:["star",n.account];return JSON.stringify([t,...a])}function Z(n,t){const a=C.createDefault(),r=[...n].sort((s,o)=>o.savedAt-s.savedAt||s.id.localeCompare(o.id)),e=r.map(s=>{const o=P(s,a);return{item:s,site:o,account:D(s,o)}}),i=new Set(k);e.some(({site:s,account:o})=>s==="chatgpt"&&o!==m)&&i.add("chatgpt");const l=new Set(e.map(({site:s})=>s)),g=a.all().filter(s=>l.has(s.id)).map(({id:s,label:o})=>({id:s,label:o}));l.has(y)&&g.push({id:y,label:""});const f=new Map;for(const{item:s,site:o,account:u}of e){if(!i.has(o))continue;const c=f.get(o)??new Map;c.set(u,Math.min(c.get(u)??1/0,s.firstSeenAt??s.savedAt)),f.set(o,c)}const b=new Map([...f].map(([s,o])=>{const u=[...o].filter(([c])=>c!==m).sort((c,v)=>c[1]-v[1]||c[0].localeCompare(v[0])).map(([c],v)=>({id:c,number:v+1}));return o.has(m)&&u.push({id:m,number:0}),[s,u]})),S=b.get(t.site)??[],x=new Set(z(r,t.kind,t.query)),w=new Map,d=new Map,A=[];for(const{item:s,site:o,account:u}of e){const c=JSON.stringify([o,u,s.conversationId]);if(!w.has(c)&&s.conversationTitle?.trim()&&w.set(c,s.conversationTitle),!x.has(s)||t.site!==T&&t.site!==o||t.account!==T&&i.has(t.site)&&t.account!==u)continue;A.push(s);const v=d.get(c)??{id:c,site:o,account:u,items:[],siteLabel:g.find(I=>I.id===o)?.label??"",accountNumber:b.get(o)?.find(I=>I.id===u)?.number};v.items.push(s),d.set(c,v)}return{items:A,groups:[...d.values()].map(s=>({...s,title:w.get(s.id)})),sites:g,accounts:S}}export{T as A,Q as C,W as S,y as U,F as a,G as b,Y as c,X as d,z as e,j as f,Z as g,R as i,$ as s,K as t};
