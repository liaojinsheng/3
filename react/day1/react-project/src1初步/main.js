import React from 'react'
import ReactDOM from 'react-dom'

//引入的组件
//注意： 组件内部类名大写
//	      组件的文件名字随意
//	      引入之后的名字需要首字母大写
import Wrap from './components/Wrap.js'

//render渲染
//参数1：需要渲染的dom结构
//参数2：渲染到的位置 
ReactDOM.render(
	<Wrap></Wrap>,
	document.getElementById('app')
);


