import"../chunks/DsnmJJEf.js";import{ah as aa,K as O,L as Re,J as Te,z as E,a1 as Na,N as wa,O as pa,P as Ye,Q as me,R as ue,Z as oe,ak as Ea,ao as Aa,T as ce,W as Ca,U as ya,as as ta,i as ra,S as ze,ax as Ma,aB as Ue,aC as qe,X as Je,Y as la,aD as ke,aE as Pe,aF as ve,aG as Se,aH as Ta,am as ka,aI as Sa,ar as Ia,aJ as Pa,a5 as ia,aj as na,aK as sa,aL as Oa,aM as Ba,M as Da,aN as La,au as Ha,av as oa,aO as Ra,aP as Fa,aQ as Ga,aR as Va,aS as za,aT as Ja,aU as Wa,aV as ja,aW as Ya,s as Ua,k as qa,C as V,D as L,G as P,H as k,E as ae,v as C,F as z,r as F,I as D,az as ie,aX as Ka,p as j,q as G,aY as Xa,aZ as Q,a_ as Za,a2 as Ne,ay as we,a3 as de}from"../chunks/C-XJyqyp.js";import{p as f,i as se,r as $,s as te,c as Oe}from"../chunks/CFromL3f.js";import{i as Qa,a as $a,c as et,d as We,n as at,b as tt,s as xe}from"../chunks/BuZw5ygU.js";import"../chunks/DUurKQiS.js";function rt(a,e){if(e){const t=document.body;a.autofocus=!0,aa(()=>{document.activeElement===t&&a.focus()})}}function pe(a,e){return e}function lt(a,e,t){for(var r=a.items,l=[],n=e.length,i=0;i<n;i++)Sa(e[i].e,l,!0);var s=n>0&&l.length===0&&t!==null;if(s){var v=t.parentNode;Ia(v),v.append(t),r.clear(),ne(a,e[0].prev,e[n-1].next)}Pa(l,()=>{for(var o=0;o<n;o++){var g=e[o];s||(r.delete(g.k),ne(a,g.prev,g.next)),ve(g.e,!s)}})}function Ee(a,e,t,r,l,n=null){var i=a,s={flags:e,items:new Map,first:null},v=(e&sa)!==0;if(v){var o=a;i=O?me(na(o)):o.appendChild(ze())}O&&Re();var g=null,b=!1,d=new Map,A=Na(()=>{var m=t();return ra(m)?m:m==null?[]:ta(m)}),u,h;function N(){it(h,u,s,d,i,l,e,r,t),n!==null&&(u.length===0?g?Je(g):g=ce(()=>n(i)):g!==null&&la(g,()=>{g=null}))}Te(()=>{h??=ia,u=E(A);var m=u.length;if(b&&m===0)return;b=m===0;let y=!1;if(O){var x=wa(i)===pa;x!==(m===0)&&(i=Ye(),me(i),ue(!1),y=!0)}if(O){for(var w=null,p,_=0;_<m;_++){if(oe.nodeType===Ea&&oe.data===Aa){i=oe,y=!0,ue(!1);break}var c=u[_],S=r(c,_);p=Fe(oe,s,w,null,c,S,_,l,e,t),s.items.set(S,p),w=p}m>0&&me(Ye())}if(O)m===0&&n&&(g=ce(()=>n(i)));else if(Ca()){var J=new Set,le=ya;for(_=0;_<m;_+=1){c=u[_],S=r(c,_);var Y=s.items.get(S)??d.get(S);Y?(e&(Se|ke))!==0&&fa(Y,c,_,e):(p=Fe(null,s,null,null,c,S,_,l,e,t,!0),d.set(S,p)),J.add(S)}for(const[H,K]of s.items)J.has(H)||le.skipped_effects.add(K.e);le.add_callback(N)}else N();y&&ue(!0),E(A)}),O&&(i=oe)}function it(a,e,t,r,l,n,i,s,v){var o=(i&Oa)!==0,g=(i&(Se|ke))!==0,b=e.length,d=t.items,A=t.first,u=A,h,N=null,m,y=[],x=[],w,p,_,c;if(o)for(c=0;c<b;c+=1)w=e[c],p=s(w,c),_=d.get(p),_!==void 0&&(_.a?.measure(),(m??=new Set).add(_));for(c=0;c<b;c+=1){if(w=e[c],p=s(w,c),_=d.get(p),_===void 0){var S=r.get(p);if(S!==void 0){r.delete(p),d.set(p,S);var J=N?N.next:u;ne(t,N,S),ne(t,S,J),Be(S,J,l),N=S}else{var le=u?u.e.nodes_start:l;N=Fe(le,t,N,N===null?t.first:N.next,w,p,c,n,i,v)}d.set(p,N),y=[],x=[],u=N.next;continue}if(g&&fa(_,w,c,i),(_.e.f&Pe)!==0&&(Je(_.e),o&&(_.a?.unfix(),(m??=new Set).delete(_))),_!==u){if(h!==void 0&&h.has(_)){if(y.length<x.length){var Y=x[0],H;N=Y.prev;var K=y[0],X=y[y.length-1];for(H=0;H<y.length;H+=1)Be(y[H],Y,l);for(H=0;H<x.length;H+=1)h.delete(x[H]);ne(t,K.prev,X.next),ne(t,N,K),ne(t,X,Y),u=Y,N=X,c-=1,y=[],x=[]}else h.delete(_),Be(_,u,l),ne(t,_.prev,_.next),ne(t,_,N===null?t.first:N.next),ne(t,N,_),N=_;continue}for(y=[],x=[];u!==null&&u.k!==p;)(u.e.f&Pe)===0&&(h??=new Set).add(u),x.push(u),u=u.next;if(u===null)continue;_=u}y.push(_),N=_,u=_.next}if(u!==null||h!==void 0){for(var M=h===void 0?[]:ta(h);u!==null;)(u.e.f&Pe)===0&&M.push(u),u=u.next;var T=M.length;if(T>0){var B=(i&sa)!==0&&b===0?l:null;if(o){for(c=0;c<T;c+=1)M[c].a?.measure();for(c=0;c<T;c+=1)M[c].a?.fix()}lt(t,M,B)}}o&&aa(()=>{if(m!==void 0)for(_ of m)_.a?.apply()}),a.first=t.first&&t.first.e,a.last=N&&N.e;for(var I of r.values())ve(I.e);r.clear()}function fa(a,e,t,r){(r&Se)!==0&&qe(a.v,e),(r&ke)!==0?qe(a.i,t):a.i=t}function Fe(a,e,t,r,l,n,i,s,v,o,g){var b=(v&Se)!==0,d=(v&Ta)===0,A=b?d?Ma(l,!1,!1):Ue(l):l,u=(v&ke)===0?i:Ue(i),h={i:u,v:A,k:n,a:null,e:null,prev:t,next:r};try{if(a===null){var N=document.createDocumentFragment();N.append(a=ze())}return h.e=ce(()=>s(a,A,u,o),O),h.e.prev=t&&t.e,h.e.next=r&&r.e,t===null?g||(e.first=h):(t.next=h,t.e.next=h.e),r!==null&&(r.prev=h,r.e.prev=h.e),h}finally{}}function Be(a,e,t){for(var r=a.next?a.next.e.nodes_start:t,l=e?e.e.nodes_start:t,n=a.e.nodes_start;n!==null&&n!==r;){var i=ka(n);l.before(n),n=i}}function ne(a,e,t){e===null?a.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function ua(a,e,t,r,l,n){let i=O;O&&Re();var s,v,o=null;O&&oe.nodeType===Ba&&(o=oe,Re());var g=O?oe:a,b;Te(()=>{const d=e()||null;var A=t||d==="svg"?La:null;d!==s&&(b&&(d===null?la(b,()=>{b=null,v=null}):d===v?Je(b):ve(b)),d&&d!==v&&(b=ce(()=>{if(o=O?o:A?document.createElementNS(A,d):document.createElement(d),Ha(o,o),r){O&&Qa(d)&&o.append(document.createComment(""));var u=O?na(o):o.appendChild(ze());O&&(u===null?ue(!1):me(u)),r(o,u)}ia.nodes_end=o,g.before(o)})),s=d,s&&(v=s))},Da),i&&(ue(!0),me(g))}function nt(a,e){var t=void 0,r;Te(()=>{t!==(t=e())&&(r&&(ve(r),r=null),t&&(r=ce(()=>{oa(()=>t(a))})))})}function da(a){var e,t,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var l=a.length;for(e=0;e<l;e++)a[e]&&(t=da(a[e]))&&(r&&(r+=" "),r+=t)}else for(t in a)a[t]&&(r&&(r+=" "),r+=t);return r}function st(){for(var a,e,t=0,r="",l=arguments.length;t<l;t++)(a=arguments[t])&&(e=da(a))&&(r&&(r+=" "),r+=e);return r}function ot(a){return typeof a=="object"?st(a):a??""}const Ke=[...` 	
\r\f \v\uFEFF`];function ft(a,e,t){var r=a==null?"":""+a;if(t){for(var l in t)if(t[l])r=r?r+" "+l:l;else if(r.length)for(var n=l.length,i=0;(i=r.indexOf(l,i))>=0;){var s=i+n;(i===0||Ke.includes(r[i-1]))&&(s===r.length||Ke.includes(r[s]))?r=(i===0?"":r.substring(0,i))+r.substring(s+1):i=s}}return r===""?null:r}function Xe(a,e=!1){var t=e?" !important;":";",r="";for(var l in a){var n=a[l];n!=null&&n!==""&&(r+=" "+l+": "+n+t)}return r}function De(a){return a[0]!=="-"||a[1]!=="-"?a.toLowerCase():a}function ut(a,e){if(e){var t="",r,l;if(Array.isArray(e)?(r=e[0],l=e[1]):r=e,a){a=String(a).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var n=!1,i=0,s=!1,v=[];r&&v.push(...Object.keys(r).map(De)),l&&v.push(...Object.keys(l).map(De));var o=0,g=-1;const h=a.length;for(var b=0;b<h;b++){var d=a[b];if(s?d==="/"&&a[b-1]==="*"&&(s=!1):n?n===d&&(n=!1):d==="/"&&a[b+1]==="*"?s=!0:d==='"'||d==="'"?n=d:d==="("?i++:d===")"&&i--,!s&&n===!1&&i===0){if(d===":"&&g===-1)g=b;else if(d===";"||b===h-1){if(g!==-1){var A=De(a.substring(o,g).trim());if(!v.includes(A)){d!==";"&&b++;var u=a.substring(o,b).trim();t+=" "+u+";"}}o=b+1,g=-1}}}}return r&&(t+=Xe(r)),l&&(t+=Xe(l,!0)),t=t.trim(),t===""?null:t}return a==null?null:String(a)}function Z(a,e,t,r,l,n){var i=a.__className;if(O||i!==t||i===void 0){var s=ft(t,r,n);(!O||s!==a.getAttribute("class"))&&(s==null?a.removeAttribute("class"):e?a.className=s:a.setAttribute("class",s)),a.__className=t}else if(n&&l!==n)for(var v in n){var o=!!n[v];(l==null||o!==!!l[v])&&a.classList.toggle(v,o)}return n}function Le(a,e={},t,r){for(var l in t){var n=t[l];e[l]!==n&&(t[l]==null?a.style.removeProperty(l):a.style.setProperty(l,n,r))}}function dt(a,e,t,r){var l=a.__style;if(O||l!==e){var n=ut(e,r);(!O||n!==a.getAttribute("style"))&&(n==null?a.removeAttribute("style"):a.style.cssText=n),a.__style=e}else r&&(Array.isArray(r)?(Le(a,t?.[0],r[0]),Le(a,t?.[1],r[1],"important")):Le(a,t,r));return r}function Ge(a,e,t=!1){if(a.multiple){if(e==null)return;if(!ra(e))return Ra();for(var r of a.options)r.selected=e.includes(Ze(r));return}for(r of a.options){var l=Ze(r);if(Fa(l,e)){r.selected=!0;return}}(!t||e!==void 0)&&(a.selectedIndex=-1)}function ct(a){var e=new MutationObserver(()=>{Ge(a,a.__value)});e.observe(a,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ga(()=>{e.disconnect()})}function Ze(a){return"__value"in a?a.__value:a.value}const ge=Symbol("class"),be=Symbol("style"),ca=Symbol("is custom element"),va=Symbol("is html");function vt(a,e){e?a.hasAttribute("selected")||a.setAttribute("selected",""):a.removeAttribute("selected")}function Qe(a,e,t,r){var l=ha(a);O&&(l[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||l[e]!==(l[e]=t)&&(e==="loading"&&(a[ja]=t),t==null?a.removeAttribute(e):typeof t!="string"&&_a(a).includes(e)?a[e]=t:a.setAttribute(e,t))}function ht(a,e,t,r,l=!1){var n=ha(a),i=n[ca],s=!n[va];let v=O&&i;v&&ue(!1);var o=e||{},g=a.tagName==="OPTION";for(var b in e)b in t||(t[b]=null);t.class?t.class=ot(t.class):t[ge]&&(t.class=null),t[be]&&(t.style??=null);var d=_a(a);for(const x in t){let w=t[x];if(g&&x==="value"&&w==null){a.value=a.__value="",o[x]=w;continue}if(x==="class"){var A=a.namespaceURI==="http://www.w3.org/1999/xhtml";Z(a,A,w,r,e?.[ge],t[ge]),o[x]=w,o[ge]=t[ge];continue}if(x==="style"){dt(a,w,e?.[be],t[be]),o[x]=w,o[be]=t[be];continue}var u=o[x];if(!(w===u&&!(w===void 0&&a.hasAttribute(x)))){o[x]=w;var h=x[0]+x[1];if(h!=="$$")if(h==="on"){const p={},_="$$"+x;let c=x.slice(2);var N=tt(c);if($a(c)&&(c=c.slice(0,-7),p.capture=!0),!N&&u){if(w!=null)continue;a.removeEventListener(c,o[_],p),o[_]=null}if(w!=null)if(N)a[`__${c}`]=w,We([c]);else{let S=function(J){o[x].call(this,J)};o[_]=et(c,a,S,p)}else N&&(a[`__${c}`]=void 0)}else if(x==="style")Qe(a,x,w);else if(x==="autofocus")rt(a,!!w);else if(!i&&(x==="__value"||x==="value"&&w!=null))a.value=a.__value=w;else if(x==="selected"&&g)vt(a,w);else{var m=x;s||(m=at(m));var y=m==="defaultValue"||m==="defaultChecked";if(w==null&&!i&&!y)if(n[x]=null,m==="value"||m==="checked"){let p=a;const _=e===void 0;if(m==="value"){let c=p.defaultValue;p.removeAttribute(m),p.defaultValue=c,p.value=p.__value=_?c:null}else{let c=p.defaultChecked;p.removeAttribute(m),p.defaultChecked=c,p.checked=_?c:!1}}else a.removeAttribute(x);else y||d.includes(m)&&(i||typeof w!="string")?a[m]=w:typeof w!="function"&&Qe(a,m,w)}}}return v&&ue(!0),o}function Ve(a,e,t=[],r=[],l,n=!1){Va(t,r,i=>{var s=void 0,v={},o=a.nodeName==="SELECT",g=!1;if(Te(()=>{var d=e(...i.map(E)),A=ht(a,s,d,l,n);g&&o&&"value"in d&&Ge(a,d.value);for(let h of Object.getOwnPropertySymbols(v))d[h]||ve(v[h]);for(let h of Object.getOwnPropertySymbols(d)){var u=d[h];h.description===za&&(!s||u!==s[h])&&(v[h]&&ve(v[h]),v[h]=ce(()=>nt(a,()=>u))),A[h]=u}s=A}),o){var b=a;oa(()=>{Ge(b,s.value,!0),ct(b)})}g=!0})}function ha(a){return a.__attributes??={[ca]:a.nodeName.includes("-"),[va]:a.namespaceURI===Ja}}var $e=new Map;function _a(a){var e=$e.get(a.nodeName);if(e)return e;$e.set(a.nodeName,e=[]);for(var t,r=a,l=Element.prototype;l!==r;){t=Ya(r);for(var n in t)t[n].set&&e.push(n);r=Wa(r)}return e}function Ie(a){var e=Symbol(),t=function(l){return Ua(e,l)},r=function(){var l;return(l=qa(e))!==null&&l!==void 0?l:a};return[t,r,e]}var Ae;Ae=Ie(),Ae[0];Ae[1];Ae[2];We(["click"]);var Ce,ga=(Ce=Ie({parent:"none",value:"",expanded:!1}),Ce[0]),_t=Ce[1];Ce[2];var gt=L('<nav data-testid="nav-bar-tileset"><!></nav>'),bt=L('<aside data-testid="nav-bar"><!></aside>');function mt(a,e){V(e,!0);const t=f(e,"base",3,"flex flex-col"),r=f(e,"background",3,"preset-filled-surface-100-900"),l=f(e,"width",3,"min-w-[320px] w-full"),n=f(e,"height",3,"h-20"),i=f(e,"padding",3,"p-1"),s=f(e,"classes",3,""),v=f(e,"tilesBase",3,"flex-1 flex"),o=f(e,"tilesFlexDirection",3,""),g=f(e,"tilesJustify",3,"justify-center"),b=f(e,"tilesItems",3,"items-center"),d=f(e,"tilesGap",3,"gap-1"),A=f(e,"tilesClasses",3,"");ga({parent:"bar",get value(){return e.value},expanded:!1,get onValueChange(){return e.onValueChange}});var u=bt(),h=P(u);{var N=m=>{var y=gt(),x=P(y);F(x,()=>e.children),k(y),ae(()=>Z(y,1,`${v()??""} ${o()??""} ${g()??""} ${b()??""} ${d()??""} ${A()??""}`)),C(m,y)};se(h,m=>{e.children&&m(N)})}k(u),ae(()=>Z(u,1,`${t()??""} ${r()??""} ${l()??""} ${n()??""} ${i()??""} ${s()??""}`)),C(a,u),z()}var xt=L('<header data-testid="nav-rail-header"><!></header>'),Nt=L('<nav data-testid="nav-rail-tiles"><!></nav>'),wt=L('<footer data-testid="nav-rail-footer"><!></footer>'),pt=L('<aside data-testid="nav-rail"><!> <!> <!></aside>');function ea(a,e){V(e,!0);const t=f(e,"value",3,""),r=f(e,"expanded",3,!1),l=f(e,"base",3,"h-full flex flex-col"),n=f(e,"background",3,"preset-filled-surface-100-900"),i=f(e,"padding",3,"p-1"),s=f(e,"width",3,"w-24"),v=f(e,"widthExpanded",3,"w-64"),o=f(e,"height",3,"h-full"),g=f(e,"classes",3,""),b=f(e,"headerBase",3,"flex"),d=f(e,"headerFlexDirection",3,"flex-col"),A=f(e,"headerJustify",3,"justify-center"),u=f(e,"headerItems",3,"items-center"),h=f(e,"headerGap",3,"gap-1"),N=f(e,"headerClasses",3,""),m=f(e,"tilesBase",3,"flex-1 flex"),y=f(e,"tilesFlexDirection",3,"flex-col"),x=f(e,"tilesJustify",3,"justify-center"),w=f(e,"tilesItems",3,"items-center"),p=f(e,"tilesGap",3,"gap-1"),_=f(e,"tilesClasses",3,""),c=f(e,"footerBase",3,"flex"),S=f(e,"footerFlexDirection",3,"flex-col"),J=f(e,"footerJustify",3,"justify-center"),le=f(e,"footerItems",3,"items-center"),Y=f(e,"footerGap",3,"gap-1"),H=f(e,"footerClasses",3,"");ga({parent:"rail",get value(){return t()},get expanded(){return r()},get onValueChange(){return e.onValueChange}});let K=ie(()=>r()?v():s());var X=pt(),M=P(X);{var T=W=>{var R=xt(),fe=P(R);F(fe,()=>e.header),k(R),ae(()=>Z(R,1,`${b()??""} ${d()??""} ${A()??""} ${u()??""} ${h()??""} ${N()??""}`)),C(W,R)};se(M,W=>{e.header&&W(T)})}var B=D(M,2);{var I=W=>{var R=Nt(),fe=P(R);F(fe,()=>e.tiles),k(R),ae(()=>Z(R,1,`${m()??""} ${y()??""} ${x()??""} ${w()??""} ${p()??""} ${_()??""}`)),C(W,R)};se(B,W=>{e.tiles&&W(I)})}var U=D(B,2);{var he=W=>{var R=wt(),fe=P(R);F(fe,()=>e.footer),k(R),ae(()=>Z(R,1,`${c()??""} ${S()??""} ${J()??""} ${le()??""} ${Y()??""} ${H()??""}`)),C(W,R)};se(U,W=>{e.footer&&W(he)})}k(X),ae(()=>Z(X,1,`${l()??""} ${n()??""} ${o()??""} ${i()??""} ${E(K)??""} ${g()??""}`)),C(a,X),z()}var Et=L("<div><!></div>"),At=L('<div data-testid="nav-tile-label"> </div>'),Ct=L('<div data-testid="nav-tile-label-expanded"> </div>'),yt=L("<!> <!> <!>",1);function Mt(a,e){const t=Ka();V(e,!0);const r=f(e,"id",3,t),l=f(e,"selected",3,void 0),n=f(e,"type",3,"button"),i=f(e,"base",3,"flex items-center"),s=f(e,"width",3,"w-full"),v=f(e,"aspect",3,"aspect-square"),o=f(e,"background",3,""),g=f(e,"hover",3,"hover:preset-filled-surface-50-950"),b=f(e,"active",3,"preset-filled-primary-500"),d=f(e,"padding",3,"p-2"),A=f(e,"gap",3,"gap-1"),u=f(e,"rounded",3,"rounded-container"),h=f(e,"classes",3,"flex-col justify-center"),N=f(e,"expandedPadding",3,"py-3 px-4"),m=f(e,"expandedGap",3,"gap-4"),y=f(e,"expandedClasses",3,""),x=f(e,"labelBase",3,"text-xs"),w=f(e,"labelClasses",3,""),p=f(e,"labelExpandedBase",3,""),_=f(e,"labelExpandedClasses",3,""),c=_t(),S=ie(()=>e.href?"a":"button"),J=ie(()=>e.href?void 0:"button"),le=ie(()=>c.parent==="bar"?"h-full":`${v()}`),Y=ie(()=>`${E(le)} ${d()} ${A()} ${h()}`),H=ie(()=>`${N()} ${m()} ${y()}`),K=ie(()=>c.expanded?E(H):E(Y)),X=ie(()=>l()!==void 0?l():c.value===r()),M=ie(()=>E(X)?b():`${o()} ${g()}`);function T(){if(e.onclick&&!r())throw new Error("No ID was provided");e.onclick&&r()&&e.onclick(r()),c.onValueChange?.(r())}var B=j(),I=G(B);ua(I,()=>E(S),!1,(U,he)=>{Ve(U,()=>({class:`${i()??""} ${s()??""} ${u()??""} ${E(M)??""} ${E(K)??""}`,href:e.href,target:e.target,type:E(S)==="button"?n():void 0,title:e.title,role:E(J),onclick:T,tabindex:"0","data-testid":"nav-tile"}));var W=yt(),R=G(W);{var fe=ee=>{var q=Et(),_e=P(q);F(_e,()=>e.children),k(q),C(ee,q)};se(R,ee=>{e.children&&ee(fe)})}var je=D(R,2);{var ba=ee=>{var q=At(),_e=P(q,!0);k(q),ae(()=>{Z(q,1,`${x()??""} ${w()??""}`),xe(_e,e.label)}),C(ee,q)};se(je,ee=>{e.label&&!c.expanded&&ee(ba)})}var ma=D(je,2);{var xa=ee=>{var q=Ct(),_e=P(q,!0);k(q),ae(()=>{Z(q,1,`${p()??""} ${_()??""}`),xe(_e,e.labelExpanded)}),C(ee,q)};se(ma,ee=>{e.labelExpanded&&c.expanded&&ee(xa)})}C(he,W)}),C(a,B),z()}const He=Object.assign(ea,{Rail:ea,Bar:mt,Tile:Mt});var ye;ye=Ie({api:{},indicatorText:""}),ye[0];ye[1];ye[2];var Me;Me=Ie({fluid:!1,api:{}}),Me[0];Me[1];Me[2];/**
 * @license @lucide/svelte v0.533.0 - ISC
 *
 * ISC License
 * 
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 */const Tt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};var kt=Xa("<svg><!><!></svg>");function re(a,e){V(e,!0);const t=f(e,"color",3,"currentColor"),r=f(e,"size",3,24),l=f(e,"strokeWidth",3,2),n=f(e,"absoluteStrokeWidth",3,!1),i=f(e,"iconNode",19,()=>[]),s=$(e,["$$slots","$$events","$$legacy","name","color","size","strokeWidth","absoluteStrokeWidth","iconNode","children"]);var v=kt();Ve(v,b=>({...Tt,...s,width:r(),height:r(),stroke:t(),"stroke-width":b,class:["lucide-icon lucide",e.name&&`lucide-${e.name}`,e.class]}),[()=>n()?Number(l())*24/Number(r()):l()]);var o=P(v);Ee(o,17,i,pe,(b,d)=>{var A=ie(()=>Za(E(d),2));let u=()=>E(A)[0],h=()=>E(A)[1];var N=j(),m=G(N);ua(m,u,!0,(y,x)=>{Ve(y,()=>({...h()}))}),C(b,N)});var g=D(o);F(g,()=>e.children??Q),k(v),C(a,v),z()}function St(a,e){V(e,!0);/**
 * @license @lucide/svelte v0.533.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let t=$(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13"}],["path",{d:"M16 12h3"}]];re(a,te({name:"ampersand"},()=>t,{get iconNode(){return r},children:(l,n)=>{var i=j(),s=G(i);F(s,()=>e.children??Q),C(l,i)},$$slots:{default:!0}})),z()}function It(a,e){V(e,!0);/**
 * @license @lucide/svelte v0.533.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let t=$(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M8 3 4 7l4 4"}],["path",{d:"M4 7h16"}],["path",{d:"m16 21 4-4-4-4"}],["path",{d:"M20 17H4"}]];re(a,te({name:"arrow-left-right"},()=>t,{get iconNode(){return r},children:(l,n)=>{var i=j(),s=G(i);F(s,()=>e.children??Q),C(l,i)},$$slots:{default:!0}})),z()}function Pt(a,e){V(e,!0);/**
 * @license @lucide/svelte v0.533.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let t=$(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"}],["path",{d:"M12 2v2"}],["path",{d:"M12 22v-2"}],["path",{d:"m17 20.66-1-1.73"}],["path",{d:"M11 10.27 7 3.34"}],["path",{d:"m20.66 17-1.73-1"}],["path",{d:"m3.34 7 1.73 1"}],["path",{d:"M14 12h8"}],["path",{d:"M2 12h2"}],["path",{d:"m20.66 7-1.73 1"}],["path",{d:"m3.34 17 1.73-1"}],["path",{d:"m17 3.34-1 1.73"}],["path",{d:"m11 13.73-4 6.93"}]];re(a,te({name:"cog"},()=>t,{get iconNode(){return r},children:(l,n)=>{var i=j(),s=G(i);F(s,()=>e.children??Q),C(l,i)},$$slots:{default:!0}})),z()}function Ot(a,e){V(e,!0);/**
 * @license @lucide/svelte v0.533.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let t=$(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}]];re(a,te({name:"house"},()=>t,{get iconNode(){return r},children:(l,n)=>{var i=j(),s=G(i);F(s,()=>e.children??Q),C(l,i)},$$slots:{default:!0}})),z()}function Bt(a,e){V(e,!0);/**
 * @license @lucide/svelte v0.533.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let t=$(e,["$$slots","$$events","$$legacy"]);const r=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1"}]];re(a,te({name:"pause"},()=>t,{get iconNode(){return r},children:(l,n)=>{var i=j(),s=G(i);F(s,()=>e.children??Q),C(l,i)},$$slots:{default:!0}})),z()}function Dt(a,e){V(e,!0);/**
 * @license @lucide/svelte v0.533.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let t=$(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"}]];re(a,te({name:"play"},()=>t,{get iconNode(){return r},children:(l,n)=>{var i=j(),s=G(i);F(s,()=>e.children??Q),C(l,i)},$$slots:{default:!0}})),z()}function Lt(a,e){V(e,!0);/**
 * @license @lucide/svelte v0.533.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let t=$(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"m17 2 4 4-4 4"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14"}],["path",{d:"m7 22-4-4 4-4"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3"}]];re(a,te({name:"repeat"},()=>t,{get iconNode(){return r},children:(l,n)=>{var i=j(),s=G(i);F(s,()=>e.children??Q),C(l,i)},$$slots:{default:!0}})),z()}function Ht(a,e){V(e,!0);/**
 * @license @lucide/svelte v0.533.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let t=$(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z"}],["path",{d:"M5 17A12 12 0 0 1 17 5"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}]];re(a,te({name:"spline-pointer"},()=>t,{get iconNode(){return r},children:(l,n)=>{var i=j(),s=G(i);F(s,()=>e.children??Q),C(l,i)},$$slots:{default:!0}})),z()}function Rt(a,e){V(e,!0);/**
 * @license @lucide/svelte v0.533.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let t=$(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M13.971 4.285A2 2 0 0 1 17 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z"}],["path",{d:"M21 20V4"}]];re(a,te({name:"step-back"},()=>t,{get iconNode(){return r},children:(l,n)=>{var i=j(),s=G(i);F(s,()=>e.children??Q),C(l,i)},$$slots:{default:!0}})),z()}function Ft(a,e){V(e,!0);/**
 * @license @lucide/svelte v0.533.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let t=$(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M10.029 4.285A2 2 0 0 0 7 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z"}],["path",{d:"M3 4v16"}]];re(a,te({name:"step-forward"},()=>t,{get iconNode(){return r},children:(l,n)=>{var i=j(),s=G(i);F(s,()=>e.children??Q),C(l,i)},$$slots:{default:!0}})),z()}function Gt(a,e){V(e,!0);/**
 * @license @lucide/svelte v0.533.0 - ISC
 *
 * ISC License
 *
 * Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 */let t=$(e,["$$slots","$$events","$$legacy"]);const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];re(a,te({name:"x"},()=>t,{get iconNode(){return r},children:(l,n)=>{var i=j(),s=G(i);F(s,()=>e.children??Q),C(l,i)},$$slots:{default:!0}})),z()}function Vt(a,e,t){de(e,[0,0,0,0,0],!0),de(t,0)}function zt(a,e,t,r,l){E(e)||t(r,E(l)),de(e,!E(e))}var Jt=L("<pre> </pre>"),Wt=L("<pre> </pre>"),jt=L("<pre> </pre>"),Yt=L("<button><!></button>"),Ut=L('<div class="card w-full max-w-md preset-filled-surface-100-900 p-4 text-center">code to crack: <div class="flex flex-row"></div> <div class="flex flex-row"></div> <hr class="hr border-t-4 border-stone-500 m-1"/> <div class="card w-full max-w-md bg-stone-400 preset-filled-surface-100-900 p-4 text-center"><pre class="pre">instructions</pre> <div class="flex flex-row"></div> <div class="flex flex-row"><button><!></button> <button><!></button> <button><!></button> <button><!></button></div></div> <div class="flex flex-row"><!> <!> <!> <button><!></button></div></div>');function qt(a,e){V(e,!0);let t=Ne([{operator:"x",relative:null,absolute:null},{operator:"m",relative:1,absolute:null},{operator:"a",relative:null,absolute:4}]),r=we(0),l=Ne([{operator:"x",relative:null,absolute:null},{operator:"m",relative:3,absolute:null},{operator:"a",relative:null,absolute:4},{operator:"m",relative:3,absolute:null},{operator:"x",relative:null,absolute:null},{operator:"m",relative:1,absolute:null}]),n=Ne([0,0,0,0,0]),i=we(Ne([0,0,0,0,0])),s=we(!1);v(l,n,!0);async function v(M,T,B){for(let I=0;I<M.length;I++){console.log(M[I].operator);let U=0;switch(M[I].relative!=null?U=(E(r)+M[I].relative)%n.length:U=M[I].absolute%n.length,M[I].operator){case"x":T[E(r)]^=1;break;case"m":de(r,U,!0);break;case"a":T[E(r)]&=T[U];break;case"o":T[E(r)]|=T[U];break}await new Promise(he=>setTimeout(he,200))}B&&de(r,0),de(s,!1)}var o=Ut(),g=D(P(o));Ee(g,21,()=>E(i),pe,(M,T,B)=>{var I=Jt(),U=P(I,!0);k(I),ae(()=>{Z(I,1,`pre m-auto ${B==E(r)?"bg-red-400":""}`),xe(U,E(T))}),C(M,I)}),k(g);var b=D(g,2);Ee(b,21,()=>n,pe,(M,T,B)=>{var I=Wt(),U=P(I,!0);k(I),ae(()=>{Z(I,1,`pre m-auto ${B==E(r)?"bg-blue-400":""}`),xe(U,E(T))}),C(M,I)}),k(b);var d=D(b,4),A=D(P(d),2);Ee(A,21,()=>t,pe,(M,T)=>{var B=jt();Z(B,1,"pre m-auto");var I=P(B,!0);k(B),ae(()=>xe(I,E(T).operator+(E(T).relative!=null?`{${E(T).relative}}`:E(T).absolute!=null?`[${E(T).absolute}]`:""))),C(M,B)}),k(A);var u=D(A,2),h=P(u);h.__click=add_insn;var N=P(h);Gt(N,{}),k(h);var m=D(h,2);m.__click=add_insn;var y=P(m);It(y,{}),k(m);var x=D(m,2);x.__click=add_insn;var w=P(x);St(w,{}),k(x);var p=D(x,2);p.__click=add_insn;var _=P(p);Ht(_,{}),k(p),k(u),k(d);var c=D(d,2),S=P(c);Rt(S,{});var J=D(S,2);{var le=M=>{Bt(M,{})},Y=M=>{var T=Yt();T.__click=[zt,s,v,t,i];var B=P(T);Dt(B,{}),k(T),C(M,T)};se(J,M=>{E(s)?M(le):M(Y,!1)})}var H=D(J,2);Ft(H,{});var K=D(H,2);K.__click=[Vt,i,r];var X=P(K);Lt(X,{}),k(K),k(c),k(o),C(a,o),z()}We(["click"]);var Kt=L('<pre class="pre">options o algo</pre>');function Xt(a){var e=Kt();C(a,e)}var Zt=L("<!> <!>",1),Qt=L('<div class="card bg-stone-900 border-surface-100-900 flex h-screen w-full flex-col border-[1px]"><!> <div class="flex flex-col items-center justify-center h-full"><!></div></div>');function lr(a){let e=we("home");var t=Qt(),r=P(t);Oe(r,()=>He.Bar,(v,o)=>{o(v,{get value(){return E(e)},onValueChange:g=>de(e,g,!0),children:(g,b)=>{var d=Zt(),A=G(d);Oe(A,()=>He.Tile,(h,N)=>{N(h,{id:"home",label:"Home",children:(m,y)=>{Ot(m,{})},$$slots:{default:!0}})});var u=D(A,2);Oe(u,()=>He.Tile,(h,N)=>{N(h,{id:"options",label:"Options",children:(m,y)=>{Pt(m,{})},$$slots:{default:!0}})}),C(g,d)},$$slots:{default:!0}})});var l=D(r,2),n=P(l);{var i=v=>{qt(v,{})},s=v=>{var o=j(),g=G(o);{var b=d=>{Xt(d)};se(g,d=>{E(e)=="options"&&d(b)},!0)}C(v,o)};se(n,v=>{E(e)=="home"?v(i):v(s,!1)})}k(l),k(t),C(a,t)}export{lr as component};
