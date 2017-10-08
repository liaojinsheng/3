<template>
<div id="home">
<!-- 当前外卖页面布局 -->
<div class="page">
	<!-- 头部 -->
	<home-header :address="address" :weather="weatherData" :hot-words="hotWords"></home-header>
	<!-- 轮播图 -->
	<home-banner></home-banner>
	<p>推荐商家</p>
	<seller-list></seller-list>

</div>	

<!-- 子页面 -->
<transition enter-active-class="slideInRight animated"
	leave-active-class="slideOutRight animated">
	<router-view></router-view>
</transition>

</div>

</template>

<script>
import homeService from '../../services/homeService.js'
import HomeHeader from '../../components/home/HomeHeader.vue'
import HomeBanner from '../../components/home/HomeBanner.vue'
import SellerList from '../../components/common/SellerList.vue'
	
export default {
	data(){
		return {
			address: '',
			weatherData: {},
			hotWords: []
		}
	},
	components: {
		'home-header': HomeHeader,
		'home-banner': HomeBanner,
		'seller-list': SellerList
	},
	created(){
		//请求地址
		homeService.getAddressData()
		.then((address)=>{
				this.address = address;
		})
		//请求天气
		homeService.getWeatherData()
		.then((res)=>{
			this.weatherData = res;
		})
		//请求热搜词
		homeService.getHotWordsData()
		.then((res)=>{
			this.hotWords = res;
		})



		
	}
}


</script>

<style>
#home{
	background: lightseagreen;
}
#home header{
	width: 100%;
	height: 100px;
	background: lavenderblush;
}
#home ul{
	background: powderblue;
}
#home .subpage{
	z-index: 5;
	bottom: 0;
	background: #fff;
}
</style>