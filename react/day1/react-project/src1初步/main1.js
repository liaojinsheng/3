import React from 'react'
import ReactDOM from 'react-dom'


var tmp = <div>
			<h1>千锋教育</h1>
			<p>用良心做教育</p>
		   </div>;
		   

//render渲染
//参数1：需要渲染的dom结构
//参数2：渲染到的位置 
ReactDOM.render(
	tmp,
	document.getElementById('app')
);


