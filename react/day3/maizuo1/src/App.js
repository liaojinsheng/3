import React, {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

import SilderBar from './views/common/SilderBar.js'
import AppHeader from './views/common/AppHeader.js'

import Home from './pages/Home.js'
import Movies from './pages/Movies.js'
import Cinema from './pages/Cinema.js'
import Shop from './pages/Shop.js'
import Me from './pages/Me.js'
import Card from './pages/Card.js'

import './css/app.css'



export default class App extends Component{
	constructor(){
		super();
		this.state = {
			showBar: false,
			headerTitle: '卖座电影'
		}
	}
	
	
	render(){
		return (
			<BrowserRouter>
				<div>
					<AppHeader title={this.state.headerTitle} menuHandle={this.menuHandle.bind(this)}/>
					
					<Route path="/" render={({history, location})=>{
						return <SilderBar history={history} 
									      show={this.state.showBar}
									      pathname={location.pathname}
									      hideHandle={this.menuHandle.bind(this)}/>
					}}/>
					
					<Route path="/" exact component={Home}/>
					<Route path="/movies" component={Movies}/>
					<Route path="/cinema" component={Cinema}/>
					<Route path="/shop" component={Shop}/>
					<Route path="/me" component={Me}/>
					<Route path="/card" component={Card}/>
					
				</div>
			</BrowserRouter>
		)
	}
	
	menuHandle(headerTitle){//控制侧边栏显示
		console.log(headerTitle)
		this.setState({showBar: !this.state.showBar});
		if(headerTitle){
			this.setState({headerTitle});
		}
	}
}

