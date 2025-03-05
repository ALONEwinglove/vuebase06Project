<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useUserStore } from './stores';
// 获取路由对象和参数
const router = useRouter();
const route = useRoute();
// 跳转
const goList = () => {
  router.push('/x');
}
// pinia工具--仓库对象
const userStore = useUserStore();
</script>

<template>
  <div>
    111
    <router-view></router-view>
  </div>
  <div>
    直接使用Element-UI组件库
    <el-button @click="goList">首页</el-button>
    <p>{{ userStore.token }}</p>
    <el-button type="primary" @click="userStore.setToken('Feng Gangqiang')">登录</el-button>
    <el-button type="success" @click="userStore.removeToken()">退出</el-button>
  </div>
</template>

<style scoped>

</style>
