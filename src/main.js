import Vue from 'vue'
import App from './App'
import router from './router'
import 'css/reset.css'
import 'css/border.css'
import 'css/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import "babel-polyfill"
import 'swiper/dist/css/swiper.css'
import axios from 'axios'
import store from './store/index'

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
Vue.prototype.$axios=axios

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
