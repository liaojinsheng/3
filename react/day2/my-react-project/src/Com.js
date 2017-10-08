import React, {Component} from 'react'

import Handle from './handle.js'
import List from './List.js'

export default class Com extends Component{
	constructor(){
		super();
		this.state = {
			listData: [],
			modifyIndex: -1
		}
		
	}
	
	render(){
		return (
			<div class="wrap">
				<Handle modifyIndex={this.state.modifyIndex} add={this.addAction.bind(this)}/>
				<hr/>
				<List data={this.state.listData} deleteHandle={this.deleteAction.bind(this)}/>
			</div>
		)
	}
	
	addAction(item){
		console.log('触发了');
		console.log(item);
		//将item放在数组中
		this.state.listData.push(item);
		//修改数组
		this.setState({listData: this.state.listData});
	}
	
	deleteAction(index){
		console.log('父组件删除触发了'+index);
		this.state.listData.splice(index, 1);
		this.setState({listData: this.state.listData});
	}
}
