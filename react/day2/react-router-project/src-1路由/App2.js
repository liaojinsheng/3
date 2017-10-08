import React, {Component} from 'react'
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'

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
		/* react router中的路由需要包裹整个项目 */
		return (
			<Router>
				<div id="root">
					{/* Route每一个路由的页面 */}
					{
						this.state.pageData.map((item, index)=>{
							return <Route key={index} path={item.path} component={item.com}/>
						})
					}
					
					<nav class="tabs">
						{/* Route触发*/}
						{
							this.state.pageData.map((item, index)=>{
								return <Link key={index} to={item.path}>{item.title}</Link>
							})
						}
					</nav>
				</div>
			</Router>
		)
	}
	
	
}

