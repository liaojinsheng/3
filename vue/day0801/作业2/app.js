var vm = new Vue({
	el: '#app',
	data: {
		name: '',
		age: '',
		listData: [],
		btnTitle: '新增',
		modifyIndex: -1
	},
	methods: {
		btnAction(){
			if(this.btnTitle == '新增'){
				this.listData.push({
					name: this.name,
					age: this.age
				});
			}else if(this.btnTitle == '修改'){
				this.listData[this.modifyIndex] = {
					name: this.name,
					age: this.age
				}
				this.btnTitle = '新增';
			}
			this.name = '';
			this.age = '';
			
		},
		deleteAction(index){
			this.listData.splice(index, 1);
		},
		modifyAction(index){
			//修改
			//1.先把内容放在输入框中
			this.name = this.listData[index].name;
			this.age = this.listData[index].age;
			
			//3.将按钮的执行条件修改了
			this.btnTitle = '修改';
			
			//2.需要修改的下标保存起来
			this.modifyIndex = index;
		}
	}
})