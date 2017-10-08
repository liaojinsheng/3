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
				{title: '首页', path: '/one', com: One},
				{title: '热门', path: '/two', com: Two},
				{title: '发现', path: '/three', com: Three},
				{title: '设置', path: '/four', com: Four}
			]
		}
	}
	render(){
		return (
			<Router>
				<div id="root">
					
					<Route path="/" exact component={One}/>
					<Route path="/one" component={One}/>
					<Route path="/two" component={Two}/>
					
					<nav class="tabs">
						<NavLink to={{
							pathname: '/one',
							state: {
								id: 123,
								name: '李四'
							}
						}}>1</NavLink>
						<NavLink to="/two">2</NavLink>
					</nav>
				</div>
			</Router>
		)
	}
	
	
}

