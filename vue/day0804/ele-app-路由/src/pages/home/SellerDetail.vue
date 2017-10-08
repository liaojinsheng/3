<template>
<div class="page subpage" style="background: lawngreen;">
	<button @click="backAction()">按钮</button>
	商家详情页
	{{sellerTitle}}
	
</div>
	
</template>

<script>
export default {
	data(){
		console.log(this.$router);
		console.log(this.$route);
		
		return {
			id: this.$route.params.num, 
			sellerTitle: this.$route.params.name
		}
	},
	methods: {
		backAction(){
			/*
			 //添加地址
			 router.push(location)
			 //替换地址
			router.replace(location)
			router.go(n)//去第几页
			router.back()//返回
			router.forward()//前进
			 * */
			
			//返回
			this.$router.back();
//			this.$router.go(-1);	
		}
	}
	
}


</script>

<style>
</style>