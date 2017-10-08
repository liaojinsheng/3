import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class AppHeader extends Component{
	
	render(){
		return (
			<header class="app-header">
				
				<span class="iconfont icon-menu" onClick={this.menuAction.bind(this)}></span>
				<h1 class="title">{this.props.title}</h1>
				<p class="city iconfont icon-arrow-down">深圳</p>
				<Link to="/me"><span class="iconfont icon-person"></span></Link>
				
			</header>
		)
	}
	
	menuAction(){
		this.props.menuHandle();
	}
	
}
