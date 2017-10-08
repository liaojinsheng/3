import React, {Component} from 'react'

import store from '../store'

let unsubscribe;

export default class One extends Component{
	constructor(){
		super();
		this.state = store.getState();
//		this.state = {
//			user: store.getState().username,
//			psd: store.getState().password,
//			val1: '1243',
//			val2: '456',
//			val3: 'qaz',
//			val4: 'wsx'
//		};
		
//		console.log(this.state);
	}
	
	
	render(){
		
		console.log('one 的 render的方法执行了 ');
			//props发生变化
			//state发生变化（setState()）
		
		return (
			<div class="page" id="one" >
				one
				<p>用户名:{this.state.username}</p>
				
				<button onClick={this.modify.bind(this)}>按钮</button>
			</div>
		)
	}
	modify(){
		//修改全局用户名
		//3.派发消息，让store中的reducer进行操作
		store.dispatch({
			//事件名字
			type: 'changename',
			//参数
			val: '李四'
		});
		
	}
	
	componentWillMount(){
		//监听store上state的变化，监听多少次，就触发多少个函数
		//调用监听的方法，会返回一个异常监听的方法
		unsubscribe = store.subscribe(()=>{
			console.log('one 触发了1');
			this.setState({username: store.getState().username, password: store.getState().password});
		});
			
	}
	
	componentWillUnmount(){
		//在组件将要销毁时，将监听移除。
		console.log('one componentWillUnmount');
		unsubscribe();
	}
	
	
}
