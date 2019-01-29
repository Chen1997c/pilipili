import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'font-awesome/css/font-awesome.min.css';
import '@/assets/style/theme.css';
import 'animate.css'
import countIcon from '@/components/common/countIcon'

Vue.use(Vant);
Vue.component('count-icon',countIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
