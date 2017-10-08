<template>
<div class="page subpage">
	<p>搜索详情页</p>
	
	<p>{{$route.params.word}}</p>
	
	经度
	{{$store.state.longitude}}<br />
	纬度
	{{$store.state.latitude}}
	
</div>	
</template>

<script>
</script>

<style>
</style>