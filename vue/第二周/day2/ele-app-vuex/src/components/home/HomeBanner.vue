<template>
<div class="swiper-container banner">
    <div class="swiper-wrapper">
        <ul class="swiper-slide" v-for="pageItem in pageData">
        	<li v-for="item in pageItem" class="item">
        		<img :src="item.imgPath | imgFilter" />
        		<span>{{item.name}}</span>
        	</li>
        </ul>
        
    </div>
    <div class="swiper-pagination"></div>
</div>

	
</template>

<script>
export default {
	props: {
		data: Array
	},
	computed: {
		pageData(){
			//将外部数据拷贝为自身的数据（深拷贝）
//			var bannerData = this.data;(浅拷贝)
			var bannerData = Array.from(this.data);
			var arr = [];
			while(bannerData.length > 0){
				arr.push(bannerData.splice(0, 8));
			}
			return arr;
		}
	},
	mounted(){
		//创建swiper
		var bannerSwiper = new Swiper('#home .banner', {
//			loop: true,
			pagination: '.swiper-pagination'
		});
		
		this.$watch('pageData', function(){
			bannerSwiper.update();
		})
		
	}
}
	
</script>

<style>
.banner{
	width: 100%;
	height: 146px;
}
.banner ul{
	display: flex;
	flex-wrap: wrap;
	height: 132px;
}
.banner .item{
	margin-top: 10px;
	width: 25%;
	height: 56px;
	flex-shrink: 0;
}
.banner .item img{
	width: 50%;
	margin: 0 auto;
}
.banner .item span{
	display: block;
	height: 16px;
	text-align: center;
	color: #666;
	font-size: 12px;
	line-height: 16px;
}
.banner .swiper-pagination-bullets{
	bottom: 2px;
}
.swiper-pagination-bullet {
    width: 4px;
    height: 4px;
}
.swiper-pagination-bullet-active {
    background: #666;
}
</style>