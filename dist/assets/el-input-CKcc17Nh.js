import{cb as we,c7 as xe,bf as ae,cc as Me,bd as Ze,b8 as je,be as et,cd as tt,aF as Oe,e as Se,b as Be,I as Z,m as nt,d as j,G as Ce,aV as at,a3 as ot,aM as G,s as H,t as Y,V as ee,ax as Ie,a4 as T,_ as st,a as Re,bX as lt,O as rt,c as y,u as Ee,aQ as it,ce as ut,cf as ct,aj as dt,ai as pt,Q as ft,S as vt,K as C,o as m,$ as h,a6 as te,z as N,h as b,j as a,r as U,g as E,w as B,k as W,L as R,M as Pe,y as mt,aU as ht,a5 as gt,bB as yt,al as _,n as ze,f as ke,l as bt}from"./index-C1-3Va_Q.js";import{i as He,l as wt,m as xt,j as St,u as Ct,f as It,c as Et,d as Pt,e as Fe}from"./el-button-DttVCxvJ.js";function zt(e){return e}function kt(e,o,l){switch(l.length){case 0:return e.call(o);case 1:return e.call(o,l[0]);case 2:return e.call(o,l[0],l[1]);case 3:return e.call(o,l[0],l[1],l[2])}return e.apply(o,l)}var Ft=800,Nt=16,Tt=Date.now;function Vt(e){var o=0,l=0;return function(){var n=Tt(),s=Nt-(n-l);if(l=n,s>0){if(++o>=Ft)return arguments[0]}else o=0;return e.apply(void 0,arguments)}}function Mt(e){return function(){return e}}var Ot=we?function(e,o){return we(e,"toString",{configurable:!0,enumerable:!1,value:Mt(o),writable:!0})}:zt,Bt=Vt(Ot),Ne=Math.max;function Rt(e,o,l){return o=Ne(o===void 0?e.length-1:o,0),function(){for(var n=arguments,s=-1,u=Ne(n.length-o,0),i=Array(u);++s<u;)i[s]=n[o+s];s=-1;for(var r=Array(o+1);++s<o;)r[s]=n[s];return r[o]=l(i),kt(e,this,r)}}var Te=xe?xe.isConcatSpreadable:void 0;function Ht(e){return ae(e)||He(e)||!!(Te&&e&&e[Te])}function Lt(e,o,l,n,s){var u=-1,i=e.length;for(l||(l=Ht),s||(s=[]);++u<i;){var r=e[u];l(r)?wt(s,r):s[s.length]=r}return s}function At(e){var o=e==null?0:e.length;return o?Lt(e):[]}function $t(e){return Bt(Rt(e,void 0,At),e+"")}function pn(){if(!arguments.length)return[];var e=arguments[0];return ae(e)?e:[e]}function Dt(e,o){return e!=null&&o in Object(e)}function Kt(e,o,l){o=Me(o,e);for(var n=-1,s=o.length,u=!1;++n<s;){var i=Ze(o[n]);if(!(u=e!=null&&l(e,i)))break;e=e[i]}return u||++n!=s?u:(s=e==null?0:e.length,!!s&&xt(s)&&je(i,s)&&(ae(e)||He(e)))}function Ut(e,o){return e!=null&&Kt(e,o,Dt)}function Wt(e,o,l){for(var n=-1,s=o.length,u={};++n<s;){var i=o[n],r=et(e,i);l(r,i)&&tt(u,Me(i,e),r)}return u}function _t(e,o){return Wt(e,o,function(l,n){return Ut(e,n)})}var Gt=$t(function(e,o){return e==null?{}:_t(e,o)});const ne="update:modelValue",fn="change",Yt=()=>Oe&&/firefox/i.test(window.navigator.userAgent);let S;const Qt={height:"0",visibility:"hidden",overflow:Yt()?"":"hidden",position:"absolute","z-index":"-1000",top:"0",right:"0"},Xt=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function qt(e){const o=window.getComputedStyle(e),l=o.getPropertyValue("box-sizing"),n=Number.parseFloat(o.getPropertyValue("padding-bottom"))+Number.parseFloat(o.getPropertyValue("padding-top")),s=Number.parseFloat(o.getPropertyValue("border-bottom-width"))+Number.parseFloat(o.getPropertyValue("border-top-width"));return{contextStyle:Xt.map(i=>[i,o.getPropertyValue(i)]),paddingSize:n,borderSize:s,boxSizing:l}}function Ve(e,o=1,l){var n;S||(S=document.createElement("textarea"),document.body.appendChild(S));const{paddingSize:s,borderSize:u,boxSizing:i,contextStyle:r}=qt(e);r.forEach(([g,v])=>S==null?void 0:S.style.setProperty(g,v)),Object.entries(Qt).forEach(([g,v])=>S==null?void 0:S.style.setProperty(g,v,"important")),S.value=e.value||e.placeholder||"";let d=S.scrollHeight;const w={};i==="border-box"?d=d+u:i==="content-box"&&(d=d-s),S.value="";const f=S.scrollHeight-s;if(Se(o)){let g=f*o;i==="border-box"&&(g=g+s+u),d=Math.max(g,d),w.minHeight=`${g}px`}if(Se(l)){let g=f*l;i==="border-box"&&(g=g+s+u),d=Math.min(g,d)}return w.height=`${d}px`,(n=S.parentNode)==null||n.removeChild(S),S=void 0,w}const Jt=Be({ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical","undefined"]},ariaControls:String}),Zt=e=>Gt(Jt,e),jt=Be({id:{type:String,default:void 0},size:at,disabled:Boolean,modelValue:{type:j([String,Number,Object]),default:""},maxlength:{type:[String,Number]},minlength:{type:[String,Number]},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:j([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:Boolean,clearable:Boolean,showPassword:Boolean,showWordLimit:Boolean,suffixIcon:{type:Ce},prefixIcon:{type:Ce},containerRole:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:j([Object,Array,String]),default:()=>nt({})},autofocus:Boolean,rows:{type:Number,default:2},...Zt(["ariaLabel"])}),en={[ne]:e=>Z(e),input:e=>Z(e),change:e=>Z(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent};function tn(e,{beforeFocus:o,afterFocus:l,beforeBlur:n,afterBlur:s}={}){const u=ot(),{emit:i}=u,r=G(),d=H(!1),w=v=>{Ie(o)&&o(v)||d.value||(d.value=!0,i("focus",v),l==null||l())},f=v=>{var x;Ie(n)&&n(v)||v.relatedTarget&&((x=r.value)!=null&&x.contains(v.relatedTarget))||(d.value=!1,i("blur",v),s==null||s())},g=()=>{var v,x;(v=r.value)!=null&&v.contains(document.activeElement)&&r.value!==document.activeElement||(x=e.value)==null||x.focus()};return Y(r,v=>{v&&v.setAttribute("tabindex","-1")}),ee(r,"focus",w,!0),ee(r,"blur",f,!0),ee(r,"click",g,!0),{isFocused:d,wrapperRef:r,handleFocus:w,handleBlur:f}}const nn=e=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(e);function an({afterComposition:e,emit:o}){const l=H(!1),n=r=>{o==null||o("compositionstart",r),l.value=!0},s=r=>{var d;o==null||o("compositionupdate",r);const w=(d=r.target)==null?void 0:d.value,f=w[w.length-1]||"";l.value=!nn(f)},u=r=>{o==null||o("compositionend",r),l.value&&(l.value=!1,T(()=>e(r)))};return{isComposing:l,handleComposition:r=>{r.type==="compositionend"?u(r):s(r)},handleCompositionStart:n,handleCompositionUpdate:s,handleCompositionEnd:u}}function on(e){let o;function l(){if(e.value==null)return;const{selectionStart:s,selectionEnd:u,value:i}=e.value;if(s==null||u==null)return;const r=i.slice(0,Math.max(0,s)),d=i.slice(Math.max(0,u));o={selectionStart:s,selectionEnd:u,value:i,beforeTxt:r,afterTxt:d}}function n(){if(e.value==null||o==null)return;const{value:s}=e.value,{beforeTxt:u,afterTxt:i,selectionStart:r}=o;if(u==null||i==null||r==null)return;let d=s.length;if(s.endsWith(i))d=s.length-i.length;else if(s.startsWith(u))d=u.length;else{const w=u[r-1],f=s.indexOf(w,r-1);f!==-1&&(d=f+1)}e.value.setSelectionRange(d,d)}return[l,n]}const sn=Re({name:"ElInput",inheritAttrs:!1}),ln=Re({...sn,props:jt,emits:en,setup(e,{expose:o,emit:l}){const n=e,s=lt(),u=St(),i=rt(),r=y(()=>[n.type==="textarea"?oe.b():c.b(),c.m(v.value),c.is("disabled",x.value),c.is("exceed",Ue.value),{[c.b("group")]:i.prepend||i.append,[c.m("prefix")]:i.prefix||n.prefixIcon,[c.m("suffix")]:i.suffix||n.suffixIcon||n.clearable||n.showPassword,[c.bm("suffix","password-clear")]:K.value&&X.value,[c.b("hidden")]:n.type==="hidden"},s.class]),d=y(()=>[c.e("wrapper"),c.is("focus",D.value)]),{form:w,formItem:f}=Et(),{inputId:g}=Pt(n,{formItemContext:f}),v=Ct(),x=It(),c=Ee("input"),oe=Ee("textarea"),L=G(),I=G(),Q=H(!1),A=H(!1),se=H(),$=G(n.inputStyle),z=y(()=>L.value||I.value),{wrapperRef:Le,isFocused:D,handleFocus:Ae,handleBlur:$e}=tn(z,{beforeFocus(){return x.value},afterBlur(){var t;n.validateEvent&&((t=f==null?void 0:f.validate)==null||t.call(f,"blur").catch(p=>Fe()))}}),le=y(()=>{var t;return(t=w==null?void 0:w.statusIcon)!=null?t:!1}),V=y(()=>(f==null?void 0:f.validateState)||""),re=y(()=>V.value&&it[V.value]),De=y(()=>A.value?ut:ct),Ke=y(()=>[s.style]),ie=y(()=>[n.inputStyle,$.value,{resize:n.resize}]),P=y(()=>dt(n.modelValue)?"":String(n.modelValue)),K=y(()=>n.clearable&&!x.value&&!n.readonly&&!!P.value&&(D.value||Q.value)),X=y(()=>n.showPassword&&!x.value&&!!P.value&&(!!P.value||D.value)),k=y(()=>n.showWordLimit&&!!n.maxlength&&(n.type==="text"||n.type==="textarea")&&!x.value&&!n.readonly&&!n.showPassword),q=y(()=>P.value.length),Ue=y(()=>!!k.value&&q.value>Number(n.maxlength)),We=y(()=>!!i.suffix||!!n.suffixIcon||K.value||n.showPassword||k.value||!!V.value&&le.value),[ue,ce]=on(L);pt(I,t=>{if(_e(),!k.value||n.resize!=="both")return;const p=t[0],{width:F}=p.contentRect;se.value={right:`calc(100% - ${F+15+6}px)`}});const M=()=>{const{type:t,autosize:p}=n;if(!(!Oe||t!=="textarea"||!I.value))if(p){const F=ke(p)?p.minRows:void 0,ye=ke(p)?p.maxRows:void 0,be=Ve(I.value,F,ye);$.value={overflowY:"hidden",...be},T(()=>{I.value.offsetHeight,$.value=be})}else $.value={minHeight:Ve(I.value).minHeight}},_e=(t=>{let p=!1;return()=>{var F;if(p||!n.autosize)return;((F=I.value)==null?void 0:F.offsetParent)===null||(t(),p=!0)}})(M),O=()=>{const t=z.value,p=n.formatter?n.formatter(P.value):P.value;!t||t.value===p||(t.value=p)},J=async t=>{ue();let{value:p}=t.target;if(n.formatter&&(p=n.parser?n.parser(p):p),!pe.value){if(p===P.value){O();return}l(ne,p),l("input",p),await T(),O(),ce()}},de=t=>{l("change",t.target.value)},{isComposing:pe,handleCompositionStart:fe,handleCompositionUpdate:ve,handleCompositionEnd:me}=an({emit:l,afterComposition:J}),Ge=()=>{ue(),A.value=!A.value,setTimeout(ce)},Ye=()=>{var t;return(t=z.value)==null?void 0:t.focus()},Qe=()=>{var t;return(t=z.value)==null?void 0:t.blur()},Xe=t=>{Q.value=!1,l("mouseleave",t)},qe=t=>{Q.value=!0,l("mouseenter",t)},he=t=>{l("keydown",t)},Je=()=>{var t;(t=z.value)==null||t.select()},ge=()=>{l(ne,""),l("change",""),l("clear"),l("input","")};return Y(()=>n.modelValue,()=>{var t;T(()=>M()),n.validateEvent&&((t=f==null?void 0:f.validate)==null||t.call(f,"change").catch(p=>Fe()))}),Y(P,()=>O()),Y(()=>n.type,async()=>{await T(),O(),M()}),ft(()=>{!n.formatter&&n.parser,O(),T(M)}),o({input:L,textarea:I,ref:z,textareaStyle:ie,autosize:vt(n,"autosize"),isComposing:pe,focus:Ye,blur:Qe,select:Je,clear:ge,resizeTextarea:M}),(t,p)=>(m(),C("div",{class:b([a(r),{[a(c).bm("group","append")]:t.$slots.append,[a(c).bm("group","prepend")]:t.$slots.prepend}]),style:ze(a(Ke)),onMouseenter:qe,onMouseleave:Xe},[h(" input "),t.type!=="textarea"?(m(),C(te,{key:0},[h(" prepend slot "),t.$slots.prepend?(m(),C("div",{key:0,class:b(a(c).be("group","prepend"))},[U(t.$slots,"prepend")],2)):h("v-if",!0),N("div",{ref_key:"wrapperRef",ref:Le,class:b(a(d))},[h(" prefix slot "),t.$slots.prefix||t.prefixIcon?(m(),C("span",{key:0,class:b(a(c).e("prefix"))},[N("span",{class:b(a(c).e("prefix-inner"))},[U(t.$slots,"prefix"),t.prefixIcon?(m(),E(a(R),{key:0,class:b(a(c).e("icon"))},{default:B(()=>[(m(),E(W(t.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),N("input",Pe({id:a(g),ref_key:"input",ref:L,class:a(c).e("inner")},a(u),{minlength:t.minlength,maxlength:t.maxlength,type:t.showPassword?A.value?"text":"password":t.type,disabled:a(x),readonly:t.readonly,autocomplete:t.autocomplete,tabindex:t.tabindex,"aria-label":t.ariaLabel,placeholder:t.placeholder,style:t.inputStyle,form:t.form,autofocus:t.autofocus,role:t.containerRole,onCompositionstart:a(fe),onCompositionupdate:a(ve),onCompositionend:a(me),onInput:J,onChange:de,onKeydown:he}),null,16,["id","minlength","maxlength","type","disabled","readonly","autocomplete","tabindex","aria-label","placeholder","form","autofocus","role","onCompositionstart","onCompositionupdate","onCompositionend"]),h(" suffix slot "),a(We)?(m(),C("span",{key:1,class:b(a(c).e("suffix"))},[N("span",{class:b(a(c).e("suffix-inner"))},[!a(K)||!a(X)||!a(k)?(m(),C(te,{key:0},[U(t.$slots,"suffix"),t.suffixIcon?(m(),E(a(R),{key:0,class:b(a(c).e("icon"))},{default:B(()=>[(m(),E(W(t.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),a(K)?(m(),E(a(R),{key:1,class:b([a(c).e("icon"),a(c).e("clear")]),onMousedown:gt(a(yt),["prevent"]),onClick:ge},{default:B(()=>[mt(a(ht))]),_:1},8,["class","onMousedown"])):h("v-if",!0),a(X)?(m(),E(a(R),{key:2,class:b([a(c).e("icon"),a(c).e("password")]),onClick:Ge},{default:B(()=>[(m(),E(W(a(De))))]),_:1},8,["class"])):h("v-if",!0),a(k)?(m(),C("span",{key:3,class:b(a(c).e("count"))},[N("span",{class:b(a(c).e("count-inner"))},_(a(q))+" / "+_(t.maxlength),3)],2)):h("v-if",!0),a(V)&&a(re)&&a(le)?(m(),E(a(R),{key:4,class:b([a(c).e("icon"),a(c).e("validateIcon"),a(c).is("loading",a(V)==="validating")])},{default:B(()=>[(m(),E(W(a(re))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),t.$slots.append?(m(),C("div",{key:1,class:b(a(c).be("group","append"))},[U(t.$slots,"append")],2)):h("v-if",!0)],64)):(m(),C(te,{key:1},[h(" textarea "),N("textarea",Pe({id:a(g),ref_key:"textarea",ref:I,class:[a(oe).e("inner"),a(c).is("focus",a(D))]},a(u),{minlength:t.minlength,maxlength:t.maxlength,tabindex:t.tabindex,disabled:a(x),readonly:t.readonly,autocomplete:t.autocomplete,style:a(ie),"aria-label":t.ariaLabel,placeholder:t.placeholder,form:t.form,autofocus:t.autofocus,rows:t.rows,role:t.containerRole,onCompositionstart:a(fe),onCompositionupdate:a(ve),onCompositionend:a(me),onInput:J,onFocus:a(Ae),onBlur:a($e),onChange:de,onKeydown:he}),null,16,["id","minlength","maxlength","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form","autofocus","rows","role","onCompositionstart","onCompositionupdate","onCompositionend","onFocus","onBlur"]),a(k)?(m(),C("span",{key:0,style:ze(se.value),class:b(a(c).e("count"))},_(a(q))+" / "+_(t.maxlength),7)):h("v-if",!0)],64))],38))}});var rn=st(ln,[["__file","input.vue"]]);const vn=bt(rn);export{fn as C,vn as E,ne as U,tn as a,Zt as b,pn as c,Lt as d,Ut as h,zt as i,Rt as o,Gt as p,Bt as s,an as u};
