###Welcome to use MarkDown

react.js

vue.js

angular.js   1.0 -- 1.5---1.6  ionic
angular.js   2.0
			 4.0
			 

安装angular的命令
npm install -g @angular/cli

更改安装node_modules的命令：ng set -g packageManager=cnpm

创建项目
ng new myapp

-----------------------------------------

angular项目的启动配置文件
	.angular-cli.json
执行流程：
	1.找到mian.ts
	2.启动应用
	platformBrowserDynamic().bootstrapModule(AppModule);
	3.主模块AppModule执行，先加载在运行。
	4.在主模块中的主组件。
 
创建子组件
	ng g component <组件路径/名字>


