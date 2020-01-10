import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: () => import('../views/home/Home'),
  meta: {
    title: '首页'
  }
}, {
  path: '/my',
  component: () => import('../views/my/My'),
  meta: {
    title: '我的'
  }
}]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
