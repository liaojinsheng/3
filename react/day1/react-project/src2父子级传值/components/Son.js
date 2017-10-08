import React, {Component} from 'react'

export default class Son extends Component{
	constructor(){
		super();
		this.state = {
			inputVal: ''
		}
	}
	
	render(){
		return (
			<div class="son">
				<h3>子组件</h3>
				<input ref="in" type="text" value={this.state.inputVal} onChange={this.change.bind(this)}/>
				<button onClick={this.sendData.bind(this)}>向父级发送数据</button>
				<p>接收到的父级数据:{this.props.data}</p>
			
			</div>
		)
	}
	
	change(){
		let val = this.refs.in.value;
		this.setState({inputVal: val});
	}
	
	sendData(){//向父级发送数据
		//得到输入框的值 this.state.inputVal
		//发送，调用父级给的属性
		this.props.send(this.state.inputVal);
	}
	
}
