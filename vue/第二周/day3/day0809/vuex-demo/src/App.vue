<template>
  <div id="app">
  	
  	<router-view></router-view>
  	
  	<nav class="tabs">
    	<router-link v-for="(tab, index) in tabsData" :to="tab.path" :key="index">
    		{{tab.title}}
    	</router-link>
    </nav>
  	
  </div>
</template>

<script>
export default {
  data(){
  	return {
  		tabsData: [
  			{title: '外卖', path: '/one', icon:'icon-eleme'},
  			{title: '发现', path: '/two', icon:'icon-discover'},
  			{title: '订单', path: '/three', icon:'icon-order'},
  			{title: '我的', path: '/four', icon:'icon-me'},
  		]
  	}
  }
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
	position: absolute;
	top: 0;
	left: 0;
	bottom: 49px;
	width: 100%;
}
#app>.tabs{
	display: flex;
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 49px;
	background: #fff;
}
#app>.tabs:before{
	content: '';
	display: block;
	width: 100%;
	height: 1px;
	border-top: 1px solid #666;
	position: absolute;
	top: -1px;
	left: 0;
	transform: scaleY(.5);
}
#app>.tabs a{
	flex: 1;
	color: #666;
}

</style>
