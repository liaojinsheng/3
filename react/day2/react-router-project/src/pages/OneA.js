import React, {Component} from 'react'

export default class A extends Component{
	constructor({history}){
		super();
		
		this.state = {
			history
		}
	}
	render(){
		return (
			<div id="a" class="page">
				A
				<button onClick={this.back.bind(this)}>
					返回
				</button>
				
			</div>
		)
	}
	
	back(){
//		this.state.history.go(-1);
		this.state.history.goBack();
	}
}
