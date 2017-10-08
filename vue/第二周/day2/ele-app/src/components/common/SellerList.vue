<template>
<ul class="seller-list">
	<li v-for="item in data" class="one-border-bottom">
		<div class="img">
			<img :src="item.imgPath | imgFilter" />
		</div>
		<div class="content">
			<h3>{{item.name}}</h3>
		</div>
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
.seller-list li{
	display: flex;
	padding: 8px;
	width: 100%;
	height: 66px;
	box-sizing: border-box;
}
.seller-list .img{
	width: 50px;
	padding-right: 8px;
}
.seller-list .img img{
	width: 100%;
	border-radius: 2px;
	overflow: hidden;
}
.seller-list .content{
	flex: 1;
}
.seller-list .content h3{
	font-size: 13px;
	color: #333;
}
</style>