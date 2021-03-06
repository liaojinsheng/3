import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

console.log(store)

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
