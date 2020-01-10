import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/global.scss'
Vue.config.productionTip = false

router.beforeEach((to, form, next) => {
  if (to.meta.title) {
    window.document.title = 'Mall | '+to.meta.title
  }
  next()
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
