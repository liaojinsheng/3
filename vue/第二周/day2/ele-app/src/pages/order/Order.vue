<template>
<div id="order" class="page">
	订单
	经度
	{{longitude}}<br />
	纬度
	{{latitude}}
	
	<br />
	
	{{count}}
	
</div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
	computed: {
		...mapState([
			'longitude',
			'latitude'
		]),
		...mapGetters([
			'count'
		])
	}
}

</script>

<style>
#order{
	background: lawngreen;
}
</style>