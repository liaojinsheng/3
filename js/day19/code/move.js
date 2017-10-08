

//获取样式属性值
function getStyleAttr(obj, attr){
	if (window.getComputedStyle){
		return window.getComputedStyle(obj, null)[attr];
	}
	return obj.currentStyle[attr];
}

//缓冲运动
/*
 *  obj: 需要运动的节点
 *  json: {left:52, top:300,width:200, height:200}
 *  fn: 回调函数
 * */
function animate(obj, json, fn){
	
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		
		var bStop = true; //表示全部到达目标值
		
		//遍历json对象中的每个css样式属性键值对
		for (var attr in json) {
			var iTarget = json[attr]; 
			
			//1, current
			var current;
			if (attr == "opacity") { //透明度 
				current = Math.round(getStyleAttr(obj,attr) * 100); 
			}
			else { //left,top,width,height
				current = parseFloat(getStyleAttr(obj, attr)); 
				current = Math.round(current);
			}
			
			//2, speed
			var speed = (iTarget-current) / 8;
			speed = speed>0 ? Math.ceil(speed) : Math.floor(speed); 
			
			//3, 判断临界值
			if (current != iTarget){
				bStop = false; //说明有至少一个样式属性没有到达目标值
			}
			
			//4, 运动
			if (attr == "opacity") {
				obj.style[attr] = (current + speed) / 100;
				obj.style.filter = "alpha(opacity="+ (current+speed) +")";
			}
			else {
				obj.style[attr] = current + speed + "px";
			}
			
		}
		
		//如果bStop=true， 则说明所有样式属性都到达了目标值
		if (bStop) {
			clearInterval(obj.timer); //停止运动了
								
			//回调
			if (fn) {
				fn();
			}			
		}		
		
	}, 30);
	
}


