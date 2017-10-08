import React, {Component} from 'react'

export default class List extends Component{
	constructor(){
		super();
	}
	
	render(){
		return (
			<div class="list">
				<ul>
				{
					this.props.data.map((item, index)=>{
						return (
							<li key={index}>
								<p>用户名:{item.user}</p>
								<p>密码:{item.psd}</p>
								<p><button onClick={this.deleteAction.bind(this, index)}>删除</button></p>
							</li>
						)
					})
				}
				</ul>
			</div>
		)
	}
	
	deleteAction(index){
		//告诉父级删除的下标
		this.props.deleteHandle(index);
	}
}