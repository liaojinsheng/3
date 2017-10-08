//import React from 'react'
//import {Component} from 'react'
import React, {Component} from 'react'

import Info from './Info.js'


//类名大写
export default class Wrap extends Component{
	//构造函数
	constructor(){
		super();//执行父级构造函数。
		
		//相当于vue中的data，组件内部数据
		this.state = {
			title: '千锋教育',
			info: '用良心做教育',
			name: 'zhangsan',
			test: 'this in wrap component',
			val: ''
		};
		
		
		
	}
	
	//渲染函数，返回组件模板
	render(){
		
		return (
			<div>
				{/* 父级将数据传递给子级，一个一个传可以自定义属性名字，如果传的是一个扩展对象，对象的key值就是属性名 */}
				{/*<Info title={this.state.title} info={this.state.info}/>*/}
				{/*<Info t={this.state.title} i={this.state.info}/>*/}
				<Info {...this.state} sendData={this.getData.bind(this)}/>
				
				<hr/>
				
				<button ref="btn" onClick={this.btnAction.bind(this)}>按钮</button>
				<input ref="in" type="text" value={this.state.title} onChange={this.inputChange.bind(this)}/>
				<p>接收子级数据是:{this.state.val}</p>
			</div>)
	}
	
	getData(val){
		console.log('父级的getData事件触发了'+val);
		this.setState({val});
		
	}
	
	//在组件中，自定义函数，this指向为空
	btnAction(){
		alert(123);
		
		console.log(this);
		
		this.setState({title: 'qianfeng'});
	}
	
	inputChange(){
		console.log('触发了...');
//		var val = document.querySelector('input').value;
//		console.log(val);
//		this.setState({title: val});

		//获得输入框this.refs.in
		//获得value值this.refs.in.value
		var val = this.refs.in.value;
		//修改state
		this.setState({title: val});

	}
	
}

//export default Wrap;