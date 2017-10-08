

//DragBoxLimit
//
function DragBoxLimit(id){
	DragBox.call(this, id); //对象冒充继承属性
}
DragBoxLimit.prototype = new DragBox(); //原型链继承方法

//moving
//重写了父类的moving方法
DragBoxLimit.prototype.moving = function(x, y){
	console.log("******* DragBoxLimit.prototype.moving ********** ");
	
	var left = x - this.disX;
	var top = y - this.disY;
	if (left<0) {left = 0;}
	if (top<0) {top = 0;}	
	this.box.style.left = left + "px";
	this.box.style.top = top + "px";
}










