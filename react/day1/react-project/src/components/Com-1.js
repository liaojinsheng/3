import React, {Component} from 'react'

import '../css/main.css'

export default class Father extends Component{
	constructor(){
		super();
		this.state = {
			arr: [
				{name: 'item1', img: '/static/images/1.png'},
				{name: 'item2', img: '/static/images/2.jpeg'},
				{name: 'item3', img: '/static/images/3.png'},
				{name: 'item4', img: '/static/images/1.png'},
				{name: 'item5', img: '/static/images/2.jpeg'},
				{name: 'item6', img: '/static/images/3.png'}
			],
			isShow: false
		}
	}
	
//	render(){
//		let list = this.state.arr.map((item, index)=>{
//			return <li key={index}>{item.name}</li>
//		});
//		console.log(list);
//		return (
//			<div class="wrap">
//				<ul>
//					{list}
//				</ul>
//			
//			</div>
//		)
//	}
	render(){
		//v-if
		let boxEle = this.state.isShow? <div class="box"></div>: null;
		
		//v-show
		let boxStyle = this.state.isShow? {} : {display:'none'};
		
		return (
			<div class="wrap">
				{boxEle}
				<div class="box" style={boxStyle}></div>
				<button onClick={this.toggle.bind(this)}>按钮</button>
				
				<ul>
					{/*v-for*/}
					{this.state.arr.map((item, index)=>{
						return <li key={index}>{item.name}</li>
					})}
				</ul> 
			
			</div>
		)
	}
	
	toggle(){
		this.setState({isShow: !this.state.isShow}, ()=>{
			console.log(this.state.isShow);
		});
		
	}
	
	
	
}



