<template>
<ul class="seller-list">
	<li v-for="item in data">
		{{item.name}}
	</li>
</ul>
	
</template>

<script>
export default {
	props: {
		data: Array
	}
}
</script>

<style>
</style>