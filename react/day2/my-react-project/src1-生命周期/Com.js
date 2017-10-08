import React, {Component} from 'react'
import Son from './Son.js'

export default class Com extends Component{
	constructor(){
		super();
		this.state = {
			show: false,
			comData: '未修改的数据'
		}
	}
	
	render(){
		return (
			<div>
				<h1>这是父组件</h1>
				<button onClick={this.modify.bind(this)}>修改数据</button>
				<button onClick={this.showAction.bind(this)}>显示子组件</button>
				<hr/>
				
				{this.state.show? <Son str="qianfeng" data={this.state.comData}/> : null}
			</div>
		)
	}
	
	modify(){
		this.setState({comData: '修改过后的数据'});
	}
	
	showAction(){
		this.setState({show: !this.state.show});
		
	}
	
	
	
}
