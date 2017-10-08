var vm = new Vue({
	el: '#app',
	data: {
		navData: {
			'商品管理': ["商品列表","新增商品","修改商品","删除商品"],
			'订单管理': ["订单列表","修改订单","删除订单"],
			'用户管理': ["用户列表","修改用户","删除用户"]
		},
		selectNav: '商品管理',
		selectList: 0
		
//		titleArr: ['商品管理', '订单管理', '用户管理'],
//		navList: [
//			["商品列表","新增商品","修改商品","删除商品"],
//			["订单列表","修改订单","删除订单"],
//			["用户列表","修改用户","删除用户"]
//		]
	},
	methods: {
		navClick(title){
			this.selectNav = title;
			this.selectList = 0;
		},
		listClick(index){
			this.selectList = index;
		}
	}
})


