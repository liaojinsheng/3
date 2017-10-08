import Vue from 'vue'
import Vuex from 'vuex'//插件
Vue.use(Vuex);

/*
State: 全局数据状态 //外部能够访问，但是不能操作
Getters：全局数据状态，相当于计算属性，这数据状态是计算得到的
Mutations： 操作数据状态,外部能够访问 ，直接操作
Actions：事件，可以异步操作，事件调用Mutations从而触发操作数据状态 ，外部能访问

*/

//声明State,相当于组件中的data
const state = {
	longitude: 114.059563,
	latitude: 22.54286
}

//声明Getters，相当于组件中的计算属性
const getters = {
	count(st, getters){//就是count属性的get方法
		return st.longitude+st.latitude;
	}
}

//声明Mutations,相当于组件中的methods
const mutations = {
	changeLg(st, val){
		//st就是state
		console.log('修改');
		st.longitude = Number(val);
	},
	changeLt(st, val){
		st.latitude = Number(val);
	}//,
//	changeLgAndLt(st, val){//不建议在一个mutation方法中操作两个state
//		console.log(st, val);
//		st.longitude = val.lg;
//		st.latitude = val.lt;
//	}
}

//声明Actions,做各种逻辑操作，异步操作
const actions = {
	changeLgAndLt(store, val){
		//store状态管理对象
		//val接收到的参数
		
		//在action事件中，就可以调用多次mutations，从而修改多个state
		store.commit('changeLg', val.lg);
		store.commit('changeLt', val.lt);
	}
}

var store = new Vuex.Store({
	'state': state,
	'getters': getters,
	'mutations': mutations,
	'actions': actions
})

export default store;

