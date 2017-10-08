<template>
<div id="home">
<!-- 当前外卖页面布局 -->
<div class="page">
	<div>{{address}}</div>
	

</div>	

<!-- 子页面 -->
<transition enter-active-class="slideInRight animated"
	leave-active-class="slideOutRight animated">
	<router-view></router-view>
</transition>

</div>

</template>

<script>
import API from '../../url-api'
//import axios from 'axios'
import 'whatwg-fetch'

console.log(API.addressApi)
	
export default {
	data(){
		return {
			address: '123'
		}
	},
	created(){
		
		//请求方式1
//		this.$http.get('/static/data/address.json')
//		//请求成功
//		.then((response)=>{
//		    console.log(response);
//		    console.log()
//		    this.address = response.data.name;
//		})
//		//请求失败
//		.catch(function (error) {
//		    console.log(error);
//		});


		//请求方式2
//		fetch('/static/data/address.json')
//		.then((response)=>{//刚接收到响应
//			response.json()
//			.then((data)=>{//接收数据
//				console.log(data)
//			})
//		});

		fetch('/static/data/address.json')
		.then((response)=>{//刚接收到响应
			
			return response.json();//开始接收数据，并且将数据转为json格式
			
		})
		.then((data)=>{//接收数据完成
			console.log(data)
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