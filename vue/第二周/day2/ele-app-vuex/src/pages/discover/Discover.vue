<template>
<div id="discover" class="page">
	发现<br />
	<!--{{$store.getters.count}}-->
	<!--{{count}}-->
	
	
	
	<br />
	经度
	{{longitude}}<br />
	纬度
	{{latitude}}<br />
	
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
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
	
export default {
	data(){
		return {
			lg: this.$store.state.longitude,
			lt: this.$store.state.latitude
		}
	},
	computed: {
		...mapState([
			'longitude',
			'latitude'
		])
	},
	
	methods: {
		...mapMutations([
			'changeLg'
		]),
		...mapActions([
			'changeLgAndLt'
		]),
		btnAction(){
//			this.changeLg(this.lg);
			
			this.changeLgAndLt({
				lg: this.lg,
				lt: this.lt
			});
			
			//触发store上的mutation
			//参数1：mutation的方法名字
//			this.$store.commit('changeLg', this.lg);
//			this.$store.commit('changeLt', this.lt);
			
			
		}
	}
}
</script>

<style>
#discover{
	background: lightcoral;
}
</style>