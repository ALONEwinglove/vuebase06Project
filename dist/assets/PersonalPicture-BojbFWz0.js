import{_ as w}from"./PageContainer-C-j3-XZQ.js";import{q as E,v as U,s as p,g as l,w as a,o as n,y as t,z as b,L as x,j as r,b4 as _,C as d,bN as P,bO as S,E as B}from"./index-C1-3Va_Q.js";import{E as C}from"./el-button-DttVCxvJ.js";import{E as N,a as R}from"./el-image-viewer-Gql6Nrth.js";import"./el-message-CV4VKWSk.js";import"./index-gWv59jN5.js";import"./debounce-QFhGnP8G.js";import"./_baseClone-BT2RwVCk.js";const z={__name:"PersonalPicture",setup(I){const c=U(),o=p(c.user.user_pic),s=p(),m=u=>{const e=new FileReader;e.readAsDataURL(u.raw),e.onload=()=>{o.value=e.result,console.log(o.value)}},f=async()=>{await S(o.value),await c.getUser(),B.success("更新成功")};return(u,e)=>{const v=R,g=x,y=N,i=C,k=w;return n(),l(k,{title:"更换头像"},{default:a(()=>[t(y,{ref_key:"uploadRef",ref:s,"auto-upload":!1,"on-change":m,"show-file-list":!1},{default:a(()=>[o.value?(n(),l(v,{key:0,src:o.value,class:"avatar",fit:"scale-down"},null,8,["src"])):(n(),l(g,{key:1,class:"avatar-uploader-icon"},{default:a(()=>[t(r(_))]),_:1}))]),_:1},512),e[3]||(e[3]=b("br",null,null,-1)),t(i,{onClick:e[0]||(e[0]=V=>{s.value.$el.querySelector("input").click(),console.log(s.value.$el)}),type:"primary",icon:r(_),size:"small"},{default:a(()=>e[1]||(e[1]=[d("选择图片")])),_:1},8,["icon"]),t(i,{onClick:f,type:"success",icon:r(P),size:"small"},{default:a(()=>e[2]||(e[2]=[d("上传头像")])),_:1},8,["icon"])]),_:1})}}},O=E(z,[["__scopeId","data-v-0c9e48d9"]]);export{O as default};
