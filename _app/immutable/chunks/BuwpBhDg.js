var In=Array.isArray,Vt=Array.prototype.indexOf,Nn=Array.from,Pn=Object.defineProperty,_t=Object.getOwnPropertyDescriptor,Gt=Object.getOwnPropertyDescriptors,bn=Object.prototype,Fn=Array.prototype,$t=Object.getPrototypeOf;const Cn=()=>{};function qn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const g=2,Et=4,at=8,st=16,k=32,Y=64,U=128,E=256,H=512,v=1024,D=2048,b=4096,P=8192,z=16384,Kt=32768,yt=65536,Yn=1<<17,Zt=1<<19,gt=1<<20,ct=Symbol("$state"),Ln=Symbol("legacy props");function mt(t){return t===this.v}function Wt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Tt(t){return!Wt(t,this.v)}function zt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Jt(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Qt(t){throw new Error("https://svelte.dev/e/effect_orphan")}function Xt(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function jn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Mn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Bn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Un(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function tn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function nn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let J=!1;function Hn(){J=!0}const Vn=1,Gn=2,$n=4,Kn=8,Zn=16,Wn=1,zn=2,rn="[",en="[!",ln="]",xt={},Jn=Symbol();function At(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let f=null;function vt(t){f=t}function Qn(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!n&&(f.l={s:null,u:null,r1:[],r2:ut(!1)})}function Xn(t){const n=f;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];K(a.effect),$(a.reaction),Pt(a.fn)}}finally{K(r),$(e)}}f=n.p,n.m=!0}return{}}function Q(){return!J||f!==null&&f.l===null}function ut(t,n){var r={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return r}function tr(t){return an(ut(t))}function nr(t,n=!1){var e;const r=ut(t);return n||(r.equals=Tt),J&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function an(t){return u!==null&&!y&&(u.f&g)!==0&&(T===null?yn([t]):T.push(t)),t}function rr(t,n){return u!==null&&!y&&Q()&&(u.f&(g|st))!==0&&(T===null||!T.includes(t))&&nn(),sn(t,n)}function sn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Mt(),kt(t,D),Q()&&o!==null&&(o.f&v)!==0&&(o.f&(k|Y))===0&&(x===null?gn([t]):x.push(t))),n}function kt(t,n){var r=t.reactions;if(r!==null)for(var e=Q(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;(i&D)===0&&(!e&&s===o||(A(s,n),(i&(v|E))!==0&&((i&g)!==0?kt(s,b):tt(s))))}}let S=!1;function er(t){S=t}let m;function C(t){if(t===null)throw At(),xt;return m=t}function lr(){return C(N(m))}function ar(t){if(S){if(N(m)!==null)throw At(),xt;m=t}}function sr(t=1){if(S){for(var n=t,r=m;n--;)r=N(r);m=r}}function ur(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===ln){if(t===0)return n;t-=1}else(r===rn||r===en)&&(t+=1)}var e=N(n);n.remove(),n=e}}var pt,un,on,Rt,Dt;function or(){if(pt===void 0){pt=window,un=document,on=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;Rt=_t(n,"firstChild").get,Dt=_t(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return Rt.call(t)}function N(t){return Dt.call(t)}function fr(t,n){if(!S)return rt(t);var r=rt(m);if(r===null)r=m.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),C(e),e}return C(r),r}function ir(t,n){if(!S){var r=rt(t);return r instanceof Comment&&r.data===""?N(r):r}return m}function _r(t,n=1,r=!1){let e=S?m:t;for(var l;n--;)l=e,e=N(e);if(!S)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=nt();return e===null?l==null||l.after(s):e.before(s),C(s),s}return C(e),e}function cr(t){t.textContent=""}function Ot(t){var n=g|D,r=u!==null&&(u.f&g)!==0?u:null;return o===null||r!==null&&(r.f&E)!==0?n|=E:o.f|=gt,{ctx:f,deps:null,effects:null,equals:mt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function vr(t){const n=Ot(t);return n.equals=Tt,n}function St(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)I(n[r])}}function fn(t){for(var n=t.parent;n!==null;){if((n.f&g)===0)return n;n=n.parent}return null}function _n(t){var n,r=o;K(fn(t));try{St(t),n=Ut(t)}finally{K(r)}return n}function It(t){var n=_n(t),r=(R||(t.f&E)!==0)&&t.deps!==null?b:v;A(t,r),t.equals(n)||(t.v=n,t.wv=Mt())}function Nt(t){o===null&&u===null&&Qt(),u!==null&&(u.f&E)!==0&&o===null&&Jt(),ot&&zt()}function cn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function L(t,n,r,e=!0){var l=(t&Y)!==0,a=o,s={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,wv:0};if(r)try{ft(s),s.f|=Kt}catch(w){throw I(s),w}else n!==null&&tt(s);var i=r&&s.deps===null&&s.first===null&&s.nodes_start===null&&s.teardown===null&&(s.f&(gt|U))===0;if(!i&&!l&&e&&(a!==null&&cn(s,a),u!==null&&(u.f&g)!==0)){var _=u;(_.effects??(_.effects=[])).push(s)}return s}function pr(t){Nt();var n=o!==null&&(o.f&k)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Pt(t);return e}}function hr(t){return Nt(),vn(t)}function dr(t){const n=L(Y,t,!0);return(r={})=>new Promise(e=>{r.outro?dn(n,()=>{I(n),e(void 0)}):(I(n),e(void 0))})}function Pt(t){return L(Et,t,!1)}function vn(t){return L(at,t,!0)}function wr(t,n=[],r=Ot){const e=n.map(r);return pn(()=>t(...e.map(On)))}function pn(t,n=0){return L(at|st|n,t,!0)}function Er(t,n=!0){return L(at|k,t,!0,n)}function bt(t){var n=t.teardown;if(n!==null){const r=ot,e=u;dt(!0),$(null);try{n.call(null)}finally{dt(r),$(e)}}}function Ft(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;I(r,n),r=e}}function hn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&k)===0&&I(n),n=r}}function I(t,n=!0){var r=!1;if((n||(t.f&Zt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:N(e);e.remove(),e=a}r=!0}Ft(t,n&&!r),W(t,0),A(t,z);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();bt(t);var i=t.parent;i!==null&&i.first!==null&&Ct(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ct(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function dn(t,n){var r=[];qt(t,r,!0),wn(r,()=>{I(t),n&&n()})}function wn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function qt(t,n,r){if((t.f&P)===0){if(t.f^=P,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&yt)!==0||(e.f&k)!==0;qt(e,n,a?r:!1),e=l}}}function yr(t){Yt(t,!0)}function Yt(t,n){if((t.f&P)!==0){t.f^=P,(t.f&v)===0&&(t.f^=v),j(t)&&(A(t,D),tt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&yt)!==0||(r.f&k)!==0;Yt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let q=[],et=[];function Lt(){var t=q;q=[],wt(t)}function En(){var t=et;et=[],wt(t)}function gr(t){q.length===0&&queueMicrotask(Lt),q.push(t)}function ht(){q.length>0&&Lt(),et.length>0&&En()}let B=!1,V=!1,G=null,O=!1,ot=!1;function dt(t){ot=t}let F=[];let u=null,y=!1;function $(t){u=t}let o=null;function K(t){o=t}let T=null;function yn(t){T=t}let c=null,d=0,x=null;function gn(t){x=t}let jt=1,Z=0,R=!1;function Mt(){return++jt}function j(t){var p;var n=t.f;if((n&D)!==0)return!0;if((n&b)!==0){var r=t.deps,e=(n&E)!==0;if(r!==null){var l,a,s=(n&H)!==0,i=e&&o!==null&&!R,_=r.length;if(s||i){var w=t,M=w.parent;for(l=0;l<_;l++)a=r[l],(s||!((p=a==null?void 0:a.reactions)!=null&&p.includes(w)))&&(a.reactions??(a.reactions=[])).push(w);s&&(w.f^=H),i&&M!==null&&(M.f&E)===0&&(w.f^=E)}for(l=0;l<_;l++)if(a=r[l],j(a)&&It(a),a.wv>t.wv)return!0}(!e||o!==null&&!R)&&A(t,v)}return!1}function mn(t,n){for(var r=n;r!==null;){if((r.f&U)!==0)try{r.fn(t);return}catch{r.f^=U}r=r.parent}throw B=!1,t}function Tn(t){return(t.f&z)===0&&(t.parent===null||(t.parent.f&U)===0)}function X(t,n,r,e){if(B){if(r===null&&(B=!1),Tn(n))throw t;return}r!==null&&(B=!0);{mn(t,n);return}}function Bt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&g)!==0?Bt(a,n,!1):n===a&&(r?A(a,D):(a.f&v)!==0&&A(a,b),tt(a))}}function Ut(t){var it;var n=c,r=d,e=x,l=u,a=R,s=T,i=f,_=y,w=t.f;c=null,d=0,x=null,R=(w&E)!==0&&(y||!O||u===null),u=(w&(k|Y))===0?t:null,T=null,vt(t.ctx),y=!1,Z++;try{var M=(0,t.fn)(),p=t.deps;if(c!==null){var h;if(W(t,d),p!==null&&d>0)for(p.length=d+c.length,h=0;h<c.length;h++)p[d+h]=c[h];else t.deps=p=c;if(!R)for(h=d;h<p.length;h++)((it=p[h]).reactions??(it.reactions=[])).push(t)}else p!==null&&d<p.length&&(W(t,d),p.length=d);if(Q()&&x!==null&&!y&&p!==null&&(t.f&(g|b|D))===0)for(h=0;h<x.length;h++)Bt(x[h],t);return l!==null&&Z++,M}finally{c=n,d=r,x=e,u=l,R=a,T=s,vt(i),y=_}}function xn(t,n){let r=n.reactions;if(r!==null){var e=Vt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&g)!==0&&(c===null||!c.includes(n))&&(A(n,b),(n.f&(E|H))===0&&(n.f^=H),St(n),W(n,0))}function W(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)xn(t,r[e])}function ft(t){var n=t.f;if((n&z)===0){A(t,v);var r=o,e=f,l=O;o=t,O=!0;try{(n&st)!==0?hn(t):Ft(t),bt(t);var a=Ut(t);t.teardown=typeof a=="function"?a:null,t.wv=jt;var s=t.deps,i}catch(_){X(_,t,r,e||t.ctx)}finally{O=l,o=r}}}function An(){try{Xt()}catch(t){if(G!==null)X(t,G,null);else throw t}}function Ht(){var t=O;try{var n=0;for(O=!0;F.length>0;){n++>1e3&&An();var r=F,e=r.length;F=[];for(var l=0;l<e;l++){var a=r[l];(a.f&v)===0&&(a.f^=v);var s=Rn(a);kn(s)}}}finally{V=!1,O=t,G=null}}function kn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(z|P))===0)try{j(e)&&(ft(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ct(e):e.fn=null))}catch(l){X(l,e,null,e.ctx)}}}function tt(t){V||(V=!0,queueMicrotask(Ht));for(var n=G=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(Y|k))!==0){if((r&v)===0)return;n.f^=v}}F.push(n)}function Rn(t){for(var n=[],r=t.first;r!==null;){var e=r.f,l=(e&k)!==0,a=l&&(e&v)!==0;if(!a&&(e&P)===0){if((e&Et)!==0)n.push(r);else if(l)r.f^=v;else{var s=u;try{u=r,j(r)&&ft(r)}catch(w){X(w,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Dn(t){var n;for(ht();F.length>0;)V=!0,Ht(),ht();return n}async function mr(){await Promise.resolve(),Dn()}function On(t){var n=t.f,r=(n&g)!==0;if(u!==null&&!y){T!==null&&T.includes(t)&&tn();var e=u.deps;t.rv<Z&&(t.rv=Z,c===null&&e!==null&&e[d]===t?d++:c===null?c=[t]:(!R||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&E)===0&&(l.f^=E)}return r&&(l=t,j(l)&&It(l)),t.v}function Tr(t){var n=y;try{return y=!0,t()}finally{y=n}}const Sn=-7169;function A(t,n){t.f=t.f&Sn|n}function xr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ct in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ct in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=$t(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Gt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{qn as $,Er as A,S as B,Qn as C,f as D,Xn as E,Pn as F,$ as G,rn as H,K as I,u as J,pn as K,Zt as L,pr as M,J as N,Tr as O,yt as P,Cn as Q,I as R,ct as S,fr as T,Jn as U,ar as V,on as W,Wn as X,zn as Y,hr as Z,wt as _,Fn as a,xr as a0,Ot as a1,Hn as a2,ir as a3,wr as a4,_r as a5,Q as a6,vn as a7,Pt as a8,tr as a9,un as aa,sr as ab,en as ac,ur as ad,yr as ae,dn as af,gr as ag,Mn as ah,Yn as ai,vr as aj,$n as ak,Tt as al,nr as am,Kn as an,Ln as ao,Gn as ap,Vn as aq,Zn as ar,Dn as as,mr as at,Wt as au,Un as b,rr as c,_t as d,o as e,Bn as f,On as g,$t as h,In as i,or as j,rt as k,N as l,xt as m,er as n,bn as o,C as p,lr as q,m as r,ut as s,ln as t,At as u,jn as v,cr as w,Nn as x,dr as y,nt as z};
