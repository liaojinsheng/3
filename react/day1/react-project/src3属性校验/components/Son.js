import React, {Component} from 'react'

import PT from 'prop-types'

export default class Son extends Component{
	render(){
		return (
			<div class="son">
				<h3>子组件</h3>
				<p>
					{this.props.s}
				</p>
			</div>
		)
	}
}

//属性校验
Son.propTypes = {
	s: PT.string.isRequired,//必须的
	a: PT.array,
	f: PT.func
}


