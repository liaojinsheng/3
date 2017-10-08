<template>
<header class="header">
	<h1 class="title">{{title}}</h1>
	<!-- 导航按钮 -->
	<ul class="nav">
		<li v-for="(item, navTitle) in nav" :class="{'active': selectTitle==navTitle}" @click="headerAction(navTitle)">
			{{navTitle}}
		</li>
	</ul>
	
</header>	
</template>

<script>
export default {
	props: {
		//app显示标题
		title: String,
		//头部导航数据
		nav: Object
	},
	data(){
		return {
			//选中的导航标题，并且初始化为第一个导航标题
			selectTitle: Object.keys(this.nav)[0]
		}
	},
	methods: {
		//导航被点击时的事件
		headerAction(navTitle){
			//修改选中的导航标题
			this.selectTitle = navTitle;
			//选中的导航标题传输给父级
			this.$emit('nav-selcted', navTitle);
		}
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
    text-align: center;
    line-height: 100px;
    color: #666;
    font-size: 24px;
}
.header .nav li.active{
	color: #fff;
	text-decoration: underline;
}
</style>