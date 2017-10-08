import Vue from 'vue'
import Vuex from 'vuex'//插件
Vue.use(Vuex);

const state = {
	longitude: 114.059563,
	latitude: 22.54286,
	orderList: []
	
}

//声明Mutations,相当于组件中的methods
const mutations = {
	changeLg(st, val){
		st.longitude = Number(val);
	},
	changeLt(st, val){
		st.latitude = Number(val);
	}
}

//声明Actions,做各种逻辑操作，异步操作
const actions = {
	changeLocation(store, val){
		store.commit('changeLg', val.lg);
		store.commit('changeLt', val.lt);
	}
}

var store = new Vuex.Store({
	'state': state,
	'mutations': mutations,
	'actions': actions
})

export default store;

