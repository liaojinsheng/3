


//typeof : 判断基本类型
//instanceof: 判断对象属于哪个类

//var d = new Date()
//console.log(d instanceof Date);

//添加cookie /修改cookie
function setCookie(name, value, expires, path){
	//name=value
	var str = encodeURIComponent(name) +"="+ encodeURIComponent(value);
	
	//expires
	if (expires && expires instanceof Date){
		str += ";expires=" + expires;   //name=value;expires=日期
	}
	//path
	if (path){
		str += ";path=" +path; //name=value;expires=日期;path=
	}
	document.cookie = str;
	//console.log(str);  //当前的cookie字符串
	//console.log(document.cookie); //所有的cookie
	
	return decodeURIComponent(document.cookie);
}


//获取cookie
//"username=wangwu; name1=zhangsan; name2=赵六"
function getCookie(name){
	var str = decodeURIComponent(document.cookie);
	
	var arr = str.split("; ");  //["username=wangwu", "name1=zhangsan", "name2=赵六"];
	for (var i=0; i<arr.length; i++){
		var str2 = arr[i]; //"username=wangwu"
		var arr2 = str2.split("="); //["username", "wangwu"]
		if (arr2.length >=2 ) {
			if (arr2[0] == name) {
				return arr2[1]; //要返回的值
			}
		}
	}
	return "";
}

//删除cookie
function removeCookie(name){
	var d = new Date("2000-02-02");
	document.cookie =  encodeURIComponent(name) + "=;expires=" + d;
	return decodeURIComponent(document.cookie);
}







