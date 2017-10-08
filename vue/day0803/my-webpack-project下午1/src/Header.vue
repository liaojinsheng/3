<template>
<header class="header">
	<h1 class="title">{{title}}</h1>
	<!-- 导航按钮 -->
	<ul class="nav">
		<li v-for="(item, navTitle) in nav">
			<router-link :to="item.path">
				{{navTitle}}
			</router-link>
		</li>
	</ul>
	
</header>	
</template>

<script>
export default {
	props: {
		title: String,
		nav: Object
	}
}
</script>

<style>
.header{
	display: flex;
	width: 100%;
	height: 100px;
	border-bottom: 1px solid #ddd;
	box-sizing: border-box;
	position: absolute;
	top: 0;
	left: 0;
	background: lightcoral;
}
.header .title{
	width: 200px;
    border-right: 1px solid #ddd;
    text-align: center;
    line-height: 100px;
    font-size: 30px;
    color: #fff;
}
.header .nav{
	flex: 1;
	display: flex;
}
.header .nav li{
	flex: 1;
    border-right: 1px solid #ddd;
}
.header .nav li>a{
	display: block;
	height: 100px;
	text-align: center;
    line-height: 100px;
    color: #666;
    font-size: 24px;
}
.header .nav li>a.router-link-active{
	color: #fff;
	text-decoration: underline;
}
</style>