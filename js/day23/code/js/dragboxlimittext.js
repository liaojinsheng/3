

//继承DragBoxLimit


function DragBoxLimitText(id){
	DragBoxLimit.call(this, id);
}
DragBoxLimitText.prototype = new DragBoxLimit();


//重写moving
DragBoxLimitText.prototype.moving = function(x, y){
	console.log("******* DragBoxLimitText.prototype.moving ********** ");
	
	//借用父类DragBoxLimit中的moving函数
	DragBoxLimit.prototype.moving.call(this, x, y);
	
	//显示坐标
	this.box.innerHTML = "left:" + this.box.offsetLeft +"px" + ", top:" + this.box.offsetTop + "px";
	
}

