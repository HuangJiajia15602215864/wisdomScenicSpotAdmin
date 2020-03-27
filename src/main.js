// main.js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/zh-CN' // lang i18n
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css' // A modern alternative to CSS resets
//import '@/styles/index.scss' // global css
import 'element-ui/lib/theme-chalk/index.css'
import '@/icons' // icon
import '@/assets/mock/index'
import Api from '@/assets/http/apiUrl'
import Request from '@/assets/http'
import 'default-passive-events'

Vue.prototype.$request = Request
Vue.prototype.API = Api

Vue.config.productionTip = false
Vue.use(ElementUI, {
  locale
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

