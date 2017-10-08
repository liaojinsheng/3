<template>
<aside class="nav">
	<li v-for="(item, index) in data" :class="{'active': selectIndex==index}" @click="navAction(index)">{{item.title}}</li>
</aside>
</template>

<script>
export default {
	props: {
		//侧边栏数据
		data: Array
	},
	data(){
		return {
			//选中的侧边栏按钮，并且初始化为第一个
			selectIndex: 0
		}
	},
	methods: {
		navAction(index){
			//改变选中的侧边栏按钮
			this.selectIndex = index;
			this.$emit('aside-selected', index);
		}
	},
	created(){
		this.$watch('data', function(){
			this.selectIndex = 0;
		})
	}
}
	
</script>

<style>
#wrapper>.nav{
	background: lightblue;
	border-right: 1px solid #ddd;
}
#wrapper>.nav li{
	height: 80px;
	border-bottom: 1px solid #ddd;
    line-height: 80px;
    text-align: center;
}
#wrapper>.nav li.active{
	color: #fff;
}	
</style>


