var t="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function e(){}function n(t,e,n,o,c){t.__svelte_meta={loc:{file:e,line:n,column:o,char:c}}}function o(t){return t()}function c(){return Object.create(null)}function l(t){t.forEach(o)}function s(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t){return 0===Object.keys(t).length}new Set;let r=!1;function u(t,e,n,o){for(;t<e;){const c=t+(e-t>>1);n(c)<=o?t=c+1:e=c}return t}function d(t,e){t.appendChild(e)}function f(t,e,n){const o=h(t);if(!o.getElementById(e)){const t=v("style");t.id=e,t.textContent=n,p(o,t)}}function h(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function p(t,e){d(t.head||t,e)}function m(t,e){if(r){for(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if("HEAD"===t.nodeName){const t=[];for(let n=0;n<e.length;n++){const o=e[n];void 0!==o.claim_order&&t.push(o)}e=t}const n=new Int32Array(e.length+1),o=new Int32Array(e.length);n[0]=-1;let c=0;for(let t=0;t<e.length;t++){const l=e[t].claim_order,s=(c>0&&e[n[c]].claim_order<=l?c+1:u(1,c,(t=>e[n[t]].claim_order),l))-1;o[t]=n[s]+1;const i=s+1;n[i]=t,c=Math.max(i,c)}const l=[],s=[];let i=e.length-1;for(let t=n[c]+1;0!=t;t=o[t-1]){for(l.push(e[t-1]);i>=t;i--)s.push(e[i]);i--}for(;i>=0;i--)s.push(e[i]);l.reverse(),s.sort(((t,e)=>t.claim_order-e.claim_order));for(let e=0,n=0;e<s.length;e++){for(;n<l.length&&s[e].claim_order>=l[n].claim_order;)n++;const o=n<l.length?l[n]:null;t.insertBefore(s[e],o)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);null!==t.actual_end_child&&void 0===t.actual_end_child.claim_order;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?void 0===e.claim_order&&e.parentNode===t||t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else e.parentNode===t&&null===e.nextSibling||t.appendChild(e)}function g(t,e,n){r&&!n?m(t,e):e.parentNode===t&&e.nextSibling==n||t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function $(){return b(" ")}function I(){return b("")}function x(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t){return Array.from(t.childNodes)}function H(t){void 0===t.claim_info&&(t.claim_info={last_index:0,total_claimed:0})}function B(t,e,n,o,c=!1){H(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const l=t[o];if(e(l)){const e=n(l);return void 0===e?t.splice(o,1):t[o]=e,c||(t.claim_info.last_index=o),l}}for(let o=t.claim_info.last_index-1;o>=0;o--){const l=t[o];if(e(l)){const e=n(l);return void 0===e?t.splice(o,1):t[o]=e,c?void 0===e&&t.claim_info.last_index--:t.claim_info.last_index=o,l}}return o()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function G(t,e,n,o){return B(t,(t=>t.nodeName===e),(t=>{const e=[];for(let o=0;o<t.attributes.length;o++){const c=t.attributes[o];n[c.name]||e.push(c.name)}e.forEach((e=>t.removeAttribute(e)))}),(()=>o(e)))}function _(t,e,n){return G(t,e,n,v)}function X(t,e){return B(t,(t=>3===t.nodeType),(t=>{const n=""+e;if(t.data.startsWith(n)){if(t.data.length!==n.length)return t.splitText(n.length)}else t.data=n}),(()=>b(e)),!0)}function A(t){return X(t," ")}function E(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}new Set;let R;function N(t){R=t}function w(){if(!R)throw new Error("Function called outside component initialization");return R}const S=[],T=[],P=[],J=[],j=Promise.resolve();let W=!1;function U(){W||(W=!0,j.then(L))}function Z(t){P.push(t)}let F=!1;const D=new Set;function L(){if(!F){F=!0;do{for(let t=0;t<S.length;t+=1){const e=S[t];N(e),Q(e.$$)}for(N(null),S.length=0;T.length;)T.pop()();for(let t=0;t<P.length;t+=1){const e=P[t];D.has(e)||(D.add(e),e())}P.length=0}while(S.length);for(;J.length;)J.pop()();W=!1,F=!1,D.clear()}}function Q(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}const V=new Set;let O;function M(t,e){t&&t.i&&(V.delete(t),t.i(e))}function Y(t,e,n,o){if(t&&t.o){if(V.has(t))return;V.add(t),O.c.push((()=>{V.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function z(t,e){const n=e.token={};function o(t,o,c,s){if(e.token!==n)return;e.resolved=s;let i=e.ctx;void 0!==c&&(i=i.slice(),i[c]=s);const a=t&&(e.current=t)(i);let r=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==o&&t&&(O={r:0,c:[],p:O},Y(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),O.r||l(O.c),O=O.p)})):e.block.d(1),a.c(),M(a,1),a.m(e.mount(),e.anchor),r=!0),e.block=a,e.blocks&&(e.blocks[o]=a),r&&L()}if((c=t)&&"object"==typeof c&&"function"==typeof c.then){const n=w();if(t.then((t=>{N(n),o(e.then,1,e.value,t),N(null)}),(t=>{if(N(n),o(e.catch,2,e.error,t),N(null),!e.hasCatch)throw t})),e.current!==e.pending)return o(e.pending,0),!0}else{if(e.current!==e.then)return o(e.then,1,e.value,t),!0;e.resolved=t}var c}const K="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:t;new Set(["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"]);let q;function tt(t){t&&t.c()}function et(t,e){t&&t.l(e)}function nt(t,e,n,c){const{fragment:i,on_mount:a,on_destroy:r,after_update:u}=t.$$;i&&i.m(e,n),c||Z((()=>{const e=a.map(o).filter(s);r?r.push(...e):l(e),t.$$.on_mount=[]})),u.forEach(Z)}function ot(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,n,o,s,i,a,u,d=[-1]){const f=R;N(t);const h=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:i,bound:c(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:c(),dirty:d,skip_bound:!1,root:n.target||f.$$.root};u&&u(h.root);let p=!1;if(h.ctx=o?o(t,n.props||{},((e,n,...o)=>{const c=o.length?o[0]:n;return h.ctx&&i(h.ctx[e],h.ctx[e]=c)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](c),p&&function(t,e){-1===t.$$.dirty[0]&&(S.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(t,e)),n})):[],h.update(),p=!0,l(h.before_update),h.fragment=!!s&&s(h.ctx),n.target){if(n.hydrate){r=!0;const t=C(n.target);h.fragment&&h.fragment.l(t),t.forEach(y)}else h.fragment&&h.fragment.c();n.intro&&M(t.$$.fragment),nt(t,n.target,n.anchor,n.customElement),r=!1,L()}N(f)}"function"==typeof HTMLElement&&(q=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(o).filter(s);for(const t in this.$$.slotted)this.appendChild(this.$$.slotted[t])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){l(this.$$.on_disconnect)}$destroy(){ot(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!a(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});function lt(t,e){document.dispatchEvent(E(t,Object.assign({version:"3.44.2"},e),!0))}function st(t,e){lt("SvelteDOMInsert",{target:t,node:e}),m(t,e)}function it(t,e,n){lt("SvelteDOMInsert",{target:t,node:e,anchor:n}),g(t,e,n)}function at(t){lt("SvelteDOMRemove",{node:t}),y(t)}function rt(t,e,n,o,c,l){const s=!0===o?["capture"]:o?Array.from(Object.keys(o)):[];c&&s.push("preventDefault"),l&&s.push("stopPropagation"),lt("SvelteDOMAddEventListener",{node:t,event:e,handler:n,modifiers:s});const i=x(t,e,n,o);return()=>{lt("SvelteDOMRemoveEventListener",{node:t,event:e,handler:n,modifiers:s}),i()}}function ut(t,e,n){k(t,e,n),null==n?lt("SvelteDOMRemoveAttribute",{node:t,attribute:e}):lt("SvelteDOMSetAttribute",{node:t,attribute:e,value:n})}function dt(t){if(!("string"==typeof t||t&&"object"==typeof t&&"length"in t)){let e="{#each} only iterates over array-like objects.";throw"function"==typeof Symbol&&t&&Symbol.iterator in t&&(e+=" You can use a spread to convert this iterable into an array."),new Error(e)}}function ft(t,e,n){for(const o of Object.keys(e))~n.indexOf(o)||console.warn(`<${t}> received an unexpected slot "${o}".`)}class ht extends class{$destroy(){ot(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){this.$$set&&!a(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){if(!t||!t.target&&!t.$$inline)throw new Error("'target' is a required option");super()}$destroy(){super.$destroy(),this.$destroy=()=>{console.warn("Component was already destroyed")}}$capture_state(){}$inject_state(){}}const{console:pt}=K,mt="src/components/Lisaa.svelte";function gt(t){let o,c,l,s,i,a,r,u,d,f,h,p,m,g,y,I,x,k,H,B,G,E,R,N,w,S,T,P,J,j,W;const U={c:function(){o=v("h3"),c=b("Raportoi huolto"),l=$(),s=v("input"),i=$(),a=v("p"),r=$(),u=v("input"),d=$(),f=v("p"),h=$(),p=v("input"),m=$(),g=v("p"),y=$(),I=v("input"),x=$(),k=v("p"),H=$(),B=v("input"),G=$(),E=v("p"),R=$(),N=v("input"),w=$(),S=v("p"),T=$(),P=v("button"),J=b("Lisaa huolto"),this.h()},l:function(t){o=_(t,"H3",{});var e=C(o);c=X(e,"Raportoi huolto"),e.forEach(at),l=A(t),s=_(t,"INPUT",{type:!0,id:!0}),i=A(t),a=_(t,"P",{}),C(a).forEach(at),r=A(t),u=_(t,"INPUT",{type:!0,id:!0}),d=A(t),f=_(t,"P",{}),C(f).forEach(at),h=A(t),p=_(t,"INPUT",{type:!0,id:!0}),m=A(t),g=_(t,"P",{}),C(g).forEach(at),y=A(t),I=_(t,"INPUT",{type:!0,id:!0}),x=A(t),k=_(t,"P",{}),C(k).forEach(at),H=A(t),B=_(t,"INPUT",{type:!0,id:!0}),G=A(t),E=_(t,"P",{}),C(E).forEach(at),R=A(t),N=_(t,"INPUT",{type:!0,id:!0}),w=A(t),S=_(t,"P",{}),C(S).forEach(at),T=A(t),P=_(t,"BUTTON",{});var n=C(P);J=X(n,"Lisaa huolto"),n.forEach(at),this.h()},h:function(){n(o,mt,27,0,791),ut(s,"type","date"),ut(s,"id","pvm"),n(s,mt,29,0,819),n(a,mt,30,0,851),ut(u,"type","text"),ut(u,"id","mototyyppi"),u.value="Kawasaki KX 250F (2008)",u.required=!0,n(u,mt,31,0,860),n(f,mt,32,0,940),ut(p,"type","text"),ut(p,"id","huolto"),p.value="Pikahuolto",p.required=!0,n(p,mt,33,0,949),n(g,mt,34,0,1012),ut(I,"type","text"),ut(I,"id","paikka"),I.value="Tuusula",I.required=!0,n(I,mt,35,0,1021),n(k,mt,36,0,1081),ut(B,"type","text"),ut(B,"id","notet"),B.value="Notet",B.required=!0,n(B,mt,37,0,1090),n(E,mt,38,0,1152),ut(N,"type","checkbox"),ut(N,"id","tehty"),n(N,mt,39,0,1161),n(S,mt,40,0,1199),n(P,mt,41,0,1208)},m:function(e,n){it(e,o,n),st(o,c),it(e,l,n),it(e,s,n),it(e,i,n),it(e,a,n),it(e,r,n),it(e,u,n),it(e,d,n),it(e,f,n),it(e,h,n),it(e,p,n),it(e,m,n),it(e,g,n),it(e,y,n),it(e,I,n),it(e,x,n),it(e,k,n),it(e,H,n),it(e,B,n),it(e,G,n),it(e,E,n),it(e,R,n),it(e,N,n),it(e,w,n),it(e,S,n),it(e,T,n),it(e,P,n),st(P,J),j||(W=rt(P,"click",t[0],!1,!1,!1),j=!0)},p:e,i:e,o:e,d:function(t){t&&at(o),t&&at(l),t&&at(s),t&&at(i),t&&at(a),t&&at(r),t&&at(u),t&&at(d),t&&at(f),t&&at(h),t&&at(p),t&&at(m),t&&at(g),t&&at(y),t&&at(I),t&&at(x),t&&at(k),t&&at(H),t&&at(B),t&&at(G),t&&at(E),t&&at(R),t&&at(N),t&&at(w),t&&at(S),t&&at(T),t&&at(P),j=!1,W()}};return lt("SvelteRegisterBlock",{block:U,id:gt.name,type:"component",source:"",ctx:t}),U}function yt(t,e,n){let{$$slots:o={},$$scope:c}=e;ft("Lisaa",o,[]);let l="localhost";const s=async()=>{const t=document.getElementById("pvm").value,e=document.getElementById("mototyyppi").value,n=document.getElementById("huolto").value,o=document.getElementById("paikka").value,c=document.getElementById("notet").value,s=document.getElementById("tehty").value;console.log(e+", "+n);const i={luotu:t,moto:e,huolto:n,paikka:o,notet:c,tehty:s};await fetch(`http://${l}:5000/lisaahuolto`,{method:"POST",body:JSON.stringify(i)})},i=[];return Object.keys(e).forEach((t=>{~i.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||pt.warn(`<Lisaa> was created with unknown prop '${t}'`)})),t.$capture_state=()=>({serverName:l,lisaaHuolto:s}),t.$inject_state=t=>{"serverName"in t&&(l=t.serverName)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[s]}class vt extends ht{constructor(t){super(t),ct(this,t,yt,gt,i,{}),lt("SvelteRegisterComponent",{component:this,tagName:"Lisaa",options:t,id:gt.name})}}const{console:bt}=K,$t="src/components/Huolot.svelte";function It(t){f(t,"svelte-fk3828","table.svelte-fk3828,td.svelte-fk3828{border:2px solid black;text-align:left;background-color:#F1EBEA;padding:3px}th.svelte-fk3828{background-color:lightgray}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHVvbG90LnN2ZWx0ZSIsInNvdXJjZXMiOlsiSHVvbG90LnN2ZWx0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8c2NyaXB0PlxyXG5sZXQgc2VydmVyTmFtZSA9IFwibG9jYWxob3N0XCI7XHJcblxyXG5jb25zdCBoYWVIdW9sb3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImhhZUh1b2xvdFwiKTtcclxuICAgIGxldCBzdHIgPSBgaHR0cDovLyR7c2VydmVyTmFtZX06NTAwMC9odW9sb3RgO1xyXG4gICAgY29uc29sZS5sb2coXCJzZXJ2ZXIuLiBcIiwgc3RyKTtcclxuICAgIGxldCBodW9sb3QgPSBhd2FpdCBmZXRjaChzdHIse1xyXG4gICAgICBtZXRob2Q6IFwiR0VUXCJcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGh1b2xvdC5qc29uKCk7ICAgIFxyXG59O1xyXG5sZXQgc2VydmljZXMgPSBoYWVIdW9sb3QoKTtcclxubGV0IGxpc3RhdXMgPSBcIlRlaGR5dCBodW9sb3RcIjtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgdGFibGUsIHRkIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG4gICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRUJFQTtcclxuICAgIHBhZGRpbmc6M3B4O1xyXG4gIH1cclxuICB0aHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXHJcblxyXG48YnV0dG9uIG9uOmNsaWNrID17aGFlSHVvbG90fT5IYWUgaHVvbG90PC9idXR0b24+XHJcbjxoMz57bGlzdGF1c308L2gzPlxyXG5cclxueyNhd2FpdCBzZXJ2aWNlcyB0aGVuIGl0ZW1zfVxyXG48dWw+XHJcbiAgeyNlYWNoIGl0ZW1zIGFzIGl0ZW19XHJcblxyXG4gIDx0YWJsZT5cclxuICAgIDx0cj5cclxuICAgICAgPHRoPklEPC90aD48dGg+UFZNPC90aD48dGg+S29oZGU8L3RoPjx0aD5IdW9sdG88L3RoPjx0aD5QYWlra2E8L3RoPjx0aD5IdW9taW90PC90aD48dGg+VGVodHk8L3RoPlxyXG4gICAgPC90cj5cclxuICA8dHI+XHJcbiAgICA8dGQ+e2l0ZW0uaWR9PC90ZD5cclxuICAgIDx0ZD5cclxuICAgICAge2l0ZW0ubHVvdHV9ICAgICAgXHJcbiAgICA8L3RkPlxyXG4gICAgPHRkPntpdGVtLm1vdG99PC90ZD5cclxuICAgIDx0ZD57aXRlbS5odW9sdG99PC90ZD5cclxuICAgIDx0ZD57aXRlbS5wYWlra2F9PC90ZD5cclxuICAgIDx0ZD57aXRlbS5ub3RldH08L3RkPlxyXG4gICAgPHRkPlxyXG4gICAgICB7I2lmIGl0ZW0udGVodHl9ICAgICAgXHJcbiAgICAgICAge2l0ZW0udGVodHkgPSBcIkhvaWRldHR1XCJ9XHJcbiAgICAgIHs6ZWxzZSB9IFxyXG4gICAgICAgIHtpdGVtLnRlaHR5fSA9IFwiRWlcIlxyXG4gICAgICB7L2lmfVxyXG4gICAgPC90ZD5cclxuICA8L3RyPlxyXG48L3RhYmxlPlxyXG4gIHsvZWFjaH1cclxuPC91bD5cclxuey9hd2FpdH1cclxuXHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQkUsbUJBQUssQ0FBRSxFQUFFLGNBQUMsQ0FBQyxBQUNULE1BQU0sQ0FBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FDdkIsV0FBVyxJQUFJLENBQ2YsZ0JBQWdCLENBQUUsT0FBTyxDQUN6QixRQUFRLEdBQUcsQUFDYixDQUFDLEFBQ0QsZ0JBQUUsQ0FBQyxBQUNDLGdCQUFnQixDQUFFLFNBQVMsQUFDL0IsQ0FBQyJ9 */")}function xt(t,e,n){const o=t.slice();return o[5]=e[n],o}function kt(t){const n={c:e,l:e,m:e,p:e,d:e};return lt("SvelteRegisterBlock",{block:n,id:kt.name,type:"catch",source:'(1:0) <script>  let serverName = \\"localhost\\";    const haeHuolot = async () => {      console.log(\\"haeHuolot\\");      let str = `http://${serverName}',ctx:t}),n}function Ct(t){let e,o=t[4];dt(o);let c=[];for(let e=0;e<o.length;e+=1)c[e]=Gt(xt(t,o,e));const l={c:function(){e=v("ul");for(let t=0;t<c.length;t+=1)c[t].c();this.h()},l:function(t){e=_(t,"UL",{});var n=C(e);for(let t=0;t<c.length;t+=1)c[t].l(n);n.forEach(at),this.h()},h:function(){n(e,$t,33,0,665)},m:function(t,n){it(t,e,n);for(let t=0;t<c.length;t+=1)c[t].m(e,null)},p:function(t,n){if(2&n){let l;for(o=t[4],dt(o),l=0;l<o.length;l+=1){const s=xt(t,o,l);c[l]?c[l].p(s,n):(c[l]=Gt(s),c[l].c(),c[l].m(e,null))}for(;l<c.length;l+=1)c[l].d(1);c.length=o.length}},d:function(t){t&&at(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(c,t)}};return lt("SvelteRegisterBlock",{block:l,id:Ct.name,type:"then",source:"(33:28)   <ul>    {#each items as item}",ctx:t}),l}function Ht(t){let n,o,c=t[5].tehty+"";const l={c:function(){n=b(c),o=b(' = "Ei"')},l:function(t){n=X(t,c),o=X(t,' = "Ei"')},m:function(t,e){it(t,n,e),it(t,o,e)},p:e,d:function(t){t&&at(n),t&&at(o)}};return lt("SvelteRegisterBlock",{block:l,id:Ht.name,type:"else",source:"(53:6) {:else }",ctx:t}),l}function Bt(t){let n,o=t[5].tehty="Hoidettu";const c={c:function(){n=b(o)},l:function(t){n=X(t,o)},m:function(t,e){it(t,n,e)},p:e,d:function(t){t&&at(n)}};return lt("SvelteRegisterBlock",{block:c,id:Bt.name,type:"if",source:"(51:6) {#if item.tehty}",ctx:t}),c}function Gt(t){let e,o,c,l,s,i,a,r,u,d,f,h,p,m,g,y,I,x,k,H,B,G,E,R,N,w,S,T,P,J,j,W,U,Z,F,D,L,Q,V=t[5].id+"",O=t[5].luotu+"",M=t[5].moto+"",Y=t[5].huolto+"",z=t[5].paikka+"",K=t[5].notet+"";let q=function(t,e){return t[5].tehty?Bt:Ht}(t)(t);const tt={c:function(){e=v("table"),o=v("tr"),c=v("th"),l=b("ID"),s=v("th"),i=b("PVM"),a=v("th"),r=b("Kohde"),u=v("th"),d=b("Huolto"),f=v("th"),h=b("Paikka"),p=v("th"),m=b("Huomiot"),g=v("th"),y=b("Tehty"),I=$(),x=v("tr"),k=v("td"),H=b(V),B=$(),G=v("td"),E=b(O),R=$(),N=v("td"),w=b(M),S=$(),T=v("td"),P=b(Y),J=$(),j=v("td"),W=b(z),U=$(),Z=v("td"),F=b(K),D=$(),L=v("td"),q.c(),Q=$(),this.h()},l:function(t){e=_(t,"TABLE",{class:!0});var n=C(e);o=_(n,"TR",{});var v=C(o);c=_(v,"TH",{class:!0});var b=C(c);l=X(b,"ID"),b.forEach(at),s=_(v,"TH",{class:!0});var $=C(s);i=X($,"PVM"),$.forEach(at),a=_(v,"TH",{class:!0});var tt=C(a);r=X(tt,"Kohde"),tt.forEach(at),u=_(v,"TH",{class:!0});var et=C(u);d=X(et,"Huolto"),et.forEach(at),f=_(v,"TH",{class:!0});var nt=C(f);h=X(nt,"Paikka"),nt.forEach(at),p=_(v,"TH",{class:!0});var ot=C(p);m=X(ot,"Huomiot"),ot.forEach(at),g=_(v,"TH",{class:!0});var ct=C(g);y=X(ct,"Tehty"),ct.forEach(at),v.forEach(at),I=A(n),x=_(n,"TR",{});var lt=C(x);k=_(lt,"TD",{class:!0});var st=C(k);H=X(st,V),st.forEach(at),B=A(lt),G=_(lt,"TD",{class:!0});var it=C(G);E=X(it,O),it.forEach(at),R=A(lt),N=_(lt,"TD",{class:!0});var rt=C(N);w=X(rt,M),rt.forEach(at),S=A(lt),T=_(lt,"TD",{class:!0});var ut=C(T);P=X(ut,Y),ut.forEach(at),J=A(lt),j=_(lt,"TD",{class:!0});var dt=C(j);W=X(dt,z),dt.forEach(at),U=A(lt),Z=_(lt,"TD",{class:!0});var ft=C(Z);F=X(ft,K),ft.forEach(at),D=A(lt),L=_(lt,"TD",{class:!0});var ht=C(L);q.l(ht),ht.forEach(at),lt.forEach(at),Q=A(n),n.forEach(at),this.h()},h:function(){ut(c,"class","svelte-fk3828"),n(c,$t,38,6,725),ut(s,"class","svelte-fk3828"),n(s,$t,38,17,736),ut(a,"class","svelte-fk3828"),n(a,$t,38,29,748),ut(u,"class","svelte-fk3828"),n(u,$t,38,43,762),ut(f,"class","svelte-fk3828"),n(f,$t,38,58,777),ut(p,"class","svelte-fk3828"),n(p,$t,38,73,792),ut(g,"class","svelte-fk3828"),n(g,$t,38,89,808),n(o,$t,37,4,713),ut(k,"class","svelte-fk3828"),n(k,$t,41,4,847),ut(G,"class","svelte-fk3828"),n(G,$t,42,4,871),ut(N,"class","svelte-fk3828"),n(N,$t,45,4,918),ut(T,"class","svelte-fk3828"),n(T,$t,46,4,944),ut(j,"class","svelte-fk3828"),n(j,$t,47,4,972),ut(Z,"class","svelte-fk3828"),n(Z,$t,48,4,1e3),ut(L,"class","svelte-fk3828"),n(L,$t,49,4,1027),n(x,$t,40,2,837),ut(e,"class","svelte-fk3828"),n(e,$t,36,2,700)},m:function(t,n){it(t,e,n),st(e,o),st(o,c),st(c,l),st(o,s),st(s,i),st(o,a),st(a,r),st(o,u),st(u,d),st(o,f),st(f,h),st(o,p),st(p,m),st(o,g),st(g,y),st(e,I),st(e,x),st(x,k),st(k,H),st(x,B),st(x,G),st(G,E),st(x,R),st(x,N),st(N,w),st(x,S),st(x,T),st(T,P),st(x,J),st(x,j),st(j,W),st(x,U),st(x,Z),st(Z,F),st(x,D),st(x,L),q.m(L,null),st(e,Q)},p:function(t,e){q.p(t,e)},d:function(t){t&&at(e),q.d()}};return lt("SvelteRegisterBlock",{block:tt,id:Gt.name,type:"each",source:"(35:2) {#each items as item}",ctx:t}),tt}function _t(t){const n={c:e,l:e,m:e,p:e,d:e};return lt("SvelteRegisterBlock",{block:n,id:_t.name,type:"pending",source:'(1:0) <script>  let serverName = \\"localhost\\";    const haeHuolot = async () => {      console.log(\\"haeHuolot\\");      let str = `http://${serverName}',ctx:t}),n}function Xt(t){let o,c,l,s,i,a,r,u,d,f,h={ctx:t,current:null,token:null,hasCatch:!1,pending:_t,then:Ct,catch:kt,value:4};z(u=t[1],h);const p={c:function(){o=v("button"),c=b("Hae huolot"),l=$(),s=v("h3"),i=b(t[2]),a=$(),r=I(),h.block.c(),this.h()},l:function(e){o=_(e,"BUTTON",{});var n=C(o);c=X(n,"Hae huolot"),n.forEach(at),l=A(e),s=_(e,"H3",{});var u=C(s);i=X(u,t[2]),u.forEach(at),a=A(e),r=I(),h.block.l(e),this.h()},h:function(){n(o,$t,29,0,562),n(s,$t,30,0,613)},m:function(e,n){it(e,o,n),st(o,c),it(e,l,n),it(e,s,n),st(s,i),it(e,a,n),it(e,r,n),h.block.m(e,h.anchor=n),h.mount=()=>r.parentNode,h.anchor=r,d||(f=rt(o,"click",t[0],!1,!1,!1),d=!0)},p:function(e,[n]){!function(t,e,n){const o=e.slice(),{resolved:c}=t;t.current===t.then&&(o[t.value]=c),t.current===t.catch&&(o[t.error]=c),t.block.p(o,n)}(h,t=e,n)},i:e,o:e,d:function(t){t&&at(o),t&&at(l),t&&at(s),t&&at(a),t&&at(r),h.block.d(t),h.token=null,h=null,d=!1,f()}};return lt("SvelteRegisterBlock",{block:p,id:Xt.name,type:"component",source:"",ctx:t}),p}function At(t,e,n){let{$$slots:o={},$$scope:c}=e;ft("Huolot",o,[]);let l="localhost";const s=async()=>{console.log("haeHuolot");let t=`http://${l}:5000/huolot`;return console.log("server.. ",t),(await fetch(t,{method:"GET"})).json()};let i=s(),a="Tehdyt huolot";const r=[];return Object.keys(e).forEach((t=>{~r.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||bt.warn(`<Huolot> was created with unknown prop '${t}'`)})),t.$capture_state=()=>({serverName:l,haeHuolot:s,services:i,listaus:a}),t.$inject_state=t=>{"serverName"in t&&(l=t.serverName),"services"in t&&n(1,i=t.services),"listaus"in t&&n(2,a=t.listaus)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[s,i,a]}class Et extends ht{constructor(t){super(t),ct(this,t,At,Xt,i,{},It),lt("SvelteRegisterComponent",{component:this,tagName:"Huolot",options:t,id:Xt.name})}}function Rt(t){let o,c,l,s;const i={c:function(){o=v("button"),c=b("Lähetä terveiset juureen"),this.h()},l:function(t){o=_(t,"BUTTON",{});var e=C(o);c=X(e,"Lähetä terveiset juureen"),e.forEach(at),this.h()},h:function(){n(o,"src/components/JuuriTarkistus.svelte",14,0,238)},m:function(e,n){it(e,o,n),st(o,c),l||(s=rt(o,"click",t[0],!1,!1,!1),l=!0)},p:e,i:e,o:e,d:function(t){t&&at(o),l=!1,s()}};return lt("SvelteRegisterBlock",{block:i,id:Rt.name,type:"component",source:"",ctx:t}),i}function Nt(t,e,n){let{$$slots:o={},$$scope:c}=e;ft("JuuriTarkistus",o,[]);const l={tervehdys:"Moi"},s=async()=>{fetch("http://localhost:5000/",{method:"POST",body:JSON.stringify(l)})},i=[];return Object.keys(e).forEach((t=>{~i.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(`<JuuriTarkistus> was created with unknown prop '${t}'`)})),t.$capture_state=()=>({data:l,controllerMoi:s}),[s]}class wt extends ht{constructor(t){super(t),ct(this,t,Nt,Rt,i,{}),lt("SvelteRegisterComponent",{component:this,tagName:"JuuriTarkistus",options:t,id:Rt.name})}}const{console:St}=K,Tt="src/components/Tuhoa.svelte";function Pt(t){f(t,"svelte-ybsbdo","input.svelte-ybsbdo{width:60px}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHVob2Euc3ZlbHRlIiwic291cmNlcyI6WyJUdWhvYS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdD5cclxuICAgIGxldCBzZXJ2ZXJOYW1lID0gXCJsb2NhbGhvc3RcIjtcclxuICAgIGNvbnN0IHR1aG9hID0gYXN5bmMoKSA9PiB7XHJcbiAgICBjb25zdCBpZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdW9sZW1hJykudmFsdWU7XHJcbiAgICBjb25zb2xlLmxvZyhcInR1aG90dGF2YVJpdmk6IFwiLCBpZCk7XHJcbiAgICBhd2FpdCBmZXRjaChgaHR0cDovLyR7c2VydmVyTmFtZX06NTAwMC90dWhvYS8ke2lkfWAsIHtcclxuICAgICAgbWV0aG9kOiBcIlBPU1RcIlxyXG4gICAgfSk7XHJcbn1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbiAgICBpbnB1dHtcclxuICAgICAgICB3aWR0aDo2MHB4O1xyXG4gICAgfVxyXG48L3N0eWxlPlxyXG5cclxuXHJcbjxwPjwvcD5cclxuPGlucHV0IHR5cGUgPSBcIm51bWJlclwiIGlkID0gXCJrdW9sZW1hXCIgdmFsdWU9XCJpZFwiIC8+IFxyXG48YnV0dG9uIG9uOmNsaWNrPXt0dWhvYX0+VHVob2E8L2J1dHRvbj4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBWUksbUJBQUssQ0FBQyxBQUNGLE1BQU0sSUFBSSxBQUNkLENBQUMifQ== */")}function Jt(t){let o,c,l,s,i,a,r,u;const d={c:function(){o=v("p"),c=$(),l=v("input"),s=$(),i=v("button"),a=b("Tuhoa"),this.h()},l:function(t){o=_(t,"P",{}),C(o).forEach(at),c=A(t),l=_(t,"INPUT",{type:!0,id:!0,class:!0}),s=A(t),i=_(t,"BUTTON",{});var e=C(i);a=X(e,"Tuhoa"),e.forEach(at),this.h()},h:function(){n(o,Tt,18,0,346),ut(l,"type","number"),ut(l,"id","kuolema"),l.value="id",ut(l,"class","svelte-ybsbdo"),n(l,Tt,19,0,355),n(i,Tt,20,0,409)},m:function(e,n){it(e,o,n),it(e,c,n),it(e,l,n),it(e,s,n),it(e,i,n),st(i,a),r||(u=rt(i,"click",t[0],!1,!1,!1),r=!0)},p:e,i:e,o:e,d:function(t){t&&at(o),t&&at(c),t&&at(l),t&&at(s),t&&at(i),r=!1,u()}};return lt("SvelteRegisterBlock",{block:d,id:Jt.name,type:"component",source:"",ctx:t}),d}function jt(t,e,n){let{$$slots:o={},$$scope:c}=e;ft("Tuhoa",o,[]);let l="localhost";const s=async()=>{const t=document.getElementById("kuolema").value;console.log("tuhottavaRivi: ",t),await fetch(`http://${l}:5000/tuhoa/${t}`,{method:"POST"})},i=[];return Object.keys(e).forEach((t=>{~i.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||St.warn(`<Tuhoa> was created with unknown prop '${t}'`)})),t.$capture_state=()=>({serverName:l,tuhoa:s}),t.$inject_state=t=>{"serverName"in t&&(l=t.serverName)},e&&"$$inject"in e&&t.$inject_state(e.$$inject),[s]}class Wt extends ht{constructor(t){super(t),ct(this,t,jt,Jt,i,{},Pt),lt("SvelteRegisterComponent",{component:this,tagName:"Tuhoa",options:t,id:Jt.name})}}function Ut(t){let o,c,l,s,i,a,r,u,d;c=new wt({$$inline:!0}),s=new vt({$$inline:!0}),a=new Et({$$inline:!0}),u=new Wt({$$inline:!0});const f={c:function(){o=v("main"),tt(c.$$.fragment),l=$(),tt(s.$$.fragment),i=$(),tt(a.$$.fragment),r=$(),tt(u.$$.fragment),this.h()},l:function(t){o=_(t,"MAIN",{});var e=C(o);et(c.$$.fragment,e),l=A(e),et(s.$$.fragment,e),i=A(e),et(a.$$.fragment,e),r=A(e),et(u.$$.fragment,e),e.forEach(at),this.h()},h:function(){n(o,"src/App.svelte",7,0,243)},m:function(t,e){it(t,o,e),nt(c,o,null),st(o,l),nt(s,o,null),st(o,i),nt(a,o,null),st(o,r),nt(u,o,null),d=!0},p:e,i:function(t){d||(M(c.$$.fragment,t),M(s.$$.fragment,t),M(a.$$.fragment,t),M(u.$$.fragment,t),d=!0)},o:function(t){Y(c.$$.fragment,t),Y(s.$$.fragment,t),Y(a.$$.fragment,t),Y(u.$$.fragment,t),d=!1},d:function(t){t&&at(o),ot(c),ot(s),ot(a),ot(u)}};return lt("SvelteRegisterBlock",{block:f,id:Ut.name,type:"component",source:"",ctx:t}),f}function Zt(t,e,n){let{$$slots:o={},$$scope:c}=e;ft("App",o,[]);const l=[];return Object.keys(e).forEach((t=>{~l.indexOf(t)||"$$"===t.slice(0,2)||"slot"===t||console.warn(`<App> was created with unknown prop '${t}'`)})),t.$capture_state=()=>({Lisaa:vt,Huolot:Et,JuuriTarkistus:wt,Tuhoa:Wt}),[]}new class extends ht{constructor(t){super(t),ct(this,t,Zt,Ut,i,{}),lt("SvelteRegisterComponent",{component:this,tagName:"App",options:t,id:Ut.name})}}({target:document.querySelector("#__snel"),props:{}});
//# sourceMappingURL=main.js.map
