###Welcome to use MarkDown
react   Facebook开发的框架
MVC     
MVVM

react相当于MVC中的V：view
数据单向绑定（比较不同，使用diff算法比较不同，进行修改）
组件化




组件
内部数据state初始化
	constructor(){
		super();
		this.state = {
			title: '千锋教育',
			info: '用良心做教育'
		};
	}
内部数据state在模板中访问
	<h1>{this.state.title}</h1>
修改state
	this.setState({title: '需要修改的值'});

事件
	事件需要写出驼峰式写法
	<button onClick={this.btnAction}>按钮</button>
	
	自定义事件this指向为null
	<button onClick={this.btnAction.bind(this)}>按钮</button>

数据单向绑定
	需要自己实现输入框的onChange事件
	<input ref="in" type="text" value={this.state.title} 
	onChange={this.inputChange.bind(this)}/>
	
	输入框change事件的实现：
		//获得输入框this.refs.in
		//获得value值this.refs.in.value
		var val = this.refs.in.value;
		//修改state
		this.setState({title: val});


父子组件传值
1.父向子级传递数据
	属性传递
	<Son data={this.state.data}/>
	子组件使用
		this.props.data
1.子向父级传递数据
	自定义事件传递给子级的属性，子级调用属性()传递数据
	<Son send={this.getData.bind(this)}/>
	子级调用
	this.props.getData('需要传递的数据');


属性校验
import PT from 'prop-types'
//校验
Son.propTypes = {
	s: PT.string.isRequired,//必须的
	a: PT.array,
	f: PT.func
}


//在jsx语法中的dom控制
遍历
	<ul>
		{this.state.arr.map((item, index)=>{
			return (
				<li>
					{item}
				</li>
			)
		})}
	</ul> 

标签和标签的显示控制
	let boxEle = this.state.isShow? <div class="box"></div>: null;	
	dom展示:
		<div>
			{boxEle}
		</div>
	
	let boxStyle = this.state.isShow? {} : {display:'none'};
	dom展示:
		<div class="box" style={boxStyle}></div>


style的写法：
	const boxStyle = {
			height: '80px',
			borderBottom: '1px solid #ddd',
			display: 'flex'
		};
	<div style={boxStyle}></div>

class的写法：
	当成普通属性绑定
	<div class={index==this.state.selectIndex?'active':''}></div>




组件生命周期
react-router
redux





