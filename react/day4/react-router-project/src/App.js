import React, {Component} from 'react'
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'

import './css/app.css'

import One from './pages/One.js'
import Two from './pages/Two.js'
import Three from './pages/Three.js'
import Four from './pages/Four.js'

export default class App extends Component{
	constructor(){
		super();
		this.state = {
			pageData: [
				{title: '首页', path: '/', com: One},
				{title: '热门', path: '/two', com: Two},
				{title: '发现', path: '/three', com: Three},
				{title: '设置', path: '/four', com: Four}
			]
		}
	}
	render(){
		let pages = this.state.pageData.map((item, index)=>{
			return (
				<Route key={index} exact={item.path==='/'?true:false} path={item.path} component={item.com}/>
			)
		})
		let tabs = this.state.pageData.map((item, index)=>{
			return <NavLink key={index} exact={item.path==='/'?true:false} to={item.path}>{item.title}</NavLink>
		})
		
		return (
			<Router>
				<div id="root">
				
					{pages}
					
					<nav class="tabs">
						{tabs}
					</nav>
					
				</div>
			</Router>
		)
	}
	
	
}

