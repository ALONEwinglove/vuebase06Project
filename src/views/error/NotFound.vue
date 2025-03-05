<template>
    <div class="not-found">
      <h1>404</h1>
      <p>页面未找到</p>
      <router-link to="/">返回首页</router-link>
    </div>
  </template>
  
  <style scoped>
  .not-found {
    text-align: center;
    margin-top: 100px;
  }
  
  .not-found h1 {
    font-size: 100px;
    color: #f56c6c;
  }
  
  .not-found p {
    font-size: 24px;
    margin: 20px 0;
  }
  
  .not-found a {
    color: #409eff;
    text-decoration: none;
  }
  </style>