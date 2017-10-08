<template>
<div class="page subpage">
	<header class="address-header">
		<span @click="backAction()">&lt;</span>
		<h1>选择地址</h1>
		<input type="text" placeholder="请输入地址" v-model="keyword"/>
	</header>
	
	<ul class="address-list">
		<li v-for="address in addressList" class="one-border-bottom"
			@click="addressSelected(address)">
			<h3>{{address.name}}</h3>
			<p>{{address.address}}</p>
		</li>
	</ul>
	
</div>
</template>


<script>
import homeService from '../../services/homeService.js'	

import {mapState} from 'vuex'

var timer = null;
	
export default {
	data(){
		return {
			keyword: '',
			addressList: []
		}
	},
	computed: {
		...mapState([
			'longitude',
			'latitude'
		])
	},
	methods: {
		backAction(){
			this.$router.back();
		},
		addressSelected(info){
			console.log(info)
			//触发空实例的自定事件
			this.$eventHandle.$emit('get-address', info.name);
			//修改全局状态
			this.$store.dispatch('changeLocation', {
				lg: info.longitude,
				lt: info.latitude
			});
			this.$router.back();
		}
	},
	mounted(){
		//在用户输入一次后和再次输入之间的时间间隔大于500ms就让第一次发送。
		this.$watch('keyword', (newVal, oldVal)=>{
			console.log(newVal, oldVal)
			//清除延时器，就不会发生请求
			clearTimeout(timer);
			//再次创建延时器
			timer = setTimeout(()=>{
				homeService.searchAddressData(newVal, this.longitude, this.latitude)
				.then((res)=>{//请求成功，接收到地址数据
					this.addressList = res;
				})
			}, 500);
		})
	}
}

	
</script>

<style>
.address-header{
	color: #fff;
	width: 100%;
	height: 80px;
	background: #0af;
	position: relative;
}
.address-header span{
	position: absolute;
	top: 5px;
	left: 5px;
	height: 30px;
	width: 40px;
	line-height: 20px;
	font-size: 20px;
}
.address-header h1{
	height: 40px;
	text-align: center;
	font-size: 16px;
	font-weight: normal;
	line-height: 34px;
}
.address-header input{
	display: block;
	width: 90%;
	margin: 6px auto;
	padding: 6px 12px;
	height: 24px;
	box-sizing: border-box;
	border-radius: 15px;
	border: none;
	outline: none;
	font-size: 12px;
}
.address-list{
	width: 100%;
	position: absolute;
	top: 80px;
	left: 0;
	bottom: 0;
	overflow: auto;
}
.address-list li{
	padding: 10px 20px;
	box-sizing: border-box;
	
}
.address-list li h3{
	font-size: 14px;
	line-height: 18px;
	color: #333;
}
.address-list li p{
	font-size: 12px;
	line-height: 14px;
	color: #999;
}	
</style>