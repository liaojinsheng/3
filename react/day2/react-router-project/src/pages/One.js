import React, {Component} from 'react'
import {Link, Route} from 'react-router-dom'

import AAA from './OneA.js'
import BBB from './OneB.js'

export default class One extends Component{
	constructor(routeProps){
		super();
		
		let {match, history, location} = routeProps;
		
		console.log(match);//用于父页面传递数据给子页面,取参数：match.params.参数名
		
		console.log(history);
		
		console.log(location);//用于父页面传递数据给子页面, 传递时放在state中，取参数：location.state.参数名
		
		this.state = {
			history
		}
	}
	
	
	render(){
		return (
			<div id="one" >
				<div class="page">
					one
					<Link to="/one/a"><button>aaa</button></Link>
					<br/>
					<button onClick={this.btnAction.bind(this)}>bbb</button>
				</div>
				
				
				<Route path="/one/a" component={AAA}/>
				<Route path="/one/b" component={BBB}/>
				
			</div>
		)
	}
	
	btnAction(){
//		if(用户登录了){
//			进入B页面
//		}
//		else{
//			告诉用户请登录
//		}
		
		let isLogin = true;
		if(isLogin){
			//进人B页面
//			this.state.history.push('/one/b');
			this.state.history.push({
				pathname: '/one/b',
				state: {
					id: 'qaz'
				}
			});
		}else{
			alert('请登录');
		}
		
		
	}
}
