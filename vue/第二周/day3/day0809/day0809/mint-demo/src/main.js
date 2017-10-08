import Vue from 'vue'
import App from './App'
import router from './router'

//import MintUI from 'mint-ui'
//import 'mint-ui/lib/style.css'
//Vue.use(MintUI)


new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})



/*
 a.js 引入 b.js
 b.js 又引入  a.js
 
 入口文件是 a.js
 * */
