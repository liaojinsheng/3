import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: function(test){
  	//render：渲染
  	//test: 渲染方法
  	
  	//将el作用的标签替换为App组件。
  	//将vue实例对象，跟el挂载起来。
  	return test(App);
  }
//render: h => h(App)
})
