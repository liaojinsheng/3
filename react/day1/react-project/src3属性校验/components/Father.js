import React, {Component} from 'react'

import Son from './Son.js'

export default class Father extends Component{
	constructor(){
		super();
		this.state = {
			str: 'zhangsan',
			arr: [1,2,3]
		}
	}
	
	render(){
		return (
			<div class="father">
				<h3>父组件</h3>
				<hr/>
				<Son s={this.state.str} f={this.handleAction.bind(this)}/>
			</div>
		)
	}
	
	handleAction(){
		console.log('这是父级的方法');
	}
}



