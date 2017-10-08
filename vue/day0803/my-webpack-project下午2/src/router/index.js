import Vue from 'vue'
//vue-router 是vue的插件
//单页面应用：SPA
//路由：单页面应用的页面控制
//监听地址栏哈希值的变化，去切换组件
import Router from 'vue-router'
//让插件作用于Vue
Vue.use(Router)

//引入vue需要切换的vue组件
import Product from '../pages/product/product.vue'
import ListPage from '../pages/product/ListPage.vue'
import AddPage from '../pages/product/AddPage.vue'
import ModifyPage from '../pages/product/ModifyPage.vue'
import DeletePage from '../pages/product/DeletePage.vue'

import Order from '../pages/order/order.vue'
import User from '../pages/user/user.vue'

export default new Router({
	//路由配置表
  routes: [
  //一个对象，就是一个页面配置
    {
    	//地址的哈希值
    	path: '/pro',
    	//当地址栏的哈希值跟这个页面配置的哈希值一样时，router-view就会装载这个组件
    	component: Product,
    	children: [
    		//一个对象，就是一个页面配置,并且是Product的子页面
    		{
    			path: '',
    			//重定向
    			redirect: 'list'
    		},
    		{
    			path: 'list',
    			component: ListPage
    		},
    		{
    			path: 'add',
    			component: AddPage
    		},
    		{
    			path: 'modify',
    			component: ModifyPage
    		},
    		{
    			path: 'delete',
    			component: DeletePage
    		}
    	]
    },
    {
    	path: '/order',
    	component: Order
    },
    {
    	path: '/user',
    	component: User
    },
    {
    	//其他不满足上面的配置
    	path: '*',
    	//重定向
    	redirect: '/pro'
    }
  ]
})
