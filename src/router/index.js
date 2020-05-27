import Vue from 'vue'
import Router from 'vue-router'
import module from './module'
Vue.use(Router)

// 常规路由（重定向、登录注册忘记密码、首页、404）
export const constantRoutes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => void require(['@/views/login/index'], resolve),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: resolve => void require(['@/views/login/register'], resolve),
    meta: {
      title: '注册'
    }
  },
  {
    path: '/resetPsw',
    name: 'ResetPsw',
    component: resolve => void require(['@/views/login/resetPsw'], resolve),
    meta: {
      title: '忘记密码'
    }
  },
  {
    path: '/home',
    redirect:'/home/scenicSpotIntro',
    component: () => import('@/layout'),
    meta: {
      title: '主页'
    },
    children: [
      ...module
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRoutes
})
const router = createRouter()

// 路由拦截
router.beforeEach((to, from, next) => {
  // 设置全局标题
  document.title = to.meta.title || '智慧景区后台管理系统'
  next();
})

export default router
