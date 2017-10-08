<!-- 一个vue文件，定义一个组件 -->

<!-- 组件结构 -->
<template>
	<div class="wrap test">
		<div class="banner">轮播图</div>
		<ul class="list">
			<li>列表1</li>
			<li>列表1</li>
			<li>列表1</li>
			<li>列表1</li>
			<li>列表1</li>
			<li>列表1</li>
		</ul>
	</div>
</template>

<!-- 组件逻辑部分 -->
<script>
	//es6方式
//export defalut {
	//commonJS方式
module.exports = {
	data(){
		return {
			
		}
	},
	methods: {
		
	},
	props: [],
	components: {
		
	}
}
</script>

<!-- 组件的样式部分 -->
<style>
.wrap{
	width: 100%;
	height: 100%;
	background: palegreen;
}
</style>