import{b as y,d as h,a as _,u as m,K as l,o as r,$ as u,z as n,h as o,j as a,r as t,C as p,al as d,n as v,_ as b,l as g,q as C,g as S,w as f}from"./index-C1-3Va_Q.js";const $=y({header:{type:String,default:""},footer:{type:String,default:""},bodyStyle:{type:h([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),w=_({name:"ElCard"}),k=_({...w,props:$,setup(i){const s=m("card");return(e,c)=>(r(),l("div",{class:o([a(s).b(),a(s).is(`${e.shadow}-shadow`)])},[e.$slots.header||e.header?(r(),l("div",{key:0,class:o(a(s).e("header"))},[t(e.$slots,"header",{},()=>[p(d(e.header),1)])],2)):u("v-if",!0),n("div",{class:o([a(s).e("body"),e.bodyClass]),style:v(e.bodyStyle)},[t(e.$slots,"default")],6),e.$slots.footer||e.footer?(r(),l("div",{key:1,class:o(a(s).e("footer"))},[t(e.$slots,"footer",{},()=>[p(d(e.footer),1)])],2)):u("v-if",!0)],2))}});var B=b(k,[["__file","card.vue"]]);const N=g(B),P={class:"AMheader"},z={class:"AMHbutton"},A={__name:"PageContainer",props:{title:{require:!0,type:String}},setup(i){return(s,e)=>{const c=N;return r(),S(c,{class:"articlemanage"},{header:f(()=>[n("div",P,[n("span",null,d(i.title),1),n("div",z,[t(s.$slots,"button",{},void 0,!0)])])]),default:f(()=>[t(s.$slots,"default",{},void 0,!0)]),_:3})}}},V=C(A,[["__scopeId","data-v-b89d4bcc"]]);export{V as _};
