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
			selectIndex: 0
		}
	}
	render(){
		//style  class
		const liStyle = {
			height: '80px',
			borderBottom: '1px solid #ddd',
			display: 'flex'
		};
		
		
		return (
			<div class="wrap">
				<ul class="list">
					{this.state.arr.map((item, index)=>{
						return (
							<li onClick={this.liAction.bind(this, index)} 
							 class={index==this.state.selectIndex?'active':''} key={index} 
							 style={liStyle}>
								<img src={item.img}/>
								<h3>{item.name}</h3>
							</li>
						)
					})}
				</ul> 
			
			</div>
		)
	}
	
	liAction(i){
		this.setState({selectIndex: i});
	}
	
	
	
}



