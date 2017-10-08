const state = {
	username: 'zhangsan'
}

export default {
	namespaced: true,
	state,
	getters: {
		
	},
	mutations: {
		changeName(st, val){
			console.log('user执行的');
			st.username = val;
		}
	},
	actions: {
		
	}
}


