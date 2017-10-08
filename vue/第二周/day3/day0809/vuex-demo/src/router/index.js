import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import One from '../pages/One.vue'
import Two from '../pages/Two.vue'
import Three from '../pages/Three.vue'
import Four from '../pages/Four.vue'

export default new Router({
  routes: [
  	{
  		path: '/one',
  		component: One
  	},
  	{
  		path: '/two',
  		component: Two
  	},
  	{
  		path: '/three',
  		component: Three
  	},
  	{
  		path: '/four',
  		component: Four
  	},
  	{
  		path: '*',
  		redirect: '/one'
  	}
  ]
})
