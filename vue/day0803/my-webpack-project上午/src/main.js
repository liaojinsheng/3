import Vue from 'vue'
import App from './App'

import router from './router'



/* eslint-disable no-new */
new Vue({
  el: '#app',
//router,
//配置当前这个vue实例对象的路由对象
  router: router,
  template: '<App/>',
  components: { 
  	'App': App
  }
})
