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
import {mapState} from 'vuex'

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
	computed: {
		...mapState([
			'longitude',
			'latitude'
		])
	},
	components: {
		'home-header': HomeHeader,
		'home-banner': HomeBanner,
		'seller-list': SellerList
	},
	methods: {
		requestData(){
			console.log('发送请求');
			var lg = this.longitude;
			var lt = this.latitude;
			//请求地址
			homeService.getAddressData(lg, lt)
			.then((address)=>{
					this.address = address;
			})
			//请求天气
			homeService.getWeatherData(lg, lt)
			.then((res)=>{
				this.weatherData = res;
			})
			//请求热搜词
			homeService.getHotWordsData(lg, lt)
			.then((res)=>{
				this.hotWords = res;
			})
			//请求轮播图数据
			homeService.getHomeBannerData(lg, lt)
			.then((res)=>{
				this.bannerData = res;
			})
			//请求商家列表
			homeService.getHomeListData(lg, lt)
			.then((res)=>{
				this.listData = res; 
			})
		}
	},
	created(){
		//初始化页面数据，发送各种请求
		this.requestData();
		
		//监听地址改变的事件
		this.$eventHandle.$on('get-address', (val)=>{
			console.log('home接收到了新地址'+val);
			this.address = val;
		})
		
		//监听经纬度变化
		this.$watch('longitude', this.requestData);
		this.$watch('latitude', this.requestData);
		
	},
	mounted(){
		//创建滚动视图
		this.contentScroll = new IScroll("#home .main", {
			probeType: 3
		});
		//监听滚动事件
//		this.contentScroll.on('scrollStart', function(){
//			console.log('正在滚动...');
//			this.refresh();
//		})
		
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