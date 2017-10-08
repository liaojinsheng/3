<template>
  <div id="app">
    <!--<a href="#/pro">商品</a>
    <a href="#order">订单</a>
    <a href="#user">用户</a>-->
    <nav class="nav">
	    <router-link to="/pro">商品</router-link>
	    <router-link to="/order">订单</router-link>
	    <router-link to="/user">用户</router-link>
		</nav>
    <!-- 路由容器 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './Header.vue'

export default {
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
a{
	text-decoration: none;
	color: #000;
}
html, body, #app{
	width: 100%;
	height: 100%;
}
#app>.nav{
	display: flex;
	width: 100%;
	height: 100px;
	background: lightcoral;
}
#app>.nav a{
	display: block;
	flex: 1;
	border-right: 1px solid #ddd;
	text-align: center;
	line-height: 100px;
	font-size: 24px;
	color: #666;	
}
#app>.nav a.router-link-active{
	color: #fff;
	text-decoration: underline;
}
</style>

