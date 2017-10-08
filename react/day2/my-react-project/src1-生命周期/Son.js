import React, {Component} from 'react'

export default class Son extends Component{
	constructor(){
		super();
		
		console.log('constructor....');
		
		this.state = {
			sonData: '子组件数据',
			val: '123',
			val2: 'qaz'
		}
	}
	
	render(){
		console.log('render....');
		
		return (
			<div>
				<h1>这是子组件--{this.state.sonData}</h1>
				<p>{this.props.data}</p>
				<p>info1</p>
				<p ref="p2">info2</p>
				<p>info3</p>
				<p>info4</p>
				<button onClick={this.btnAction.bind(this)}>按钮</button>
				<button onClick={this.log.bind(this)}>打印</button>
			</div>
		)
	}
	
	log(){
		console.log('打印。。。。')
		console.log(this.props)
		console.log(this.state)
	}
	btnAction(){
//		console.log('按钮点击了'+this.state.sonData);
//		this.state.sonData = '123';
		
		this.setState({sonData: '123'});
		
	}
	
	componentWillMount(){
		console.log('componentWillMount....');
		console.log(this.props.data);
		console.log(this.state.sonData);
		this.setState({val: this.props.data});
		
		console.log(this.refs.p2);
	}
	
	componentDidMount(){
		console.log('componentDidMount....');
		
		console.log(this.refs.p2);
		var p2 = this.refs.p2;
		p2.style.background = 'red';
		p2.style.height = '50px';
		console.log(p2.offsetHeight);
		
	}
	
	componentWillReceiveProps(...rest){
		console.log('componentWillReceiveProps....');
//		console.log(this.props.data);
//		console.log(rest);
		
	}
	shouldComponentUpdate(props, state){
		//props: 外部接收到的新的props
		//this.props: 外部接收到的原来props
		
		//state: 内部新的数据
		//this.state: 内部原来的数据
		console.log(this.state)
		console.log(state)
		
		console.log('shouldComponentUpdate....');
		return false;
	}
	componentWillUpdate(){
		console.log('componentWillUpdate....');
		
	}
	componentDidUpdate(){
		console.log('componentDidUpdate....');
		
	}
	componentWillUnmount(){
		console.log('componentWillUnmount.....');
	}
}


/*
 组件的创建过程： Mounting
	constructor()  构造函数
	componentWillMount()  将要创建组件
	render()  渲染组件结构
	componentDidMount()  创建完成
	
	componentWillMount():
		在这个函数中才开始可以访问props
		即如果props上的数据需要赋值给state，就在这个函数上执行setState()进行赋值
		
	componentDidMount():
		在这个函数之后组件才有结构，那么dom结构操作都是在这个函数之后才能起作用。如ref
	
组件数据更新：Updating (state, props)
	componentWillReceiveProps()  将要接收到外部数据props
	shouldComponentUpdate()  是否应该更新dom结构
	componentWillUpdate()  将要更新
	render()  渲染组件结构
	componentDidUpdate()  已经更新完毕
	
	state更新
		情况1：
		shouldComponentUpdate() return true
		componentWillUpdate()
		render()
		componentDidUpdate()
		情况2：
		shouldComponentUpdate() return false
		
	props更新	
		情况1：
		componentWillReceiveProps()
		shouldComponentUpdate() return false
		情况2：
		componentWillReceiveProps()
		shouldComponentUpdate() return true
		componentWillUpdate()
		render()
		componentDidUpdate()
	
	componentWillReceiveProps()
		在这个函数的参数能够接收到改变后的数据，但是this.props还是原数据
	shouldComponentUpdate()
		这个函数是控制组件dom是否应该更新，数据是一定会发生变化的。
		在这个函数中可以优化组件更新

销毁：Unmounting
	componentWillUnmount()  将要销毁
		释放内存
 * 
 * */






