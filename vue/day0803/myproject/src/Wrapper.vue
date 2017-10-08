<template>
<div id="wrapper">
	<!-- 侧边栏 -->
	<aside-com :data="asideList" @aside-selected="changePage"></aside-com>
	<!-- 每一个内容页面 -->
	<component :is="comName"></component>
	
</div>
</template>

<script>
import Aside from './Aside.vue'

import ProductList from './pages/product/ListPage.vue'
import ProductAdd from './pages/product/AddPage.vue'
import ProductModify from './pages/product/ModifyPage.vue'
import ProductDelete from './pages/product/DeletePage.vue'

import OrderList from './pages/order/ListPage.vue'
import OrderModify from './pages/order/ModifyPage.vue'
import OrderDelete from './pages/order/DeletePage.vue'
	
import UserList from './pages/user/ListPage.vue'
import UserModify from './pages/user/ModifyPage.vue'
import UserDelete from './pages/user/DeletePage.vue'


export default {
	props: {
		//侧边栏数据
		asideList: Array
	},
	data(){
		return {
			//需要显示的组件名字
			comName: this.asideList[0].component
		}
	},
	components: {
		'aside-com': Aside,
		'product-list': ProductList,
		'product-add': ProductAdd,
		'product-modify': ProductModify,
		'product-delete': ProductDelete,
		'order-list': OrderList,
		'order-modify': OrderModify,
		'order-delete': OrderDelete,
		'user-list': UserList,
		'user-modify': UserModify,
		'user-delete': UserDelete
	},
	methods: {
		//当aside侧边栏点击时，接收到侧边栏点击的下标
		//将内容页，变换为侧边栏对应的内容页
		changePage(index){
			this.comName = this.asideList[index].component;
		}
	},
	created(){
		//监听侧边栏数据的变化，让内容页显示第一个
		this.$watch('asideList', function(){
			this.comName = this.asideList[0].component;
		})
	}
}

</script>

<style>
#wrapper{
	display: flex;
	position: absolute;
	top: 100px;
	left: 0;
	bottom: 0;
	width: 100%;
	background: #fff;
}
#wrapper>.nav{
	width: 200px;
}
#wrapper .page{
	flex: 1;
}
</style>