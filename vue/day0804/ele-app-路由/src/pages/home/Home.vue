<template>
<div id="home">
<div class="page">
	<header>
		<a href="#/home/address">地址</a>
		<a href="#/home/search">搜索</a>
	</header>
	
	<ul>
		<li v-for="item in listData">
		<router-link  :to="'/home/seller-detail/'+item.name+'/'+item.id">
			商家:{{item.name}}
		</router-link>
		</li>
	</ul>
	
	<button @click="forwordAction">前进</button>
	<button @click="pushAction">push</button>
	<button @click="replaceAction">replace</button>
	
</div>	

<transition enter-active-class="slideInRight animated"
	leave-active-class="slideOutRight animated">
	<router-view></router-view>
</transition>

</div>

</template>

<script>
export default {
	data(){
		var listData = [];
		for(var i = 0; i < 10; i++){
			listData.push({
				name: 'item' + i,
				id: '00'+i
			});
		}
		return {
			listData
		}
	},
	methods: {
		forwordAction(){
//			this.$router.forward();
			this.$router.go(1);
		},
		pushAction(){
			this.$router.push('/home/seller-detail/永和大王/007');
		},
		replaceAction(){
			this.$router.replace('/home/seller-detail/永和大王/007');
		}
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