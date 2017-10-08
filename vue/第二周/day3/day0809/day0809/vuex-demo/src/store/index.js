import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import orderModules from './orderModules.js'
import userModules from './userModules.js'
import utilModules from './utilModules.js'



//创建全局的状态管理对象
var store = new Vuex.Store({
	modules: {
		order: orderModules,
		user: userModules,
		util: utilModules
	},
	mutations: {
		changeName(st, val){
			console.log('根执行的');
		}
	}
});

export default store;


