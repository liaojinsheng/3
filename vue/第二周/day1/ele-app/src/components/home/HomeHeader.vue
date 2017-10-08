<template>
<div class="home-header">
	<div class="info">
		<p class="address">
			<router-link to="/home/address">${{address}}</router-link>
		</p>
		<p class="weather">
			<span>{{weather.temperature}}°</span>
			<span>{{weather.description}}</span>
			<img :src="weather.image_hash | imgFilter"/>
		</p>
	</div>
	
	<router-link class="search" to="/home/search">搜索商家、商品</router-link>
	
	<div class="hot-words">
		<span v-for="word in hotWords" @click="toSearchDetail(word)">{{word}}</span>
	</div>
	
	
</div>
	
	
</template>

<script>
export default {
	props: {
		address: String, 
		weather: Object,
		hotWords: Array
	},
	methods: {
		toSearchDetail(word){
			this.$router.push('/home/search-detail/'+word);
		}
	}
}

</script>

<style>
.home-header{
	width: 100%;
	height: 104px;
	background: #0af;
	padding: 10px;
	box-sizing: border-box;
	color: #fff;
}
.home-header .info {
	height: 30px;
}
.home-header .info .address{
	float: left;
	width: 200px;
	height: 30px;
	line-height: 30px;
	font-size: 16px;
}
.home-header .info .address a{
	color: #fff;
}
.home-header .info .weather{
	float: right;
	width: 100px;
	height: 30px;
	position: relative;
}
.home-header .info .weather img{
	float: right;
	width: 30px;
	position: absolute;
	top: 0;
	right: 0;
}
.home-header .info .weather span{
	font-size: 12px;
	position: absolute;
	right: 30px;
	height: 15px;
}
.home-header .info .weather span:nth-of-type(1){
	top: 0;
}
.home-header .info .weather span:nth-of-type(2){
	top: 15px;
}
.home-header .search{
	display: block;
	margin: 6px 0;
	width: 100%;
	height: 30px;
	border-radius: 15px;
	background: #fff;
	text-align: center;
	line-height: 30px;
	font-size: 12px;
	color: #666;
}
.home-header .hot-words{
	height: 12px;
	line-height: 12px;
	font-size: 12px;
	white-space: nowrap;
	overflow-x: auto;
}
.home-header .hot-words span{
	margin: 6px;
}
	
</style>