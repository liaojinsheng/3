import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import Home from '../pages/Home.vue'
import Hot from '../pages/Hot.vue'

export default new Router({
  routes: [
  	{
  		path: '/home',
  		component: Home
  	},
  	{
  		path: '/hot',
  		component: Hot
  	},
  	{
  		path: '*',
  		redirect: '/home'
  	}
  ]
})
