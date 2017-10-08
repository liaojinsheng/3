import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//外卖
import Home from '../pages/home/Home.vue'
//外卖tab下的子页面
import Address from '../pages/home/Address.vue'
import Search from '../pages/home/Search.vue'
import SellerDetail from '../pages/home/SellerDetail.vue'
//发现
import Discover from '../pages/discover/Discover.vue'
//订单
import Order from '../pages/order/Order.vue'
//我的
import Me from '../pages/me/Me.vue'

/*
 /home                     Home
 /home/address             Address
 /address                  Home
 * */


export default new Router({
  routes: [
    {
    	path: '/home',
    	component: Home,
    	children: [
    		{
    			path: 'address',
    			component: Address
    		},
    		{
    			path: 'search',
    			component: Search
    		},
    		{
    			path: 'seller-detail',
    			component: SellerDetail
    		}
    	]
    },
    {
    	path: '/discover',
    	component: Discover
    },
    {
    	path: '/order',
    	component: Order
    },
    {
    	path: '/me',
    	component: Me
    },
    //重定向
    {
    	path: '*',
    	redirect: '/home'
    }
  ]
})
