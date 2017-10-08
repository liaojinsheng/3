<template>
  <div id="app">
  	<!--<h1>Hello mint ui</h1>
  	<mt-button type="default">default</mt-button>
  	<mt-button type="danger" :disabled="true" size="small">danger</mt-button>-->
  
  	<router-view></router-view>
  	
  	<nav>
  		<router-link to="/home">主页</router-link>
  		<router-link to="/hot">热门</router-link>
  	</nav>
  
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'mint-ui';
//声明全局组件
console.log(Button);
Vue.component(Button.name, Button);

export default {
  name: 'app'
}
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
html, body, #app{
	width: 100%;
	height: 100%;
}
#app .page{
	width: 100%;
	height: 500px;
}
</style>
