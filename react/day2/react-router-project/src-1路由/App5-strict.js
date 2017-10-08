import React, {Component} from 'react'
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'

import './css/app.css'

import One from './pages/One.js'
import Two from './pages/Two.js'
import Three from './pages/Three.js'
import Four from './pages/Four.js'

/*
 * 路由容器
 BrowserRouter
 HashRouter 
 MemoryRouter 
 Router 
 StaticRouter 
 相当于vue中 router-view
 
 
 * */


export default class App extends Component{
	render(){
		
		/* react router中的路由需要包裹整个项目 */
		return (
			<Router>
				<div id="root">
					{/* Route每一个路由的页面 */}
					{/* strict
						当path路径后面多了’/'之后，to的链接也需要后面多'/' */}
					<Route path="/one" strict component={One}/>
					<Route path="/one/" component={One}/>
					<Route path="/one/2"  component={Two}/>
					<Route path="/one/3"  component={Three}/>
					<Route path="/one/4"  component={Four}/>
					
					
					<nav class="tabs">
						{/* Route触发*/}
						<NavLink to="/one/">首页</NavLink>
						<NavLink to="/one/2">热门</NavLink>
						<NavLink to="/one/3">发现</NavLink>
						<NavLink to="/one/4">设置</NavLink>
					</nav>
				</div>
			</Router>
		)
	}
	
	
}

