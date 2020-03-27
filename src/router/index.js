import Vue from 'vue'
import Router from 'vue-router'
import module from './module'
import MapContainer from '@/components/MapContainer'
Vue.use(Router)

// 常规路由（重定向、登录注册忘记密码、首页、404）
export const constantRoutes = [
  // {
  //   path: '/',
  //   redirect: '/login'
  // },
  {
    path: '/',
    name: 'MapContainer',
    component: MapContainer
  },
  {
    path: '/login',
    name: 'Login',
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
<<<<<<< HEAD
    children: [
      ...module
=======
    children: [{
        path: '/home/scenicSpotIntro',
        name: 'scenicSpotIntro',
        component: resolve => void require(['@/views/scenicSpotInfo/scenicSpotIntro/index'], resolve),
        meta: {
          title: '景点介绍'
        },
      },
      {
        path: '/home/scenicSpotIntro/edit',
        name: 'editScenicSpot',
        component: resolve => void require(['@/views/scenicSpotInfo/scenicSpotIntro/edit'], resolve),
        meta: {
          title: '景点信息编辑'
        },
      },
      {
        path: '/home/activityInfo',
        name: 'activityInfo',
        component: resolve => void require(['@/views/scenicSpotInfo/activityInfo/index'], resolve),
        meta: {
          title: '活动资讯'
        }
      },
      {
        path: '/home/activityInfo/edit',
        name: 'editActivity',
        component: resolve => void require(['@/views/scenicSpotInfo/activityInfo/edit'], resolve),
        meta: {
          title: '活动资讯编辑'
        }
      },
      {
        path: '/home/bookParking',
        name: 'bookParking',
        component: resolve => void require(['@/views/bookingInfo/bookParking'], resolve),
        meta: {
          title: '预约停车'
        }
      },
      {
        path: '/home/scenicSpotTraffic',
        name: 'scenicSpotTraffic',
        component: resolve => void require(['@/views/dataVisualization/scenicSpotTraffic'], resolve),
        meta: {
          title: '景区客流'
        }
      },
>>>>>>> 18295525f6db1bd161bba8792f66634e30ad6e51
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
