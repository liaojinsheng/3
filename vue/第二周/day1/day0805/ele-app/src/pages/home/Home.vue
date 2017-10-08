<template>
<div id="home">
<!-- 当前外卖页面布局 -->
<div class="page main">
	<div class="wrap">
		<!-- 头部 -->
		<home-header :address="address" :weather="weatherData" :hot-words="hotWords"></home-header>
		<!-- 轮播图 -->
		<home-banner :data="bannerData"></home-banner>
		
		<!-- 商家列表 -->
		<p class="subTitle one-border-bottom">推荐商家</p>
		<seller-list :data="listData"></seller-list>
	</div>
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
			hotWords: [],
			bannerData: [],
			listData: [],
			contentScroll: null
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
		//请求轮播图数据
		homeService.getHomeBannerData()
		.then((res)=>{
			this.bannerData = res;
		})
		//请求商家列表
		homeService.getHomeListData()
		.then((res)=>{
			this.listData = res;
		})
	},
	mounted(){
		this.contentScroll = new IScroll("#home .main", {
			
		});
	},
	updated(){
		this.contentScroll.refresh();
	}
}


</script>

<style>
#home{
	background: lightseagreen;
}
#home .subTitle{
	border-top: 8px solid #eee;
	height: 20px;
	padding-left: 10px;
	font-size: 14px;
	font-weight: bold;
	line-height: 20px;
	color: #333;
}
#home .subpage{
	z-index: 5;
	bottom: 0;
	background: #fff;
}

</style>