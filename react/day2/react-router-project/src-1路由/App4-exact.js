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
					{/* exact表示路径完整匹配时使用该页面 */}
					<Route path="/" exact component={One}/>
					<Route path="/one" component={One}/>
					<Route path="/two" component={Two}/>
					<Route path="/three" component={Three}/>
					<Route path="/four" component={Four}/>
					
					<nav class="tabs">
						{/* Route触发*/}
						<NavLink to="/one">首页</NavLink>
						<NavLink to="/two">热门</NavLink>
						<NavLink to="/three">发现</NavLink>
						<NavLink to="/four">设置</NavLink>
					</nav>
				</div>
			</Router>
		)
	}
	
	
}

