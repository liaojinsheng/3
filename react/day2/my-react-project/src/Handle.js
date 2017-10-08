import React, {Component} from 'react'

export default class Handle extends Component{
	constructor(){
		super();
		this.state = {
			username: '',
			password: ''
		}
	}
	
	render(){
		return (
			<div class="handle">
				<input ref="user" type="text" placeholder="用户名" 
					value={this.state.username} 
					onChange={this.changeAction.bind(this, 'user')}/>
				<br/>
				<input ref="psd" type="text" placeholder="密码" 
					value={this.state.password}
					onChange={this.changeAction.bind(this, 'psd')}/>
				<br/>
				<button onClick={this.confim.bind(this)}>确认</button>
				<button onClick={this.cancel.bind(this)}>取消</button>
			</div>
		)
	}
	
	changeAction(flag){
		//去到对应输入框中的value值
		let val = this.refs[flag].value;
		if(flag === 'user'){
			this.setState({username: val});
		}else if(flag == 'psd'){
			this.setState({password: val});
		}
	}
	confim(){
		console.log('用户名'+this.state.username);
		console.log('密码'+this.state.password);
		//通过属性调用父级的方法，传递数据
		this.props.add({
			user: this.state.username,
			psd: this.state.password
		});
	}
	cancel(){
		//清空文本输入框
		this.setState({username: '', password: ''});
	}
}