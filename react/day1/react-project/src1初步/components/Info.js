import React, {Component} from 'react'

export default class Info extends Component{
	constructor(){
		super();
		
		this.state = {
			data: ''
		}
	}
	
	render(){
		return (
			<header>
				<h1>{this.props.title}</h1>
				<p>{this.props.info}</p>
				<p>{this.props.name}</p>
				<p>{this.props.test}</p>
				<input ref="in" type="text" value={this.state.data} onChange={this.changeAction.bind(this)}/>
				<button onClick={this.sendAction.bind(this)}>将数据发送给父级</button>
			</header>
		)
	}
	
	changeAction(){
		let val = this.refs.in.value;
		this.setState({data: val});
	}
	
	sendAction(){
		console.log('按钮点击了');
		this.props.sendData(this.state.data);
	}
	
	
}
