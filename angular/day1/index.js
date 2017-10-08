/**
 * Created by Administrator on 2017/8/28.
 */
var name = 'zhangsan';
function test() {
    console.log(name);
}
test();
var testArrowFun = function (name) {
    console.log(name);
};
testArrowFun(name);
var testArrowFun2 = function (name) {
    var _this = this;
    this.name = name;
    setTimeout(function () {
        console.log(_this.name);
    }, 2000);
};
testArrowFun2(name);
var arr = [1, 2, 3, 4, 5];
console.log.apply(console, arr);
