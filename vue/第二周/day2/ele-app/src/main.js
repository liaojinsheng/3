import Vue from 'vue'
import App from './App'

//路由
import router from './router'

//状态管理
import store from './store'

//过滤器
import './filter'
//请求
import axios from 'axios'
Vue.prototype.$http = axios;

//处理非父子组件的通信
var Event = new Vue();
Vue.prototype.$eventHandle = Event;


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

