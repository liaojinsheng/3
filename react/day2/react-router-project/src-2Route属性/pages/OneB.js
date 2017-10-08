import React, {Component} from 'react'

export default class B extends Component{
	constructor({location}){
		super();
		console.log('接收到的参数'+location.state.id);
	}
	
	render(){
		return (
			<div id="b" class="page">
				B
				
			</div>
		)
	}
}
