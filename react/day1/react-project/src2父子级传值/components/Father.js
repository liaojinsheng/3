import React, {Component} from 'react'

import Son from './Son.js'

export default class Father extends Component{
	constructor(){
		super();
		this.state = {
			inputVal: '',
			data: '',
			sondata: ''
		}
	}
	
	render(){
		return (
			<div class="father">
				<h3>父组件</h3>
				<input ref="in" type="text" value={this.state.inputVal} onChange={this.change.bind(this)}/>
				<button onClick={this.sendData.bind(this)}>向子级发送数据</button>
				<p>接收到的子级数据:{this.state.sondata}</p>
				
				<hr/>
				
				<Son data={this.state.data} send={this.getData.bind(this)}/>
			</div>
		)
	}
	
	change(){
		let val = this.refs.in.value;
		this.setState({inputVal: val});
	}
	
	getData(val){//得到子级传入的数据
		console.log('父级接收到了数据:'+val);
		this.setState({sondata: val});
	}
	
	sendData(){//向子级发送数据
		//属性的方式发送数据
		//异步操作，执行回调
		this.setState({data: this.state.inputVal}, ()=>{
			console.log(this.state);
		});
		
	}
	
}



