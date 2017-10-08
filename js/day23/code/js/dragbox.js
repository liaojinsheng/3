



//拖拽
//DragBox
//属性： box
//方法： startMove, moving, stopMove
function DragBox(id){
	//属性
	if (id != undefined) {
		var that = this;
		this.box = document.getElementById(id);
		this.box.onmousedown = function(e){
			e = e || event;
			that.startMove(e.pageX, e.pageY); //开始移动
		}
	}
}

//原型 
//startMove
DragBox.prototype.startMove = function(x, y){
	this.disX = x - this.box.offsetLeft;
	this.disY = y - this.box.offsetTop;
	
	var that = this;
	document.onmousemove = function(e){
		e = e || event;
		that.moving(e.pageX, e.pageY); //移动过程中
	}
	document.onmouseup = function(){
		that.stopMove(); //停止移动
	}
}
//moving
DragBox.prototype.moving = function(x, y){
	console.log("******* DragBox.prototype.moving ********** ");
	this.box.style.left = x - this.disX + "px";
	this.box.style.top = y - this.disY + "px";
}
//stopMove
DragBox.prototype.stopMove = function(){
	document.onmousemove = document.onmouseup = null;
}





