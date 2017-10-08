import React, {Component} from 'react'

import store from '../store'

let unsubscribe;

export default class Two extends Component{
	constructor(){
		super();
		
		//1.将全局数据转为组件内部数据
		this.state = { 
			//如果全局数据发生变化，在dom中直接访问是不会执行render进行更新。
			//将全局数据转为组件内部数据,再监听全局数据变化，触发本组件的setState()，
				//dom访问的是组件内部的state，就会执行render进行更新
			username: store.getState().username
		}
	}
	
	render(){
		return (
			<div id="two" class="page">
				two
				   {this.state.username}
			</div>
		)
	}
	
	componentWillMount(){
		//2.监听store中state的变化，如果这个函数调用了，说明state发生了变化
		//调用this.setState(),就会触发render，更新dom
		unsubscribe = store.subscribe(()=>{
			console.log('two监听触发了');
			this.setState({username: store.getState().username});
		})
	}
	componentWillUnmount(){
		unsubscribe();
	}
}
