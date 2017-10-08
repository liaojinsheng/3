<template>
  <div id="app">
  	
  	<!-- 头部 -->
  	<header-com :title="appTitle" :nav="navData" @nav-selcted="changeList"></header-com>
  	
  	<!-- 主体部分 -->
  	<wrapper-com :aside-list="selectNavList"></wrapper-com>
  	
  </div>
</template>

<script>
import Header from './Header.vue'
import Wrapper from './Wrapper.vue'

export default {
	data(){
		return {
			//项目的标题
			appTitle: '后台管理系统',
			//整个项目的标题，key头部标题，value侧边栏
			navData: {
				'商品管理': [
					{title: '商品列表', component: 'product-list'},
					{title: '新增商品', component: 'product-add'},
					{title: '修改商品', component: 'product-modify'},
					{title: '删除商品', component: 'product-delete'}
				],
				'订单管理': [
					{title: '订单列表', component: 'order-list'},
					{title: '修改订单', component: 'order-modify'},
					{title: '删除订单', component: 'order-delete'}
				],
				'用户管理': [
					{title: '用户列表', component: 'user-list'},
					{title: '修改用户', component: 'user-modify'},
					{title: '删除用户', component: 'user-delete'}
				]
			},
			//选中的侧边栏
			selectNavList: []
		}
	},
	components: {
		'header-com': Header,
		'wrapper-com': Wrapper
	},
	methods: {
		//接收头部被点击的标题
		changeList(title){
			console.log('app的changeList触发了:'+title);
			//修改侧边栏数据
			this.selectNavList = this.navData[title];
		}
	},
	created(){
		//初始化侧边栏数据
		this.selectNavList = Object.values(this.navData)[0];
//		console.log(this.selectNavList);
	}
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
li, ul{
	list-style: none;
}
html, body, #app{
	width: 100%;
	height: 100%;
}
</style>





