<template>
<div class="page" style="background: lightgreen;">
	<!--<mt-button @click="showInfo">toast</mt-button>
	<mt-button @click="showInfo2">indicator</mt-button>-->
	
<mt-loadmore :top-method="loadTop" :bottom-method="loadBottom">
  <ul>
    <li class="item" v-for="item in 50">{{ item }}</li>
  </ul>
</mt-loadmore>
	
	
</div>
</template>

<script>
import Vue from 'vue'	
import {Button, Toast, Indicator, Loadmore } from 'mint-ui'
Vue.component(Button.name, Button);
Vue.component(Loadmore.name, Loadmore);

export default {
	data(){
		return {
			
		}
	},
	methods: {
		loadTop(){
			console.log('下拉刷新');
		},
		loadBottom(){
			console.log('加载更多');
		},
		showInfo(){
//			Toast('登录成功');
			Toast({
				message: '登录成功',
				position: 'bottom',
				duration: 1000,
				className: 'my-toast'
			});
		},
		showInfo2(){
			Indicator.open({
				text: '正在登录...',
				spinnerType: 'double-bounce'
			});
			setTimeout(()=>{
				Indicator.close();
			}, 2000)
		}
	}
}
</script>

<style>
.my-toast{
	background: red;
}
.item{
	line-height: 40px;
	border-bottom: 1px solid #ddd;
}
.page{
	overflow: hidden;
}
</style>