import Vue from 'vue'
import App from './App.vue'
import router from './router'
import TypeNav from './pages/Home/TypeNav'
import { reqCategoryList } from '@/api'
import store from './store'
import Pagenation from './components/Pagenation'
Vue.component('TypeNav', TypeNav)
Vue.component('Pagenation', Pagenation)
Vue.config.productionTip = false
// reqCategoryList()
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
