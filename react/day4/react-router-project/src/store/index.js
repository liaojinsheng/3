import {createStore} from 'redux'

//state(全局状态)
//	外部方法访问state，执行store.getState()

//action(操作全局状态的事件)
//	外部调用action，执行store.dispatch();

//外部监听state
//var unsubscribe = store.subscribe(function(){ 监听函数 });
//移除监听 unsubscribe();


let count = 0;

//会多次调用的，只有初始化时，state才是空
let reducer = function(state, action){
	console.log('第'+(++count)+'次调用');
	
	console.log('state', state);
	console.log('action', action);
	
	if(state == null){
		state = {
			username: '张三',
			password: '123456'
		};
	}
	
	if(action.type === 'changename'){
		state.username = action.val;
	} 
	
	
	console.log('第'+(count)+'次return');
	console.log(state);
	return state;
}


export default createStore(reducer);
