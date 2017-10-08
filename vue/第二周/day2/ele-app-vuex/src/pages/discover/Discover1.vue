<template>
<div id="discover" class="page">
	发现<br />
	
	{{$store.getters.count}}
	
	<br />
	经度
	{{$store.state.longitude}}<br />
	纬度
	{{$store.state.latitude}}<br />
	
	经度
	<input type="text" v-model="lg" />
	<br />
	纬度
	<input type="text" v-model="lt" />
	<br />
	<button @click="btnAction">修改</button>
	
	
</div>
</template>

<script>
export default {
	data(){
		return {
			lg: this.$store.state.longitude,
			lt: this.$store.state.latitude
		}
	},
	methods: {
		btnAction(){
			//触发store上的mutation
			//参数1：mutation的方法名字
//			this.$store.commit('changeLg', this.lg);
//			this.$store.commit('changeLt', this.lt);
			
			//触发store上的Actions
			this.$store.dispatch('changeLgAndLt', {
				lg: this.lg,
				lt: this.lt
			});
		}
	}
}
</script>

<style>
#discover{
	background: lightcoral;
}
</style>