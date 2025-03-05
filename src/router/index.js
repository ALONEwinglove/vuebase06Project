import { useUserStore } from '@/stores'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
  // 访问前缀--环境变量
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(''),
  // 路由规则
  routes: [
    {
      path: '/',
      redirect: '/layout'
    },
    {
      path: '/login',
      component: () => import('@/views/login/Loginview.vue')
    },
    {
      path: '/layout',
      component: () => import('@/views/layout/Layoutview.vue'),
      children:[
        {
          path: '',
          redirect: { path: 'article/classification' },
        },
        // {
        //   path: '/',
        //   redirect: '/article/classification',
        // },
        {
          path: 'article/classification',
          component: () => import('@/views/article/ArticleClassification.vue')
        },
        {
          path: 'article/manage',
          component: () => import('@/views/article/ArticleManage.vue')
        },
        {
          path: 'personal/information',
          component: () => import('@/views/person/PersonalInformation.vue')
        },
        {
          path: 'personal/picture',
          component: () => import('@/views/person/PersonalPicture.vue')
        },
        {
          path: 'personal/setting',
          component: () => import('@/views/person/PersonalSetting.vue')
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*', // 404 路由
      component: () => import('@/views/error/NotFound.vue'), // 404 页面
    },
  ],
})

// 登录访问拦截
router.beforeEach((to,from) => {
  const userStore = useUserStore()
  if (!userStore.token && to.path != '/login') return '/login'
})

export default router
