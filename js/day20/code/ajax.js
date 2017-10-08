

//创建xhr对象
function createXHR(){
	if (window.XMLHttpRequest) {
		return new XMLHttpRequest(); //支持IE7+，非IE
	}
	return new ActiveXObject("Microsoft.XMLHTTP"); //支持IE6
}










