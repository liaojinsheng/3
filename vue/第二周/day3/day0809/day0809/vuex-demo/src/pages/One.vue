<template>
<div class="page" style="background: lavenderblush;">
  <h1>1</h1>
  
  <p>用户名： {{$store.state.user.username}}</p>
  
  <button @click="change">修改名字</button>
  
</div>	
</template>

<script>
export default {
	methods: {
		change(){
			this.$store.commit('order/changeName', 'lisi');
		}
	}
}
</script>

<style>
</style>