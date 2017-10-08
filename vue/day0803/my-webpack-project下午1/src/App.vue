<template>
  <div id="app">
    <header-com :title="appTitle" :nav="navData"></header-com>
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
	data(){
		return {
			appTitle: '后台管理系统',
			navData: {
				'商品管理': {
					path: '/pro'
				},
				'订单管理': {
					path: '/order'
				},
				'用户管理': {
					path: '/user'
				}
			}
		}
	},
	components: {
		'header-com': Header
	}
	
}
</script>

<style>
*{
	padding: 0;
	margin: 0;
}
li{
	list-style: none;
}
a{
	text-decoration: none;
	color: #000;
}
html, body, #app{
	width: 100%;
	height: 100%;
}
.page{
	position: absolute;
	top: 100px;
	left: 0;
	bottom: 0;
	width: 100%;
}
</style>

