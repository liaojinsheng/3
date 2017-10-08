<template>
<div id="home">
<div class="page">
	<header>
		<a href="#/home/address">地址</a>
		<button>搜索</button>
	</header>
	
	<ul>
		<li>商家1</li>
		<li>商家2</li>
		<li>商家3</li>
	</ul>
</div>	

<router-view></router-view>
</div>

</template>

<script>
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