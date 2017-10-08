<template>
<div class="page" id="product">
	<aside class="nav">
		<li v-for="item in asideData">
			<router-link :to="item.path">
				{{item.title}}
			</router-link>
		</li>
	</aside>
	
	<router-view></router-view>
	
</div>
	
</template>

<script>
export default {
	data(){
		return {
			asideData: [
				{title: '商品列表', path: 'list'},
				{title: '添加商品', path: 'add'},
				{title: '修改商品', path: 'modify'},
				{title: '删除商品', path: 'delete'}
			]
		}
	}
}
	
</script>

<style>
#product{
	display: flex;
} 
#product .nav{
	width: 200px;
	background: lightblue;
	border-right: 1px solid #ddd;
}
#product .nav li{
	height: 80px;
	border-bottom: 1px solid #ddd;
}
#product .nav li>a{
	display: block;
	height: 80px;
	line-height: 80px;
    text-align: center;
}
#product .nav li>a.router-link-active{
	color: #fff;
}		
#product .content{
	flex: 1;
	height: 100%;
	overflow: auto;
}
</style>