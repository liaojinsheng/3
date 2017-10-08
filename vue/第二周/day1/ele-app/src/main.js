import Vue from 'vue'
import App from './App'

//路由
import router from './router'

//过滤器
import './filter'
//请求
import axios from 'axios'
Vue.prototype.$http = axios;



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
